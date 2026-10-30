// Osaka sweep (2-mile circle around Dotonbori), batch 207 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1.3 km.
//   + 新鮮処ととろ Shinsen Dokoro Totoro (horse sashimi and the winter monkfish-liver hot pot, regional sake; Shinmachi 2-chome)
//   + 新町あだち Shinmachi Adachi (seven-seat kaiseki counter, Michelin Guide listed; Shinmachi 3-chome) — once passed over only
//     because the name sounds like a person's; researched like any other.
//   + 喫茶ことり Kissa Kotori (kissa with breakfast toast, mushroom omurice and a daily plate lunch; Minamihorie 4-chome)
//   + 中華食堂ノロマツ Chuka Shokudo Noromatsu (machi-chuka diner, fried rice and yakisoba; Uehommachi Haihai Town B1F)
//     Chain check: the second shop of 野呂松飯店 in Toyonaka (goguynet Tennoji, 16 June 2026: 「野呂松飯店」の2号店), a franchise
//     shop supervised by it (ameblo terunaruharu, 15 July 2026: 野呂松飯店さん監修のFC店) — two shops, not a fast-growing chain.
//     Ramen decision: NO ramen block. The shop text and opening coverage name fried rice and yakisoba as the two signatures
//     (kansai-kaiten, 15 July 2026: 2大名物の焼きめし＆焼きそば); all eight fetched reviews centre on them, chuka soba is one
//     noodle dish among miso and stamina ramen, tenshinhan and gyoza. cuisine_type 'other', like 珉龍 長堀店 (osaka_minryu_nagahori).
//   Chain check for all four: no ととろ/あだち/ことり/ノロマツ (or romaji) in data/osaka.json; ことりすまいる in shops.jsonl is a different shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 207);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 新鮮処ととろ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000780/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://shinsendokoro-totoro.hp4u.jp/'; const MENU = SITE + 'menu'; const CAMP = SITE + 'campaign'; const NEWS = SITE + 'news'; const SAKE = SITE + 'alcohol';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_shinsen_dokoro_totoro_shinmachi', name: '新鮮処ととろ (Shinsen Dokoro Totoro)', category: 'OMNI',
    lat: 34.677122, lng: 135.490733, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Horse sashimi comes with a soy sauce made for it (December 2021 review), the hot pots are built on dashi and finish with udon, and the menu has tempura, kara-age and fried fugu; salt-grilled chicken, grilled eggplant and chilled tofu are on the menu too, but nothing is described as wheat-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya built on horse meat, Miyazaki chicken, fish and shellfish, with a monkfish-liver hot pot. A few vegetable sides (pickled cucumber, grilled eggplant, chilled tofu, edamame) are listed, with no information on dashi or seasoning.',
    hours_raw: 'Daily 18:00–22:30, closing time approximate and earlier when ingredients run out; last order 22:00, horse-meat dishes 21:30 (shop website; Tabelog). No regular closing day, temporary closures announced on the website calendar (shop website). Closed from 1 July 2026 for illness and recovery and reopened on Tuesday 20 October 2026; closed Tuesday 27 October 2026 (shop notice, 14 October 2026; Tabelog). Earlier closures: late August to 10 October 2025 (staff illness) and spring 2026 (surgery and recovery) (shop notices). Reservations recommended; horse sashimi takes 40 minutes to an hour if ordered on the day, so reserve it, and the hot-pot sets need booking by the day before (shop website). A two-dish otoshi (¥550) is served first (shop website). Cash only; Osaka City premium gift certificates accepted (shop website; Tabelog). 17 seats, all tables since a September 2018 renovation; private use up to 20 (Tabelog). Smoking allowed, so under-20s cannot enter (shop notice, 2020; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-17-10 — 5 min from Nishi-Ohashi Stn (Exit 1), 7 min from Nishi-Nagahori Stn (Exit 1)',
    cuisine: 'Neighbourhood izakaya for horse meat, seasonal hot pots and regional sake (17 seats) · horse sashimi from Kumamoto: lean, tongue, futaego, tategami, barahimo, raw liver (reserve), platters of three to five cuts, sakura-toro rice bowl · autumn–winter: monkfish hot pot thick with dissolved monkfish liver, finished with udon and zosui; spring: moray eel from Kochi; summer: live hamo and Awaji onion hot pot · Miyazaki jidori grilled with salt · fried fugu, fugu skin, whale bacon, grilled yellowtail collar, tempura, kara-age · oysters from Kurahashi-jima (winter) and Oki (rock oysters); fish from Onagawa and Yawatahama · rotating regional sake by the glass, Ozeki junmai daiginjo drawn from a keg, shochu bottle keep',
    website: SITE, gmaps: gm('新鮮処ととろ 新町'), menu_url: MENU,
    notes: "[Izakaya · Shinmachi, horse sashimi and the monkfish-liver hot pot] A homely table-seat izakaya west of Nishi-Ohashi, known for two things. One is horse sashimi from Kumamoto, cut to order in up to five kinds, including tongue, futaego and the mane fat; it takes up to an hour to thaw and slice, so reserve it with your table. The other is the autumn–winter monkfish hot pot, a broth made thick with a great deal of dissolved monkfish liver; follow the house way of cooking it, and finish with udon and rice porridge. One diner booked a month ahead for it, and a March 2024 diner saw walk-ins turned away, so phone first. From 28 October 2026 the pot is ¥5,700 a person (two minimum), or ¥7,000 with a horse sashimi platter; the head cook can only fillet so many monkfish this season, so it sells out. Summer brings a live hamo and Awaji onion hot pot, spring moray eel from Kochi. The fridge holds rotating sake from small breweries, and the walls carry signed photos of visiting celebrities; the late actor Haruma Miura came three times. Cash only, smoking allowed, adults only.",
    chef_bio: { chef_name: null, roles: ['Head cook (大将, who fillets the monkfish, per the shop website)', 'Run by an elderly couple (August 2022 review)'], origin: null, background: 'Izakaya run by the small company 有限会社アイランド・フィールド (shop website). An August 2022 diner describes "an elderly couple who work hard together"; a December 2021 diner felt "a warm motherly presence". Ingredients come direct from the source: horse meat from Kumamoto, jidori from Miyazaki, winter oysters from Kurahashi-jima (Hiroshima), rock oysters from Oki (Shimane), fish from Onagawa (Miyagi) and Yawatahama (Ehime) (shop website). Chosen by Ozeki as one of 100 shops in Japan to pour its keg-fresh junmai daiginjo (shop notice, May 2026). Long closures in 2025 and 2026 for illness and surgery; reopened 20 October 2026 (shop notices).', philosophy: 'Seasonal ingredients and regional sake, open every day (shop website).', specialty: 'Monkfish-liver hot pot; Kumamoto horse sashimi.',
      anecdotes: [
        { text: '"Upon arrival, I was warmly welcomed by the kind chef who shared heartwarming stories about Haruma Miura." — August 2022.', source: R + 'B452335199/' },
        { text: '"I really appreciated the service of adding more liver broth without hesitation when the pot\'s broth got low!" — February 2025, second visit in ten days.', source: R + 'B501340828/' },
        { text: '"I noticed that all walk-in customers were being turned away... I\'m so glad I made a reservation!" — March 2024.', source: R + 'B481162311/' },
      ],
      japanese_sources_summary: '食べログ: 新鮮処ととろ、大阪市西区新町2-17-10、西大橋駅1番出口から徒歩5分、西長堀駅1番出口から徒歩7分、毎日18:00〜22:30 (閉店は目安で食材がなくなれば早めに閉店)、10月20日の火曜から入院・療養明けで営業再開、10月27日の火曜は臨時休業、予約可、カード・電子マネー・QR不可、お通しあり、17席 (2018年9月の改装で全席テーブル)、貸切20人まで、喫煙可で20歳未満は入店不可、大阪市プレミアム付き商品券は2027年1月15日まで使用可。店のサイト: 有限会社アイランド・フィールド、営業時間18:00〜22:30 (閉店時間は目安)、ラストオーダー22:00 (馬肉料理21:30)、無休 (臨時休業あり)、現金のみ、最初にお通し2品550円、馬肉は熊本県、地鶏は宮崎県、冬の真がきは広島県倉橋島、岩がきは島根県隠岐の島、鮮魚は宮城県女川漁港や愛媛県八幡浜などから産地直送、小さな蔵元の珍しい地酒を季節ごとに。桜肉の刺身: タン、バラひも、フタエゴ各1500円、生レバー2600円 (予約優先)、赤身1700円、タテガミ1500円、桜トロ丼1600円、3種盛3500円・4種盛4000円・5種盛4600円、当日の注文は40分〜1時間かかる。地鶏の名物 もも塩焼900円。ふぐ唐揚げ990円、ふぐの皮の湯引き、くじらベーコン、ぶりかま塩焼、えびの天ぷら、とり唐揚げ、焼き味噌 (そばの実入り)。2026年10月28日から秋冬の名物 あんこう肝だらけ鍋、1人前5700円、馬刺し盛り合わせとのセット1人前7000円、どちらも2人前から、セットは前日までの予約、大将があんこうをさばける数に限りがあり売り切れ御免。夏は活きたはもと玉ねぎの淡路島鍋、春は高知県産のうつぼ。大関の純米大吟醸 蔵出し生原酒を国内100店舗限定で提供 (2026年5月)、地酒はグラス90mlと片口徳利1合。2025年8月の終わりから10月10日までスタッフの体調不良で休業、2026年春は手術・療養で休業、2026年7月1日から病気療養で休業し10月20日に再開。口コミ(2021年12月〜2026年3月): あんこう肝だらけ鍋は濃厚、店のやり方どおりに半分を火をつけずに入れる、締めのうどんと雑炊、だしが減ると肝のだしを足してくれる、馬刺し専用の醤油、1か月前に予約、予約なしの客は断られていた、有名人のサイン入り写真、Haruma Miura が3回来店、年配のご夫婦が営む、あたたかい母のような雰囲気、テーブル席のみでもひとりで入れる、カード不可、1人8000円〜1万円ほど。',
      confidence: 'medium', sources: [TB, SITE, MENU, CAMP, NEWS, SAKE, R + 'B328176698/', R + 'B443710751/', R + 'B452335199/', R + 'B481162311/', R + 'B482143377/', R + 'B497346456/', R + 'B501340828/', R + 'B516833276/', R + 'B527129352/', R + 'B529349962/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese menu and phone bookings; reserve the hot pot and horse sashimi in advance; cash only (2026).' },
    safety: { ...SAFETY0, soy_sauce_wheat: [
      { text: 'Horse sashimi is served with a soy sauce made specially for it (December 2021 review).', source: R + 'B443710751/' },
    ] },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町2-17-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member) with the 20 October 2026 reopening notice; shop website notices dated 14 and 23 October 2026; latest reviews March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目17番10号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, CAMP],
    price_note: 'Prices from the shop website menu and campaign page (read 2026-10-30, tax included); availability changes with supply.', last_checked: TODAY, items: [
      it('あんこう肝だらけ鍋', '', 'Monkfish hot pot loaded with monkfish liver (per person, 2 minimum; from 28 October 2026)', '¥5,700', 'Hot pot', 'ask', 'no', 'Autumn–winter; sells out, reserve. Finished with udon and zosui (February 2026 review).', 'ankimo_nabe'),
      it('', '', 'Monkfish-liver hot pot + horse sashimi platter set (per person, 2 minimum)', '¥7,000', 'Hot pot', 'ask', 'no', 'Reserve by the day before (shop website).', 'nabe_set'),
      it('馬刺し盛り', '', 'Horse sashimi platter, 3 kinds (lean, futaego, tongue)', '¥3,500', 'Horse meat', 'ask', 'no', 'Four kinds ¥4,000, five ¥4,600; 40–60 minutes if ordered on the day.', 'basashi3'),
      it('赤身刺し', '', 'Lean horse sashimi', '¥1,700', 'Horse meat', 'ask', 'no', 'Kumamoto horse meat (shop website).', 'akami'),
      it('生レバー', '', 'Raw horse liver (reservation priority)', '¥2,600', 'Horse meat', 'ask', 'no', '', 'raw_liver'),
      it('もも塩焼', '', 'Salt-grilled Miyazaki jidori thigh', '¥900', 'Jidori', 'ask', 'no', 'Mini size ¥600.', 'momo_shioyaki'),
      it('ふぐ唐揚げ', '', 'Fried fugu', '¥990', 'À la carte', 'no', 'no', '', 'fugu_karaage'),
    ] }, {
    cuisine: '馬肉、季節の鍋、地酒の町の居酒屋 (17席)・熊本の馬刺し: 赤身、タン、フタエゴ、タテガミ、バラひも、生レバー (予約)、3〜5種の盛り合わせ、桜トロ丼・秋冬: あん肝をたっぷり溶いただしのあんこう肝だらけ鍋、締めはうどんと雑炊・春: 高知のうつぼ・夏: 活はもと玉ねぎの淡路島鍋・宮崎の地鶏の塩焼き・ふぐ唐揚げ、ふぐ皮湯引き、くじらベーコン、ぶりかま塩焼、天ぷら、唐揚げ・倉橋島の真がき (冬)、隠岐の岩がき、女川や八幡浜の鮮魚・季節替わりの地酒をグラスで、大関の純米大吟醸 蔵出し生原酒、焼酎のボトルキープ',
    neighborhood: '新町2-17-10。西大橋駅1番出口から徒歩5分、西長堀駅1番出口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。馬刺しには専用の醤油 (2021年12月の口コミ)、鍋はだしベースで締めはうどん、天ぷら、唐揚げ、ふぐ唐揚げも。塩焼きの地鶏、焼なす、冷奴もあるが、小麦なしと書かれた品はない。',
    vegan_detail: 'ヴィーガンではありません。馬肉、宮崎の地鶏、魚介とあん肝の鍋が中心の居酒屋。きゅうり一本漬、焼なす、冷奴、枝豆などの野菜の品もあるが、だしや味付けの情報はなし。',
    notes: '[居酒屋・新町、馬刺しとあんこう肝だらけ鍋] 西大橋の西にある、テーブル席の家庭的な居酒屋。名物はふたつ。ひとつは熊本の馬刺しで、タン、フタエゴ、タテガミなど最大5種を注文を受けてから切る。解凍と仕込みに1時間ほどかかるので、席と一緒に予約を。もうひとつは秋冬のあんこう肝だらけ鍋で、大量のあん肝を溶いた濃厚なだし。店のやり方どおりに煮て、締めはうどんと雑炊。1か月前に予約したという声も、予約なしの客が断られていたという声もあるので、まず電話を。2026年10月28日からは1人前5700円 (2人前から)、馬刺し盛り合わせとのセットは7000円。今季は大将があんこうを捌ける数に限りがあり、売り切れ御免。夏は活はもと玉ねぎの淡路島鍋、春は高知のうつぼ。冷蔵庫には小さな蔵元の地酒が入れ替わりで並び、壁には来店した有名人のサイン入り写真。故 Haruma Miura も3回訪れたという。現金のみ、喫煙可、20歳未満は入店不可。',
  });
}

