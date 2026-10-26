// Ginza Station half-mile sweep (805 m), batch 102 — unknown-seat tail (all OMNI).
//   + ゆで太郎 銀座5丁目店 (24-hour stand-up soba chain)
//   + 小諸そば 歌舞伎店 (stand-up soba chain by Higashi-Ginza)
//   + RISTASIX (all-day dining at the Courtyard by Marriott Ginza Tobu Hotel)
//   + 小澤牧場 牛○ (izakaya stall in Shimbashi Yokochō; smoking allowed)
// Skipped: NYバターステーキハウス (13262899; only a 2021 review), HIBIYA DELI&CAFE (13236179;
// office-floor deli counter, operator unclear even to reviewers), 個室居酒屋 鳥将 (13252514; one
// review, no name or hours), トーキョーパエリア (13111475; roaming food truck, a fixed pin would
// mislead), シードリームヨットクラブ (13145778; no reviews).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ゆで太郎 銀座5丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13034980/'; const R = TB + 'dtlrvwlst/';
  const d = day(['00:00', '23:59']);
  put({
    id: 'tokyo_yudetaro_ginza5', name: 'ゆで太郎 銀座5丁目店 (Yude Taro Ginza 5-chome)', category: 'OMNI',
    lat: 35.668294, lng: 139.766901,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: stand-up soba (ratio not stated) with freshly fried tempura, kakiage and katsudon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: katsudon; the soba broth is not described.',
    hours_raw: 'Open 24 hours, every day (Tabelog; may change).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme (5-14-9), across from the Kabukiza side — 3 min from Higashi-Ginza Stn exit A4',
    cuisine: 'Round-the-clock stand-up soba chain · soba made in-house · freshly fried tempura and kakiage · half soba ¥290 · mini katsudon set ¥850 · counter seats', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('ゆで太郎 銀座5丁目店'), menu_url: null,
    notes: "[Soba · 24-hour soba by the Kabukiza] A branch of the Yude Taro stand-up soba chain, open around the clock with counter seating, and a lifeline for early starts. One regular, on visit 128, comes in at 5:50 am for the ¥290 half soba. The soba is made in-house and the tempura is fried to order: crisp, not oily onion-heavy kakiage and seasonal vegetable tempura. Orders arrive within five minutes even when busy. A mini katsudon set is ¥850. Staff are mostly polite, though one diner found an older staff member brusque at weekend lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Yude Taro chain (Tabelog listing name)', background: 'Chain.', philosophy: null, specialty: 'Freshly fried tempura soba.',
      anecdotes: [
        { text: '"I arrived at Higashi-Ginza Station at 5:44 and crossed over from Kabukiza to enter Yude Taro Ginza 5-chome at 5:50… I ordered my usual half soba for JPY 290." — October 2026, visit 128.', source: R + 'B483032767/' },
        { text: '"The kakiage was freshly fried and very crispy, without any heavy oiliness… Having a lunch option at nearly a one-coin price in this location is very appealing." — October 2026.', source: R + 'B536858298/' },
      ],
      japanese_sources_summary: '食べログ: ゆで太郎 銀座5丁目店、銀座5-14-9、東銀座駅A4出口徒歩3分、24時間営業・年中無休、予約不可、カウンター席、一人でも。2026年の口コミ: 朝5時50分に128回目、いつものハーフそば290円、ミニカツ丼セット850円、外国人スタッフは丁寧だが年配の男性スタッフの対応が横柄との声、揚げたての天ぷら、自家製麺、季節の野菜天、かき揚げそばは5分以内に提供、玉ねぎ中心のかき揚げ、ワンコインに近い値段。',
      confidence: 'medium', sources: [TB, R + 'B483032767/', R + 'B536858298/', R + 'B535473801/', R + 'B535725907/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; quick service.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-14-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目14番9号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483032767/', R + 'B535473801/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('ハーフそば', '', 'Half soba', '¥290', 'Soba', 'no', 'ask', 'October 2026.', 'half_soba'),
      it('かき揚げそば', 'kakiage soba', 'Kakiage soba', '', 'Soba', 'no', 'ask', 'October 2026.', 'kakiage_soba'),
      it('ミニカツ丼セット', '', 'Mini katsudon set with soba', '¥850', 'Sets', 'no', 'no', 'September 2026.', 'mini_katsudon'),
    ] }, {
    cuisine: '24時間の立ち食いそばチェーン・自家製麺・揚げたての天ぷらとかき揚げ・ハーフそば290円・ミニカツ丼セット850円・カウンター席',
    neighborhood: '銀座五丁目(5-14-9)、歌舞伎座の向かい側。東銀座駅A4出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。割合の書かれていない立ち食いそばに、揚げたての天ぷら、かき揚げ、カツ丼。',
    vegan_detail: 'ヴィーガンではありません。カツ丼。そばのつゆの中身は書かれていません。',
    notes: '[そば・歌舞伎座そばの24時間のそば] 立ち食いそばチェーン「ゆで太郎」の店で、カウンター席があり24時間営業、早朝の強い味方です。128回通う常連は朝5時50分にいつもの290円のハーフそばを。麺は自家製、天ぷらは注文後に揚げ、玉ねぎ中心のカリッと油っぽくないかき揚げや季節の野菜天も。混んでいても5分以内に出てきます。ミニカツ丼セットは850円。スタッフはおおむね丁寧ですが、週末の昼に年配のスタッフがぶっきらぼうだったという声も。',
  });
}

