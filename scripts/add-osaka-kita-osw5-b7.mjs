// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 7.
//   + 鳥刺し酒場 スタンドくーま君R25 Torisashi Sakaba Stand Kuma Kun R25 (chicken-sashimi standing bar on Ohatsu Tenjin street, opened October 2025)
//   + 焼鶏屋 勝商店 Yakitori Masaru Shoten (binchotan yakitori with private rooms, open to 5:00, since 2012)
//   + お料理 夏雲 Oryori Nagumo (Japanese izakaya under the Hankyu tracks, opened August 2025)
//   + きたしんち 弓場慎之佑 Kitashinchi Yumiba Shinnosuke (twelve-seat kaiseki counter, since 2021)
//   - skipped 寿司赤酢 遊 バルチカ03 27143836: chain already in data (寿司 赤酢 心斎橋店 osaka_sushi_akasu_shinsaibashi and
//     寿司赤酢 大阪なんば PREMIUM osaka_sushi_akazu_namba_premium); the listing calls it a sister of 寿司 赤酢 in Kitashinchi.
//   - skipped ゼックスウエスト サルヴァトーレ クオモブロス 27003244: Salvatore Cuomo chain (the listing's "dishes by Salvatore Cuomo";
//     The Kitchen Salvatore Cuomo GINZA is in data/tokyo.json; operator 株式会社ワイズテーブルコーポレーション, see osw5-2).
//   Chain check: Kuma Kun: one shop of its format, from the yakitori group 熊の焼鳥 (October 2026 review); flagged. Masaru Shoten: no
//   sister shop named. Nagumo: sister shop "Nagumo Higashidoori Main Store" (Tabelog) and one in Nakazakicho (June 2026 review); a small
//   group. Yumiba: one shop. None is in data/osaka.json (grep by id, name and address, 2026-11-01). Tabelog URLs from listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27143836', 'chain already in data: 寿司赤酢 (osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium); listing calls it a sister of 寿司 赤酢 Kitashinchi');
skip('27003244', 'chain: Salvatore Cuomo (The Kitchen Salvatore Cuomo GINZA in data/tokyo.json; operator 株式会社ワイズテーブルコーポレーション)');