// ================================================================ 新町あだち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27116560/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shinmachi-adachi.com/'; const TC = 'https://www.tablecheck.com/ja/shops/shinmachi-adachi/reserve';
  const MICH = 'https://guide.michelin.com/en/osaka-region/osaka/restaurant/shimmachi-adachi';
  put({
    id: 'osaka_shinmachi_adachi', name: '新町あだち (Shinmachi Adachi)', category: 'MOM_AND_POP',
    lat: 34.677108, lng: 135.488927, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks for allergies in the reservation request and says it may not be able to handle them on the day. No gluten information; the courses run on dashi with sashimi soy sauce and ponzu, and include tempura and fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fixed seasonal kaiseki course built on dashi, fish, shellfish and Japanese beef.',
    hours_raw: 'Dinner Mon–Sat in two seatings, entry at 18:00 or 19:00 (first) and 20:30 (second); all guests at a seating start together; closing time not published (shop website; Tabelog). Lunch Wednesday and Saturday only, everyone starting at 12:00; on Tuesday, Thursday and Friday lunch can be booked privately by groups of four or more (shop website; Tabelog). Closed Sundays, public holidays and the 1st of each month, when the menu and tableware change (Tabelog; the website lists Sundays and holidays). The hours grid shows start times only. Reservations by phone or online (TableCheck, Ikyu); arrive on time, since late arrivals may get fewer dishes; tell the shop about allergies and dislikes when booking (Tabelog; TableCheck). Cancellations 50% the day before, 100% on the day (Tabelog; shop website). Service charge 5% at lunch, 10% at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 7 counter seats; non-smoking; private use for up to 7 (Tabelog; shop website). Opened 28 February 2020 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 3-8-10, 1F, the quiet west end of Shinmachi — 3 min from Nishi-Nagahori Stn (Exit 1), 7 min from Awaza Stn',
    cuisine: 'Seven-seat kaiseki counter, an omakase course that changes monthly with the season and the yearly festivals (Michelin Guide listed) · dinner ¥16,500 for ten courses, or ¥9,900 for eight at the 20:30 seating; lunch ¥9,900 for eight (Wednesday and Saturday); December ¥19,800 / ¥12,100; tax included, service extra · a typical course: appetizer, a small rice dish, soup, sashimi, hassun, a substantial dish, a single dish, fried dish, clay-pot rice, dessert · examples (2026): sea urchin and shrimp with jelly, steamed abalone rice with liver sauce, young-eel and winter-melon soup, red sea urchin and needle squid sashimi, Miyazaki beef with matsutake, hamo tempura, grilled ayu, seasonal clay-pot rice with house chirimen sansho, dashimaki, warabi mochi · a wide sake list by the glass, including rare labels and Jikon; sake cups to choose from, Old Baccarat among them',
    website: SITE, gmaps: gm('新町あだち'), menu_url: TC,
    notes: "[Kaiseki · Shinmachi, a seven-seat counter that cooks the calendar] A calm counter with tea-ceremony utensils, tucked into the west end of Shinmachi, open since 2020 and in the Michelin Guide within a year. The owner loves Japan's traditional culture and builds each monthly course around the season and its customs: New Year, Setsubun, the Doll Festival, a moon-viewing dish in autumn, chrysanthemums for the Double Ninth in September, Tanabata strips on the July hassun. The menu card lists only the ingredients, so part of the fun is learning how to read them, and the tableware changes with the month. Expect careful dashi, very fresh fish (one diner tasted red sea urchin, Akashi sea bream and needle squid in October 2026), Miyazaki or Kagoshima beef with mushroom sauces, and a clay-pot rice blended for the shop, with leftovers made into rice balls to take home. Everyone at a seating starts together, so be on time; the 20:30 seating offers a shorter, cheaper course. Diners describe a lively, entertaining chef and a deep sake list by the glass, with a choice of sake cups.",
    chef_bio: { chef_name: 'Adachi', roles: ['Owner (named as "Mr. Adachi" in an August 2026 review)', 'Chef, cooking with apprentices (July 2026 review)'], origin: null, background: 'Opened Shinmachi Adachi on 28 February 2020 (Tabelog) and was featured in the Michelin Guide within a year of opening (Tabelog, shop-provided); listed in the Michelin Guide with no star (Michelin Guide). The shop text describes a chef adding personal twists to dishes learned in training, and a sake-loving owner who picks rare labels such as Jikon (Tabelog, shop-provided).', philosophy: '"Because we were born and raised in Japan, we want guests to touch the culture and customs handed down from long ago" (shop website). The Michelin Guide calls the owner a lover of traditional Japanese culture who weaves New Year, Setsubun and the Doll Festival into the menu (Michelin Guide).', specialty: 'Monthly seasonal kaiseki; clay-pot rice; seasonal tableware.',
      anecdotes: [
        { text: '"I found myself going back for more. Seeing this, the chef kindly prepared a dashimaki (Japanese omelette) as a complimentary dish." — October 2026, 20:30 course.', source: R + 'B531807093/' },
        { text: '"The chef\'s passion for the food was evident." — July 2026, the 20:30 seating.', source: R + 'B531807093/' },
        { text: '"I was excited to choose from a variety of beautiful sake cups, ranging from glass to ceramic." — October 2026.', source: R + 'B537157946/' },
      ],
      japanese_sources_summary: '食べログ: 新町あだち、大阪市西区新町3-8-10 エステムコート大阪新町 1F、西長堀駅1番出口から徒歩3分、阿波座駅から徒歩7分、昼は水曜・土曜のみ12:00一斉スタート、火・木・金は4名以上で貸切可、夜は月曜〜土曜、1部18:00か19:00、2部20:30、日曜・祝日・毎月1日 (献立と器の入れ替え) 休み、予約可、アレルギーや苦手なものは予約のリクエスト欄に、当日の食材変更は不可、遅れると品数が減ることも、前日のキャンセル50%・当日100%、サービス料 昼5%・夜10%、カード可、電子マネー・QR不可、カウンター7席、禁煙、貸切可、オープン日2020年2月28日。店の紹介: 月替わりの旬の献立と器、修業で学んだ料理に独自の工夫、開店1年でミシュランガイドに掲載、日本酒好きの店主が純米大吟醸やJikon などの希少な銘柄から季節限定まで揃える。店のサイト: 一日七席、日本で生まれ育ったからこそ古くより受け継がれてきた文化や風習に触れていただきたい、入店は18:00・19:00・20:30で入れ替え制ではない、おまかせコース16500円 (前菜、お凌ぎ、お椀、お造り、八寸、強肴、一品、揚物、食事、甘味)、品書きには敢えて食材の名前だけ、器も月替わり、酒器はオールドバカラなど、土鍋ご飯の米は当店専用のブレンド、昼9900円、日曜・祝日休み。TableCheck: 昼の懐石9900円 (8品)、夜の懐石16500円 (10品)、2部20:30限定の9900円 (8品)、12月は夜19800円・昼12100円 (セコガニなど)、アレルギー・苦手なものは詳細を、当日だと対応できない場合も。ミシュランガイド: 日本の伝統文化を愛する主人、正月、節分、ひな祭りといった暮らしの文化を献立に織り込む。口コミ(2026年5月〜10月): Adachi さんが店主、茶道具を飾ったカウンター、全員一斉スタート、5月の端午の節句、7月の七夕の八寸、9月の重陽の節句の菊、10月のお月見、ムラサキウニ、アワビの蒸しご飯と肝のソース、赤ウニ、明石の鯛、剣先イカ、鮎の塩焼き、ハモの天ぷら、宮崎の牛と松茸、鹿児島の牛ときのこのソース、土鍋ご飯、ちりめん山椒、残りのご飯をおにぎりにして持ち帰り、ご飯のおかわりに出汁巻をサービス、グラスで頼める日本酒、ガラスや陶器の酒器から選ぶ、にぎやかで楽しい大将と弟子たち、京都にいるような繊細な味。',
      confidence: 'medium', sources: [TB, SITE, TC, MICH, R + 'B528781652/', R + 'B531389322/', R + 'B531807093/', R + 'B534452609/', R + 'B534495007/', R + 'B535652720/', R + 'B536202960/', R + 'B537157946/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase course, nothing to order; book online (TableCheck or Ikyu) and list allergies there; arrive on time (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [
      { text: 'Allergies and dislikes must be given in the reservation request; ingredient changes cannot be made on the day (Tabelog listing; TableCheck booking page).', source: TC },
    ] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町3-8-10 エステムコート大阪新町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated May–October 2026; online booking open (TableCheck).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町三丁目8番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TC, R + 'B535652720/'],
    price_note: 'Course prices from the shop website and TableCheck (read 2026-10-30), tax included, service charge extra; the ¥16,500 dinner also in a September 2026 review.', last_checked: TODAY, items: [
      it('夜の懐石', '', 'Dinner kaiseki, 10 courses', '¥16,500', 'Course', 'ask', 'no', 'December ¥19,800 (TableCheck).', 'dinner'),
      it('', '', 'Dinner kaiseki, 8 courses (20:30 seating only, 2 or more)', '¥9,900', 'Course', 'ask', 'no', 'TableCheck.', 'dinner_late'),
      it('昼の懐石', '', 'Lunch kaiseki, 8 courses (Wednesday and Saturday)', '¥9,900', 'Course', 'ask', 'no', 'December ¥12,100 (TableCheck).', 'lunch'),
    ] }, {
    cuisine: '一日七席のカウンターの日本料理、季節と年中行事で月替わりのおまかせコース (ミシュランガイド掲載)・夜は10品16500円、2部20:30は8品9900円、昼は8品9900円 (水曜・土曜)、12月は19800円・12100円、税込・サービス料別・コースの流れ: 前菜、お凌ぎ、お椀、お造り、八寸、強肴、一品、揚物、食事、甘味・例 (2026年): ウニと海老のジュレ、アワビの蒸しご飯と肝のソース、冬瓜のお椀、赤ウニと剣先イカのお造り、宮崎牛と松茸、ハモの天ぷら、鮎の塩焼き、季節の土鍋ご飯とちりめん山椒、出汁巻、わらび餅・グラスで頼める日本酒が豊富、Jikon などの希少な銘柄、オールドバカラをはじめとした酒器から選べる',
    neighborhood: '新町3-8-10 1F、新町の西の静かな一角。西長堀駅1番出口から徒歩3分、阿波座駅から徒歩7分',
    gf_detail: '要確認。アレルギーは予約のリクエスト欄に。当日は対応できない場合があると店。グルテンの情報はなく、コースはだしが基本で、お造りに醤油やポン酢、天ぷらや揚物も。',
    vegan_detail: 'ヴィーガンではありません。だし、魚介、和牛が中心の季節のおまかせコースのみ。',
    notes: '[日本料理・新町、暦を料理にする七席のカウンター] 新町の西の端にひっそりとある、茶道具を飾った落ち着いたカウンター。2020年に開店し、1年でミシュランガイドに掲載された。日本の伝統文化を愛する店主が、季節と行事を軸に毎月のコースを組む。正月、節分、ひな祭り、秋のお月見、9月の重陽の節句の菊、7月の八寸には七夕の短冊。品書きには食材の名前だけが書かれていて、その読み方を知るのも楽しみのひとつ。器も月替わり。丁寧なだし、新鮮な魚 (2026年10月には赤ウニ、明石の鯛、剣先イカ)、宮崎や鹿児島の牛ときのこのソース、店専用にブレンドした米の土鍋ご飯。残ったご飯はおにぎりにして持たせてくれる。各回とも全員一斉スタートなので時間どおりに。20:30の2部には品数を減らした手頃なコースもある。にぎやかで楽しい大将と、グラスで頼める豊富な日本酒、並んだ酒器から好きな盃を選べるという声。',
  });
}