// ================================================================ 小諸そば 歌舞伎店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13045328/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['07:00', '20:00']);
  put({
    id: 'tokyo_komoro_soba_kabuki', name: '小諸そば 歌舞伎店 (Komoro Soba Kabuki)', category: 'OMNI',
    lat: 35.669858, lng: 139.768822,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: stand-up soba and udon with tempura, ten-don and tanuki (tempura bits); the soba ratio is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork soba, anago tempura; the tsuyu is not described.',
    hours_raw: 'Mon–Fri 7:00–20:00; Sat 7:30–17:00; Sun 8:00–17:00 (Tabelog; may change). Ticket machine; standing and seated areas.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: day(['07:30', '17:00']), 6: day(['08:00', '17:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme (4-11-7), Higashi-Ginza side near the Kabukiza — 2 min from Higashi-Ginza Stn',
    cuisine: 'Stand-up soba chain with seats too · chilled tanuki soba ¥500 · pork soba · freshly fried anago tempura · ten-don and cold soba sets · unlimited spring onion · from 7 am', cuisine_type: 'udon_soba',
    website: null, gmaps: gm('小諸そば 歌舞伎店 東銀座'), menu_url: null,
    notes: "[Soba · Komoro Soba by the Kabukiza] A Komoro Soba branch near the Kabukiza with both standing and seated areas: buy a ticket at the machine, hand it over and grab a spot. It's quick even when busy, and prices are fantastic for the location. Picks include chilled tanuki soba with crisp tempura bits (¥500 in August 2026), pork soba, freshly fried anago tempura, and a ten-don set with cold soba. Firm, well-cooked noodles; pile on the free spring onions. Open from 7 am on weekdays, 7:30 Saturday, 8 Sunday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Komoro Soba chain (Tabelog listing name)', background: 'Chain.', philosophy: null, specialty: 'Tanuki soba; tempura sets.',
      anecdotes: [
        { text: '"The soba was perfectly cooked, not overdone at all, and I piled on plenty of green onions to enjoy it. I love how Komoro Soba allows you to use so many green onions!" — October 2026, 21st visit.', source: R + 'B465818338/' },
        { text: '"Upon entering, I purchased my ticket from the vending machine and handed it to the counter to secure my seat. There are both standing and seated areas." — July 2026, ten-don set with cold soba.', source: R + 'B533718531/' },
      ],
      japanese_sources_summary: '食べログ: 小諸そば 歌舞伎店、銀座4-11-7、東銀座駅から161m、平日7:00〜20:00、土7:30〜17:00、日8:00〜17:00、予約不可、立ち食いの印象だが席もある。2026年の口コミ: 豚そば、ねぎ入れ放題、穴子天は揚げたて、冷やしたぬきそば500円、券売機、天丼セットと冷たいそば、立ち席と座席、混んでいても提供が早い、場所の割に安い、コシのある冷たいそばと天かす。',
      confidence: 'medium', sources: [TB, R + 'B465818338/', R + 'B533718531/', R + 'B493503748/', R + 'B535403438/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; standing or seated.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-11-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目11番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493503748/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('冷やしたぬきそば', 'hiyashi tanuki soba', 'Chilled tanuki soba', '¥500', 'Soba', 'no', 'no', 'August 2026.', 'hiyashi_tanuki'),
      it('豚そば', 'buta soba', 'Pork soba', '', 'Soba', 'no', 'no', 'October 2026.', 'buta_soba'),
      it('天丼セット', '', 'Ten-don set with cold soba', '', 'Sets', 'no', 'no', 'July 2026.', 'tendon_set'),
    ] }, {
    cuisine: '席もある立ち食いそばチェーン・冷やしたぬきそば500円・豚そば・揚げたての穴子天・天丼と冷たいそばのセット・ねぎ入れ放題・朝7時から',
    neighborhood: '銀座四丁目(4-11-7)、歌舞伎座近くの東銀座側。東銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。天ぷら、天丼、たぬき(天かす)のある立ち食いそば・うどんで、そばの割合は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。豚そば、穴子天。つゆの中身は書かれていません。',
    notes: '[そば・歌舞伎座近くの小諸そば] 歌舞伎座近くの小諸そばの店で、立ち席と座席の両方があります。券売機で食券を買って渡し、場所を確保。混んでいても早く、場所の割に値段がとても手頃です。天かすがサクサクの冷やしたぬきそば(2026年8月は500円)、豚そば、揚げたての穴子天、天丼と冷たいそばのセットなど。麺はコシがあり、無料のねぎはたっぷりと。平日は朝7時、土曜は7時半、日曜は8時から。',
  });
}

