// Ginza Station half-mile sweep (805 m), batch 90 — all-genre phase (all OMNI).
//   + レストラン ブラス (Shimbashi yōshoku izakaya since 1964, open to 5 am)
//   + 鉄板焼 一徹 (Dai-ichi Hotel Tokyo 21F teppanyaki)
//   + 小松庵総本家 銀座 (ju-wari soba; sister shop of a soba house founded 1922)
//   + THE HOUSE K.MINAMOTO (Minamoto Kitchoan's fruit café above its Ginza shop)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ レストラン ブラス
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13041678/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '05:00']);
  put({
    id: 'tokyo_restaurant_brass_shimbashi', name: 'レストラン ブラス (Restaurant Brass)', category: 'OMNI',
    lat: 35.667581, lng: 139.760205,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Napolitan, curry pizza, egg sandwich, hamburg in demi-glace and fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: potato salad with mayonnaise and egg, sausages, pork, hamburg; buttered spinach.',
    hours_raw: 'Mon–Fri 17:00–05:00 (food L.O. 04:00–04:30); closed Sat, Sun and holidays except for groups of 15+ (Tabelog). Table charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi 1-chōme, Kokusai Zenrin Kaikan B1F — 1 min from Shimbashi Stn (Ginza Line exit 1)',
    cuisine: 'Shōwa-style yōshoku izakaya since 1964 · potato salad, octopus-shaped sausages, hamburg in demi-glace, ginger pork, curry pizza, egg sandwich · open to 5 am', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('レストラン ブラス 新橋 国際善隣會館'), menu_url: null,
    notes: "[Yōshoku izakaya · Shimbashi's after-hours salaryman classic] A spacious basement Western-style izakaya on the Shimbashi edge of Ginza, serving since 1964 (per a regular) and open until 5 am on weeknights. The menu is nostalgic bar yōshoku, with the starred picks marked ☆: a much-loved potato salad, red octopus-shaped sausages, a plump hamburg in demi-glace, thick ginger pork or pork steak, an addictive curry pizza, Napolitan and a fluffy egg sandwich to finish. It's busy with regulars, groups and after-party crowds, and the staff are cheerful. 40 seats with a semi-private back area; table charge; weekends only for groups of 15 or more.",
    chef_bio: { chef_name: null, roles: [], origin: 'Serving since 1964 (March 2026 review)', background: 'No source names the owner.', philosophy: null, specialty: 'Potato salad; curry pizza.',
      anecdotes: [
        { text: '"Restaurant Brass is a long-established Western-style izakaya that has been serving customers since 1964 in the Shimbashi-Ginza area… The potato salad here is exceptional!" — March 2026, fourth visit.', source: R + 'B502412507/' },
        { text: '"Egg Sandwich ☆ (even if you\'re full, you must try the fluffy egg sandwich!)" — March 2026.', source: R + 'B525927009/' },
      ],
      japanese_sources_summary: '食べログ: レストラン ブラス、港区新橋1-5-5 国際善隣會館B1F、新橋駅1番出口徒歩1分、40席(半個室あり)、月〜金17:00〜翌5:00、土日祝は15名以上の団体のみ、チャージあり。口コミ(2025〜2026年): 1964年から新橋・銀座で続く洋風居酒屋、サラリーマンの憩いの場、ポテトサラダ、赤いタコさんウインナー、デミグラスのハンバーグ、厚い生姜焼き、ポークステーキ、カレーピザ、ナポリタン、ふわふわの玉子サンド、☆印のおすすめ、地下に広い店内、ほうれん草のバターソテー、明るいスタッフ、二次会にも。',
      confidence: 'medium', sources: [TB, R + 'B502412507/', R + 'B525927009/', R + 'B535174959/', R + 'B511458836/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Recommended dishes marked ☆ on the menu.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-5-5 国際善隣會館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目5番 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525927009/', R + 'B502412507/'],
    price_note: 'No prices captured; spend ¥3,000–5,000 (Tabelog).', last_checked: TODAY, items: [
      it('ポテトサラダ', 'poteto sarada', 'Potato salad', '', 'Small plates', 'ask', 'no', '', 'potato_salad'),
      it('赤いタコさんウインナー', '', 'Red octopus-shaped sausages ☆', '', 'Small plates', 'ask', 'no', '', 'tako_wiener'),
      it('ハンバーグ', 'hanbaagu', 'Hamburg in demi-glace ☆', '', 'Mains', 'no', 'no', '', 'hamburg'),
      it('カレーピザ', '', 'Curry pizza ☆', '', 'Mains', 'no', 'no', '', 'curry_pizza'),
      it('玉子サンド', 'tamago sando', 'Egg sandwich ☆', '', 'Mains', 'no', 'no', '', 'egg_sando'),
    ] }, {
    cuisine: '1964年からの昭和の洋食居酒屋・ポテトサラダ、タコさんウインナー、デミグラスのハンバーグ、生姜焼き、カレーピザ、玉子サンド・朝5時まで',
    neighborhood: '新橋一丁目、国際善隣會館B1F。新橋駅(銀座線1番出口)から徒歩1分',
    gf_detail: 'グルテンフリーではありません。ナポリタン、カレーピザ、玉子サンド、デミグラスのハンバーグ、フライドポテト。',
    vegan_detail: 'ヴィーガンではありません。マヨネーズと卵のポテトサラダ、ウインナー、豚肉、ハンバーグ、ほうれん草のバターソテー。',
    notes: '[洋食居酒屋・新橋の深夜のサラリーマンの定番] 銀座寄りの新橋にある広い地下の洋風居酒屋で、常連によると1964年から営業、平日は朝5時まで開いています。メニューは懐かしい酒場の洋食で、おすすめには☆印。人気のポテトサラダ、赤いタコさんウインナー、ふっくらしたデミグラスのハンバーグ、厚い生姜焼きやポークステーキ、やみつきのカレーピザ、ナポリタン、締めのふわふわの玉子サンド。常連、団体、二次会の客でにぎわい、スタッフも明るい。奥に半個室のある40席、チャージあり、土日祝は15名以上の団体のみ。',
  });
}

