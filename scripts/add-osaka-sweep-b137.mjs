// Osaka sweep (2-mile circle around Dotonbori), batch 137 — mom / small-shop phase (all OMNI).
//   + 鶏や 梅の湯 (bathhouse-themed Showa yakitori counter, Kyoto Akadori, omakase sets; Higashi-Shinsaibashi)
//   + ろばた 風炉式 (charcoal robata izakaya open to 5:30, sashimi, kamameshi; 3F of the same building as Ume no Yu)
//   + 本格炉端焼き人夢叶思ひとむかし (robata izakaya famed for its Bakudan seafood rice bowl at lunch; weekend breakfast; Ura-Namba)
//   + 備長炭やきとり SASAYA 心斎橋本店 (binchotan yakitori served on plates, chicken tataki, open to 5:00; next lot to Ume no Yu)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 137);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鶏や 梅の湯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27010954/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_toriya_ume_no_yu_higashishinsaibashi', name: '鶏や 梅の湯 (Toriya Ume no Yu)', category: 'OMNI',
    lat: 34.673638, lng: 135.504157, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy tare; fried tomato; mini curry in the course; ginger soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout, incl. liver sashimi; mascarpone and Camembert.',
    hours_raw: 'Daily from 18:00 until 23:00 or sold out; closing days not fixed, see Instagram (Tabelog). Reservation needed for the omakase set; some skewers sell out (2025). Cards accepted; no e-money or QR (Tabelog).',
    hours: ALL(day(['18:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-13-10, opposite an elementary school gate — 5 min from Shinsaibashi Stn exit 5',
    cuisine: 'Yakitori · omakase yakitori set ¥2,800: appetizers, three small dishes and four skewers (by reservation) · Ume no Yu course ¥4,500: eight skewers, a dish, small bowl, salad, main and mini curry · six-skewer set · Kyoto Akadori thigh, breast lightly rare, gizzard, neck, bone-in wings with rock salt, tsukune, negima · liver sashimi ¥660, Kyoto Akadori tataki ¥1,100 · fried tomato with mascarpone · mozuku, potato salad, Camembert · grilled Tochio aburage with ginger soy · shochu selection · 17 counter seats',
    website: null, gmaps: gm('鶏や 梅の湯'), menu_url: null,
    notes: "[Yakitori · a Showa-era bathhouse-themed yakitori counter, Higashi-Shinsaibashi] A seventeen-seat counter behind a bathhouse-style noren near Shinsaibashi, with Showa pop on the speakers. Ume no Yu once served horse meat, and has returned as a yakitori shop. Start with the omakase set (¥2,800, reserve), four skewers with appetizers and small dishes, or the ¥4,500 course that ends with a mini curry. The grilling is precise: Kyoto Akadori thigh with crisp skin, breast left lightly rare, bone-in wings with rock salt. Order the fried tomato with mascarpone, the mozuku and the potato salad, plus a grilled Tochio aburage. Plenty of shochu. Some skewers sell out, so reserve. Cards accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Listed from 1 November 2006 (Tabelog); reopened as a yakitori restaurant after serving horse-meat dishes (2025–2026 reviews).', background: 'Yakitori counter with a bathhouse theme (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Yakitori of Kyoto Akadori; omakase sets.',
      anecdotes: [
        { text: '"The meal consisted of appetizers, small dishes, and four skewers, all served one by one… One standout dish was the grilled thigh of Kyoto Akadori chicken. The skin was crispy, and the meat was juicy." — August 2025, omakase yakitori set ¥2,800.', source: R + 'B28839434/' },
        { text: '"The chicken breast was perfectly grilled, lightly salted, and slightly rare inside… the chicken wings had crispy skin, and they were best enjoyed with rock salt!" — November 2025, six-skewer set.', source: R + 'B516803415/' },
      ],
      japanese_sources_summary: '食べログ: 鶏や 梅の湯、大阪市中央区東心斎橋1-13-10、心斎橋駅5番出口から徒歩5分、小学校の正門の向かい、毎日18:00〜23:00 (売り切れ次第終了)、定休日不定 (Instagram で告知)、カード可、電子マネー・QR不可、カウンター17席、2006年11月1日。口コミ(2025年6月〜2026年5月): 以前は馬肉料理の店で、焼き鳥店として再開、銭湯がテーマ、昭和の歌謡曲、おまかせ焼き鳥セット2,800円 (前菜、小鉢3品、串4本、要予約)、梅の湯コース4,500円 (串8本、一品、小鉢、サラダ、メイン、ミニカレー)、6本の盛り合わせ、Kyoto Akadori のもも、むね、砂肝、せせり、骨付き手羽と岩塩、つくね、ねぎま、レバ刺し660円、Kyoto Akadori のたたき1,100円、揚げトマトのマスカルポーネ、もずく、ポテトサラダ、カマンベール、Tochio aburage の生姜醤油、焼酎が豊富、売り切れる串もあり予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B28839434/', R + 'B36886944/', R + 'B511721898/', R + 'B516803415/', R + 'B525698986/', R + 'B529386894/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cozy retro counter; reserve for the omakase set (2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番10号 (go) 6m; same building as Robata Furoshiki and next lot to SASAYA, which are offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B28839434/', R + 'B516803415/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase yakitori set (4 skewers, appetizers, 3 small dishes)', '¥2,800', 'Courses', 'no', 'no', 'Reservation required. August 2025.', 'omakase'),
      it('', '', 'Ume no Yu course (8 skewers, mini curry)', '¥4,500', 'Courses', 'no', 'no', 'August 2025.', 'course'),
      it('', '', 'Liver sashimi', '¥660', 'Sashimi', 'ask', 'no', 'August 2025.', 'reba_sashi'),
      it('', '', 'Kyoto Akadori tataki', '¥1,100', 'Sashimi', 'ask', 'no', 'August 2025.', 'tataki'),
      it('', '', 'Fried tomato with mascarpone', '', 'Dishes', 'no', 'no', 'August 2025.', 'tomato'),
      it('', '', 'Mozuku', '', 'Dishes', 'ask', 'ask', 'October 2025.', 'mozuku'),
    ] }, {
    cuisine: '焼き鳥・おまかせ焼き鳥セット2,800円: 前菜、小鉢3品、串4本 (要予約)・梅の湯コース4,500円: 串8本、一品、小鉢、サラダ、メイン、ミニカレー・6本の盛り合わせ・Kyoto Akadori のもも、ほんのりレアのむね、砂肝、せせり、岩塩の骨付き手羽、つくね、ねぎま・レバ刺し660円、Kyoto Akadori のたたき1,100円・揚げトマトのマスカルポーネ・もずく、ポテトサラダ、カマンベール・生姜醤油の Tochio aburage・焼酎が豊富・カウンター17席',
    neighborhood: '中央区東心斎橋1-13-10、小学校の正門の向かい。心斎橋駅5番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。醤油のたれ、揚げトマト、コースのミニカレー、生姜醤油。',
    vegan_detail: 'ヴィーガンではありません。どれも鶏、レバ刺しも、マスカルポーネとカマンベール。',
    notes: '[焼き鳥・東心斎橋、昭和の銭湯がテーマの焼き鳥カウンター] 心斎橋近く、銭湯風ののれんの奥にあるカウンター17席の店で、昭和の歌謡曲が流れる。梅の湯は以前は馬肉料理の店で、焼き鳥店として戻ってきた。まずはおまかせセット (2,800円、要予約) で前菜と小鉢に串4本、またはミニカレーで締める4,500円のコース。焼きは的確で、皮がパリッとした Kyoto Akadori のもも、ほんのりレアのむね、岩塩の骨付き手羽。揚げトマトのマスカルポーネ、もずく、ポテトサラダ、焼いた Tochio aburage も。焼酎が豊富。売り切れる串もあるので予約を。カード可。',
  });
}