// ================================================================ RISTASIX
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13290906/'; const R = TB + 'dtlrvwlst/';
  const d = day(['06:30', '10:00'], ['11:30', '22:00']);
  put({
    id: 'tokyo_ristasix_courtyard_ginza', name: 'RISTASIX (Courtyard by Marriott Ginza Tobu)', category: 'OMNI',
    lat: 35.668325, lng: 139.764922,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hotel all-day dining with pho, seasonal lunch buffets and a Shine Muscat afternoon tea (tarts, cannoli, mousse); no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu mixes Western, Asian and ethnic dishes (pho is offered); no vegan dish is named.',
    hours_raw: 'Daily 6:30–10:00 (breakfast) and 11:30–22:00 (Tabelog; may change). Smart-casual dress (no extreme casual wear).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Courtyard by Marriott Ginza Tobu Hotel 1F, Ginza 6-chōme — 3 min from Higashi-Ginza Stn exit A1',
    cuisine: 'Hotel all-day dining and lounge · Western, Asian and ethnic menu (pho) · seasonal Shine Muscat afternoon tea (¥6,000) · holiday lunch buffets · breakfast from 6:30', cuisine_type: 'other',
    website: 'https://rista6.courtyardginza.com/', gmaps: gm('RISTASIX コートヤードマリオット銀座東武ホテル'), menu_url: null,
    notes: "[All-day dining · the Courtyard Marriott Ginza's lounge] The chic, urban all-day restaurant and lounge on the ground floor of the Courtyard by Marriott Ginza Tobu Hotel, opened with the hotel's renovation, in black and grey with blue-green accents. It serves breakfast from 6:30, then a Western-Asian-ethnic menu to 22:00; one regular is delighted it has pho. Prices are reasonable for a hotel lounge. The seasonal draw is afternoon tea: the 2026 Shine Muscat set (weekdays from 1 August to 31 October, 11:30–15:30 entry, 3-hour stay, ¥6,000) ran from white-peach soup to Shine Muscat tart and cannoli. Lunch buffets appear in holiday seasons. Friendly staff; birthday plates on request; no extreme casual wear.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened with the hotel’s renovation (October 2026 review)', background: 'Hotel restaurant (rista6.courtyardginza.com).', philosophy: null, specialty: 'Afternoon tea; all-day dining.',
      anecdotes: [
        { text: '"Fresh Shine Muscat Afternoon Tea… Serving Period: 8/1 - 10/31, Weekdays… Price: JPY 6,000 per person (tax included)." — October 2026.', source: R + 'B537779233/' },
        { text: '"I\'m personally delighted that they have pho on the menu! Considering it\'s a hotel lounge, I think the prices are quite reasonable." — September 2026.', source: R + 'B501729505/' },
      ],
      japanese_sources_summary: '食べログ: RISTASIX、銀座6-14-10 コートヤード・マリオット銀座東武ホテル1F、東銀座駅から239m、毎日6:30〜10:00・11:30〜22:00、ドレスコード(極端にカジュアルな服装は不可)、公式サイト rista6.courtyardginza.com。2026年の口コミ: 昼やコーヒーに、広く快適、親切なスタッフ、フォーがある、ホテルのラウンジにしては手頃、休暇期間限定のランチビュッフェ(クリスマスと夏休み)、誕生日プレート付きのアフタヌーンティー、シャインマスカットのアフタヌーンティー(平日8/1〜10/31、入店11:30〜15:30、3時間制、税込6,000円、白桃の冷製スープ、銀座はちみつとシャインマスカットのシャンパンカクテル、ムース、タルト、カンノーリ)、ホテルの改装とともに開業、黒とグレーに青緑のアクセント。',
      confidence: 'medium', sources: [TB, R + 'B537779233/', R + 'B501729505/', R + 'B519391375/', R + 'B535256193/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; smart-casual dress.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-14-10 コートヤード・マリオット銀座東武ホテル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目14番10号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537779233/'],
    price_note: 'Afternoon-tea price from an October 2026 review (seasonal, tax incl.).', last_checked: TODAY, items: [
      it('シャインマスカットのアフタヌーンティー', '', 'Shine Muscat afternoon tea (weekdays, Aug–Oct 2026)', '¥6,000', 'Afternoon tea', 'no', 'no', 'October 2026; seasonal.', 'afternoon_tea'),
      it('フォー', 'fō', 'Pho', '', 'All-day', 'ask', 'ask', 'September 2026.', 'pho'),
      it('ランチビュッフェ', '', 'Holiday-season lunch buffet', '', 'Lunch', 'ask', 'ask', 'August 2026; holiday periods only.', 'buffet'),
    ] }, {
    cuisine: 'ホテルのオールデイダイニングとラウンジ・洋食、アジア、エスニックのメニュー(フォー)・季節のシャインマスカットのアフタヌーンティー(6,000円)・休暇期間のランチビュッフェ・朝食は6時半から',
    neighborhood: 'コートヤード・マリオット銀座東武ホテル1F、銀座六丁目。東銀座駅A1出口から徒歩3分',
    gf_detail: '要確認。フォー、季節のランチビュッフェ、シャインマスカットのアフタヌーンティー(タルト、カンノーリ、ムース)のあるホテルのオールデイダイニング。グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。洋食、アジア、エスニックの料理が混ざったメニュー(フォーもあり)で、ヴィーガンの料理は挙げられていません。',
    notes: '[オールデイダイニング・コートヤード・マリオット銀座のラウンジ] コートヤード・マリオット銀座東武ホテルの1階、ホテルの改装とともに開業した、黒とグレーに青緑を効かせたシックなオールデイダイニング兼ラウンジ。朝6時半から朝食、その後は22時まで洋食・アジア・エスニックのメニューで、フォーがあるのがうれしいという常連も。ホテルのラウンジにしては値段は手頃です。季節の目玉はアフタヌーンティーで、2026年のシャインマスカット(平日8月1日〜10月31日、入店11:30〜15:30、3時間制、6,000円)は白桃のスープからシャインマスカットのタルトやカンノーリまで。休暇シーズンにはランチビュッフェも。スタッフは親切、誕生日プレートも頼め、極端にカジュアルな服装は不可。',
  });
}

