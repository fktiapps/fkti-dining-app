// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 4.
//   + 大阪木津市場 天はな ホワイティうめだ店 Osaka Kizu Ichiba Ten Hana (tempura counter and standing bar in Whity Umeda, opened February 2025)
//   + 中華料理 梅香 地蔵横丁店 Chinese Meishan, Jizo Yokocho (tofu-and-yuba Chinese of the Ume no Hana group, opened June 2025)
//   + 世界のワイン博物館 グランフロント大阪店 Sekai no Wine Hakubutsukan (wine bar and world buffet, Grand Front Osaka North B1F, since 2013)
//   + 四季乃味 今井きしょう Imai Kishou (seasonal Japanese in the basement of 大阪駅前第1ビル)
//   Chain check (flagged for the integrator: two brands belong to large groups, kept because each brand is one or two shops):
//   - 天はな: the only shop of a format that 株式会社グルメ杵屋レストラン developed and opened in Whity Umeda on 20 February 2025
//     (PR TIMES release, 21 January 2025, read via excite.co.jp/news/article/Prtimes_2025-01-21-90386-54/); a Gourmet Kineya brand,
//     but one shop. No Gourmet Kineya shop is in data/osaka.json.
//   - 梅香: two shops, this one and 阪急三番街店 nearby (Tabelog remarks), "produced by Ume no Hana" (Tabelog); osw6-1 skipped
//     梅の花 梅田店 as the national chain, but 梅香 is a separate two-shop Chinese brand.
//   - 世界のワイン博物館: one shop on the operator's page (zato.co.jp, ZATO group, read 2026-11-01).
//   - 今井きしょう: one shop (imai-kishou.com, copyright SANAE.inc).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大阪木津市場 天はな
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27147498/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://www.excite.co.jp/news/article/Prtimes_2025-01-21-90386-54/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_tenhana_whity_umeda', name: '大阪木津市場 天はな ホワイティうめだ店 (Osaka Kizu Ichiba Ten Hana)', category: 'OMNI',
    lat: 34.703214, lng: 135.499628, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter, everything battered and fried, with tempura dipping sauce; Tabelog notes allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and vegetable tempura from shared oil, with dipping sauce, red miso soup and whitebait in the sets.',
    hours_raw: 'Daily 11:00–22:00, last order 21:15; lunch 11:00–15:00, standing bar 15:00–22:00 (Tabelog); the listing text also says weekday lunch until 14:00 and standing drinks from 11:00 at weekends. Lunch sets only at lunch; at night tempura is ordered piece by piece, and rice and miso soup à la carte (September 2026). No reservations (Tabelog). No service charge (Tabelog\'s original text: 無し). Cards, e-money and QR (Tabelog); PayPay (September 2026). 11 seats at a U-shaped counter at lunch, about 18 standing places at night; some nights chairs are put out (December 2025). Non-smoking; school-age children welcome (Tabelog). Opened 20 February 2025 (Tabelog; press release).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Whity Umeda underground mall (ホワイティうめだ), North Mall 1, 角田町梅田地下街2-4 — 3–4 min from the Umeda gates of the Midosuji, Hankyu and Hanshin lines',
    cuisine: 'Tempura counter and standing bar using seafood bought daily at Osaka Kizu Market, fried in small batches in front of you (Tabelog; Gourmet Kineya press release) · weekday lunch sets with rice, red miso soup and free refills of boiled whitebait (press release; September 2026): the recommended set of seven tempura (shrimp, cod, scallop, eggplant, green pepper, daikon, pickled ginger) ¥770 (August and October 2026), chicken tempura set ¥880 (August 2026), the 幸おとこ set ("Sachi Otoko", four seafood and seven vegetable tempura; September 2026); large rice ¥50 more (August 2026) · at night: seven-piece bite-size tempura platter ¥500, large shrimp ¥320, soft-boiled egg tempura ¥120, rice ¥150, red miso soup ¥120 (September 2026); conger eel, mentaiko-and-nori roll, tofu tempura, sesame tofu, tomato, ginkgo nuts; tempura rice bowl at night too; ochazuke · salt and curry salt to dip · fried-tofu dishes and house-made tofu (Tabelog) · Maru F draft beer ¥480 (August 2026), Osaka local sake, happy-hour highballs: four highballs, seven tempura, ginkgo nuts and ochazuke for ¥2,000 (October 2026)',
    website: 'https://gourmet-kineya.co.jp/search/2167/', gmaps: gm('天はな ホワイティうめだ'), menu_url: null,
    notes: "[Tempura · Umeda underground, a tempura counter in Whity] A small U-shaped counter in the Whity Umeda underground mall where tempura is fried a few pieces at a time in front of you, from seafood bought each morning at Osaka Kizu Market. Gourmet Kineya opened it in February 2025 as a tempura izakaya named after the market. At lunch, a set of seven pieces (shrimp, cod, scallop, eggplant, pepper, daikon and red pickled ginger) with rice and red miso soup is ¥770, and the boiled whitebait is free to refill. After 15:00 it becomes a standing bar: a ¥500 plate of seven bite-size tempura, a ¥320 large shrimp, beer and Osaka sake, salt or curry salt to dip. A September 2026 diner found the pieces small but cheap; an October 2026 diner ate and drank four highballs for ¥2,000. One older regular says the same owner ran a tempura-bowl shop here twenty years ago (October 2026). No bookings.",
    chef_bio: { chef_name: null, roles: ['Counter staff of 株式会社グルメ杵屋レストラン (unnamed)'], origin: null, background: 'Per the Gourmet Kineya Restaurant press release (PR TIMES, 21 January 2025): a new izakaya format built on freshly fried tempura, opened at Whity Umeda on 20 February 2025, its main ingredients bought daily at Osaka Kizu Market; lunch sets of daily tempura named 「幸おとこ」 and 「幸むすめ」, free refills of boiled whitebait from the market, and bite-size tempura (豆天) at night. Per an October 2026 review: a regular of a cheap tempura-bowl shop here twenty years ago was told by staff that "the owner hasn\'t changed".', philosophy: null, specialty: 'Tempura fried to order; lunch set with free whitebait.',
      anecdotes: [
        { text: '"In the U-shaped counter, tempura was being fried efficiently and served on a platter." — August 2026, the recommended lunch set for JPY 770.', source: R + 'B533328317/' },
        { text: '"I had 4 highballs, an assortment of 7 types of tempura, ginkgo nuts, and finished with ochazuke, all for just JPY 2000." — October 2026.', source: R + 'B537340373/' },
        { text: '"I decided to try it out because it\'s rare to find a place that offers unlimited shirasu (whitebait)." — September 2026, the Sachi Otoko set.', source: R + 'B535141962/' },
      ],
      japanese_sources_summary: 'プレスリリース (株式会社グルメ杵屋レストラン、PR TIMES、2025年1月21日): 揚げたての天ぷらを主要食材とする居酒屋業態「大阪木津市場 天はな」を開発、ホワイティうめだに2025年2月20日オープン、毎日大阪木津市場から仕入れる旬の海鮮、ランチは日替わりの天ぷらの定食「幸おとこ」「幸むすめ」、大阪木津市場の釜揚げしらすが食べ放題、夜はいろいろな食材の「豆天」。食べログ (店舗会員): 天ぷら・居酒屋、大阪市北区角田町梅田地下街2-4 ホワイティうめだ、毎日11:00〜22:00 (L.O.21:15)、ランチ11:00〜15:00、立ち飲み15:00〜22:00、予約不可、サービス料なし、カード・電子マネー・QR 可、ランチ11席、立ち飲み約18名、禁煙、子ども (小学生以上) 可、アレルギー表示あり、2025年2月20日オープン、木津市場直送の食材、少しずつ目の前で揚げる、揚げ出し豆腐など、平日は自家製の豆腐とみそ汁のランチ、週末は11時から立ち飲み、大阪の地酒。口コミ(2025年12月〜2026年10月): おすすめランチ770円 (エビ、タラ、ホタテ、なす、ピーマン、大根、紅しょうが)、とり天定食880円、幸おとこ定食、しらす食べ放題、ごはん大盛り50円、夜の豆天7種500円、大エビ天320円、半熟卵天120円、ごはん150円、赤だし120円、ハモ、明太子ののり巻き天、豆腐の天ぷら、ごま豆腐、トマト、ぎんなん、夜も天丼、お茶漬け、塩とカレー塩、ハイボール4杯と天ぷらで2,000円、20年前の天丼の店と同じオーナー。',
      confidence: 'medium', sources: [TB, PR, R + 'B519389641/', R + 'B533328317/', R + 'B534366603/', R + 'B534691992/', R + 'B535141962/', R + 'B535592823/', R + 'B535761952/', R + 'B536800378/', R + 'B537340373/', R + 'B537448096/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating, no bookings; set meals at lunch, tempura by the piece at night (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区角田町梅田地下街2-4 ホワイティうめだ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator\'s press release; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves only the town 大阪府大阪市北区角田町 (town) 68m away, and the shop is inside the Whity Umeda underground mall, so the pin rests on the Tabelog point alone; no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533328317/', R + 'B535592823/', R + 'B534366603/'],
    price_note: 'Prices from August–October 2026 reviews (tax included per the August 2026 review); no menu prices on the operator pages read.', last_checked: TODAY, items: [
      it('', '', 'Recommended lunch set: seven tempura, rice, red miso soup', '¥770', 'Lunch sets', 'no', 'no', 'August and October 2026.', 'lunch_set'),
      it('', '', 'Chicken tempura set meal', '¥880', 'Lunch sets', 'no', 'no', 'August 2026.', 'toriten_set'),
      it('幸おとこ', '', '"Sachi Otoko" set: four seafood and seven vegetable tempura', '', 'Lunch sets', 'no', 'no', 'Press release; September 2026.', 'sachi_otoko'),
      it('', '', 'Seven-piece bite-size tempura platter', '¥500', 'Evening', 'no', 'no', 'August and September 2026.', 'mameten'),
      it('', '', 'Large shrimp tempura', '¥320', 'Evening', 'no', 'no', 'September 2026.', 'ebi_ten'),
      it('', '', 'Soft-boiled egg tempura', '¥120', 'Evening', 'no', 'no', 'September 2026.', 'tamago_ten'),
    ] }, {
    cuisine: '大阪木津市場で毎日仕入れる魚介を、目の前で少しずつ揚げる天ぷらのカウンターと立ち飲み (食べログ、グルメ杵屋のプレスリリース)・平日のランチは定食で、ごはん、赤だし、釜揚げしらすの食べ放題つき (プレスリリース、2026年9月): エビ、タラ、ホタテ、なす、ピーマン、大根、紅しょうがの天ぷら7種のおすすめ定食770円 (2026年8月・10月)、とり天定食880円 (2026年8月)、魚介4種と野菜7種の「幸おとこ」(2026年9月)、ごはん大盛りは50円 (2026年8月)・夜: ひと口サイズの天ぷら7種の盛り合わせ500円、大エビ320円、半熟卵の天ぷら120円、ごはん150円、赤だし120円 (2026年9月)。ハモ、明太子ののり巻き、豆腐の天ぷら、ごま豆腐、トマト、ぎんなん、夜でも天丼、お茶漬け・塩とカレー塩・揚げ豆腐の料理と自家製の豆腐 (食べログ)・生ビール480円 (2026年8月)、大阪の地酒、ハッピーアワーのハイボール: ハイボール4杯、天ぷら7種、ぎんなん、お茶漬けで2,000円 (2026年10月)',
    neighborhood: 'ホワイティうめだの地下街、ノースモール1、角田町梅田地下街2-4。御堂筋線、阪急、阪神の梅田駅の改札から3〜4分',
    gf_detail: 'グルテンフリーではありません。天ぷらの店で、どれも衣をつけて揚げ、天つゆで食べる。食べログにはアレルギー表示ありとある。',
    vegan_detail: 'ヴィーガンではありません。魚介と野菜の天ぷらを同じ油で揚げ、定食には天つゆ、赤だし、しらすがつく。',
    notes: '[天ぷら・梅田の地下、ホワイティの天ぷらカウンター] ホワイティうめだの地下街にある小さなコの字のカウンターで、大阪木津市場で毎朝仕入れる魚介を、目の前で少しずつ揚げてくれる。グルメ杵屋が2025年2月に市場の名前をつけて開いた天ぷら居酒屋。昼はエビ、タラ、ホタテ、なす、ピーマン、大根、紅しょうがの天ぷら7種に、ごはんと赤だしがついて770円、釜揚げしらすはおかわり自由。15時からは立ち飲みになり、ひと口サイズの天ぷら7種が500円、大エビが320円、ビールと大阪の地酒、塩かカレー塩で。ひとつずつは小さいが安いという声 (2026年9月) や、ハイボール4杯まで飲んで2,000円だったという声 (2026年10月)。20年前にここで安い天丼の店をやっていたのと同じオーナーだと聞いた常連も (2026年10月)。予約はできない。',
  });
}

