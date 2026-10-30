// Osaka sweep (2-mile circle around Dotonbori), batch 220 — mom-phase clean-up: near-centre listings with 30+ reviews
// passed over earlier without a skip() mark (some only because the name sounds like a person's, no longer a reason).
//   + オステリア スドウ OSTERIA SUDO (southern-Italian osteria since 2006, owner-chef trained in Italy; Nambanaka 2-6-20)
//   + 炉端とカツラ｡ @日本橋 Robata to Katsura. At Nipponbashi (robata izakaya, staff in wigs; same building as Sudo, 1F)
//   + ルッジェーリ RUGGERI (Tabelog 100 gelato shop since 2011; Nambanaka 2-8-93)
//   + タナカンチ Tanaka Nchi (izakaya by night, dashi spice-curry lunch on weekdays; Nambanaka 3-7-2)
//   Chain checks: none of the four is in data/osaka.json. Robata to Katsura was until 7 October 2026 a branch of the
//   Robatayaki Isshin group (炉端焼き一新 難波 27132624 in shops.jsonl, not in data; a Higashi-Umeda branch named in a
//   July 2026 review) — a small local group, kept like ル・ピノー. No second branch found for the other three.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 220);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ オステリア スドウ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011885/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.osteria-sudo.com/';
  const L = ['11:30', '14:30'], D = ['18:00', '22:00'];
  const H = day(L, D);
  put({
    id: 'osaka_osteria_sudo_nambanaka', name: 'オステリア スドウ (OSTERIA SUDO)', category: 'OMNI',
    lat: 34.662383, lng: 135.503574, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu is built on pasta, pizza and homemade bread, but there are risottos, fresh-fish dishes and meat mains, so ask what can be made without wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog tags the shop "Vegetarian options", but nothing on the menu is labeled vegan and most dishes use cheese, cream, ham or seafood; ask whether a vegetable dish can be made without animal products.',
    hours_raw: 'Tue–Sat 11:30–14:30 (last order 14:00) and 18:00–22:00 (last order 21:00); Sunday lunch only, dinner by reservation; closed Monday and the 1st and 3rd Sundays (official site; Tabelog remarks also name the 5th Sunday). Reservations accepted (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Appetizer charge ¥300 before tax (Tabelog); the dinner menu on the site lists a table charge of ¥330 per person with three homemade breads including focaccia (focaccia refills free). Lunch is one order per person; the site asks guests not to bring strollers. 16 seats (6 counter, 10 table); private hire possible; non-smoking (Tabelog). Tuesday is half-price glass-wine day (Tabelog; a September 2026 review); Thursday ¥1,000 off bottles over ¥4,000 (Tabelog). Opened 10 October 2006 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(L) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-6-20 (Naniwa Ward) — 1 min from Nankai Namba Stn, 5 min from Namba Stn (Midosuji Line), on the way to the electric town',
    cuisine: 'Southern-Italian osteria cooked by an owner-chef who trained in Italy (Tabelog; official site) · lunch sets: pranzo A ¥1,100 (dish of the day, pasta of the day), B ¥1,400 (adds dessert and espresso or tea), C ¥2,000 (antipasti platter and pasta), pranzo speciale ¥3,000 by reservation (official site); two pastas of the day on one plate, large size +¥200 (2026 reviews) · dinner à la carte: antipasti platter piccola ¥1,400 / grande ¥2,100, fresh-fish carpaccio, handmade tagliatelle with sea-urchin tomato cream ¥2,100, potato gnocchi or penne with gorgonzola and walnut ¥1,550, roast duck breast with Marsala orange sauce ¥2,000, veal cotoletta, beef cheek braised in red wine, porcini and prosciutto risotto, pizzas from ¥1,350 (official site) · courses ¥3,400–¥6,000 (Tabelog; official site) · over 40 wines, mostly Italian (Tabelog)',
    website: SITE, gmaps: gm('OSTERIA SUDO 難波中'), menu_url: 'https://www.osteria-sudo.com/dinner',
    notes: "[Italian · Nambanaka, a small southern-Italian osteria by Nankai Namba] A 16-seat osteria open since 2006, a minute from Nankai Namba Station on the walk to the electric town, cooked by an owner-chef who trained in Italy. Lunch is the draw: from ¥1,100 you get the dish of the day, homemade focaccia with free refills and two of the day's three pastas on one plate (tomato, oil or cream; +¥200 for a large size), and several diners return again and again for it. Dinner runs to an antipasti platter, handmade tagliatelle with sea-urchin tomato cream, gnocchi with gorgonzola and walnut, roast duck with Marsala orange sauce and pizzas, with over 40 mostly Italian wines; Tuesday is half-price glass-wine day. One diner was put out that the dish of the day was swapped without a word when it ran out. No cards (PayPay is fine); closed Mondays and the 1st and 3rd Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: 'Opened 10 October 2006 (Tabelog).', background: 'Owner-chef who trained in Italy (Tabelog, shop-provided: "an Owner Chef with Authentic Experience", "our chef, who trained in Italy"; official site owner\'s greeting: イタリアで修業を積んだ).', philosophy: 'Authentic Italian food at prices for everyday use, with the flavor of each ingredient brought forward (official site).', specialty: 'Handmade pasta; two-pasta lunch plates.',
      anecdotes: [
        { text: '"For the fish dish, I had sautéed sea bream with porcini sauce. The sauce was exceptionally delicious, and the sea bream was flaky." — September 2026, a dinner on half-price glass-wine Tuesday.', source: R + 'B474480344/' },
        { text: '"I love that I can choose two out of three types of pasta for the assorted platter!" — July 2026, Pranzo A ¥1,100.', source: R + 'B536707811/' },
        { text: '"Sometimes at other places, I get served weak tea, which ruins the meal, but here, the tea is always brewed strong." — September 2026.', source: R + 'B536344428/' },
      ],
      japanese_sources_summary: '公式サイト: OSTERIA SUDO (オステリアスドウ)、大阪市浪速区難波中2-6-20、各線難波駅から徒歩5分、火〜土・日・祝 ランチ11:30〜14:30 (L.O. 14:00)、ディナー18:00〜22:00 (L.O. 21:00)、第1・3日曜と月曜休み、16席 (テーブル・カウンター)。オーナー挨拶: イタリアで修業を積んだ本場の味。ランチ: pranzo A 1100円 (本日の一皿、本日のパスタ)、B 1400円 (デザート、エスプレッソか紅茶つき)、C 2000円 (前菜の盛り合わせ、本日のパスタ)、pranzo speciale 3000円 (予約制)、1人1オーダー、ベビーカーは控えて。ディナー: テーブルチャージ1人330円、自家製パン3種 (グリッシーニ、ペットレ、フォカッチャ、フォカッチャはおかわり可)、いろいろ前菜盛合せ 小1400円・大2100円、鮮魚のカルパッチョ、生うにのトマトクリームソース手打ちタリアテッレ2100円、じゃがいものニョッキ ゴルゴンゾーラとくるみのソース1550円、合鴨胸肉のロースト マルサラオレンジのソース2000円、仔牛のコトレッタ、牛ほほ肉の赤ワイン煮込み、生ハムとポルチーニ茸のリゾット、マルゲリータ1350円、コース3400円〜6000円。HP限定クーポン: 19時までの来店でグラスドリンクが1時間半額 (要予約、現金のみ)。食べログ (英語版): 2006年10月10日開店、イタリア中心のワイン40種以上、火曜はハウスワインとグラスのスパークリングが半額、木曜は4000円以上のボトルが1000円引き、カード・電子マネー不可、PayPay可、お通し300円 (税抜)、16席 (カウンター6、テーブル10)、禁煙、ベジタリアンメニューあり。口コミ(2026年7〜10月): ランチは本日のパスタ3種から2種を1皿に、大盛り200円、フォカッチャはおかわり自由、紅茶がいつも濃い、人気なので予約がおすすめ、ディナーは真鯛のソテー ポルチーニソース、合鴨のロースト、ゴルゴンゾーラのペンネ、本日の一皿が品切れで説明なく替わったという声も。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.osteria-sudo.com/lunch', 'https://www.osteria-sudo.com/dinner', 'https://www.osteria-sudo.com/access', R + 'B474480344/', R + 'B533630955/', R + 'B536344428/', R + 'B536707811/', R + 'B536903623/', R + 'B538001702/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash or PayPay only; book for lunch, it fills up (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市浪速区難波中2-6-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026; official site current (news posts July and September 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目6番20号 (go) 7m (the first GSI pass matched only the chome; the listing address written 難波中2-6-20 matches the go). 炉端とカツラ｡ @日本橋 (osaka_robata_to_katsura_nambanaka, 難波中2-6-20 1F) is at the same address with a Tabelog point about 2 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: ['https://www.osteria-sudo.com/lunch', 'https://www.osteria-sudo.com/dinner', R + 'B538001702/', R + 'B474480344/'],
    price_note: 'Prices from the official lunch and dinner pages (tax included, read 2026-10-30).', last_checked: TODAY, items: [
      it('pranzo A', '', 'Pranzo A: dish of the day and pasta of the day (two pastas on one plate)', '¥1,100', 'Lunch', 'no', 'ask', 'Official site; July and October 2026 reviews.', 'pranzo_a'),
      it('pranzo C', '', 'Pranzo C: antipasti platter and pasta of the day', '¥2,000', 'Lunch', 'no', 'ask', 'Official site; October 2026 review.', 'pranzo_c'),
      it('いろいろ前菜盛合せ', '', 'Assorted antipasti platter (piccola / grande)', '¥1,400 / ¥2,100', 'Antipasto', 'ask', 'ask', 'Official site; September 2026 review.', 'antipasti'),
      it('生うにのトマトクリームソース 手打ちタリアテッレ', '', 'Handmade tagliatelle with fresh sea-urchin tomato cream sauce', '¥2,100', 'Pasta', 'no', 'no', 'Official site.', 'uni_tagliatelle'),
      it('じゃがいものニョッキ ゴルゴンゾーラとくるみのソース', '', 'Potato gnocchi (or penne) with gorgonzola and walnut sauce', '¥1,550', 'Pasta', 'no', 'no', 'Official site; September 2026 review (penne).', 'gnocchi_gorgonzola'),
      it('合鴨胸肉のロースト マルサラオレンジのソース', '', 'Roast duck breast with Marsala orange sauce', '¥2,000', 'Carne', 'ask', 'no', 'Official site; September 2026 review.', 'duck'),
      it('マルゲリータ', '', 'Pizza Margherita', '¥1,350', 'Pizza', 'no', 'no', 'Official site.', 'margherita'),
    ] }, {
    cuisine: 'イタリアで修業したオーナーシェフの南イタリア料理のオステリア (食べログ、公式サイト)・ランチ: pranzo A 1100円 (本日の一皿、本日のパスタ)、B 1400円 (デザートとエスプレッソか紅茶つき)、C 2000円 (前菜の盛り合わせとパスタ)、予約制の pranzo speciale 3000円 (公式サイト)、本日のパスタ2種を1皿に、大盛り200円 (2026年の口コミ)・ディナー: いろいろ前菜盛合せ 小1400円・大2100円、鮮魚のカルパッチョ、生うにのトマトクリームソース手打ちタリアテッレ2100円、じゃがいものニョッキかペンネ ゴルゴンゾーラとくるみのソース1550円、合鴨胸肉のロースト マルサラオレンジのソース2000円、仔牛のコトレッタ、牛ほほ肉の赤ワイン煮込み、生ハムとポルチーニ茸のリゾット、ピッツァは1350円から (公式サイト)・コース3400円〜6000円 (食べログ、公式サイト)・イタリア中心のワイン40種以上 (食べログ)',
    neighborhood: '浪速区難波中2-6-20。南海なんば駅から徒歩1分、地下鉄御堂筋線なんば駅から徒歩5分、電気街へ向かう道沿い',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピッツァ、自家製パンが中心だが、リゾット、鮮魚料理、肉料理もあるので、小麦なしでできるものを確認して。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあるが、ヴィーガンの表示はなく、チーズ、クリーム、ハム、魚介を使う料理が多い。動物性の食材なしで野菜の料理ができるか確認して。',
    notes: '[イタリアン・難波中、南海なんば駅近くの小さな南イタリアのオステリア] 2006年からの16席のオステリア。南海なんば駅から徒歩1分、電気街へ向かう道沿いにあり、イタリアで修業したオーナーシェフが作る。人気はランチで、1100円から本日の一皿、おかわり自由の自家製フォカッチャ、その日の3種のパスタから2種を1皿に (トマト、オイル、クリーム。大盛りは200円)。何度も通う人が多い。ディナーは前菜の盛り合わせ、生うにのトマトクリームの手打ちタリアテッレ、ゴルゴンゾーラとくるみのニョッキ、マルサラオレンジソースの合鴨のロースト、ピッツァなど。イタリア中心のワインが40種以上あり、火曜はグラスワインが半額。本日の一皿が品切れで説明なく替わったのが残念という声も。カードは使えない (PayPayは可)。月曜と第1・3日曜休み。',
  });
}

