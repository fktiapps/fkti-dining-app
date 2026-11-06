// Kyoto priority (kyoto-missed), worker osw13, batch 67 — lane: Tabelog id mod 6 = 0.
// Core: イタリア料理 ロカレ, ひよこ寿司. Notable: BANSAN 京色, 純米酒粕 玉乃光.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038800', 'existence unconfirmed: 肉料理 狐の嫁入り (opened 5 January 2023, reservations by Instagram DM) has no Tabelog review after December 2023 across all 32 reviews, and a web search found no later source; not drafted until it can be shown open');
skip('26000964', 'large parent: スコルピオーネ 祇園 links to kiwa-group.co.jp/scorpione_gion/ — 際コーポレーション (紅虎餃子房), 267 directly run restaurants as of 31 October 2025 (kiwa-group.co.jp/company). Large parent → chain (Greg ruling 2026-11-05)');
skip('26003016', 'large parent: 六傳屋 先斗町 links to kiwa-group.co.jp/rokudenya_pontocho/ — 際コーポレーション, 267 directly run restaurants as of 31 October 2025 (kiwa-group.co.jp/company). Large parent → chain (Greg ruling 2026-11-05)');

// ================================================================ イタリア料理 ロカレ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26027742/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_italian_rokare', name: 'イタリア料理 ロカレ (Italian Ryori Rokare)', category: 'OMNI',
    lat: 35.008381, lng: 135.749787, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fresh pasta, pizza, bread and fried dishes (2022–2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an appetizer platter of prosciutto, quiche and fish; meat and fish mains (2022–2026 reviews).',
    hours_raw: 'Tabelog: 11:30–14:00 (last order 13:30) and 17:00–22:00 (last order 21:30); closed irregularly. Lunch is served only some days — check the shop\'s Instagram first (March 2026). Book: 15 seats (3 at the counter, 12 at tables; one table for six). No service or cover charge — Tabelog, Japanese original 「サービス料・チャージともなし」. No cards or e-money (Tabelog). Non-smoking. On the Sanjo-kai shopping street (2024–2025 reviews). Opened 1 August 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-kai shopping street — 10 min walk from Nijojo-mae Stn',
    cuisine: 'A one-cook Italian trattoria on the Sanjo-kai arcade, for wine and many small plates (2022–2026 reviews) · "Rokare\'s assorted plate" of appetizers ¥1,000 a head (prosciutto, quiche, white-bean tuna salad, fresh fish, burdock pickles; 2022–2025) · fried courgette flowers with prosciutto, ayu confit, spiced Tanba chicken fritters, acqua pazza, Aomori black-wagyu tagliata, tripe in tomato, roast duck, braised beef cheek, spareribs, pizza (2024–2025 reviews) · pasta: nduja tomato, bottarga, blue-crab tomato cream (2025–2026) · occasional lunch of appetizers, a choice of three pastas and bread ¥1,800 (March 2026)',
    website: null, gmaps: gm('イタリア料理 ロカレ 御供町'), menu_url: null,
    notes: '[Italian · Sanjo-kai arcade, a one-cook wine trattoria] A tiny trattoria on the Sanjo-kai shopping street where one cook turns out a ¥1,000 appetizer platter and a long list of Italian small plates, meats and pasta at gentle prices — regulars come back for birthdays. It is slow when full (April 2024); there was no wine list to price bottles from (September 2025). Book; lunch only some days. No cards.',
    chef_bio: { chef_name: null, roles: ['Owner-cook, not named in a source'], origin: null,
      background: 'Opened 1 August 2016 (Tabelog). Diners describe a small room "basically run by the owner alone" (April 2022), "a one-person operation" (April 2024) and "just one staff" (November 2024); in September 2025 two young men were working.',
      philosophy: null,
      specialty: 'Assorted appetizer platter.',
      anecdotes: [
        { text: 'April 2024: "Since it\'s a one-person operation, it takes a while to serve when it gets crowded."', source: R + 'B484171405/' },
        { text: 'September 2025: there was a sign saying "Enjoy wine at night," but "there was no wine bottle menu available… I simply asked for a \'reasonable option\'."', source: R + 'B514378101/' },
        { text: 'March 2026: "The pasta was fresh, but I personally prefer dried pasta" — and "I wish they had a wider selection of soft drinks."', source: R + 'B523904482/' },
      ],
      japanese_sources_summary: '食べログ: イタリア料理 ロカレ、イタリアン、中京区御供町296、二条城前駅から徒歩10分、11:30〜14:00 (L.O. 13:30)・17:00〜22:00 (L.O. 21:30)、不定休、15席 (カウンター3席、テーブル12席)、原文で「サービス料・チャージともなし」、カード・電子マネー不可、禁煙、2016年8月1日オープン。口コミ (2022年4月〜2026年3月、英語): 三条会商店街、ほぼ店主一人の店、前菜の盛り合わせ1,000円 (生ハム、キッシュ、白いんげんとツナ、鮮魚、ごぼうのピクルス)、花ズッキーニのフライ、鮎のコンフィ、丹波鶏のスパイス揚げ、アクアパッツァ、青森の黒毛和牛のタリアータ、トリッパのトマト煮、鴨のロースト、牛ほほ肉の煮込み、ピザ、ンドゥイヤのトマトソースのパスタ、からすみのパスタ、ワタリガニのトマトクリームのパスタ、昼はたまにで1,800円 (Instagram で確認)、混むと遅いという声、ワインのボトルのメニューがないという声、生パスタは好みでないという声。',
      confidence: 'medium', sources: [TB, R + 'B399206591/', R + 'B429446964/', R + 'B451748915/', R + 'B455301861/', R + 'B484171405/', R + 'B495497154/', R + 'B513544575/', R + 'B514378101/', R + 'B516338200/', R + 'B521881130/', R + 'B523904482/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny local trattoria; book ahead; no cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区御供町296',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.008381, 135.749787); cross-checked: GSI 京都府京都市中京区御供町296番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484171405/', R + 'B523904482/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rokare\'s assorted appetizer plate (per person)', '¥1,000', 'Antipasti', 'ask', 'no', 'April and November 2024; tax excluded.', 'antipasto'),
      it('', '', 'Lunch: appetizers, pasta and bread', '¥1,800', 'Lunch', 'no', 'no', 'March 2026; lunch only some days.', 'pasta'),
    ] }, {
    cuisine: '三条会商店街にある一人で切り盛りするイタリアンで、ワインと小皿をいろいろ (2022〜2026年の口コミ)・前菜の盛り合わせ1人1,000円 (生ハム、キッシュ、白いんげんとツナのサラダ、鮮魚、ごぼうのピクルス、2022〜2025年)・花ズッキーニのフライと生ハム、鮎のコンフィ、丹波鶏のスパイス揚げ、アクアパッツァ、青森の黒毛和牛のタリアータ、トリッパのトマト煮、鴨のロースト、牛ほほ肉の煮込み、スペアリブ、ピザ (2024〜2025年の口コミ)・パスタはンドゥイヤのトマトソース、からすみ、ワタリガニのトマトクリーム (2025〜2026年)・たまにある昼は前菜、3種から選ぶパスタ、パンで1,800円 (2026年3月)',
    neighborhood: '三条会商店街。二条城前駅から徒歩10分',
    gf_detail: 'グルテンフリーではない: 生パスタ、ピザ、パン、揚げ物 (2022〜2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 前菜の盛り合わせに生ハム、キッシュ、魚。メインも肉や魚 (2022〜2026年の口コミ)。',
    notes: '[イタリアン・三条会商店街、一人で営むワインのトラットリア] 三条会商店街の小さなトラットリア。一人で作る1,000円の前菜の盛り合わせと、たくさんのイタリアンの小皿、肉料理、パスタを手頃な値段で。誕生日に通う常連も。混むと時間がかかるという声 (2024年4月) や、ワインのボトルの値段がわかるメニューがないという声 (2025年9月) も。予約を。昼は営業日が限られる。カード不可。',
  });
}

