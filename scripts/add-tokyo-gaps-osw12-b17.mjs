// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 17.
//   + ミルクスタンド 御徒町店 Milk Stand (大沢牛乳's standing milk bar at the JR Okachimachi North gate)
//   + タイスカイキッチン Thai Sky Kitchen (second-floor Thai restaurant on Nakachō-dōri, Ueno)
//   + バトン BATON (pudding shop and pancake café between Shin-Okachimachi and Inaricho; opened 2017)
//   + ほてい Hotei (izakaya near Iriya since 1976; monkfish hot pot in winter, set-meal lunches)
// Skipped (see skip()): 旭川味噌ラーメン ばんから 上野店 13219596 (national chain).
// Undecided (no put, no skip): 横濱ラーメン あさが家 上野店 13307245 (no count found, per batch 16);
//   まつり屋 上野本店 13284227 — "本店" in the name, but only the Ueno shop found and no shop count.
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Milk Stand: run by 大沢牛乳, whose
//   stands are at JR Akihabara and Okachimachi stations (乗りものニュース, 6 March 2023) — a small group, drafted.
//   Thai Sky Kitchen: a Tabelog notice signs off "Thai Sky Kitchen (Ueno & Okachimachi)"; no other shop found — flag.
//   BATON (operator エコロジーファーム), Hotei: one shop each.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13219596', 'national chain: 旭川味噌ラーメン ばんから (Bankara); this is the 上野店.');

