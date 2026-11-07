// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 53.
// Core lane: one shop left (バビルサ); then the rest list in the lane, nearest-first (queue.mjs ... next rest 2000):
//   + バビルサ Babirusa (one-person Singaporean and South Asian kitchen near Enmachi; since 2022)                  [core]
//   - 葦島珈琲 — same-concept sister of a shop in data (kyoto_kissa_ashijima, 喫茶葦島)                           [rest]
//   - デリカKYK 高島屋京都店 — chain (株式会社曲田商店: デリカKYK 24 shops)                                         [rest]
//   - サイゼリヤ 四条河原町駅前店 — chain                                                                          [rest]
//   - 浪花ひとくち餃子 チャオチャオ 四条河原町店 — chain (about 40 shops)                                          [rest]
//   + 牛たん専門店 坂之上商店 四条河原町店 Sakanoue Shoten (Sendai-style beef tongue in an old Kawaramachi house)   [rest]
//   - スターバックスコーヒー 河原町オーパ店 — chain                                                                 [rest]
//   + 日本料理 藤井のぷりん Fujii no Purin (pudding shop of 日本料理 藤井, which is in data; since 2022)             [rest]
//   + 喜人来人 Kito Kito (Hokuriku seafood izakaya off Shijo-Kawaramachi; since 2012)                              [rest]
//   Same-name counts first: バビルサ 0; 坂之上商店 0 — the official site lists only this shop (FLAGGED: the "四条
//   河原町店" name suggests others; none found); 藤井のぷりん — sister concept of kyoto_nihon_ryori_fujii_ginkakuji
//   (a takeout pudding shop, not a branch), drafted; 喜人来人 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: バビルサ 「サービス料チャージ料ともに無し」; the other
//   three have no section.
//   Ruling applied: other-diner remarks only where several reviews agree.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040215', 'same-concept sister of a shop in data: 葦島珈琲 is the Takashimaya T8 sister of 喫茶葦島 (kyoto_kissa_ashijima), with the same self-roasted coffee and sweets (rurubu)');
skip('26019335', 'chain: デリカKYK — 株式会社曲田商店 runs 24 デリカKYK shops and 16 とんかつKYK (company profile in a job listing)');
skip('26022077', 'chain: サイゼリヤ — national family-restaurant chain');
skip('26030003', 'chain: 浪花ひとくち餃子 チャオチャオ (餃子計画) — about 40 shops nationwide (enjoytokyo.jp)');
skip('26041331', 'chain: スターバックスコーヒー');

