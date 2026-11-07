// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 53.
//   Queue run from the osw2 worktree, 2026-11-07.
//   notable (queue.mjs kyoto-missed next notable 200): all three lane shops are chains — skipped; the batch is filled from core.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 麺屋たけ井 近鉄京都駅店, 銀座ライオン 京都アバンティ店, 想夫恋 京都七条大宮店 — chains; 黒桜 八条口店 — brand already in data.
//   + SERENO 食堂 (Italian bar-trattoria in the Miyakomichi mall at Kyoto Station) — 株式会社オートアンドハウス, a small Kyoto company;
//     one other SERENO in our crawl.
//   + 鮨・料理 なかた Sushi Ryori Nakata (sushi-and-kaiseki counter by Kyoto Station Hachijo exit; moved from Shijo-Karasuma 2024) —
//     Tabelog names frenchman-rakuchin.jp: 有限会社らくちん, the local group already drafted for 仏男 and 食道 萬きち.
//   + スリランカキッチン クルンドゥ Sri Lanka Kitchen Kurundu (Sri Lankan curry near Kyoto University; since 2019)
//   + 京都ホルモン焼うどん 田中 Kyoto Horumon Yaki Udon Tanaka (teppan horumon yaki udon in Nishijin; since 2013) — run by a couple.
//   None of the four is in data/kyoto.json: grep by id, name and address; 釜殿町31 is the Miyakomichi mall and 西山王町1-5 the
//   building of kyoto_shokudo_mankichi (same operator, different shop).
//   Service charges: none listed; SERENO asks one food order at lunch and one drink at dinner (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26016063', 'トニーローマ イオンモールＫＹＯＴＯ店: a branch of the US rib chain Tony Roma’s (official Japan site tonyromas.jp; Japan operation since 1979 per Gurunavi); our crawl also lists the Roppongi shop');
skip('26023689', 'エッグスンシングス 京都四条店: a chain — the official Japan site (eggsnthingsjapan.com, read 2026-11-07) lists shops in Odaiba, Saitama, EXPOCITY, Tokyo-Bay, Tachikawa, Nagashima, Kawasaki, Sendai, Harajuku, Nagoya, Umeda and more');
skip('26024913', '牛カツ京都勝牛 京都駅前店: a chain — eight 京都勝牛 shops in our crawls; operator 株式会社京都勝牛 (agara.co.jp, November 2025)');
skip('26043045', '麺屋たけ井 近鉄京都駅店: a chain — the official site (menya-takei.com/shop, read 2026-11-07) lists 本店, 阪急梅田, 京都ヨドバシ, 京阪くずは, エミル高槻, 草津, 彦根, 橿原, 羽曳野, 貝塚, 岩出, 鈴鹿, 近鉄京都駅 and more');
skip('26000607', '銀座ライオン 京都アバンティ店: a chain — Sapporo Lion’s beer-hall brand (Tabelog links ginzalion.jp shop 47; invoice T5010001044916, Tokyo); our crawls list three 銀座ライオン shops');
skip('26023515', '想夫恋 京都七条大宮店: a chain — the Hita yakisoba brand 想夫恋 (sofuren.com, read 2026-11-07) runs a store-search across many shops, including 本店 and 友田店');
skip('26039769', '黒桜 八条口店: a same-concept branch of a brand already in data — kyoto_kyo_kurozakura_kiyamachi (京・黒桜, A5 wagyu yakiniku)');

