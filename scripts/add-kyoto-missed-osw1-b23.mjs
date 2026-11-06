// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 23.
//   + キラナ スパイス kiranah spice (one-person spice-curry café near Gojo-Takakura; since 2017)
//   + 勝鞍 Kachi Kura (old-style back-fat shoyu ramen at Higashiyama-Yasui)
//   + 炭の香 なかつじ Sumi no Ko Nakatsuji (charcoal eel and Omi beef in an Okazaki townhouse; since October 2025)
//   + 游美 Yubi (referral-only, sign-less Japanese counter south of the Imperial Palace, by a French-trained chef)
//   - ななや 京都三条店 (26030144): skipped (reason below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26029334, 26030144 (skipped), 26005442;
//   from `next notable 200`: 26043800, 26007086. None is in data/kyoto.json by name (キラナ/kiranah, 勝鞍/Kachi Kura,
//   なかつじ/Nakatsuji, 游美/Yubi). By address: 岡崎南御所町34 also holds kyoto_yamamoto_menzou_okazaki and kyoto_okakita
//   (other shops; Nakatsuji pin offset); 祇園町南側570 also holds kyoto_aji_fukushima (a different shop on a large lot).
//   Same-name count (Greg's Samboa ruling): キラナ スパイス, 勝鞍 and 游美 single shops. なかつじ is single; its site links
//   to 路地 との本 (not in data). Service charges checked against Tabelog's Japanese original: none listed for the four.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030144', 'ななや 京都三条店: a same-name chain — the operator’s site (nanaya-matcha.com, read 2026-11-05) lists ななや 藤枝店, 静岡店, 青山店, ななやsud-ouest 牧之原店 and ななや京都三条店, plus a 壽々喜園×ななや collaboration shop: five shops under the ななや name');