// ================================================================ 鉄板焼 一徹
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13014702/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_teppanyaki_ittetsu_daiichi', name: '鉄板焼 一徹 (Teppanyaki Ittetsu)', category: 'OMNI',
    lat: 35.668775, lng: 139.757265,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hotel teppanyaki: Wagyu, scallops, abalone and vegetables cooked in front of you, a simmered-beef starter with wasabi dressing, and white or garlic rice; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu, abalone and scallop courses; the garlic is fried and its oil reused for the meat.',
    hours_raw: 'Daily 11:30–15:00 and 17:00–22:00 (L.O. 14:00 / 21:00) (Tabelog). Service charge included.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dai-ichi Hotel Tokyo 21F (top floor), Shimbashi 1-chōme — 2 min from JR Shimbashi Stn',
    cuisine: 'Top-floor hotel teppanyaki · Wagyu (Miyazaki on one 2026 visit), abalone, scallops · garlic chips grilled at the counter · night view toward Tokyo Tower', cuisine_type: 'other',
    website: 'https://www.hankyu-hotel.com/hotel/dh/dhtokyo/contents/restaurants/ittetsu/', gmaps: gm('鉄板焼 一徹 第一ホテル東京'), menu_url: null,
    notes: "[Teppanyaki · top-floor hotel teppan with a view] A 40-seat teppanyaki on the 21st floor of the Dai-ichi Hotel Tokyo, with counters and a private room for eight; one celebration party was moved to seats with a view of Tokyo Tower. The listing promotes Kobe beef; one September 2026 lunch featured Miyazaki Wagyu. The chef slowly fries Aomori garlic into chips and keeps the oil to grill the meat. Courses add a simmered-beef starter, scallops or abalone, and vegetables, ending with white or garlic rice (the garlic rice costs extra and comes after the meat). Sorbet runs ¥1,400. Lunch is about ¥6,000–10,000; service charge is included.",
    chef_bio: { chef_name: null, roles: [], origin: 'Restaurant of Dai-ichi Hotel Tokyo', background: 'Hotel restaurant (Hankyu Hotels site).', philosophy: null, specialty: 'Wagyu teppanyaki.',
      anecdotes: [
        { text: '"They slowly and carefully grill garlic from Aomori to make garlic chips… They even save the oil to use when grilling the meat." — September 2026, lunch; Miyazaki Wagyu that day.', source: R + 'B535227397/' },
        { text: '"You can choose between white rice or garlic rice… I thought it was free, but it turns out it comes with a charge… I was shocked by the JPY 1400 sorbet!" — September 2026.', source: R + 'B536323917/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼 一徹、港区新橋1-2-6 第一ホテル東京21F、JR新橋駅から徒歩2分、40席(8名個室)、毎日11:30〜15:00・17:00〜22:00(L.O. 14:00/21:00)、サービス料は価格に含む、子ども可、夜景、公式サイト(阪急阪神ホテルズ)。店の紹介: ホテル最上階で神戸牛。2026年の口コミ: 宮崎県産和牛、牛肉の煮込みとわさびドレッシングのサラダ、青森のにんにくをじっくり焼いたガーリックチップとその油で肉を焼く、帆立、鮑、野菜、白ご飯かガーリックライス(有料、肉のあと)、シャーベット1,400円、記念日に東京タワーの見える席へ移してくれた。',
      confidence: 'medium', sources: [TB, R + 'B535227397/', R + 'B536323917/', R + 'B538033342/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-2-6 第一ホテル東京 21F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目2番 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536323917/'],
    price_note: 'Only the sorbet price captured (September 2026).', last_checked: TODAY, items: [
      it('鉄板焼コース', '', 'Teppanyaki course: Wagyu, seafood, vegetables, rice', '', 'Courses', 'ask', 'no', '', 'course'),
      it('ガーリックライス', '', 'Garlic rice (extra charge)', '', 'Rice', 'ask', 'no', 'September 2026.', 'garlic_rice'),
      it('シャーベット', '', 'Sorbet', '¥1,400', 'Dessert', 'ask', 'ask', 'September 2026.', 'sorbet'),
    ] }, {
    cuisine: 'ホテル最上階の鉄板焼き・和牛(2026年のある日は宮崎県産)、鮑、帆立・目の前で焼くガーリックチップ・東京タワー方面の夜景',
    neighborhood: '新橋一丁目、第一ホテル東京21F(最上階)。JR新橋駅から徒歩2分',
    gf_detail: '要確認。目の前で焼く和牛、帆立、鮑、野菜のホテルの鉄板焼きに、牛肉の煮込みとわさびドレッシングの前菜、白ご飯かガーリックライス。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、鮑、帆立のコース。にんにくを揚げた油は肉を焼くのに使います。',
    notes: '[鉄板焼き・眺めのよいホテル最上階] 第一ホテル東京21階の40席の鉄板焼きで、カウンターと8名の個室。記念日の客が東京タワーの見える席へ移してもらった例も。紹介文は神戸牛をうたい、2026年9月のある昼は宮崎県産和牛でした。青森のにんにくをじっくり焼いてガーリックチップにし、その油を取っておいて肉を焼きます。コースは牛肉の煮込みの前菜、帆立や鮑、野菜、締めは白ご飯かガーリックライス(有料で肉のあとに出る)。シャーベットは1,400円。昼は6,000〜10,000円ほど、サービス料込み。',
  });
}