// ================================================================ バビルサ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26038325/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://leafkyoto.net/en/store/230703-kyoto-babirusa';
  const W = day(['11:30', '22:00']);
  put({
    id: 'kyoto_babirusa_enmachi', name: 'バビルサ (Babirusa)', category: 'MOM_AND_POP',
    lat: 35.020977, lng: 135.730113, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice dishes — chicken rice, biryani, curry with basmati — but laksa noodles, soy sauces and you tiao contain wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken rice, pork-rib bak kut teh, shrimp-coconut laksa (2025–26 reviews).',
    hours_raw: 'Mon–Wed, Fri and Sat 11:30–22:00; Sun 11:30–18:30; closed Thursday; hours may change (Tabelog). Open straight through the afternoon (March 2026 review). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「サービス料チャージ料ともに無し」 (none). Cards: AMEX only; no e-money or QR (Tabelog). 10 seats — 6 on the first floor, 4 up a steep stair (Tabelog; October 2026 review); non-smoking. Biryani tends to sell out by about 14:00 (July 2026 review). 5 min from JR Enmachi Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: W, 6: day(['11:30', '18:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Enmachi — 5 min from JR Enmachi Stn',
    cuisine: 'Singaporean and wider Asian cooking (Leaf Kyoto; 2025–26 reviews): Hainanese chicken rice with jasmine rice and black-soy, chilli and ginger sauces — ¥950 with soup in 2023 (Leaf Kyoto), ¥1,200 in March 2026 — bak kut teh in a more Malaysian style ¥1,250 (July 2026), shrimp-coconut laksa, daily biryani (spare rib; sweet potato, chestnut and pumpkin in October 2026) with curry, three daily curries with basmati or Japanese rice, lu rou fan, chilli chicken; kaya ice, you tiao and café drinks; homemade lemongrass tea and cocktails (Leaf Kyoto)',
    website: null, gmaps: gm('バビルサ 円町'), menu_url: null,
    notes: "[Singaporean · Enmachi] A tiny one-person kitchen near Enmachi Station: Hainanese chicken rice with three sauces, Malaysian-style bak kut teh, shrimp-coconut laksa and a daily biryani that sells out by mid-afternoon, for about ¥1,200–1,500. Open all afternoon; closed Thursday.",
    chef_bio: { chef_name: 'Yajima', roles: ['Owner-chef (surname only, Leaf Kyoto)'], origin: null,
      background: 'Opened 17 September 2022 (Leaf Kyoto, July 2023). Chef Yajima was involved in launching Five Star Cafe, a Singaporean restaurant popular in Tokyo, and has a long history with ethnic cooking (Leaf Kyoto). The owner runs the restaurant alone (July 2026 review).',
      philosophy: null, specialty: 'Hainanese chicken rice; biryani.',
      anecdotes: [
        { text: 'A March 2026 diner asked whether the bak kut teh was Singaporean or Malaysian, was told more Malaysian, and ordered it.', source: R + 'B524754351/' },
        { text: 'An October 2026 regular calls this the place for biryani; that day\'s autumn version had sweet potato, chestnut and pumpkin with curry.', source: R + 'B493840234/' },
        { text: 'In December 2025 a diner spending a local Ittoku pass found it closed on the first try and came back for biryani and bak kut teh.', source: R + 'B525092828/' },
      ],
      japanese_sources_summary: '食べログ: バビルサ、シンガポール料理・インド料理、中京区西ノ京北円町63、JR円町駅から徒歩5分、月〜水・金・土 11:30〜22:00、日 11:30〜18:30、木曜休み、予約可、サービス料・チャージ料なし、カードは AMEX のみ、電子マネー・QR 不可、10席 (1階6、2階4)、禁煙。Leaf Kyoto (2023年7月、英語): 2022年9月17日開店、Chef Yajima は東京の人気シンガポール料理店 Five Star Cafe の立ち上げに関わった、海南チキンライス950円 (スープ付き、黒醤油・チリ・生姜のソース)、バクテー、ラクサ、自家製レモングラスティー。口コミ (2025年12月〜2026年10月、英語): 店主が一人で営む、チキンライス1,200円 (2026年3月)、マレーシア風のバクテー1,250円、海老とココナッツのラクサ、日替わりのビリヤニとカレー、魯肉飯、カヤアイス、油条、ビリヤニは14時ごろに売り切れることも、急な階段。',
      confidence: 'medium', sources: [TB, LEAF, R + 'B459245633/', R + 'B493840234/', R + 'B502016244/', R + 'B524754351/', R + 'B524988213/', R + 'B525092828/', R + 'B531857942/', R + 'B534175587/', R + 'B536803658/', R + 'B537382489/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person shop; steep stairs to the upper seats.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西ノ京北円町63',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.020977, 135.730113); cross-checked: GSI 京都府京都市中京区西ノ京北円町63番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524988213/', R + 'B536803658/'],
    price_note: 'Prices from March and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hainanese chicken rice', '¥1,200', 'Rice', 'ask', 'no', 'March 2026 review (¥950 in Leaf Kyoto, 2023).', 'chicken_rice'),
      it('', '', 'Bak kut teh', '¥1,250', 'Soups', 'ask', 'no', 'July 2026 review.', 'bak_kut_teh'),
    ] }, {
    cuisine: 'シンガポールを中心にしたアジアの料理 (Leaf Kyoto、2025〜26年の口コミ): ジャスミンライスに黒醤油・チリ・生姜のソースの海南チキンライス (2023年はスープ付き950円 (Leaf Kyoto)、2026年3月は1,200円)、マレーシア風のバクテー1,250円 (2026年7月)、海老とココナッツのラクサ、日替わりのビリヤニ (スペアリブ、2026年10月はさつまいも・栗・かぼちゃ) とカレー、バスマティか日本米を選べる3種の日替わりカレー、魯肉飯、鶏の唐辛子炒め。カヤアイス、油条、カフェのドリンク。自家製レモングラスティーとカクテル (Leaf Kyoto)',
    neighborhood: '円町。JR円町駅から徒歩5分',
    gf_detail: '要確認。チキンライス、ビリヤニ、バスマティのカレーなど米の料理が中心だが、ラクサの麺、醤油、油条には小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チキンライス、豚スペアリブのバクテー、海老とココナッツのラクサ (2025〜26年の口コミ)。',
    notes: '[シンガポール料理・円町] 円町駅近くの、店主が一人で営む小さな店。3種のソースの海南チキンライス、マレーシア風のバクテー、海老とココナッツのラクサ、昼過ぎに売り切れる日替わりのビリヤニが1,200〜1,500円ほど。昼から通し営業。木曜休み。',
  });
}

