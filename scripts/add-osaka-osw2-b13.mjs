// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 13 (lane: Tabelog id mod 4 = 1).
//   + TUFFE (all-day French-Italian with a green terrace on the 7th floor of Daimaru Shinsaibashi; summer BBQ and beer garden)
//   + 魚伝 Uoden (fish izakaya in Ura Namba: big sashimi platters, sea-bream rice, weekday fish lunches)
//   + 哲剣 TEKKEN (Japanese-Italian izakaya by Namba Stn: morning-market fish as sashimi beside pizza and pasta, since 2008)
//   + 煙 燻製バル トリベーネ 裏なんば本店 Toribene (smoked-food bar in Ura Namba: smoked platters, kamameshi, smoked gin and tonic)
//   Skipped (lane order):
//   - 心斎橋 今井屋本店 27013245 — chain: a same-concept branch of 今井屋本店, a Hinai-jidori brand of the DD group (dd-holdings.jp
//     shop page) with shops of the same name in Tokyo Marunouchi and Nagoya (retty.me pages for 東京 今井屋本店 and 名古屋 今井屋本店,
//     opened 2026-11-02).
//   Chain check of the four kept:
//   - TUFFE: one shop (Tabelog). The official site is script-only and no operator was read; a blog in search results names the
//     operator, but it was not opened, so it is not relied on.
//   - Uoden: one shop (Tabelog; no official site found).
//   - TEKKEN: the 小野料理研究所 group (onofoodlab.co.jp) runs 料理屋 哲剣, 大衆酒場 裏剣, 立ち飲み テッケン and セルフで呑みほ 哲ちゃん —
//     different formats on the same street; TEKKEN is the only shop of its format. None in data.
//   - Toribene: 株式会社ベネ (bene-p.jp) lists four トリベーネ (阿倍野, 日本橋 = 裏なんば2号店, 裏なんば本店, 梅田) and two サーモンベーネ; none
//     in data (grep of the six Tabelog ids). Kept as a small group; flagged.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27013245', 'Chain: 心斎橋 今井屋本店 is a branch of the DD group\'s 今井屋本店, with same-name shops in Tokyo Marunouchi and Nagoya (dd-holdings.jp; retty.me).');