// ================================================================ 鳥刺し酒場 スタンドくーま君R25
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27152130/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:00']); const S = day(['14:00', '23:00']); const SU = day(['14:00', '22:00']);
  put({
    id: 'osaka_stand_kuma_kun_r25_sonezaki', name: '鳥刺し酒場 スタンドくーま君R25 (Torisashi Sakaba Stand Kuma Kun R25)', category: 'OMNI',
    lat: 34.699892, lng: 135.500484, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Raw and seared chicken with a sweet sauce and condiments, fried chicken, fries and rice bowls with sauces; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-sashimi bar; the side dishes are spicy pickled cabbage, broccoli and fries with truffle cream.',
    hours_raw: 'Mon, Tue, Thu, Fri 16:00–23:00; Saturdays and holidays 14:00–23:00; Sundays 14:00–22:00; closed Wednesdays; closes early when the chicken sashimi sells out (Tabelog). Reservations accepted; cover ¥330; a booking is released after 10 minutes without notice (Tabelog). Order by QR code (October 2026). All-you-can-drink for an hour ¥980 (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). A standing bar of about 18 places, no chairs; non-smoking; takeaway and Uber Eats (Tabelog). Opened 1 October 2025 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: S, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sonezaki 2-7-12, ground floor of 松浦レジャービル on the Ohatsu Tenjin shopping street, entrance set back — 2 min from Higashi-Umeda Stn exits 4, 6 and 7',
    cuisine: 'Chicken sashimi at standing-bar prices, from "Satsuma Kiwami Sashi-dori" raised with Kagoshima poultry farmers (Tabelog; October 2026) · toro-momo tataki (thigh seared with a burner at the counter, with a sweet sauce and onion) ¥1,078; kinu-mune sashimi (silky breast) ¥1,078; oyakidori thigh sashimi ¥528; liver sashimi, shirokawa special ¥659, tebasaki (wing) sashimi, limited cubed sashimi ("butsu sashi") with lightly pickled cabbage and grated daikon (October 2026) · fried chicken thigh ¥198 each; Kuma Kun fries with black-pepper truffle cream or kombu salt; tamago onigiri ¥528; sea urchin and grated yam rice with aosa ¥549; marinated chicken bowl ¥748; chicken-bone and clam soup (October 2026) · Kuma Kun highball, yuzu-sansho sour, fresh lemon chuhai, sake (Tabelog; October 2026)',
    website: null, gmaps: gm('スタンドくーま君R25 曽根崎'), menu_url: null,
    notes: "[Yakitori · Higashi-Umeda, a chicken-sashimi standing bar] A standing bar on the Ohatsu Tenjin shopping street, opened in October 2025 by the people behind the yakitori restaurant Kuma no Yakitori (October 2026 review), that serves raw and barely seared chicken from Kagoshima farms. Order by QR code at the counter: the toro-momo tataki, thigh seared with a burner in front of you and dressed with a sweet sauce and onion, the silky breast sashimi, liver, wing sashimi, and a limited cubed sashimi with pickled cabbage, most around ¥500–1,100 (October 2026). Fries, an egg onigiri and a sea-urchin rice fill the gaps, and an hour of all-you-can-drink is ¥980. It opens at 14:00 at weekends, closes on Wednesdays, and shuts early if the chicken runs out. One regular has been sixteen times; another found it pricey for what it is (October 2026).",
    chef_bio: { chef_name: null, roles: ['Counter staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a chicken-sashimi specialty shop using "Satsuma Kiwami Sashi-dori", developed with local poultry farmers; signature toro-momo tataki and kinu-mune sashi at standing-bar prices; opened 1 October 2025. Per an October 2026 review: "a standing bar that originated from the popular yakitori restaurant \'Kuma no Yakitori\'", using chicken developed with poultry farmers from Kagoshima Prefecture.', philosophy: null, specialty: 'Toro-momo tataki; kinu-mune sashimi.',
      anecdotes: [
        { text: '"Paired with a slightly sweet sauce and sliced onions, it\'s absolutely delicious!" — October 2026, a Sunday at 14:00, of the toro-momo tataki.', source: R + 'B536776547/' },
        { text: '"It\'s JPY 980 for an hour. … When it arrived, I was surprised to see a mega mug!" — October 2026, all-you-can-drink.', source: R + 'B538141041/' },
        { text: '"I wanted to enjoy some chicken sashimi, so I stopped by for just one drink during my free time!" — October 2026, a sixteenth visit.', source: R + 'B516234803/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥刺し酒場 スタンドくーま君R25、立ち飲み、大阪市北区曽根崎2-7-12 松浦レジャービル 1F、Ohatsu Tenjin の商店街、東梅田駅4・6・7番出口から徒歩2分、月・火・木・金16:00〜23:00、土・祝14:00〜23:00、日14:00〜22:00、水曜休み、鳥刺しが売り切れしだい閉店、予約可、お通し330円、10分の遅れで席を他の客へ、カード・電子マネー・QR 可、立ち飲み約18名、禁煙、テイクアウト、Uber Eats、2025年10月1日オープン、地元の養鶏農家と開発した「Satsuma Kiwami Sashi-dori」、名物はトロもものたたきときぬむね刺し。口コミ(2026年8月〜10月): トロもものたたき1,078円 (バーナーであぶる)、きぬむね刺し1,078円、親鶏もも刺し528円、レバー刺し、shirokawa 659円、手羽先の刺し、数量限定のぶつ刺し、浅漬けの白菜、大根おろし、もものから揚げ1個198円、トリュフクリームのポテト、卵のおにぎり528円、ウニととろろのごはん549円、鶏の漬け丼748円、鶏ガラとアサリのスープ、くーま君ハイボール、柚子山椒サワー、1時間の飲み放題980円、QR コードで注文、Kuma no Yakitori から生まれた立ち飲み、16回目の常連、コスパはふつうという声。',
      confidence: 'medium', sources: [TB, R + 'B516234803/', R + 'B533822032/', R + 'B536776547/', R + 'B537223234/', R + 'B537346147/', R + 'B537864421/', R + 'B538141041/', R + 'B538151325/', R + 'B538414748/', R + 'B538484189/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar with QR-code ordering (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-7-12 松浦レジャービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目7番12号 (go) 5m; no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538414748/', R + 'B538141041/'],
    price_note: 'Prices from an October 2026 review; cover charge from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Toro-momo tataki (seared chicken thigh)', '¥1,078', 'Chicken sashimi', 'ask', 'no', 'October 2026.', 'toromomo_tataki'),
      it('', '', 'Kinu-mune sashimi (silky chicken breast)', '¥1,078', 'Chicken sashimi', 'ask', 'no', 'October 2026.', 'kinumune_sashi'),
      it('', '', 'Oyakidori thigh sashimi', '¥528', 'Chicken sashimi', 'ask', 'no', 'October 2026.', 'oyadori_momo'),
      it('', '', 'Fried chicken thigh (each)', '¥198', 'Hot dishes', 'no', 'no', 'October 2026.', 'momo_karaage'),
      it('', '', 'Sea urchin and grated yam rice', '¥549', 'Rice', 'ask', 'no', 'October 2026.', 'uni_tororo_rice'),
      it('', '', 'All-you-can-drink, one hour', '¥980', 'Drinks', 'ask', 'ask', 'October 2026.', 'nomihodai'),
    ] }, {
    cuisine: '立ち飲みの値段の鳥刺し、Kagoshima の養鶏農家と育てた「Satsuma Kiwami Sashi-dori」(食べログ、2026年10月)・トロもものたたき (カウンターでバーナーであぶり、甘いたれと玉ねぎ) 1,078円、きぬむね刺し1,078円、親鶏もも刺し528円、レバー刺し、shirokawa 659円、手羽先の刺し、浅漬けの白菜と大根おろしの数量限定のぶつ刺し (2026年10月)・もものから揚げ1個198円、黒こしょうトリュフクリームか昆布塩のポテト、卵のおにぎり528円、あおさのウニととろろのごはん549円、鶏の漬け丼748円、鶏ガラとアサリのスープ (2026年10月)・くーま君ハイボール、柚子山椒サワー、生レモンのチューハイ、日本酒 (食べログ、2026年10月)',
    neighborhood: '曽根崎2-7-12、Ohatsu Tenjin の商店街の松浦レジャービル1階、入口は少し奥。東梅田駅4・6・7番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。生や軽くあぶった鶏に甘いたれや薬味、から揚げ、ポテト、たれの丼。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鳥刺しの店で、つまみは辛い白菜の漬物、ブロッコリー、トリュフクリームのポテトくらい。',
    notes: '[焼鳥・東梅田、鳥刺しの立ち飲み] Ohatsu Tenjin の商店街にある立ち飲みで、2025年10月、焼鳥の Kuma no Yakitori のチームが開いた (2026年10月の口コミ)。Kagoshima の農家の鶏を、生かほとんど生であぶって出す。注文はカウンターで QR コードから: 目の前でバーナーであぶり、甘いたれと玉ねぎで食べるトロもものたたき、きぬむね刺し、レバー、手羽先の刺し、浅漬けの白菜を添えた数量限定のぶつ刺し。多くは500〜1,100円ほど (2026年10月)。ポテト、卵のおにぎり、ウニのごはんもあり、1時間の飲み放題は980円。週末は14時から、水曜休みで、鶏がなくなると早じまい。16回通う常連もいれば、値段のわりにふつうという声も (2026年10月)。',
  });
}

// ================================================================ 焼鶏屋 勝商店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27064518/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '05:00']);
  put({
    id: 'osaka_yakitori_masaru_shoten_sonezaki', name: '焼鶏屋 勝商店 (Yakitori Masaru Shoten)', category: 'OMNI',
    lat: 34.700805, lng: 135.501191, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori with salt or sauce, dashimaki, chicken nanban, fried chicken with tartar and a chicken-broth ramen; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; grilled vegetables, water eggplant and Awaji onion are the vegetable plates, served beside chicken.',
    hours_raw: 'Mon–Sat 17:30–5:00 (last order 5:00); Sundays last order 3:00, opening time not listed; closed 24 December and 1 January and some other days (Tabelog). Reservations accepted; courses need a phone booking (September 2026). Private-room charge ¥230, included in course prices (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 77 seats with counter, tatami and sunken seating and private rooms for 4 to 20, renovated in July 2025; smoking allowed (Tabelog). Short-staffed and slow with drinks on a busy night (August 2026). Opened 30 March 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sonezaki 2-10-22, a corner of the Ohatsu Tenjin area — 1 min from Higashi-Umeda Stn exit 4 toward Shin-Mido, 3 min from Umeda Stn (Midosuji Line)',
    cuisine: 'Yakitori of chicken bought daily from a local poultry shop, generously skewered and grilled slowly over Tosa binchotan (Tabelog) · dashimaki omelette (Tabelog; 2026) · skewers named in July 2026: negima, gizzard, skin, seseri, knee cartilage; water eggplant; a chicken-bone broth ramen with thin straight noodles and napa cabbage to finish · chicken nanban (June 2026); fried chicken with tartar and sliced onion (September 2026) · Binchotan feast course with 90 minutes of drinks ¥4,500: chicken tataki, dashimaki, seven skewers, steamed butter-grilled Awaji onion, grilled vegetables, fried chicken, smoked quail eggs, pickled cucumber, chicken zosui (August 2026); a course with all-you-can-drink draft beer around ¥4,000 (May 2026) · sake, shochu and wine (Tabelog)',
    website: null, gmaps: gm('焼鶏屋 勝商店 曽根崎'), menu_url: null,
    notes: "[Yakitori · Higashi-Umeda, binchotan yakitori until dawn] A big, relaxed yakitori house a minute from Higashi-Umeda Station near Ohatsu Tenjin, open since 2012 and until 5:00 most nights, with private rooms for four to twenty added in a July 2025 renovation. Chicken comes daily from a local poultry shop and is skewered in generous pieces and grilled slowly over Tosa binchotan; the dashimaki is a house favourite. Groups book the ¥4,500 binchotan course with ninety minutes of drinks: chicken tataki, seven skewers, butter-steamed Awaji onion, fried chicken and a chicken zosui to finish (August 2026). A July 2026 diner praised the big skewers and a chicken-broth ramen to end; others found the service stretched on busy nights. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Grill and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: chicken sourced fresh daily from a local poultry shop, skewered generously and grilled slowly over Tosa binchotan; private rooms created in a July 2025 renovation; opened 30 March 2012.', philosophy: null, specialty: 'Binchotan yakitori; dashimaki.',
      anecdotes: [
        { text: '"And when I saw the yakitori, I was amazed again. The portions were generous, and at this price, it felt incredibly reasonable." — July 2026, on a business trip.', source: R + 'B532742483/' },
        { text: '"The dishes included chicken sashimi, dashi omelet, charcoal-grilled skewers … and to finish off, chicken zosui. It was a generous spread with no complaints." — August 2026, the Binchotan feast course for JPY 4,500.', source: R + 'B533665591/' },
        { text: '"The cost performance is quite good, and the food is delicious!! … However... unfortunately, the staff needs more training." — August 2026, three people for a little over JPY 10,000.', source: R + 'B534573056/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼鶏屋 勝商店、焼き鳥・鶏料理・ラーメン、大阪市北区曽根崎2-10-22、東梅田駅4番出口からShin-Mido 方面へ徒歩1分、月〜土17:30〜翌5:00、日曜は L.O.3:00、12月24日と1月1日休み、不定休あり、予約可、個室席料230円 (コースは込み)、カード可、電子マネー・QR 不可、77席、個室 (4〜20名)、座敷、掘りごたつ、喫煙可、2012年3月30日オープン、2025年7月に改装して個室を増やす、地元の鶏肉店から毎日仕入れる鶏、Tosa の備長炭でじっくり焼く、だし巻き卵。口コミ(2026年5月〜9月): 生ビール飲み放題つきのコース約4,000円、チキン南蛮、ねぎま、砂ずり、皮、せせり、ひざ軟骨、水なす、締めの鶏ガラのラーメン (細いストレート麺と白菜)、備長炭の宴コース90分飲み放題4,500円 (地鶏のたたき、だし巻き卵、串7本、Awaji の玉ねぎのバター蒸し焼き、焼き野菜、から揚げ、うずらの燻製、きゅうりの漬物、鶏雑炊)、タルタルのから揚げ、コースは電話予約、スタッフ不足で飲み放題が遅いという声。',
      confidence: 'medium', sources: [TB, R + 'B529007042/', R + 'B529738152/', R + 'B532742483/', R + 'B533118812/', R + 'B533665591/', R + 'B534573056/', R + 'B535634024/', R + 'B536514760/', R + 'B536667400/', R + 'B537366460/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large izakaya with private rooms; courses by phone (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-10-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目10番22号 (go) 1m; no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533665591/', R + 'B529007042/'],
    price_note: 'Course prices from May and August 2026 reviews; à la carte prices not listed in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Binchotan feast course with 90 minutes of drinks', '¥4,500', 'Courses', 'no', 'no', 'August 2026.', 'binchotan_course'),
      it('', '', 'Dashimaki omelette', '', 'À la carte', 'ask', 'no', 'Tabelog; May and August 2026.', 'dashimaki'),
      it('', '', 'Chicken-bone broth ramen (to finish)', '', 'Rice and noodles', 'no', 'no', 'July 2026.', 'torigara_ramen'),
      it('', '', 'Chicken nanban', '', 'À la carte', 'no', 'no', 'June 2026.', 'chicken_nanban'),
    ] }, {
    cuisine: '地元の鶏肉店から毎日仕入れる鶏を大きめに串に刺し、Tosa の備長炭でじっくり焼く焼き鳥 (食べログ)・だし巻き卵 (食べログ、2026年)・2026年7月の串: ねぎま、砂ずり、皮、せせり、ひざ軟骨。水なす。締めは細いストレート麺と白菜の鶏ガラのラーメン・チキン南蛮 (2026年6月)、タルタルと玉ねぎのから揚げ (2026年9月)・90分飲み放題つきの備長炭の宴コース4,500円: 地鶏のたたき、だし巻き卵、串7本、Awaji の玉ねぎのバター蒸し焼き、焼き野菜、から揚げ、うずらの燻製、きゅうりの漬物、鶏雑炊 (2026年8月)。生ビール飲み放題つきのコース約4,000円 (2026年5月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '曽根崎2-10-22、Ohatsu Tenjin のあたりの一角。東梅田駅4番出口からShin-Mido 方面へ徒歩1分、御堂筋線 梅田駅から3分',
    gf_detail: '要確認。グルテンの情報なし。塩かたれの焼き鳥、だし巻き卵、チキン南蛮、タルタルのから揚げ、鶏ガラのラーメン。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の店で、焼き野菜、水なす、Awaji の玉ねぎが野菜の皿だが、鶏といっしょに出る。',
    notes: '[焼鳥・東梅田、明け方までの備長炭の焼き鳥] 東梅田駅から1分、Ohatsu Tenjin の近くにある大きくて気楽な焼き鳥屋で、2012年から、たいていの夜は5時まで。2025年7月の改装で4〜20名の個室を増やした。鶏は地元の鶏肉店から毎日仕入れ、大きめに串に刺してTosa の備長炭でじっくり焼く。だし巻き卵も名物。グループには90分飲み放題つきの4,500円の備長炭のコースが人気で、地鶏のたたき、串7本、Awaji の玉ねぎのバター蒸し焼き、から揚げ、締めの鶏雑炊 (2026年8月)。2026年7月の口コミでは大きな串と締めの鶏ガラのラーメンが好評、混む夜はサービスが手薄だという声も。喫煙可。',
  });
}