// ================================================================ 牛たん専門店 坂之上商店 四条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025215/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sakanouesyoten.com/';
  const D = day(['11:30', '22:30']);
  put({
    id: 'kyoto_sakanoue_shoten_kawaramachi', name: '牛たん専門店 坂之上商店 四条河原町店 (Gyutan Sakanoue Shoten)', category: 'OMNI',
    lat: 35.004242, lng: 135.769528, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled tongue is offered, but miso and soy-based sauces, tail soup and tororo come with the sets (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef-tongue restaurant (2026 reviews).',
    hours_raw: 'Mon–Wed, Fri–Sun and holidays 11:30–22:30 (food last order 21:45, drinks 30 min before close); closed Thursday (Tabelog). Bookings taken (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR; no e-money (Tabelog). 60 seats with tables, sunken kotatsu seating, tatami rooms and private rooms for 2 to 20; shoes off at the entrance; non-smoking; children welcome (Tabelog; August and October 2026 reviews). In a renovated shop building dating from 1914, the Taisho era (two August 2026 reviews); 2F per the official site. 1 min from Hankyu Kawaramachi Stn exit 3 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi — 1 min from Hankyu Kawaramachi Stn',
    cuisine: 'Sendai-style beef tongue grilled over charcoal to order (2026 reviews): aged beef tongue set meals of 6 slices or small, with salt, miso or soy-based sauce, rice, tail soup and optional tororo; aged beef tongue ¥1,868, boiled tongue ¥1,099, gyutan meat bowl gozen ¥4,244 (October 2026); Sendai gyutan mabushi gozen finished as ochazuke, Meguri gozen with miso and wasabi; tongue stew; wagyu nigiri; a beef-tongue tasting platter; beef-tongue course ¥5,000 by booking (HotPepper); sake, shochu and wine (Tabelog)',
    website: SITE, gmaps: gm('坂之上商店 四条河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sendai beef tongue · Shijo-Kawaramachi] A beef-tongue specialist a minute from Kawaramachi Station, in a renovated 1914 house with tatami and private rooms: thick charcoal-grilled tongue sets with salt, miso or sauce, tail soup and rice, plus boiled tongue and stew. Lunch about ¥2,000–3,000; dinner ¥3,000–5,000. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 18 February 2015 (Tabelog). The official site lists this Shijo-Kawaramachi shop only.',
      philosophy: null, specialty: 'Charcoal-grilled aged beef tongue.',
      anecdotes: [
        { text: 'A June 2026 regular on a third visit always orders the small aged-tongue set with a mini salad and prefers the salt version.', source: R + 'B534605122/' },
        { text: 'Eight pottery friends booked an October 2026 lunch of tongue and wagyu nigiri and were seated at once.', source: R + 'B537251707/' },
        { text: 'An August 2026 family found the century-old setting surprisingly easy with children.', source: R + 'B536408210/' },
      ],
      japanese_sources_summary: '食べログ: 牛たん専門店 坂之上商店 四条河原町店、牛タン・居酒屋・肉料理、中京区河原町通四条上ル米屋町388、阪急河原町駅3番出口から徒歩1分、月〜水・金〜日・祝 11:30〜22:30 (料理 L.O. 21:45)、木曜休み、予約可、カード・QR 可、電子マネー不可、60席、個室 (2〜20名)、座敷、掘りごたつ、禁煙、子ども可、2015年2月18日オープン。公式サイト: 四条河原町店 (2F) のみ。ホットペッパー: 牛タン堪能コース5,000円 (予約制)。口コミ (2026年6〜10月、英語): 1914年 (大正) の建物を改装、靴を脱いで上がる、炭火で焼く熟成牛たん、塩・味噌・たれ、テールスープ、とろろ、熟成牛たん1,868円、茹でタン1,099円、牛たんまぶし御膳4,244円、めぐり御膳、牛たんシチュー、和牛のにぎり、牛たん食べ比べ。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.hotpepper.jp/strJ000020467/', R + 'B529768662/', R + 'B532582566/', R + 'B533633583/', R + 'B534605122/', R + 'B536408210/', R + 'B536840042/', R + 'B537251707/', R + 'B537715422/', R + 'B538369935/', R + 'B538623824/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; choose a sauce for the tongue.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上ル米屋町388 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004242, 135.769528); cross-checked: GSI 京都府京都市中京区米屋町388番地 (lot) 26m; 8.3 m from kyoto_eirakuya_honten; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536840042/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Aged beef tongue', '¥1,868', 'Grill', 'ask', 'no', 'October 2026 review.', 'jukusei_tan'),
      it('', '', 'Boiled tongue', '¥1,099', 'Dishes', 'ask', 'no', 'October 2026 review.', 'yude_tan'),
    ] }, {
    cuisine: '注文ごとに炭火で焼く仙台流の牛たん (2026年の口コミ): 6枚または小の熟成牛たんの定食に、塩・味噌・醤油ベースのたれ、ご飯、テールスープ、とろろも。熟成牛たん1,868円、茹でタン1,099円、牛たん肉丼の御膳4,244円 (2026年10月)。茶漬けで締める仙台牛たんのまぶし御膳、味噌とわさびのめぐり御膳、牛たんシチュー、和牛のにぎり、牛たんの食べ比べ。予約制の牛たんコース5,000円 (ホットペッパー)。日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '四条河原町。阪急河原町駅から徒歩1分',
    gf_detail: '要確認。塩焼きもあるが、味噌や醤油ベースのたれ、テールスープ、とろろが定食に付く (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛たんの店 (2026年の口コミ)。',
    notes: '[仙台の牛たん・四条河原町] 河原町駅から1分、座敷や個室のある1914年の建物を改装した牛たん専門店。炭火で焼く厚切りの牛たんを塩・味噌・たれで、テールスープとご飯の定食に。茹でタンやシチューも。昼は2千〜3千円、夜は3千〜5千円ほど。木曜休み。',
  });
}

