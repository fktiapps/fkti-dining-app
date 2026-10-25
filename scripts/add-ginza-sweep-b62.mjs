// Ginza Station half-mile sweep (805 m), batch 62 — next four from the non-Japanese filter (all OMNI: groups and branches).
//   + VIDRIO 銀座三越店 (びいどろ; paella-competition winners, Mitsukoshi 11F; juraku.com group)
//   + 銀座カシータ (Hotel The Celestine Ginza 14F; sister of Omotesando Casita)
//   + Drape 東京會舘 (Tokyo Kaikan's café-brasserie at Hibiya; Marron Chantilly)
//   + LOBOS 銀座 (Spanish bar between Mitsukoshi and Kabuki-za; crospiration.jp group)
// Fetched for b63 (2026 reviews): Osteria Barababao 13005913, マイアミパティオ 新橋 13049950, Susan's MEAT BALL 13217804, Hola! 13143836.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ VIDRIO 銀座三越店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13234693/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '16:00'], ['17:00', '22:00']), we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_vidrio_mitsukoshi_ginza4', name: 'VIDRIO 銀座三越店 (びいどろ)', category: 'OMNI',
    lat: 35.671223, lng: 139.765936,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella is rice-based, but the fideuà is noodles, the ajillo comes with bread and the squid is fried; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood and squid-ink paellas, sardines, scallops, sea-urchin gratin; a mushroom ajillo and truffle potato galette (with egg) are the vegetable dishes described.',
    hours_raw: 'Mon–Fri 11:00–16:00 and 17:00–22:00; Sat, Sun and holidays 11:00–22:00 (Tabelog). No service charge. Cards, IC and QR accepted; Mitsukoshi points and shareholder perks not accepted (2026 review).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Mitsukoshi 11F (restaurant floor), Ginza 4-chōme — direct from Ginza Stn underground',
    cuisine: 'Spanish · competition-winning paellas (seafood, Valencia) and fideuà · tapas · weekend paella sets', cuisine_type: 'other',
    website: 'https://juraku.com/vidriog/vidrio/index.html', gmaps: gm('VIDRIO 銀座三越店'), menu_url: null,
    notes: "[Spanish · paella on the Mitsukoshi restaurant floor] The Ginza Mitsukoshi branch of VIDRIO (びいどろ), a Spanish restaurant whose paellas have won a Tokyo paella competition and an international Valencia-paella prize, and whose fideuà won in Gandia. The 48-seat room is modelled on the port town of Gandia, with comfortable spacing and semi-private areas. Paella comes in individual pans, so two people can share different ones, such as seafood and squid ink. The weekend set adds a tapas platter, ajillo, dessert and coffee. À la carte, 2026 diners liked marinated sardines with gari, Galician-style scallops, a sea-urchin and ikura gratin, a mushroom ajillo, a truffle potato galette and fried squid. Mitsukoshi points can't be used.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 June 2019 (Tabelog); another VIDRIO is nearby in Ginza', background: 'Group-run (juraku.com).', philosophy: null, specialty: 'Paella; fideuà.',
      anecdotes: [
        { text: '"The paella is served in individual pots, allowing two people to order different ones and share." — September 2026.', source: R + 'B536071051/' },
        { text: '"I highly recommend the truffle galette! It had a wonderful truffle aroma, and the combination of potatoes and eggs." — September 2026.', source: R + 'B536726764/' },
      ],
      japanese_sources_summary: '食べログ: VIDRIO 銀座三越店(びいどろ)、銀座4-6-16 銀座三越11F、銀座駅から地下通路で直結、48席(半個室あり)、平日11:00〜16:00・17:00〜22:00、土日祝11:00〜22:00、サービス料なし、カード・IC・QR可、2019年6月27日開店、公式サイト juraku.com。店の紹介: フィデウア国際コンクール優勝(ガンディア)、東京パエリアコンテスト優勝(魚介のパエリア)、国際パエリアコンクール特別賞(バレンシアパエリア)、港町ガンディアをイメージした店内、スペインから輸入した食材。2026年9月の口コミ: 鰯のマリネとガリ、ガリシア風のホタテ、雲丹といくらのグラタン、パエリアは小鍋で2種をシェア(魚介、イカ墨)、週末のセット(パエリア、タパス盛り合わせ、アヒージョ、デザート、コーヒー)、マッシュルームのアヒージョ、トリュフのガレット(じゃがいもと卵)、イカのフリット、三越のポイントや株主優待は使えない。',
      confidence: 'medium', sources: [TB, R + 'B536071051/', R + 'B535532217/', R + 'B536726764/', R + 'B536183102/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; easy for families.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-6-16 銀座三越 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目6番16号 (go) 50m (department store); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536071051/', R + 'B535532217/'],
    price_note: 'No prices captured; reviewers spend ¥2,000–4,000 at lunch.', last_checked: TODAY, items: [
      it('魚介のパエリア', 'gyokai no paeria', 'Seafood paella (individual pan)', '', 'Paella', 'ask', 'no', '', 'paella_seafood'),
      it('イカ墨のパエリア', 'ikasumi no paeria', 'Squid-ink paella', '', 'Paella', 'ask', 'no', '', 'paella_squidink'),
      it('雲丹といくらのグラタン', '', 'Sea-urchin and ikura gratin', '', 'Tapas', 'no', 'no', '', 'uni_gratin'),
      it('マッシュルームのアヒージョ', '', 'Mushroom ajillo', '', 'Tapas', 'ask', 'ask', '', 'mushroom_ajillo'),
    ] }, {
    cuisine: 'スペイン料理・コンクール受賞のパエリア(魚介、バレンシア)とフィデウア・タパス・週末のパエリアセット',
    neighborhood: '銀座三越11F(レストランフロア)、銀座四丁目。銀座駅から地下通路で直結',
    gf_detail: '要確認。パエリアは米ですが、フィデウアは麺、アヒージョにはパン、イカはフリットで、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介やイカ墨のパエリア、鰯、ホタテ、雲丹のグラタン。野菜料理として書かれているのはマッシュルームのアヒージョと、卵を使うトリュフのガレットです。',
    notes: '[スペイン料理・三越のレストランフロアでパエリア] スペイン料理 VIDRIO(びいどろ)の銀座三越店。東京パエリアコンテスト優勝や国際パエリアコンクール特別賞、ガンディアのフィデウア国際コンクール優勝の実績があります。48席の店内は港町ガンディアをイメージし、席の間隔もゆったりで半個室も。パエリアは小鍋なので、2人で魚介とイカ墨など別々に頼んでシェアできます。週末のセットはタパス盛り合わせ、アヒージョ、デザート、コーヒー付き。アラカルトでは2026年の客が、ガリを添えた鰯のマリネ、ガリシア風のホタテ、雲丹といくらのグラタン、マッシュルームのアヒージョ、トリュフのじゃがいものガレット、イカのフリットを推しています。三越のポイントは使えません。',
  });
}

