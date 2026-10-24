// Ginza Station half-mile sweep (805 m), batch 26 — mom-and-pop discovery via san-tatsu's Yūrakuchō/Shimbashi/
// Hibiya/Tsukiji area lists (147 unused articles scanned).
//   + とんかつ あけぼの (father opened it in すしや横丁 in 1962; son Nakamura Bunzō runs it → MOM_AND_POP)
//   + 有薫酒蔵 (1978; Fukuoka-born owner Matsunaga Tomokazu and okami Matsunaga Yōko → MOM_AND_POP)
//   + 立ち呑み 庫裏 (2012; sake bar of the Kurihara family's sake shop さかや栗原, okami Kurihara Itsuko → MOM_AND_POP)
// Not added: 東京會舘メインバー (company); 末げん (新橋2-15-7, outside 805 m).
// Sources: san-tatsu (2024 ×2, 2025 two-part feature), Tabelog /en/ listings + dated 2026 reviews.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ とんかつ あけぼの
{
  const S1 = 'https://san-tatsu.jp/articles/459038/'; const S2 = 'https://san-tatsu.jp/articles/459040/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13000129/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:00', '14:30'], ['17:30', '20:00']), l = day(['11:00', '14:30']);
  put({
    id: 'tokyo_tonkatsu_akebono_yurakucho', name: 'とんかつ あけぼの (Tonkatsu Akebono)', category: 'MOM_AND_POP',
    lat: 35.675175, lng: 139.764257,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Domestic pork in coarse fresh breadcrumbs (wheat), fried in lard, then simmered in a soy-based tare with egg for the katsudon.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Pork cutlets fried in lard, egg-bound katsudon, and miso soup made with niboshi (dried sardine) dashi.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–14:30 and 17:30–20:00; Wed & Sat 11:00–14:30; closed Sundays, holidays and alternate Saturdays (Tabelog). Lunch ends when the rice runs out. Cash only (no cards, e-money or QR).',
    hours: { 0: ld, 1: ld, 2: l, 3: ld, 4: ld, 5: l }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, Tokyo Kōtsū Kaikan B1F — 2–3 min from Yūrakuchō Stn',
    cuisine: 'Tonkatsu and katsudon since 1962 (from the old すしや横丁) · lard-fried domestic pork · niboshi miso soup', cuisine_type: 'katsu',
    website: null, gmaps: gm('とんかつ あけぼの 東京交通会館'), menu_url: null,
    notes: "[Mom & Pop · katsudon from the すしや横丁] Nakamura Bunzō's father opened a canteen in 1962 in the 'sushiya yokochō', the shanty strip of sushi bars, drinking dens and offal stalls facing Yūrakuchō Station's tracks. When the Kōtsū Kaikan replaced it, the shop came underground. In the city-hall days lunch was mobbed with civil servants and there was no day off. When the government moved out, the area's restaurants thinned and times were hard. \"Customers kept coming to see my cheerful father and mother — I'm only copying them,\" Nakamura says. Domestic pork from his father's suppliers is trimmed, coated in coarse fresh crumbs and fried in hot lard, then simmered with tare and egg over pot-cooked domestic rice. The katsudon comes with niboshi miso soup and house pickles for ¥1,000 (2025; ¥1,100 in an October 2026 review), a remarkable price facing the station. There is also a mixed fry set of fillet cutlet, fried shrimp and fried horse mackerel. In October 2026 a dozen people were queuing before the 11:00 opening. Write your order on the mini whiteboard at the door. There are eleven counter seats. A small onigiri comes while you wait, and Nakamura serves bigger portions than his father did: 'I'm short-sighted,' he jokes.",
    chef_bio: {
      chef_name: '中村文造 (Nakamura Bunzō, owner — 2nd generation)', roles: ['owner'],
      origin: 'Opened 1962 (Shōwa 37) by his father as a canteen in すしや横丁; moved into the Tokyo Kōtsū Kaikan when the alley was cleared',
      background: 'Son of the founder; keeps his father\'s recipe and suppliers.',
      philosophy: '「明るい父と母に会いに来てくれるお客さんたちがいてくれたので、店を守れたんです。私はそれを見習っているだけです」',
      specialty: 'Katsudon; mixed fry set (fillet cutlet, shrimp, horse mackerel).',
      anecdotes: [
        { text: '「父が昭和37年に、『すし横』で店をはじめたんですよ。そのときは食堂でした」', source: S1 },
        { text: 'His father remembered the gutters by the station full of cigarette ends; customers then stubbed cigarettes out on the shop floor.', source: S1 },
        { text: 'October 2026: twelfth in line ten minutes before 11:00 — "the place gets fully booked with just 10 people."', source: R + 'B537779115/' },
      ],
      japanese_sources_summary: 'さんたつ「街の昭和を食べ歩く」第6回(2025年、前後編): とんかつ あけぼの、東京交通会館の地下、店主・中村文造さん、父が昭和37年に「すし横」で食堂を開業、先代以来の業者の国産豚、あらびきの生パン粉、高温のラード、たれと卵でとじる、釜炊きの国産米、煮干しだしのみそ汁、自家製漬物、かつ丼1,000円、都庁移転後の苦しい時代、「明るい父と母」。住所 有楽町2-10-1 東京交通会館B1、11:00〜15:00ごろ(米がなくなり次第)・17:30〜20:00、日休。食べログ: 月火木金11:00〜14:30・17:30〜20:00、水土は昼のみ、日祝と隔週土曜休、現金のみ。2026年10月の口コミ: 開店前に12人の行列、入口のミニホワイトボードに注文を書く、かつ丼1,100円、カウンター11席、サービス定食(ヒレかつ・エビフライ・アジフライ)。',
      confidence: 'high', sources: [S1, S2, TB, R + 'B537779115/', R + 'B537741865/', R + 'B528093511/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Queue at the door and write your order on the mini whiteboard; 11 counter seats; cash only. Lunch ends when the rice runs out.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Pork coated in coarse fresh breadcrumbs (あらびきの生パン粉) and fried in lard.', source: S1 }],
      soy_sauce_wheat: [{ text: 'Cutlet simmered in tare with egg for katsudon.', source: S1 }],
      vegan_cross_contact: [{ text: 'Miso soup made with niboshi dashi; frying fat is lard.', source: S1 }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 6303338991 「あけぼの」 12m; GSI 有楽町二丁目10番 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [S1, S2, R + 'B537741865/', R + 'B528093511/', R + 'B388029476/'],
    price_note: 'Katsudon ¥1,000 in the 2025 san-tatsu feature; ¥1,100 in an October 2026 review.', last_checked: TODAY, items: [
      it('かつ丼', 'katsudon', 'Katsudon with niboshi miso soup and house pickles', '¥1,100', 'Rice bowls', 'no', 'no', 'October 2026 review; ¥1,000 in 2025.', 'katsudon'),
      it('サービス定食', 'saabisu teishoku', 'Mixed fry set: fillet cutlet, fried shrimp, fried horse mackerel', '', 'Set meals', 'no', 'no', '', 'service_set'),
      it('かつ鍋', 'katsu nabe', 'Katsu nabe', '', 'Set meals', 'no', 'no', '', 'katsu_nabe'),
    ] }, {
    cuisine: '1962年創業(すしや横丁から)のとんかつ・かつ丼・ラードで揚げる国産豚・煮干しのみそ汁',
    neighborhood: '有楽町二丁目、東京交通会館B1F。有楽町駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。国産豚にあらびきの生パン粉(小麦)をつけてラードで揚げ、かつ丼は醤油ベースのたれと卵でとじます。',
    vegan_detail: 'ヴィーガンではありません。ラードで揚げる豚かつ、卵とじのかつ丼、煮干しだしのみそ汁。',
    notes: '[個人店・すしや横丁からのかつ丼] 中村文造さんの父が1962年、有楽町駅の線路前に寿司屋や飲み屋、ホルモン屋がひしめいた「すしや横丁」で食堂を開いたのが始まりで、東京交通会館の建設とともに地下へ。都庁があった頃は昼に職員が押し寄せ休みも取れないほどでしたが、都庁移転後は街の飲食店が減り苦しい時代も。「明るい父と母に会いに来てくれるお客さんたちがいてくれたので、店を守れた。私はそれを見習っているだけです」と中村さん。先代以来の業者から仕入れる国産豚の筋を切り、あらびきの生パン粉をまとわせて高温のラードで揚げ、たれと卵でとじて釜炊きの国産米の上へ。煮干しだしのみそ汁と自家製漬物付きのかつ丼が1,000円(2025年。2026年10月の口コミでは1,100円)と、駅前とは思えない値段です。ヒレかつ・エビフライ・アジフライのサービス定食も。2026年10月には11時の開店前に12人の行列。入口のミニホワイトボードに注文を書いて待ちます。カウンター11席。待つ間に小さなおにぎりが出て、量は「近眼なもので」と先代のころより多め。',
  });
}

