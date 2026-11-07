// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 61.
//   + 祇園 八軒 Gion Hakken (reservation-only Kyoto cuisine courses in private rooms, Yamato-oji south of Shijo; rest)
//   + Pizza Strada 京都祇園店 (Kyoto branch of the Azabu-Juban pizzeria, opened October 2025; rest)
//   + Peek a boo Cafe (late-night Italian dining bar with karaoke rooms, Gion Nawate; rest)
//   + 先斗町 華楽 Pontocho Karaku (upstairs obanzai restaurant down a Pontocho alley; rest)
//   Rest list (mod 6 = 1) after batch 60, nearest-first — skipped:
//   - 砂浜DINING BAR SHAPE BEACH 京都店 26028433: thin — one review.
//   Brand check: queue-status.jsonl grepped for every crawl id of each name (八軒, Pizza Strada, Peek a boo, 華楽) — no earlier
//   skip or done entries. Same-name check, same brand or operator only: 八軒 — one (八軒町 addresses in data are a street name).
//   Pizza Strada — one in our crawls; reviewers call it the second shop of the Azabu-Juban original — two, drafted. Peek a boo
//   — one. 華楽 — one. None is in data/kyoto.json (main 00e027d0) by name or address (博多町82, 小松町557-6 — 夢創心 in data
//   is at 558-2, 冨永町139-2 ギオンサンビル 4F, 材木町188-7 — よし屋 in data is at 188).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26028433/', 'thin: one review');

