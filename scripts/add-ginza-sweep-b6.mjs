// Ginza Station half-mile sweep (805 m), batch 6 — Ginza heritage houses (sweep placeholders researched).
//   ~ tokyo3_ginza_47 煉瓦亭 (yōshoku since 1895; fourth-generation Kida family)
//   ~ tokyo3_ginza_54 とんかつ 銀座梅林 本店 (1927; third generation; franchises abroad)
//   ~ tokyo3__113 てんぷら 近藤 (owner-chef Kondō Fumio, 1991)
// Sources: san-tatsu, inshokuten, ginzabairin.com (menu, about, company, shop), Nissyoku, tempura-kondo.com,
// nippon.com, Tabelog /en/. Pins: Tabelog / GSI / OSM. Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 煉瓦亭
{
  const ST = 'https://san-tatsu.jp/articles/88833/'; const INS = 'https://www.inshokuten.com/foodist/article/5334/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002430/'; const R = TB + 'dtlrvwlst/';
  const s = day(['11:15', '15:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo3_ginza_47', name: '煉瓦亭 (Rengatei)', category: 'MOM_AND_POP',
    lat: 35.67276, lng: 139.766021,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. Rengatei is a yōshoku (Japanese-Western) house built on breaded, fried dishes. The pork cutlet uses fresh panko and is fried in a secret blend of three oils, and the menu also has fried prawns and other cutlets. The Meiji-style omurice is seasoned with a little sugar-and-soy, and Japanese soy sauce contains wheat by default. No gluten-free dish is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The consommé is a beef-tendon bouillon with vegetables, the omurice is egg with minced meat, and the signature dishes are pork, prawns and beef.',
    hours_raw: 'Mon–Sat & holidays 11:15–15:00 (L.O. 14:00) and 17:30–21:00 (L.O. 20:00); closed Sundays (Tabelog; "please contact us for changes on specific days"). Cash only.',
    hours: { 0: s, 1: s, 2: s, 3: s, 4: s, 5: s }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, on Gas-tō-dōri behind Wakō — 3 min from Ginza exits A10 / B1',
    cuisine: 'Yōshoku since 1895 · pork cutlet, omurice, hayashi rice', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('煉瓦亭 東京都中央区銀座3-5-16'), menu_url: null,
    notes: "[Mom & Pop · yōshoku since 1895] A Ginza Western-food house founded in 1895 by Kida Motojirō, at a time when Western cooking was eaten only in hotels and at court. He wanted ordinary people to be able to order a single Western dish. His great-grandson, Kida Kōichirō, runs it today as the fourth-generation owner, with long-serving staff. The house credits itself with much of Japanese yōshoku as we know it. Its pork cutlet adapted the veal côtelette with pork, because veal was scarce. Shredded cabbage beside the cutlet, it says, started when cooks were drafted in the Russo-Japanese War and there was no one to make warm vegetables. Rice on a flat plate and two omurice, both from around 1900, are also on its list. The original omurice began as a staff meal, with egg and rice mixed together. There are four floors, including a tatami room, and bricks from the old Ginza brick district hang on the ground-floor wall. Cash only.",
    chef_bio: {
      chef_name: '木田浩一朗 (Kida Kōichirō)', roles: ['fourth-generation owner'],
      origin: 'Ginza; founded 1895 by his great-grandfather 木田元次郎 (Kida Motojirō)',
      background: "Kida Motojirō opened Rengatei in 1895 so that ordinary people could order Western dishes one at a time instead of only as hotel or court courses. Four generations on, the house keeps its 'casual yōshoku-ya' spirit, with long-serving staff working alongside the fourth-generation owner.",
      philosophy: '気取らない「洋食屋」の精神 — the unpretentious spirit of a neighbourhood Western-food house.',
      specialty: 'Original pork cutlet; Meiji-born omurice and the original mixed-rice omurice; consommé jelly.',
      anecdotes: [
        { text: "The pork cutlet: the founder's version of the French côtelette de veau, made with pork because veal was hard to get.", source: ST },
        { text: 'Shredded cabbage with the cutlet began during the Russo-Japanese War, when many cooks were conscripted and raw cabbage replaced cooked vegetables — the house says it stuck because it was refreshing.', source: ST },
        { text: 'Both omurice date from about 1900; the original — egg and rice mixed — began as a staff meal for practising omelettes.', source: ST },
        { text: 'Most of the popular dishes were once staff meals (まかない), the original omurice among them.', source: INS },
        { text: 'The cutlet fat is a secret blend of three oils.', source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2021.03.10): 明治28年(1895)創業、4代目店主・木田浩一朗さん、曾祖父・木田元次郎が創業。元祖ポークカツレツ2000円、明治誕生オムライス2100円、コンソメスープ900円(当時)。ポークカツレツは仔牛のコートレットが元、千切りキャベツは日露戦争期から、オムライスは明治33年頃。地下1階〜3階の4フロア、3階に座敷。飲食店ドットコム(2019): 人気メニューのほとんどは従業員のまかないが起源。食べログ: 銀座3-5-16、月〜土祝11:15〜15:00(LO14:00)・17:30〜21:00(LO20:00)、日休、現金のみ。',
      confidence: 'high', sources: [ST, INS, TB, R + 'B524359897/', R + 'B537734266/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'An unpretentious, busy old dining room over four floors (incl. a tatami room); queues at lunch. Cash only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Cutlets use fresh panko (生パン粉) and are fried in a blend of three oils; prawns and other fried dishes share the kitchen.', source: ST }],
      soy_sauce_wheat: [{ text: 'The Meiji-style omurice rice is seasoned with a little sugar and soy sauce (ほのかな砂糖醤油の風味).', source: ST }],
      vegan_cross_contact: [{ text: 'The consommé is simmered with beef-tendon bouillon; the omurice filling is mixed minced meat and mushroom.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-5-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current, no status badge; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目5番16号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [ST, R + 'B537734266/'],
    price_note: 'No published menu. Three prices come from the 2021 san-tatsu feature; an October 2026 diner found most dishes around ¥3,000, so expect higher prices now.', last_checked: TODAY, items: [
      it('元祖ポークカツレツ', 'ganso pooku katsuretsu', 'Original pork cutlet', '¥2,000', 'Mains', 'no', 'no', '2021 price — likely higher now. Fresh panko.', 'pork_cutlet'),
      it('明治誕生オムライス', 'meiji tanjou omuraisu', 'Meiji-born omurice (fried rice with minced meat wrapped in egg)', '¥2,100', 'Mains', 'no', 'no', '2021 price. Sugar-and-soy seasoning.', 'omurice_meiji'),
      it('元祖オムライス', 'ganso omuraisu', 'Original omurice (rice mixed into the egg)', '', 'Mains', 'ask', 'no', '2021 feature.', 'omurice_original'),
      it('ハヤシライス', 'hayashi raisu', 'Hayashi rice', '', 'Mains', 'no', 'no', 'Named among the house dishes (2021).', 'hayashi_rice'),
      it('コンソメスープ', 'konsome suupu', 'Consommé (hot, or as a cold jelly)', '¥900', 'Soup', 'ask', 'no', '2021 price. Beef-tendon bouillon with onion, carrot, garlic, celery.', 'consomme'),
      it('', '', 'Fried prawns with egg-rich tartare', '', 'Mains', 'no', 'no', 'October 2026 review.', 'ebi_fry'),
    ] }, {
    cuisine: '1895年創業の洋食・ポークカツレツ・オムライス・ハヤシライス',
    neighborhood: '銀座三丁目、和光裏のガス灯通り。銀座駅A10・B1出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。揚げ物が中心の洋食店で、ポークカツレツは生パン粉を使い、3種類の油を合わせた秘伝の油で揚げます。エビフライなどの揚げ物もあります。明治誕生オムライスにはほのかな砂糖醤油の味付けがあり、日本の醤油は基本的に小麦を含みます。グルテンフリーの料理はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。コンソメは牛すじのブイヨンと野菜、オムライスは卵と挽肉、看板料理は豚肉・海老・牛肉です。',
    notes: '[個人店・1895年創業の洋食] 西洋料理がホテルや宮中でしか食べられなかった1895年に、木田元次郎が創業した銀座の洋食店です。一品ずつ注文できる西洋料理を庶民に、という一念で開きました。今は曾孫で4代目の木田浩一朗さんが、長く勤める従業員とともに営んでいます。店は日本の洋食の多くを生んだと自負しています。ポークカツレツは仔牛のコートレットを、手に入りにくい仔牛の代わりに豚肉で作ったもの。千切りキャベツは、日露戦争でコックが徴兵され温野菜が作れなくなったのが始まりだそうです。皿盛りのご飯や、明治33年頃生まれの2種類のオムライスも店の自負する元祖です。卵とご飯を混ぜた元祖オムライスはまかないから生まれました。座敷を含む4フロアで、1階の壁には銀座煉瓦街の煉瓦が飾られています。現金のみ。',
  });
}

// ================================================================ とんかつ 銀座梅林 本店
{
  const MENU = 'https://www.ginzabairin.com/menu/index.php'; const ABOUT = 'https://www.ginzabairin.com/about/index.php';
  const CO = 'https://www.ginzabairin.com/company/index.php'; const SHOP = 'https://www.ginzabairin.com/shop/index.php';
  const NIS = 'https://news.nissyoku.co.jp/restaurant/tanakak20110107014407836';
  const TOP = 'https://www.ginzabairin.com/';
  const a = day(['11:30', '21:00']);
  put({
    id: 'tokyo3_ginza_54', name: 'とんかつ 銀座梅林 本店 (Tonkatsu Ginza Bairin)', category: 'OMNI',
    lat: 35.669577, lng: 139.762681,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. A tonkatsu specialist: everything is breaded in the house's own fresh panko, which it says it was among the first to develop, and fried in a cottonseed-oil blend. The katsudon sauce is simmered from pork and onion. The original thick 'chūnō' tonkatsu sauce is made with fruit and vegetables, but its full recipe is not published. No gluten-free dish is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Pork cutlets, fried prawns and minced-meat cutlets, egg-bound rice bowls, and a katsudon sauce simmered from pork sinew.',
    hours_raw: 'Daily 11:30–21:00 (last order 20:00), no afternoon break; open every day except 1 January (and the shop posts New Year changes). No reservations — seated in order of arrival. Takeaway bento by phone (03-3571-0350).',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza Bairin Bldg B1F (Kōjunsha-dōri) — 3 min from the Ginza 4-chōme crossing towards Shimbashi; Ginza exit A2',
    cuisine: "Ginza's first tonkatsu specialist (1927) · special katsudon, fillet-katsu sandwich", cuisine_type: 'katsu',
    website: TOP, gmaps: gm('とんかつ 銀座梅林 本店 東京都中央区銀座7-8-1'), menu_url: MENU,
    notes: "[Tonkatsu · since 1927] Ginza's first tonkatsu specialist. It opened in 1927 under founder Shibuya Nobukatsu, a former pharmacist who drew on that training to create a thick, sweet tonkatsu sauce from apple and onion, which the house calls the original chūnō sauce. He also cut fillet into bite-size pieces ('hitokuchi katsu'), put katsu between slices of bread, and created the 'special katsudon', a loin cutlet bound in egg with a second, unbroken egg on top. The family business, 有限会社梅林 under president Shibuya Masaya, is in its third generation. It has franchise counters at Haneda Airport, in Waikiki and in Seoul. The head shop is in the basement of its own building. It uses Kagoshima black pork, Yamagata Tsuyahime rice (free refills) and seasonal cabbage, and the fillet-katsu sandwich is packed in old-style wood-shaving boxes.",
    chef_bio: {
      chef_name: null, roles: ['family company 有限会社梅林 (president 澁谷昌也, third generation)'],
      origin: 'Ginza; opened 22 February 1927 by 澁谷信勝 (Shibuya Nobukatsu); company formed 1947',
      background: "Founder Shibuya Nobukatsu was a pharmacist before opening Ginza's first tonkatsu specialist. The business passed to the third generation, which has since opened a Haneda Airport counter (2005) and franchise shops abroad.",
      philosophy: '「銀座のおもてなしの心」を大切に、食材に徹底的にこだわり、老舗の味を伝えていきたい.',
      specialty: 'Special katsudon; hitokuchi (bite-size) fillet katsu; fillet-katsu sandwich; original chūnō sauce.',
      anecdotes: [
        { text: 'The founder, a pharmacist, developed a thick, sweet sauce from apple and onion to suit tonkatsu — the house calls it the original tonkatsu (chūnō) sauce.', source: MENU },
        { text: 'He cut fillet cutlets, then fried whole, into bite-size pieces (ひと口カツ), and put katsu between slices of bread for the katsu sandwich.', source: NIS },
        { text: "The 'special katsudon', born just after the war: loin cutlet with the fat trimmed, bound in egg, with another unbroken egg on top.", source: NIS },
        { text: "The shop's nickname 「珍豚美人（ちんとんしゃん）」, with its picture of a pig playing the shamisen, was coined by the storyteller 五代目一龍斎貞丈.", source: NIS },
        { text: 'The katsudon sauce is not bonito-based like a soba shop\'s, but a slow-simmered soup of pork sinew and onion.', source: MENU },
      ],
      japanese_sources_summary: '公式(ginzabairin.com): 昭和2年(1927年)銀座で初めてのとんかつ専門店として開店、創業者澁谷信勝(薬剤師)。会社概要: 有限会社梅林、創業昭和2年2月22日、設立昭和22年3月29日、代表取締役 澁谷昌也。三代目の代。店舗: 銀座梅林ビル地下1階、11:30〜20:00(L.O)、年中無休(1月1日を除く)、予約不可。フランチャイズ: 羽田空港第一ターミナル、ハワイ ワイキキ店、韓国ヨイド店。メニュー(2024年4月現在): ヒレカツ定食3,400円、ロースカツ定食3,600円、スペシャルカツ丼2,300円 ほか。',
      confidence: 'high', sources: [TOP, MENU, ABOUT, CO, SHOP, NIS],
    },
    cultural_comfort: { level: 'english', note: 'The shop runs an English website; walk-ins only, seated in order of arrival (wait until your whole party has arrived). Rice refills are free.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Every cutlet is coated in the house fresh panko (生パン粉) and fried in a cottonseed-oil blend in custom pans.', source: MENU }],
      soy_sauce_wheat: [{ text: 'The katsudon sauce is a sweet Kantō-style tare on a pork-sinew and onion soup; the tonkatsu sauce is apple-and-onion based — full ingredients not published.', source: MENU }],
      vegan_cross_contact: [{ text: 'The katsudon tare is simmered from pork sinew (豚肉のすじ肉) and onion.', source: MENU }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-8-1 銀座梅林ビル 地下1階',
    existence: { status: 'confirmed', checked: TODAY, note: "Shop's own site lists the head shop at 銀座梅林ビル地下1階, open daily." },
    pin_source: `Tabelog (enrich pass) 35.669577/139.762681; cross-checked: GSI 東京都中央区銀座七丁目8番1号 (go) 6m; OSM node 6303385087 「銀座梅林 本店」 ~60m; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [MENU],
    price_note: "From the shop's own Ginza head-shop menu. Prices are stamped 'as of April 2024', so treat them as indicative. Cutlets can be combined into a set and portions adjusted.", last_checked: TODAY, items: [
      it('ヒレカツ定食', 'hirekatsu teishoku', 'Fillet cutlet set (rice, miso soup, pickles)', '¥3,400', 'Set meals', 'no', 'no', '', 'hire_katsu_teishoku'),
      it('ロースカツ定食', 'roosukatsu teishoku', 'Loin cutlet set (200 g)', '¥3,600', 'Set meals', 'no', 'no', '', 'rosu_katsu_teishoku'),
      it('銀カツ定食', 'ginkatsu teishoku', 'Gin-katsu set', '¥2,500', 'Set meals', 'no', 'no', '', 'gin_katsu_teishoku'),
      it('生姜焼定食', 'shougayaki teishoku', 'Ginger pork set', '¥2,600', 'Set meals', 'no', 'no', 'Ginger pork is normally soy-seasoned.', 'shogayaki_teishoku'),
      it('エビフライ定食', 'ebi furai teishoku', 'Fried prawn set', '¥2,800', 'Set meals', 'no', 'no', '', 'ebi_fry_teishoku'),
      it('ミックス定食', 'mikkusu teishoku', 'Mixed set (fillet cutlet, fried prawn, meatball)', '¥2,500', 'Set meals', 'no', 'no', '', 'mix_teishoku'),
      it('梅林定食', 'bairin teishoku', 'Bairin set (fried prawn, minced-meat cutlet)', '¥1,950', 'Set meals', 'no', 'no', '', 'bairin_teishoku'),
      it('特別定食', 'tokubetsu teishoku', 'Special set', '¥4,600', 'Set meals', 'no', 'no', '', 'tokubetsu_teishoku'),
      it('黒豚スペシャルカツ丼', 'kurobuta supesharu katsudon', 'Black-pork special katsudon', '¥3,000', 'Rice bowls', 'no', 'no', '', 'kurobuta_special_katsudon'),
      it('スペシャルカツ丼', 'supesharu katsudon', 'Special katsudon (loin cutlet in egg, a second egg on top)', '¥2,300', 'Rice bowls', 'no', 'no', 'The signature, since just after the war.', 'special_katsudon'),
      it('カツ丼', 'katsudon', 'Katsudon', '¥1,400', 'Rice bowls', 'no', 'no', '', 'katsudon'),
      it('カツライス', 'katsu raisu', 'Katsu rice', '¥1,600', 'Rice bowls', 'no', 'no', '', 'katsu_rice'),
      it('串カツライス', 'kushikatsu raisu', 'Skewered cutlet rice', '¥1,600', 'Rice bowls', 'no', 'no', '', 'kushikatsu_rice'),
      it('メンチカツライス', 'menchikatsu raisu', 'Minced-meat cutlet rice', '¥1,400', 'Rice bowls', 'no', 'no', '', 'menchi_rice'),
      it('カツ玉ライス', 'katsutama raisu', 'Katsu-and-egg rice', '¥1,400', 'Rice bowls', 'no', 'no', '', 'katsutama_rice'),
      it('ヒレカツサンド', 'hirekatsu sando', 'Original fillet-katsu sandwich, 4 pieces (takeaway)', '¥1,200', 'Takeaway', 'no', 'no', '', 'katsu_sando'),
    ] }, {
    cuisine: '銀座初のとんかつ専門店(1927年)・スペシャルカツ丼・ヒレカツサンド',
    neighborhood: '銀座七丁目、交詢社通りの銀座梅林ビルB1F。銀座四丁目交差点から新橋方向へ徒歩3分、銀座駅A2出口',
    gf_detail: 'グルテンフリーではありません。とんかつ専門店で、店が日本でいち早く開発したという自家製の生パン粉をすべてにまとわせ、綿実油を主にした油で揚げます。カツ丼のタレは豚肉と玉ねぎを煮込んだもの。元祖とんかつソース(中濃ソース)はりんご・玉ねぎなどで作りますが、配合の全容は公表されていません。グルテンフリーの料理はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。豚カツ、エビフライ、メンチカツ、卵とじの丼もので、カツ丼のタレは豚のすじ肉を煮込んだものです。',
    notes: '[とんかつ・1927年創業] 銀座で初めてのとんかつ専門店です。1927年、創業者・澁谷信勝が開きました。薬剤師だった経験を生かしてりんごや玉ねぎでとろみと甘みを付けたソースを考え、店はこれを元祖中濃ソースとしています。ヒレカツを一口大に切った「ひと口カツ」、食パンに挟んだカツサンド、ロースカツを卵でとじて黄身を割らないもう1つの卵をのせた「スペシャルカツ丼」も創業者の考案です。家業は有限会社梅林(代表取締役 澁谷昌也)で三代目。羽田空港・ワイキキ・ソウルにフランチャイズ店があります。本店は自社ビルの地下にあります。鹿児島産黒豚、山形の「つや姫」(おかわり自由)、旬のキャベツを使い、ヒレカツサンドは昔ながらの経木の折箱に詰めます。',
  });
}

// ================================================================ てんぷら 近藤
{
  const OWN = 'https://tempura-kondo.com/'; const NIP = 'https://www.nippon.com/ja/people/e00012/';
  const lunch = ['11:30', '15:30'], din = ['17:00', '22:00'];
  put({
    id: 'tokyo3__113', name: 'てんぷら 近藤 (Tempura Kondō)', category: 'MOM_AND_POP',
    lat: 35.671177, lng: 139.763092,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The house's own description begins with its batter: 「小麦粉で作る天ぷらの衣」, tempura batter made from wheat flour. Every course is tempura from the same oil. No gluten-free batter or course is mentioned.",
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: "Vegetables are a house speciality: Kondō pioneered vegetable tempura in fine dining, including a 30-minute sweet potato and shredded-carrot tempura. But the courses also include seafood, fried in the same oil, and the batter recipe beyond wheat flour is not published. Ask when booking whether an all-vegetable course is possible.",
    hours_raw: 'From September 2026: lunch 11:30–15:30 (sittings 11:30 and 13:30, 2 hours each); dinner 17:00–22:00 (sittings 17:00 and 19:30, 2½ hours each). Closed Sundays (and Mondays when a holiday). Reservations required — Japanese form or phone; international guests via the official My Concierge Japan forms.',
    hours: { 0: day(lunch, din), 1: day(lunch, din), 2: day(lunch, din), 3: day(lunch, din), 4: day(lunch, din), 5: day(lunch, din) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Sakaguchi Bldg 9F — 5 min from Ginza Stn',
    cuisine: 'Tempura omakase — Michelin two stars since 2008 · vegetable tempura', cuisine_type: 'tempura',
    website: OWN, gmaps: gm('てんぷら 近藤 東京都中央区銀座5-5-13'), menu_url: OWN,
    notes: "[Mom & Pop · tempura master] Kondō Fumio, born in 1947, joined the tempura kitchen of the Yama-no-ue Hotel in Ochanomizu after high school and became its head chef at 23. He opened his own counter in Ginza in 1991 and, more than 50 years into his career, still fries at the counter himself at lunch and dinner. His batter is cut as thin as possible so it doesn't soak up oil, and he treats tempura as a steamed dish too, timing the carry-over heat inside the batter. Above all he brought vegetables into high-end Edo-mae tempura, which had been seafood-only. His signature is a stump-thick sweet potato fried slowly for about 30 minutes. It has held two Michelin stars since 2008. He was named a 現代の名工 (Contemporary Master Craftsman) in 2019, and in 2023 became the first tempura chef to receive Michelin's Mentor Chef Award. Two counters of 12 and 8 seats, by reservation.",
    chef_bio: {
      chef_name: '近藤文夫 (Kondō Fumio)', roles: ['owner-chef'],
      origin: 'Born Tokyo 1947; trained at てんぷらと和食 山の上 (Yama-no-ue Hotel), head chef at 23; own shop 1991',
      background: "Kondō joined the Yama-no-ue Hotel's tempura restaurant straight out of high school in 1966, became its head chef at 23 and ran its kitchen for over twenty years, making the hotel's name synonymous with tempura. He went independent in Ginza in 1991.",
      philosophy: "「天ぷらは、料理人がゲストをお招きする料理」 — tempura is the cook inviting the guest; and 「天ぷらの本質は蒸し料理」, tempura is at heart a steamed dish.",
      specialty: 'Thin-battered seasonal tempura; vegetables (sweet potato, carrot) as courses in their own right.',
      anecdotes: [
        { text: "Vegetables were once beneath fine tempura — 「元々、天ぷらの世界で、野菜は邪道だったんですよ」 — and he set out to change that so tempura could stand beside sushi as Japan's representative cuisine.", source: NIP },
        { text: 'The sweet potato, thick as a tree stump and more than 10 cm across, fries for about 30 minutes to seal in its moisture and sweetness — his aim was to beat a roasted sweet potato.', source: OWN },
        { text: 'He tastes vegetables on the farm before contracting them, and asks growers to thin a pumpkin vine from five fruits to three so each is better.', source: NIP },
        { text: "The shredded-carrot tempura, fried all at once, is his original.", source: NIP },
        { text: '2019 「現代の名工」 (government award for master craftsmen); 2023 Michelin Mentor Chef Award, the first tempura chef to receive it; Michelin two stars every year since 2008.', source: OWN },
      ],
      japanese_sources_summary: '公式(tempura-kondo.com): 「小麦粉で作る天ぷらの衣が油を吸い過ぎない」「天ぷらの本質は蒸し料理」「天ぷらに野菜を取り入れる重要性」。近藤文夫、1947年生、山の上で23歳で料理長、1991年独立。2019年現代の名工、2023年メンターシェフアワード、ミシュラン2008年より連続2つ星。銀座5-5-13 坂口ビル9F、日曜休(月曜祝日の場合休)、2026年9月以降 昼11:30〜15:30(二部制)・夜17:00〜22:00(二部制)、カウンター12席と8席。コース: 昼 菫13,200円・椿16,500円、夜 藤22,000円・楓27,500円・蓬33,000円(税込)。nippon.com: 1966年山の上ホテル、21年間料理長。',
      confidence: 'high', sources: [OWN, NIP],
    },
    cultural_comfort: { level: 'english', note: 'International guests book through the official multilingual forms (English, Chinese, Korean); phone bookings are Japanese only. Counter seating facing the chef.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: '「小麦粉で作る天ぷらの衣」 — the batter is wheat flour; every course is fried in the same oil.', source: OWN }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Courses mix seafood and vegetable tempura from the same oil.', source: NIP }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-13 坂口ビル9F',
    existence: { status: 'confirmed', checked: TODAY, note: "The restaurant's own site, with hours from September 2026 and an October 2026 booking calendar." },
    pin_source: `GSI 東京都中央区銀座五丁目5番13号 (go) from the shop's own address (${OWN}); single source; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [OWN],
    price_note: "Course prices (tax included) from the restaurant's own site. The dishes in each course are the chef's seasonal choice.", last_checked: TODAY, items: [
      it('菫', 'sumire', 'Lunch course "Sumire"', '¥13,200', 'Lunch', 'no', 'ask', 'Wheat-flour batter.', 'course_sumire'),
      it('椿', 'tsubaki', 'Lunch course "Tsubaki"', '¥16,500', 'Lunch', 'no', 'ask', '', 'course_tsubaki'),
      it('藤', 'fuji', 'Dinner course "Fuji"', '¥22,000', 'Dinner', 'no', 'ask', '', 'course_fuji'),
      it('楓', 'kaede', 'Dinner course "Kaede"', '¥27,500', 'Dinner', 'no', 'ask', '', 'course_kaede'),
      it('蓬', 'yomogi', 'Dinner course "Yomogi"', '¥33,000', 'Dinner', 'no', 'ask', '', 'course_yomogi'),
    ] }, {
    cuisine: '天ぷらのおまかせ・ミシュラン2008年より二つ星・野菜の天ぷら',
    neighborhood: '銀座五丁目、坂口ビル9F。銀座駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。店自身の紹介文は「小麦粉で作る天ぷらの衣」から始まります。どのコースも同じ油で揚げる天ぷらで、グルテンフリーの衣やコースはどの情報源にも見当たりません。',
    vegan_detail: '野菜は店の看板です。近藤さんは高級天ぷらに野菜を取り入れた先駆けで、30分かけて揚げるさつまいもや、細切りにんじんの天ぷらがあります。ただしコースには魚介も含まれ、同じ油で揚げます。衣も小麦粉以外の材料は公表されていません。予約時に、野菜だけのコースが可能か確認してください。',
    notes: '[個人店・天ぷらの名匠] 1947年生まれの近藤文夫さんは、高校卒業後に御茶ノ水・山の上ホテルの天ぷら店に入り、23歳で料理長に。1991年に銀座で独立し、職人歴50年を超えた今も昼夜自らカウンターに立って揚げます。衣は油を吸い過ぎないよう極限まで薄くし、天ぷらは「蒸し料理」でもあるとして、衣の中の余熱まで計算します。何より、魚介中心だった高級な江戸前天ぷらに野菜を取り入れました。代表作は切り株のように太いさつまいもを30分ほどかけて揚げる一品。ミシュランは2008年から二つ星、2019年に「現代の名工」、2023年には天ぷら職人として初めてミシュランの「メンターシェフアワード」を受賞しました。カウンター12席と8席、予約制。',
  });
}

save();
