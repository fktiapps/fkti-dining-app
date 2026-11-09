// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 78.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl and than.co.jp/brands: none of this batch is a THAN brand.
//   - ヨネムラザストア — retail food shop (Greg 11-07 ruling): a cookie shop with no eat-in
//   - 正起屋 大丸京都店 — department-store takeaway counter; the brand's restaurant is 正起屋 京都ポルタ店 (26037323)
//   - ミニワン 京都大丸店 — chain (DONQ brand)
//   - ヴェンキ 大丸京都店 — chain (Venchi: 135+ shops worldwide, 11 in Japan)
//   + 京やきにく れんぞう 祇園店 Kyo Yakiniku Renzou (yakiniku in a Gion machiya, opened 15 October 2026; 株式会社OCTAGON, a small Nagaokakyo
//     company — a new brand from the original 焼肉れんぞう, which is not in data: a local multi-name group)
//   - 錦わらい 錦本店 — chain (錦わらい: shops across Kyoto and Osaka)
//   + AQUA GARDEN KYOTO (aquarium café in a basement off Sanjo; billed as a Korean aquarium-café concept's first shop in Japan)
//   - とんかつ五彩庵 — chain (a department-store restaurant that a review identifies as an Inaba Wakou tonkatsu chain shop)
//   - ドンク 京都大丸店 — chain (DONQ)
//   - 居酒屋 まんぷく屋 京都河原町店 — chain (まんぷく屋: Kyoto, Umeda, Sannomiya, Kyobashi)
//   - やよい軒 河原町三条店 — chain (やよい軒), as 26011746
//   + 喫茶去 Kissako (Gion café on a fifth floor; Kyoto-vegetable lunch sets, matcha, vegan options)
//   + 串カツバー 祇園 伍えん Gion Goen (kushikatsu dining bar with karaoke after 21:00; opened July 2025)
//   - アンテノール 京都大丸店 — chain (Antenor, 株式会社エーデルワイス: 38 shops)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; 喫茶去 (5F) and 伍えん (1F) share マルトー17ビル, so 伍えん is moved ~3.5 m south to sit 9 m
//   from 喫茶去; each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035005', 'ヨネムラザストア: retail food shop (Greg 11-07 ruling) — the cookie shop of the よねむら restaurant group, selling boxed handmade cookies with no eat-in (leafkyoto); not historic, and no GF or vegan range sourced');
skip('26027871', '正起屋 大丸京都店: department-store takeaway yakitori counter in Daimaru Kyoto B1F (Tabelog; reviews buy skewers to take home); the brand also runs 正起屋 京都ポルタ店 (26037323), which is the place to decide on the brand');
skip('26035323', 'ミニワン 京都大丸店: chain — Mini One is a bakery brand of 株式会社ドンク (DONQ press releases), with shops in Japan, Taiwan and Hong Kong');
skip('26037657', 'ヴェンキ 大丸京都店: chain — Venchi, the Italian chocolatier, with 135+ company shops worldwide and 11 in Japan (fashionsnap, 2022)');
skip('26003343', '錦わらい 錦本店: chain — 錦わらい has shops at Nishiki, Daimaru-kita, Takaragaike, Fushimi-Momoyama and in Osaka (Umeda Chayamachi, Senboku, Kire-Uriwari, Toyonaka) (web listings)');
skip('26044041', 'とんかつ五彩庵: chain — a restaurant on Daimaru Kyoto’s 8F dining floor (opened November 2025) that a November 2025 review identifies as an Inaba Wakou restaurant “among the chain establishments”');
skip('26017947', 'ドンク 京都大丸店: chain — DONQ (株式会社ドンク, Kobe), a national bakery chain with branches abroad');
skip('26040783', '居酒屋 まんぷく屋 京都河原町店: chain — まんぷく屋 all-you-can-eat izakaya shops in Kyoto Kawaramachi, Umeda, Sannomiya and Kyobashi (Gurunavi)');
skip('26002611', 'やよい軒 河原町三条店: chain — やよい軒, the national set-meal chain; same ruling as 26011746');
skip('26013231', 'アンテノール 京都大丸店: chain — Antenor (株式会社エーデルワイス, Kobe), 38 shops mainly in department stores (company release, 2026)');

// れんぞう 祇園店: drafted by the worker; converted to a skip by the integrator (same-concept shop of a brand in data).
skip('26045607', 'brand already in data: wagyu yakiniku of the 蓮蔵 brand (kyoto_yakiniku_renzou_sakaimachi); an October 2026 review calls it a new brand from Yakiniku Renzou, with identical hours; operator 株式会社OCTAGON (Nagaokakyo) — same-concept second shop, as with 山福 はなれ');

