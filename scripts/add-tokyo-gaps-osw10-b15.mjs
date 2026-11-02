// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 15.
//   + つぼみ家 四谷店 Tsubomiya (20-seat stand-up soba, open round the clock Mon–Fri: house-made 60% soba, tempura fried to order)
//   + ホメリ homeri (14-seat antique-style kissa on the 2nd floor, opened 2010 by 宮内友之; named for home + the owner's wife Eri)
//   + 中華食堂 月ノ光 Chuka Shokudo Tsuki No Hikari (16-seat one-person Chinese diner known for non-spicy tantanmen; same building as homeri)
//   + Polyphony (12-seat lacto-ovo vegetarian course restaurant with sake and Japanese-wine pairings; chef 竹口)
//   Chain check. Tsubomiya: one listing ("Yotsuya ten"); GetNavi and reviews name only this shop, and one 2026 reviewer wonders
//   whether there are any branches. Its owner also runs "Otoineppu TOKYO" (a different concept, per a November 2026 review).
//   homeri, Tsuki No Hikari, Polyphony: one listing each. None is in data/tokyo.json (grep by name, Tabelog id and address).
//   No skips: the first four non-data entries.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ つぼみ家 四谷店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13113461/'; const R = TB + 'dtlrvwlst/';
  const GN1 = 'https://getnavi.jp/gourmet/61376/'; const GN2 = 'https://getnavi.jp/gourmet/245347/';
  const ALL = day(['00:00', '24:00']);
  put({
    id: 'tokyo_tsubomiya_yotsuya', name: 'つぼみ家 四谷店 (Tsubomiya)', category: 'OMNI',
    lat: 35.688029, lng: 139.723502, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is 60% buckwheat (so 40% wheat flour), tempura is wheat-battered, and the dipping and soup broths are soy-based (GetNavi; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: both broths are made with bonito (honkarebushi) and kombu dashi, the hot one with mackerel flakes too (GetNavi).',
    hours_raw: 'Mon–Thu open 24 hours; Fri and the day before a holiday 7:00 to 5:00 the next morning (last order 4:50); Sat, Sun and holidays 11:00–19:00 (last order 18:50); open all year except a New Year break (Tabelog). A 2017 GetNavi listing gives weekday hours as 7:00 to 7:00 the next morning, so the shop likely opens at 7:00 on Monday; the "morning soba" starts at 7:00 (July 2026). Ticket machine; cash only — no cards, e-money or QR (Tabelog; September 2026). 20 places: a standing counter, counter seats and four 2-person tables; non-smoking; wheelchair accessible; children welcome (Tabelog; 2026 reviews). Busy with office workers at lunch (2026 reviews). Soba and tempura to take away (Tabelog).',
    hours: { 0: day(['07:00', '24:00']), 1: ALL, 2: ALL, 3: ALL, 4: ALL, 5: day(['00:00', '05:00'], ['11:00', '19:00']), 6: day(['11:00', '19:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Yotsuya 2-13-8, on the corner of Shinjuku-dōri and the Tsunomori-zaka street — 4 min from Yotsuya-sanchome Stn, 8 min from Yotsuya Stn',
    cuisine: 'Stand-up soba with fresh noodles and tempura fried to order (Tabelog; reviews) · 60% buckwheat soba cut by an extrusion noodle machine and boiled to order, thin and firm; cold dipping sauce from honkarebushi bonito and kombu, the hot broth adds mackerel flakes (GetNavi) · mori or hiyakake ¥460, kamo seiro (duck dipping soba) ¥890, large +¥100–110, double and triple servings (November 2026); vegetable-tempura mori soba ¥590 (May 2026); large shrimp tempura soba ¥790 (October 2026); chilled tanuki soba ¥520 (October 2026); tororo soba (June 2026) · tempura by the piece or plate: three vegetable tempura ¥220, four-piece assortment (two shrimp, eggplant, lotus root) ¥380, squid, chikuwa, mushrooms; onsen egg ¥70 (2026 reviews) · sets with rice: mini katsu don set ¥890, mini tempura don set, mini curry set (2026 reviews) · soba-yu in a pot on the counter (2024–26 reviews)',
    website: 'https://ja-jp.facebook.com/tsubomiya', gmaps: gm('つぼみ家 四谷店'), menu_url: null,
    notes: "[Soba · Yotsuya, a round-the-clock stand-up soba with real tempura] A stand-up soba shop on the Shinjuku-dōri corner that runs non-stop through the working week, where the morning-after crowd slurps soba at 6 a.m. and office workers queue at noon. The noodles are 60% buckwheat, cut and boiled to order, firm enough that regulars take them cold; the tempura is fried only when you order — two big shrimp, eggplant and lotus root for ¥380 — and the manager reportedly trained at a high-end soba restaurant. Mori soba is ¥460, duck kamo seiro ¥890, and a ticket for a mini katsu don set gets soba and a rice bowl. Prices have crept up, as long-time regulars note, and the katsu don draws mixed reviews. Ticket machine, cash only; counter, standing places and a few tables.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner or manager. GetNavi (2017–18): the shop makes its own 60% buckwheat soba with an extrusion machine, boiled to order, and "the manager is said to have trained at a certain high-end soba restaurant", which shows in the frying; tempura is fried fresh, never left waiting even at peak times. A September 2026 reviewer: "The owner always greets you with a cheerful smile." A November 2026 regular notes the nearby "Otoineppu TOKYO" is run by the same owner.',
      philosophy: '"We have redefined the concept of standing soba by offering soba and tempura at their best, all at reasonable prices… milling fresh buckwheat flour daily and cooking it to order" (Tabelog, shop text, machine-translated).', specialty: 'Tempura fried to order; cold mori and tanuki soba.',
      anecdotes: [
        { text: '"It\'s become a routine for me to enjoy soba here the morning after a night of drinking… since I usually arrive at the restaurant around 6 AM, I rarely get the chance to try [the morning soba]." — July 2026.', source: R + 'B494256645/' },
        { text: '"I opted for the four-piece tempura for JPY 380… It included two shrimp, a large eggplant, and a lotus root. Two shrimp!" — September 2026.', source: R + 'B485992475/' },
        { text: '"I have been coming here since the \'Kamo Seiro\' was JPY 580." — November 2026, now ¥890.', source: R + 'B433482249/' },
      ],
      japanese_sources_summary: '食べログ: つぼみ家 四谷店、そば・天ぷら・立ち食いそば、四谷2-13-8、四谷三丁目駅から徒歩4分、四ツ谷駅8分、月〜木24時間、金・祝前日7:00〜翌5:00、土日祝11:00〜19:00、年中無休 (年始は休み)、カード・電子マネー・QR不可、20席、禁煙、テイクアウト可。ゲットナビ (2017年・2018年): 押し出し式製麺機で打ちたてゆでたての6割そば、もりつゆはかつお本枯れ節と昆布、かけつゆはさば節も、店長はかつて高級そば店で修行、天ぷらは揚げたて、もりそば、ミニ天丼セット、大海老天そば、野菜天そば。口コミ(2024年〜2026年): 券売機、もり460円、鴨せいろ890円、野菜天 (3種) 220円、天ぷら盛り合わせ380円、野菜天蕎麦 冷590円、そば湯、朝7時からの朝そば、昼は会社員で混む。',
      confidence: 'medium', sources: [TB, GN1, GN2, R + 'B433482249/', R + 'B485992475/', R + 'B494256645/', R + 'B516851679/', R + 'B527789404/', R + 'B533823894/', R + 'B534173419/', R + 'B535082909/', R + 'B535415411/', R + 'B536231725/', R + 'B537423966/', R + 'B538074297/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a ticket at the machine and hand it in at the kitchen window at the back; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-13-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.688029, 139.723502); cross-checked: GSI 東京都新宿区四谷二丁目13番地 (lot) 22m. homeri and Tsuki No Hikari (四谷三栄町25-33) are about 50 m away up the same street; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B433482249/', R + 'B485992475/', R + 'B527789404/', R + 'B538074297/'],
    price_note: 'Prices from May–November 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('もり蕎麦', '', 'Mori soba (cold, with dipping sauce)', '¥460', 'Soba', 'no', 'no', 'September and November 2026 reviews.', 'mori'),
      it('鴨せいろ', '', 'Kamo seiro (cold soba with hot duck broth)', '¥890', 'Soba', 'no', 'no', 'November 2026 review.', 'kamo_seiro'),
      it('野菜天蕎麦 冷', '', 'Vegetable tempura soba, cold', '¥590', 'Soba', 'no', 'no', 'May 2026 review.', 'yasai_ten_soba'),
      it('', '', 'Large shrimp tempura soba', '¥790', 'Soba', 'no', 'no', 'October 2026 review.', 'oebi_ten_soba'),
      it('', '', 'Chilled tanuki soba', '¥520', 'Soba', 'no', 'no', 'October 2026 review.', 'hiyashi_tanuki'),
      it('天ぷら盛り合わせ', '', 'Tempura assortment (two shrimp, eggplant, lotus root)', '¥380', 'Tempura', 'no', 'no', 'September 2026 review.', 'tempura_mori'),
      it('', '', 'Mini katsu don set with soba', '¥890', 'Sets', 'no', 'no', 'October 2026 review.', 'mini_katsudon_set'),
    ] }, {
    cuisine: '打ちたての麺と注文後に揚げる天ぷらの立ち食いそば (食べログ、口コミ)・押し出し式製麺機で打ち、注文ごとにゆでる6割そばは細めでコシが強い。もりつゆはかつお本枯れ節と昆布のだし、かけつゆはさば節も加える (ゲットナビ)・もり、hiyakake 各460円、鴨せいろ890円、大盛り +100〜110円、2人前・3人前も (2026年11月)。野菜天蕎麦 冷590円 (2026年5月)、大海老天そば790円 (2026年10月)、冷やし tanuki soba 520円 (2026年10月)、とろろそば (2026年6月)・天ぷらは1品ずつか盛り合わせ: 野菜天 (3種) 220円、天ぷら盛り合わせ (海老2本、なす、れんこん) 380円、イカ、ちくわ、きのこ。温泉卵70円 (2026年の口コミ)・ご飯もののセット: mini katsu don のセット890円、ミニ天丼セット、ミニカレーのセット (2026年の口コミ)・カウンターにポットのそば湯 (2024〜26年の口コミ)',
    neighborhood: '四谷2-13-8、新宿通りの交差点。四谷三丁目駅から徒歩4分、四ツ谷駅から8分',
    gf_detail: 'グルテンフリーではない。そばは6割 (残りの4割は小麦粉)、天ぷらは小麦の衣、つゆは醤油ベース (ゲットナビ、口コミ)。',
    vegan_detail: 'ヴィーガンではない。つゆはどちらもかつお本枯れ節と昆布のだしで、かけつゆにはさば節も入る (ゲットナビ)。',
    notes: '[そば・四谷、本物の天ぷらを出す24時間の立ち食いそば] 新宿通りの交差点にある立ち食いそばで、平日はほぼ休まず営業。朝6時には飲んだ翌朝の客がそばをすすり、昼は会社員が並ぶ。そばは6割で注文ごとに打ってゆで、常連が冷たいもりで頼むほどコシがある。天ぷらは注文を受けてから揚げ、大きな海老2本になすとれんこんで380円。店長は高級そば店で修行したという。もり460円、鴨せいろ890円、mini katsu don のセットならそばと丼が両方。古い常連は値上がりを書き、katsu don の評価は分かれる。券売機、現金のみ。カウンター、立ち席、テーブルが少し。',
  });
}

// ================================================================ ホメリ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13114323/'; const R = TB + 'dtlrvwlst/';
  const KZ = 'https://ichigaya.keizai.biz/headline/907/'; const SITE = 'https://homeri.jimdofree.com/';
  const H = day(['09:00', '19:00']);
  put({
    id: 'tokyo_homeri_yotsuya', name: 'ホメリ (homeri)', category: 'MOM_AND_POP',
    lat: 35.688457, lng: 139.723689, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The food is homemade bread and cakes — butter toast on house pain de mie, sandwiches, chiffon cake, cheesecake with a biscuit base — all wheat-based. Nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee, tea and homemade red-shiso soda are on the menu; the food uses butter, eggs and cheese.',
    hours_raw: 'Mon–Sat 9:00–19:00; closed Sunday (Tabelog; holidays also closed at opening in 2010 per Ichigaya Keizai Shimbun). Often closes early for evening events — live music, rakugo, illustration shows, accordion recitals (2018 and 2024 reviews). Reservations taken (Tabelog). No credit cards (Tabelog). 14 seats on the 2nd floor up a narrow stair; Tabelog lists a designated smoking area, while a November 2024 diner found it completely non-smoking. Opened 19 July 2010 (Tabelog; Ichigaya Keizai Shimbun).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-chō 25-33, BOW building 2F, on Tsunomori-zaka up from Shinjuku-dōri — 4 min from Yotsuya-sanchome Stn (Exit 4), between Yotsuya and Yotsuya-sanchome',
    cuisine: 'Kissa with specialty coffee and the owner\'s homemade bread and cakes (Tabelog) · Homeri blend ¥500, a blend made for the shop by its roaster, balanced and mildly sweet; single origins; iced coffee ¥750; tea ¥600; homemade red-shiso soda (Ichigaya Keizai Shimbun 2010; 2022–25 reviews) · butter toast on house pain de mie ¥700, sweet egg sandwich, tuna sandwich, chiffon cake, baked cheesecake ¥600 (2022–26 reviews) · a smoky whisky (August 2026)',
    website: SITE, gmaps: gm('喫茶 ホメリ 四谷'), menu_url: null,
    notes: "[Kissa · Yotsuya, an antique-filled coffee room up a narrow stair] A tiny second-floor café on Tsunomori-zaka, reached by a stair only one person wide, with clay-white walls, dark beams, a small chandelier, dried flowers and shelves of CDs; it opened in 2010 in a former coffee shop, and the owner built the antique-style door and some tables with the owner's father, who works in interiors. The name joins \"home\" and the owner's wife's name, Eri, whose childhood dream was to run a coffee shop. Come for the house blend, thick butter toast on homemade pain de mie or a caramelised baked cheesecake, and a quiet hour with a book; in the evenings it often closes early for live music, rakugo and other events. One June 2026 visitor found the air-conditioning fierce. Closed Sundays.",
    chef_bio: { chef_name: '宮内友之', roles: ['Owner (Ichigaya Keizai Shimbun, 2010)'], origin: 'Opened 19 July 2010 in a space that had been a coffee shop (Ichigaya Keizai Shimbun).',
      background: 'Ichigaya Keizai Shimbun (5 August 2010): owner 宮内友之 had always wanted a shop but had no fixed idea, and decided on a kissa because opening one had been the childhood dream of the owner\'s wife, 恵里 (Eri). The antique-style door and some of the tables were made by the owner with the owner\'s father, who works in interiors. The name joins "home" and Eri; "a place where everyone can gather, a place you can come back to like your own home." Reviewers describe a gentle, warm owner (April 2025) who talks coffee with guests (2022) and the shop\'s live music, rakugo, exhibitions and YouTube filming (November 2024).',
      philosophy: '"I want it to be a shop women love — where a woman can drop in alone and read a book or relax" (Ichigaya Keizai Shimbun, translated).', specialty: 'Homeri blend; butter toast; baked cheesecake.',
      anecdotes: [
        { text: '"When I shared my thoughts with the owner, [the owner] replied, \'That\'s exactly what we aim for with our blend!\'" — January 2022, on the Homeri blend.', source: R + 'B445041372/' },
        { text: '"The toast is made with homemade pain de mie. It\'s cut into four thick slices… The bread is generously soaked in butter." — September 2025, ¥700.', source: R + 'B513299478/' },
        { text: '"They seem to hold music events frequently, and shelves are lined with CDs. Their hours are until 7:00 PM, but they often close early for events." — December 2018.', source: R + 'B275374988/' },
      ],
      japanese_sources_summary: '市ケ谷経済新聞 (2010年8月5日): 四谷三丁目近くの坂の通り沿いに7月19日、喫茶店「homeri（ホメリ）」がオープン、オーナーは宮内友之さん、約9坪・14席、以前喫茶店だった場所を居抜きで、アンティーク風の扉やテーブルの一部はオーナーが内装関係の仕事をする父親と作った、妻・恵里さんの幼いころからの夢が「喫茶店を開くこと」、店名は「home（家）」と恵里（eri）さんの名前を合わせたもの、Homeriブレンド500円、カフェオレ、ストレートティー、自家製の特製 赤しそソーダ、シフォンケーキ、バタートースト、営業時間は9時〜19時、日曜・祝日定休。食べログ: 三栄町25-33 BOWビル2階、月〜土9:00〜19:00、日曜休み、カード不可、14席。口コミ(2018年〜2026年): 狭い階段の上、アンティークの雑貨、ライブや落語のイベント、自家製パンのバタートースト700円、ベイクドチーズケーキ600円、アイスコーヒー750円。',
      confidence: 'medium', sources: [TB, KZ, SITE, R + 'B275374988/', R + 'B414237938/', R + 'B439775091/', R + 'B445041372/', R + 'B447621862/', R + 'B454631827/', R + 'B495580284/', R + 'B504685056/', R + 'B513299478/', R + 'B530862842/', R + 'B533050505/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and quiet; seated at one of a few tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷三栄町25-33 BOWビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The Jimdo website is not current (events listed to 2014).' },
    pin_source: `Tabelog ${TB} (35.688457, 139.723689); GSI resolves 四谷三栄町25-33 only to the town (35.688759, 139.725662), so the Tabelog point stands. Chuka Shokudo Tsuki No Hikari (tokyo_chuka_shokudo_tsuki_no_hikari_yotsuya, 坊ビル 1F) is in the same building on the same Tabelog point, so both are pinned as the block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B447621862/', R + 'B495580284/', R + 'B513299478/'],
    price_note: 'Prices from 2022–25 reviews.', last_checked: TODAY, items: [
      it('Homeriブレンド', '', 'Homeri blend coffee', '¥500', 'Drinks', 'ask', 'ask', 'April 2022 review (¥500 at opening in 2010).', 'homeri_blend'),
      it('', '', 'Iced coffee', '¥750', 'Drinks', 'ask', 'ask', 'November 2024 review.', 'iced_coffee'),
      it('', '', 'Tea', '¥600', 'Drinks', 'ask', 'ask', 'September 2025 review.', 'tea'),
      it('バタートースト', '', 'Butter toast on homemade pain de mie', '¥700', 'Food', 'no', 'no', 'September 2025 review.', 'butter_toast'),
      it('', '', 'Baked cheesecake', '¥600', 'Cakes', 'no', 'no', 'April 2022 review.', 'cheesecake'),
    ] }, {
    cuisine: 'スペシャルティコーヒーと店主の自家製パンやケーキの喫茶店 (食べログ)・Homeriブレンド500円は焙煎所に店をイメージしてブレンドしてもらったもので、バランスがよくほのかに甘い。シングルオリジン、アイスコーヒー750円、紅茶600円、自家製の特製 赤しそソーダ (市ケ谷経済新聞2010年、2022〜25年の口コミ)・自家製の食パンのバタートースト700円、甘い卵のサンドイッチ、ツナのサンドイッチ、シフォンケーキ、ベイクドチーズケーキ600円 (2022〜26年の口コミ)・スモーキーなウイスキー (2026年8月)',
    neighborhood: '四谷三栄町25-33 BOWビル2階、新宿通りから北へ入る坂の通り沿い。四谷三丁目駅4番出口から徒歩4分、四ツ谷と四谷三丁目のあいだ',
    gf_detail: '要確認。食べ物は自家製のパンとケーキで、自家製の食パンのバタートースト、サンドイッチ、シフォンケーキ、ビスケットの台のチーズケーキと、どれも小麦を使う。グルテンフリーの記述はない。',
    vegan_detail: '要確認。コーヒー、紅茶、自家製の赤しそソーダがある。食べ物にはバター、卵、チーズを使う。',
    notes: '[喫茶・四谷、狭い階段の上のアンティークに囲まれた喫茶店] 新宿通りから北へ入る坂の通りの小さなビルの2階、一人しか通れない階段を上ると、土壁風の白い壁に焦げ茶の梁、小さなシャンデリア、ドライフラワー、CDの棚。2010年に元喫茶店だった場所で開き、アンティーク風の扉やテーブルの一部はオーナーが内装の仕事をする父親と作った。店名は「home」とオーナーの妻・恵里さんの名前を合わせたもので、喫茶店を開くのは恵里さんの子どものころからの夢だった。ハウスブレンド、自家製の食パンの厚いバタートースト、きれいに焼けたベイクドチーズケーキで、本を片手に静かな時間を。夜はライブや落語などのイベントで早く閉めることも多い。2026年6月の客は冷房が強すぎたと書いている。日曜休み。',
  });
}

// ================================================================ 中華食堂 月ノ光
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13212936/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00']);
  put({
    id: 'tokyo_chuka_shokudo_tsuki_no_hikari_yotsuya', name: '中華食堂 月ノ光 (Chuka Shokudo Tsuki No Hikari)', category: 'OMNI',
    lat: 35.688412, lng: 139.723685, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, sesame and soy-based sauces, fried chicken and gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tantanmen topped with ground meat or meat miso; chicken soup with the set meals.',
    hours_raw: 'Mon–Sat 11:30–15:00; closed Sunday and holidays (Tabelog). Dinner by reservation only — private bookings from 5 people (Tabelog); may close on some days (Tabelog). A June 2025 diner saw a sign saying weekdays until 18:00 but often found it closed around 15:00. Cash only, paid at the register (Tabelog; 2024–26 reviews). ¥50 off at lunch with the coupon by the register (2024–26 reviews). No service or cover charge (Tabelog). 16 seats: 6 at the counter and tables; non-smoking (ashtray outside); private hire up to 20; children welcome (Tabelog). Opened 14 August 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-chō 25-33, 坊ビル 1F (homeri is upstairs), on the Tsunomori-zaka street off Shinjuku-dōri — 4 min from Yotsuya-sanchome Stn, 9 min from Yotsuya Stn',
    cuisine: 'Chinese diner built around tantanmen that is not spicy unless you make it so — chili oil, Sichuan pepper, vinegar and pepper on every table (Tabelog; 2022–26 reviews) · tantanmen ¥850 (2024), dry tantanmen without soup ¥900 with rich sesame sauce, meat miso, mizuna, bean sprouts and crushed nuts, ¥50 off for half noodles; chilled tantanmen ¥950, large +¥100; a spicy mala tantanmen, with rice and pickled mustard greens for ¥1,100 (2024–26 reviews) · soy-sauce ramen; a limited Tom Yum ramen (2026 reviews) · yurinchi set meal ¥1,200 with chicken soup, soft-boiled egg and pickled mustard greens (November 2025) · evenings: handmade gyoza and Chinese dishes with drinks; party course ¥4,500 with three hours of free-flow drinks and a half ramen to finish (Tabelog; May 2026)',
    website: null, gmaps: gm('中華食堂 月ノ光 四谷'), menu_url: null,
    notes: "[Chinese · Yotsuya, a one-person tantanmen counter that keeps the heat on the table] A wood-panelled Chinese diner on the Tsunomori-zaka street, under the homeri café, whose sign is painted on a wok. The draw is tantanmen that is not spicy at all: a rich, nutty sesame sauce over medium-thin noodles, soup or dry, with chili oil, Sichuan pepper and vinegar on every table to make it as hot as you like — or order the red mala version. The owner cooks and serves alone, quickly; one diner calls the service attentive, while another stayed away five years over the owner's attitude before returning. Evenings are for booked groups (five or more), with a ¥4,500 free-flow party course. Cash only; lunch Monday to Saturday.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the shop alone (2024–26 reviews)'], origin: 'Opened 14 August 2017 (Tabelog).',
      background: 'No source names the owner. Reviewers: "The owner was managing everything alone" (December 2024); "The owner manages both cooking and serving, but everything runs smoothly" (June 2026); "Although it\'s a one-person operation, the service is efficient" (July 2026); "the quiet owner is managing everything alone" (August 2026). Tabelog (shop text): tantanmen and set meals by day, handmade gyoza and Chinese dishes with drinks in the evening.',
      philosophy: null, specialty: 'Non-spicy tantanmen; dry tantanmen.',
      anecdotes: [
        { text: '"This restaurant is known for its catchphrase, \'How about non-spicy Dandan noodles?\'… Indeed, it was completely non-spicy, with a rich sesame sauce." — August 2026.', source: R + 'B533013435/' },
        { text: '"For JPY 4,500 per person, we enjoyed a three-hour all-you-can-drink option along with delicious and generous portions of food." — May 2026, a group of seven.', source: R + 'B528566225/' },
        { text: '"I hadn\'t been here in about five years due to the owner\'s poor attitude. However, my friend became friendly with [the owner], so I decided to give it another try… Overall, it was really tasty. It\'s a good restaurant." — September 2026.', source: R + 'B536767358/' },
      ],
      japanese_sources_summary: '食べログ: 中華食堂 月ノ光、中華料理・バル・gyoza、四谷三栄町25-33 坊ビル1F、四谷三丁目駅から徒歩4分、曙橋駅8分、四ツ谷駅9分、月〜土11:30〜15:00、日祝休み、夜は予約のみ (5名から貸切)、カード・電子マネー・QR不可、サービス料なし、チャージ料なし、16席 (カウンター6席とテーブル)、禁煙、2017年8月14日オープン、昼は担々麺と定食、夜は手作りの gyoza と中華料理とお酒。口コミ(2022年〜2026年): 店主が一人で営む、辛くない担々麺、汁なし担々麺900円 (麺半分50円引き)、冷やし担々麺、mala の担々麺、テーブルにラー油・花椒・酢・胡椒、yurinchi の定食、飲み放題付き4,500円のコース、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B452758127/', R + 'B492125993/', R + 'B495365828/', R + 'B498157266/', R + 'B506465697/', R + 'B508654106/', R + 'B518661984/', R + 'B521970751/', R + 'B528566225/', R + 'B532671370/', R + 'B533013435/', R + 'B536767358/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by voice, pay cash at the register; condiments on the table to adjust the heat.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '東京都新宿区四谷三栄町25-33 坊ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.688457, 139.723685); GSI resolves 四谷三栄町25-33 only to the town (35.688759, 139.725662), so the Tabelog point stands, moved 5 m south so it does not stack on homeri (integrator, 2026-11-02). homeri (tokyo_homeri_yotsuya, BOWビル 2F) is upstairs in the same building on the same point, so both are pinned as the block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533013435/', R + 'B532671370/', R + 'B452758127/', R + 'B508654106/', R + 'B528566225/'],
    price_note: 'Prices from 2024–26 reviews (tax included).', last_checked: TODAY, items: [
      it('汁なし担々麺', '', 'Dry tantanmen (no soup), not spicy', '¥900', 'Noodles', 'no', 'no', 'August 2026 review; ¥850 with half noodles.', 'shirunashi_tantan'),
      it('', '', 'Chilled tantanmen', '¥950', 'Noodles', 'no', 'no', 'July 2026 review; large +¥100.', 'hiyashi_tantan'),
      it('', '', 'Mala tantanmen with rice', '¥1,100', 'Noodles', 'no', 'no', 'June 2026 review.', 'mala_tantan'),
      it('', '', 'Yurinchi set meal', '¥1,200', 'Set meals', 'no', 'no', 'November 2025 review.', 'yurinchi'),
      it('', '', 'Party course with 3 hours of free-flow drinks', '¥4,500', 'Course', 'no', 'no', 'May 2026 review; dinner by reservation.', 'party_course'),
    ] }, {
    cuisine: '担々麺が中心の中華食堂。担々麺はそのままでは辛くなく、ラー油、花椒、酢、胡椒がテーブルにあって好みで辛くする (食べログ、2022〜26年の口コミ)・担々麺850円 (2024年)、汁なし担々麺900円は濃厚なごまのたれに肉味噌、水菜、もやし、砕いたナッツで、麺半分なら50円引き。冷やし担々麺950円、大盛り +100円。辛い mala の担々麺はご飯と青菜の漬物付きで1,100円 (2024〜26年の口コミ)・醤油ラーメン、限定の Tom Yum ラーメン (2026年の口コミ)・yurinchi の定食1,200円は鶏のスープ、半熟卵、青菜の漬物付き (2025年11月)・夜: 手作りの gyoza と中華料理とお酒。3時間飲み放題で締めにハーフラーメンが付く4,500円の宴会コース (食べログ、2026年5月)',
    neighborhood: '四谷三栄町25-33 坊ビル1F (2階はホメリ)、新宿通りから北へ入る坂の通り。四谷三丁目駅から徒歩4分、四ツ谷駅から9分',
    gf_detail: 'グルテンフリーではない。小麦の麺、ごまや醤油のたれ、鶏の揚げ物、gyoza。',
    vegan_detail: 'ヴィーガンではない。担々麺にはひき肉や肉味噌がのり、定食には鶏のスープが付く。',
    notes: '[中華・四谷、辛さはテーブルで調整する一人で営む担々麺の店] 新宿通りから北へ入る坂の通り、喫茶ホメリの下にある木の内装の中華食堂で、看板は中華鍋に書いてある。名物はまったく辛くない担々麺。中細の麺に濃厚なごまのたれがからみ、汁ありも汁なしも。テーブルのラー油、花椒、酢で好きなだけ辛くでき、赤い mala の担々麺もある。店主が一人で作って運び、手早い。丁寧な接客だという客もいれば、店主の態度が理由で5年遠ざかってから戻ってきた客も。夜は5人以上の予約の貸切で、飲み放題の4,500円のコース。現金のみ、昼は月〜土。',
  });
}

// ================================================================ Polyphony
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13256563/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/';
  const SITE = 'https://www.polyohony2021.com/';
  const L = day(['12:00', '15:00'], ['17:00', '23:00']); const D = day(['17:00', '23:00']);
  put({
    id: 'tokyo_polyphony_wakaba_yotsuya', name: 'Polyphony (ポリフォニー)', category: 'MOM_AND_POP',
    lat: 35.681758, lng: 139.725634, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies and dislikes at reservation (Tabelog). Fritters are made with rice flour and sparkling water (August 2025), but courses have also included gyoza-style dumplings, noodles and a monaka dessert.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Vegetable-only courses that normally use dairy and free-range eggs ("lacto-ovo vegetarian"); a plant-based version is offered if requested at booking, and the whole table then gets it (Tabelog; website). A simmered dish was finished with onion and dry vermouth instead of dashi (October 2026); vegetable trimmings make the soup stock (Tabelog). Tuesday is the exception — an "accent" course with meat and seafood.',
    hours_raw: 'Lunch 12:00–15:00 Mon, Tue, Thu, Fri, Sat and holidays; dinner 17:00–23:00 Mon–Sat and holidays; closed Sunday and New Year (Tabelog; website). Reservation only; book lunch by the day before (Tabelog). Dinner can sometimes be booked at short notice, and on quiet days à la carte and bar time are possible — ask by phone or Instagram (Tabelog). 12 seats; private hire up to 20; non-smoking; wheelchair accessible (Tabelog). Cards, e-money and QR accepted (Tabelog). Monthly Saturday market selling vegetables from the contract farms (Tabelog). Opened 8 March 2021 (Tabelog).',
    hours: { 0: L, 1: L, 2: D, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Wakaba 1-21-2, ベルビー四谷 1F, on a corner up the hill past Gakushuin Primary School — 10 min from Yotsuya Stn (Akasaka exit); taxi navigation may not find the new building, so check the map (Tabelog; website)',
    cuisine: 'Vegetable courses from organic and naturally grown vegetables from farms across Japan, with dairy and eggs, each dish paired with sake or Japanese wine (Tabelog; website) · courses (tax included): lunch 5 dishes ¥8,000, lunch 8 dishes ¥10,000, with drink pairing ¥12,000 / ¥16,000; dinner seasonal vegetable course with pairing ¥16,000; Tuesday meat-and-seafood "accent" course ¥17,000; chef\'s special course ¥25,000; non-alcoholic pairing on request (Tabelog courses) · e.g. sweet-potato or green-pepper soup, a dozen sake snacks (sesame tofu, kinpira, hijiki with koji, among others), a whole rare taro, turnip, celery risotto, mushrooms with fermented butter, rice-flour fritters with Miyako Island salt, Italian-style meatless dumplings, noodles in vegetable broth, fried rice, a bergamot monaka (2024–26 reviews) · about 150 Japanese wines; sake in a five-sided cup that tastes different from each side (website; 2025–26 reviews)',
    website: SITE, gmaps: gm('Polyphony ポリフォニー 若葉'), menu_url: PARTY,
    notes: "[Vegetable course · Yotsuya, a vegetarian pairing restaurant from a sake-bar veteran] A 12-seat restaurant on a quiet residential corner past Gakushuin Primary School where every course is vegetables — organic and naturally grown, from farms across Japan, with dairy and eggs — and every dish comes with a matched sake or Japanese wine. The chef, 竹口, used to run the sake shops 鎮守の森 and 酒徒庵 in Yotsuya-sanchome, and the pairings show it: odd-shaped glasses, little-known wineries, and a non-alcoholic pairing for those who don't drink. Diners rave about a whole rare taro, rice-flour fritters and a dozen-dish sake platter, and say they leave full without meat. A fully plant-based course can be arranged ahead; Tuesdays add meat and fish. Reservation only; about ¥10,000–16,000.",
    chef_bio: { chef_name: '竹口', roles: ['Chef (website)'], origin: 'Former owner of the sake shops 鎮守の森 and 酒徒庵 in Yotsuya-sanchome (website).',
      background: 'Website: a restaurant pairing vegetable dishes with sake and Japanese wine, serving "lacto-ovo vegetarian" food from naturally and organically grown vegetables; "竹口, the former owner of the sake specialty shops 鎮守の森 and 酒徒庵 that were in Yotsuya-sanchome, opens a new world as chef." Sake pairing know-how from the sake-shop years plus about 150 Japanese wines; the matched drink is often changed to suit the day\'s weather and the guest. Tabelog: a seaweed-and-awamori-lees seasoning called UMAMO for seafood-like umami; vegetable trimmings used for stock. Reviewers mention an owner who loves the Chiikawa characters (October 2026).',
      philosophy: '"Vegetable dishes that satisfy even people who wonder whether vegetables alone will fill them up" (website, translated).', specialty: 'Vegetable courses with sake and Japanese-wine pairings.',
      anecdotes: [
        { text: '"Presenting a whole taro root, this dish exuded an overwhelming presence while being simple at the same time." — December 2024, 5-dish lunch course.', source: R + 'B497549553/' },
        { text: '"The fried items are made with rice flour and carbonated water. To finish off, the noodles are prepared with a vegetable-based broth, avoiding any animal products." — August 2025.', source: R + 'B513074685/' },
        { text: '"I was a bit worried that the course might not have enough quantity since it didn\'t include meat or fish dishes, but the portion size was just right." — October 2026.', source: R + 'B536690161/' },
      ],
      japanese_sources_summary: '公式サイト: 野菜料理に日本酒・日本ワインをペアリングするレストラン、自然栽培・有機栽培の野菜と乳製品・卵を使う「ラクトオボベジタリアン」の料理、四谷三丁目にあった日本酒専門店2軒の元店主、竹口がシェフ、日本ワインを約150本常備、ノンアルコールペアリング (後発酵茶など)、月〜土 (祝日含む) ランチ12:00〜15:00 (水曜を除く)・ディナー17:00〜23:00、完全予約制、日曜と年末年始休み、若葉1-21-2 ベルビー四谷1階、四ツ谷駅から徒歩10分。食べログ: 野菜料理・イノベーティブ・オーガニック、12席、禁煙、カード・電子マネー・QR可、2021年3月8日オープン、植物性のみの料理は予約時に、火曜は肉と魚介の入るコース、コースは8,000円〜25,000円、月1回土曜に契約農家の野菜の販売。口コミ(2024年〜2026年): 珍しい里芋を丸ごと、米粉と炭酸水の揚げ物、五角形の器の日本酒。',
      confidence: 'medium', sources: [TB, PARTY, SITE, R + 'B437829401/', R + 'B497549553/', R + 'B512446946/', R + 'B513074685/', R + 'B516778366/', R + 'B518219316/', R + 'B522625116/', R + 'B524478896/', R + 'B527006306/', R + 'B530329432/', R + 'B536690161/', R + 'B538015665/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked ahead; each dish and drink is explained at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区若葉1-21-2 ベルビー四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained Tabelog listing with courses; own website live; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.681758, 139.725634); cross-checked: GSI 東京都新宿区若葉一丁目21番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [PARTY],
    price_note: 'Course prices from the Tabelog course page (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch seasonal vegetable course, 5 dishes', '¥8,000', 'Course', 'ask', 'ask', 'Tabelog course page; dairy and eggs used, plant-based on request.', 'lunch_5'),
      it('', '', 'Lunch seasonal vegetable course, 8 dishes', '¥10,000', 'Course', 'ask', 'ask', 'Tabelog course page.', 'lunch_8'),
      it('', '', 'Seasonal vegetable course with drink pairing, 8 dishes', '¥16,000', 'Course', 'ask', 'ask', 'Tabelog course page (most popular).', 'pairing_8'),
      it('', '', 'Tuesday accent course with meat and seafood, with pairing', '¥17,000', 'Course', 'ask', 'no', 'Tabelog course page; Tuesdays only.', 'tuesday_accent'),
      it('', '', "Chef's special vegetable course with pairing", '¥25,000', 'Course', 'ask', 'ask', 'Tabelog course page; plant-based on request.', 'special_course'),
    ] }, {
    cuisine: '全国の農家の自然栽培・有機栽培の野菜に乳製品と卵を使う野菜のコースで、料理ごとに日本酒か日本ワインを合わせる (食べログ、公式サイト)・コース (税込): ランチ5品8,000円、ランチ8品10,000円、ドリンクのペアリング付き12,000円・16,000円。ディナーの季節の野菜のコース (ペアリング付き) 16,000円、火曜限定の肉と魚介の入るコース17,000円、シェフの特別コース25,000円。ノンアルコールペアリングは予約時に (食べログのコース)・料理の例: さつまいもやピーマンのスープ、12種の酒の肴 (ごま豆腐、きんぴら、麹で和えたひじきなど)、珍しい里芋を丸ごと、かぶ、セロリのリゾット、発酵バターのきのこ、Miyako Island の塩をふった米粉の揚げ物、肉を使わないイタリア風の具の dumplings、野菜のスープの麺、チャーハン、ベルガモットの最中 (2024〜26年の口コミ)・日本ワインを約150本、五角形の器の日本酒は口をつける場所で味が変わる (公式サイト、2025〜26年の口コミ)',
    neighborhood: '若葉1-21-2 ベルビー四谷1階、学習院初等科を過ぎて坂を上ったところ。四ツ谷駅赤坂口から徒歩10分。建物が新しくタクシーのナビに出ないことがあるので地図で確認を (食べログ、公式サイト)',
    gf_detail: '予約時に要確認: アレルギーや苦手な食材は予約時に伝えるよう店が案内している (食べログ)。揚げ物は米粉と炭酸水 (2025年8月) だが、dumplings、麺、最中が出たコースもある。',
    vegan_detail: '野菜だけのコースで、ふだんは乳製品と卵を使う (「ラクトオボベジタリアン」)。植物性のみの料理は予約時に頼めば用意し、その場合は同席の人も同じ料理になる (食べログ、公式サイト)。煮物は出汁ではなく玉ねぎとドライベルモットで仕上げた (2026年10月)。スープのだしは野菜の切れ端から取る (食べログ)。例外は火曜で、肉と魚介の入るコース。',
    notes: '[野菜のコース・四谷、日本酒の店の元店主が営むベジタリアンのペアリングレストラン] 学習院初等科を過ぎた静かな住宅街にある12席のレストラン。コースはすべて野菜で、全国の農家の自然栽培・有機栽培の野菜に乳製品と卵を使い、料理ごとに日本酒か日本ワインを合わせる。シェフの竹口さんは四谷三丁目にあった日本酒専門店2軒の元店主で、ペアリングにその経験が生きる。変わった形の器、あまり知られていないワイナリー、飲めない人にはノンアルコールのペアリング。客が絶賛するのは珍しい里芋を丸ごと使った料理、米粉の揚げ物、12種の酒の肴で、肉がなくても満腹になるという。完全に植物性のコースは事前に相談でき、火曜は肉と魚が入る。完全予約制、1人約10,000〜16,000円。',
  });
}

save();
