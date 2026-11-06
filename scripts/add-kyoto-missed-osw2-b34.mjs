// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 34.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 十祇家 烏丸三条個室店 (26025381): same-concept branch of 十祇家, already in data (野菜ソムリエのお店 十祇家 木屋町御池個室店).
//   + ヤキソバスタンドバイミー Yakisoba Stand By Me (yakisoba specialist at Anekoji-Ryogaemachi; since 2020) — sister of 麺屋 優光
//     (kyr_menya_yukou, in data); invoice 株式会社ＫＡＳＨＩＲＯ; two Stand By Me shops (this one and LaLaport Kadoma); drafted, flagged.
//   + 四条パクチー Shijo Pakuchi (Thai in a machiya on Shijo-dori; since 2013) — one of a small Kyoto "パクチー" family with パクチー丸太町
//     (not in data) per a web article; drafted.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 藤菜美 ジェイアール京都伊勢丹店 (26027247): a department-store counter of the dango maker 藤菜美 (三年坂本店, 高台寺店, 京都駅八条口店
//     in the crawl); not a restaurant.
//   + 水月亭 Suigetsu Tei (steamed-pork and horumon yakiniku at Higashikujo) — one branch in Saiin (not in data).
//   + マルミヤ亭 Marumiya Tei (steamed-pork and pork yakiniku at Higashikujo, over 50 years) — sister マルミヤJr. (not in data).
//   None of the four drafted is in data/kyoto.json: grep by id, name (スタンドバイミー, パクチー, 水月亭, マルミヤ) and address (柿本町411,
//   郭巨山町21-1, 東九条南山王町46, 東九条北松ノ木町13) found none; Stand By Me shares a building with kyoto_onikai_second (see pin).
//   Service charges checked against Tabelog’s Japanese original: 四条パクチー 「なし」 (the English page wrongly says 10%); none listed
//   for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-34');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025381', 'same-concept branch of 十祇家, already in data (野菜ソムリエのお店 十祇家 木屋町御池個室店)');
skip('26027247', 'not a restaurant: department-store counter of the dango maker 藤菜美 (三年坂本店, 高台寺店, 京都駅八条口店 in the crawl)');

skip('26033715', 'sub-brand of a chain: run by the 麺屋 優光 team (official site); 麺屋優光 had 27 shops nationwide in Aug 2025 (zaikei.co.jp press release) — integrator 2026-11-06');