// ================================================================ お料理 夏雲
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27150808/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '23:00']);
  put({
    id: 'osaka_oryori_nagumo_shibata', name: 'お料理 夏雲 (Oryori Nagumo)', category: 'OMNI',
    lat: 34.706797, lng: 135.497785, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, shio-koji fried chicken, fried eggplant in dashi and kamameshi; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal seafood, fried chicken and dashi-based dishes; a fruit salad with white sesame and a tofu salad are the vegetable plates, unexplained.',
    hours_raw: 'Daily 16:30–23:00 (last order 22:00); closing days not fixed (Tabelog). Reservations through the booking form linked on the shop\'s Instagram, open 24 hours; seat-only bookings pay a ¥400 starter charge (before tax), course bookings ¥300 seat charge (before tax) (Tabelog). Often fully booked (March and June 2026). No children; no coat check, bags go in a basket at the table (Tabelog). Cards, e-money and QR (Tabelog). 20 seats upstairs with tatami and three private rooms, the largest for 12; a standing bar on the ground floor (Tabelog; 2026 reviews). Non-smoking (Tabelog). No draft beer (May 2026). Opened 7 August 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shibata 1-6-11, 2F, under the Hankyu elevated tracks — 1 min from Hankyu Osaka-Umeda Stn, 5 min from JR Osaka Stn; easy to miss, above a standing bar',
    cuisine: 'Japanese izakaya of Osaka seafood and seasonal produce from around Japan, with sake, shochu and wine (Tabelog) · June 2026 à la carte: seasonal fruit (peach) and white-sesame salad ¥900, fried eggplant in dashi ¥650, three-kind sashimi ¥1,100, toro-taku ¥900, shio-koji fried chicken (4) ¥850, sea-bream rice ¥1,450 (+¥250 for bonito flakes and egg), grilled-eel kamameshi ¥1,450 · the shio-koji fried chicken praised in March–June 2026 reviews; strawberry and Earl Grey tofu salad (May 2026); bonito tataki, thick-cut sashimi, whitebait as the starter (June 2026); Izumi octopus sashimi (listing review) · courses (Tabelog, tax included): share course for three or more ¥3,300; pair course for two ¥4,180; premium course with two hours of drinks including four sakes and ten shochu ¥6,000',
    website: null, gmaps: gm('お料理 夏雲 芝田'), menu_url: null,
    notes: "[Izakaya · Umeda, a tatami izakaya under the Hankyu tracks] A Japanese izakaya on the upper floor of a narrow space under the Hankyu Umeda elevated tracks, opened in August 2025 above its own standing bar; diners say the entrance is easy to miss (May and August 2026). Upstairs is a tatami room with three private rooms, where trains rumble overhead now and then. The kitchen sends out Osaka seafood and seasonal dishes: thick-cut sashimi, bonito tataki, a peach and white-sesame salad and, the dish every reviewer names, shio-koji fried chicken; finish with sea-bream or eel kamameshi. Courses start at ¥3,300 for groups, and a ¥6,000 plan adds two hours of sake and shochu. Book through the shop's Instagram form; it is often full. No draft beer, and no children.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a Japanese izakaya of seasonal ingredients and fresh Osaka seafood with sake, shochu and wine from across Japan, three private rooms; opened 7 August 2025; often confused with its sister restaurant "Nagumo Higashidoori Main Store" (the listing\'s English also gives the reading "Natsukumo"). A June 2026 diner notes a branch in Nakazakicho.', philosophy: null, specialty: 'Shio-koji fried chicken; kamameshi.',
      anecdotes: [
        { text: '"Once I went up to the second floor, it felt like a completely different space, making me wonder if I was really under the Hankyu train tracks." — May 2026.', source: R + 'B529156155/' },
        { text: '"The kamameshi is served in a single portion (about 1 go), so we ordered two servings, one for each person. The kamameshi is a must-order!" — June 2026, a group of four.', source: R + 'B529890173/' },
        { text: '"Although there was a loud noise when the train passed by, it allowed us to chat without worrying about others around us." — April 2026, a private room.', source: R + 'B526775386/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お料理 夏雲、居酒屋・海鮮、大阪市北区芝田1-6-11 2F、阪急大阪梅田駅から徒歩1分、JR 大阪駅から約5分、毎日16:30〜23:00 (L.O.22:00)、不定休、予約は Instagram の予約フォームから (24時間)、席のみ予約はお通し400円 (税別)、シェアコースとペアコースは席料300円 (税別)、子ども不可、荷物はテーブルのかごに、カード・電子マネー・QR 可、20席、個室3室 (最大12名)、座敷、禁煙、2025年8月7日オープン、大阪の新鮮な魚介と全国の旬の食材、厳選した日本酒・焼酎・ワイン、シェアコース3,300円 (3名から)、ペアコース4,180円 (2名)、日本酒4種と焼酎10種の2時間飲み放題つきのコース6,000円、姉妹店「Nagumo Higashidoori Main Store」とまちがえやすい、阪急梅田の高架下。口コミ(2026年3月〜8月): 塩麹のから揚げ、季節のフルーツ (桃) の白ごまサラダ900円、なすの揚げびたし650円、刺身3種1,100円、トロたく900円、塩麹のから揚げ (4個) 850円、鯛めし1,450円 (かつお節と卵250円)、うなぎの釜めし1,450円、いちごとアールグレイの豆腐サラダ、カツオのたたき、厚切りの刺身、お通しのしらす、生ビールはない、1階は立ち飲み、2階は座敷と個室、電車の音、入口がわかりにくい、いつも予約で満席、Nakazakicho にも店。',
      confidence: 'medium', sources: [TB, R + 'B525320506/', R + 'B526079333/', R + 'B526206607/', R + 'B526775386/', R + 'B527719935/', R + 'B528843480/', R + 'B529156155/', R + 'B529890173/', R + 'B530731028/', R + 'B534774267/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via a Japanese form linked from Instagram; tatami seating upstairs (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田1-6-11 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田一丁目6番11号 (go) 4m; no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529890173/', TB],
    price_note: 'À la carte prices from a June 2026 review; courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Shio-koji fried chicken (4 pieces)', '¥850', 'À la carte', 'no', 'no', 'June 2026.', 'shiokoji_karaage'),
      it('', '', 'Three-kind sashimi', '¥1,100', 'À la carte', 'ask', 'no', 'June 2026.', 'sashimi_3'),
      it('', '', 'Grilled-eel kamameshi', '¥1,450', 'Rice', 'ask', 'no', 'June 2026.', 'unagi_kamameshi'),
      it('', '', 'Sea-bream rice', '¥1,450', 'Rice', 'ask', 'no', 'June 2026.', 'taimeshi'),
      it('', '', 'Share course (three or more)', '¥3,300', 'Courses', 'ask', 'no', 'Tabelog.', 'share_course'),
    ] }, {
    cuisine: '大阪の魚介と全国の旬の食材の和食の居酒屋、日本酒、焼酎、ワインも (食べログ)・2026年6月のアラカルト: 季節のフルーツ (桃) の白ごまサラダ900円、なすの揚げびたし650円、刺身3種1,100円、トロたく900円、塩麹のから揚げ (4個) 850円、鯛めし1,450円 (かつお節と卵は250円)、うなぎの釜めし1,450円・塩麹のから揚げは2026年3月〜6月の口コミで好評、いちごとアールグレイの豆腐サラダ (2026年5月)、カツオのたたき、厚切りの刺身、お通しのしらす (2026年6月)、Izumi のタコの刺身 (食べログの口コミ)・コース (食べログ、税込): 3名からのシェアコース3,300円、2名のペアコース4,180円、日本酒4種と焼酎10種を含む2時間飲み放題つきのコース6,000円',
    neighborhood: '芝田1-6-11 の2階、阪急の高架下。阪急大阪梅田駅から徒歩1分、JR 大阪駅から5分。立ち飲みの上で、入口がわかりにくい',
    gf_detail: '要確認。グルテンの情報なし。刺身、塩麹のから揚げ、なすの揚げびたし、釜めし。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。季節の魚介、から揚げ、だしの料理。白ごまのフルーツサラダや豆腐サラダが野菜の皿だが、説明はない。',
    notes: '[居酒屋・梅田、阪急の高架下の座敷の居酒屋] 阪急梅田の高架下の細長い建物の2階にある和食の居酒屋で、2025年8月に1階の立ち飲みといっしょに開いた。入口がわかりにくいという声も (2026年5月・8月)。2階は座敷と個室3室で、ときどき頭の上を電車が通る。料理は大阪の魚介と季節のもの: 厚切りの刺身、カツオのたたき、桃と白ごまのサラダ、そして口コミのだれもが挙げる塩麹のから揚げ。締めは鯛めしかうなぎの釜めしで。コースはグループで3,300円から、6,000円のプランには2時間の日本酒と焼酎の飲み放題つき。予約は店の Instagram のフォームから、満席が多い。生ビールはなく、子どもは不可。',
  });
}