// ================================================================ 喫茶ことり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27015672/'; const R = TB + 'dtlrvwlst/';
  const W = day(['08:30', '19:00']); const E = day(['08:30', '18:30']);
  put({
    id: 'osaka_kissa_kotori_minamihorie', name: '喫茶ことり (Kissa Kotori)', category: 'OMNI',
    lat: 34.671575, lng: 135.48554, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; breakfast is toast and French toast, and the lunch plates often include fried dishes (shiso-cheese chicken fry, menchi katsu, stuffed lotus root).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice with sausage and egg, chicken curry, and daily plates built around chicken, pork or hamburg steak; no vegan dishes described.',
    hours_raw: 'Mon, Wed–Fri 8:30–19:00 (last order 18:30); Sat, Sun and holidays 8:30–18:30 (last order 18:00); closed Tuesday and some other days; hours may change (Tabelog). Breakfast 8:30–11:00, lunch from 11:30 for the rest of the day; a drink with lunch is +¥100 from 11:30 to 14:30 (Tabelog). No reservations (Tabelog). Cash only (Tabelog; April 2026 review). 17 seats, counter and tables; non-smoking (Tabelog). Full around lunchtime, even near 14:00 (March and April 2025 reviews).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minamihorie 4-10-5, 1F, near a park — about 5 min from Nishi-Nagahori Stn, 400 m from Shiomibashi Stn',
    cuisine: 'Retro-cute kissa for breakfast and home-style lunch (17 seats) · breakfast to 11:00: buttered toast set with drink and boiled egg from ¥500, nori-cheese toast, French toast with maple syrup and cinnamon · lunch from 11:30: mushroom omurice with sausage and a side salad, chicken curry, daily plate (a main such as teriyaki pork-and-vegetable rolls, shiso-cheese chicken fry or grated-daikon hamburg steak, with potato salad, small sides, miso soup and salad) · seasonal pudding (pumpkin in October 2026), homemade cookies and cakes · coffee, hassaku lemonade',
    website: null, gmaps: gm('喫茶ことり 南堀江'), menu_url: null,
    notes: "[Kissa · Minamihorie, omurice and a daily plate that tastes like home] A small corner café with a retro interior of old school-style chairs, soft light from a little window onto the park, and a following among neighbours and office workers alike; it has been around since at least 2017. Mornings bring buttered toast sets from ¥500, a nori-and-cheese toast and a fluffy French toast you season yourself with maple syrup and cinnamon. From 11:30 the draw is the mushroom omurice, chicken rice packed with shimeji and sausage under a soft omelette (¥850 in October 2026), or the daily plate (¥950 in December 2025): a main like teriyaki pork rolled around vegetables or a shiso-and-cheese chicken fry, with a generous potato salad, small home-style sides, miso soup and salad. One couple has eaten here nine times since 2020 and still calls it a favourite. Finish with a seasonal pudding or a homemade cookie. Cash only, closed Tuesdays, and it fills up at lunch.",
    chef_bio: { chef_name: null, roles: ['Run by two women (September 2020 review)'], origin: null, background: 'Neighbourhood kissa open since at least 2017 (a diner\'s first visit, August 2017). A September 2020 diner noted that it is "run by two women" and praised the cooking behind an ordinary-looking front.', philosophy: null, specialty: 'Mushroom omurice; the daily plate lunch.',
      anecdotes: [
        { text: '"From the outside, it looks like an ordinary café, but it has remarkable culinary skills." — September 2020, daily plate ¥1,000 with coffee.', source: R + 'B430205594/' },
        { text: '"I felt relaxed in the soft sunlight filtering through the small window from the park." — December 2024, daily plate ¥900.', source: R + 'B502704863/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶ことり、大阪市西区南堀江4-10-5 石村ビル1F、汐見橋駅から412m、月・水・木・金8:30〜19:00 (L.O. 18:30)、土日祝8:30〜18:30 (L.O. 18:00)、火曜休み、ほか不定休、モーニング8:30〜11:00、ランチは11:30から終日、11:30〜14:30はドリンクセット+100円、予約不可、カード・電子マネー・QR不可、17席、カウンターあり、禁煙。口コミ(2017年8月〜2026年10月): 西長堀駅から徒歩5分ほど、レトロでかわいい店内、学校の椅子のような椅子、公園側の小さな窓からの光、モーニングはバタートーストのセット (ドリンクとゆで卵付き) 500円から、海苔チーズトースト600円 (2025年3月)、フレンチトーストとメープルシロップとシナモン、きのこのオムライス850円 (2026年10月、2021〜2024年は800円) はしめじとソーセージのチキンライス、サラダ付き、チキンカレー、日替わりプレート950円 (2025年12月、2024年12月は900円) は豚肉の野菜巻き照り焼き、鶏むねの大葉チーズフライ、おろしハンバーグ、メンチカツなどにポテトサラダ、小鉢、味噌汁、サラダ、かぼちゃのプリン (2026年10月)、手作りのクッキー、八朔レモネード、現金のみ、昼は満席のことも、女性ふたりで営業 (2020年9月)、焼き菓子のあたりが散らかっていたという声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B291173933/', R + 'B430205594/', R + 'B502704863/', R + 'B504087174/', R + 'B507770344/', R + 'B510238931/', R + 'B512015981/', R + 'B525904351/', R + 'B532701866/', R + 'B535778848/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small neighbourhood café; menu board in Japanese; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江4-10-5 石村ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February, April, July and October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江四丁目10番5号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B430205594/', R + 'B504087174/', R + 'B502704863/'],
    price_note: 'Prices from reviews dated March 2025 to October 2026.', last_checked: TODAY, items: [
      it('', '', 'Mushroom omurice with salad', '¥850', 'Lunch', 'ask', 'no', 'October 2026 (¥800 in 2021–2024).', 'omurice'),
      it('', '', 'Daily plate lunch', '¥950', 'Lunch', 'ask', 'no', 'December 2025; main changes daily.', 'daily_plate'),
      it('', '', 'Chicken curry with hot coffee', '¥1,000', 'Lunch', 'ask', 'no', 'March 2022.', 'curry'),
      it('', '', 'Nori-cheese toast morning set with drink', '¥600', 'Breakfast', 'no', 'no', 'March 2025; buttered toast sets from ¥500.', 'nori_toast'),
      it('', '', 'French toast set with coffee', '', 'Breakfast', 'no', 'no', 'August 2025.', 'french_toast'),
    ] }, {
    cuisine: 'レトロでかわいい喫茶のモーニングと家庭的なランチ (17席)・モーニング (11時まで): ドリンクとゆで卵付きのバタートーストのセット500円から、海苔チーズトースト、メープルシロップとシナモンのフレンチトースト・ランチ (11時半から): しめじとソーセージのきのこのオムライス (サラダ付き)、チキンカレー、日替わりプレート (豚肉の野菜巻き照り焼き、鶏むねの大葉チーズフライ、おろしハンバーグなどに、ポテトサラダ、小鉢、味噌汁、サラダ)・季節のプリン (2026年10月はかぼちゃ)、手作りのクッキーやケーキ・コーヒー、八朔レモネード',
    neighborhood: '南堀江4-10-5 1F、公園のそば。西長堀駅から徒歩5分ほど、汐見橋駅から400m',
    gf_detail: '要確認。グルテンの情報なし。モーニングはトーストとフレンチトースト、ランチのプレートには大葉チーズフライやメンチカツ、れんこんのはさみ揚げなどの揚げ物も多い。',
    vegan_detail: 'ヴィーガンではありません。ソーセージと卵のオムライス、チキンカレー、鶏や豚やハンバーグの日替わりプレートが中心で、ヴィーガンの品の情報はなし。',
    notes: '[喫茶・南堀江、オムライスと家庭の味の日替わりプレート] 学校の椅子のようなレトロな椅子が並び、公園側の小さな窓からやわらかい光が入る角の小さな喫茶店。近所の人にも会社員にも通う人が多く、少なくとも2017年から続く。朝は500円からのバタートーストのセット、海苔とチーズのトースト、メープルシロップとシナモンを好みでかけるふわふわのフレンチトースト。11時半からの目当ては、しめじとソーセージたっぷりのチキンライスをやわらかい卵で包んだきのこのオムライス (2026年10月で850円)、または日替わりプレート (2025年12月で950円)。豚肉の野菜巻き照り焼きや鶏むねの大葉チーズフライなどに、たっぷりのポテトサラダ、家庭的な小鉢、味噌汁、サラダが付く。2020年から9回通う夫婦もいまだにお気に入りという。締めは季節のプリンか手作りのクッキーを。現金のみ、火曜休み、昼は満席になることも。',
  });
}

// ================================================================ 中華食堂ノロマツ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270205/27157386/'; const R = TB + 'dtlrvwlst/';
  const GOGUY1 = 'https://tennoji-ku.goguynet.jp/2026/06/16/noromatsu/'; const GOGUY2 = 'https://tennoji-ku.goguynet.jp/2026/07/20/noromatsu-2/';
  const KAITEN = 'https://kansai-kaiten.com/noromatsu-uehommachihihitown2607/'; const AMEBA = 'https://ameblo.jp/terunaruharu/entry-12972753469.html';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_chuka_shokudo_noromatsu_uehonmachi', name: '中華食堂ノロマツ (Chuka Shokudo Noromatsu)', category: 'OMNI',
    lat: 34.66564, lng: 135.518788, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Chinese diner of wheat noodles (yakisoba, chuka soba), gyoza and soy-based sauces; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried rice with meat, pork yakisoba, a pork-and-chicken soy broth, gyoza, sweet and sour pork; no vegan dishes described.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–22:00 (last order 21:30); closing days may vary (Tabelog). Opened 15 July 2026 (Tabelog), with a ¥500 yakisoba and fried-rice set for the first three days (opening coverage). A short wait at Saturday lunch and a line by mid-evening (October 2026 reviews). Order by QR code (October 2026 reviews). Reservations accepted; take-out and delivery (Tabelog). Cards (VISA, Master, JCB, AMEX), transit IC, iD, QUICPay, PayPay (Tabelog). 18 seats: 10 at the counter, two tables of four; non-smoking; children and strollers welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Uehommachi 6-3-31, Uehommachi Haihai Town B1F — directly connected to Osaka-Uehommachi Stn',
    cuisine: 'Town Chinese diner, the second shop of 野呂松飯店 in Toyonaka (18 seats) · two signatures: quick-fried yakimeshi (fried rice) in regular, garlic, special and five-ingredient versions, sizes up to extra-large, with refillable egg soup; Chinese-style yakisoba of thin noodles in a soy-based sauce (add vinegar halfway) · yakisoba-and-mini-fried-rice set · chuka soba (clear soy broth, thin straight noodles), miso ramen, stamina ramen · tenshinhan, mapo rice bowl, omurice (a staff meal that made the menu), gyoza, sweet and sour pork, stir-fried greens, nira-tama · beer, sake, shochu',
    website: null, gmaps: gm('中華食堂ノロマツ 上本町'), menu_url: null,
    notes: "[Chinese diner · Uehommachi, fried rice and yakisoba under the station] An old-style town Chinese diner on the basement floor of the rebuilt Uehommachi Haihai Town, opened in July 2026 as the second shop of 野呂松飯店, a popular machi-chuka near Okamachi Station in Toyonaka that supervises the cooking. It sells itself on two dishes. The fried rice is quick-fried, fluffy and not greasy, in plain, garlic (studded with chunks), special and five-ingredient versions, with egg soup you can refill. The yakisoba uses thin noodles in a salty, soy-based Chinese-style sauce; diners are told to add a splash of vinegar halfway. The usual order is the yakisoba-and-mini-fried-rice set (¥1,188 in October 2026). The chuka soba, a gentle, slightly sweet clear soy broth with thin straight noodles, is a side act here. The omurice began as a staff meal. Evenings turn into a casual drinking spot with gyoza (¥308) and nira-tama. Order by QR code; expect a wait at weekend lunch.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Opened on 15 July 2026 (Tabelog) as the second shop of 野呂松飯店, a town Chinese restaurant in Toyonaka (goguynet Tennoji, June and July 2026), and a franchise shop supervised by it — 野呂松飯店 is by Hankyu Okamachi Station (pre-opening reception post, July 2026). A Tabelog corporate-member listing.', philosophy: '"A Chinese diner you\'ll want to visit every day"; fried rice that is both fast and delicious (Tabelog, shop-provided).', specialty: 'Yakimeshi (fried rice); Chinese-style yakisoba.',
      anecdotes: [
        { text: '"I heard it became popular as a staff meal and was eventually put on the menu, and I can see why—it\'s really tasty." — August 2026, omurice.', source: R + 'B532328155/' },
        { text: '"I was recommended to add vinegar to the yakisoba, and doing so made it refreshing and just right." — July 2026, yakisoba with mini fried rice.', source: R + 'B532328155/' },
      ],
      japanese_sources_summary: '食べログ: 中華食堂ノロマツ、大阪市天王寺区上本町6-3-31 ハイハイタウン B1F、大阪上本町駅直結、毎日11:00〜15:00 (L.O. 14:30)・17:00〜22:00 (L.O. 21:30)、不定休、予約可、カード・交通系IC・iD・QUICPay・PayPay可、18席 (カウンター10席、4人掛けテーブル2卓)、禁煙、子供可、テイクアウト、デリバリー、英語を話せるスタッフ、写真付きメニュー、オープン日2026年7月15日。店の紹介: 豊中の「野呂松飯店」の味をハイハイタウンで、名物の焼きめしは「早い」「うまい」、醤油ベースの中華風ソースと焼きそば専用麺の焼きそば、醤油ベースのスープと細いストレート麺の中華そば、焼きめしとのセットがおすすめ。号外NET 天王寺・阿倍野 (2026年6月16日): 豊中の人気町中華「野呂松飯店」の2号店、監修。(2026年7月20日): 焼きめしと焼きそばが名物、天津飯、酢豚、餃子。関西開店 (2026年7月15日): 野呂松飯店の監修、2大名物の焼きめしと焼きそば、中華そば、味噌ラーメン、スタミナラーメン、天津飯、麻婆丼、餃子。ブログ (2026年7月15日、レセプション): 阪急岡町駅の野呂松飯店監修のFC店、7月15日から17日までは焼きそばと焼飯のセット500円、焼きめしはパラパラ系でにんにく風味、中華そばは鶏ガラや豚の清湯醤油、中細ストレート麺。口コミ(2026年7月〜10月): QRコードで注文、焼きそばとミニ焼きめしのセット1188円、中華そばとにんにく焼きめし1298円、大盛と特盛、おかわり自由の卵スープ、焼きそばは細麺で途中で酢を、中華そばはやさしく少し甘めの昔ながらの味、オムライスはまかないから、餃子308円、ニラ玉638円、Aka boshi 中瓶638円、土曜の昼は満席で少し待つ、夜は店の外に行列。',
      confidence: 'medium', sources: [TB, GOGUY1, GOGUY2, KAITEN, AMEBA, R + 'B532328155/', R + 'B534040585/', R + 'B537880274/', R + 'B537905462/', R + 'B537961284/', R + 'B537998527/', R + 'B538021025/', R + 'B538167629/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff and photo menu (Tabelog); order by QR code on your phone (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区上本町6-3-31 ハイハイタウン B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); opened 15 July 2026; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区上本町六丁目3番31号 (go) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537880274/', R + 'B537961284/', R + 'B538167629/', R + 'B532328155/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakisoba + mini fried rice set (egg soup refills free)', '¥1,188', 'Sets', 'no', 'no', 'October 2026; regular-size rice +¥100–110.', 'yakisoba_set'),
      it('', '', 'Chuka soba + garlic fried rice set', '¥1,298', 'Sets', 'no', 'no', 'October 2026.', 'chukasoba_set'),
      it('', '', 'Garlic fried rice, large', '', 'Fried rice', 'no', 'no', '"Just under ¥1,100" (October 2026).', 'garlic_rice'),
      it('', '', 'Gyoza', '¥308', 'À la carte', 'no', 'no', 'October 2026.', 'gyoza'),
      it('', '', 'Nira-tama (chive and egg)', '¥638', 'À la carte', 'no', 'no', 'October 2026.', 'niratama'),
    ] }, {
    cuisine: '豊中の野呂松飯店の2号店の町中華 (18席)・2大名物: 早いうまいの焼きめし (普通、にんにく、特製、五目、大盛・特盛まで、おかわり自由の卵スープ付き)、焼きそば専用麺の細麺に醤油ベースの中華風ソースの焼きそば (途中で酢を)・焼きそばとミニ焼きめしのセット・中華そば (清湯醤油、細いストレート麺)、味噌ラーメン、スタミナラーメン・天津飯、麻婆丼、まかないから生まれたオムライス、餃子、酢豚、青菜炒め、ニラ玉・ビール、日本酒、焼酎',
    neighborhood: '上本町6-3-31 うえほんまちハイハイタウン B1F。大阪上本町駅直結',
    gf_detail: 'グルテンフリーではありません。焼きそばや中華そばの小麦の麺、餃子、醤油ベースのソースが中心で、グルテンの情報なし。',
    vegan_detail: 'ヴィーガンではありません。肉の入った焼きめし、豚肉の焼きそば、鶏ガラと豚の醤油スープ、餃子、酢豚など。ヴィーガンの品の情報はなし。',
    notes: '[中華・上本町、駅の地下の焼きめしと焼きそば] 建て替えたうえほんまちハイハイタウンの地下1階にある、昔ながらの雰囲気の明るい町中華。2026年7月、豊中の阪急岡町駅近くの人気町中華「野呂松飯店」の2号店として、その監修でオープンした。看板はふたつ。焼きめしは手早く炒めたパラパラで油っぽくなく、普通、にんにく (かたまりがごろごろ)、特製、五目があり、おかわり自由の卵スープ付き。焼きそばは細麺に塩気のきいた醤油ベースの中華風ソースで、途中で酢をかけるのがおすすめ。定番は焼きそばとミニ焼きめしのセット (2026年10月で1188円)。やさしく少し甘めの清湯醤油に細いストレート麺の中華そばは、ここでは脇役。オムライスはまかないから生まれた一品。夜は餃子 (308円) やニラ玉で気軽に飲む店にもなる。注文はQRコードで、土日の昼は待つことも。',
  });
}

save();