// ================================================================ キラナ スパイス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029334/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_kiranah_spice', name: 'キラナ スパイス (kiranah spice)', category: 'OMNI',
    lat: 34.998661, lng: 135.762673, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries and lunch plates with rice; a fried shrimp-and-tofu dish in one lunch plate; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a vegetarian curry lunch was offered (January 2025); other curries use chicken or pork (2025–2026 reviews).',
    hours_raw: '11:30–21:00 (L.O. 20:30); irregular closures (Tabelog). Reservations accepted and advised; arrive at opening rather than queue before it (May 2026). Cash only — no cards, e-money or QR (Tabelog). 20 seats, counter by the window (Tabelog; November 2025). Non-smoking (Tabelog). No bicycle parking (May 2026). In a residential lane near Takakura-Matsubara, 5 min from Gojo Stn (Tabelog; 2025 reviews). Opened 24 July 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura-Matsubara, in a residential lane — 5 min from Gojo Stn',
    cuisine: 'Spice-curry café with an organic, additive-free leaning (October 2025) · curry of the day, rice in sizes (M ¥1,200 in October 2025): coconut red curry with aburaage and winter vegetables, chicken and vegetable red curry, a bean curry, a root-vegetable and mushroom curry with pork and brown rice ¥1,300 (2025–2026 reviews) · vegetarian curry lunch; soup curry (2025) · daily lunch plate, e.g. fried shrimp and tofu in tom yum with lotus root (October 2025) · chai in several kinds, including cardamom and ginger (February 2026)',
    website: null, gmaps: gm('キラナ スパイス 京都'), menu_url: null,
    notes: '[Curry · Gojo-Takakura, a one-person spice kitchen] An easily missed café in a residential lane near Takakura-Matsubara where the owner cooks and serves alone: a curry of the day piled with vegetables (about ¥1,100–1,300 with salad), a daily lunch plate, and chai in several spices. Reservations help; there may be only one dish left by mid-lunch, and service can feel brisk. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who runs the café alone'], origin: null,
      background: 'Tabelog gives the opening as 24 July 2017. October 2025 and May 2026 reviewers note the owner runs the place single-handed; an October 2025 reviewer appreciated the focus on organic, additive-free ingredients.',
      philosophy: null, specialty: 'Vegetable-heavy spice curry; chai.',
      anecdotes: [
        { text: 'A May 2026 diner booked by phone the day before and was asked to come at opening time rather than queue, and to leave bicycles elsewhere.', source: R + 'B529209269/' },
        { text: 'An August 2025 diner loved the soup curry but found the staff unfriendly and only one dish on offer, and was surprised at the quick, serious Japanese used with foreign guests.', source: R + 'B512708817/' },
      ],
      japanese_sources_summary: '食べログ: キラナ スパイス、カフェ、下京区樋之下町33-1、五条駅から徒歩5分、11:30〜21:00 (L.O.20:30)、不定休、予約可、カード・電子マネー・QR不可、20席、禁煙、ベジタリアン対応、2017年7月24日オープン。口コミ (2025〜2026年、英語): 店主がひとりで営む、日替わりのカレー (ココナッツのレッドカレー、豆のカレー、根菜ときのこのカレーと玄米1,300円)、ベジタリアンカレー、スープカレー、トムヤムの日替わりプレート、チャイ、オーガニックと無添加にこだわる、前日予約、開店時刻に来店を、自転車は置けない、2025年8月にはスタッフが無愛想との声。',
      confidence: 'medium', sources: [TB, R + 'B427731745/', R + 'B498852769/', R + 'B499292812/', R + 'B512708817/', R + 'B513130364/', R + 'B514863906/', R + 'B517208895/', R + 'B522732523/', R + 'B529209269/', R + 'B532931348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book ahead; one-person service can be slow or brisk.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区樋之下町33-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.998661, 135.762673); cross-checked: GSI 京都府京都市下京区樋之下町33番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532931348/', R + 'B517208895/'],
    price_note: 'No menu read; prices from October 2025 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Curry lunch (curry of the day, salad, brown rice)', '¥1,300', 'Lunch', 'ask', 'ask', 'July 2026.', 'curry_lunch'),
      it('', '', 'Curry lunch, rice size M', '¥1,200', 'Lunch', 'ask', 'ask', 'October 2025.', 'curry_lunch_m'),
    ] }, {
    cuisine: 'オーガニックと無添加を大切にするスパイスカレーのカフェ (2025年10月)・日替わりのカレー、ご飯の量を選べる (2025年10月はMで1,200円): ココナッツのレッドカレーと油揚げと冬野菜、鶏と野菜のレッドカレー、豆のカレー、豚と根菜ときのこのカレーと玄米1,300円 (2025〜2026年の口コミ)・ベジタリアンカレーのランチ、スープカレー (2025年)・日替わりのランチプレート、えびと豆腐の揚げ物のトムヤム、蓮根 (2025年10月)・カルダモンやジンジャーなど数種のチャイ (2026年2月)',
    neighborhood: '高倉松原近くの住宅街。五条駅から徒歩5分',
    gf_detail: '要確認。スパイスカレーとご飯のランチプレート。えびと豆腐の揚げ物も。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応の記載、ベジタリアンカレーのランチも (2025年1月)。ほかのカレーには鶏や豚 (2025〜2026年の口コミ)。',
    notes: '[カレー・五条高倉、ひとりで営むスパイスカレー] 高倉松原近くの住宅街の、見落としそうなカフェ。店主がひとりで作り、運ぶ。野菜たっぷりの日替わりカレー (サラダ付きで約1,100〜1,300円)、日替わりのランチプレート、数種のスパイスのチャイ。予約がおすすめで、昼過ぎには1品だけのことも。接客はそっけなく感じることも。現金のみ。',
  });
}

