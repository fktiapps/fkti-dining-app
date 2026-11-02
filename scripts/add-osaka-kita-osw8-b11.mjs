// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 11.
//   + 鮨げん家 西中島 Sushi Genya Nishinakajima (sushi on red-vinegar rice and tempura fried at the counter, since 2015)
//   + ねぎ焼・お好み焼き 和 Negiyaki Okonomiyaki Kazu (16-seat negiyaki counter by Minamikata station, black yakisoba)
//   + 新京飯店 Shinkyo Hanten (neighbourhood Chinese canteen with lunch sets, takeaway bento and delivery)
//   + 長浜ラーメン浜ちゃん Nagahama Ramen Hamachan (lunch-only Nagahama tonkotsu at ¥550, run by a husband and wife; no ramen block)
//   - skipped 酒スタンド 魚蔵 西中島3丁目店 27123123: chain; a March 2026 review calls it "a popular restaurant that also has locations in
//     Tennoji and Umeda", and Tabelog lists another 酒スタンド魚蔵 in Esaka (Suita) (web search 2026-11-02).
//   Chain check of the four added:
//   - Genya: the listing links a company site (sushi-genya.co.jp; it answered 429 on 2026-11-02) and the name carries "西中島"; no other げん家
//     found in a web search; kept, flagged.
//   - Kazu, Shinkyo Hanten and Hamachan: one shop each (Tabelog; reviews).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); no record within 60 m of any of the four.
//   No ramen block for Hamachan: reviews give richness ("light tonkotsu"), saltiness and noodle texture, but nothing on oiliness, and the only
//   aroma notes are from 2012–2016; left off rather than guessed.
//   open_late per the brief: all four close by 23:30 (Genya 23:30, Kazu 23:00, Shinkyo 21:50, Hamachan lunch only); Genya and Kazu set false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27123123', 'chain: 酒スタンド魚蔵, also in Tennoji and Umeda (March 2026 review) and Esaka (Tabelog), web search 2026-11-02');

