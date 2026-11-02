// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 10.
//   + 旭川塩らーめん すがわら 人形町店 Asahikawa Shio Ramen Sugawara (clear Asahikawa-style shio; Tokyo branch) — no ramen block
//   + cado (17-seat Italian small plates and natural wine; opened December 2025; a Gotanda sister)
//   + おにぎり屋 シチロカ Shichiroca (onigiri shop with two stools, kamado-cooked rice; since 2014)
//   + 黎明 Reimei (10-seat yakitori and chicken-course counter of Yohei Fujimoto, founder of BLESS; opened April 2026)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-02): the first four,
//   133, 133, 135 and 139 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (tokyo_choi_baru_bocado is a different shop). cado is on 1F of HSビル
//   (1-7-6) with tokyo_himalayan_village_ningyocho (B1F) and tokyo_ningyocho_densui (2F, block pin); its Tabelog point is 2.8 m
//   from Himalayan Village's, so cado is block-level and moved 6 m south. Reimei (2-7-13) is 32–34 m from Kura no Akari and
//   Kousai Kan (2-7-11).
//   Chain check. Sugawara: a Tokyo branch of a main shop in Asahikawa (October 2026 reviews); not in data, no sign of rapid
//   expansion. cado: an August 2026 review calls it a branch of a Gotanda restaurant; not in data. Reimei: the chef founded
//   BLESS (Morishita), since sold (October 2026 review), with no involvement now (September 2026 review) — a separate shop;
//   BLESS is not in data. Shichiroca: single shop.
//   Ramen block for Sugawara left off: reviews describe clarity, body, saltiness and a layer of fat, but not noodle firmness
//   or aroma (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 旭川塩らーめん すがわら 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13304075/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'tokyo_asahikawa_shio_sugawara_ningyocho', name: '旭川塩らーめん すがわら 人形町店 (Asahikawa Shio Ramen Sugawara Ningyocho)', category: 'OMNI',
    lat: 35.685847, lng: 139.78082, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; gyoza and fried rice alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-based broth with chashu ("rich depth from the meat", September 2026).',
    hours_raw: 'Daily 11:00–22:00; hours may change (Tabelog). Order at the table and pay first; cards, e-money and QR (Tabelog; 2026 reviews). Free tororo kombu topping (August and October 2026). Seats not listed. Opened 26 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-3-10 — about 2 min from Ningyocho Stn',
    cuisine: 'Asahikawa-style ramen, specialising in shio (2026 reviews) · four soups: shio, shoyu, miso (with a spicy kick) and white miso (August–September 2026) · miso ramen ¥900 (September 2026); ume-shio ramen with a pickled plum ¥1,000 (August 2026); special shoyu ramen with three chashu and two eggs ¥1,120 (September 2026) · thin straight noodles; low-temperature-cooked pork-belly chashu · egg fried rice, green-onion-salt pork mini fried rice, curry, gyoza (2026 reviews) · butter-corn and other toppings; free tororo kombu',
    website: TB, gmaps: gm('旭川塩らーめん すがわら 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, Asahikawa shio ramen in a clear broth] The Ningyocho branch of an Asahikawa ramen shop (October 2026 reviews), open daily from 11:00 to 22:00. The draw is shio ramen in a strikingly clear broth that diners call light yet full of flavour, with a thin film of fat, thin straight noodles and tender, low-temperature-cooked chashu. There's also shoyu, a spicy miso and a gentle white miso, plus an ume-shio bowl with a whole pickled plum, and tororo kombu to add for free. Pair it with the egg fried rice. Several diners in 2026 found the staff brusque or slow to explain the pay-first ordering; one October 2026 diner thought the miso ramen and gyoza fell flat. Late-night ramen after drinks is a common use.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per October 2026 reviews, the main branch is in Asahikawa and this is a Tokyo branch. Opened 26 November 2024 (Tabelog).',
      philosophy: null, specialty: 'Clear Asahikawa-style shio ramen.',
      anecdotes: [
        { text: '"The Shio Ramen features an astonishingly clear broth that belies its rich flavor." — October 2026.', source: R + 'B537644645/' },
        { text: '"When the dish arrived, it featured a beautifully clear broth with a slice of pork belly chashu, topped with a pitted umeboshi (pickled plum)." — August 2026, ume-shio ramen ¥1,000.', source: R + 'B533138765/' },
        { text: '"The broth can be chosen from four types: salt, soy sauce, miso, and white miso." — September 2026, special shoyu ramen ¥1,120.', source: R + 'B536233580/' },
      ],
      japanese_sources_summary: '食べログ: 旭川塩らーめん すがわら 人形町店、ラーメン、日本橋人形町3-3-10、毎日11:00〜22:00、予約不可、カード・電子マネー・QR可、2024年11月26日オープン。口コミ(2026年8月〜10月、写真の見出しに「梅塩らーめん」): 本店は Asahikawa、透き通った塩スープ、軽いのに味が深い、細いストレート麺、低温調理のチャーシュー、塩・醤油・味噌・白味噌の4種、梅塩らーめん1,000円、味噌らーめん900円、特製醤油1,120円、卵チャーハン、とろろ昆布は無料、席で注文して先払い、接客がそっけないという声、味噌と餃子はいまひとつという声も。',
      confidence: 'medium', sources: [TB, R + 'B496659251/', R + 'B533138765/', R + 'B533837267/', R + 'B535443356/', R + 'B535739375/', R + 'B536233580/', R + 'B537269826/', R + 'B537382323/', R + 'B537644645/', R + 'B538328767/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally at the table and pay first; no ticket machine (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-3-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685847, 139.780820); cross-checked: GSI 東京都中央区日本橋人形町三丁目3番10号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B496659251/', R + 'B533138765/', R + 'B536233580/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Miso ramen', '¥900', 'Ramen', 'no', 'no', 'September 2026.', 'miso'),
      it('梅塩らーめん', '', 'Ume-shio ramen with pickled plum', '¥1,000', 'Ramen', 'no', 'no', 'August 2026 (photo caption).', 'ume_shio'),
      it('', '', 'Special shoyu ramen (3 chashu, 2 eggs)', '¥1,120', 'Ramen', 'no', 'no', 'September 2026.', 'toku_shoyu'),
    ] }, {
    cuisine: '塩が看板の Asahikawa 風のラーメン (2026年の口コミ)・スープは塩、醤油、味噌 (ピリ辛)、白味噌の4種 (2026年8月〜9月)・味噌らーめん900円 (2026年9月)、梅干しをのせた梅塩らーめん1,000円 (2026年8月)、チャーシュー3枚と卵2個の特製醤油1,120円 (2026年9月)・細いストレート麺、低温調理の豚バラのチャーシュー・卵チャーハン、ねぎ塩豚のミニチャーハン、カレー、餃子 (2026年の口コミ)・バターコーンなどのトッピング、とろろ昆布は無料',
    neighborhood: '日本橋人形町3-3-10。人形町駅から徒歩2分ほど',
    gf_detail: 'グルテンフリーではない: 小麦の麺。餃子とチャーハンも。',
    vegan_detail: 'ヴィーガンではない: 肉のスープにチャーシュー (2026年9月の口コミ「肉の深いうまみ」)。',
    notes: '[ラーメン・人形町、透き通ったスープの Asahikawa の塩らーめん] Asahikawa のラーメン店の人形町店 (2026年10月の口コミ) で、毎日11時〜22時。看板は驚くほど透き通った塩らーめんで、軽いのに味が深いと評判。薄い脂の膜、細いストレート麺、柔らかい低温調理のチャーシュー。醤油、ピリ辛の味噌、やさしい白味噌、梅干し丸ごとの梅塩もあり、とろろ昆布は無料で追加できる。卵チャーハンと一緒に。2026年には接客がそっけない、先払いの注文の説明が足りないという声がいくつかあり、10月には味噌らーめんと餃子がいまひとつという声も。飲んだあとの締めに使う人も多い。',
  });
}

