// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 1.
//   + たいせい Taisei (8-seat standing iekei ramen counter outside Yotsuya Stn; second shop of Menya Taisei, Nakano-Sakaue)
//   + オリヴァヴァ Oliva Vava (regional Italian with private rooms, 3F Act World Bldg; à la carte partner of unico-co)
//   + とりノ蔵 Tori no Kura (80-seat private-room izakaya: charcoal yakitori, Hakata motsunabe, open to 2 am)
//   + ウニ専門レストラン unico-co (sea-urchin tasting courses, Italian base; owner-chef-sommelier Hironobu Tsujita)
//   Chain check. Taisei: reviews call it the second shop of Menya Taisei, whose main shop is in Nakano-Sakaue
//   (B515028970, B538292018); two shops, not a fast-growing chain. Oliva Vava and unico-co share 3F of アクトワールドビル and
//   one invoice registration number (T4011101081453 on both Tabelog listings); unico-co's site sends à la carte orders to
//   "隣接するイタリアン【オリヴァヴァ】" and names a third shop of the owner-chef, Osteria T (2012, Yotsuya); a three-shop
//   owner-chef group. Tori no Kura: a web search found no other branch (the listing site pages would not open); kept, doubt noted.
//   Yoshinoya 四ツ谷駅前店 (13072741) sits between them in the queue: a national chain, skipped.
//   None is in data/tokyo.json (grep by name, Tabelog id and address: no record has 四谷/四ツ谷 or Yotsuya at all).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13072741', 'Yoshinoya 四ツ谷駅前店 — national gyudon chain (Yoshinoya), not researched.');

