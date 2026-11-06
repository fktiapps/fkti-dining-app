// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 10.
//   + 日本酒とお料理 お湯 Nihonshu to Oryori Oyu (warm-sake and obanzai counter on Kawaramachi-Matsubara, since 2024; core)
//   + とり新 Tori Shin (Gion Nawate oyakodon at lunch, yakitori at night — the casual shop of the Meiji-era chicken house 鳥新; core)
//   + 柊家旅館 Hiiragiya Ryokan (ryokan kaiseki, dining-only by arrangement; notable)
//   + MOKO (Chef Alexey Moko's French in a Marutamachi townhouse, Michelin one star per reviews; notable)
//   Picked 2026-11-05 after batch 9 was integrated. `queue.mjs kyoto-missed next core 200`: 焼肉ぽんが 京都河原町店 26045041
//   skipped (chain); 日本酒とお料理 お湯 26041975; とり新 26006671. `next notable 200`: 柊家旅館 26002921 and MOKO 26039491.
//   None is in data/kyoto.json: grep by name (お湯/Oyu, とり新/鳥新/Tori Shin, 柊家/Hiiragiya, MOKO) and address (清水町282,
//   祇園縄手四条上ル, 中白山町277, 玉植町235) found none. Sister shops not in data: 鳥新 (the mizutaki house, same family),
//   柊家 別館 (Tabelog 26000454).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045041', '焼肉ぽんが 京都河原町店: branch of the Tokyo yakiniku brand 焼肉ぽんが — Tabelog shop text: "A popular yakiniku brand from Tokyo opens its first store in Kyoto"; shops found on 2026-11-05 include 目黒本店, 田町店, 江ノ島店, 名古屋伏見店 (opened 2 February 2026, bestcalendar.jp/press/106669), すすきの店 (tablecheck.com/ko/ponga-susukino), 横浜GEMS店, 心斎橋店 (Tabelog 27145227) and this one — 5 or more, a chain.');

