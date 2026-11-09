// Kyoto priority (kyoto-missed), worker osw13, batch 114 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 寿司酒場ななめ, 六条河原院 讃, 駿河バル, 二條ふじ田. Brands checked against than.co.jp/brands (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-114');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26026572', 'retail food shop (Greg 11-07 ruling): KINEEL 京都店 is a take-away-only cake and baked-goods shop (Tabelog: "takeaway only"), opened December 2015 and described by an April 2025 reviewer as a separate brand of the Kyoto confectioner "Kogetsu" — not a historic family shop, and no GF or vegan options are sourced');
skip('26035326', 'chain: マクドナルド 烏丸御池店 — a branch of the national McDonald\'s chain');

// ================================================================ 寿司酒場ななめ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045466/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_sushi_sakaba_naname', name: '寿司酒場ななめ (Sushi Sakaba Naname)', category: 'OMNI',
    lat: 34.997747, lng: 135.759478, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sushi with two Kyushu soy sauces (one sweet), tempura, fish kara-age and a potato salad (2026 reviews); no wheat-free soy sauce is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish izakaya; the refillable starter includes fish-bone soup (2026 reviews).',
    hours_raw: 'Tabelog: daily 16:00–24:00 (food L.O. 23:00, drinks 23:30); an October 2026 reviewer notes it is closed on Mondays — check. Reservations taken, online from 16:00; it can be fully booked (August 2026). Starter charge 「お通し代として363円（税込み）いただいております。」 (¥363 incl. tax, Tabelog Japanese original); the starter is refillable homemade gari of daikon and lotus root plus refillable fish-bone soup (2026 reviews). Orders by QR code. Cards and PayPay. 31 seats: tables by the door, a counter, tables at the back. Non-smoking (smoking area outside). English menu with photos. Children with a guardian. On Manjuji-dori just west of Karasuma, 1 min from Gojo exit 2. Opened 20 August 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Manjuji-dori west of Karasuma — 1 min walk from Gojo',
    cuisine: 'A cheap, cheerful sushi izakaya opened in August 2026 by a former fishmonger from the Fujii Daimaru department store, with nigiri from ¥89 (Tabelog; August–October 2026 reviews) · nigiri from ¥89–99 (egg, shrimp, marinated sardine, yellowtail); bluefin tuna, chutoro and negitoro ¥299; daily fish ¥149–199 (2026) · service tuna trio ¥299; hon-maguro trio ¥777; sweet shrimp ×4 ¥599; fresh sea urchin ¥420 (August 2026) · mackerel sushi aged in a wine cellar ×2 ¥399 (also to take away) · sushi-shop potato salad ¥499; fish kara-age ¥599; simmered menuke ¥899 (2026) · spoon sushi ¥1,000 (October 2026) · drinks mostly ¥399, soft drinks ¥299 (August 2026)',
    website: null, gmaps: gm('寿司酒場ななめ 五条'), menu_url: TB + 'dtlmenu/',
    notes: '[Sushi izakaya · Gojo-Karasuma, a fishmonger\'s budget sushi bar] A new, lively sushi tavern by Gojo Station run by a former department-store fishmonger: big nigiri from ¥89, tuna trios from ¥299, wine-cellar-aged mackerel sushi, and free refills of fish-bone soup and homemade pickles. About ¥2,000–5,000. ¥363 starter. Opens 4 pm.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; a former fishmonger)'], origin: null,
      background: 'Opened 20 August 2026 (Tabelog). August 2026 reviewers write that the owner ran the fish counter at the Fujii Daimaru department store, which has closed; a September 2026 reviewer heard that a staff member came from a seafood izakaya in Tenma, Osaka. Reviewers describe cheerful staff who mix Japanese and English, a much-praised woman on the floor (October 2026), and one regular who logged eleven visits in its first two months.',
      philosophy: '"Affordable, fast and delicious" (October 2026 review).',
      specialty: 'Budget nigiri; wine-cellar-aged mackerel sushi; refillable fish soup.',
      anecdotes: [
        { text: 'August 2026: "A sushi and izakaya run by a former fishmonger from Fujii Daimaru, which sadly closed down… The complimentary fish soup is a delightful service, and you can refill it as much as you like!"', source: R + 'B534048541/' },
        { text: 'September 2026: "Saba Sushi from the wine cellar (2 pieces): JPY 399. This is a must-try! The temperature in the wine cellar is said to be just perfect."', source: R + 'B535263527/' },
      ],
      japanese_sources_summary: '食べログ: 寿司酒場ななめ、居酒屋・寿司・天ぷら、下京区万寿寺通烏丸西入御供石町368、五条駅2番出口から徒歩1分、毎日16:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、予約可、原文で「お通し代として363円（税込み）いただいております。」、カード・PayPay可、31席、禁煙 (外に喫煙所)、英語・写真付きメニュー、子供は保護者同伴で、2026年8月20日オープン。口コミ (2026年8月〜10月、英語): Fujii Daimaruの魚屋出身の店主 (2026年8月)、握り89円〜、本まぐろ・中トロ・ねぎとろ299円、サービスまぐろ3貫299円、本まぐろ3種777円、甘えび4尾599円、生うに420円、ワインセラーで寝かせた鯖寿司2貫399円 (持ち帰りも)、寿司屋のポテトサラダ499円、魚の唐揚げ599円、めぬけの煮付け899円、スプーン寿司1,000円、飲み物はほぼ399円、おかわり自由の自家製ガリとあら汁、九州のしょうゆ2種、月曜休みとの記載 (2026年10月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B534048541', 'B534088346', 'B534426801', 'B534959873', 'B535263527', 'B535897647', 'B536450485', 'B537147304', 'B537518369', 'B538155103'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English photo menu and QR ordering; staff mix Japanese and English (August 2026). ¥363 starter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通烏丸西入御供石町368',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 20 August 2026) with reviews dated August to October 2026.' },
    pin_source: `Tabelog ${TB} (34.997747, 135.759478); GSI lot 京都府京都市下京区御供石町368番地 about 90m away; nearest pin kyoto_matt_restaurant_2 6.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534088346/', R + 'B535263527/', R + 'B537518369/'],
    price_note: 'Prices from August–October 2026 reviews (some pre-tax); ¥363 starter.', last_checked: TODAY, items: [
      it('', '', 'Nigiri (egg, shrimp, marinated sardine…)', 'from ¥89', 'Sushi', 'no', 'no', 'August–October 2026.', 'nigiri_89'),
      it('', '', 'Service tuna trio', '¥299', 'Sushi', 'no', 'no', 'August and October 2026.', 'service_tuna'),
      it('', '', 'Wine-cellar-aged mackerel sushi (2 pieces)', '¥399', 'Sushi', 'no', 'no', 'August–October 2026.', 'saba_sushi'),
      it('', '', 'Fish kara-age', '¥599', 'Fried', 'no', 'no', 'September 2026.', 'sakana_karaage'),
      it('', '', 'Simmered menuke', '¥899', 'Main', 'no', 'no', 'September–October 2026.', 'menuke_nitsuke'),
    ] }, {
    cuisine: 'Fujii Daimaruの魚屋出身の店主が2026年8月に開いた、手頃でにぎやかな寿司酒場。握りは89円から (食べログ、2026年8〜10月の口コミ)・握り89〜99円 (玉子、えび、いわしの酢じめ、ぶり)、本まぐろ・中トロ・ねぎとろ299円、日替わりの魚149〜199円 (2026年)・サービスまぐろ3貫299円、本まぐろ3種777円、甘えび4尾599円、生うに420円 (2026年8月)・ワインセラーで寝かせた鯖寿司2貫399円 (持ち帰りも)・寿司屋のポテトサラダ499円、魚の唐揚げ599円、めぬけの煮付け899円 (2026年)・スプーン寿司1,000円 (2026年10月)・飲み物はほぼ399円、ソフトドリンク299円 (2026年8月)',
    neighborhood: '烏丸の西の万寿寺通。五条から徒歩1分',
    gf_detail: 'グルテンフリーではない: 九州のしょうゆ2種 (うち1種は甘口) の寿司、天ぷら、魚の唐揚げ、ポテトサラダ (2026年の口コミ)。小麦不使用のしょうゆの記載はない。',
    vegan_detail: 'ヴィーガン不可: 寿司と魚の居酒屋。おかわり自由のお通しにはあら汁 (2026年の口コミ)。',
    notes: '[寿司酒場・五条烏丸、魚屋出身の店主の手頃な寿司] 五条駅すぐの新しくにぎやかな寿司酒場。百貨店の魚屋出身の店主による、89円からの大きな握り、299円からのまぐろ3貫、ワインセラーで寝かせた鯖寿司、おかわり自由のあら汁と自家製ガリ。2,000〜5,000円ほど。お通し363円。16時から。',
  });
}

// ================================================================ 六条河原院 讃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032188/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_rokujo_kawarain_san', name: '六条河原院 讃 (Rokujo Kawara In San)', category: 'OMNI',
    lat: 34.994156, lng: 135.766093, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: omakase courses with tempura and the chef\'s own soba (2020–2026 reviews). The listing says allergies can be discussed when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood courses — grouper, Spanish mackerel, scallops, conger eel (2019–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 12:00–14:30 and 18:00–22:00; closed Wednesday; hours may change. Reservations taken; omakase only (July 2026). Lunch courses ¥6,000, ¥10,000, ¥15,000; dinner ¥10,000, ¥15,000, ¥20,000 — service and seat charges included, consumption tax extra; allergies can be discussed when booking (Tabelog remarks). 10 counter seats on the 1st floor and a 28-seat tatami room upstairs. Cards. Behind a tableware gallery (August 2020) in the old quarter south of Gojo, a 7–8 min walk from Keihan Kiyomizu-Gojo.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Gojo near the Kamo River — 316m from Kiyomizu-Gojo',
    cuisine: 'An omakase Japanese counter behind a tableware gallery, cooking fish from Taiza on the Tango coast (Tabelog; 2019–2026 reviews) · lunch omakase ¥6,000 / ¥10,000 / ¥15,000; dinner ¥10,000 / ¥15,000 / ¥20,000, service included (Tabelog) · tempura of Spanish mackerel and scallops (August 2020) · grouper (December 2019) · summer soba lunch (July 2020) · seasonal conger eel; the chef\'s own soba; broth jelly poured from a lotus leaf (July 2026) · a take-out fish "Taiza burger" set ¥1,000 (May 2020)',
    website: null, gmaps: gm('六条河原院 讃'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto omakase · south of Gojo, a counter behind a tableware gallery] A quiet, polished omakase counter tucked behind a gallery of fine tableware, cooking Tango-coast fish — tempura, conger eel, the chef\'s own soba — beautifully plated. Lunch from ¥6,000, dinner from ¥10,000, service included. Allergies discussed when booking. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'An August 2020 reviewer writes that it is owned by a well-known mama-san from Ginza and sits behind a gallery of beautiful tableware; a May 2020 reviewer says the fish comes from Taiza on the Tango coast. Reviewers enjoy chatting with the chef at the counter (September 2020). A July 2026 reviewer, the only guests that evening, heard the 2nd floor may become guest rooms and that sports events are sometimes screened.',
      philosophy: null,
      specialty: 'Omakase with Tango-coast fish; tempura; handmade soba.',
      anecdotes: [
        { text: 'August 2020: "This restaurant is located at the back of a gallery featuring beautiful tableware… the food exceeded my expectations in terms of quality."', source: R + 'B505275146/' },
        { text: 'July 2026: "The presentation was delightful, such as pouring broth jelly from a lotus leaf. The seasonal conger eel and the soba made by the chef himself were both incredibly delicious."', source: R + 'B531296163/' },
      ],
      japanese_sources_summary: '食べログ: 六条河原院 讃、日本料理、下京区南京極町78、清水五条から316m、月・火・木〜日12:00〜14:30・18:00〜22:00、水曜休み、予約可、昼6,000円・10,000円・15,000円、夜10,000円・15,000円・20,000円 (サービス料・席料込み、消費税別)、アレルギーは予約時に相談可、1階カウンター10席・2階座敷28席、カード可。口コミ (2019年5月〜2026年7月、英語): 器のギャラリーの奥の店、銀座の有名なママがオーナー (2020年8月)、Taizaの魚、鰆と帆立の天ぷら、grouper、夏のそばの昼、料理人手打ちのそば、蓮の葉から注ぐだしのジュレ (2026年7月)、持ち帰りのTaizaバーガーセット1,000円 (2020年5月)、カウンターで料理人と会話。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B422715220', 'B427083424', 'B429430794', 'B430590121', 'B465144571', 'B505275146', 'B531296163'])) },
    cultural_comfort: { level: 'japanese', note: 'Omakase only; service included in course prices; allergies discussed at booking.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog remarks: allergies can be discussed at the time of reservation.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区南京極町78',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2024 and July 2026.' },
    pin_source: `Tabelog ${TB} (34.994156, 135.766093); GSI lot 京都府京都市下京区南京極町78番地 about 18m away; nearest pin kyoto_soba_teuchi_takahashi 91m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices from Tabelog remarks (service and seat charges included, tax extra).', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase', '¥6,000 / ¥10,000 / ¥15,000', 'Course', 'no', 'no', 'Tabelog listing.', 'lunch_omakase'),
      it('', '', 'Dinner omakase', '¥10,000 / ¥15,000 / ¥20,000', 'Course', 'no', 'no', 'Tabelog listing.', 'dinner_omakase'),
    ] }, {
    cuisine: '器のギャラリーの奥にあるおまかせの日本料理のカウンター。丹後Taizaの魚 (食べログ、2019〜2026年の口コミ)・昼のおまかせ6,000円・10,000円・15,000円、夜10,000円・15,000円・20,000円、サービス料込み (食べログ)・鰆と帆立の天ぷら (2020年8月)・grouper (2019年12月)・夏のそばの昼 (2020年7月)・季節のconger eel、料理人手打ちのそば、蓮の葉から注ぐだしのジュレ (2026年7月)・持ち帰りの魚の「Taizaバーガー」セット1,000円 (2020年5月)',
    neighborhood: '鴨川近く、五条の南。清水五条から316m',
    gf_detail: 'グルテンフリーではない: 天ぷらや料理人手打ちのそばのおまかせのコース (2020〜2026年の口コミ)。アレルギーは予約時に相談可 (食べログ)。',
    vegan_detail: 'ヴィーガン不可: grouper、鰆、帆立、conger eelなど魚介のコース (2019〜2026年の口コミ)。',
    notes: '[京料理のおまかせ・五条の南、器のギャラリーの奥のカウンター] 美しい器のギャラリーの奥にある静かで洗練されたおまかせのカウンター。丹後の魚を天ぷら、conger eel、手打ちのそばなど美しい盛り付けで。昼は6,000円から、夜は10,000円から、サービス料込み。アレルギーは予約時に相談を。水曜休み。',
  });
}