// ================================================================ 四条パクチー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023035/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_shijo_pakuchi', name: '四条パクチー (Shijo Pakuchi)', category: 'OMNI',
    lat: 35.00382824786907, lng: 135.75602794035322, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Thai dishes with fish sauce and soy-based sauces, fried chicken and noodle dishes; jasmine rice and rice noodles also appear; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Thai cooking leans on fish sauce, shrimp and chicken; nothing vegan is marked (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00); dinner 17:00–22:00 (last order 21:30); open daily, closed irregularly (Tabelog). No service charge (Tabelog’s Japanese original: 「なし」 — the English page wrongly says 10% is added). 50 seats; private hire for 20–50, parties up to about 40; non-smoking; cards including UnionPay, transit IC and other e-money, and QR including Alipay (Tabelog). In a renovated Kyoto machiya on Shijo-dori east of Nishinotoin, about 5 min from Shijo Stn (351 m) (Tabelog). Opened 1 December 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori, west of Karasuma — 5 min from Shijo Stn',
    cuisine: 'Thai cooking by a Thai chef trained in hotels, in a machiya filled with tableware and posters brought from Thailand (Tabelog) · lunch sets of several small dishes with jasmine rice, e.g. Bangkok Crunch ¥1,500, Chiang Mai set ¥1,700, Krungthep set (tom yum goong, green curry, gapao, yum woon sen, kara-age, fresh spring rolls), Phuket lunch · evening tom yum ramen set ¥1,800 with thin, medium or thick noodles · pad thai, khao man gai, cilantro kara-age, som tam with sticky rice, extra cilantro by the bowl (2026 reviews) · party course of nine dishes with all-you-can-drink from ¥2,980 (Tabelog)',
    website: null, gmaps: gm('四条パクチー 四条西洞院'), menu_url: TB,
    notes: "[Thai · Shijo-dori, a Thai canteen in a machiya] A lively Thai eatery in an old Kyoto townhouse on Shijo-dori, decked out with tableware and posters from Thailand and run in the kitchen by a hotel-trained Thai chef. Lunch is a tray of small dishes — tom yum, green curry, gapao, herb kara-age — for about ¥1,500–1,700; at night try pad thai, khao man gai or tom yum ramen. Ask for extra cilantro by the bowl. Open daily.",
    chef_bio: { chef_name: null, roles: ['Thai chef, trained in hotels (Tabelog); not named'], origin: null,
      background: 'Per Tabelog’s official introduction: a Thai eatery recreated in a Kyoto machiya with tableware, posters and furniture brought from Thailand, cooked by a Thai chef trained in hotels. Tabelog lists the operator’s website as green-curry.co.jp. A web article describes sister shops in Marutamachi and Sanjo (Retty lists the Sanjo shop as closed). Opened 1 December 2013 (Tabelog).',
      philosophy: null,
      specialty: 'Thai lunch sets; tom yum ramen.',
      anecdotes: [
        { text: 'An August 2026 trio ordered a side bowl of cilantro and topped every dish with it.', source: R + 'B533755228/' },
        { text: 'A July 2026 visitor, drawn in by som tam on the board outside, had it with sticky rice.', source: R + 'B531733229/' },
        { text: 'A July 2026 diner trying cilantro for the first time after decades of wondering finally came in.', source: R + 'B532482926/' },
      ],
      japanese_sources_summary: '食べログ: 四条パクチー、タイ料理・居酒屋・バル、下京区四条通西洞院東入郭巨山町21-1、四条駅から351m、11:30〜14:30 (L.O. 14:00)、17:00〜22:00 (L.O. 21:30)、不定休、サービス料なし、50席、20〜50名で貸切可、禁煙、カード・電子マネー・QR 可、2013年12月1日オープン、ウェブサイト green-curry.co.jp。公式紹介: 京町家を改装したタイ食堂、タイから取り寄せた食器・ポスター・家具、ホテルで腕を磨いたタイ人シェフ、パッタイやハーブの唐揚げなど9品の飲み放題付き宴会コース2,980円から。口コミ (2026年、英語): ランチのセット (バンコククランチ1,500円、チェンマイセット1,700円、クルンテープセット、プーケットランチ)、夜のトムヤムラーメン1,800円、カオマンガイ、パクチー唐揚げ、ソムタムともち米、パクチーの追加。',
      confidence: 'medium', sources: [TB, R + 'B491571141/', R + 'B530534133/', R + 'B531733229/', R + 'B532121301/', R + 'B532336703/', R + 'B532482926/', R + 'B533755228/', R + 'B534456348/', R + 'B534534277/', R + 'B534552228/', R + 'B536715706/', R + 'B537216164/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menus of set meals; open every day.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通西洞院東入郭巨山町21-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003828, 135.756028); cross-checked: GSI 京都府京都市下京区郭巨山町21番地 (lot) 23m; 25m from kyoto_charcoal_shijo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537216164/', R + 'B534456348/', R + 'B536715706/', TB],
    price_note: 'Prices from August–October 2026 reviews; course from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Bangkok Crunch lunch set', '¥1,500', 'Lunch', 'ask', 'no', '', 'bangkok_crunch'),
      it('', '', 'Chiang Mai set', '¥1,700', 'Lunch', 'ask', 'no', '', 'chiang_mai'),
      it('', '', 'Tom yum ramen evening set', '¥1,800', 'Dinner', 'ask', 'no', '', 'tomyum_ramen'),
      it('', '', 'Party course with all-you-can-drink (from)', '¥2,980', 'Course', 'ask', 'no', '', 'party_course'),
    ] }, {
    cuisine: 'ホテルで腕を磨いたタイ人シェフのタイ料理。タイから取り寄せた食器やポスターを飾った町家で (食べログ)・昼はジャスミンライスと小皿料理のセット、たとえばバンコククランチ1,500円、チェンマイセット1,700円、クルンテープセット (トムヤムクン、グリーンカレー、ガパオ、ヤムウンセン、唐揚げ、生春巻)、プーケットランチ・夜のトムヤムラーメンのセット1,800円 (麺は細・中・太)・パッタイ、カオマンガイ、パクチー唐揚げ、もち米とソムタム、追加のパクチーは鉢で (2026年の口コミ)・飲み放題付き9品の宴会コース2,980円から (食べログ)',
    neighborhood: '四条通、烏丸の西。四条駅から徒歩5分',
    gf_detail: '要確認。ナンプラーや醤油系のたれのタイ料理、唐揚げ、麺料理。ジャスミンライスや米麺もある。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。タイ料理はナンプラー、海老、鶏が中心で、ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[タイ料理・四条通、町家のタイ食堂] 四条通の古い京町家の、にぎやかなタイ食堂。タイの食器やポスターで飾り、厨房にはホテル出身のタイ人シェフ。昼はトムヤム、グリーンカレー、ガパオ、ハーブの唐揚げなど小皿のセットで1,500〜1,700円ほど。夜はパッタイ、カオマンガイ、トムヤムラーメンを。パクチーは鉢で追加できる。無休。',
  });
}

