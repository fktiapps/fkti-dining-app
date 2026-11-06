// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 19.
//   + JOYS TABLE (omelette-and-hamburg dining café, Kawaramachi Matsubara)
//   + 小鍋屋いさきち Konabe Ya Isakichi (late-night small hot pots in a Gion lane, run largely single-handed)
//   + 乍旨司 Sashi (seafood izakaya near Nijo Castle; seasoned sashimi and uni rolls)
//   + Fiorisca (vegetable-and-seafood Italian run by a couple, north of Karasuma Oike)
//   Same-name counts first (2026-11-05): JOYS TABLE — one; いさきち — one; 乍旨司 — one in Kyoto ("Sashi" in Fukushima is a
//   different shop); フィオリスカ — one.
//   Taken on 2026-11-05: `next core 200` gave JOYS TABLE 26037250 and 小鍋屋いさきち 26001376; `next notable 200` gave
//   乍旨司 26032870 and Fiorisca 26021074. None is in data/kyoto.json: grep by name and address (植松町716 シャイニービル小坂,
//   巽小路上ル, 西大黒町336-10, 瓦町545 アビリティ高倉) found none. Service charges per Tabelog's Japanese original:
//   JOYS TABLE 「無し」 (the English machine translation wrongly says a charge is added); いさきち, 乍旨司, Fiorisca none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ JOYS TABLE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037250/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '16:00'], ['17:30', '21:30']); const WE = day(['08:00', '11:00'], ['11:30', '16:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_joys_table', name: 'JOYS TABLE', category: 'OMNI',
    lat: 34.998507, lng: 135.767273, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamburg steaks with demi-glace or other sauces over butter rice, with soup and side dishes; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The mains are beef hamburg and egg omelettes; Tabelog mentions salad bowls and vegetable smoothies by day, and the soup is made from a Kyoto-vegetable broth (Tabelog; October 2026).',
    hours_raw: 'Lunch 11:30–16:00 (last order 15:00) and dinner 17:30–21:30 (last order 20:30) daily; breakfast 8:00–11:00 (last order 10:00) Friday to Sunday; closed irregularly (Tabelog). Reservations accepted; arrive on time with the whole party, or the table goes to others; no infants or strollers inside, and children order from the adult menu (Tabelog). Orders by smartphone after registering on LINE; self-service water; one drink per person (August and September 2026). No service charge (Tabelog, Japanese text: 「無し」). 20 seats, including a small terrace; non-smoking; cards, IC cards and e-money (Tabelog). Queues at times (September 2026). 1 min from the Matsubara Kawaramachi bus stop, 5 min from Kiyomizu-Gojo Stn (Tabelog). Opened 1 March 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi Matsubara — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Dining café of Kyoto beef and Kyoto vegetables: a spiced hamburg as a set with soup, salad and rice; A5 wagyu steak with Kyoto wine or craft beer in the evening (Tabelog, shop text) · omu-burg rice — a large hamburg and a soft omelette over homemade ketchup butter rice, plain with demi-glace or green with Kyoto komatsuna and Uji matcha, topped with edible flowers from Kyoto — ¥2,500 as a set, cheese +¥200 (July and October 2026) · seasonal salt-lemon omu-burg (summer 2026) · Kyoto beef hamburg in a skillet with Kujo green-onion sauce (October 2026) · sets come with salad, onion consommé, and small plates such as salmon and prosciutto (2026 reviews)',
    website: 'https://www.instagram.com/joystable_diningcafe/', gmaps: gm('JOYS TABLE 京都 河原町'), menu_url: null,
    notes: "[Yoshoku café · Kawaramachi Matsubara, the green omelette hamburg] A bright lemon-and-lime café near Kawaramachi Matsubara known for its omu-burg: a big hamburg under a soft omelette — plain with demi-glace, or green with komatsuna and Uji matcha — on butter rice, scattered with edible flowers, ¥2,500 as a set with soup and small plates. Order by phone via LINE; one drink each; queues at peak times. Breakfast Friday to Sunday; no strollers.",
    chef_bio: { chef_name: null, roles: ['Café; staff unnamed'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a dining café using Kyoto beef and Kyoto vegetables, with salad bowls and vegetable smoothies by day and A5 wagyu steak with Kyoto wine or craft beer at night; opened 1 March 2022. An October 2026 reviewer was told the edible flowers are grown organically in western Kyoto.',
      philosophy: null, specialty: 'Omu-burg rice; Kyoto beef hamburg.',
      anecdotes: [
        { text: 'A September 2026 diner liked the food but found the LINE smartphone ordering, self-service water and one-drink rule restrictive for the price.', source: R + 'B535667280/' },
        { text: 'An August 2026 diner found prices higher than expected and the regular size on the small side.', source: R + 'B533788955/' },
        { text: 'An October 2026 diner arrived at opening; four tables filled at once.', source: R + 'B537962711/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・ハンバーグ・ステーキ、下京区植松町716 シャイニービル小坂 1F、清水五条駅から徒歩5分、松原河原町バス停から1分、昼 11:30〜16:00 (L.O. 15:00)、夜 17:30〜21:30 (L.O. 20:30)、金土日は朝 8:00〜11:00 も、不定休、予約可 (時間厳守、全員そろってから入店)、乳幼児とベビーカーは入店不可、子どもも大人と同じメニュー、サービス料無し、20席 (テラス席あり)、禁煙、カード・電子マネー可、2022年3月1日オープン、京牛と京野菜のダイニングカフェ。口コミ (2026年6〜10月、英語): Omu-burg rice2,500円 (プレーンとグリーン、京都の小松菜とUji の抹茶、エディブルフラワー)、チーズ+200円、塩レモン、九条ねぎソースのハンバーグ、LINE でスマホ注文、ワンドリンク制、水はセルフ。',
      confidence: 'medium', sources: [TB, R + 'B530546489/', R + 'B531095453/', R + 'B532090469/', R + 'B532203686/', R + 'B533788955/', R + 'B535667280/', R + 'B536779694/', R + 'B537042081/', R + 'B537322143/', R + 'B537740905/', R + 'B537962711/', R + 'B537976905/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order on your phone via LINE; one drink each; cards and IC cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区植松町716 シャイニービル小坂 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and Instagram; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998507, 135.767273); cross-checked: GSI 京都府京都市下京区植松町716番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537740905/', R + 'B532090469/'],
    price_note: 'Prices from July–October 2026 reviews; no service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omu-burg rice set (plain or green), with salad, soup and sides', '¥2,500', 'Lunch', 'ask', 'no', 'July and October 2026.', 'omuburg_set'),
      it('', '', 'Cheese topping', '+¥200', 'Lunch', '', 'no', 'October 2026.', 'cheese_topping'),
      it('', '', 'Salt-lemon omu-burg set (summer)', '¥2,500', 'Lunch', 'ask', 'no', 'July 2026.', 'salt_lemon_omuburg'),
    ] }, {
    cuisine: '京牛と京野菜のダイニングカフェ。スパイスを効かせたハンバーグをスープ、サラダ、ご飯のセットで。夜は A5 の和牛ステーキと京都のワインやクラフトビール (食べログの店の紹介)・Omu-burg rice: 自家製ケチャップのバターライスに大きなハンバーグとふわふわの卵。プレーンはデミグラス、グリーンは京都の小松菜とUji の抹茶、京都のエディブルフラワーをのせて、セット2,500円、チーズ+200円 (2026年7月・10月)・季節の塩レモンのOmu-burg (2026年夏)・九条ねぎソースの京都産牛のハンバーグを鉄板で (2026年10月)・セットはサラダ、オニオンコンソメ、サーモンと生ハムなどの小皿付き (2026年の口コミ)',
    neighborhood: '河原町松原。清水五条駅から徒歩5分',
    gf_detail: '要確認。デミグラスなどのソースのハンバーグとバターライス、スープと小皿。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。主菜は牛のハンバーグと卵のオムレツ。食べログには昼のサラダボウルや野菜スムージーがあり、スープは京野菜の出汁 (食べログ、2026年10月)。',
    notes: '[洋食カフェ・河原町松原、緑のOmu-burg] 河原町松原近くの、レモンイエローとライムグリーンの明るいカフェ。名物はOmu-burg: バターライスに大きなハンバーグとふわふわの卵。プレーンはデミグラス、グリーンは小松菜とUji の抹茶で、エディブルフラワーを散らし、スープと小皿付きのセットで2,500円。注文は LINE からスマホで、ワンドリンク制、混む時間は行列も。金〜日は朝食も。ベビーカー不可。',
  });
}

