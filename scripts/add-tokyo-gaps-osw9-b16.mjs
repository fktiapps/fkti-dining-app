// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 16.
//   + はし本 Hashimoto (one-person izakaya since 1978 by Midtown; duck hot pot and sake; owner 橋本 洋一 per the NTA invoice register)
//   + 旬菜魚 藍 Shunsai Gyo Ai (seafood kaiseki since about 1996: crab, fugu, soft-shelled turtle course ¥19,700)
//   + Bistro Vino (91-seat wine bistro with terrace; burger lunch, 100+ wines at night)
//   + たか野 Takano (obanzai and seasonal kappo since 1996; Kyoto-trained chef from Niigata)
//   Skipped: フリホーレス ブリトー&サラダ 六本木店 13123514 — Frijoles, 8 shops in central Tokyo per Retty (chain, 5+).
//   Chain check: none of the four is in data/tokyo, osaka or kyoto by name, Tabelog id or address. Bistro Vino is run by
//   Bistro Vino六本木株式会社 (job listing); no sister shop found.
//   Pins: Ai and Takano share 六本木協和ビル西館 (4-4-3) with Tabelog points 1 m apart, so Takano is offset ~8 m north-west
//   (away from Yakitori Rin). Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13123514', 'フリホーレス ブリトー&サラダ 六本木店: Frijoles — 8 shops in central Tokyo (Otemachi, Yaesu, Nihonbashi-Muromachi, Shibuya, Roppongi, Azabu-Juban, Ebisu/Daikanyama, Tamachi) per Retty; chain of 5+');

