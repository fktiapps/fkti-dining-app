// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 71.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 近江牛品川亭 京都店 Omi Gyu Shinagawa-tei Kyoto (Kyoto shop of an Otsu Omi-beef butcher founded in the Taisho era; croquettes and sukiyaki set meals)
//   + 祇園生姜餃子 鈴兆 Gion Shoga Gyoza Suzucho (ginger gyoza and Kanto-style oden basement bar near Nawate-Shinbashi, open to 3 am)
//   + crêpe atelier .Butter (sugar-butter crisp crêpes at Gokomachi-Rokkaku; since 2025)
//   - スペース・ジオン SPACE ZION — thin as a place to eat (oldies live-music venue)
//   + コーヒー&ワイン ヴィオロン coffee&wine Violon (hidden counter café and wine bar near Matsubara bridge; rose cream soda)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Big-chain hotel ruling (Greg 2026-11-08): none of these is in a hotel.
//   Service charges: none listed (SPACE ZION, skipped, has a ¥6,300 music-and-drinks charge).
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 鈴兆 offset ~8 m off Bistro × Bar HAKONIWA (same building, 1 m), .Butter ~3 m off とよ二郎 (6 m),
//   ヴィオロン ~6 m off ラ・カリー (4 m); each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034117', 'スペース・ジオン SPACE ZION: thin as a place to eat — an oldies live-music and dance venue open Fridays and Saturdays with a ¥6,300 music and all-you-can-drink charge; reviews are about the bands, with food described as an afterthought (July 2024). Not drafted');