// ================================================================ 小鍋屋いさきち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001376/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_konabeya_isakichi', name: '小鍋屋いさきち (Konabe Ya Isakichi)', category: 'OMNI',
    lat: 35.006109, lng: 135.774391, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small hot pots in a dashi broth, with fried dishes such as chicken skin, flatfish and small potatoes (2024–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every hot pot, even the yuba and soy-milk one, is cooked in Kyoto dashi (2024–26 reviews).',
    hours_raw: '18:00–3:00; closed Sunday and public holidays (Tabelog). Reservations accepted and advised; a November 2025 diner booked a month ahead and found it full (Tabelog; November 2025). Cash only — no cards, e-money or QR (Tabelog; November 2025). 16 seats: 8 at the counter and two raised tables for 4; at a table everyone shares one burner and one kind of pot at a time (Tabelog; March and November 2025). The menu is on the wall without prices (March 2025). Smoking allowed (Tabelog). In a narrow lane by Tatsumi Shrine, Gion Shirakawa; 6 min from Gion-Shijo Stn (Tabelog; 2024–25 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion Shirakawa, by Tatsumi Shrine — 6 min from Gion-Shijo Stn',
    cuisine: 'Small one-person hot pots, about 15 kinds, in a light Kyoto dashi (2024–26 reviews) · yuba hot pot with soy milk, finished by adding nigari to set fresh tofu in the pot; Kujo green onion with chicken, pork or yuba; hamo; pork and molokhia; yellowtail shabu-shabu (2024–26 reviews) · obanzai: moist okara with yuzu, "elevator" of fried tofu with grated daikon, dashimaki with daikon sauce, Isakichi salad with plum dressing, stewed umanohana (2024–26 reviews) · fried chicken skin with sansho, fried flatfish, fried small potatoes with sansho salt (2025 reviews) · about ¥5,000–10,000 a head; two people paid ¥14,800 (November 2025)',
    website: null, gmaps: gm('小鍋屋いさきち 祇園'), menu_url: null,
    notes: "[Hot pot · Gion Shirakawa, small pots till 3 a.m.] A tiny counter in a lane by Tatsumi Shrine, over 30 years old, serving one-person hot pots in a gentle Kyoto dashi — yuba in soy milk that ends as fresh tofu, Kujo green onion with chicken, hamo in season — with obanzai like the much-praised okara. Open until 3:00, a favourite late stop. The owner cooks largely alone, so service can be slow when full. Cash only; smoking allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed), running the shop largely alone (November 2025, October 2026)'], origin: null,
      background: 'A November 2024 reviewer says the restaurant has been open over 30 years; a February 2025 diner had known it for 20 years. Reviewers describe the owner cooking almost single-handed (November 2025, October 2026) and chatting with regulars; a November 2025 diner came after hearing it recommended on the TV show "Futtou Word 10".',
      philosophy: null, specialty: 'Small hot pots; okara.',
      anecdotes: [
        { text: 'A November 2025 diner on a full holiday weekend found the gaps between dishes far too long, and two items ordered never came.', source: R + 'B519433425/' },
        { text: 'An October 2026 regular says the owner may seem unfriendly but is a good person, and suggests helping by refilling drinks when the owner is busy.', source: R + 'B538227100/' },
        { text: 'A September 2024 diner liked the okara so much that there were second helpings and some to take home.', source: R + 'B492578171/' },
      ],
      japanese_sources_summary: '食べログ: 鍋・日本料理・創作料理、東山区祇園花見小路新橋西入巽小路上ル、祇園四条駅から約400m、月〜土 18:00〜翌3:00、日曜・祝日休み、予約可、カード・電子マネー・QR 不可、16席、カウンターと座敷、喫煙可。口コミ (2024年6月〜2026年10月、英語): Tatsumi 神社の前の細い路地、30年以上、約15種の小鍋、湯葉と豆乳の鍋はにがりで豆腐に、九条ねぎ、鱧、おから、elevator (揚げと大根おろし)、品書きに値段なし、ほぼ一人で営む店主、テレビで紹介、提供が遅く注文が抜けたという声 (2025年11月)、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B430273734/', R + 'B492578171/', R + 'B492943397/', R + 'B496242192/', R + 'B496658265/', R + 'B501823036/', R + 'B502385604/', R + 'B503737743/', R + 'B516846688/', R + 'B519433425/', R + 'B529711473/', R + 'B538227100/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; read the menu on the wall; bring cash; be patient when it is full.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園花見小路新橋西入巽小路上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006109, 135.774391); the address has no lot number and GSI finds no match, so the pin stays on the Tabelog point, which fits the reviews' lane by Tatsumi Shrine; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519433425/'],
    price_note: 'The wall menu shows no prices; reviews give about ¥5,000–10,000 a head (2024–26); two people paid ¥14,800 in November 2025.', last_checked: TODAY, items: [
      it('', '', 'Yuba and soy-milk hot pot, finished as fresh tofu', '', 'Hot pot', 'ask', 'no', '2025–26 reviews.', 'yuba_nabe'),
      it('', '', 'Kujo green onion and chicken hot pot', '', 'Hot pot', 'ask', 'no', '2024–25 reviews.', 'kujo_negi_nabe'),
      it('', '', 'Okara', '', 'Obanzai', 'ask', 'ask', '2024–26 reviews.', 'okara'),
    ] }, {
    cuisine: 'やさしい京の出汁の一人用の小鍋、約15種 (2024〜2026年の口コミ)・湯葉と豆乳の鍋は、最後ににがりで豆腐にする。九条ねぎと鶏、豚、湯葉。鱧。豚とモロヘイヤ。ぶりしゃぶ (2024〜2026年の口コミ)・おばんざい: 柚子の香るしっとりしたおから、揚げと大根おろしの「elevator」、大根おろしあんのだし巻き、梅ドレッシングのいさきちサラダ、うまのはなの煮込み (2024〜2026年の口コミ)・鶏皮の山椒揚げ、カレイの唐揚げ、小芋の唐揚げに山椒塩 (2025年の口コミ)・1人約5,000〜10,000円、2人で14,800円 (2025年11月)',
    neighborhood: '祇園白川、Tatsumi 神社の近く。祇園四条駅から徒歩6分',
    gf_detail: '要確認。出汁の小鍋と、鶏皮、カレイ、小芋などの揚げ物 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。湯葉や豆乳の鍋も含めて京の出汁で炊く (2024〜2026年の口コミ)。',
    notes: '[小鍋・祇園白川、朝3時までの小鍋] Tatsumi 神社の近くの路地の、30年以上続く小さなカウンター。やさしい京の出汁の一人用の小鍋が名物で、豆乳の湯葉鍋は最後に豆腐になり、九条ねぎと鶏、季節には鱧も。評判のおからなどおばんざいも。朝3時まで開いていて、締めの一軒に。店主がほぼ一人で回すので、満席の日は時間がかかる。現金のみ、喫煙可。日曜休み。',
  });
}