// ================================================================ 鮨げん家 西中島
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27088769/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:30']);
  put({
    id: 'osaka_sushi_genya_nishinakajima', name: '鮨げん家 西中島 (Sushi Genya Nishinakajima)', category: 'OMNI',
    lat: 34.726462, lng: 135.494209, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy sauce and tempura in batter, with a dipping sauce of katsuobushi, saba-bushi and kombu seasoned with shio-koji (Tabelog); salt is offered as an alternative for the tempura. One February 2026 course was adjusted for a dietary restriction.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood sushi, tempura and sashimi. Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Mon and Wed–Sun 18:00–23:30 (last order 23:00); closed Tuesday; open 29 December 2026, closed 31 December 2026–4 January 2027 (Tabelog). Reservations accepted; calls before 16:00 are answered by an AI system; courses must be booked by the day before (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, Alipay, WeChat Pay; no e-money (Tabelog). 22 seats: 10 at the counter and 3 tables for four; private hire up to 20; non-smoking; wheelchair accessible (Tabelog). Often fully booked by evening (2025–2026). Opened 11 December 2015 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '木川東3-2-28, 7 min from Nishinakajima-Minamigata or Hankyu Minamikata, a little away from the busy streets behind a deep-blue noren (Tabelog; February 2026)',
    cuisine: 'Sushi and tempura (Tabelog) · sushi on red-vinegar rice served at body temperature, with smaller rice (Tabelog) · tempura fried briefly at high heat in front of you, with salt or a dashi of katsuobushi, saba-bushi and kombu with shio-koji (Tabelog) · courses: seasonal sushi and tempura course, 14 items ¥6,000; seasonal sushi course, 12 items; book a day ahead (Tabelog); a ¥8,000 course with all-you-can-drink (February 2026) · a February 2026 course: sashimi of kanpachi, bluefin akami and kinmedai; saikyo-grilled fish; tempura of red eggplant, angel shrimp and kisu; uzaku; five nigiri of chutoro, white fish, red shrimp, shima-aji and sea urchin · a la carte: five-piece nigiri, five-piece tempura, soft-roe tempura and ponzu, crab miso, firefly squid (2026) · sake from around Japan, over ten kinds, a gari highball (Tabelog; 2025) · about ¥7,000–8,000 a head with drinks (2026)',
    website: 'https://sushi-genya.co.jp/', gmaps: gm('鮨げん家 西中島 木川東'), menu_url: null,
    notes: "[Sushi · Nishinakajima-Minamigata, sushi and tempura at one counter] A 22-seat sushi bar a few minutes west of Nishinakajima-Minamigata, behind a deep-blue noren, where one counter turns out both sushi on red-vinegar rice and tempura fried in front of you. The ¥6,000 course of 14 seasonal dishes runs from sashimi and a grilled fish through tempura of red eggplant and angel shrimp to five nigiri such as chutoro and sea urchin; or order a la carte from single pieces. Ten-plus sakes come in cups you choose yourself, every plate is one of a kind, and it fills up most evenings (2025–2026). Book courses a day ahead; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Owner and counter staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: sushi with red vinegar, served at body temperature with less rice; tempura fried at high heat for a short time; a dipping sauce of katsuobushi, saba-bushi and kombu with shio-koji; "All the plates are one-of-a-kind"; over ten sakes; opened 11 December 2015; company website sushi-genya.co.jp. Per reviews: "Thank you to the owner for the attentive and friendly service" (February 2026); the staff poured a generous cup of sake (August 2025); "I brought my child with me, and the service was attentive" (December 2025).',
      philosophy: '"Committed to Sushi." "Committed to Tempura." (Tabelog).', specialty: 'Sushi and tempura course; red-vinegar rice.',
      anecdotes: [
        { text: '"Red shrimp (substituted with sea bream due to dietary restrictions)" — February 2026, the ¥8,000 course with all-you-can-drink.', source: R + 'B523436102/' },
        { text: '"The tempura was served one piece at a time, freshly fried, allowing us to enjoy it at its best." — March 2026.', source: R + 'B524327607/' },
        { text: '"I was allowed to choose my own ochoko (sake cup) first." — August 2025.', source: R + 'B512240846/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨げん家 西中島、寿司・天ぷら・海鮮、大阪市淀川区木川東3-2-28、西中島南方駅と Hankyu Minamikata 駅から徒歩7分、月・水〜日18:00〜23:30 (L.O.23:00)、火曜休み、16時前の電話は AI が対応、コースは前日までに予約、カード・PayPay・Alipay・WeChat Pay 可、電子マネー不可、22席 (カウンター10、4名テーブル3)、貸切20名まで、禁煙、車いす可、2015年12月11日オープン、赤酢の人肌のシャリで小さめ、高温で短時間に揚げる天ぷら、かつお節・さば節・昆布に塩麹の天つゆ、器はすべて一点もの、日本酒10種以上、季節の寿司と天ぷらのコース14品6,000円 (税込)、季節の寿司のコース12品。口コミ(2024年〜2026年): 紺色ののれん、刺身、西京焼き、赤なす・angel shrimp・キスの天ぷら、うざく、握り5貫 (中トロ、白身、赤海老、シマアジ、ウニ)、白子の天ぷらとポン酢、カニみそ、ホタルイカ、ガリのハイボール、飲み放題つき8,000円のコース、食事制限で赤海老を鯛に替えてくれた、おちょこを選べる、ひとり約7,000〜8,000円。',
      confidence: 'medium', sources: [TB, R + 'B481328451/', R + 'B503850391/', R + 'B512240846/', R + 'B513071199/', R + 'B519504347/', R + 'B519629855/', R + 'B523069270/', R + 'B523436102/', R + 'B524327607/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay and WeChat Pay accepted (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'A February 2026 course swapped red shrimp for sea bream "due to dietary restrictions".', source: R + 'B523436102/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区木川東3-2-28',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with year-end 2026 dates; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区木川東三丁目2番28号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B523436102/'],
    price_note: 'Course prices from the Tabelog listing (tax included) and a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal sushi and tempura course, 14 items (book a day ahead)', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog.', 'sushi_tempura_course'),
      it('', '', 'Course with all-you-can-drink', '¥8,000', 'Courses', 'ask', 'no', 'February 2026.', 'nomihodai_course'),
      it('', '', 'Five-piece nigiri', '', 'Sushi', 'ask', 'no', 'March–April 2026.', 'nigiri_5'),
      it('', '', 'Five-piece tempura', '', 'Tempura', 'no', 'no', 'March 2026.', 'tempura_5'),
    ] }, {
    cuisine: '寿司と天ぷら (食べログ)・赤酢のシャリを人肌で、小さめに握る寿司 (食べログ)・目の前で高温で短時間に揚げる天ぷら、塩か、かつお節・さば節・昆布に塩麹の天つゆで (食べログ)・コース: 季節の寿司と天ぷらのコース14品6,000円、季節の寿司のコース12品、前日までに予約 (食べログ)。飲み放題つきのコース8,000円 (2026年2月)・2026年2月のコース: カンパチ、本マグロの赤身、キンメダイの刺身、西京焼き、赤なす、angel shrimp、キスの天ぷら、うざく、中トロ、白身、赤海老、シマアジ、ウニの握り5貫・一品: 握り5貫、天ぷら5種、白子の天ぷらとポン酢、カニみそ、ホタルイカ (2026年)・全国の日本酒10種以上、ガリのハイボール (食べログ、2025年)・飲んでひとり約7,000〜8,000円 (2026年)',
    neighborhood: '木川東3-2-28、西中島南方駅か Hankyu Minamikata 駅から7分、にぎやかな通りから少し離れた紺色ののれんの店 (食べログ、2026年2月)',
    gf_detail: '要確認。グルテンの情報なし。醤油で食べる寿司と衣の天ぷらで、天つゆはかつお節、さば節、昆布に塩麹 (食べログ)。天ぷらは塩でも。2026年2月には食事制限に合わせてコースを変えてもらった例がある。',
    vegan_detail: 'ヴィーガンではありません。魚介の寿司、天ぷら、刺身。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[寿司・西中島南方、ひとつのカウンターで寿司と天ぷら] 西中島南方の西、紺色ののれんの奥にある22席の寿司店で、ひとつのカウンターで赤酢のシャリの寿司と、目の前で揚げる天ぷらの両方を出す。季節の14品の6,000円のコースは、刺身と焼き魚から、赤なすやangel shrimpの天ぷら、中トロやウニなど握り5貫まで。一品なら1貫から頼める。日本酒は10種以上で、おちょこは自分で選べ、器はすべて一点もの。夜はたいてい満席 (2025〜2026年)。コースは前日までに予約。火曜休み。',
  });
}

// ================================================================ ねぎ焼・お好み焼き 和
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27018403/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'osaka_negiyaki_okonomiyaki_kazu_nishinakajima', name: 'ねぎ焼・お好み焼き 和 (Negiyaki Okonomiyaki Kazu)', category: 'OMNI',
    lat: 34.725946, lng: 135.49948, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: negiyaki and okonomiyaki batter, yakisoba and omusoba noodles, with dashi soy sauce or sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tendon, pork, squid and egg throughout.',
    hours_raw: 'Mon–Sat and holidays 15:00–23:00; closed Sunday (Tabelog). Reservations not taken per Tabelog, though a diner says some times need one (August 2025); fills by 19:30 (June 2026). No cards or e-money; PayPay and d Barai (Tabelog). 16 seats with a counter facing the teppan; smoking allowed (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-16-6, 2 min from Nishinakajima-Minamigata Stn, by Hankyu Minamikata (Tabelog)',
    cuisine: 'Negiyaki and okonomiyaki, plus teppanyaki, skewers and sashimi (Tabelog) · negiyaki piled with green onion on a thin batter, finished with dashi soy sauce; tendon negiyaki ¥1,050 before tax (August 2025) · "Daimyo" negi and "Daimyo" soba ¥1,400 each (March 2026); Daimyo yakisoba ¥1,300 before tax (August 2025) · black yakisoba with squid ink, topped with egg and bonito (2025) · pork and cabbage omelette, tonpei-yaki made with two eggs (2025) · the shop\'s "Suji Pon" of tonpeiyaki wrapped round a tonteki with ketchup sauce; homemade jaga-cheese (Tabelog) · beef tendon stew ¥550, handmade hamburg steak ¥550, tonpei-yaki ¥950 (March 2026) · chicken heart skewers, salt, two for ¥500 (August 2025) · draft beer ¥530 (August 2025)',
    website: null, gmaps: gm('ねぎ焼・お好み焼き 和 西中島'), menu_url: null,
    notes: "[Okonomiyaki · Nishinakajima-Minamigata, a negiyaki counter at the teppan] A 16-seat okonomiyaki house two minutes from Nishinakajima-Minamigata, always full of repeat customers (March 2026), where the counter faces the teppan and the chef cooks everything in front of you. The negiyaki is the order: a thin batter heaped with green onion and beef tendon, finished with dashi soy sauce, light enough to eat after a night out (September 2025). Regulars also swear by the black yakisoba in squid-ink sauce, the thick-pork tonpei-yaki and the big \"Daimyo\" negi and soba (¥1,400, 2026). Skewers, stews and a beer at ¥530 make it an izakaya too. From 15:00; PayPay, no cards; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-chef at the teppan (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: negiyaki, okonomiyaki, yakisoba, omusoba and modern-yaki, plus sashimi, teppanyaki and skewers; the signature "Suji Pon" and homemade jaga-cheese. Per reviews: "The owner is entertaining" (March 2025); "Sitting at the counter, I had the best view of the chef cooking right in front of me" (June 2025); "This cozy restaurant is always packed with repeat customers" (March 2026).',
      philosophy: null, specialty: 'Beef-tendon negiyaki; black yakisoba.',
      anecdotes: [
        { text: '"The aroma of the dashi soy sauce beautifully coats the batter and green onions, while the thick batter has a light and fluffy texture." — August 2025, tendon negiyaki ¥1,050.', source: R + 'B512647002/' },
        { text: '"I learned it was seasoned with squid ink and various sauces." — June 2025, black yakisoba.', source: R + 'B508916551/' },
        { text: '"The Negiyaki here has a light texture, making it surprisingly easy to eat even when you\'re full!" — September 2025.', source: R + 'B448200120/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ねぎ焼・お好み焼き 和、お好み焼き・その他・鉄板焼き、大阪市淀川区西中島3-16-6 1F、西中島南方駅から徒歩2分、月〜土・祝15:00〜23:00、日曜休み、予約不可、カード・電子マネー不可、PayPay・d払い可、16席、喫煙可、ねぎ焼、お好み焼き、焼きそば、オムそば、モダン焼き、刺身、鉄板焼き、串焼き、名物の Suji Pon、自家製の jaga-cheese。口コミ(2025年〜2026年6月): ねぎたっぷりのねぎ焼をだし醤油で、すじねぎ焼1,050円 (税別)、Daimyo negi・Daimyo soba 各1,400円、Daimyo yakisoba 1,300円、イカスミの黒焼きそば、卵2個のとん平焼き、豚とキャベツの卵焼き、牛すじ煮込み550円、手ごねハンバーグ550円、ハツの塩焼き2本500円、生ビール530円、常連でいっぱい、楽しい店主。',
      confidence: 'medium', sources: [TB, R + 'B263206997/', R + 'B448200120/', R + 'B503320206/', R + 'B508916551/', R + 'B509056003/', R + 'B512647002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter at the teppan; the owner recommended to visitors from outside the prefecture (March 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-16-6 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目16番6号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503320206/', R + 'B512647002/'],
    price_note: 'Prices from 2025–2026 reviews (August 2025 prices before tax).', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon negiyaki with dashi soy sauce', '¥1,050', 'Negiyaki', 'no', 'no', 'August 2025 (before tax).', 'suji_negiyaki'),
      it('', '', '"Daimyo" negi', '¥1,400', 'Negiyaki', 'no', 'no', 'March 2026.', 'daimyo_negi'),
      it('', '', 'Black yakisoba with squid ink', '', 'Yakisoba', 'no', 'no', '2025.', 'kuro_yakisoba'),
      it('', '', 'Tonpei-yaki', '¥950', 'Teppan', 'no', 'no', 'March 2026.', 'tonpeiyaki'),
      it('', '', 'Homemade beef tendon stew', '¥550', 'Side dishes', 'ask', 'no', 'March 2026.', 'suji_nikomi'),
    ] }, {
    cuisine: 'ねぎ焼とお好み焼き、鉄板焼き、串焼き、刺身も (食べログ)・薄い生地にねぎを山盛りにして、だし醤油で仕上げるねぎ焼。すじねぎ焼1,050円、税別 (2025年8月)・Daimyo negi と Daimyo soba 各1,400円 (2026年3月)。Daimyo yakisoba 1,300円、税別 (2025年8月)・イカスミの黒焼きそばに卵とかつお節 (2025年)・豚とキャベツの卵焼き、卵2個のとん平焼き (2025年)・店の名物「Suji Pon」はとん平焼きでトンテキを包んでケチャップソース、自家製の jaga-cheese (食べログ)・牛すじ煮込み550円、手ごねハンバーグ550円、とん平焼き950円 (2026年3月)・ハツの塩焼き2本500円 (2025年8月)・生ビール530円 (2025年8月)',
    neighborhood: '西中島3-16-6、西中島南方駅から徒歩2分、Hankyu Minamikata 駅のそば (食べログ)',
    gf_detail: 'グルテンフリーではありません。ねぎ焼とお好み焼きの生地、焼きそばとオムそばの麺に、だし醤油かソース。',
    vegan_detail: 'ヴィーガンではありません。牛すじ、豚、イカ、卵を多く使う。',
    notes: '[お好み焼き・西中島南方、鉄板の前のねぎ焼のカウンター] 西中島南方から2分、16席のお好み焼きの店で、いつも常連でいっぱい (2026年3月)。カウンターの前が鉄板で、目の前で焼いてくれる。頼むならねぎ焼: 薄い生地にねぎと牛すじをたっぷり、だし醤油で仕上げて、飲んだあとでも軽く食べられる (2025年9月)。イカスミの黒焼きそば、厚い豚のとん平焼き、大きな Daimyo の negi や soba (1,400円、2026年) も常連のおすすめ。串焼き、煮込み、530円の生ビールで居酒屋にも。15時から。PayPay 可、カード不可。喫煙可。',
  });
}

