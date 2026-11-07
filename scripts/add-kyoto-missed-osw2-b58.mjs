// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 58.
//   Queue run from the osw2 worktree, 2026-11-07. Core and notable are done; rest tier, nearest-first
//   (queue.mjs kyoto-missed next rest 2000, lane ids sorted by distance). Rest rule: at least one 2025–26 review and enough sourced detail.
//   + 焼肉まる富 四条河原町店 Yakiniku Marutomi (yakiniku on the 8th floor of Kyoto Kawaramachi Garden, run by a butcher founded in 1953)
//   - サーティワンアイスクリーム 四条河原町店 — chain
//   + Steak House BUONAGIO (Kobe-beef teppanyaki at GOOD NATURE STATION 2F; moved from Dotonbori)
//   - スイーツパラダイス 京都河原町OPA店 — chain
//   - 肉の匠 悠々庵 — thin (4 reviews)
//   + 喫茶 ジラフ Kissa Giraffe (retro coffee shop on a 2nd floor off Shijo Kawaramachi; since 2020)
//   - 牛たんの檸檬 京都店 — chain
//   + 居酒屋 静 Izakaya Shizuka (Taisho-era izakaya on Yanagikoji, known for dashimaki and graffiti-covered walls)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: BUONAGIO's official site says a service charge is added (amount not stated) and Tabelog adds 10% from 31 Dec to 3 Jan;
//   Marutomi's Tabelog field is contradictory (English note 10%, Japanese original "none") — both stated as such in the records.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; Shizuka offset ~8 m off the Tabelog point to clear 酒呑にし川 柳小路店 (4 m) and kyoto_osake_to_gohan_to_taka (11 m), now 9 m+ from every pin;
//   re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018175', 'サーティワンアイスクリーム 四条河原町店: a national chain (B-R Thirty One Ice Cream) — nine サーティワン shops in our Kyoto crawls');
skip('26042595', 'スイーツパラダイス 京都河原町OPA店: a chain — run by 井上商事 (Osaka); its press releases give 26–35 shops nationwide');
skip('26035677', '肉の匠 悠々庵: thin — only 4 Tabelog reviews (one from May 2026) and no menu or prices on Tabelog; the official page is a sub-page of 鉄板ダイニング L’ajitto (lajitto.com/yuyuan). Not drafted');
skip('26044875', '牛たんの檸檬 京都店: a chain — a PR TIMES release (July 2026) calls the Akihabara shop the brand’s 8th in Japan and abroad (Shinjuku, Osaka, Asakusa, Yurakucho, Taipei, Shibuya, Kyoto, Akihabara), run by 株式会社牛たんの檸檬 (Kanazawa); the Kyoto shop’s invoice holder is Wa Table株式会社 (Osaka). Opened April 2026');