// ================================================================ 中華料理 梅香 地蔵横丁店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27150492/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_meishan_jizo_yokocho', name: '中華料理 梅香 地蔵横丁店 (Chinese Meishan, Jizo Yokocho)', category: 'OMNI',
    lat: 34.704758, lng: 135.498544, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the listing says the shop cannot take allergy requests. The menu is Chinese dishes in soy-based sauces, ramen, dumplings, yurinchi and yuba tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu, yurinchi, shrimp dishes, dim sum and ramen; tofu and yuba appear across the menu but with meat and seafood, and the shop takes no dietary requests.',
    hours_raw: 'Daily 11:00–22:00, last order 21:30 (Tabelog). Reservations accepted; allergy requests cannot be accommodated (Tabelog). Lunch set meals; happy hour with draft beer ¥308 and highballs ¥219 (Tabelog); a draft-beer senbero set ¥1,000 before 19:00 (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). 24 seats at a counter and tables; non-smoking (Tabelog). Opened 27 June 2025 (Tabelog), in the space of the former Shishirin (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '芝田1-1-3, 1F of 阪急三番街南館, in the 地蔵横丁 lane by Hankyu Osaka-Umeda Stn',
    cuisine: 'Chinese with tofu and yuba, produced by the Ume no Hana group: one soup and three dishes per set (Tabelog) · lunch: mapo tofu set with soup and a tofu salad (September 2026), the W main set of mapo tofu and yurinchi with dim sum ¥1,960 (August 2026), shrimp chilli set, daily set (fried chicken with chilli sauce, August 2026), ramen with four dim sum and a rice dumpling, mapo ramen ¥1,900 with ¥200 extra for mapo (October 2026), ramen and mini fried rice; four ramen to choose from, among them shoyu with chashu and green onion and a light ume-salt ramen; fried rice topped with yurinchi (October 2026) · dinner: yurinchi, grilled gyoza, yuba and fish-paste tempura ¥583, shrimp mayonnaise made with soy milk ¥638, bite-size tofu shumai ¥528, ramen set ¥1,380 (October 2026) · happy hour: draft beer ¥308, highball ¥219 (Tabelog)',
    website: 'https://www.umenohana.co.jp/stores/detail/280', gmaps: gm('梅香 地蔵横丁店'), menu_url: null,
    notes: "[Chinese · Umeda, tofu-and-yuba Chinese in Jizo Yokocho] The second shop of 梅香, a Chinese restaurant produced by the tofu-and-yuba chain Ume no Hana, opened in June 2025 in the Jizo Yokocho lane of Hankyu Sanbangai, a few steps from the Hankyu gates. Sets follow a one-soup, three-dish pattern and lean on the group's tofu and yuba: mapo tofu with a tofu salad, a soy-milk shrimp mayonnaise lighter than most, tofu shumai, yuba tempura. The favourite is yurinchi, fried chicken in a sweet-sour chilli sauce, alone or paired with mapo tofu in the ¥1,960 double-main set. Diners were mixed: good mapo and yurinchi, but a soggy fried rice, dishes that felt reheated and a cramped room (2026). Happy hour pours beer at ¥308. The shop cannot handle allergy requests.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff of the Ume no Hana group (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "Yuba and Tofu Restaurant \'Ume no Hana\' Produced"; the second shop of the Chinese restaurant, after 梅香 阪急三番街店 nearby; Chinese dishes using the group\'s tofu and yuba; opened 27 June 2025; the website link is umenohana.co.jp. A July 2026 diner notes the space was formerly Shishirin, known for champon and sara udon, under different owners.', philosophy: null, specialty: 'Yurinchi; mapo tofu; soy-milk shrimp mayonnaise.',
      anecdotes: [
        { text: '"Perhaps because it was made with soy milk, this shrimp mayo was lighter than at other places and quite tasty!" — October 2026, a Friday after work.', source: R + 'B537997629/' },
        { text: '"This set meal features the restaurant\'s signature Mapo Tofu and Yurinchi, making it the perfect choice." — August 2026, the W Main set meal for JPY 1,960.', source: R + 'B534850236/' },
        { text: '"The fried rice was a bit soggy at the bottom due to the Yurinchi sauce, but overall it was tasty." — October 2026.', source: R + 'B537460442/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 中華料理 梅香 地蔵横丁店、湯葉と豆腐の店「梅の花」プロデュース、中華・居酒屋・ラーメン、大阪市北区芝田1-1-3 阪急三番街南館 1F、大阪梅田駅から34m、毎日11:00〜22:00 (L.O.21:30)、予約可、アレルギー対応は不可、カード・電子マネー・QR 可、24席、禁煙、2025年6月27日オープン、梅の花グループならではの豆腐と湯葉の中華、ランチは dandan 麺やチャーハンの定食、夜はエビチリ定食や点心、一汁三菜の定食スタイル、ハッピーアワー (生ビール308円、ハイボール219円)、姉妹店は阪急三番街店。口コミ(2026年7月〜10月): 以前は Shishirin、ラーメンとミニチャーハン、梅しおラーメン、kara-age のチリソース、W メイン定食1,960円 (麻婆豆腐とYurinchi、点心つき)、エビチリ定食、4種の点心とラーメンのセット、麻婆ラーメン1,900円、豆腐のサラダ、Yurinchiチャーハン、せんべろセット1,000円、焼いた gyoza、湯葉と練り物の天ぷら583円、豆乳のエビマヨ638円、ひと口豆腐シュウマイ528円、ラーメンセット1,380円、狭い店内、店員のおしゃべりが気になったという声、冷凍を温めたようだという声。',
      confidence: 'medium', sources: [TB, 'https://www.umenohana.co.jp/stores/detail/280', R + 'B532413010/', R + 'B532706288/', R + 'B534419166/', R + 'B534850236/', R + 'B535973079/', R + 'B536180180/', R + 'B536529799/', R + 'B537460442/', R + 'B537997629/', R + 'B538455275/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals at lunch, à la carte at night (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "We sincerely apologize, but we are unable to accommodate allergy requests at our restaurant."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田1-1-3 阪急三番街南館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田一丁目1番3号 (go) 81m (Hankyu Sanbangai is a large building); no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534850236/', R + 'B537997629/', R + 'B538455275/'],
    price_note: 'Prices from August–October 2026 reviews; happy-hour prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'W main set: mapo tofu and yurinchi, with dim sum', '¥1,960', 'Set meals', 'no', 'no', 'August 2026.', 'w_main_set'),
      it('', '', 'Ramen with three dim sum and a rice dumpling (mapo ramen)', '¥1,900', 'Set meals', 'no', 'no', 'October 2026.', 'ramen_dimsum_set'),
      it('', '', 'Shrimp mayonnaise made with soy milk (5)', '¥638', 'À la carte', 'no', 'no', 'October 2026.', 'soy_milk_ebi_mayo'),
      it('', '', 'Bite-size tofu shumai (5)', '¥528', 'À la carte', 'no', 'no', 'October 2026.', 'tofu_shumai'),
      it('', '', 'Yuba and fish-paste tempura', '¥583', 'À la carte', 'no', 'no', 'October 2026.', 'yuba_tempura'),
    ] }, {
    cuisine: '梅の花グループがプロデュースする豆腐と湯葉の中華、定食は一汁三菜 (食べログ)・ランチ: スープと豆腐のサラダつきの麻婆豆腐定食 (2026年9月)、麻婆豆腐とYurinchiに点心つきの W メイン定食1,960円 (2026年8月)、エビチリ定食、日替わり定食 (チリソースの揚げた鶏、2026年8月)、4種の点心とちまきつきのラーメン、麻婆ラーメンは200円増しで1,900円 (2026年10月)、ラーメンとミニチャーハン。ラーメンは4種から、チャーシューとネギの醤油や、あっさりした梅しおなど。Yurinchiのせチャーハン (2026年10月)・夜: Yurinchi、焼いた gyoza、湯葉と練り物の天ぷら583円、豆乳のエビマヨ638円、ひと口豆腐シュウマイ528円、ラーメンセット1,380円 (2026年10月)・ハッピーアワー: 生ビール308円、ハイボール219円 (食べログ)',
    neighborhood: '芝田1-1-3、阪急三番街南館の1階、阪急大阪梅田駅のそばの地蔵横丁',
    gf_detail: 'グルテンフリーにはできません: 食べログに、アレルギー対応はできないとある。醤油ベースのソースの中華、ラーメン、点心、Yurinchi、湯葉の天ぷら。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐、Yurinchi、エビの料理、点心、ラーメン。豆腐や湯葉は多いが肉や魚介といっしょで、食事の制限には対応していない。',
    notes: '[中華・梅田、地蔵横丁の豆腐と湯葉の中華] 湯葉と豆腐の梅の花グループがプロデュースする中華料理店、梅香の2店目で、2025年6月、阪急改札のすぐそば、阪急三番街の地蔵横丁に開いた。定食は一汁三菜で、グループの豆腐と湯葉を使う: 豆腐のサラダつきの麻婆豆腐、ふつうより軽い豆乳のエビマヨ、豆腐シュウマイ、湯葉の天ぷら。人気は甘酸っぱいチリソースのYurinchiで、麻婆豆腐と組み合わせた W メイン定食は1,960円。口コミは分かれていて、麻婆とYurinchiはおいしいが、チャーハンがべちゃっとしていた、温め直したような料理、店内が狭いという声も (2026年)。ハッピーアワーは生ビール308円。アレルギー対応はできない。',
  });
}

