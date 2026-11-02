// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 4.
//   + 鮨 湊 Sushi Minato (sushi omakase in Kitashinchi, since 2025; sister of the 心屋 shops)
//   + 御料理 うえの Oriyouri Ueno (Japanese cuisine and sake in Kitashinchi, since 2016; Japanese menu only)
//   + チーズと生はちみつ BeNe 梅田NU茶屋町 (cheese and raw-honey Italian, NU Chayamachi 9F, since 2012)
//   + 北新地 寿司馬光 Kitashinchi Sushi Bakou (sushi and Kumamoto horse meat, Kitashinchi, since 2025)
//   - bills 大阪 27100993 skipped: chain (bills, from Sydney; several Japan shops).
//   - 珉珉 曽根崎店 27010873 skipped: chain already in data (Minmin).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b3): odd ids in order 27100993, 27010873,
//   27147447, 27095129, 27066417, 27151339.
//   Chain check: Sushi Minato lists three sister shops (心屋 本通り店, 心屋 上通り店, tabeNOko; Tabelog remarks), all of 株式会社心屋
//   (kokoya-japan.com); none is in data. Ueno: no other shop found. BeNe: the official site (cheese-honey-bene.com) shows
//   this one shop. Bakou: the same shop was a horse-meat restaurant before becoming a sushi bar (reviews); no other shop
//   found. None is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27100993', 'bills 大阪: branch of bills, the all-day dining chain from Sydney (Tabelog: "Originating from Sydney, Australia"), with several shops in Japan (Omotesando, Futako-Tamagawa and others per Time Out Tokyo); bills Osaka at LUCUA 1100 7F was its first Kansai shop (openers.jp, 2017).');
skip('27010873', '珉珉 曽根崎店: branch of the Minmin gyoza chain founded in Sennichimae in 1953 (Tabelog shop text); Minmin is already in data (osaka_minmin_minami_sennichimae_honten, osaka_minmin_namba_walk).');