// ================================================================ 日本酒とお料理 お湯
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041975/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '22:00']);
  put({
    id: 'kyoto_nihonshu_to_oryori_oyu', name: '日本酒とお料理 お湯 (Nihonshu to Oryori Oyu)', category: 'OMNI',
    lat: 34.999770, lng: 135.767856, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, simmered pork cartilage with ponzu, spring rolls, tempura and keema curry; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: obanzai and snacks with fish (shirasu, herring, sardines), pork and tuna; the appetiser is shirasu (2026 reviews).',
    hours_raw: '14:00–22:00, last food order 21:00, every day; closed irregularly (Tabelog). Afternoon drinking from 14:00 is a draw (Tabelog shop text). Reservations accepted (Tabelog; March 2026). An appetiser (otoshi) charge (Tabelog). 15 seats: 6 at the counter and 3 tables; non-smoking, with a smoking spot outside; children welcome (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), no e-money or QR (Tabelog). On Kawaramachi-dori north of Matsubara; 10 min walk from Kiyomizu-Gojo or Kyoto-Kawaramachi stations (Tabelog). Opened 12 September 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori north of Matsubara — 10 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'Warm-sake izakaya — the name means "hot water", for sake that warms like a bath — with over 30 sakes that change often, and seasonal obanzai and sashimi from the central market (Tabelog shop text; September 2026) · signature pork cartilage simmered soft, with grated daikon and ponzu (Tabelog shop text; March 2026) · assorted snacks of about eight kinds ¥1,500; ayu and cucumber spring rolls with yogurt sauce ¥1,200 (July 2026) · shira-ae with strawberry and black beans, saba kizushi, sardine and ginger rolls, firefly squid and udo tempura, potato salad with nuts and gorgonzola (March 2026) · herring with eggplant, tomatoes simmered with dried sardines, marinated bluefin, seared bonito; keema curry to finish (2026 reviews) · sakes such as Kikuhime, Yuho, Gikyō; most sake chosen by the owner (2026 reviews)',
    website: null, gmaps: gm('日本酒とお料理 お湯 京都'), menu_url: null,
    notes: "[Sake izakaya · Kawaramachi-Matsubara, warm sake from 14:00] A small, bright modern counter on Kawaramachi south of Shijo, run by a woman owner who trained at Manzara-tei, opening at 14:00 for afternoon drinking: over 30 sakes, many served warm — the name, \"hot water\", is for sake that warms you like a bath — with careful obanzai, sashimi and the signature soft-simmered pork cartilage with ponzu. Reviewers praise the home-style cooking and let the owner choose their sake. An otoshi charge applies. Open daily from 14:00 to 22:00.",
    chef_bio: { chef_name: null, roles: ['Owner (a woman, unnamed), who cooks and chooses the sake'], origin: null,
      background: 'Per a May 2026 review: run by a female owner and staff, both from Manzara-tei. A September 2026 review explains that the owner named the shop hoping guests would feel warmed from the inside by kanzake, as if soaking in hot water; an October 2026 visitor saw the owner managing everything alone; a July 2026 regular now chats with the owner and staff. The shop was listed in "Japanese Sake dancyu 2026" (March 2026 review). Opened 12 September 2024 (Tabelog).',
      philosophy: 'Per the Tabelog shop text: warm sake that comforts you like a hot bath.',
      specialty: 'Kanzake; simmered pork cartilage; obanzai.',
      anecdotes: [
        { text: '"In my 65 years of life, I\'ve been to many restaurants, but for some reason, this one feels particularly comfortable." — July 2026.', source: R + 'B523334438/' },
        { text: '"I appreciated the thoughtful gesture of splitting one serving into portions depending on the dish\'s volume" — March 2026.', source: R + 'B524326009/' },
        { text: '"Even while managing everything alone, the quality of the menu was remarkable." — October 2026.', source: R + 'B536753009/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 居酒屋、下京区河原町通松原上る清水町282、清水五条駅・京都河原町駅から徒歩10分、毎日14:00〜22:00 (料理 L.O. 21:00)、不定休、予約可、お通し代あり、15席 (カウンター6、テーブル3)、禁煙 (店外に喫煙所)、子供可、カード可、電子マネー・QR 不可、2024年9月12日オープン、店舗紹介: 湯につかるように温まる燗酒、中央市場の旬の刺身とおばんざい、豚なんこつの煮込み、30種以上の日本酒、14時からの昼飲み。口コミ (2026年3〜10月、英語): 女性の店主とスタッフ (ともに Manzara-tei 出身)、肴の盛り合わせ8種1,500円、鮎ときゅうりの春巻き1,200円、いちごと黒豆の白和え、鯖のきずし、ほたるいかとうどの天ぷら、にしんなす、キーマカレー、燗酒、Japanese Sake dancyu 2026 に掲載、店主一人で切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B499069182/', R + 'B523334438/', R + 'B524326009/', R + 'B524709056/', R + 'B526120569/', R + 'B526970164/', R + 'B529171446/', R + 'B531643697/', R + 'B535754992/', R + 'B536753009/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Let the owner pick the sake; small counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通松原上る清水町282',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999770, 135.767856); cross-checked: GSI 京都府京都市下京区清水町282番地 (lot) 5 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526970164/'],
    price_note: 'No menu read; prices from a July 2026 review; an otoshi charge applies.', last_checked: TODAY, items: [
      it('', '', 'Assorted snacks (about 8 kinds)', '¥1,500', 'Small dishes', 'ask', 'no', 'July 2026.', 'assorted_snacks'),
      it('', '', 'Ayu and cucumber spring rolls with yogurt sauce', '¥1,200', 'Small dishes', 'no', 'no', 'July 2026.', 'ayu_spring_rolls'),
      it('', '', 'Simmered pork cartilage with grated daikon and ponzu', '', 'Signature', 'ask', 'no', '', 'pork_nankotsu'),
    ] }, {
    cuisine: '燗酒の居酒屋。店名は湯につかるように温まる酒から。30種以上の日本酒はよく入れ替わり、中央市場の季節のおばんざいと刺身 (食べログの店舗紹介、2026年9月)・名物の豚なんこつのやわらか煮、大根おろしとポン酢 (食べログの店舗紹介、2026年3月)・肴の盛り合わせ8種ほど1,500円、鮎ときゅうりの春巻きヨーグルトソース1,200円 (2026年7月)・いちごと黒豆の白和え、鯖のきずし、いわしと生姜の巻物、ほたるいかとうどの天ぷら、ナッツとゴルゴンゾーラのポテトサラダ (2026年3月)・にしんなす、トマトのじゃこ煮、本まぐろの漬け、かつおのたたき、締めのキーマカレー (2026年の口コミ)・日本酒は Kikuhime、Yuho、Gikyō など。多くは店主のおすすめで (2026年の口コミ)',
    neighborhood: '松原の北の河原町通。京都河原町駅から徒歩10分',
    gf_detail: '要確認。おばんざい、刺身、ポン酢の豚なんこつ、春巻き、天ぷら、キーマカレー。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。おばんざいや肴にしらす、にしん、いわし、豚、まぐろ。お通しはしらす (2026年の口コミ)。',
    notes: '[日本酒の居酒屋・河原町松原、14時からの燗酒] 四条の南、河原町通の明るくモダンな小さなカウンター。Manzara-tei 出身の女性の店主が営み、14時から昼飲みができる。30種以上の日本酒の多くを燗で。店名「お湯」は湯につかるように温まる酒から。ていねいなおばんざい、刺身、名物の豚なんこつのやわらか煮。家庭的な味が好評で、日本酒は店主に任せる客も多い。お通し代あり。毎日14時〜22時。',
  });
}

// ================================================================ とり新
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006671/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://torishin.my.coocan.jp/index1.htm'; const HIST = 'http://torishin.my.coocan.jp/sub1.htm';
  const OYAKO = 'http://torishin.my.coocan.jp/oyako/index.htm'; const IG = 'https://www.instagram.com/ktorishin/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_torishin_nawate', name: 'とり新 (Tori Shin)', category: 'OMNI',
    lat: 35.005444, lng: 135.773009, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oyakodon in a dashi-and-tare sauce at lunch; yakitori with tare or salt at night; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken house — oyakodon of chicken and egg at lunch, chicken skewers and chicken soup at night (official site; 2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (oyakodon only: large, regular, small or takeaway), dinner 18:00–22:00; closed Thursday (Tabelog). No reservations at lunch; dinner can be booked (Tabelog). Lunch queues are common, though some reviewers walked straight in (2025 reviews). Cash only; smoking allowed (Tabelog). 14 seats: 6 at the counter and two tables (Tabelog). On Nawate (Yamato-oji) north of Shijo, at the north end of Yamato-bashi over the Shirakawa; 3 min walk from Gion-Shijo Stn (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nawate by the Shirakawa, north of Shijo in Gion — 3 min walk from Gion-Shijo Stn',
    cuisine: 'Lunch: oyakodon only — local chicken in an egg-and-dashi topping finished firm round a raw yolk in the centre, Kujo or Kamo green onion, small-grain Tsuruga Koshihikari, home-made pickles and a soup of the season; the miso is made in-house (official site; 2025–2026 reviews) · Night: assorted skewers omakase ¥2,200 — chicken, gizzard, wings, lotus root, shiitake, shishito, asparagus — with chicken liver to start and chicken soup to finish (March 2026; September 2025) · Asahi Super Dry, medium bottle ¥770; Asahi "Yawaragi" wine; sansho from Shichimiya (official site; March 2026) · the family’s main house, 鳥新, serves kashiwa mizutaki and chicken sukiyaki in private rooms with sunken kotatsu (official site; November 2025)',
    website: SITE, gmaps: gm('とり新 京都 縄手 親子丼'), menu_url: OYAKO,
    notes: "[Yakitori & oyakodon · Gion Shirakawa, a Meiji chicken family's casual shop] The casual counter of 鳥新, a Gion chicken house whose family traces itself to the mid-Meiji era and whose earlier shops appear in Ryōma ga Yuku and Tanizaki. At lunch it serves only oyakodon — the old geisha-delivery recipe, egg set round a raw yolk with Kujo onion on Tsuruga rice, with house pickles and miso soup; at night, a ¥2,200 skewer omakase with chicken soup. Cash only; smoking allowed; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner, fourth generation by the family’s count (official site); unnamed'], origin: null,
      background: 'Per the official site of 鳥新: founded about 120 years ago in the mid-Meiji era, with the present owner "said to be the fourth generation" though without firm proof; related 鳥新 shops once stood by Shijo Kobashi, on Kawaramachi, Teramachi and Shinkyogoku, and the family traces bird dealing back to Oda Nobunaga’s time; the Shijo Kobashi shop is thought to be the one in the last scene of Shiba Ryōtarō’s "Ryōma ga Yuku"; Tanizaki Jun’ichirō wrote of the Teramachi shop (Bungei Shunjū, 1924) and ate at Nawate; mizutaki came to dominate over sukiyaki from about Showa 40. The oyakodon was made for delivery to geiko, maiko and Gion households from the late Meiji, delivery ended around 1955, and the dish was revived for lunch at とり新 after some fifty years (official site). An August 2025 reviewer found the owner a person of few words who wore very tall geta; an April 2026 reviewer calls the house Meiji-era.',
      philosophy: 'Per the official site: "町の普通の店" — an ordinary neighbourhood shop, a secret little space in Kyoto.',
      specialty: 'Oyakodon; yakitori omakase.',
      anecdotes: [
        { text: '"The owner, wearing incredibly high geta (traditional wooden sandals), brought it to me...!" The owner seemed a person of few words, but warned of the weather on the way out. — August 2025.', source: R + 'B515704282/' },
        { text: 'A March 2026 diner took the ¥2,200 skewer omakase with a medium Super Dry (¥770) and found it surprisingly affordable for Gion, with a friendly, chatty owner.', source: R + 'B524336336/' },
        { text: '"The donburi (rice bowl) was a classic oyakodon, with the eggs cooked to perfection" — October 2026.', source: R + 'B537982101/' },
      ],
      japanese_sources_summary: '公式サイト (torishin.my.coocan.jp、鳥新): 創業は約120年前の明治中頃、四代目と一応言われている、四条小橋・河原町・寺町・新京極にも鳥新があった、織田信長入洛の頃から鳥屋、司馬遼太郎『竜馬がゆく』の最後の場面の小橋の店、谷崎潤一郎『上方の食ひもの』(文藝春秋1924年) の寺町の店、縄手通り大和橋北詰東側、昭和40年過ぎから水だきが主流、水だき・すき焼きの2コース、とり新は昼に親子丼: 九条か賀茂の青葱、福井・敦賀産のコシヒカリ、真ん中に黄身、卵約2.5個、自家製の漬物と味噌、明治末〜大正初めから出前、昭和30年ごろ出前を廃止、約50年ぶりに営業、焼き鳥の山椒は七味家、アサヒスーパードライ、Instagram ktorishin。食べログ: 焼き鳥・鶏料理・親子丼、東山区祇園縄手四条上ル、祇園四条駅から徒歩3分、昼12:00〜14:00 (親子丼のみ、予約不可)・夜18:00〜22:00、木曜休み、14席、カード・電子マネー・QR 不可、喫煙可。口コミ (2025年6月〜2026年10月、英語): 親子丼、行列、高い下駄の店主、串のおまかせ2,200円、中瓶770円、鶏スープ、掘りごたつの個室で水炊き (2025年11月)。',
      confidence: 'medium', sources: [TB, SITE, HIST, OYAKO, IG, R + 'B503390575/', R + 'B511689273/', R + 'B514000669/', R + 'B515043906/', R + 'B515704282/', R + 'B516985309/', R + 'B524336336/', R + 'B526156283/', R + 'B531980456/', R + 'B537982101/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is oyakodon only — sit and it comes; cash only; smoky.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園縄手四条上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005444, 135.773009); the address has no lot number and GSI matches only 京都府京都市東山区 (ward), so the pin rests on the Tabelog point alone (GSI only, no OSM); the official site places it at the north end of Yamato-bashi, east side; nearest record kyoto_gion_mikaku at 47 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524336336/', OYAKO],
    price_note: 'Lunch oyakodon price not read; night prices from a March 2026 review.', last_checked: TODAY, items: [
      it('親子丼', '', 'Oyakodon (large, regular or small)', '', 'Lunch', 'ask', 'no', 'With pickles and soup; takeaway too.', 'oyakodon'),
      it('', '', 'Assorted skewers omakase', '¥2,200', 'Dinner', 'ask', 'no', 'March 2026.', 'skewer_omakase'),
      it('', '', 'Asahi Super Dry, medium bottle', '¥770', 'Drinks', '', '', 'March 2026.', 'beer'),
    ] }, {
    cuisine: '昼は親子丼だけ: 地鶏を卵とだしでとじ、真ん中に生の黄身、九条か賀茂の青葱、粒の小さめの敦賀のコシヒカリ、自家製の漬物と季節のお汁。味噌も自家製 (公式サイト、2025〜2026年の口コミ)・夜は串のおまかせ2,200円: もも、砂肝、手羽、れんこん、椎茸、ししとう、アスパラ。最初に鶏レバー、締めに鶏スープ (2026年3月、2025年9月)・アサヒスーパードライ中瓶770円、アサヒのワイン「やわらぎ」、山椒は七味家 (公式サイト、2026年3月)・本家の鳥新は、掘りごたつの個室でかしわの水だきと鶏のすき焼き (公式サイト、2025年11月)',
    neighborhood: '祇園、四条の北、白川沿いの縄手。祇園四条駅から徒歩3分',
    gf_detail: '要確認。昼はだしとたれの親子丼、夜はたれか塩の焼き鳥。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の店で、昼は鶏と卵の親子丼、夜は鶏の串と鶏スープ (公式サイト、2025〜2026年の口コミ)。',
    notes: '[焼き鳥と親子丼・祇園白川、明治からの鶏屋の気軽な店] 明治中頃からと伝える祇園の鶏料理屋、鳥新の気軽なカウンター。かつての鳥新は『竜馬がゆく』や谷崎潤一郎の文章にも登場する。昼は親子丼だけ: 芸舞妓への出前の頃からの作り方で、真ん中の黄身のまわりを固めにとじ、九条ねぎと敦賀の米、自家製の漬物と味噌汁。夜は2,200円の串のおまかせと鶏スープ。現金のみ、喫煙可、木曜休み。',
  });
}