// ================================================================ SERENO 食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031771/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_sereno_shokudo', name: 'セレーノ食堂 (SERENO)', category: 'OMNI',
    lat: 34.98466161788134, lng: 135.75635055015937, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza on Caputo flour, fresh pasta, gnocchi gratin, tapas and steak; Tabelog lists vegetarian options but no gluten information (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; vegan dishes are not described (Tabelog).',
    hours_raw: '11:00–22:00 (last order 21:00), daily, with occasional closures; 31 December and 1 January to 20:00 (Tabelog). Bookings accepted; 90-minute tables at busy times; tables released 15 minutes after the booked time (Tabelog). One food order per person at lunch, one drink at dinner (Tabelog). Cards, transport IC, e-money and QR (Tabelog). 48 seats: a 6-seat counter and tables; non-smoking; wheelchair accessible; free Wi-Fi; children welcome (Tabelog; August 2025). In the Kintetsu Meitengai "Miyakomichi" mall at Kyoto Station’s Hachijo side, 1 min from Kintetsu Kyoto Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hachijo side — Miyakomichi mall',
    cuisine: 'Italian bar-trattoria: wine and seasonal tapas at night, pizza and pasta at lunch (Tabelog) · signature overflowing "kobore" sparkling wine (Tabelog; June 2026) · pizza with Caputo flour, e.g. Margherita, Bismarck; fresh pasta — salmon genovese, ragù bianco, basil, prawn pescatore; gnocchi gratin; warm oil sardines; baby octopus; green salad (2025–2026) · pasta or pizza lunch with salad and bread (2025–2026) · standard dinner course of six dishes with domestic beef steak ¥4,500 (Tabelog)',
    website: null, gmaps: gm('SERENO 京都駅 みやこみち'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Kyoto Station Miyakomichi, pizza, pasta and overflowing sparkling] A wood-toned Italian bar-trattoria in the mall on the Hachijo side of Kyoto Station: lunch sets of fresh pasta or crisp pizza with salad and bread, and at night tapas — warm house sardines, baby octopus — with glasses of sparkling poured to overflowing. A six-dish course with steak is ¥4,500. Child-friendly; open daily 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社オートアンドハウス (invoice register); chefs not named'], origin: null,
      background: 'The qualified-invoice holder is 株式会社オートアンドハウス of Sakyo, Kyoto (NTA); a job listing describes it as running the Italian restaurant alongside car sales and property businesses (careermap.jp). Our crawl also lists a セレーノ. Tabelog’s introduction: a bar-style evening with wine and the signature "kobore sparkling", seasonal tapas, hot pizzas and pasta to finish, and good-value lunches.',
      philosophy: null,
      specialty: 'Pizza and fresh pasta; "kobore" sparkling wine.',
      anecdotes: [
        { text: 'A May 2026 sightseer stopped at 5 p.m. for a beer and antipasti — warm, freshly cooked sardines — and stayed for dinner.', source: R + 'B528456193/' },
        { text: 'An August 2025 parent was glad to find a child-friendly lunch at Kyoto Station.', source: R + 'B531186715/' },
        { text: 'A repeat visitor (April 2026) stops in every time on the way back from Kyoto.', source: R + 'B518588255/' },
      ],
      japanese_sources_summary: '食べログ: SERENO (セレーノ食堂)、イタリアン・居酒屋・ピザ、下京区東塩小路釜殿町31-1 近鉄名店街みやこみち、近鉄京都駅から徒歩1分、毎日 11:00〜22:00 (L.O. 21:00)、12月31日と1月1日は20時まで、混雑時は90分制、15分の遅刻で席を解放、ランチは1フードオーダー制・ディナーは1ドリンク制、カード・電子マネー・QR可、48席 (カウンター6、テーブル)、禁煙、車椅子可、Wi-Fi、ベジタリアン対応、インボイス T3130001006071 (株式会社オートアンドハウス)。公式紹介: 夜はワインと名物「こぼれスパークリング」のバル、季節のタパス、カプート粉のピザ、生パスタ、お得なランチ、国産牛ステーキがメインのスタンダードディナーコース6品4,500円。会社: イタリアンレストランのほか自動車販売や不動産も (careermap.jp)。口コミ (2025〜2026年、英語): パスタランチ (サラダ、パン)、ピザランチ、マルゲリータ、ビスマルク、サーモンのジェノベーゼ、ラグー・ビアンコ、バジル、海老のペスカトーレ、ニョッキのグラタン、温かいオイルサーディン、いいだこ、グリーンサラダ、子ども連れでも。',
      confidence: 'medium', sources: [TB, R + 'B461370990/', R + 'B501512599/', R + 'B506985890/', R + 'B509172394/', R + 'B518588255/', R + 'B519502750/', R + 'B526561803/', R + 'B526948449/', R + 'B528456193/', R + 'B529661807/', R + 'B531186715/', R + 'B537995560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station mall; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路釜殿町31-1 近鉄名店街みやこみち',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.984662, 135.756351); GSI 京都府京都市下京区東塩小路釜殿町31番地 (lot) resolves 213m away — the lot covers the long Miyakomichi mall — so not lot-confirmed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog; lunch prices not given in reviews.', last_checked: TODAY, items: [
      it('', '', 'Standard dinner course, six dishes with domestic beef steak', '¥4,500', 'Course', 'no', 'no', 'Tabelog.', 'course'),
      it('', '', 'Pasta lunch with salad and bread', '', 'Lunch', 'no', 'no', '', 'pasta_lunch'),
      it('', '', 'Pizza (e.g. Margherita)', '', 'Pizza', 'no', 'ask', '', 'pizza'),
    ] }, {
    cuisine: 'イタリアンのバル兼トラットリア: 夜はワインと季節のタパス、昼はピザとパスタ (食べログ)・名物は「こぼれスパークリング」 (食べログ、2026年6月)・カプート粉のピザ (マルゲリータ、ビスマルク)、生パスタ (サーモンのジェノベーゼ、ラグー・ビアンコ、バジル、海老のペスカトーレ)、ニョッキのグラタン、温かいオイルサーディン、いいだこ、グリーンサラダ (2025〜2026年)・サラダとパン付きのパスタやピザのランチ (2025〜2026年)・国産牛ステーキがメインの6品のスタンダードディナーコース4,500円 (食べログ)',
    neighborhood: '京都駅八条口側、みやこみち',
    gf_detail: '要確認。カプート粉のピザ、生パスタ、ニョッキのグラタン、タパス、ステーキ。食べログではベジタリアン対応だがグルテンの情報はない (食べログ、口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応だが、ヴィーガンの料理は説明されていない (食べログ)。',
    notes: '[イタリアン・京都駅みやこみち、ピザ、パスタ、こぼれスパークリング] 京都駅八条口側の名店街にある木の内装のイタリアン。昼は生パスタやカリッとしたピザにサラダとパンのランチ、夜は温かいオイルサーディンやいいだこのタパスと、あふれるまで注ぐスパークリング。ステーキ付き6品のコースは4,500円。子ども連れも歓迎、毎日11:00〜22:00。',
  });
}