// ================================================================ はし本
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13023475/'; const R = TB + 'dtlrvwlst/';
  const NTA = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6810522686872';
  const W = day(['18:00', '23:00']); const S = day(['18:00', '22:00']);
  put({
    id: 'tokyo_hashimoto_roppongi', name: 'はし本 (Hashimoto)', category: 'MOM_AND_POP',
    lat: 35.665, lng: 139.732083, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The duck hot pot has a rich soy-sauce broth (November 2025), and the menu includes tonkatsu, tempura and agedashi tofu; nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck hot pot with chicken tsukune, and seafood and meat side dishes.',
    hours_raw: 'Tue–Fri 18:00–23:00 (last order 22:00); Sat 18:00–22:00; closed Sundays and Mondays; occasional closures (Tabelog). The owner runs the shop alone, so food takes time: order a little more at the start and drinks early (2025–2026 reviews). Fridays get busy — book. 5% service charge plus an appetizer charge. 18 seats: 6 at the counter and three sunken-kotatsu tables for 4; shoes off; whole-shop hire. Non-smoking (smoking allowed for private parties with no other guests). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay, Rakuten Pay). A wooden sign in front; next to the Jinro building (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-11, 第1六本木ヴィレッジビル 1F, a quiet street by Tokyo Midtown — 2 min from Roppongi Stn exit 7 (Oedo line)',
    cuisine: 'An izakaya built around duck hot pot, served since the shop opened (October 2026), with homemade drinking dishes and sake (Tabelog shop text) · duck hot-pot course with three appetizers, the hot pot and zosui to finish ¥4,750 (Tabelog) · the hot pot: duck and garlic chives, chicken tsukune, napa cabbage and green onion in a slightly rich soy broth (November 2025) · à la carte in small portions sized to the group: deep-fried yam with nori, smoked daikon with mascarpone, agedashi tofu, water octopus, tonkatsu, tempura (2025–2026 reviews) · about 15 sakes such as Sharaku, Mimuro Sugi, Yuki no Bosha, Houou Bidan, Nanbu Bijin; seasonal fruit liqueurs; shochu, whisky, wine (November 2025–January 2026) · about ¥5,000–7,000 a head (2025–2026 reviews)',
    website: null, gmaps: gm('はし本 六本木4-4-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Roppongi, a one-person duck hot-pot izakaya since 1978] A quiet tatami izakaya a stone\'s throw from Tokyo Midtown — shoes off, a short counter and three sunken tables — that has served its duck hot pot since 1978. The owner cooks and serves alone: duck and garlic chives with tsukune and vegetables in a slightly rich soy broth, then zosui, plus small homemade drinking dishes sized to your group and about fifteen well-known sakes. Diners in 2025–2026 call it a calm, good-value hideaway for Roppongi; one has been coming since 1986. Food comes slowly, so order early and settle in. Duck hot-pot course ¥4,750; book for Fridays.",
    chef_bio: { chef_name: '橋本 洋一 (as registered; no romaji in the sources)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The NTA invoice register lists registration number T6810522686872 — the number on the Tabelog listing — under the individual 橋本 洋一 (registered 1 January 2026). Diners in 2025–2026 describe the owner running the shop alone, with a gentle manner. An October 2026 diner says the izakaya was established in 1978 and has served its duck hot pot since opening; a December 2025 diner has been a regular since 1986.',
      philosophy: 'A Japanese space away from the bustle; carefully made homemade drinking dishes and sake (Tabelog shop text).', specialty: 'Duck hot pot.',
      anecdotes: [
        { text: '"The owner, who runs the place solo with a gentle demeanor, takes some time to serve the dishes" — November 2025, duck hot-pot course.', source: R + 'B517645096/' },
        { text: '"One delightful aspect is that … dishes in smaller portions according to the number of diners." — October 2026.', source: R + 'B537096399/' },
        { text: '"I have been a regular customer since 1986, and this wonderful establishment never fails to deliver consistent quality in both food and warm hospitality." — December 2025.', source: R + 'B531102214/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): はし本、港区六本木4-4-11 第1六本木ヴィレッジビル1F、大江戸線六本木駅7番出口から徒歩2分、火〜金18:00〜23:00 (L.O.22:00)、土18:00〜22:00、日月休み、不定休、サービス料5%とお通し代、18席 (カウンター6、掘りごたつ4席×3)、貸切可、禁煙、カード・電子マネー・QR可、登録番号 T6810522686872。店の紹介: 日本酒を中心にした豊富なお酒、手作りの酒肴、鴨料理と鴨鍋。鴨鍋のおすすめコース4,750円。国税庁の適格請求書発行事業者公表サイト: 登録番号 T6810522686872、氏名 橋本 洋一、登録年月日 令和8年1月1日。口コミ(2025年10月〜2026年10月): 1978年創業、店主が一人で切り盛り、料理は時間がかかる、醤油ベースのやや濃いめの鴨鍋と雑炊、人数に合わせた小盛り、日本酒約15種、1986年から通う常連。',
      confidence: 'medium', sources: [TB, NTA, R + 'B517645096/', R + 'B517887149/', R + 'B518791316/', R + 'B519474851/', R + 'B520805939/', R + 'B520858630/', R + 'B522986808/', R + 'B523729183/', R + 'B531102214/', R + 'B537096399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person izakaya; shoes off; food arrives slowly.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木4-4-11 第1六本木ヴィレッジビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a course; NTA invoice registration from 1 January 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.665000, 139.732083); GSI 東京都港区六本木四丁目4番 (lot) 2m; Ichi Oku (4-4-5) is 11 m, SPIGOLA (4-4-4) 12 m and Kanesada (4-4-6) 13 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B517645096/'],
    price_note: 'Course price from Tabelog (tax included); 5% service plus an appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Duck hot-pot course: three appetizers, duck hot pot, zosui', '¥4,750', 'Course', 'ask', 'no', 'Tabelog; November 2025 review.', 'kamonabe_course'),
      it('', '', 'Smoked daikon with mascarpone', '', 'Small dishes', 'ask', 'no', 'December 2025 review.', 'iburi_mascarpone'),
      it('', '', 'Agedashi tofu', '', 'Small dishes', 'ask', 'no', 'December 2025 review.', 'agedashi'),
    ] }, {
    cuisine: '開店から出している鴨鍋が主役の居酒屋 (2026年10月)。手作りの酒肴と日本酒 (食べログの店の紹介)・前菜3品、鴨鍋、締めの雑炊の鴨鍋コース4,750円 (食べログ)・鴨鍋: 鴨肉とニラ、鶏のつくね、白菜、ねぎを、やや濃いめの醤油の出汁で (2025年11月)・人数に合わせて小盛りにするアラカルト: 長芋の磯辺揚げ、燻製の大根とマスカルポーネ、揚げ出し豆腐、水だこ、とんかつ、天ぷら (2025〜2026年の口コミ)・Sharaku、Mimuro Sugi、Yuki no Bosha、Houou Bidan、Nanbu Bijin など約15種の日本酒、季節の果実酒、焼酎、ウイスキー、ワイン (2025年11月〜2026年1月)・1人約5,000〜7,000円 (2025〜2026年の口コミ)',
    neighborhood: '六本木4-4-11 第1六本木ヴィレッジビル1F、Tokyo Midtown のそばの静かな通り。六本木駅7番出口 (大江戸線) から徒歩2分',
    gf_detail: '要確認。鴨鍋はやや濃いめの醤油の出汁 (2025年11月)。とんかつ、天ぷら、揚げ出し豆腐もある。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。鶏のつくねが入る鴨鍋と、魚介や肉の一品。',
    notes: '[居酒屋・六本木、1978年から店主一人で営む鴨鍋の居酒屋] Tokyo Midtown からすぐの静かな座敷の居酒屋。靴を脱いで上がり、短いカウンターと掘りごたつのテーブルが三つ。1978年から鴨鍋を出している。店主が一人で作って運び、鴨とニラにつくねと野菜をやや濃いめの醤油の出汁で煮て、締めは雑炊。人数に合わせた小盛りの手作りの酒肴と、よく知られた日本酒が約15種。2025〜2026年の客は六本木にしては安く落ち着ける隠れ家と書き、1986年から通う人も。料理はゆっくり出るので早めに頼んでのんびりと。鴨鍋のコース4,750円、金曜は予約を。',
  });
}

// ================================================================ 旬菜魚 藍
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13010458/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_shunsai_gyo_ai_roppongi', name: '旬菜魚 藍 (Shunsai Gyo Ai)', category: 'OMNI',
    lat: 35.665114, lng: 139.732349, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood kaiseki with tempura (salted, February 2024), crab vinegar and a light-soy turtle broth (Tabelog shop text); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab, fugu, seafood, soft-shelled turtle and game.',
    hours_raw: 'Mon–Sat and days before/after holidays: lunch 11:30–13:30 (last order 13:00), by reservation at least one business day ahead; dinner 17:00–22:00 (food last order 21:30) — the shop note gives dinner 17:00–23:00 (last order 22:00); takeaway 16:30–22:00, same-day orders at least 4 hours ahead; closed Sundays and holidays (Tabelog). ¥4,200 charge for appetizers and dessert (included in courses). Soft-shelled turtle course needs booking 4 days ahead. 28 seats: 8 at the counter, three tables for 4, two tatami rooms for 6; private hire up to 50. Non-smoking; smoking area outside the entrance. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (PayPay). Prices are not shown on the menu and some diners were surprised by the bill (March 2023, January 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-4-3, 六本木協和ビル西館 1F, a side street next to Tokyo Midtown — 1 min from Roppongi Stn exit 7 (Oedo line), 4 min (Hibiya line)',
    cuisine: 'Seafood-led Japanese kaiseki and kappo (2022–2025 reviews) · speciality ingredients (Tabelog shop text): sliced 500 g black abalone from Maizuru, Kitamurasaki sea urchin from Rishiri prepared without alum, hairy crab · soft-shelled turtle course ¥19,700, the hot pot made with junmai sake, kombu and a splash of light soy (Tabelog) · in reviews: glutinous rice topped with homemade karasumi; seasonal hassun; Kōbako crab with crab vinegar (November 2023, November 2025); aged fugu and Seki mackerel sashimi; Maizuru oysters, salt-water uni, hamo sashimi and grilled hamo, grilled wild eel (September 2025); horse sashimi, narwhal bacon, moon-bear hot pot (October–November 2025); tempura such as cod shirako and Brussels sprouts; sea-bream rice to finish · sake and shochu including rare bottles · reviewers paid about ¥15,000–20,000, up to ¥50,000+ with a host\'s choices',
    website: null, gmaps: gm('旬菜魚 藍 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Kaiseki · Roppongi, a seafood kaiseki by Midtown with crab, fugu and turtle] A calm counter-and-tatami restaurant in a side street by Tokyo Midtown, open since about 1996, that serves seasonal Japanese cooking built on fine seafood: Maizuru black abalone, alum-free Rishiri sea urchin, Kōbako and hairy crab in winter, aged fugu and Seki mackerel, and a soft-shelled turtle course (¥19,700) whose broth is just sake, kombu and light soy. Reviewers in 2025 also met horse sashimi, narwhal bacon and a moon-bear hot pot. Diners praise the warm service in the dining room; several warn that prices are not on the menu and the bill can surprise. Weekday dinner and booked lunches.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A November 2023 diner says the restaurant opened around 1996 and describes young counter staff and a woman managing the dining room warmly. The Tabelog course text is written in the first person by someone who has tried soft-shelled turtle hot pots across Japan. No one is named in the sources read.',
      philosophy: null, specialty: 'Seafood kaiseki; Kōbako crab; soft-shelled turtle hot pot.',
      anecdotes: [
        { text: '"Finally, the moment for the snow crab arrived. The first of the season was beautifully filled with both the inner and outer roe as well as the meat." — November 2023, lunch course ¥14,300.', source: R + 'B475263038/' },
        { text: '"A surprising highlight was the bacon made from narwhal, which had a unique flavor and a sweet richness that was truly addictive." — October 2025 visit.', source: R + 'B515457655/' },
        { text: '"From the outside, it doesn\'t radiate luxury, so it makes you wonder if you might run into a surprise when you casually stop by." — March 2023.', source: R + 'B436342537/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 旬菜魚 藍、港区六本木4-4-3 六本木協和ビル西館1F、大江戸線六本木駅7番出口から徒歩1分、月〜土・祝前日・祝後日11:30〜13:30 (昼は1営業日前までに要予約)、17:00〜22:00 (店のメモでは23:00まで)、テイクアウト16:30〜22:00、日祝休み、先付・デザート4,200円 (コースは込み)、28席 (カウンター8、テーブル4席×3、座敷6名×2)、貸切50名まで、禁煙、カード・電子マネー・QR可。店の紹介: Maizuru の500gの黒鮑、Rishiri のミョウバン不使用の北紫雲丹、毛蟹、すっぽんのコース19,700円 (4日前までに予約)。口コミ(2017年〜2025年11月): 1996年ごろ開店、からすみの餅米、八寸、香箱蟹、ふぐと Seki の鯖、鱧、天然鰻、馬刺し、イッカクのベーコン、月の輪熊の鍋、鯛めし、値段が書かれておらず会計に驚いたという声。',
      confidence: 'medium', sources: [TB, R + 'B292999533/', R + 'B363951485/', R + 'B420600534/', R + 'B436342537/', R + 'B453900456/', R + 'B475263038/', R + 'B479234639/', R + 'B480976981/', R + 'B514806208/', R + 'B515457655/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses and host-chosen dishes; ask prices in advance.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-3 六本木協和ビル西館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses; reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.665114, 139.732349); GSI 東京都港区六本木四丁目4番 (lot) 25m; Takano (tokyo_takano_roppongi, same building) is the one offset; Yakitori Rin (4-5-14) is 10 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B475263038/'],
    price_note: 'Course price from Tabelog; the snow-crab lunch price is from a November 2023 visit. Menu prices are not shown.', last_checked: TODAY, items: [
      it('', '', 'Soft-shelled turtle course (book 4 days ahead)', '¥19,700', 'Course', 'ask', 'no', 'Tabelog.', 'suppon_course'),
      it('', '', 'Snow-crab lunch course', '¥14,300', 'Lunch', 'ask', 'no', 'November 2023 visit.', 'kani_lunch'),
    ] }, {
    cuisine: '魚介を軸にした日本料理の懐石と割烹 (2022〜2025年の口コミ)・こだわりの食材 (食べログの店の紹介): Maizuru の500gの黒鮑の薄切り、Rishiri のミョウバンを使わない北紫雲丹、毛蟹・すっぽんのコース19,700円。鍋は純米酒、昆布、少しの薄口醤油だけで作る (食べログ)・口コミ: 自家製からすみをのせた餅米、季節の八寸、蟹酢で食べる香箱蟹 (2023年11月、2025年11月)、熟成ふぐと Seki の鯖の刺身、Maizuru の牡蠣、塩水雲丹、鱧の刺身と焼き鱧、天然鰻の焼き物 (2025年9月)、馬刺し、イッカクのベーコン、月の輪熊の鍋 (2025年10〜11月)、鱈の白子や芽キャベツの天ぷら、締めの鯛めし・珍しいものを含む日本酒と焼酎・口コミでは1人約15,000〜20,000円、連れの選んだ料理で50,000円を超えたことも',
    neighborhood: '六本木4-4-3 六本木協和ビル西館1F、Tokyo Midtown の横の脇道。六本木駅7番出口 (大江戸線) から徒歩1分、日比谷線から4分',
    gf_detail: '要確認。魚介の懐石で、天ぷら (塩で、2024年2月)、蟹酢、薄口醤油のすっぽんの出汁 (食べログの店の紹介)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。蟹、ふぐ、魚介、すっぽん、ジビエ。',
    notes: '[懐石・六本木、Midtown の横で蟹、ふぐ、すっぽんの魚介の懐石] Tokyo Midtown の横の脇道にある、カウンターと座敷の落ち着いた店。1996年ごろの開店で、上質な魚介の季節の日本料理を出す: Maizuru の黒鮑、ミョウバンを使わない Rishiri の雲丹、冬の香箱蟹や毛蟹、熟成ふぐと Seki の鯖、純米酒、昆布、薄口醤油だけで出汁をとるすっぽんのコース (19,700円)。2025年には馬刺し、イッカクのベーコン、月の輪熊の鍋に出会った客も。客は温かいもてなしを称え、メニューに値段がなく会計に驚いたという声もいくつか。夜と予約制の昼。',
  });
}

// ================================================================ Bistro Vino
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13005433/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['16:00', '23:00']); const SA = day(['11:30', '23:00']); const SU = day(['11:30', '22:00']);
  put({
    id: 'tokyo_bistro_vino_roppongi', name: 'Bistro Vino', category: 'OMNI',
    lat: 35.661982, lng: 139.731223, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Burgers, pasta, gnocchi and bread are on the menu (2026 reviews); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled vegetables appear on the autumn menu (October 2025), but most dishes are meat, seafood or cheese and no vegan dishes are described.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 16:00–23:00 (16:00–17:00 drinks only); Sat 11:30–23:00; Sun and holidays 11:30–22:00; food last order an hour before closing; open all year except New Year (Tabelog). No table charge. 91 seats: tables, a large table, a 16-seat counter and 33 on the terrace; private hire for 50+, with sound equipment. Non-smoking; smoking area on site. Wheelchair access. Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-6-9, ピラミデビル 1F, behind Motoazabu Police Station towards Roppongi Hills — 2 min from Roppongi Stn',
    cuisine: 'A casual wine bistro: Western lunches, then wine and grilled dishes at night (2026 reviews) · lunch: cheese-avocado burger with fries and salad ¥1,880, chicken steak ¥1,480, pork sauté set with rice or bread; a ¥3,000 course with meat, salad and soup (July 2026) · night: over 100 bottled wines from around the world (September 2026); tapas platter; burrata or mozzarella with seasonal fruit and prosciutto; oysters; mini truffle hash browns with Pecorino; gnocchi in Gorgonzola cream; liver pâté; grilled meats, pasta, shrimp and mushrooms in basil butter; tiramisu (2025–2026 reviews) · Thanksgiving dinner with turkey ¥8,980, 21–29 November 2026 (Tabelog) · glass wine ¥1,000–1,400, highball ¥880 (July 2026)',
    website: null, gmaps: gm('Bistro Vino 六本木 ピラミデビル'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine bistro · Roppongi, an all-day wine bistro with a big terrace] A large, airy bistro on the ground floor of the Pyramide building near Roppongi Hills, with a wall of wine at the door, a long counter and a 33-seat terrace. Lunch is burgers, sandwiches and steaks; from 4 pm it turns into a wine bar with over 100 bottles and plates to share — burrata with fruit and prosciutto, truffle hash browns with Pecorino, Gorgonzola gnocchi, oysters. Diners in 2026 use it for after-work drinks, parties and second stops, and found the staff efficient. Open every day from 11:30; a Thanksgiving turkey dinner runs 21–29 November.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by Bistro Vino六本木株式会社 (job listing at en-gage.net). An English-language guide notes it was formerly called Roti (metropolisjapan.com). No one is named in the sources read.',
      philosophy: null, specialty: 'Wine by the glass and bottle; truffle hash browns.',
      anecdotes: [
        { text: '"For lunch, … Western dishes like burgers, sandwiches, and steaks, and it transforms into a bar at night." — July 2026.', source: R + 'B531521141/' },
        { text: '"The hash browns are bite-sized, packed with truffle flavor and plenty of Pecorino cheese!" — September 2026.', source: R + 'B535897904/' },
        { text: '"As soon as you open the door, you’re greeted by a stunning display of wines lined up from top to bottom." — June 2026.', source: R + 'B532068210/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Bistro Vino、港区六本木6-6-9 ピラミデビル1F、六本木駅から徒歩2分、月〜金11:30〜14:30、16:00〜23:00 (16〜17時は飲み物のみ)、土11:30〜23:00、日祝11:30〜22:00、年末年始以外は無休、チャージなし、91席 (テラス33席)、貸切50名以上、禁煙 (喫煙所あり)、カード・電子マネー・QR可。サンクスギビングディナー8,980円 (11月21〜29日)。口コミ(2025年10月〜2026年10月): 昼はハンバーガー、サンドイッチ、ステーキ、夜はワインバー、100種以上のボトルワイン、ブッラータと果物と生ハム、トリュフのハッシュポテト、ゴルゴンゾーラのニョッキ、牡蠣。運営 Bistro Vino六本木株式会社。',
      confidence: 'medium', sources: [TB, 'https://en-gage.net/bistro/', 'https://metropolisjapan.com/bistro-vino/', R + 'B492952510/', R + 'B531521141/', R + 'B532036161/', R + 'B532068210/', R + 'B532263668/', R + 'B532626474/', R + 'B533530260/', R + 'B535897904/', R + 'B537582095/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large casual bistro; wine list and photo-friendly sharing plates.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-6-9 ピラミデビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a November 2026 course; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.661982, 139.731223); GSI 東京都港区六本木六丁目6番 (lot) 31m; no record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531521141/', TB],
    price_note: 'Lunch and drink prices from a July 2026 review; Thanksgiving course from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Cheese-avocado burger with fries and salad (lunch)', '¥1,880', 'Lunch', 'no', 'no', 'July 2026 review.', 'burger'),
      it('', '', 'Chicken steak with fries and salad (lunch)', '¥1,480', 'Lunch', 'ask', 'no', 'July 2026 review.', 'chicken_steak'),
      it('', '', 'Course: meat main, salad, soup', '¥3,000', 'Course', 'ask', 'no', 'July 2026 review.', 'course'),
      it('', '', 'Thanksgiving dinner (turkey plate, seafood salad, mushroom soup, panna cotta), 21–29 Nov', '¥8,980', 'Course', 'ask', 'no', 'Tabelog.', 'thanksgiving'),
    ] }, {
    cuisine: 'カジュアルなワインビストロ: 昼は洋食、夜はワインとグリル (2026年の口コミ)・昼: ポテトとサラダ付きのチーズアボカドバーガー1,880円、チキンステーキ1,480円、ご飯かパンを選ぶポークソテーのセット、肉のメインとサラダとスープの3,000円のコース (2026年7月)・夜: 世界の100種以上のボトルワイン (2026年9月)、タパスの盛り合わせ、季節の果物と生ハムのブッラータやモッツァレラ、牡蠣、ペコリーノをかけたトリュフの香りのミニハッシュポテト、ゴルゴンゾーラクリームのニョッキ、レバーパテ、グリル、パスタ、海老ときのこのバジルバター炒め、ティラミス (2025〜2026年の口コミ)・七面鳥のサンクスギビングディナー8,980円、2026年11月21〜29日 (食べログ)・グラスワイン1,000〜1,400円、ハイボール880円 (2026年7月)',
    neighborhood: '六本木6-6-9 ピラミデビル1F、Motoazabu Police Station の裏、Roppongi Hills 方面。六本木駅から徒歩2分',
    gf_detail: '要確認。ハンバーガー、パスタ、ニョッキ、パンがある (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: '要確認。秋のメニューに焼き野菜はある (2025年10月) が、ほとんどが肉、魚介、チーズで、ヴィーガンの料理の記載はない。',
    notes: '[ワインビストロ・六本木、大きなテラスのある昼から夜のワインビストロ] Roppongi Hills 近くのピラミデビル1階の広く開放的なビストロ。入口にワインの壁、長いカウンター、33席のテラス。昼はハンバーガー、サンドイッチ、ステーキ。夕方4時からは100種以上のボトルのワインバーになり、ブッラータと果物と生ハム、ペコリーノのトリュフハッシュポテト、ゴルゴンゾーラのニョッキ、牡蠣などをシェアして。2026年の客は仕事帰りの一杯、パーティー、二軒目に使い、スタッフの手際がよいと書く。毎日11時半から。11月21〜29日は七面鳥のサンクスギビングディナー。',
  });
}

