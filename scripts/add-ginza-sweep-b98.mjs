// Ginza Station half-mile sweep (805 m), batch 98 — all-genre phase (all OMNI).
//   + 明月庵 ぎんざ 田中屋 銀座本店 (main shop of the 1956 Edo-soba house; Matsuya branch is b97)
//   + 銀座 佐藤養助 (Ginza shop of the Akita Inaniwa-udon maker)
//   + 梅丘寿司の美登利総本店 銀座店 (Sushi no Midori, Corridor-side; queues)
//   + 銀座うかい亭 (Ukai-tei teppanyaki; Tabelog Award Bronze 2017–2020)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 明月庵 ぎんざ 田中屋 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002617/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '21:00']);
  put({
    id: 'tokyo_meigetsuan_tanakaya_ginza_honten', name: '明月庵 ぎんざ 田中屋 銀座本店 (Meigetsuan Ginza Tanakaya Honten)', category: 'OMNI',
    lat: 35.671075, lng: 139.762414,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura fried in sesame oil, ten-don, udon, and Edo-style soba whose buckwheat ratio is not stated; the tsuyu is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tempura of seasonal fish, bonito and ayu among the sake snacks; the tsuyu is not described.',
    hours_raw: 'Daily 11:30–21:00 (L.O. 20:20) (Tabelog). The listing also carries a notice of temporary closure from 8 August; reviews from September and October 2026 show it open.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme (6-6-19), near the Sony-dōri and Miyuki-dōri corner — 3 min from Ginza Stn exit B9',
    cuisine: 'Edo-style soba since 1956 · stone-ground buckwheat · seasonal tempura in sesame oil · ten-don · "soba + a dish" with sake · two floors with private rooms', cuisine_type: 'udon_soba',
    website: 'http://www.soba-tanakaya.com/', gmaps: gm('明月庵 ぎんざ 田中屋 銀座本店'), menu_url: null,
    notes: "[Soba · Tanakaya's Ginza main shop] The 80-seat main shop of the Edo-style soba house that has kept the tradition since 1956, on two floors of tables and private rooms near the Sony-dōri and Miyuki-dōri corner. The buckwheat is stone-ground, and seasonal fish and vegetable tempura is fried light in sesame oil. Adults come to drink first, ordering tempura, seasonal snacks such as returning bonito, ginkgo and ayu, and shochu cut with soba-yu, then finish with zaru soba. Warm soba in a well-made broth and a crisp ten-don suit solo lunches. The room is calm and the crowd mostly older; Ginza prices. The Matsuya Ginza 8F branch is listed separately.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1956 (Tabelog listing)', background: 'Main shop; a branch is in Matsuya Ginza (soba-tanakaya.com).', philosophy: null, specialty: 'Edo-style soba; sesame-oil tempura.',
      anecdotes: [
        { text: '"I savor shochu with soba-yu and plenty of condiments, along with returning bonito, ginkgo nuts, and sweetfish. I conclude with fresh soba." — October 2026.', source: R + 'B537517991/' },
        { text: '"The tempura rice bowl was crispy and very filling. Thanks to the quality of the oil, it wasn\'t greasy." — September 2026, rainy-day lunch.', source: R + 'B536492716/' },
      ],
      japanese_sources_summary: '食べログ: 明月庵 ぎんざ 田中屋 銀座本店、銀座6-6-19(ソニー通りとみゆき通りの交差点近く)、銀座駅B9出口徒歩3分、80席(4名個室)、毎日11:30〜21:00(L.O. 20:20)、子ども可、公式サイト soba-tanakaya.com、備考に「8月8日より臨時休業」の告知。店の紹介: 1956年創業、石臼挽きのそば粉と水の加減で守る江戸前そば、太白胡麻油で揚げる旬の魚と野菜の天ぷら、酒肴、「そば+一品」。2026年の口コミ(9月・10月): 二フロアにテーブルと個室、落ち着いた大人の客層、温かいそばとおいしいつゆ、天丼はカラッと油が重くない、柚子七味、天ぷらと日本酒から始めてざるそばで締める、戻り鰹・銀杏・鮎、そば湯割りの焼酎、銀座らしい値段、料理の提供が早い。',
      confidence: 'medium', sources: [TB, R + 'B537517991/', R + 'B536492716/', R + 'B536214338/', R + 'B528089896/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm room, welcoming to solo diners.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-6-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Listing shows a temporary-closure notice from 8 August (year not given), but reviews from September and October 2026 report meals there.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目6番19号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536492716/', R + 'B537517991/'],
    price_note: 'No prices captured; ¥2,000–8,000 in reviews.', last_checked: TODAY, items: [
      it('ざるそば', 'zaru soba', 'Zaru soba', '', 'Soba', 'no', 'no', '', 'zaru'),
      it('天丼', 'tendon', 'Ten-don', '', 'Rice', 'no', 'no', 'September 2026.', 'tendon'),
      it('季節の天ぷら', '', 'Seasonal tempura (sesame oil)', '', 'Small plates', 'no', 'no', '', 'tempura'),
    ] }, {
    cuisine: '1956年からの江戸前そば・石臼挽き・胡麻油で揚げる旬の天ぷら・天丼・酒と「そば+一品」・二フロアに個室',
    neighborhood: '銀座六丁目(6-6-19)、ソニー通りとみゆき通りの角の近く。銀座駅B9出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。胡麻油で揚げる天ぷら、天丼、うどん、割合の書かれていない江戸前そば。つゆの中身も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。旬の魚の天ぷら、酒肴に鰹や鮎。つゆの中身は書かれていません。',
    notes: '[そば・田中屋の銀座本店] 1956年から伝統を守る江戸前そばの本店で80席、ソニー通りとみゆき通りの角の近くの二フロアにテーブルと個室。石臼挽きのそば粉で打ち、旬の魚や野菜の天ぷらを胡麻油で軽く揚げます。大人の客は天ぷら、戻り鰹・銀杏・鮎などの季節の肴、そば湯割りの焼酎でまず飲み、ざるそばで締めます。つゆのおいしい温かいそばやカラッとした天丼は一人の昼にも。落ち着いた店内で客層は年配が中心、値段は銀座らしい水準。松屋銀座8階の支店は別に掲載しています。',
  });
}