// ================================================================ 新京飯店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27010369/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:16', '21:50']);
  put({
    id: 'osaka_shinkyo_hanten_nishinakajima', name: '新京飯店 (Shinkyo Hanten)', category: 'OMNI',
    lat: 34.726244, lng: 135.494749, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Ramen, champon, gyoza, katsudon and sauced Chinese dishes; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese canteen of pork, chicken and egg dishes; the stir-fried vegetable set is not described as meat-free.',
    hours_raw: 'Daily 11:16–21:50 (food last order 21:30, drinks 21:35), open all year, closing days not fixed (Tabelog, which gives these exact minutes). Lunch sets ¥900 until 16:00, ¥950 after (February 2026). Takeaway bento for sale outside, ¥400–500 (July 2022); delivery through apps such as Demaekan (May 2024). E-money accepted (Tabelog). 17 seats at a counter and tables (Tabelog; May 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-10-11, ground floor of マッセ新大阪ハイツ新館, a little away from Nishinakajima-Minamigata Stn (Tabelog; 2024–2025)',
    cuisine: 'Neighbourhood Chinese with a "Peking cuisine" sign (January 2025) · lunch sets with soup: champon and fried rice ¥900 before 16:00, ¥950 after (February 2026); harusai and fried rice ¥1,000 (January 2025); stir-fried vegetable set, gomoku soba and fried rice (2025–2026) · Chinese-style katsudon with a sweet-salty sauce; katsudon and ramen ¥950 (March 2024) · mapo tofu with a sweet miso note, mapo noodles, chashu ramen in a light broth, kara-age (2024) · "choi-ate" small plates ¥600: chives and egg, pork with green-onion salt, bok choy and pork, spicy chicken (May 2024) · beer sets from ¥770 with kara-age and kimchi (January 2025) · omurice and curry too (March 2024)',
    website: null, gmaps: gm('新京飯店 西中島'), menu_url: null,
    notes: "[Chinese · Nishinakajima, an all-day neighbourhood canteen] A 17-seat Chinese canteen a few minutes from Nishinakajima-Minamigata with a retro \"Peking cuisine\" sign, open every day from 11:16 to 21:50, the odd minutes straight from its listing. Lunch sets of champon or gomoku soba with fried rice cost ¥900 until 16:00 (2026), and the Chinese-style katsudon under a sweet-salty sauce has fans (2022–2024). Food arrives fast, deliveries go out constantly, and bento sit outside for passers-by. In the evening, ¥600 small plates and beer sets make it a cheap place to drink. Simple, light seasoning, by one regular's account (February 2026).",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); two in the kitchen and three on the floor on a May 2024 evening'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Chinese, open all year from 11:16 to 21:50. Per reviews: "The restaurant is incredibly efficient during lunch hours" (July 2022); "there were quite a few staff members—two in the kitchen and three in the dining area … many takeout orders were coming in through platforms like Demaekan" and the staff "were surprisingly kind" (May 2024); "The retro feel is highlighted by its sign that says \'Peking Cuisine.\'" (January 2025).',
      philosophy: null, specialty: 'Champon and fried rice set; Chinese-style katsudon.',
      anecdotes: [
        { text: '"When it comes to Chinese cuisine, it might sound strange to say \'light,\' but I really appreciate the simple seasoning!" — February 2026, champon and fried rice set ¥900.', source: R + 'B499669766/' },
        { text: '"As for the katsu don, it has a unique presentation, topped with a Chinese-style sauce." — March 2024, katsudon and ramen ¥950.', source: R + 'B481718423/' },
        { text: '"The bento boxes sold outside are a great value at JPY 400 and JPY 500!" — July 2022.', source: R + 'B451379656/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 新京飯店、中華料理、大阪市淀川区西中島4-10-11 マッセ新大阪ハイツ新館 1F、西中島南方駅から355m、毎日11:16〜21:50 (料理 L.O.21:30、ドリンク L.O.21:35)、年中無休、不定休、電子マネー可、17席。口コミ(2022年7月〜2026年9月): 「Peking cuisine」の看板、ランチのセット (ちゃんぽんとチャーハン、16時までは900円、それ以降950円)、harusai とチャーハン1,000円、野菜炒めのセット、五目そばとチャーハン、中華風のあんかけカツ丼、カツ丼とラーメン950円、甘めの麻婆豆腐、麻婆麺、チャーシュー麺、kara-age、600円のchoi-ate (ニラ玉、豚ねぎ塩、チンゲン菜と豚、鶏の辛い炒め)、770円からのビールセット、オムライス、カレー、店の外で弁当400円・500円、Demaekanなどの配達、料理が早い、あっさりした味。',
      confidence: 'medium', sources: [TB, R + 'B451379656/', R + 'B477683182/', R + 'B481718423/', R + 'B484483769/', R + 'B485313925/', R + 'B499669766/', R + 'B500302284/', R + 'B510337893/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick lunch counter; takeaway bento outside. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-10-11 マッセ新大阪ハイツ新館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目10番11号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499669766/', R + 'B481718423/', R + 'B485313925/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Champon and fried rice set (¥950 after 16:00)', '¥900', 'Lunch', 'no', 'no', 'February 2026.', 'champon_set'),
      it('', '', 'Harusai and fried rice set', '¥1,000', 'Lunch', 'ask', 'no', 'January 2025.', 'harusai_set'),
      it('', '', 'Katsudon and ramen set', '¥950', 'Sets', 'no', 'no', 'March 2024.', 'katsudon_ramen'),
      it('', '', '"Choi-ate" small plate (e.g. chives and egg)', '¥600', 'Dishes', 'ask', 'no', 'May 2024.', 'choi_ate'),
    ] }, {
    cuisine: '「Peking cuisine」の看板の町の中華 (2025年1月)・スープつきのランチのセット: ちゃんぽんとチャーハン、16時までは900円、それ以降950円 (2026年2月)。harusai とチャーハン1,000円 (2025年1月)。野菜炒めのセット、五目そばとチャーハン (2025〜2026年)・甘じょっぱいあんの中華風カツ丼。カツ丼とラーメン950円 (2024年3月)・みその甘みの麻婆豆腐、麻婆麺、あっさりスープのチャーシュー麺、kara-age (2024年)・600円の「choi-ate」: ニラ玉、豚のねぎ塩、チンゲン菜と豚、鶏の辛い炒め (2024年5月)・kara-age とキムチの770円からのビールセット (2025年1月)・オムライスやカレーも (2024年3月)',
    neighborhood: '西中島4-10-11、マッセ新大阪ハイツ新館の1階、西中島南方駅から少し歩く (食べログ、2024〜2025年)',
    gf_detail: '要確認。グルテンの情報なし。ラーメン、ちゃんぽん、gyoza、カツ丼、たれやあんの中華で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、卵の町の中華で、野菜炒めのセットも肉なしとは書かれていない。',
    notes: '[中華・西中島、一日中開いている町の中華] 西中島南方から数分、「Peking cuisine」の看板が懐かしい17席の町の中華で、毎日11:16から21:50まで、この半端な時刻は食べログの掲載のまま。昼はちゃんぽんや五目そばとチャーハンのセットが16時まで900円 (2026年)。甘じょっぱいあんの中華風カツ丼にもファンがいる (2022〜2024年)。料理は早く、出前もひっきりなし、店の外には弁当も。夜は600円の小皿とビールのセットで安く飲める。味つけはシンプルであっさりだと常連 (2026年2月)。',
  });
}