// ================================================================ 近江牛品川亭 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039313/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shinagawatei.com/kyoto';
  const H = day(['11:30', '18:00']);
  put({
    id: 'kyoto_omi_gyu_shinagawatei', name: '近江牛品川亭 京都店 (Omi Gyu Shinagawa-tei Kyoto)', category: 'OMNI',
    lat: 35.004858737870926, lng: 135.76390349035808, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sukiyaki in a house warishita (soy-based) and breaded croquettes and kushikatsu; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi-beef butcher (official site).',
    hours_raw: '11:30–18:00, closed Wednesday (official site); Tabelog gives 11:30–18:30. A butcher’s counter selling Omi beef, with freshly fried croquettes to eat outside on a bench (about a 5-minute wait), and a small tatami room at the back for the sukiyaki and gyudon set meals — shoes off (official site; 2023–2024 reviews). Cards and QR accepted at a payment machine (Tabelog; July 2024). On Yanagibaba just south of Nishiki Market (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibaba, just south of Nishiki Market',
    cuisine: 'Kyoto shop of an Omi-beef butcher from Otsu, opened May 2022 (Tabelog; official site) · freshly fried Omi-beef croquette ¥245–248 (2024); beef kushikatsu (official site) · Omi-beef loin sukiyaki set meal ¥4,300 and Omi-beef loin gyudon set meal ¥2,200, Kyoto shop only (official site) · A5 and A4 Omi-beef loin cut for sukiyaki or steak to take home (official site)',
    website: SITE, gmaps: gm('近江牛品川亭 京都店'), menu_url: SITE,
    notes: "[Omi beef · Nishiki Market, a butcher's croquettes and sukiyaki] The Kyoto counter of a family Omi-beef butcher from Otsu, a step south of Nishiki Market. Grab a freshly fried Omi-beef croquette (about ¥250) on the bench outside, or take off your shoes in the small back room for a ¥4,300 Omi-beef sukiyaki set. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (shop master) not named'], origin: null,
      background: 'The official site says two brothers from Kakamigahara, Gifu, founded the butcher 品川亭総本店 in Kyoto in the Taisho era; the younger, 遠藤芳男, first of this line, opened 品川亭精肉店 in Hamaotsu, and the shop still stands by Mii-dera Station in Otsu. The Kyoto shop opened in May 2022 (Tabelog).',
      philosophy: 'To share the taste of Omi beef chosen by the owner, with a butcher’s eye for good meat (official site).',
      specialty: 'Omi-beef croquettes; Omi-beef loin sukiyaki.',
      anecdotes: [
        { text: 'A June 2024 lunch guest took shoes off in the back tatami room, where everyone was eating sukiyaki.', source: R + 'B487901932/' },
        { text: 'A July 2024 visitor noted the croquette costs ¥248 here against ¥165, cash only, at the Otsu main shop.', source: R + 'B489202262/' },
        { text: 'A May 2025 food-lover burned a mouth a little on a croquette straight from the fryer.', source: R + 'B520517775/' },
      ],
      japanese_sources_summary: '公式サイト: 近江牛 品川亭 京都店、錦市場・柳馬場通を少し南に下ったところ、営業時間11:30〜18:00、水曜定休、京都店限定の近江牛ロースすき焼き定食4,300円・近江牛ロース牛丼定食2,200円 (税込)、店内奥の座敷、揚げたての近江牛コロッケと串カツ、A5・A4等級の近江牛ロースを販売。大正時代、岐阜県各務原の兄弟が京都・東洞院五条上ルで精肉店「品川亭総本店」を創業、弟の当店初代遠藤芳男が大津・浜大津で「品川亭精肉店」を開業、京阪三井寺駅前の大津本店。食べログ: コロッケ・すき焼き・牛料理、京都市中京区中魚屋町478、月火木〜日 11:30〜18:30、水曜定休、カード・QR可、2022年5月15日オープン。口コミ (2023〜2025年、英語): 近江牛コロッケ245〜248円 (大津本店は165円で現金のみ)、揚げたてで5分待ち、店の外のベンチで、奥の座敷ですき焼きと牛丼のランチ、精算機でカード可、気さくな店主。',
      confidence: 'medium', sources: [SITE, 'https://www.shinagawatei.com/', TB, R + 'B464268332/', R + 'B475556767/', R + 'B477732316/', R + 'B487901932/', R + 'B488315200/', R + 'B489202262/', R + 'B490745582/', R + 'B499719849/', R + 'B520517775/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Butcher’s counter; cards and QR at a payment machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中魚屋町478',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.004859, 135.763903); cross-checked: GSI 京都府京都市中京区中魚屋町478番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B489202262/'],
    price_note: 'Set-meal prices from the official site (tax included); croquette price from 2024 reviews.', last_checked: TODAY, items: [
      it('近江牛ロースすき焼き定食', '', 'Omi-beef loin sukiyaki set meal', '¥4,300', 'Set meals', 'ask', 'no', 'Kyoto shop only.', 'sukiyaki'),
      it('近江牛ロース牛丼定食', '', 'Omi-beef loin gyudon set meal', '¥2,200', 'Set meals', 'ask', 'no', 'Kyoto shop only.', 'gyudon'),
      it('', '', 'Omi-beef croquette', '¥248', 'Takeaway', 'no', 'no', 'Fried to order; July 2024.', 'croquette'),
    ] }, {
    cuisine: '大津の近江牛の精肉店の京都店、2022年5月開業 (食べログ、公式サイト)・揚げたての近江牛コロッケ245〜248円 (2024年)、近江牛の牛串カツ (公式サイト)・京都店限定の近江牛ロースすき焼き定食4,300円、近江牛ロース牛丼定食2,200円 (公式サイト)・すき焼き用やステーキ用のA5・A4等級の近江牛ロースも販売 (公式サイト)',
    neighborhood: '柳馬場、錦市場のすぐ南',
    gf_detail: '要確認。自家製の割り下 (醤油ベース) のすき焼き、衣をつけたコロッケと串カツ。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。近江牛の精肉店 (公式サイト)。',
    notes: '[近江牛・錦市場、精肉店のコロッケとすき焼き] 錦市場のすぐ南、大津の近江牛の精肉店の京都店。揚げたての近江牛コロッケ (250円ほど) を外のベンチで、または奥の小さな座敷で近江牛のすき焼き定食 (4,300円)。水曜休み。',
  });
}

