// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 11.
//   + エピナール Epinard (fresh-pasta Italian and omurice near Inaricho; opened 2009)
//   + あいだや２ aidayatsu (shrimp-wonton ramen and kombu-water tsukemen; sister of Aidaya and the Koike group) — no ramen block
//   + Lupi Coffee (6-seat milk-crepe and mille-feuille café, bookings by Instagram DM or the sign-up board; opened 2024)
//   + アラスケバブ Aras Kebab (Ameyoko kebab stand with terrace seats, open from 8 am)
// Chain check (with Greg's 2026-11-02 rulings). Epinard, Lupi, Aras: one shop each found. aidayatsu: the listing calls it a
//   sister of the tsukemen shop Aidaya and of Ramen Koike, Chuka Soba Nishino and King Seimen — differently named concepts of
//   one group, none in data, so drafted as its own shop (sister concepts are not chains).
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Aras Kebab gives 上野4-7-8, the same address as Seafood
//   Shijo Happou (tokyo_kaisen_ichiba_happou_ueno, address_ja "東京都台東区上野4-7-8 アメ横センタービル 2F"); pins 16 m apart.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ エピナール
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13091475/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['17:00', '20:30']);
  put({
    id: 'tokyo_epinard_higashiueno', name: 'エピナール (Epinard)', category: 'OMNI',
    lat: 35.714757, lng: 139.782647, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a fresh-pasta specialist (wheat pasta in cream, oil and Japanese-style sauces); the omurice and salads are not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, cheese, seafood and meat pastas, egg omurice; no vegan dish is named.',
    hours_raw: 'Mon–Sat 11:00–14:00 and 17:00–20:30 (last order 20:00); closed Sundays and the third Wednesday of each month (Tabelog). Reservations taken. 20 seats: 5 at the counter, 15 at tables, plus 4 on the terrace. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Opened 11 May 2009 (a September 2025 review). Prices were raised in May 2025.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 5-chōme, かしわせビル 1F, between Ueno, Inaricho and Iriya — 7 min from JR Ueno Stn Iriya exit',
    cuisine: 'Neighbourhood Italian known for chewy fresh pasta, plus omurice (Tabelog; reviews) · lunch sets A–C with soup, e.g. seafood cream pasta ¥1,150 (May 2025), mini salad ¥200 · omurice in an Italian oil-based style ¥1,300 (May 2025, after a price rise from ¥1,100) · dinner pastas such as sardine and mushroom Japanese-style ¥1,100 (October 2024), carbonara, arrabbiata, mushroom and clam cream · half salad ¥450, side dishes like salmon with tobiko mayonnaise, potato salad and simmered vegetables · summer chilled pasta · wine by the glass ¥440 (October 2024), Japanese sake and shochu',
    website: null, gmaps: gm('エピナール 東上野5-23-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Higashi-Ueno, fresh pasta from a friendly neighbourhood kitchen] A small, homey Italian restaurant between Ueno, Inaricho and Iriya, open since 2009, with a short counter at the front and tables behind. The draw is fresh pasta with a chewy bite — seafood cream, mushroom and clam, sardine and mushroom in a Japanese style, a fiery arrabbiata — and an unusual Italian-style omurice. Lunch sets with soup run about ¥1,150 (2025); at night there are salads, small dishes, wine by the glass and sake, and a February 2026 diner chatted with the friendly owner. A summer chilled pasta appears in the hot months. Closed Sundays and the third Wednesday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 May 2009 (September 2025 review)', background: 'A February 2026 diner chatted with "the friendly owner, who seems to be a favorite" of a cousin\'s family. No source names the owner.', philosophy: null, specialty: 'Fresh pasta; omurice.',
      anecdotes: [
        { text: '"This restaurant is known for its delicious fresh pasta, so I always order pasta when I come here." — October 2023, shrimp and mushroom cream pasta.', source: R + 'B456458871/' },
        { text: '"Omurice (JPY 1,300). The menu lists it as JPY 1,100, but prices will be updated starting in May." — May 2025.', source: R + 'B505982138/' },
        { text: '"I ordered the Arrabbiata, and it\'s spicier than usual. But the pasta is wonderfully chewy and goes down smoothly." — March 2026.', source: R + 'B525082214/' },
      ],
      japanese_sources_summary: '食べログ: エピナール、東上野5-23-2 かしわせビル1F、JR上野駅入谷口から徒歩7分、月〜土11:00〜14:00・17:00〜20:30 (L.O.20:00)、日曜と第3水曜休み、予約可、20席 (カウンター5、テーブル15、テラス4)、禁煙、カード可 (電子マネー・QRは不可)。口コミ(2022年5月〜2026年3月): 生パスタの店、2009年5月11日オープン、カルボナーラ、海老ときのこのクリームパスタとミニサラダ、ハーフサラダ450円、とびこマヨのサーモン、いわしときのこの和風パスタ1,100円、グラスワイン440円、日本酒と焼酎にも力、夏の冷製パスタ、イタリアン風のオムライス1,300円 (5月から値上げ)、ランチA 海鮮クリームパスタ1,150円、気さくな店主、ポテトサラダと煮物、アラビアータ。',
      confidence: 'medium', sources: [TB, R + 'B449950782/', R + 'B456458871/', R + 'B464929540/', R + 'B490033300/', R + 'B505982138/', R + 'B507111627/', R + 'B513918137/', R + 'B514401488/', R + 'B523455889/', R + 'B525082214/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small neighbourhood restaurant; lunch sets on a board outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野5-23-2 かしわせビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated 2025 and through March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野五丁目23番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505982138/', R + 'B507111627/'],
    price_note: 'Prices from 2024–2025 reviews; prices rose in May 2025.', last_checked: TODAY, items: [
      it('', '', 'Lunch A: seafood cream pasta with soup', '¥1,150', 'Lunch', 'no', 'no', 'May 2025.', 'lunch_a'),
      it('', '', 'Omurice (Italian style)', '¥1,300', 'Omurice', 'ask', 'no', 'May 2025 (raised from ¥1,100).', 'omurice'),
      it('', '', 'Mini salad', '¥200', 'Salad', 'ask', 'ask', 'May 2025.', 'mini_salad'),
    ] }, {
    cuisine: 'もちもちの生パスタとオムライスの町のイタリアン (食べログ、口コミ)・スープ付きのランチA〜C、たとえば海鮮クリームパスタ1,150円 (2025年5月)、ミニサラダ200円・イタリアン風のオイルのオムライス1,300円 (2025年5月、1,100円から値上げ)・夜のパスタはいわしときのこの和風1,100円 (2024年10月)、カルボナーラ、アラビアータ、きのことあさりのクリームなど・ハーフサラダ450円、とびこマヨのサーモン、ポテトサラダ、煮物などの小皿・夏の冷製パスタ・グラスワイン440円 (2024年10月)、日本酒と焼酎',
    neighborhood: '東上野五丁目、かしわせビル1F、上野、稲荷町、入谷の間。JR上野駅入谷口から徒歩7分',
    gf_detail: 'グルテンフリーではありません。生パスタの専門店 (小麦のパスタにクリーム、オイル、和風のソース)。オムライスやサラダもグルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。クリーム、チーズ、魚介、肉のパスタ、卵のオムライス。ヴィーガンの料理名は書かれていません。',
    notes: '[イタリアン・東上野、気さくな町のキッチンの生パスタ] 上野、稲荷町、入谷の間にある小さくアットホームなイタリアンで、2009年から。手前に短いカウンター、奥にテーブル。目当てはもちもちの生パスタで、海鮮クリーム、きのことあさり、いわしときのこの和風、辛いアラビアータなど。イタリアン風の珍しいオムライスも。スープ付きのランチセットは約1,150円 (2025年)。夜はサラダや小皿にグラスワインや日本酒も。2026年2月には気さくな店主と話したという人も。夏は冷製パスタも。日曜と第3水曜休み。',
  });
}

