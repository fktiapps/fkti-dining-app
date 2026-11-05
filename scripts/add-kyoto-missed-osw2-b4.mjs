// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 4.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + イタリアンビアパブ ICHI-YA (Ichijoji Brewery's craft-beer pub near Nishiki, Italian food; since 2016)
//   + うずら屋 京都・四条 Uzura Ya (10-seat chicken counter at Shijo Kawabata: sashimi, off-skewer grills)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + KYOTO STAR BAR (Kyoto shop of Ginza's Star Bar: hand-cut ice, cocktails, kakigori by day)
//   + koe donuts 京都店 (organic donut factory-café in a Kengo Kuma bamboo-basket interior; since 2019)
//   None is in data/kyoto.json: grep by id, name (ICHI-YA/イチヤ, うずら屋/Uzura, STAR BAR/スターバー, koe) and address
//   (船屋町384, 川端通四条上ル, 材木町185, 中之町557) found none.
//   Group checks: STAR BAR has four shops (Ginza, Namiki, Kyoto, Hibiya Midtown — official site "４店舗あるSTAR BAR"),
//   none in data: a small group, drafted. ICHI-YA is a pub of Ichijoji Brewery; a November 2025 reviewer mentions a
//   second location; no shop count found and none in data: drafted as at most a small group. koe donuts: the official
//   site lists only this Kyoto shop. うずら屋: no other shop of the name in the Tabelog crawl.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; うずら屋's address has no lot number, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イタリアンビアパブ ICHI-YA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027697/'; const R = TB + 'dtlrvwlst/';
  const MENU = TB + 'dtlmenu/';
  const WD = day(['17:00', '22:00']); const WE = day(['12:00', '22:00']);
  put({
    id: 'kyoto_ichiya_beer_pub', name: 'イタリアンビアパブ ICHI-YA (Italian Beer Pub Ichi-ya)', category: 'OMNI',
    lat: 35.005531, lng: 135.766438, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a craft-beer pub (beer is barley or wheat) whose food includes zeppole (fried bread), croquettes, pizza and ravioli; no gluten information is published (Tabelog menu, October 2026; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and olives, smoked nuts, sauerkraut, green salad, grilled black-soybean edamame and fries are on the menu, but nothing is marked vegan (Tabelog menu, October 2026).',
    hours_raw: '17:00–22:00 Monday, Wednesday, Thursday and Friday; 12:00–22:00 Saturday, Sunday and holidays (and on Tuesdays that are holidays); closed Tuesday (Tabelog). Renovated and renamed from BEER PUB ICHI-YA, with a new, more food-led Italian menu (March 2026). Bookings taken; over 9 people by phone (Tabelog). An appetizer is served: one May 2026 reviewer calls it complimentary, another paid ¥300 each. 43 seats (counter, round tables, a large table, wall counter); non-smoking, with a smoking area outside; cards, e-money and QR; English menu and English-speaking staff; children welcome (Tabelog). 3 min walk north from exit 9 of Hankyu Kawaramachi Stn (Tabelog). Opened 8 August 2016 (Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just north of Nishiki Market — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Craft-beer pub of Ichijoji Brewery (Kyoto), now with an Italian menu (2025–26 reviews) · beers such as Ichijoji Belgian Wheat, Destroy Angel IPA, Terroir Kyoto Yuzu Weiss, golden ale and stout; 420 ml ¥990 (May 2026); tasting set of three beers and three small dishes ¥2,500 (¥2,200 in happy hour) (June 2026); a ¥4,000 course with all-you-can-drink, craft beer +¥500 (October 2026) · herb-marinated olives ¥440, smoked nuts ¥440, sauerkraut ¥550, Kyoto yuba potato salad ¥660, cured-meat platter ¥1,200, caprese with Sugiyama Milk Farm mozzarella ¥1,210 · baccalà croquettes ¥500, zeppole ¥500, black-soybean edamame ¥550, fries ¥660 · Choshu chicken in white wine ¥1,320, spare ribs stewed in Ichijoji beer ¥1,320, octopus in red wine ¥1,430, wagyu tagliata ¥1,800, salsiccia ¥1,320 (Tabelog menu, October 2026) · ravioli, panna cotta with bitter chocolate (2026 reviews)',
    website: null, gmaps: gm('イタリアンビアパブ ICHI-YA 京都'), menu_url: MENU,
    notes: "[Craft beer & Italian · Nishiki, Ichijoji Brewery's pub] Ichijoji Brewery's taproom just north of Nishiki Market, renovated in 2026 with an Italian menu: beers from Belgian wheat to a yuzu weiss and an English-style IPA, then Kyoto yuba potato salad, spare ribs stewed in the brewery's own beer, octopus in red wine, wagyu tagliata. A three-beer, three-dish tasting set (¥2,500) is the easy way in. Reviewers like the beer and the panna cotta; two found the high chairs uncomfortable, and some found the prices on the high side. English menu. Open from noon at weekends; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Pub of Ichijoji Brewery (Kyoto); no person is named'], origin: null,
      background: 'Tabelog lists the former name BEER PUB ICHI-YA; a March 2026 regular found it renovated, the menu much more food-led and the Red Ale gone. Reviewers describe it as the pub of Kyoto’s Ichijoji Brewery (December 2025; May 2026), and a November 2025 reviewer refers to a second location. Opened 8 August 2016 (Tabelog).',
      philosophy: null, specialty: 'Ichijoji Brewery craft beer; beer-stewed spare ribs; tasting set.',
      anecdotes: [
        { text: 'A December 2025 diner liked the beers and a light Kyoto-style oden on the old menu but found the chairs uncomfortable.', source: R + 'B519899460/' },
        { text: 'A March 2026 regular found many international customers and a lively rather than quiet room after the renovation.', source: R + 'B525079056/' },
        { text: 'An October 2026 solo diner on the all-you-can-drink course wished the busy kitchen had paced the dishes more slowly.', source: R + 'B537280930/' },
      ],
      japanese_sources_summary: '食べログ: ビアバー・パブ・バル、旧店名 BEER PUB ICHI-YA、中京区御幸町通蛸薬師下る船屋町384 Casa INO’s 1F、阪急河原町駅9番出口から北へ徒歩3分、月・水・木・金 17:00〜22:00、土・日・祝 12:00〜22:00、火曜休み (祝日の火曜は営業)、予約可 (10名以上は電話)、43席、禁煙 (店外に喫煙所)、カード・電子マネー・QR 可、英語メニュー・英語のスタッフ、ベジタリアンメニューあり、2016年8月8日オープン、メニュー (英語版、2026年10月更新): オリーブ440円、燻製ナッツ440円、ザワークラウト550円、京湯葉のポテトサラダ660円、カプレーゼ1,210円、バッカラのコロッケ500円、ゼッポレ500円、黒枝豆550円、スペアリブの一乗寺ビール煮込み1,320円、タコの赤ワイン煮1,430円、和牛のタリアータ1,800円。口コミ (2025年11月〜2026年10月、英語): 一乗寺ブリュワリーのクラフトビール、2026年に改装しイタリアンのメニューに、飲み比べセット2,500円、パンナコッタ、ハイチェアが座りにくいという声。',
      confidence: 'medium', sources: [TB, MENU, R + 'B517348367/', R + 'B519899460/', R + 'B520011563/', R + 'B520643651/', R + 'B522566038/', R + 'B525079056/', R + 'B525843150/', R + 'B526776173/', R + 'B530351235/', R + 'B530469350/', R + 'B531558956/', R + 'B537280930/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通蛸薬師下る船屋町384 Casa INO’s 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with menu updated October 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005531, 135.766438); cross-checked: GSI 京都府京都市中京区船屋町384番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B530351235/'],
    price_note: 'Tabelog menu, last updated 12 October 2026 (prices including tax); beer prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tasting set: three beers and three small dishes', '¥2,500', 'Beer', 'no', 'ask', '¥2,200 in happy hour (June 2026).', 'tasting_set'),
      it('', '', 'Kyoto yuba potato salad', '¥660', 'Cold dishes', 'ask', 'ask', '', 'yuba_potato_salad'),
      it('', '', 'Homemade sauerkraut', '¥550', 'Cold dishes', 'ask', 'ask', '', 'sauerkraut'),
      it('', '', 'Spare ribs stewed in Ichijoji beer', '¥1,320', 'Warm dishes', 'no', 'no', 'Beer.', 'beer_spare_ribs'),
      it('', '', 'Octopus stewed in red wine', '¥1,430', 'Warm dishes', 'ask', 'no', '', 'octopus_red_wine'),
      it('', '', 'Wagyu tagliata with balsamic', '¥1,800', 'Warm dishes', 'ask', 'no', '', 'tagliata'),
    ] }, {
    cuisine: '京都の一乗寺ブリュワリーのクラフトビールのパブ。今はイタリアンのメニュー (2025〜2026年の口コミ)・ビールは Ichijoji Belgian Wheat、Destroy Angel IPA、Terroir Kyoto Yuzu Weiss、ゴールデンエール、スタウトなど。420ml 990円 (2026年5月)。ビール3種と小皿3品の飲み比べセット2,500円 (ハッピーアワーは2,200円) (2026年6月)。飲み放題付き4,000円のコース、クラフトビールは+500円 (2026年10月)・ハーブのオリーブ440円、燻製ナッツ440円、ザワークラウト550円、京湯葉のポテトサラダ660円、生ハムなどの盛り合わせ1,200円、Sugiyama Milk Farm のモッツァレラのカプレーゼ1,210円・バッカラのコロッケ500円、ゼッポレ500円、黒枝豆550円、フライドポテト660円・Choshu chicken の白ワイン煮1,320円、スペアリブの一乗寺ビール煮込み1,320円、タコの赤ワイン煮1,430円、和牛のタリアータ1,800円、サルシッチャ1,320円 (食べログのメニュー、2026年10月)・ラビオリ、ビターチョコのパンナコッタ (2026年の口コミ)',
    neighborhood: '錦市場のすぐ北。京都河原町駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。クラフトビールのパブ (ビールは大麦か小麦) で、料理にもゼッポレ (揚げパン)、コロッケ、ピザ、ラビオリ。グルテンの情報は公開されていない (食べログのメニュー、2026年10月、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、オリーブ、燻製ナッツ、ザワークラウト、グリーンサラダ、黒枝豆、フライドポテトもあるが、ヴィーガンと書かれた料理はない (食べログのメニュー、2026年10月)。',
    notes: '[クラフトビールとイタリアン・錦、一乗寺ブリュワリーのパブ] 錦市場のすぐ北にある一乗寺ブリュワリーのパブ。2026年に改装しイタリアンのメニューに。ベルギーの小麦ビールから柚子のヴァイツェン、イギリス風の IPA まで、料理は京湯葉のポテトサラダ、自社のビールで煮込んだスペアリブ、タコの赤ワイン煮、和牛のタリアータ。ビール3種と小皿3品の飲み比べセット (2,500円) が入りやすい。ビールとパンナコッタは好評だが、ハイチェアが座りにくい、値段が高めという声もある。英語メニューあり。土日は昼から、火曜休み。',
  });
}