// ================================================================ 祇園 八軒 Gion Hakken
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030053/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_gion_hakken', name: '祇園 八軒 (Gion Hakken)', category: 'OMNI',
    lat: 35.0009718152054, lng: 135.77242038421116, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A set Kyoto-cuisine course of hassun, sashimi, simmered, grilled and fried dishes, tempura and a beef and mushroom shabu-shabu in dashi; no gluten information (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish- and beef-based course cooked with dashi (2024–2025 reviews).',
    hours_raw: 'Daily 17:00–23:00; hours may change (Tabelog). Reservation only (Tabelog). Omakase course only (December 2024). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Private rooms for 2 to 20 and tatami seating; smoking allowed (Tabelog). In a Kyoto-style building just off the Kawabata side of Yamato-oji south of Shijo, easy to miss; 2 min walk from Gion-Shijo Stn exit 1 (Tabelog; December 2024–March 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Yamato-oji south of Shijo — 2 min walk from Gion-Shijo Stn',
    cuisine: 'Kyoto cuisine served as one omakase course in private rooms, used for entertaining and company dinners (2024–2025 reviews) · a hassun box of sashimi and small dishes opened at the table; simmered, grilled and fried dishes; eel; tempura; a mini hot pot of Omi beef and mushrooms shabu-shabu in dashi; rice; dessert (December 2024–November 2025) · a wide sake list (2025 reviews) · about ¥8,000–15,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('祇園 八軒'), menu_url: null,
    notes: '[Kyoto cuisine · Gion, private rooms, reservation only] A discreet, easy-to-miss Kyoto-cuisine house off Yamato-oji where a single omakase course is served in private rooms: a lidded box of sashimi and seasonal bites, gently seasoned simmered and grilled dishes, tempura, and a much-praised Omi beef and mushroom shabu-shabu in dashi. Popular for business dinners. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a reservation-only Japanese restaurant and izakaya with private rooms off Yamato-oji in Gion. Reviewers in 2024–2025 describe one omakase course in subtle Kyoto seasoning, attentive hospitality and use for business entertaining.',
      philosophy: null, specialty: 'Omi beef and mushroom shabu-shabu.',
      anecdotes: [
        { text: 'A December 2024 guest noted the course is omakase only, beginning with sashimi and side dishes drawn from a box in a very Kyoto presentation.', source: R + 'B497002439/' },
        { text: 'A December 2024 diner traced the course from hassun to dessert and called it an incredible value, the seasoning subtle and of a piece.', source: R + 'B498523160/' },
        { text: 'A September 2025 work gathering singled out the Omi beef and mushroom shabu-shabu.', source: R + 'B514031742/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、東山区大和大路通四条下る3-博多町82、京阪祇園四条駅1番出口から徒歩2分、毎日 17:00〜23:00、営業時間は変わることあり、完全予約制、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、個室 (2〜20名)、座敷、喫煙可。口コミ (2024年12月〜2025年11月、英語): 川端通から少し入った見落としやすい場所、京都らしい建物、おまかせのコースのみ、個室、接待や会社の集まりに、箱から取り出す八寸と刺身、煮物、焼き物、揚げ物、うなぎ、天ぷら、近江牛ときのこのしゃぶしゃぶの小鍋 (だし)、ご飯、デザート、やさしい京都の味付け、日本酒が豊富。',
      confidence: 'medium', sources: [TB, R + 'B486886376/', R + 'B497002439/', R + 'B498523160/', R + 'B502288852/', R + 'B504182649/', R + 'B514031742/', R + 'B520076500/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; one omakase course; private rooms; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下る3-博多町82',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; consistent reviews through November 2025.' },
    pin_source: `Tabelog ${TB} (35.000972, 135.772420); cross-checked: GSI 京都府京都市東山区博多町82番地 (lot) 32 m; nearest Kyoto record 50.5 m away; checked against main 00e027d0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497002439/', R + 'B514031742/'],
    price_note: 'No course price given; Tabelog averages about ¥8,000–9,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', '2024–2025 reviews.', 'omakase'),
    ] }, {
    cuisine: '個室で出すおまかせのコースひとつの京料理、接待や会社の集まりに (2024〜2025年の口コミ)・席で箱から取り出す刺身と小鉢の八寸、煮物、焼き物、揚げ物、うなぎ、天ぷら、だしでいただく近江牛ときのこのしゃぶしゃぶの小鍋、ご飯、デザート (2024年12月〜2025年11月)・豊富な日本酒 (2025年の口コミ)・8,000〜15,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '祇園、四条の南の大和大路。祇園四条駅から徒歩2分',
    gf_detail: '要確認。八寸、刺身、煮物、焼き物、揚げ物、天ぷら、だしの牛肉ときのこのしゃぶしゃぶの京料理のコース。グルテンの情報はない (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と牛肉のだしを使うコース (2024〜2025年の口コミ)。',
    notes: '[京料理・祇園、個室、完全予約制] 大和大路から少し入った見落としやすい京料理の店で、個室でおまかせのコースひとつを。蓋付きの箱に刺身と季節の小鉢、やさしい味の煮物や焼き物、天ぷら、評判の近江牛ときのこのだししゃぶしゃぶ。接待に人気。喫煙可。',
  });
}

// ================================================================ Pizza Strada 京都祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043697/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.pizzastrada.jp/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'kyoto_pizza_strada_gion', name: 'Pizza Strada 京都祇園店 (Pizza Strada Kyoto Gion)', category: 'OMNI',
    lat: 35.00176085207276, lng: 135.77307839604924, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wood-fired wheat-dough pizza (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable antipasti such as marinated mushrooms and broccoli with anchovy-garlic; most pizzas carry cheese; no vegan option confirmed (2025–2026 reviews).',
    hours_raw: 'Daily 11:00–22:30, last order 22:00 (Tabelog). Reservations accepted and advised — queues and a full counter soon after opening (Tabelog; December 2025, March 2026). Cards, e-money and QR (Tabelog). 50 seats: an 11-seat counter facing the oven and tables upstairs; non-smoking (Tabelog; December 2025). On Yamato-oji south of Shijo; 6 min walk from Gion-Shijo Stn (Tabelog). Opened 22 October 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Yamato-oji south of Shijo — 6 min walk from Gion-Shijo Stn',
    cuisine: 'Second shop of the Azabu-Juban pizzeria, with a stone oven and dough made in view (2025–2026 reviews) · pizzas with a thin, chewy, crisp crust: Margherita, smoked-mozzarella Margherita ¥2,880, Bismarck, Romana, tomato pizzas (November 2025–March 2026) · antipasti: marinated octopus with celery, marinated mushrooms, ham, broccoli with anchovy and garlic ¥1,180; Caesar salad (2025–2026 reviews) · Aperol spritz ¥980, Italian lemon soda ¥980 (March 2026) · about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('Pizza Strada 京都祇園店'), menu_url: null,
    notes: '[Pizza · Gion, Yamato-oji south of Shijo] The Kyoto branch of Azabu-Juban\'s Pizza Strada: a stone oven at the counter turning out thin, chewy, crisp-edged pizzas — Margherita, smoked mozzarella, Bismarck — with marinated antipasti and an Aperol spritz. Busy; book ahead. Some found it pricey, and one February 2026 guest was moved seats twice and found the pizza average. Open all day.',
    chef_bio: { chef_name: null, roles: ['Pizzaioli and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviews: the Kyoto Gion branch, opened 22 October 2025, of the Pizza Strada pizzeria from Azabu-Juban, Tokyo, with a stone oven by the counter. Website pizzastrada.jp (Tabelog).',
      philosophy: null, specialty: 'Margherita.',
      anecdotes: [
        { text: 'A December 2025 diner who had checked the site during construction arrived at opening, filled the counter seats with the first wave, and found it delicious but pricey.', source: R + 'B518831994/' },
        { text: 'A February 2026 guest who booked a table was asked twice to move to the counter, found the pizza average, and would not return because of the service.', source: R + 'B522057557/' },
        { text: 'A March 2026 visitor enjoyed watching the dough being made at the counter and called the crust authentically Neapolitan.', source: R + 'B526556931/' },
      ],
      japanese_sources_summary: '食べログ: ピザ・イタリアン、東山区大和大路通四条下ル四丁目小松町557-6、祇園四条駅から徒歩6分、毎日 11:00〜22:30 (L.O.22:00)、予約可、カード・電子マネー・QR 可、50席 (カウンター11、テーブル39)、禁煙、2025年10月22日開店、公式サイト pizzastrada.jp。口コミ (2025年11月〜2026年10月、英語): 麻布十番の人気店の京都2号店、石窯、目の前で生地を作る、薄くもちもちでパリッとした生地、マルゲリータ、燻製モッツァレラのマルゲリータ2,880円、ビスマルク、ロマーナ、タコのマリネとセロリ、きのこのマリネ、ハム、ブロッコリーのアンチョビガーリック1,180円、シーザーサラダ、アペロールスプリッツ980円、イタリアンレモンソーダ980円、行列ができ予約がおすすめ、高いとの声、席を2回移るよう言われピザは普通だったとの声 (2026年2月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B517243446/', R + 'B518831994/', R + 'B519278895/', R + 'B520495004/', R + 'B522057557/', R + 'B522123330/', R + 'B522595921/', R + 'B523694723/', R + 'B526556931/', R + 'B537696223/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; counter by the oven; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル四丁目小松町557-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened October 2025; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001761, 135.773078); cross-checked: GSI 京都府京都市東山区小松町557番地 (lot) 55 m; nearest Kyoto record 16.8 m away (kyoto_musoushin_gion, 558-2); checked against main 00e027d0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523694723/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Smoked-mozzarella Margherita', '¥2,880', 'Pizza', 'no', 'no', 'March 2026.', 'smoked_marg'),
      it('', '', 'Broccoli with anchovy and garlic', '¥1,180', 'Antipasti', 'ask', 'no', 'March 2026.', 'broccoli'),
      it('', '', 'Aperol spritz', '¥980', 'Drinks', 'gf', 'vegan', 'March 2026.', 'spritz'),
    ] }, {
    cuisine: '麻布十番のピッツェリアの2号店。石窯があり目の前で生地を作る (2025〜2026年の口コミ)・薄くもちもちでパリッとした生地のピザ: マルゲリータ、燻製モッツァレラのマルゲリータ2,880円、ビスマルク、ロマーナ、トマトのピザ (2025年11月〜2026年3月)・前菜: タコとセロリのマリネ、きのこのマリネ、ハム、ブロッコリーのアンチョビガーリック1,180円、シーザーサラダ (2025〜2026年の口コミ)・アペロールスプリッツ980円、イタリアンレモンソーダ980円 (2026年3月)・4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '祇園、四条の南の大和大路。祇園四条駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。石窯で焼く小麦の生地のピザ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。きのこのマリネやブロッコリーのアンチョビガーリックなど野菜の前菜もあるが、ピザの多くはチーズ入り。ヴィーガンの品は未確認 (2025〜2026年の口コミ)。',
    notes: '[ピザ・祇園、四条の南の大和大路] 麻布十番の Pizza Strada の京都店。カウンター前の石窯で、薄くもちもちで縁がパリッとしたマルゲリータ、燻製モッツァレラ、ビスマルクを焼き、マリネの前菜やアペロールスプリッツも。混むので予約を。高いと感じた客も、2026年2月には席を2回移らされピザは普通だったという客も。通し営業。',
  });
}

// ================================================================ Peek a boo Cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027725/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://peekaboocafe.net/';
  const H = day(['19:00', '28:00']);
  put({
    id: 'kyoto_peek_a_boo_cafe_gion', name: 'Peek a boo Cafe', category: 'OMNI',
    lat: 35.004300547874344, lng: 135.77352696034572, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: oven pizza, katsu and steak sandwiches, egg sandwiches (2016–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh seasonal fruit juices and smoothies; most food is cheese, meat or egg (2019–2026 reviews).',
    hours_raw: 'Monday–Saturday 19:00–4:00, last order 3:00; closed Sunday and holidays (Tabelog). Reservations by phone, Monday–Saturday 17:00–4:00 (Tabelog). No charge and no service fee (Tabelog original チャージ料なし サービス料なし). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 24 seats: a 12-seat counter and private rooms for up to 12, including a sunken-table room with karaoke at ¥5,000 for two hours (Tabelog; June 2026). 4F of the Gion Sun building, on Tominaga-cho just east of Nawate; 3 min walk from Gion-Shijo Stn (Tabelog). Opened 1 July 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho east of Nawate — 3 min walk from Gion-Shijo Stn',
    cuisine: 'Late-night Italian dining bar and cafe with a pizza oven (Tabelog; 2016–2026 reviews) · water-buffalo mozzarella Margherita, oven-baked dessert pizza with marshmallows (2019 reviews) · a wagyu katsu sandwich, steak sandwich, egg sandwich, omurice, crema catalana (Tabelog; 2019–2026 reviews) · fresh seasonal fruit juice, smoothies, sangria, gin and tonic (2017–2025 reviews) · about ¥3,000–5,000 (Tabelog; 2017–2025 reviews)',
    website: WEB, gmaps: gm('Peek a boo Cafe 祇園'), menu_url: null,
    notes: '[Dining bar · Gion, till 4 a.m.] A hidden fourth-floor bar-cafe off Nawate, open till 4 a.m., with a pizza oven: buffalo-mozzarella Margherita, a wagyu katsu sandwich, omurice and egg sandwiches, fresh fruit juices and cocktails, and a back room with karaoke. A charming master; no cover charge. Some found it fairly standard, one the katsu sandwich too rare. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an Italian dining bar opened 1 July 2016 in Gion, with an oven for pizza, buffalo mozzarella and a wagyu katsu sandwich, and private rooms with karaoke. Reviewers from 2016 to 2026 describe a late, relaxed place with a charming master.',
      philosophy: null, specialty: 'Buffalo-mozzarella Margherita; katsu sandwich.',
      anecdotes: [
        { text: 'A March 2019 fan always has the seasonal fresh juice, and came this time for the oven-baked marshmallow dessert pizza.', source: R + 'B412820723/' },
        { text: 'A December 2025 second-stop visitor found it quite standard for a Gion bar, though fairly priced.', source: R + 'B518901332/' },
        { text: 'A June 2026 guest enjoyed the steak sandwich but found the katsu sandwich too rare to bite through, and noted karaoke in the back room.', source: R + 'B529675303/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・バー・カフェ、東山区八坂新地冨永町139番地2 ギオンサンビル4階、京阪祇園四条駅から徒歩3分、月〜土 19:00〜翌4:00 (L.O.3:00)、日・祝休み、予約可 (電話は月〜土17時〜翌4時)、チャージ料なし・サービス料なし、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー不可、24席 (カウンター12、個室12)、掘りごたつの個室にカラオケ (2時間5,000円)、2016年7月1日開店、ピザ窯、水牛モッツァレラ、和牛のカツサンド。口コミ (2016年10月〜2026年6月、英語): 深夜まで、水牛モッツァレラのマルゲリータ、マシュマロのデザートピザ、ステーキサンド、たまごサンド、オムライス、カタラーナ、季節の生フルーツジュース、スムージー、サングリア、ジントニック、気さくなマスター、普通だったとの声 (2025年12月)、カツサンドがレアすぎて噛み切りにくいとの声 (2026年6月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B261487566/', R + 'B365574609/', R + 'B376622463/', R + 'B411094222/', R + 'B412820723/', R + 'B422616272/', R + 'B451784054/', R + 'B518901332/', R + 'B525312488/', R + 'B529675303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Upstairs bar; no cover charge; karaoke room; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地冨永町139番地2 (祇園縄手通り冨永 東に4軒目) ギオンサンビル4階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004301, 135.773527); cross-checked: GSI 京都府京都市東山区富永町139番地 (lot) 16 m; nearest Kyoto record 10.0 m away; checked against main 00e027d0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the karaoke room fee is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Buffalo-mozzarella Margherita', '', 'Pizza', 'no', 'no', '2019 reviews.', 'margherita'),
      it('', '', 'Karaoke private room (2 hours)', '¥5,000', 'Rooms', 'gf', 'vegan', 'Tabelog.', 'karaoke'),
    ] }, {
    cuisine: 'ピザ窯のある深夜のイタリアンのダイニングバー兼カフェ (食べログ、2016〜2026年の口コミ)・水牛モッツァレラのマルゲリータ、窯で焼くマシュマロのデザートピザ (2019年の口コミ)・和牛のカツサンド、ステーキサンド、たまごサンド、オムライス、カタラーナ (食べログ、2019〜2026年の口コミ)・季節の生フルーツジュース、スムージー、サングリア、ジントニック (2017〜2025年の口コミ)・3,000〜5,000円ほど (食べログ、2017〜2025年の口コミ)',
    neighborhood: '祇園、縄手の東の冨永町。祇園四条駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。窯焼きピザ、カツサンドやステーキサンド、たまごサンド (2016〜2026年の口コミ)。',
    vegan_detail: '要確認。季節の生フルーツジュースやスムージー。料理の多くはチーズ、肉、卵 (2019〜2026年の口コミ)。',
    notes: '[ダイニングバー・祇園、朝4時まで] 縄手を入ったビルの4階に隠れた深夜4時までのバー兼カフェ。ピザ窯で焼く水牛モッツァレラのマルゲリータ、和牛のカツサンド、オムライス、たまごサンド、生フルーツジュースやカクテル、奥にはカラオケの個室。気さくなマスター、チャージなし。普通と感じた客も、カツサンドがレアすぎた客も。日曜休み。',
  });
}

// ================================================================ 先斗町 華楽 Pontocho Karaku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027989/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']); const F = day(['18:00', '24:00']);
  put({
    id: 'kyoto_pontocho_karaku', name: '先斗町 華楽 (Pontocho Karaku)', category: 'OMNI',
    lat: 35.0070228678718, lng: 135.770940010375, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, yudofu and sesame tofu, but also tempura and seasoned simmered dishes; no gluten information (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spicy konnyaku, sesame tofu and yudofu appear, but dashi and fish are common (2022–2025 reviews).',
    hours_raw: 'Monday–Thursday and Sunday 18:00–23:00; Friday–Saturday 18:00–24:00; hours may change (Tabelog). Reservations accepted; often full at weekends (Tabelog; March 2023). Food takes a while — staff warn of a wait from order to plate (August 2022). Cards (JCB, AMEX, Diners), e-money and QR; non-smoking (Tabelog). Upstairs, down a narrow alley in Pontocho south of Sanjo; 5 min walk from Keihan Sanjo Stn (Tabelog; August 2022, March 2023).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo — upstairs off an alley',
    cuisine: 'Small upstairs Kyoto restaurant of obanzai and seasonal dishes with Kyoto sake (2022–2025 reviews) · assorted obanzai such as spicy konnyaku, eggplant with herring and sesame tofu; sashimi; hamo shabu-shabu in summer (2022–2024 reviews) · a Pontocho course: four obanzai, sashimi, a small dish, yudofu, black wagyu on a hot plate, seasonal tempura, rice, pickles and dessert (October 2024) · Kyoto sake such as Sawaya Matsumoto, served in a choice of kiriko cups; shochu (2023–2025 reviews) · about ¥3,000–8,000 (Tabelog; 2022–2025 reviews)',
    website: null, gmaps: gm('先斗町 華楽'), menu_url: null,
    notes: '[Obanzai · Pontocho south of Sanjo, upstairs] A tucked-away second-floor restaurant down a Pontocho alley where a gentle chef serves gently seasoned obanzai, sashimi, summer hamo shabu-shabu and a Pontocho course with yudofu and wagyu, with Kyoto sake in cut-glass cups. Welcoming to solo diners. Expect a wait for dishes — come unhurried.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Floor staff'], origin: null,
      background: 'Per Tabelog and reviews (2022–2025): a regional-cuisine restaurant upstairs in a Pontocho alley, with a gentle chef, friendly staff and an owner who chooses the sake and shochu; recommended by local bar owners.',
      philosophy: null, specialty: 'Obanzai; Pontocho course.',
      anecdotes: [
        { text: 'An August 2022 visitor, sent by the owner of a nearby bar, was warned on arrival to expect a long wait between ordering and the food.', source: R + 'B454240182/' },
        { text: 'An August 2024 guest back after the Okuribi fires for a second year was greeted by the same server as the year before.', source: R + 'B470272617/' },
        { text: 'A November 2023 diner chose a kiriko cup for Sawaya Matsumoto sake after a little of every obanzai.', source: R + 'B475633886/' },
      ],
      japanese_sources_summary: '食べログ: 郷土料理、中京区先斗町三条下る材木町188-7、月〜木・日 18:00〜23:00、金・土 18:00〜24:00、営業時間は変わることあり、予約可、カード (JCB・AMEX・Diners)・電子マネー・QR 可、禁煙。口コミ (2022年8月〜2025年12月、英語): 先斗町の細い路地の奥の2階、近くのバーの店主の紹介、注文から料理まで時間がかかると最初に言われる、やさしい料理人、おばんざいの盛り合わせ (ピリ辛こんにゃく、なすとにしん、胡麻豆腐)、刺身、夏のはもしゃぶ、先斗町コース (おばんざい4種、刺身、小鉢、湯豆腐、黒毛和牛の鉄板焼き、季節の天ぷら、ご飯、漬物、デザート)、京都の地酒 (Sawaya Matsumoto)、切子のおちょこを選べる、焼酎、1人でも入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B454240182/', R + 'B465297556/', R + 'B465883042/', R + 'B470272617/', R + 'B473805712/', R + 'B475633886/', R + 'B483009480/', R + 'B486169568/', R + 'B493407090/', R + 'B519977768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small upstairs room; slow-paced; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下る材木町188-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through December 2025.' },
    pin_source: `Tabelog ${TB} (35.007023, 135.770940); cross-checked: GSI 京都府京都市中京区材木町188番地 (lot) 22 m; kyoto_yoshiya_pontocho (188) is 7.9 m away; checked against main 00e027d0; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493407090/'],
    price_note: 'No prices given in the reviews.', last_checked: TODAY, items: [
      it('', '', 'Pontocho course', '', 'Course', 'ask', 'no', 'October 2024.', 'pontocho_course'),
      it('', '', 'Assorted obanzai', '', 'Obanzai', 'ask', 'ask', '2022–2024 reviews.', 'obanzai'),
    ] }, {
    cuisine: 'おばんざいと季節の料理を京都の地酒とともに出す2階の小さな京料理の店 (2022〜2025年の口コミ)・ピリ辛こんにゃく、なすとにしん、胡麻豆腐などのおばんざいの盛り合わせ、刺身、夏ははもしゃぶ (2022〜2024年の口コミ)・先斗町コース: おばんざい4種、刺身、小鉢、湯豆腐、黒毛和牛の鉄板焼き、季節の天ぷら、ご飯、漬物、デザート (2024年10月)・切子のおちょこを選べる Sawaya Matsumoto などの京都の酒、焼酎 (2023〜2025年の口コミ)・3,000〜8,000円ほど (食べログ、2022〜2025年の口コミ)',
    neighborhood: '三条の南の先斗町、路地の奥の2階',
    gf_detail: '要確認。おばんざい、刺身、湯豆腐、胡麻豆腐のほか、天ぷらや味付けの煮物。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。ピリ辛こんにゃく、胡麻豆腐、湯豆腐もあるが、だしや魚が多い (2022〜2025年の口コミ)。',
    notes: '[おばんざい・三条の南の先斗町、2階] 先斗町の路地の奥の2階にひっそりある店。やさしい料理人のやさしい味のおばんざい、刺身、夏のはもしゃぶ、湯豆腐と和牛の先斗町コースを、切子のおちょこで京都の酒とともに。1人でも入りやすい。料理には時間がかかるのでゆっくりと。',
  });
}

save();