// ================================================================ 祇園生姜餃子 鈴兆
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040369/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_gion_shoga_gyoza_suzucho', name: '祇園生姜餃子 鈴兆 (Gion Shoga Gyoza Suzucho)', category: 'OMNI',
    lat: 35.006208, lng: 135.772942, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-wrapper gyoza; oden includes fish cakes and chikuwa (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza and a Kanto-style oden broth (Tabelog; reviews).',
    hours_raw: '18:00–03:00 Monday–Saturday; closed Sunday (Tabelog). A November 2025 reviewer booked a lunch sitting, which Tabelog does not list — check. Reservations taken; recommended at weekends (September 2025). Cards accepted; no e-money (Tabelog). QR or mobile ordering (2026 reviews). 22 seats: a U-shaped counter round the oden pot, and private rooms; non-smoking (Tabelog; January 2026). Down to the basement under pink neon, in a building above Nawate-Shinbashi, 5 min from Gion-Shijo or Sanjo Stn (Tabelog; January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nawate-dori by Shinbashi, Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Ginger gyoza and Kanto-style oden, opened October 2023 (Tabelog) · signature shoga gyoza with plenty of ginger, Kujo green onion and Kyoto pork, garlic gyoza or boiled gyoza ¥500 a plate (Tabelog menu; March 2026) · oden in a rich Kanto-style broth ¥300 a piece — daikon, egg, mochi kinchaku, lotus-root tsukune — or five for ¥1,200 (Tabelog menu, 2024) · beef-tendon stew ¥800, beef-tendon fried rice ¥800, fried taro, yakisoba with thin noodles, yam kimchi (2025–2026)',
    website: null, gmaps: gm('祇園生姜餃子 鈴兆'), menu_url: TB + 'dtlmenu/',
    notes: "[Gyoza & oden · Gion near Shinbashi, till 3 am] A neon-pink basement bar off Nawate where a U-shaped counter rings a pot of Kanto-style oden. The draw is the ginger gyoza (¥500 a plate) — Kujo onion, Kyoto pork and lots of ginger — with oden at ¥300 a piece and beef-tendon stew. Open to 3 am; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in October 2023 (Tabelog). The shop describes ginger gyoza and Kanto-style oden made to go with sake (Tabelog). Reviewers (2025–2026) describe a lively basement counter with young staff.',
      philosophy: null,
      specialty: 'Shoga (ginger) gyoza.',
      anecdotes: [
        { text: 'A March 2026 couple dropped in late after a gathering at a Gion tea house, for beef-tendon fried rice and gyoza.', source: R + 'B523856786/' },
        { text: 'A March 2026 diner who cannot usually eat ginger still loved the ginger gyoza and the mochi kinchaku.', source: R + 'B524033015/' },
        { text: 'A February 2026 pair found every plate quietly cut in half for sharing.', source: R + 'B522587715/' },
      ],
      japanese_sources_summary: '食べログ: 祇園生姜餃子 鈴兆、餃子・おでん・居酒屋、京都市東山区西之町216-2 縄手新橋大西ビルB1F、京阪祇園四条駅・三条駅から徒歩5分、月〜土 18:00〜翌3:00、日曜定休、予約可、カード可、電子マネー不可、22席、個室あり、禁煙、2023年10月2日オープン、九条ねぎと京都の豚とたっぷりの生姜の生姜餃子、U字のカウンターの真ん中に関東風のおでん。メニュー (2024年): 名物生姜餃子・にんにく餃子・水餃子500円、おでん各300円、おまかせ5種1,200円、牛すじ煮込み800円、唐揚げ800円、里芋の唐揚げ800円、やみつききゅうり500円、白菜と長芋のキムチ500円。口コミ (2025〜2026年、英語): ピンクのネオン、QRで注文、牛すじチャーハン800円、細麺の焼きそば、餅巾着、週末は予約がおすすめ。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B513819148/', R + 'B514642023/', R + 'B517298039/', R + 'B520643076/', R + 'B521979009/', R + 'B522587715/', R + 'B522963099/', R + 'B523856786/', R + 'B524033015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; cards accepted; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西之町216-2 縄手新橋大西ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.006257, 135.773002), offset ~8m to clear Bistro × Bar HAKONIWA (same building, 1m); cross-checked: GSI 京都府京都市東山区西之町216番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B523856786/'],
    price_note: 'Prices from the Tabelog menu (updated July 2024, tax included) and a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Signature shoga (ginger) gyoza', '¥500', 'Gyoza', 'no', 'no', 'March 2026.', 'shoga'),
      it('', '', 'Garlic gyoza', '¥500', 'Gyoza', 'no', 'no', '', 'garlic'),
      it('', '', 'Oden, per piece', '¥300', 'Oden', 'ask', 'ask', 'Five for ¥1,200.', 'oden'),
      it('', '', 'Beef-tendon stew', '¥800', 'Dishes', 'ask', 'no', '', 'gyusuji'),
    ] }, {
    cuisine: '生姜餃子と関東風おでん、2023年10月開業 (食べログ)・生姜たっぷりに九条ねぎと京都の豚の名物生姜餃子、にんにく餃子、水餃子は1皿500円 (食べログのメニュー、2026年3月)・コクのある関東風の出汁のおでん1個300円、大根、卵、餅巾着、れんこんのつくねなど、おまかせ5種1,200円 (食べログのメニュー、2024年)・牛すじ煮込み800円、牛すじチャーハン800円、里芋の唐揚げ、細麺の焼きそば、長芋キムチ (2025〜2026年)',
    neighborhood: '縄手通の新橋、祇園。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦の皮の餃子、おでんにはちくわなどの練り物 (食べログのメニュー)。',
    vegan_detail: 'ヴィーガン不可。豚の餃子と関東風のおでんの出汁 (食べログ、口コミ)。',
    notes: '[餃子とおでん・祇園新橋、深夜3時まで] 縄手のビルの地下、ピンクのネオンの店。U字のカウンターが関東風おでんの鍋を囲む。名物は生姜餃子 (1皿500円)、九条ねぎと京都の豚とたっぷりの生姜。おでんは1個300円、牛すじ煮込みも。深夜3時まで、日曜休み。',
  });
}

