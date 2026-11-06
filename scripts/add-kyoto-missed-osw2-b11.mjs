// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 11.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + mitoho kyoto bettei (10-seat meat-course counter in a Miyagawacho alley; since 2025)
//   + ステーキ・鉄板焼 みくら Steak Teppanyaki Mikura (Pontocho teppan counter over the Kamo River)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 純心庵 Junshin An (charcoal-steak and seafood house on Matsubara-dori; since 1979)
//   + ベッカライ・ペルケオ・アルト・ハイデルベルク Bäckerei Perkeo (German bakery of two master bakers in Okazaki; since 2009)
//   None is in data/kyoto.json: grep by id, name (mitoho, みくら/Mikura, 純心庵/Junshin, ペルケオ/Perkeo) and address
//   (宮川筋5-324, 橋下町135, 弓矢町24, 岡崎天王町54) found none.
//   Same-name counts (Samboa ruling): each is one shop — mitoho.jp shows only this Kyoto shop; みくら, 純心庵 and ペルケオ
//   each have one listing in the Tabelog crawl and one shop on its own site. All drafted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ mitoho kyoto bettei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042295/'; const R = TB + 'dtlrvwlst/'; const COURSE = TB + 'party/';
  const SITE = 'https://mitoho.jp/'; const ABOUT = SITE + 'about/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=2120001154574';
  const H = day(['10:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_mitoho_bettei', name: 'mitoho kyoto bettei', category: 'OMNI',
    lat: 34.999092, lng: 135.770417, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Courses are built on dashi, soy-based sukiyaki and special sauces; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat courses (Japan’s three great wagyu, Omi beef) with dashi, bonito-topped egg rice and fish (official site; Tabelog courses).',
    hours_raw: 'Lunch seatings at 10:00, 12:00 and 14:00 (one hour each); dinner 17:00–22:30, last seating 20:30 (about two hours); closed Wednesday (Tabelog). Reservation only; arrive 5 minutes early, as all guests start together; for seat-only bookings, choose the course by 17:00 the day before (Tabelog). One drink order required at lunch (March 2026). 10 counter seats; non-smoking; cards, e-money and QR (Tabelog). Down a narrow alley off Miyagawa-suji south of Shijo, with only a small lit sign at your feet (April 2026); 5 min from Gion-Shijo or Kiyomizu-Gojo Stn (Tabelog). Grand opening 28 January 2025 (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawacho, down an alley south of Shijo — 5 min from Kiyomizu-Gojo Stn',
    cuisine: 'Japanese courses centred on wagyu at a 10-seat counter (Tabelog; official site) · lunch "immersive course to enjoy Kyoto with all five senses" ¥5,000 (6 items): four starters of Kyoto cuisine with Kyoto vegetables, fish or meat grilled with Kyoto vegetables and house sauce, rice in a three-tier jewel box eaten with bonito flakes then as tamago-kake-gohan, and a dessert (official site; Tabelog) · lunch sukiyaki course of Japan’s three great wagyu ¥8,000 · dinner: Meat Lover’s Feast "Extreme" ¥13,800, three-wagyu sukiyaki course ¥14,800, PREMIUM course with Omi beef ¥16,000 (Tabelog course page) · winter lunch dishes on the site: Jerusalem-artichoke soup, duck loin simmered with yuzu (official site) · reviewers mention braised tongue, grilled shabu-shabu and sukiyaki (July 2026)',
    website: SITE, gmaps: gm('mitoho kyoto bettei 宮川町'), menu_url: SITE,
    notes: "[Japanese & wagyu · Miyagawacho, a hidden 10-seat meat counter] A ten-seat counter hidden down an alley in Miyagawacho, opened in January 2025, where a young owner-chef cooks wagyu-centred Japanese courses for a few groups at a time. Lunch (from ¥5,000) runs from four small Kyoto-style starters to a grilled main and a three-tier box of rice eaten first with bonito flakes and then as tamago-kake-gohan; dinner courses (¥13,800–16,000) bring sukiyaki of Japan's three great wagyu and an Omi-beef yakiniku course. All guests start together — book and arrive early. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Young owner-chef who runs the room alone (May 2026); not named. Operator 株式会社リーフィ (Osaka; invoice T2120001154574)'], origin: null,
      background: 'Per the official site: the mitoho story began with a woman who grew up in the village of 南山城村 in Kyoto, among rice fields, and believed people grow healthy through nature’s power. Grand opening 28 January 2025 after a pre-opening in mid-January (official site). A December 2025 reviewer says the restaurant is supervised by the owner of a Michelin two-star restaurant, "Yugen". A May 2026 reviewer found the young owner managing alone as the chef. The invoice number belongs to 株式会社リーフィ (NTA corporate-number site).',
      philosophy: 'Per the official site: Kyoto through all five senses — seasonal food with Kyoto vegetables, old Japanese tradition renewed with new ingredients and methods.',
      specialty: 'Three-tier rice box with bonito and egg; wagyu sukiyaki; immersive lunch course.',
      anecdotes: [
        { text: 'A May 2026 diner booked 10:00 for a leisurely breakfast and was the only guest, served by the young owner-chef who runs it alone.', source: R + 'B528230809/' },
        { text: 'A March 2026 diner was surprised by the tamago-kake-gohan, with so much katsuobushi that plenty was left after adding a lot.', source: R + 'B528074447/' },
        { text: 'A December 2025 reviewer writes that the restaurant is supervised by the owner of a Michelin two-star restaurant, "Yugen".', source: R + 'B529079846/' },
      ],
      japanese_sources_summary: '公式サイト (mitoho.jp): 京都 宮川町の日本料理 mitoho kyoto bettei、京都を五感で楽しむ没入型ランチコース、前菜4種 (京料理や日本料理、京野菜)、焼き物 (予約時にお魚かお肉を選ぶ、京野菜と特製ソース)、ご飯もの (珠型三段重、京漬物、鰹節、濃厚な卵で卵かけご飯)、水物、冬季の菊芋のスープ、黄柚子香る鴨ロース煮、2025年1月28日グランドオープン、物語: 京都・南山城村で育ったある一人の女性。食べログ: 日本料理・すき焼き・しゃぶしゃぶ、完全予約制、東山区宮川筋四条下る宮川筋5-324-2、祇園四条駅・清水五条駅から徒歩5分、ランチは10時・12時・14時 (各1時間)、ディナー17:00〜20:30 最終入店 (約2時間)、水曜休み、一斉スタート、10席 (カウンター)、禁煙、カード・電子マネー・QR 可、インボイス T2120001154574 (株式会社リーフィ)、コース: ランチ5,000円・8,000円、ディナー13,800円・14,800円・16,000円。口コミ (2025年12月〜2026年8月、英語): 若いオーナーが一人で料理、卵かけご飯、近江牛、すき焼き。',
      confidence: 'medium', sources: [TB, COURSE, SITE, ABOUT, CORP, R + 'B516178601/', R + 'B523181108/', R + 'B524409048/', R + 'B524565149/', R + 'B524746750/', R + 'B525020268/', R + 'B526351609/', R + 'B528074447/', R + 'B528230809/', R + 'B529079846/', R + 'B532279636/', R + 'B535755116/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; arrive 5 minutes early (all start together); one drink order at lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区宮川筋四条下る宮川筋5-324-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999092, 135.770417); cross-checked: GSI 京都府京都市東山区宮川筋五丁目324番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE],
    price_note: 'Tabelog course page (prices including tax).', last_checked: TODAY, items: [
      it('', '', 'Lunch immersive course (6 items)', '¥5,000', 'Course', 'ask', 'no', '', 'lunch_course'),
      it('', '', 'Lunch sukiyaki course of three great wagyu', '¥8,000', 'Course', 'ask', 'no', '', 'lunch_sukiyaki'),
      it('', '', 'Dinner three-wagyu sukiyaki course (8 items)', '¥14,800', 'Course', 'ask', 'no', '', 'dinner_sukiyaki'),
      it('', '', 'Dinner PREMIUM course with Omi beef (11 items)', '¥16,000', 'Course', 'ask', 'no', '', 'dinner_premium'),
    ] }, {
    cuisine: '10席のカウンターで和牛が中心の日本料理のコース (食べログ、公式サイト)・ランチ「京都を五感で楽しむ没入型ランチコース」5,000円 (6品): 京野菜の京料理の前菜4種、京野菜と特製ソースの魚か肉の焼き物、珠型三段重のご飯を鰹節で、次に卵かけご飯で、水物 (公式サイト、食べログ)・日本三大和牛のすき焼きのランチコース8,000円・ディナー: 肉づくしの「Extreme」13,800円、三大和牛のすき焼きコース14,800円、近江牛の PREMIUM コース16,000円 (食べログのコース)・公式サイトの冬のランチ: 菊芋のスープ、黄柚子香る鴨ロース煮・口コミではタンの煮込み、焼きしゃぶ、すき焼き (2026年7月)',
    neighborhood: '宮川町、四条の南の路地。清水五条駅から徒歩5分',
    gf_detail: '予約時に要確認。コースはだし、醤油ベースのすき焼き、特製ソースを使う。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。日本三大和牛や近江牛の肉のコースで、だし、鰹節の卵かけご飯、魚もある (公式サイト、食べログのコース)。',
    notes: '[日本料理と和牛・宮川町、路地奥の10席の肉のカウンター] 宮川町の路地の奥に隠れた10席のカウンター。2025年1月開店、若いオーナーシェフが数組のために和牛中心の日本料理のコースを作る。昼 (5,000円から) は京風の小さな前菜4種から焼き物、そして三段重のご飯を最初は鰹節で、次に卵かけご飯で。夜のコース (13,800〜16,000円) には日本三大和牛のすき焼きや近江牛の焼肉も。一斉スタートなので予約して早めに。水曜休み。',
  });
}