// ================================================================ TUFFE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113185/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://tuffe.jp/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_tuffe_daimaru_shinsaibashi', name: 'TUFFE (Tuffe Terrace Eat)', category: 'OMNI',
    lat: 34.673106, lng: 135.500747, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on pasta, gratin, cutlets, fried dishes and bread or rice with sets (Tabelog menu; reviews); carpaccio, roast beef and grilled meats are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the menu is meat, seafood and cheese (Tabelog menu).',
    hours_raw: 'Daily 11:00–22:00 (last order 21:00); closing days follow the Daimaru Shinsaibashi main building (Tabelog). Reservations taken, not for the café; changes or cancellations at least two days ahead; 2-hour limit (Tabelog; October 2026 review). Orders by QR code (October 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners) and QR incl. Alipay and WeChat Pay; no e-money. 130 seats: 82 inside, 48 on the terrace; non-smoking (smoking area in the store); wheelchair and stroller friendly; free Wi-Fi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-7-1, Daimaru Shinsaibashi main building 7F — 3 min from Shinsaibashi Stn',
    cuisine: 'All-day French-Italian restaurant and café with a green terrace (Tabelog) · burrata caprese, black-wagyu roast beef, prosciutto sliced on an Italian slicer, TUFFE salad with grilled chicken, pastas (Awaji beef Bolognese, Yumi pork carbonara, shrimp and karasumi), shrimp and mushroom gratin, Yumi pork spare ribs and cutlet, fish and chips (Tabelog menu, October 2026) · lunch sets with bread or rice, daily pasta, hamburg steak, beef omurice; truffle fries, cheesecake, homemade lemonade (reviews) · BBQ and beer-garden courses with all-you-can-drink ¥5,000–7,000',
    website: SITE, gmaps: gm('TUFFE 大丸心斎橋'), menu_url: M,
    notes: "[Italian · Shinsaibashi, terrace restaurant on Daimaru's 7th floor] A big, bright French-Italian restaurant and café on the 7th floor of the Daimaru Shinsaibashi main building, away from the dining floor, the floor's only terrace restaurant, with sofas, greenery and 48 terrace seats. Lunch is the busy time: pasta, gratin, hamburg steak and beef omurice with freshly baked bread that diners in October 2026 single out, plus truffle fries and cheesecake. Families with strollers, friends and solo shoppers mix; a line forms at opening. Orders are by QR code, though staff took spoken orders from older guests. In summer the terrace runs BBQ and beer-garden courses.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, TUFFE opened on 20 September 2019 on the 7th floor of the Daimaru Shinsaibashi main building as an all-day French-Italian restaurant of about 130 seats, the only terrace restaurant on that floor; prosciutto is sliced to order on a slicer brought from Italy. The official site gave no readable text, so the operator is not recorded here.', philosophy: null, specialty: 'Terrace lunch: pasta, gratin and fresh bread.',
      anecdotes: [
        { text: '"The freshly baked bread that came with the set (or as a side) was particularly fragrant and fluffy, making it impossible to stop eating." — October 2026, second visit.', source: R + 'B537951442/' },
        { text: '"Ordering was done via a QR code, which allowed us to take our time choosing from the holiday menu." — October 2026, holiday lunch.', source: R + 'B537294374/' },
        { text: '"The clientele was diverse, with groups coming in with strollers, girls\' nights out, couples, families, and solo diners." — October 2026, holiday.', source: R + 'B537294374/' },
        { text: '"The truffle flavor was a bit subtle, but they were delicious." — October 2026, truffle fries.', source: R + 'B537897707/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): TUFFE、大丸心斎橋店 本館 7F、心斎橋駅から徒歩3分、2019年9月20日オープン、毎日11:00〜22:00 (L.O.21:00)、休みは大丸心斎橋店本館に準じる、130席 (店内82、テラス48)、7階唯一のテラスレストラン、終日営業のフレンチイタリアン、カフェは予約不可、キャンセルは2日前まで、BBQとビアガーデンのコース (飲み放題5,000〜7,000円)。メニュー (2026年10月): ブッラータのカプレーゼ、黒毛和牛のローストビーフ、イタリア製スライサーの生ハム、TUFFE サラダ、パスタ (Awaji 牛のボロネーゼ、Yumi pork のカルボナーラ)、海老とキノコのグラタン、スペアリブ、カツレツ、フィッシュ&チップス。口コミ (2026年10月): パンが香ばしくふわふわ、パスタ、グラタン、ハンバーグ、牛肉の Omurice、トリュフポテト、チーズケーキ、自家製レモネード、QRコードで注文 (年配の客は口頭で)、2時間制、開店前に行列、ベビーカーの家族からひとり客まで。',
      confidence: 'medium', sources: [TB, M, R + 'B536878852/', R + 'B537053232/', R + 'B537078240/', R + 'B537294374/', R + 'B537546632/', R + 'B537897707/', R + 'B537951442/', R + 'B538056593/', R + 'B538144340/', R + 'B538428797/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code (2026 reviews); pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店 本館 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (kept: inside Daimaru Shinsaibashi; GSI 大阪府大阪市中央区心斎橋筋一丁目7番1号 (go) gives the building point 61 m away). Same building as ラーメン 雀 and 鴻聚軒 (B2F records, e.g. osaka_kojuken_daimaru_shinsaibashi, "…心斎橋筋1-7-1 大丸心斎橋店 B2F"), about 24 m away, so not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B536878852/'],
    price_note: 'Tabelog menu last updated October 2026, tax included. October 2026 lunch prices: beef omurice ¥1,500, shrimp gratin ¥1,880. Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Shrimp and mushroom gratin', '¥1,500', 'À la carte', 'no', 'no', '¥1,880 as an October 2026 lunch.', 'shrimp_gratin'),
      it('', '', 'Burrata caprese', '¥1,780', 'À la carte', 'ask', 'no', 'Recommended.', 'burrata_caprese'),
      it('', '', 'Awaji beef Bolognese', '¥1,500', 'Pasta', 'no', 'no', '', 'bolognese'),
      it('', '', 'Black-wagyu sirloin-cap roast beef', '¥1,300', 'À la carte', 'ask', 'no', 'Recommended.', 'roast_beef'),
      it('', '', 'Yumi pork spare ribs with BBQ sauce and fries', '¥2,300', 'Main', 'ask', 'no', '', 'spare_ribs'),
    ] }, {
    cuisine: '緑のテラスのある終日営業のフレンチイタリアンとカフェ (食べログ)・ブッラータのカプレーゼ、黒毛和牛のローストビーフ、イタリア製スライサーで切る生ハム、グリルチキンの TUFFE サラダ、パスタ (Awaji 牛のボロネーゼ、Yumi pork のカルボナーラ、海老と Karasumi)、海老とキノコのグラタン、Yumi pork のスペアリブとカツレツ、フィッシュ&チップス (食べログのメニュー、2026年10月)・パンかライスのランチセット、日替わりパスタ、ハンバーグ、牛肉の Omurice、トリュフポテト、チーズケーキ、自家製レモネード (口コミ)・飲み放題付きのBBQとビアガーデンのコース5,000〜7,000円',
    neighborhood: '心斎橋筋1-7-1 大丸心斎橋店 本館 7F。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、グラタン、カツレツ、揚げ物、セットのパンかライスが中心 (食べログのメニュー、口コミ)。カルパッチョ、ローストビーフ、グリルの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、メニューは肉、魚介、チーズ (食べログのメニュー)。',
    notes: '[イタリアン・心斎橋、大丸7階のテラスレストラン] 大丸心斎橋店本館の7階、レストランフロアから離れた場所にある明るく大きなフレンチイタリアンとカフェで、この階唯一のテラスレストラン。ソファ、緑、テラス48席。にぎわうのは昼で、パスタ、グラタン、ハンバーグ、牛肉の Omuriceに、2026年10月の客が口をそろえて褒める焼きたてのパン、トリュフポテトやチーズケーキも。ベビーカーの家族、友人同士、買い物途中のひとり客が混じり、開店時には行列ができる。注文はQRコードだが、年配の客には口頭で注文を受けていた。夏はテラスでBBQとビアガーデンのコース。',
  });
}