// ================================================================ 勝鞍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['14:30', '20:00']);
  put({
    id: 'kyoto_kachikura_ramen_yasui', name: '勝鞍 (Kachi Kura)', category: 'OMNI',
    lat: 35.000899, lng: 135.777429, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-sauce broth; gyoza (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soy-sauce tonkotsu broth with back fat, chashu (2024–2026 reviews).',
    hours_raw: '11:30–14:00 and 14:30–20:00, Tuesday–Sunday; closed Monday; hours may change (Tabelog). No reservations (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 20 seats: counter and a few tables at the back (Tabelog; 2024–2025 reviews). Non-smoking; wheelchair accessible; children and strollers welcome (Tabelog). A TV in the shop (August 2025). At the Higashiyama-Yasui crossing south of Yasaka Shrine, by the Higashiyama Yasui bus stop; 9 min from Gion-Shijo Stn (Tabelog; 2024–2025 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Yasui, south of Yasaka Shrine — 9 min from Keihan Gion-Shijo Stn',
    cuisine: 'Old-style Kyoto ramen: soy-sauce tonkotsu with floating back fat, medium-thin noodles, chashu, menma and plenty of Kujo green onion (2024–2026 reviews) · ramen ¥750; chashu ramen ¥850; large +¥150 (2025–2026) · gyoza ¥350; chicken-wing kara-age ¥600; small rice ¥150 (2025–2026)',
    website: null, gmaps: gm('勝鞍 ラーメン 東山安井'), menu_url: null,
    notes: '[Ramen · Higashiyama-Yasui, an old-school Kyoto bowl] A traditional-looking ramen shop with noren and lanterns at the Higashiyama-Yasui crossing, a few minutes south of Yasaka Shrine. The bowl is the Kyoto classic — rich soy-sauce tonkotsu with back fat, chashu and a heap of Kujo green onion — at ¥750 (¥850 with extra chashu), with juicy gyoza on the side. Dim, homely room; many visitors from abroad. PayPay but no cards; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed); reviewers describe a couple at work, and in April 2026 a foreign staff member'], origin: null,
      background: 'A November 2024 reviewer calls it an old shop; a December 2024 reviewer describes it as run by a Japanese couple, likely the owner and the owner’s wife, and an August 2025 reviewer says it seems to be run by a couple. An April 2026 regular was greeted by a friendly foreign staff member while the owner hung the noren.',
      philosophy: null, specialty: 'Back-fat soy-sauce ramen; gyoza.',
      anecdotes: [
        { text: 'An April 2026 regular arrived at 11:27 and was let in as the owner hung the noren; the bowl came in about five minutes.', source: R + 'B434491494/' },
        { text: 'A December 2024 visitor noted it keeps its traditional look while chains spread across Kyoto, and that many tourists from abroad come.', source: R + 'B497494649/' },
      ],
      japanese_sources_summary: '食べログ: 勝鞍、ラーメン、東山区祇園町南側570、東山安井バス停から徒歩1分、祇園四条駅から徒歩9分、火〜日 11:30〜14:00、14:30〜20:00、月曜休み、予約不可、カード・電子マネー不可、PayPay可、20席、禁煙、車椅子可、子ども可。口コミ (2024〜2026年、英語): 醤油豚骨に背脂、中細麺、チャーシュー、メンマ、Kujo ねぎ、ラーメン750円、チャーシューメン850円、大盛り150円、餃子350円、手羽唐揚げ600円、小ライス150円、夫婦で営んでいるよう、2026年4月には外国人のスタッフも、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B434491494/', R + 'B497494649/', R + 'B500300588/', R + 'B508385236/', R + 'B508438379/', R + 'B512875724/', R + 'B520427414/', R + 'B521127696/', R + 'B525512750/', R + 'B535465080/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'PayPay but no cards; many visitors from abroad; wheelchair accessible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000899, 135.777429); GSI 京都府京都市東山区祇園町南側570番地 matches the lot number but its point is 432 m away — 570 is a large lot (kyoto_aji_fukushima shares the address) — so not cross-checked; the Tabelog point sits at the Higashiyama-Yasui crossing the reviews describe; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512875724/', R + 'B521127696/', R + 'B500300588/'],
    price_note: 'No menu read; prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥750', 'Ramen', 'no', 'no', 'August 2025.', 'ramen'),
      it('', '', 'Chashu ramen', '¥850', 'Ramen', 'no', 'no', '2025–2026.', 'chashu_ramen'),
      it('', '', 'Gyoza', '¥350', 'Sides', 'no', 'no', 'January 2025.', 'gyoza'),
      it('', '', 'Chicken-wing kara-age', '¥600', 'Sides', 'no', 'no', 'January 2026.', 'tebasaki_karaage'),
      it('', '', 'Small rice', '¥150', 'Sides', '', '', 'January 2026.', 'rice_small'),
    ] }, {
    cuisine: '昔ながらの京都ラーメン: 背脂を浮かべた醤油豚骨、中細麺、チャーシュー、メンマ、たっぷりの Kujo ねぎ (2024〜2026年の口コミ)・ラーメン750円、チャーシューメン850円、大盛り150円増し (2025〜2026年)・餃子350円、手羽の唐揚げ600円、小ライス150円 (2025〜2026年)',
    neighborhood: '八坂神社の南、東山安井。京阪祇園四条駅から徒歩9分',
    gf_detail: 'グルテンフリーではない。醤油スープの小麦の麺、餃子 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。背脂入りの醤油豚骨スープ、チャーシュー (2024〜2026年の口コミ)。',
    notes: '[ラーメン・東山安井、昔ながらの京都の一杯] 八坂神社の南、東山安井の交差点の、暖簾と提灯の昔ながらのラーメン店。京都の定番、背脂入りの濃い醤油豚骨にチャーシューとたっぷりの Kujo ねぎで750円 (チャーシューメンは850円)、ジューシーな餃子も。薄暗く家庭的な店内、海外の客も多い。PayPay可、カード不可、月曜休み。',
  });
}