// ================================================================ crêpe atelier .Butter
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042763/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '21:00']);
  put({
    id: 'kyoto_crepe_atelier_butter', name: 'crêpe atelier .Butter', category: 'OMNI',
    lat: 35.00734, lng: 135.766372, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: crisp wheat crêpes; galettes are listed but buckwheat content is not published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter-and-sugar crêpes with cream and gelato (reviews).',
    hours_raw: '13:00–21:00 daily; hours may change (Tabelog). Cash-free QR payment; no cards or e-money (Tabelog). Order downstairs; about four counter seats there, and an eat-in room upstairs with a one-drink rule (2026 reviews). Takeaway too (June 2026). Non-smoking (Tabelog). On the corner of Gokomachi and Rokkaku (February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi at Rokkaku, north of Shijo',
    cuisine: 'Sugar-butter crêpe specialist, opened March 2025 (Tabelog) · crisp, almost cone-like crêpes spread with a block of butter and coarse sugar: salted bitter caramel ¥700, cream cheese and rum raisin ¥750, coconut almond ¥750, plus custard ¥200 (2026 reviews) · cinnamon sugar, apple-cinnamon vanilla, Uji-matcha batter, nut or coconut gelato toppings; a few savoury galettes (2026) · café latte ¥350 (February 2026)',
    website: null, gmaps: gm('crêpe atelier .Butter 京都'), menu_url: TB,
    notes: "[Crêpes · Gokomachi-Rokkaku, sugar and butter] A small crêpe shop on a Gokomachi corner making crisp, waffle-cone-like crêpes spread with real butter and crunchy sugar — salted bitter caramel (¥700) or cream cheese and rum raisin. Eat at the tiny counter, upstairs, or on the go. 13:00–21:00 daily; QR payment only.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in March 2025 (Tabelog). Reviewers (2026) describe a sugar-butter crêpe specialist with a crisp batter, an ordering counter downstairs and a cat-illustrated eat-in room upstairs.',
      philosophy: null,
      specialty: 'Sugar-butter crêpes.',
      anecdotes: [
        { text: 'An April 2026 guest watched a block of butter spread straight onto the crêpe.', source: R + 'B526257724/' },
        { text: 'A November 2026 visitor tried Uji-matcha batter for the first time, crunchy as a waffle.', source: R + 'B538492490/' },
        { text: 'An October 2026 thrift-shop browser found the classic sugar butter far sweeter than expected.', source: R + 'B538476966/' },
      ],
      japanese_sources_summary: '食べログ: crêpe atelier .Butter、クレープ・ガレット、京都市中京区八百屋町112-3、毎日13:00〜21:00、カード・電子マネー不可、QR可、禁煙、2025年3月21日オープン。口コミ (2026年、英語): 御幸町六角の角、シュガーバタークレープの専門店、パリパリの生地、バターのかたまりと粗糖、塩ビターキャラメル700円、クリームチーズとラムレーズン750円、ココナッツアーモンド750円、カスタード追加200円、シナモンシュガー、りんごシナモンバニラ、宇治抹茶の生地、ジェラートのトッピング、ガレットも少し、カフェラテ350円、1階で注文、カウンター4席ほど、2階はイートイン (ワンドリンク制、猫のイラスト)、テイクアウトも。',
      confidence: 'low', sources: [TB, R + 'B522047982/', R + 'B522233933/', R + 'B526257724/', R + 'B526588967/', R + 'B527249378/', R + 'B527772308/', R + 'B530693132/', R + 'B530915786/', R + 'B537552089/', R + 'B538476966/', R + 'B538492490/', R + 'B538878665/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; QR payment only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区八百屋町112-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007313, 135.766366), offset ~3m to clear とよ二郎 (6m); cross-checked: GSI 京都府京都市中京区八百屋町112番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526588967/', R + 'B522233933/', R + 'B538878665/'],
    price_note: 'Prices from February–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salted bitter caramel sugar-butter crêpe', '¥700', 'Crêpes', 'no', 'no', '', 'caramel'),
      it('', '', 'Cream cheese and rum raisin crêpe', '¥750', 'Crêpes', 'no', 'no', '', 'rum_raisin'),
      it('', '', 'Coconut almond crêpe', '¥750', 'Crêpes', 'no', 'no', '', 'coconut'),
      it('', '', 'Café latte', '¥350', 'Drink', 'gf', 'no', '', 'latte'),
    ] }, {
    cuisine: 'シュガーバタークレープの専門店、2025年3月開業 (食べログ)・バターのかたまりと粗糖をのせた、コーンのようにパリパリのクレープ: 塩ビターキャラメル700円、クリームチーズとラムレーズン750円、ココナッツアーモンド750円、カスタード追加200円 (2026年の口コミ)・シナモンシュガー、りんごシナモンバニラ、宇治抹茶の生地、ナッツやココナッツのジェラートのトッピング、ガレットも少し (2026年)・カフェラテ350円 (2026年2月)',
    neighborhood: '御幸町六角、四条の北',
    gf_detail: 'グルテンフリー不可。小麦のパリパリのクレープ。ガレットもあるがそば粉かどうかは公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターと砂糖のクレープ、クリームやジェラート (口コミ)。',
    notes: '[クレープ・御幸町六角、砂糖とバター] 御幸町の角の小さなクレープ屋。ワッフルコーンのようにパリパリの生地に本物のバターとザクザクの砂糖。塩ビターキャラメル (700円) やクリームチーズとラムレーズン。小さなカウンター、2階、または食べ歩きで。毎日13:00〜21:00、QR決済のみ。',
  });
}