// ================================================================ 魚伝
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27085565/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const MT = day(['11:30', '23:00']); const F = day(['11:30', '24:00']); const SA = day(['14:00', '24:00']); const SU = day(['14:00', '23:00']);
  put({
    id: 'osaka_uoden_sennichimae', name: '魚伝 (Uoden)', category: 'OMNI',
    lat: 34.664459, lng: 135.503845, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and salt-grilled fish sit beside tempura, kara-age, gyoza, okonomiyaki and simmered dishes (Tabelog menu; reviews); soy sauce and seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; the tofu starter and vegetable dishes are not described.',
    hours_raw: 'Mon–Thu 11:30–23:00 (last food order 22:00); Fri 11:30–24:00; Sat 14:00–24:00; Sun 14:00–23:00; holidays 14:00–23:30, the day before a holiday 17:00–24:00, the day after 17:00–23:30 (Tabelog). Weekday lunch only, last order 14:00 (Tabelog; October 2026 review). Reservations online; changes and cancellations by phone (06-6648-0141); five or more by phone (Tabelog). A tofu starter is charged (¥500, September 2026 review). Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. Private rooms for 6, 8 and 15; whole floor for up to 30 (Tabelog).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: F, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 9-17, 千日前セントラル第2ビル 1F, Ura Namba — 5 min from Nankai Namba north exit; 7 min from Namba Stn exit 3',
    cuisine: 'Fish izakaya conveying "the deliciousness of fish" (Tabelog): the chef\'s sashimi platter (bluefin tuna from Nagasaki, sea bream from Ehime, Spanish mackerel from Awaji, red shrimp, surf clam …), swordtip squid three ways, kinmedai and local fish salt-grilled or simmered, sea-bream rice cooked with kombu and bream-bone stock, wagyu aburi sushi, charcoal-grilled thick beef tongue, teppan potato-mentaiko omelette, sake-steamed clams (Tabelog menu, June 2026) · weekday lunch set meals ¥1,600–1,800 with grilled fish (October 2026 review) · a wide local sake list; all-you-can-drink courses',
    website: TB, gmaps: gm('魚伝 難波千日前'), menu_url: M,
    notes: "[Izakaya · Ura Namba, sashimi and sea-bream rice] A calm, softly lit fish izakaya in an Ura Namba back alley, five minutes from Namba Station, with weekday fish lunches and day drinking from 2 PM at weekends. The sashimi platter, thick-cut and sometimes served over dry ice, is the house showpiece; diners in October 2026 also praise the sake-steamed dishes, grilled collar, sea-bream rice and the local sake, and a ¥6,000 course with all-you-can-drink. Several diners note the manager's attentive service, a welcome card and Halloween cookies at the door; one found the staff's chatter distracting, another got a beer that was not cold. The tofu starter is charged.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a manager praised by name of role only in reviews (Tabelog)'], origin: null, background: 'Per Tabelog, "Uoden" is a restaurant that conveys the deliciousness of fish, which has long been essential to Japanese dining; it opened on 10 June 2015 and started weekday lunch on 16 March. Its English page calls it "Uranamba Sakaba Uo…" (truncated).', philosophy: '"Seasonal fish is flavorful, delicious, and packed with nutrients" (Tabelog).', specialty: 'Sashimi platters; sea-bream rice.',
      anecdotes: [
        { text: '"The sashimi is cut into generous pieces, providing a satisfying bite with each slice." — September 2026, seafood assortment.', source: R + 'B536513658/' },
        { text: '"However, I was seated in front of the drinkers, and I found the staff\'s casual conversations quite distracting." — October 2026, second visit.', source: R + 'B537591492/' },
        { text: '"On our way out, the manager was handing out Halloween cookies, and we decided we would definitely come back!" — October 2026.', source: R + 'B537848603/' },
        { text: '"The presentation was impressive, complete with dry ice for a great visual effect, and the fish tasted fantastic." — October 2026.', source: R + 'B538424076/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 魚伝、難波千日前9-17 千日前セントラル第2ビル 1F、2015年6月10日オープン、魚のおいしさを伝える店、月〜木11:30〜23:00、金11:30〜24:00、土14:00〜24:00、日14:00〜23:00、平日ランチ (L.O.14:00)、土日祝は14時から昼飲み、個室 (6・8・15名)、フロア貸切30名まで。メニュー (2026年6月): シェフのおまかせ刺身盛り合わせ (Nagasaki の本マグロ、Ehime の鯛、Awaji の鰆、赤海老、ホッキ貝など)、剣先イカ、Kinmedai、地魚の塩焼きと煮付け、昆布と鯛のアラで炊く Tai meshi、和牛の炙り寿司、厚切り牛タンの炭火焼き、鉄板のポテト Mentaiko オムレツ、あさりの酒蒸し。口コミ (2026年9月〜10月): 厚切りの刺身盛り、ドライアイスの演出、酒蒸し、かま焼き、Tai meshi、地酒、飲み放題付き6,000円、平日ランチ1,600〜1,800円、店長の気配り、ウェルカムカード、ハロウィンのクッキー、スタッフの雑談が気になったという声、ビールが冷えていなかったという声、お通しの豆腐は500円。',
      confidence: 'medium', sources: [TB, M, R + 'B528221018/', R + 'B536513658/', R + 'B537114164/', R + 'B537591492/', R + 'B537607781/', R + 'B537848603/', R + 'B537938603/', R + 'B538017146/', R + 'B538244627/', R + 'B538424076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前9-17 千日前セントラル第2ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a June 2026 menu; reviews dated through October 2026. No official site found.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前9番17号 (go) 12m. Same building as Bird's Nest (osaka_birds_nest_namba, "…千日前セントラル第2ビル 2F"), whose pin is about 9 m away, so not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B537114164/'],
    price_note: 'Tabelog menu last updated June 2026, tax included; fish and prices change with the season. Tofu starter ¥500 (September 2026). Weekday lunch ¥1,600–1,800 (October 2026). Diners report ¥1,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s sashimi platter, per person', '¥1,780', 'Sashimi', 'ask', 'no', 'Photo shows two servings.', 'sashimi_moriawase'),
      it('', '', 'Sea-bream rice cooked with kombu and bream-bone stock, per person', '¥780', 'Specialties', 'ask', 'no', '', 'tai_meshi'),
      it('', '', 'Wagyu aburi sushi, 1 piece (2 or more)', '¥480', 'Specialties', 'ask', 'no', '', 'wagyu_aburi_sushi'),
      it('', '', 'Charcoal-grilled thick beef tongue', '¥3,480', 'Specialties', 'ask', 'no', '', 'thick_tongue'),
      it('', '', 'Sake-steamed clams', '¥880', 'Specialties', 'ask', 'no', '', 'sakamushi'),
    ] }, {
    cuisine: '「魚のおいしさを伝える」魚の居酒屋 (食べログ): シェフのおまかせ刺身盛り合わせ (Nagasaki の本マグロ、Ehime の鯛、Awaji の鰆、赤海老、ホッキ貝など)、剣先イカの3種、Kinmedai や地魚の塩焼き・煮付け、昆布と鯛のアラで炊く Tai meshi、和牛の炙り寿司、厚切り牛タンの炭火焼き、鉄板のポテト Mentaiko オムレツ、あさりの酒蒸し (食べログのメニュー、2026年6月)・平日の焼き魚などのランチ定食1,600〜1,800円 (2026年10月の口コミ)・地酒が豊富、飲み放題コース',
    neighborhood: '難波千日前9-17 千日前セントラル第2ビル 1F、裏なんば。南海なんば駅北口から徒歩5分、なんば駅3番出口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。刺身や塩焼きのほか、Tempura、Kara-age、Gyoza、Okonomiyaki、煮付けもある (食べログのメニュー、口コミ)。しょうゆや調味料の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、お通しの豆腐や野菜の皿の説明はない。',
    notes: '[居酒屋・裏なんば、刺身と Tai meshi] なんば駅から5分、裏なんばの路地にある落ち着いた照明の魚の居酒屋。平日は魚のランチ、週末は14時から昼飲み。看板は厚切りの刺身盛り合わせで、ドライアイスで出てくることも。2026年10月の客は酒蒸し、かま焼き、Tai meshi、地酒、飲み放題付き6,000円のコースも褒める。店長の気配り、ウェルカムカード、帰りにハロウィンのクッキーという声が何人も。スタッフの雑談が気になった、ビールが冷えていなかったという客も。お通しの豆腐は有料。',
  });
}