// ================================================================ 焼肉まる富 四条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029233/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakinikumarutomi.com/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_marutomi_shijo', name: '焼肉まる富 四条河原町店 (Yakiniku Marutomi)', category: 'OMNI',
    lat: 35.00358260183613, lng: 135.76983103460657, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with sauces, salt and wasabi; Korean cold noodles and bibimbap also on the menu; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant. Grilled vegetables are on the menu (official site).',
    hours_raw: 'Lunch 11:00–14:30 (last order 13:45); dinner 17:00–22:00 (food last order 21:00, drinks 21:30); open every day (official site; Tabelog). Reservations taken, 2-hour seating limit; courses from 2 people, book the day before (Tabelog; official site). Cards and PayPay accepted (Tabelog). Service charge: Tabelog’s English note says 10%, but its Japanese original says none — ask. 34 seats: counter, tables, sofa seats and a tatami room by the window overlooking Shijo Kawaramachi; non-smoking; English menu (Tabelog; official site). Lunch rice refills free (official site; 2026 reviews). On the 8th floor of Kyoto Kawaramachi Garden, 1 min from Kyoto Kawaramachi Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Kawaramachi, Kyoto Kawaramachi Garden 8F — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Yakiniku from a butcher founded in 1953 that buys whole carcasses — Kumamoto akaushi, kuroge wagyu, Saga and Shikoku Saburo beef, hand-cut (official site) · Marutomi assorted platter ¥6,400; thin-sliced tongue ¥1,650; premium loin ¥1,750, kalbi ¥1,700, skirt ¥1,800; filet steak 150g ¥5,000; horumon from ¥900 (Tabelog, August 2026) · "meat cake" for birthdays ¥4,800 and the nine-cut "Tamatebako" course (Tabelog) · lunch sets with salad, soup and rice refills, from ¥1,300 to the ¥3,500 special wagyu lunch (official site; 2026 reviews)',
    website: SITE, gmaps: gm('焼肉まる富 四条河原町店'), menu_url: SITE + 'sub/dinner/',
    notes: "[Yakiniku · Shijo Kawaramachi, butcher-run, 8th-floor view] A yakiniku room high above the Shijo Kawaramachi crossing, run by a Kyoto butcher that has bought whole cattle since 1953 — Kumamoto akaushi and kuroge wagyu, cut by hand. Window tatami seats look over the city at night. Lunch sets from ¥1,300 with free rice refills; a \"meat cake\" for birthdays. Open daily.",
    chef_bio: { chef_name: null, roles: ['Owner not named', 'Head chef not named'], origin: null,
      background: 'The official site says Marutomi began as a butcher, founded in 1953, that buys whole carcasses of Saga, Miyazaki and Shikoku Saburo beef; the owner goes to select each animal, and the head chef trained at top hotels and bars. The restaurant opened in July 2017 (Tabelog). An October 2026 reviewer adds that the butcher has one shop in Kyoto and one in Shiga.',
      philosophy: 'Whole-carcass buying lets high-grade meat be served for less; cuts are hand-sliced to suit each piece (official site).',
      specialty: 'Kumamoto akaushi and kuroge wagyu yakiniku; rare cuts such as hiuchi.',
      anecdotes: [
        { text: 'A July 2026 regular surprised a friend with the meat cake for a coming-of-age celebration.', source: R + 'B499366292/' },
        { text: 'A June 2026 guest treated a parent to the Tamatebako course for a retirement celebration.', source: R + 'B530659550/' },
        { text: 'An April 2026 diner found the cuts good with salt and wasabi as well as the sauces, and liked the window seats over the night view.', source: R + 'B526320384/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉まる富、京都市下京区四条通河原町東入真町68 京都河原町ガーデン8F、阪急河原町駅から徒歩1分、祇園四条駅から徒歩3分、昼11:00〜14:30 (L.O.13:45)、夜17:00〜22:00 (フードL.O.21:00、ドリンクL.O.21:30)、年中無休。創業 (昭和28年) 以来一頭買いにこだわる精肉店から始まった焼肉店、佐賀牛・宮崎牛・四国三郎牛、オーナー自ら買い付け、手切り、一流ホテル・BARで修行を積んだ料理長、四条河原町を眺望できるお座敷席。メニュー: おすすめ盛り合わせ、厳選牛フィレステーキ、上ロース、上カルビ、上ハラミ、牛タン、褐毛和牛 熊本あか牛、ホルモン、トントロ、肉ケーキ、9種の肉玉手箱コース、ランチ (厳選牛焼肉定食1,300円ほか)。食べログ: 2017年7月12日オープン、34席、カード・PayPay可、禁煙、英語メニュー、2時間制、料金は2026年8月更新。口コミ (2026年、英語): 京都の老舗精肉店まる富の焼肉店、京都と滋賀に精肉店、特選和牛焼肉ランチ3,500円、ご飯おかわり可、夜景の見える窓際の席。',
      confidence: 'medium', sources: [SITE, SITE + 'sub/kodawari-2/', SITE + 'sub/dinner/', SITE + 'sub/lunch/', SITE + 'sub/about/', TB, TB + 'dtlmenu/', R + 'B499366292/', R + 'B505189727/', R + 'B526320384/', R + 'B530659550/', R + 'B534590271/', R + 'B535833405/', R + 'B537892389/'] },
    cultural_comfort: { level: 'english', note: 'English menu; cards accepted; reservations online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通河原町東入真町68 京都河原町ガーデン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog official listing (menu updated August 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003583, 135.769831); cross-checked: GSI 京都府京都市下京区真町68番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', SITE + 'sub/dinner/', SITE + 'sub/lunch/', R + 'B537892389/'],
    price_note: 'Dinner prices from the Tabelog menu (updated August 2026, tax included); Japanese names from the official site, whose older prices are lower. Lunch prices from the official site and 2026 reviews.', last_checked: TODAY, items: [
      it('焼肉まる富おすすめ盛り合わせ', '', 'Marutomi assorted platter (popular cuts)', '¥6,400', 'Dinner', 'ask', 'no', '', 'moriawase'),
      it('厳選牛フィレステーキ', '', 'Select beef filet steak, 150g', '¥5,000', 'Dinner', 'ask', 'no', '', 'filet'),
      it('薄切り牛タン', '', 'Thin-sliced beef tongue', '¥1,650', 'Dinner', 'ask', 'no', '', 'tan_thin'),
      it('牛タン3種盛り合せ', '', 'Beef tongue, three kinds', '¥4,200', 'Dinner', 'ask', 'no', '', 'tan_three'),
      it('上ロース', '', 'Premium loin', '¥1,750', 'Dinner', 'ask', 'no', '', 'jo_rosu'),
      it('上カルビ', '', 'Premium kalbi', '¥1,700', 'Dinner', 'ask', 'no', '', 'jo_karubi'),
      it('上ハラミ', '', 'Premium skirt', '¥1,800', 'Dinner', 'ask', 'no', '', 'jo_harami'),
      it('上赤身', '', 'Premium lean beef', '¥1,400', 'Dinner', 'ask', 'no', '', 'jo_akami'),
      it('ホルモン（小腸）', '', 'Horumon (small intestine)', '¥900', 'Dinner', 'ask', 'no', '', 'horumon'),
      it('上ミノ', '', 'Premium rumen tripe', '¥950', 'Dinner', 'ask', 'no', '', 'mino'),
      it('トントロ', '', 'Pork jowl (whole-pig aged pork)', '¥850', 'Dinner', 'ask', 'no', '', 'tontoro'),
      it('焼野菜盛合せ', '', 'Grilled vegetable platter', '¥650', 'Dinner', 'ask', 'ask', '', 'yasai'),
      it('肉ケーキ', '', 'Meat cake (birthdays and anniversaries)', '¥4,800', 'Dinner', 'ask', 'no', 'Book ahead.', 'niku_cake'),
      it('厳選牛焼肉定食（数量限定）', '', 'Select beef yakiniku set (limited)', '¥1,300', 'Lunch', 'ask', 'no', 'With soup and salad; rice refills.', 'lunch_teishoku'),
      it('特選和牛 焼肉ランチ', '', 'Special wagyu yakiniku lunch (akaushi and kuroge wagyu)', '¥3,500', 'Lunch', 'ask', 'no', 'August and October 2026 reviews.', 'lunch_tokusen'),
    ] }, {
    cuisine: '1953年創業、一頭買いの精肉店の焼肉: 熊本あか牛、黒毛和牛、佐賀牛、四国三郎牛、手切り (公式サイト)・おすすめ盛り合わせ6,400円、薄切り牛タン1,650円、上ロース1,750円、上カルビ1,700円、上ハラミ1,800円、厳選牛フィレステーキ150g 5,000円、ホルモン900円から (食べログ、2026年8月)・誕生日の「肉ケーキ」4,800円、9種の肉玉手箱コース (食べログ)・サラダ、スープ、ご飯おかわり付きのランチ、1,300円から特選和牛焼肉ランチ3,500円まで (公式サイト、2026年の口コミ)',
    neighborhood: '四条河原町、京都河原町ガーデン8F。京都河原町駅から徒歩1分',
    gf_detail: '要確認。タレ、塩、わさびで食べる焼肉。韓国冷麺、ビビンバもある。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉店。焼野菜はある (公式サイト)。',
    notes: '[焼肉・四条河原町、精肉店直営、8階の眺め] 四条河原町の交差点を見下ろす焼肉店。1953年から一頭買いを続ける京都の精肉店が営み、熊本あか牛や黒毛和牛を手切りで。窓際の座敷から夜景。ランチは1,300円から、ご飯おかわり自由。誕生日には「肉ケーキ」。年中無休。',
  });
}