// ================================================================ たいせい
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13313360/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'tokyo_taisei_yotsuya', name: 'たいせい (Taisei)', category: 'OMNI',
    lat: 35.686372, lng: 139.729357, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce (shoyu) broth; nothing else on the ticket machine is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-bone and chicken broth with chashu; rice and the free toppings are the only plant items named.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog; may change). Standing counter only, 8 places per Tabelog (a September 2025 diner counted 7); no chairs, little room under the counter for bags and no coat hooks (October 2026 review). No reservations. Buy a ticket at the machine, cash only (October 2026 review; Tabelog: no cards, e-money or QR). Lines form at busy times: about 30 minutes in September 2025, 20 minutes or none in October 2026, and a line outside near 21:00 on a Tuesday. Non-smoking (Tabelog). Opened 31 August 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-4, at the Yotsuya intersection right by Exit 2 of the Marunouchi/Namboku Lines — 2 min from JR Yotsuya Stn (Yotsuya Exit)',
    cuisine: 'Standing iekei ramen: a tonkotsu-shoyu broth of pork bone and chicken, soy-sauce forward, with nori, spinach and thin chashu (October 2026 reviews) · ramen ¥900; special ramen ¥1,300 (with seasoned egg); small rice ¥100, medium rice ¥150; extra greens ¥100; an extra slice of chashu ¥100; a side dish ¥50 (October 2026 reviews) · the small rice comes topped with chopped grilled chashu (October 2026) · noodle firmness on request; pepper, grated garlic and pickles to add, ginger listed on the wall (October 2026)',
    website: null, gmaps: gm('たいせい 四ツ谷 ラーメン'), menu_url: null,
    notes: "[Ramen · Yotsuya, a standing iekei counter at the station] A narrow standing-only counter right by Yotsuya Station's Exit 2, opened at the end of August 2025 as the second shop of Menya Taisei, whose first shop is in Nakano-Sakaue; one diner had eaten here back when the spot was Yokohama Ramen Ryoma. The bowl is iekei: a pork-bone and chicken soy-sauce broth, firm-to-order noodles, nori, spinach and thin chashu, and the house sign promises chicken and soy sauce. October 2026 diners found it refined for the style, strong on soy sauce but easy to finish, and best with a bowl of rice under nori dipped in the broth; the small rice comes with chopped grilled chashu on top. Opinions on the two shops differ: some find Nakano-Sakaue deeper and more chicken-forward, others prefer this one. Buy a ticket (cash only), hand it over, and the bowl comes in minutes; turnover is quick, but there can be a line at lunch and late at night. Hot in summer, cold in winter, and no hooks for coats.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 August 2025 (Tabelog) as the second shop of Menya Taisei, whose main shop is in Nakano-Sakaue (September 2025 and October 2026 reviews).',
      background: 'No source names the owner or cooks. A September 2025 review calls it "the second location of Menya Taisei, which also has a branch in Nakano Sakaue"; an October 2026 review says "the main branch [is] located in Nakano-Sakaue". An October 2026 diner had been coming "since the days of Yokohama Ramen Ryoma, and although the name has changed, the taste remains consistently delicious". Staff are called "lively and energetic" and "bright and cheerful" (October 2026).',
      philosophy: 'A broth of chicken and soy sauce, per the shop\'s concept as reviewers read it (September 2025, October 2026).', specialty: 'Special ramen with rice.',
      anecdotes: [
        { text: '"After about a 30-minute wait, I was seated… It was my first time trying the koban side dish, and it was delicious!" — September 2025, opening month, special ramen with rice.', source: R + 'B513857397/' },
        { text: '"Despite being a traditional \'Iekei\' ramen, it has a certain sophistication that makes you want to savor it as is… I ordered the ramen for JPY 900." — October 2026.', source: R + 'B537403285/' },
        { text: '"I noticed the word \'ginger\' on the wall and felt certain I had to order it… The fresh, green flavor of the ginger invigorated my appetite for the second half of the meal." — October 2026.', source: R + 'B537400550/' },
      ],
      japanese_sources_summary: '食べログ: たいせい、ラーメン、四ツ谷1-4、JR四ツ谷駅四ツ谷口から徒歩2分、地下鉄丸ノ内線・南北線四ツ谷駅2番出口のすぐ横、毎日11:00〜22:00、予約不可、カード・電子マネー・QR不可、8席 (カウンター)、禁煙、2025年8月31日オープン。口コミ(2025年9月、2026年10月): 立ち食いの家系、Nakano-Sakaue の Menya Taisei の2号店、鶏と醤油、豚骨と鶏、醤油が強め、ラーメン900円、特製ラーメン1,300円、小ライス100円、中ライス150円、青菜100円、チャーシュー1枚100円、券売機は現金のみ、麺の硬さを選べる、生姜・にんにく・こしょう、小ライスに刻んだ焼きチャーシュー、以前は Yokohama Ramen Ryoma、夏は暑く冬は寒い。',
      confidence: 'medium', sources: [TB, R + 'B513857397/', R + 'B515028970/', R + 'B537400550/', R + 'B537403285/', R + 'B537490191/', R + 'B537676181/', R + 'B537773920/', R + 'B537822189/', R + 'B538179886/', R + 'B538234344/', R + 'B538292018/', R + 'B538299332/'] },
    ramen: {
      broth_base: ['pork', 'chicken'], broth_texture: 'unknown', tare: ['shoyu'], aroma_oil: ['chicken oil'], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'flat', hydration: null, handmade: null, notes: 'Thick and flat with a firm bite per one October 2026 diner; others call them chewy, smooth and slippery; firmness to order when the ticket is handed over (October 2026 reviews).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen'],
      signature_bowl: 'Special ramen ¥1,300 with a small rice ¥100 (October 2026).',
      chashu: 'Two kinds, thin but generous: shoulder (chuck-eye) and belly, tender with some marbling (October 2026 reviews).',
      notable_toppings: ['nori', 'spinach', 'chashu', 'seasoned egg (special)', 'ginger', 'garlic', 'extra chashu slice (¥100)'],
      gf: { status: 'no', note: 'Wheat noodles; soy-sauce broth.' },
      vegan: { status: 'no', note: 'Pork-bone and chicken broth; chashu.' },
      pantheon: 'Yotsuya\'s station-front standing iekei: a soy-forward pork-and-chicken bowl from the Nakano-Sakaue Taisei, eaten at a counter in minutes with rice and grilled chashu crumbs.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537400550/', '"The tonkotsu broth is never heavy, yet it has a rich depth from the combination of pork and chicken flavors" (October 2026); "not too rich" (' + R + 'B537770175/) — mid-scale.'],
        oiliness: [R + 'B537773920/', 'A photo caption reads "Chicken Oil" (October 2026); no diner calls the bowl oily — mid-scale.'],
        clarity: [R + 'B537822189/', '"A bowl of rich pork bone soy sauce soup" (October 2026); "the broth had a classic home-style color" (' + R + 'B538368668/) — placed low.'],
        tare_strength: [R + 'B537770175/', '"The ramen had a strong soy sauce flavor" (October 2026); "the flavor is strongly soy sauce-forward" (' + R + 'B515028970/, September 2025); "a bit salty" (' + R + 'B537490191/).'],
        noodle_firmness: [R + 'B537400550/', '"Chewy and smooth noodles" (October 2026); firm on request (' + R + 'B537822189/) — mid-scale.'],
        aroma_punch: [R + 'B538190568/', '"A refreshing broth with a delightful soy sauce aroma" (October 2026); one diner found the chicken hard to taste (' + R + 'B515028970/) — mid-scale.'],
      },
      confidence: 'medium', sources: [TB, R + 'B515028970/', R + 'B537400550/', R + 'B537490191/', R + 'B537770175/', R + 'B537773920/', R + 'B537822189/', R + 'B538190568/', R + 'B538368668/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only), hand the ticket over and say how firm you want the noodles; standing counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (709 reviews); 20 reviews read, all with October 2026 visits.' },
    pin_source: `Tabelog ${TB} (35.686372, 139.729357); cross-checked: GSI 東京都新宿区四谷一丁目4番地 (lot) 80m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537403285/', R + 'B538292018/', R + 'B537490191/', R + 'B538179886/'],
    price_note: 'Prices from October 2026 reviews (ticket machine); Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥900', 'Ramen', 'no', 'no', 'October 2026 review.', 'ramen'),
      it('', '', 'Special ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026 reviews.', 'special_ramen'),
      it('', '', 'Small rice (with chopped grilled chashu)', '¥100', 'Rice', 'ask', 'no', 'October 2026 reviews; medium ¥150.', 'small_rice'),
      it('', '', 'Extra chashu slice', '¥100', 'Toppings', 'ask', 'no', 'October 2026 review.', 'extra_chashu'),
      it('', '', 'Extra greens', '¥100', 'Toppings', '', '', 'October 2026 review.', 'extra_greens'),
    ] }, {
    cuisine: '立ち食いの家系ラーメン。豚骨と鶏の豚骨醤油で醤油が前に出るスープに、海苔、ほうれん草、薄いチャーシュー (2026年10月の口コミ)・ラーメン900円、特製ラーメン1,300円 (味玉付き)、小ライス100円、中ライス150円、青菜100円、チャーシュー1枚100円、サイド50円 (2026年10月の口コミ)・小ライスには刻んだ焼きチャーシューがのる (2026年10月)・麺の硬さは好みで、こしょう、おろしにんにく、漬物を足せて、壁には生姜の文字も (2026年10月)',
    neighborhood: '四谷1-4、四谷の交差点、地下鉄丸ノ内線・南北線の2番出口のすぐ横。JR四ツ谷駅四ツ谷口から徒歩2分',
    gf_detail: 'グルテンフリーではない。醤油のスープに小麦の麺。券売機にグルテンフリーと説明されたものはない。',
    vegan_detail: 'ヴィーガンではない。豚骨と鶏のスープにチャーシュー。植物性はライスと卓上の薬味くらい。',
    notes: '[ラーメン・四谷、駅前の立ち食い家系] 四ツ谷駅2番出口のすぐ横、立ち食いだけの細いカウンター。2025年8月末に、Nakano-Sakaue に1号店がある Menya Taisei の2号店として開いた。この場所が Yokohama Ramen Ryoma だったころから通っているという人も。一杯は家系で、豚骨と鶏の醤油スープ、硬さを選べる麺、海苔、ほうれん草、薄いチャーシュー。店の掲示は鶏と醤油をうたう。2026年10月の口コミでは家系にしては上品、醤油が強いのに最後まで食べやすい、海苔をスープにひたしてライスと、という声。小ライスには刻んだ焼きチャーシューがのる。2店の比べ方は人それぞれで、Nakano-Sakaue のほうが深く鶏が強いという人も、こちらが好きという人もいる。券売機 (現金のみ) で食券を買って渡せば数分で出てくる。回転は早いが、昼と夜遅くには行列も。夏は暑く冬は寒く、コートを掛ける場所はない。',
  });
}

// ================================================================ オリヴァヴァ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13227537/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const PARTY = TB + 'party/'; const UNI = 'https://unicoco.tokyo';
  const WD = day(['11:30', '14:30'], ['17:00', '22:30']); const WE = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_oliva_vava_yotsuya', name: 'オリヴァヴァ (Oliva Vava)', category: 'OMNI',
    lat: 35.686567, lng: 139.728953, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The Tabelog listing ticks "Gluten-Free options" (and vegan, vegetarian, halal, kosher and Hindu options) but names no dish; the menu leans on pasta, bread with the appetizer plates (August 2026) and cakes. Staff asked one diner about dislikes in advance and left out an ingredient (July 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. The listing ticks "Vegan options" and "Vegetarian options" without naming dishes; the Pantesca salad of vegetables from the restaurant\'s own farm and an olive snack are the plant-led items on the menu, while the courses centre on cured meats, fish, meat and cheese.',
    hours_raw: 'Mon–Fri lunch 11:30–14:30 (last order 14:00), dinner 17:00–22:30 (last order 22:00); Sat, Sun and holidays lunch 11:30–14:30, café 14:00–17:00, dinner 17:00–21:00; closing days not fixed (Tabelog). Reservations online or by phone; phones may go unanswered during service; one drink per person minimum; dinner table charge ¥660 per person; a private room for two costs ¥3,300 (Tabelog). 40 seats (6 at the counter, 34 at tables), private and semi-private rooms for 2–24, whole-floor hire up to 20; non-smoking, smoking on the terrace for private-room guests (Tabelog). Third floor of an old building with stairs only and no lift (July and September 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay or Rakuten Pay (Tabelog). Children welcome with kids\' plates A, B and C; pets allowed (Tabelog). English menu and English-speaking staff (Tabelog). Opened 11 November 2018 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7-18, Act World Bldg 3F, just off Shinmichi-dōri — 1 min from Exit 2 of Yotsuya Stn (Namboku Line); unico-co is on the same floor',
    cuisine: 'Regional Italian cooking with wine and olive oil, meats over charcoal (Tabelog) · lunch: set A, pasta of the day with salad ¥1,650 (July 2026); karasumi pasta with salad and coffee ¥2,000 (October 2026); lunch B course ¥3,080, C course ¥4,180, luxury lunch ¥6,000 (Tabelog courses); weekend and holiday course ¥3,850 of appetizers, pasta and meat (Tabelog; October 2026) · à la carte (tax included, menu updated September 2026): Italian appetizer plate 5 kinds ¥1,650, 10 kinds ¥3,080; the "T potato" (a traditional dish with no potato in it) ¥550; Pantesca salad with vegetables from the house farm ¥1,100; cured meats ¥2,197; pasta ¥1,800–2,200 (norcina, salsiccia in spicy tomato, ragù, house karasumi, Oliva Vava carbonara; a rich onion pasta only when the owner is in); Cinta Senese pork ¥3,500, Aso red beef ¥3,800, horse heart ¥3,000, duck breast ¥3,000, French veal bavette ¥3,000; cakes ¥770–1,100 · dinner courses ¥6,600 and ¥10,450; party plans with 2 hours of drinks from ¥6,000 (Tabelog)',
    website: null, gmaps: gm('オリヴァヴァ 四谷1-7-18'), menu_url: MENU,
    notes: "[Italian · Yotsuya, a third-floor hideaway with private rooms] Up steep stairs on the third floor of an old building a minute from Yotsuya Station, a room the shop says was inspired by a cosy restaurant where locals gather in Tuscany's olive groves: a bright counter on one side, tables and a run of private and semi-private rooms for 2 to 24 on the other. The shop says its chef studied around Italy and pairs regional dishes with wine and olive oil; vegetables come from the restaurant's own farm. Lunch is the draw for 2026 reviewers: pasta and salad from ¥1,650, the karasumi pasta, appetizer plates with bonito and ham, and a ¥3,850 weekend course with pasta and meat. At night there are courses and party plans; on one, diners poured from bottles of red and white set by the table (October 2026). Staff ask about dislikes ahead and were flexible for a pregnant guest; one diner waited a while for water before anyone came (October 2026). It shares the floor and an invoice number with unico-co, the sea-urchin restaurant, whose site sends à la carte orders here.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Tabelog (corporate-member listing): "Our chef, who has studied across Italy, showcases the perfect pairing of regional cuisine, wine, and olive oil"; the menu marks one pasta "Available Only When the Owner is Present" and says "I\'m only confident in my pasta!". Neither names the chef. Oliva Vava and unico-co (tokyo_unicoco_yotsuya, address_ja "東京都新宿区四谷1-7-18 アクトワールドビル 3F") give the same address and floor and the same invoice registration number (T4011101081453) on Tabelog, and unico-co\'s official site says à la carte orders are taken at "隣接するイタリアン【オリヴァヴァ】" (unicoco.tokyo). Opened 11 November 2018 (Tabelog).',
      philosophy: 'Regional Italian dishes with unusual wines, good olive oil and fresh vegetables (Tabelog).', specialty: 'Italian appetizer plate; pasta; charcoal-grilled meats.',
      anecdotes: [
        { text: '"I ordered Lunch Set A: a choice of pasta (Salsiccia in tomato sauce) + salad for JPY 1,650. The salad arrived at 12:00 PM, and the pasta followed at 12:10 PM." — July 2026.', source: R + 'B531757466/' },
        { text: '"As I am pregnant, my friend informed the staff, and they were very flexible in accommodating our request for well-done dishes." — July 2026, private room.', source: R + 'B532475897/' },
        { text: '"Near our table, there were several bottles of red and white wine available, allowing us to pour as much as we liked at our own pace." — October 2026, ¥6,000 drinks course.', source: R + 'B537632516/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): オリヴァヴァ、イタリアン・ワインバー・パスタ、四谷1-7-18 アクトワールドビル3F、南北線四ツ谷駅2番出口から徒歩1分、平日ランチ11:30〜14:30 (L.O.14:00)・ディナー17:00〜22:30 (L.O.22:00)、土日祝ランチ11:30〜14:30・カフェ14:00〜17:00・ディナー17:00〜21:00、不定休、ディナーはチャージ料660円、2名の個室利用は3,300円、ワンドリンク制、40席 (カウンター6、テーブル34)、個室2〜24名、カード・PayPay 可、2018年11月11日オープン、前菜盛り合わせ5種1,650円・10種3,080円、パスタ1,800〜2,200円、自家農園の野菜。公式サイト (unicoco.tokyo): アラカルトは隣接するイタリアン【オリヴァヴァ】で。口コミ(2026年7月〜10月): 階段で3階、エレベーターなし、ランチセットA 1,650円、からすみパスタのランチ2,000円、土日祝のコース3,850円、苦手なものを事前に聞いてくれる、飲み放題はテーブルのワインを自分で注ぐ。',
      confidence: 'medium', sources: [TB, MENU, PARTY, UNI, R + 'B531757466/', R + 'B531836746/', R + 'B532475897/', R + 'B532844622/', R + 'B532904658/', R + 'B534094982/', R + 'B536706859/', R + 'B537299372/', R + 'B537632516/', R + 'B538296090/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-7-18 アクトワールドビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, menu updated 26 September 2026, Christmas 2026 courses posted; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686567, 139.728953); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 38m. Same building and floor as unico-co (tokyo_unicoco_yotsuya, address_ja "東京都新宿区四谷1-7-18 アクトワールドビル 3F"), whose Tabelog point is 2 m away, and Tori no Kura (tokyo_torinokura_yotsuya, 2F, 1 m away), so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, PARTY, R + 'B531757466/', R + 'B538296090/'],
    price_note: 'À la carte prices from the Tabelog menu (tax included, updated September 2026); lunch sets from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set A: pasta of choice and salad', '¥1,650', 'Lunch', 'no', 'ask', 'July 2026 review.', 'lunch_set_a'),
      it('', '', 'Weekend and holiday course (appetizers, pasta, meat)', '¥3,850', 'Course', 'ask', 'ask', 'Tabelog; October 2026 review.', 'weekend_course'),
      it('', '', 'Italian appetizer plate, 10 kinds', '¥3,080', 'Appetizers', 'ask', 'ask', 'Tabelog menu; 5 kinds ¥1,650.', 'antipasto_plate'),
      it('', '', 'Pantesca (Sicilian salad) with vegetables from the house farm', '¥1,100', 'Appetizers', 'ask', 'ask', 'Tabelog menu.', 'pantesca'),
      it('', '', 'Homemade karasumi pasta', '¥2,200', 'Pasta', 'no', 'no', 'Tabelog menu.', 'karasumi_pasta'),
      it('', '', 'Aso red beef grill', '¥3,800', 'Mains', 'ask', 'no', 'Tabelog menu.', 'aso_beef'),
      it('', '', 'Chef\'s speciality course, 15 items', '¥10,450', 'Course', 'ask', 'ask', 'Tabelog courses.', 'chef_course'),
    ] }, {
    cuisine: 'イタリア各地の郷土料理をワインとオリーブオイルで。肉は炭火で (食べログ)・ランチ: セットA 選べるパスタとサラダ1,650円 (2026年7月)、からすみパスタにサラダとコーヒー2,000円 (2026年10月)、ランチBコース3,080円、Cコース4,180円、贅沢ランチ6,000円 (食べログのコース)、前菜、パスタ、肉の土日祝限定コース3,850円 (食べログ、2026年10月)・アラカルト (税込み、2026年9月更新): イタリア前菜盛り合わせ5種1,650円、10種3,080円、ジャガイモの入らない伝統料理「T potato」550円、自家農園の野菜の Pantesca (Sicily のサラダ) 1,100円、生ハムなどの盛り合わせ2,197円、パスタ1,800〜2,200円 (norcina のクリーム、salsiccia の辛いトマトソース、ラグー、自家製からすみ、オリヴァヴァのカルボナーラ。濃厚な玉ねぎのパスタはオーナーがいる日だけ)、Cinta Senese の豚3,500円、Aso の赤牛3,800円、馬のハツ3,000円、鴨胸肉3,000円、フランス産仔牛の bavette 3,000円、ケーキ770〜1,100円・ディナーのコース6,600円と10,450円、2時間飲み放題付きのパーティープラン6,000円から (食べログ)',
    neighborhood: '四谷1-7-18 アクトワールドビル3F、新道通りを少し入ったところ。南北線四ツ谷駅2番出口から徒歩1分。同じ階に unico-co',
    gf_detail: '予約時に要確認。食べログには「グルテンフリー対応」 (ヴィーガン、ベジタリアン、ハラル、コーシャ、ヒンドゥーも) の印があるが料理名はない。メニューはパスタ中心で、前菜にパン、ケーキも。苦手なものを事前に聞き、材料を抜いてくれたという声 (2026年7月)。',
    vegan_detail: '予約時に要確認。食べログにはヴィーガン、ベジタリアン対応の印があるが料理名はない。植物性が中心なのは自家農園の野菜の Pantesca とオリーブくらいで、コースは生ハム、魚、肉、チーズが中心。',
    notes: '[イタリアン・四谷、個室のある3階の隠れ家] 四ツ谷駅から1分、古いビルの急な階段をのぼった3階。店によれば Tuscany のオリーブ畑にある地元の人が集まるレストランをイメージした店内に、明るいカウンターと、2〜24名の個室や半個室が並ぶ。シェフはイタリア各地で学び、郷土料理をワインとオリーブオイルに合わせる。野菜は自家農園から。2026年の口コミで人気なのはランチで、1,650円からのパスタとサラダ、からすみパスタ、カツオや生ハムののった前菜、パスタと肉の付く土日祝の3,850円のコース。夜はコースやパーティープランで、テーブルの横に置かれた赤と白のボトルから自分で注ぐ飲み放題も (2026年10月)。苦手なものを事前に聞き、妊娠中の客にも柔軟に対応してくれたという声がある一方、水が出るまでしばらく待ったという人も (2026年10月)。ウニ専門の unico-co と同じ階でインボイスの番号も同じ。unico-co のサイトはアラカルトをこちらで、と案内している。',
  });
}

// ================================================================ とりノ蔵
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13301015/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/'; const DRINK = TB + 'dtlmenu/drink/';
  const H = day(['12:00', '02:00']);
  put({
    id: 'tokyo_torinokura_yotsuya', name: 'とりノ蔵 (Tori no Kura)', category: 'OMNI',
    lat: 35.686564, lng: 139.728949, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori comes with sauce or salt (salt is the one to ask about), but the menu is full of wheat: kara-age and other fried dishes, gyoza, yakisoba, Caesar salad with croutons, and soy-based hot pots and dressings. No allergy information is given.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options"; plant dishes on the menu include edamame, cracked cucumber, salted cabbage with sesame, chilled fruit tomato, pickles and fries, but the hot pots use chicken-bone, bonito or beef-bone broths and the tofu salad is topped with bonito flakes.',
    hours_raw: 'Daily (holidays and the days around them too) 12:00–02:00 (Tabelog). Reservations by phone or online; cancellation fees for courses (30% two days ahead, 50% the day before, 100% on the day); a ¥500 seat charge and a 2-hour limit from 4 to 31 December except the 24th and 25th (Tabelog). 80 seats, all in private rooms for 2 to 80; hire for 20–50+ (Tabelog). Smoking allowed (Tabelog; a June 2026 reviewer noted it as a plus for smokers). Order on tablets at the table (June 2026 review). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay (Tabelog). Opened 1 October 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yotsuya 1-7-8, Act World Bldg 2F B, west side of Yotsuya — 1 min from Exit 2 of Yotsuya Stn (Tokyo Metro), 3 min from JR Yotsuya Stn (Atre south exit)',
    cuisine: 'Private-room izakaya with a Kyushu streak (menu prices tax included, updated July 2026) · charcoal yakitori of Daisen chicken, skewered daily: thigh, negima, skin, tail, liver, cartilage, neck, tsukune, gizzard, wing at ¥110 each with sauce or salt; assorted specialty skewers ¥1,480 · Hakata motsunabe ¥1,520; chicken sukiyaki, black-pork shabu-shabu, tomato, spicy chige, soy-milk and chanko hot pots ¥1,520–1,740 · sashimi from Misaki port, 3 kinds ¥1,089 or 5 kinds ¥1,749; Kumamoto marbled horse sashimi ¥975; Daisen chicken sashimi ¥869 · goma saba, chicken nanban, kara-age, dried fish, teppan yakisoba, takana-mentaiko fried rice · snacks ¥539 (edamame, cracked cucumber, salted squid, firefly squid); salads ¥649–849 · party courses with 3 hours of draft beer and drinks ¥4,000–5,000 (discounted from ¥5,000–6,000) · sake and shochu (Kyushu sake per a July 2026 review), sours from ¥680',
    website: null, gmaps: gm('とりノ蔵 四谷 アクトワールドビル'), menu_url: MENU,
    notes: "[Izakaya · Yotsuya, private rooms, charcoal yakitori and Kyushu dishes to 2 am] A big second-floor izakaya a minute from Yotsuya Station, opened in October 2024, where every seat is in a private room, from tables for two up to banquets for 80, and the kitchen runs from noon to 2 am. The shop's pitch is Daisen chicken skewered every day and grilled over binchotan, at ¥110 a stick, alongside Kyushu standards: Hakata motsunabe, goma saba, chicken nanban, Kumamoto horse sashimi and sake from Oita, Saga and Fukuoka. June 2026 diners praised the yakitori platter, tsukune, cartilage, gyoza and takana-mentaiko fried rice, and a July 2026 visitor walked in when staff outside caught an eye. Not everyone was won over: a September 2026 group found the ¥5,000 course far from its photos, with a seafood bowl of mostly rice and five skewers to share among four. Smoking is allowed; order on the tablet.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2024 (Tabelog).',
      background: 'No source names the owner or cooks. The corporate-member Tabelog listing says its free-range chicken is "skewered daily and grilled slowly over binchotan charcoal" and offers "Authentic Shochu and Sake Sourced from Owners Across Japan"; the menu names Daisen chicken, Misaki port sashimi, Kagoshima black pork and organic vegetables from partner farms. A web search found no other branch.',
      philosophy: null, specialty: 'Charcoal-grilled Daisen chicken yakitori; Hakata motsunabe.',
      anecdotes: [
        { text: '"It\'s just a few minutes\' walk from the station and open until 2 AM, making it a convenient spot for after-work gatherings or a second stop." — June 2026, yakitori platter and takana-mentaiko fried rice.', source: R + 'B530779038/' },
        { text: '"I made eye contact with a staff member who was inviting customers and quietly walked in. I ordered a glass of Tori no Seki (Oita, Kayashima Brewery)… Interestingly, I didn\'t end up ordering the yakitori that the restaurant is named after." — July 2026, Tanabata night.', source: R + 'B531573132/' },
        { text: '"The seafood rice bowl at the end was so disappointing that I had to do a double-take… The yakitori was limited to just 5 types for 4 people." — September 2026, ¥5,000 course.', source: R + 'B535051586/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): とりノ蔵、居酒屋・焼き鳥・もつ鍋、四谷1-7-8 アクトワールドビル2F B、東京メトロ四ツ谷駅2番出口から徒歩1分、JR四ツ谷駅アトレ南口から3分、毎日12:00〜翌2:00、80席、全席個室、喫煙可、カード・PayPay 可、2024年10月1日オープン、毎日串打ちして備長炭で焼く地鶏、串110円、もつ鍋1,520円、3時間飲み放題付きコース4,000〜5,000円 (割引後)。口コミ(2026年6月〜9月): 焼き鳥の盛り合わせ、つくね、軟骨、gyoza、高菜明太チャーハン、テーブルのタブレットで注文、Kyushu の日本酒、5,000円のコースは写真と違ったという声。',
      confidence: 'low', sources: [TB, MENU, DRINK, R + 'B529669706/', R + 'B530120427/', R + 'B530729557/', R + 'B530779038/', R + 'B530785310/', R + 'B530900661/', R + 'B530900872/', R + 'B531195884/', R + 'B531573132/', R + 'B535051586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering at the table (June 2026); the Tabelog menu has photos.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-7-8 アクトワールドビル 2F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, food menu updated 29 July 2026; reviews read dated June–September 2026, and the listing shows an October 2026 visit.' },
    pin_source: `Tabelog ${TB} (35.686564, 139.728949); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 38m. Tabelog and reviews give 四谷1-7-8 アクトワールドビル 2F B, while Oliva Vava (tokyo_oliva_vava_yotsuya) and unico-co (tokyo_unicoco_yotsuya) give 四谷1-7-18 in the same-named building; the three Tabelog points lie within 2 m, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, DRINK, TB],
    price_note: 'Prices from the Tabelog menu (tax included; food updated July 2026, drinks October 2024) and course pages.', last_checked: TODAY, items: [
      it('', '', 'Yakitori, one skewer (thigh, negima, skin, liver, tsukune …), sauce or salt', '¥110', 'Yakitori', 'ask', 'no', 'Tabelog menu.', 'yakitori_skewer'),
      it('', '', 'Assorted specialty skewers', '¥1,480', 'Yakitori', 'ask', 'no', 'Tabelog menu.', 'yakitori_platter'),
      it('', '', 'Authentic Hakata motsunabe', '¥1,520', 'Hot pot', 'no', 'no', 'Tabelog menu; soy broth with chicken bone and bonito.', 'motsunabe'),
      it('', '', 'Kumamoto marbled horse sashimi', '¥975', 'Sashimi', 'ask', 'no', 'Tabelog menu; with Kyushu sweet soy sauce.', 'basashi'),
      it('', '', 'Assorted sashimi from Misaki port, 3 kinds', '¥1,089', 'Sashimi', 'ask', 'no', 'Tabelog menu; 5 kinds ¥1,749.', 'sashimi_3'),
      it('', '', 'Boiled edamame', '¥539', 'Snacks', 'ask', 'ask', 'Tabelog menu.', 'edamame'),
      it('', '', 'Toriume course with 3 hours of draft beer and drinks, 7 dishes', '¥4,000', 'Course', 'no', 'no', 'Tabelog (discounted from ¥5,000).', 'toriume_course'),
    ] }, {
    cuisine: '個室の居酒屋、Kyushu の料理が多め (値段は食べログのメニュー、税込み、2026年7月更新)・毎日串打ちする Daisen の鶏の炭火焼き鳥: もも、ねぎま、皮、ぼんじり、レバー、軟骨、せせり、つくね、砂肝、手羽が1本110円 (たれか塩)、おすすめ串の盛り合わせ1,480円・Hakata のもつ鍋1,520円。鶏のすき焼き、黒豚のしゃぶしゃぶ、トマト、辛いチゲ、豆乳、ちゃんこの鍋1,520〜1,740円・Misaki 港の刺身3種1,089円、5種1,749円、Kumamoto の霜降り馬刺し975円、Daisen の鶏刺し869円・goma saba、chicken nanban、kara-age、干物、鉄板焼きそば、高菜明太チャーハン・つまみ539円 (枝豆、たたききゅうり、塩辛、ホタルイカ)、サラダ649〜849円・3時間の生ビール飲み放題付きの宴会コース4,000〜5,000円 (5,000〜6,000円から割引)・日本酒と焼酎 (2026年7月の口コミでは Kyushu の日本酒)、サワー680円から',
    neighborhood: '四谷1-7-8 アクトワールドビル2F B、四谷の西側。東京メトロ四ツ谷駅2番出口から徒歩1分、JR四ツ谷駅アトレ南口から3分',
    gf_detail: '要確認。焼き鳥はたれか塩 (確認するなら塩)。ただしメニューは小麦が多い: kara-ageなどの揚げ物、gyoza、焼きそば、クルトンのシーザーサラダ、醤油ベースの鍋やドレッシング。アレルギーの案内はない。',
    vegan_detail: '要確認。食べログにはベジタリアン対応の印。植物性の料理は枝豆、たたききゅうり、ごま塩キャベツ、冷やしフルーツトマト、漬物、フライドポテトなど。鍋は鶏ガラ、かつお、牛骨のスープで、豆腐のサラダにはかつお節。',
    notes: '[居酒屋・四谷、個室で炭火焼き鳥とKyushu の料理を深夜2時まで] 四ツ谷駅から1分、ビル2階の大きな居酒屋。2024年10月オープンで、席はすべて個室、2名のテーブルから80名の宴会まで。昼の12時から深夜2時まで開いている。店の売りは毎日串打ちして備長炭でじっくり焼く Daisen の鶏で、1本110円。Kyushu の定番も並ぶ: もつ鍋、goma saba、chicken nanban、Kumamoto の馬刺し、Oita、Saga、Fukuoka の日本酒。2026年6月の口コミでは焼き鳥の盛り合わせ、つくね、軟骨、gyoza、高菜明太チャーハンが好評。2026年7月には店の前の客引きと目が合って入ったという人も。満足しなかった人もいて、2026年9月のグループは5,000円のコースが写真と大きく違い、締めの海鮮丼はほとんどご飯、串は4人で5本だったという。喫煙可、注文はタブレットで。',
  });
}

