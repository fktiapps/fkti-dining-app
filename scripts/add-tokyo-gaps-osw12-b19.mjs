// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 19.
//   + 海鮮・鮨 食べ放題 かに村 上野本店 Kanimura (crab and seafood buffet by Okachimachi; opened March 2025) — taken first by id
//   + 江戸天ぷら屋台 四文銭 Edo Tempura Yatai Yonmonsen (tempura-and-soba sake bar, same lot as Kanimura; opened 2020)
//   + クラフト バーガー&グリル ジロー Craft Burger & Grill Jiro (dog-friendly burger shop near Kappabashi; opened 2019)
//   + 角打ち割烹 CONBU Kaku Uchi Kappou CONBU (sake bar with kappō dishes in Yushima, to 3 am; opened December 2025)
// Undecided (no put, no skip): あさが家 13307245 and まつり屋 上野本店 13284227 (no shop count found).
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Kanimura: a brand of FANG DREAM
//   COMPANY (about 16 shops across many brands; Compalyze, Aug 2026), an affiliate of 銀座八芳 (OZmall, May 2025); the かに村
//   brand has this 上野本店 and a 銀座新橋店 (Gnavi; an October 2026 reviewer had visited the Shimbashi one) — 2 shops,
//   a sister concept to the group's 海鮮市場 八芳 上野店 already in data. Drafted per the coordinator.
//   CONBU: run by the Alvino group (Alvino, AJILLO …; Tabelog remarks) — a different brand, so a sister concept.
//   Yonmonsen, Jiro: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Kanimura (第一大島ビル) and Yonmonsen (大島6号館) share
//   the lot 上野3-28-6; their Tabelog points are 5 m apart and are kept, each 12 m from the GSI point.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ かに村 上野本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13306677/'; const R = TB + 'dtlrvwlst/';
  const OZ = 'https://news.livedoor.com/article/detail/28780050/'; const CZ = 'https://compalyze.co.jp/company/5010001157478';
  const D = day(['11:30', '22:00']);
  put({
    id: 'tokyo_kanimura_ueno', name: '海鮮・鮨 食べ放題 かに村 上野本店 (Kanimura)', category: 'OMNI',
    lat: 35.707587, lng: 139.773883, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: Tabelog\'s checklist marks gluten-free options, but no dish is named; the buffet mixes sushi with soy sauce, Chinese dishes, tempura, curry and desserts.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: Tabelog\'s checklist marks vegan and vegetarian options, but no dish is named; the buffet is built around crab, seafood, sushi and meat.',
    hours_raw: 'Daily 11:30–22:00, last entry 20:00; open all year; buffet at lunch too (Tabelog). Reservations taken; fully private rooms with doors carry a ¥3,000 room fee. Buffet runs 120 minutes. Children 4–12 half price, under 4 free. 160 seats; private rooms for 2 to 30+. Non-smoking (smoking area outside). Cards and QR (PayPay, Alipay, WeChat Pay); no e-money. Menus in English, Chinese and Korean; staff speak English, Chinese and Korean. Wheelchair accessible; free Wi-Fi. Opened 5 March 2025; renovated by October 2026.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 3-chōme, 第一大島ビル 1F — 1 min from JR Okachimachi North Exit and Exit A1 of Ueno-Hirokoji / Ueno-Okachimachi',
    cuisine: 'All-you-can-eat crab, seafood and sushi buffet from the group behind 銀座八芳 (OZmall, 2025) · October 2026: self-service buffet with drinks, ¥9,800 for 120 minutes (¥8,820 promotional price); a course with king crab ¥12,420 · snow crab, king crab grilled at the table, Shanghai and hairy crab in season, abalone, clams, turban shells, oysters, scallops, sashimi, Edo-style sushi and hand rolls, wagyu yakiniku grilled by staff at a central counter, Chinese dishes including Peking duck and xiaolongbao, curry, fruit, cream puffs and ice cream · beer, sake, wine, cocktails in the drink bar · at opening (March 2025) it was a tablet-ordered buffet from ¥5,980 (OZmall)',
    website: null, gmaps: gm('かに村 上野本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Seafood buffet · Okachimachi, all-you-can-eat crab by the station] A big, bright crab-and-seafood buffet a minute from Okachimachi Station, opened in 2025 by the group behind Ginza's 銀座八芳 seafood buffet. After a renovation it became a self-service spread: boiled snow crab and king crab to grill at your table, shellfish from the tank, sashimi and Edo-style sushi, wagyu that staff grill for you at a central counter, Chinese dishes such as Peking duck, and desserts down to Häagen-Dazs. It costs ¥9,800 for 120 minutes with drinks (¥8,820 on promotion in October 2026), more for a king-crab course; children are half price. Private rooms with doors suit groups. Reviewers in 2026 were mostly thrilled with the crab; one asked for a cheaper price for non-drinkers.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 March 2025 (Tabelog)', background: 'Run by FANG DREAM COMPANY, whose brands include 銀座八芳, 銀座七芳, 銀座芳亭, 孫二娘 and 魚でん (Compalyze, August 2026); OZmall (May 2025) calls it a 系列店 of 銀座八芳. A second かに村, the 銀座新橋店, is listed on Gnavi. No source names the cooks.', philosophy: null, specialty: 'Crab buffet; sushi.',
      anecdotes: [
        { text: '"The biggest change is that the previous table-ordering buffet style has been replaced with a self-service buffet" — October 2026, ¥9,800 for 120 minutes, ¥8,820 on promotion.', source: R + 'B508089994/' },
        { text: '"For the yakiniku, simply place your selected meat on a plate and take it to the central counter, where the staff will grill it for you." — October 2026.', source: R + 'B537126027/' },
        { text: '"It would be perfect if there were a slight discount for those who don\'t drink alcohol." — September 2026.', source: R + 'B536580425/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 海鮮・鮨 食べ放題 かに村 上野本店、上野3-28-6 第一大島ビル 1F、JR御徒町駅北口・上野広小路駅A1・上野御徒町駅A1から徒歩1分、毎日11:30〜22:00 (最終入店20:00)、年中無休、ランチもビュッフェ、予約可、個室料3,000円、4〜12歳は半額・4歳未満無料、160席、禁煙 (外に喫煙所)、カード・QR可、英語・中国語・韓国語のメニューとスタッフ、2025年3月5日オープン。OZmall (2025年5月): 銀座八芳の系列店、100品以上が5,980円から食べ放題、タブレット注文。Compalyze (2026年8月): FANG DREAM COMPANY、都内と千葉で16店舗、銀座八芳、銀座七芳、銀座芳亭、孫二娘、魚でんなど。口コミ (2026年9〜10月): 改装でセルフのビュッフェに、120分9,800円 (キャンペーン8,820円)、タラバガニのコース12,420円、ズワイガニ、タラバガニ、上海蟹、毛ガニ、アワビ、貝、寿司、スタッフが焼く和牛の焼肉、北京ダック、ハーゲンダッツ、お酒を飲まない人向けの割引がほしいという声も。',
      confidence: 'medium', sources: [TB, OZ, CZ, R + 'B508089994/', R + 'B536482900/', R + 'B536580425/', R + 'B537126027/', R + 'B537372236/', R + 'B537455097/', R + 'B537711971/', R + 'B538183934/', R + 'B538473411/', R + 'B538497553/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean and staff speaking those languages; self-service buffet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野3-28-6 第一大島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野三丁目28番6号 (go) 13m; same lot as Yonmonsen (tokyo_edo_tempura_yonmonsen_ueno, 大島6号館), 5 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B508089994/', R + 'B538183934/'],
    price_note: 'Prices from October 2026 reviews (after the renovation); children 4–12 half price.', last_checked: TODAY, items: [
      it('', '', 'Buffet with all-you-can-drink, 120 minutes', '¥9,800', 'Buffet', 'ask', 'ask', 'October 2026; ¥8,820 promotional price.', 'buffet'),
      it('', '', 'King crab course', '¥12,420', 'Buffet', 'ask', 'no', 'October 2026.', 'king_crab_course'),
    ] }, {
    cuisine: '銀座八芳のグループによる、カニ、海鮮、寿司の食べ放題 (OZmall、2025年)・2026年10月: ドリンク付きのセルフビュッフェ120分9,800円 (キャンペーン価格8,820円)、タラバガニのコース12,420円・ズワイガニ、テーブルで焼くタラバガニ、季節の上海蟹と毛ガニ、アワビ、ハマグリ、サザエ、カキ、ホタテ、刺身、江戸前寿司と手巻き、中央のカウンターでスタッフが焼く和牛の焼肉、北京ダックや小籠包などの中華、カレー、フルーツ、シュークリームとアイス・ドリンクバーにビール、日本酒、ワイン、カクテル・開店時 (2025年3月) はタブレット注文のビュッフェで5,980円から (OZmall)',
    neighborhood: '上野三丁目、第一大島ビル 1F。JR御徒町駅北口、上野広小路駅・上野御徒町駅A1出口から徒歩1分',
    gf_detail: 'グルテンフリーは要確認。食べログのチェック項目ではグルテンフリーの選択肢ありとされていますが、料理名はなく、醤油で食べる寿司、中華、天ぷら、カレー、デザートが同じビュッフェに並びます。',
    vegan_detail: 'ヴィーガンは要確認。食べログのチェック項目ではヴィーガン・ベジタリアンの選択肢ありとされていますが、料理名はなく、カニ、海鮮、寿司、肉が中心のビュッフェです。',
    notes: '[海鮮ビュッフェ・御徒町、駅前のカニ食べ放題] 御徒町駅から1分の広く明るいカニと海鮮のビュッフェで、銀座の海鮮ビュッフェ「銀座八芳」のグループが2025年に開店。改装後はセルフサービスになり、ゆでたズワイガニやテーブルで焼くタラバガニ、水槽の貝、刺身や江戸前寿司、中央のカウンターでスタッフが焼いてくれる和牛、北京ダックなどの中華、ハーゲンダッツまで。ドリンク付き120分で9,800円 (2026年10月はキャンペーンで8,820円)、タラバガニのコースはさらに上。子どもは半額。扉付きの個室はグループ向け。2026年の口コミはカニに大満足という声が多く、お酒を飲まない人向けの値引きがほしいという声も。',
  });
}

// ================================================================ 江戸天ぷら屋台 四文銭
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13250472/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '22:30']); const S = day(['12:00', '22:00']);
  put({
    id: 'tokyo_edo_tempura_yonmonsen_ueno', name: '江戸天ぷら屋台 四文銭 (Edo Tempura Yatai Yonmonsen)', category: 'OMNI',
    lat: 35.707627, lng: 139.773854, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in wheat batter; the soba is described as 100% buckwheat (May 2026), but the dipping sauce and cooking are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood tempura, sashimi, eel, sushi; the sauces for vegetable tempura and soba are not described.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat, the day before and after a holiday 12:00–22:30 (last order 22:00); Sun and holidays 12:00–22:00 (last order 21:30); closed Wednesdays (Tabelog). Reopened in February 2026 after a renovation (March 2026 review); a June 2026 diner thought the owner had changed, with QR ordering and cashless payment now. Reservations taken (through Tabelog, per a June 2026 review); often full in the evening. No appetizer or seat charge. 14 seats (4 at the counter, tables for 2 and 4). Heated-tobacco smoking seats only. Cards, e-money and QR. Opened 1 October 2020.',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 3-chōme, 大島6号館 — 1 min from JR Okachimachi; 2 min from Ueno-Okachimachi',
    cuisine: 'Casual sake bar for Edo-style tempura, creative Japanese small plates and 100% buckwheat soba (Tabelog; reviews) · tempura by the piece (Tabelog menu, October 2026): shiso, shishito, pumpkin, lotus root ¥90; eggplant, nagaimo ¥180; maitake, myoga, soft-boiled egg ¥280; squid, whiting, white fish, Camembert ¥300; shrimp, seaweed with mentaiko ¥400; vegetable assortment ¥530; seafood assortment ¥980; deluxe assortment ¥1,980 (June 2026) · sashimi such as sea bream and bluefin tuna; kombu-cured sea bream nigiri ¥460; eel ¥980; grilled eel-liver skewers; fresh maki rolls; myoga and cucumber with kombu salt ¥590 · sake',
    website: null, gmaps: gm('江戸天ぷら屋台 四文銭 上野3-28-6'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura · Okachimachi, Edo-style tempura bar by the station] A small, casual sake bar a minute from Okachimachi Station that fries tempura to order by the piece — vegetables from ¥90, shrimp ¥400, a seafood plate ¥980 — and finishes with 100% buckwheat soba. Around it are sashimi, kombu-cured sea bream, eel and grilled eel-liver skewers, with sake. It reopened in February 2026 after a renovation, now with QR ordering and cashless payment; some old favourites like curry soba and whale sashimi have gone. No appetizer charge, and evenings are often full, so book. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2020 (Tabelog); reopened February 2026 after a renovation (March 2026 review).', background: 'A June 2026 review says the owner seems to have changed; a June 2026 visitor describes an owner dedicated to carefully selected ingredients. No source names the owner.', philosophy: null, specialty: 'Tempura by the piece; 100% buckwheat soba.',
      anecdotes: [
        { text: '"A top-notch Edo-style food stall serving freshly fried summer vegetable tempura and 100% buckwheat soba to finish off." — June 2026.', source: R + 'B530563193/' },
        { text: '"The menu has changed slightly, and I was disappointed that my favorite whale sashimi was no longer available. However, the sea bream sashimi was delicious" — March 2026, after the February reopening.', source: R + 'B523487841/' },
        { text: '"The soba and grilled eel liver skewers are must-haves, but I also tried the maki rolls" — October 2026.', source: R + 'B454502211/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 江戸天ぷら屋台 四文銭、上野3-28-6 大島6号館、JR御徒町駅から徒歩1分、上野御徒町駅から2分、月火木金土・祝前日・祝後日12:00〜22:30 (L.O.22:00)、日祝12:00〜22:00 (L.O.21:30)、水曜休み、予約可、お通し・席料なし、14席、加熱式たばこの席のみ喫煙可、カード・電子マネー・QR可、2020年10月1日オープン、天ぷらと創作和食の大衆酒場。メニュー (2026年10月): 天ぷら1品90円から、しそ・ししとう・かぼちゃ・れんこん90円、海老400円、野菜盛り530円、海鮮盛り980円。口コミ (2025年3月〜2026年10月): 2026年2月に改装して再開、QRコード注文とキャッシュレス、店主が替わったようだという声、十割そば、うなぎの肝串、巻き寿司、上天ぷら盛り合わせ1,980円、昆布締めの鯛の握り460円、カレーそばやくじらの刺身はなくなった。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B446088513/', R + 'B454502211/', R + 'B460771109/', R + 'B523487841/', R + 'B528036531/', R + 'B529522995/', R + 'B530563193/', R + 'B530991027/', R + 'B533291635/', R + 'B533453484/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; small counter bar.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野3-28-6 大島6号館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野三丁目28番6号 (go) 12m; same lot as Kanimura (tokyo_kanimura_ueno, 第一大島ビル), 5 m apart; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B529522995/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included); deluxe assortment from June 2026.', last_checked: TODAY, items: [
      it('', '', 'Vegetable tempura (shiso, shishito, pumpkin or lotus root), each', '¥90', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026.', 'veg_tempura'),
      it('', '', 'Shrimp tempura', '¥400', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026.', 'ebi_tempura'),
      it('', '', 'Assorted vegetable tempura', '¥530', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026.', 'veg_assort'),
      it('', '', 'Assorted seafood tempura (shrimp, whiting, squid)', '¥980', 'Tempura', 'no', 'no', 'Tabelog menu October 2026; June 2026.', 'seafood_assort'),
      it('', '', 'Deluxe assorted tempura', '¥1,980', 'Tempura', 'no', 'no', 'June 2026.', 'jo_tempura'),
      it('', '', 'Kombu-cured sea bream nigiri', '¥460', 'Small plates', 'ask', 'no', 'June 2026.', 'kobujime_tai'),
    ] }, {
    cuisine: '江戸前の天ぷら、創作和食の小皿、十割そばの気軽な酒場 (食べログ、口コミ)・天ぷらは1品から (食べログのメニュー、2026年10月): しそ、ししとう、かぼちゃ、れんこん90円、なす、長芋180円、まいたけ、みょうが、半熟卵280円、いか、きす、白身魚、カマンベール300円、海老、のりと明太子400円、野菜盛り530円、海鮮盛り980円、上天ぷら盛り合わせ1,980円 (2026年6月)・鯛やまぐろの刺身、昆布締めの鯛の握り460円、うなぎ980円、うなぎの肝串、巻き寿司、みょうがときゅうりの昆布塩590円・日本酒',
    neighborhood: '上野三丁目、大島6号館。JR御徒町駅から徒歩1分、上野御徒町駅から2分',
    gf_detail: 'グルテンフリーではありません。天ぷらは小麦の衣。そばは十割 (2026年5月) とのことですが、つゆや調理の説明はありません。',
    vegan_detail: 'ヴィーガンではありません。海鮮の天ぷら、刺身、うなぎ、寿司。野菜の天ぷらやそばのつゆの説明はありません。',
    notes: '[天ぷら・御徒町、駅前の江戸前天ぷらの酒場] 御徒町駅から1分の小さく気軽な酒場で、天ぷらを1品ずつ揚げたてで: 野菜90円から、海老400円、海鮮盛り980円。締めは十割そば。刺身、昆布締めの鯛、うなぎ、うなぎの肝串、日本酒も。2026年2月に改装して再開し、QRコード注文とキャッシュレスに。カレーそばやくじらの刺身などはなくなりました。お通しなし、夜は満席が多いので予約を。水曜休み。',
  });
}

// ================================================================ クラフト バーガー&グリル ジロー
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13244289/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://craftburgerjiro.com/';
  const W = day(['11:00', '15:30'], ['18:00', '22:00']); const E = day(['11:00', '16:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_craft_burger_jiro_matsugaya', name: 'クラフト バーガー&グリル ジロー (Craft Burger & Grill Jiro)', category: 'OMNI',
    lat: 35.715096, lng: 139.785568, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: burgers on buns with fries; a rice burger (¥1,380) replaces the bun, but the patty seasoning and fryer are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: 100% beef patties, chicken and pork cutlet, fish burgers; no vegan burger is listed.',
    hours_raw: 'Tue–Fri 11:00–15:30 (last order 15:00) and 18:00–22:00 (last order 21:30); Sat–Sun 11:00–16:00 (last order 15:45) and 18:00–22:00; closed Mondays (Tuesday if Monday is a holiday) (Tabelog). Reservations taken; advisable at weekend lunch. Pets welcome inside, with a dog menu (roast beef for dogs ¥450, June 2026); carts allowed. 15 seats (5 at the counter, 8 at tables, 2 on the terrace). Non-smoking. Cards, e-money and QR. English menu. Kids\' menu. Points app with monthly coupons (July 2026). Opened 13 December 2019.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsugaya 2-chōme, on Kappabashi Hon-dōri — 10 min from Inaricho or Iriya',
    cuisine: 'Craft beef burgers of 100% beef with a spice blend, plus izakaya-style plates and craft beer (Tabelog; reviews) · menu (Tabelog, November 2024): hamburger or cheeseburger ¥1,200, avocado cheese, bacon cheese ¥1,380, blue cheese, salsa cheese ¥1,300, Edo Senju negi burger ¥1,380, greedy burger ¥1,680, rice burger ¥1,380, chicken katsu ¥1,200, kids\' burger ¥600; toppings from ¥100 · burgers come with fries and a mini salad; drink +¥150 at lunch · 2026 reviews: wagyu Senju negi burger, teriyaki burger, fish and chips, carrot râpé, grilled chashu, Yona Yona Ale',
    website: WS, gmaps: gm('クラフトバーガー&グリル ジロー 松が谷2-31-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Burgers · Kappabashi, a dog-friendly craft burger bar] A small burger shop on Kappabashi Hon-dōri, a short walk from the kitchenware street, open since 2019 and happy to seat your dog — there is even roast beef on a dog menu. The burgers are thick 100% beef patties on a menu of about fifteen, from a ¥1,200 hamburger to the green-onion Edo Senju negi burger and the stacked greedy burger, each with fries and a mini salad; add a drink at lunch for ¥150. In the evening one frequent visitor treats it as a bar, with craft beer, fish and chips and grilled chashu. Reviewers find the prices fair for craft burgers. It is about ten minutes from the nearest stations; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 December 2019 (Tabelog)', background: 'Tabelog official listing; per a September 2026 review, the owner loves dogs. No source names the owner.', philosophy: null, specialty: 'Craft beef burgers; Edo Senju negi burger.',
      anecdotes: [
        { text: '"The patty was thick and delicious, providing a satisfying bite." — March 2026, Saturday lunch.', source: R + 'B524867587/' },
        { text: '"The texture and aroma of the green onion paired perfectly with the Wagyu hamburger." — September 2026, wagyu and green-onion burger.', source: R + 'B535664474/' },
        { text: '"I thought the Blue Cheese Burger could use a bit more cheese, but it was delicious." — September 2026, ¥1,300.', source: R + 'B536114776/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): クラフト バーガー&グリル ジロー、松が谷2-31-7、稲荷町駅・入谷駅から徒歩10分、火〜金11:00〜15:30・18:00〜22:00、土日11:00〜16:00・18:00〜22:00、月曜休み (祝日なら火曜)、予約可、ペット可、15席 (カウンター5、テーブル8、テラス2)、禁煙、カード・電子マネー・QR可、英語のメニュー、子どもメニュー、2019年12月13日オープン、牛肉100%のパティ、江戸千住ねぎバーガー、グリーディバーガー。メニュー (2024年11月): ハンバーガー1,200円、アボカドチーズ1,380円、ブルーチーズ1,300円、江戸千住ねぎバーガー1,380円、グリーディバーガー1,680円、ライスバーガー1,380円、キッズバーガー600円。口コミ (2026年3〜10月): ポテトとミニサラダ付き、ランチのドリンク+150円、犬用のローストビーフ450円、アプリのクーポン、夜は居酒屋使い、和牛の千住ねぎバーガー、照り焼きバーガー、店主は犬好き。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B499551903/', R + 'B516540251/', R + 'B524867587/', R + 'B527450399/', R + 'B531727721/', R + 'B532480023/', R + 'B535664474/', R + 'B536114776/', R + 'B536396686/', R + 'B537258906/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; illustrated menu (March 2026); dogs welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区松が谷2-31-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区松が谷二丁目31番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B527450399/', R + 'B536114776/'],
    price_note: 'Prices from the Tabelog menu (updated November 2024, tax included); confirmed by 2026 reviews (hamburger ¥1,200 in May 2026).', last_checked: TODAY, items: [
      it('', '', 'Hamburger with fries and mini salad', '¥1,200', 'Burgers', 'no', 'no', 'Tabelog menu 2024; May 2026.', 'hamburger'),
      it('', '', 'Avocado cheese burger', '¥1,380', 'Burgers', 'no', 'no', 'Tabelog menu 2024; September 2026.', 'avocado_cheese'),
      it('', '', 'Blue cheese burger', '¥1,300', 'Burgers', 'no', 'no', 'Tabelog menu 2024; September 2026.', 'blue_cheese'),
      it('', '', 'Edo Senju negi burger', '¥1,380', 'Burgers', 'no', 'no', 'Tabelog menu, November 2024.', 'senju_negi'),
      it('', '', 'Rice burger', '¥1,380', 'Burgers', 'ask', 'no', 'Tabelog menu, November 2024.', 'rice_burger'),
      it('', '', 'Kids\' burger', '¥600', 'Burgers', 'no', 'no', 'Tabelog menu, November 2024.', 'kids_burger'),
    ] }, {
    cuisine: 'スパイスを合わせた牛肉100%のパティのクラフトバーガーに、居酒屋風の一品とクラフトビール (食べログ、口コミ)・メニュー (食べログ、2024年11月): ハンバーガー・チーズバーガー1,200円、アボカドチーズ・ベーコンチーズ1,380円、ブルーチーズ・サルサチーズ1,300円、江戸千住ねぎバーガー1,380円、グリーディバーガー1,680円、ライスバーガー1,380円、チキンカツ1,200円、キッズバーガー600円、トッピング100円から・バーガーにはポテトとミニサラダ付き、ランチはドリンク+150円・2026年の口コミ: 和牛の千住ねぎバーガー、照り焼きバーガー、フィッシュ&チップス、キャロットラペ、焼きチャーシュー、よなよなエール',
    neighborhood: '松が谷二丁目、かっぱ橋本通り沿い。稲荷町駅・入谷駅から徒歩10分',
    gf_detail: 'グルテンフリーは要確認。バンズのバーガーにポテト。パンの代わりのライスバーガー (1,380円) もありますが、パティの味付けや揚げ油の説明はありません。',
    vegan_detail: 'ヴィーガンではありません。牛肉100%のパティ、チキンカツ、豚カツ、魚のバーガー。ヴィーガンのバーガーはありません。',
    notes: '[ハンバーガー・かっぱ橋、犬と一緒に入れるクラフトバーガー] かっぱ橋道具街から少し歩いたかっぱ橋本通りにある小さなバーガーショップで2019年から。犬も一緒に座れて、犬用メニューにローストビーフまで。バーガーは牛肉100%の厚いパティで約15種、1,200円のハンバーガーから、ねぎたっぷりの江戸千住ねぎバーガー、積み上げたグリーディバーガーまで、どれもポテトとミニサラダ付き。ランチはドリンク+150円。夜はクラフトビール、フィッシュ&チップス、焼きチャーシューでバーのように使う人も。口コミではクラフトバーガーとしては良心的な値段という声。最寄り駅からは約10分、月曜休み。',
  });
}

// ================================================================ 角打ち割烹 CONBU
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13315629/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://www.alvino.jp/';
  const W = day(['17:00', '03:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'tokyo_kakuuchi_kappo_conbu_yushima', name: '角打ち割烹 CONBU (Kaku Uchi Kappou CONBU)', category: 'OMNI',
    lat: 35.708805, lng: 139.771469, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: dishes are built on kombu and shellfish dashi with miso and soy-based seasonings (dote-ni), and the menu includes croquettes, spring rolls and udon; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi includes shellfish, and the signatures are pork dote-ni, seafood yukhoe and oysters; small vegetable plates are not described.',
    hours_raw: 'Tue–Sat, holidays and the days before and after 17:00–3:00 (last order food 2:00, drinks 2:30); Sun 17:00–23:00; closed Mondays (Tuesday if Monday is a holiday) (Tabelog). Reservations recommended — often fully booked (2026 reviews); private hire up to 20; standing groups of up to 5 by arrangement. Cover charge ¥500. 16 places: 6 at the counter, two tables for two and 6 standing outside. Smoking allowed. Cards, e-money and QR. Two staff run it (October 2026). Opened 12 December 2025.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), 阿部ビル 1F, a quiet alley — 3 min from Exit A3 of Ueno-Hirokoji / Ueno-Okachimachi / Naka-Okachimachi; 3 min from Yushima',
    cuisine: 'Standing-bar-meets-kappō: retro sake bar with kombu- and shellfish-dashi cooking, 10–15 sakes that change weekly, served on Arita and Kutani ware (Tabelog; September 2026 review) · signatures: Kantō-style dote-ni of pork in a special miso, seafood yukhoe, shellfish soup with rice, miso cream udon (2026 reviews) · menu (Tabelog, December 2025): fresh oyster and seaweed spring roll ¥700, snow-crab miso cream croquette ¥650, yamato-imo tororo hot pot ¥1,300, three seasonal obanzai ¥600, CONBU salad ¥400, white liver stewed in plum wine ¥900, charred chicken with wasabi ¥800, kappa maki ¥650 · course with sake recommended for sake lovers (October 2026)',
    website: WS, gmaps: gm('角打ち割烹 CONBU 湯島3-43-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · Yushima, retro standing-bar kappō until 3 am] A tiny, retro sake bar in a quiet Yushima alley, opened in December 2025 by the team behind the Italian bar Alvino, pairing kappō-style dishes with a weekly-changing list of 10–15 sakes. Sit at the six-seat counter or stand outside with a glass. The dish everyone talks about is the dote-ni, pork simmered in a special miso until it rivals braised pork; seafood yukhoe, miso cream udon and a shellfish rice soup are close behind, served on Arita and Kutani ware. Staff explain the sakes well. It is small and popular, so book; at busy times food and drinks can be slow. Smoking is allowed, ¥500 cover; open to 3 am except Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 December 2025 (Tabelog)', background: 'Per the Tabelog remarks, run by the group behind Alvino and AJILLO; two staff run the room (October 2026). No source names the cooks.', philosophy: 'Per a September 2026 review, the concept is "sake calls for side dishes, and people call for flavor."', specialty: 'Dote-ni; sake.',
      anecdotes: [
        { text: '"The Dote-ni, in particular, was the best I\'ve ever had at an izakaya." — October 2026.', source: R + 'B537687648/' },
        { text: '"The staff were also very attentive and provided thorough explanations." — September 2026, sake.', source: R + 'B534927535/' },
        { text: '"However, because of its popularity, it takes some time for the drinks and food to be served, so it\'s important to order early at this izakaya." — October 2026.', source: R + 'B538404846/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 角打ち割烹 CONBU、文京区湯島3-43-11 阿部ビル 1F、湯島駅、上野広小路・上野御徒町・仲御徒町駅A3出口から徒歩3分、火〜土・祝・祝前日・祝後日17:00〜翌3:00 (料理L.O.2:00、ドリンクL.O.2:30)、日17:00〜23:00、月曜休み、予約可、お通し500円、16席 (カウンター6、2人テーブル2、外の立ち飲み6)、喫煙可、カード・電子マネー・QR可、2025年12月12日オープン、Alvino、AJILLO などの系列。メニュー (2025年12月): 生ガキと海苔の春巻き700円、ズワイガニのカニ味噌クリームコロッケ650円、大和芋のとろろ鍋1,300円、おばんざい3種600円、白レバーの梅酒煮900円。口コミ (2026年8〜10月): 名物の土手煮、海鮮ユッケ、貝の雑炊、味噌クリームうどん、毎週替わる10〜15種の日本酒、有田焼と九谷焼の器、予約が取りにくい、スタッフ2人、混むと提供に時間がかかる。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B534927535/', R + 'B535125888/', R + 'B535848110/', R + 'B536651269/', R + 'B536893366/', R + 'B537042527/', R + 'B537406386/', R + 'B537687648/', R + 'B538324657/', R + 'B538404846/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help choose sake; small and often full; smoking allowed; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-43-11 阿部ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目43番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated December 2025, tax included); ¥500 cover.', last_checked: TODAY, items: [
      it('', '', 'Fresh oyster and seaweed spring roll', '¥700', 'Small plates', 'no', 'no', 'Tabelog menu, December 2025.', 'oyster_harumaki'),
      it('', '', 'Snow-crab miso cream croquette', '¥650', 'Small plates', 'no', 'no', 'Tabelog menu, December 2025.', 'kani_croquette'),
      it('', '', 'Three seasonal obanzai', '¥600', 'Small plates', 'ask', 'ask', 'Tabelog menu, December 2025.', 'obanzai3'),
      it('', '', 'White liver stewed in plum wine', '¥900', 'Small plates', 'ask', 'no', 'Tabelog menu, December 2025.', 'shiro_reba'),
      it('', '', 'Yamato-imo tororo hot pot', '¥1,300', 'Hot pot', 'ask', 'no', 'Tabelog menu, December 2025.', 'tororo_nabe'),
    ] }, {
    cuisine: '角打ちと割烹の組み合わせ: 昆布と貝のだしの料理と毎週替わる10〜15種の日本酒、有田焼や九谷焼の器のレトロな酒場 (食べログ、2026年9月の口コミ)・名物: 特製味噌で煮込んだ関東風の豚の土手煮、海鮮ユッケ、貝の雑炊、味噌クリームうどん (2026年の口コミ)・メニュー (食べログ、2025年12月): 生ガキと海苔の春巻き700円、ズワイガニのカニ味噌クリームコロッケ650円、大和芋のとろろ鍋1,300円、季節のおばんざい3種600円、CONBUサラダ400円、白レバーの梅酒煮900円、鶏のたたきわさび800円、かっぱ巻き650円・日本酒好きにはコースがおすすめ (2026年10月)',
    neighborhood: '湯島三丁目 (文京区)、阿部ビル 1F、静かな路地。上野広小路・上野御徒町・仲御徒町駅A3出口から徒歩3分、湯島駅から3分',
    gf_detail: 'グルテンフリーは要確認。昆布と貝のだしに、味噌や醤油の味付け (土手煮)。コロッケ、春巻き、うどんもあり、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。だしに貝を使い、名物は豚の土手煮、海鮮ユッケ、カキ。野菜の小皿の説明はありません。',
    notes: '[日本酒バー・湯島、朝3時までのレトロな角打ち割烹] 湯島の静かな路地にある小さくレトロな日本酒の店で、イタリアンバル Alvino のチームが2025年12月に開店。割烹風の料理に、毎週替わる10〜15種の日本酒を合わせます。6席のカウンターか、外でグラス片手に立ち飲みも。みんなが話題にするのは、特製味噌で角煮に負けないほど煮込んだ豚の土手煮。海鮮ユッケ、味噌クリームうどん、貝の雑炊が続き、有田焼や九谷焼の器で。スタッフの日本酒の説明が丁寧。小さく人気なので予約を。混むと料理や飲み物に時間がかかることも。喫煙可、お通し500円、日曜以外は朝3時まで。',
  });
}

save();