// ================================================================ 小松庵総本家 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13237578/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '16:00'], ['17:00', '22:00']); const we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_komatsuan_sohonke_ginza', name: '小松庵総本家 銀座 (Komatsu An Sohonke Ginza)', category: 'OMNI',
    lat: 35.670941, lng: 139.764373,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is ju-wari, made only from buckwheat flour and water (Tabelog listing), a good sign, but the listing offers two types of soba, dipping sauces are not described, and courses include tempura; ask which soba is ju-wari, about wheat-free tsuyu, and about cross-contact.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include dashimaki tamago, tempura and a daily fish dish, and dipping sauces are not described.',
    hours_raw: 'Mon–Fri 11:00–16:00 (L.O. 15:30) and 17:00–22:00 (L.O. 21:00); Sat, Sun and holidays 11:00–22:00 (L.O. 21:00); irregular closures (Tabelog). Private rooms: 15% service + ¥10,120 room fee.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, i liv 14F, right by Ginza Stn exit A2',
    cuisine: 'Ju-wari soba from a soba house founded 1922 · Tokyo Soba tasting course (9 dishes, ¥13,000) and lunch course (6 dishes, ¥8,000) · soba appetisers with sake · private rooms', cuisine_type: 'udon_soba',
    website: 'https://ginza.komatuan.com/', gmaps: gm('小松庵総本家 銀座'), menu_url: null,
    notes: "[Soba · ju-wari soba high above Ginza 5-chōme] Opened in 2019, the Ginza sister shop of Komatsu An, a soba house dating from 1922: 40 seats on the 14th floor by exit A2, mostly tables, a short counter and eight private rooms in a calm, gallery-like space. Artisans make ju-wari soba from only buckwheat flour and natural water, and the courses feature tasting comparisons of soba and seasonings. Look for the Tokyo Soba tasting course (nine dishes, ¥13,000) and the lunch course (six, ¥8,000). With sake there are soba appetisers: coarse-ground soba dumplings, cream cheese cured in soba miso, dashimaki. It's quiet, with no music; one guest wished for more non-soba dishes.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2019 (Tabelog); sister shop of a soba house founded 1922', background: 'Multi-shop (komatuan.com).', philosophy: null, specialty: 'Ju-wari soba.',
      anecdotes: [
        { text: '"This is supported by the unwavering quality of Ju-wari soba, which is made solely from buckwheat flour and water." — August 2026, fifth visit.', source: R + 'B522402956/' },
        { text: '"We ordered dashimaki tamago (Japanese omelet), coarsely ground soba dumplings, and seasonal steamed vegetables… cream cheese marinated in soba miso." — August 2026.', source: R + 'B534262089/' },
      ],
      japanese_sources_summary: '食べログ: 小松庵総本家 銀座、銀座5-7-6 i liv 14F、銀座駅A2出口すぐ、40席(個室8・カウンター4・テーブル26)、平日11:00〜16:00・17:00〜22:00、土日祝11:00〜22:00、不定休、個室はサービス料15%と個室料10,120円、2019年8月1日開店、公式サイト ginza.komatuan.com。店の紹介: 大正11年(1922年)創業の老舗蕎麦店の姉妹店、そば粉と天然水だけで職人が打つ十割そば、二種のそばから選べる、東京そば味わいコース9品13,000円・東京そばランチコース6品8,000円、2025年8月にコース価格改定。2026年の口コミ: 十割そば、産地や味付けの食べ比べ、だし巻き玉子、粗挽きそばがき、そば味噌漬けのクリームチーズ、BGMのない静かな店、そば以外の品が少ないとの声。',
      confidence: 'medium', sources: [TB, R + 'B522402956/', R + 'B534262089/', R + 'B536192017/', R + 'B536820960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet room, no background music.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Ju-wari soba made only from buckwheat flour and natural water (Tabelog listing).', source: TB }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-7-6 i liv 14F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目7番6号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (prices revised August 2025).', last_checked: TODAY, items: [
      it('東京そば味わいコース', '', 'Tokyo Soba tasting course (9 dishes)', '¥13,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'tasting'),
      it('東京そばランチコース', '', 'Tokyo Soba lunch course (6 dishes)', '¥8,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'lunch_course'),
      it('粗挽きそばがき', '', 'Coarse-ground soba dumpling', '', 'Appetisers', 'ask', 'ask', 'August 2026.', 'sobagaki'),
      it('せいろ', 'seiro', 'Chilled ju-wari soba', '', 'Soba', 'ask', 'ask', '', 'seiro'),
    ] }, {
    cuisine: '1922年創業の蕎麦店の十割そば・東京そば味わいコース(9品13,000円)とランチコース(6品8,000円)・酒に合うそば前・個室',
    neighborhood: '銀座五丁目、i liv 14F。銀座駅A2出口すぐ',
    gf_detail: '要確認。そば粉と水だけの十割そば(食べログの紹介)なのは良い材料ですが、そばは二種から選ぶ形で、つゆは書かれておらず、コースには天ぷらも。どちらが十割か、小麦を使わないつゆ、混入について確認を。',
    vegan_detail: 'ヴィーガンではありません。コースにはだし巻き玉子、天ぷら、本日の魚料理があり、つゆは書かれていません。',
    notes: '[そば・銀座五丁目の上階で十割そば] 1922年創業の蕎麦店「小松庵」の銀座の姉妹店で2019年開店。A2出口そばのビル14階に40席、テーブル中心に短いカウンターと8つの個室、美術館のような落ち着いた空間です。職人がそば粉と天然水だけで十割そばを打ち、コースではそばや味付けの食べ比べも。東京そば味わいコース(9品13,000円)とランチコース(6品8,000円)が目安。酒には粗挽きそばがき、そば味噌漬けのクリームチーズ、だし巻きなどのそば前を。BGMのない静かな店で、そば以外の品がもっと欲しいという声も。',
  });
}