// ================================================================ 銀座 佐藤養助
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13033146/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:30', '15:00'], ['17:00', '22:00']); const we = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_ginza_sato_yosuke', name: '銀座 佐藤養助 (Ginza Sato Yosuke)', category: 'OMNI',
    lat: 35.671461, lng: 139.761562,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Inaniwa udon is a wheat noodle, and the menu adds tempura and ten-don.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp and chicken tempura, butter chicken curry; the soy dipping sauce is not described.',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:30) and 17:00–22:00 (L.O. 21:00); Sat and Sun 11:30–15:00 and 17:00–21:00 (L.O. 20:00); closed at Obon and New Year (Tabelog). Bookings only for weekday dinner; numbered tickets at lunch. 10% service charge after 17:00.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Idei Honkan 1F — 3 min from Ginza Stn exits C2/C3',
    cuisine: 'Inaniwa udon from the Akita maker · seiro ni-aji (soy and sesame-miso dips, ¥1,400) · tempura seiro · ten-don · butter chicken curry · tablet queue tickets', cuisine_type: 'udon_soba',
    website: 'http://www.sato-yoske.co.jp/ginzaten.htm', gmaps: gm('銀座 佐藤養助'), menu_url: null,
    notes: "[Udon · Akita's Inaniwa udon in Ginza 6-chōme] The Ginza shop, open since 2006, of Satō Yōsuke, a long-established Inaniwa udon maker from Akita (a reviewer dates it to about 1860). It serves thin, smooth, chewy Inaniwa noodles. Seiro ni-aji (¥1,400 in October 2026) comes with two dips, soy and a rich sesame miso; there's also tempura seiro with plump shrimp, tempura udon, a sweet-glazed ten-don, chicken tempura seiro and butter chicken curry. Lunch queues form before opening: take a number on the tablet outside and wait for an SMS. Evenings are calmer, but a 10% service charge applies after 5 pm. Many overseas visitors; orders by QR code; prices are high for udon.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2006 (Tabelog); main shop in Akita, dating to about 1860 (October 2026 review)', background: 'Ginza shop of an Akita Inaniwa-udon maker (sato-yoske.co.jp).', philosophy: null, specialty: 'Inaniwa udon; sesame-miso dip.',
      anecdotes: [
        { text: '"The Tempura Seiro comes with two types of dipping sauces (soy sauce and sesame miso)… I found the sesame sauce rich and delicious." — October 2026.', source: R + 'B517467260/' },
        { text: '"After getting a numbered ticket from the machine, I found out I was 13th in line… I ordered the Seiro Ni Aji for JPY 1,400 via QR code." — October 2026, rainy Saturday.', source: R + 'B537941365/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 佐藤養助、銀座6-4-17 出井本館1F、銀座駅C2・C3出口徒歩3分、80席、個室あり、平日11:30〜15:00・17:00〜22:00、土日11:30〜15:00・17:00〜21:00、お盆と年末年始休、予約は平日夜のみ、17時以降サービス料10%、2006年12月1日開店、公式サイト sato-yoske.co.jp。2026年10月の口コミ: 店前のタブレットで受付し番号で呼ばれる、天ぷらせいろ(醤油と胡麻味噌の二種のつけ汁)、バターチキンカレー、天ぷらうどん、天ざるうどんと天丼、海外からの客が多い、夜は行列なし、QRで注文、値段は高め、鶏天せいろ、せいろ二味1,400円、本店は秋田で1860年頃からの老舗、なめらかで上品なうどん。',
      confidence: 'medium', sources: [TB, R + 'B517467260/', R + 'B537941365/', R + 'B534612017/', R + 'B537804893/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet queue tickets and QR ordering.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-17 出井本館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番17号 (go) 10m; OSM 銀座 佐藤養助 node/13378191701 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537941365/', R + 'B517467260/'],
    price_note: 'One price from an October 2026 review.', last_checked: TODAY, items: [
      it('せいろ二味', 'seiro ni-aji', 'Inaniwa udon with soy and sesame-miso dips', '¥1,400', 'Udon', 'no', 'no', 'October 2026.', 'seiro_niaji'),
      it('天ぷらせいろ', '', 'Tempura seiro', '', 'Udon', 'no', 'no', 'October 2026.', 'tempura_seiro'),
      it('天丼', 'tendon', 'Ten-don', '', 'Rice', 'no', 'no', 'October 2026.', 'tendon'),
      it('バターチキンカレー', '', 'Butter chicken curry', '', 'Curry', 'ask', 'no', 'October 2026.', 'butter_chicken'),
    ] }, {
    cuisine: '秋田の稲庭うどんの老舗・せいろ二味(醤油と胡麻味噌、1,400円)・天ぷらせいろ・天丼・バターチキンカレー・タブレットの整理券',
    neighborhood: '銀座六丁目、出井本館1F。銀座駅C2・C3出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。稲庭うどんは小麦の麺で、天ぷらや天丼もあります。',
    vegan_detail: 'ヴィーガンではありません。海老や鶏の天ぷら、バターチキンカレー。醤油のつけ汁の中身は書かれていません。',
    notes: '[うどん・銀座六丁目で秋田の稲庭うどん] 秋田の稲庭うどんの老舗「佐藤養助」(口コミによれば1860年頃から)の銀座店で、2006年開店。細くなめらかでコシのある稲庭うどんを出します。せいろ二味(2026年10月は1,400円)は醤油と濃厚な胡麻味噌の二つのつけ汁で。ぷりぷりの海老の天ぷらせいろ、天ぷらうどん、甘めのたれの天丼、鶏天せいろ、バターチキンカレーも。昼は開店前から行列ができるので、店前のタブレットで番号を取ってSMSを待ちます。夜は落ち着いていますが17時以降はサービス料10%。海外からの客が多く、注文はQRコード、うどんとしては高めです。',
  });
}