// ================================================================ ろばた 風炉式
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135275/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://robata-furoshiki.com/';
  const D = day(['18:00', '05:30']);
  put({
    id: 'osaka_robata_furoshiki_higashishinsaibashi', name: 'ろばた 風炉式 (Robata Furoshiki)', category: 'OMNI',
    lat: 34.673718, lng: 135.504193, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy and ponzu; butter-soy nagaimo; pasta; omurice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, seafood and beef dishes; dashi; egg; shirasu in the appetizer.',
    hours_raw: 'Mon, Tue, Thu–Sun 18:00–05:30 (last order food 04:30, drinks 05:00); closed Wed (Tabelog). Smoking at the table allowed (2026 reviews). Cards, iD, QUICPay and QR accepted (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-10, Daiho Kyoei Bldg 3F — 3 min from Nagahoribashi Stn',
    cuisine: 'Charcoal robatayaki izakaya · appetizer of grated daikon with shirasu · sashimi platter (tuna, hamachi, squid, swordfish, sea bream) · grilled sanma with grated daikon and ponzu · charcoal-grilled vegetable platter · nagaimo grilled with butter and soy · spear squid with sea urchin · charcoal-grilled sirloin cap · straw-grilled dishes · zucchini wrapped in meat with Kaneyama miso · dashimaki tamago with mentaiko, grilled anago · kamameshi in several kinds · lightly pickled cucumber, water eggplant and tomato · pasta, omurice · wide drink list · 12 counter seats and 2 tables',
    website: OWN, gmaps: gm('ろばた 風炉式'), menu_url: null,
    notes: "[Izakaya · charcoal robata open until 5:30 am, Higashi-Shinsaibashi] A stylish third-floor robata izakaya near Nagahoribashi, open since 2023 from 18:00 until 5:30, which draws a late-night Minami crowd. Everything comes off the charcoal or straw fire in front of the counter: whole sanma with grated daikon, a big grilled vegetable platter, butter-soy nagaimo and sirloin cap. The sashimi platter is fresh (one diner waited a while for it), and the mentaiko dashimaki with grilled anago is a standout. Finish with one of several kamameshi or a buttery omurice. Smoking is allowed at the table. Not cheap, but seasonal and carefully made. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 March 2023 (Tabelog)', background: 'Charcoal robatayaki izakaya (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Charcoal-grilled seasonal fish, meat and vegetables; kamameshi.',
      anecdotes: [
        { text: '"The skin was crispy and the flesh juicy, with a hint of bitterness in some parts. Paired with grated daikon and ponzu sauce, it was a perfect match for drinks." — September 2026, grilled sanma.', source: R + 'B513288642/' },
        { text: '"The dashimaki tamago (Japanese rolled omelette) was the most delicious dish. It was fluffy and tender with mentaiko… and I enjoyed it with grilled conger eel!" — August 2026.', source: R + 'B534486809/' },
      ],
      japanese_sources_summary: '食べログ: ろばた 風炉式、大阪市中央区東心斎橋1-13-10 大宝共栄ビル 3F、長堀橋駅から徒歩3分、月・火・木〜日 18:00〜翌5:30 (L.O. 料理4:30、ドリンク5:00)、水休み、カード・iD・QUICPay・QR可、20席 (カウンター12、4人掛けテーブル2)、2023年3月12日開店、公式サイトあり。口コミ(2025年9月〜2026年10月): しらすおろしのお通し、刺身の盛り合わせ (マグロ、ハマチ、イカ、カジキ、鯛)、さんまの塩焼きと大根おろし・ポン酢、焼き野菜盛り合わせ、長芋のバター醤油焼き、ヤリイカとウニ、サーロインキャップの炭火焼き、藁焼き、肉巻きズッキーニと Kaneyama の味噌、明太子入りのだし巻きと焼き穴子、数種の釜飯、きゅうりの浅漬け、水なすとトマトの浅漬け、パスタ、オムライス、酒が豊富、テーブルで喫煙可、刺身が出るまで時間がかかったという声、深夜のミナミの客、エレベーターを降りるとおしゃれな店内。',
      confidence: 'medium', sources: [TB, OWN, R + 'B513288642/', R + 'B532535245/', R + 'B533498460/', R + 'B534486809/', R + 'B536693177/', R + 'B537721296/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; quick drink service (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-10 大宝共栄ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.673655, 135.504193); same building as Toriya Ume no Yu (osaka_toriya_ume_no_yu_higashishinsaibashi), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目13番10号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513288642/', R + 'B536693177/', R + 'B534486809/'],
    price_note: 'No dish prices in the reviews; JPY 5,000–9,999 per person (Tabelog; 2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'September 2026.', 'sashimi'),
      it('', '', 'Grilled sanma', '', 'Grill', 'no', 'no', 'September 2026.', 'sanma'),
      it('焼き野菜盛り合わせ', '', 'Grilled vegetable platter', '', 'Grill', 'ask', 'ask', 'September 2026 photo caption.', 'yasai'),
      it('', '', 'Nagaimo grilled with butter and soy', '', 'Grill', 'no', 'no', 'September 2026.', 'nagaimo'),
      it('', '', 'Charcoal-grilled sirloin cap', '', 'Grill', 'ask', 'no', 'September 2026.', 'beef'),
      it('', '', 'Dashimaki tamago with mentaiko', '', 'Dishes', 'no', 'no', 'August 2026.', 'dashimaki'),
      it('', '', 'Kamameshi', '', 'Rice', 'ask', 'no', 'July 2026.', 'kamameshi'),
      it('きゅうりの浅漬け', '', 'Lightly pickled cucumber', '', 'Dishes', 'ask', 'ask', 'September 2026 photo caption.', 'asazuke'),
    ] }, {
    cuisine: '炭火の炉端焼き居酒屋・しらすおろしのお通し・刺身の盛り合わせ (マグロ、ハマチ、イカ、カジキ、鯛)・さんまの塩焼き、大根おろしとポン酢・炭火の焼き野菜盛り合わせ・長芋のバター醤油焼き・ヤリイカとウニ・サーロインキャップの炭火焼き・藁焼き・Kaneyama の味噌の肉巻きズッキーニ・明太子入りのだし巻きと焼き穴子・数種の釜飯・きゅうり、水なす、トマトの浅漬け・パスタ、オムライス・酒が豊富・カウンター12席とテーブル2卓',
    neighborhood: '中央区東心斎橋1-13-10 大宝共栄ビル 3F。長堀橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油とポン酢、長芋のバター醤油、パスタ、オムライス。',
    vegan_detail: 'ヴィーガンではありません。魚介と牛肉の料理、だし、卵、お通しのしらす。',
    notes: '[居酒屋・東心斎橋、朝5時半まで開く炭火の炉端] 長堀橋近くのビル3階にあるおしゃれな炉端焼きの居酒屋で、2023年開店、18時から朝5時半まで営業し、ミナミの夜の客も多い。どれもカウンター前の炭火か藁で焼く: 大根おろしを添えた丸ごとのさんま、大きな焼き野菜盛り合わせ、長芋のバター醤油、サーロインキャップ。刺身の盛り合わせは新鮮 (出るまで時間がかかったという声も)、明太子入りのだし巻きと焼き穴子は絶品。締めは数種の釜飯か、バターの香るオムライス。テーブルで喫煙可。安くはないが、季節感があってていねい。水曜休み。',
  });
}