// ================================================================ THE HOUSE K.MINAMOTO
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13239627/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:30', '20:00']); const we = day(['11:30', '19:00']);
  put({
    id: 'tokyo_the_house_k_minamoto', name: 'THE HOUSE K.MINAMOTO', category: 'OMNI',
    lat: 35.669805, lng: 139.763229,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fruit-led dishes (sea bream with fruit salad, beef Stroganoff) alongside pound cake and mille-feuille; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef Stroganoff with sour cream, sea bream, cakes.',
    hours_raw: 'Tue–Fri 11:30–20:00; Sat, Sun and holidays 11:30–19:00; closed Mondays (Tabelog). Dinner-time service charge 10%.',
    hours: { 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, upper floors (2F–5F) of the Minamoto Kitchoan head-office building — 3 min from Ginza Stn exit A2',
    cuisine: 'Wagashi house Minamoto Kitchoan’s café-restaurant · fruit in every dish (Stroganoff with fruit, sea bream with watermelon and tomato) · fruit mille-feuille · English menu', cuisine_type: 'cafe',
    website: 'https://www.kitchoan.co.jp/', gmaps: gm('THE HOUSE K.MINAMOTO 銀座'), menu_url: null,
    notes: "[Café · Minamoto Kitchoan's fruit kitchen above its Ginza shop] Opened 2019 over the wagashi maker Minamoto Kitchoan's Ginza head-office shop, a 36-seat café blending old and new Japanese design, with three private rooms. Every dish works in fruit, under the motto \"more fruit-like than the fruit itself\": beef Stroganoff in sour cream heaped with melon, pineapple, kiwi, Shine Muscat and figs, with an orange soup; pan-seared sea bream on watermelon and tomato salad or with muscat. Finish with a crisp fruit mille-feuille or banana pound cake, or seasonal fruit sodas. There can be a wait; browse the wagashi downstairs meanwhile. A bit pricey; English menu; dinner service charge 10%.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 October 2019 (Tabelog)', background: 'Run by wagashi company Minamoto Kitchoan (kitchoan.co.jp).', philosophy: '"More fruit-like than the fruit itself" (concept, per a 2026 review).', specialty: 'Fruit with savoury dishes.',
      anecdotes: [
        { text: '"The main dish, the Beef Stroganoff, was loaded with a variety of fruits: melon, pineapple, kiwi, apple, Shine Muscat grapes, and figs." — August 2026, with an orange soup and banana pound cake.', source: R + 'B533824863/' },
        { text: '"I signed in and browsed some wagashi (Japanese sweets) at the shop downstairs before heading back up." — August 2026.', source: R + 'B533052647/' },
      ],
      japanese_sources_summary: '食べログ: THE HOUSE K.MINAMOTO、銀座6-9-8 宗家 源 吉兆庵 新本社ビル2F〜5F、銀座駅A2出口徒歩3分、36席(4・8・10名の個室3、個室料あり)、火〜金11:30〜20:00、土日祝11:30〜19:00、月休、ディナー時サービス料10%、英語メニュー、2019年10月19日開店、公式サイト kitchoan.co.jp。2026年の口コミ: 下の店で和菓子を見ながら順番待ち、鯛のソテーとスイカとトマトのサラダ、和モダンの空間、季節のフルーツソーダ、「果物より果物らしく」がコンセプトで全料理に果物、メロン・パイン・キウイ・りんご・シャインマスカット・いちじくをのせたビーフストロガノフ、オレンジのスープ、バナナのパウンドケーキ、鯛のポワレとマスカット、フルーツのミルフィーユ、値段はやや高め。',
      confidence: 'medium', sources: [TB, R + 'B533824863/', R + 'B533052647/', R + 'B535391148/', R + 'B533296378/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-9-8 宗家 源 吉兆庵 新本社ビル 2F〜5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目9番8号 (go) 8m; OSM K. Minamoto node/13567083898 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533824863/', R + 'B535391148/'],
    price_note: 'No prices captured; spend ¥2,000–5,000 in reviews.', last_checked: TODAY, items: [
      it('フルーツをのせたビーフストロガノフ', '', 'Beef Stroganoff topped with fruit', '', 'Mains', 'ask', 'no', 'August 2026.', 'stroganoff'),
      it('鯛のソテー スイカとトマトのサラダ', '', 'Sautéed sea bream with watermelon and tomato salad', '', 'Mains', 'ask', 'no', 'August 2026.', 'sea_bream'),
      it('フルーツのミルフィーユ', '', 'Fruit mille-feuille', '', 'Desserts', 'no', 'no', 'September 2026.', 'millefeuille'),
    ] }, {
    cuisine: '和菓子の源吉兆庵のカフェレストラン・全料理に果物(果物をのせたストロガノフ、鯛とスイカとトマト)・フルーツのミルフィーユ・英語メニュー',
    neighborhood: '銀座六丁目、宗家 源 吉兆庵 新本社ビルの上階(2F〜5F)。銀座駅A2出口から徒歩3分',
    gf_detail: '要確認。果物を使った料理(鯛とフルーツのサラダ、ビーフストロガノフ)にパウンドケーキやミルフィーユ。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。サワークリームのビーフストロガノフ、鯛、ケーキ。',
    notes: '[カフェ・銀座の源吉兆庵の上の果物キッチン] 和菓子の源吉兆庵の銀座本社ビルの上に2019年開店、和モダンの36席に個室が3つ。「果物より果物らしく」をコンセプトに全料理に果物を使い、メロン、パイン、キウイ、シャインマスカット、いちじくをたっぷりのせたサワークリームのビーフストロガノフ(オレンジのスープ付き)、スイカとトマトのサラダやマスカットを合わせた鯛のソテーなど。締めはサクサクのフルーツのミルフィーユかバナナのパウンドケーキ、季節のフルーツソーダも。待つこともあり、その間は下で和菓子を。値段はやや高め、英語メニューあり、ディナーはサービス料10%。',
  });
}

save();
