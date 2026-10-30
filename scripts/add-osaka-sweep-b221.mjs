// Osaka sweep (2-mile circle around Dotonbori), batch 221 — the last mom-phase listings with 30+ reviews (20 seats or fewer).
//   + カグノミ堂 KAGUNOMI-DOU (bite-sized cakes with an 8-seat eat-in counter; Shinmachi, since 2017)
//   + 鮨 利修 Sushi Rishu (à la carte sushi and fugu courses, second floor in a Shinmachi side street)
//   + 鉄板Kitchen DAI Teppan Kitchen DAI (family-friendly teppanyaki run by a couple; Kitahorie)
//   + wad omotenashi cafe (Japanese tea, tableware and kakigori; gallery upstairs; Minami-Senba)
//   Chain check: each is a single shop. Kagunomido: one address in every source (Tabelog, rurubu, macaroni).
//   Rishu: one Tabelog listing and its own site, no branches found. DAI: its own site lists one shop (it moved
//   to 北堀江2-5-3 from an earlier address). wad: its site (wad-cafe.com) runs one cafe (2F) and gallery (3F) at one
//   address, plus kintsugi classes; "wad" is the shop's own name, not a multi-shop brand. None is in data/osaka.json.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 221);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カグノミ堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27098602/'; const R = TB + 'dtlrvwlst/';
  const RURUBU = 'https://rurubu.jp/andmore/article/8177'; const MACARONI = 'https://macaro-ni.jp/16806?page=3';
  const W = day(['14:00', '22:00']); const E = day(['12:00', '20:00']);
  put({
    id: 'osaka_kagunomido_shinmachi', name: 'カグノミ堂 (KAGUNOMI-DOU)', category: 'MOM_AND_POP',
    lat: 34.675938, lng: 135.494758, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Most of the small cakes are tarts, financier-based or sponge (the tigre is a financier filled with ganache); the ice creams (beet, leche merengada) and the meringue-covered Kagunomi may be the exceptions, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cakes made with cream, butter, eggs and meringue; nothing is described as vegan.',
    hours_raw: 'Mon, Tue, Wed and Fri 14:00–22:00; Sat, Sun and holidays 12:00–20:00; closed Thursday (Tabelog). No table bookings, but cakes can be reserved for takeaway (Tabelog). Order and pay at the register, then sit (August 2026 review). Popular cakes sell out: some were gone at opening on an August 2026 visit and at 13:30 on a September 2026 holiday. Cards (VISA, Master, JCB, AMEX), IC cards, iD, QUICPay and PayPay (Tabelog). 8 counter seats along the wall; non-smoking; children and strollers welcome (Tabelog; February 2026 review). Opened 21 May 2017 (Tabelog). A May 2026 diner recalls it once being takeaway only.',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-27-17, just off the main street — 1 min from Nishi-Ohashi Stn, 3 min from Yotsubashi Stn',
    cuisine: 'Finger-sized cakes (petit gâteaux), about 10–15 kinds in the case, to take away or eat at an 8-seat counter · the house cake Kagunomi: orange jelly under fluffy meringue on a crunchy chocolate base (macaroni, 2022) · tigre, a financier filled with ganache, plain ¥380 or kinako ¥390 (August 2026) · Nocciola: hazelnut, chocolate and mascarpone mousse (September 2026) · Patata: sweet potato and chestnut on a moist financier-like base (September 2026) · pistachio cake, strawberry tart, banana cream tart, chocolate cake (January–February 2026) · beet ice cream and leche merengada (a Spanish iced meringue with cinnamon and lemon), two flavours ¥600 (August 2026) · cookies and financiers · coffee, tea, wine and sparkling wine',
    website: null, gmaps: gm('カグノミ堂 新町'), menu_url: null,
    notes: "[Sweets · Shinmachi, a bar-style shop for two-bite cakes] A small pastry shop a minute from Nishi-Ohashi station that makes only finger-sized cakes, so three of them come to about one ordinary slice and a birthday can mean nine kinds at once. The owner-patissier told rurubu in 2019 the idea was a bar-style sweets shop, to make cakes something you drop in for casually, and there is wine as well as coffee. Choose from the case, pay, and sit at the eight-seat counter along the wall. The line-up changes with the seasons: in 2026 diners singled out a smooth hazelnut-mascarpone Nocciola, a sweet-potato-and-chestnut Patata, a pistachio cake and a chilled tigre (financier with ganache), plus beet and Spanish leche merengada ice cream. Diners call the cakes pretty, well balanced and fairly priced, and buy boxes as gifts; come early, as favourites sell out.",
    chef_bio: { chef_name: '鳥井', roles: ['Owner and patissier (named 鳥井 in a July 2019 rurubu article; no later source names the owner)'], origin: null, background: 'Opened 21 May 2017 (Tabelog). Per a rurubu article updated July 2019, the owner-patissier set out to try "a new format, a bar-style sweets shop", with more than 15 kinds of petit gâteaux in the case at ¥250–300 before tax, plus coffee, tea, wine and sparkling wine and an eat-in space hung with wine glasses.', philosophy: 'To make sweets something to enjoy casually, close at hand (owner, rurubu 2019).', specialty: 'Two-bite cakes; the Kagunomi (meringue, orange jelly, chocolate crunch).',
      anecdotes: [
        { text: '"I ordered three, and the portion was about the same as one regular cake, which I personally appreciated as it allowed me to enjoy a variety of flavors." — August 2026, Sunday evening.', source: R + 'B533350149/' },
        { text: '"The \'Nocciola\' with hazelnuts, chocolate, and mascarpone was absolutely delicious! The mousse was incredibly smooth with no graininess at all." — September 2026.', source: R + 'B536200830/' },
      ],
      japanese_sources_summary: 'るるぶ&more (2019年7月更新): 新町のカグノミ堂、オーナー兼パティシエの鳥井さん、バールスタイルのスイーツショップという新しい業態、スイーツをもっと身近に気軽に味わう文化を作りたい、ショーケースには常時15種類以上のプチガトー (税抜き250〜300円)、コーヒー、紅茶、ワイン、スパークリングワイン、ワイングラスを吊るしたイートインスペース、クッキーやフィナンシェも。macaroni (2022年8月更新): 水色を基調としたかわいらしいパティスリー、ひと口サイズのケーキ、名物のカグノミはふわふわのメレンゲの中にオレンジジュレ、土台はクランチチョコレート、西区新町1丁目27-17。食べログ: 西区新町1-27-17、月・火・水・金14:00〜22:00、土・日・祝12:00〜20:00、木曜休み、イートインの予約は不可、ケーキのテイクアウトは予約可、カード・電子マネー・PayPay可、8席、禁煙、子ども連れ歓迎、2017年5月21日オープン。口コミ(2026年1月〜9月): 指先サイズのケーキが10種類ほど、壁ぞいのカウンター8席、ティグレ (プレーン380円、きなこ390円)、ビーツと leche merengada のアイス600円、季節で新作、早い時間でも売り切れがある、手みやげに。',
      confidence: 'medium', sources: [TB, RURUBU, MACARONI, R + 'B533350149/', R + 'B534156054/', R + 'B534177351/', R + 'B534964753/', R + 'B536200830/', R + 'B536376731/', R + 'B523951648/', R + 'B520363037/', R + 'B503777097/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the cakes in the case, pay at the register, then sit (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-27-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目27番17号 (go) 8m. 鮨 利修 (osaka_sushi_rishu_shinmachi, this batch) is about 6 m away at 新町1-27-16: a different house number (号) and neither listing names a shared building, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534156054/', R + 'B534177351/', RURUBU],
    price_note: 'Prices from August 2026 reviews; the 2019 rurubu range (¥250–300 before tax per cake) is older.', last_checked: TODAY, items: [
      it('ティグレ（プレーン）', '', 'Tigre, plain (financier filled with ganache)', '¥380', 'Baked sweets', 'no', 'no', 'August 2026.', 'tigre'),
      it('ティグレ（きなこ）', '', 'Tigre, kinako', '¥390', 'Baked sweets', 'no', 'no', 'August 2026.', 'tigre_kinako'),
      it('カグノミ', '', 'Kagunomi: meringue over orange jelly on a chocolate crunch base (house cake)', '', 'Cakes', 'ask', 'no', 'macaroni, 2022.', 'kagunomi'),
      it('', '', 'Nocciola (hazelnut, chocolate, mascarpone mousse)', '', 'Cakes', 'ask', 'no', 'September 2026.', 'nocciola'),
      it('', '', 'Patata (sweet potato and chestnut)', '', 'Cakes', 'no', 'no', 'September 2026; financier-like base.', 'patata'),
      it('', '', 'Ice cream, two flavours (e.g. beet and leche merengada)', '¥600', 'Ice cream', 'ask', 'no', 'August 2026.', 'ice_cream'),
    ] }, {
    cuisine: '指先サイズのケーキ (プチガトー) がショーケースに10〜15種類ほど、持ち帰りかカウンター8席で・名物のカグノミ: クランチチョコレートの土台にオレンジジュレとふわふわのメレンゲ (macaroni、2022年)・ガナッシュ入りのフィナンシェ生地のティグレ、プレーン380円、きなこ390円 (2026年8月)・Nocciola: ヘーゼルナッツ、チョコレート、マスカルポーネのムース (2026年9月)・Patata: フィナンシェのようなしっとりした生地にさつまいもと栗 (2026年9月)・ピスタチオのケーキ、いちごのタルト、バナナクリームのタルト、チョコレートケーキ (2026年1〜2月)・ビーツのアイスと leche merengada (シナモンとレモンのスペインの冷たいメレンゲ菓子) の2種で600円 (2026年8月)・クッキーとフィナンシェ・コーヒー、紅茶、ワイン、スパークリングワイン',
    neighborhood: '新町1-27-17、大通りから少し入ったところ。西大橋駅から徒歩1分、四ツ橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。小さなケーキの多くはタルト、フィナンシェ生地、スポンジ (ティグレはガナッシュ入りのフィナンシェ)。アイス (ビーツ、leche merengada) やメレンゲで包んだカグノミは例外かもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。生クリーム、バター、卵、メレンゲを使うケーキで、ヴィーガンの説明はない。',
    notes: '[スイーツ・新町、ふた口で食べるケーキのバールスタイルの店] 西大橋駅から1分の小さなパティスリーで、ケーキは指先サイズのものだけ。3つでふつうのケーキ1個ぶんほどなので、誕生日に9種類を一度に、という人も。2019年のるるぶの記事でオーナー兼パティシエは、ケーキを気軽に立ち寄って楽しむものにしたいと、バールスタイルのスイーツショップに挑戦したと話していて、コーヒーのほかワインもある。ショーケースから選んで会計し、壁ぞいのカウンター8席へ。品ぞろえは季節で変わり、2026年の口コミで目立ったのは、なめらかなヘーゼルナッツとマスカルポーネの Nocciola、さつまいもと栗の Patata、ピスタチオのケーキ、冷やしたティグレ (ガナッシュ入りのフィナンシェ)、それにビーツとスペインの leche merengada のアイス。見た目がかわいく、バランスがよく、値段も手ごろと好評で、手みやげに箱で買う人も。人気のものは売り切れるので早めに。',
  });
}