// ================================================================ ステーキ・鉄板焼 みくら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002059/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-mikura.com/'; const COURSE = SITE + 'course.html';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1810778061346';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_steak_mikura_pontocho', name: 'ステーキ・鉄板焼 みくら (Steak Teppanyaki Mikura)', category: 'MOM_AND_POP',
    lat: 35.007692, lng: 135.771246, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask — the shop asks about allergies (official site). Courses include steamed bread, a yuba-and-seafood parcel and sauces; the lunch set adds pancakes (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak and seafood teppanyaki courses (official site).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00) and dinner 17:00–23:00 (last order 22:00), every day; closed irregularly (official site; Tabelog lists open year-round). 10% service charge on courses (official site; Tabelog). Bookings taken; check whether a lunch booking includes the welcome drink (August 2026). 15 counter seats in front of the teppan, some by the window over the Kamo River; designated smoking area; cards and QR (Tabelog; 2026 reviews). On the 3rd floor of the 先斗町ビル, three buildings south of Sanjo on Pontocho near the Kaburenjo; no sign in the lift (September 2026); 3–4 min from Keihan Sanjo Stn (official site; Tabelog). Formerly named 味くら (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho just south of Sanjo, over the Kamo River — 3 min from Sanjo Stn',
    cuisine: 'Teppanyaki of A4-and-up Kuroge wagyu, lobster and Kyoto vegetables at a counter with a view of Mt Hiei across the Kamo (official site) · chef’s course ¥8,800 (7 dishes) with 80 g of wagyu loin, or 100 g ¥11,000, 120 g ¥13,200; fillet 80 g ¥12,100, 100 g ¥14,850, 120 g ¥17,600 · special Mikura course from ¥11,000 (10 dishes: yuba-and-seafood parcel, shrimp with shiso-cashew sauce, Kyoto vegetables, choice of steak) (official site) · lunch "Kyoto’s best pancake & mini steak plate": appetizers, onion soup, an 80 g steak, rice and pancakes, ¥2,640 (August–October 2026; ¥2,400 in two July–August 2026 reviews)',
    website: SITE, gmaps: gm('ステーキ 鉄板焼 みくら 先斗町'), menu_url: COURSE,
    notes: "[Teppanyaki · Pontocho, wagyu over the Kamo River] A fifteen-seat teppan counter on the third floor of a Pontocho building, with windows over the Kamo River towards Mt Hiei. Dinner courses start at ¥8,800 with A4-grade wagyu loin, grilled in front of you, plus Kyoto vegetables and lobster on the special course; lunch is the bargain — a steak-and-pancake set for about ¥2,640 with appetizers and onion soup. Reviewers like the view, the chef's show and the value; one August 2026 regular found the meat tougher than before. 10% service on courses. Open daily.",
    chef_bio: { chef_name: '西藤 啓太', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'The invoice register lists an individual, 西藤 啓太, for the shop’s invoice number. Per the official site: counter seats only, so guests can watch the cooking; a friendly, at-home atmosphere despite teppanyaki’s high-end image; A4-and-up Kuroge wagyu and Kyoto vegetables. Formerly named 味くら (Tabelog).',
      philosophy: 'Per the official site: to let people enjoy teppanyaki more casually, with consistent quality under the tension of cooking in front of guests.',
      specialty: 'Wagyu loin and fillet teppanyaki; steak-and-pancake lunch set.',
      anecdotes: [
        { text: 'An August 2026 regular on a fourth visit found the meat tough, lean and slightly off, and cooked rarer than the medium-rare asked for.', source: R + 'B534685920/' },
        { text: 'A July 2026 pair was surprised to be served one steak cut in half for two, though the pancakes were generous.', source: R + 'B532055236/' },
        { text: 'A September 2026 diner praised the friendly, skilled chef grilling right in front of the counter and the view.', source: R + 'B536925759/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-mikura.com): 京都・先斗町で鴨川越しに比叡山を望む鉄板焼き、野菜は京都のもの、カウンター席のみ、A4ランク以上の国産黒毛和牛、オマール海老、旬の京野菜、本日のシェフのお任せコース8,800円 (全7品、ロース80g 8,800円・100g 11,000円・120g 13,200円、フィレ80g 12,100円・100g 14,850円・120g 17,600円)、特選みくらコース11,000円〜 (全10品、京湯葉と海鮮の包み焼き、特選海老の鉄板焼き 大葉とカシューナッツソース、京野菜の鉄板焼き)、サービス料10%、中京区先斗町三条下る橋下町135 先斗町ビル3F、三条駅6番出口より徒歩約4分、ランチ11:30〜15:00 (L.O. 14:00)、ディナー17:00〜23:00 (L.O. 22:00)、不定休。食べログ: ステーキ・鉄板焼き・魚介料理、旧店名 味くら、15席 (カウンター)、分煙、カード・QR 可、インボイス登録: 西藤 啓太 (個人)。口コミ (2026年7〜10月、英語): パンケーキとミニステーキのプレート2,640円 (7〜8月は2,400円の口コミも)、鴨川の眺め、肉が硬くなったという声。',
      confidence: 'medium', sources: [TB, SITE, COURSE, INV, R + 'B532055236/', R + 'B532257599/', R + 'B534556966/', R + 'B534685920/', R + 'B534712255/', R + 'B534957237/', R + 'B535037313/', R + 'B535153624/', R + 'B536022878/', R + 'B536426136/', R + 'B536925759/', R + 'B538622237/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask for a window seat; 10% service on courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル橋下町135 先斗町ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007692, 135.771246); cross-checked: GSI 京都府京都市中京区橋下町135番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [COURSE, R + 'B538622237/'],
    price_note: 'Official site courses (prices including tax; 10% service); lunch set price from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('本日のシェフのお任せコース', '', 'Chef’s course with 80 g wagyu loin (7 dishes)', '¥8,800', 'Course', 'ask', 'no', '', 'chef_course'),
      it('特選みくらコース', '', 'Special Mikura course (10 dishes)', '¥11,000', 'Course', 'ask', 'no', 'From ¥11,000.', 'mikura_course'),
      it('', '', 'Pancake & mini steak lunch plate', '¥2,640', 'Lunch', 'no', 'no', 'October 2026.', 'pancake_steak'),
    ] }, {
    cuisine: 'A4ランク以上の黒毛和牛、オマール海老、京野菜の鉄板焼き。カウンターから鴨川越しに比叡山 (公式サイト)・本日のシェフのお任せコース8,800円 (全7品、和牛ロース80g)、100g 11,000円、120g 13,200円。フィレ80g 12,100円、100g 14,850円、120g 17,600円・特選みくらコース11,000円から (全10品: 京湯葉と海鮮の包み焼き、大葉とカシューナッツソースの海老、京野菜、選べるステーキ) (公式サイト)・ランチの Kyoto’s Best Pancake & Mini Steak Plate: 前菜、オニオンスープ、80g のステーキ、ご飯、パンケーキで2,640円 (2026年8〜10月。7〜8月の口コミ2件は2,400円)',
    neighborhood: '三条のすぐ南の先斗町、鴨川沿い。三条駅から徒歩3分',
    gf_detail: '要確認。アレルギーは店が尋ねる (公式サイト)。コースには蒸しパン、湯葉と海鮮の包み焼き、ソースが入り、ランチにはパンケーキが付く (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のステーキと魚介の鉄板焼きのコース (公式サイト)。',
    notes: '[鉄板焼き・先斗町、鴨川の上の和牛] 先斗町のビル3階、鴨川越しに比叡山を望む15席の鉄板焼きのカウンター。夜のコースは8,800円から、A4の和牛ロースを目の前で焼き、特選コースには京野菜とオマール海老も。お得なのは昼で、前菜とオニオンスープ付きのステーキとパンケーキのセットが2,640円ほど。眺め、シェフのパフォーマンス、コスパが好評だが、2026年8月の常連は肉が以前より硬いと感じた。コースはサービス料10%。毎日営業。',
  });
}

// ================================================================ 純心庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001747/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.junshinan.com/'; const ABOUT = SITE + 'about/'; const MENU = SITE + 'menu/'; const INFO = SITE + 'information/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_junshin_an', name: '純心庵 (Junshin An)', category: 'OMNI',
    lat: 34.998683, lng: 135.771673, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses mix seafood dishes, a soup and charcoal-grilled wagyu; no gluten information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak, lobster, abalone and seafood courses (official menu).',
    hours_raw: '18:00–23:00; open Friday to Sunday, other days by reservation only; closed irregularly (Tabelog; official site gives 18:00–23:00 and irregular closures). A limited number of guests a day (official site). Lobster and THE Junshin An courses must be booked two days ahead (official site). A December 2021 solo diner was offered only a designated Sunday. 10% service charge (Tabelog). 32 seats: a counter of 7, tables, private rooms and a 2nd floor; non-smoking; cards (Tabelog). Through a narrow entrance on Matsubara-dori west of Yamato-oji, in a spacious Kyoto-style interior; about 240 m from Kiyomizu-Gojo Stn (official site; March 2026). Founded 1979 (official site).',
    hours: { 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori west of Yamato-oji — 4 min from Kiyomizu-Gojo Stn',
    cuisine: 'Steak house since 1979: "創味割鮮" seafood and charcoal (binchotan) grilled wagyu with a Japanese touch (official site) · Kuroge wagyu charcoal steak course with starters, soup and a vegetable dish, about 100 g ¥10,000, 150 g ¥13,000 (DX +¥3,200) · BOSS omakase course of seafood dishes and a small wagyu main, A ¥10,000, B ¥12,000, C ¥15,000, Premium · live lobster (550–600 g) or abalone steak with wagyu, for two ¥38,000–42,000 · THE Junshin An course (seafood salad, abalone steak, lobster, wagyu) for two ¥50,000–54,000 (official menu) · fresh oysters, crab, very spicy curry, abalone liver (2023–26 reviews)',
    website: SITE, gmaps: gm('ステーキハウス 純心庵 松原'), menu_url: MENU,
    notes: "[Steak & seafood · Matsubara, a 1979 charcoal steak house] A long-running steak house behind a narrow entrance on Matsubara-dori, opening into a spacious, dim, Kyoto-style room of counter, tables and private rooms. The 'BOSS' cooks a seafood-and-steak style called 創味割鮮: Kuroge wagyu grilled over binchotan with Japanese touches, alongside crab, oysters, abalone and live lobster. Courses from ¥10,000 (plus 10% service); lobster and abalone courses for two from ¥38,000. Some guests hold every celebration here. Open Friday–Sunday evenings, other days by reservation.",
    chef_bio: { chef_name: null, roles: ['The owner signs as "BOSS" on the official site; not named'], origin: null,
      background: 'Per the official site: ステーキハウス純心庵 since 1979; a limited number of guests a day in roomy seats; seafood and rich steak with a Japanese taste, grilled over binchotan; private rooms. Reviewers note many regulars (May 2024) and celebration gifts (June 2026). Tabelog Steak "Tabelog 100" (2021 review).',
      philosophy: 'Per the official site (BOSS): "贅沢に、優雅に、そして安心して、存分にお楽しみください" — enjoy it luxuriously, gracefully and without worry.',
      specialty: 'Binchotan wagyu steak; BOSS omakase seafood course; lobster and abalone.',
      anecdotes: [
        { text: 'A June 2023 couple asked a week ahead for lobster for a wedding anniversary and found it prepared as asked.', source: R + 'B467417659/' },
        { text: '"All our celebrations are held here," another guest told a March 2026 diner.', source: R + 'B516006901/' },
        { text: 'A June 2026 diner on a crab course received a celebration gift on leaving.', source: R + 'B530033766/' },
      ],
      japanese_sources_summary: '公式サイト (junshinan.com): 京都・祇園花街の創味割鮮 ステーキハウス純心庵、since 1979 kyoto、1日限定人数・ゆったり席、備長炭で焼き上げる、BOSS、東山区松原通大和大路西入ル弓矢町24-1、18:00〜23:00、不定休、清水五条駅より約240m、メニュー: 特選黒毛和牛 炭火焼きステーキコース 約100g 10,000円・約150g 13,000円 (DX +3,200円)、BOSS におまかせコース A 10,000円・B 12,000円・C 15,000円・Premium、活オマール海老&特選黒毛和牛 (2日前までに要予約) 二人で38,000〜42,000円、アワビステーキ&特選黒毛和牛 二人で38,000〜42,000円、THE 純心庵コース 二人で50,000〜54,000円。食べログ: ステーキ・ヨーロッパ料理・洋食、18:00〜23:00、金・土・日 (ほかの日は予約のみ)、不定休、サービス料10%、32席 (カウンター7、テーブル、個室、2階)、禁煙、カード可。口コミ (2021〜2026年、英語): 常連が多い、記念日、蟹、オマール海老、生牡蠣。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, INFO, R + 'B420960597/', R + 'B443888818/', R + 'B467417659/', R + 'B484761389/', R + 'B494333589/', R + 'B502525174/', R + 'B516006901/', R + 'B530033766/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (weekdays by reservation only); lobster and abalone courses two days ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路西入弓矢町24-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated March and June 2026.' },
    pin_source: `Tabelog ${TB} (34.998683, 135.771673); cross-checked: GSI 京都府京都市東山区弓矢町24番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (undated; 10% service per Tabelog).', last_checked: TODAY, items: [
      it('特選黒毛和牛 炭火焼きステーキコース', '', 'Kuroge wagyu charcoal steak course, about 100 g', '¥10,000', 'Course', 'ask', 'no', '150 g ¥13,000.', 'steak_course'),
      it('BOSSにおまかせコース', '', 'BOSS omakase seafood-and-steak course A', '¥10,000', 'Course', 'ask', 'no', 'B ¥12,000, C ¥15,000.', 'boss_course'),
      it('', '', 'Live lobster & wagyu steak course for two', '¥38,000', 'Course', 'ask', 'no', '¥38,000–42,000; two days ahead.', 'lobster_course'),
    ] }, {
    cuisine: '1979年からのステーキハウス。「創味割鮮」の魚介と、和のテイストの備長炭焼きの和牛 (公式サイト)・特選黒毛和牛の炭火焼きステーキコース (前菜、椀、野菜付き): 約100g 10,000円、約150g 13,000円 (DX +3,200円)・BOSS におまかせコース (海鮮の冷菜と温菜、小さなメインの和牛ステーキ) A 10,000円、B 12,000円、C 15,000円、Premium・活オマール海老 (550〜600g) かアワビステーキと和牛、二人で38,000〜42,000円・THE 純心庵コース (海鮮サラダ、アワビステーキ、オマール海老、和牛) 二人で50,000〜54,000円 (公式メニュー)・生牡蠣、蟹、激辛のカレー、アワビの肝 (2023〜2026年の口コミ)',
    neighborhood: '大和大路の西の松原通。清水五条駅から徒歩4分',
    gf_detail: '要確認。コースは魚介の料理、椀物、炭火の和牛。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。和牛のステーキ、オマール海老、アワビ、魚介のコース (公式メニュー)。',
    notes: '[ステーキと魚介・松原、1979年からの炭火のステーキハウス] 松原通の細い入口の奥に広がる、薄暗い京風の空間にカウンター、テーブル、個室。「BOSS」が「創味割鮮」と呼ぶ魚介とステーキを作り、黒毛和牛を備長炭で和のひと工夫とともに焼き、蟹、牡蠣、アワビ、活オマール海老も。コースは10,000円から (サービス料10%)、オマール海老やアワビのコースは二人で38,000円から。お祝いのたびに通う常連も。金〜日の夜、ほかの日は予約で。',
  });
}

// ================================================================ ベッカライ・ペルケオ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014599/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://perkeo-kyoto.com/'; const ABOUT = SITE + 'about/'; const CAFE = SITE + 'cafe/'; const INFO = SITE + 'info/';
  const WD = day(['09:00', '18:00']); const WE = day(['07:30', '18:00']);
  put({
    id: 'kyoto_baeckerei_perkeo', name: 'ベッカライ・ペルケオ・アルト・ハイデルベルク (Bäckerei Perkeo Alt Heidelberg)', category: 'MOM_AND_POP',
    lat: 35.016599, lng: 135.787158, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: German breads of rye, wheat and house-milled organic spelt (dinkel), plus cakes (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many German rye and wheat breads are made from flour, water, salt and the house sourdough cultures, but no ingredient list is published; pretzels, sandwiches and cakes use butter, sausage or cream (official site; 2026 reviews).',
    hours_raw: '9:00–18:00 Monday and Friday; 7:30–18:00 Saturday, Sunday and holidays; closed Tuesday, Wednesday and Thursday; summer and New Year breaks posted on the site (official site; Tabelog). About 20 of 30 German breads each day; some sell out by late afternoon (September 2026). Phone reservations for bread (Tabelog). 6 eat-in seats inside and on the terrace (Tabelog; official site). Cards, e-money and PayPay (Tabelog). Staff greet in English or German (October 2026). On the ground floor of クリヨン岡崎, 1 min from the Okazaki-jinja-mae bus stop; about 20 min walk from Keage or Jingu-Marutamachi Stn (official site). Opened December 2009 (official site; Tabelog).',
    hours: { 0: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki by Okazaki Shrine — 1 min from the Okazaki-jinja-mae bus stop',
    cuisine: 'German bakery of two Bäckermeister: about 20 of 30 German breads a day from domestic rye and wheat and house-milled organic German spelt, raised with 8 natural sourdough cultures built from 3 brought from Germany (official site) · Laugen pretzel ¥350, Brötchen ¥240, 100% Roggen ¥590 (September 2026); Jägerbrötchen and other rye breads · sandwiches (wurst, prosciutto), German cakes such as Linzer Torte and Flocken Sahne (2026 reviews; official site) · café drinks of Dallmayr coffee and tea: coffee ¥550, cappuccino ¥750, iced coffee ¥620; juices ¥500; German beer (official site)',
    website: SITE, gmaps: gm('ベッカライ・ペルケオ 京都 岡崎'), menu_url: CAFE,
    notes: "[Bakery · Okazaki, German bread from two master bakers] A German bakery near Okazaki Shrine run by Mariko, from Kyoto, and Johnny, from Germany, who met at the state bakery school in Weinheim, both earned the Bäckermeister title in 2009, and later married. About twenty German breads a day — sour, chewy rye loaves, Laugen pretzels (¥350), Brötchen — raised on natural sourdoughs from German starters, plus German cakes and sandwiches, with Dallmayr coffee at six seats inside and on the terrace. Open Friday to Monday; arrive early for the full range.",
    chef_bio: { chef_name: 'Mariko and Johnny (マリコ and ジョニー)', roles: ['Bäckermeister and owners (official site): Mariko, from Kyoto, and Johnny, from Germany, a married couple; Johnny is the main chef since September 2018'], origin: 'Mariko: Kyoto; Johnny: Germany (official site).',
      background: 'Per the official site (written by Mariko): taken with German bread and Heidelberg on a trip, Mariko went to Germany alone in August 2004 and talked a Heidelberg bakery into an apprenticeship, earning the Geselle qualification in February 2007; at the state bakery school in Weinheim, Johnny sat next to Mariko; both earned the Meister title in July 2009; Mariko returned and opened the bakery in Kyoto in December 2009, the name Perkeo coming from a figure in Heidelberg legend; after a long-distance relationship Johnny and Mariko married and Johnny came to Japan; from 2013 to 2016 Johnny worked as a Meister in German bakeries, taught at the Weinheim school from 2017 and qualified as a bread judge, then returned in September 2018 as Perkeo’s main chef and expanded the cakes. Tabelog Bakery WEST "Tabelog 100" 2026 (September 2026 review).',
      philosophy: 'Per the official site: "日本人にドイツパンの本当の美味しさを届けたい" — to bring the real taste of German bread to Japan, aiming for the best German bread in Japan.',
      specialty: 'Laugen pretzel; rye breads; German cakes.',
      anecdotes: [
        { text: 'An October 2026 visitor was greeted in English or German by staff who switched to fluent Japanese at the counter.', source: R + 'B537241251/' },
        { text: 'A June 2026 visitor came for pretzels, found only one, and was won over by the rye bread instead.', source: R + 'B141840196/' },
        { text: 'A September 2026 holiday visitor at 16:00 found some items sold out.', source: R + 'B535988813/' },
      ],
      japanese_sources_summary: '公式サイト (perkeo-kyoto.com): 京都市岡崎のドイツパン専門店 ベッカライ・ペルケオ、ドイツパン職人の最高資格マイスターを持つジョニーとマリコ、天然酵母から100%手作り、国産のライ麦・小麦、自家製粉のドイツ産オーガニックのディンケル小麦、約30種のレシピから約20種を日替わり、ドイツから持ってきた3種の酵母種をもとに8タイプの天然酵母、ペルケオ誕生物語: ドイツ人のジョニーと京都出身のマリコ、2004年8月に単身渡独、ハイデルベルクのパン屋に弟子入り、2007年2月にゲゼレ、ヴァインハイムの国立製パン学校でジョニーと出会う、2009年7月にマイスター、2009年12月に京都で開店、ペルケオはハイデルベルクの伝説の人物の名、その後ジョニーと結婚、2018年9月からジョニーがメインシェフ、カフェ: ダルマイヤーのコーヒー・紅茶、ドイツビール、レギュラーコーヒー550円、カプチーノ750円、アイスコーヒー620円、店舗: 左京区岡崎天王町54-1 クリヨン岡崎1階、平日9:00〜18:00、土・日・祝7:30〜18:00、火・水・木定休。食べログ: パン・チョコレート・カフェ、6席、カード・電子マネー・PayPay 可、2009年12月6日オープン。口コミ (2026年5〜11月、英語): Laugen pretzel 350円、Brötchen 240円、Roggen 590円、Linzer Torte、英語やドイツ語のあいさつ。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, CAFE, INFO, R + 'B141840196/', R + 'B501606063/', R + 'B528710671/', R + 'B529260740/', R + 'B532925283/', R + 'B535023396/', R + 'B535482074/', R + 'B535988813/', R + 'B536751679/', R + 'B537241251/', R + 'B537684522/', R + 'B538492201/'] },
    cultural_comfort: { level: 'english', note: 'Staff greet in English or German (October 2026); the site has an English page.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区岡崎天王町54-1 クリヨン岡崎 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notice July 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.016599, 135.787158); cross-checked: GSI 京都府京都市左京区岡崎天王町54番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [CAFE, R + 'B535482074/', R + 'B535988813/'],
    price_note: 'Café drinks from the official site (eat-in prices, tax included); bread prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Laugen pretzel', '¥350', 'Bread', 'no', 'ask', 'September 2026.', 'pretzel'),
      it('', '', 'Brötchen', '¥240', 'Bread', 'no', 'ask', 'September 2026.', 'broetchen'),
      it('', '', '100% Roggen (rye bread)', '¥590', 'Bread', 'no', 'ask', 'September 2026.', 'roggen'),
      it('レギュラーコーヒー', '', 'Dallmayr coffee (eat-in)', '¥550', 'Drinks', '', '', '', 'coffee'),
    ] }, {
    cuisine: '二人のマイスターのドイツパンの店: 約30種のレシピから毎日約20種、国産のライ麦と小麦、自家製粉のドイツ産オーガニックのディンケル小麦、ドイツから持ってきた3種の酵母種をもとにした8タイプの天然酵母 (公式サイト)・Laugen pretzel 350円、Brötchen 240円、100% Roggen 590円 (2026年9月)、Jägerbrötchen などのライ麦パン・ヴルストや生ハムのサンドイッチ、Linzer Torte、Flocken Sahne などのドイツケーキ (2026年の口コミ、公式サイト)・カフェはダルマイヤーのコーヒーと紅茶: コーヒー550円、カプチーノ750円、アイスコーヒー620円、ジュース500円、ドイツビール (公式サイト)',
    neighborhood: '岡崎神社のそばの岡崎。岡崎神社前バス停から徒歩1分',
    gf_detail: 'グルテンフリーではない。ライ麦、小麦、自家製粉のディンケル小麦のドイツパンとケーキ (公式サイト)。',
    vegan_detail: '要確認。ライ麦や小麦のドイツパンの多くは粉、水、塩、自家製の天然酵母だが、原材料は公開されていない。プレッツェル、サンドイッチ、ケーキはバター、ソーセージ、クリームを使う (公式サイト、2026年の口コミ)。',
    notes: '[パン・岡崎、二人のマイスターのドイツパン] 岡崎神社のそばのドイツパン専門店。京都出身のマリコさんとドイツ出身のジョニーさんがヴァインハイムの国立製パン学校で出会い、2009年にともにマイスターの資格を取り、のちに結婚。ドイツの酵母種から作る天然酵母で、酸味のあるもっちりしたライ麦パン、Laugen pretzel (350円)、Brötchen など毎日約20種。ドイツケーキやサンドイッチも、店内とテラスの6席でダルマイヤーのコーヒーと。金〜月の営業、早めに行くと品数が多い。',
  });
}

save();