// ================================================================ 鮨 湊
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27147447/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_minato_kitashinchi', name: '鮨 湊 (Sushi Minato)', category: 'OMNI',
    lat: 34.69795, lng: 135.498569, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Course dishes include fish grilled with tamamiso or miso, simmered clam and anago, and nigiri, which are usually finished with soy sauce or a glaze containing wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omakase courses of fish and shellfish, with dashi-simmered side dishes.',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00; closed Sunday (Tabelog). Lunch course Tuesday–Saturday by reservation only, booked by 21:00 the day before (Tabelog). Same-day bookings after 15:00 by phone (Tabelog). A service charge is added (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 seats: 6 at the counter and a private room for 4; private hire up to 20; non-smoking; school-age children welcome; takeout (Tabelog). Opened 3 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 京屋ビル 2F, up a flight of stairs — 2 min from JR Kitashinchi Stn',
    cuisine: 'Omakase sushi: omakase ¥10,000 and ¥15,000; lunch Tuesday–Saturday ¥5,000 with 10 nigiri, two seasonal dishes and dessert (Tabelog, tax included); dinner from ¥8,000 (July 2026 review) · July 2026 ¥10,000 course: chilled chawanmushi with corn and aosa, tuna from Shiogama (Miyagi), simmered summer vegetables, sawara grilled with tamamiso, then sea bream, kisu, squid with sea urchin, marinated tuna, simmered clam, eel roll, sweet shrimp, kinmedai, chutoro, simmered anago and a toro-taku hand roll, with hojicha ice cream · September 2026: charcoal-grilled eel, raw and grilled sanma, simmered octopus with matsutake, akagai with liver sauce, sweet-shrimp mixed rice, aosa red miso soup · red-vinegar rice, small and firm (July 2026) · desserts made by the chef (September 2026) · medium bottles of beer, sake (choose your own cup), wine, cocktails',
    website: null, gmaps: gm('鮨 湊 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, a ten-seat omakase] A small sushi bar up the stairs of an unassuming Kitashinchi building, with six counter seats and a private room for four, run by the group behind the 心屋 seafood restaurants. The draw is price: a ¥10,000 omakase in Kitashinchi that diners call remarkable value, mixing seasonal side dishes (a chilled corn chawanmushi in July, raw and grilled sanma in September) with about a dozen nigiri on firm red-vinegar rice, from squid with sea urchin to a toro-taku hand roll, and the chef's own hojicha ice cream. A ¥5,000 lunch with ten nigiri runs Tuesday to Saturday by reservation. A July 2026 diner found the staff young and friendly, September diners a warm chef; one noted in September 2026 that the chef had changed to a younger one. Extra orders are limited to what the course used (July 2026).",
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed; changed by September 2026, per a review)'], origin: 'Sister shop of 心屋 本通り店, 心屋 上通り店 and tabeNOko (Tabelog remarks), all of 株式会社心屋 (kokoya-japan.com).', background: 'Shop text (Tabelog): skilled chefs, the finest ingredients and carefully prepared rice; a counter to watch the chef and private rooms. Opened 3 March 2025. Reviews: "All the staff are young and friendly. The sushi chef is also young but very skilled" (July 2026); "The chef who specializes in aged sushi had changed, and now there\'s a younger chef" (September 2026); "the chef\'s warm personality" (September 2026); desserts "handmade by the chef" (September 2026), though a July 2026 diner was served "a pre-packaged item".', philosophy: 'Seasonal ingredients and carefully prepared rice (Tabelog).', specialty: '¥10,000 omakase; hojicha ice cream.',
      anecdotes: [
        { text: '"Honestly, the quality and location for just JPY 10,000 is such a great deal that it makes me a little worried (laughs)." — July 2026, the ¥10,000 omakase.', source: R + 'B504184040/' },
        { text: '"I was delighted to choose my own sake cup, which added to the experience." — September 2026.', source: R + 'B534923098/' },
        { text: '"While you can place additional orders after finishing the course, the options are limited to what was served in the course" — July 2026.', source: R + 'B532925264/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B504184040/', R + 'B531167996/', R + 'B531609519/', R + 'B531759122/', R + 'B532925264/', R + 'B534923098/', R + 'B534958916/', R + 'B535274293/', R + 'B535311311/', R + 'B535602914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase courses at a six-seat counter; the chef introduces the day\'s fish (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-11-9 京屋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目11番9号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531759122/'],
    price_note: 'Courses from the Tabelog listing (tax included; a service charge is added).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥10,000', 'Course', 'ask', 'no', 'Tabelog listing; July and September 2026 reviews.', 'omakase_10000'),
      it('', '', 'Omakase course (premium)', '¥15,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_15000'),
      it('', '', 'Lunch course: 10 nigiri, two seasonal dishes, dessert (Tue–Sat, book by 21:00 the day before)', '¥5,000', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_course'),
    ] }, {
    cuisine: 'おまかせの鮨: おまかせ10,000円と15,000円、火〜土のランチ5,000円 (握り10貫、季節の料理2品、デザート) (食べログ、税込)、夜は8,000円から (2026年7月の口コミ)・2026年7月の10,000円のコース: とうもろこしとあおさの冷たい茶碗蒸し、Shiogama (Miyagi) のマグロ、夏野菜の炊き合わせ、サワラの tamamiso 焼き、それから鯛、キス、イカとウニ、マグロの漬け、貝の煮物、うなぎの巻物、甘エビ、金目鯛、中トロ、煮穴子、トロたくの手巻き、ほうじ茶のアイス・2026年9月: うなぎの炭火焼き、サンマの刺身と炙り、タコと松茸の煮物、赤貝の肝のソース、甘エビの混ぜご飯、あおさの赤だし・赤酢のシャリは小さめでかため (2026年7月)・デザートは大将の手作り (2026年9月)。2026年7月の口コミでは個包装のデザートだったという・ビールは中瓶、日本酒 (おちょこを選べる)、ワイン、カクテル',
    neighborhood: '北新地、京屋ビルの2階、階段を上がる。JR北新地駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースには tamamiso や味噌の焼き魚、貝や穴子の煮物があり、握りはふつう醤油やツメで仕上げ、小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。魚と貝のおまかせのコースで、だしの炊き合わせも。',
    notes: '[鮨・北新地、10席のおまかせ] 北新地の目立たないビルの階段を上がったところにある小さな鮨屋で、カウンター6席と4人の個室。心屋の店を出すグループの店。いちばんの魅力は値段で、北新地で10,000円のおまかせはとてもお得という声が多い。季節の一品 (7月はとうもろこしの冷たい茶碗蒸し、9月はサンマの刺身と炙り) と、かための赤酢のシャリの握り12貫ほど (イカとウニからトロたくの手巻きまで) に、大将手作りのほうじ茶のアイス。火〜土は握り10貫の5,000円のランチ (予約制)。2026年7月の口コミではスタッフが若く気さく、9月の口コミでは大将があたたかいとのこと。2026年9月には大将が若い人に替わっていたという声も。追加の注文はコースで使ったネタだけ (2026年7月)。',
  });
}