// ================================================================ 鮨・料理 なかた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041551/'; const R = TB + 'dtlrvwlst/';
  const CO = 'https://frenchman-rakuchin.jp/company/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sushi_ryori_nakata', name: '鮨・料理 なかた (Sushi Ryori Nakata)', category: 'OMNI',
    lat: 34.982013517884475, lng: 135.76087123012948, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi with soy sauce on the side, plus kaiseki-style appetisers, tempura and grilled fish in an omakase course; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish omakase (Tabelog).',
    hours_raw: '17:00–24:00; closed Wednesday (Tabelog). Bookings recommended; omakase course only; children order courses like adults (Tabelog; April 2025). Cards and PayPay; no e-money (Tabelog). 10 seats at a U-shaped counter upstairs; private hire up to 20; non-smoking (Tabelog; March 2025). Up the stairs on the 2nd floor, 7 min walk from the Hachijo exit of Kyoto Station (Tabelog; May 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Kujo, south of Kyoto Station Hachijo exit — 7 min walk',
    cuisine: 'Sushi and dishes by a kaiseki-trained chef, an omakase course (Tabelog) · seasonal appetisers with fine knife work — e.g. sanma and matsutake in autumn (August 2025) · Edomae-style nigiri with soy sauce served on the side (March 2025) · sashimi, tempura and grilled fish within the course (Tabelog) · an ¥8,000 course (March 2025); typical spend ¥10,000–15,000 (2025 reviews) · sake chosen to taste (March 2025)',
    website: null, gmaps: gm('鮨・料理 なかた 京都駅 八条口'), menu_url: TB,
    notes: "[Sushi · Kyoto Station Hachijo side, kaiseki-trained omakase] A bright ten-seat U-shaped counter upstairs a short walk south of Kyoto Station, where a kaiseki-trained chef paces sushi and seasonal small dishes to your drinking — beautiful appetisers, Edomae nigiri, sake chosen to taste. Omakase only, about ¥8,000–15,000. Open till midnight; closed Wednesday. Moved here from Shijo-Karasuma in 2024.",
    chef_bio: { chef_name: null, roles: ['Chef not named; trained in kaiseki (Tabelog); operator 有限会社らくちん per the website Tabelog lists'], origin: null,
      background: 'Opened here 22 July 2024 after moving from Shijo-Karasuma (Tabelog). Tabelog lists frenchman-rakuchin.jp, the site of 有限会社らくちん, a Kyoto group of 11 shops (8 direct, 3 franchised) that also runs 仏男 and 食道 萬きち (in the same building). Tabelog’s introduction: a counter-only hideaway where the chef makes sushi before you, with sashimi, tempura and grilled fish across rich courses.',
      philosophy: null,
      specialty: 'Omakase of sushi and seasonal dishes.',
      anecdotes: [
        { text: 'A February 2025 regular from the Shijo-Karasuma days found the craft unchanged after the move.', source: R + 'B501859450/' },
        { text: 'A February 2026 diner arriving at 21:30 after work was still warmly welcomed.', source: R + 'B523664271/' },
        { text: 'A May 2025 guest booked for 17:00 climbed a pitch-dark staircase as the staff were still getting ready.', source: R + 'B507219198/' },
      ],
      japanese_sources_summary: '食べログ: 鮨・料理 なかた、寿司・魚介料理・日本料理、南区東九条西山王町1-5 2F、京都駅から徒歩7分 (八条口が便利)、月火木金土日・祝 17:00〜24:00、水曜定休、予約可、コースは子どもも大人と同じ、カード・PayPay可、電子マネー不可、10席、貸切20名まで、禁煙、2024年7月22日オープン、ウェブサイトとして frenchman-rakuchin.jp (有限会社らくちん)。公式紹介: 四条烏丸から移転、カウンターのみの隠れ家、懐石で修業した料理人の鮨と料理、刺身、天ぷら、焼き魚などのコース。口コミ (2025〜2026年、英語): コの字のカウンター10席、おまかせのみ、八寸や秋刀魚と松茸の前菜、江戸前の握り、醤油は別、8,000円のコース、好みに合わせた日本酒、移転前からの常連、夜遅くでも。',
      confidence: 'medium', sources: [TB, CO, R + 'B498325466/', R + 'B501859450/', R + 'B502140006/', R + 'B502911986/', R + 'B503874909/', R + 'B505848736/', R + 'B507219198/', R + 'B514661814/', R + 'B515550186/', R + 'B516469701/', R + 'B523664271/', R + 'B531031371/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町1-5 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (34.982014, 135.760871); cross-checked: GSI 京都府京都市南区東九条西山王町1番地 (lot) 46m; 6m from kyoto_shokudo_mankichi (same building, same operator); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502911986/'],
    price_note: 'Course price from a March 2025 review; spend ¥10,000–15,000 typical.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of sushi and dishes', '¥8,000', 'Course', 'ask', 'no', 'March 2025.', 'omakase'),
    ] }, {
    cuisine: '懐石で修業した料理人の鮨と料理のおまかせ (食べログ)・包丁の冴えた季節の前菜、たとえば秋の秋刀魚と松茸 (2025年8月)・醤油を別に添える江戸前の握り (2025年3月)・コースの中に刺身、天ぷら、焼き魚 (食べログ)・8,000円のコース (2025年3月)、ふつうは10,000〜15,000円ほど (2025年の口コミ)・好みに合わせた日本酒 (2025年3月)',
    neighborhood: '東九条、京都駅八条口の南。徒歩7分',
    gf_detail: '要確認。醤油は別添えの江戸前の鮨に、懐石風の前菜、天ぷら、焼き魚のおまかせ。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮨と魚のおまかせ (食べログ)。',
    notes: '[鮨・京都駅八条口側、懐石出身のおまかせ] 京都駅から南へ少しのビル2階の、明るいコの字のカウンター10席。懐石で修業した料理人が、飲むペースに合わせて鮨と季節の小皿を出す。美しい前菜、江戸前の握り、好みに合わせた日本酒。おまかせのみで8,000〜15,000円ほど。深夜0時まで、水曜休み。2024年に四条烏丸から移転。',
  });
}