// ================================================================ 日本料理 藤井のぷりん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037935/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-fujiinopurin.com/';
  const A = day(['11:00', '21:00']); const B = day(['10:00', '21:00']);
  put({
    id: 'kyoto_fujii_no_purin_shijo', name: '日本料理 藤井のぷりん (Fujii no Purin)', category: 'OMNI',
    lat: 35.003854, lng: 135.767714, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Puddings and jellies; the buckwheat-tea pudding comes with buckwheat grains. Flour use not described (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Soy-milk puddings without eggs are offered (May 2023 review), but whether any are fully vegan is not stated.',
    hours_raw: 'Mon, Thu and Fri 11:00–21:00; Tue, Sat and Sun 10:00–21:00; closed Wednesday; hours may change (Tabelog). Takeout only; no bookings (Tabelog; 2023–26 reviews). Cards, e-money and QR (Tabelog). Gift boxes available (June 2026 review); best eaten within three days, with an ice pack for two hours (February 2024 review). On Shijo-dori east of Teramachi, by the bus stop, beside Kyoto-Kawaramachi Stn (Tabelog; 2023 and February 2026 reviews).',
    hours: { 0: A, 1: B, 3: A, 4: A, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori by Teramachi — beside Kyoto-Kawaramachi Stn',
    cuisine: 'Takeout puddings from the kaiseki restaurant 日本料理 藤井, made by its cooks (Tabelog; reviews): the signature smooth pudding of Tanba egg yolks, cream and milk with caramel on the side, and soy-milk puddings — matcha, black tea, hojicha, buckwheat tea with crunchy buckwheat and kuromitsu, black sesame; coffee jelly with soy-milk pudding, pumpkin pudding, pineapple jelly; ¥500 each (2023 and January 2025)',
    website: SITE, gmaps: gm('藤井のぷりん 四条'), menu_url: null,
    notes: "[Pudding · Shijo-Kawaramachi] The takeout pudding shop of 日本料理 藤井, the kaiseki restaurant near the Philosopher's Path: a silky Tanba-egg pudding with caramel and gentle soy-milk puddings — hojicha, black sesame, buckwheat tea with kuromitsu — about ¥500 each, in gift boxes too. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Cooks of 日本料理 藤井 (unnamed)'], origin: null,
      background: 'Opened 1 July 2022 (Tabelog; February 2026 review), selling the pudding served as dessert at 日本料理 藤井, the kaiseki restaurant near Ginkaku-ji on the Philosopher\'s Path (May 2023 and February 2026 reviews).',
      philosophy: null, specialty: 'Smooth pudding; soy-milk puddings.',
      anecdotes: [
        { text: 'A June 2026 shopper bought several puddings in gift boxes and one buckwheat pudding to try — subtly sweet with a crunch.', source: R + 'B529917402/' },
        { text: 'A January 2025 visitor found the black sesame soy-milk pudding refreshing rather than heavy.', source: R + 'B498466945/' },
        { text: 'A February 2026 first-timer was drawn by the line-up of soy-milk, tea and buckwheat puddings from a kaiseki kitchen.', source: R + 'B523861657/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理 藤井のぷりん、洋菓子、下京区四条通寺町東入ル御旅宮本町13-3、京都河原町駅から82m、月・木・金 11:00〜21:00、火・土・日 10:00〜21:00、水曜休み、予約不可、テイクアウト、カード・電子マネー・QR 可、2022年7月1日オープン。口コミ (2023年1月〜2026年6月、英語): Ginkaku-ji 近く Philosopher’s Path の日本料理 藤井のデザートのプリン、Tanba の卵黄・生クリーム・牛乳のなめらかぷりんとカラメル、卵を使わない豆乳プリン (抹茶、紅茶、ほうじ茶、そば茶とそばの実と黒蜜、黒ごま)、豆乳プリンのコーヒーゼリー、かぼちゃ、パイナップルのゼリー、各500円、ギフトボックス、3日以内に、保冷剤2時間。',
      confidence: 'medium', sources: [TB, SITE, R + 'B459781295/', R + 'B465091154/', R + 'B476832043/', R + 'B479680837/', R + 'B493805298/', R + 'B498466945/', R + 'B523861657/', R + 'B529917402/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeout counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通寺町東入ル御旅宮本町13-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.003854, 135.767714); cross-checked: GSI 京都府京都市下京区御旅宮本町13番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498466945/', R + 'B476832043/'],
    price_note: 'Prices from 2023 and January 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Smooth pudding with caramel', '¥500', 'Pudding', 'ask', 'no', '2023 reviews.', 'nameraka_purin'),
      it('', '', 'Black sesame soy-milk pudding', '¥500', 'Pudding', 'ask', 'ask', 'January 2025 review.', 'kurogoma_tonyu'),
    ] }, {
    cuisine: '懐石の日本料理 藤井の料理人が作る持ち帰りのプリン (食べログ、口コミ): Tanba の卵黄・生クリーム・牛乳のなめらかぷりん (カラメルは別添え)、卵を使わない豆乳プリン (抹茶、紅茶、ほうじ茶、そばの実と黒蜜のそば茶、黒ごま)。豆乳プリンのコーヒーゼリー、かぼちゃプリン、パイナップルのゼリー。各500円 (2023年・2025年1月)',
    neighborhood: '寺町の東の四条通。京都河原町駅のそば',
    gf_detail: '要確認。プリンとゼリー。そば茶のプリンにはそばの実。小麦の使用は不明 (口コミ)。',
    vegan_detail: '要確認。卵を使わない豆乳プリンがある (2023年5月の口コミ) が、完全にヴィーガンかは不明。',
    notes: '[プリン・四条河原町] Philosopher’s Path 近くの懐石の日本料理 藤井の、持ち帰りのプリン店。Tanba の卵のなめらかなプリンとカラメル、ほうじ茶、黒ごま、黒蜜のそば茶などのやさしい豆乳プリンが各500円ほど。ギフトボックスも。水曜休み。',
  });
}

// ================================================================ 喜人来人
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021843/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kito_kito_shijo', name: '喜人来人 (Kito Kito)', category: 'OMNI',
    lat: 35.00354, lng: 135.770287, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled fish, but tempura, noodles and soy-seasoned dishes are on the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood restaurant; wagyu, duck and chicken dishes (2026 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00 (last order 22:30); closed Monday (Tabelog). Bookings taken (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 34 seats: a counter of 9, tables, a tatami room for 8 and semi-private rooms for 4–6, some on the second floor; designated smoking area; children welcome (Tabelog; May and July 2026 reviews). Service can be slow when busy — an hour\'s wait for dishes on a full September night, and a chaotic kitchen, two September 2026 reviewers note. 10 seconds from Hankyu Kawaramachi Stn exit 1B; just off Kiyamachi (Tabelog; April 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Kawaramachi by Kiyamachi — 10 s from Hankyu Kawaramachi Stn',
    cuisine: 'Hokuriku (Kanazawa) seafood and Kaga vegetables (2026 reviews): sashimi platters made up to your choice from the blackboard — nodoguro, flounder, mahata, bonito, shima-aji, gasu-ebi, shiro-ebi, "sawara" (swordfish in Hokuriku usage), whole abalone; thick mackerel sushi; seasonal tempura including Gorojima kintoki sweet potato; beef tendon with daikon; wagyu steak; duck breast you grill yourself; octopus with ume paste; chicken wings; chicken-bone noodles; zosui; sake, shochu and wine, bottled Sapporo Lager Akaboshi in a cooler (2026 reviews; Tabelog)',
    website: null, gmaps: gm('喜人来人 四条河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Hokuriku seafood izakaya · Shijo-Kawaramachi] A calm, stylish izakaya steps from Kawaramachi Station serving Kanazawa fish — nodoguro, gasu-ebi, shiro-ebi in sashimi platters you build from the blackboard — plus thick mackerel sushi and seasonal tempura with sake. About ¥8,000–15,000. Can be slow when full; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Opened 10 November 2012 (Tabelog). A September 2026 reviewer who had visited long before thought it now run by different people, with a Japanese head chef directing a mostly foreign staff.',
      philosophy: null, specialty: 'Hokuriku sashimi platter; mackerel sushi.',
      anecdotes: [
        { text: 'A March 2026 first-timer chose favourites for the sashimi platter and was told the abalone would be served whole.', source: R + 'B525379415/' },
        { text: 'An April 2026 diner liked the Sapporo Lager Akaboshi served with an aluminium cooler to keep it cold.', source: R + 'B527316676/' },
        { text: 'A November 2026 diner, ordering five kinds of sashimi from the blackboard, found the gasu-ebi as fresh as in Kanazawa.', source: R + 'B538716117/' },
      ],
      japanese_sources_summary: '食べログ: 喜人来人、海鮮・居酒屋・日本料理、下京区四条通小橋西入真町90-6、阪急河原町駅1B出口から徒歩10秒、火〜日 17:00〜23:00 (L.O. 22:30)、月曜休み、予約可、カード・PayPay 可、電子マネー不可、34席 (カウンター9、テーブル、8名の座敷、4〜6名の半個室)、分煙、子ども可、2012年11月10日オープン、魚・日本酒・焼酎・ワインにこだわる。口コミ (2026年3〜11月、英語): Hokuriku (Kanazawa) の魚と Kaga 野菜、黒板から選ぶ刺身の盛り合わせ (のどぐろ、平目、マハタ、鰹、縞鯵、ガスエビ、白エビ、鮑)、厚い鯖寿司、Gorojima 金時の天ぷら、牛すじ大根、和牛ステーキ、自分で焼く鴨ロース、たこの梅肉和え、手羽、鶏ガラの麺、雑炊、赤星を保冷ケースで、2階の席、混むと料理が遅いという声が2件、日本人の料理長と外国人のスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B525379415/', R + 'B527052776/', R + 'B527316676/', R + 'B527679391/', R + 'B533413092/', R + 'B534260125/', R + 'B534817670/', R + 'B536163953/', R + 'B536796289/', R + 'B538716117/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Blackboard fish list; staff help build a sashimi platter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通小橋西入真町90-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003540, 135.770287); cross-checked: GSI 京都府京都市下京区真町90番地 (lot) 40m; 10.1 m from kyoto_teppanyaki_grow; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538716117/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter (choose from the blackboard)', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'sashimi_moriawase'),
      it('', '', 'Mackerel sushi', '', 'Sushi', 'ask', 'no', 'March 2026 review.', 'saba_zushi'),
    ] }, {
    cuisine: 'Hokuriku (Kanazawa) の魚と Kaga 野菜 (2026年の口コミ): 黒板から好みで選ぶ刺身の盛り合わせ (のどぐろ、平目、マハタ、鰹、縞鯵、ガスエビ、白エビ、Hokuriku でいう「さわら」(カジキ)、丸ごとの鮑)、厚い鯖寿司、Gorojima 金時などの季節の天ぷら、牛すじ大根、和牛ステーキ、自分で焼く鴨ロース、たこの梅肉和え、手羽、鶏ガラの麺、雑炊。日本酒、焼酎、ワイン、保冷ケースの赤星 (2026年の口コミ、食べログ)',
    neighborhood: '四条河原町、木屋町そば。阪急河原町駅から徒歩10秒',
    gf_detail: '要確認。刺身や焼き魚もあるが、天ぷら、麺、醤油味の料理もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の店。和牛、鴨、鶏の料理も (2026年の口コミ)。',
    notes: '[Hokuriku の魚の居酒屋・四条河原町] 河原町駅から数歩の、落ち着いたおしゃれな居酒屋。のどぐろ、ガスエビ、白エビなどKanazawa の魚を黒板から選んで刺身の盛り合わせに。厚い鯖寿司や季節の天ぷらを日本酒と。8千〜1万5千円ほど。混むと遅いことも。月曜休み。',
  });
}

save();