// ================================================================ Steak House BUONAGIO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035161/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.buonagio-kyoto.com/';
  const L = ['11:30', '16:00'], D = ['17:30', '23:00'];
  const LD = day(L, D), DO = day(D);
  put({
    id: 'kyoto_buonagio', name: 'Steak House BUONAGIO (ステーキハウス ブォナージョ)', category: 'OMNI',
    lat: 35.00253913787393, lng: 135.7687168003313, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled steak and seafood, garlic rice, teppan curry, bread and desserts. The shop’s Tabelog profile ticks "gluten-free options" without detail (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak and seafood teppanyaki house. The Tabelog profile ticks "vegetarian options" without detail — ask (Tabelog).',
    hours_raw: 'Lunch 11:30–16:00 (last entry 14:30) Friday–Monday and holidays; dinner 17:30–23:00 (last entry 21:00) daily except Wednesday; closed Wednesday (Tabelog). Reservations taken (Tabelog; official site). Cards, PayPay, Alipay and WeChat Pay accepted (Tabelog). A service charge is added (official site); 10% extra from 31 Dec to 3 Jan (Tabelog). 20 seats: 10 at the teppan counter, 5 tables for two; non-smoking; wheelchair accessible; English, Chinese and Korean menus (Tabelog). Preschool children may be declined; under-10s seated at tables (official site). On the 2nd floor of GOOD NATURE STATION, next to Takashimaya, 2 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: LD, 1: DO, 3: DO, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Kawaramachi, GOOD NATURE STATION 2F — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Teppanyaki steak house, "Buono" (delicious) plus "Agio" (ease) (official site) · Kobe beef sirloin ¥8,800 and filet ¥15,400 per 50g; kuroge wagyu sirloin ¥5,500, filet ¥6,600 per 50g; live abalone ¥4,370, lobster ¥4,810, garlic shrimp ¥2,800; garlic rice, teppan curry or shiso pilaf ¥1,760 (Tabelog, June 2026) · lunch wagyu loin steak set from ¥3,980; kuroge wagyu steak sets from ¥13,860 (official site) · flambé at the counter; rare wines by the glass from a preserving machine (official site)',
    website: SITE, gmaps: gm('Steak House BUONAGIO 京都'), menu_url: SITE + 'menu/',
    notes: "[Teppanyaki · Shijo Kawaramachi, Kobe beef at a relaxed counter] A small teppan steak house, formerly on Dotonbori in Osaka, now on the 2nd floor of GOOD NATURE STATION by Takashimaya. Kobe beef and kuroge wagyu are grilled and flambéed across the counter, with live abalone and lobster. Lunch sets from about ¥4,000; rare wines by the glass. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named'], origin: null,
      background: 'The official site describes a teppanyaki steak house that came from Dotonbori in Osaka, keeping its easy-going service, with the owner chatting across the teppan. Run by 株式会社ブォナージョ, registered in Sakai, Osaka (National Tax Agency invoice register T4120001210581).',
      philosophy: 'Teppanyaki "without the stiffness": no set pairings — each guest finds a match among rare wines kept fresh by a tasting machine (official site).',
      specialty: 'Kobe beef sirloin and filet steaks on the teppan.',
      anecdotes: [
        { text: 'An October 2026 regular had the ¥3,980 lunch with a bottle of wine and praised the flambé and the chef’s pacing of each dish.', source: R + 'B538273991/' },
        { text: 'A July 2025 party walked in when the 1st-floor restaurant was full and found the owner very kind.', source: R + 'B511907553/' },
        { text: 'An April 2026 shopper sized the wagyu loin lunch up to 120g and ate it with just wasabi.', source: R + 'B526691907/' },
      ],
      japanese_sources_summary: '公式サイト: Steak House BUONAGIO (ブォナージョ)、京都・四条河原町の創作鉄板料理、神戸ビーフ、「Buono (美味しい)」と「Agio (寛ぐ)」、フランベ、道頓堀時代から変わらない気さくな接客、鉄板の向こうの店主と会話、希少なワインをテイスティングマシンでグラス提供、ペアリングはあえて行わない、別途サービス料、未就学児は入店を断る場合あり。メニュー: 神戸牛ステーキセット、黒毛和牛ステーキセット13,860円から、ランチ限定和牛ロースステーキセット3,980円から、活けアワビ、オマール海老、ガーリックシュリンプ、ガーリックライス、鉄板焼カレー、青じそピラフ、龍のたまごのプリン、フレンチトースト。食べログ: GOOD NATURE STATION 2F、京都河原町駅から徒歩2分、ランチ金〜月・祝 11:30〜16:00、ディナー17:30〜23:00、水曜定休、20席、カード・QR可、禁煙、車椅子可、年末年始10%、インボイス T4120001210581 (株式会社ブォナージョ、大阪府堺市)。口コミ (2022〜2026年、英語): 髙島屋の隣、カウンターで目の前で焼く、アワビ、スモークバター、デザート、静かで落ち着いた店内。',
      confidence: 'medium', sources: [SITE, SITE + 'menu/', TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4120001210581', R + 'B453512846/', R + 'B467032157/', R + 'B496343137/', R + 'B499685099/', R + 'B511907553/', R + 'B525679080/', R + 'B526691907/', R + 'B538273991/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2稲荷町318-6 GOOD NATURE STATION 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog official listing (menu updated June 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002539, 135.768717); cross-checked: GSI 京都府京都市下京区稲荷町318番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', SITE + 'menu/'],
    price_note: 'A la carte prices from the Tabelog menu (updated June 2026, tax included); the official site lists these about 10% lower and adds a separate service charge. Set prices from the official site. Japanese names from the official site.', last_checked: TODAY, items: [
      it('神戸牛サーロインステーキ（50g）', '', 'Kobe beef sirloin steak, 50g', '¥8,800', 'A la carte', 'ask', 'no', '', 'kobe_sirloin'),
      it('神戸牛フィレステーキ（50g）', '', 'Kobe beef filet steak, 50g', '¥15,400', 'A la carte', 'ask', 'no', '', 'kobe_filet'),
      it('黒毛和牛サーロインステーキ（50g）', '', 'Kuroge wagyu sirloin steak, 50g', '¥5,500', 'A la carte', 'ask', 'no', '', 'wagyu_sirloin'),
      it('黒毛和牛フィレステーキ（50g）', '', 'Kuroge wagyu filet steak, 50g', '¥6,600', 'A la carte', 'ask', 'no', '', 'wagyu_filet'),
      it('活けアワビ（1枚）', '', 'Live abalone, one', '¥4,370', 'A la carte', 'ask', 'no', '', 'abalone'),
      it('オマール海老（1尾）', '', 'Lobster, one', '¥4,810', 'A la carte', 'ask', 'no', '', 'lobster'),
      it('ガーリックシュリンプ', '', 'Garlic shrimp', '¥2,800', 'A la carte', 'ask', 'no', '', 'garlic_shrimp'),
      it('ガーリックライス', '', 'Garlic rice', '¥1,760', 'A la carte', 'ask', 'ask', '', 'garlic_rice'),
      it('鉄板焼カレー', '', 'Teppan-grilled curry', '¥1,760', 'A la carte', 'ask', 'ask', '', 'teppan_curry'),
      it('青じそピラフ', '', 'Green shiso pilaf', '¥1,760', 'A la carte', 'ask', 'ask', '', 'shiso_pilaf'),
      it('龍のたまごのプリン', '', 'Dragon-egg pudding', '¥1,100', 'Dessert', 'ask', 'no', '', 'pudding'),
      it('和牛ロースステーキセット', '', 'Lunch: wagyu loin steak set, 80g', '¥3,980', 'Lunch', 'ask', 'no', 'Lunch only; larger sizes available.', 'lunch_set'),
      it('黒毛和牛サーロインステーキセット', '', 'Kuroge wagyu sirloin steak set, 120g (salad, soup, rice or bread, dessert, drink)', '¥13,860', 'Sets', 'ask', 'no', '', 'wagyu_set'),
    ] }, {
    cuisine: '鉄板焼のステーキハウス、「Buono (美味しい)」と「Agio (寛ぐ)」 (公式サイト)・神戸牛サーロイン50g 8,800円、フィレ50g 15,400円、黒毛和牛サーロイン50g 5,500円、フィレ50g 6,600円、活けアワビ4,370円、オマール海老4,810円、ガーリックシュリンプ2,800円、ガーリックライス・鉄板焼カレー・青じそピラフ1,760円 (食べログ、2026年6月)・ランチの和牛ロースステーキセット3,980円から、黒毛和牛ステーキセット13,860円から (公式サイト)・カウンターでフランベ、テイスティングマシンで希少なワインをグラスで (公式サイト)',
    neighborhood: '四条河原町、GOOD NATURE STATION 2F。京都河原町駅から徒歩2分',
    gf_detail: '要確認。鉄板焼のステーキと魚介、ガーリックライス、鉄板焼カレー、パン、デザート。食べログの店舗情報に「グルテンフリーメニューあり」の記載があるが詳細はない (食べログ)。',
    vegan_detail: 'ヴィーガン不可。ステーキと魚介の鉄板焼の店。食べログの店舗情報に「ベジタリアンメニューあり」の記載があるが詳細はない、要確認 (食べログ)。',
    notes: '[鉄板焼・四条河原町、肩肘張らないカウンターで神戸牛] 大阪・道頓堀から移ってきた小さな鉄板焼のステーキハウス。髙島屋隣のGOOD NATURE STATION 2階。神戸牛や黒毛和牛をカウンター越しに焼き、フランベ。活けアワビやオマール海老も。ランチは4,000円ほどから、希少なワインをグラスで。水曜休み。',
  });
}

// ================================================================ 喫茶 ジラフ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034855/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_kissa_giraffe', name: '喫茶 ジラフ (Kissa Giraffe)', category: 'OMNI',
    lat: 35.004288537067175, lng: 135.7678601791878, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Napolitan spaghetti, omurice, thick toast and firm custard pudding; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard pudding with cream, omurice, butter toast (reviews).',
    hours_raw: '10:00–20:00 (last order 19:00, last entry 19:00); closed Tuesday; hours may change (Tabelog). No reservations. Cash only — no cards, e-money or QR (Tabelog). One-drink minimum when ordering food (Tabelog; July 2026). Smoking allowed inside (several 2024–2026 reviews). Often full (2026 reviews). On the 2nd floor of the Main Building, northwest of the Shijo Kawaramachi crossing, about 90 m from Kyoto Kawaramachi Stn (Tabelog; February 2024).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo Kawaramachi, northwest of the crossing — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Retro coffee shop opened in September 2020 (Tabelog) · firm, old-style custard pudding ¥600, with whipped cream or a crunchy caramelised top (December 2025; March 2026) · creamy Napolitan spaghetti ¥900 (December 2025; 2026 reviews) · omurice ¥950, milkshake ¥650 (July 2026) · thick an-butter toast with red bean paste (2026) · Wiener coffee ¥650 (August 2026); café au lait, iced coffee, sweet or spicy ginger ale',
    website: null, gmaps: gm('喫茶 ジラフ 中京区'), menu_url: TB,
    notes: "[Kissaten · Shijo Kawaramachi, firm pudding and Napolitan] A retro coffee shop up a flight of stairs just off the Shijo Kawaramachi crossing, opened in 2020 and busy with young regulars. Come for the firm old-style pudding (¥600) and creamy Napolitan (¥900), or thick an-butter toast. Smoking allowed; cash only; one drink each with food. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a second-floor kissaten opened in 2020 with an old-fashioned look and a young crowd; smoking is allowed.',
      philosophy: null,
      specialty: 'Firm custard pudding and Napolitan spaghetti.',
      anecdotes: [
        { text: 'An April 2026 visitor sat at the counter while the owner chatted with regulars, who waved goodbye on leaving.', source: R + 'B527136513/' },
        { text: 'A September 2026 guest called it possibly the best retro pudding ever eaten.', source: R + 'B536099780/' },
        { text: 'An August 2026 first-timer was struck by the thickness of the toast at the next table.', source: R + 'B534913990/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶 ジラフ、喫茶店、京都市中京区中之町583-10 メインビル2F、京都河原町駅から89m、10:00〜20:00 (L.O.19:00)、火曜定休、予約不可、カード・電子マネー・QR不可、フード注文の場合ワンドリンク制、2020年9月27日オープン。口コミ (2024〜2026年、英語): 四条河原町の北西、ビルの2階の隠れ家的な喫茶店、レトロな雰囲気、固めのプリン600円 (ホイップクリーム、カラメリゼ)、ナポリタン900円、オムライス950円、ミルクシェイク650円、あんバタートースト、ウインナーコーヒー650円、カフェオレ、ジンジャーエール (甘口・辛口)、喫煙可、若い客と常連が多い、満席になりがち。',
      confidence: 'low', sources: [TB, R + 'B483736246/', R + 'B525113735/', R + 'B527136513/', R + 'B527861934/', R + 'B528373527/', R + 'B529931025/', R + 'B531807371/', R + 'B531989760/', R + 'B534913990/', R + 'B535431601/', R + 'B535647567/', R + 'B536099780/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed; one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町583-10 メインビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004289, 135.767860); cross-checked: GSI 京都府京都市中京区中之町583番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531989760/', R + 'B534913990/'],
    price_note: 'Prices from December 2025, July 2026 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Custard pudding', '¥600', 'Sweets', 'ask', 'no', 'December 2025.', 'pudding'),
      it('', '', 'Napolitan spaghetti', '¥900', 'Food', 'ask', 'no', 'December 2025.', 'napolitan'),
      it('', '', 'Omurice', '¥950', 'Food', 'ask', 'no', 'July 2026.', 'omurice'),
      it('', '', 'An-butter toast (red bean paste and butter)', '', 'Food', 'no', 'no', '', 'an_butter'),
      it('', '', 'Milkshake', '¥650', 'Drink', 'ask', 'no', 'July 2026.', 'milkshake'),
      it('', '', 'Wiener coffee', '¥650', 'Drink', 'ask', 'no', 'August 2026.', 'wiener'),
    ] }, {
    cuisine: '2020年9月開業のレトロな喫茶店 (食べログ)・昔ながらの固めのプリン600円、ホイップクリームやカラメリゼで (2025年12月、2026年3月)・クリーミーなナポリタン900円 (2025年12月、2026年の口コミ)・オムライス950円、ミルクシェイク650円 (2026年7月)・厚切りのあんバタートースト (2026年)・ウインナーコーヒー650円 (2026年8月)、カフェオレ、アイスコーヒー、甘口・辛口のジンジャーエール',
    neighborhood: '四条河原町、交差点の北西。京都河原町駅から徒歩1分',
    gf_detail: '要確認。ナポリタン、オムライス、厚切りトースト、固めのプリン。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリーム付きのプリン、オムライス、バタートースト (口コミ)。',
    notes: '[喫茶店・四条河原町、固めのプリンとナポリタン] 四条河原町の交差点すぐ、階段を上がった2階のレトロな喫茶店。2020年開業、若い常連でにぎわう。目当ては昔ながらの固めのプリン (600円) とクリーミーなナポリタン (900円)、厚切りのあんバタートースト。喫煙可、現金のみ、フード注文時はワンドリンク制。火曜休み。',
  });
}