// ================================================================ ミルクスタンド 御徒町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13132155/'; const R = TB + 'dtlrvwlst/';
  const TN = 'https://trafficnews.jp/post/124698';
  put({
    id: 'tokyo_milk_stand_okachimachi', name: 'ミルクスタンド 御徒町店 (Milk Stand)', category: 'OMNI',
    lat: 35.707814, lng: 139.774835, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: plain bottled milks have no wheat, but flavoured milks, coffee milk and drinking yogurt are not described, and there is no gluten-free statement.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a milk bar — cow\'s milk, coffee milk and drinking yogurt.',
    hours_raw: 'Mon–Thu 11:25–14:40; Fri 11:25–13:40; Sat–Sun 9:45–18:00; closed public holidays (Tabelog; same hours quoted in an October 2025 review). A June 2026 visitor says it usually opens at noon and is often closed when passing. A standing counter (4 spaces) right outside the JR Okachimachi North Exit ticket gate. Drink on the spot and return the bottle. No cards; e-money accepted. Hot milk in the cold months.',
    hours: { 0: day(['11:25', '14:40']), 1: day(['11:25', '14:40']), 2: day(['11:25', '14:40']), 3: day(['11:25', '14:40']), 4: day(['11:25', '13:40']), 5: day(['09:45', '18:00']), 6: day(['09:45', '18:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 5-chōme, in front of the JR Okachimachi North Exit ticket gate (outside the gate)',
    cuisine: 'Standing milk bar for regional Japanese milks in glass bottles (Tabelog; reviews) · e.g. Meito Azumino milk ¥180 (August 2024), Kazusa milk served warm ¥160 (March 2026), Sunflower (ひまわり) milk from Kōchi, pasteurized coffee milk, drinking yogurt, daily recommendations · the operator stocks milks from about 15 dairies across Japan, such as 酪王牛乳 (Fukushima), かずさ牛乳 (Chiba), 飛騨牛乳 (Gifu) and ひまわり牛乳 (Kōchi) (乗りものニュース, 2023)',
    website: null, gmaps: gm('ミルクスタンド 御徒町駅'), menu_url: null,
    notes: "[Milk bar · Okachimachi Station, regional milk at the ticket gate] A tiny standing milk counter right outside the North Exit gate of JR Okachimachi Station, run by 大沢牛乳, the dairy dealer behind the famous milk stand on Akihabara's Sōbu Line platform. It sells bottled local milks from across Japan — Kazusa, Azumino, Sunflower milk from Kōchi — plus coffee milk and drinking yogurt for under ¥200; you drink on the spot and hand back the bottle, and in winter the milk can be warmed. Tourists sometimes stop to watch (September 2026). Hours are short and odd on weekdays (roughly 11:25 to 14:40, shorter on Fridays) and longer at weekends; closed on holidays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Run by 大沢牛乳 (president 大沢一彦), which also runs the ミルクショップ酪 milk stand on the JR Akihabara Sōbu Line platform; from around 2000 it began stocking regional milks, now from about 15 dairies; the Okachimachi stand is popular with tourists from China and Korea (乗りものニュース, 6 March 2023).', philosophy: null, specialty: 'Regional bottled milk; coffee milk.',
      anecdotes: [
        { text: '"I enjoyed the limited edition Kazusa Milk for JPY 160, which was warmed in hot water." — March 2026.', source: R + 'B494438687/' },
        { text: '"You drink it on the spot and return the bottle afterward." — September 2026, drinking yogurt.', source: R + 'B535476035/' },
        { text: '"It\'s outside the ticket gate, and the hours are super tight (and quite specific too, haha)!" — October 2025.', source: R + 'B516027120/' },
      ],
      japanese_sources_summary: '食べログ: ミルクスタンド 御徒町店、上野5 JR御徒町駅北口改札前、月〜木11:25〜14:40、金11:25〜13:40、土日9:45〜18:00、祝日休み、予約不可、立ち飲みカウンター4席、禁煙、カード不可・電子マネー可。乗りものニュース (2023年3月6日、古橋龍一): 秋葉原駅総武線ホームの「ミルクショップ酪」を運営する大沢牛乳、社長の大沢一彦さん、2000年頃からご当地牛乳を扱い、全国15社ほどのメーカーの牛乳 (福島の酪王牛乳、千葉のかずさ牛乳、岐阜の飛騨牛乳、高知のひまわり牛乳)、御徒町駅の大沢牛乳のミルクスタンドは中国・韓国の観光客に人気。口コミ (2024年8月〜2026年9月): 安曇野の牛乳180円、温めたかずさ牛乳160円、ひまわり牛乳、低温殺菌のコーヒー牛乳、飲むヨーグルト、その場で飲んで瓶を返す、昼ごろ開くことが多い。',
      confidence: 'medium', sources: [TB, TN, R + 'B490984431/', R + 'B491046194/', R + 'B494438687/', R + 'B504087566/', R + 'B513027622/', R + 'B516027120/', R + 'B516395458/', R + 'B516869548/', R + 'B521752302/', R + 'B535476035/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the bottle on the menu board; staff open it for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '東京都台東区上野5 JR御徒町駅北口改札前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves 東京都台東区上野5 only to the chōme (no lot number given), so the Tabelog point at the North Exit gate is used, not precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491046194/', R + 'B494438687/'],
    price_note: 'Prices from reviews; the range changes daily.', last_checked: TODAY, items: [
      it('', '', 'Meito Azumino milk', '¥180', 'Milk', 'ask', 'no', 'August 2024.', 'azumino_milk'),
      it('', '', 'Kazusa milk (warm)', '¥160', 'Milk', 'ask', 'no', 'March 2026.', 'kazusa_milk'),
    ] }, {
    cuisine: '全国のご当地牛乳を瓶で飲む立ち飲みのミルクスタンド (食べログ、口コミ)・たとえば名糖の安曇野の牛乳180円 (2024年8月)、温めたかずさ牛乳160円 (2026年3月)、高知のひまわり牛乳、低温殺菌のコーヒー牛乳、飲むヨーグルト、日替わりのおすすめ・運営会社は全国約15社の牛乳を扱い、福島の酪王牛乳、千葉のかずさ牛乳、岐阜の飛騨牛乳、高知のひまわり牛乳など (乗りものニュース、2023年)',
    neighborhood: '上野五丁目、JR御徒町駅北口改札の前 (改札外)',
    gf_detail: 'グルテンフリーは要確認。牛乳そのものに小麦はありませんが、フレーバー牛乳、コーヒー牛乳、飲むヨーグルトの説明はなく、グルテンフリーの表示もありません。',
    vegan_detail: 'ヴィーガンではありません。牛乳、コーヒー牛乳、飲むヨーグルトの店。',
    notes: '[ミルクスタンド・御徒町駅、改札前のご当地牛乳] JR御徒町駅北口改札のすぐ外にある小さな立ち飲みの牛乳カウンターで、秋葉原駅総武線ホームの有名なミルクスタンドと同じ大沢牛乳が運営。かずさ、安曇野、高知のひまわりなど全国のご当地牛乳を瓶で、コーヒー牛乳や飲むヨーグルトも200円以下。その場で飲んで瓶を返し、冬は温めてもらえます。海外からの旅行者が興味深そうに見ていくことも (2026年9月)。平日は短く変わった営業時間 (おおむね11:25〜14:40、金曜はさらに短い)、週末は長め、祝日休み。',
  });
}

// ================================================================ タイスカイキッチン
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13288297/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_thai_sky_kitchen_ueno', name: 'タイスカイキッチン (Thai Sky Kitchen)', category: 'OMNI',
    lat: 35.709206, lng: 139.771606, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: rice-based Thai dishes, but stir-fries use oyster and soy sauce and there are fried spring rolls and wontons; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: stir-fried water spinach and other vegetable dishes are on the menu, but those are seasoned with oyster sauce, and no vegan dish is named.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–22:30 (last order 22:00) (Tabelog). Weekday lunch sets only; weekends and holidays serve the regular menu all day (Tabelog notice; July 2026). Reservations taken; fully booked by early afternoon on an October 2026 Saturday. Some dishes unavailable on a July 2026 evening. 20 seats. Non-smoking. Cards, e-money and QR. English menu and English-speaking staff. Take-out and delivery.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, 堺屋 2F, a corner building on Nakachō-dōri — 2 min from Ueno-Okachimachi and Ueno-Hirokoji; 5 min from JR Ueno and Okachimachi',
    cuisine: 'Thai cooking by a chef from Bangkok, per the listing (Tabelog) · menu (Tabelog, January 2025): gai tod fried chicken thigh with garlic ¥1,480, soft-shell crab curry stir-fry ¥1,800, beef tom sep soup ¥1,780, pork-cartilage tom sep ¥1,580, seafood chilli-paste stir-fry ¥1,550, stir-fried water spinach ¥1,350, fresh spring rolls ¥1,050, shrimp spring rolls ¥1,250, fish cakes ¥1,380, nam sausage ¥1,350 · 2026 reviews: massaman curry ¥1,280, gapao rice, green curry, yum woon sen, coconut soup, seafood soup about ¥1,850, jasmine rice, coconut dessert, Singha beer',
    website: null, gmaps: gm('タイスカイキッチン 上野2-12-11'), menu_url: TB + 'dtlmenu/',
    notes: "[Thai · Ueno, a bright Thai dining room above Nakachō-dōri] A second-floor Thai restaurant on a corner of Ueno's Nakachō-dōri, with big windows that make it bright and resort-like at lunch. The kitchen, led by a chef from Bangkok per the listing, covers the classics — gapao rice, green and massaman curries (¥1,280), yum woon sen, coconut soup — and stronger dishes like soft-shell crab curry, tom sep pork-bone soup and Thai sausage. Weekday lunch has set menus; weekends are à la carte all day, and Saturday afternoons can be fully booked. Most 2026 diners found it authentic; one in September 2026 found the seafood soup short on seafood, and some dishes were unavailable one July evening.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing (official information), cooking by a top chef from Bangkok. A notice on the listing signs off "Thai Sky Kitchen (Ueno & Okachimachi)". No source names the chef.', philosophy: null, specialty: 'Massaman and soft-shell crab curry.',
      anecdotes: [
        { text: '"The interior is bright, with natural light streaming in through large windows, creating a resort-like atmosphere." — May 2026, gapao rice lunch.', source: R + 'B530866638/' },
        { text: '"By early afternoon, the place was fully booked, so it was definitely a good idea to reserve in advance!" — October 2026.', source: R + 'B532847322/' },
        { text: '"The menu photos showed an abundance of shrimp, squid, and shellfish, but the reality was different." — September 2026.', source: R + 'B535070138/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): タイスカイキッチン、上野2-12-11 堺屋 2F、上野御徒町駅・上野広小路駅から徒歩2分、JR上野駅・御徒町駅から5分、毎日11:30〜15:00・17:00〜22:30、土日祝はランチメニューなし、予約可、20席、禁煙、カード・電子マネー・QR可、英語のメニューとスタッフ、テイクアウト・デリバリー、バンコク出身のシェフ。メニュー (2025年1月): ガイトート1,480円、ソフトシェルクラブのカレー炒め1,800円、トムセープ1,580〜1,780円、空芯菜炒め1,350円、生春巻き1,050円。口コミ (2026年5〜10月): マッサマンカレー1,280円、ガパオライス、グリーンカレー、ヤムウンセン、ココナッツスープ、大きな窓で明るい店内、土曜の昼は満席、魚介のスープの具が少ないという声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B529872553/', R + 'B530162706/', R + 'B530866638/', R + 'B531353462/', R + 'B532067594/', R + 'B532116474/', R + 'B532847322/', R + 'B534028086/', R + 'B535070138/', R + 'B536848673/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu with photos and English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-12-11 堺屋 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目12番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B532116474/'],
    price_note: 'Prices from the Tabelog menu (updated January 2025, tax included); massaman curry from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Gai tod (Thai fried chicken thigh)', '¥1,480', 'Specials', 'ask', 'no', 'Tabelog menu, January 2025.', 'gai_tod'),
      it('', '', 'Soft-shell crab curry stir-fry', '¥1,800', 'Specials', 'ask', 'no', 'Tabelog menu, January 2025.', 'pu_pad_pong'),
      it('', '', 'Stir-fried water spinach', '¥1,350', 'Specials', 'ask', 'ask', 'Tabelog menu, January 2025; oyster sauce.', 'pad_pak_boong'),
      it('', '', 'Fresh spring rolls', '¥1,050', 'Appetizers', 'ask', 'no', 'Tabelog menu, January 2025.', 'fresh_spring_rolls'),
      it('', '', 'Massaman curry', '¥1,280', 'Curry', 'ask', 'no', 'July 2026.', 'massaman'),
    ] }, {
    cuisine: 'バンコク出身のシェフによるタイ料理 (食べログ)・メニュー (食べログ、2025年1月): にんにくをのせた鶏もも肉の唐揚げ (ガイトート) 1,480円、ソフトシェルクラブのカレー炒め1,800円、牛肉のトムセープ1,780円、豚軟骨のトムセープ1,580円、魚介のチリペースト炒め1,550円、空芯菜炒め1,350円、生春巻き1,050円、海老の春巻き1,250円、さつま揚げ1,380円、ネームのスライス1,350円・2026年の口コミ: マッサマンカレー1,280円、ガパオライス、グリーンカレー、ヤムウンセン、ココナッツスープ、約1,850円の魚介のスープ、ジャスミンライス、ココナッツのデザート、シンハービール',
    neighborhood: '上野二丁目、堺屋 2F、仲町通りの角のビル。上野御徒町駅・上野広小路駅から徒歩2分、JR上野駅・御徒町駅から5分',
    gf_detail: 'グルテンフリーは要確認。ご飯のタイ料理が中心ですが、炒め物にオイスターソースや醤油、揚げ春巻きやワンタンも。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。空芯菜炒めなど野菜の料理もありますが、オイスターソースで味付けし、ヴィーガンの料理名はありません。',
    notes: '[タイ料理・上野、仲町通りの明るいタイ料理] 上野の仲町通りの角、2階にあるタイ料理店で、大きな窓から光が入り、昼はリゾートのような明るさ。リストによるとバンコク出身のシェフが厨房を率い、ガパオライス、グリーンカレーやマッサマンカレー (1,280円)、ヤムウンセン、ココナッツスープなどの定番から、ソフトシェルクラブのカレー炒め、豚骨のトムセープ、タイのソーセージまで。平日の昼はセット、週末は一日中アラカルトで、土曜の午後は満席になることも。2026年の口コミはおおむね本格的という声で、2026年9月には魚介のスープの具が少ない、7月の夜にはいくつかの料理が品切れという声も。',
  });
}