// ================================================================ 御料理 うえの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27095129/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_oriyouri_ueno_kitashinchi', name: '御料理 うえの (Oriyouri Ueno)', category: 'OMNI',
    lat: 34.697833, lng: 135.498647, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature dishes are sandwiches (mackerel, and a wagyu katsu sandwich with demi-glace); Inaniwa udon appears in autumn (October 2025); grilled fish and sashimi are usually served with soy-based seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake restaurant (sashimi, charcoal-grilled fish, clams, crab, wagyu); vegetable dishes such as water eggplant also appear (June 2026).',
    hours_raw: 'Mon–Sat 17:30–23:00, last order 22:00; closed Sundays and holidays (Tabelog). Reservations recommended: fully booked on a weekday in December 2025, though half the tables had emptied by 20:00. Same-day cancellation fee: 100% of the course, or ¥5,500 a person for à la carte bookings; tables for two may be moved to the counter (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 15 seats: 7 at the counter and two tables for four; non-smoking, ashtray by the lift; no children; no strong perfume; Japanese menu only; takeout (Tabelog). Opened 27 October 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 3F of a building on Eirakucho Street — 2 min from JR Kitashinchi Stn',
    cuisine: 'Japanese cooking for sake: seasonal fish and vegetables, as sashimi or grilled over charcoal (nodoguro and kinki are popular); the mackerel sandwich and black-wagyu katsu sandwich to finish or take home; rare sake and selected wine, with sake ware to choose (Tabelog) · courses or à la carte: an omakase course ¥19,800 with the katsu sandwich of Kumamoto black wagyu "Wao" tenderloin and demi-glace (July 2025) · dishes in reviews: assorted sashimi, grilled natural kue, matsutake Inaniwa udon, filet sandwich (October 2025); bonito with sudachi, sake-steamed clams (July 2025); kazunoko potato salad, sea-bream miso grilled rice balls (July 2025); matsutake and sanma rolls (October 2025); seiko crab (December 2025); surf clam with shiso, grilled swordfish, water eggplant (June 2026) · a separate sake menu (July 2025)',
    website: null, gmaps: gm('御料理 うえの 北新地'), menu_url: null,
    notes: "[Japanese · Kitashinchi, fish and sake on the third floor] A fifteen-seat restaurant for seasonal fish and rare sake on Eirakucho Street in Kitashinchi, with a seven-seat counter and sofa tables. Order a course or à la carte: sashimi platters, fish grilled over charcoal (nodoguro, kinki, natural kue), seasonal dishes like matsutake and sanma rolls or seiko crab in winter, and the house signatures, a mackerel sandwich and a black-wagyu katsu sandwich cooked rare with demi-glace, which you can take home if you cannot finish. There is a menu just for sake, served in handsome sake ware. It is expensive (¥20,000–30,000 a head is common) and popular for business dinners; book ahead. Japanese menu only, no children, and go easy on perfume in the small room.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "friendly", June 2026 review)'], origin: null, background: 'Shop text (Tabelog): high-class Japanese cuisine; seasonal fish as sashimi or grilled over charcoal; the mackerel sandwich and the cutlet sandwich as signature dishes "known for their beautiful cross-sections"; rare Japanese sake and selected wines; eye-catching tableware. Opened 27 October 2016.', philosophy: 'Seasonal fish and vegetables in refined dishes, with carefully chosen sake (Tabelog).', specialty: 'Black-wagyu katsu sandwich; mackerel sandwich; charcoal-grilled fish.',
      anecdotes: [
        { text: '"The perfect rare doneness and the juicy, luxurious meat paired with the demi-glace sauce were simply amazing!!" — July 2025, the katsu sandwich in a ¥19,800 omakase.', source: R + 'B511047307/' },
        { text: '"I was intrigued by a unique dish, the Kazunoko Potato Salad, which had a rich dashi flavor, making it a wonderfully Japanese-style potato salad" — July 2025, a third visit.', source: R + 'B511868615/' },
        { text: '"The appetizer of surf clam was incredibly delicious and left a strong impression. It was refreshing with a nice hint of shiso." — June 2026.', source: R + 'B529930135/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B480222961/', R + 'B511047307/', R + 'B511868615/', R + 'B515271464/', R + 'B517221972/', R + 'B518450409/', R + 'B519511272/', R + 'B523906082/', R + 'B526893012/', R + 'B529930135/'] },
    cultural_comfort: { level: 'japanese', note: 'Tabelog: "Sorry, we only have a Japanese menu." Staff recommend sake on request (July 2025).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-12 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B511047307/'],
    price_note: 'The omakase course price from a July 2025 review; à la carte prices not listed in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with the black-wagyu katsu sandwich', '¥19,800', 'Course', 'ask', 'no', 'July 2025 review.', 'omakase_course'),
      it('', '', 'Black-wagyu katsu sandwich (also to take home)', '', 'Signature', 'no', 'no', 'Tabelog; 2025–2026 reviews.', 'katsu_sandwich'),
      it('', '', 'Mackerel sandwich (also to take home)', '', 'Signature', 'no', 'no', 'Tabelog.', 'saba_sandwich'),
    ] }, {
    cuisine: '日本酒に合う和食: 季節の魚と野菜を刺身や炭火焼きで (ノドグロとキンキが人気)、締めやお土産にサバサンドと黒毛和牛のカツサンド、めずらしい日本酒と選んだワイン、酒器を選べる (食べログ)・コースかアラカルト: Kumamoto の黒毛和牛 Wao のヒレのカツサンド、デミグラスソースのおまかせコース19,800円 (2025年7月)・口コミに出てくる料理: 刺身の盛り合わせ、天然クエの焼き物、松茸の Inaniwa のうどん、ヒレのサンド (2025年10月)、すだちのカツオ、はまぐりの酒蒸し (2025年7月)、kazunoko のポテトサラダ、鯛味噌の焼きおにぎり (2025年7月)、松茸とサンマの巻物 (2025年10月)、seiko のかに (2025年12月)、北寄貝と大葉、メカジキの焼き物、水なす (2026年6月)・日本酒だけのメニューもある (2025年7月)',
    neighborhood: '北新地、Eirakucho Street 沿いのビルの3階。JR北新地駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。名物はサンドイッチ (サバ、デミグラスソースの和牛のカツサンド)、秋には Inaniwa のうどん (2025年10月)、焼き魚や刺身にはふつう醤油の味つけ。',
    vegan_detail: 'ヴィーガンではありません。魚と日本酒の店 (刺身、炭火焼きの魚、はまぐり、かに、和牛)。水なすなど野菜の料理もある (2026年6月)。',
    notes: '[和食・北新地、3階の魚と日本酒の店] 北新地の Eirakucho Street 沿いのビルの3階にある15席の店で、季節の魚とめずらしい日本酒が楽しめる。カウンター7席とソファのテーブル。コースかアラカルトで、刺身の盛り合わせ、炭火で焼く魚 (ノドグロ、キンキ、天然クエ)、松茸とサンマの巻物や冬の seiko のかになど季節の料理、そして名物のサバサンドと、レアに揚げた黒毛和牛のカツサンドのデミグラスソース。食べきれなければ持ち帰れる。日本酒だけのメニューがあり、きれいな酒器で出してくれる。値段は高め (1人2〜3万円がよくある) で、接待にもよく使われる。予約を。日本語のメニューのみ、子どもは不可、小さな店なので香水は控えめに。',
  });
}