// ================================================================ cado
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13316868/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const WE = day(['15:00', '23:00']);
  put({
    id: 'tokyo_cado_ningyocho', name: 'cado', category: 'OMNI',
    lat: 35.685061, lng: 139.782541, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many small plates are not wheat-based as described (oeuf mayonnaise, carpaccio, panna cotta, octopus and potato salad, omelette), but there are pastas, baguette and fried potatoes, and nothing is called gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A changing blackboard of small plates; a few are vegetable-led (caponata of eggplant and maitake, corn or pumpkin panna cotta), but most use egg, cheese, cream, fish or meat.',
    hours_raw: 'Tue–Fri 17:00–23:00; Sat, Sun, holidays and the day before a holiday 15:00–23:00 (last order food 22:00, drinks 22:30); closed Monday (Tuesday when Monday is a holiday) (Tabelog). Book for dinner — full by 18:00 (August and October 2026); weekend afternoons can be walk-in. Table charge ¥400 (Tabelog). Cards, e-money and PayPay (Tabelog). 17 seats: 7 at the counter, 10 at tables (Tabelog). Non-smoking. Opened 3 December 2025 (Tabelog).',
    hours: { 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-7-6, HSビル 1F, in a back alley — 1 min from Ningyocho Stn; Himalayan Village and Ningyocho Densui are in the same building',
    cuisine: 'Italian-leaning small plates from a blackboard menu with natural wine by the glass (2026 reviews) · oeuf mayonnaise with almond Trapanese sauce ¥500; baguette ¥150; carpaccio of the day, e.g. buri and shungiku with burnt-leek sauce ¥1,500 or sawara; warm octopus and potato salad ¥1,300; edamame and shirasu omelette ¥800; corn or pumpkin panna cotta; Shine Muscat or Nagano Purple grapes with pineapple and mozzarella; hamo with manganji peppers or lotus root in ajillo; herb-braised lamb; scallop and lemon aglio e olio ¥1,500; crab-miso arrabbiata; raw chocolate terrine ¥800; crème brûlée; pistachio crema catalana (August–October 2026) · natural wines by the glass, staff recommend by taste',
    website: TB, gmaps: gm('cado 人形町'), menu_url: null,
    notes: "[Italian · Ningyocho, small plates and natural wine in a back alley] A lively 17-seat bistro on a Ningyocho back alley, opened in December 2025 as a sister of a Gotanda restaurant (August 2026 reviews). The blackboard of small seasonal plates is made for sharing a few among two or three. Diners in 2026 singled out the oeuf mayonnaise under almond Trapanese sauce, a corn panna cotta like set potage, grapes and pineapple with mozzarella, carpaccio with burnt-leek sauce, and scallop aglio e olio. The wine is mostly natural, poured by the glass, with staff happy to suggest what fits. It opens at 15:00 at weekends for early drinking and is usually full by 18:00 on weeknights, so book. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 3 December 2025 (Tabelog). Two August 2026 diners describe it as a branch of a restaurant in Gotanda, one having been to the Gotanda shop. Bookings via TableCheck (August 2026).',
      philosophy: null, specialty: 'Seasonal small plates; natural wine by the glass.',
      anecdotes: [
        { text: '"The panna cotta, while looking simple, was overwhelmingly delicious! It had the texture of a rich corn potage that was perfectly set." — August 2026.', source: R + 'B533418080/' },
        { text: '"I was looking for a place to start drinking a bit earlier, and to my delight, they open at 3 PM on weekends, allowing me to walk in without a reservation." — August 2026.', source: R + 'B534385890/' },
        { text: '"The staff recommended wines based on my preferences, and each one had a flavor profile I hadn\'t experienced much before." — October 2026.', source: R + 'B537061755/' },
      ],
      japanese_sources_summary: '食べログ: cado、イタリアン、ワインバー、日本橋人形町1-7-6 HSビル 1F、火〜金17:00〜23:00、土日祝・祝前日15:00〜23:00、月曜休み、テーブルチャージ400円、カード・電子マネー・PayPay可、17席 (カウンター7、テーブル10)、禁煙、2025年12月3日オープン。口コミ(2026年8月〜10月): Gotanda の店の姉妹店、黒板の季節の小皿、ウフマヨ、とうもろこしのパンナコッタ、カルパッチョ、帆立とレモンのアーリオオーリオ、ぶどうとパイナップルとモッツァレラ、自然派ワインをグラスで、週末は15時から、夜は予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B533418080/', R + 'B534385890/', R + 'B535217185/', R + 'B535559781/', R + 'B536218792/', R + 'B536391383/', R + 'B536420939/', R + 'B536453151/', R + 'B536794536/', R + 'B537061755/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Blackboard menu; staff suggest wines by taste (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町1-7-6 HSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened December 2025; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685115, 139.782541 — 2.8 m from Himalayan Village (tokyo_himalayan_village_ningyocho, address_ja "東京都中央区日本橋人形町1-7-6 HSビル B1F") in the same building, which also holds Ningyocho Densui (tokyo_ningyocho_densui, 2F, block pin 6 m north). Block-level: cado's pin moved 6 m south so the three are not stacked; GSI 東京都中央区日本橋人形町一丁目7番6号 (go) 3m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534385890/'],
    price_note: 'Prices from an August 2026 review; ¥400 table charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Oeuf mayonnaise with almond Trapanese sauce', '¥500', 'Small plates', 'ask', 'no', 'August 2026.', 'oeuf_mayo'),
      it('', '', 'Carpaccio of the day (buri and shungiku)', '¥1,500', 'Small plates', 'ask', 'no', 'August 2026.', 'carpaccio'),
      it('', '', 'Warm octopus and potato salad', '¥1,300', 'Small plates', 'ask', 'no', 'August 2026.', 'tako_potato'),
      it('', '', 'Scallop and lemon aglio e olio', '¥1,500', 'Pasta', 'no', 'no', 'August 2026.', 'scallop_pasta'),
      it('', '', 'Raw chocolate terrine', '¥800', 'Dessert', 'ask', 'no', 'August 2026.', 'terrine'),
    ] }, {
    cuisine: '黒板の季節のイタリアン寄りの小皿と、グラスの自然派ワイン (2026年の口コミ)・アーモンドのトラパネーゼソースのウフマヨ500円、バゲット150円、本日のカルパッチョ (たとえば鰤と春菊、焦がしねぎのソース1,500円、鰆も)、蛸とじゃがいもの温かいサラダ1,300円、枝豆としらすのオムレツ800円、とうもろこしやかぼちゃのパンナコッタ、シャインマスカットや Nagano Purple とパイナップルとモッツァレラ、鱧と Manganji の唐辛子や蓮根のアヒージョ、仔羊のハーブ煮込み、帆立とレモンのアーリオオーリオ1,500円、蟹味噌のアラビアータ、生チョコのテリーヌ800円、クレームブリュレ、ピスタチオのカタラーナ (2026年8月〜10月)・自然派ワインをグラスで、好みを伝えればスタッフが選んでくれる',
    neighborhood: '日本橋人形町1-7-6 HSビル 1F、裏路地。人形町駅から徒歩1分。同じビルにヒマラヤンビレッジと人形町 田酔',
    gf_detail: '要確認。小麦を使わないように見える小皿も多い (ウフマヨ、カルパッチョ、パンナコッタ、蛸とじゃがいものサラダ、オムレツ) が、パスタ、バゲット、フライドポテトもあり、グルテンフリーの説明はない。',
    vegan_detail: '要確認。黒板の小皿は日替わりで、野菜が主役のもの (茄子と舞茸のカポナータ、とうもろこしやかぼちゃのパンナコッタ) もあるが、ほとんどは卵、チーズ、生クリーム、魚、肉を使う。',
    notes: '[イタリアン・人形町、裏路地の小皿と自然派ワイン] 人形町の裏路地にある17席のにぎやかなビストロで、2025年12月に Gotanda の店の姉妹店として開いた (2026年8月の口コミ)。黒板の季節の小皿は2〜3人でいくつか分けるのにちょうどいい。2026年の客が挙げたのは、アーモンドのトラパネーゼソースのウフマヨ、ポタージュを固めたようなとうもろこしのパンナコッタ、ぶどうとパイナップルとモッツァレラ、焦がしねぎのソースのカルパッチョ、帆立のアーリオオーリオ。ワインは主に自然派でグラスで、スタッフが合うものを勧めてくれる。週末は15時から開いて早い時間から飲め、平日の夜は18時には満席になることが多いので予約を。月曜休み。',
  });
}