// ================================================================ 炭の香 なかつじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043800/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://suminokou-nakatsuji.jp/'; const MENU = SITE + 'menu';
  const H = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_sumi_no_ko_nakatsuji', name: '炭の香 なかつじ (Sumi no Ko Nakatsuji)', category: 'OMNI',
    lat: 35.01424, lng: 135.7849, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled eel glazed with a tare of brown sugar and tamari soy; whether the tamari is wheat-free is not stated; course dishes include umaki and Omi beef (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel and Omi beef (official site).',
    hours_raw: 'Lunch 11:30–15:00 (L.O. 14:00), dinner 17:30–21:00 (L.O. 20:00), Tuesday–Sunday; closed Monday (holiday Mondays vary) (Tabelog; official site). Reservations online or by phone (Tabelog; official site). Cards, PayPay and Rakuten Pay; no e-money (Tabelog). 25 seats per the site (27 per Tabelog): counter and tables on the first floor, room for 12 upstairs (official site; Tabelog). Non-smoking, smoking area on the first floor (Tabelog). BYO drinks; sommelier; takeaway; English menu; children welcome with kids’ chairs (Tabelog). Eel is grilled to order, so waits of about 30 minutes (June 2026). In a renovated townhouse near Okazaki Park and Miyako Messe, 5 min from the Okazaki-dori bus stop (Tabelog; 2026 reviews). Opened 1 October 2025 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, near Okazaki Park and Miyako Messe — 5 min from the Okazaki-dori bus stop',
    cuisine: 'Charcoal-grilled eel from clear-water farms in Hiroshima, Shizuoka and elsewhere, and Omi beef, with pot-cooked rice (official site) · lunch unaju: small (half an eel) ¥3,850, regular (one eel) ¥5,390, jō (one and a half) ¥7,590, toku-jō (two) ¥9,790; any can become hitsumabushi (official site) · shirayaki ¥4,950, kabayaki ¥4,950, umaki ¥2,750, liver grilled ¥1,650 (official site) · dinner omakase of eel and Omi beef ¥16,500: hairy crab shiraae, clam and bamboo shoot, Omi beef roast beef or yukhoe, seafood snacks, eel shirayaki, meat course, pot rice as kabayaki, donburi or chazuke, dessert (official site) · takeaway eel bō-zushi ¥5,390 (official site) · salad and small dishes while the eel grills (2026 reviews) · sake, shochu, Kyoto whisky, wine (official site)',
    website: SITE, gmaps: gm('炭の香 なかつじ 岡崎'), menu_url: MENU,
    notes: '[Eel · Okazaki, charcoal-grilled unaju near Heian Shrine] A renovated townhouse by Okazaki Park, opened in October 2025, where eel is grilled to order over charcoal at the counter and glazed with a brown-sugar and tamari tare. Lunch unaju runs from ¥3,850 (half an eel) to ¥9,790; dinner is an eel and Omi-beef omakase at ¥16,500. Expect to wait for the grill — small dishes come meanwhile — and service upstairs can lag. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed) at the charcoal grill'], origin: null,
      background: 'Per the official site: opened beside Okazaki Park on 1 October 2025, grilling eel and selected Omi beef over charcoal, with a tare of brown sugar and tamari soy. The site links to 路地 との本 (Japanese cuisine and sushi).',
      philosophy: '“The refined aroma of charcoal, an exquisite taste in every bite” (official site).', specialty: 'Unaju; eel and Omi-beef omakase.',
      anecdotes: [
        { text: 'A June 2026 diner waited about 30 minutes for one of the ten limited ¥3,850 unaju, and was given roast beef on the house as an apology for the delay.', source: R + 'B529373599/' },
        { text: 'An October 2026 diner seated upstairs felt forgotten, with no menu, and went downstairs to ask — but praised the food and will return, asking for the first floor.', source: R + 'B538463349/' },
      ],
      japanese_sources_summary: '公式サイト: 炭の香 なかつじ、左京区岡崎南御所町34番地、広島や静岡など全国の清らかな水で育った鰻と厳選された近江牛を炭火で焼く、黒糖と溜まり醤油のタレ、昼11:30〜15:00、夜17:30〜21:00、月曜休み、25席、鰻重 小3,850円・並5,390円・上7,590円・特上9,790円 (ひつまぶしにも)、白焼き・蒲焼き4,950円、う巻き2,750円、肝焼き1,650円、鰻と近江牛のおまかせコース16,500円、持ち帰りのうなぎ棒寿司5,390円、2025年10月1日オープン、路地 との本へのリンク。食べログ: 27席、持ち込み可、ソムリエ、英語メニュー、子ども可。口コミ (2026年、英語): 注文ごとに焼くので待つ、待つあいだのサラダや小鉢、釜炊きのご飯、2階で放置された日も。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B529373599/', R + 'B531019986/', R + 'B531968450/', R + 'B531977226/', R + 'B532892893/', R + 'B533514944/', R + 'B534083510/', R + 'B534155960/', R + 'B537117774/', R + 'B538463349/'] },
    cultural_comfort: { level: 'english', note: 'Site in English, Chinese and Korean; English menu; waits for the grill.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014271, 135.784864), offset about 5 m south-east to (35.01424, 135.7849) because kyoto_yamamoto_menzou_okazaki (same lot, 岡崎南御所町34) sits 4.4 m from the Tabelog point; kyoto_okakita shares the lot too; cross-checked: GSI 京都府京都市左京区岡崎南御所町34番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu, tax included, read 2026-11-05.', last_checked: TODAY, items: [
      it('鰻重 小', '', 'Unaju, small (half an eel)', '¥3,850', 'Lunch', 'ask', 'no', 'Official site.', 'unaju_small'),
      it('鰻重 並', '', 'Unaju, regular (one eel)', '¥5,390', 'Lunch', 'ask', 'no', 'Official site.', 'unaju_nami'),
      it('鰻重 上', '', 'Unaju, jō (one and a half eels)', '¥7,590', 'Lunch', 'ask', 'no', 'Official site.', 'unaju_jo'),
      it('鰻重 特上', '', 'Unaju, toku-jō (two eels)', '¥9,790', 'Lunch', 'ask', 'no', 'Official site.', 'unaju_tokujo'),
      it('鰻白焼き', '', 'Eel shirayaki', '¥4,950', 'À la carte', 'ask', 'no', 'Official site.', 'shirayaki'),
      it('う巻き', '', 'Umaki', '¥2,750', 'À la carte', 'ask', 'no', 'Official site.', 'umaki'),
      it('肝焼き', '', 'Grilled eel liver', '¥1,650', 'À la carte', 'ask', 'no', 'Official site.', 'kimoyaki'),
      it('鰻と近江牛のおまかせコース', '', 'Eel and Omi beef omakase', '¥16,500', 'Dinner', 'ask', 'no', 'Official site.', 'omakase'),
    ] }, {
    cuisine: '広島や静岡など全国の清らかな水で育った鰻と近江牛を炭火で、釜炊きのご飯とともに (公式サイト)・昼の鰻重: 小 (半身) 3,850円、並 (一本) 5,390円、上 (一本半) 7,590円、特上 (二本) 9,790円、ひつまぶしにも (公式サイト)・白焼き4,950円、蒲焼き4,950円、う巻き2,750円、肝焼き1,650円 (公式サイト)・夜は鰻と近江牛のおまかせコース16,500円: 毛蟹の白和え、蛤と若筍、近江牛のローストビーフかユッケ、海の幸の酒肴、鰻の白焼き、肉料理、釜ご飯を蒲焼、丼、茶漬けで、甘味 (公式サイト)・持ち帰りのうなぎ棒寿司5,390円 (公式サイト)・焼き上がりを待つあいだのサラダや小鉢 (2026年の口コミ)・日本酒、焼酎、京都のウイスキー、ワイン (公式サイト)',
    neighborhood: '岡崎、岡崎公園とみやこめっせの近く。岡崎道バス停から徒歩5分',
    gf_detail: '要確認。黒糖と溜まり醤油のタレで炭火焼きにする鰻。溜まり醤油が小麦不使用かは書かれていない。コースにう巻きや近江牛も (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鰻と近江牛 (公式サイト)。',
    notes: '[うなぎ・岡崎、平安神宮近くの炭火の鰻重] 2025年10月、岡崎公園のそばに開いた町家の店。注文ごとにカウンター前の炭火で鰻を焼き、黒糖と溜まり醤油のタレで仕上げる。昼の鰻重は3,850円 (半身) から9,790円、夜は鰻と近江牛のおまかせ16,500円。焼き上がりを待つあいだに小鉢が出るが、待ち時間は長め、2階は接客が手薄なことも。月曜休み。',
  });
}