// ================================================================ 炉端とカツラ｡ @日本橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27153845/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['15:00', '23:30']), WE = day(['13:00', '23:30']);
  put({
    id: 'osaka_robata_to_katsura_nambanaka', name: '炉端とカツラ｡ @日本橋 (Robata to Katsura. At Nipponbashi)', category: 'OMNI',
    lat: 34.662373, lng: 135.503595, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sashimi and charcoal-grilled fish, meat and vegetable skewers could suit, but the signature dishes include a breaded beef cutlet in sauce, fried shrimp with chili mayo and tempura, so ask what is safe.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a robata izakaya built around fresh fish, Ise lobster, wagyu and pork-wrapped vegetable skewers.',
    hours_raw: 'Mon–Fri and the days before and after a public holiday 15:00–23:30; Sat, Sun and public holidays 13:00–23:30; last orders food 22:30, drinks 23:00 (Tabelog). No closing day listed. Reopened as Robata to Katsura on 8 October 2026 (Tabelog remarks; an October 2026 review); the listing opened 17 January 2026 under the earlier name Isshin. Reservations accepted; a table booked for two may be seated at the counter; one-drink minimum (Tabelog). Ise lobster and hairy crab need a reservation (October 2026 review). No service charge (Tabelog, original Japanese "なし"). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay accepted (Tabelog). 15 seats (7 counter, 2 tables); private hire possible; smoking allowed (Tabelog). Menus in English, Chinese and Korean; English- and Korean-speaking staff (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-6-20, 1F (Naniwa Ward) — 2 min from the south exit of Nankai Namba Stn, 5 min from Namba Stn (Midosuji Line)',
    cuisine: 'Robatayaki and seafood izakaya (Tabelog) · fresh fish sent daily from around the country as sashimi, straw-grilled (wara-yaki) and charcoal-grilled; vegetable skewers wrapped in pork (Tabelog, shop-provided) · signature dishes: "Drowning" beef cutlet with sauce poured at the table ¥1,980, giant shrimp with chili mayo ¥1,580 (October 2026 reviews) · aged red and fatty tuna sashimi from Nagasaki, premium wagyu chateaubriand over charcoal ¥5,980, fig and cheese tempura ¥780, grilled wagyu yukhoe ¥1,380, salmon rare cutlet with Shiba-zuke tartare ¥1,380, Ise Chikara pork sausage ¥1,180, whole grilled fatty hokke ¥1,980, fried zucchini ¥680, bonjiri ¥800 (October 2026 reviews) · Ise lobster sashimi ¥11,000 with the head made into miso soup, hairy crab, by reservation (October 2026 reviews) · all-you-can-drink courses for 4–8 people ¥6,600–¥10,000 (Tabelog) · whisky focus (Yamazaki, Chita, rarities), sake and wine (Tabelog)',
    website: null, gmaps: gm('炉端とカツラ 難波中'), menu_url: null,
    notes: "[Izakaya · Nambanaka, a robata bar where the staff wear wigs] A 15-seat robata izakaya by Nankai Namba's south exit, relaunched on 8 October 2026 under a new name and a new gimmick: the staff work in wigs, afros and pilot hats, and one diner was welcomed with a drum performance. Diners agree the food is no joke. Fresh fish arrives daily from around Japan for sashimi (aged Nagasaki tuna, red and fatty) and straw or charcoal grilling, and the skewers are vegetables wrapped in pork. The signature is the \"Drowning\" beef cutlet, rare wagyu with sauce poured over it at the table (¥1,980), alongside a giant shrimp in chili mayo hanging off the plate (¥1,580). Splurges run to wagyu chateaubriand and Ise lobster sashimi (¥11,000, book ahead), its head returned as miso soup. Open from mid-afternoon every day; smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Listing opened 17 January 2026; earlier reviews (June–July 2026) call the shop Isshin, and a July 2026 diner had visited "the Higashi-Umeda branch" with "mostly the same" menu. Reopened as Robata to Katsura on 8 October 2026 (Tabelog).', background: 'Robata izakaya whose staff all wear wigs (October 2026 reviews).', philosophy: 'Fresh fish and charcoal and straw grilling at a good price (Tabelog, shop-provided).', specialty: '"Drowning" beef cutlet; giant shrimp with chili mayo; Ise lobster sashimi.',
      anecdotes: [
        { text: '"The staff, dressed humorously in afros and pilot hats, brought the impressive lobster to our table with big smiles" — October 2026, on opening day.', source: R + 'B537158322/' },
        { text: '"Honestly, I initially thought it might be more about the novelty than the food, but I was pleasantly surprised in a good way." — October 2026, Ise lobster sashimi ¥11,000.', source: R + 'B537495055/' },
        { text: '"Upon entering the restaurant, the staff welcomed us with a drum performance." — October 2026.', source: R + 'B537206923/' },
      ],
      japanese_sources_summary: '食べログ (英語版): 炉端とカツラ｡ @日本橋、大阪市浪速区難波中2-6-20 1F、南海なんば駅南口から徒歩2分、地下鉄御堂筋線なんば駅から徒歩5分、月〜金・祝前日・祝後日15:00〜23:30、土日祝13:00〜23:30 (L.O. 料理22:30、ドリンク23:00)、10月8日から「炉端とカツラ｡」として営業、予約可 (2名のテーブル予約でもカウンターになる場合あり)、ワンドリンク制、サービス料なし、カード・電子マネー・PayPay可、15席 (カウンター7、テーブル2)、喫煙可、英語・中国語・韓国語のメニュー、英語・韓国語のスタッフ。店の紹介: 全国から毎日届く鮮魚の刺身、藁焼きと炭火焼き、野菜の豚巻き串、Yamazaki や Chita などのウイスキー、日本酒、ワイン、飲み放題つきのコース6600円〜10000円 (4〜8名)。口コミ(2026年10月): スタッフはみなカツラ、アフロやパイロットの帽子、太鼓の出迎え、看板の牛カツは目の前でソースをたっぷりかける1980円、大海老のチリマヨ1580円、Nagasaki の熟成本鮪の赤身とトロ、和牛シャトーブリアン5980円、無花果とチーズの天ぷら780円、伊勢海老のお造り11000円と頭の味噌汁 (伊勢海老と毛蟹は要予約)、焼きズッキーニ680円、ぼんじり800円、見た目はふざけているが料理は本気という声。6〜7月の口コミでは店名は Isshin、7月の口コミ: Higashi-Umeda の店とメニューはほぼ同じ。',
      confidence: 'medium', sources: [TB, R + 'B531435961/', R + 'B531780907/', R + 'B537158322/', R + 'B537206923/', R + 'B537475831/', R + 'B537477190/', R + 'B537495055/', R + 'B537720978/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff listed on Tabelog; a table for two may be seated at the counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市浪速区難波中2-6-20 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reopened under this name on 8 October 2026 (Tabelog remarks), and eight reviews describe October 2026 visits under the new name. Before that the shop traded as Isshin (June–July 2026 reviews); a July 2026 diner names a Higashi-Umeda branch, and 炉端焼き一新 難波 (Tabelog 27132624, not in data) shares the Isshin name; no larger chain found (web search, 2026-10-30).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目6番20号 (go) 8m. オステリア スドウ (osaka_osteria_sudo_nambanaka, 難波中2-6-20) is at the same address with a Tabelog point about 2 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537495055/', R + 'B531435961/', R + 'B537720978/'],
    price_note: 'Prices from October 2026 reviews (after the reopening).', last_checked: TODAY, items: [
      it('', '', '"Drowning" beef cutlet (sauce poured at the table)', '¥1,980', 'Signature', 'no', 'no', 'October 2026.', 'beef_cutlet'),
      it('', '', 'Giant shrimp with chili mayo', '¥1,580', 'Signature', 'no', 'no', 'October 2026.', 'ebi_chili_mayo'),
      it('', '', 'Premium wagyu chateaubriand grilled over charcoal', '¥5,980', 'Charcoal grill', 'ask', 'no', 'October 2026.', 'chateaubriand'),
      it('', '', 'Whole grilled fatty hokke', '¥1,980', 'Charcoal grill', 'ask', 'no', 'October 2026.', 'hokke'),
      it('', '', 'Fig and cheese tempura', '¥780', 'Fried', 'no', 'no', 'October 2026.', 'fig_tempura'),
      it('', '', 'Premium Ise lobster sashimi (book ahead)', '¥11,000', 'Sashimi', 'ask', 'no', 'October 2026.', 'ise_ebi'),
      it('', '', 'Fried zucchini', '¥680', 'Fried', 'no', 'no', 'October 2026.', 'zucchini'),
    ] }, {
    cuisine: '炉端焼きと海鮮の居酒屋 (食べログ)・全国から毎日届く鮮魚を刺身、藁焼き、炭火焼きで、野菜の豚巻き串 (食べログ)・看板の牛カツは目の前でソースをたっぷりかける1980円、大海老のチリマヨ1580円 (2026年10月の口コミ)・Nagasaki の熟成本鮪の赤身とトロのお造り、和牛シャトーブリアンの炭火焼き5980円、無花果とチーズの天ぷら780円、和牛の炙りユッケ1380円、サーモンのレアカツ Shiba-zuke のタルタル1380円、Ise Chikara ポークのソーセージ1180円、脂ののったホッケの一本焼き1980円、ズッキーニのフライ680円、ぼんじり800円 (2026年10月の口コミ)・伊勢海老のお造り11000円と頭の味噌汁、毛蟹、要予約 (2026年10月の口コミ)・4〜8名の飲み放題つきコース6600円〜10000円 (食べログ)・Yamazaki や Chita などのウイスキー、日本酒、ワイン (食べログ)',
    neighborhood: '浪速区難波中2-6-20 1F。南海なんば駅南口から徒歩2分、地下鉄御堂筋線なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。刺身や炭火で焼いた魚、肉、野菜の串もあるが、看板の牛カツ、大海老のチリマヨ、天ぷらなど衣のある料理も多いので、大丈夫なものを確認して。',
    vegan_detail: 'ヴィーガンではありません。鮮魚、伊勢海老、和牛、野菜の豚巻き串が中心の炉端焼きの居酒屋。',
    notes: '[居酒屋・難波中、スタッフがカツラをかぶる炉端焼き] 南海なんば駅南口近く、15席の炉端焼きの居酒屋。2026年10月8日に新しい名前で再スタートし、スタッフはみなカツラ、アフロやパイロットの帽子で接客する。太鼓で迎えられたという人も。それでも料理は本気、というのがみなの感想。全国から毎日届く鮮魚を刺身 (Nagasaki の熟成本鮪の赤身とトロ) や藁焼き、炭火焼きで出し、串は野菜の豚巻き。看板は、レアの和牛カツに目の前でソースをたっぷりかける一皿 (1980円) と、皿からはみ出す大海老のチリマヨ (1580円)。贅沢をするなら和牛シャトーブリアンや伊勢海老のお造り (11000円、要予約)。頭は味噌汁になって戻ってくる。毎日昼すぎから開いていて、たばこが吸える。',
  });
}