// ================================================================ 有薫酒蔵
{
  const ST = 'https://san-tatsu.jp/articles/332048/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13002214/'; const R = TB + 'dtlrvwlst/';
  const a = day(['17:00', '23:00']);
  put({
    id: 'tokyo_yukun_sakagura_shimbashi', name: '有薫酒蔵 (Yūkun Sakagura)', category: 'MOM_AND_POP',
    lat: 35.668217, lng: 139.757033,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. Kyūshū dishes such as sashimi with sweet Kyūshū soy sauce and black-pork skewers glazed in a sweet soy tare; courses mix many dishes. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as a restaurant: horse sashimi, kibinago and other fish, gameni with chicken, black-pork skewers. Grilled eggplant is one of the few plant dishes mentioned, and its seasoning is not described.',
    hours_raw: 'Tue–Fri 17:00–23:00 (L.O. 22:00); Sat 16:30–23:00 (L.O. 22:00); closed Sundays, Mondays (open in December), holidays, Obon and New Year (Tabelog). Booking strongly advised; the phone line is closed, so book online. Visa and Mastercard accepted.',
    hours: { 1: a, 2: a, 3: a, 4: a, 5: day(['16:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 1-chōme, Resona Shimbashi Bldg B1F on Sotobori-dōri by the Shimbashi 2-chōme crossing — 1 min from Shimbashi Stn',
    cuisine: 'Kyūshū izakaya since 1978 · horse sashimi, gameni · the "high-school message notebooks" for 3,400+ schools', cuisine_type: 'izakaya',
    website: null, gmaps: gm('有薫酒蔵 新橋1-16-4 りそな新橋ビル'), menu_url: null,
    notes: "[Mom & Pop · the high-school reunion izakaya] A basement izakaya on Sotobori-dōri opened in 1978 by Fukuoka-born owner Matsunaga Tomokazu and run with his wife, okami Matsunaga Yōko. Ingredients are flown in from Kyūshū daily, but since the Isahaya Bay sea-gates cut off its Ariake Sea supply it no longer insists on Kyūshū alone and buys fresh fish from Kantō and Tōhoku too. The menu still leans Kyūshū: Kumamoto horse sashimi that has never been frozen, kibinago sashimi, gameni (chikuzen-ni, chicken and vegetables simmered in dashi, ¥1,050 in 2024) and black-pork belly skewers in a sweet soy tare (¥800), with sweet Kyūshū soy sauce and Fukuoka's 'Yūkun' daiginjō from Takahashi Shuzō. It is famous for something else, though: since opening, guests have filled 'high-school message notebooks', one per school, now more than 3,400 of Japan's 4,874 high schools (MEXT, 2020). The first, in 1987, was for Kurume University Fuzoku High School, started for a regular who came 300 days a year. Write your school on the memo the staff bring and they will fetch its notebook from the index. Alumni book it out nightly; courses such as the 'High School Freshman' (¥3,800 in 2026) keep a reunion simple.",
    chef_bio: {
      chef_name: '松永協和 (Matsunaga Tomokazu, owner) and 松永洋子 (Matsunaga Yōko, okami)', roles: ['owner (from Fukuoka)', 'okami'],
      origin: 'Opened 1978 in Shimbashi',
      background: 'Owner Matsunaga Tomokazu is from Fukuoka; his wife Yōko runs the floor as okami (san-tatsu, 2024).',
      philosophy: '「新鮮な魚なら関東近郊や東北でも獲れるということで"九州だけ"にこだわらないことにしました」 — the okami on widening the menu beyond Kyūshū.',
      specialty: 'Kumamoto horse sashimi; gameni; the high-school notebooks.',
      anecdotes: [
        { text: '「いらっしゃいませ。出身校はどちらですか？ 店内にあるノートは索引があるのですぐにお調べできますよ」 — okami Matsunaga Yōko.', source: ST },
        { text: 'The shop holds notebooks for more than 3,400 high schools, against about 4,874 in Japan (MEXT, 2020).', source: ST },
        { text: '"I visited with a friend from high school and ordered the High School Freshman Course (JPY 3,800)." — October 2026.', source: R + 'B537398115/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.8.16): 有薫酒蔵、外堀通り沿い、九州の郷土料理、創業当時から続く高校よせがきノート(3,400校超、第1号は1987年の久留米大学付設高校)、女将・松永洋子さん、店主で夫の松永協和さん(福岡出身)が1978年に開店、毎日九州から空輸、諫早湾の排水門閉鎖後は全国の旬の食材も、熊本産の冷凍しない馬刺し、きびなごの刺身、平政のうす造り1,700円、がめ煮1,050円、焼きなすび900円、有薫大吟醸(高橋酒造)グラス900円、黒豚の串焼800円(甘辛い醤油だれ)。住所 新橋1-16-4 りそな新橋ビルB1、17:00〜23:00、日月休。食べログ: 火〜金17:00〜23:00、土16:30〜、日月祝休(12月は月曜営業)、VISA・Master可、電話受付停止中でネット予約。2026年の口コミ: 高校1年生コース3,800円、九州の甘い醤油、予約推奨。',
      confidence: 'high', sources: [ST, TB, R + 'B535116450/', R + 'B537398115/', R + 'B535355215/', R + 'B535456498/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Book ahead online — reunions fill it most nights. Write your high school on the memo the staff bring and they will fetch its notebook. Visa/Mastercard accepted.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [],
      soy_sauce_wheat: [{ text: 'Sashimi served with sweet Kyūshū soy sauce.', source: R + 'B535116450/' }, { text: 'Black-pork skewer coated in a sweet-savoury soy tare (甘辛い醤油だれ).', source: ST }],
      vegan_cross_contact: [{ text: 'Horse sashimi, kibinago, gameni with chicken, black-pork skewers.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-16-4 りそな新橋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目16番 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537398115/'],
    price_note: 'Dish prices from the August 2024 san-tatsu feature; course price from October 2026.', last_checked: TODAY, items: [
      it('高校1年生コース', 'koukou ichinensei koosu', 'High School Freshman course', '¥3,800', 'Courses', 'no', 'no', 'October 2026.', 'freshman_course'),
      it('馬刺し', 'basashi', 'Kumamoto horse sashimi (never frozen)', '', 'Sashimi', 'ask', 'no', 'Served with sweet Kyūshū soy.', 'basashi'),
      it('きびなごの刺身', 'kibinago no sashimi', 'Kibinago (silver-stripe herring) sashimi', '', 'Sashimi', 'ask', 'no', '', 'kibinago'),
      it('平政のうす造り', 'hiramasa no usuzukuri', 'Thin-sliced yellowtail amberjack', '¥1,700', 'Sashimi', 'ask', 'no', '2024.', 'hiramasa'),
      it('がめ煮', 'gameni', 'Gameni (chikuzen-ni: chicken and vegetables simmered in dashi)', '¥1,050', 'Small plates', 'ask', 'no', '2024.', 'gameni'),
      it('焼きなすび', 'yaki nasubi', 'Fire-grilled eggplant', '¥900', 'Small plates', 'ask', 'ask', '2024.', 'yaki_nasu'),
      it('黒豚の串焼', 'kurobuta no kushiyaki', 'Black-pork belly skewer in sweet soy tare', '¥800', 'Small plates', 'no', 'no', '2024.', 'kurobuta_skewer'),
      it('有薫大吟醸', 'yuukun daiginjou', 'Yūkun daiginjō (Takahashi Shuzō, Fukuoka), glass', '¥900', 'Drinks', 'gf', 'vegan', 'Bottle ¥4,800 (2024).', 'yukun_daiginjo'),
    ] }, {
    cuisine: '1978年創業の九州料理の居酒屋・馬刺し・がめ煮・3,400校超の「高校よせがきノート」',
    neighborhood: '新橋一丁目、外堀通り沿い・新橋二丁目交差点近くのりそな新橋ビルB1F。新橋駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。九州の甘い醤油で食べる刺身や甘辛い醤油だれの黒豚の串焼などの九州料理で、コースは多品目。グルテンフリーの選択肢はありません。',
    vegan_detail: '店としてはヴィーガンではありません。馬刺し、きびなごなどの魚、鶏入りのがめ煮、黒豚の串焼。植物性の料理として挙がるのは焼きなすびくらいで、味付けは書かれていません。',
    notes: '[個人店・高校の同窓会の居酒屋] 外堀通り沿いの地下にある居酒屋で、1978年に福岡出身の店主・松永協和さんが開き、妻で女将の松永洋子さんと営みます。毎日九州から食材を空輸していますが、諫早湾の排水門閉鎖で有明海の食材が獲れなくなってからは「九州だけ」にこだわらず、関東近郊や東北の鮮魚も。それでも熊本産の一度も冷凍していない馬刺し、きびなごの刺身、がめ煮(筑前煮。2024年で1,050円)、甘辛い醤油だれの黒豚の串焼(800円)など九州のものが多く、九州の甘い醤油と福岡・高橋酒造の「有薫大吟醸」で。もうひとつの名物が創業当時から続く「高校よせがきノート」で、全国4,874校(文部科学省、令和2年度)のうち3,400校を超えるノートがあります。第1号は1987年、年に300日通った常連のための福岡県久留米大学付設高校のノート。店の人が持ってくるメモに出身校を書けば、索引からノートを出してくれます。同窓生の予約で連日満席。「高校1年生コース」(2026年で3,800円)なども。',
  });
}

// ================================================================ 立ち呑み 庫裏
{
  const ST = 'https://san-tatsu.jp/articles/326929/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13141421/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '23:30']);
  put({
    id: 'tokyo_tachinomi_kuri_shimbashi', name: '立ち呑み 庫裏 (Tachinomi Kuri)', category: 'MOM_AND_POP',
    lat: 35.666441, lng: 139.759403,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'A standing sake bar. Sake itself is brewed from rice and contains no wheat, but beer and Hoppy are barley-based, and the snacks (pickles, dressed dishes, inari, potato salad) are not described ingredient by ingredient. Ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. The okami\'s potato salad contains boiled egg. The inari (sushi rice with red pickled ginger in sweet-savoury simmered fried tofu) may suit, but how the tofu is simmered is not described, so ask about dashi.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat 16:00–23:00; closed Sundays and holidays (Tabelog). Pay as you order. No cards; transport IC (Suica etc.) accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['16:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 1F — 1 min from Shimbashi Stn',
    cuisine: 'Standing sake bar of a family sake shop · ~40 seasonal and aged sakes by the 80 ml · ¥100–350 snacks, some hand-made by the okami', cuisine_type: 'izakaya',
    website: null, gmaps: gm('立ち呑み 庫裏 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Mom & Pop · the sake shop's standing bar] A standing sake bar on the ground floor of the Shimbashi Ekimae Building, opened on 22 May 2012, the same day as Tokyo Skytree, by さかや栗原, a family sake shop based in Minami-Naruse, Machida. The eldest son now runs the shop, and the second son runs the sister 和酒Pub 庫裏 in the basement of the same building. The walls are lined with framed sake labels from all 47 prefectures, collected by okami Kurihara Itsuko since 1983, when she married into the shop, and sent unglued and unused by the breweries; some breweries and brands no longer exist. About 30 seasonal and 10 aged sakes are poured 80 ml at a time for ¥300–1,000, and the okami will pick one to suit a beginner. The three-glass omakase set is ¥1,000 (2024 and 2026). Snacks are mostly pickles and dressed dishes at ¥100–350. Those marked '伊', for Itsuko, are made by the okami every day: inari tinted pink with chopped red ginger (¥200), a potato salad with boiled egg whose dressing changes for the regulars (¥100), and seasoned eggs. Pay as you go: one 2024 evening came to exactly ¥1,000. In October 2026 diners praised the range for the price, including Ishikawa's Fukumasamune and Miyagi's Suminoe.",
    chef_bio: {
      chef_name: '栗原伊津子 (Kurihara Itsuko, okami)', roles: ['okami (family of さかや栗原)'],
      origin: 'Opened 22 May 2012; parent shop さかや栗原, Minami-Naruse, Machida',
      background: 'Kurihara Itsuko married into the Kurihara sake shop and has collected labels since 1983 "to study sake". The eldest son runs さかや栗原; the second son runs 和酒Pub 庫裏 on B1 of the same building (san-tatsu, 2024).',
      philosophy: '「ラベルを集めていたのはお酒の勉強をするためで、まさかこういう風に使うとは思ってなかったですけどね」',
      specialty: 'Seasonal and aged sake by the 80 ml; hand-made inari and potato salad.',
      anecdotes: [
        { text: '「これはね、私が酒屋にお嫁に来た時からずっと溜めていたお酒のラベルなんですよ。酒蔵から糊をつけていない未使用のものを送ってもらってたから、折り目やシワもなくきれいに残っているんです」', source: ST },
        { text: '「私の名前、"伊津子"の"伊"です。このマークが付いているものは私が毎日手作りしているんですよ」', source: ST },
        { text: '"Great satisfaction for just JPY 1,500! A standing bar for sake lovers." — October 2026.', source: R + 'B537871406/' },
      ],
      japanese_sources_summary: 'さんたつ(2024.7.16): 立ち呑み 庫裏、新橋駅前ビル1号館1F、2012年5月22日オープン(東京スカイツリーと同日)、母体は町田市南成瀬の酒販店「さかや栗原」、長男が「さかや栗原」、次男が同ビルB1で「和酒Pub 庫裏」、女将・栗原伊津子さんが1983年から集めた47都道府県の日本酒ラベルを壁一面に、季節の酒約30種・熟成酒約10種を80ml 300〜1,000円、おまかせセット1,000円、肴は漬物や和え物100〜350円、"伊"マークは女将の手作り(おいなりさん200円は紅生姜入りの酢飯、ポテトサラダ100円はゆで卵入り、味玉)、その場で支払い、営業17:00〜23:30(土16:00〜23:00)、日祝休。食べログ: 同時間、カード不可・交通系IC可。2026年10月の口コミ: おすすめ3種1,000円、福正宗、墨廼江、1,500円で満足、日本酒初心者にもおすすめ。',
      confidence: 'medium', sources: [ST, TB, R + 'B534618145/', R + 'B536939727/', R + 'B537871406/', R + 'B537490019/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny standing bar (3 tsubo, a few tables outside); pay as you order; the okami picks sake for beginners. Transport IC cards accepted, no credit cards.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Potato salad made with boiled egg.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目20番 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B536939727/', R + 'B537871406/'],
    price_note: 'Snack prices from the July 2024 san-tatsu feature.', last_checked: TODAY, items: [
      it('おまかせセット', 'omakase setto', 'Three-glass sake set chosen by the house (80 ml each)', '¥1,000', 'Sake', 'gf', 'ask', '2024; same in October 2026.', 'sake_flight'),
      it('日本酒 80ml', 'nihonshu', 'Seasonal or aged sake, 80 ml', '¥300–1,000', 'Sake', 'gf', 'ask', '2024.', 'sake_glass'),
      it('おいなりさん(伊)', 'oinarisan', 'Inari sushi with red pickled ginger, hand-made by the okami', '¥200', 'Snacks', 'ask', 'ask', '2024.', 'inari'),
      it('ポテトサラダ(伊)', 'poteto sarada', 'Potato salad with boiled egg; dressing varies', '¥100', 'Snacks', 'ask', 'no', '2024.', 'potato_salad'),
      it('', '', 'Pickles and dressed dishes', '¥100–350', 'Snacks', 'ask', 'ask', '2024.', 'pickles'),
      it('ホッピー', 'hoppii', 'Hoppy', '', 'Drinks', 'no', 'ask', 'Barley-based.', 'hoppy'),
    ] }, {
    cuisine: '家族経営の酒屋の立ち呑み・季節の酒と熟成酒約40種を80mlで・女将手作りを含む100〜350円の肴',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館1F。新橋駅から徒歩1分',
    gf_detail: '立ち呑みの日本酒の店。日本酒自体は米が原料で小麦を含みませんが、ビールやホッピーは大麦が原料で、肴(漬物・和え物・おいなりさん・ポテトサラダ)の材料は品ごとには書かれていません。確認してください。',
    vegan_detail: '要確認。女将手作りのポテトサラダにはゆで卵が入ります。おいなりさん(紅生姜入りの酢飯を甘じょっぱく煮た油揚げで)は候補ですが、油揚げの煮汁は書かれていないので、出汁について確認してください。',
    notes: '[個人店・酒屋の立ち呑み] 新橋駅前ビル1階の立ち呑みの日本酒の店で、町田市南成瀬の家族経営の酒販店「さかや栗原」が、東京スカイツリーと同じ2012年5月22日に開店。今は長男が酒屋を、次男が同じビルの地下1階で「和酒Pub 庫裏」を営みます。壁一面に額装された47都道府県の日本酒ラベルは、女将の栗原伊津子さんが嫁いだ1983年から集めてきたもので、酒蔵から糊を付けていない未使用のものを送ってもらったそう。今はもうない蔵や銘柄も。季節の酒約30種と熟成酒約10種を1杯80ml・300〜1,000円で出し、初心者には女将が好みに合う一杯を選んでくれます。おまかせ3種セットは1,000円(2024年・2026年)。肴は漬物や和え物が中心で100〜350円、「伊」(伊津子さんの伊)の印は女将の毎日の手作りで、刻んだ紅生姜で薄桃色のおいなりさん(200円)、ゆで卵入りで常連のために味付けを変えるポテトサラダ(100円)、味玉など。注文ごとに支払う方式で、2024年のある晩はちょうど1,000円。2026年10月の口コミでは、石川の福正宗や宮城の墨廼江など手頃な価格で豊富な品揃えが好評です。',
  });
}

save();