// ================================================================ コーヒー&ワイン ヴィオロン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031267/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://d.hatena.ne.jp/violon/';
  const A = day(['17:00', '01:00']), T = day(['18:00', '01:00']);
  put({
    id: 'kyoto_coffee_wine_violon', name: 'コーヒー&ワイン ヴィオロン (coffee&wine Violon)', category: 'OMNI',
    lat: 34.999175, lng: 135.768048, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, wine, cheese, penne and chocolate gâteau; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and wine; the signature cream soda has rose-shaped ice cream, and snacks run to cheese (reviews).',
    hours_raw: '17:00–01:00 Monday–Wednesday, Friday and Saturday; 18:00–01:00 Thursday; Sunday is not given in Tabelog’s hours, so it is left out; hours vary by day and may change (Tabelog). Cards accepted; no e-money or QR (Tabelog). A small counter only; non-smoking; classical music (Tabelog; 2025–2026 reviews). Hard to find: behind an iron door at the back of the mixed-use building near Matsubara bridge, like a flat entrance (2022–2026 reviews).',
    hours: { 0: A, 1: A, 2: A, 3: T, 4: A, 5: A }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Matsubara bridge, south of Shijo',
    cuisine: 'Night café and wine bar run by a sommelier owner (2023–2025 reviews) · rose cream soda — blue soda topped with rose-shaped ice cream, served with hot water — ¥1,600 (May and September 2025) · coffee roasted daily in changing blends; wines chosen by the owner, with cheeses to match (2023–2025) · penne, chocolate gâteau (2022–2025)',
    website: SITE, gmaps: gm('coffee&wine Violon 京都 松原'), menu_url: TB,
    notes: "[Night café & wine · near Matsubara bridge, behind an iron door] A hidden counter café-bar behind an unmarked iron door at the back of a building near Matsubara bridge: a sommelier owner pours well-chosen wines and daily-roasted coffee, and makes a famous blue cream soda crowned with a rose of ice cream (¥1,600). Classical music; open to 1 am.",
    chef_bio: { chef_name: null, roles: ['Owner (sommelier) not named'], origin: null,
      background: 'Reviewers (2022–2026) describe a quiet counter café and wine bar hidden in a mixed-use building near Matsubara bridge, run by a gentle owner who is also a sommelier.',
      philosophy: null,
      specialty: 'Rose cream soda; owner-selected wines.',
      anecdotes: [
        { text: 'A March 2024 visitor had long passed the iron door without daring to open it.', source: R + 'B481885694/' },
        { text: 'A May 2025 guest finally came for the rose cream soda after a year of wanting to, and stayed for penne and wine.', source: R + 'B507614790/' },
        { text: 'A February 2024 night stroller, after dinner at the Fauchon Hotel, was given hot water with the cream soda on a cold evening.', source: R + 'B479101748/' },
      ],
      japanese_sources_summary: '食べログ: コーヒー&ワイン ヴィオロン、カフェ・ワインバー、京都市下京区清水町297-1 すえひろビル1F奥、月〜水・金・土 17:00〜翌1:00、木 18:00〜翌1:00 (日曜の時間の記載なし)、曜日で異なる、カード可、電子マネー・QR不可、カウンターのみ、禁煙。口コミ (2022〜2026年、英語): 松原橋の近く、雑居ビルの奥の鉄の扉、隠れ家、ソムリエでもある店主、日替わりの自家焙煎コーヒー、店主が選んだワインとチーズ、青いソーダに薔薇の形のアイスのクリームソーダ1,600円 (2025年) とお湯、ペンネ、ガトーショコラ、クラシック音楽、鳥の形の紙のカトラリー置き。',
      confidence: 'low', sources: [TB, SITE, R + 'B385433732/', R + 'B465427728/', R + 'B479101748/', R + 'B481885694/', R + 'B492458873/', R + 'B507614790/', R + 'B513144430/', R + 'B521021483/', R + 'B523907472/', R + 'B523975123/', R + 'B528583167/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; quiet; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区清水町297-1 すえひろビル 1F 奥',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999139, 135.768092), offset ~6m to clear ラ・カリー (4m); cross-checked: GSI 京都府京都市下京区清水町297番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507614790/', R + 'B513144430/'],
    price_note: 'Price from May and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rose cream soda', '¥1,600', 'Drink', 'ask', 'no', '2025.', 'cream_soda'),
      it('', '', 'Coffee (daily roast)', '', 'Drink', 'gf', 'vegan', '', 'coffee'),
      it('', '', 'Wine by the glass', '', 'Drink', 'gf', 'ask', '', 'wine'),
    ] }, {
    cuisine: 'ソムリエの店主の夜のカフェ兼ワインバー (2023〜2025年の口コミ)・薔薇の形のアイスをのせた青いソーダのクリームソーダ、お湯付きで1,600円 (2025年5月、9月)・毎日焙煎の日替わりブレンドのコーヒー、店主が選んだワインと合わせるチーズ (2023〜2025年)・ペンネ、ガトーショコラ (2022〜2025年)',
    neighborhood: '松原橋の近く、四条の南',
    gf_detail: '要確認。コーヒー、ワイン、チーズ、ペンネ、ガトーショコラ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。コーヒーとワイン。名物のクリームソーダには薔薇の形のアイス、つまみはチーズなど (口コミ)。',
    notes: '[夜のカフェとワイン・松原橋、鉄の扉の奥] 松原橋近くのビルの奥、目立たない鉄の扉の先の隠れ家カウンター。ソムリエの店主が選んだワインと毎日焙煎のコーヒー、薔薇のアイスをのせた青いクリームソーダ (1,600円) が名物。クラシック音楽、深夜1時まで。',
  });
}

save();