// ================================================================ 水月亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002383/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '21:00']);
  put({
    id: 'kyoto_suigetsu_tei', name: '水月亭 (Suigetsu Tei)', category: 'OMNI',
    lat: 34.98186210788536, lng: 135.76339514012616, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steamed pork and grilled pork offal with dipping sauces and kimchi; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork and offal yakiniku house (2026 reviews).',
    hours_raw: '16:00–21:00, Tuesday–Sunday; closed Monday; hours may change (Tabelog). Reservations strongly advised — walk-ins are turned away when full, especially on Saturday evenings (July 2026). Water kimchi can sell out early (October 2026). No photography inside (May and July 2026). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). Table seating and a tatami room (September 2026). In a quiet residential street of Higashikujo, about 10 min from Kyoto Stn (450 m from Kujo Stn) (Tabelog; October 2026). This is the original shop; there is a branch in Saiin (October 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashikujo — 10 min from Kyoto Stn',
    cuisine: 'Pork yakiniku and steamed pork in a Showa-retro neighbourhood house (2026 reviews) · mushi-buta steamed pork, regular (head meat) or premium for ¥50 more · grilled horumon mix, kobukuro, liver with salt, ten-niku, harami, hire, chicken thigh · pig’s trotters · kimchi platter, water kimchi, namul · about ¥3,000–4,000 a head with drinks (2026 reviews)',
    website: null, gmaps: gm('水月亭 東九条'), menu_url: TB,
    notes: "[Yakiniku · Higashikujo, steamed pork and horumon] A Showa-era pork house in the backstreets south of Kyoto Station, packed with regulars. Start with the famous mushi-buta (steamed pork) and trotters, then grill a horumon mix, kobukuro and liver; finish with kimchi. Light, cheap and addictive — about ¥3,000–4,000 a head. Book ahead, bring cash, and keep the camera away (no photos inside). Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per 2026 reviews: a long-running pork yakiniku house in Higashikujo known for steamed pork and offal, with a branch in Saiin; reviewers note young local staff, a retro Showa atmosphere and a no-photos rule inside.',
      philosophy: null,
      specialty: 'Mushi-buta steamed pork; horumon mix.',
      anecdotes: [
        { text: 'A May 2026 first-timer asked the staff for recommendations and was steered to steamed pork, pig’s trotters and grilled horumon.', source: R + 'B528558108/' },
        { text: 'An October 2026 diner booked for 18:30 and found the water kimchi already sold out.', source: R + 'B537821665/' },
        { text: 'A July 2026 regular saw several walk-ins turned away on a Saturday evening.', source: R + 'B532767049/' },
      ],
      japanese_sources_summary: '食べログ: 水月亭 (すいげつてい)、焼肉・ホルモン、南区九条河原町上ル東九条南山王町46、九条駅から450m、火〜日16:00〜21:00、月曜定休、カード・電子マネー・QR 不可。口コミ (2026年、英語): 京都駅から徒歩10分ほどの住宅街、昭和レトロ、本店で西院に支店、むし豚 (並は頭肉、上は50円増し)、ホルモンミックス、コブクロ、レバー塩、天肉、ハラミ、ヒレ、豚足、キムチ盛り合わせ、水キムチ、ナムル、店内撮影不可、予約必須、1人3,000〜4,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B445488240/', R + 'B511683566/', R + 'B528558108/', R + 'B529394338/', R + 'B529628565/', R + 'B532340779/', R + 'B532767049/', R + 'B535065553/', R + 'B536621929/', R + 'B537389249/', R + 'B537821665/', R + 'B538210573/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; no photos inside; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区九条河原町上ル東九条南山王町46',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.981862, 135.763395); cross-checked: GSI 京都府京都市南区東九条南山王町46番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529628565/', R + 'B511683566/'],
    price_note: 'From 2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Mushi-buta steamed pork (regular or premium)', '', 'Steamed', 'ask', 'no', 'Premium ¥50 more.', 'mushibuta'),
      it('', '', 'Horumon mix', '', 'Grill', 'ask', 'no', '', 'horumon_mix'),
      it('', '', 'Pig’s trotters', '', 'Steamed', 'ask', 'no', '', 'tonsoku'),
    ] }, {
    cuisine: '昭和レトロな下町の家の、豚の焼肉とむし豚 (2026年の口コミ)・むし豚は並 (頭肉) と、50円増しの上・ホルモンミックス、コブクロ、レバー塩、天肉、ハラミ、ヒレ、鶏もも・豚足・キムチ盛り合わせ、水キムチ、ナムル・飲んで1人3,000〜4,000円ほど (2026年の口コミ)',
    neighborhood: '東九条。京都駅から徒歩10分',
    gf_detail: '要確認。たれやキムチとともに食べるむし豚と豚ホルモンの焼肉。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚とホルモンの焼肉店 (2026年の口コミ)。',
    notes: '[焼肉・東九条、むし豚とホルモン] 京都駅の南の路地の、常連でにぎわう昭和の豚の店。まずは名物のむし豚と豚足、それからホルモンミックス、コブクロ、レバーを焼き、キムチで締める。軽くて安くてやみつきに、1人3,000〜4,000円ほど。予約を、現金で、店内撮影は不可。月曜休み。',
  });
}