// ================================================================ 銀座カシータ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13219314/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['07:00', '15:00'], ['18:00', '23:59']), we = day(['07:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_ginza_casita_ginza8', name: '銀座カシータ (Ginza Casita)', category: 'OMNI',
    lat: 35.669118, lng: 139.759872,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Course-style Italian with seasonal fish and steak, but also caviar capellini, sea-urchin pasta and Basque cheesecake; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: caviar and sea-urchin pastas, fish, sirloin steak, cheesecake.',
    hours_raw: 'Daily breakfast 7:00–12:00, lunch 12:00–15:00 (L.O. 14:00), dinner weekdays 18:00–24:00 (L.O. 23:00), weekends and holidays 18:00–22:00; full menu to 21:00, then an after-dinner menu (Tabelog). 10% service; ¥1,000 table charge after 21:00. Cards and IC accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme, Hotel The Celestine Ginza 14F — 5 min from Shimbashi Stn',
    cuisine: 'Italian with a Ginza night view · à la carte served course-style · caviar capellini, sea-urchin pasta · lunch and breakfast', cuisine_type: 'other',
    website: 'http://www.casita.jp/ginza/', gmaps: gm('銀座カシータ ホテル ザ セレスティン銀座'), menu_url: null,
    notes: "[Italian · top floor with a Ginza night view] The Ginza sister of Omotesando's Casita, on the 14th floor of Hotel The Celestine Ginza, open since 2017. It has 50 seats (14 at the counter) and views over the Ginza night skyline; one diner even spotted Tokyo Tower. Staff are attentive without being stiff, and will warn you if you've over-ordered. You can order à la carte and have it served like a course. 2026 diners praise the caviar capellini, sea-urchin pasta, a white-fish main, sirloin steak and the Basque cheesecake. The lunch course lets two people share different pastas and mains. Also open for breakfast. About ¥8,000–10,000 at lunch and ¥15,000–30,000 at dinner; 10% service, plus ¥1,000 a head after 9 p.m.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 October 2017 (Tabelog); sister of Casita Omotesando', background: 'Company-run; a 2026 reviewer credits the service to "President Takahashi\'s philosophy".', philosophy: null, specialty: 'Seasonal fish; pasta.',
      anecdotes: [
        { text: '"The staff kindly points out if you\'ve ordered too much!… The caviar capellini and sea urchin pasta were perfect." — August 2026.', source: R + 'B534414715/' },
        { text: '"The attentive yet not overly formal service, reflecting President Takahashi\'s philosophy, captivated me even before the meal began." — September 2026.', source: R + 'B536453057/' },
      ],
      japanese_sources_summary: '食べログ: 銀座カシータ、銀座8-4-22 ホテル ザ セレスティン銀座14F、新橋駅から徒歩5分、50席(カウンター14・テーブル36)、朝食7:00〜12:00、ランチ12:00〜15:00、ディナー平日18:00〜24:00・土日祝18:00〜22:00(21時以降はアフターディナーメニュー)、法定点検日以外は無休、サービス料10%、21時以降はテーブルチャージ1,000円、カード・IC可、2017年10月5日開店、公式サイト casita.jp。2026年の口コミ: 表参道カシータの系列、東京タワーが見えた、アラカルトをコース仕立てで、頼みすぎを教えてくれるスタッフ、キャビアのカッペリーニ、雲丹のパスタ、白身魚、サーロインステーキ、バスクチーズケーキ、ランチコースでパスタとメインを選んでシェア、社長 Takahashi(英文表記)の理念のサービス。',
      confidence: 'medium', sources: [TB, R + 'B534414715/', R + 'B536453057/', R + 'B533883756/', R + 'B536840956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; attentive service.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-4-22 ホテル ザ セレスティン銀座 14F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目4番22号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534414715/', R + 'B536840956/'],
    price_note: 'No prices captured; reviewers spend ¥8,000–10,000 at lunch and ¥15,000–30,000 at dinner.', last_checked: TODAY, items: [
      it('キャビアのカッペリーニ', '', 'Caviar capellini', '', 'Pasta', 'no', 'no', '', 'caviar_capellini'),
      it('雲丹のパスタ', 'uni no pasuta', 'Sea-urchin pasta', '', 'Pasta', 'no', 'no', '', 'uni_pasta'),
      it('ランチコース', 'ranchi koosu', 'Lunch course: choose pasta and main, dessert', '', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
    ] }, {
    cuisine: '銀座の夜景を望むイタリアン・アラカルトをコース仕立てで・キャビアのカッペリーニ、雲丹のパスタ・ランチと朝食も',
    neighborhood: '銀座八丁目、ホテル ザ セレスティン銀座14F。新橋駅から徒歩5分',
    gf_detail: '要確認。季節の魚やステーキのコース仕立てのイタリアンですが、キャビアのカッペリーニ、雲丹のパスタ、バスクチーズケーキも。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。キャビアや雲丹のパスタ、魚、サーロインステーキ、チーズケーキ。',
    notes: '[イタリアン・夜景の見える最上階] 表参道カシータの系列で、ホテル ザ セレスティン銀座の14階に2017年開店。カウンター14席を含む50席で、銀座の夜景を一望し、東京タワーが見えたという客も。丁寧だけれど堅苦しくないサービスで、頼みすぎると教えてくれます。アラカルトをコース仕立てで出してもらえます。2026年の客は、キャビアのカッペリーニ、雲丹のパスタ、白身魚、サーロインステーキ、バスクチーズケーキを絶賛。ランチコースはパスタとメインを選んで2人でシェアも。朝食営業もあり。昼は8,000〜10,000円、夜は15,000〜30,000円ほど。サービス料10%、21時以降は1人1,000円のチャージ。',
  });
}