// ================================================================ 乍旨司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032870/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '22:30']); const S = day(['15:00', '22:00']);
  put({
    id: 'kyoto_sashi_nijo', name: '乍旨司 (Sashi)', category: 'OMNI',
    lat: 35.01357, lng: 135.754739, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi is dressed piece by piece with sauces such as garlic soy and natto, and there are fried dishes and sushi rolls (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; obanzai and dishes use dashi (2026 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri 17:00–22:30; Sat–Sun 15:00–22:00; closed Wednesday (Tabelog). Reservations accepted; usually full, so book ahead by phone (Tabelog; September 2026). 20 seats; non-smoking (Tabelog). Cards, IC cards and PayPay (Tabelog). Near Nijo Castle, 454 m from Nijojo-mae Stn (Tabelog). Opened 7 July 2019 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: S, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Nijo Castle — 454 m from Nijojo-mae Stn',
    cuisine: 'Seafood izakaya with a seasonal menu (2026 reviews) · sashimi platter served without soy and wasabi — each piece seasoned, e.g. tuna with natto sauce, marinated tuna, salt-seared swordfish, bonito with salt (2026 reviews) · signature "namida uni" roll heaped with sea urchin, tekka, negitoro and grilled-eel rolls, sea-urchin gunkan, toro-taku (2026 reviews) · assorted obanzai that change between visits, fried horse mackerel with parsley sauce, abalone-liver soy, chicken chashu with egg, charcoal-grilled chicken, grilled hamo, egg tofu with hamo roe, simmered octopus (2025–26 reviews) · soy beans and niboshi with cumin as snacks; seasonal sake chosen to taste (2026 reviews) · about ¥5,000–10,000 a head (2026 reviews)',
    website: null, gmaps: gm('乍旨司 二条城'), menu_url: null,
    notes: "[Seafood izakaya · Nijo Castle, sashimi seasoned piece by piece] A busy neighbourhood izakaya near Nijo Castle where the sashimi comes without soy and wasabi — each slice has its own seasoning, like tuna with natto sauce or salt-seared swordfish — and the signature roll is buried in sea urchin. Add the changing obanzai, fried horse mackerel and seasonal sake picked to your taste. About ¥5,000–10,000. Book ahead; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed in the sources)'], origin: null,
      background: 'Opened 7 July 2019 (Tabelog). An April 2026 visitor came on the recommendation of a Pontocho chef; reviewers praise the care in each dish and the seasonal sake (2026 reviews).',
      philosophy: null, specialty: 'Seasoned sashimi platter; namida uni roll.',
      anecdotes: [
        { text: 'An October 2026 diner, there for the uni sushi, wished the floor service were more attentive given the chefs’ effort, and was unsure about returning.', source: R + 'B538013453/' },
        { text: 'An August 2026 diner went back within a week and found the obanzai and sashimi platter already changed.', source: R + 'B535715762/' },
        { text: 'A May 2026 diner was asked about preferences before each sake was poured.', source: R + 'B528526956/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、中京区西大黒町336-10、二条城前駅から454m、月火木金 17:00〜22:30、土日 15:00〜22:00、水曜休み、予約可、20席、禁煙、カード・交通系IC・PayPay 可、2019年7月7日オープン。口コミ (2025年8月〜2026年10月、英語): 二条城の近く、醤油とわさびではなく一切れずつ味付けした刺身の盛り合わせ、名物の Namida Uni の巻き、鉄火巻き、おばんざいの盛り合わせ、鯵フライのパセリソース、季節の日本酒、いつも満席、ホールの接客に不満という声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B506042862/', R + 'B527846285/', R + 'B528315300/', R + 'B528526956/', R + 'B529206467/', R + 'B530914528/', R + 'B534152111/', R + 'B534967806/', R + 'B535715762/', R + 'B535918052/', R + 'B536548040/', R + 'B538013453/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; order à la carte; sake chosen to your taste; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西大黒町336-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013570, 135.754739); cross-checked: GSI 京都府京都市中京区西大黒町336番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529206467/', R + 'B535715762/'],
    price_note: 'No item prices found; reviews give about ¥5,000–10,000 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi, each piece seasoned', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'sashimi_moriawase'),
      it('', '', 'Namida uni roll', '', 'Rolls', 'ask', 'no', '2026 reviews.', 'namida_uni_maki'),
      it('', '', 'Assorted obanzai', '', 'Small plates', 'ask', 'no', 'August–October 2026.', 'obanzai_moriawase'),
    ] }, {
    cuisine: '季節で変わる品書きの魚の居酒屋 (2026年の口コミ)・刺身の盛り合わせは醤油とわさびではなく一切れずつ味付け: 納豆ソースのまぐろ、漬けのまぐろ、塩たたきのかじき、塩の鰹など (2026年の口コミ)・名物の「Namida Uni」の巻き、鉄火巻き、ねぎとろ巻き、焼き鰻の巻き、うにの軍艦、とろたく (2026年の口コミ)・入れ替わるおばんざいの盛り合わせ、鯵フライのパセリソース、鮑の肝醤油、鶏チャーシューと卵、炭火の鶏、焼き鱧、鱧の子の玉子豆腐、蛸のやわらか煮 (2025〜2026年の口コミ)・つまみに醤油豆やクミンの煮干し、季節の日本酒は好みを聞いて (2026年の口コミ)・1人約5,000〜10,000円 (2026年の口コミ)',
    neighborhood: '二条城の近く。二条城前駅から454m',
    gf_detail: '要確認。刺身はにんにく醤油や納豆ソースなどで一切れずつ味付けし、揚げ物や巻き寿司もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚介の居酒屋で、おばんざいなどに出汁を使う (2026年の口コミ)。',
    notes: '[魚の居酒屋・二条城、一切れずつ味付けした刺身] 二条城の近くのにぎやかな居酒屋。刺身は醤油とわさびではなく、納豆ソースのまぐろや塩たたきのかじきのように一切れずつ味が付き、名物の巻き寿司はうにで埋まる。入れ替わるおばんざい、鯵フライ、好みを聞いて選ぶ季節の日本酒も。1人5,000〜10,000円ほど。予約を。水曜休み。',
  });
}