// ================================================================ あいだや２
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13306757/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_aidayatsu_ueno', name: 'あいだや２ (aidayatsu)', category: 'OMNI',
    lat: 35.709484, lng: 139.776171, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers in a seafood-and-soy soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a bonito, mackerel and dried-sardine seafood broth, shrimp wontons and pork chashu.',
    hours_raw: 'Mon, Wed, Thu, Sat, Sun and holidays 11:00–15:00 and 17:30–21:00; closed Tuesdays and Fridays (Tabelog; "no planned closures in the first half of November"). No reservations. Ticket machine outside the entrance; cash or cashless (cards, transport IC, PayPay, Alipay, WeChat Pay and more) at the machine. 20 seats: 8 at the counter and 3 tables.',
    hours: { 0: D, 2: D, 3: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 6-chōme, NKTビル 1F, between Ueno and Okachimachi — 5 min from Naka-Okachimachi and Ueno-Okachimachi Stns; 7 min from JR Ueno and Okachimachi Stns',
    cuisine: 'Ramen and tsukemen from the group behind Aidaya, Ramen Koike, Chuka Soba Nishino and King Seimen: a seafood broth rich in katsuobushi and saba-bushi with aromatic chashu, and hand-wrapped shrimp wontons (Tabelog) · shrimp wonton noodles 130 g ¥1,330, large 180 g ¥1,430; with seasoned egg ¥1,480 (October 2026) · kombu-water tsukemen; creamy seasoned egg; wagyu sukiyaki rice (Tabelog; reviews)',
    website: null, gmaps: gm('あいだや２ 上野6-7-19'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Ueno-Okachimachi, shrimp wonton noodles from the Koike group] The ramen-focused sister of the nearby tsukemen shop Aidaya, from the group behind Ramen Koike, Chuka Soba Nishino and King Seimen. The signature is shrimp wonton noodles: firm, low-hydration noodles in a strong seafood broth of bonito, mackerel and sardine, with smoky chashu and hand-wrapped wontons holding whole shrimp (¥1,330; large ¥1,430). There is also a light kombu-water tsukemen and wagyu sukiyaki rice. Diners in October 2026 mostly praised the wontons and broth; one found the fish flavour overpowering and the noodles too firm, another thought it better on an earlier visit. Buy at the machine outside (cash or cashless); open until 9 pm, closed Tuesdays and Fridays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per Tabelog\'s listing, a sister restaurant of Ramen Koike, Chuka Soba Nishino and King Seimen, offering a different style from the nearby tsukemen shop Aidaya; reviewers noticed the group\'s name (with Nishino) printed on the napkins (October 2026). No source names the operator, chef or opening date.', philosophy: null, specialty: 'Shrimp wonton noodles.',
      anecdotes: [
        { text: '"The rich seafood-based double broth paired with the firm, low-hydration noodles was delicious!… The chashu (braised pork) was also surprisingly smoked." — October 2026, large shrimp wonton noodles ¥1,430.', source: R + 'B537762136/' },
        { text: '"I ordered the kombu water tsukemen. It was a light and easy-to-eat dish, making it perfect after a night of drinking." — October 2026.', source: R + 'B538110235/' },
        { text: '"What is this? It\'s really strong—are those sardines? The seafood flavor is overpowering." — October 2026.', source: R + 'B538001348/' },
      ],
      japanese_sources_summary: '食べログ: あいだや２、上野6-7-19 NKTビル 1F、仲御徒町駅・上野御徒町駅から徒歩5分、月水木土日祝11:00〜15:00・17:30〜21:00、火金休み、予約不可、カード・交通系IC・PayPay・Alipay・WeChat Pay など可、20席 (カウンター8、テーブル3)、名物は海老ワンタン麺、昆布水つけ麺、とろとろの味玉、和牛のすき焼きご飯、かつお節とさば節の魚介のスープ、香ばしいチャーシュー、手包みの海老ワンタン、Ramen Koike、Chuka Soba Nishino、King Seimen の姉妹店で、近くのつけ麺専門店「あいだや」とは別のスタイル。口コミ(2026年4月〜10月): 海老ワンタン麺 並130g 1,330円・大180g 1,430円・味玉入り1,480円、外の券売機で現金とキャッシュレス、ワンタンに丸ごとの海老、燻製の香りのチャーシュー、低加水の固めの麺、昆布水つけ麺は軽い、魚介が強すぎるという声、前回のほうがよかったという声。',
      confidence: 'medium', sources: [TB, R + 'B527016411/', R + 'B537705812/', R + 'B537762136/', R + 'B538001348/', R + 'B538087526/', R + 'B538110235/', R + 'B538159733/', R + 'B538191537/', R + 'B538243839/', R + 'B538289230/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine outside with clear cashless instructions (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-7-19 NKTビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (November closures noted); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目7番19号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538243839/', R + 'B537762136/', R + 'B538087526/'],
    price_note: 'Prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Shrimp wonton noodles (130 g)', '¥1,330', 'Ramen', 'no', 'no', 'October 2026.', 'ebi_wonton'),
      it('', '', 'Shrimp wonton noodles, large (180 g)', '¥1,430', 'Ramen', 'no', 'no', 'October 2026.', 'ebi_wonton_l'),
      it('', '', 'Shrimp wonton noodles with seasoned egg', '¥1,480', 'Ramen', 'no', 'no', 'October 2026.', 'ebi_wonton_tama'),
      it('', '', 'Kombu-water tsukemen', '', 'Tsukemen', 'no', 'no', 'October 2026 review.', 'kombusui_tsukemen'),
    ] }, {
    cuisine: 'あいだや、Ramen Koike、Chuka Soba Nishino、King Seimen のグループのラーメンとつけ麺。かつお節とさば節の濃い魚介のスープに香ばしいチャーシュー、手包みの海老ワンタン (食べログ)・海老ワンタン麺 並130g 1,330円、大180g 1,430円、味玉入り1,480円 (2026年10月)・昆布水つけ麺、とろとろの味玉、和牛のすき焼きご飯 (食べログ、口コミ)',
    neighborhood: '上野六丁目、NKTビル 1F、上野と御徒町の間。仲御徒町駅・上野御徒町駅から徒歩5分、JR上野駅・御徒町駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。魚介と醤油のスープに小麦の麺とワンタンの皮。',
    vegan_detail: 'ヴィーガンではありません。かつお、さば、煮干しの魚介のスープ、海老ワンタン、豚のチャーシュー。',
    notes: '[ラーメン・上野御徒町、Koike グループの海老ワンタン麺] 近くのつけ麺の店「あいだや」の、ラーメン中心の姉妹店で、Ramen Koike、Chuka Soba Nishino、King Seimen と同じグループ。名物は海老ワンタン麺で、かつお、さば、煮干しの強い魚介のスープに固めの低加水麺、燻製の香りのチャーシュー、丸ごとの海老を包んだ手包みのワンタン (1,330円、大1,430円)。軽い昆布水つけ麺や和牛のすき焼きご飯も。2026年10月の口コミではワンタンとスープが好評な一方、魚介が強すぎて麺が固すぎるという声や、前回のほうがよかったという声も。外の券売機で購入 (現金かキャッシュレス)。夜9時まで、火曜・金曜休み。',
  });
}

