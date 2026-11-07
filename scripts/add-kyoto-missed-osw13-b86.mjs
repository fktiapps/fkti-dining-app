// Kyoto priority (kyoto-missed), worker osw13, batch 86 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: おづkyoto, バー サイレント サード, BAR EZO, 炭焼 みや沢.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023920', 'chain: 鳥貴族 木屋町通店 is a branch of the nationwide 鳥貴族 yakitori chain (hundreds of same-name shops)');
skip('26040462', 'too thin to verify: ma-icca has a single Tabelog review (May 2025) and a bare listing');
skip('26000256', 'too thin to verify: きんなべ has no review after December 2024, and the listing gives only 17:00–20:00 hours, 100 seats and a phone number');
skip('26045766', 'too thin to verify: FORK has no Tabelog reviews');
skip('26042442', 'chain: 個室 焼き鳥×出汁餃子×鶏料理 食べ飲み放題 鶏のとりこ has five same-name shops — 京都河原町店, 梅田店, 三宮店, 栄店, 金山駅南口店 (HotPepper / owst.jp / gnavi listings; osaka-kita crawl)');

// ================================================================ おづkyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034924/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tatuumacorp.jp/business/ozu.html'; const CORP = 'https://tatuumacorp.jp/';
  const H = day(['11:30', '19:30']);
  put({
    id: 'kyoto_ozu_kyoto_maison_du_sake', name: 'おづkyoto‐maison du sake plus Cafe‐ (Ozu Kyoto)', category: 'OMNI',
    lat: 35.001376, lng: 135.772674, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: parfaits with cookies and sponge cake, pancake sandwiches and cheesecake (2020–2025 reviews); ask about rice balls and amazake.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: amazake and plum shaved ice may suit, but parfaits use cream and ice cream, and no source says what goes into the sake-lees soup (2021–2026 reviews).',
    hours_raw: 'Tabelog: Fri–Sun 11:30–19:30 (food last order 18:30, drinks 19:00); closed Monday to Thursday. The operator\'s page gives weekdays 11:30–18:00 and weekends and holidays 10:30–18:00 — check before going. Reservations taken; about 9–10 seats (one table for four and a short counter), so groups may be turned away (August 2024). Pay first; cash, cards, transit IC, PayPay and other QR. Take-away sweets. Non-smoking; children welcome. Ground floor of a small hotel on Yamatooji below Shijo (Tabelog: ホテルRinn; operator: ホテル鈴). Opened here 2 October 2020 (Tabelog) after a move (November 2020 review).',
    hours: { 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yamatooji below Shijo, near Kenninji — 3–5 min walk from Gion-Shijo',
    cuisine: 'A small machiya-style café and sake bar run by a Kyoto kaiseki company with sake-brewery ties (operator site; Tabelog; 2020–2026 reviews) · deer parfait with deer-shaped cookies — Gion matcha ¥894 (March 2025); with peach ¥990 (August 2024) · matcha shiratama shaved ice ¥990 (summer 2024); plum shaved ice (September 2023) · Chocopa chocolate parfait ¥1,000 (November 2020); amazake apple parfait and warm amazake (January 2021); pancake sandwich (July 2023); cheesecake made with daiginjo sake (August 2024) · sake-lees soup with miso rice balls (October 2024; February 2026); shark-fin rice bowl by the chefs of the sister kaiseki restaurant (Tabelog) · a good choice of Japanese sake (October 2024)',
    website: SITE, gmaps: gm('おづ kyoto 博多町'), menu_url: null,
    notes: '[Café & sake bar · Yamatooji near Kenninji, deer parfaits and sake-lees soup] A tiny wood-toned café on the ground floor of a Gion hotel, run by a Kyoto kaiseki company: deer-cookie matcha parfaits, summer shaved ice, sake-lees soup with miso rice balls, and sake by the glass. One person often makes everything, so expect a wait. Open Friday–Sunday per Tabelog — check hours.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Run by Tatsuuma Corporation (辰馬コーポレーション), which also runs the Kyoto kaiseki house せんしょう in Ukyo and, since June 2025, おづ おむすびカフェ at Bivi Nijo (operator site). Reviewers tie the café to a Nishinomiya sake brewery through the president\'s family and note sweets made with its daiginjo (2023–2025). It moved to this hotel ground floor in 2020 (November 2020 review). An August 2024 reviewer warns that "one staff member prepares everything in sequence, which does result in a wait time".',
      philosophy: null,
      specialty: 'Deer parfaits; sake-lees soup.',
      anecdotes: [
        { text: 'January 2021: "The parfait came with a deer-shaped cookie! It\'s adorable, but the cookie is quite large (laughs)."', source: R + 'B434935660/' },
        { text: 'August 2024: "During our stay, two groups were turned away due to being full."', source: R + 'B490407307/' },
      ],
      japanese_sources_summary: '運営会社のサイト: 祇園おづ［cafe & SAKE Bar］、京都市東山区大和大路通四条下ル3博多町67 ホテル鈴1F、月〜金 11:30〜18:00、土日祝 10:30〜18:00、パフェやチーズケーキと日本酒・和惣菜、テイクアウト。辰馬コーポレーションは京料理・京会席 せんしょう、祇園おづを運営し、2025年6月20日に Bivi二条に「おづ おむすびカフェ」をオープン。食べログ: おづkyoto‐maison du sake plus Cafe‐、日本料理・カフェ・日本酒バー、東山区博多町67 ホテルRinn 1F、祇園四条駅から徒歩5分、金〜日 11:30〜19:30 (料理 L.O. 18:30、ドリンク L.O. 19:00)、月〜木休み、予約可、10席、禁煙、カード・交通系IC・QR可、2020年10月2日オープン、姉妹店の料理人によるふかひれ丼と粕汁。口コミ (2020年11月〜2026年4月、英語): 移転してホテルの1階へ、鹿のクッキーのパフェ (祇園抹茶894円、桃990円)、抹茶白玉かき氷990円、梅のかき氷、チョコパフェ1,000円、甘酒りんごパフェ、甘酒、パンケーキサンド、大吟醸のチーズケーキ、酒粕汁と味噌おむすび、日本酒、先払い、ひとりで順に作るので待つ (2024年8月)。',
      confidence: 'medium', sources: [SITE, CORP, TB, R + 'B432486926/', R + 'B434935660/', R + 'B468554700/', R + 'B470858837/', R + 'B490407307/', R + 'B495258942/', R + 'B502339657/', R + 'B523021662/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny café; pay first; check hours.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条下ル3博多町67 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator site and Tabelog listing (notice for a July 2026 closure day) with reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.001376, 135.772674); cross-checked: GSI 京都府京都市東山区博多町67番地 (lot) 15m; nearest pin kyoto_dor_gion 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490407307/', R + 'B502339657/'],
    price_note: 'Prices from August 2024 and March 2025 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Deer parfait, Gion matcha', '¥894', 'Parfait', 'no', 'no', 'March 2025.', 'deer_parfait'),
      it('', '', 'Deer parfait with peach (seasonal)', '¥990', 'Parfait', 'no', 'no', 'August 2024.', 'peach_parfait'),
      it('', '', 'Matcha shiratama shaved ice (summer)', '¥990', 'Shaved ice', 'ask', 'no', 'August 2024.', 'matcha_kakigori'),
      it('', '', 'Sake-lees soup and rice ball set', null, 'Set', 'ask', 'ask', 'February 2026.', 'kasujiru_set'),
    ] }, {
    cuisine: '京料理の会社が営む、酒蔵ゆかりの町家風の小さなカフェと日本酒バー (運営会社のサイト、食べログ、2020〜2026年の口コミ)・鹿のクッキーのパフェ: 祇園抹茶894円 (2025年3月)、桃990円 (2024年8月)・抹茶白玉かき氷990円 (2024年夏)、梅のかき氷 (2023年9月)・チョコパフェ1,000円 (2020年11月)、甘酒りんごパフェと温かい甘酒 (2021年1月)、パンケーキサンド (2023年7月)、大吟醸のチーズケーキ (2024年8月)・酒粕汁と味噌おむすび (2024年10月、2026年2月)、姉妹店の料理人によるふかひれ丼 (食べログ)・日本酒の品ぞろえ (2024年10月)',
    neighborhood: '四条下ルの大和大路、建仁寺の近く。祇園四条から徒歩3〜5分',
    gf_detail: 'グルテンフリーではない: クッキーやスポンジのパフェ、パンケーキサンド、チーズケーキ (2020〜2025年の口コミ)。おむすびや甘酒は要確認。',
    vegan_detail: '要確認: 甘酒や梅のかき氷は合うかもしれないが、パフェは生クリームとアイス。酒粕汁の中身は書かれていない (2021〜2026年の口コミ)。',
    notes: '[カフェと日本酒バー・建仁寺近くの大和大路、鹿パフェと酒粕汁] 祇園のホテルの1階にある木のぬくもりの小さなカフェで、京料理の会社が営む。鹿のクッキーの抹茶パフェ、夏のかき氷、酒粕汁と味噌おむすび、グラスの日本酒。ひとりで順に作るので待つことも。食べログでは金〜日の営業、時間は要確認。',
  });
}