// ================================================================ 世界のワイン博物館 グランフロント大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27070800/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.zato.co.jp/restaurant/worldwinemuseum/worldwinemuseum_osaka/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_sekai_no_wine_hakubutsukan_grand_front', name: '世界のワイン博物館 グランフロント大阪店 (Sekai no Wine Hakubutsukan)', category: 'OMNI',
    lat: 34.705336, lng: 135.494811, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch buffet is pizza, paella, curry and fried mains such as cordon bleu, and courses include fried chicken and pasta; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegetarian options" and the lunch buffet has a salad bar, but no vegan or vegetarian dish is named.',
    hours_raw: 'Daily 11:00–23:00 (last order food 22:00, drinks 22:30); lunch menu 11:00–14:30; closed when the building closes (Tabelog). Weekday lunch buffet with no time limit (Tabelog); a diner had 90 minutes (October 2026). Reservations accepted; for two or more the course fee is charged on cancellation, 10% from booking rising to 100% three days before (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay and other QR (Tabelog). 120 seats and a separate party room; private rooms for 4 to over 30; non-smoking, smoking room on the floor (Tabelog). Full of group bookings at 17:00 on a July 2026 weekday; quiet on a Saturday at 20:30 (August 2026). Opened 26 April 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'B1F of Grand Front Osaka North Building (グランフロント大阪ショップ＆レストラン 北館), 大深町3-1 — 1 min from JR Osaka Stn',
    cuisine: 'Wine bar and restaurant with wines by the glass chosen by a senior sommelier, served from a dispenser that keeps them fresh, and world draft beer (Tabelog) · weekday lunch buffet ¥2,200: salad bar, cold and hot starters, pizza, paella, curry, desserts and drinks, with a main chosen from Italian, French, German, American or Spanish dishes (Tabelog); cordon bleu and cowboy steak among the mains (October 2026); a steak lunch with fries about ¥2,150, no rice (August 2026); Belgian fries, pizza and pasta (August 2026) · courses with two hours of drinks: September–November course of charcuterie, Caesar salad, Italian fried chicken, roast pork and basil Genovese pasta with one craft beer and three wines ¥4,500 (listed down from ¥5,500); year-end course with two draft beers and a self-service wine buffet ¥5,000 (from ¥6,000) (Tabelog) · by the glass: Riesling, Napa Chardonnay (October 2026); a sparkling wine with cherry-blossom petals, ajillo and cheese (October 2026) · the fried chicken in the course singled out (July 2026)',
    website: SITE, gmaps: gm('世界のワイン博物館 グランフロント大阪'), menu_url: null,
    notes: "[Wine bar · Umekita, a big wine hall under Grand Front] A large, chandelier-lit wine restaurant in the basement of Grand Front Osaka's North Building, with sofa seats, private rooms and 120 seats, run by the ZATO group. Glasses come from a dispenser that keeps open bottles fresh, picked by a senior sommelier: Riesling, Napa Chardonnay, a sparkling wine with cherry-blossom petals (October 2026). Weekday lunch is a world buffet for ¥2,200, salad bar, pizza, paella and curry, plus a main from five countries such as cordon bleu or a cowboy steak. At night it fills with company parties on two-hour drink courses of charcuterie, Caesar salad, Italian fried chicken and roast pork from ¥4,500, the same courses as the neighbouring Sekai no Beer Hakubutsukan (August 2026). Book for evenings; a 10% service charge applies.",
    chef_bio: { chef_name: null, roles: ['Senior sommelier and kitchen staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a spacious floor with private and semi-private rooms, microphones and projectors for parties; world beers and wines; a dispenser that limits wine deterioration; glass wines chosen by a senior sommelier; chandeliers; opened 26 April 2013. The operator\'s page (zato.co.jp, ZATO group) lists the Grand Front Osaka shop as its only 世界のワイン博物館. An August 2026 diner notes the courses match those of the nearby Sekai no Beer Hakubutsukan.', philosophy: null, specialty: 'Wine by the glass; weekday world lunch buffet.',
      anecdotes: [
        { text: '"I entered the restaurant at 5 PM, but it was fully booked due to group reservations! I managed to get one of the last remaining seats." — July 2026, a weekday.', source: R + 'B531206519/' },
        { text: '"The Belgian-style fries were so tasty that my child couldn\'t stop eating them." — August 2026, lunch with children.', source: R + 'B533911885/' },
        { text: '"Not only were the cherry blossom petals adorable, but the sweet and savory flavor was also delicious." — October 2026, a sparkling wine.', source: R + 'B536796807/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 世界のワイン博物館 グランフロント大阪店、イタリアン・ビストロ・ワインバー、大阪市北区大深町3-1 グランフロント大阪ショップ＆レストラン 北館 B1F、JR 大阪駅から徒歩1分、毎日11:00〜23:00 (L.O.料理22:00、ドリンク22:30)、ランチ11:00〜14:30、施設に準じて休み、予約可、キャンセル料 (予約時10%から3日前100%まで)、サービス料10%、カード・電子マネー・QR 可、120席と別のパーティールーム、個室、禁煙 (同じフロアに喫煙室)、2013年4月26日オープン、シニアソムリエが選ぶグラスワイン、劣化を抑えるサーバー、シャンデリア、平日のビュッフェランチ2,200円 (サラダバー、前菜、ピザ、パエリア、デザート、イタリア・フランス・ドイツ・アメリカ・スペインのメイン)、2時間飲み放題のコース4,500円・5,000円 (シャルキュトリー、シーザーサラダ、イタリアンのフライドチキン、ローストポーク、ジェノベーゼ)。運営は ZATO グループ (zato.co.jp)。口コミ(2026年7月〜10月): コルドンブルー、カウボーイステーキ、カレー、パエリア、ビュッフェは90分、17時に団体予約で満席、コースの kara-age、白ワイン、Sekai no Beer Hakubutsukan と同じコース、土曜の夜は静か、ベルギー風フライドポテト、ピザ、パスタ、ステーキランチ約2,150円、リースリング、Napa のシャルドネ、桜の花びらのスパークリング、アヒージョ、チーズ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B421991953/', R + 'B531206519/', R + 'B533247086/', R + 'B533267609/', R + 'B533294669/', R + 'B533911885/', R + 'B534595744/', R + 'B536751373/', R + 'B536796807/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet lunch and set party courses; wine chosen with the sommelier (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大深町3-1 グランフロント大阪ショップ＆レストラン 北館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with autumn 2026 courses and the operator\'s page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大深町3番地 (lot) 70m. Same building as muse umekita (osaka_muse_umekita_grand_front, address_ja "大阪府大阪市北区大深町3-1 グランフロント大阪北館 6F"), on another floor with its pin 75 m away, so the two do not stack and both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531206519/', R + 'B534595744/'],
    price_note: 'Buffet and course prices from the Tabelog listing (tax included; autumn 2026 plans); the steak lunch "around JPY 2150" per an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch buffet with a choice of main', '¥2,200', 'Lunch', 'ask', 'ask', 'Tabelog.', 'lunch_buffet'),
      it('', '', 'Steak lunch with fries', '¥2,150', 'Lunch', 'ask', 'no', 'August 2026 ("around").', 'steak_lunch'),
      it('', '', 'Autumn course with two hours of drinks (charcuterie, Caesar salad, fried chicken, roast pork, Genovese)', '¥4,500', 'Courses', 'no', 'no', 'Tabelog; July 2026 review paid ¥5,000 for a similar course.', 'autumn_course'),
      it('', '', 'Year-end course with self-service beer and wine', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'yearend_course'),
    ] }, {
    cuisine: 'シニアソムリエが選ぶグラスワインを、劣化を抑えるサーバーから。世界の生ビールも (食べログ)・平日のビュッフェランチ2,200円: サラダバー、冷たい前菜と温かい前菜、ピザ、パエリア、カレー、デザート、ドリンクに、イタリア、フランス、ドイツ、アメリカ、スペインから選ぶメイン (食べログ)。メインにはコルドンブルーやカウボーイステーキ (2026年10月)。フライドポテトつきのステーキランチ約2,150円、ごはんはなし (2026年8月)。ベルギー風フライドポテト、ピザ、パスタ (2026年8月)・2時間飲み放題のコース: シャルキュトリー、シーザーサラダ、イタリアンのフライドチキン、ローストポーク、バジルのジェノベーゼにクラフトビール1種とワイン3種の9〜11月のコース4,500円 (5,500円から値下げと表示)、生ビール2種とセルフのワインビュッフェの年末のコース5,000円 (6,000円から) (食べログ)・グラスで: リースリング、Napa のシャルドネ (2026年10月)、桜の花びらのスパークリング、アヒージョとチーズ (2026年10月)・コースのフライドチキンが絶賛 (2026年7月)',
    neighborhood: 'グランフロント大阪ショップ＆レストラン 北館の地下1階、大深町3-1。JR 大阪駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。ランチのビュッフェはピザ、パエリア、カレー、コルドンブルーなどの揚げたメインで、コースにもフライドチキンとパスタがある。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」とあり、ランチのビュッフェにはサラダバーもあるが、ヴィーガンやベジタリアンの料理は書かれていない。',
    notes: '[ワインバー・うめきた、グランフロントの地下の大きなワインの店] グランフロント大阪北館の地下にある、シャンデリアのある大きなワインレストランで、ソファー席、個室、120席。運営は ZATO グループ。グラスワインはシニアソムリエが選び、開けたボトルを新鮮に保つサーバーから注ぐ: リースリング、Napa のシャルドネ、桜の花びらのスパークリング (2026年10月)。平日のランチは2,200円の世界のビュッフェで、サラダバー、ピザ、パエリア、カレーに、コルドンブルーやカウボーイステーキなど5か国から選ぶメイン。夜は会社の宴会でにぎわい、シャルキュトリー、シーザーサラダ、イタリアンのフライドチキン、ローストポークの2時間飲み放題のコースが4,500円から。となりの Sekai no Beer Hakubutsukan と同じコースだそう (2026年8月)。夜は予約を。サービス料10%。',
  });
}