// ================================================================ ひよこ寿司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26015670/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hiyoko_zushi', name: 'ひよこ寿司 (Hiyoko Zushi)', category: 'OMNI',
    lat: 35.004332, lng: 135.748517, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce with the sushi, ponzu, red miso soup and grilled fish (2023–2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi counter (Tabelog; reviews).',
    hours_raw: 'Tabelog lists no opening hours, only irregular closing days; a May 2026 diner noted "they open early." Reservations taken (Tabelog). 13 counter seats; the entrance is inside the building, a little hard to find (October 2025). Table charge: about ¥400, varying by day — Tabelog, Japanese original 「約400円程（日によって異なります。）」; a July 2023 diner reckoned the otoshi at ¥500. English menu; the chefs speak English (August 2025). Children welcome; take-away. Cards (Visa, Master, JCB, AMEX, Diners), transit IC and nanaco; no QR. Non-smoking (smoking spot in the passage outside).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Omiya — 2 min walk north of Hankyu Omiya Stn',
    cuisine: 'An everyday Edomae sushi counter by Omiya Station for a drink and a few pieces (2017–2026 reviews) · nigiri by the piece at about ¥150–300 (September 2017); omakase nigiri ¥2,000 for about ten pieces (July 2023; December 2024); a "choi-nomi" set of one drink, bonito tataki, five-kind sashimi and sushi ¥3,000 (April 2023) · sashimi platters, grilled fish collar and sea bream, sea pineapple, seafood chawanmushi ¥700, tekka maki ¥650 (2023–2026 reviews) · give a budget and the chef will fit the sushi to it (November 2024); hot sake is Kikumasamune (2024–2025)',
    website: null, gmaps: gm('ひよこ寿司 錦大宮町'), menu_url: null,
    notes: '[Sushi · Shijo-Omiya, an everyday counter by the station] A 13-seat counter beside Hankyu Omiya Station for casual, reasonably priced sushi and sashimi with a drink — omakase nigiri around ¥2,000, an English menu and chefs who speak English to the tourists now staying nearby. One diner disliked the chef\'s attitude (January 2022); another found the pieces small and the chawanmushi poor value (December 2024). About ¥400 table charge.',
    chef_bio: { chef_name: null, roles: ['Sushi chefs, not named in a source'], origin: null,
      background: 'A regular on a 33rd visit (July 2023) says the shop moved into the present building, across from where it used to be, and is now cleaner and larger. Reviewers from 2024 to 2026 describe two chefs — one relatively young — and a young man serving drinks, many regulars, and more foreign tourists as hotels and holiday rentals have spread around Omiya.',
      philosophy: null,
      specialty: 'Omakase nigiri; sashimi platter.',
      anecdotes: [
        { text: 'January 2022: "The only downside is that I\'m not a fan of the chef\'s attitude."', source: R + 'B444910318/' },
        { text: 'December 2024: "The sushi pieces were quite small… and the iconic seafood chawanmushi only had two small pieces of what seemed to be leftover fish, not properly set."', source: R + 'B497555051/' },
        { text: 'March 2025: at a counter of American, Russian and Indian families, a regular "recommended them the warm Kikumasamune sake."', source: R + 'B503866503/' },
      ],
      japanese_sources_summary: '食べログ: ひよこ寿司、寿司・日本料理・居酒屋、中京区大宮通四条上ル錦大宮町130、阪急大宮駅から徒歩2分、営業時間の記載なし、不定休、予約可、カウンター13席、原文で「約400円程（日によって異なります。）」のチャージ、カード・交通系IC・nanaco可、QR不可、禁煙 (店の前の通路に喫煙所)、子供可、持ち帰り可。口コミ (2017年9月〜2026年8月、英語): 1貫150〜300円 (2017年)、おまかせ握り2,000円で10貫ほど、ちょい飲みコース3,000円 (2023年)、鉄火巻650円、海鮮茶碗蒸し700円、刺身の盛り合わせ、かま焼き、ほや、熱燗は菊正宗、予算を伝えると合わせてくれる、英語のメニューと英語で話す職人、移転して広くなった、大将の態度が苦手という声、ネタが小さく割高という声。',
      confidence: 'medium', sources: [TB, R + 'B297878836/', R + 'B444910318/', R + 'B466675181/', R + 'B468131260/', R + 'B495805835/', R + 'B497555051/', R + 'B503866503/', R + 'B510087918/', R + 'B513291137/', R + 'B528489518/', R + 'B82443343/'] },
    cultural_comfort: { level: 'english', note: 'English menu; the chefs speak English (August 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大宮通四条上ル錦大宮町130',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004332, 135.748517); cross-checked: GSI 京都府京都市中京区錦大宮町130番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B468131260/', R + 'B497555051/', R + 'B466675181/'],
    price_note: 'Prices from 2023–2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase nigiri (about 10 pieces)', '¥2,000', 'Sushi', 'no', 'no', 'July 2023; December 2024.', 'nigiri'),
      it('', '', '"Choi-nomi" set: drink, bonito tataki, sashimi, sushi', '¥3,000', 'Set', 'no', 'no', 'April 2023.', 'sushi_set'),
      it('', '', 'Seafood chawanmushi', '¥700', 'Side', 'ask', 'no', 'December 2024.', 'chawanmushi'),
    ] }, {
    cuisine: '大宮駅のそばで一杯と数貫を気軽に楽しめる江戸前寿司のカウンター (2017〜2026年の口コミ)・握りは1貫150〜300円ほど (2017年9月)。10貫ほどのおまかせ握り2,000円 (2023年7月、2024年12月)。1ドリンク、かつおのたたき、刺身5種、寿司の「ちょい飲み」3,000円 (2023年4月)・刺身の盛り合わせ、かま焼きや鯛の焼き物、ほや、海鮮茶碗蒸し700円、鉄火巻650円 (2023〜2026年の口コミ)・予算を伝えると合わせて握ってくれる (2024年11月)。熱燗は菊正宗 (2024〜2025年)',
    neighborhood: '四条大宮。阪急大宮駅から北へ徒歩2分',
    gf_detail: 'グルテンフリーではない: 寿司の醤油、ポン酢、赤だし、焼き魚 (2023〜2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚の寿司のカウンター (食べログ、口コミ)。',
    notes: '[寿司・四条大宮、駅前の普段使いのカウンター] 阪急大宮駅の横の13席のカウンターで、手頃な寿司と刺身を一杯とともに。おまかせ握りは2,000円ほど、英語のメニューがあり、近くに泊まる旅行者にも職人が英語で応対。大将の態度が苦手という声 (2022年1月) や、ネタが小さく茶碗蒸しも割高という声 (2024年12月) も。チャージ400円ほど。',
  });
}