// ================================================================ Drape 東京會舘
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13283069/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_drape_tokyo_kaikan_hibiya', name: 'Drape 東京會舘 (ドレープ)', category: 'OMNI',
    lat: 35.674188, lng: 139.760298,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A café-brasserie of hors d’oeuvres, meat mains and cakes; the famous Marron Chantilly is chestnut purée and cream, but no source says whether it or other dishes contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: herring hors d’oeuvres, pork with Marsala sauce, cream desserts.',
    hours_raw: 'Daily 11:00–21:00 (lunch L.O. 14:30, dinner L.O. 20:00); two-hour limit at busy times (Tabelog). Service charge applies. Cards, e-money and PayPay accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya, Tōhō Hibiya Promenade Bldg 2F — direct from Hibiya Stn exit A5',
    cuisine: 'Tokyo Kaikan’s French café-brasserie · Marron Chantilly, daily cakes · weekend lunch courses · wide non-alcoholic drinks', cuisine_type: 'french',
    website: 'https://www.kaikan.co.jp/special/drape/index.html', gmaps: gm('Drape 東京會舘 日比谷'), menu_url: null,
    notes: "[French café · Tokyo Kaikan at Hibiya] A bright, big-windowed 52-seat café-brasserie (12 at the counter) run by Tokyo Kaikan, open since 2023 and all day from 11:00. Many come for Tokyo Kaikan's famous Marron Chantilly, fluffy chestnut under rich whipped cream, or the daily cake (chestnut in October 2026) with tea. A weekend lunch course runs salad-style hors d'oeuvres with herring, pork fillet in Marsala sauce and an assorted dessert plate. The drinks list is long, with plenty of non-alcoholic choices and a pretty house soda. Service carries Tokyo Kaikan's standards. Two-hour limit when busy.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 March 2023 (Tabelog)', background: 'Operated by Tokyo Kaikan.', philosophy: null, specialty: 'Marron Chantilly.',
      anecdotes: [
        { text: '"Drape, operated by Tokyo Kaikan… This time, I enjoyed their famous Mont Blanc Chantilly." — September 2026.', source: R + 'B536727128/' },
        { text: '"Salad-style hors d\'oeuvres, Pork fillet with a rich Marsala sauce, Assorted desserts." — October 2026, weekend lunch course.', source: R + 'B536733930/' },
      ],
      japanese_sources_summary: '食べログ: Drape 東京會舘(ドレープ)、千代田区有楽町1-5-2 東宝日比谷プロムナードビル2F、日比谷駅A5出口直結、52席(カウンター12含む)、毎日11:00〜21:00(ランチL.O.14:30・ディナーL.O.20:00)、混雑時は2時間制、サービス料あり、カード・電子マネー・PayPay可、2023年3月16日開店。2026年の口コミ: 東京會舘が運営、名物のマロンシャンテリー、日替わりケーキ(栗)と紅茶、週末のランチコース(サラダ仕立てのオードブルにニシン、豚フィレのマルサラソース、デザートの盛り合わせ)、ノンアルコールも豊富なドリンク、大きな窓の開放的な店内。',
      confidence: 'medium', sources: [TB, R + 'B536727128/', R + 'B536733930/', R + 'B537359100/', R + 'B537715821/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Café-style; easy any time of day.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-5-2 東宝日比谷プロムナードビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目5番 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536727128/', R + 'B536733930/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–5,000.', last_checked: TODAY, items: [
      it('マロンシャンテリー', 'maron shanterii', 'Marron Chantilly (chestnut and whipped cream)', '', 'Desserts', 'ask', 'no', 'Tokyo Kaikan’s signature.', 'marron_chantilly'),
      it('週末ランチコース', '', 'Weekend lunch course: hors d’oeuvres, pork fillet with Marsala sauce, desserts', '', 'Courses', 'ask', 'no', 'October 2026.', 'weekend_lunch'),
    ] }, {
    cuisine: '東京會舘のフレンチのカフェ・ブラッスリー・マロンシャンテリー、日替わりケーキ・週末のランチコース・ノンアルコールも豊富',
    neighborhood: '日比谷、東宝日比谷プロムナードビル2F。日比谷駅A5出口直結',
    gf_detail: '要確認。オードブル、肉のメイン、ケーキのカフェ・ブラッスリーで、名物のマロンシャンテリーは栗とクリームですが、小麦を使うかは書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ニシンのオードブル、豚フィレのマルサラソース、クリームのデザート。',
    notes: '[フレンチのカフェ・日比谷の東京會舘] 東京會舘が営む、大きな窓の明るい52席(カウンター12)のカフェ・ブラッスリーで、2023年開店、11時から通し営業。お目当ては東京會舘名物のマロンシャンテリー(ふわふわの栗と濃厚なホイップクリーム)や、紅茶と日替わりケーキ(2026年10月は栗)。週末のランチコースは、ニシンの入ったサラダ仕立てのオードブル、豚フィレのマルサラソース、デザートの盛り合わせ。ドリンクは豊富でノンアルコールも多く、かわいいソーダも。東京會舘らしい行き届いたサービス。混雑時は2時間制。',
  });
}