// ================================================================ 四季乃味 今井きしょう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27073090/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.imai-kishou.com/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_imai_kishou_ekimae_dai1', name: '四季乃味 今井きしょう (Imai Kishou)', category: 'OMNI',
    lat: 34.699164, lng: 135.496137, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Seasonal Japanese dishes and rice bowls; soy-based sauces, Saikyo miso, tempura, cream croquettes and soba are on the menus, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, beef and fish dishes, dobin-mushi and miso soup; the vegetable dishes are not described as free of dashi.',
    hours_raw: 'Lunch Mon–Fri 12:00–14:00; dinner Mon–Fri 17:00–22:00 (last order 21:30); closed Saturdays, Sundays and holidays, with Sundays and holidays open for reservations only (official site). Tabelog instead gives Saturdays as reservation-only and Sundays and holidays closed, closures at Obon and New Year, and a summer opening at 16:00 for phone bookings; ask before a weekend visit. Booking early by phone is recommended (Tabelog). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: 10 at the counter and a table for up to 12; smoking allowed, though no one smoked on a March 2026 visit; BYO drinks (Tabelog). Opened 19 September 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-3-1, B1F of 大阪駅前第1ビル, at the western end of the basement — 1 min from Kitashinchi Stn (JR Tozai Line) and Nishi-Umeda Stn',
    cuisine: 'Seasonal Japanese by a chef with fifteen years of training, the menu rewritten every day (official site; Tabelog) · lunch (official site, ¥1,000 each with a small side dish, salad, soup and pickles): 牛黄味丼 of Saga black wagyu, 手つなぎ丼 (oyako-don of Ise red chicken), seafood bowl of three marinated fish; daily set ¥1,500 with two small dishes · dinner courses (Tabelog, tax included): 6 dishes ¥4,400, 8 dishes ¥5,500 (sashimi, braised beef tendon, Saikyo-miso grilled yellowtail, lotus root with mentaiko, umeboshi rice porridge, dessert), 9 dishes ¥6,600 (sashimi, lotus-root dumpling, shishamo, fried catfish from Shimonoseki, wagyu skirt with onion, umeboshi porridge, dessert) · à la carte from a scroll-like menu: three-kind sashimi, beef-tendon stew, octopus, cream croquettes, dobin-mushi even in summer (July 2026); dobin-mushi, sashimi and crab with lettuce in autumn (September 2025) · about seven beers including Sapporo Lager, Kaku highball, sake and shochu (July 2026; Tabelog)',
    website: SITE, gmaps: gm('今井きしょう 大阪駅前第1ビル'), menu_url: SITE,
    notes: "[Japanese · Umeda, a seasonal counter under the station buildings] A quiet Japanese restaurant at the far western end of the Osaka Ekimae Dai-1 Building basement, where \"Ofukuro no Aji Imai\", which fed office workers here for over forty years, merged with \"Shiki no Aji Kishou\" of the Tenjinbashi-suji arcade, whose chef Sato had cooked Japanese food for fifteen years (Tabelog). The site says the menu has changed every single day since opening. Lunch is a bargain: ¥1,000 for a Saga wagyu beef bowl, an oyako-don or a marinated seafood bowl, each with a small seasonal side dish, salad and soup. At night sit at the counter for sashimi, beef-tendon stew, cream croquettes or dobin-mushi, or book a course from ¥4,400. Diners call the chef imposing at first and chatty once the food comes out (July 2026); one found it pricey (March 2026). Smoking is allowed; weekends only by reservation, if at all.",
    chef_bio: { chef_name: 'Sato (chef; romaji from Tabelog, kanji not given)', roles: ['Chef, formerly of "Shiki no Aji Kishou" just off the Tenjinbashi-suji shopping street (Tabelog)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "Ofukuro no Aji Imai" served salarymen after work at the Osaka Ekimae building for over forty years from the Showa era and became "Imai Kishou" by merging with "Shiki no Aji Kishou", led by Chef Sato, who has mastered Japanese cuisine for fifteen years, just off the Tenjinbashi-suji shopping street; opened 19 September 2012. Per the official site (copyright SANAE.inc): no day since opening without a change to the menu. A July 2025 diner saw the owner handling lunch alone; a March 2026 diner praises the woman serving.', philosophy: '"今井きしょうの料理は大人に残された清淡な遊びです" (Imai Kishou\'s cooking is a pure, light pleasure left for grown-ups; official site).', specialty: 'Saga wagyu beef bowl at lunch; seasonal sashimi; dobin-mushi.',
      anecdotes: [
        { text: '"The Gyukoumi Don comes with a small side dish, salad, miso soup, and pickles for JPY 1000. … For this quality, JPY 1000 is an unbeatable value." — April 2026, a fifth visit.', source: R + 'B481389792/' },
        { text: '"The imposing chef greeted me with a smile. The menu, resembling a scroll, is quite extensive." — July 2026, just after 17:00 on a weekday.', source: R + 'B532951343/' },
        { text: '"I suddenly craved Dobin Mushi and searched for a place around Umeda. Autumn is here!" — September 2025.', source: R + 'B514417493/' },
      ],
      japanese_sources_summary: '公式サイト: 四季乃味 今井きしょう、おしゃべりの切れ間にお出しする料理が句読点となり基調音となるよう、毎日の素材にこだわり、開業から一日たりとも品書きを変えなかった日はない、深みのある単純さは旬の食材にしか求め得ない、今井きしょうの料理は大人に残された清淡な遊び、昼12:00〜14:00、夜17:00〜22:00 (L.O.21:30)、土日祝休み (日祝は予約限定営業)、大阪市北区梅田1-3-1 大阪駅前第1ビル B1F。お昼の献立: 佐賀 黒毛和牛 牛黄味丼、伊勢 赤鳥 手つなぎ丼 (親子丼)、三種の魚貝 海鮮丼 (各1,000円、小鉢、サラダ、汁、香)、日替わり御膳1,500円。食べログ (店舗会員): 日本料理・居酒屋、西梅田駅から70m、月〜金12:00〜14:00、17:00〜22:00、土は予約のみ、日・祝休み、お盆と年末年始休み、夏は16時から電話予約のみ、カード (JCB、AMEX、Diners) 可、電子マネー・QR 不可、20席 (カウンター10、テーブル12名まで)、喫煙可、持ち込み可、2012年9月19日オープン、昭和から40年以上大阪駅前ビルで親しまれた「Ofukuro no Aji Imai」と Tenjinbashi-suji の商店街の「Shiki no Aji Kishou」(料理長 Sato、和食15年) がひとつに、コース4,400円・5,500円・6,600円。口コミ(2025年7月〜2026年7月): 牛黄味丼1,000円、小鉢 (魚、里芋の煮物)、海鮮丼は漬けの3種、ランチはオーナーひとり、土瓶蒸し、刺身、カニとレタス、店員の女性の気配り、だれもたばこを吸っていなかった、ごはんがなかった日、巻物のようなお品書き、ビール約7種、牛すじ煮込み、クリームコロッケ、夏の土瓶蒸し、話し好きの大将。',
      confidence: 'medium', sources: [TB, SITE, SITE + '%E3%81%8A%E6%98%BC%E3%81%AE%E7%8C%AE%E7%AB%8B/', SITE + '%E5%9B%9B%E5%AD%A3%E4%B9%83%E5%91%B3/', R + 'B481389792/', R + 'B502968558/', R + 'B510054934/', R + 'B510118662/', R + 'B514417493/', R + 'B519521364/', R + 'B523986949/', R + 'B532951343/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A counter with a long hand-written menu; book by phone (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-3-1 大阪駅前第1ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目3番1号 (go) 111m (a large building). Same building as うめだ一丁目スカイビア (osaka_umeda_icchome_sky_beer, address_ja "大阪府大阪市北区梅田1-3-1 大阪駅前第1ビル 屋上13F"), pin 42 m away, and いしもん 本店 (osaka_ishimon_honten_umeda, "…大阪駅前第一ビル B2F"), on other floors at different points, so nothing stacks and the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + '%E3%81%8A%E6%98%BC%E3%81%AE%E7%8C%AE%E7%AB%8B/', TB],
    price_note: 'Lunch prices from the official site (read 1 November 2026); dinner courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('佐賀 黒毛和牛 牛黄味丼', '', 'Saga black-wagyu beef bowl (lunch, with side dish, salad, soup, pickles)', '¥1,000', 'Lunch', 'ask', 'no', 'Official site; April 2026.', 'gyu_bowl'),
      it('伊勢 赤鳥 手つなぎ丼', '', 'Oyako-don of Ise red chicken (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'Official site.', 'oyakodon'),
      it('三種の魚貝 海鮮丼', '', 'Seafood bowl of three marinated fish (lunch)', '¥1,000', 'Lunch', 'ask', 'no', 'Official site; March and July 2025.', 'kaisendon'),
      it('日替わり御膳', '', 'Daily set (lunch)', '¥1,500', 'Lunch', 'ask', 'no', 'Official site.', 'higawari'),
      it('', '', 'Seasonal course, 8 dishes', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_8'),
      it('', '', 'Dobin-mushi', '', 'À la carte', 'ask', 'no', 'September 2025; July 2026.', 'dobinmushi'),
    ] }, {
    cuisine: '和食15年の料理長の旬の和食、品書きは毎日変わる (公式サイト、食べログ)・お昼 (公式サイト、どれも1,000円で小鉢、サラダ、汁、香の物つき): 佐賀の黒毛和牛の牛黄味丼、伊勢の赤鳥の手つなぎ丼 (親子丼)、漬けの魚貝3種の海鮮丼。日替わり御膳は小鉢2品で1,500円・夜のコース (食べログ、税込): 6品4,400円、8品5,500円 (刺身、牛すじ煮込み、寒ブリの Saikyo 味噌焼き、レンコンの明太子、梅干しのおかゆ、デザート)、9品6,600円 (刺身、レンコンのまんじゅう、子持ちししゃも、Shimonoseki のナマズの揚げ物、和牛ハラミと玉ねぎ、梅干しのおかゆ、デザート)・巻物のようなお品書きからアラカルト: 刺身3種、牛すじ煮込み、タコ、クリームコロッケ、夏でも土瓶蒸し (2026年7月)。秋は土瓶蒸し、刺身、カニとレタス (2025年9月)・ビール約7種 (サッポロラガーなど)、角ハイボール、日本酒、焼酎 (2026年7月、食べログ)',
    neighborhood: '梅田1-3-1、大阪駅前第1ビルの地下1階、地下の西の端。JR 東西線 北新地駅と西梅田駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。旬の和食と丼で、醤油ベースのたれ、Saikyo 味噌、天ぷら、クリームコロッケ、そばもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。刺身、牛肉や魚の料理、土瓶蒸し、みそ汁。野菜の料理もだしを使わないとは書かれていない。',
    notes: '[和食・梅田、駅前ビルの地下の旬のカウンター] 大阪駅前第1ビルの地下の西の端にある静かな和食の店。ここで40年以上会社員に親しまれた「Ofukuro no Aji Imai」と、Tenjinbashi-suji の商店街の「Shiki no Aji Kishou」(和食を15年修めた料理長 Sato) がひとつになった (食べログ)。開業から品書きを変えなかった日は一日もないと公式サイトにある。昼はお得で、佐賀の和牛の丼、親子丼、漬けの海鮮丼が、季節の小鉢、サラダ、汁つきで1,000円。夜はカウンターで刺身、牛すじ煮込み、クリームコロッケ、土瓶蒸しを。コースは4,400円から。大将は最初はこわそうに見えるが、料理が出ると話し好きだったという声 (2026年7月)、少し高めだという声も (2026年3月)。喫煙可、週末は予約のみか休み。',
  });
}

save();