// ================================================================ バトン BATON
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13210560/'; const R = TB + 'dtlrvwlst/';
  const WS = 'http://www.p-baton.com/';
  const D = day(['10:00', '18:00']);
  put({
    id: 'tokyo_baton_motoasakusa', name: 'バトン (BATON)', category: 'OMNI',
    lat: 35.709118, lng: 139.782425, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the puddings are egg, milk and vanilla custards, but pancakes, tarts and curry are wheat, and Tabelog only says allergy information is available — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg-and-milk puddings (the milk pudding is egg-free but has milk), pancakes with butter, keema curry.',
    hours_raw: 'Daily 10:00–18:00 (last order food 17:00, drinks 17:30); lunch 11:00–15:00, café 10:00–18:00; on lunch-buffet days (Fridays) lunch 11:00–15:00 (last order 14:30), café 15:00–18:00 (Tabelog). The shop\'s own website (last renewed 2017) lists Saturdays, Sundays and holidays as closed, but reviewers ate there on Sundays in May and November 2026. Reservations taken; dinner by arrangement. Order by QR code, collect at the counter, pay by phone (July 2026). 16 seats (12 at tables, 4 at the counter). Non-smoking. Cards, e-money and PayPay. Free Wi-Fi. English menu. Take-out and delivery; surplus tarts on TABETE (July 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Moto-Asakusa 1-chōme, ポセイドンアームス 1F, between Shin-Okachimachi and Inaricho — 5 min from Inaricho or Shin-Okachimachi Exit A3; 10 min from JR Ueno',
    cuisine: 'Pudding shop with a café: rich puddings made with selected eggs and top-grade vanilla beans, no additives (website; review) · puddings (Tabelog menu, April 2026): Inochi pudding ¥430, rice-fed-egg pudding with black-sugar sauce ¥430, café-au-lait, matcha, hojicha, pumpkin, rum-raisin, sesame ¥460, black tea ¥480, chocolate and pistachio ¥510, egg-free milk pudding ¥340 · café: fluffy soufflé pancakes, set ¥1,320 (June 2026); egg tart with iced café au lait ¥700 (May 2026); cheese tart · lunch: keema curry with vegetables; Friday lunch buffet · teas',
    website: WS, gmaps: gm('BATON 元浅草1-20-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Pudding & café · Shin-Okachimachi, custard puddings and soufflé pancakes] A bright, simple pudding shop and café between Shin-Okachimachi and Inaricho, open since 2017. The draw is a long line of custard puddings made with carefully chosen eggs and vanilla beans (¥340–510): the house Inochi pudding, one made with pale rice-fed yolks and black-sugar sauce, plus matcha, hojicha, café-au-lait and pistachio. Sit down for fluffy soufflé pancakes (whipped to order, so each takes a while) or a crisp egg tart and coffee for ¥700; there is keema curry at lunch and a buffet on Fridays. Order and pay by phone. Open daily per Tabelog, including Sundays, when many nearby places are closed (May 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened March 2017 (July 2026 review)', background: 'Run by エコロジーファーム (website copyright). No source names the pâtissier.', philosophy: 'Website: rich pudding made from nutritious selected eggs and the finest vanilla beans, from natural ingredients.', specialty: 'Custard pudding; soufflé pancakes.',
      anecdotes: [
        { text: '"And the pancakes are so fluffy!" — November 2026, Sunday 2:30 pm.', source: R + 'B538459672/' },
        { text: '"The egg tart had a wonderfully crispy tart shell that was delicious!" — May 2026, egg tart and iced café au lait ¥700.', source: R + 'B528430108/' },
        { text: '"One downside is that it takes a while for the food to be served, and the seating is a bit cramped." — May 2026, keema curry.', source: R + 'B520246174/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): バトン、元浅草1-20-3 ポセイドンアームス 1F、稲荷町駅・新御徒町駅A3出口から徒歩5分、JR上野駅から10分、毎日10:00〜18:00、ランチ11:00〜15:00、ビュッフェの日は15:00からカフェ、予約可、16席 (テーブル12、カウンター4)、禁煙、カード・電子マネー・PayPay可、Wi-Fi、英語のメニュー、アレルギー表示あり、テイクアウト・デリバリー。メニュー (2026年4月): いのちぷりん430円、米艶たまのぷりん430円、カフェオレ・抹茶・ほうじ茶など460円、紅茶480円、チョコ・ピスタチオ510円、卵を使わないミルクぷりん340円。公式サイト (2017年更新): こだわりの卵と最高級のバニラビーンズの濃厚ぷりん、定休日は土日祝。口コミ (2026年4〜11月): ふわふわのパンケーキ、パンケーキセット1,320円、エッグタルトとアイスカフェオレ700円、キーマカレー、QRコードで注文しスマホで支払い、日曜も営業、提供に時間がかかる、2017年3月オープン。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', WS, R + 'B520246174/', R + 'B526750704/', R + 'B528430108/', R + 'B529418132/', R + 'B529607991/', R + 'B530856615/', R + 'B532583697/', R + 'B532612008/', R + 'B534526713/', R + 'B538459672/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu with photos; order by QR code and collect at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区元浅草1-20-3 ポセイドンアームス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated April 2026); reviews dated April–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区元浅草一丁目20番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B530856615/', R + 'B528430108/'],
    price_note: 'Pudding prices from the Tabelog menu (updated April 2026, tax included); café prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Inochi pudding (vanilla custard)', '¥430', 'Pudding', 'ask', 'no', 'Tabelog menu, April 2026.', 'inochi_pudding'),
      it('', '', 'Rice-fed-egg pudding with black-sugar sauce', '¥430', 'Pudding', 'ask', 'no', 'Tabelog menu, April 2026.', 'kometsuya_pudding'),
      it('', '', 'Matcha pudding', '¥460', 'Pudding', 'ask', 'no', 'Tabelog menu, April 2026.', 'matcha_pudding'),
      it('', '', 'Pistachio pudding', '¥510', 'Pudding', 'ask', 'no', 'Tabelog menu, April 2026.', 'pistachio_pudding'),
      it('', '', 'Milk pudding (no egg)', '¥340', 'Pudding', 'ask', 'no', 'Tabelog menu, April 2026.', 'milk_pudding'),
      it('', '', 'Pancake set', '¥1,320', 'Café', 'no', 'no', 'June 2026.', 'pancake_set'),
      it('', '', 'Egg tart with iced café au lait', '¥700', 'Café', 'no', 'no', 'May 2026.', 'egg_tart_set'),
    ] }, {
    cuisine: 'カフェのあるぷりん屋: こだわりの卵と最高級のバニラビーンズで作る、添加物なしの濃厚ぷりん (公式サイト、口コミ)・ぷりん (食べログのメニュー、2026年4月): いのちぷりん430円、米で育てた卵のぷりん (黒蜜) 430円、カフェオレ、抹茶、ほうじ茶、かぼちゃ、ラムレーズン、ごま460円、紅茶480円、チョコとピスタチオ510円、卵なしのミルクぷりん340円・カフェ: ふわふわのスフレパンケーキ、セット1,320円 (2026年6月)、エッグタルトとアイスカフェオレ700円 (2026年5月)、チーズタルト・ランチ: 野菜のキーマカレー、金曜はランチビュッフェ・紅茶',
    neighborhood: '元浅草一丁目、ポセイドンアームス 1F、新御徒町と稲荷町の間。稲荷町駅・新御徒町駅A3出口から徒歩5分、JR上野駅から10分',
    gf_detail: 'グルテンフリーは要確認。ぷりんは卵、牛乳、バニラのカスタードですが、パンケーキ、タルト、カレーは小麦。食べログにはアレルギー表示ありとあるだけなので確認を。',
    vegan_detail: 'ヴィーガンではありません。卵と牛乳のぷりん (ミルクぷりんは卵なしでも牛乳入り)、バター付きのパンケーキ、キーマカレー。',
    notes: '[ぷりん・カフェ・新御徒町、カスタードぷりんとスフレパンケーキ] 新御徒町と稲荷町の間にある、明るくシンプルなぷりん屋兼カフェで、2017年から。目当てはこだわりの卵とバニラビーンズで作るたくさんの種類のカスタードぷりん (340〜510円): 看板のいのちぷりん、米で育てた白っぽい黄身と黒蜜のぷりん、抹茶、ほうじ茶、カフェオレ、ピスタチオなど。店内ではふわふわのスフレパンケーキ (注文ごとに泡立てるので時間がかかります) や、サクサクのエッグタルトとコーヒーで700円。昼はキーマカレー、金曜はビュッフェ。注文と支払いはスマホで。食べログでは日曜も含め毎日営業で、近くの店が閉まる日曜にもありがたい (2026年5月)。',
  });
}