// ================================================================ 小澤牧場 牛○
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13233589/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_ozawa_bokujo_ushimaru_shimbashi', name: '小澤牧場 牛○ (Ozawa Bokujo Ushimaru)', category: 'OMNI',
    lat: 35.667957, lng: 139.758183,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A meat-heavy izakaya with noodles and rice bowls (beef-bone ramen, yakisoba); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-bone ramen and meat dishes; "mugen piman" peppers appear but are not described.',
    hours_raw: 'Hours not listed on Tabelog; a May 2026 visitor ate there after midnight. Smoking allowed (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi Yokochō (Shimbashi gādo-shita alley), Shimbashi 1-chōme, up a flight of stairs — 1 min from Shimbashi Stn',
    cuisine: 'Meat-heavy izakaya in the Shimbashi Yokochō alley · beef-bone ramen · yakisoba · "mugen piman" · noodles and rice bowls · late nights · smoking allowed', cuisine_type: 'izakaya',
    website: 'https://www.hamakura-style.com/works/shinbashi_yokocho/', gmaps: gm('小澤牧場 牛○ 新橋ガード下横丁'), menu_url: null,
    notes: "[Izakaya · a meaty stop in Shimbashi Yokochō] An izakaya up a flight of stairs in the Shimbashi Yokochō food alley under the tracks, cramped and cheerfully cluttered in the classic tavern way. The menu balances meat, fish and vegetables, but the hearty meat dishes stand out, with noodles and rice bowls to keep a young crowd going. Recent orders include beef-bone ramen and yakisoba after midnight, and \"mugen piman\" peppers. Staff are energetic and quick. Smoking is allowed, and hours aren't published. Expect ¥2,000–5,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Stall in Shimbashi Yokochō (opening date not given)', background: 'Part of the Shimbashi Yokochō food alley (hamakura-style.com).', philosophy: null, specialty: 'Meat dishes; beef-bone ramen.',
      anecdotes: [
        { text: '"I ordered beef bone ramen and yakisoba. The izakaya food was delicious. I visited after midnight." — May 2026.', source: R + 'B527485333/' },
        { text: '"The staff are full of energy, and they took our orders right away. The food was served promptly." — August 2024.', source: R + 'B489939442/' },
      ],
      japanese_sources_summary: '食べログ: 小澤牧場 牛○、港区新橋1-13-3 新橋ガード下横丁、新橋駅徒歩1分、営業時間の記載なし、喫煙可。口コミ(2024〜2026年): 元気なスタッフ、提供が早い、料理はおいしい、芋焼酎がもっと欲しい、位置情報がずれているかも、大衆酒場の雰囲気、席は窮屈、無限ピーマン、階段を上がった狭い店内のごちゃごちゃ感が良い、肉・魚・野菜がそろいガッツリ肉料理が目立つ、麺や丼も、2026年5月は深夜0時過ぎに牛骨ラーメンと焼きそば。',
      confidence: 'low', sources: [TB, R + 'B527485333/', R + 'B489939442/', R + 'B511435515/', R + 'B506516532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; cramped seating.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_approx: 'block', address_ja: '〒105-0004 東京都港区新橋1-13-3 新橋ガード下横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review May 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都港区新橋一丁目13番 (lot) 14m. Tabelog gives the same point as the neighbouring Shimbashi Yokochō stall テッちゃん — both are inside one food hall — so this pin is marked block-level; one reviewer also warns the listing's location may be off; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527485333/', R + 'B506516532/'],
    price_note: 'No prices captured; ¥2,000–10,000 in reviews.', last_checked: TODAY, items: [
      it('牛骨ラーメン', '', 'Beef-bone ramen', '', 'Noodles', 'no', 'no', 'May 2026.', 'gyukotsu_ramen'),
      it('焼きそば', 'yakisoba', 'Yakisoba', '', 'Noodles', 'no', 'ask', 'May 2026.', 'yakisoba'),
      it('無限ピーマン', 'mugen piman', '"Mugen piman" peppers', '', 'Small plates', 'ask', 'ask', 'May 2025.', 'mugen_piman'),
    ] }, {
    cuisine: '新橋横丁の肉中心の居酒屋・牛骨ラーメン・焼きそば・無限ピーマン・麺や丼も・深夜まで・喫煙可',
    neighborhood: '新橋ガード下横丁、新橋一丁目、階段を上がって。新橋駅から徒歩1分',
    gf_detail: '要確認。麺や丼(牛骨ラーメン、焼きそば)もある肉中心の居酒屋。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛骨ラーメンや肉料理。無限ピーマンもありますが中身は書かれていません。',
    notes: '[居酒屋・新橋横丁の肉の店] 線路下の新橋横丁で階段を上がったところにある居酒屋で、狭く昔ながらの酒場らしいごちゃごちゃ感があります。肉・魚・野菜とそろいますが、目立つのはがっつりした肉料理で、麺や丼もあって若い客の箸が止まりません。最近の口コミでは深夜0時過ぎの牛骨ラーメンと焼きそば、無限ピーマンも。スタッフは元気で手早い。喫煙可、営業時間は公表されていません。2,000〜5,000円ほど。',
  });
}

save();