// ================================================================ 鮨 利修
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27129560/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'osaka_sushi_rishu_shinmachi', name: '鮨 利修 (Sushi Rishu)', category: 'OMNI',
    lat: 34.675918, lng: 135.494702, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Soy sauce on nigiri and in simmered dishes, tempura, fried fugu and eel sauce all likely contain wheat; plain sashimi and salt-grilled fish may be simpler, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish counter.',
    hours_raw: 'Daily except Wednesday 17:30–23:30; also closed the third and fourth Thursdays of each month (Tabelog; a March 2025 review gives Wednesdays and the third Thursday). Reservations accepted online and by phone; the listing warns an online booking may be declined if phone bookings fill the seats first (Tabelog). A May 2025 diner found it fully booked two days running; a June 2026 diner walked in alone. Cards accepted; no e-money or QR (Tabelog). 10 seats: 6 at the counter, a private room for 4; non-smoking; free Wi-Fi; school-age children welcome (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-27-16, on the second floor of a building in a quiet side street — 3 min from Nishi-Ohashi Stn, 4 min from Yotsubashi Stn',
    cuisine: 'Sushi counter where you order à la carte instead of a set course (6 counter seats and a private room) · domestic wild fish chosen from the case and cooked to order: sashimi, grilled, simmered or as tempura · assorted sashimi, 5 kinds ¥3,500; surf clam ¥1,300; ark shell ¥1,200; dried swordfish ¥1,200; omakase nigiri, 5 pieces ¥2,900 (September 2025) · examples (2024–2026): whole Ezo abalone with its liver as a sauce to mix with rice, simmered akou, white-grilled Kagoshima eel, grilled kinki, sake-steamed clams, seasoned monkfish liver with Nara pickles, Ise lobster nigiri, eel-and-cucumber or toro-taku rolls · fugu course with tetchiri hot pot and zosui, 5 items ¥11,000 for 2–4 people (Tabelog) · local sake, some rare, plus shochu, whisky, wine and plum wine',
    website: 'https://www.sushi-risyu.com/', gmaps: gm('鮨 利修 新町'), menu_url: null,
    notes: "[Sushi · Shinmachi, an à la carte sushi counter upstairs in a side street] A quiet second-floor sushi bar near Nishi-Ohashi station with six counter seats and one private room, where, unusually for a counter this polished, there is no set course: you pick fish from the case and say how you want it. The listing credits the chef with 50 years of experience and puts the counter just 90 cm from the board. Diners praise the knife work on squid, the whole abalone served with its liver sauce to stir into rice, seasoned monkfish liver, simmered akou, and a toro-taku roll to finish; in winter there is a fugu course of sashimi, fried and grilled fugu, hot pot and zosui. Regulars come monthly for the value (a June 2026 diner had sashimi, abalone, six nigiri, a roll, two beers and three sakes for under ¥15,000) and call the chef calm, warm and well groomed. Book ahead; it fills up.",
    chef_bio: { chef_name: null, roles: ['Chef (50 years of experience, per the Tabelog listing; unnamed)'], origin: null, background: 'The shop-maintained Tabelog listing describes a chef with 50 years of experience making nigiri with speed and a beautiful shape in front of guests, domestic wild fish and seasonal produce, and local sake sourced to match. Diners describe the chef as calm, friendly and sharp, with an impeccably styled haircut (2024–2025 reviews), and talkative about the fish (April 2025 review).', philosophy: 'Nigiri that keeps its shape after it is made, eaten at your own pace from an à la carte menu (Tabelog).', specialty: 'À la carte sushi and sashimi; abalone with liver sauce; fugu in winter.',
      anecdotes: [
        { text: '"They prepared a whole abalone for me, serving not just the meat but also the liver and the foot, lightly boiled." — June 2026, alone, without a reservation.', source: R + 'B529435000/' },
        { text: '"I usually can\'t stand ankimo… But Rishu\'s ankimo was truly possibly the best I\'ve ever had." — July 2024.', source: R + 'B481189827/' },
        { text: '"I always order the toro-taku roll to finish off my meal! You absolutely have to try it!" — March 2025.', source: R + 'B503403294/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 利修、寿司・鍋・日本料理、大阪市西区新町1-27-16、西大橋駅から徒歩3分、四ツ橋駅から徒歩4分、17:30〜23:30、水曜と毎月第3・第4木曜休み、予約可 (電話の予約で埋まるとネット予約を断ることも)、カード可、電子マネー・QR不可、10席 (カウンター6、4名の個室)、禁煙、Wi-Fi、小学生以上の子ども可。店の紹介: 経験50年の大将、国産の天然魚と旬の食材の鮨、握ったあとも形の美しい鮨、カウンターとの距離は90cm、刺身の盛り合わせ・焼き物・煮物などの一品料理とコース、旬の魚介に合わせた地酒、珍しい銘柄も、ふぐ鍋とふぐの盛り合わせのふぐコース5品11,000円 (2〜4名)。口コミ(2023年10月〜2026年6月): コースではなく一品ずつ頼める、刺身5種盛り3,500円、ほっき貝1,300円、赤貝1,200円、swordfish の干物1,200円、おまかせにぎり5貫2,900円 (2025年9月)、アワビの肝ソースをシャリに混ぜて、あん肝、イカの包丁仕事、トロたく巻き、穏やかで気さくな大将、毎月通う常連も、2日先まで満席の日も。',
      confidence: 'medium', sources: [TB, R + 'B529435000/', R + 'B523206169/', R + 'B519958473/', R + 'B519442502/', R + 'B513691455/', R + 'B513458181/', R + 'B481189827/', R + 'B478943640/', R + 'B506061240/', R + 'B505830582/', R + 'B503403294/', R + 'B504824081/', R + 'B479808393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte from the fish case, no set course to lean on; book ahead (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-27-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目27番16号 (go) 5m. カグノミ堂 (osaka_kagunomido_shinmachi, this batch) is about 6 m away at 新町1-27-17: a different house number (号), and Rishu is upstairs in a building on a side street (reviews) while neither listing names a shared building, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B513691455/'],
    price_note: 'À la carte prices from a September 2025 review (tax included); the fugu course from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi, 5 kinds', '¥3,500', 'Sashimi', 'ask', 'no', 'September 2025.', 'sashimi'),
      it('', '', 'Surf clam (hokkigai)', '¥1,300', 'Sashimi', 'ask', 'no', 'September 2025.', 'hokkigai'),
      it('', '', 'Ark shell (akagai)', '¥1,200', 'Sashimi', 'ask', 'no', 'September 2025.', 'akagai'),
      it('', '', 'Dried swordfish, grilled', '¥1,200', 'Grilled', 'ask', 'no', 'September 2025.', 'dried_swordfish'),
      it('', '', 'Omakase nigiri, 5 pieces', '¥2,900', 'Sushi', 'ask', 'no', 'September 2025.', 'omakase_nigiri'),
      it('', '', 'Fugu course, 5 items, with tetchiri hot pot (2–4 people)', '¥11,000', 'Course', 'no', 'no', 'Tabelog listing; includes fried fugu.', 'fugu_course'),
    ] }, {
    cuisine: 'コースではなく一品ずつ頼める鮨のカウンター (カウンター6席と個室)・ケースから選ぶ国産の天然魚を刺身、焼き物、煮物、天ぷらで・刺身5種盛り3,500円、ほっき貝1,300円、赤貝1,200円、swordfish の干物1,200円、おまかせにぎり5貫2,900円 (2025年9月)・例 (2024〜2026年): 肝のソースをシャリに混ぜて食べる Ezo アワビ、akou の煮付け、Kagoshima の鰻の白焼き、kinki の焼き物、酒蒸しの貝、Nara の漬物を合わせたあん肝、Ise lobster のにぎり、鰻とキュウリの巻物、トロたく巻き・ふぐ鍋と雑炊のふぐコース5品11,000円、2〜4名 (食べログ)・珍しいものもある地酒、焼酎、ウイスキー、ワイン、梅酒',
    neighborhood: '新町1-27-16、静かな路地のビルの2階。西大橋駅から徒歩3分、四ツ橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。にぎりや煮物の醤油、天ぷら、ふぐの唐揚げ、鰻のタレはどれも小麦を含むことが多い。刺身や塩焼きはシンプルかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介のカウンター。',
    notes: '[鮨・新町、路地の2階で一品ずつ頼める鮨のカウンター] 西大橋駅の近く、ビルの2階にある静かな鮨の店で、カウンター6席と個室がひとつ。これほど端正なカウンターには珍しく決まったコースはなく、ケースの魚を選んで食べ方を伝える。食べログによれば大将は経験50年、カウンターと板場の距離はわずか90cm。イカの包丁仕事、肝のソースをシャリに混ぜて食べるアワビ、あん肝、akou の煮付け、締めのトロたく巻きが好評で、冬はふぐの刺身、唐揚げ、焼き物、鍋、雑炊のふぐコースも。コスパのよさに毎月通う常連もいる (2026年6月の口コミでは刺身、アワビ、にぎり6貫、巻物、ビール2杯と日本酒3杯で15,000円以下)。大将は穏やかで温かく、身だしなみが整っているという声。予約で埋まるので早めに。',
  });
}