// ================================================================ うずら屋 京都・四条
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003283/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']); const THU = day(['18:00', '22:00']);
  put({
    id: 'kyoto_uzuraya_shijo', name: 'うずら屋 京都・四条 (Uzura Ya Kyoto Shijo)', category: 'OMNI',
    lat: 35.004566, lng: 135.772379, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken sashimi comes with sesame oil, ponzu or yuzu pepper, and the grills and oyakodon use sauces and dashi; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and quail house; grilled vegetables are on the menu, but the soup is chicken and the oyakodon uses dashi (2026 reviews).',
    hours_raw: '17:30–22:00; Thursday 18:00–22:00; closed Wednesday; hours may change (Tabelog). Usually fully booked: book online through Pocket Concierge (Tabelog) or phone; walk-ins are sometimes offered a one-hour slot or a later time (August–September 2026). Serves chicken sashimi (raw and rare chicken: sasami, gizzard, white liver, heart, kombu-cured breast) (July–October 2026). 10 counter seats; non-smoking; cards (Tabelog). On the east side of Kawabata-dori just north of Shijo, by the Kamo River; 122 m from Gion-Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 3: THU, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori just north of Shijo, by the Kamo River — 2 min from Gion-Shijo Stn',
    cuisine: 'Chicken and quail at a 10-seat counter, grilled over charcoal and served off the skewer, cut into bite-size pieces on a plate (2026 reviews) · chicken sashimi platter: breast, gizzard, white liver, heart, kombu-cured breast; white liver sashimi with sesame oil; chicken-thigh tataki with yuzu pepper and ponzu (July–October 2026) · grills: grilled quail thigh, neck, thigh, tsukune with ginger, gizzard, back liver, Datchan (glandular stomach), ソレリス, red liver, white liver (sells out), sausage, wings, grilled green onion, Kamo eggplant two ways, grilled-vegetable salad, corn; grilled foie gras rice ball (2026 reviews) · caciocavallo wrapped in nori; jidori soup (can sell out); oyakodon in rich dashi to finish (2025–26 reviews) · sake including Aramasa and other Akita brewers, 花垣, 秋鹿 and 春鹿; lemon shochu highball (2025–26 reviews)',
    website: null, gmaps: gm('うずら屋 京都 四条 川端'), menu_url: null,
    notes: "[Chicken · Shijo Kawabata, a 10-seat chicken counter by the Kamo River] A narrow ten-seat counter on Kawabata-dori just north of Shijo, where the master grills chicken and quail over charcoal and serves it off the skewer in bite-size pieces. Start with the chicken sashimi — white liver with sesame oil, heart, kombu-cured breast — or the rare thigh tataki; then quail thigh, gizzard, red liver and grilled vegetables such as Kamo eggplant; finish with an oyakodon soaked in dashi. Good sake, including Aramasa. Almost always full: book, or ask for an hour's slot. Bills ran about ¥6,000–15,000 a head in 2026. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Master (主) at the grill, with young staff (August 2026); not named'], origin: null,
      background: 'Per an August 2026 Japanese review: the master holds the grill at the far end of the long counter and young staff work briskly under the master’s direction; the cooking is not on skewers, and the heat is well managed; the staff came to call the reviewer, who had arrived early and was waiting by the Kamo River. A regular of ten years (January 2024) and others describe it as always booked. Tabelog Chicken "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Chicken sashimi (white liver); thigh tataki; oyakodon.',
      anecdotes: [
        { text: 'A September 2026 regular phoned at 17:56, was offered seats for one hour, and noticed many overseas visitors asking to come in without a booking.', source: R + 'B193146738/' },
        { text: 'An October 2026 diner ordered the grilled white liver, and the next guest was told it had sold out.', source: R + 'B536964816/' },
        { text: 'A May 2025 regular brought a cheesecake and asked the kitchen to recreate it; it might be added to the dessert menu.', source: R + 'B193146738/' },
        { text: 'A May 2026 diner found the counter a bit cramped for larger people, but the atmosphere inviting.', source: R + 'B529139558/' },
      ],
      japanese_sources_summary: '食べログ: 鳥料理・焼き鳥、東山区川端通四条上ル東詰、祇園四条駅から122m、17:30〜22:00、木曜18:00〜22:00、水曜休み、予約可 (ポケットコンシェルジュで24時間)、10席 (カウンター)、禁煙、カード可、鳥料理百名店 2025。口コミ (2026年8月、日本語): 予約の数分前に着いて鴨川のそばで休んでいたらスタッフが呼びに来てくれた、長いカウンターの奥の主が陣取る焼き場、お通しはざく切りキャベツ、お造り盛り合わせ、みどりなす、ムネたたき、ささみわさび、うずらモモ焼、せせり、ずり、ソレリス、赤肝、つくね、地鶏のスープ、冷酒 秋鹿、燗酒 春鹿、串を打っていない、若いスタッフが主の指示のもとてきぱき働く。口コミ (2025〜2026年、英語): 白レバーの刺身、もものたたき、親子丼、Aramasa、ほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B193146738/', R + 'B30660416/', R + 'B509531922/', R + 'B528650212/', R + 'B529139558/', R + 'B530806391/', R + 'B533220269/', R + 'B533473645/', R + 'B535880202/', R + 'B536429366/', R + 'B536964816/', R + 'B537080795/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Pocket Concierge online, or by phone); chicken is served raw or rare in several dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区川端通四条上ル東詰',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Chicken Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.004566, 135.772379); GSI could not match the address (川端通四条上ル東詰, no lot number; ward level only), so single-point approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B30660416/', R + 'B533473645/', R + 'B536964816/'],
    price_note: 'No menu or prices published; items from 2026 reviews. Reviewers spent about ¥6,000–14,999 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Chicken sashimi platter', '', 'Sashimi', 'ask', 'no', 'Raw chicken.', 'tori_sashi'),
      it('', '', 'White liver sashimi', '', 'Sashimi', 'ask', 'no', 'Raw; with sesame oil.', 'shiro_leba_sashi'),
      it('', '', 'Chicken-thigh tataki', '', 'Sashimi', 'ask', 'no', 'Rare.', 'momo_tataki'),
      it('', '', 'Grilled quail thigh', '', 'Grills', 'ask', 'no', '', 'uzura_momo'),
      it('', '', 'Oyakodon', '', 'Rice', 'ask', 'no', 'Dashi.', 'oyakodon'),
    ] }, {
    cuisine: '10席のカウンターで鶏とうずら。炭火で焼き、串を打たず一口大に切って皿で出す (2026年の口コミ)・鶏刺しの盛り合わせ: ささみ、砂ずり、白レバー、ハツ、ささみの昆布〆。白レバーの刺身はごま油で、もものたたきは柚子胡椒とポン酢で (2026年7〜10月)・焼き物: うずらのもも、せせり、もも、生姜のきいたつくね、砂ずり、back liver、Datchan、ソレリス、赤肝、白レバー (売り切れることも)、ソーセージ、手羽、焼きねぎ、賀茂なす、焼き野菜のサラダ、とうもろこし、フォアグラの焼きおにぎり (2026年の口コミ)・カチョカヴァッロの海苔巻き、地鶏のスープ (売り切れることも)、締めはだしのしみた親子丼 (2025〜2026年の口コミ)・日本酒は Aramasa など秋田の酒、花垣、秋鹿、春鹿。レモンの焼酎ハイボール (2025〜2026年の口コミ)',
    neighborhood: '四条のすぐ北の川端通、鴨川沿い。祇園四条駅から徒歩2分',
    gf_detail: '要確認。鶏刺しはごま油、ポン酢、柚子胡椒で、焼き物と親子丼はたれやだしを使う。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏とうずらの店。焼き野菜もあるが、スープは鶏で、親子丼はだしを使う (2026年の口コミ)。',
    notes: '[鳥料理・四条川端、鴨川沿いの10席の鶏のカウンター] 四条のすぐ北、川端通の細長い10席のカウンター。主が炭火で鶏とうずらを焼き、串を打たずに一口大で出す。まずはごま油の白レバー、ハツ、ささみの昆布〆の鶏刺しや、レアのもものたたき。続いてうずらのもも、ずり、赤肝、賀茂なすなどの焼き野菜、締めはだしのしみた親子丼。Aramasa などの日本酒もよい。ほぼ満席なので予約するか、1時間だけの枠を頼むとよい。2026年は1人6,000〜15,000円ほど。水曜休み。',
  });
}