// ================================================================ マルミヤ亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028561/'; const R = TB + 'dtlrvwlst/';
  const SHOP = 'https://marumiyatei.theshop.jp/';
  const W = day(['17:00', '22:00']); const S = day(['14:00', '21:00']);
  put({
    id: 'kyoto_marumiya_tei', name: 'マルミヤ亭 (Marumiya Tei)', category: 'OMNI',
    lat: 34.97787778728907, lng: 135.76647723504763, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steamed pork with chojang, marinated and salted grilled cuts, kimchi; no gluten information is published (official shop; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork and offal yakiniku house (reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Saturday 17:00–22:00 (last order 21:30); Sunday 14:00–21:00 (last order 20:30); closed Wednesday, and occasionally for supply or maintenance (Tabelog). Bookings advised — often full even on weekdays (June 2026). No service charge listed (Tabelog). 28 seats at seven tables for four with shichirin grills; parties up to 35; non-smoking; cards including UnionPay, and PayPay (Tabelog; 2026 reviews). Hidden in the backstreets of Higashikujo, 499 m from Tofukuji Stn (Tabelog; June 2026). A neighbourhood taste loved for over half a century (official online shop). Sister shop マルミヤJr. is a separate listing.',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashikujo — 499 m from Tofukuji Stn',
    cuisine: 'Steamed pork and pork yakiniku over shichirin (reviews) · mushi-buta steamed pork ¥650, plain pig’s trotters ¥600, trotter soup ¥600, pork belly with skin ¥750, boneless pork ¥690, marinated harami ¥1,300, beef heart sashimi ¥820, omasum sashimi, bon-no-kubo (pork neck), whole cucumber pickles ¥390 (September 2025–February 2026) · salt on request for cuts usually served with sauce (September 2026) · vacuum-packed mushi-buta, trotters and kimchi sold online (official shop)',
    website: SHOP, gmaps: gm('マルミヤ亭 東九条'), menu_url: TB,
    notes: "[Yakiniku · Higashikujo, half a century of steamed pork] A busy, long-loved pork house in the backstreets of Higashikujo, grilling over shichirin at seven tables. The steamed pork (about ¥650) and trotters are the signatures; add pork belly with skin, rare neck cuts and very fresh offal sashimi. Good value — about ¥4,000–5,000 with drinks. Opens mid-afternoon on Sundays; closed Wednesday. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per the official online shop: a downtown taste loved for over half a century, selling vacuum-packed steamed pork, pig’s trotters and kimchi. Reviewers describe a butcher-style pork yakiniku house with a loyal local following and a sister shop, マルミヤJr.',
      philosophy: null,
      specialty: 'Mushi-buta steamed pork; pig’s trotters.',
      anecdotes: [
        { text: 'A June 2026 group expecting a quiet Monday found the place almost full without a booking.', source: R + 'B521039898/' },
        { text: 'A September 2026 regular asked for the harami and kobukuro with salt instead of sauce, and the kitchen happily obliged.', source: R + 'B512679324/' },
        { text: 'A July 2026 regular struggles to visit because so many Kyoto get-togethers fall on Wednesday, the closing day.', source: R + 'B487732767/' },
      ],
      japanese_sources_summary: '公式オンラインショップ (marumiyatei.theshop.jp): むし豚・焼肉マルミヤ亭、半世紀以上愛され続けた下町の味、真空パックの豚足・むし豚・豚ミミ・キムチ。食べログ: 焼肉・ホルモン、南区東九条北松ノ木町13、東福寺駅から499m、月火木金土17:00〜22:00 (L.O. 21:30)、日14:00〜21:00 (L.O. 20:30)、水曜定休、仕入れや設備で臨時休業あり、28席 (4人席×7)、35名まで、禁煙、カード・PayPay 可。口コミ (2025〜2026年、英語): 七輪、むし豚650円、豚足600円、豚足スープ600円、皮付きバラ750円、骨なし豚690円、牛ハツ刺し820円、センマイ刺し、ぼんのくぼ、ハラミ1,300円、きゅうりの一本漬け390円、姉妹店マルミヤJr.。',
      confidence: 'medium', sources: [TB, SHOP, R + 'B447815230/', R + 'B487732767/', R + 'B499783841/', R + 'B504167627/', R + 'B512679324/', R + 'B515769189/', R + 'B521039898/', R + 'B526086767/', R + 'B526310795/', R + 'B531250739/', R + 'B532052621/', R + 'B534573716/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; grill at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条北松ノ木町13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official online shop and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.977878, 135.766477); cross-checked: GSI 京都府京都市南区東九条北松ノ木町13番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499783841/', R + 'B515769189/'],
    price_note: 'Prices from September 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('むし豚', '', 'Mushi-buta steamed pork', '¥650', 'Steamed', 'ask', 'no', '', 'mushibuta'),
      it('', '', 'Plain pig’s trotters', '¥600', 'Steamed', 'ask', 'no', '', 'tonsoku'),
      it('', '', 'Pork belly with skin', '¥750', 'Grill', 'ask', 'no', '', 'kawatsuki_bara'),
      it('', '', 'Marinated harami', '¥1,300', 'Grill', 'ask', 'no', '', 'harami'),
      it('', '', 'Beef heart sashimi', '¥820', 'Sashimi', 'ask', 'no', '', 'hatsu_sashi'),
    ] }, {
    cuisine: '七輪で焼く豚の焼肉とむし豚 (口コミ)・むし豚650円、豚足 (プレーン) 600円、豚足スープ600円、皮付きバラ750円、骨なし豚690円、味付けハラミ1,300円、牛ハツ刺し820円、センマイ刺し、ぼんのくぼ (豚の首)、きゅうりの一本漬け390円 (2025年9月〜2026年2月)・たれの部位も頼めば塩で (2026年9月)・真空パックのむし豚、豚足、キムチは通販でも (公式オンラインショップ)',
    neighborhood: '東九条。東福寺駅から499m',
    gf_detail: '要確認。チョジャンを添えたむし豚、たれや塩の焼き物、キムチ。グルテンの情報は公開されていない (公式ショップ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚とホルモンの焼肉店 (口コミ)。',
    notes: '[焼肉・東九条、半世紀のむし豚] 東九条の路地の、長く愛されるにぎやかな豚の店。7つのテーブルで七輪を囲む。名物はむし豚 (650円ほど) と豚足、皮付きバラや珍しい首の部位、新鮮な刺しも。飲んで4,000〜5,000円ほどとお手頃。日曜は昼過ぎから、水曜休み。予約を。',
  });
}

save();