// ================================================================ バー サイレント サード
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024880/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '24:00']);
  put({
    id: 'kyoto_bar_silent_third_gokomachi', name: 'バー サイレント サード (Bar Silent Third)', category: 'OMNI',
    lat: 35.006646, lng: 135.766222, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a whisky and cocktail bar with no food described; check beer and liqueurs (2016–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: drinks only in the sources; some cocktails use cream, egg or honey (2016–2026 reviews).',
    hours_raw: 'Tabelog: daily 14:00–24:00; closing days not fixed. Call ahead for space (May 2026). Smoking allowed. Cards (JCB, Amex, Diners per Tabelog). A Y- or L-shaped counter and one sofa table for four (July 2022; July 2024). 2nd floor of 伽羅ビル on Gokomachi below Rokkaku. Open since about 2014 ("four years" in November 2018).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi below Rokkaku — 6 min walk from Kyoto-Kawaramachi',
    cuisine: 'A whisky and cocktail bar that opens at 2 pm (2016–2026 reviews) · the house cocktail "Silent Third", made on a whisky of your choice — Glenmorangie, or peaty Caol Ila (2018; 2019; May 2026) · gin and tonic on Star of Bombay (November 2018) · rare and high-proof whiskies, e.g. Old Ezra 7 Barrel Strength and Old Grand-Dad 114 as highballs; Yoichi; an original-label Speyside (2016; 2019; May 2026) · classic cocktails — Singapore Sling, Martini, Cosmopolitan (July 2024)',
    website: null, gmaps: gm('バー サイレント サード 御幸町'), menu_url: null,
    notes: '[Whisky & cocktail bar · Gokomachi near Rokkaku, open from 2 pm] A moody second-floor bar with a long counter and walls of bottles, pouring from 2 pm: the namesake Silent Third cocktail built on the whisky you like, sharp gin and tonics and rare bourbons. Some reviewers find the welcome cool at first. Smoking allowed. Open daily.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'Reviewers say it opened around 2014 and comes from the Bar K6 line (November 2018; July 2022); one in July 2022 thought it "appears to be run by a single person", with paintings by the same hand on the walls, while a July 2024 group met the owner and female staff. Reviews praise skill and knowledge; criticism: "the service to be somewhat off-putting" (September 2022) and an atmosphere that is "just okay" (July 2022).',
      philosophy: null,
      specialty: 'The Silent Third cocktail; whisky.',
      anecdotes: [
        { text: 'January 2019: "When I ordered at Silent Third, they asked me what base whisky I preferred, and I requested something peaty. It turned out to be Caol Ila."', source: R + 'B410520968/' },
        { text: 'July 2024: "The staff were wonderful; they looked a bit cold at first, but were very kind."', source: R + 'B490484118/' },
      ],
      japanese_sources_summary: '食べログ: バー サイレント サード、バー、中京区御幸町六角下ル伊勢屋町354-1 伽羅ビル 2F、毎日 14:00〜24:00、不定休、喫煙可、カード可 (JCB・AMEX・Diners)。口コミ (2016年11月〜2026年5月、英語): 昼2時から飲めるバー、店名のカクテル「サイレントサード」は好みのウイスキーで (グレンモーレンジィ、カリラ)、スター・オブ・ボンベイのジントニック、度数の高いバーボンのハイボール、余市、オリジナルラベルのスペイサイド、シンガポールスリング、マティーニ、コスモポリタン、K6 の系譜、2014年ごろ開店、ひとりで営むように見える (2022年7月)、接客が合わないという声 (2022年9月)。',
      confidence: 'low', sources: [TB, R + 'B235484704/', R + 'B392664297/', R + 'B410520968/', R + 'B451913042/', R + 'B454156970/', R + 'B490484118/', R + 'B529028678/'] },
    cultural_comfort: { level: 'japanese', note: 'Classic bar; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町六角下ル伊勢屋町354-1 伽羅ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a review dated May 2026.' },
    pin_source: `Tabelog ${TB} (35.006646, 135.766222); cross-checked: GSI 京都府京都市中京区伊勢屋町354番地 (lot) 14m; nearest pin ChIJKa5zWIMIAWARqMhceUwZRUU 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529028678/'],
    price_note: 'No prices in the sources; reviewers spent about ¥1,000–5,000 a head.', last_checked: TODAY, items: [
      it('サイレントサード', '', 'Silent Third (house whisky cocktail)', null, 'Cocktail', 'ask', 'ask', '2018; May 2026.', 'house_cocktail'),
      it('ジントニック', '', 'Gin and tonic', null, 'Cocktail', 'ask', 'ask', 'November 2018.', 'gin_tonic'),
    ] }, {
    cuisine: '昼2時から開くウイスキーとカクテルのバー (2016〜2026年の口コミ)・店名のカクテル「サイレントサード」は好みのウイスキーで、グレンモーレンジィやピートの効いたカリラ (2018年、2019年、2026年5月)・スター・オブ・ボンベイのジントニック (2018年11月)・珍しい高度数のウイスキー、オールド・エズラ7年バレルストレングスやオールド・グランダッド114のハイボール、余市、オリジナルラベルのスペイサイド (2016年、2019年、2026年5月)・シンガポールスリング、マティーニ、コスモポリタン (2024年7月)',
    neighborhood: '御幸町六角下ル。京都河原町駅から徒歩6分',
    gf_detail: '要確認: 食事の記載のないウイスキーとカクテルのバー。ビールやリキュールは確認を (2016〜2026年の口コミ)。',
    vegan_detail: '要確認: 口コミは飲み物だけ。生クリーム、卵、はちみつを使うカクテルもある (2016〜2026年の口コミ)。',
    notes: '[ウイスキーとカクテルのバー・御幸町六角、昼2時から] 長いカウンターと酒瓶の並ぶ2階のバーで、昼2時から飲める。好みのウイスキーで作る店名のカクテル「サイレントサード」、きりっとしたジントニック、珍しいバーボン。最初はそっけなく感じたという声も。喫煙可。毎日営業。',
  });
}

// ================================================================ BAR EZO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030448/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://bar-ezo-kyoto.jp/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_bar_ezo_shimizucho', name: 'BAR EZO', category: 'OMNI',
    lat: 34.999671, lng: 135.768319, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: cocktails and spirits may suit; the food includes pasta, omurice and baguette (official site; 2024–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: fresh-fruit cocktails and juices (2025–2026 reviews); the food includes cream pasta and omurice.',
    hours_raw: 'Tabelog and official site: Tue–Sun 17:00–24:00; closed Monday. Reservations taken; group bookings 21:00–23:00 by arrangement; private hire for 12–30 by phone. Table charge ¥500 — Tabelog, Japanese original 「500円」. 29 seats: counter, sofas and an open terrace (smoking on the terrace only). Pets welcome; English menu; wheelchair access; free Wi-Fi. Cards and e-money (Edy, QUICPay); no QR. Ground floor of a small hotel (MYK HOUSE, March 2018) on a back street west of the Kamo River near Shimizucho. Opened 23 February 2018 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Back street west of the Kamo River, below Shijo — 6 min walk from Kyoto-Kawaramachi',
    cuisine: 'A terrace cocktail bar with food, on a quiet back street (official site; 2018–2026 reviews) · cocktails made to your taste; gin and tonic; seasonal fresh-fruit cocktails; fresh juice for non-drinkers (2018–2026) · whiskies — Laphroaig 10, Yamazaki, Harper 12; Manhattan, Margarita (2018; December 2025) · food: omurice and pasta (official site); tomato and cream pastas, made on request when off the menu (December 2025); baguette (September 2024)',
    website: SITE, gmaps: gm('BAR EZO 京都 清水町'), menu_url: SITE,
    notes: '[Cocktail bar · back street by the Kamo below Shijo, terrace and a Hokkaido master] A roomy bar with sofas and an open terrace on the ground floor of a small hotel, run by a friendly master from Hokkaido: cocktails made to your taste, fresh-fruit drinks, good whisky and, on request, pasta. ¥500 charge. Smoking on the terrace only; pets welcome. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: 'Hokkaido (per July 2020 and December 2025 reviews)',
      background: 'Opened 23 February 2018 (Tabelog) on the ground floor of a hotel guests often use for long stays (July 2020). Reviewers describe the master as "from Hokkaido" (July 2020) and "friendly and engaging" (December 2025), with other staff who explain the drinks in detail (April 2024). Pasta was dropped from the menu, "possibly due to staffing issues", but was made on request in December 2025.',
      philosophy: null,
      specialty: 'Cocktails made to order.',
      anecdotes: [
        { text: 'July 2020: "The master was so cool while shaking the cocktails that I went home the next day and bought a cocktail shaker myself!"', source: R + 'B428717985/' },
        { text: 'December 2025: "My wife, who doesn\'t drink alcohol, always requests fresh juice made from fruits."', source: R + 'B519089082/' },
      ],
      japanese_sources_summary: '公式サイト: Bar EZO (バー エゾ)、京都府京都市下京区清水町290-1、17:00〜24:00、月曜休み、テラス付きのバー、裏路地の隠れ家、ソファ席とカウンター、フルーツカクテル、オムライスやパスタなどの洋食。食べログ: BAR EZO、バー・バル・カフェ、阪急河原町駅から徒歩6分、火〜日 17:00〜24:00、月曜休み、予約可、貸切12〜30名、原文でチャージ「500円」、29席、テラスのみ喫煙可、ペット可、英語メニュー、車椅子可、カード・電子マネー可、QR不可、2018年2月23日オープン、ホテルのレストラン。口コミ (2018年3月〜2026年9月、英語): ホテルの1階、北海道出身のマスター、好みで作るカクテル、ジントニック、ラフロイグ10年、山崎、ハーパー12年、フルーツのカクテルとジュース、バゲット、頼めばパスタ (2025年12月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B353786163/', R + 'B368362261/', R + 'B428717985/', R + 'B484030257/', R + 'B492738292/', R + 'B519089082/', R + 'B535810531/'] },
    cultural_comfort: { level: 'english', note: 'English menu; pets welcome; terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区清水町290-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with a review dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.999671, 135.768319); cross-checked: GSI 京都府京都市下京区清水町290番地 (lot) 19m; nearest pin kyoto_ramen_taishi_kawaramachi 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B519089082/'],
    price_note: 'No drink prices in the sources; ¥500 table charge (Tabelog); reviewers spent ¥1,000–6,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Cocktail made to your taste', null, 'Cocktail', 'ask', 'ask', '2018–2026 reviews.', 'cocktail'),
      it('', '', 'Pasta (tomato or cream; on request)', null, 'Food', 'no', 'no', 'December 2025.', 'pasta'),
      it('', '', 'Omurice', null, 'Food', 'ask', 'no', 'Official site.', 'omurice'),
    ] }, {
    cuisine: '静かな裏通りのテラス付きの食事もできるカクテルバー (公式サイト、2018〜2026年の口コミ)・好みで作るカクテル、ジントニック、季節のフルーツカクテル、飲めない人には生のフルーツジュース (2018〜2026年)・ウイスキー、ラフロイグ10年、山崎、ハーパー12年、マンハッタン、マルガリータ (2018年、2025年12月)・料理: オムライスとパスタ (公式サイト)、メニューにないときも頼めばトマトやクリームのパスタ (2025年12月)、バゲット (2024年9月)',
    neighborhood: '四条下ル、鴨川の西の裏通り。京都河原町駅から徒歩6分',
    gf_detail: '要確認: カクテルや蒸留酒は合うかもしれないが、料理はパスタ、オムライス、バゲット (公式サイト、2024〜2025年の口コミ)。',
    vegan_detail: '要確認: 生のフルーツのカクテルとジュース (2025〜2026年の口コミ)。料理はクリームパスタやオムライス。',
    notes: '[カクテルバー・四条下ルの鴨川近くの裏通り、テラスと北海道出身のマスター] 小さなホテルの1階の、ソファとテラスのある広いバー。北海道出身の気さくなマスターが、好みに合わせたカクテル、フルーツの飲み物、ウイスキー、頼めばパスタも。チャージ500円。喫煙はテラスのみ、ペット可。月曜休み。',
  });
}

// ================================================================ 炭焼 みや沢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017134/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sumiyaki-miyazawa.com';
  put({
    id: 'kyoto_sumiyaki_miyazawa_gion', name: '炭焼 みや沢 (Sumiyaki Miyazawa)', category: 'OMNI',
    lat: 35.004373, lng: 135.773592, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: salt-grilled skewers may suit, but the secret tare, meat miso, ramen and curry do not (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori counter; vegetable skewers exist, but nothing is described as vegan (2024–2026 reviews).',
    hours_raw: 'Tabelog: from 18:00 until sold out; closed Sundays and public holidays; hours may change. Reservations strongly advised — 10 counter seats, often full (2024–2026 reviews). Non-smoking; children welcome. Cards (JCB, Amex, Diners per Tabelog); no e-money or QR. Ground floor of ユニバース会館 on Tominaga-cho east of Nawate, south side.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominaga-cho east of Nawate, Gion — 3 min walk from Gion-Shijo',
    cuisine: 'A 10-seat Gion counter for Kyoto akajidori grilled over binchotan, ordered skewer by skewer or omakase (2020–2026 reviews) · skewers: tsukune, rare chicken breast, sasami, seseri, heart, quail eggs, Manganji peppers and other vegetables (2024–2026) · Akane salt or the house tare (September 2026) · starters: cabbage with miso; lettuce with meat miso; potato salad; tataki and yukhoe; chicken sashimi (2020–2026) · to finish: rice with raw egg, grilled rice-ball chazuke, ramen or curry (2025–2026) · sake, shochu, awamori and house umeshu (September 2026)',
    website: SITE, gmaps: gm('炭焼 みや沢 祇園'), menu_url: null,
    notes: '[Yakitori · Gion Tominaga-cho, binchotan-grilled Kyoto akajidori] A snug 10-seat counter off Nawate where Kyoto akajidori goes over binchotan: rare breast, smoky tsukune, soft quail eggs and good vegetable skewers, with egg-over-rice or curry to finish. Prices are clear for Gion — about ¥10,000 for a big meal with drinks (March 2026). Book ahead. Closed Sundays and holidays.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Reviewers from 2020 to 2026 call it a hidden gem and a favourite, praising precise grilling, the freedom to order skewer by skewer, and clear pricing; one March 2026 diner paid ¥10,164 for 11 skewers, sides, a rice finish and several shochu sodas. The September 2026 reviewer took the omakase, "allowing the chef to serve me his recommendations".',
      philosophy: null,
      specialty: 'Binchotan-grilled akajidori.',
      anecdotes: [
        { text: 'March 2026: "Even in Gion, this place offers clear pricing and is a great restaurant."', source: R + 'B314780043/' },
        { text: 'January 2025: "The grilled tsukune may look burnt, but it wasn\'t bitter at all and was delicious!"', source: R + 'B492566920/' },
        { text: 'September 2024: "Seating is at the counter with a bit of a tight space, so it\'s best to bring minimal belongings."', source: R + 'B492566920/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼 みや沢、焼き鳥、東山区富永町縄手東入る南側 ユニバース会館 1F、祇園四条駅から徒歩3分、18:00〜売り切れまで、日曜・祝日休み、予約可、カウンター10席、禁煙、子供可、カード可 (JCB・AMEX・Diners)、電子マネー・QR不可。口コミ (2020年8月〜2026年9月、英語): 京赤地鶏を備長炭で、好きな串を1本ずつかおまかせ、つくね、レアのむね、ささみ、せせり、ハツ、うずら、万願寺、野菜串、あかね塩と秘伝のたれ、キャベツと味噌、肉味噌のレタス、ポテトサラダ、たたき、ユッケ、鶏刺し、締めの卵かけご飯、焼きおにぎりの茶漬け、ラーメン、カレー、日本酒・焼酎・泡盛・自家製梅酒、明朗会計で10,164円 (2026年3月)、予約は必須。',
      confidence: 'medium', sources: [TB, R + 'B314780043/', R + 'B429059367/', R + 'B480282183/', R + 'B492566920/', R + 'B499696975/', R + 'B511508873/', R + 'B533024555/', R + 'B535271174/'] },
    cultural_comfort: { level: 'japanese', note: '10-seat counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区富永町縄手東入る南側 ユニバース会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004373, 135.773592); cross-checked: GSI 京都府京都市東山区富永町 (town only, no lot) 62m — marked approximate; nearest pin kyr_nibodamashii_ramen_gion_ 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B314780043/'],
    price_note: 'One March 2026 meal with drinks came to ¥10,164; item prices not given.', last_checked: TODAY, items: [
      it('', '', 'Yakitori, by the skewer or omakase', null, 'Yakitori', 'ask', 'no', '2024–2026 reviews.', 'yakitori'),
      it('', '', 'Rice with raw egg (finish)', null, 'Rice', 'ask', 'no', 'March and September 2026.', 'tamago_kake_gohan'),
      it('', '', 'Curry (finish)', null, 'Rice', 'no', 'no', 'August 2025.', 'curry'),
    ] }, {
    cuisine: '祇園の10席のカウンターで、京赤地鶏を備長炭で焼く。1本ずつでもおまかせでも (2020〜2026年の口コミ)・串: つくね、レアのむね、ささみ、せせり、ハツ、うずら、万願寺などの野菜 (2024〜2026年)・あかね塩か秘伝のたれ (2026年9月)・最初にキャベツと味噌、肉味噌のレタス、ポテトサラダ、たたきとユッケ、鶏刺し (2020〜2026年)・締めは卵かけご飯、焼きおにぎりの茶漬け、ラーメン、カレー (2025〜2026年)・日本酒、焼酎、泡盛、自家製梅酒 (2026年9月)',
    neighborhood: '縄手東入ルの富永町、祇園。祇園四条から徒歩3分',
    gf_detail: '要確認: 塩の串は合うかもしれないが、秘伝のたれ、肉味噌、ラーメン、カレーは不可 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏の焼き鳥のカウンター。野菜串もあるがヴィーガン向けの記載はない (2024〜2026年の口コミ)。',
    notes: '[焼き鳥・祇園富永町、備長炭の京赤地鶏] 縄手近くの10席のこぢんまりしたカウンターで、京赤地鶏を備長炭で焼く。レアのむね、香ばしいつくね、半熟のうずら、野菜串、締めは卵かけご飯やカレー。祇園にしては明朗会計で、たっぷり食べて飲んで1万円ほど (2026年3月)。予約を。日曜・祝日休み。',
  });
}

save();