// ================================================================ たか野
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001180/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_takano_roppongi', name: 'たか野 (Takano)', category: 'OMNI',
    lat: 35.665161, lng: 139.732276, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style obanzai and seasonal dishes, including fried fugu and bamboo-shoot tempura (2024–2025 reviews); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai with fish such as herring, plus fugu, crab and sea-bream dishes.',
    hours_raw: 'Mon–Sat 18:00–23:00; closed Sundays (Tabelog). 19 seats: a counter and two tables for 4 (November 2025); whole-shop hire. Non-smoking. Cards (JCB, AMEX only); no e-money or QR. Walk-ins welcome but booking advised — it is small (February 2024). Book the sea-bream chazuke in advance (October 2023 visit). A cosy room where it is best to keep the noise down (October 2023 visit).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-3, 六本木協和ビル西館 1F, at the end of a one-way street behind Tokyo Midtown — about 3 min from Roppongi Stn',
    cuisine: 'Obanzai and seasonal kappo shaped by training in Osaka and Kyoto, with traditional Niigata dishes (Tabelog shop text) · obanzai lined up on the counter, such as herring with eggplant (nishin nasu), nikogori, iidako, nikujaga, mozuku vinegar; a monthly-changing à la carte and an omakase (2023–2025 reviews) · winter fugu — sashimi, fried, shirako with salt, fin sake; Kōbako crab; matsutake; hamo in summer; bamboo-shoot tempura in spring · to finish: sea-bream chazuke with sesame ground in front of you, sea-bream rice made into onigiri, fugu zosui simmered for hours at weekends · sake from Niigata such as Tsurunoe Yukionna; barley shochu · about ¥8,000–15,000 a head (2024–2026 reviews)',
    website: null, gmaps: gm('たか野 六本木4-4-3'), menu_url: null,
    notes: "[Obanzai · Roppongi, a 1996 back-alley kappo of obanzai and fugu] At the end of a one-way street behind Tokyo Midtown, a small, homely kappo of 19 seats, open since 1996, where the counter is lined with bowls of obanzai — herring with eggplant is the one people mention — and the menu follows the seasons: fugu sashimi, fried fugu and fin sake in winter, Kōbako crab, matsutake, hamo. The chef trained in Kyoto and Osaka, comes from Niigata and pours its sake; dinner ends with a sesame sea-bream chazuke or a long-simmered fugu zosui. Diners from 2023 to 2026 call it authentic Japanese food at a surprisingly fair price in a calm, old-Roppongi atmosphere. JCB and AMEX only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Niigata (November 2025 review)',
      background: 'Established in 1996, drawing on training in Osaka and Kyoto and on traditional Niigata dishes (Tabelog shop text). Reviewers add that the chef trained for 15 years at Akasaka Tsuyama and also in Osaka (February 2024), trained for many years in Kyoto and comes from Niigata (November 2025), and has run the shop for a long time; part-time staff are mostly regulars\' children (December 2025). The chef is not named in the sources read.',
      philosophy: 'Homemade Japanese food has become rare; savour obanzai and seasonal dishes with good sake in a calm setting (Tabelog shop text).', specialty: 'Obanzai; nishin nasu; winter fugu.',
      anecdotes: [
        { text: '"Dining at Takano makes expensive Japanese cuisine seem ridiculous, as you can enjoy authentic dishes at a surprisingly low price." — February 2024, fugu.', source: R + 'B421846125/' },
        { text: '"On weekends, … a delicious fugu (pufferfish) zosui (rice soup) that simmers for hours." — December 2025.', source: R + 'B520124685/' },
        { text: '"Everything was delicious, but the simmered eggplant and herring was irresistible for someone like me who loves eggplant." — May 2026.', source: R + 'B528961627/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たか野、港区六本木4-4-3 六本木協和ビル西館1F、月〜土18:00〜23:00、日休み、19席、貸切可、禁煙、カード (JCB、AMEX のみ)。店の紹介: 1996年創業の六本木の路地裏の割烹、Osaka と Kyoto での修業と Niigata の郷土料理、おばんざいと季節の料理と日本酒。口コミ(2023年10月〜2026年5月): カウンターに並ぶおばんざい、鰊茄子、煮こごり、冬のふぐ (刺身、唐揚げ、白子、ひれ酒)、香箱蟹、松茸、鯛茶漬け、ふぐ雑炊、Niigata の酒 Tsurunoe Yukionna、店主は Akasaka Tsuyama で15年修業という声、Niigata 出身、値段が手頃。',
      confidence: 'medium', sources: [TB, R + 'B421846125/', R + 'B473997343/', R + 'B479343201/', R + 'B498929500/', R + 'B499823698/', R + 'B517386893/', R + 'B520124685/', R + 'B524192627/', R + 'B528961627/', R + 'B531079020/'] },
    cultural_comfort: { level: 'japanese', note: 'Small regulars\' kappo; obanzai chosen from the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-3 六本木協和ビル西館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.665111, 139.732336), 1 m from Shunsai Gyo Ai (tokyo_shunsai_gyo_ai_roppongi, same building), so offset ~8 m north-west, away from Yakitori Rin (now 18 m); GSI 東京都港区六本木四丁目4番 (lot) 26m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473997343/', R + 'B498929500/'],
    price_note: 'No menu prices in the sources read; reviewers paid about ¥8,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Herring with eggplant (nishin nasu), obanzai', '', 'Obanzai', 'ask', 'no', '2024–2026 reviews.', 'nishin_nasu'),
      it('', '', 'Sea-bream chazuke (book ahead)', '', 'Finish', 'ask', 'no', 'October 2023 visit.', 'taichazuke'),
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', '2023–2025 reviews.', 'omakase'),
    ] }, {
    cuisine: 'Osaka と Kyoto での修業に Niigata の郷土料理を加えたおばんざいと季節の割烹 (食べログの店の紹介)・カウンターに並ぶおばんざい: 鰊茄子、煮こごり、飯蛸、肉じゃが、もずく酢。月替わりのアラカルトとおまかせ (2023〜2025年の口コミ)・冬のふぐ (刺身、唐揚げ、塩の白子、ひれ酒)、香箱蟹、松茸、夏の鱧、春の筍の天ぷら・締め: 目の前で胡麻をする鯛茶漬け、おにぎりにした鯛めし、週末に何時間も煮るふぐ雑炊・Niigata の Tsurunoe Yukionna などの日本酒、麦焼酎・1人約8,000〜15,000円 (2024〜2026年の口コミ)',
    neighborhood: '六本木4-4-3 六本木協和ビル西館1F、Tokyo Midtown の裏の一方通行の突き当たり。六本木駅から徒歩約3分',
    gf_detail: '要確認。京風のおばんざいと季節の料理で、ふぐの唐揚げや筍の天ぷらも (2024〜2025年の口コミ)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。鰊などの魚を使うおばんざいと、ふぐ、蟹、鯛の料理。',
    notes: '[おばんざい・六本木、1996年からの路地裏の割烹、おばんざいとふぐ] Tokyo Midtown の裏の一方通行の突き当たりにある19席の家庭的な割烹で、1996年から。カウンターにおばんざいの鉢が並び (よく挙がるのは鰊茄子)、料理は季節で変わる: 冬はふぐの刺身、唐揚げ、ひれ酒、香箱蟹、松茸、鱧。店主は Kyoto と Osaka で修業し、Niigata 出身でその酒も出す。締めは胡麻の鯛茶漬けか、じっくり煮たふぐ雑炊。2023〜2026年の客は本物の日本料理が驚くほど手頃と書き、昔の六本木のような落ち着いた雰囲気。カードは JCB と AMEX のみ。',
  });
}

save();