// ================================================================ ウニ専門レストラン unico-co
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13209000/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://unicoco.tokyo'; const PARTY = TB + 'party/';
  const WD = day(['11:30', '14:30'], ['18:00', '22:30']); const WE = day(['11:30', '14:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_unicoco_yotsuya', name: 'ウニ専門レストラン unico-co (Uni Senmon Restaurant unico-co)', category: 'OMNI',
    lat: 35.68657, lng: 139.728932, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Neither the official site nor Tabelog says anything about gluten; the courses include sea-urchin pasta, house focaccia and desserts (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course is built on sea urchin, from the appetizers to the dessert, with abalone, oysters, foie gras and beef in some.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 18:00–22:30; Sat, Sun and holidays 11:30–14:30 and 17:00–21:00 (Tabelog); the official site gives weekdays 11:30–14:30 and 17:00–22:30. Reservation only; closed on days with no reservations; calls outside these hours are welcome (Tabelog). Service charge 10%; private rooms for 2–24 carry a fee of 10% of the bill (¥3,300 for lunch and trial courses) (Tabelog; official site). 14 seats plus private rooms; non-smoking (Tabelog). Third floor up stairs (July 2026 review). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments (Tabelog). Children welcome; pets only in private rooms, booked by phone (Tabelog). English menu and English-speaking staff (Tabelog); the site has an English page. Opened November 2016 per the official site (Tabelog gives 11 November 2015); renovated 2018.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-7-18, Act World Bldg 3F — 1 min from Yotsuya Stn (Marunouchi, Namboku, JR Chuo/Sobu Lines); Oliva Vava is next door on the same floor',
    cuisine: 'Sea-urchin tasting courses on an Italian base, with 15–20 kinds of uni from around Japan on hand (official site; prices tax included, plus 10% service) · Standard ¥19,800 (appetizer, soup, 7-kind uni tasting, uni pasta, main, uni dessert); Special ¥26,400 (9 kinds); Luxury ¥30,800 (12 kinds and a dish the site calls "beyond Rossini"); Trial, 5 dishes with 3 kinds, ¥9,350; Lunch ¥6,600 (appetizer, house karasumi and uni pasta, main, uni dessert); weekend Uni Date plan ¥13,200 (Tabelog); Christmas 2026 courses ¥16,500 and ¥30,800 (Tabelog) · rich uni pasta ¥4,950, karasumi and uni pasta ¥3,080, added to a course (official site) · one sake only, the original-label "unico-co", co-produced with the owner of the members-only sake bar 鎮守の森 animism bar in Arakicho, from organically grown Yamada Nishiki; more than 380 wines chosen by the sommelier owner-chef (official site)',
    website: SITE, gmaps: gm('ウニ専門レストラン unico-co 四谷'), menu_url: SITE,
    notes: "[Italian · Yotsuya, a restaurant devoted to sea urchin] \"By uni maniacs, for uni maniacs\": the owner-chef, a sommelier trained in Italian cooking, travelled Japan tasting sea urchin and opened this shop in 2016 after the summer-only uni festival at the chef's first restaurant, Osteria T, drew fans from around the country. It keeps 15 to 20 kinds of uni at a time, the site says, because the same species tastes different by season and even by beach, and every course turns on a tasting plate of 7, 9 or 12 kinds side by side, then uni pasta, a main and an uni dessert. Diners in 2025–26 compared red, black, bafun, purple and hadate uni, liked the rich ones from Aomori and Hokkaido and the uni from Hagi, and found uni even in the pudding; one parents' birthday got a surprise plate. A blue, sea-themed third-floor room with ocean-like glassware and private rooms. Not every visit landed: a November 2025 pasta lunch disappointed. Reservation only; the à la carte Italian next door, Oliva Vava, is under the same roof.",
    chef_bio: { chef_name: 'Hironobu Tsujita (辻田 啓伸)', roles: ['Owner-chef and sommelier (official site: "ソムリエでもあるオーナーシェフ")'], origin: 'Born 1977 in Kagoshima Prefecture; moved to Tokyo at 26 (official site).',
      background: 'Per the official profile: born in Kagoshima in 1977; came to Tokyo at 26; at 31 enrolled at 辻調理師専門学校 in Abeno, Osaka; after graduating learned cooking and wine at an osteria in Shinjuku and qualified as a sommelier; in June 2012, at 35, opened Osteria T in Yotsuya, whose "夏限定ウニ祭" (summer-only uni festival) drew fans from across Japan; opened unico-co in November 2016 and reopened it after a refit in 2018 to host guests from around the world. The site says the chef tastes sea urchin around the country and joins each region\'s uni with its local ingredients and the chef\'s Italian roots. TV: 王様のブランチ (19 October 2019), ぶらり途中下車の旅 (6 February 2021), 全力!脱力タイムズ (9 July 2021), 食彩の王国 (23 July 2022) (official site). The house sake\'s Yamada Nishiki comes from the Tottori organic grower 杉山信一郎 (official site). The Italian restaurant Oliva Vava (tokyo_oliva_vava_yotsuya) on the same floor takes à la carte orders (official site).',
      philosophy: '"ウニで世界一を目指す" — to be the world\'s best at sea urchin; keeping 15–20 kinds of a costly, perishable ingredient makes no sense for a restaurant, the site says, but it is worth the risk because guests are moved (official site).', specialty: 'The 12-kind uni tasting plate; uni pasta; uni desserts.',
      anecdotes: [
        { text: '"Although we hadn\'t ordered a dessert, they surprised us with a special plate for my mother\'s 77th birthday, which made both my parents very happy." — November 2025.', source: R + 'B517817668/' },
        { text: '"A variety of uni was served, including red uni, black uni, bafun uni, and purple uni… The hadate uni was truly delicious… I think I won\'t need uni for a while." — July 2026, ¥30,000–39,999 per person.', source: R + 'B532290394/' },
        { text: '"The salad and pasta cost over JPY 2000… It only felt like our hunger was satisfied." — November 2025, karasumi pasta lunch.', source: R + 'B517837390/' },
      ],
      japanese_sources_summary: '公式サイト (unicoco.tokyo): ウニ専門レストラン unico-co ウニココ、ウニで世界一を目指す、ウニマニアの、ウニマニアによる、ウニマニアのためのレストラン、全国のウニを常時15〜20種、オーナーシェフ辻田啓伸 (Hironobu Tsujita)、1977年鹿児島県生まれ、26歳で上京、31歳で大阪・あべのの辻調理師専門学校へ、新宿のオステリアで料理とワイン、ソムリエ資格、2012年6月に四ツ谷でオステリアT、「夏限定ウニ祭」、2016年11月にunico-co、2018年に新装開店、スタンダード19,800円、スペシャル26,400円、ラグジュアリー30,800円、トライアル9,350円、ランチ6,600円、濃厚ウニパスタ4,950円、からすみとウニパスタ3,080円、別途サービス料10%、アラカルトは隣接するイタリアン【オリヴァヴァ】、日本酒はオリジナルの『unico-co』のみ (荒木町の会員制日本酒バー『鎮守の森 animism bar』の店主と共同プロデュース、鳥取県の杉山信一郎さんの無農薬の山田錦)、ワイン380種超、平日11:30〜14:30・17:00〜22:30、予約制、四谷1-7-18 アクトワールドビル3F。食べログ: 予約のみ、予約のない日は休み、14席、個室2〜24名 (個室料10%)、2015年11月11日オープンと記載。口コミ(2025年11月〜2026年8月): ウニの食べ比べ、red・black・bafun・purple・hadate のウニ、Aomori と Hokkaido、Hagi のウニ、デザートやプリンにもウニ、青い店内、誕生日のサプライズ、3階まで階段。',
      confidence: 'medium', sources: [SITE, TB, PARTY, R + 'B517817668/', R + 'B517837390/', R + 'B518890054/', R + 'B520697746/', R + 'B521522689/', R + 'B521695747/', R + 'B524334790/', R + 'B524370088/', R + 'B532290394/', R + 'B534176785/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; the official site has an English page; courses explained dish by dish (November 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷1-7-18 アクトワールドビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing with Christmas 2026 courses posted; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.686570, 139.728932); cross-checked: GSI 東京都新宿区四谷一丁目7番地 (lot) 37m. Same building and floor as Oliva Vava (tokyo_oliva_vava_yotsuya, address_ja "東京都新宿区四谷1-7-18 アクトワールドビル 3F", 2 m away), so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, PARTY],
    price_note: 'Course prices from the official site (tax included, plus 10% service; read November 2026) and Tabelog course pages.', last_checked: TODAY, items: [
      it('スタンダード', '', 'Standard course: 7-kind uni tasting, uni pasta, main, uni dessert', '¥19,800', 'Course', 'ask', 'no', 'Official site; Tabelog.', 'standard_course'),
      it('スペシャル', '', 'Special course: 9-kind uni tasting', '¥26,400', 'Course', 'ask', 'no', 'Official site.', 'special_course'),
      it('ラグジュアリー', '', 'Luxury course: 12-kind uni tasting', '¥30,800', 'Course', 'ask', 'no', 'Official site.', 'luxury_course'),
      it('トライアルコース（5品）', '', 'Trial course, 5 dishes, 3-kind uni tasting', '¥9,350', 'Course', 'ask', 'no', 'Official site.', 'trial_course'),
      it('ランチコース', '', 'Lunch course: appetizer, karasumi and uni pasta, main, uni dessert', '¥6,600', 'Course', 'no', 'no', 'Official site.', 'lunch_course'),
      it('濃厚ウニパスタ', '', 'Rich uni pasta (add-on)', '¥4,950', 'Pasta', 'no', 'no', 'Official site.', 'uni_pasta'),
    ] }, {
    cuisine: 'イタリアンを土台にしたウニの食べ比べのコース。全国のウニを常時15〜20種 (公式サイト。税込み、別途サービス料10%)・スタンダード19,800円 (前菜、スープ、ウニ食べ比べ7種、ウニパスタ、メイン、ウニデザート)、スペシャル26,400円 (9種)、ラグジュアリー30,800円 (12種と「ウニココのロッシーニ超え」)、トライアル5品3種9,350円、ランチ6,600円 (前菜、自家製カラスミとウニのパスタ、メイン、ウニデザート)、土日祝のウニデートプラン13,200円 (食べログ)、2026年のクリスマスコース16,500円と30,800円 (食べログ)・濃厚ウニパスタ4,950円、からすみとウニパスタ3,080円をコースに追加 (公式サイト)・日本酒はオリジナルラベルの『unico-co』だけ。荒木町の会員制日本酒バー『鎮守の森 animism bar』の店主と共同プロデュース、無農薬の山田錦。ソムリエでもあるオーナーシェフが選ぶワイン380種超 (公式サイト)',
    neighborhood: '四谷1-7-18 アクトワールドビル3F。四ツ谷駅 (丸ノ内線、南北線、JR中央線・総武線) から徒歩1分。同じ階の隣にオリヴァヴァ',
    gf_detail: '予約時に要確認。公式サイトにも食べログにもグルテンの説明はない。コースにはウニパスタ、自家製フォカッチャ、デザートが入る (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。前菜からデザートまで、どのコースもウニが主役で、アワビ、牡蠣、フォアグラ、牛肉も。',
    notes: '[イタリアン・四谷、ウニのためのレストラン] 「ウニマニアの、ウニマニアによる、ウニマニアのためのレストラン」。イタリアンで修業したソムリエでもあるオーナーシェフが全国のウニを食べ歩き、最初の店オステリアTの「夏限定ウニ祭」に全国からファンが訪れたのをきっかけに、2016年に開いた。同じ種類のウニでも季節や浜で味が違うからと、サイトによれば常時15〜20種をそろえ、どのコースも7種、9種、12種の食べ比べが中心で、ウニパスタ、メイン、ウニのデザートと続く。2025〜26年の口コミではred、black、bafun、purple、hadate のウニを食べ比べ、Aomori と Hokkaido の濃厚なもの、Hagi のウニが好評で、プリンにまでウニ。両親の誕生日にサプライズのプレートが出たという声も。青を基調にした海のような3階の店内に、海を思わせるガラスの器と個室。2025年11月のパスタのランチにはがっかりしたという人も。予約制。アラカルトのイタリアン、オリヴァヴァが同じフロアにある。',
  });
}

save();