// ================================================================ 柊家旅館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002921/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.hiiragiya.co.jp/'; const FAQ = SITE + 'faq/'; const ABOUT = SITE + 'about/'; const CUISINE = SITE + 'cuisine/';
  put({
    id: 'kyoto_hiiragiya_ryokan', name: '柊家旅館 (Hiiragiya Ryokan)', category: 'OMNI',
    lat: 35.010343, lng: 135.765676, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki; the inn handles food allergies and vegetarian requests "as far as possible" with three days’ notice (official site FAQ); no gluten-specific information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetarian requests are handled as far as possible with three days’ notice; halal and kosher cannot be done (official site FAQ). The standard kaiseki uses fish, crab and dashi (2025–2026 reviews).',
    hours_raw: 'A ryokan: dinner starts at 18:00 or 19:00 and breakfast at 8:00 or 9:00 for guests (official site FAQ). Dining without staying is possible by reservation — dinner from two people, lunch for groups of ten or more outside busy periods (official site FAQ; Tabelog says lunch from 15); 10% service charge for meals only (Tabelog). Allergies and vegetarian requests three days ahead; special orders five days ahead (official site FAQ). Meals in the guest room, a shared dining room or a hall; tables and chairs on request (official site; 2024 review). Cards (VISA, Master, JCB, AMEX, Diners) (official site). Corkage charged on brought drinks (official site). Phone 8:00–21:00 (official site). On Fuyacho north of Aneyakoji, just off Oike-dori; about 4 min walk from Kyoto Shiyakusho-mae Stn (official site; August 2026).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho north of Aneyakoji, off Oike-dori — 4 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto kaiseki of local seasonal ingredients with chosen tableware, "tradition with a new breeze" (official site) · a November 2025 dinner: Daidokutofu with welsh onion and vinegar miso, ginkgo, Matsuba crab soup …; an August 2025 dinner: sea urchin, abalone, hamo, scaled ayu, ayu tsukemen-style udon, hairy crab · the head chef’s recent soba (August 2024) · breakfast of Kyoto yudofu, grilled fish, clay-pot rice and house pickles, or Western on request (official site) · seasonal extra dishes such as wild hamo otoshi and wild ayu (official site, summer 2026) · New Year sea bream and zōni (January 2025) · dining-only bills ¥20,000–50,000 (2024–2026 reviews)',
    website: SITE, gmaps: gm('柊家旅館 京都'), menu_url: CUISINE,
    notes: "[Ryokan kaiseki · Fuyacho, one of Kyoto's grand old inns] A historic inn near Oike, in the inn trade since 1861 (the house since 1818), whose holly crest is on everything and whose guests have included Kawabata Yasunari: seasonal Kyoto kaiseki in your room or a dining room, with fine old tableware. You can come just to eat — dinner for two or more, lunch for groups of ten — by booking ahead; allergies and vegetarian requests need three days' notice. Expect ¥20,000–50,000 a head. A 2026 Michelin Key hotel and Relais & Châteaux member.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed in the sources)'], origin: null,
      background: 'Per the official site: in 1818 the first 庄五郎 came from Fukui and set up in transport and seafood here; the name comes from the holly-shrine 比良木神社 at Shimogamo; the second generation, a sword-fitting craftsman, made the inn the main business in 1861; guests have included Bakumatsu activists, nobility and men of letters, and the site carries Kawabata Yasunari’s essay on the inn; registered tangible cultural property; selected as a 2026 Michelin Key hotel (September 2026) and joined Relais & Châteaux (July 2026). Reviewers give the founding as 1850 (August 2026) and call it one of Kyoto’s three great ryokan; a July 2026 reviewer mentions guests such as Charlie Chaplin and Mishima Yukio.',
      philosophy: 'Per the official site: 来者如帰 — "may you feel as if you had come home".',
      specialty: 'Seasonal Kyoto kaiseki; Kyoto breakfast with yudofu.',
      anecdotes: [
        { text: '"Dining Only: First Meal Celebration … As expected from a ryokan, the treatment for children was exceptional." — December 2024.', source: R + 'B510799057/' },
        { text: '"The hotel accommodated my allergies and provided excellent alternatives using fish." — January 2024.', source: R + 'B477739083/' },
        { text: '"A maiko also came to visit, making our dining experience even more enjoyable." — October 2026.', source: R + 'B537415771/' },
      ],
      japanese_sources_summary: '公式サイト (hiiragiya.co.jp): 来者如帰、文政元年 (1818) 福井から上った初代庄五郎が運送業・海産物商、屋号は下鴨神社境内の比良木神社から、文久元年 (1861) に宿を本業に、国登録有形文化財、川端康成の寄稿文、夕食は京懐石、朝食は湯豆腐・焼き魚・土鍋ご飯・自家製漬物 (洋食も可)、夕食18:00か19:00開始、食物アレルギー・ベジタリアンは3日前までに可能な範囲で、ハラル・コーシャは不可、特別注文は5日前まで、食事のみの利用は夕食2名から・昼食は繁忙期以外10名以上、持ち込みは抜栓料、カード可、2026年ミシュランキーホテル、ルレ・エ・シャトー加盟 (2026年7月)、別注の天然鱧・天然鮎 (2026年夏)。食べログ: 旅館・日本料理、中京区麩屋町姉小路上ル中白山町277、完全予約制、料理のみはサービス料10%、昼食15名以上、48席 (広間)、個室あり。口コミ (2024年1月〜2026年10月、英語): Kyoto Gosan-ke、創業1850年、夕食は部屋か食事処、蕎麦、鱧、鮎、毛蟹、Matsuba crab、食事のみのお食い初め、舞妓、川端康成の部屋。',
      confidence: 'medium', sources: [TB, SITE, FAQ, ABOUT, CUISINE, R + 'B477739083/', R + 'B492463456/', R + 'B497659576/', R + 'B501380234/', R + 'B510799057/', R + 'B511515085/', R + 'B517739912/', R + 'B534350753/', R + 'B535010264/', R + 'B537415771/'] },
    cultural_comfort: { level: 'english', note: 'English website; book ahead (dinner from two diners); allergies and vegetarian requests three days ahead.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Handles food allergies and vegetarian requests as far as possible with three days’ notice; no halal or kosher (official site FAQ).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町姉小路上ル中白山町277',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 news) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010343, 135.765676); cross-checked: GSI 京都府京都市中京区中白山町277番地 (lot) 9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FAQ, R + 'B510799057/'],
    price_note: 'No meal prices published on the pages read; dining-only bills ¥20,000–50,000 in 2024–2026 reviews; 10% service for meals only.', last_checked: TODAY, items: [
      it('夕食', '', 'Kyoto kaiseki dinner (dining only, from two people)', '', 'Dinner', 'ask', 'ask', 'Book ahead.', 'kaiseki_dinner'),
      it('朝食', '', 'Kyoto breakfast with yudofu (guests)', '', 'Breakfast', 'ask', 'no', '', 'breakfast'),
    ] }, {
    cuisine: '地の旬の食材と器の取り合わせの京懐石。伝統の中に新しい風 (公式サイト)・2025年11月の夕食: Daidoku 豆腐とねぎの酢味噌、銀杏、Matsuba crab の椀ほか、2025年8月の夕食: ウニ、鮑、鱧、鮎の鱗焼き、鮎のつけ麺風うどん、毛蟹・料理長が力を入れる蕎麦 (2024年8月)・朝食は京の湯豆腐、焼き魚、土鍋ご飯、自家製漬物、希望で洋食も (公式サイト)・別注の天然鱧の落としや天然鮎 (公式サイト、2026年夏)・正月の鯛と雑煮 (2025年1月)・食事のみで1人20,000〜50,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '御池通のすぐ北、姉小路の北の麩屋町。京都市役所前駅から徒歩4分',
    gf_detail: '要確認。京懐石。食物アレルギーやベジタリアンは3日前までに知らせれば可能な範囲で対応 (公式サイトのよくある質問)。グルテンについての情報はない。',
    vegan_detail: '要確認。ベジタリアンは3日前までに知らせれば可能な範囲で対応、ハラルとコーシャは不可 (公式サイトのよくある質問)。通常の懐石は魚、蟹、だし (2025〜2026年の口コミ)。',
    notes: '[旅館の懐石・麩屋町、京都の老舗旅館] 御池近くの老舗旅館。1861年から宿を営み (家は1818年から)、柊の紋はあらゆるところに、客には川端康成も。季節の京懐石を部屋か食事処で、古い器とともに。泊まらず食事だけも可能: 夕食は2名から、昼食は10名から、予約制。アレルギーやベジタリアンは3日前までに。1人20,000〜50,000円ほど。2026年ミシュランキーホテル、ルレ・エ・シャトー加盟。',
  });
}