// ================================================================ 游美
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007086/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yubi_nijo', name: '游美 (Yubi)', category: 'OMNI',
    lat: 35.013837, lng: 135.76185, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese course built on dashi, with Saikyo-miso grills, ponzu and fried fish; no gluten information (2019–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses on dashi (2019–2026 reviews).',
    hours_raw: '17:00–22:00 (Tabelog). Reservation only, by referral only (Tabelog) — book through an existing guest; private lunches by arrangement (October 2022). Cards accepted; no e-money or QR (Tabelog). Counter; private hire possible (Tabelog). Non-smoking (Tabelog). No sign outside; photography of dishes generally not allowed (2022–2026 reviews). On Nijo-dori west of Takakura, south of the Imperial Palace, 366 m from Marutamachi Stn (Tabelog; February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori west of Takakura, south of the Imperial Palace — 366 m from Marutamachi Stn',
    cuisine: 'Quiet, seasonal Japanese courses by a chef who trained in French cooking, in France, before turning to Japanese cuisine (2023, 2026 reviews) · course ¥30,000 (February 2026); reviewers spend ¥20,000–39,999 · dishes reviewed: sesame tofu with fuki-no-tō and white miso; hassun of roast duck, plum, sweetfish and simmered sardine; fugu milt with grated daikon; amadai grilled with Saikyo miso; crab shinjo with seko-crab sauce; oysters, narezushi and sea cucumber with ankimo miso (February 2024; February 2026) · amadai and nodoguro grilled crisp and folded into a white-sesame purée; seasonal fish cakes, such as eel (July 2023) · matsutake rice (October 2022) · sake such as Juyondai and Houou Bida (July 2022)',
    website: null, gmaps: gm('游美 京都 二条'), menu_url: null,
    notes: '[Japanese · Nijo-Takakura, a referral-only counter] A sign-less counter in a lane south of the Imperial Palace, booked only through existing guests, where a chef trained in French cooking cooks quiet, exacting Japanese courses (¥30,000 in February 2026): sesame tofu with white miso, crisp-grilled amadai folded into sesame purée, fugu milt, crab shinjo. Photos of dishes are generally not allowed; the room is calm and mostly regulars. Evenings only.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per 2021–2026 reviews: the chef trained for many years in renowned French and Kyoto restaurants, studying French cuisine in France before moving to Japanese cooking; an October 2021 reviewer calls the chef the last apprentice of Kyo-mi. A July 2023 reviewer says most guests have a connection to Kyoto.',
      philosophy: 'To bring out the natural flavour of seasonal ingredients (July 2023 review).', specialty: 'Crisp-grilled fish in white-sesame purée; seasonal fish cakes.',
      anecdotes: [
        { text: 'A July 2023 guest at a private dinner was so taken by an eel fish cake as to want ten more.', source: R + 'B469111444/' },
        { text: 'A February 2026 reviewer describes a quiet chef, no loud voices, a room of regulars, and a modest Tabelog score that undersells it.', source: R + 'B522300121/' },
      ],
      japanese_sources_summary: '食べログ: 游美、日本料理、中京区二条通高倉西入松屋町51、丸太町駅から366m、17:00〜22:00、完全予約制・紹介制、カード可、カウンター、貸切可、禁煙。口コミ (2019〜2026年、英語): 看板のない隠れ家、料理の撮影は原則不可、フランスで仏料理を学び和食へ転じた料理人、Kyo-mi の最後の弟子という声、コース30,000円 (2026年2月)、胡麻豆腐の白味噌、八寸、ふぐの白子、甘鯛の西京焼き、蟹真薯、甘鯛とのどぐろの白胡麻和え、鰻のしんじょ、松茸ご飯、Juyondai、Houou Bida、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B421399131/', R + 'B430944750/', R + 'B441408120/', R + 'B446345162/', R + 'B455540348/', R + 'B469111444/', R + 'B480273352/', R + 'B495673173/', R + 'B500793818/', R + 'B522300121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Referral only — book through an existing guest; dish photos generally not allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入松屋町51',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.013837, 135.76185); cross-checked: GSI 京都府京都市中京区松屋町51番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522300121/'],
    price_note: 'No menu read; course price from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥30,000', 'Courses', 'ask', 'no', 'February 2026.', 'course'),
    ] }, {
    cuisine: 'フランスで仏料理を学んでから和食に転じた料理人の、静かな季節の日本料理のコース (2023年、2026年の口コミ)・コース30,000円 (2026年2月)、口コミの予算は20,000〜39,999円・口コミの料理: ふきのとうと白味噌の胡麻豆腐、鴨ロース、梅、鮎、いわしの煮付けの八寸、ふぐの白子と大根おろし、甘鯛の西京焼き、せこがにのあんの蟹真薯、牡蠣となれずしとなまこ、あん肝味噌 (2024年2月、2026年2月)・皮をぱりっと焼いた甘鯛とのどぐろの白胡麻和え、季節のしんじょ、鰻など (2023年7月)・松茸ご飯 (2022年10月)・Juyondai や Houou Bida などの日本酒 (2022年7月)',
    neighborhood: '御所の南、高倉の西の二条通。丸太町駅から366m',
    gf_detail: '要確認。出汁を軸にした季節の日本料理のコース、西京焼き、ポン酢、揚げ物も。グルテンの情報はない (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁と魚のコース (2019〜2026年の口コミ)。',
    notes: '[日本料理・二条高倉、紹介制のカウンター] 御所の南の路地、看板のないカウンター。既存の客の紹介でのみ予約でき、フランス料理を学んだ料理人が、静かで緻密な日本料理のコースを作る (2026年2月に30,000円)。白味噌の胡麻豆腐、ぱりっと焼いた甘鯛の胡麻和え、ふぐの白子、蟹真薯。料理の撮影は原則不可、落ち着いた店内は常連が中心。夜のみ。',
  });
}

save();