// ================================================================ 鉄板Kitchen DAI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27131240/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kitchen-dai.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_teppan_kitchen_dai_kitahorie', name: '鉄板Kitchen DAI (Teppan Kitchen DAI)', category: 'OMNI',
    lat: 34.673202, lng: 135.491978, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is wheat-based (teppan pizza, Napolitan, bifkatsu, garlic toast, French toast), and the hamburg comes with a house sauce; salt-and-garlic steak, grilled vegetables and seafood may be simpler, but share surfaces with the rest. The site asks for food requests at booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak, seafood and egg teppan; the grilled-vegetable platter may suit, but nothing is described as vegan.',
    hours_raw: 'Tue–Sun 17:00–23:00 (last order 22:00 per Tabelog, 22:30 per the official site); closed Monday (Tabelog; official site). Reservations accepted, online through Tabelog or by phone; a September 2026 diner walked in. Starter charge ¥330 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). Tabelog gives 20 seats (12 at an L-shaped counter, tables for 2, 2 and 4), the official site 15; whole-shop hire; non-smoking; English menu; children welcome, with a kids\' menu (Tabelog). The official site carries a notice of the move to this address (closed from a Monday, 1 August, for the move; year not given) and of a crowdfunding for the shop\'s 15th anniversary; Tabelog\'s opening date reads 26 March 1981.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 2-5-3, on the first street west of the Naniwa-suji and Horie-dori crossing, heading north — 3 min from Nishi-Ohashi Stn exit 3, 5 min from Yotsubashi Stn exit 6',
    cuisine: 'Teppanyaki of wagyu, seafood and vegetables with wine, plus teppan pizza and pasta (prices from the official site, tax included, read October 2026) · Seafood course ¥6,270; Special beef steak course with 130 g black-wagyu fillet ¥8,030; SPECIAL DAI course with seafood and fillet ¥8,580; pair course for two ¥22,000 · black-wagyu fillet from ¥4,158 per 100 g · fluffy wagyu hamburg with a fried egg ¥1,848 · bifkatsu ¥2,728 · pork loin tonteki ¥1,430 · grilled vegetables, 3/5/7 kinds ¥748/¥1,188/¥1,628 · Aomori scallops ¥1,188 · live kuruma prawns in butter ¥1,595 · Akashi octopus with garlic and anchovy ¥1,078 · dashimaki ¥968 · teppan pizza from ¥1,188 · Napolitan from ¥1,298 · omurice ¥1,188 · garlic rice with meat ¥858 · Ise lobster and live abalone on request · blackboard specials such as foie gras with daikon steak (September 2026) and teppan French toast · wine by the glass from ¥880, sparkling from ¥1,100',
    website: SITE, gmaps: gm('鉄板Kitchen DAI 北堀江'), menu_url: SITE + 'alacarte.html',
    notes: "[Teppanyaki · Kitahorie, a couple's homey teppan for steak and hamburg] An L-shaped counter in a warm grey-and-wood room a few minutes from Nishi-Ohashi, run by a husband-and-wife team (November 2024 review), where the owner, who is from Miyazaki per a December 2024 diner, cooks and talks across the plate. It aims to be the teppan you went to as a child and come back to as an adult: the site says some regulars have done exactly that, and families with small children are welcome, with a kids' plate. Three courses run ¥6,270–8,580; à la carte there is black-wagyu fillet by weight, a fluffy wagyu hamburg under a fried egg, grilled vegetables that one diner rated the tastiest found at any teppan, blackboard specials such as foie gras on daikon, and a teppan French toast that one diner called the best ever and others single out too. Birthdays can get a message plate and fireworks on request. Diners call the owner warm and easy to talk to; one found the beef choice narrow.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; from Miyazaki per a December 2024 review)', 'Run by a husband-and-wife team (November 2024 review)'], origin: 'From Miyazaki (December 2024 review: "the owner, who is from Miyazaki, serves steaks made with Miyazaki beef").', background: 'Per the official site, the owner (店主) chooses the beef, suggests wines and plans the seasonal courses, and the shop wants to be the teppan where children who loved its hamburg come back as adults. The site carries a notice of the move to 北堀江2-5-3 and of a crowdfunding for the 15th anniversary. A November 2024 diner describes it as "run by a husband and wife team"; a January 2026 diner: "I think many people come back because they like the owner\'s personality."', philosophy: 'Teppanyaki and wine at prices as reasonable as possible, for dates, celebrations and families with children (official site).', specialty: 'Black-wagyu fillet; wagyu hamburg with fried egg; grilled vegetables; teppan French toast.',
      anecdotes: [
        { text: '"The restaurant has 10 counter seats and about 8 table seats, run by a husband and wife team." — November 2024, à la carte.', source: R + 'B496162663/' },
        { text: '"Finally, I ordered French toast with ice cream. The French toast here is exceptional! It\'s a must-order!" — May 2024.', source: R + 'B485056806/' },
        { text: '"I really liked the flambéed kaki-pi created by Sharan Q\'s Batake-san; it pairs perfectly with drinks." — August 2024 (as machine-translated on Tabelog).', source: R + 'B489612452/' },
      ],
      japanese_sources_summary: '公式サイト: 大阪・心斎橋・堀江の鉄板焼き「鉄板Kitchen DAI（ダイ）」、ハンバーグや和牛ステーキ、伊勢海老などの鉄板焼きをアットホームな隠れ家空間でワインとリーズナブルに、デートや誕生日、記念日、小さな子ども連れの家族も歓迎、子どもの頃から大人になった今も通う常連も、肉を知り尽くした店主が選ぶステーキ、メインの席はカウンター、お子様プレート、コース3種 (魚貝を楽しむシーフードコース6,270円、特選ビーフステーキコース8,030円、SPECIAL DAIコース8,580円)、ペアコース2名22,000円、黒毛和牛のフィレステーキ100g 4,158円〜、ふわふわ和牛ハンバーグ目玉焼き乗せ1,848円、懐かしのビフカツ2,728円、焼き野菜3種748円〜7種1,628円、鉄板ピザ、ナポリタン、オムライス、グラスワイン880円〜、ワインは店主が提案、北堀江2-5-3に移転、15周年のクラウドファンディング、17:00〜23:00 (L.O.22:30)、月曜休み。食べログ (店舗会員): 火〜日17:00〜23:00 (L.O.22:00)、先付け330円、カード・電子マネー・QR可、20席 (カウンター12、テーブル8)、貸切可、禁煙、英語メニュー、子ども可。口コミ(2022年11月〜2026年9月): 夫婦で営む店、Miyazaki 出身のオーナー、気さくな店主、焼き野菜、ハンバーグ、フレンチトースト、誕生日のプレートと花火、フォアグラと大根のステーキ、肉の種類が少ないという声も。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about.html', SITE + 'course.html', SITE + 'alacarte.html', SITE + 'drink.html', SITE + 'access.html', R + 'B496162663/', R + 'B503063838/', R + 'B485056806/', R + 'B489612452/', R + 'B508285341/', R + 'B520334165/', R + 'B536307630/', R + 'B536557629/', R + 'B456896950/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter teppanyaki with courses or à la carte (2024–2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The official site asks diners to state dislikes and requests when booking a course.'] },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-5-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目5番3号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'course.html', SITE + 'alacarte.html', SITE + 'drink.html'],
    price_note: 'Prices from the official site (tax included; undated, read October 2026); the same three course prices are on the Tabelog listing.', last_checked: TODAY, items: [
      it('魚貝を楽しむシーフードコース', '', 'Seafood course', '¥6,270', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'seafood_course'),
      it('特選ビーフステーキコース', '', 'Special beef steak course (130 g black-wagyu fillet)', '¥8,030', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'beef_course'),
      it('SPECIAL DAIコース', '', 'SPECIAL DAI course (seafood and fillet steak)', '¥8,580', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'special_course'),
      it('極上！黒毛和牛のフィレステーキ', '', 'Black-wagyu fillet steak, per 100 g', '¥4,158', 'Meat', 'ask', 'no', 'Official site.', 'fillet'),
      it('ふわふわ和牛ハンバーグ目玉焼き乗せ', '', 'Wagyu hamburg with fried egg', '¥1,848', 'Meat', 'ask', 'no', 'Official site.', 'hamburg'),
      it('Dai名物！鉄板！！焼き野菜　おまかせ7種', '', 'Grilled vegetables, 7 kinds', '¥1,628', 'Vegetables', 'ask', 'ask', 'Official site.', 'grilled_veg'),
      it('モチモチ太麺 鉄板ナポリタン', '', 'Teppan Napolitan, thick noodles', '¥1,298', 'Pasta and rice', 'no', 'no', 'Official site.', 'napolitan'),
    ] }, {
    cuisine: '和牛、魚介、野菜の鉄板焼きとワイン、鉄板のピザとパスタも (値段は公式サイト、税込み、2026年10月に確認)・魚貝を楽しむシーフードコース6,270円、黒毛和牛のフィレ130gの特選ビーフステーキコース8,030円、魚介とフィレの SPECIAL DAIコース8,580円、2名のペアコース22,000円・黒毛和牛のフィレステーキ100g 4,158円〜・ふわふわ和牛ハンバーグ目玉焼き乗せ1,848円・ビフカツ2,728円・もち豚ロースのトンテキ1,430円・焼き野菜3種748円、5種1,188円、7種1,628円・青森県産帆立貝柱1,188円・活車エビのバターソテー1,595円・明石の生だこのガーリック&アンチョビソテー1,078円・だし巻き玉子968円・鉄板ピザ1,188円〜・ナポリタン1,298円〜・オムライス1,188円・お肉入りガーリックライス858円・伊勢海老や活アワビは予約で・フォアグラと大根のステーキ (2026年9月) や鉄板のフレンチトーストなど黒板のおすすめ・グラスワイン880円〜、グラススパークリング1,100円〜',
    neighborhood: '北堀江2-5-3、Naniwa-suji と Horie-dori の交差点から西へ一本目の通りを北へ。西大橋駅3番出口から徒歩3分、四ツ橋駅6番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。鉄板ピザ、ナポリタン、ビフカツ、ガーリックトースト、フレンチトーストなど小麦の料理が多く、ハンバーグには特製ソース。塩とガーリックのステーキ、焼き野菜、魚介はシンプルかもしれないが、同じ鉄板を使う。公式サイトでは要望は予約時にとのこと。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、魚介、卵の鉄板焼き。焼き野菜の盛り合わせは合うかもしれないが、ヴィーガンの説明はない。',
    notes: '[鉄板焼き・北堀江、夫婦で営むステーキとハンバーグのアットホームな鉄板焼き] 西大橋から数分、グレーと木の温かい店内にL字のカウンターがあり、夫婦で営む店 (2024年11月の口コミ)。2024年12月の口コミによれば Miyazaki 出身のオーナーが、鉄板ごしに話しながら焼く。子どもの頃に家族で通った鉄板焼きに大人になってまた来る、そんな店でありたいと公式サイトにあり、実際にそういう常連もいるという。小さな子ども連れも歓迎で、お子様プレートも。コースは6,270〜8,580円。アラカルトでは量り売りの黒毛和牛のフィレ、目玉焼きをのせたふわふわの和牛ハンバーグ、鉄板焼きの店でいちばんおいしかったという声もある焼き野菜、フォアグラと大根のような黒板のおすすめ、そして今まででいちばんという声もあり、ほかにも好評な鉄板のフレンチトースト。誕生日には頼めばメッセージプレートと花火も。オーナーは温かく話しやすいという声が多く、肉の種類が少ないという声も。',
  });
}