// ================================================================ 哲剣 TEKKEN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27041989/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://onofoodlab.co.jp/';
  const W = day(['17:00', '23:30']); const F = day(['17:00', '24:00']); const S = day(['15:00', '23:30']);
  put({
    id: 'osaka_tekken_nambanaka', name: '料理屋 哲剣 (TEKKEN)', category: 'OMNI',
    lat: 34.661575, lng: 135.500565, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and grilled fish sit beside pizza, pasta, fritto, tempura and baguette dishes (Tabelog menu; reviews); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the menu is fish, meat and cheese (Tabelog menu).',
    hours_raw: 'Mon–Thu 17:00–23:30 (last food order 22:30); Fri, Sat and the day before a holiday 17:00–24:00; Sun and holidays 15:00–23:30 (Tabelog). Reservations taken; last-minute Tabelog bookings may not hold a table when busy. ¥330 table charge. Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay. 36 seats incl. 6 on the terrace (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-8-86, 国枝ビル 1F (Naniwa-ku), by Namba Parks — right by Namba Stn exit 5',
    cuisine: 'Japanese-Italian izakaya: sashimi of fish bought at the market each morning (bluefin tuna, Iwate katsuo tataki, Awaji hamachi, house saba sushi), pasta such as whole blue-crab pescatora, pizzas baked next door (large and thin-crusted), carpaccio, ajillo, white-wine-steamed seafood, fritto, burrata, steak (Tabelog menu, October 2026; reviews) · daily specials on the board · wine; all-you-can-drink courses such as ¥4,800',
    website: SITE, gmaps: gm('哲剣 TEKKEN 難波中'), menu_url: M,
    notes: "[Italian izakaya · Nambanaka, sashimi beside pizza and pasta] A casual Japanese-Italian izakaya by Namba Station exit 5, open since 2008, where morning-market fish comes as sashimi alongside pizza, pasta and garlicky ajillo. It is one of a cluster of shops from the same company on the street: the Japanese-leaning 裏剣 shares the menu board out front, and pizzas come from next door. Diners in 2026 like the long menu, the speed, the staff and the all-you-can-drink courses; one September diner found nothing memorable. Names are similar, so check the address.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; the first shop of 小野料理研究所 (onofoodlab.co.jp)'], origin: null, background: 'Per onofoodlab.co.jp, 小野料理研究所 runs 料理屋 哲剣, 大衆酒場 裏剣, 立ち飲み テッケン (opened 1 November 2022, "ten seconds\' walk from the main shop", at Nambanaka 2-8-92) and セルフで呑みほ 哲ちゃん. Tabelog gives TEKKEN\'s opening as 13 July 2008 and says fish is bought every morning.', philosophy: '"A casual Italian izakaya you can drop by anytime" (Tabelog).', specialty: 'Market-fresh sashimi with Italian dishes.',
      anecdotes: [
        { text: '"The menu is divided on a single board, with TEKKEN on the right and Ura-ken on the left." — October 2026.', source: R + 'B537060172/' },
        { text: '"While all the dishes were truly tasty, the ajillo was particularly exceptional." — July 2026.', source: R + 'B531526277/' },
        { text: '"There are several locations of the same chain nearby, and their names are quite similar, so I recommend confirming the address before you go." — September 2026.', source: R + 'B535950868/' },
        { text: '"Nothing stood out as especially delicious, and I don\'t remember much." — September 2026, all-you-can-drink course.', source: R + 'B535866606/' },
      ],
      japanese_sources_summary: '小野料理研究所 (onofoodlab.co.jp): 料理屋 哲剣、大衆酒場 裏剣、立ち飲み テッケン (2022年11月1日オープン、本店から歩いて10秒、難波中2-8-92)、セルフで呑みほ 哲ちゃん、裏剣で日本酒飲み放題1時間半1,500円。食べログ (英語版): TEKKEN、難波中2-8-86 国枝ビル 1F、なんば駅5番出口すぐ、2008年7月13日オープン、月〜木17:00〜23:30、金・土・祝前日17:00〜24:00、日・祝15:00〜23:30、チャージ330円、36席 (テラス6)、毎朝仕入れる魚の刺身、本格的なピザとパスタ、日替わり。メニュー (2026年10月): Hon maguro、Iwate の Katsuo tataki、Awaji の Hamachi、自家製 Saba sushi、渡り蟹まるごとのペスカトーレ、ブッラータ、ムール貝の白ワイン蒸し、ステーキ。口コミ (2025年12月〜2026年10月): 魚もピザもパスタもおいしい、メニューが多い、アヒージョ、ピザは隣から届き大きくて生地が薄い、飲み放題4,800円、店の前の看板は右が TEKKEN、左が裏剣、近くに似た名前の店があり住所の確認を、特に印象に残らなかったという声も。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B518964151/', R + 'B530335900/', R + 'B531526277/', R + 'B531532069/', R + 'B532144751/', R + 'B534039898/', R + 'B535866606/', R + 'B535950868/', R + 'B537060172/', R + 'B537874520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-8-86 国枝ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Company site and Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番86号 (go) 5m. Same building as OVER THE OVER (osaka_over_the_over_nambanaka, "…難波中2-8-86 国枝ビル2F"), whose pin is about 6 m away, so the two are not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; ¥330 table charge; daily items change. All-you-can-drink course ¥4,800 (August 2026). Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Bluefin tuna sashimi', '¥980', 'Today\'s fish', 'ask', 'no', 'Daily.', 'maguro_sashimi'),
      it('', '', 'Whole blue-crab pasta pescatora, tomato or tomato cream', '¥1,680', 'Today\'s specials', 'no', 'no', '', 'crab_pescatora'),
      it('', '', 'Burrata and marinated pear caprese', '¥1,380', 'Today\'s specials', 'ask', 'no', '', 'burrata_caprese'),
      it('', '', 'Mussels steamed in white wine', '¥780', 'Today\'s specials', 'ask', 'no', '', 'mussels'),
      it('', '', 'House saba sushi', '¥780', 'Today\'s fish', 'ask', 'no', '', 'saba_sushi'),
    ] }, {
    cuisine: '和とイタリアンの居酒屋: 毎朝市場で仕入れる魚の刺身 (Hon maguro、Iwate の Katsuo tataki、Awaji の Hamachi、自家製 Saba sushi)、渡り蟹まるごとのペスカトーレなどのパスタ、隣で焼く大きく薄い生地のピザ、カルパッチョ、アヒージョ、魚介の白ワイン蒸し、フリット、ブッラータ、ステーキ (食べログのメニュー、2026年10月、口コミ)・看板の日替わり・ワイン、4,800円などの飲み放題コース',
    neighborhood: '浪速区難波中2-8-86 国枝ビル 1F、なんばパークスのそば。なんば駅5番出口すぐ',
    gf_detail: '要確認。グルテンの情報なし。刺身や焼き魚のほか、ピザ、パスタ、フリット、Tempura、バゲットの皿もある (食べログのメニュー、口コミ)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、メニューは魚、肉、チーズ (食べログのメニュー)。',
    notes: '[イタリアン居酒屋・難波中、刺身とピザとパスタ] なんば駅5番出口のそば、2008年からの気軽な和とイタリアンの居酒屋で、毎朝市場で仕入れた魚の刺身と、ピザ、パスタ、にんにくの効いたアヒージョが並ぶ。同じ会社の店が通りに集まり、店の前の看板は和寄りの裏剣と共用、ピザは隣から届く。2026年の客はメニューの多さ、出てくる速さ、スタッフ、飲み放題コースを褒める。9月の客の1人は特に印象に残らなかったと書く。似た名前の店があるので住所の確認を。',
  });
}