// ================================================================ きたしんち 弓場慎之佑
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27123526/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_yumiba_shinnosuke_kitashinchi', name: 'きたしんち 弓場慎之佑 (Kitashinchi Yumiba Shinnosuke)', category: 'MOM_AND_POP',
    lat: 34.697997, lng: 135.497271, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. One omakase of ten dishes with dashi soups, fried sweetfish with house Worcestershire sauce, somen and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki of seafood, eel, beef, game and dashi.',
    hours_raw: 'Mon–Sat two seatings, from 18:00 and from 20:30; closed Sundays and holidays (Tabelog). Reservation only; the person who booked must attend; arriving late or leaving early may mean fewer dishes; whole-shop hire for 10 to 12, children welcome then (Tabelog). Course price includes the 10% service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). Twelve seats at a U-shaped counter; non-smoking; no perfume; menu in English, Chinese and Korean (Tabelog). Bento to order (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-5-21, 7F of 松木興産ビル — 30 seconds from Kitashinchi Stn exit 11-21 (JR Tozai Line)',
    cuisine: 'Kaiseki omakase of ten dishes built on "the temperature that brings out the best in each dish" and the aroma of the ingredients (Tabelog); ¥19,360 including service (Tabelog), ¥16,000 before tax and service per a July 2026 diner · two kinds of rice to finish, e.g. blackthroat seaperch rice and corn rice (August 2026) · dishes in 2026 reviews: eggplant with sea urchin and broad-bean or shrimp sauce; eel from Numajima and matsutake in a bowl with molokhia; fried sweetfish stuffed with its pounded liver and shiso, with house Worcestershire sauce; charcoal-grilled eel with fig; braised Ozaki beef; Handa somen with abalone and sea urchin; Awaji sea bass and hamo; Miyagi bonito and Akashi sea bream; agu pork and Kawachi duck dumpling hotpot; mango and passion-fruit pudding · bear meat on one August 2026 course · sake chosen by the owner (May 2026) · bento to order, e.g. for five with teriyaki yellowtail, kazunoko and two rices (October 2026)',
    website: null, gmaps: gm('きたしんち 弓場慎之佑'), menu_url: null,
    notes: "[Kaiseki · Kitashinchi, a twelve-seat counter of temperature and aroma] A small kaiseki counter on the seventh floor of a Kitashinchi building, thirty seconds from the station, where the young owner-chef Yumiba Shinnosuke, who trained at Ogurano and went independent in 2021 (July 2026 review), serves one ten-course omakase designed around serving each dish at its best temperature and aroma (Tabelog). Expect Kitamurasaki sea urchin over eggplant, Numajima eel and matsutake in a clear bowl, sweetfish fried with its own liver, braised Ozaki beef, and two kinds of rice to finish, at about ¥20,000 with service. Regulars note the chef's steady growth and easy conversation, and a July 2026 diner mentions a Michelin selection. One August 2026 diner could not eat the bear meat on the course, so ask about game when booking. Two seatings a night; no perfume.",
    chef_bio: { chef_name: 'Yumiba Shinnosuke (弓場慎之佑; romaji from the Tabelog listing)', roles: ['Owner-chef'], origin: null, background: 'Per the shop-maintained Tabelog listing: Japanese cuisine "that won\'t tire you out until the last bite", valuing the temperature of dishes and the aroma of ingredients; a 10-course omakase of seasonal ingredients; "a chef dedicated to culinary arts, weaving a food culture for the future". Per a July 2026 review: the chef trained at "Ogurano", became independent in 2021 and is still in the thirties per that diner, and the restaurant is Michelin-selected; per an October 2023 review, the chef and the chef\'s wife ran the restaurant.', philosophy: '"The temperature that brings out the best in the dishes" and "the aroma of ingredients we want to deliver to our customers" (Tabelog).', specialty: 'Ten-course omakase; two kinds of rice to finish.',
      anecdotes: [
        { text: '"With each visit, the quality of the dishes has improved, and now it\'s a place I can confidently recommend to others." — July 2026, a fourth visit.', source: R + 'B477880128/' },
        { text: '"As always, there were two types of rice served: blackthroat seaperch rice and corn rice. Both were delicious." — August 2026, a twenty-first visit.', source: R + 'B459752390/' },
        { text: '"I found the bear meat to be of high quality and quite unique. I tried a bite, but unfortunately, I couldn\'t eat it." — August 2026.', source: R + 'B534035897/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): きたしんち 弓場慎之佑、日本料理、大阪市北区曽根崎新地1-5-21 松木興産ビル 7F、JR 東西線 北新地駅11-21出口から徒歩30秒、月〜土 18:00〜と20:30〜の2部制、日・祝休み、完全予約制、予約者本人の来店、遅刻や早退で品数が減ることも、貸切は10〜12名 (子ども可)、コース料金にサービス料10%込み、カード可、電子マネー・QR 不可、U字のカウンター12席、禁煙、香水は控える、英語・中国語・韓国語のメニュー、最後の一口まで疲れない日本料理、料理の温度と食材の香り、季節の食材のおまかせ10品19,360円。口コミ(2023年10月〜2026年10月): 2023年は大将と奥さんの二人で切り盛り、Ogurano で修業し2021年に独立、30代、ミシュランに選ばれた、16,000円のコースで税・サービス料込み2万円弱、なすとウニ、Numajima のうなぎと松茸のお椀、鮎の揚げ物に肝と自家製ウスターソース、うなぎの炭火焼きといちじく、Ozaki 牛の煮物、Handa そうめんとアワビとウニ、Awaji のスズキとハモ、Miyagi のカツオと Akashi の鯛、agu 豚とKawachi の鴨のつみれ鍋、のどぐろごはんととうもろこしごはん、マンゴーとパッションフルーツのプリン、熊肉、オーナーの選ぶ日本酒、弁当の注文。',
      confidence: 'medium', sources: [TB, R + 'B459752390/', R + 'B472997490/', R + 'B477880128/', R + 'B496790699/', R + 'B528060848/', R + 'B531463322/', R + 'B534035897/', R + 'B534287718/', R + 'B535022195/', R + 'B536786220/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Traditional and Simplified Chinese and Korean (Tabelog); one omakase course at a counter.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-5-21 松木興産ビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番21号 (go) 3m; nearest other records osaka_sushi_sogoro_kitashinchi (58 m) and osaka_capi_kitashinchi (59 m), at different addresses; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B477880128/'],
    price_note: 'Course price from the Tabelog listing (service included); a July 2026 diner gives ¥16,000 before tax and service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of ten dishes', '¥19,360', 'Course', 'ask', 'no', 'Tabelog; July 2026.', 'omakase'),
      it('', '', 'Fried sweetfish with house Worcestershire sauce (in the course, summer)', '', 'Course', 'no', 'no', 'July and August 2026.', 'ayu_fry'),
      it('', '', 'Two kinds of rice to finish', '', 'Course', 'ask', 'no', 'August 2026.', 'gohan'),
    ] }, {
    cuisine: '「料理がいちばんおいしくなる温度」と食材の香りを大切にする10品のおまかせの懐石 (食べログ)。サービス料込みで19,360円 (食べログ)、2026年7月の口コミでは税・サービス料別で16,000円・締めは2種のごはん、たとえばのどぐろごはんととうもろこしごはん (2026年8月)・2026年の口コミの料理: ウニをのせたなすとそら豆やエビのソース、Numajima のうなぎと松茸とモロヘイヤのお椀、肝をたたいて詰めた鮎の揚げ物としそ、自家製ウスターソース、炭火焼きのうなぎといちじく、Ozaki 牛の煮物、アワビとウニの Handa そうめん、Awaji のスズキとハモ、Miyagi のカツオと Akashi の鯛、agu 豚とKawachi の鴨のつみれ鍋、マンゴーとパッションフルーツのプリン・2026年8月のコースには熊肉・オーナーが選ぶ日本酒 (2026年5月)・注文で弁当も、たとえば5人分、ブリの照り焼き、数の子、2種のごはん (2026年10月)',
    neighborhood: '曽根崎新地1-5-21、松木興産ビルの7階。JR 東西線 北新地駅11-21出口から徒歩30秒',
    gf_detail: '予約時に要確認。グルテンの情報なし。10品のおまかせひとつで、だしのお椀、自家製ウスターソースの鮎の揚げ物、そうめん、醤油ベースのたれがある。',
    vegan_detail: 'ヴィーガンではありません。魚介、うなぎ、牛肉、ジビエ、だしの懐石。',
    notes: '[懐石・北新地、温度と香りの12席のカウンター] 北新地駅から30秒、ビルの7階にある小さな懐石のカウンターで、Ogurano で修業し2021年に独立した若いオーナーシェフ、弓場慎之佑さん (2026年7月の口コミ) が、一皿ずつをいちばんおいしい温度と香りで出すことを考えた10品のおまかせをひとつだけ出す (食べログ)。なすにのせた Kitamurasaki のウニ、Numajima のうなぎと松茸のお椀、肝ごと揚げた鮎、Ozaki 牛の煮物、締めは2種のごはんで、サービス料込みで2万円ほど。常連は大将の成長と気さくな話しぶりをほめ、2026年7月の口コミではミシュランに選ばれたとも。熊肉が食べられなかったという声もあるので (2026年8月)、ジビエは予約時に確認を。2部制、香水は控えて。',
  });
}

save();