// ================================================================ 居酒屋 静
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002275/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_izakaya_shizuka_yanagikoji', name: '居酒屋 静 (Izakaya Shizuka)', category: 'OMNI',
    lat: 35.004623, lng: 135.768216, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashimaki omelette, simmered home-style dishes, tempura, kushikatsu and fried tofu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashimaki, nikujaga, dried fish, shishamo nanban-zuke (reviews). Pickled napa cabbage and okara are on the menu — ask (reviews).',
    hours_raw: '17:30–22:00 Thursday–Sunday; closed Monday–Wednesday; hours may change (Tabelog). Reservations taken; often full (Tabelog; November 2024). Cash only — no cards or e-money (Tabelog). Counter, tables and tatami seating over two floors; walls (even the restroom) covered in guests’ graffiti (2024–2026 reviews). Drinks are simple: bottled beer, sake in small or large flasks, chuhai, lemon highball (2025 reviews). On Yanagikoji alley between Shinkyogoku and Kawaramachi, 3 min from Kawaramachi Stn (Tabelog).',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yanagikoji, off Shinkyogoku near Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Izakaya founded in the early Taisho era (several 2024–2026 reviews) · the famous dashimaki omelette, thick and full of dashi ¥510; nikujaga ¥540; pickled napa cabbage ¥450 (November 2024) · simmered small potatoes ¥500, okara ¥430, sake 180ml ¥350 (February 2025) · dried fish, kushikatsu, tempura, fried tofu, shishamo nanban-zuke (2026 reviews) · a dinner bill of just over ¥2,000 (December 2025)',
    website: null, gmaps: gm('居酒屋 静 中京区 中之町'), menu_url: TB,
    notes: "[Izakaya · Yanagikoji, a Taisho-era tavern with graffiti walls] An izakaya on Yanagikoji alley said to date from the early Taisho era, behind a forbidding front; inside it feels like a film set, every wall scrawled with guests' messages. Come for the thick, dashi-rich dashimaki (about ¥500), nikujaga and simmered potatoes with a flask of sake — dinner for about ¥2,000. Cash only; Thursday–Sunday evenings.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a tavern founded in the early Taisho era, now with a new noren but an unchanged interior, its walls covered with graffiti left by guests; a November 2024 visitor found it run by the owner with the owner’s daughter and an older staff member.',
      philosophy: null,
      specialty: 'Dashimaki omelette.',
      anecdotes: [
        { text: 'A June 2025 visitor had heard that the poet Nakahara Chuya and Hasegawa Yasuko drank here in the Taisho era, and came looking for traces among the graffiti.', source: R + 'B509179675/' },
        { text: 'A December 2025 solo drinker circled the entrance several times before going in, then was greeted with a cheerful "good evening".', source: R + 'B518562169/' },
        { text: 'A September 2026 party of five had the dashimaki cut into five portions.', source: R + 'B535562610/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 静、居酒屋・おでん、京都市中京区新京極通四条上ル中之町577-17、阪急河原町駅から徒歩3分、木〜日 17:30〜22:00、月火水定休、予約可、カード・電子マネー不可。口コミ (2024〜2026年、英語): 柳小路の大正初期創業の居酒屋、新しいのれん、映画のセットのような昭和レトロの店内、壁一面の落書き (トイレにも)、カウンター・テーブル・座敷、2階もある、店主と娘さんと年配のスタッフ (2024年11月)、名物のだし巻510円、肉じゃが540円、白菜漬450円、小芋の煮物500円、おから430円、日本酒180ml 350円、丸干し、串カツ、天ぷら、厚揚げ、ししゃもの南蛮漬、瓶ビール、レモンハイ、会計2,000円ほど、詩人の中原中也と長谷川泰子が通ったと言われる (2025年6月の口コミ)。',
      confidence: 'low', sources: [TB, R + 'B261439621/', R + 'B495510220/', R + 'B502001177/', R + 'B509179675/', R + 'B518562169/', R + 'B521215621/', R + 'B522063279/', R + 'B523950012/', R + 'B529069710/', R + 'B534225652/', R + 'B535414782/', R + 'B535562610/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; an old local tavern; reserve ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上ル中之町577-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004569, 135.768282), offset ~8m to clear 酒呑にし川 柳小路店 (4m) and お酒とごはんと たか; cross-checked: GSI 京都府京都市中京区中之町577番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495510220/', R + 'B502001177/'],
    price_note: 'Prices from November 2024 and February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dashimaki (rolled dashi omelette)', '¥510', 'Food', 'ask', 'no', 'The house speciality.', 'dashimaki'),
      it('', '', 'Nikujaga (simmered beef and potatoes)', '¥540', 'Food', 'ask', 'no', '', 'nikujaga'),
      it('', '', 'Pickled napa cabbage', '¥450', 'Food', 'ask', 'ask', '', 'hakusai'),
      it('', '', 'Simmered small potatoes', '¥500', 'Food', 'ask', 'ask', '', 'koimo'),
      it('', '', 'Okara (simmered soybean pulp)', '¥430', 'Food', 'ask', 'ask', '', 'okara'),
      it('', '', 'Sake, 180ml', '¥350', 'Drink', 'ask', 'ask', '', 'sake'),
    ] }, {
    cuisine: '大正初期創業の居酒屋 (2024〜2026年の複数の口コミ)・名物のだし巻、厚くてだしたっぷり510円、肉じゃが540円、白菜漬450円 (2024年11月)・小芋の煮物500円、おから430円、日本酒180ml 350円 (2025年2月)・丸干し、串カツ、天ぷら、厚揚げ、ししゃもの南蛮漬 (2026年の口コミ)・会計は2,000円ほど (2025年12月)',
    neighborhood: '柳小路、四条近くの新京極の脇。京都河原町駅から徒歩3分',
    gf_detail: '要確認。だし巻、家庭的な煮物、天ぷら、串カツ、厚揚げ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし巻、肉じゃが、丸干し、ししゃもの南蛮漬 (口コミ)。白菜漬とおからは要確認 (口コミ)。',
    notes: '[居酒屋・柳小路、落書きの壁の大正の酒場] 柳小路の大正初期創業と言われる居酒屋。入りにくい構えの奥は映画のセットのようで、壁一面に客の落書き。名物は厚くてだしたっぷりのだし巻 (500円ほど)、肉じゃがや小芋の煮物に日本酒を。2,000円ほどで。現金のみ、木〜日の夜だけ。',
  });
}

save();