// ================================================================ Lupi Coffee
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13302357/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:30', '15:00']);
  put({
    id: 'tokyo_lupi_coffee_kitaueno', name: 'Lupi Coffee', category: 'OMNI',
    lat: 35.715850, lng: 139.782530, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the desserts are crepe mille-feuilles, pies and tarts, and the savoury plates include toast and a croque monsieur.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream-filled crepe mille-feuilles, cheesecake, condensed-milk toffee and lattes.',
    hours_raw: 'Daily 8:30–15:00 (last order 14:00); may close early depending on sweets and bookings; closing days on Instagram (Tabelog). How to book: Tabelog says reservations only, by Instagram DM, first come first served until 8:00, with the day\'s menu posted to Instagram stories at 7:30; reviewers in July–September 2026 describe also a sign-up board at the entrance, filled from about 7:00, and an October 2026 visitor found same-day slots after work and at 9:30 announced on Instagram. One drink per person required (July 2026). 6 seats. Non-smoking. Cards (VISA, Master, AMEX) and PayPay. Takeout drip coffee. English menu. Opened 11 October 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Ueno 1-chōme — 6 min (480 m) from JR Ueno Stn; near Inaricho Stn',
    cuisine: 'Six-seat café known for milk-crepe mille-feuilles, pies and tarts made with seasonal fruit, changing daily (Tabelog; reviews) · e.g. peach and berry mille-feuille ¥2,300, American cherry and blueberry mille-feuille tart ¥2,000 (July 2026); fig and pistachio mille-feuille ¥2,300 with extra figs ¥700 (August 2026); fig pie, fig and tea Basque cheesecake, banoffee pie, Shine Muscat and chocolate-mint mille-feuille · matcha latte, black sesame latte ¥800, hand-drip coffee · savoury plates: fig toast, croque monsieur, a chocolate croquette plate · birthday plate ¥300',
    website: null, gmaps: gm('Lupi Coffee 北上野1-1-1'), menu_url: null,
    notes: "[Café · Kita-Ueno, the six-seat crepe mille-feuille café you queue at dawn for] A tiny café a few minutes from Ueno Station whose milk-crepe mille-feuilles have a following: chewy, mochi-like crepe layers stacked with cream and seasonal fruit — figs from several varieties, peaches, Shine Muscat, cherries — cut to show a striking cross-section, alongside pies, Basque cheesecake and lattes with latte art. Prices are about ¥2,000–2,300 for a dessert plus an ¥800 drink. Getting in is the hard part: bookings open by Instagram DM at 7:30 and go in minutes, and in 2026 people signed up on the board outside from about 7 am for the first round; there are only six seats and turnover is slow. One September 2026 diner found the savoury croquette plate disappointing; most reviews rave about the sweets.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 October 2024 (Tabelog)', background: 'A Tabelog listing; no source names the owner. An August 2026 review says the figs come from a supplier named FIG&MORE (as written).', philosophy: null, specialty: 'Milk-crepe mille-feuille with seasonal fruit.',
      anecdotes: [
        { text: '"I arrived at 7:10 AM to try my luck. There were already 6 people signed up… I was called into the shop at 9:40 AM." — July 2026.', source: R + 'B532753835/' },
        { text: '"They use over five varieties of figs from FIG&MORE, arranged in four layers. The blueberry whipped cream topping adds a refreshing sweetness." — August 2026, fig and pistachio mille-feuille ¥2,300.', source: R + 'B529865928/' },
        { text: '"The crepe itself is incredibly chewy, almost like mochi!… The cream is quite rich and sweet, so the fruits feel a bit overshadowed." — September 2026.', source: R + 'B535805738/' },
      ],
      japanese_sources_summary: '食べログ: Lupi Coffee、北上野1-1-1、JR上野駅から徒歩6分 (480m)、毎日8:30〜15:00 (L.O.14:00)、スイーツや予約状況で早じまいあり、休みは Instagram で告知、予約制 (Instagram の DM で8:00まで先着順、7:30にストーリーでその日のメニュー)、6席、禁煙、カード・PayPay 可、テイクアウト、英語メニュー、2024年10月11日オープン。口コミ(2026年1月〜10月): 季節の果物のミルクレープのミルフィーユ、桃とベリーのミルフィーユ2,300円、アメリカンチェリーとブルーベリー2,000円、1人1ドリンク、誕生日プレート300円、いちじくとピスタチオのミルフィーユ2,300円といちじく追加700円、FIG&MORE のいちじく、黒ごまラテ800円、いちじくのパイ、紅茶のバスクチーズケーキ、バノフィーパイ、シャインマスカットとチョコミント、入口のボードに朝7時ごろから記名、回転は遅い、もちもちのクレープ、チョコのコロッケのプレートは物足りなかったという声、ハンドドリップのコーヒーの持ち帰り。',
      confidence: 'medium', sources: [TB, R + 'B499340355/', R + 'B520814760/', R + 'B529865928/', R + 'B532753835/', R + 'B533273652/', R + 'B533940781/', R + 'B534845855/', R + 'B534885656/', R + 'B535805738/', R + 'B537212394/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; booking is by Instagram DM or the sign-up board outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区北上野1-1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区北上野一丁目1番1号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499340355/', R + 'B529865928/'],
    price_note: 'Prices from July–August 2026 reviews (tax included); one drink per person.', last_checked: TODAY, items: [
      it('', '', 'Peach and berry mille-feuille', '¥2,300', 'Desserts', 'no', 'no', 'July 2026.', 'peach_mille'),
      it('', '', 'Fig and pistachio mille-feuille', '¥2,300', 'Desserts', 'no', 'no', 'August 2026; extra figs ¥700.', 'fig_mille'),
      it('', '', 'American cherry and blueberry mille-feuille tart', '¥2,000', 'Desserts', 'no', 'no', 'July 2026.', 'cherry_tart'),
      it('', '', 'Black sesame latte', '¥800', 'Drinks', 'ask', 'no', 'August 2026.', 'sesame_latte'),
      it('', '', 'Matcha latte', '¥800', 'Drinks', 'ask', 'no', 'July 2026.', 'matcha_latte'),
    ] }, {
    cuisine: '日替わりの季節の果物のミルクレープのミルフィーユ、パイ、タルトで知られる6席のカフェ (食べログ、口コミ)・たとえば桃とベリーのミルフィーユ2,300円、アメリカンチェリーとブルーベリーのミルフィーユタルト2,000円 (2026年7月)、いちじくとピスタチオのミルフィーユ2,300円、いちじく追加700円 (2026年8月)、いちじくのパイ、いちじくと紅茶のバスクチーズケーキ、バノフィーパイ、シャインマスカットとチョコミントのミルフィーユ・抹茶ラテ、黒ごまラテ800円、ハンドドリップのコーヒー・食事はいちじくのトースト、クロックムッシュ、チョコのコロッケのプレート・誕生日プレート300円',
    neighborhood: '北上野一丁目。JR上野駅から徒歩6分 (480m)、稲荷町駅の近く',
    gf_detail: 'グルテンフリーではありません。デザートはクレープのミルフィーユ、パイ、タルトで、食事もトーストやクロックムッシュ。',
    vegan_detail: 'ヴィーガンではありません。生クリームのミルクレープ、チーズケーキ、練乳のトフィー、ラテ。',
    notes: '[カフェ・北上野、早朝から並ぶ6席のミルクレープのミルフィーユ] 上野駅から数分の小さなカフェで、ミルクレープのミルフィーユが評判。もちのようにもちもちしたクレープに生クリームと季節の果物 (何種類ものいちじく、桃、シャインマスカット、チェリー) を重ね、断面の美しさで見せる。パイ、バスクチーズケーキ、ラテアートのラテも。デザートは約2,000〜2,300円にドリンク800円。難しいのは入店で、Instagram の DM の予約は7時半に始まってすぐ埋まり、2026年には朝7時ごろから入口のボードに名前を書いて最初の回を待つ人も。席は6つで回転は遅い。2026年9月には食事のコロッケのプレートが物足りなかったという声も、ほとんどの口コミはスイーツを絶賛。',
  });
}