// ================================================================ BANSAN 京色
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020008/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyosyoku.com/bansan.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_bansan_kyoshoku', name: 'BANSAN 京色 (BANSAN Kyoshoku)', category: 'OMNI',
    lat: 35.004298, lng: 135.763749, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade pizza, tempura and kakiage, nama-fu, soy-based sauces (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, offal, sashimi and dashi dishes; the grilled vegetables come with a tamami-miso sauce (official site; reviews).',
    hours_raw: 'Tabelog and official site: 17:00–23:00 (last order 22:30); closed Sunday — when Monday is a public holiday, open Sunday and closed Monday. Book: fully booked early evenings and walk-ins turned away (July 2026); 2.5-hour limit. One drink per guest — Tabelog, Japanese original 「当店全てのお客様にワンドリンク制をお願いしております。」 Ordering by smartphone (July 2025). 38 seats: counter on the ground floor, tatami and sunken-kotatsu seating upstairs for up to 20; the ground-floor private room allows smoking, so no children there. Courses with all-you-can-drink from ¥5,500 for 4 or more, booked by the day before (official site). Cards (Visa, Master, JCB, AMEX, Diners) and PayPay; no e-money.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma — a narrow alley off Yanaginobanba, 5 min walk from Karasuma / Shijo Stns',
    cuisine: 'Yakitori and seasonal Kyoto plates in a townhouse izakaya down an alley (official site; 2025–2026 reviews) · large skewers of Kyoto Akadori jidori chicken; charcoal-grilled offal; grilled vegetable platter with tamami miso; homemade pizza (official site) · sashimi platter of four fish from the morning market ¥2,500; kumiage yuba with ikura ¥950; lotus-root tsukune ¥500 (February 2026); bagna cauda, hamo tempura, whelk with wasabi, nama-fu dengaku, dashimaki, clay-pot rice (2025–2026 reviews) · courses with all-you-can-drink: ¥5,500 (8 dishes, 90 min), ¥6,600 (9 dishes, 120 min), ¥7,700 (with wagyu shabu-shabu and ayu) (official site) · Kyoto and national sake',
    website: SITE, gmaps: gm('BANSAN 京色 瀬戸屋町'), menu_url: SITE,
    notes: '[Izakaya · Shijo-Karasuma, yakitori in an alley townhouse] A renovated townhouse at the end of a narrow alley off Yanaginobanba: big Kyoto-chicken skewers, grilled offal, Kyoto vegetables, yuba with ikura and a homemade pizza, with a long sake list — popular for dates and parties, so book. One diner found the yakitori salty and the corn tempura heavy (August 2026). One drink each. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by 株式会社 京色 (official site)'], origin: null,
      background: 'One of five Kyoto restaurants run by 株式会社 京色, founded by a president and two chefs who studied together at a cooking school and trained in Japanese, Western and creative cooking (official site); its sisters are うらやま京色 (kushiage), 祇園 晩餐 京色, 祇園天ぷら晩餐 and 角打ちと麺 ばんさん (official site). Reviewers in 2026 describe a stone-paved approach, a counter downstairs and sunken seating upstairs, individually plated course dishes, and fish from the central market each morning.',
      philosophy: 'From the site: particular about ingredients such as Kyoto Akadori chicken and fresh vegetables, for "bold dishes with delicate technique hidden in them" (official site, translated).',
      specialty: 'Kyoto Akadori yakitori; grilled vegetable platter.',
      anecdotes: [
        { text: 'July 2026: "I made a reservation for an early time, but the place was already fully booked. They were turning away customers without reservations."', source: R + 'B510724783/' },
        { text: 'August 2026: "The yakitori was a bit salty… The tempura corn had a bit too much batter, resembling a fritter, but it was delicious."', source: R + 'B533986581/' },
      ],
      japanese_sources_summary: '食べログ: BANSAN 京色、焼鳥・居酒屋・海鮮、中京区柳馬場通四条上ル瀬戸屋町473-1、烏丸駅・四条駅から徒歩5分、17:00〜23:00 (L.O. 22:30)、日曜休み (翌日が祝日なら日曜営業・翌日休み)、利用は2.5時間、原文で「当店全てのお客様にワンドリンク制」、38席、個室 (1階は喫煙可で子供不可、2階の掘りごたつは最大20名)、カード・PayPay可、電子マネー不可。公式サイト: 京赤地鶏の大ぶりの焼き鳥、ホルモン炭焼、焼野菜、自家製ピザ、日本酒、宴会コース5,500円 (90分飲み放題、8品)、定番コース6,600円 (120分、9品)、接待・観光向け7,700円、4名から前日までに予約。株式会社 京色は、うらやま京色、BANSAN、祇園晩餐、天ぷら晩餐、角打ちと麺 ばんさんを運営、食の専門学校で共に学んだ社長と料理人2人が立ち上げた。口コミ (2025年7月〜2026年10月、英語): 細い路地の奥の町家、スマホで注文、刺身の盛り合わせ2,500円、汲み上げ湯葉のいくらのせ950円、蓮根のつくね500円、バーニャカウダ、鱧の天ぷら、つぶ貝のわさび和え、生麩田楽、だし巻、土鍋ご飯、早い時間でも満席で予約なしは断っていた、焼き鳥が塩辛くとうもろこしの天ぷらの衣が厚いという声。',
      confidence: 'medium', sources: [SITE, 'http://www.kyosyoku.com/', TB, R + 'B491033532/', R + 'B510724783/', R + 'B524172630/', R + 'B524735225/', R + 'B525722683/', R + 'B530312502/', R + 'B533972278/', R + 'B533986581/', R + 'B537616102/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; one drink per guest; smartphone ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通四条上ル瀬戸屋町473-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026; listed on the operator\'s site.' },
    pin_source: `Tabelog ${TB} (35.004298, 135.763749); cross-checked: GSI 京都府京都市中京区瀬戸屋町473番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B524172630/'],
    price_note: 'Course prices from the official site, tax included; à la carte from a February 2026 review.', last_checked: TODAY, items: [
      it('宴会コース', '', 'Party course, 8 dishes, 90-min all-you-can-drink (4+ guests)', '¥5,500', 'Course', 'no', 'no', 'Official site; book by the day before.', 'izakaya_course'),
      it('', '', 'Kumiage yuba with ikura', '¥950', 'À la carte', 'ask', 'no', 'February 2026.', 'yuba'),
      it('', '', 'Sashimi platter, four kinds', '¥2,500', 'À la carte', 'ask', 'no', 'February 2026.', 'sashimi'),
    ] }, {
    cuisine: '路地の奥の町家の居酒屋で焼き鳥と京都の季節の料理 (公式サイト、2025〜2026年の口コミ)・京赤地鶏の大ぶりの焼き鳥、ホルモン炭焼、玉味噌の焼野菜、自家製ピザ (公式サイト)・朝の市場の魚4種の刺身の盛り合わせ2,500円、汲み上げ湯葉のいくらのせ950円、蓮根のつくね500円 (2026年2月)。バーニャカウダ、鱧の天ぷら、つぶ貝のわさび和え、生麩田楽、だし巻、土鍋ご飯 (2025〜2026年の口コミ)・飲み放題付きのコースは5,500円 (8品、90分)、6,600円 (9品、120分)、和牛しゃぶしゃぶや鮎の7,700円 (公式サイト)・京都と全国の日本酒',
    neighborhood: '四条烏丸。柳馬場通の細い路地、烏丸駅・四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 自家製ピザ、天ぷらやかき揚げ、生麩、醤油系のたれ (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 焼き鳥、ホルモン、刺身、出汁の料理。焼野菜も玉味噌のソース (公式サイト、口コミ)。',
    notes: '[居酒屋・四条烏丸、路地の町家の焼き鳥] 柳馬場通の細い路地の奥の改装した町家。京都の地鶏の大きな焼き鳥、ホルモン、京野菜、いくらのせの湯葉、自家製ピザに日本酒もたくさん。デートや宴会に人気なので予約を。焼き鳥が塩辛く、とうもろこしの天ぷらの衣が重いという声も (2026年8月)。ワンドリンク制。日曜休み。',
  });
}

// ================================================================ 純米酒粕 玉乃光
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037180/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://sakekasu.tamanohikari.co.jp/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_junmai_sakekasu_tamanohikari', name: '純米酒粕 玉乃光 (Junmai Sakekasu Tamanohikari)', category: 'OMNI',
    lat: 35.000089, lng: 135.760161, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: salt-koji karaage, fried horse mackerel and sea bream, soy- and miso-seasoned obanzai (2026 reviews). Allergy requests must be made by the day before a booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish namerou, karaage, pork and fish set meals; kasujiru (2026 reviews).',
    hours_raw: 'Official site: tasting bar (1F) and restaurant (2F) 11:30–15:00 (last order 14:30) and 17:30–22:00 (last order 21:30); shop 11:30–15:00 and 17:30–21:30; closed irregularly and 31 December–3 January. Shaved ice in summer (July–September) 11:30–17:00. No service charge — Tabelog, Japanese original 「なし」 (the English page says one is added). Allergy needs and booking changes by the day before (Tabelog). 60 seats: 1F bar 16, 2F 34, an annex room for 10; private hire with minimum spends. Non-smoking. Cards, transit IC and e-money, many QR (PayPay, Alipay, WeChat Pay). Opened 1 March 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Shijo-Karasuma (Inabado-cho) — 3 min walk from Shijo Stn exit 5',
    cuisine: 'The restaurant, tasting bar and shop of the Fushimi sake brewer Tamanohikari, cooking with its junmai sake lees and koji (official site; 2026 reviews) · 1F bar: 30 minutes of self-pour from about fifteen Tamanohikari sakes ¥1,500, with snacks such as sea bream namerou with sake lees and sake-lees curry (Tabelog; August 2026) · 2F lunch sets with amazake, kasujiru (sake-lees soup) and small obanzai: fermented Kyoto obanzai, salt-koji karaage, namerou with fried horse mackerel, pork loin; a ¥500 sake set (2026 reviews) · dinner courses with all-you-can-drink sake about ¥5,000–5,200 (August–September 2026) · soft serve; natural-ice shaved ice in summer',
    website: SITE, gmaps: gm('純米酒粕 玉乃光 因幡堂町'), menu_url: SITE,
    notes: '[Sake-lees cooking · Shijo-Karasuma, Tamanohikari brewery\'s townhouse] Fushimi brewer Tamanohikari\'s own townhouse: a ground-floor bar where ¥1,500 buys 30 minutes of self-pour from about fifteen of its sakes, and an upstairs dining room of gentle sake-lees and koji lunches with amazake and kasujiru, and sake-paired courses at night. Some found portions small and service slow (September 2026). No service charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run directly by 玉乃光酒造 (official site)'], origin: null,
      background: 'Run directly by the sake brewer 玉乃光酒造 of Fushimi, which began brewing in 1673 in Wakayama and is now in its 13th generation (official site); opened 1 March 2022 (Tabelog). Reviewers in 2026 describe a renovated townhouse with a bar on the ground floor, a dining room upstairs, staff in Tamanohikari T-shirts, and sake events such as a September 2026 sanma night.',
      philosophy: 'Per its site, a place to eat dishes made with the brewery\'s junmai sake lees with its sake, and a showcase of ideas for using them at home (official site, paraphrased).',
      specialty: 'Sake-lees and koji cooking; self-pour sake bar.',
      anecdotes: [
        { text: 'August 2026: for ¥1,500 "They handed me a wine glass, and I could fill it with any of the 15 varieties of Tamano Hikari sake in any amount I wanted."', source: R + 'B533000457/' },
        { text: 'September 2026: "the portion size would feel quite small… Additionally, the service takes some time."', source: R + 'B535770066/' },
        { text: 'August 2026: "the sea bream had a bit of a fishy taste… The pork set meal was a bit on the smaller side and felt rather bland."', source: R + 'B535645037/' },
      ],
      japanese_sources_summary: '公式サイト: 京都・伏見の玉乃光酒造の直営のレストランとショップ、純米酒粕を使った料理と玉乃光の酒、延宝元年 (1673年) に和歌山で創業し現在は13代目、1階テイスティングバーと2階レストランは11:30〜15:00 (L.O. 14:30)・17:30〜22:00 (L.O. 21:30)、ショップは11:30〜15:00・17:30〜21:30、不定休、12月31日〜1月3日休み、夏のかき氷。食べログ: 純米酒粕 玉乃光、日本料理・居酒屋・おでん、下京区因幡堂町658-1、四条駅5番出口から徒歩3分、1階バーは30分飲み放題1,500円、原文でサービス料「なし」、アレルギーは前日までに、60席、禁煙、カード・電子マネー・QR可、2022年3月1日オープン。口コミ (2026年8〜11月、英語): 約15種の玉乃光の自分で注ぐ飲み放題、酒粕の鯛のなめろう、酒粕カレー、京の発酵おばんざいランチ、塩麹の唐揚げ、なめろうとアジフライ、豚ロースの定食、甘酒、粕汁、500円の日本酒セット、5,000〜5,200円の飲み放題付きコース、ソフトクリーム、天然氷のかき氷、量が少なく提供が遅いという声、鯛が生臭く豚の定食が物足りないという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B533000457/', R + 'B533661429/', R + 'B534464403/', R + 'B534876317/', R + 'B535093594/', R + 'B535645037/', R + 'B535770066/', R + 'B535858890/', R + 'B536304513/', R + 'B537114221/', R + 'B538703303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-pour sake bar downstairs; allergy requests by the day before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区因幡堂町658-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.000089, 135.760161); cross-checked: GSI 京都府京都市下京区因幡堂町658番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533000457/', R + 'B534464403/'],
    price_note: 'From Tabelog and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '1F bar: 30-minute self-pour sake', '¥1,500', 'Bar', 'ask', 'ask', 'Tabelog; August 2026.', 'sake'),
      it('', '', 'Dinner course with all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'August 2026.', 'izakaya_course'),
    ] }, {
    cuisine: '伏見の酒蔵、玉乃光のレストラン、試飲バー、ショップで、純米酒粕と麹の料理 (公式サイト、2026年の口コミ)・1階バーは約15種の玉乃光を30分自分で注ぐ1,500円。酒粕の鯛のなめろうや酒粕カレーなどのつまみ (食べログ、2026年8月)・2階の昼は甘酒、粕汁、小さなおばんざいの定食。京の発酵おばんざい、塩麹の唐揚げ、なめろうとアジフライ、豚ロース。500円の日本酒セット (2026年の口コミ)・夜は日本酒飲み放題付きのコースが5,000〜5,200円ほど (2026年8〜9月)・ソフトクリーム、夏は天然氷のかき氷',
    neighborhood: '四条烏丸の南 (因幡堂町)。四条駅5番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない: 塩麹の唐揚げ、アジや鯛のフライ、醤油や味噌のおばんざい (2026年の口コミ)。アレルギーは予約の前日までに (食べログ)。',
    vegan_detail: 'ヴィーガン不可: 魚のなめろう、唐揚げ、豚や魚の定食、粕汁 (2026年の口コミ)。',
    notes: '[酒粕料理・四条烏丸、玉乃光の町家] 伏見の酒蔵、玉乃光の町家。1階のバーは1,500円で約15種の酒を30分自分で注げ、2階では甘酒と粕汁付きのやさしい酒粕と麹の昼ごはん、夜は酒と合わせたコース。量が少なく提供が遅いという声も (2026年9月)。サービス料なし。',
  });
}

save();