// ================================================================ 梅丘寿司の美登利総本店 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004995/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '15:00'], ['17:00', '21:00']); const we = day(['11:00', '21:00']);
  put({
    id: 'tokyo_sushi_no_midori_ginza', name: '梅丘寿司の美登利総本店 銀座店 (Sushi no Midori Ginza)', category: 'OMNI',
    lat: 35.670383, lng: 139.759591,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri sets and courses eaten with soy sauce, plus grilled squid with butter; whether wheat-free soy sauce is available is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi chain.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:00) and 17:00–21:00 (L.O. 20:30); Sat, Sun and holidays 11:00–21:00 (L.O. 20:30); closed 1 Jan (Tabelog). Evening tickets from 16:00; 45-minute limit when busy.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Tokyo Kōsoku Dōro Yamashita Bldg 1F, Corridor side — 4 min from Ginza Stn exit A2',
    cuisine: 'Popular sushi chain (Umegaoka origin) · big-topping nigiri sets · omakase and premium nigiri · festival course with dessert · daimyō mackerel · long queues', cuisine_type: 'sushi',
    website: 'https://www.sushinomidori.co.jp/', gmaps: gm('梅丘寿司の美登利 銀座店'), menu_url: null,
    notes: "[Sushi · Midori's queue-famous Ginza branch] The 82-seat Ginza branch of the Umegaoka-born Sushi no Midori chain, on the Corridor side of Ginza 7-chōme, known for generous toppings at moderate prices. Expect queues: one weekday lunch took two hours from 11:00, and evening tickets go out from 4 pm, with about ten people waiting before then. Premium and omakase nigiri come piece by piece; extras such as daimyō mackerel and off-menu grilled squid tentacles with onion and butter can be ordered. Around ¥3,000–6,000 a head. Many overseas guests. It's busy and brisk: a 45-minute limit applies, and one diner found some staff curt; another found the rice tightly packed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza branch of the Umegaoka head shop (Tabelog listing name)', background: 'Chain (sushinomidori.co.jp).', philosophy: null, specialty: 'Big-topping nigiri.',
      anecdotes: [
        { text: '"I lined up from 11:00 and finally got in after 13:00… Each topping was large and carefully prepared, melting in my mouth." — October 2026, premium nigiri.', source: R + 'B537839552/' },
        { text: '"I was informed of a 45-minute time limit, and I noticed that some of the staff had a rather stern tone." — October 2026, omakase nigiri plus daimyō mackerel.', source: R + 'B537292631/' },
      ],
      japanese_sources_summary: '食べログ: 梅丘寿司の美登利総本店 銀座店、銀座7-2 東京高速道路山下ビル1F、銀座駅A2出口徒歩4分、82席、平日11:00〜15:00・17:00〜21:00、土日祝11:00〜21:00、1/1休、予約は3日前まで変更可、公式サイト sushinomidori.co.jp。2026年10月の口コミ: 海外からの客が多い、祭りコース(デザート付き、シャリが固めとの声)、夜は16時から整理券配布で16時前に約10人、二子玉川店で会ったスタッフ、秋田の酒、メニューにないゲソのバター玉ねぎ焼き、おまかせ握りと大名サバ、5,000円台で満足、45分制、口調の厳しいスタッフ、特上握りと生ビール、11時から並び13時過ぎに入店、少しずつ握って出してくれる。',
      confidence: 'medium', sources: [TB, R + 'B537839552/', R + 'B537292631/', R + 'B518892367/', R + 'B477457811/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue tickets; 45-minute limit when busy.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2 東京高速道路山下ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番 (lot) 31m; OSM 梅丘寿司の美登利 node/3495084558 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537839552/', R + 'B537292631/'],
    price_note: 'No dish prices captured; ¥3,000–8,000 in reviews.', last_checked: TODAY, items: [
      it('特上にぎり', '', 'Premium nigiri', '', 'Sushi', 'ask', 'no', 'October 2026.', 'tokujo'),
      it('おまかせにぎり', '', 'Omakase nigiri', '', 'Sushi', 'ask', 'no', 'October 2026.', 'omakase'),
      it('大名サバ', '', 'Daimyō mackerel', '', 'Sushi', 'ask', 'no', 'October 2026.', 'daimyo_saba'),
    ] }, {
    cuisine: '梅丘発の人気寿司チェーン・ネタの大きな握り・おまかせや特上の握り・デザート付きの祭りコース・大名サバ・長い行列',
    neighborhood: '銀座七丁目、コリドー側の東京高速道路山下ビル1F。銀座駅A2出口から徒歩4分',
    gf_detail: '要確認。醤油で食べる握りのセットやコース、ゲソのバター焼き。小麦を使わない醤油があるかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚の寿司のチェーン。',
    notes: '[寿司・行列で知られる美登利の銀座店] 梅丘発の「寿司の美登利」の銀座店で82席、銀座七丁目のコリドー側にあり、手頃な値段で大きなネタが評判。行列は覚悟を: 平日の昼に11時から並んで入れたのは13時過ぎ、夜は16時から整理券が配られ、その前から10人ほど並びます。特上やおまかせの握りは少しずつ出され、大名サバやメニューにないゲソの玉ねぎバター焼きなども頼めます。一人3,000〜6,000円ほどで、海外からの客も多め。慌ただしく、混雑時は45分制、口調の厳しいスタッフがいた、シャリが固めだったという声も。',
  });
}

