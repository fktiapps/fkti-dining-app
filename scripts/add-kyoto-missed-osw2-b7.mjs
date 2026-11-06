// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 7.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + 京都餃子enen 祇園本店 Kyoto Gyoza enen (small gyoza and Sichuan dishes by Gion-Shijo; since 2025)
//   + SUGiTORA (gelato and plated parfaits by chef Shinichi Sugita, Coupe du Monde 2015 silver; since 2017)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + シェモア Chez Moi (a couple's French restaurant down an alley off Gokomachi-Oike; Noto fish bouillabaisse)
//   + はふう 本店 Hafuu Honten (butcher-run yoshoku: beef cutlet, steak, katsu sando; since 1999)
//   None is in data/kyoto.json: grep by id, name (enen, SUGITORA/スギトラ, シェモア/Chez Moi, はふう/Hafuu) and address
//   (大和町13, 中筋町488, 御幸町通り御池上ル, 笹屋町471) found none ("enen" hits only a URL in another record).
//   Group checks: enen — 株式会社ｅｎｅｎ also runs 京都焼肉 enen 先斗町本店 (Tabelog crawl), a different format, none in
//   data: drafted. SUGiTORA — three shops on its site (SUGiTORA, Patisserie labo, 京都タワーサンド店), none in data: a
//   small group, drafted. Hafuu — two shops (本店, 聖護院店; official site), none in data: drafted. No shop asks not to be posted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; Chez Moi's address has no lot number, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京都餃子enen 祇園本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042853/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=1120901030677';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gyoza_enen_gion', name: '京都餃子enen 祇園本店 (Kyoto Gyoza enen Gion)', category: 'OMNI',
    lat: 35.003151, lng: 135.773130, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wheat-wrapped gyoza are the core of the menu, with noodles, fried rice and Chinese sauces; no gluten information is published (Tabelog menu, December 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat gyoza, mapo tofu, chicken and fish dishes; only pickled cucumber, kimchi and a coriander tofu salad are meat-free on the menu (Tabelog menu, December 2025).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00) and dinner 17:00–22:00 (last order 21:30), every day; closing days may vary (Tabelog). The mala soup set is lunch only (February 2026). Bookings taken, online or by phone; held 10 minutes (Tabelog). Waits of 10–30 minutes at dinner without a booking (October 2025; February 2026). Order by QR code (October 2025). 18 seats, no counter (Tabelog; February 2026); non-smoking; free Wi-Fi; cards (Tabelog). Dress smart casual (Tabelog). 6 min walk from Gion-Shijo Stn, 5 min from Kyoto Kawaramachi Stn (Tabelog). Opened 25 April 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamato-oji just south of Shijo — 6 min from Gion-Shijo Stn',
    cuisine: 'Small bite-size gyoza with a Sichuan-style sauce already on, plus Chinese and Japanese-Chinese dishes (2025–26 reviews) · gyoza, 6 pieces: garlic ¥600, ginger ¥600, la-zu ¥800, ume-shiso ¥800; dipping vinegar-pepper, soy or miso · Sichuan mapo tofu ¥1,200, saliva chicken ¥900, shrimp mayo with house orange sauce ¥1,200, chashu egg ¥1,200 · yodare katsuo ¥1,200, Chinese-style fish namero ¥750 · fresh spring roll ¥800, coriander tofu salad ¥450, whole pickled cucumber ¥500, kimchi ¥500 · Sichuan mapo noodles ¥1,300, salted fried rice ¥1,100, rice ¥400 · Tanba chestnut ice cream ¥400 (Tabelog menu, December 2025) · lunch sets: spicy mala soup with gyoza (noodles or glass noodles, spice to taste), mapo noodle set, gyoza set with fish carpaccio (2025–26 reviews) · yuzu and ponkan beers, highball ¥600 (2026 reviews)',
    website: null, gmaps: gm('京都餃子enen 祇園'), menu_url: MENU,
    notes: "[Gyoza · Gion-Shijo, small gyoza with a Sichuan kick] An 18-seat gyoza bar on Yamato-oji opened in April 2025, now full most evenings with travellers who found it on social media. The gyoza are small and come six to a plate — garlic, ginger, la-zu or ume-shiso — already dressed in a numbing Chinese-style sauce; add mapo tofu, saliva chicken or yodare katsuo, and finish with the Sichuan mapo noodles. Lunch brings mala soup and gyoza sets. Gyoza from ¥600. Book or expect a short wait; order by QR code. Daily.",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社ｅｎｅｎ (invoice T1120901030677), which also runs 京都焼肉 enen 先斗町本店; no person is named'], origin: null,
      background: 'Opened 25 April 2025 (Tabelog). The invoice number belongs to 株式会社ｅｎｅｎ (NTA corporate-number site). Reviewers from October 2025 to September 2026 describe a room filled mostly with overseas visitors; an April 2026 diner was told by the manager that the visitors come via social media.',
      philosophy: null, specialty: 'Garlic and ume-shiso gyoza; Sichuan mapo noodles; mala soup set (lunch).',
      anecdotes: [
        { text: 'An October 2025 couple waited about 30 minutes on a Tuesday night, ordered by QR code and found it good value; the carpaccio was sold out.', source: R + 'B515935843/' },
        { text: 'A February 2026 diner came for the mala soup seen on Instagram and learned it is served only at lunch.', source: R + 'B522394321/' },
        { text: 'A September 2026 diner advised ordering gyoza in bulk, as service can take a while.', source: R + 'B535241182/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・餃子・中華料理、東山区大和大路通四条下ル大和町13 芝本ビル1F、祇園四条駅から徒歩6分、毎日 11:30〜14:30 (L.O. 14:00)・17:00〜22:00 (L.O. 21:30)、不定休、予約可 (10分経過で次の客を優先)、18席、禁煙、Wi-Fi、カード可、スマートカジュアル、2025年4月25日オープン、インボイス T1120901030677 (株式会社ｅｎｅｎ)、メニュー (英語版、2025年12月更新): 餃子6個 (にんにく600円、生姜600円、Rāzū 800円、梅しそ800円)、四川麻婆豆腐1,200円、よだれ鶏900円、海老マヨ1,200円、よだれ鰹1,200円、四川麻婆麺1,300円、塩炒飯1,100円、丹波栗のアイス400円。口コミ (2025年10月〜2026年11月、英語): 海外の客が多い、QR コードで注文、ランチのマーラータン、麻婆麺のセット、ゆずとぽんかんのビール。',
      confidence: 'medium', sources: [TB, MENU, CORP, R + 'B515935843/', R + 'B520423619/', R + 'B520578726/', R + 'B522394321/', R + 'B522517151/', R + 'B522718880/', R + 'B526285382/', R + 'B532317309/', R + 'B535241182/', R + 'B535574236/', R + 'B536700316/', R + 'B538669198/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; book for dinner or expect a short wait.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル大和町13 芝本ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu December 2025); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003151, 135.773130); cross-checked: GSI 京都府京都市東山区大和町13番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Tabelog menu, last updated 1 December 2025 (prices including tax).', last_checked: TODAY, items: [
      it('', '', 'Gyoza, garlic (6 pieces)', '¥600', 'Gyoza', 'no', 'no', '', 'gyoza_garlic'),
      it('', '', 'Gyoza, ume-shiso (6 pieces)', '¥800', 'Gyoza', 'no', 'no', '', 'gyoza_umeshiso'),
      it('', '', 'Sichuan mapo tofu', '¥1,200', 'Chinese', 'ask', 'no', '', 'mapo_tofu'),
      it('', '', 'Sichuan mapo noodles', '¥1,300', 'Rice & noodles', 'no', 'no', '', 'mapo_noodles'),
      it('', '', 'Whole pickled cucumber', '¥500', 'Snacks', 'ask', 'ask', '', 'pickled_cucumber'),
    ] }, {
    cuisine: '四川風のたれをかけて出す小ぶりの餃子と、中華や和風中華の料理 (2025〜2026年の口コミ)・餃子6個: にんにく600円、生姜600円、Rāzū 800円、梅しそ800円。酢こしょう、醤油、味噌で・四川麻婆豆腐1,200円、よだれ鶏900円、自家製オレンジソースの海老マヨ1,200円、チャーシューと卵1,200円・よだれ鰹1,200円、中華風の鮮魚のなめろう750円・生春巻き800円、パクチーと豆腐のサラダ450円、きゅうりの一本漬け500円、キムチ500円・四川麻婆麺1,300円、塩炒飯1,100円、ご飯400円・丹波栗のアイス400円 (食べログのメニュー、2025年12月)・ランチのセット: 辛さを選べるマーラータンと餃子 (麺か春雨)、麻婆麺のセット、カルパッチョ付きの餃子セット (2025〜2026年の口コミ)・ゆずとぽんかんのビール、ハイボール600円 (2026年の口コミ)',
    neighborhood: '四条のすぐ南の大和大路。祇園四条駅から徒歩6分',
    gf_detail: '実際にはグルテンフリーではない。小麦の皮の餃子が中心で、麺、炒飯、中華のたれもある。グルテンの情報は公開されていない (食べログのメニュー、2025年12月)。',
    vegan_detail: 'ヴィーガン不可。肉の餃子、麻婆豆腐、鶏や魚の料理。肉を使わないのはきゅうりの一本漬け、キムチ、パクチーと豆腐のサラダくらい (食べログのメニュー、2025年12月)。',
    notes: '[餃子・祇園四条、四川の香りの小ぶりの餃子] 2025年4月に開いた大和大路の18席の餃子の店。SNS で知った旅行者で夜はほぼ満席。餃子は6個で、にんにく、生姜、Rāzū、梅しそ。痺れる中華風のたれがかかって出てくる。麻婆豆腐、よだれ鶏、よだれ鰹を合わせ、締めは四川麻婆麺。昼はマーラータンや餃子のセット。餃子は600円から。予約するか少し待つ覚悟を。注文は QR コード。毎日営業。',
  });
}