// ================================================================ 長浜ラーメン浜ちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27014391/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00']);
  put({
    id: 'osaka_nagahama_ramen_hamachan_nishimikuni', name: '長浜ラーメン浜ちゃん (Nagahama Ramen Hamachan)', category: 'OMNI',
    lat: 34.740073, lng: 135.492822, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles from Hakata in a tonkotsu broth; gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth and chashu.',
    hours_raw: 'Mon–Sat 11:30–14:00; closed Sunday; hours may change (Tabelog). Lunch had paused in 2023 and resumed (January 2025). Cash only: no cards, e-money or QR (Tabelog). 19 seats: 6 at the counter, a tatami area for 5 and two tables for four; smoking allowed (Tabelog). About 70% full at 12:20 on a Friday (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西三国1-2-38, 10–13 min from the south exit of Higashi-Mikuni Stn (Tabelog)',
    cuisine: 'Nagahama-style tonkotsu ramen with thin noodles shipped from Hakata (2025–2026) · Nagahama ramen ¥550, unchanged for years (January 2025, April 2026) · lunch set A: ramen, rice and takana (kimchi earlier) ¥650 (2025–2026); set C: ramen, gyoza, rice and kimchi ¥800 (January 2025) · chashu ramen ¥800 (2025) · extra noodles ¥150 (August 2026; ¥100 in January 2025) · homemade gyoza (August 2025) · pickled ginger and sesame on the table (2025)',
    website: null, gmaps: gm('長浜ラーメン浜ちゃん 西三国'), menu_url: null,
    notes: "[Ramen · Higashi-Mikuni, ¥550 Nagahama tonkotsu at lunch] A long-running lunch-only ramen shop ten minutes from Higashi-Mikuni Station, run by the chef and the chef’s wife (October 2025), still charging ¥550 for a bowl of Nagahama tonkotsu with thin Hakata noodles (2026). The broth looks light but tastes of pork bone, a little salty on some days (2026); ask for the noodles firm and add a refill. Set A adds rice and takana for ¥650. Regulars return after years away and are glad to find the couple well (2025–2026). Cash only, smoking allowed, closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and the owner\'s wife (October 2025 review)'], origin: null,
      background: 'Per the Tabelog listing: Nagahama ramen, tsukemen and gyoza, 19 seats, lunch only, cash only. Per reviews: "I was so happy to see both the chef and [the chef’s] wife looking well" (October 2025); the owner and the owner’s wife "have aged quite a bit" but keep the shop going (April 2026); "[The shop] had paused lunch service in 2023, but it\'s now back" and "the owner appears to be of advanced age" (January 2025); the noodles are shipped from Hakata (2025–2026).',
      philosophy: null, specialty: 'Nagahama tonkotsu ramen at ¥550.',
      anecdotes: [
        { text: '"At first glance, the broth looks light and thin, but it\'s packed with the rich flavor of pork bones." — March 2026, lunch set A ¥650.', source: R + 'B503312448/' },
        { text: '"I was surprised that the price of the ramen hasn\'t changed in 5 years." — April 2026.', source: R + 'B432865299/' },
        { text: '"The broth is a light tonkotsu with a slightly stronger saltiness. The noodles are thin, with a great texture and aroma." — August 2026.', source: R + 'B112663811/' },
      ],
      japanese_sources_summary: '食べログ: 長浜ラーメン浜ちゃん、ラーメン・つけ麺・餃子、大阪市淀川区西三国1丁目2-38、東三国駅南口から徒歩10〜13分、月〜土11:30〜14:00、日曜休み、カード・電子マネー・QR 不可、19席 (カウンター6、座敷5、4名テーブル2)、喫煙可。口コミ(2025年1月〜2026年10月): 店主とおかみさんのふたり、2023年に昼の営業を休み再開、長浜ラーメン550円、ランチ A (ラーメン、ごはん、高菜) 650円、C (ラーメン、gyoza、ごはん、キムチ) 800円、チャーシューメン800円、替え玉150円 (以前は100円)、Hakata から取り寄せる細麺、見た目はあっさりで豚骨の味、塩けはやや強め、紅しょうがとごま、自家製の gyoza、何年ぶりの常連も。',
      confidence: 'medium', sources: [TB, R + 'B112663811/', R + 'B415039371/', R + 'B432865299/', R + 'B500176886/', R + 'B503312448/', R + 'B512623570/', R + 'B512807902/', R + 'B513413557/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; order at the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西三国1丁目2-38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西三国一丁目2番38号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500176886/', R + 'B112663811/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nagahama ramen', '¥550', 'Ramen', 'no', 'no', 'January 2025; April 2026.', 'nagahama_ramen'),
      it('', '', 'Lunch set A: ramen, rice and takana', '¥650', 'Lunch', 'no', 'no', 'August 2026.', 'set_a'),
      it('', '', 'Lunch set C: ramen, gyoza, rice and kimchi', '¥800', 'Lunch', 'no', 'no', 'January 2025.', 'set_c'),
      it('', '', 'Chashu ramen', '¥800', 'Ramen', 'no', 'no', 'August 2025.', 'chashu_ramen'),
      it('', '', 'Extra noodles (kaedama)', '¥150', 'Ramen', 'no', 'no', 'August 2026.', 'kaedama'),
    ] }, {
    cuisine: 'Hakata から取り寄せる細麺の長浜のとんこつラーメン (2025〜2026年)・長浜ラーメン550円、何年も変わらない値段 (2025年1月、2026年4月)・ランチ A: ラーメン、ごはん、高菜 (前はキムチ) 650円 (2025〜2026年)。C: ラーメン、gyoza、ごはん、キムチ800円 (2025年1月)・チャーシューメン800円 (2025年)・替え玉150円 (2026年8月。2025年1月は100円)・自家製の gyoza (2025年8月)・卓上に紅しょうがとごま (2025年)',
    neighborhood: '西三国1丁目2-38、東三国駅の南口から10〜13分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。Hakata の小麦の細麺に、とんこつのスープ。サイドに gyoza。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープとチャーシュー。',
    notes: '[ラーメン・東三国、昼だけの550円の長浜とんこつ] 東三国駅から10分、昼だけ営業する長く続くラーメン店で、店主とおかみさんのふたりで切り盛りし (2025年10月)、Hakata の細麺の長浜のとんこつが今も1杯550円 (2026年)。スープは見た目はあっさりでも豚骨の味がしっかり、日によって少し塩辛め (2026年)。麺はかために、替え玉も。A セットはごはんと高菜がついて650円。何年かぶりに来て、ふたりが元気でうれしいという常連も (2025〜2026年)。現金のみ、喫煙可、日曜休み。',
  });
}

save();