// ================================================================ 銀座うかい亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002367/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['12:00', '16:00'], ['17:00', '21:30']); const sat = day(['11:30', '13:30'], ['17:00', '21:30']);
  put({
    id: 'tokyo_ginza_ukaitei', name: '銀座うかい亭 (Ginza Ukai-tei)', category: 'OMNI',
    lat: 35.66809, lng: 139.767198,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppanyaki courses of Ukai beef, abalone and seafood with soups, risotto, en-croûte fish, cavatappi and desserts; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, abalone and seafood courses.',
    hours_raw: 'Mon–Fri 12:00–16:00 (food L.O. 13:30) and 17:00–21:30 (food L.O. 19:30); Sat and holidays 11:30–13:30 and 17:00–21:30; closed Sundays, two Mondays a month and New Year (Tabelog). Service charge 13%, rising to 15% from 1 December 2026.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: sat }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Jiji Tsūshin Bldg 1F, on Miyuki-dōri — 3 min from Higashi-Ginza Stn exit 6',
    cuisine: 'Ukai group teppanyaki · Ukai-selected beef · abalone · seasonal courses (sea bream en croûte, chestnut soup, Mont Blanc) · 22-seat counter and private rooms · Tabelog Award Bronze 2017–2020', cuisine_type: 'other',
    website: 'http://www.ukai.co.jp/ginza/', gmaps: gm('銀座うかい亭 時事通信ビル'), menu_url: null,
    notes: "[Teppanyaki · Ukai-tei on Miyuki-dōri] Ginza's Ukai-tei, entered through a door bearing a Jean-Michel Folon sculpture into a room of century-old zelkova beams mixing Japanese architecture and Western art, with a 22-seat counter and nine semi-private rooms (94 seats). Chefs cook Ukai-selected beef in front of you, along with abalone (one diner's best of the meal) and seasonal courses. Autumn brought sea bream en croûte, clam soup, chestnut soup and a chestnut Mont Blanc, with extra matsutake to order; earlier menus ran black-wagyu tartare and strip loin with black pepper sauce. Wine and sake pairings are offered. Tabelog Award Bronze 2017–2020. Lunch about ¥15,000–20,000. Strict cancellation fees; service charge rises from 13% to 15% on 1 December 2026.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza shop of the Ukai group (Tabelog listing)', background: 'Group-run (ukai.co.jp).', philosophy: null, specialty: 'Ukai beef teppanyaki.',
      anecdotes: [
        { text: '"Every dish in the course, from the autumn sea bream en croûte to the clam soup and the exquisite special beef steak, was truly delicious! The chestnut soup and Mont Blanc… were both incredibly flavorful." — October 2026, 11th visit.', source: R + 'B455585257/' },
        { text: '"While the meat was excellent, the abalone was simply the best!" — October 2026, lunch.', source: R + 'B537918914/' },
      ],
      japanese_sources_summary: '食べログ: 銀座うかい亭、銀座5-15-8 時事通信ビル1F、東銀座駅6番出口徒歩3分、94席(カウンター22・半個室9)、平日12:00〜16:00・17:00〜21:30、土祝11:30〜13:30・17:00〜21:30、日・月2回・年末年始休、サービス料13%(2026年12月1日から15%)、厳しいキャンセル規定、公式サイト ukai.co.jp/ginza、食べログアワード2017〜2020 Bronze。店の紹介: みゆき通り沿い、ジャン＝ミッシェル・フォロンの彫刻の扉、樹齢百年を超える欅の梁、和の建築と西洋美術、厳選の「うかい特選牛」を目の前で。2026年の口コミ: 秋限定の栗のスープとモンブラン、鯛のパイ包み、蛤のスープ、特選牛ステーキ、黒毛和牛のタルタル、白子のリゾット、鰆のソテー、黒胡椒ソースのストリップロイン、芝のうかい亭は閉店、平日昼に7割ほどの入り、4名で個室、松茸の追加、ワインと日本酒のペアリング、鮑が最高。',
      confidence: 'medium', sources: [TB, R + 'B455585257/', R + 'B537918914/', R + 'B537522350/', R + 'B537419091/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Strict cancellation fees.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-15-8 時事通信ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (December 2026 service-charge notice); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目15番8号 (go) 42m; OSM 銀座うかい亭 node/5531110222 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455585257/', R + 'B537918914/'],
    price_note: 'No course prices captured; lunch ¥15,000–20,000 in one review; 13% service (15% from 1 Dec 2026).', last_checked: TODAY, items: [
      it('ランチコース', '', 'Lunch teppanyaki course (Ukai beef, seasonal dishes)', '', 'Courses', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('うかい特選牛ステーキ', '', 'Ukai-selected beef steak', '', 'Teppan', 'ask', 'no', '', 'ukai_beef'),
      it('鮑', 'awabi', 'Abalone', '', 'Teppan', 'ask', 'no', 'October 2026.', 'abalone'),
      it('栗のモンブラン', '', 'Chestnut Mont Blanc (autumn)', '', 'Dessert', 'no', 'no', 'October 2026.', 'mont_blanc'),
    ] }, {
    cuisine: 'うかいグループの鉄板焼き・うかい特選牛・鮑・季節のコース(鯛のパイ包み、栗のスープ、モンブラン)・カウンター22席と個室・食べログアワード2017〜2020 Bronze',
    neighborhood: '銀座五丁目、みゆき通りの時事通信ビル1F。東銀座駅6番出口から徒歩3分',
    gf_detail: '要確認。うかい特選牛、鮑、魚介の鉄板焼きのコースに、スープ、リゾット、魚のパイ包み、カヴァタッピ、デザート。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉、鮑、魚介のコース。',
    notes: '[鉄板焼き・みゆき通りのうかい亭] ジャン＝ミッシェル・フォロンの彫刻の扉を入ると、樹齢百年を超える欅の梁に和の建築と西洋美術が溶け合う銀座うかい亭。カウンター22席と半個室9室で94席。うかい特選牛を目の前で焼き、鮑(ある客には一番の皿)や季節のコースも。秋は鯛のパイ包み、蛤のスープ、栗のスープと栗のモンブラン、松茸の追加も頼め、以前は黒毛和牛のタルタルや黒胡椒ソースのストリップロインも。ワインや日本酒のペアリングあり。食べログアワード2017〜2020 Bronze。昼は1万5千〜2万円ほど。キャンセル規定は厳しく、サービス料は2026年12月1日から13%が15%に。',
  });
}

save();