// ================================================================ SUGiTORA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26028747/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sugitora.com/'; const ABOUT = SITE + 'about'; const CAFE = SITE + 'dessert'; const TO = SITE + 'takeout';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_sugitora', name: 'SUGiTORA (スギトラ)', category: 'MOM_AND_POP',
    lat: 35.006778, lng: 135.767031, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gelato is served in cups or cones with a cookie on top; parfaits layer meringue, savarin, tart or cake; apple pie and baked goods; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most gelato is milk-based (the "milk" uses high-fat Nemuro milk), and parfaits use cream and meringue; a soy-milk tofu-pudding dessert (douhua) is on the café menu, but no item is marked vegan (official site).',
    hours_raw: '10:00–12:00 baked goods to take away only; café from 13:00; mini parfaits and gelato to take away from 13:30; last order 18:00; closes when the gelato sells out (official site). Closed Tuesday and Wednesday (official site top) or Tuesday and every other Wednesday (official site shop panel; Tabelog). Café seats by booking on TableCheck, with the order chosen and paid by card in advance (August–September 2026). 8 seats on the 2nd floor up a spiral stair; benches outside for gelato; non-smoking; cards (Tabelog; 2026 reviews). In an alley between the Teramachi and Shinkyogoku arcades; 6 min walk from Kyoto Kawaramachi Stn (official site; Tabelog). Opened 13 March 2017 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley between the Teramachi and Shinkyogoku arcades — 6 min from Kyoto Kawaramachi Stn',
    cuisine: 'Gelato and plated parfaits by a patissier who won silver for Japan at the Coupe du Monde de la Pâtisserie 2015 (official site) · gelato in cup or cone, one to three flavours: milk (Nemuro high-fat milk), 60-days chocolate, red fruits and tea, rich pistachio (+¥50), Uji matcha, plus seasonal flavours; single ¥864 (August 2026) · "Tora-chan’s paw": a paw-shaped ice cream (milk, hojicha, peach or seasonal) over a gelato, with a tiger cookie, ¥1,350 (July–September 2026) · seasonal parfaits in the 2nd-floor café, e.g. peach and savarin soaked in red wine, summer citrus, lemon tart, caramel apple with fromage, Mont Blanc on a meringue bowl (official site; August–September 2026) · morning plate (brioche or croissant), douhua, matcha kakigori, apple pie with coffee ¥1,700 (official site; August–October 2026) · original cookie tins: vanilla, chocolate, matcha, speculoos (official site)',
    website: SITE, gmaps: gm('SUGiTORA 京都 寺町'), menu_url: CAFE,
    notes: "[Gelato & parfaits · Teramachi, a fruit shop reborn as a gelateria] Hidden in an alley between the Teramachi and Shinkyogoku arcades, SUGiTORA revives the name of スギトラ果実店, a fruit shop that stood near Kawaramachi-Sanjo for over a century until 2008. Owner-chef Shinichi Sugita, a Kyoto native who won silver for Japan at the 2015 Coupe du Monde de la Pâtisserie, makes gelato built to melt slowly for walking — try the 'Tora-chan's paw' (¥1,350) — and, upstairs in an eight-seat café, plated seasonal parfaits worth booking on TableCheck. 10:00–19:00; closed Tuesday and Wednesdays.",
    chef_bio: { chef_name: 'Shinichi Sugita (杉田 晋一)', roles: ['Owner-chef (official site: "オーナーシェフ 杉田 晋一（スギタ シンイチ）")'], origin: 'Born and raised in Kyoto (official site).',
      background: 'Per the official site: represented Japan at the Coupe du Monde de la Pâtisserie 2015 and won silver; worked at a well-known Tokyo hotel before opening in Kyoto, the chef’s home town. The shop takes its name from スギトラ果実店, a small fruit shop at Kawaramachi-Sanjo for over 100 years, which closed in 2008; it returned in 2017 as the gelato shop SUGiTORA. The site lists two more shops, Patisserie labo and 京都タワーサンド店. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: 'Per the official site: gelato with seasonal flavours to make Kyoto’s seasons felt, made with gratitude in every piece, "to make as many people smile as possible".',
      specialty: 'Seasonal gelato; Tora-chan’s paw; plated parfaits.',
      anecdotes: [
        { text: 'An August 2026 visitor found the TableCheck system of choosing and paying in advance a little formal, but understood from the shop’s Instagram that it followed past no-shows.', source: R + 'B532926109/' },
        { text: 'A July 2026 visitor found the gelato lighter than expected, not lingeringly sweet or milky.', source: R + 'B533052841/' },
        { text: 'An October 2026 weekday visitor was the only guest in the upstairs café, reached by a spiral staircase.', source: R + 'B537438506/' },
      ],
      japanese_sources_summary: '公式サイト (sugitora.com): 寺町商店街と新京極商店街の間の路地の隠れ家、2階のカフェでオリジナルのパフェ、ジェラートは食べ歩きに、河原町三条に100年以上あった果物屋スギトラ果実店が2008年に閉店し、2017年にジェラート屋 SUGiTORA として戻った、オーナーシェフ 杉田 晋一 (スギタ シンイチ)、Coupe du Monde de la Patisserie 2015 に日本代表で出場し銀メダル、東京の有名ホテルを経て生まれ育った京都で開店、10:00〜12:00 焼き菓子テイクアウトのみ、13:00〜カフェ、13:30〜ミニパフェ・ジェラートテイクアウト、18:00 ラストオーダー、ジェラートが売り切れ次第終了、定休日は毎週火曜日・水曜日 (別の欄には毎週火曜日・隔週水曜日)、店舗: SUGiTORA、Patisserie labo、京都タワーサンド店、テイクアウト: とらちゃんのおてて、ミルク (根室地区の高乳脂肪の牛乳)、60デイズショコラ、赤い果実と紅茶、リッチピスタチオ (+50円)、特選宇治抹茶、カフェ: SUGiTORA の豆花、モーニングプレート、桃とサバランのパフェ、サマーシトラスパフェ、檸檬タルトと夏のパフェ、キャラメル林檎と軽いフロマージュのパフェ。食べログ: カフェ・スイーツ、中京区中筋町488-15、河原町駅から徒歩6分、8席、禁煙、カード可、2017年3月13日オープン、カフェ WEST 百名店 2025。口コミ (2026年7〜10月、英語): とらちゃんのおてて1,350円、シングル864円、TableCheck での事前決済、モンブランのパフェ、アップルパイとコーヒー1,700円。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, CAFE, TO, R + 'B532090857/', R + 'B532341098/', R + 'B532740512/', R + 'B532926109/', R + 'B533000941/', R + 'B533052841/', R + 'B533474574/', R + 'B535443587/', R + 'B535961248/', R + 'B536004412/', R + 'B537438506/', R + 'B538107269/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book café seats on TableCheck (order and pay ahead); gelato to take away from 13:30.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中筋町488-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notice September 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006778, 135.767031); cross-checked: GSI 京都府京都市中京区中筋町488番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TO, R + 'B532740512/', R + 'B533000941/', R + 'B537438506/'],
    price_note: 'The official menu pages give no prices; prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('とらちゃんのおてて', '', 'Tora-chan’s paw (paw-shaped ice cream over gelato, with cookie)', '¥1,350', 'Gelato', 'ask', 'no', 'July–September 2026.', 'tora_paw'),
      it('', '', 'Gelato, single', '¥864', 'Gelato', 'ask', 'ask', 'August 2026.', 'gelato_single'),
      it('', '', 'Apple pie and coffee set', '¥1,700', 'Café', 'no', 'no', 'October 2026.', 'apple_pie_set'),
    ] }, {
    cuisine: 'Coupe du Monde de la Pâtisserie 2015 で日本代表として銀メダルのパティシエのジェラートと皿盛りのパフェ (公式サイト)・ジェラートはカップかコーンで1〜3種: ミルク (根室の高乳脂肪の牛乳)、60デイズショコラ、赤い果実と紅茶、リッチピスタチオ (+50円)、特選宇治抹茶、季節のフレーバー。シングル864円 (2026年8月)・とらちゃんのおてて: 肉球形のアイス (ミルク、ほうじ茶、桃、季節) にジェラートととらちゃんクッキー、1,350円 (2026年7〜9月)・2階のカフェで季節のパフェ、例えば桃とサバラン、サマーシトラス、檸檬タルト、キャラメル林檎と軽いフロマージュ、メレンゲの器のモンブラン (公式サイト、2026年8〜9月)・モーニングプレート (ブリオッシュかクロワッサン)、豆花、抹茶のかき氷、アップルパイとコーヒー1,700円 (公式サイト、2026年8〜10月)・オリジナルクッキー缶: バニラ、ショコラ、抹茶、スペキュロス (公式サイト)',
    neighborhood: '寺町と新京極の商店街の間の路地。京都河原町駅から徒歩6分',
    gf_detail: '要確認。ジェラートはカップかコーンでクッキーがのる。パフェはメレンゲ、サバラン、タルト、ケーキを重ね、アップルパイや焼き菓子もある。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。ジェラートの多くは乳ベース (ミルクは根室の高乳脂肪の牛乳)、パフェはクリームとメレンゲを使う。カフェには豆乳の豆花もあるが、ヴィーガンと書かれた品はない (公式サイト)。',
    notes: '[ジェラートとパフェ・寺町、果物屋がジェラート屋に] 寺町と新京極の商店街の間の路地に隠れた SUGiTORA。河原町三条に100年以上あり2008年に閉店したスギトラ果実店の名を継ぐ。京都生まれで、2015年のクープ・デュ・モンド・ドゥ・ラ・パティスリーで日本代表として銀メダルのオーナーシェフ 杉田 晋一さんが、溶けにくく食べ歩きに向くジェラートを作る。とらちゃんのおてて (1,350円) を。2階の8席のカフェでは季節の皿盛りのパフェ、TableCheck で予約を。10時〜19時、火曜と水曜休み。',
  });
}