// ================================================================ おにぎり屋 シチロカ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13173136/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://shichiroca.net';
  const H = day(['07:30', '14:00']);
  put({
    id: 'tokyo_onigiriya_shichiroca_ningyocho', name: 'おにぎり屋 シチロカ (Shichiroca)', category: 'OMNI',
    lat: 35.686873, lng: 139.780882, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain rice, salt and nori are naturally free of wheat, and the shio musubi is just rice and salt (2023 review), but many fillings are seasoned (soy-koji bonito, sweet-soy chicken soboro, tuna mayo, simmered clams) and the miso soup blends three misos; nothing is labelled gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shio musubi and the Nanko ume onigiri are plant-based as described, but the miso soup and okaka fillings use bonito, and most fillings are fish, meat, egg or cheese.',
    hours_raw: 'Mon–Fri 7:30–14:00, takeaway only 10:00–11:00; closed Sundays and holidays (Tabelog). An October 2025 review also lists Saturday 9:00–14:00. PayPay only — no cards or e-money (Tabelog). Two stools for eating in; mostly takeaway (2025–26 reviews). Opened 9 September 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-5-6, 榎本ビル 1F, in a back street — 2 min from Ningyocho Stn exit A5; across from 寿限無 担々麺 (December 2023 review)',
    cuisine: 'Onigiri made to order from a showcase, with rice cooked in a traditional pot (Tabelog) — Akita Komachi from Ogata village, Ariake Sea nori and chosen salt (October 2025) · onigiri ¥230–360 (2025–26): Nanko ume, salmon in house shio-koji (Toyosu/Tsukiji fish, per 2025 reviews), house-made tuna mayo with onion, iburi-gakko and cheese, negi miso, simmered anago, simmered clams, chicken soboro, ume okaka, soy-koji bonito, shio musubi · miso soup of three misos ¥200–250 · morning set; set of onigiri, sides and miso soup ¥700–1,000; tamago-kake-gohan to eat in (2024–25 reviews)',
    website: SITE, gmaps: gm('おにぎり屋 シチロカ 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Onigiri · Ningyocho, kamado-rice onigiri from a two-stool shop] A tiny onigiri shop on a Ningyocho back street, open from 7:30 on weekdays, with a showcase of about ten kinds and two stools if you want to eat there (everyone else takes away). The rice is Akita Komachi cooked in a traditional pot, shaped large, fluffy and just firm enough to hold, wrapped in Ariake nori. Fillings are generous and often house-made: salmon cured in shio-koji, tuna mayo made without canned tuna, smoky iburi-gakko with cheese, Nanko plum, simmered clams (2025–26 reviews). Add a miso soup of three misos with cabbage and komatsuna. The owner talks happily about sourcing (2025). Takeaway only from 10:00 to 11:00; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; talked to a May 2025 diner about the craft and sourcing)'], origin: null,
      background: 'Opened 9 September 2014 (Tabelog). Tabelog highlights fluffy rice cooked in a traditional pot, quality ingredients and homemade food. A May 2025 regular heard from the owner that fish comes from Toyosu; an October 2025 review names Akita Komachi from Ogata village, Ariake Sea nori and Tsukiji salmon in house shio-koji. Website shichiroca.net (Tabelog).',
      philosophy: '"Quality ingredients" and "homemade" (Tabelog).', specialty: 'Pot-cooked-rice onigiri; salmon in shio-koji; house tuna mayo.',
      anecdotes: [
        { text: '"The rice is glossy and each grain stands out, crumbling perfectly when you take a bite!" — October 2025, salmon, tuna mayo and negi miso onigiri.', source: R + 'B514711257/' },
        { text: '"The smoked gakkō cheese had a strong aroma of smoke and a rich cheese flavor, making it a unique and memorable filling for onigiri." — March 2026.', source: R + 'B524737310/' },
        { text: '"I went right after opening, so the miso soup was a bit lukewarm, which was disappointing." — April 2026, morning set.', source: R + 'B527348778/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり屋 シチロカ、日本料理、おにぎり、日本橋人形町3-5-6 榎本ビル 1F、人形町駅A5出口から徒歩2分、月〜金7:30〜14:00 (10:00〜11:00はテイクアウトのみ)、日祝休み、カード・電子マネー不可、PayPay可、2席、禁煙、2014年9月9日オープン、釜で炊くふっくらしたご飯、「素材」と「手作り」にこだわる、ホームページ shichiroca.net。口コミ(2023年12月〜2026年6月): 大きくふっくらしたおにぎり、Ogata 村の Akita Komachi、Ariake の海苔、塩麹の鮭、ツナ缶を使わない自家製ツナマヨ、燻製たくあんとチーズ、Nanko の梅、あさりの佃煮、3種の味噌の味噌汁、土曜も9時〜14時という声、朝のセット、ほとんどは持ち帰り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B472540600/', R + 'B476358412/', R + 'B494339334/', R + 'B504623925/', R + 'B506337969/', R + 'B508611547/', R + 'B514711257/', R + 'B524737310/', R + 'B527348778/', R + 'B529960138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase and pay at the counter; mostly takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-5-6 榎本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2023–June 2026.' },
    pin_source: `Tabelog ${TB} (35.686873, 139.780882); cross-checked: GSI 東京都中央区日本橋人形町三丁目5番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514711257/', R + 'B524737310/', R + 'B506337969/'],
    price_note: 'Prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salmon onigiri (shio-koji cured)', '¥360', 'Onigiri', 'ask', 'no', 'October 2025.', 'salmon'),
      it('', '', 'Nanko ume onigiri', '¥300', 'Onigiri', 'ask', 'ask', 'July 2025.', 'nanko_ume'),
      it('', '', 'Tuna mayo onigiri (house-made, with onion)', '¥330', 'Onigiri', 'ask', 'no', 'October 2025; March 2026.', 'tuna_mayo'),
      it('', '', 'Miso soup (three misos)', '¥250', 'Sides', 'ask', 'no', 'October 2025.', 'miso_soup'),
    ] }, {
    cuisine: 'ショーケースから選ぶおにぎり、ご飯は釜で炊く (食べログ)。Ogata 村の Akita Komachi、Ariake の海苔、選んだ塩 (2025年10月)・おにぎり230〜360円 (2025〜26年): Nanko の梅、自家製塩麹の鮭 (2025年の口コミでは Toyosu や Tsukiji の魚)、玉ねぎ入りの自家製ツナマヨ、燻製たくあんとチーズ、ねぎ味噌、煮穴子、あさりの佃煮、鶏そぼろ、梅おかか、醤油麹のおかか、塩むすび・3種の味噌の味噌汁200〜250円・朝のセット、おにぎりとおかずと味噌汁のセット700〜1,000円、店内では卵かけご飯も (2024〜25年の口コミ)',
    neighborhood: '日本橋人形町3-5-6 榎本ビル 1F、裏通り。人形町駅A5出口から徒歩2分。寿限無 担々麺の向かい (2023年12月の口コミ)',
    gf_detail: '要確認。ご飯、塩、海苔そのものは小麦を含まず、塩むすびはご飯と塩だけ (2023年の口コミ) だが、味付けした具も多く (醤油麹のおかか、甘辛い鶏そぼろ、ツナマヨ、あさりの佃煮)、味噌汁は3種の味噌。グルテンフリーの表示はない。',
    vegan_detail: '要確認。塩むすびと Nanko の梅のおにぎりは植物性だが、味噌汁とおかかには鰹節、ほとんどの具は魚、肉、卵、チーズ。',
    notes: '[おにぎり・人形町、釜炊きご飯の2席だけのおにぎり屋] 人形町の裏通りの小さなおにぎり屋で、平日は7時半から。ショーケースに10種類ほど、店内で食べるなら2席 (ほとんどの人は持ち帰り)。ご飯は Akita Komachi を釜で炊き、大きくふっくら、でも崩れない程度に握り、Ariake の海苔で包む。具はたっぷりで自家製のものが多い: 塩麹の鮭、ツナ缶を使わないツナマヨ、燻製の香りのたくあんとチーズ、Nanko の梅、あさりの佃煮 (2025〜26年の口コミ)。キャベツと小松菜の入った3種の味噌の味噌汁も。店主は仕入れの話を楽しそうにしてくれる (2025年)。10時〜11時は持ち帰りのみ、日曜休み。',
  });
}

// ================================================================ 黎明
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13319463/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '23:30']);
  put({
    id: 'tokyo_reimei_ningyocho', name: '黎明 (Reimei)', category: 'MOM_AND_POP',
    lat: 35.68652, lng: 139.783694, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Chicken sashimi with salt and salt-grilled skewers may suit, but the omakase includes tapioca-flour noodles, egg-yolk soy sauce, mizutaki and finishing rice dishes such as chicken tempura rice; nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase.',
    hours_raw: 'Tue–Sat 18:30–23:30; closed Sunday and Monday (Tabelog). Reservations only; same-day cancellations charged 100%; service charge 10% (Tabelog). Omakase full course from 18:30 (¥13,000, September–October 2026); a short course after 21:00 bookable on Tabelog, ¥6,800 (Tabelog). Cards, e-money and QR (Tabelog). 10 counter seats per the listing; the shop text describes a U-shaped counter of 11 (Tabelog). Second floor by lift. Non-smoking. Opened 1 April 2026 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-7-13, レイフォリア人形町 2F — about 2–5 min from Ningyocho Stn',
    cuisine: 'Yakitori and chicken omakase blending yakitori with Japanese cooking: charcoal, straw and iron-plate grilling (Tabelog) · omakase full course ¥13,000 (September–October 2026); short course of 8 items after 21:00 ¥6,800 (Tabelog) · courses in 2026: chicken sashimi of breast, heart, gizzard and white liver with salt and sesame oil; chicken "nakaochi" sushi with pickled daikon; thigh, tsukune, gizzard and neck skewers; mizutaki in a milky broth; shiitake with potato purée and egg-yolk soy; tapioca-flour noodles; chawanmushi with water spinach; duck; then any of duck soboro rice, chicken tempura rice or sea-bream-style chazuke, and zosui when the broth allows · Kagoshima Kirishima kuroge chicken (September 2026); Misaki jidori (October 2026) · drink omakase of five half-gō sakes ¥6,000 with other drinks as chasers (September 2026)',
    website: TB, gmaps: gm('黎明 焼き鳥 人形町'), menu_url: null,
    notes: "[Yakitori · Ningyocho, a chicken omakase counter from the founder of BLESS] Opened in April 2026 by Yohei Fujimoto, who founded the yakitori restaurant BLESS in Morishita, a Tabelog Yakitori 100 regular, and has since left it (2026 reviews). The new counter of ten or eleven seats sits on a second floor near Ningyocho station. It is less a skewer bar than a chicken kaiseki. The omakase (¥13,000) opens with chicken sashimi and a chicken \"nakaochi\" sushi that diners compare to negitoro, then crisp-skinned thigh, tsukune and gizzard skewers between mizutaki, tapioca noodles and inventive small dishes. It ends with your pick of duck soboro rice, chicken tempura rice or chazuke. A ¥6,800 short course starts after 21:00. Diners in September and October 2026 called it the best of their year; one found it pricey for yakitori. Reservations only; closed Sundays and Mondays.",
    chef_bio: { chef_name: 'Yohei Fujimoto (romaji from 2026 reviews; no kanji source found)', roles: ['Owner-chef (2026 reviews: founder of BLESS who opened Reimei in April 2026)'], origin: null,
      background: 'Per 2026 reviews: Yohei Fujimoto opened the yakitori diner BLESS in Morishita, Koto Ward, then sold that business (October 2026) and is no longer involved with it (September 2026), opening Reimei in Ningyocho in April 2026. Tabelog\'s shop text: a new challenge from a chef whose previous restaurant was a Tabelog Yakitori 100 selection five years running; experience from a Hokkaido yakitori restaurant combined with techniques learned in Tokyo; chicken, fish and vegetables direct from producers. A September 2026 diner credits the chef\'s Japanese-cuisine training for the mizutaki.',
      philosophy: 'Combine the techniques of Japanese cuisine and grilled chicken on one plate (Tabelog shop text).', specialty: 'Chicken sashimi and sushi; yakitori omakase with three finishing rice dishes.',
      anecdotes: [
        { text: '"From the very first chicken nigiri, the flavor was mind-blowing. It was like a \'negitoro\' (minced tuna with green onion) but without any of the usual chicken odor." — October 2026, ¥13,000 course.', source: R + 'B537463162/' },
        { text: '"Fujimoto is said to be completely focused on Reimei, having no involvement with the current operations of BLESS." — September 2026.', source: R + 'B535445336/' },
        { text: '"The prices are quite high for a yakitori restaurant, so it\'s not a place I can visit easily." — September 2026, omakase full course.', source: R + 'B535264302/' },
      ],
      japanese_sources_summary: '食べログ: 黎明、焼き鳥、鶏料理、日本橋人形町2-7-13 レイフォリア人形町 2F、人形町駅から徒歩5分、火〜土18:30〜23:30、日月休み、予約のみ、当日キャンセルは100%、サービス料10%、カード・電子マネー・QR可、10席 (カウンターのみ)、2026年4月1日オープン、焼き鳥百名店に5年連続で選ばれた料理人の新しい挑戦、Hokkaido の焼き鳥店での経験と東京で学んだ技、炭火・藁・鉄板、21時からのショートコース6,800円。口コミ(2026年8月〜10月): Morishita の BLESS を作った Yohei Fujimoto、BLESS は売却、鶏刺し、nakaochi の鶏の寿司、かしわ、つくね、砂肝、水炊き、タピオカ粉の麺、鴨、締めは鴨そぼろご飯・鶏天丼・茶漬けから、おまかせ13,000円、日本酒5種のおまかせ6,000円、今年いちばんという声、焼き鳥にしては高いという声も。',
      confidence: 'medium', sources: [TB, R + 'B525157308/', R + 'B525691162/', R + 'B533271986/', R + 'B534993228/', R + 'B535264302/', R + 'B535445336/', R + 'B536674373/', R + 'B537406659/', R + 'B537463162/', R + 'B537664105/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase at the counter; the restaurant calls ahead to adjust bookings (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-7-13 レイフォリア人形町 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened April 2026; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686520, 139.783694); cross-checked: GSI 東京都中央区日本橋人形町二丁目7番13号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535445336/', R + 'B537463162/'],
    price_note: 'Course prices from September–October 2026 reviews and Tabelog; service charge 10% on top.', last_checked: TODAY, items: [
      it('', '', 'Omakase full course', '¥13,000', 'Courses', 'ask', 'no', 'September–October 2026.', 'omakase'),
      it('', '', 'Short course after 21:00, 8 items', '¥6,800', 'Courses', 'ask', 'no', 'Tabelog (booking via Tabelog).', 'short'),
      it('', '', 'Sake omakase: five half-gō pours', '¥6,000', 'Drinks', '', '', 'September 2026.', 'sake_omakase'),
    ] }, {
    cuisine: '焼き鳥と和食の技を合わせた鶏のおまかせ、炭火、藁、鉄板で焼く (食べログ)・おまかせのフルコース13,000円 (2026年9月〜10月)、21時からの8品のショートコース6,800円 (食べログ)・2026年のコース: むね、ハツ、砂肝、白レバーの鶏刺しを塩とごま油で、たくあんを合わせた nakaochi の鶏の寿司、かしわ、つくね、砂肝、せせりの串、白濁した水炊き、椎茸にじゃがいものピュレと卵黄醤油、タピオカ粉の麺、空芯菜の茶碗蒸し、鴨。締めは鴨そぼろご飯、鶏天丼、鯛茶漬け風から好きなだけ、出汁があれば雑炊も・Kagoshima の Kirishima の黒毛の鶏 (2026年9月)、Misaki の地鶏 (2026年10月)・日本酒5種を半合ずつのおまかせ6,000円、ほかの飲み物はチェイサーとして (2026年9月)',
    neighborhood: '日本橋人形町2-7-13 レイフォリア人形町 2F。人形町駅から徒歩2〜5分',
    gf_detail: '予約時に要確認。塩の鶏刺しや塩焼きの串は合うかもしれないが、おまかせにはタピオカ粉の麺、卵黄醤油、水炊き、鶏天丼などの締めのご飯もあり、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 鶏のおまかせ。',
    notes: '[焼き鳥・人形町、BLESS の創業者の鶏のおまかせのカウンター] Morishita の焼き鳥店 BLESS (焼き鳥 百名店の常連) を作り、その後離れた Yohei Fujimoto さんが2026年4月に開いた店 (2026年の口コミ)。人形町駅近くの2階に10〜11席のカウンター。串の店というより鶏の懐石で、おまかせ (13,000円) は鶏刺しと、ねぎとろにたとえられる nakaochi の鶏の寿司に始まり、皮がパリッとしたかしわ、つくね、砂肝の串の合間に水炊き、タピオカの麺、工夫した小皿。締めは鴨そぼろご飯、鶏天丼、茶漬けから選ぶ。21時からは6,800円のショートコース。2026年9月と10月の客は今年いちばんと書き、焼き鳥にしては高いという声も。予約のみ、日曜・月曜休み。',
  });
}

save();