// ================================================================ ルッジェーリ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27058934/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ruggeri.jp/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'osaka_ruggeri_nambanaka', name: 'ルッジェーリ (RUGGERI)', category: 'OMNI',
    lat: 34.662192, lng: 135.500764, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; gelato comes in a cup or cone, and some flavors carry biscuit, pie, granola or other mix-ins (tiramisu, mille-feuille, the yogurt-and-granola ジェラノーラ), so ask which flavors are wheat-free. Tabelog lists allergy information as available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most flavors are milk-based, but the shop makes a line of fruit sorbets (raspberry, mango, Amaou strawberry, fig and others); nothing is labeled dairy- or egg-free, so ask about the day\'s sorbets. Tabelog tags the shop "Vegetarian options".',
    hours_raw: 'Mon and Thu–Sun, public holidays and the days before and after them 11:00–19:00; closed Tuesday and Wednesday, but open on public holidays; a longer break over New Year; details on the shop\'s Instagram or X (Tabelog). Closing moved from a later hour to 19:00 on 1 October 2026 (official site; an October 2026 review). No reservations; takeout up to 2 hours, with dry ice for longer trips (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners), transit IC, iD, QUICPay and QR (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay) accepted (Tabelog). 8 counter seats and 3 on the terrace; non-smoking; children and strollers welcome (Tabelog). Opened 1 July 2011 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 2-8-93 (Naniwa Ward) — 3–5 min from Namba Stn',
    cuisine: 'Handmade Italian gelato shop, Tabelog Ice cream/Gelato "Tabelog 100" 2023 and 2026 (Tabelog) · 13–16 flavors at a time, about 100 over a year, changing with the seasons (official site; Tabelog) · sizes Solo (1 flavor, 98 ml), Duo (140 ml), Medio (180 ml), cup or cone (October 2026 review) · premium flavors at extra cost, such as Sicilian Pistachio from Bronte and a blond-chocolate gelato (official site) · milk-based flavors (rich milk, chocolate and hazelnut, New York rare cheese, Maple Walnut) and fruit sorbets (raspberry, Amaou strawberry, fig, plum, fruit tomato with lemon) (official site) · autumn flavors such as Italian Mont Blanc and pumpkin (October 2026 reviews) · yogurt gelato with granola (ジェラノーラ) ¥450 (official site) · gift sets shipped and an online shop (official site)',
    website: SITE, gmaps: gm('ルッジェーリ 難波中'), menu_url: 'https://www.ruggeri.jp/lineup/',
    notes: "[Sweets · Nambanaka, Tabelog-100 Italian gelato by Namba Station] A small gelateria a few minutes from Namba Station, open since 2011 and twice picked for Tabelog's gelato \"Tabelog 100\" (2023, 2026). Everything is handmade, with 13 to 16 flavors in the case at a time and about 100 over a year, and the case itself is dressed up with seasonal fruit (for Halloween in October 2026). The best seller is the Sicilian Pistachio made with Bronte pistachios, one of the premium flavors that cost a little extra; autumn brings an Italian Mont Blanc with bits of chestnut and a rich pumpkin. Pick a Solo, Duo or Medio in a cup or cone; one diner calls the prices reasonable, another found the premium surcharges add up. There are eight counter seats, a small terrace and a restroom at the back. One early visitor noticed more flavors appear about an hour after opening. Closes at 7 pm; closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2011 (Tabelog).', background: 'Handmade Italian gelato shop that also sells wholesale and makes custom flavors for other businesses (official site); Tabelog Ice cream/Gelato "Tabelog 100" 2023 and 2026 (Tabelog).', philosophy: '"Delicious beyond the ingredients": each recipe is balanced so the gelato tastes richer than the fruit itself, fruit is ripened and the recipe adjusted to its sugar level, and gelato is served at about −13 °C (official site; Tabelog, shop-provided).', specialty: 'Sicilian Pistachio (Bronte pistachios); seasonal fruit gelato and sorbets.',
      anecdotes: [
        { text: '"The gelato is made with the finest pistachios from Bronte, Sicily. It had a wonderful roasted flavor and was incredibly rich and delicious!" — October 2026, Sicilian Pistachio Solo cone ¥450 plus ¥100 premium.', source: R + 'B537766676/' },
        { text: '"The Italian Mont Blanc, in particular, had bits of chestnut mixed in, providing a delightful textural contrast that evoked the feeling of autumn." — October 2026.', source: R + 'B537117588/' },
        { text: '"Compared to other nut-based gelatos I\'ve had, the nuts in this one were quite large." — October 2026, Maple Walnut Solo ¥500.', source: R + 'B537857581/' },
      ],
      japanese_sources_summary: '公式サイト: イタリアンスイーツ Ruggeri、大阪市浪速区難波中2丁目8-93、11時〜19時 (2026年10月1日から19時閉店)、火曜・水曜休み。常に13〜16種類のジェラート、ソロはお持ち帰り可、ドライアイスあり、プレミアムジェラートは50円〜追加。素材以上においしくする配合、果実は熟成させ糖度に合わせて配合、本場のなめらかさは−13℃程度、まずは店頭で。プレミアム: シチリアピスタチオ (シチリアブロンテ産、一番人気)、チョコラートビオンド、マンドルラート、ティラミスドルチェ、メープルゴルゴンゾーラ。季節限定: ペスカマトゥーロ、イタリアンモンブラン、グアバランチャ、さくらもち、クレマトルティメーラ。ミルク系: ミルクロッソ、ニューヨークレアチーズ、ジャンドゥイア。ソルベ系: あまおう ソルベ、アグルーメデコポン、イチジク ソルベ、すもも ソルベ、ポモリモーネ。ジェラノーラ450円 (ヨーグルトのジェラートとグラノーラ、店舗のみ)、ギフトセットの発送、オンラインショップ、卸販売と共同開発。食べログ (英語版): 食べログ アイス・ジェラート 百名店 2023・2026、2011年7月1日開店、年間約100種類、予約不可、テイクアウトは2時間まで、カード・電子マネー・QR可、カウンター8席とテラス3席、禁煙、アレルギー表示あり、ベジタリアンメニューあり、子ども・ベビーカー歓迎。口コミ(2026年10月): 季節の果物で立体的に飾ったショーケース (ハロウィン)、ソロ (98ml)・デュオ (140ml)・メディオ (180ml)、カップかコーン、シチリアピスタチオのソロのコーン450円とプレミアム100円、メープルウォールナッツのソロ500円、イタリアンモンブラン、かぼちゃ、紫芋のスイートポテトパイ、グアバとオレンジ、Jewelry Viola、カウンター席と奥にトイレ、開店1時間後にほかのフレーバーが並ぶという声、値段は手ごろ。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.ruggeri.jp/flavor/', 'https://www.ruggeri.jp/lineup/', R + 'B537117588/', R + 'B537698501/', R + 'B537766676/', R + 'B537857581/', R + 'B537878320/', R + 'B537963943/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose at the showcase; 8 counter seats and a small terrace (Tabelog). A diner saw a family of overseas visitors enjoying it inside (October 2026).' },
    safety: { ...SAFETY0, positives: [{ text: 'Tabelog lists "Allergy information available" for this shop.', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2丁目8-93',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026; official site announces the 1 October 2026 hours change. No other shop found: the site lists one shop plus wholesale and an online shop (ruggeri-online.shop).' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM Ruggeri way/885356222 1m (name match). GSI matched only 難波中二丁目 (chome, 196m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: ['https://www.ruggeri.jp/lineup/', R + 'B537766676/', R + 'B537857581/'],
    price_note: 'Gelato prices from October 2026 reviews; Gelanola from the official site (read 2026-10-30).', last_checked: TODAY, items: [
      it('シチリアピスタチオ', '', 'Sicilian Pistachio (premium), Solo in a cone', '¥450 + ¥100', 'Gelato', 'ask', 'no', 'October 2026.', 'pistachio'),
      it('メープルウォールナッツ', '', 'Maple Walnut, Solo', '¥500', 'Gelato', 'ask', 'no', 'October 2026.', 'maple_walnut'),
      it('イタリアンモンブラン', '', 'Italian Mont Blanc (seasonal)', '', 'Gelato', 'ask', 'no', 'Official site; October 2026.', 'mont_blanc'),
      it('', '', 'Pumpkin gelato (seasonal)', '', 'Gelato', 'ask', 'no', 'October 2026.', 'pumpkin'),
      it('', '', 'Fruit sorbet of the season (e.g. raspberry, Amaou strawberry)', '', 'Sorbet', 'ask', 'ask', 'Official site.', 'sorbet'),
      it('ジェラノーラ', '', 'Yogurt gelato with granola, frozen mango and berry sauce', '¥450', 'Gelato', 'no', 'no', 'Official site.', 'gelanola'),
    ] }, {
    cuisine: '手づくりのイタリアンジェラートの店、食べログ アイス・ジェラート 百名店 2023・2026 (食べログ)・常に13〜16種類、年間約100種類、季節で入れ替わる (公式サイト、食べログ)・ソロ (1種、98ml)、デュオ (140ml)、メディオ (180ml)、カップかコーン (2026年10月の口コミ)・追加料金のプレミアム: シチリアブロンテ産のシチリアピスタチオ、チョコラートビオンドなど (公式サイト)・ミルク系 (ミルクロッソ、ジャンドゥイア、ニューヨークレアチーズ、メープルウォールナッツ) とソルベ系 (フランボワーズ、あまおう ソルベ、イチジク ソルベ、ポモリモーネ) (公式サイト)・秋はイタリアンモンブランやかぼちゃ (2026年10月の口コミ)・ヨーグルトのジェラートとグラノーラのジェラノーラ450円 (公式サイト)・ギフトセットの発送とオンラインショップ (公式サイト)',
    neighborhood: '浪速区難波中2丁目8-93。各線なんば駅から徒歩3〜5分',
    gf_detail: '要確認。グルテンの情報なし。カップかコーンで、ビスケット、パイ、グラノーラなどが入るフレーバー (ティラミス、ミルフィーユ、ジェラノーラ) もあるので、小麦なしのフレーバーを確認して。食べログにはアレルギー表示ありとある。',
    vegan_detail: '要確認。ほとんどはミルクのジェラートだが、果物のソルベ系 (フランボワーズ、マンゴー、あまおう、イチジクなど) もある。乳製品や卵不使用の表示はないので、その日のソルベについて確認して。食べログには「ベジタリアンメニューあり」とある。',
    notes: '[スイーツ・難波中、なんば駅近くの百名店のイタリアンジェラート] なんば駅から数分の小さなジェラート店。2011年開店で、食べログのジェラート百名店に2度 (2023、2026) 選ばれている。すべて手づくりで、ショーケースには常に13〜16種類、年間で約100種類。ケースは季節の果物で飾られる (2026年10月はハロウィン)。一番人気は、シチリアのブロンテ産ピスタチオのシチリアピスタチオ。少し追加料金のかかるプレミアムのひとつ。秋は栗が入ったイタリアンモンブランや、濃厚なかぼちゃ。ソロ、デュオ、メディオから選び、カップかコーンで。値段は手ごろという声と、プレミアムの追加料金でけっこうな額になったという声。カウンター8席と小さなテラス、奥にトイレ。開店から1時間ほどでほかのフレーバーも並ぶという声も。19時閉店、火曜・水曜休み。',
  });
}

// ================================================================ タナカンチ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27111305/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['18:00', '24:00']), D = day(['18:00', '24:00']);
  put({
    id: 'osaka_tanakanchi_nambanaka', name: 'タナカンチ (Tanaka Nchi)', category: 'OMNI',
    lat: 34.661451, lng: 135.49869, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the lunch curries are dashi-based spice curries served with fried vegetables, and evenings bring gyoza, shrimp bread and fried dishes, so ask what is wheat-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the spice curries are made with Japanese dashi, and the izakaya menu centres on meat and seafood.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:30–14:30 (curry lunch) and 18:00–24:00; Sat, Sun and public holidays 18:00–24:00; closed Wednesday; changes are posted on the shop\'s Instagram (Tabelog). Happy hour 18:00–19:00: draft beer, chuhai and Kaku highball ¥300 (Tabelog). Reservations accepted; same-day bookings after 18:00 by phone; a booking is cancelled after 15 minutes without word (Tabelog). One drink and one dish per person in the evening (Tabelog). A Friday-night diner saw walk-ins turned away (August 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay); no e-money (Tabelog). 20 seats (8 counter, 3 tables for four); private hire up to 20; smoking allowed (Tabelog). Menus in English, Chinese and Korean (Tabelog).',
    hours: { 0: LD, 1: LD, 3: LD, 4: LD, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 3-7-2, 寿司善サウスビル 1F (Naniwa Ward) — 5 min from Namba Stn (Midosuji Line), 7 min from Daikokucho Stn; next to Edion Arena Osaka',
    cuisine: 'Home-style izakaya with teppanyaki by night, spice curry made with Japanese dashi at weekday lunch (Tabelog) · lunch: a classic black mapo curry ("Makyaku Curry", with tofu and Sichuan pepper) plus a curry of the day, changing on Mondays and Thursdays (dried shrimp; zucchini and chicken keema; butter curry with gizzard; butter curry with chicken mince and mushrooms), served as a combination of both ¥950, with a lassi set ¥1,100, large rice free, topped with fried vegetables (2026 reviews) · evening: obanzai from ¥300, teppanyaki, shrimp bread, mapo tofu, fried rice (Tabelog) · bean sprout namul, boiled peanuts, chouchin-yaki gyoza, shrimp and broccoli with tartar sauce, eggplant yukhoe, chicken skewers (August and October 2026 reviews) · all-you-can-drink courses ¥3,300 (two people) and ¥5,500 (Tabelog) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('タナカンチ 難波中'), menu_url: null,
    notes: "[Izakaya · Nambanaka, dashi spice curry by day and obanzai by night] A small hideaway izakaya next to Edion Arena Osaka, five minutes from Namba Station, that runs two ways. On weekday lunchtimes it serves spice curry made with Japanese dashi: a regular black mapo curry with tofu and Sichuan pepper and a curry of the day that changes on Mondays and Thursdays, best as the two-curry combination for ¥950 (large rice free), piled with fried vegetables. Several diners call it mild for its color and a bargain; the shop said that in this area going over ¥1,000 makes it hard to draw customers. At night it turns into a cosy izakaya with obanzai from ¥300, teppanyaki, gyoza, shrimp bread and fried rice, and a ¥300 happy hour from 6 to 7. Book on Friday nights; smoking is allowed. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Izakaya serving dashi-based spice curry at lunch (Tabelog, shop-provided). One staff member was running the shop alone at a September 2026 lunch.', philosophy: 'Keep lunch under ¥1,000: "In this area, if it goes over JPY 1000, it\'s tough to attract customers" (September 2026 review). The mapo curry keeps the flavor of the mapo served at night (September 2026 review).', specialty: 'Two-curry combination lunch; obanzai.',
      anecdotes: [
        { text: '"The total came to JPY 950! Isn\'t that a great price?" Asked about it, the shop answered: "In this area, if it goes over JPY 1000, it\'s tough to attract customers." — September 2026.', source: R + 'B536254847/' },
        { text: '"The \'Magic\' curry offers a delightful blend of spiciness from the spices and a numbing sensation from the Sichuan peppercorns, enhanced by the tofu." — October 2026.', source: R + 'B537489296/' },
        { text: '"I had a great time chatting, so I decided to visit again that very night." — October 2026, curry for lunch, then drinks in the evening.', source: R + 'B538070687/' },
      ],
      japanese_sources_summary: '食べログ (英語版): タナカンチ、大阪市浪速区難波中3-7-2 寿司善サウスビル 1F、地下鉄御堂筋線なんば駅から徒歩5分、大国町駅から徒歩7分、月・火・木・金11:30〜14:30と18:00〜24:00、土日祝18:00〜24:00、水曜休み、変更はInstagramで、ハッピーアワー18:00〜19:00は生ビール・チューハイ・角ハイボール300円、予約可 (当日18時以降は電話)、1人1ドリンク1フード、カード・QR可、電子マネー不可、20席 (カウンター8、4人卓3)、貸切20名まで、喫煙可、英語・中国語・韓国語のメニュー。店の紹介: 昼は和の出汁のスパイスカレー2種、夜は家庭料理と鉄板焼き、obanzai 300円から、海老パン、麻婆豆腐、炒飯、飲み放題つきのコース3300円 (2名) と5500円。口コミ(2026年5〜10月): 魔薬カレー (麻婆、黒い色、豆腐と花椒のしびれ) と日替わりカレーのあいがけ950円、ラッシーセット1100円、ご飯の大盛り無料、揚げた野菜をのせる、月曜と木曜に入れ替わる (干しエビ、ズッキーニとチキンのキーマ、砂ずりのバターカレー、鶏ひき肉ときのこのバターカレー)、色のわりにやさしい辛さ、「このあたりで1000円を超えるとお客さんが来ない」、昼はひとりで切り盛りしていた日も、夜はもやしのナムル、ゆでピーナッツ、chouchin-yaki の gyoza、海老とブロッコリーのタルタル、なすのユッケ、鶏の串、金曜の夜は予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B528520167/', R + 'B529348154/', R + 'B532437363/', R + 'B533372795/', R + 'B534391576/', R + 'B536254847/', R + 'B537489296/', R + 'B538070687/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on Friday nights; smoking allowed inside (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-7-2 寿司善サウスビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目7番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536254847/', R + 'B534391576/', TB],
    price_note: 'Lunch prices from June–October 2026 reviews; obanzai and happy-hour prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Spice curry combination: black mapo curry and curry of the day', '¥950', 'Lunch curry', 'ask', 'no', 'June and September 2026.', 'curry_combo'),
      it('', '', 'Curry combination with lassi', '¥1,100', 'Lunch curry', 'ask', 'no', 'August 2026.', 'curry_lassi'),
      it('', '', 'Obanzai (home-style small dishes)', 'from ¥300', 'Evening', 'ask', 'ask', 'Tabelog.', 'obanzai'),
      it('', '', 'Shrimp bread', '', 'Evening', 'no', 'no', 'Tabelog.', 'ebi_pan'),
      it('', '', 'Chouchin-yaki gyoza', '', 'Evening', 'no', 'no', 'August and October 2026.', 'gyoza'),
      it('', '', 'Happy-hour draft beer, chuhai or Kaku highball (18:00–19:00)', '¥300', 'Drinks', '', '', 'Tabelog.', 'happy_hour'),
    ] }, {
    cuisine: '夜は家庭料理と鉄板焼きの居酒屋、平日の昼は和の出汁のスパイスカレー (食べログ)・昼: 定番の黒い麻婆カレー「魔薬カレー」(豆腐と花椒) と日替わりカレー、月曜と木曜に入れ替わる (干しエビ、ズッキーニとチキンのキーマ、砂ずりのバターカレー、鶏ひき肉ときのこのバターカレー)、2種のあいがけ950円、ラッシーセット1100円、ご飯の大盛り無料、揚げた野菜をのせる (2026年の口コミ)・夜: obanzai は300円から、鉄板焼き、海老パン、麻婆豆腐、炒飯 (食べログ)・もやしのナムル、ゆでピーナッツ、chouchin-yaki の gyoza、海老とブロッコリーのタルタル、なすのユッケ、鶏の串 (2026年8月、10月の口コミ)・飲み放題つきのコース3300円 (2名) と5500円 (食べログ)・日本酒と焼酎 (食べログ)',
    neighborhood: '浪速区難波中3-7-2 寿司善サウスビル 1F。地下鉄御堂筋線なんば駅から徒歩5分、大国町駅から徒歩7分、Edion Arena Osaka の隣',
    gf_detail: '要確認。グルテンの情報なし。昼のカレーは出汁のスパイスカレーで揚げた野菜をのせ、夜は gyoza、海老パン、揚げものもあるので、小麦なしのものを確認して。',
    vegan_detail: 'ヴィーガンではありません。スパイスカレーは和の出汁で作り、居酒屋のメニューも肉と魚介が中心。',
    notes: '[居酒屋・難波中、昼は出汁のスパイスカレー、夜は obanzai] なんば駅から徒歩5分、Edion Arena Osaka の隣の小さな隠れ家の居酒屋で、昼と夜で顔が変わる。平日の昼は和の出汁のスパイスカレー。豆腐と花椒の黒い麻婆カレーが定番で、日替わりカレーは月曜と木曜に入れ替わる。おすすめは2種のあいがけで950円 (ご飯の大盛り無料)、揚げた野菜がたっぷりのる。色のわりにやさしい辛さで、安いという声が多い。店は、このあたりで1000円を超えるとお客さんが来ないと話したという。夜は obanzai (300円から)、鉄板焼き、gyoza、海老パン、炒飯のあるくつろげる居酒屋に。18時から19時は300円のハッピーアワー。金曜の夜は予約を。たばこが吸える。水曜休み。',
  });
}

save();