// ================================================================ スリランカキッチン クルンドゥ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033307/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_sri_lanka_kitchen_kurundu', name: 'スリランカキッチン クルンドゥ (Sri Lanka Kitchen Kurundu)', category: 'OMNI',
    lat: 35.025848197861585, lng: 135.77643694056133, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sri Lankan rice-and-curry plates with vegetable sides; one option adds a cutlet; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the plates come with several vegetable sides, but vegan dishes are not described (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:00, dinner 17:30–21:00, Tuesday–Friday; closed Saturday, Sunday and Monday; hours may change (Tabelog). Bookings accepted. No cards or e-money; QR payments accepted (Tabelog). 15 seats with a counter; non-smoking; children welcome (Tabelog). In a residential street beside the YMCA dormitory near Kyoto University, about 8 min walk from Demachiyanagi Stn (Tabelog; October 2024).',
    hours: { 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanaka, near Kyoto University — 8 min walk from Demachiyanagi Stn',
    cuisine: 'Sri Lankan rice and curry: Thai-like rice with about five vegetable sides and the chosen curry on the side, mixed together as you eat (2024–2026 reviews) · chicken curry ¥1,200; spiced egg topping ¥150 (January 2024); mutton curry ¥1,400 (January 2026); mackerel curry with a cutlet ¥1,550 (January 2024); firefly squid curry and two-curry combinations (March 2025) · lighter and less oily than Indian curry (September 2025; August 2026) · shared plates at dinner; shochu and wine (Tabelog; October 2025)',
    website: null, gmaps: gm('スリランカキッチン クルンドゥ'), menu_url: TB,
    notes: "[Sri Lankan · near Kyoto University, rice-and-curry plates] A small, bright Sri Lankan kitchen tucked into a residential lane by Kyoto University: fragrant rice ringed with about five spiced vegetable sides and your curry — chicken, mutton, mackerel, seasonal firefly squid — to mix as you go, about ¥1,200–1,550. Lighter than Indian curry. Open Tuesday–Friday only; no cards.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 10 November 2019 (Tabelog). Reviewers (2023–2026) describe authentic Sri Lankan curry suited to Japanese tastes, served with several vegetable sides, near the YMCA dormitory off the Kyoto University campus.',
      philosophy: null,
      specialty: 'Rice and curry with vegetable sides.',
      anecdotes: [
        { text: 'A January 2024 diner tried the mackerel curry with a cutlet and found the portion generous.', source: R + 'B478743091/' },
        { text: 'A March 2025 visitor paired a seasonal firefly-squid curry with chicken curry.', source: R + 'B503293493/' },
        { text: 'A July 2026 first-timer regretted not coming sooner — the vegetable sides were as good as the curry.', source: R + 'B531135715/' },
      ],
      japanese_sources_summary: '食べログ: スリランカキッチン クルンドゥ、カレー・スリランカ料理、左京区田中阿達町33-15、京阪出町柳駅2・4番出口から徒歩約8分、叡電出町柳駅から約10分、神宮丸太町駅5番出口から約14分、火〜金 11:30〜14:00・17:30〜21:00、土日月定休、予約可、カード・電子マネー不可、QR可、15席、禁煙、子ども可、ベジタリアン対応、2019年11月10日オープン。口コミ (2023〜2026年、英語): タイ米のようなご飯に野菜のおかず5種ほど、カレーは別、混ぜて食べる、チキンカレー1,200円、スパイス卵150円、マトンカレー1,400円、カツのせ鯖カレー1,550円、ホタルイカのカレー、あいがけ、インドカレーより軽い、京大近くのYMCA寮の隣。',
      confidence: 'medium', sources: [TB, R + 'B473524180/', R + 'B478743091/', R + 'B478793092/', R + 'B479318652/', R + 'B493477181/', R + 'B503293493/', R + 'B514229264/', R + 'B514939276/', R + 'B520361393/', R + 'B525962386/', R + 'B531135715/', R + 'B534414818/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR payment, no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区田中阿達町33-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.025848, 135.776437); GSI resolved the address to a different town (田中下柳町, 465m), so not lot-confirmed; the Tabelog point fits the stated walks from Demachiyanagi and Jingu-Marutamachi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479318652/', R + 'B520361393/', R + 'B478743091/'],
    price_note: 'Prices from January 2024 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken curry with rice and vegetable sides', '¥1,200', 'Curry', 'ask', 'no', 'January 2024.', 'chicken'),
      it('', '', 'Mutton curry', '¥1,400', 'Curry', 'ask', 'no', 'January 2026.', 'mutton'),
      it('', '', 'Mackerel curry with a cutlet', '¥1,550', 'Curry', 'no', 'no', 'January 2024.', 'saba_katsu'),
      it('', '', 'Spiced egg (topping)', '¥150', 'Topping', 'ask', 'no', 'January 2024.', 'egg'),
    ] }, {
    cuisine: 'スリランカのライス&カレー: タイ米のようなご飯に野菜のおかず5種ほど、選んだカレーは別に添え、混ぜながら食べる (2024〜2026年の口コミ)・チキンカレー1,200円、スパイス卵のトッピング150円 (2024年1月)、マトンカレー1,400円 (2026年1月)、カツのせ鯖カレー1,550円 (2024年1月)、ホタルイカのカレーやあいがけ (2025年3月)・インドカレーより軽く油が少ない (2025年9月、2026年8月)・夜は取り分けの料理、焼酎とワイン (食べログ、2025年10月)',
    neighborhood: '田中、京大の近く。出町柳駅から徒歩8分',
    gf_detail: '要確認。野菜のおかず付きのスリランカのライス&カレー、カツのせもある。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応で野菜のおかずも多いが、ヴィーガンの料理は説明されていない (食べログ、口コミ)。',
    notes: '[スリランカ料理・京大の近く、ライス&カレー] 京大近くの住宅街の路地にある小さく明るいスリランカ料理店。香りのいいご飯を野菜のスパイスおかず5種ほどが囲み、チキン、マトン、鯖、季節のホタルイカなどのカレーを混ぜながら。1,200〜1,550円ほど。インドカレーより軽い。営業は火〜金のみ、カード不可。',
  });
}