// ================================================================ ほてい
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13079147/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_hotei_shitaya', name: 'ほてい (Hotei)', category: 'OMNI',
    lat: 35.719093, lng: 139.782455, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: sashimi and grilled fish lunches, but kara-age, kakuni and the monkfish hot pot are seasoned with unlisted sauces; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya — sashimi, monkfish hot pot, squid, kara-age, pork kakuni, offal stew.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 11:30–14:00 (last order 13:30) and 17:00–22:00 (last order 21:30); closed Sundays and holidays (Tabelog). Reservations taken. No service or table charge. No cards or e-money; PayPay. 16 seats: counter and a raised tatami area (6 counter seats and 3 tables for four, per an October 2026 review); a second floor for groups. Non-smoking.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shitaya 1-chōme, a back street about 5 min from Iriya Stn Exit 2; also near JR Uguisudani',
    cuisine: 'Long-running neighbourhood izakaya, known for monkfish (Tabelog; reviews) · winter monkfish hot pot finished with zōsui rice porridge (March 2026) · lunch set meals about ¥1,000–1,300: pork kakuni ¥1,000 (March 2026), chicken kara-age ¥1,100 (October 2026), katsuo bowl ¥1,100 (April 2026), sashimi set of sea bream, tuna and marinated mackerel ¥1,200 (August 2026), tuna bowl, sea-bream bowl, grilled fish; with miso soup and three kinds of pickles · evening: sashimi, crab-miso tofu, a whole squid served as liver sashimi, grilled legs and body, motsu stew · beer, sake, shochu',
    website: null, gmaps: gm('ほてい 下谷1-8-20'), menu_url: null,
    notes: "[Izakaya · Iriya, a 1976 fish izakaya with monkfish hot pot] A calm, long-established izakaya on a back street near Iriya Station, in business since 1976, with a counter, a few tables and a raised tatami area — reminding one reviewer of a small kaiseki restaurant. Winter is monkfish season: the anko nabe, finished with rice porridge, is what it is known for. At lunch it fills up for generous set meals at about ¥1,000–1,300: tender pork kakuni, juicy salt-seasoned kara-age, a thick-cut katsuo bowl, or a sashimi set, each with miso soup and pickles. In the evening, sashimi, crab-miso tofu and whole squid go with beer and sake. Pay by cash or PayPay. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: 'In business since 1976 (October 2026 review)', background: 'Tabelog official listing. No source names the owner or cooks.', philosophy: null, specialty: 'Monkfish hot pot; set-meal lunches.',
      anecdotes: [
        { text: '"Winter means Anglerfish Hot Pot. The finishing touch of rice porridge is the best!" — March 2026, sashimi, kara-age, monkfish hot pot and zōsui.', source: R + 'B523708790/' },
        { text: '"The kara-age was exceptionally delicious. It had a light, crispy coating and was juicy on the inside." — October 2026, chicken kara-age set ¥1,100.', source: R + 'B536896962/' },
        { text: '"Inside, the space is calm and reminiscent of a small kaiseki restaurant, featuring 6 counter seats and 3 tables for 4 in a cozy layout." — October 2026.', source: R + 'B537312565/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): ほてい、下谷1-8-20、入谷駅・鶯谷駅、月〜土・祝前日・祝後日11:30〜14:00 (L.O.13:30)・17:00〜22:00 (L.O.21:30)、日祝休み、予約可、サービス料・お通しなし、カード・電子マネー不可、PayPay可、16席 (カウンターと小上がり)、2階あり、禁煙、居酒屋、あんこう。口コミ (2026年3〜10月): 冬のあんこう鍋と雑炊、ランチの定食は1,000円台前半、豚の角煮定食1,000円、鶏の唐揚げ定食1,100円、かつお丼1,100円、刺身定食 (鯛、まぐろ、しめさば) 1,200円、まぐろ丼、鯛丼、焼き魚、味噌汁と3種の漬物、夜は刺身、かに味噌豆腐、いか一杯 (肝刺し、げそ焼き)、もつ煮、1976年創業、落ち着いた懐石料理店のような店内。',
      confidence: 'medium', sources: [TB, R + 'B523708790/', R + 'B524203875/', R + 'B524557707/', R + 'B524974102/', R + 'B525050782/', R + 'B526691039/', R + 'B534520851/', R + 'B534914771/', R + 'B536896962/', R + 'B537312565/'] },
    cultural_comfort: { level: 'japanese', note: 'A quiet neighbourhood izakaya; no English menu is listed; cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区下谷1-8-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目8番20号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525050782/', R + 'B536896962/', R + 'B526691039/', R + 'B534520851/'],
    price_note: 'Lunch prices from 2026 reviews (tax included); no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Pork kakuni set meal', '¥1,000', 'Lunch', 'ask', 'no', 'March 2026.', 'kakuni_teishoku'),
      it('', '', 'Chicken kara-age set meal', '¥1,100', 'Lunch', 'ask', 'no', 'October 2026.', 'karaage_teishoku'),
      it('', '', 'Katsuo (bonito) rice bowl', '¥1,100', 'Lunch', 'ask', 'no', 'April 2026.', 'katsuo_don'),
      it('', '', 'Sashimi set meal (sea bream, tuna, marinated mackerel)', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026.', 'sashimi_teishoku'),
    ] }, {
    cuisine: 'あんこうで知られる町の老舗の居酒屋 (食べログ、口コミ)・冬はあんこう鍋、締めは雑炊 (2026年3月)・昼の定食は約1,000〜1,300円: 豚の角煮1,000円 (2026年3月)、鶏の唐揚げ1,100円 (2026年10月)、かつお丼1,100円 (2026年4月)、鯛、まぐろ、しめさばの刺身定食1,200円 (2026年8月)、まぐろ丼、鯛丼、焼き魚。味噌汁と3種の漬物付き・夜: 刺身、かに味噌豆腐、肝刺し、げそ焼き、身で出すいか一杯、もつ煮・ビール、日本酒、焼酎',
    neighborhood: '下谷一丁目、入谷駅2番出口から徒歩約5分の裏通り。JR鶯谷駅からも近い',
    gf_detail: 'グルテンフリーは要確認。刺身や焼き魚の定食もありますが、唐揚げ、角煮、あんこう鍋の味付けは不明で、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、刺身、あんこう鍋、いか、唐揚げ、豚の角煮、もつ煮。',
    notes: '[居酒屋・入谷、1976年創業のあんこう鍋の店] 入谷駅近くの裏通りにある落ち着いた老舗の居酒屋で、1976年から。カウンター、テーブル少し、小上がりがあり、口コミでは小さな懐石料理店のようとも。冬はあんこうの季節で、雑炊で締めるあんこう鍋が名物。昼は混み合い、約1,000〜1,300円のたっぷりした定食: やわらかい豚の角煮、塩味のジューシーな唐揚げ、厚切りのかつお丼、刺身定食など、どれも味噌汁と漬物付き。夜は刺身、かに味噌豆腐、いか一杯をビールや日本酒と。支払いは現金かPayPay。日曜・祝日休み。',
  });
}

save();