// ================================================================ 煙 燻製バル トリベーネ 裏なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27007873/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://bene-p.jp/';
  const W = day(['17:00', '23:00']); const F = day(['17:00', '23:30']);
  put({
    id: 'osaka_toribene_ura_namba', name: '煙 燻製バル トリベーネ 裏なんば本店 (Kemuri Kunsei Bar Toribene Ura Namba honten)', category: 'OMNI',
    lat: 34.664345, lng: 135.502884, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free for allergy needs: the shop says that because of its facilities it cannot accommodate guests with allergies (Tabelog). The menu also has tempura, katsu, satsuma-age and gratin.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a smoked-food bar of meat, fish and cheese, with an oden starter whose dashi is not described (Tabelog menu; reviews).',
    hours_raw: 'Sun–Thu 17:00–23:00 (last order 22:30); Fri and Sat 17:00–23:30 (last order 23:00); closed 31 December and 1 January 2027, 12:00–23:00 on 2–3 January (Tabelog). Reservations taken; phone after 15:00 is best; five or more by phone; no minors, even with an adult; the shop cannot accommodate guests with allergies (Tabelog). Cards (VISA, Master), e-money, PayPay. 30 seats incl. 12 at the counter (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 13-17, Ura Namba — 5 min from Nankai Namba and Namba Stn',
    cuisine: 'Smoked-food izakaya with an open kitchen: assorted smoked delicacies (cheese, shishamo, iburigakko and more), sirloin yukhoe with Oita "dragon\'s egg" yolk, salt pork-belly kakuni cutlet, seasonal dishes (Omi duck, sanma tempura, porcini satsuma-age), kamameshi cooked in a pot to finish, miso soup (Tabelog menu, September 2026; reviews) · oden as the starter · smoked gin and tonic, smoked beer, smoky whiskies, sake; all-you-can-drink course ¥5,000',
    website: SITE, gmaps: gm('燻製バル トリベーネ 裏なんば本店'), menu_url: M,
    notes: "[Izakaya · Ura Namba, smoked food and kamameshi] A calm, grown-up smoked-food bar in an Ura Namba back alley — formerly bene pesce — where the smell of smoke and dashi greets you at the door. The ¥858 platter of smoked delicacies is the standard opener, then seasonal plates, and a kamameshi rice pot to finish (order it early; it takes time). Drinks lean smoky: smoked gin and tonic, smoked beer and peaty whiskies. The oden starter wins praise. Diners in 2026 call it great for a date or a second stop; one August diner noted that the smoked beer has got pricier. No minors are admitted, and the shop says it cannot cater for allergies.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a shop of 株式会社ベネ (bene-p.jp)'], origin: null, background: 'Per bene-p.jp, 株式会社ベネ (representative director 増田幸司) runs the 燻製酒場 and 鮭酒場 restaurants — トリベーネ in Abeno, Nippombashi (Ura Namba no. 2), Ura Namba (main shop) and Umeda, and two サーモンベーネ — plus the smoked-food brand 勘田亀吉 and a building-materials business. Tabelog lists the former shop name as bene pesce.', philosophy: '"Good time & space creation" (bene-p.jp).', specialty: 'Smoked-delicacy platters; kamameshi.',
      anecdotes: [
        { text: '"As soon as I approached the entrance, I was greeted by an amazing aroma, and once inside, the delightful scents of smoked dishes and dashi filled the air!" — September 2026.', source: R + 'B535082135/' },
        { text: '"The Kamameshi (rice cooked in a pot) was very tasty, but it takes some time to prepare, so it\'s best to order it as soon as possible." — August 2026.', source: R + 'B533364658/' },
        { text: '"It\'s a shame that the smoked beer has become more expensive over the years, so I couldn\'t order it" — August 2026.', source: R + 'B534180390/' },
        { text: '"The classic smoked cheese, in particular, was rich and absolutely fantastic." — October 2026, second visit.', source: R + 'B482253136/' },
      ],
      japanese_sources_summary: '株式会社ベネ (bene-p.jp): 代表取締役 増田幸司、飲食事業 (燻製酒場・鮭酒場): 煙 燻製バル トリベーネ 阿倍野店、日本橋店 (裏なんば2号店)、裏なんば本店、トリベーネ 梅田店、サーモンベーネ 梅田茶屋町、サーモンベーネ 鮭寮。燻製料理のEC「勘田亀吉」、建築資材事業。食べログ (英語版): 煙 燻製バル トリベーネ 裏なんば本店 (旧店名 bene pesce)、難波千日前13-17、日〜木17:00〜23:00、金・土17:00〜23:30、30席 (カウンター12)、未成年は入店不可、設備の都合でアレルギーの方には対応できない、電話は15時以降が望ましい、燻製料理・季節の食材・肉料理・Kamameshi、オープンキッチン、ウイスキーと日本酒。メニュー (2026年9月): 香りの珍味盛り合わせ858円、Ryuu no Tamago のサーロインの Yukhoe、塩豚 Kakuni のカツレツ、Omi の鴨、Sanma の Tempura、ポルチーニの Satsuma-age、サーモンの腹身と Maitake の Kamameshi。口コミ (2026年4月〜10月): 燻製の盛り合わせ、Kamameshi、燻製ジントニック、Iburigakko、お通しの Oden、デート向き、燻製ビールが値上がりしたという声、梅田にも姉妹店。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B482253136/', R + 'B521954130/', R + 'B525959972/', R + 'B533364658/', R + 'B534180390/', R + 'B535082135/', R + 'B536460243/', R + 'B536616629/', R + 'B537769299/', R + 'B537851354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the dishes on arrival (October 2026). No minors admitted. No English menu or English-speaking staff found in the sources.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop says that, because of its facilities, it cannot accommodate guests with allergies (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前13-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Company site listing the shop and Tabelog listing with a September 2026 menu and year-end 2026 hours; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前13番17号 (go) 6m. Nearest record (osaka_sushi_yamazakura_ura_namba, "…難波千日前13-5", a different building) is about 23 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated September 2026, tax included. All-you-can-drink course ¥5,000 (September 2026). Diners report ¥2,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted platter of smoked delicacies', '¥858', 'Specialties', 'no', 'no', 'Not for allergies (shop).', 'smoked_platter'),
      it('', '', 'Sirloin yukhoe with Oita "dragon\'s egg" yolk', '¥1,540', 'Specialties', 'no', 'no', 'Not for allergies (shop).', 'sirloin_yukhoe'),
      it('', '', 'Salt pork-belly kakuni cutlet with pecorino', '¥1,298', 'Specialties', 'no', 'no', '', 'kakuni_katsu'),
      it('', '', 'Salmon belly and maitake kamameshi with ume-shiso', '¥1,540', 'Seasonal', 'no', 'no', 'Takes time; order early.', 'kamameshi'),
    ] }, {
    cuisine: 'オープンキッチンの燻製の居酒屋: 香りの珍味盛り合わせ (チーズ、Shishamo、Iburigakko など)、Ryuu no Tamago の卵黄をのせたサーロインの Yukhoe、塩豚 Kakuni のカツレツ、季節の皿 (Omi の鴨、Sanma の Tempura、ポルチーニの Satsuma-age)、締めの Kamameshi、Miso soup (食べログのメニュー、2026年9月、口コミ)・お通しは Oden・燻製ジントニック、燻製ビール、スモーキーなウイスキー、日本酒、飲み放題コース5,000円',
    neighborhood: '難波千日前13-17、裏なんば。南海なんば駅、なんば駅から徒歩5分',
    gf_detail: 'アレルギーの方には向きません。店は設備の都合でアレルギーの方には対応できないとしている (食べログ)。メニューには Tempura、カツレツ、Satsuma-age、グラタンもある。',
    vegan_detail: 'ヴィーガンではありません。肉、魚、チーズの燻製バルで、お通しの Oden の出汁の説明はない (食べログのメニュー、口コミ)。',
    notes: '[居酒屋・裏なんば、燻製と Kamameshi] 裏なんばの路地にある、落ち着いた大人の燻製バル (旧店名 bene pesce)。入口から燻製と出汁の香りが迎える。858円の燻製の珍味盛り合わせから始め、季節の皿、締めは Kamameshi (時間がかかるので早めの注文を)。飲み物もスモーキーで、燻製ジントニック、燻製ビール、ピートの効いたウイスキー。お通しの Oden も好評。2026年の客はデートや2軒目に向くと言い、8月の客の1人は燻製ビールが値上がりしたと書く。未成年は入店不可、店はアレルギーに対応できないとしている。',
  });
}

save();