// ================================================================ KYOTO STAR BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027655/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.starbar.jp/'; const KY = SITE + 'store-introduction-kyoto'; const ICE = SITE + 'ninja-ice';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5810000729840';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_star_bar', name: 'KYOTO STAR BAR', category: 'MOM_AND_POP',
    lat: 35.007282, lng: 135.770862, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar: drinks, kakigori with matcha, yuzu or fermented-milk syrups, smoked nuts and dried fruit; no gluten information is published (Tabelog menu, April 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The kakigori comes with matcha, yuzu and fermented-milk syrups (the last is dairy); smoked nuts and dried fruit are the only food (Tabelog menu, April 2026).',
    hours_raw: '17:00–24:00 (last drink order 23:00) every day, with irregular closures — check by phone or Google Maps on the day (Tabelog). In summer it is a kakigori shop by day (official site); a reviewer found it opening at 14:00 (August 2026). Table charge ¥2,200, waived before 19:00 (Tabelog; August 2026). Groups of three or more must book (Tabelog). Card and cashless payment only, no cash (Tabelog; September 2026). 12 seats (8 at the counter, one table for 4); fully non-smoking, no heated tobacco, ashtray outside; free Wi-Fi (Tabelog). In an alley off Kiyamachi south of Sanjo, between Pontocho and Kiyamachi; 4 min walk from Keihan Sanjo Stn (Tabelog; August 2026). Opened 11 July 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley off Kiyamachi south of Sanjo — 4 min from Keihan Sanjo Stn',
    cuisine: 'Kyoto shop of Ginza’s Star Bar, a bar built around ice: hand-cut clear ice and its own craft ice 洛氷 made from Kyoto spring waters under an ice-making licence (official site) · cocktails with Japanese flavours, e.g. Japanese Martini Matcha ¥2,300, Sakura Fubuki ¥2,300, Matcha Hopper, Yuzu Mule; cocktails about ¥2,000–3,000 (2026 reviews) · kakigori of 洛氷 shaved with a SWAN cygne machine, with matcha, yuzu and fermented-milk syrups served alongside, ¥2,500 (Tabelog menu, April 2026); matcha whisked at the counter and poured on (August 2026) · smoked mixed nuts ¥1,000, dried fruit ¥1,000 (Tabelog menu, April 2026) · non-alcoholic yuzu-ginger, tonic water (2026 reviews)',
    website: KY, gmaps: gm('KYOTO STAR BAR 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Bar & kakigori · Kiyamachi, Ginza's Star Bar in a Kyoto alley] The Kyoto branch of Ginza's Star Bar, down an alley between Kiyamachi and Pontocho: a dim, Japanese-styled room with a tea set at its centre, where the kimono-clad master works alone. Everything turns on ice — hand-cut clear ice for highballs, and the bar's own 洛氷 from Kyoto spring water, shaved into kakigori (¥2,500) with matcha whisked at the counter or yuzu syrup. Come before 19:00 to skip the ¥2,200 table charge. Cocktails run ¥2,000–3,000. Cards only. One May 2026 visitor found the charge poor value and the staff absorbed in a computer.",
    chef_bio: { chef_name: '松田 高雅', roles: ['Owner (the invoice holder); a May 2026 review describes the master, in a kimono, managing everything solo'], origin: null,
      background: 'Per Tabelog: a directly managed shop of STAR BAR GINZA in Ginza 1-chome, Tokyo. Per the official site: four STAR BAR shops (Ginza, Namiki, Kyoto, Hibiya Midtown); Star Bar made ice the star of the bar, uses three kinds of ice frozen in different ways, and the Kyoto shop makes craft ice (洛氷) from Kyoto spring waters under the only ice-making licence in Kyoto city; by day in summer the Kyoto shop is a kakigori shop. The invoice register lists an individual, 松田 高雅, for the Kyoto shop’s invoice number. Tabelog Bar "Tabelog 100" 2022. Opened 11 July 2016.',
      philosophy: 'Per the official site: hand-cut ice is pursued for function as well as beauty, down to water quality and the theory of freezing.',
      specialty: 'Kakigori of 洛氷; matcha cocktails; hand-cut ice.',
      anecdotes: [
        { text: '"I had a delightful time with the master, who was dressed in a kimono." — May 2026.', source: R + 'B527407507/' },
        { text: 'An August 2026 visitor watched the owner grind matcha at the counter and pour it over the kakigori, and was told to add it gradually with a spoon.', source: R + 'B533572112/' },
        { text: 'A May 2026 visitor took part in a tea-ceremony experience at the counter.', source: R + 'B528216997/' },
        { text: 'A May 2026 visitor felt the ¥2,200 charge brought no service and found the staff engrossed in computer work.', source: R + 'B534177467/' },
      ],
      japanese_sources_summary: '公式サイト (starbar.jp): ４店舗ある STAR BAR (銀座、並木、京都、日比谷ミッドタウン)、京都: 先斗町は京都の代表的な花街、氷雪製造許可を得て京都各所の銘水でクラフト氷【洛氷】を造る、夏の昼間はかき氷屋、夜のお酒のかき氷も名物、中京区木屋町通三条下る材木町185-5、氷を BAR の主役にした、凍り方の違う3種類の氷、京都市内で唯一の氷雪製造免許。食べログ: バー、STAR BAR GINZA の直営店、毎日 17:00〜24:00 (ドリンク L.O. 23:00)、不定休、カードのみ (キャッシュレス)、3名以上は要予約、チャージ2,200円、12席 (カウンター8、テーブル4)、全席禁煙、2016年7月11日オープン、バー百名店 2022、インボイス登録: 松田 高雅 (個人)、メニュー (英語版、2026年4月更新): 洛氷のかき氷2,500円 (抹茶、柚子、発酵乳のシロップ)、燻製ミックスナッツ1,000円、ドライフルーツ1,000円。口コミ (2026年5〜9月、英語): 着物のマスター、抹茶のかき氷、19時まではチャージなし、14時開店の日も、カクテル2,000〜3,000円。',
      confidence: 'medium', sources: [TB, SITE, KY, ICE, INV, R + 'B516303188/', R + 'B527407507/', R + 'B528216997/', R + 'B533133715/', R + 'B533572112/', R + 'B533714927/', R + 'B534177467/', R + 'B534536640/', R + 'B534750139/', R + 'B535277028/', R + 'B536093838/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards only; ¥2,200 charge from 19:00; book for three or more.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条下る材木町185-5 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (menu updated April 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007282, 135.770862); cross-checked: GSI 京都府京都市中京区材木町185番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B527407507/', R + 'B534177467/'],
    price_note: 'Tabelog menu, last updated 2 April 2026 (prices including tax); cocktail prices from May 2026 reviews; ¥2,200 table charge from 19:00.', last_checked: TODAY, items: [
      it('洛氷', '', 'Raku Hyou kakigori (matcha, yuzu and fermented-milk syrups)', '¥2,500', 'Kakigori', 'ask', 'ask', '', 'raku_kakigori'),
      it('', '', 'Japanese Martini Matcha', '¥2,300', 'Cocktails', '', '', 'May 2026.', 'matcha_martini'),
      it('', '', 'Smoked mixed nuts (60 g)', '¥1,000', 'Snacks', 'ask', 'ask', '', 'smoked_nuts'),
    ] }, {
    cuisine: '銀座 STAR BAR の京都店。氷が主役の BAR で、ハンドカットの透明な氷と、京都の銘水で造る自家製のクラフト氷「洛氷」(氷雪製造許可) (公式サイト)・和の味わいのカクテル、例えば Japanese Martini Matcha 2,300円、Sakura Fubuki 2,300円、Matcha Hopper、Yuzu Mule。カクテルは2,000〜3,000円ほど (2026年の口コミ)・洛氷を SWAN cygne で削ったかき氷、抹茶、柚子、発酵乳のシロップを添えて2,500円 (食べログのメニュー、2026年4月)。カウンターで点てた抹茶をかける (2026年8月)・燻製ミックスナッツ1,000円、ドライフルーツ1,000円 (食べログのメニュー、2026年4月)・ノンアルコールの柚子ジンジャー、トニックウォーター (2026年の口コミ)',
    neighborhood: '三条の南、木屋町の路地。京阪三条駅から徒歩4分',
    gf_detail: '要確認。カクテルバーで、ほかは抹茶、柚子、発酵乳のシロップのかき氷、燻製ナッツ、ドライフルーツ。グルテンの情報は公開されていない (食べログのメニュー、2026年4月)。',
    vegan_detail: '要確認。かき氷のシロップは抹茶、柚子、発酵乳 (発酵乳は乳製品)。食べ物は燻製ナッツとドライフルーツのみ (食べログのメニュー、2026年4月)。',
    notes: '[バーとかき氷・木屋町、京都の路地の銀座 STAR BAR] 木屋町と先斗町の間の路地にある、銀座 STAR BAR の京都店。茶道具を中心に据えた薄暗い和の空間で、着物のマスターが一人で切り盛りする。主役は氷で、ハイボールにはハンドカットの透明な氷、京都の銘水で造る自家製の洛氷はかき氷 (2,500円) に。抹茶はカウンターで点てて、または柚子のシロップで。19時前ならチャージ2,200円はかからない。カクテルは2,000〜3,000円。カードのみ。2026年5月の客の一人は、チャージに見合うサービスがなくスタッフがパソコンに没頭していたと書いている。',
  });
}