// ================================================================ LOBOS 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13093476/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30'];
  const d = day(L, ['17:00', '23:00']), fri = day(L, ['17:00', '23:30']), sun = day(L, ['17:00', '22:30']);
  put({
    id: 'tokyo_lobos_ginza4', name: 'LOBOS 銀座 (ロボス)', category: 'OMNI',
    lat: 35.670536, lng: 139.766955,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood paella is rice-based, but ajillo comes with baguette; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood paella with shrimp, crab and mussels, shrimp ajillo.',
    hours_raw: 'Mon–Thu and Sat 11:30–14:30 (L.O. 13:00) and 17:00–23:00; Fri to 23:30; Sun and holidays to 22:30 (Tabelog). Cards accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: fri, 5: d, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Mihara-bashi Bldg 1F — 1 min from Higashi-Ginza Stn exit A2, between Mitsukoshi and the Kabuki-za',
    cuisine: 'Spanish bar · seafood paella, shrimp ajillo · five-course lunch about ¥1,000–3,000 · sparkling free-flow courses', cuisine_type: 'other',
    website: 'http://www.crospiration.jp/lobos_ginza/', gmaps: gm('LOBOS 銀座 銀座4-9-6'), menu_url: null,
    notes: "[Spanish · back-street bar near Higashi-Ginza] A red-themed, 54-seat Spanish bar down a back alley between Ginza Mitsukoshi and the Kabuki-za. It has cushioned sofa nooks and loft-style private rooms for two to eight, though the ceiling is low. Lunch courses (five dishes, about ¥1,000–3,000) are reservation-heavy and fully booked at peak. The draw is the seafood paella, heaped with large shrimp, crab and mussels and finished with lemon, plus a hot shrimp ajillo with baguette and a balsamic salad. Dinner adds a sparkling-wine free-flow course, and there are plenty of non-alcoholic drinks. Staff are quick and kind.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 4-chōme; opening date not given', background: 'Group-run (crospiration.jp).', philosophy: null, specialty: 'Seafood paella.',
      anecdotes: [
        { text: '"This luxurious paella was topped with large shrimp, crab, and mussels. The seafood flavors infused the rice." — October 2026.', source: R + 'B537556833/' },
        { text: '"It seemed fully booked during lunch just for reservations." — October 2026.', source: R + 'B537568817/' },
      ],
      japanese_sources_summary: '食べログ: LOBOS 銀座(ロボス)、銀座4-9-6 三原橋ビル1F、東銀座駅A2出口から徒歩1分、54席、個室(2〜8名)、月〜木・土11:30〜14:30・17:00〜23:00、金は23:30まで、日祝は22:30まで、カード可、運営サイト crospiration.jp。店の紹介: 銀座三越と歌舞伎座の間の路地裏、赤を基調にした店内、クッションのソファ席とロフトの個室、スパークリング飲み放題のコース。2026年10月の口コミ: 5品のランチコース、ランチは予約で満席、エビ・カニ・ムール貝の魚介のパエリアにレモン、海老のアヒージョとバゲット、バルサミコのサラダ、ノンアルコールも豊富、天井が低い、スタッフが親切で手際がよい。',
      confidence: 'medium', sources: [TB, R + 'B537556833/', R + 'B537568817/', R + 'B537256007/', R + 'B537883989/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch ahead; lively at night.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-9-6 三原橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目9番6号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537556833/', R + 'B537256007/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–3,000 at lunch.', last_checked: TODAY, items: [
      it('魚介のパエリア', 'gyokai no paeria', 'Seafood paella with large shrimp, crab and mussels', '', 'Paella', 'ask', 'no', '', 'paella'),
      it('海老のアヒージョ', 'ebi no ahiijo', 'Shrimp ajillo with baguette', '', 'Tapas', 'no', 'no', '', 'shrimp_ajillo'),
      it('ランチコース(5品)', '', 'Five-course lunch', '', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
    ] }, {
    cuisine: 'スペインバル・魚介のパエリア、海老のアヒージョ・5品のランチコース1,000〜3,000円ほど・スパークリング飲み放題のコース',
    neighborhood: '銀座四丁目、三原橋ビル1F。東銀座駅A2出口から徒歩1分、銀座三越と歌舞伎座の間',
    gf_detail: '要確認。魚介のパエリアは米ですが、アヒージョにはバゲットが付き、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。エビ・カニ・ムール貝の魚介のパエリア、海老のアヒージョ。',
    notes: '[スペイン料理・東銀座の路地裏バル] 銀座三越と歌舞伎座の間の路地裏にある、赤を基調にした54席のスペインバル。クッションのあるソファ席や2〜8名のロフト風の個室がありますが、天井は低め。5品のランチコース(1,000〜3,000円ほど)は予約が多く、ピーク時は満席。名物は大きなエビ、カニ、ムール貝をのせてレモンで仕上げる魚介のパエリアで、バゲット付きの熱々の海老のアヒージョやバルサミコのサラダも。夜はスパークリング飲み放題のコースがあり、ノンアルコールも豊富。スタッフは手際よく親切です。',
  });
}

save();