// ================================================================ Fiorisca
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021074/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_fiorisca', name: 'フィオリスカ (Fiorisca)', category: 'OMNI',
    lat: 35.013267, lng: 135.762537, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses centre on handmade pasta — tagliolini, tagliatelle, ravioli, gnocchi — plus fried dough and baked sweets (2025–26 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-led courses, but with seafood, meat and cheese, e.g. a gorgonzola mousse and pork terrine (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 and dinner 18:00–21:30; closed Tuesday (Tabelog). Reservations accepted; same-day bookings sometimes possible (Tabelog; October 2025). Lunch courses about ¥3,000–5,000; dinner courses under ¥9,000 to about ¥10,000; a 10-dish course with two drinks ¥9,800 via Ikkyu (2024–26 reviews). 15 seats, mainly a counter; private hire up to 20; non-smoking; cards, no e-money (Tabelog). Quiet residential street a few minutes north of Oike, 7 min from Karasuma Oike Stn (Tabelog; January 2026). Opened 20 March 2012 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Oike — 7 min from Karasuma Oike Stn',
    cuisine: 'Italian courses of seasonal Kyoto vegetables and seafood with handmade pasta (2025–26 reviews) · lunch: soup, assorted antipasti, two handmade pastas, fish or meat, dessert — e.g. white-fish tagliatelle, gnocchi, pork or pan-seared sawara, passion-fruit gelato (October 2026) · dinner of about 10 dishes: daikon soup, gorgonzola mousse with anpo persimmon, cauliflower blancmange with white sesame, Goto Islands yellowtail tartare, two pastas, fish, meat, dessert and baked sweets (January and April 2026) · a "rare pasta" three-pasta course (October 2026) · Italian wines (2026 reviews)',
    website: null, gmaps: gm('フィオリスカ 京都 高倉'), menu_url: null,
    notes: "[Italian · Karasuma Oike, a couple's counter of Kyoto vegetables] A small counter on a quiet street north of Oike, opened in 2012 and now run by a couple, cooking gentle, vegetable-led Italian with seafood and handmade pasta — a pure daikon soup, cauliflower blancmange, two pastas, then fish or meat. Lunch courses about ¥3,000–5,000, dinner around ¥9,000–10,000. One diner found the pasta portions small in the three-pasta course. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (October 2025 review); names not given'], origin: null,
      background: 'Opened 20 March 2012 (Tabelog). An October 2025 diner found the couple running the restaurant serving quickly and efficiently; a September 2026 regular came on the recommendation of a chef at a well-known Kyoto restaurant.',
      philosophy: null, specialty: 'Vegetable and seafood courses; handmade pasta.',
      anecdotes: [
        { text: 'An October 2026 diner found the pasta portions small in the three-pasta course, with gnocchi-like dishes counted as pasta.', source: R + 'B537070760/' },
        { text: 'A December 2024 host was grateful the restaurant took a small group late at night.', source: R + 'B497857554/' },
        { text: 'A September 2026 regular hopes it stays easy to book.', source: R + 'B536297076/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区高倉二条下ル瓦町545 アビリティ高倉 1F、烏丸御池駅から徒歩7分、昼 12:00〜14:00・夜 18:00〜21:30、火曜休み、予約可、15席、貸切20名まで、禁煙、カード可 (電子マネー不可)、2012年3月20日オープン。口コミ (2024年12月〜2026年10月、英語): 京野菜と魚介のコース、手打ちパスタ、夫婦で営む店 (2025年10月)、昼のコース約3,000〜5,000円、夜は9,000円前後、一休のプラン9,800円 (10品と2ドリンク)、パスタの量が少ないという声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B497857554/', R + 'B501838391/', R + 'B503877821/', R + 'B515090390/', R + 'B515167154/', R + 'B520647110/', R + 'B525823743/', R + 'B530689446/', R + 'B531458097/', R + 'B536297076/', R + 'B537070760/', R + 'B537668544/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course; counter seating; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区高倉二条下ル瓦町545 アビリティ高倉 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. The website on Tabelog (fiorisca.com) does not resolve.' },
    pin_source: `Tabelog ${TB} (35.013267, 135.762537); cross-checked: GSI 京都府京都市中京区瓦町545番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520647110/', R + 'B497857554/'],
    price_note: 'Prices from reviews: ¥9,800 Ikkyu plan (January 2026); dinner under ¥9,000 (December 2024); lunch bills about ¥3,000–5,000 (2024–26).', last_checked: TODAY, items: [
      it('', '', 'Vegetable and seafood course (10 dishes) with two drinks, Ikkyu plan', '¥9,800', 'Course', 'ask', 'ask', 'January 2026.', 'ikkyu_course'),
      it('', '', 'Lunch course with two handmade pastas', 'about ¥3,000–5,000', 'Lunch', 'ask', 'ask', '2024–26 reviews.', 'lunch_course'),
    ] }, {
    cuisine: '京野菜と魚介と手打ちパスタのイタリアンのコース (2025〜2026年の口コミ)・昼: スープ、前菜の盛り合わせ、手打ちパスタ2品、魚か肉、デザート。白身魚の tagliatelle、ニョッキ、豚か鰆のソテー、パッションフルーツのジェラートなど (2026年10月)・夜は約10品: 大根のスープ、あんぽ柿とゴルゴンゾーラのムース、カリフラワーのブランマンジェと白胡麻、Goto の鰤のタルタル、パスタ2品、魚、肉、デザートと焼き菓子 (2026年1月・4月)・珍しいパスタ3種のコース (2026年10月)・イタリアワイン (2026年の口コミ)',
    neighborhood: '御池の北の高倉。烏丸御池駅から徒歩7分',
    gf_detail: '要確認。tagliolini、tagliatelle、ラビオリ、ニョッキなど手打ちパスタが中心で、揚げた生地や焼き菓子もある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。野菜中心のコースだが、魚介、肉、チーズも使う (ゴルゴンゾーラのムース、豚のテリーヌなど、2026年の口コミ)。',
    notes: '[イタリアン・烏丸御池、夫婦の京野菜のカウンター] 御池の北の静かな通りの小さなカウンター。2012年に開店し、夫婦で営む店で、野菜を主役に魚介と手打ちパスタのやさしいイタリアンを出す。大根だけのスープ、カリフラワーのブランマンジェ、パスタ2品、魚か肉。昼のコースは約3,000〜5,000円、夜は9,000〜10,000円ほど。パスタ3種のコースは量が少ないという声も。火曜休み。',
  });
}

save();