// ================================================================ AQUA GARDEN KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040879/'; const R = TB + 'dtlrvwlst/';
  const HM = 'https://hamoni.jp/en/shop/rRVJ1g5moC568YFAXf33';
  const H = day(['08:30', '21:00']);
  put({
    id: 'kyoto_aqua_garden_sanjo', name: 'AQUA GARDEN KYOTO', category: 'OMNI',
    lat: 35.00856161786924, lng: 135.76599247039402, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pancakes, waffles, churros and cakes with coffee and lattes; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and juices; the sweets use dairy and egg (reviews).',
    hours_raw: '08:30–21:00 daily (Tabelog; hamoni lists 10:30–22:00). One drink per person; order and pay at the register at the back first (March 2026). Cards, e-money and PayPay (Tabelog). 34 seats, each facing an aquarium; mirrored walls; humid, with a slight fish smell noted once; service can be slow with one staff member (Tabelog; 2026 reviews). A basement on Bengeishi-cho at Sanjo-Gokomachi, near Kyoto City Hall station (hamoni; March 2026). Opened 17 February 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Gokomachi, near Kyoto City Hall',
    cuisine: 'Aquarium art café, billed as a Korean concept’s first shop in Japan (hamoni) · fluffy whipped latte and churros set; pancakes; waffles; cakes (2026) · coffee ¥950; banana juice ¥950 (March and June 2026) · seasonal matcha pancakes ¥1,680 and chestnut latte (hamoni)',
    website: null, gmaps: gm('AQUA GARDEN KYOTO'), menu_url: TB,
    notes: "[Café · Sanjo-Gokomachi basement, aquarium café] A basement café where every seat faces a lit aquarium of small, colourful fish — very Instagram-friendly. Lattes, pancakes and waffles, with prices on the high side (coffee ¥950); one drink per person, pay first. Open daily.",
    chef_bio: { chef_name: null, roles: ['Staff not named'], origin: null,
      background: 'Opened in February 2024 (Tabelog); billed as the first Japanese shop of a Korean aquarium art café concept (hamoni). Reviewers (2026) describe a mirrored basement room lined with well-kept tanks.',
      philosophy: null,
      specialty: 'Lattes and pancakes among aquariums.',
      anecdotes: [
        { text: 'A March 2026 visitor paid at the back register first, then had a whipped latte with three churros.', source: R + 'B524680893/' },
        { text: 'A March 2026 guest waited 32 minutes for a coffee while the lone staff member chatted.', source: R + 'B525361202/' },
        { text: 'A May 2026 breakfast of pancakes came with fish swimming at eye level.', source: R + 'B527460239/' },
      ],
      japanese_sources_summary: '食べログ: AQUA GARDEN KYOTO、カフェ・スイーツ・ピザ、京都市中京区弁慶石町45 B1F、毎日 8:30〜21:00、カード・電子マネー・PayPay可、34席、2024年2月17日オープン。hamoni: グランレブリー三条御幸町B1、韓国発のアクアリウムアートカフェで日本初上陸、各席の前に水槽、10:30〜22:00、34席、秋限定の抹茶パンケーキ1,680円と栗ラテ。口コミ (2026年、英語): ワンドリンク制、奥のレジで先に会計、ふわふわホイップラテとチュロスのセット、コーヒー950円、バナナジュース950円、ワッフル、パンケーキ、鏡張りの壁、水槽の手入れが行き届く、湿度が高い、においが気になるという声、スタッフ1人で提供が遅いことも。',
      confidence: 'low', sources: [TB, HM, R + 'B524680893/', R + 'B525024865/', R + 'B525361202/', R + 'B526812962/', R + 'B527460239/', R + 'B530825185/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order and pay at the register; one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区弁慶石町45 グランレブリー三条御幸町 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and hamoni listings; reviews dated March–June 2026.' },
    pin_source: `Tabelog ${TB} (35.008562, 135.765992); cross-checked: GSI 京都府京都市中京区弁慶石町45番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525361202/', R + 'B530825185/', HM],
    price_note: 'Prices from 2026 reviews and hamoni.', last_checked: TODAY, items: [
      it('', '', 'Coffee', '¥950', 'Drinks', 'gf', 'vegan', 'March 2026.', 'coffee'),
      it('', '', 'Banana juice', '¥950', 'Drinks', 'ask', 'ask', 'June 2026.', 'banana'),
      it('', '', 'Matcha pancakes (seasonal)', '¥1,680', 'Sweets', 'no', 'no', 'Autumn (hamoni).', 'pancakes'),
    ] }, {
    cuisine: '韓国発のアクアリウムアートカフェの日本1号店とされる店 (hamoni)・ふわふわホイップラテとチュロスのセット、パンケーキ、ワッフル、ケーキ (2026年)・コーヒー950円、バナナジュース950円 (2026年3月、6月)・季節の抹茶パンケーキ1,680円と栗ラテ (hamoni)',
    neighborhood: '三条御幸町、京都市役所の近く',
    gf_detail: '要確認。パンケーキ、ワッフル、チュロス、ケーキ、コーヒーとラテ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。コーヒーとジュース。スイーツは乳製品と卵を使う (口コミ)。',
    notes: '[カフェ・三条御幸町の地下、アクアリウムカフェ] どの席の前にも小さな色とりどりの魚の水槽が光る地下のカフェ。ラテ、パンケーキ、ワッフルを (コーヒー950円)。ワンドリンク制で先に会計、無休。',
  });
}

// ================================================================ 喫茶去
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044227/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '20:30']);
  put({
    id: 'kyoto_kissako_gion_maruto17', name: '喫茶去 (Kissako)', category: 'OMNI',
    lat: 35.00445856792863, lng: 135.77580063875973, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-ball and Western lunch sets, dango and smoothies; no gluten information is published (reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: reviewers call it a vegan café with plenty of vegan and vegetarian choices, such as a Kyoto-vegetable and sweet-miso smoothie (May and August 2026); not every set is vegan — the rice-ball set comes with oden — so ask which dishes are.',
    hours_raw: '11:30–20:30 (last order 20:00); closed Tuesday (Tabelog). Reservations taken (December 2025). Cards (incl. UnionPay) and e-money accepted (Tabelog). 24 seats with sofas; non-smoking (Tabelog; 2025–2026 reviews). English menu (August 2026). Fifth floor of the Maruto 17 building on Gion-machi Kitagawa, a former members-only club (Tabelog; April 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo near Yasaka Shrine',
    cuisine: 'Quiet fifth-floor café with lunch sets and Kyoto-vegetable dishes (2025–2026 reviews) · rice-ball set of Kyoto rice with miso soup, oden and salad; drinks half price with lunch (December 2025) · Western set meal (April 2026) · seasonal Kyoto-vegetable and sweet-miso green smoothie (May 2026) · sweets set of matcha whisked in front of you with anko and mitarashi dango ¥700 (August 2026)',
    website: null, gmaps: gm('喫茶去 祇園 マルトー17ビル'), menu_url: TB,
    notes: "[Café · Gion north, a fifth-floor hideaway] A calm sofa-lined café on the fifth floor of a Gion designer building, once a members' club: Kyoto-rice onigiri sets, a sweet-miso and Kyoto-vegetable smoothie, and a ¥700 matcha-and-dango set. Vegan options and an English menu; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner and manager not named'], origin: null,
      background: 'Reviewers (2025–2026) describe a hideaway café in a former members-only club, a personable manager and warm owner, and a menu supervised by a food coordinator with Kyoto vegetables and sweet miso.',
      philosophy: null,
      specialty: 'Kyoto-vegetable lunch sets; matcha and dango.',
      anecdotes: [
        { text: 'A December 2025 lunch for two had the whole room to choose from and took the sofa at the back.', source: R + 'B519313153/' },
        { text: 'A May 2026 visitor found the sweet-miso green smoothie had none of the usual vegetable bitterness.', source: R + 'B529929147/' },
        { text: 'An August 2026 guest watched the matcha whisked at the table for a ¥700 sweets set.', source: R + 'B537720290/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶去、喫茶店、京都市東山区祇園町北側340 マルトー17ビル5F、月・水〜日・祝日 11:30〜20:30 (L.O.20:00)、火曜定休、カード (銀聯も)・電子マネー可、24席、禁煙。口コミ (2025〜2026年、英語): 予約可、ソファ席、京都産のお米のおにぎりセット (味噌汁、おでん、サラダ)、ランチと一緒なら飲み物半額、洋食のセット、もとは会員制クラブ、季節の京野菜と甘味噌のグリーンスムージー、フードコーディネーター監修、ヴィーガンのカフェ、ヴィーガンとベジタリアンの選択肢が多い、目の前で点てる抹茶とあんこ・みたらしの団子のスイーツセット700円、英語メニュー、気さくなマネージャーと店主。',
      confidence: 'low', sources: [TB, R + 'B519313153/', R + 'B527342287/', R + 'B528558041/', R + 'B529929147/', R + 'B537720290/'] },
    cultural_comfort: { level: 'english', note: 'English menu (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側340 マルトー17ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004459, 135.775801); cross-checked: GSI 京都府京都市東山区祇園町北側340番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537720290/'],
    price_note: 'Price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sweets set: matcha with anko and mitarashi dango', '¥700', 'Sweets', 'ask', 'ask', 'August 2026.', 'matcha_dango'),
      it('', '', 'Kyoto-vegetable and sweet-miso green smoothie', '', 'Drinks', 'ask', 'ask', 'Seasonal.', 'smoothie'),
      it('', '', 'Rice-ball lunch set (miso soup, oden, salad)', '', 'Lunch', 'ask', 'no', 'Oden in dashi.', 'onigiri_set'),
    ] }, {
    cuisine: 'ランチセットと京野菜の料理の静かな5階のカフェ (2025〜2026年の口コミ)・京都産のお米のおにぎりセット (味噌汁、おでん、サラダ)、ランチと一緒なら飲み物半額 (2025年12月)・洋食のセット (2026年4月)・季節の京野菜と甘味噌のグリーンスムージー (2026年5月)・目の前で点てる抹茶とあんこ・みたらしの団子のスイーツセット700円 (2026年8月)',
    neighborhood: '祇園、四条の北、八坂神社の近く',
    gf_detail: '要確認。おにぎりや洋食のランチセット、団子、スムージー。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガンの選択肢あり。口コミでヴィーガンのカフェ、ヴィーガンとベジタリアンの選択肢が多いとされ、京野菜と甘味噌のスムージーなど (2026年5月、8月)。おにぎりのセットにはおでんが付くので、どれがヴィーガンか確認を。',
    notes: '[カフェ・祇園の四条北、5階の隠れ家] 元会員制クラブだった祇園のデザイナーズビル5階のソファの落ち着いたカフェ。京都のお米のおにぎりセット、甘味噌と京野菜のスムージー、700円の抹茶と団子のセット。ヴィーガンの選択肢と英語メニューあり、火曜休み。',
  });
}

// ================================================================ 串カツバー 祇園 伍えん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043531/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.giongoen.com/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_kushikatsu_bar_gion_goen', name: '串カツバー 祇園 伍えん (Gion Goen)', category: 'OMNI',
    lat: 35.004380, lng: 135.775832, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the house speciality is breaded, deep-fried kushikatsu, alongside pasta and curry udon (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers, steak and dashi dishes (official site; reviews).',
    hours_raw: '18:00–03:00 Tuesday–Saturday; closed Sunday and Monday (official site; Tabelog). Karaoke from 21:00 at no extra charge; 18:00–21:00 is quiet for dinner (official site; September 2025). Reservations online and by phone (official site). Cards (incl. UnionPay); no e-money; no table charge (Tabelog). 15 seats at an all-white counter; smoking allowed (Tabelog). Ground floor of the Maruto 17 building on Gion-machi Kitagawa, about 3 minutes from Yasaka Shrine (official site). Opened July 2025 (October 2025 review).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Yasaka Shrine',
    cuisine: 'Japanese-Western dining bar from a chef long trained in washoku: 30 kinds of kushikatsu among 70+ dishes, and pasta (official site) · assorted kushikatsu (5) ¥800; mentaiko dashimaki ¥800; agedashi tofu or mochi ¥600; hamburg steak with demi-glace ¥1,500; diced beef steak ¥3,500; pudding à la mode ¥900 (August 2025) · wagyu sasabara tataki, squid-leg tempura, shrimp tomato-cream pasta (October 2025) · kushikatsu course in a stop system, or skewers one at a time, including baumkuchen and pickled ginger (January 2026)',
    website: SITE, gmaps: gm('串カツバー 祇園 伍えん'), menu_url: SITE,
    notes: "[Kushikatsu bar · Gion north, karaoke after 9 pm] A sleek white counter bar off the Yasaka end of Gion: crisp kushikatsu (five for ¥800), a soft, fluffy mentaiko dashimaki and washoku-meets-Western plates, then free karaoke from 9 pm until 3 am. Smoking allowed; closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named'], origin: null,
      background: 'Opened in July 2025 (October 2025 review). The official site describes a Japanese-Western dining bar by a cook with long training in Japanese cuisine; reviewers (2025) say the chef has grilled over 20,000 eggs. A 70 cm natural rock crystal stands in the room (official site).',
      philosophy: 'An adults’ hideaway where people and connections meet — the 伍 of the name is “person” and “five” (official site).',
      specialty: 'Kushikatsu; dashimaki.',
      anecdotes: [
        { text: 'An October 2025 diner found the wagyu sasabara tataki the most tender dish of the night.', source: R + 'B516355832/' },
        { text: 'A January 2026 kushikatsu course included baumkuchen and pickled ginger skewers.', source: R + 'B521596078/' },
        { text: 'A July 2026 solo guest had edamame, yam with quail yolk and five skewers with a bottle of Classic Lager.', source: R + 'B531528119/' },
      ],
      japanese_sources_summary: '公式サイト: 伍えん (GION GOEN)、ご縁が繋がる大人の隠れ家、「伍」は人と五で人が交わる・人が集まる、お酒と料理と音を楽しむダイニングバー、長年和食で研鑽を積んだ料理人の和と洋の融合、店主のおすすめは串カツとパスタ、カラオケは21時から、18時〜21時はカラオケなしで食事を、直径70cmの天然水晶、京都市東山区祇園町北側340 マルトー17ビル1F、祇園四条駅から徒歩6分、八坂神社から徒歩3分、18:00〜翌3:00、日曜・月曜定休。食べログ: 串カツバー 祇園 伍えん、ダイニングバー、カード (銀聯も)、電子マネー不可、チャージ料なし、15席 (カウンター6席、対面カウンター9席)、喫煙可、70品以上、串カツ30種。口コミ (2025〜2026年、英語): 2025年7月開業、串カツ盛り合わせ5種800円、明太だし巻き800円、揚げだし豆腐・揚げだし餅600円、デミグラスのハンバーグ1,500円、サイコロステーキ3,500円、プリン・ア・ラ・モード900円、和牛ささばらのたたき、イカゲソの天ぷら、海老のトマトクリームパスタ、串カツのコースはストップ制で1本から注文も可、バウムクーヘンや紅しょうがの串、21時からカラオケ (無料)、2万個の卵を焼いた料理人のだし巻き。',
      confidence: 'medium', sources: [SITE, TB, R + 'B512694694/', R + 'B512950862/', R + 'B513587139/', R + 'B516355832/', R + 'B521596078/', R + 'B531528119/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter bar; karaoke from 21:00; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側340 マルトー17ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004412, 135.775832), offset ~3.5m south to sit 9m from 喫茶去 (kyoto_kissako_gion_maruto17, 5F of the same building, this batch); cross-checked: GSI 京都府京都市東山区祇園町北側340番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512694694/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted kushikatsu, 5 kinds', '¥800', 'Kushikatsu', 'no', 'no', '', 'kushi5'),
      it('', '', 'Mentaiko dashimaki', '¥800', 'Small plates', 'ask', 'no', '', 'dashimaki'),
      it('', '', 'Agedashi tofu', '¥600', 'Small plates', 'ask', 'no', '', 'agedashi'),
      it('', '', 'Hamburg steak with demi-glace', '¥1,500', 'Meat', 'no', 'no', '', 'hamburg'),
      it('', '', 'Diced beef steak', '¥3,500', 'Meat', 'ask', 'no', '', 'dice_steak'),
    ] }, {
    cuisine: '長年和食で研鑽を積んだ料理人の和洋のダイニングバー。70品以上のうち串カツが30種、パスタも (公式サイト)・串カツ盛り合わせ5種800円、明太だし巻き800円、揚げだし豆腐・揚げだし餅600円、デミグラスのハンバーグ1,500円、サイコロステーキ3,500円、プリン・ア・ラ・モード900円 (2025年8月)・和牛ささばらのたたき、イカゲソの天ぷら、海老のトマトクリームパスタ (2025年10月)・ストップ制の串カツのコース、1本からの注文も、バウムクーヘンや紅しょうがの串 (2026年1月)',
    neighborhood: '祇園、四条の北、八坂神社の近く',
    gf_detail: 'グルテンフリー不可。名物は衣をつけて揚げる串カツ、ほかにパスタやカレーうどん (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介の串、ステーキ、出汁の料理 (公式サイト、口コミ)。',
    notes: '[串カツバー・祇園の四条北、21時からカラオケ] 八坂神社寄りの祇園の白いカウンターのバー。サクサクの串カツ (5本800円)、ふわふわの明太だし巻き、和洋の一品、21時からは深夜3時まで無料のカラオケ。喫煙可、日・月休み。',
  });
}

save();