// ================================================================ 本格炉端焼き人夢叶思ひとむかし
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27071439/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '14:00'], ['17:30', '23:00']); const WE = day(['07:00', '11:00'], ['11:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_honkaku_robatayaki_hitomukashi_namba', name: '本格炉端焼き人夢叶思ひとむかし (Honkaku Robatayaki Hitomukashi)', category: 'OMNI',
    lat: 34.664001, lng: 135.503168, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dashi soy sauce and sesame sauce; tempura; gratin.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood throughout; miso soup with dashi; soft roe.',
    hours_raw: 'Mon–Fri 11:00–14:00 (last order 13:30) and 17:30–23:00 (last order food 22:15, drinks 22:30); Sat–Sun 7:00–11:00, 11:00–14:30 (last order 14:00) and 17:30–23:00 (Tabelog). No lunch reservations; a waiting board at the door (February 2026). 5% service charge at dinner (Tabelog). Cards and QR (incl. Alipay, WeChat Pay) accepted; no e-money (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambasennichimae 14-26, in the Ura-Namba back streets — 3 min from Namba Stn',
    cuisine: 'Robatayaki izakaya and seafood lunch bowls · lunch: Bakudan don ¥1,800 (¥1,400 in 2024): salmon roe, tuna, negitoro, sea bream, takuan, shiso, nori and wasabi, with sesame-sauce sashimi, a small dish, tororo, miso soup and white or mixed-grain rice; eat it with dashi soy, then the sesame sashimi, then the tororo · Gobu Gobu don ¥1,800: Wakayama shirasu half raw, half boiled · Senshu anago tempura don ¥1,700 · hon-maguro don with tororo · seasonal sanma set; large rice free · weekend breakfast 7:00–11:00 · dinner: anago nigiri, sashimi platter under a smoking lid, potato salad, nut salad, soft-roe mapo tofu, Manganji peppers, gratin, grilled rice balls',
    website: null, gmaps: gm('本格炉端焼き人夢叶思ひとむかし'), menu_url: null,
    notes: "[Izakaya · robata izakaya with a famous seafood lunch bowl, Ura-Namba] A popular robatayaki izakaya in the Ura-Namba back streets, open since 2012, where lunch lines form for seafood bowls. The signature Bakudan don (¥1,800) heaps salmon roe, tuna, negitoro and sea bream over rice; eat it in three stages, first with dashi soy, then with the sesame-dressed sashimi on the side, then with tororo. Seasonal bowls rotate, like a Wakayama shirasu half-raw, half-boiled bowl or a Senshu anago tempura don. Dinner is robata and a sashimi platter served under a cloud of smoke, plus anago nigiri and soft-roe mapo tofu. Weekend breakfast from 7:00. No lunch reservations; arrive early. 5% service charge at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2012 (Tabelog)', background: 'Robatayaki izakaya with seafood lunch bowls (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Bakudan seafood rice bowl; robatayaki.',
      anecdotes: [
        { text: '"The restaurant has a recommended way to enjoy it… First, drizzle some dashi soy sauce over it… Next, enjoy it with the sashimi drizzled with sesame sauce… Finally, mix in the yam tororo for a hearty finish." — August 2024, Bakudan don.', source: R + 'B490983616/' },
        { text: '"When I opened the lid, it was like opening a treasure box, with smoke rising dramatically—such a stylish presentation! Not only was it visually impressive, but the sashimi was also incredibly fresh…" — September 2026, dinner.', source: R + 'B536215488/' },
      ],
      japanese_sources_summary: '食べログ: 本格炉端焼き人夢叶思ひとむかし、大阪市中央区難波千日前14-26、なんば駅から徒歩3分、月〜金 11:00〜14:00 (L.O. 13:30)・17:30〜23:00、土日 7:00〜11:00・11:00〜14:30・17:30〜23:00、昼は予約不可、夜はサービス料5%、カード・QR (Alipay、WeChat Pay を含む) 可、電子マネー不可、2012年11月1日開店。口コミ(2024年8月〜2026年10月): 名物の Bakudan don 1,800円 (2024年は1,400円; イクラ、マグロ、ネギトロ、鯛、たくあん、大葉、海苔、わさび、ごまだれの刺身、小鉢、とろろ、味噌汁、白米か雑穀米)、だし醤油→ごまだれの刺身→とろろの三段階、Gobu Gobu don 1,800円 (和歌山のしらす、生と釜揚げ半々)、Senshu anago の天丼1,700円、本マグロ丼、さんまの定食、大盛り無料、週末の朝食、夜はアナゴのにぎり、煙の立つふたの刺身盛り、ポテトサラダ、ナッツのサラダ、白子の麻婆豆腐、Manganji の唐辛子、グラタン、焼きおにぎり、昼は行列、ウェイティングボード、LINE 登録の特典、ていねいな接客。',
      confidence: 'medium', sources: [TB, R + 'B488347503/', R + 'B490983616/', R + 'B533906742/', R + 'B536215488/', R + 'B537459932/', R + 'B537807003/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Waiting board at the door; recommended way to eat the bowl explained (2024–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番26号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B488347503/', R + 'B490983616/', R + 'B533906742/'],
    price_note: 'Lunch prices from August–October 2026 reviews; 5% service charge at dinner.', last_checked: TODAY, items: [
      it('', '', 'Bakudan don (seafood rice bowl, lunch)', '¥1,800', 'Lunch', 'no', 'no', 'October 2026.', 'bakudan'),
      it('', '', 'Gobu Gobu don (Wakayama shirasu, lunch)', '¥1,800', 'Lunch', 'no', 'no', 'October 2026.', 'gobugobu'),
      it('', '', 'Senshu anago tempura don (lunch)', '¥1,700', 'Lunch', 'no', 'no', 'August 2026.', 'anago_ten'),
      it('', '', 'Hon-maguro don (lunch)', '', 'Lunch', 'no', 'no', 'October 2026.', 'maguro'),
      it('', '', 'Sashimi platter (dinner)', '', 'Dinner', 'ask', 'no', 'September 2026.', 'sashimi'),
      it('', '', 'Soft-roe mapo tofu (dinner)', '', 'Dinner', 'no', 'no', 'September 2026.', 'shirako_mapo'),
    ] }, {
    cuisine: '炉端焼きの居酒屋と昼の海鮮丼・昼: Bakudan don 1,800円 (2024年は1,400円): イクラ、マグロ、ネギトロ、鯛、たくあん、大葉、海苔、わさびに、ごまだれの刺身、小鉢、とろろ、味噌汁、白米か雑穀米、だし醤油→ごまだれの刺身→とろろの順で・Gobu Gobu don 1,800円: 和歌山のしらすを生と釜揚げ半々・Senshu anago の天丼1,700円・とろろ付きの本マグロ丼・季節のさんまの定食、大盛り無料・週末は7時から朝食・夜: アナゴのにぎり、煙が立つふたの刺身盛り、ポテトサラダ、ナッツのサラダ、白子の麻婆豆腐、Manganji の唐辛子、グラタン、焼きおにぎり',
    neighborhood: '中央区難波千日前14-26、裏なんばの路地。なんば駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。だし醤油とごまだれ、天ぷら、グラタン。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、だしの味噌汁、白子。',
    notes: '[居酒屋・裏なんば、名物の海鮮丼がある炉端の居酒屋] 裏なんばの路地にある人気の炉端焼きの居酒屋で、2012年開店、昼は海鮮丼に行列ができる。名物の Bakudan don (1,800円) はイクラ、マグロ、ネギトロ、鯛をご飯に山盛り。だし醤油で、次に添えのごまだれの刺身と、最後にとろろで、と三段階で味わう。季節の丼も入れ替わり、和歌山のしらすを生と釜揚げで半々にした丼や Senshu anago の天丼も。夜は炉端と、煙をまとって出てくる刺身盛り、アナゴのにぎり、白子の麻婆豆腐。週末は朝7時から朝食も。昼は予約不可なので早めに。夜はサービス料5%。',
  });
}