// ================================================================ 京都ホルモン焼うどん 田中
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023245/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.happyandthanks.com/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_horumon_yaki_udon_tanaka', name: '京都ホルモン焼うどん 田中 (Kyoto Horumon Yaki Udon Tanaka)', category: 'OMNI',
    lat: 35.02268928785612, lng: 135.75297369054587, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature is wheat udon stir-fried on the teppan with offal (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu offal, pork and chicken teppan dishes (reviews).',
    hours_raw: '17:30–24:00 (last order 22:00), Wednesday–Sunday; closed Monday and Tuesday; hours may change (Tabelog). Bookings accepted — tables fill early (September 2024). Cards (JCB, AMEX, Diners) and e-money; no QR (Tabelog). 18 seats: 8 at the teppan counter and 10 at tables; non-smoking; about 7 parking spaces; children welcome; takeout (Tabelog). Run by a couple — the husband a former French-restaurant chef (June and December 2024). 1 min walk from the Horikawa-Shimochojamachi bus stop in Nishijin (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishijin, Shimochojamachi — 1 min from the Horikawa-Shimochojamachi bus stop',
    cuisine: 'Horumon yaki udon on a teppan, served tsukemen-style with a special dipping sauce — billed as Kyoto’s first (Tabelog) · wagyu horumon yaki udon with wagyu small intestine, pork belly and chicken ¥1,680; special yaki udon with pork belly and chicken ¥1,480 (August 2025) · teppan-yaki: chosen meats, wagyu steak, grilled vegetables, a soufflé-like teppan dashimaki ¥750 (2023–2025) · sake, shochu and wine (Tabelog)',
    website: SITE, gmaps: gm('京都ホルモン焼うどん 田中 西陣'), menu_url: TB,
    notes: "[Teppan · Nishijin, horumon yaki udon by a former French chef] A calm, polished teppan counter in Nishijin run by a couple, the husband once a French-restaurant chef: wagyu offal and udon stir-fried before you and dipped tsukemen-style in a special sauce (about ¥1,500–1,700), plus fluffy teppan dashimaki and wagyu. Dinner only, till midnight; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Run by a couple; the chef formerly cooked French (June 2024 review); not named'], origin: null,
      background: 'Opened 12 December 2013 (Tabelog), which bills it as the first place in Kyoto for horumon yakisoba with a special dipping sauce. Reviewers (2024) describe a teppan-yaki restaurant run by a friendly couple, the chef formerly at a French restaurant.',
      philosophy: null,
      specialty: 'Wagyu horumon yaki udon, tsukemen style.',
      anecdotes: [
        { text: 'A June 2024 regular praised the casual but refined plates from the former French chef.', source: R + 'B398443047/' },
        { text: 'A September 2024 walk-in at 18:00 found every table full.', source: R + 'B492668961/' },
        { text: 'A September 2026 first-timer, sent by another restaurant, heard the yaki udon inherited the taste of a well-known shop.', source: R + 'B535084980/' },
      ],
      japanese_sources_summary: '食べログ: 京都ホルモン焼うどん 田中、麺類・ホルモン、上京区紹巴町26 フラット長者町1F、市バス「堀川下長者町」から徒歩1分、水〜日 17:30〜24:00 (L.O. 22:00)、月火定休、予約可、カード (JCB、AMEX、Diners)・電子マネー可、QR不可、18席 (カウンター8、テーブル10)、禁煙、駐車場約7台、子ども可、テイクアウト、2013年12月12日オープン、京都で初めての特製つけダレで食べるホルモン焼きそばの店。口コミ (2022〜2026年、英語): 夫婦で営む、元フレンチのシェフ、和牛ホルモン焼うどん1,680円 (和牛ホソ、豚バラ、鶏)、特製焼うどん1,480円 (豚バラ、鶏)、鉄板だし巻き750円、つけ麺スタイル、鉄板焼きの肉と野菜、和牛のステーキ、スフレのようなだし巻き、早く満席に。',
      confidence: 'medium', sources: [TB, SITE, R + 'B398443047/', R + 'B457857972/', R + 'B458871282/', R + 'B465674797/', R + 'B485961060/', R + 'B492668961/', R + 'B497773473/', R + 'B504447877/', R + 'B512625605/', R + 'B514738036/', R + 'B524657601/', R + 'B535084980/'] },
    cultural_comfort: { level: 'japanese', note: 'Teppan counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区紹巴町26 フラット長者町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.022689, 135.752974); cross-checked: GSI 京都府京都市上京区紹巴町26番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512625605/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Wagyu horumon yaki udon (wagyu hoso, pork belly, chicken)', '¥1,680', 'Yaki udon', 'no', 'no', 'August 2025.', 'wagyu_horumon'),
      it('', '', 'Special yaki udon (pork belly, chicken)', '¥1,480', 'Yaki udon', 'no', 'no', 'August 2025.', 'tokusei'),
      it('', '', 'Teppan dashimaki', '¥750', 'Teppan', 'ask', 'no', 'August 2025.', 'dashimaki'),
    ] }, {
    cuisine: '鉄板のホルモン焼うどんを特製のつけダレでつけ麺スタイルに、京都初とうたう (食べログ)・和牛ホソ、豚バラ、鶏の和牛ホルモン焼うどん1,680円、豚バラと鶏の特製焼うどん1,480円 (2025年8月)・鉄板焼き: 選べる肉、和牛のステーキ、焼き野菜、スフレのような鉄板だし巻き750円 (2023〜2025年)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '西陣、下長者町。市バス堀川下長者町から徒歩1分',
    gf_detail: 'グルテンフリー不可。名物は小麦のうどんをホルモンと鉄板で炒めたもの (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のホルモン、豚、鶏の鉄板料理 (口コミ)。',
    notes: '[鉄板・西陣、元フレンチのシェフのホルモン焼うどん] 西陣の落ち着いた洗練された鉄板のカウンター。夫婦で営み、主人は元フレンチのシェフ。和牛ホルモンとうどんを目の前で炒め、特製のつけダレでつけ麺スタイルに (1,500〜1,700円ほど)。ふわふわの鉄板だし巻きや和牛も。夜のみ、深夜0時まで。月火休み。',
  });
}

save();