// ================================================================ wad omotenashi cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27088707/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://wad-cafe.com/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'osaka_wad_omotenashi_cafe_minamisenba', name: 'wad omotenashi cafe', category: 'OMNI',
    lat: 34.677696, lng: 135.498927, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The teas themselves and the kakigori syrups are likely simpler, but the tea-leaf salad is dressed with soy sauce and the sweets (monaka, zenzai with grilled mochi, karinto) are not described; ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain teas (sencha, matcha, hojicha, Chinese tea) and kakigori with tea syrup and no milk may suit; lattes and condensed milk are dairy, and the leftover tea leaves come as a salad with bonito flakes.',
    hours_raw: 'Daily 12:00–19:00 (last order 18:30), closing days not fixed (Tabelog; official site, "for the time being"). No reservations; cash only (official site; Tabelog: no cards, e-money or QR). At busy times take a number and wait elsewhere; the shop phones when your turn comes (September 2026 reviews: waits of 40 minutes to about an hour and a half). Loud talk, laptop work and watching videos are not allowed (September 2026 review). 20 seats including a counter facing the tea preparation; non-smoking (Tabelog). Up the outside iron stairs to 2F; the 3F gallery wad+ opens during exhibitions (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-9-3, 2F, up the outside stairs off a narrow alley, diagonally across from the Organic Building (オーガニックビル) — 5 min from Shinsaibashi Stn exit 3',
    cuisine: 'Japanese tea brewed by hand in a pot, with tea sweets and kakigori, served in pieces by contemporary potters · tea from farms in Kyoto and Shizuoka (official site) · matcha prepared in front of you, in a bowl you choose from 14, ¥1,000 (September 2026) · sencha such as kabuse sencha, served first in a small cup with cooler water, then hotter; the spent leaves come back as a salad with soy sauce and bonito flakes · Chinese tea, refilled up to five times · matcha latte and hojicha latte, the matcha syrup poured by you and refillable · koji tea latte · kakigori, large: Uji syrup ¥1,300 (+¥100 milk), hojicha syrup ¥1,300, Uji syrup and condensed milk ¥1,400, small sizes too; black syrup, white syrup and Uji all year, hojicha and Japanese black tea seasonal (September 2026) · wad monaka (brown rice) · Tanba black-bean zenzai with grilled mochi and salted kombu · grilled rice cakes · tea snacks such as burdock, karinto and black beans · tea leaves, antiques and potters\' work for sale at the entrance',
    website: SITE, gmaps: gm('wad omotenashi cafe 南船場'), menu_url: null,
    notes: "[Cafe · Minami-Senba, a tea-and-tableware cafe up an iron stair] Up worn iron stairs beside a narrow alley in Minami-Senba, a dim, quiet room of concrete floor, old wooden furniture and large ceramics where Japanese tea is made by hand, one cup at a time. The shop calls its idea the good things of Japan and its tea service a modern take on the spirit of the tea ceremony; the tea comes straight from farms in Kyoto and Shizuoka, and the cups and bowls are by contemporary potters, sold at the door and shown in the gallery upstairs, which also runs kintsugi classes. Pick your own matcha bowl from fourteen (one diner chose a Shigaraki piece by a late potter), drink a sencha through several changing infusions and then eat the leaves as a salad, or order the towering kakigori with Uji or hojicha syrup to pour yourself. One of Tabelog's top 100 cafes (WEST, 2025). It is popular, with overseas visitors among the crowd per September 2026 diners, so expect to take a number and wait; the shop phones when a seat is free. Cash only; keep voices low.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the official site: wad (和道) offers "good things of Japan" chosen one by one; a cafe for enjoying tableware and ingredients in an arrangement of the spirit of the tea ceremony (2F), a gallery for contemporary potters (3F, wad+, exhibitions once or twice a month) and kintsugi classes. Tea comes directly from farms in Kyoto (和束町) and Shizuoka (牧之原), poured in the shop\'s own way; tea leaves, the owner\'s choice of antiques and gallery artists\' work are sold at the cafe entrance. Selected for Tabelog Cafe WEST "Tabelog 100" 2025.', philosophy: '"百杯100style": each cup prepared with care, in the spirit of hospitality (official site).', specialty: 'Matcha in a bowl you choose; kakigori with tea syrups; sencha in several infusions.',
      anecdotes: [
        { text: '"You can choose your favorite tea bowl from 14 different matcha bowls, and they will prepare the tea in the bowl you select." — September 2026.', source: R + 'B537059920/' },
        { text: '"At the end, the remaining tea leaves were served as a salad with soy sauce and bonito flakes, which was quite surprising and interesting." — September 2026, kabuse sencha.', source: R + 'B535545145/' },
        { text: '"It\'s a popular spot, and I waited about an hour and a half to get in, but I was able to explore the nearby America Village while waiting, thanks to a phone call notification." — September 2026.', source: R + 'B537142661/' },
      ],
      japanese_sources_summary: '公式サイト: wad 和道、「日本の良きモノ」がコンセプト、茶道の精神をアレンジした器と素材を楽しむカフェ (2F)、現代作家のギャラリー wad+ (3F、会期中のみ)、本金継ぎの教室、京都和束町と静岡牧之原の農家から直接届く茶、急須で入れる本物のお茶、国内外の作家のうつわ、入り口で茶葉や店主のセレクトする古物・作家物を販売、南船場4-9-3 東新ビル 2・3F、心斎橋駅3番出口から徒歩5分、オーガニックビルの斜め前、外階段から、12:00〜19:00 (L.O 18:30)、不定休、予約不可、支払いは現金のみ。食べログ: 東進ビル 2F と表記、カフェ・かき氷、20席、禁煙、カード・電子マネー・QR不可、食べログ カフェ WEST 百名店 2025。口コミ(2026年8月〜10月): 14の茶碗から選ぶ抹茶1,000円、かぶせ煎茶とワドモナカの玄米、茶殻に醤油とかつお節のサラダ、宇治蜜・練乳のかき氷、ほうじ茶蜜、抹茶ラテとほうじ茶ラテ、中国茶はおかわり5回まで、Tanba の黒豆のぜんざい、番号札で待って電話で呼び出し、40分〜1時間半待ち、大声やパソコン作業、動画の視聴は禁止、海外の客も多い。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'omotenashi-cafe/', SITE + 'map/', SITE + 'ceramic-select/', R + 'B534361695/', R + 'B536075333/', R + 'B536106724/', R + 'B536286791/', R + 'B536777885/', R + 'B537059920/', R + 'B537370493/', R + 'B537575982/', R + 'B537142661/', R + 'B536125100/', R + 'B536508546/', R + 'B535545145/', R + 'B535072399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff guide first-timers through the tea menu; overseas visitors common; take a number at busy times (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-9-3 東新ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (exhibitions announced into November 2026) and Tabelog; reviews dated through October 2026. Building name 東新ビル per the official site; Tabelog writes 東進ビル.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目9番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537059920/', R + 'B536286791/', R + 'B537142661/'],
    price_note: 'Prices from September 2026 reviews; the official site posts no menu.', last_checked: TODAY, items: [
      it('', '', 'Matcha, in a bowl you choose', '¥1,000', 'Tea', 'ask', 'ask', 'September 2026.', 'matcha'),
      it('', '', 'Kakigori, large, hojicha syrup', '¥1,300', 'Kakigori', 'ask', 'ask', 'September 2026.', 'kakigori_hojicha'),
      it('宇治蜜・練乳', '', 'Kakigori, large, Uji syrup and condensed milk', '¥1,400', 'Kakigori', 'ask', 'no', 'September 2026.', 'kakigori_uji_milk'),
      it('', '', 'Kakigori, large, Uji syrup (milk +¥100)', '¥1,300', 'Kakigori', 'ask', 'ask', 'September 2026.', 'kakigori_uji'),
      it('ワドモナカ', '', 'wad monaka (brown rice)', '', 'Sweets', 'ask', 'ask', 'September 2026.', 'monaka'),
      it('', '', 'Tanba black-bean zenzai with grilled mochi', '', 'Sweets', 'ask', 'ask', 'September 2026.', 'zenzai'),
    ] }, {
    cuisine: '急須で入れる日本茶と茶菓子、かき氷を現代作家のうつわで・京都の和束町と静岡の牧之原の農家から届く茶 (公式サイト)・14の茶碗から選んで目の前で点てる抹茶1,000円 (2026年9月)・かぶせ煎茶などの煎茶は一煎目をぬるめの湯で小さな器に、二煎目からは熱い湯で湯のみに、最後に茶殻を醤油とかつお節のサラダで・中国茶はおかわり5回まで・抹茶ラテとほうじ茶ラテ、抹茶蜜は自分で注いでおかわりも・koji tea latte・かき氷 大: 宇治蜜1,300円 (ミルク+100円)、ほうじ茶蜜1,300円、宇治蜜・練乳1,400円、小サイズも。黒蜜、白蜜、宇治は通年、ほうじ茶と和紅茶は期間限定 (2026年9月)・ワドモナカの玄米・焼いた餅と塩昆布を添えた Tanba の黒豆のぜんざい・焼き餅・ごぼう、かりんとう、黒豆などのお茶請け・入り口で茶葉、古物、作家のうつわを販売',
    neighborhood: '南船場4-9-3 東新ビル 2F、細い路地わきの外階段を上がる。オーガニックビルの斜め前。心斎橋駅3番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。お茶そのものやかき氷の茶の蜜はシンプルかもしれないが、茶殻のサラダは醤油で、最中、焼いた餅のぜんざい、かりんとうなどの菓子は説明がない。要確認。',
    vegan_detail: '要確認。煎茶、抹茶、ほうじ茶、中国茶などのお茶と、ミルクなしの茶の蜜のかき氷は合うかも。ラテと練乳は乳製品で、茶殻のサラダにはかつお節。',
    notes: '[カフェ・南船場、鉄の階段を上がった先の日本茶とうつわのカフェ] 南船場の細い路地のわき、古い鉄の階段を上がると、コンクリートの床に使いこんだ木の家具と大きな焼き物が並ぶ、照明を落とした静かな部屋。日本茶を一杯ずつ手で入れる。店のコンセプトは「日本の良きモノ」で、茶道の精神を現代風にアレンジしたもてなし。茶は京都と静岡の農家から直接届き、器は現代の陶芸作家のもので、入り口で買えるほか、上の階のギャラリーで展示もあり、金継ぎの教室も開いている。14の茶碗から抹茶の器を選んだり (ある人は亡くなった陶芸家の Shigaraki の焼き物を選んだ)、煎茶を何煎か味わいの変化とともに楽しんで最後に茶殻をサラダで食べたり、宇治蜜やほうじ茶蜜を自分でかける山盛りのかき氷を頼んだり。食べログ カフェ WEST 百名店 2025。人気で、2026年9月の口コミでは海外からの客も多く、番号札をとって待つことになり、席があくと電話で呼んでくれる。現金のみ、店内では静かに。',
  });
}

save();