// ================================================================ シェモア
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000799/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.chez-moi.co.jp/'; const MENU = SITE + 'menu/'; const PROF = SITE + 'profile/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_chez_moi', name: 'シェモア (Chez Moi)', category: 'OMNI',
    lat: 35.011268, lng: 135.766167, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the shop cannot accommodate allergies or food dislikes (Tabelog), and courses include bread, pastry and sauces (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fixed French courses of seafood, foie gras and meat, with no changes for dietary needs (Tabelog; official menu).',
    hours_raw: '18:00–22:00 (last order 19:30); closed irregularly (official site). Tabelog lists Tuesday to Sunday and holidays, closed Monday. Reservation only, by phone or the web; no allergies or dislikes catered for (Tabelog). Takeaway set ¥10,800, by the day before, collected 16:00–17:30 (official site, September 2026). Closed 29 October–1 November 2026 (official site). 12 seats and a terrace; private hire up to 20; non-smoking; cards; no shorts, T-shirts, sandals or sweatpants (Tabelog). At the end of a narrow alley, the third building north of Oike on the west side of Gokomachi-dori; 2 min from exit 10 of Kyoto Shiyakusho-mae Stn (official site; Tabelog). Moved here from Karasuma-Nishiki in July 2005 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi-dori north of Oike, down an alley — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Classic French courses from a husband-and-wife restaurant: the chef cooks, the madame, a sommelier, serves (official site) · Chef course ¥9,900 (amuse, cold and hot starters, soup, fish of the day, a meat dish, bread, dessert, coffee); lobster course ¥13,000; abalone course ¥13,200; foie gras course ¥15,000; mains to choose: truffled beef hamburg, domestic beef fillet, French duck, lamb, beef braised in red wine (official site) · signature seafood terrine in jelly, sea-urchin flan, escargots in cream, bouillabaisse of fish sent from Wajima on Noto, sea bream with Café de Paris sauce, foie gras with truffle Madeira sauce; seasonal soups such as peach in summer and matsutake under pastry in autumn (official site; 2025–26 reviews) · French wines from about ¥3,000 a bottle and about 30 Madeiras (official site; January 2026)',
    website: SITE, gmaps: gm('シェモア 京都 御幸町 御池'), menu_url: MENU,
    notes: "[French · Oike, a couple's hideaway with piano and magic] A classic French restaurant at the end of a narrow alley off Gokomachi-Oike, run by a husband-and-wife team: the chef, from Wajima on Noto, cooks alone, and the madame, a sommelier, runs the room. Courses start at ¥9,900 — the jellied seafood terrine, sea-urchin flan, escargots and a bouillabaisse of fish sent from Wajima — and for birthdays the chef plays the piano and shows card tricks. A reviewer notes that a stone lantern in the garden is one of eight built under Hideyoshi. No allergies or dislikes catered for. Booking only; 18:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Chef (born in Wajima, Ishikawa) and madame (born in Kyoto, a sommelier), a married couple who run the restaurant together (official site); not named on the site'], origin: 'Chef: Wajima, Ishikawa (official site).',
      background: 'Per the official site: the chef trained at Kyoto’s cookery school, worked at Ginza’s 三笠会館, then trained in French cooking under chef 大渕康文 at アタント in Roppongi and was shaped by chef 小澤貴彦 of OZAWA; the couple ran Chez Moi at Karasuma-Nishiki for nearly 20 years before moving to the present alley in July 2005; the madame has worked in restaurants for 30 years and passed the sommelier exam while helping a daughter study for high-school entrance exams; both practise the tea ceremony. Since the 2024 Noto earthquake the chef, a Noto native, ran soup kitchens for about a year and a half and now supports Noto by buying its fish; the couple also did volunteer soup-kitchen work in Yatsushiro, Kumamoto, in October 2026. Tabelog French WEST "Tabelog 100" 2023 and 2025.',
      philosophy: 'Per the official site: the couple’s own restaurant, with a beautiful, comfortable space and an unhurried flow of time — learned from chef 小澤貴彦.',
      specialty: 'Seafood terrine in jelly; sea-urchin flan; Noto fish bouillabaisse.',
      anecdotes: [
        { text: 'A September 2025 couple celebrating an anniversary were treated to the chef’s piano performance and card tricks.', source: R + 'B514129747/' },
        { text: 'A January 2026 visitor notes that one of the eight lanterns built when Toyotomi Hideyoshi unified Japan stands in the garden.', source: R + 'B516660350/' },
        { text: 'An August 2026 visitor found the summer peach soup saltier than hoped and the ¥880 fillet supplement small.', source: R + 'B533636020/' },
      ],
      japanese_sources_summary: '公式サイト (chez-moi.co.jp): 京都市役所の近く、御幸町御池を北へ、細い路地の奥の隠れ家、シェフとマダム二人でおもてなしのフレンチ、能登半島地震から約1年半続けた炊き出し、シェフの故郷能登を応援、輪島のお魚屋さんの魚でブイヤベース、2005年7月に烏丸錦から移転、シェフ: 石川県輪島市生まれ、京都調理師学校卒業、銀座の三笠会館、六本木「アタント」大渕康文シェフ、白金台「OZAWA」小澤貴彦シェフ、趣味は茶道と三味線、マダム: 京都生まれ京都育ち、この仕事に30年、ソムリエ、営業時間 18:00〜22:00 (L.O 19:30)、不定休、シェフコース9,900円 (税込)、オマール海老のコース13,000円、フォアグラのコース15,000円、アワビのコース13,200円、お持ち帰りセット10,800円 (前日までに予約、受け取り16時〜17時半)、2026年10月29日〜11月1日休み、2026年10月に熊本県八代で炊き出しボランティア、マディラワイン30種類。食べログ: フレンチ、完全予約制、アレルギー・苦手な食材には対応できない、12席、テラス、貸切20名まで、禁煙、カード可、短パン・T シャツ・サンダル・スウェット不可、フレンチ WEST 百名店 2023・2025。口コミ (2025年9月〜2026年8月、英語): 夫婦で営む、海の幸のテリーヌ、ウニのフラン、シェフのピアノと手品、庭の灯籠。',
      confidence: 'medium', sources: [TB, SITE, MENU, PROF, R + 'B393797763/', R + 'B514129747/', R + 'B516660350/', R + 'B520009842/', R + 'B520649368/', R + 'B520918491/', R + 'B529241369/', R + 'B530904307/', R + 'B531194104/', R + 'B533054946/', R + 'B533636020/', R + 'B534915212/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; smart dress (no shorts, T-shirts or sandals); no dietary changes.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区御幸町通り御池上ル西側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated October 2026) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.011268, 135.766167); the address has no lot number (御幸町通り御池上ル西側), so GSI cannot match it — single-point approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, SITE],
    price_note: 'Official site menu (prices including tax; undated); takeaway set from a September 2026 notice.', last_checked: TODAY, items: [
      it('シェフコース', '', 'Chef course (fish and meat)', '¥9,900', 'Course', 'no', 'no', '', 'chef_course'),
      it('オマール海老のコース', '', 'Lobster course', '¥13,000', 'Course', 'no', 'no', '', 'lobster_course'),
      it('アワビのコース', '', 'Abalone course', '¥13,200', 'Course', 'no', 'no', '', 'abalone_course'),
      it('フォアグラのコース', '', 'Foie gras course', '¥15,000', 'Course', 'no', 'no', '', 'foie_gras_course'),
      it('シェモアのお持ち帰りセット', '', 'Takeaway set (terrine, flan, bouillabaisse, hamburg and more)', '¥10,800', 'Takeaway', 'no', 'no', 'Book by the day before.', 'takeaway_set'),
    ] }, {
    cuisine: '夫婦で営むクラシックなフレンチのコース。シェフが料理し、ソムリエのマダムがサービス (公式サイト)・シェフコース9,900円 (アミューズ、冷たいオードブル、温かいオードブル、スープ、本日のお魚料理、お肉料理、パン、デザート、コーヒー)、オマール海老のコース13,000円、アワビのコース13,200円、フォアグラのコース15,000円。お肉料理はトリュフ風味の牛肉のハンバーグ、国産牛のフィレ肉ステーキ、フランス産鴨のロースト、仔羊のロースト、牛肉の赤ワイン煮から (公式サイト)・名物の海の幸のゼリー寄せテリーヌ、ウニのフラン、エスカルゴのクリーム煮、輪島から届く魚のブイヤベース、鯛のカフェドパリソース、フォアグラのトリュフ風味のマディラソース、夏の桃のスープや秋の松茸のパイ包みスープなど季節のスープ (公式サイト、2025〜2026年の口コミ)・フランスワインはボトル3,000円ほどから、マディラワイン約30種 (公式サイト、2026年1月)',
    neighborhood: '御池の北の御幸町通、細い路地の奥。京都市役所前駅から徒歩2分',
    gf_detail: '実際にはグルテンフリーではない。アレルギーや苦手な食材には対応できず (食べログ)、コースにはパン、パイ、ソースが入る (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。魚介、フォアグラ、肉の決まったフレンチのコースで、食事制限による変更はできない (食べログ、公式メニュー)。',
    notes: '[フレンチ・御池、ピアノと手品の夫婦の隠れ家] 御幸町御池の細い路地の奥、夫婦で営むクラシックなフレンチ。能登の輪島出身のシェフが一人で料理し、ソムリエのマダムがサービス。コースは9,900円から、名物の海の幸のゼリー寄せテリーヌ、ウニのフラン、エスカルゴ、輪島から届く魚のブイヤベース。誕生日にはシェフがピアノを弾き、トランプの手品も。庭のテラスには口コミによれば秀吉ゆかりの灯籠。アレルギーや苦手な食材には対応しない。完全予約制、18時〜22時。',
  });
}