// ================================================================ koe donuts 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032035/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://donuts.koe.com/'; const MENU = TB + 'dtlmenu/';
  const H = day(['08:00', '20:00']);
  put({
    id: 'kyoto_koe_donuts', name: 'koe donuts 京都店 (koe donuts Kyoto)', category: 'OMNI',
    lat: 35.004246, lng: 135.767286, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat donut shop — the crullers use organic whole-wheat flour (September 2026) — fried in rice oil (September 2026); the morning plate is French toast (Tabelog menu, September 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The official site lists a plant-based dough among its donut types, but no ingredient list is published; the cruller uses Miyama milk and free-range eggs, and the dango donuts buttercream and chocolate (official site; Tabelog menu; 2026 reviews).',
    hours_raw: '8:00–20:00 every day; closed irregularly (Tabelog; official site). Morning plate 8:00–11:00, brunch plate 11:00–15:00, both limited each day (Tabelog menu). No reservations: find a seat first, then pay at the counter (November 2026). Popular items can sell out by evening (September 2026). 65 seats plus standing; non-smoking; cards, e-money and QR; free Wi-Fi and power outlets; children welcome; takeaway (Tabelog). On Shinkyogoku just north of Shijo, 1 min from exit 9 of Hankyu Kawaramachi Stn (official site). Opened 21 March 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku just north of Shijo — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Donut factory-café of the koe brand, built on three keywords — organic, natural origin, local production (official site) · about 30 regular donuts across chewy koe, cruller, raw, yeast, old-fashioned, baked and plant-based doughs (official site): koe plain ¥260 (October 2026), a wasanbon cruller with organic whole-wheat flour and Miyama milk, almond-caramel yeast donut (September 2026) · eat-in "donut melt" with knife and fork: strawberry ¥1,100, crème brûlée ¥1,280 (November 2026) · seasonal dango donuts ¥380 (persimmon caramel, roast-sweet-potato cheesecake, hojicha chestnut Mont Blanc) and six-ball donut set ¥590 (Tabelog menu, September 2026); Halloween Chocolate Ghost ¥480 (October 2026) · French-toast morning plate with Miyama free-range eggs and Kyoto pork bacon ¥1,800 (8:00–11:00); breakfast set of coffee and a plain donut ¥500 (October 2026) · coffee ¥600, café latte ¥680 (October 2026)',
    website: SITE, gmaps: gm('koe donuts 京都'), menu_url: MENU,
    notes: "[Donuts & café · Shinkyogoku, organic donuts under bamboo baskets] A large donut factory-café a minute from Kawaramachi Station, under a dome of 572 traditional hexagon-weave bamboo baskets designed by Kengo Kuma's office. The koe brand fries its donuts in rice oil from organic and natural ingredients: try the plain koe donut (¥260) or the wasanbon cruller to take away, or sit down for a 'donut melt' eaten with knife and fork (from ¥1,100). Seasonal dango donuts change with the season. From 8:00 there's a French-toast morning plate, or a ¥500 coffee-and-donut set. Spacious, with Wi-Fi and outlets. Daily 8:00–20:00.",
    chef_bio: { chef_name: null, roles: ['koe brand café; Tabelog gives Stripe International’s PR department as the press contact; no person is named'], origin: null,
      background: 'Per the official site: an experiential donut factory serving freshly made donuts with knife and fork; ingredients chosen by three keywords, organic, natural origin and local production, made by hand in the shop as far as possible. The interior by Kengo Kuma & Associates covers a dome with 572 traditional hexagon-weave (六ツ目編み) bamboo baskets using Arashiyama bamboo; artist Yu Nagaba designed the goods, with Shun Kawakami as brand and art director. Opened 21 March 2019 (Tabelog). Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: 'Per the official site: "life happens, donut helps" — new donuts for a healthy and sustainable future, with care for the environment, ingredients and production.',
      specialty: 'koe plain donut; wasanbon cruller; donut melt.',
      anecdotes: [
        { text: 'A September 2026 visitor came back for a second try after finding everything sold out the night before.', source: R + 'B536112559/' },
        { text: 'An October 2026 visitor waited a while for the lunch set’s soup and salad, but found the donuts crisp, chewy and not greasy.', source: R + 'B536772171/' },
        { text: 'At 9:00 on an October 2026 weekday the café was quiet, with four other groups, all apparently from the West.', source: R + 'B537420271/' },
      ],
      japanese_sources_summary: '公式サイト (donuts.koe.com): koe donuts は出来立てのドーナツをナイフ＆フォークスタイルで楽しむ体験型のドーナツファクトリー、「オーガニック」「天然由来」「地産地消」、約30種のドーナツ (もちもちコエドーナツ、クルーラー、生ドーナツ、イースト、オールドファッション、ベイクドーナツ、プラントベース)、イートイン限定のドーナツメルト、京都嵐山の竹を用いた六ツ目編みの竹かご572個のドーム、隈研吾建築都市設計事務所、アーティスト長場雄、シュンカワカミ、中京区新京極通四条上ル中之町557、8:00〜20:00、阪急京都河原町駅9番出口より徒歩約1分。食べログ: カフェ・ドーナツ・スイーツ、毎日 8:00〜20:00、不定休、予約不可、65席、禁煙、カード・電子マネー・QR 可、Wi-Fi・電源、2019年3月21日オープン、カフェ WEST 百名店 2025、メニュー (英語版、2026年9月更新): 団子ドーナツ380円、ドーナツボール6個590円、フレンチトーストのモーニングプレート1,800円。口コミ (2026年9〜11月、英語): コエドーナツ プレーン260円、和三盆のクルーラー、米油で揚げる、ドーナツメルト1,100円から、モーニングセット500円。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B536112559/', R + 'B536313164/', R + 'B536772171/', R + 'B536989739/', R + 'B537167360/', R + 'B537412425/', R + 'B537420271/', R + 'B537626677/', R + 'B537890542/', R + 'B538220942/', R + 'B538421250/', R + 'B538716040/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take a seat first, then order and pay at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極四条上ル中之町557 京都松竹第3ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated October 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004246, 135.767286); cross-checked: GSI 京都府京都市中京区中之町557番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B537890542/', R + 'B538716040/', R + 'B537420271/'],
    price_note: 'Tabelog menu, last updated 1 September 2026 (prices including tax); other prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'koe donut, plain', '¥260', 'Donuts', 'no', 'ask', 'October 2026.', 'koe_plain'),
      it('', '', 'Donut melt, strawberry (eat-in)', '¥1,100', 'Eat-in', 'no', 'no', 'November 2026.', 'donut_melt_strawberry'),
      it('', '', 'Dango donut (seasonal)', '¥380', 'Donuts', 'no', 'ask', 'September 2026.', 'dango_donut'),
      it('', '', 'French-toast morning plate (8:00–11:00)', '¥1,800', 'Morning', 'no', 'no', '', 'french_toast_plate'),
      it('', '', 'Breakfast set: coffee and plain donut', '¥500', 'Morning', 'no', 'ask', 'October 2026.', 'breakfast_set'),
    ] }, {
    cuisine: 'koe ブランドのドーナツファクトリーのカフェ。キーワードは「オーガニック」「天然由来」「地産地消」(公式サイト)・定番は約30種、もちもちコエドーナツ、クルーラー、生ドーナツ、イースト、オールドファッション、ベイクドーナツ、プラントベース (公式サイト)。コエドーナツ プレーン260円 (2026年10月)、オーガニックの全粒粉と Miyama の牛乳を使う和三盆のクルーラー、アーモンドキャラメルのイースト (2026年9月)・イートイン限定、ナイフとフォークで食べるドーナツメルト: いちご1,100円、クレームブリュレ1,280円 (2026年11月)・季節の団子ドーナツ380円 (柿キャラメル、焼き芋チーズケーキ、ほうじ茶の和栗モンブラン)、ドーナツボール6個590円 (食べログのメニュー、2026年9月)。ハロウィンの Chocolate Ghost 480円 (2026年10月)・Miyama の平飼い卵と京都ポークのベーコンのフレンチトーストのモーニングプレート1,800円 (8時〜11時)、コーヒーとプレーンのモーニングセット500円 (2026年10月)・コーヒー600円、カフェラテ680円 (2026年10月)',
    neighborhood: '四条のすぐ北の新京極。京都河原町駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。小麦のドーナツの店 (クルーラーはオーガニックの全粒粉、2026年9月) で、米油で揚げる (2026年9月)。モーニングプレートはフレンチトースト (食べログのメニュー、2026年9月)。',
    vegan_detail: '要確認。公式サイトの生地の種類にプラントベースがあるが、原材料は公開されていない。クルーラーは Miyama の牛乳と平飼い卵、団子ドーナツはバタークリームとチョコレートを使う (公式サイト、食べログのメニュー、2026年の口コミ)。',
    notes: '[ドーナツとカフェ・新京極、竹かごの下のオーガニックドーナツ] 河原町駅から1分の大きなドーナツファクトリーのカフェ。隈研吾建築都市設計事務所による、六ツ目編みの竹かご572個のドームの下。koe はオーガニックや天然由来の素材のドーナツを米油で揚げる。持ち帰りならコエドーナツのプレーン (260円) や和三盆のクルーラー、店内ならナイフとフォークで食べるドーナツメルト (1,100円から)。団子ドーナツは季節で替わる。8時からはフレンチトーストのモーニングプレートや、500円のコーヒーとドーナツのセットも。広く、Wi-Fi と電源あり。毎日8時〜20時。',
  });
}

save();