// ================================================================ アラスケバブ
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13241671/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['08:30', '23:30']); const WE = day(['08:30', '22:00']); const FR = day(['08:30', '24:00']);
  const SA = day(['08:00', '24:00']); const SU = day(['08:00', '23:00']);
  put({
    id: 'tokyo_aras_kebab_ameyoko', name: 'アラスケバブ (Aras Kebab)', category: 'OMNI',
    lat: 35.709762, lng: 139.774449, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kebabs in pita and shawarma wraps; the kebab salads and rice plates are not described as gluten-free, and the sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and beef doner, cheese, and sauces not described; no vegetable-only item is named.',
    hours_raw: 'Mon, Tue, Thu 8:30–23:30; Wed 8:30–22:00; Fri 8:30–24:00; Sat 8:00–24:00; Sun 8:00–23:00; hours may change (Tabelog). No reservations. Cash only (no cards, e-money or QR, Tabelog). Indoor seats and open-air benches along the street; no restroom on site (June 2026). Tabelog says non-smoking, but a June 2026 diner found smoking allowed at the tables. Not described as halal by any source.',
    hours: { 0: MO, 1: MO, 2: WE, 3: MO, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ueno 4-chōme, on the Ameyoko street (上野4-7-8) — 2 min from JR Ueno Stn Hirokoji exit; 1 min from Keisei Ueno and Ueno-Hirokoji Stns',
    cuisine: 'Turkish kebab stand: chicken, beef or mixed doner in pita, shawarma wraps, kebab salads and rice plates, with a choice of six spice levels (2025–2026 reviews) · chicken kebab with cheese ¥700 (March 2026); large +¥200; jalapeños +¥100; pistachio baklava · draft beer ¥500 (June 2026), bottled water ¥100 (October 2026)',
    website: null, gmaps: gm('アラスケバブ 上野4-7-8 アメ横'), menu_url: null,
    notes: "[Kebab · Ameyoko, an early-opening kebab stand with benches] A busy kebab stand in Ameyoko, open from 8 or 8:30 am until late, with a few seats inside and benches on the street — a rare place to sit down in the market. Order chicken, beef or mixed doner in pita or a slim shawarma wrap, or as a salad or rice plate, at one of six spice levels (the hotter ones are properly hot); a chicken kebab with cheese was ¥700 in March 2026, and a pistachio baklava makes a sweet finish. Staff are cheerful and chatty, and reviewers in 2025–2026 call it good value; one noted the tomatoes had gone from the doner, and one found smokers at the tables. Cash only; no restroom.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'A Tabelog listing; no source names the owner or gives an opening date.', philosophy: null, specialty: 'Doner kebab; shawarma.',
      anecdotes: [
        { text: '"The food is delicious, the prices are reasonable, and the best part is they have benches to sit on… Recently, I noticed they might be cutting costs, as they no longer include tomatoes." — November 2025.', source: R + 'B518109638/' },
        { text: '"I got a Chicken Kebab with cheese for JPY 700, and even though I added a beer, it was still a great deal." — March 2026.', source: R + 'B525312110/' },
        { text: '"It\'s a smoking-friendly place, so if someone next to you is smoking, it can be quite unpleasant." — June 2026.', source: R + 'B529638799/' },
      ],
      japanese_sources_summary: '食べログ: アラスケバブ、上野4-7-8、JR上野駅広小路口から徒歩2分、京成上野駅・上野広小路駅から徒歩1分、月火木8:30〜23:30、水8:30〜22:00、金8:30〜24:00、土8:00〜24:00、日8:00〜23:00、予約不可、現金のみ、禁煙。口コミ(2025年11月〜2026年10月): Ameyoko のケバブ店、ベンチで座れる、ドネルケバブ、トマトが入らなくなった、ピスタチオのバクラヴァ、明るく気さくな店員、辛さを選べる、チキンとビーフのミックスのケバブサラダ、店内と外の席、大盛り+200円、チーズ入りチキンケバブ700円、トイレはない、喫煙できる席という声、ハラペーニョ+100円、生ビール500円、シャワルマ、水100円。',
      confidence: 'medium', sources: [TB, R + 'B518109638/', R + 'B518248535/', R + 'B518567784/', R + 'B520189172/', R + 'B520377200/', R + 'B523483188/', R + 'B525312110/', R + 'B529638799/', R + 'B530625415/', R + 'B537402922/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Street stand; point at the menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-7-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目7番8号 (go) 7m; same street address as Seafood Shijo Happou (tokyo_kaisen_ichiba_happou_ueno, address_ja "東京都台東区上野4-7-8 アメ横センタービル 2F"), whose pin is 16 m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525312110/', R + 'B530625415/'],
    price_note: 'Prices from March–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Chicken kebab with cheese', '¥700', 'Kebab', 'no', 'no', 'March 2026; large +¥200.', 'chicken_kebab'),
      it('', '', 'Draft beer', '¥500', 'Drinks', 'no', 'ask', 'June 2026.', 'beer'),
    ] }, {
    cuisine: 'トルコのケバブの店: チキン、ビーフ、ミックスのドネルをピタパンやシャワルマで、ケバブサラダやライスプレートも。辛さは6段階 (2025〜2026年の口コミ)・チーズ入りチキンケバブ700円 (2026年3月)、大盛り+200円、ハラペーニョ+100円、ピスタチオのバクラヴァ・生ビール500円 (2026年6月)、ペットボトルの水100円 (2026年10月)',
    neighborhood: '上野四丁目、Ameyoko の通り (上野4-7-8)。JR上野駅広小路口から徒歩2分、京成上野駅・上野広小路駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。ピタパンとシャワルマのケバブで、ケバブサラダやライスプレートもグルテンフリーの説明はなく、ソースの中身も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。チキンとビーフのドネル、チーズ。ソースの中身は書かれておらず、野菜だけの品はありません。',
    notes: '[ケバブ・Ameyoko、朝から開くベンチ付きのケバブ店] Ameyoko のにぎやかなケバブ店で、朝8時か8時半から夜遅くまで。店内に少し席があり、通りにはベンチもあって、市場の中で座れる貴重な場所。チキン、ビーフ、ミックスのドネルをピタパンか細いシャワルマで、またはサラダやライスプレートで。辛さは6段階 (辛い方は本当に辛い)。2026年3月はチーズ入りチキンケバブが700円、締めにピスタチオのバクラヴァも。店員は明るく話し好きで、2025〜2026年の口コミではお得という評価。ドネルからトマトがなくなったという声や、席でたばこを吸う人がいたという声も。現金のみ、トイレなし。',
  });
}

save();