// ================================================================ MOKO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039491/'; const R = TB + 'dtlrvwlst/';
  const L = ['12:00', '14:30'], D = ['18:00', '22:00'];
  put({
    id: 'kyoto_moko_french', name: 'MOKO', category: 'MOM_AND_POP',
    lat: 35.016869, lng: 135.757159, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Course French with homemade sourdough campagne at every meal, sauces built on bread, koji and miso, and aged fish and meat; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses centre on aged fish, game and meat, with butter and caviar (2025–2026 reviews).',
    hours_raw: 'Tuesday dinner 18:00–22:00 (last food order 19:30); Wednesday to Saturday lunch 12:00–14:30 (last order 13:00) and dinner 18:00–22:00 (last order 19:30); closed Sunday and Monday (Tabelog). Reservation only (Tabelog). 38 seats: a 14-seat counter, tables and private rooms for 2–8; non-smoking (Tabelog). Cards, e-money and QR (Tabelog). A kids’ menu for small children (June and October 2026). In a renovated townhouse with a courtyard and a storehouse at the back, near Marutamachi Stn (2026 reviews; Tabelog).',
    hours: { 1: [D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Townhouse near Marutamachi, west of Karasuma — near Marutamachi Stn',
    cuisine: 'Modern French of Japanese ingredients, built on fermentation and ageing in the restaurant’s own room, from a chef raised in Versailles (2026 reviews) · lunch ¥9,000, dinner ¥22,000 (March and July 2026) · e.g. week-aged Goto kanburi with sourdough-miso sauce; smoked aged sawara with koji-carrot sauce (March 2026); Hokkaido clams, cucumber and caviar (June 2026); Wakayama bonito with tomato and Oscietra caviar (August 2026); Kumamoto kuruma prawns, Hokkaido lamb, Goto pork (July 2026); whole-animal game (December 2025) · homemade sourdough with Maldon salt and Hokkaido butter · wine pairings: six glasses ¥15,000, "Prestige" three glasses ¥15,000; mostly clean natural wines; caviar and truffle supplements (2025–2026 reviews)',
    website: null, gmaps: gm('MOKO 京都 フレンチ 丸太町'), menu_url: null,
    notes: "[French · Marutamachi, Chef Alexey Moko's townhouse] A modern French restaurant in a renovated Kyoto townhouse with a central counter, a courtyard and a storehouse, where Chef Alexey Moko — trained at Taillevent and in London hotels — cooks Japanese ingredients aged and fermented in-house: week-aged fish with koji or sourdough-miso sauces, game, and a sourdough loaf with butter people ask for again and again. Lunch ¥9,000, dinner ¥22,000, with natural-wine pairings. Families welcome, with a kids' menu. Michelin one star, per reviewers. Closed Sunday and Monday.",
    chef_bio: { chef_name: 'Alexey Moko', roles: ['Owner-chef (reviews: "an owner-chef from Versailles")'], origin: 'Versailles, France (October 2026 review)',
      background: 'Per 2026 reviews: Alexey Moko worked at renowned places such as Taillevent in France and hotels in London (March 2026); an owner-chef from Versailles focusing on fermentation and ageing (October 2026); the restaurant gained a Michelin star soon after opening, about three years ago (August and March 2026); the long-time service manager, who spoke fluent English and looked after international guests, left in August 2026; an October 2026 family was looked after by Chef Alexey and the chef’s wife. An April 2026 reviewer found most guests were from overseas.',
      philosophy: null, specialty: 'Aged and fermented fish and game; sourdough with butter.',
      anecdotes: [
        { text: '"The butter and salt served with the bread were so delicious that I ended up asking for three extra servings." — December 2025.', source: R + 'B519500066/' },
        { text: 'An October 2026 family with a two-and-a-half-year-old found Chef Alexey and the chef’s wife "incredibly kind and attentive".', source: R + 'B536907339/' },
        { text: 'A July 2026 diner loved the townhouse space but found the flavours a little strong and the ¥5,000-a-glass "Prestige" pairing pricey for what it was.', source: R + 'B532489135/' },
        { text: '"Most of the guests were from overseas." — April 2026.', source: R + 'B526352620/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ、中京区玉植町235-2、火 18:00〜22:00 (料理 L.O. 19:30)、水〜土 12:00〜14:30 (L.O. 13:00)・18:00〜22:00 (L.O. 19:30)、日・月休み、完全予約制、38席 (カウンター14、テーブル8、個室)、個室は2〜8名、禁煙、カード・電子マネー・QR 可。口コミ (2025年12月〜2026年10月、英語): Alexey Moko シェフ (Versailles 出身、Taillevent やLondon のホテルで経験)、開業まもなくミシュランの星、昼9,000円・夜22,000円、自家熟成の魚と肉、発酵、ジビエ、自家製のサワードウ、ワインペアリング6杯15,000円、プレステージ3杯15,000円、キャビアやトリュフの追加、町家と中庭と蔵、キッズメニュー、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B466968087/', R + 'B518587502/', R + 'B519500066/', R + 'B520492762/', R + 'B523420891/', R + 'B526352620/', R + 'B529524190/', R + 'B531445777/', R + 'B532489135/', R + 'B536907339/'] },
    cultural_comfort: { level: 'english', note: 'A French chef; many international guests; reservation only; kids’ menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区玉植町235-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016869, 135.757159); cross-checked: GSI 京都府京都市中京区玉植町235番地 (lot) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520492762/', R + 'B519500066/', R + 'B532489135/'],
    price_note: 'No menu read; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥9,000', 'Lunch', 'no', 'no', 'March 2026.', 'lunch'),
      it('', '', 'Dinner course', '¥22,000', 'Dinner', 'no', 'no', 'March and July 2026.', 'dinner'),
      it('', '', 'Wine pairing, six glasses', '¥15,000', 'Drinks', '', '', 'December 2025.', 'pairing_6'),
    ] }, {
    cuisine: '自家の熟成庫での熟成と発酵を軸に、日本の食材で作るモダンフレンチ。シェフは Versailles 出身 (2026年の口コミ)・昼9,000円、夜22,000円 (2026年3月、7月)・たとえば1週間熟成の Goto の寒ぶりとサワードウと味噌のソース、熟成させたさわらの燻製と麹とにんじんのソース (2026年3月)、Hokkaido の貝ときゅうりとキャビア (2026年6月)、Wakayama のかつおとトマトとオシェトラキャビア (2026年8月)、Kumamoto の車海老、Hokkaido の羊、Goto の豚 (2026年7月)、一頭買いのジビエ (2025年12月)・自家製サワードウにMaldon の塩と Hokkaido のバター・ワインペアリング6杯15,000円、「プレステージ」3杯15,000円、主にクリーンな自然派ワイン、キャビアやトリュフの追加 (2025〜2026年の口コミ)',
    neighborhood: '烏丸の西、丸太町近くの町家。丸太町駅の近く',
    gf_detail: '要確認。自家製サワードウのカンパーニュが毎回出る、パンや麹や味噌のソース、熟成の魚と肉のコースのフレンチ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。熟成の魚、ジビエ、肉に、バターやキャビアのコース (2025〜2026年の口コミ)。',
    notes: '[フレンチ・丸太町、Alexey Moko シェフの町家] 中央に大きなカウンター、中庭と奥の蔵のある京町家を改装したモダンフレンチ。Taillevent やLondon のホテルで経験を積んだ Alexey Moko シェフが、自家で熟成・発酵させた日本の食材で作る: 1週間熟成の魚の麹やサワードウ味噌のソース、ジビエ、おかわりしたくなるバターとサワードウ。昼9,000円、夜22,000円、自然派ワインのペアリング。キッズメニューもあり家族連れも歓迎。口コミではミシュラン一つ星。日・月休み。',
  });
}

save();