// ================================================================ チーズと生はちみつ BeNe 梅田NU茶屋町
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27066417/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://cheese-honey-bene.com/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']), WE = day(['11:00', '22:00']);
  put({
    id: 'osaka_bene_umeda_nu_chayamachi', name: 'チーズと生はちみつ BeNe 梅田NU茶屋町 (Cheese to Nama Hachimitsu BeNe Umeda NU chayamachi)', category: 'OMNI',
    lat: 34.707114, lng: 135.499057, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on Chicago pizza, pasta, French toast, bruschetta, baguette for the fondue and cheese tastings, and cheesecakes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a cheese and raw-honey specialist, with cheese and honey through most dishes. Tabelog shows a vegetarian-options flag.',
    hours_raw: 'Mon–Fri and the day before a holiday 11:00–15:00 and 17:00–22:00; Sat, Sun and holidays 11:00–22:00; last order 21:00; closed when NU Chayamachi closes (Tabelog). Reservations recommended: a queue formed two minutes after the 11:00 opening on an October 2026 weekday. Diners booked for seats only order from the menu on the day (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), iD, QUICPay, PayPay (Tabelog). 44 seats with semi-private rooms for 3–4 and 5–8; whole-floor hire 30–67 with sound and projector; non-smoking, smoking area on the floor; children welcome, no children\'s menu or chairs, strollers fine (Tabelog). Opened 20 June 2012 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'NU Chayamachi 9F — 1 min from the Hankyu Umeda Chayamachi exit, 3 min from Umeda Stn',
    cuisine: 'Casual Italian of cheese and raw honey: over 20 cheeses and 10 raw honeys, a "cheese wagon", fresh burrata, BeNe\'s Chicago pizza, cheese fondue; tapas from ¥380; over 50 drinks made with honey (Tabelog; official site) · courses: Cheese & Honey ¥3,500, Special Cheese & Honey with two drinks ¥4,000, cheese-and-meat course with roast beef and all-you-can-drink ¥5,000 (Tabelog, tax included) · lunch sets (pasta, Chicago pizza, mains) with salad and baguette, and an all-you-can-eat add-on of 8 cheeses and 3 raw honeys (October 2026); cheese hamburger ¥1,850 plus drink and dessert ¥700 (October 2026) · white-wine cheese fondue ¥1,738, Bambino Chicago pizza ¥1,166, beef sirloin steak with tortillas ¥2,068 (October 2026) · Quattro Formaggi Chicago pizza with raw honey; Camembert ajillo, baked caprese, Caesar salad, charcuterie; honeycomb rare cheesecake and honey-baked cheesecake (September 2026) · vongole pasta (October 2026); Basque cheesecake; French toast with Benihoppe strawberries (Tabelog)',
    website: OFF, gmaps: gm('チーズと生はちみつ BeNe 梅田NU茶屋町'), menu_url: OFF,
    notes: "[Italian · Chayamachi, a cheese-and-honey café] A bright café-style Italian restaurant on the ninth floor of NU Chayamachi, by the Hankyu station, built around more than twenty cheeses and a range of raw honeys: drizzle the honey over the Chicago pizza, whose cheese floods out when cut, or over cheesecake. Cheese fondue for dipping vegetables and baguette, Camembert ajillo and burrata fill out the menu, and at lunch an add-on brings unlimited tastings of eight cheeses and three honeys. Prices are moderate: lunch sets from about ¥1,850, dinner courses from ¥3,500. Popular for girls' nights and birthdays, with semi-private rooms; one October 2026 weekday a queue formed minutes after opening. Some diners found the Chicago pizza hard to cut or the cheese cooled, and dessert slow to come.",
    chef_bio: { chef_name: null, roles: ['Kitchen and staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog; official site): a cheese-specialist Italian with over 20 cheeses, fresh and aged, mostly Japanese and European, and raw honey; Chicago pizza and cheese fondue are the popular dishes; many drinks made with raw honey. Opened 20 June 2012.', philosophy: 'The salt of cheese with the sweetness of raw honey (official site).', specialty: 'Chicago pizza with raw honey; cheese fondue.',
      anecdotes: [
        { text: '"We were the first customers to enter right at 11 AM when the doors opened, but just two minutes later, another group without a reservation had to wait" — October 2026.', source: R + 'B537553433/' },
        { text: '"We dipped carrots, broccoli, eggplant, potatoes, and baguette into the cheese." — October 2026, a family birthday, the white-wine cheese fondue ¥1,738.', source: R + 'B537067277/' },
        { text: '"I ordered the Quattro Formaggi Chicago Pizza! It was delicious with rich cheese and honey, but it was a bit difficult to cut because of its shape." — October 2026, lunch before the theatre.', source: R + 'B536797455/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B439033672/', R + 'B535179737/', R + 'B536797455/', R + 'B537067277/', R + 'B537120710/', R + 'B537249971/', R + 'B537417412/', R + 'B537553433/', R + 'B537671682/', R + 'B538325126/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English version; staff explain the menu at the table (October 2026).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区茶屋町10-12 NU茶屋町 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site with October 2026 reviews; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区茶屋町10番12号 (go) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537067277/', R + 'B537671682/'],
    price_note: 'Courses from Tabelog (tax included); à la carte and lunch prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cheese & Honey course (Quattro Formaggi Chicago pizza with raw honey as the main)', '¥3,500', 'Course', 'no', 'no', 'Tabelog listing.', 'cheese_honey_course'),
      it('', '', 'White-wine cheese fondue', '¥1,738', 'A la carte', 'ask', 'no', 'October 2026 review.', 'cheese_fondue'),
      it('', '', 'Bambino Chicago pizza', '¥1,166', 'Pizza', 'no', 'no', 'October 2026 review.', 'bambino_chicago_pizza'),
      it('', '', 'Beef sirloin steak with tortillas', '¥2,068', 'Main', 'ask', 'no', 'October 2026 review.', 'sirloin_tortillas'),
      it('', '', 'Cheese hamburger lunch set (salad, baguette)', '¥1,850', 'Lunch', 'no', 'no', 'October 2026 review; drink and dessert ¥700 extra.', 'cheese_hamburger_lunch'),
    ] }, {
    cuisine: 'チーズと生はちみつのカジュアルなイタリアン: 20種類以上のチーズと10種類の生はちみつ、チーズワゴン、フレッシュのブラータ、BeNe のシカゴピザ、チーズフォンデュ、タパス380円から、はちみつを使ったドリンク50種類以上 (食べログ、公式サイト)・コース: チーズ＆はちみつのコース3,500円、ドリンク2杯つきのスペシャルコース4,000円、ローストビーフと飲み放題のチーズと肉のコース5,000円 (食べログ、税込)・ランチのセット (パスタ、シカゴピザ、メイン) はサラダとバゲットつき、追加料金でチーズ8種と生はちみつ3種の食べ放題 (2026年10月)、チーズハンバーグ1,850円、ドリンクとデザートのセット700円 (2026年10月)・白ワインのチーズフォンデュ1,738円、バンビーノシカゴピザ1,166円、牛サーロインステーキとトルティーヤ2,068円 (2026年10月)・クアトロフォルマッジのシカゴピザに生はちみつ、カマンベールのアヒージョ、焼きカプレーゼ、シーザーサラダ、シャルキュトリー、ハニカムのレアチーズケーキとはちみつのベイクドチーズケーキ (2026年9月)・ボンゴレのパスタ (2026年10月)、バスクチーズケーキ、Benihoppe のいちごのフレンチトースト (食べログ)',
    neighborhood: 'NU茶屋町の9階。阪急梅田駅の茶屋町口から徒歩1分、梅田駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。メニューはシカゴピザ、パスタ、フレンチトースト、ブルスケッタ、フォンデュやチーズのテイスティングのバゲット、チーズケーキが中心。',
    vegan_detail: '実際にはヴィーガンではありません。チーズと生はちみつの専門店で、ほとんどの料理にチーズかはちみつを使う。食べログにはベジタリアンのオプションの表示がある。',
    notes: '[イタリアン・茶屋町、チーズとはちみつのカフェ] 阪急の駅のそば、NU茶屋町の9階にある明るいカフェ風のイタリアンで、20種類以上のチーズと生はちみつが主役。切るとチーズがあふれ出すシカゴピザやチーズケーキに、はちみつをかけて。野菜やバゲットをひたすチーズフォンデュ、カマンベールのアヒージョ、ブラータもあり、ランチには追加料金でチーズ8種とはちみつ3種の食べ放題をつけられる。値段は手ごろで、ランチのセットは1,850円ほどから、夜のコースは3,500円から。女子会や誕生日に人気で、半個室もある。2026年10月の平日には開店数分で行列ができた。シカゴピザが切りにくい、チーズが冷めていた、デザートが遅かったという声も。',
  });
}