// ================================================================ 備長炭やきとり SASAYA 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013316/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://sasaya-company.jp/';
  put({
    id: 'osaka_binchotan_yakitori_sasaya_shinsaibashi', name: '備長炭やきとり SASAYA 心斎橋本店 (Binchotan Yakitori SASAYA Shinsaibashi Honten)', category: 'OMNI',
    lat: 34.673654, lng: 135.504329, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy tare; sesame-soy dressing on the tataki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and duck throughout, incl. raw chicken sashimi and tataki.',
    hours_raw: 'Daily 18:00–05:00 (last order food 04:00, drinks 04:30) (Tabelog). Appetizer charge ¥418 (Tabelog). Two tables only, so reserve for groups (April 2026). Cards and PayPay accepted; no e-money; smoking allowed (Tabelog).',
    hours: ALL(day(['18:00', '05:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-9, in an alley — 3 min from Shinsaibashi Stn',
    cuisine: 'Binchotan yakitori, served on plates · Kishu binchotan-grilled chicken, morning-fresh, served off the skewer on plates · seseri with green onion · heart · bonjiri · chicken sashimi · chicken tataki (liver and heart) with sesame, on Kutani-style plates · seasonal specials such as duck with wasabi, yukhoe-style · edamame · Japanese sake · ¥418 appetizer · 7 counter seats and 10 at tables',
    website: OWN, gmaps: gm('備長炭やきとり SASAYA 心斎橋本店'), menu_url: null,
    notes: "[Yakitori · binchotan chicken on plates until 5 am, Higashi-Shinsaibashi] The main shop of SASAYA, tucked into an alley near Shinsaibashi, grilling morning-fresh chicken over Kishu binchotan and serving it off the skewer on colorful Japanese plates. It's open until 5:00, so it works as a first stop or the last. Try the seseri with green onion, the heart, and the chicken tataki of liver and heart with sesame on a Kutani-style plate; the chicken sashimi and seasonal duck with wasabi are other picks. The counter is friendly and chatty. One diner found it good rather than special. Only two tables, so reserve for groups. ¥418 appetizer charge. Smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main shop of SASAYA (Tabelog).', background: 'Binchotan yakitori restaurant (Tabelog; 2026 reviews).', philosophy: 'Morning-fresh chicken grilled over Kishu binchotan (September 2026 review).', specialty: 'Yakitori served on plates; chicken tataki.',
      anecdotes: [
        { text: '"Especially the chicken tataki (including liver and heart) we had that day was served on a stunning Kutani-style plate… The rich, creamy umami combined with the nutty aroma of sesame was exquisite…" — September 2026.', source: R + 'B536515883/' },
        { text: '"I absolutely love the negi-topped seseri (neck meat)! The heart was delicious too, and the seasonal special of duck with wasabi, resembling yukhoe, was incredibly tasty." — April 2026.', source: R + 'B526146393/' },
      ],
      japanese_sources_summary: '食べログ: 備長炭やきとり SASAYA 心斎橋本店、大阪市中央区東心斎橋1-13-9、心斎橋駅から徒歩3分、毎日18:00〜翌5:00 (L.O. 料理4:00、ドリンク4:30)、お通し418円、カード・PayPay 可、電子マネー不可、17席 (カウンター7、テーブル10)、喫煙可、公式サイトあり。口コミ(2026年4〜9月): Kishu の備長炭、朝引きの鶏、串から外して皿で出す、ねぎのせせせり、ハツ、Bonjiri、鶏刺し、レバーとハツのたたきをごまでKutani 風の皿に、季節の鴨のわさびユッケ風、枝豆、日本酒、話の楽しいカウンター、テーブルは2卓なので予約を、普通だったという声、朝5時までで一軒目にも締めにも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B526146393/', R + 'B526997063/', R + 'B528207625/', R + 'B529831764/', R + 'B530190979/', R + 'B536515883/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter conversation (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.673654, 135.504252); next lot to Toriya Ume no Yu and Robata Furoshiki (1-13-10), pin offset ~7 m east so the three do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目13番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526146393/', R + 'B536515883/'],
    price_note: 'No dish prices in the reviews; JPY 3,000–7,999 average (Tabelog); ¥418 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Seseri with green onion', '', 'Grill', 'ask', 'no', 'April 2026.', 'seseri'),
      it('', '', 'Heart', '', 'Grill', 'ask', 'no', 'April 2026.', 'hatsu'),
      it('', '', 'Chicken tataki (liver and heart) with sesame', '', 'Dishes', 'no', 'no', 'September 2026.', 'tataki'),
      it('', '', 'Chicken sashimi', '', 'Dishes', 'ask', 'no', 'June 2026.', 'torisashi'),
      it('', '', 'Duck with wasabi (seasonal)', '', 'Dishes', 'ask', 'no', 'April 2026.', 'kamo'),
    ] }, {
    cuisine: '備長炭の焼き鳥、皿で・Kishu の備長炭で焼く朝引きの鶏、串から外して皿で・ねぎのせせせり・ハツ・Bonjiri・鶏刺し・レバーとハツのたたきをごまで、Kutani 風の皿に・季節の鴨のわさび、ユッケ風・枝豆・日本酒・お通し418円・カウンター7席とテーブル10席',
    neighborhood: '中央区東心斎橋1-13-9、路地の中。心斎橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油のたれ、たたきのごま醤油。',
    vegan_detail: 'ヴィーガンではありません。どれも鶏と鴨、生の鶏刺しとたたきも。',
    notes: '[焼き鳥・東心斎橋、朝5時まで皿で出す備長炭の焼き鳥] 心斎橋近くの路地にある SASAYA の本店で、朝引きの鶏をKishu の備長炭で焼き、串から外して色とりどりの和食器で出す。朝5時まで開いているので一軒目にも締めにも。ねぎのせせせり、ハツ、Kutani 風の皿にのるごまのレバーとハツのたたきを。鶏刺しや季節の鴨のわさびも。カウンターは気さくで話が弾む。普通だったという声も。テーブルは2卓だけなので人数が多いなら予約を。お通し418円。喫煙可。',
  });
}

save();