// ================================================================ はふう 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000943/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hafuu.com/'; const MENU = SITE + 'menu/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=5130002017157';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_hafuu_honten', name: 'はふう 本店 (Hafuu Honten)', category: 'OMNI',
    lat: 35.015421, lng: 135.765618, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the signatures are breaded beef cutlet and katsu sandwiches, with croquettes, curry, hayashi rice and demi-glace stews; plain steak is the only simple option and its sauces are not described (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a butcher-run meat house — steak, beef cutlet, hamburg, stew (official menu).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30) and dinner 17:30–22:00 (last order 21:30; last entry 21:00); closed Wednesday and irregularly (official site; Tabelog). Dinner seat charge ¥500 a head (official site; Tabelog). Bookings by phone or TableCheck; cancelled after 20 minutes late (Tabelog). A queue of about 10 can form before lunch on holidays (August 2026). 36 seats: 16 at the counter, 20 at tables including large shared round tables (Tabelog; August 2026); non-smoking; cards (Tabelog). In a quiet street south of the Imperial Palace; 10 min walk from Kyoto Shiyakusho-mae or Marutamachi Stn (Tabelog). Opened 18 April 1999 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho-dori south of the Imperial Palace — 10 min from Marutamachi Stn',
    cuisine: 'Yoshoku and steak from a family long in Kyoto’s butcher trade (official site) · lunch (tax included): premium sirloin steak ¥5,200, fillet ¥5,400, Hafuu special beef cutlet ¥3,100, beef stew ¥3,000, Hafuu steak don ¥3,350, fried prawns ¥2,200, hamburg steak ¥1,800, weekday daily lunch ¥1,100 (with small dish, salad, rice, miso soup, pickles, coffee), curry or hayashi rice ¥1,400, katsu sando ¥2,500, premium katsu sando ¥5,800 · dinner courses: Original ¥11,300 (sirloin 190 g or fillet 170 g), Niku-senka and Hafuu courses ¥9,200; dinner sets with starter, soup, salad, bread or rice, dessert and coffee: fillet ¥8,800, sirloin ¥8,300, fillet teriyaki ¥8,800, beef stew ¥5,700, fillet beef cutlet ¥6,200, hamburg ¥4,500; à la carte fillet 120 g ¥5,400, sirloin 140 g ¥5,200 (official menu) · beef sukiyaki don, Japanese-style beef cutlet, beef cream croquettes (2026 reviews)',
    website: SITE, gmaps: gm('はふう 本店 京都'), menu_url: MENU,
    notes: "[Yoshoku · south of the Imperial Palace, a butcher's beef cutlet] A long-running yoshoku and steak house in a quiet street south of the Imperial Palace, run by a family with a long history as Kyoto butchers — the site credits that for good beef at a fair price. The beef cutlet — fillet, rare inside — and the katsu sando are the names to know; the hamburg steak and the weekday daily lunch (¥1,100) are the bargains, and the steak don comes with green-onion salt and horseradish. Dinner courses from ¥9,200, plus a ¥500 seat charge. Expect a short queue at lunch on holidays. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Operated by a family butcher business (official site: 「はふう」の母体は京の町にて古くからお肉屋); no person is named'], origin: null,
      background: 'Per the official site: Hafuu’s parent business has long run a butcher’s shop in Kyoto, and its experience shows in the beef; the name joins は (wave) and ふう (wind), for a relaxed feeling like swaying on gentle waves in the breeze; the main shop is Japanese in feel and the Shogoin shop oriental, with private rooms. Opened 18 April 1999 (Tabelog). Tabelog Yoshoku "Tabelog 100" 2020, 2022, 2023 and Yoshoku WEST 2025.',
      philosophy: 'Per the official site: to let people enjoy delicious beef at a good price — "something only Hafuu can do".',
      specialty: 'Beef cutlet; katsu sando; steak don.',
      anecdotes: [
        { text: 'An August 2026 diner arriving 15 minutes before a holiday lunch found about 10 people in line, and was seated at a large shared table.', source: R + 'B533529862/' },
        { text: 'An August 2026 diner found the premium katsu sando’s rare beef cutlet superb on its own but thought the sandwich did not do it justice.', source: R + 'B534749708/' },
        { text: '"The rice, miso soup, and salad were all tasty, and the sauce paired perfectly with both the Hamburg Steak and the rice" — October 2026.', source: R + 'B537380655/' },
      ],
      japanese_sources_summary: '公式サイト (hafuu.com): 肉専科はふう、京都御所の南、「は」は波、「ふう」は風、母体は京の町で古くからお肉屋を営む、本店 (和風) と聖護院店 (オリエンタル、完全個室)、本店: 中京区麩屋町通夷川上る笹屋町471-1、11:30〜13:30 (L.O.)・17:30〜21:30 (L.O.)、水曜日・他不定休、ランチ: 極上サーロインステーキ5,200円、極上フィレステーキ5,400円、はふう特選ビフカツ3,100円、ビーフシチュー3,000円、はふうステーキ丼3,350円、エビフライ2,200円、ハンバーグステーキ1,800円、日替りランチ (平日のみ) 1,100円、カレーライス・ハヤシライス各1,400円、カツサンド2,500円、極上カツサンド5,800円、ディナー: お席料ひとり500円、オリジナル Dinner 11,300円、肉専科コース・はふうコース各9,200円、極上牛フィレステーキ Dinner 8,800円、ビフカツ (牛フィレ) Dinner 6,200円、ハンバーグ Dinner 4,500円。食べログ: 洋食・ステーキ・牛料理、36席 (カウンター16、テーブル20)、20分以上の遅刻はキャンセル扱い、禁煙、カード可、1999年4月18日オープン、洋食百名店 2020・2022・2023、洋食 WEST 百名店 2025。口コミ (2026年7〜10月、英語): 肉屋が営む洋食店、ビフカツ、極上カツサンド、ステーキ丼、ハンバーグ、牛すき丼。',
      confidence: 'medium', sources: [TB, SITE, MENU, CORP, R + 'B114995641/', R + 'B273653377/', R + 'B533168297/', R + 'B533224601/', R + 'B533529862/', R + 'B534749708/', R + 'B536002864/', R + 'B537380655/', R + 'B538335875/', R + 'B538406211/', R + 'B538574148/', R + 'B538644482/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book dinner on TableCheck or by phone; lunch is first come; ¥500 dinner seat charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通夷川上ル笹屋町471-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015421, 135.765618); cross-checked: GSI 京都府京都市中京区笹屋町471番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu (prices including tax; undated); ¥500 dinner seat charge.', last_checked: TODAY, items: [
      it('はふう特選ビフカツ', '', 'Hafuu special beef cutlet (lunch)', '¥3,100', 'Lunch', 'no', 'no', '', 'bifkatsu'),
      it('極上カツサンド', '', 'Premium beef katsu sando', '¥5,800', 'Lunch', 'no', 'no', '', 'katsu_sando'),
      it('ハンバーグステーキ', '', 'Hamburg steak (lunch)', '¥1,800', 'Lunch', 'no', 'no', '', 'hamburg'),
      it('日替りランチ', '', 'Daily lunch (weekdays)', '¥1,100', 'Lunch', 'ask', 'no', '', 'daily_lunch'),
      it('はふうステーキ丼', '', 'Hafuu steak don', '¥3,350', 'Lunch', 'ask', 'no', '', 'steak_don'),
      it('極上牛フィレステーキDinner', '', 'Premium beef fillet steak dinner set', '¥8,800', 'Dinner', 'ask', 'no', '', 'fillet_dinner'),
    ] }, {
    cuisine: '京都で古くから肉屋を営む家の洋食とステーキ (公式サイト)・ランチ (税込): 極上サーロインステーキ5,200円、フィレ5,400円、はふう特選ビフカツ3,100円、ビーフシチュー3,000円、はふうステーキ丼3,350円、エビフライ2,200円、ハンバーグステーキ1,800円、平日の日替りランチ1,100円 (小鉢、サラダ、ご飯、みそ汁、香物、コーヒー付き)、カレーライスかハヤシライス1,400円、カツサンド2,500円、極上カツサンド5,800円・ディナーのコース: オリジナル11,300円 (サーロイン190gかフィレ170g)、肉専科コースとはふうコース各9,200円。オードブル、スープ、サラダ、パンかライス、デザート、コーヒー付きのディナー: フィレ8,800円、サーロイン8,300円、フィレの照り焼き8,800円、ビーフシチュー5,700円、牛フィレのビフカツ6,200円、ハンバーグ4,500円。単品はフィレ120g 5,400円、サーロイン140g 5,200円 (公式メニュー)・牛すき丼、和風ビフカツ、牛肉のクリームコロッケ (2026年の口コミ)',
    neighborhood: '御所の南の麩屋町通。丸太町駅から徒歩10分',
    gf_detail: '実際にはグルテンフリーではない。名物はパン粉のビフカツとカツサンドで、コロッケ、カレー、ハヤシライス、デミグラスの煮込みもある。シンプルなのはステーキだけで、ソースは書かれていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。肉屋が営む肉料理の店で、ステーキ、ビフカツ、ハンバーグ、シチュー (公式メニュー)。',
    notes: '[洋食・御所南、肉屋のビフカツ] 御所の南の静かな通りにある老舗の洋食とステーキの店。京都で古くから肉屋を営む家の店で、公式サイトはそれがこの値段のおいしい牛肉につながると書く。知っておきたいのは、中がレアの牛フィレのビフカツとカツサンド。ハンバーグや平日の日替りランチ (1,100円) はお得で、ステーキ丼にはねぎ塩と西洋わさび。夜のコースは9,200円から、席料500円。休日の昼は少し並ぶことも。水曜休み。',
  });
}

save();