// ================================================================ 北新地 寿司馬光
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27151339/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_sushi_bakou_kitashinchi', name: '北新地 寿司馬光 (Kitashinchi Sushi Bakou)', category: 'OMNI',
    lat: 34.697766, lng: 135.498808, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Horse sashimi comes with a sweet soy sauce, the Harihari hot pot ends with soba, and courses include Saikyo-grilled fish and nigiri, which are usually seasoned with soy sauce containing wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of sushi and horse meat; the hot pot broth is made from bonito and horse bones (June 2026).',
    hours_raw: 'Mon–Sat and the day before or after a holiday 18:00–22:30, last order food 22:00, drinks 22:15; closed Sundays and holidays (Tabelog). Two seatings, 18:00 and 20:30, in December 2026; menus can be tailored to a budget (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 17 seats: 7 at the counter and sunken-kotatsu tables for 4 and 6 in a tatami room, which can be booked whole; non-smoking; children welcome; English, Simplified Chinese and Korean menus; digital menu (Tabelog). Opened 1 September 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 谷安セドナビル 3F — 3 min from JR Kitashinchi Stn',
    cuisine: 'Sushi with fresh horse meat sent from Kumamoto (Tabelog) · courses: "Kiwami" Sushi Bakou course with horse meat and seafood ¥16,500; Sushi Bakou course of the day\'s fish ¥10,890; Sakura hot pot course of horse sashimi and Harihari hot pot ¥10,500 (Tabelog, tax included); a sushi-only course for diners who skip horse meat (June 2026) · June 2026 Kiwami course: natural bluefin and sea bream sashimi, ume suisho, strained ankimo, sea bream wrapped in kombu with horse meat, shiso and green onion, carbonara-style chawanmushi, abalone with liver sauce and grated cheese, marinated bluefin with yuzu pepper, striped jack, young kohada, three cuts of horse sashimi, the Harihari hot pot of horse meat and watercress in a bonito and horse-bone broth ending in soba, and hojicha pudding · Densuke anago, uni piled over the rice, toro-taku, sablefish Saikyo-yaki, ice cream with honey poured at the table (June–July 2026) · horse liver sashimi, lava-grilled horse tongue (July 2026) · sake chosen for the season\'s fish; koto music in the room (June 2026)',
    website: null, gmaps: gm('北新地 寿司馬光'), menu_url: null,
    notes: "[Sushi · Kitashinchi, sushi and Kumamoto horse meat] A Kitashinchi restaurant that began as a horse-meat specialist and reopened as a sushi bar in September 2025, keeping horse meat sent from Kumamoto alongside the fish. The top course pairs the two: sea bream wrapped in kombu with horse meat and shiso, three cuts of horse sashimi with a sweet soy sauce, and a Harihari hot pot of horse meat and watercress in a bonito and horse-bone broth, between nigiri of marinated bluefin with a hidden dab of yuzu pepper, uni piled over the rice and abalone in liver sauce. Courses run ¥10,500–16,500; a sushi-only course suits diners who skip horse meat. Diners praise a friendly head chef and staff who pace dishes to the table; one family asked the chef for a sushi cake for a child's birthday (July 2026). Counter seats and sunken-kotatsu rooms; English, Chinese and Korean menus.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed; "very friendly and approachable", June 2026 review)', 'Owner (unnamed; "cheerful and friendly", September 2026 review)'], origin: 'The shop was a horse-meat specialty restaurant before it reopened as a sushi bar (September and October 2026 reviews); Tabelog opening date 1 September 2025.', background: 'Shop text (Tabelog): authentic sushi made with seasonal fresh fish and fresh horse meat directly from Kumamoto; four courses featuring sushi and horse meat; sake to match seasonal fish; counter and tatami seating. Reviews: a long-time regular from the horse-meat days (September 2026); "Bakou, which originally specialized in horse meat" now offering sushi courses (October 2025).', philosophy: 'The sea and the land in one course (Tabelog).', specialty: '"Kiwami" course of sushi and horse meat; Harihari hot pot.',
      anecdotes: [
        { text: '"My family tends to eat at a slower pace, but the staff adjusted the timing of the dishes accordingly, allowing us to savor each plate without feeling rushed." — June 2026, the ¥16,500 Kiwami course.', source: R + 'B530415979/' },
        { text: '"I requested the chef to create a sushi cake in advance" — July 2026, a child\'s birthday on a fourth visit.', source: R + 'B519398028/' },
        { text: '"The horse sashimi and liver sashimi were both exquisite, and the combination of horse meat and the crisp watercress in the hot pot was simply outstanding." — September 2026.', source: R + 'B536296685/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B514968903/', R + 'B519398028/', R + 'B530415979/', R + 'B531175603/', R + 'B531381603/', R + 'B532215278/', R + 'B533029571/', R + 'B535799692/', R + 'B536296685/', R + 'B537809405/'] },
    cultural_comfort: { level: 'english', note: 'English, Simplified Chinese and Korean menus (Tabelog); set courses explained by a friendly chef (2026).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-10 谷安セドナビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing taking December 2026 bookings; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番10号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B530415979/', R + 'B531381603/'],
    price_note: 'Courses from the Tabelog listing (tax included); confirmed by June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Kiwami" Sushi Bakou course (horse meat and seafood)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog listing; June 2026 review.', 'kiwami_course'),
      it('', '', 'Sushi Bakou course (the day\'s fish, appetizers to sushi)', '¥10,890', 'Course', 'ask', 'no', 'Tabelog listing; June 2026 review.', 'bakou_course'),
      it('', '', 'Sakura hot pot course (horse sashimi, Harihari hot pot, seasonal dishes)', '¥10,500', 'Course', 'no', 'no', 'Tabelog listing.', 'sakura_nabe_course'),
    ] }, {
    cuisine: 'Kumamoto から直送の馬肉と鮨 (食べログ)・コース: 馬肉と魚介の「Kiwami」Sushi Bakou コース16,500円、その日の魚の Sushi Bakou コース10,890円、馬刺しと Harihari 鍋の Sakura 鍋のコース10,500円 (食べログ、税込)、馬肉を食べない人には鮨だけのコースも (2026年6月)・2026年6月の Kiwami コース: 天然の本マグロと鯛の刺身、Ume Suisho、裏ごしのあん肝、昆布で巻いた鯛と馬肉と大葉とねぎ、カルボナーラ風の茶碗蒸し、アワビの肝ソースと目の前ですりおろすチーズ、柚子胡椒をしのばせた本マグロの漬け、シマアジ、新子のコハダ、馬刺し3種、カツオと馬の骨のだしの、馬肉とクレソンの Harihari 鍋、締めはそば、ほうじ茶のプリン・Densuke 穴子、シャリが隠れるほどのウニ、トロたく、銀だらの西京焼き、テーブルでかけるはちみつのアイス (2026年6〜7月)・馬レバーの刺身、溶岩焼きの馬タン (2026年7月)・季節の魚に合わせた日本酒、店内には koto の音楽 (2026年6月)',
    neighborhood: '北新地、谷安セドナビルの3階。JR北新地駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。馬刺しには甘い醤油、Harihari 鍋の締めはそば、コースには西京焼きや握りがあり、ふつう小麦を含む醤油で味つけする。',
    vegan_detail: 'ヴィーガンではありません。鮨と馬肉のコースで、鍋のだしはカツオと馬の骨 (2026年6月)。',
    notes: '[鮨・北新地、鮨と Kumamoto の馬肉] もとは馬肉の専門店で、2025年9月に鮨屋として新しくなった北新地の店。Kumamoto から直送の馬肉を魚と並べて出す。上のコースはその両方で、昆布で巻いた鯛と馬肉と大葉、甘い醤油の馬刺し3種、カツオと馬の骨のだしの馬肉とクレソンの Harihari 鍋のあいだに、柚子胡椒をしのばせた本マグロの漬け、シャリにたっぷりのウニ、アワビの肝ソースなどの握り。コースは10,500〜16,500円で、馬肉を食べない人には鮨だけのコースも。気さくな大将と、食べる速さに合わせて料理を出してくれるスタッフをほめる声。子どもの誕生日に大将が鮨のケーキを作ってくれたという家族も。カウンター席と掘りごたつの座敷。英語、中国語、韓国語のメニューあり。',
  });
}

save();