// ================================================================ 駿河バル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040282/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_suruga_bar', name: '駿河バル (Suruga Bar)', category: 'OMNI',
    lat: 35.006086, lng: 135.757384, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Shizuoka dishes — fried black hanpen, Fujinomiya yakisoba, gyoza, motsu curry skewers, oden with fish cakes — plus pasta (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito tataki, black hanpen (fish cake), offal skewers, oden in dashi (2024–2025 reviews).',
    hours_raw: 'Tabelog: daily 18:00–2:00 (L.O. 1:00); bookings after 21:00 by phone only. Reservations taken; parties of three may be seated at the large U-shaped counter. Starter charge 「お通し350円（税込）」 (¥350 incl. tax, Tabelog Japanese original). Cards, Rakuten Edy and Rakuten Pay. 28 seats: a 12-seat counter and two tables of 8; private hire up to 50. Heated tobacco only inside; cigarettes outside. Wheelchair access. English menu; sommelier on staff. Children by arrangement. 1st floor of the パラドール烏丸ビル on Takoyakushi-dori west of Muromachi, 5 min from Karasuma or Shijo.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi-dori west of Muromachi — 5 min walk from Karasuma or Shijo',
    cuisine: 'A late-night izakaya devoted to Shizuoka food and sake, with pasta and wine too (Tabelog; 2023–2026 reviews) · Shizuoka oden: black hanpen, potato, chicken-and-lotus-root tsukune (October 2024) · Shizuoka bonito tataki; fried black hanpen; Shimizu motsu curry skewers (October 2024) · Fujinomiya yakisoba; gyoza (2025) · sashimi with sweet wasabi; Shizuoka sake such as Takasago yamahai junmai, warmed (2024–2026)',
    website: null, gmaps: gm('駿河バル 烏丸 蛸薬師'), menu_url: TB + 'dtlmenu/',
    notes: '[Shizuoka izakaya · Takoyakushi near Karasuma, a one-man late counter] A rare taste of Shizuoka in Kyoto: black-broth Shizuoka oden, black hanpen fry, Fujinomiya yakisoba, bonito tataki and Shizuoka sake, served by a Shizuoka-born owner at a big U-shaped counter until 2 am. About ¥3,000–5,000. ¥350 starter.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; from Shizuoka)'], origin: 'Shizuoka (January 2025 review)',
      background: 'A January 2025 reviewer describes an owner from Shizuoka with a deep love for the region who runs the place alone, so service can be slow when busy; a June 2025 reviewer chatted with him about Shizuoka oden, Fujinomiya yakisoba and Shimizu S-Pulse. Few reviews give detail; the newest (September 2026) praises the oden, sashimi with sweet wasabi and local sake.',
      philosophy: null,
      specialty: 'Shizuoka oden; Shizuoka local dishes and sake.',
      anecdotes: [
        { text: 'January 2025: "This is probably the only place in Kyoto where you can enjoy Shizuoka-style oden… The owner, who is from Shizuoka, truly embodies a love for the region."', source: R + 'B499500204/' },
        { text: 'October 2024: "Shizuoka Specialty Black Hanpen Fry — Crunchy coating with a touch of sweetness from the black hanpen."', source: R + 'B494710333/' },
      ],
      japanese_sources_summary: '食べログ: 駿河バル、バル・居酒屋・パスタ、中京区蛸薬師通室町西入姥柳町203 パラドール烏丸ビル1F、阪急烏丸駅・地下鉄四条駅から徒歩5分、毎日18:00〜翌2:00 (L.O.1:00)、21時以降の予約は電話で、予約可、原文で「お通し350円（税込）」、カード・楽天Edy・楽天ペイ可、28席 (カウンター12、8名テーブル2)、貸切50名まで、加熱式たばこのみ (紙巻きは屋外)、車椅子可、英語メニュー、ソムリエあり。口コミ (2023年10月〜2026年9月、英語): 静岡の食材と郷土料理の居酒屋、静岡おでん (黒はんぺん、じゃがいも、れんこん入りの鶏つくね)、静岡のかつおのたたき、黒はんぺんフライ、Shimizuのもつカレー串、Fujinomiyaやきそば、餃子、刺身と甘いわさび、静岡の地酒、静岡出身の店主が一人で営む (2025年1月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B473925778', 'B494710333', 'B499500204', 'B502246588', 'B508342366', 'B536269201'])) },
    cultural_comfort: { level: 'some_english', note: 'English menu (Tabelog); one-person service can be slow; ¥350 starter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通室町西入姥柳町203 パラドール烏丸ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated September and October 2026.' },
    pin_source: `Tabelog ${TB} (35.006086, 135.757384); GSI lot 京都府京都市中京区姥柳町203番地 about 13m away; nearest pin kyoto_kameyama_manabu 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494710333/', R + 'B499500204/'],
    price_note: 'No item prices; ¥350 starter; Tabelog average ¥4,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'Shizuoka oden (black hanpen and more)', null, 'Oden', 'no', 'no', 'October 2024; January 2025.', 'shizuoka_oden'),
      it('', '', 'Fried black hanpen', null, 'Fried', 'no', 'no', 'October 2024.', 'kuro_hanpen_fry'),
      it('', '', 'Fujinomiya yakisoba', null, 'Noodles', 'no', 'no', 'January and June 2025.', 'fujinomiya_yakisoba'),
    ] }, {
    cuisine: '静岡の料理と地酒の深夜まで開く居酒屋、パスタとワインも (食べログ、2023〜2026年の口コミ)・静岡おでん: 黒はんぺん、じゃがいも、れんこん入りの鶏つくね (2024年10月)・静岡のかつおのたたき、黒はんぺんフライ、Shimizuのもつカレー串 (2024年10月)・Fujinomiyaやきそば、餃子 (2025年)・甘いわさびの刺身、静岡の地酒 (2024〜2026年)',
    neighborhood: '室町の西の蛸薬師通。烏丸・四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: 黒はんぺんフライ、Fujinomiyaやきそば、餃子、もつカレー串、練り物のおでんなどの静岡料理とパスタ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かつおのたたき、黒はんぺん (練り物)、もつの串、だしのおでん (2024〜2025年の口コミ)。',
    notes: '[静岡料理の居酒屋・烏丸近くの蛸薬師、一人で営む深夜のカウンター] 京都では珍しい静岡の味。黒い静岡おでん、黒はんぺんフライ、Fujinomiyaやきそば、かつおのたたき、静岡の地酒を、静岡出身の店主が大きなU字カウンターで深夜2時まで。3,000〜5,000円ほど。お通し350円。',
  });
}

// ================================================================ 二條ふじ田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003580/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_nijo_fujita', name: '二條ふじ田 (Nijo Fujita)', category: 'OMNI',
    lat: 35.013343, lng: 135.767886, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kaiseki courses with fu, soy-based dashi dishes, chirashi sushi and wagashi (2010–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and suppon (soft-shelled turtle) courses (2010–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Fri, Sat 17:00–21:00; closed Wednesday and Sunday; hours may change. Reservations taken; lunch for groups by reservation (2012–2013 reviews). Cards (JCB, AMEX, Diners). Counter and a table downstairs, a banquet room upstairs (2016). Non-smoking. On Nijo-dori just east of Teramachi, near Kyoto City Hall.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori east of Teramachi — 274m from Kyoto Shiyakusho-mae',
    cuisine: 'A long-running kaiseki restaurant by Kyoto City Hall, known for its suppon soup, hamo in summer, steamed sushi in winter and a chirashi-sushi finish, with wagashi from the owner\'s family confectioners (Tabelog; 2010–2025 reviews) · courses from ¥6,000 (2010); mid-range ¥10,000 before tax (July 2020) · clear suppon soup year-round; suppon eggs; conger-eel dobin-mushi; ayu with roe; kinmedai with walnut tofu (2015) · hamo with ume sauce; hamo roe; simmered Kamo eggplant (July 2020) · winter suppon hot pot and steamed sushi (featured on KBS Kyoto, 2014) · chirashi sushi with red miso soup to finish; wagashi with matcha',
    website: 'http://nijo-fujita.com/', gmaps: gm('二條ふじ田 二条寺町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Nijo-Teramachi near City Hall, a quiet family counter] A calm, honest kaiseki counter on a quiet stretch of Nijo-dori: suppon soup all year, hamo in summer, steamed sushi in winter, always finishing with chirashi sushi and the owner\'s family wagashi with matcha. About ¥10,000–15,000. Closed Wednesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Head chef (unnamed)'], origin: null,
      background: 'Reviewers since 2010 describe a friendly owner, his cheerful wife and young staff (2015; 2020); a 2015 reviewer writes that the owner opened here for the good well water and that the wagashi come from his family, a confectioner ("Nijo Wakasa-ya" per 2012 and 2016 reviewers; romaji as given). A July 2020 reviewer mentions a head chef in the back kitchen. Featured on KBS Kyoto in November 2014. Criticism: an underwhelming lunch (July 2022). The newest detailed review is May 2025.',
      philosophy: '"As chefs, we handle fish, so we cannot make sweets with the same hands" — so wagashi come from a confectioner (2015 review).',
      specialty: 'Suppon soup; seasonal kaiseki; chirashi sushi.',
      anecdotes: [
        { text: '2015 (in a 2016 review): "The reason they opened this restaurant is simply because of the good well water available. Indeed, the foundation of cooking is water."', source: R + 'B122973602/' },
        { text: 'July 2020: "When I inquired about the significance of the pine needles, I learned that they create a gap to prevent the napkin from sticking to the chilled beer… while also symbolizing \'waiting\' for the guests."', source: R + 'B428671957/' },
      ],
      japanese_sources_summary: '食べログ: 二條ふじ田、日本料理、中京区二条寺町東入、京都市役所前から274m、月・火・木・金・土17:00〜21:00、水・日曜休み、カード可 (JCB・AMEX・Diners)、個室あり、禁煙、公式サイト nijo-fujita.com。口コミ (2010年12月〜2025年5月、英語・日本語): コースは6,000円から (2010年)、1万円のコース (2020年7月)、すっぽんのすまし汁、すっぽんの卵、conger eelの土瓶蒸し、子持ち鮎、金目鯛と胡桃豆腐 (2015年)、鱧の梅肉、鱧の子、Kamoなすの炊いたん (2020年7月)、冬の丸鍋と蒸し寿司 (KBS京都の番組、2014年)、締めのちらし寿司と赤だし、店主の実家の菓子司の和菓子と抹茶、井戸水がよくてこの地で開いた (2015年)、店主と奥さん、若いスタッフ、昼は物足りなかったとの声 (2022年7月)。',
      confidence: 'medium', sources: [TB, 'http://nijo-fujita.com/'].concat(rv(R, ['B112206081', 'B113912639', 'B122973602', 'B406610051', 'B428671957', 'B451611686', 'B476563536', 'B507092998', 'B65584867'])) },
    cultural_comfort: { level: 'japanese', note: 'Quiet counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区二条寺町東入',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2023 and May 2025; no review since May 2025.' },
    pin_source: `Tabelog ${TB} (35.013343, 135.767886); the address gives only a street direction (二条寺町東入) with no town or lot, so GSI cannot check it — marked approximate; nearest pin kyoto_unaichi_teramachi_nijo 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B428671957/', R + 'B112206081/'],
    price_note: 'Course prices from 2010 and July 2020 reviews; current prices not given.', last_checked: TODAY, items: [
      it('', '', 'Dinner kaiseki (mid-range course)', '¥10,000 + tax', 'Course', 'no', 'no', 'July 2020.', 'dinner_kaiseki'),
      it('', '', 'Suppon clear soup', null, 'Soup', 'no', 'no', '2015.', 'suppon_soup'),
      it('', '', 'Chirashi sushi with red miso soup (finish)', null, 'Rice', 'no', 'no', '2010–2023.', 'chirashi_sushi'),
    ] }, {
    cuisine: '京都市役所近くの長く続く会席料理店。すっぽんの椀、夏の鱧、冬の蒸し寿司、締めのちらし寿司、店主の実家の菓子司の和菓子 (食べログ、2010〜2025年の口コミ)・コースは6,000円から (2010年)、中ほどのコース1万円 (税別、2020年7月)・通年のすっぽんのすまし汁、すっぽんの卵、conger eelの土瓶蒸し、子持ち鮎、金目鯛と胡桃豆腐 (2015年)・鱧の梅肉、鱧の子、Kamoなすの炊いたん (2020年7月)・冬の丸鍋と蒸し寿司 (2014年、KBS京都で紹介)・締めはちらし寿司と赤だし、和菓子と抹茶',
    neighborhood: '寺町の東の二条通。京都市役所前から274m',
    gf_detail: 'グルテンフリーではない: 麩、しょうゆベースのだしの料理、ちらし寿司、和菓子のある会席のコース (2010〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚介とすっぽんのコース (2010〜2025年の口コミ)。',
    notes: '[京料理の会席・市役所近くの二条寺町、静かな家族のカウンター] 二条通の静かな一角の、誠実な会席のカウンター。一年中すっぽんの椀、夏は鱧、冬は蒸し寿司、締めはいつもちらし寿司と店主の実家の和菓子と抹茶。10,000〜15,000円ほど。水・日曜休み。',
  });
}

save();
