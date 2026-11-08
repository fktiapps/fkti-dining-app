// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 79.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - ViTO 京都店 — chain: ViTO is a gelato brand with 23 shops in Japan and abroad (fashionsnap, August 2022)
//   + ロクロクタンタン Rokuroku Tantan (golden-sesame tantanmen down a Gion alley; since 2024) — full ramen block
//   + お酒とお料理 来春 Osake to Oryori Kiharu (Gion obanzai and sake, run by the owner; since 2023)
//   + めん屋 東太郎 Menya Taro (Hokkaido-style warm somen in the Sanjo Shokusai Roji alley; since 2024)
//   - 祇園炭火焼鳥 かんざし — no reviews
//   + 左右田商店喫茶室 Soda Shoten Kissa Shitsu (five-seat breakfast kissa run by the owner alone)
//   Same-name counts first (data and queue-status.jsonl): none for ViTO, ロクロクタンタン, 来春, 東太郎, かんざし or 左右田
//   (the one かんざし hit in data is 京かんざし, a vegetable, in another record). Web searches found no other shop of
//   ロクロクタンタン or めん屋 東太郎. Big-chain hotel rule (Greg 11-08): none of the four drafted is in a chain hotel.
//   Service charges: 来春's Tabelog section has only English as the "Original text" ("Tax and Service charge 10% will be
//   charged when checking."); the other three have no section.
//   Pins (checked against main, hidden records included): ロクロクタンタン moved 2m WNW (4.6m from kyr_gion_duck_noodles and
//   5.8m from kyoto_gion_nakahara at the Tabelog point); the other three are ≥ 8.7m from every record.
//   JA text: no bare 天 or 祝; Hokkaido, Ibo no Ito, Omi, Shiga, Beans Tei, product names stay in Latin script.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044025', 'chain: ViTO gelato, 23 shops in Japan and abroad (fashionsnap.com, August 2022; shops in Fukuoka, Kumamoto, Tochigi, Iwate)');
skip('26043461', 'no reviews');

// ================================================================ ロクロクタンタン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041913/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '20:30']); const SA = day(['12:00', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_rokuroku_tantan_gion', name: 'ロクロクタンタン (Rokuroku Tantan)', category: 'OMNI',
    lat: 35.004326, lng: 135.77672, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken in the broth and the meat sauce (2025 reviews).',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:00–20:30; Sat 12:00–14:30 and 17:00–20:30; closed Sundays; hours may change (Tabelog). Cash and cards (October 2025 review). Counter seats only (2025–26 reviews). Down a very narrow alley in Gion north of Shijo, 4–5 min from Yasaka Shrine (2025–26 reviews).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — 4–5 min from Yasaka Shrine',
    cuisine: 'Tantanmen in four styles on one golden-sesame base: the standard Rokuroku Tantan ¥1,000 (February and September 2025), ¥1,200 (September 2026); with cilantro ¥1,200 (August 2025) or ¥1,400 (October 2025); a free mini rice with grated cheese to finish in the leftover soup (February and October 2025); balsamic vinegar and chili oil on the counter (September 2025)',
    website: null, gmaps: gm('ロクロクタンタン 祇園'), menu_url: null,
    notes: '[Tantanmen · Gion] A small counter down a narrow Gion alley serving one thing: a creamy, mildly spicy golden-sesame tantanmen, finished with rice and cheese as a risotto. About ¥1,200.',
    ramen: {
      broth_base: ['blend'], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: 'unknown', handmade: false, notes: 'Straight noodles made for the soup by a long-established Kyoto noodle maker (October 2025); called medium-thin and chewy (February 2025) and medium-thick (January and September 2025).' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Rokuroku Tantan — ¥1,000 in 2025, ¥1,200 in September 2026.',
      chashu: 'None; a sweet-spicy chicken meat sauce instead (February 2025).',
      notable_toppings: ['mizuna', 'crushed peanuts with golden sesame', 'thread chili', 'chopped scallion', 'cilantro (option)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken in the broth and meat sauce.' },
      pantheon: 'Roasted golden sesame ground into a kombu, shiitake and chicken broth, mild on the chili, with a bowl of rice and cheese to turn the last of it into risotto — tantanmen hidden down one of Gion\'s narrowest alleys.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B515904339/', '"Rich sesame tantanmen … The broth is rich yet mild in spices" (October 2025); "rich and creamy" (B500523731, B536539277).'],
        oiliness: [R + 'B500523731/', '"complemented by the spiciness of the drizzled chili oil" (February 2025); no reviewer calls it oily.'],
        clarity: [R + 'B498897153/', '"more like a puree" (January 2025); a creamy sesame-paste soup (B500523731).'],
        tare_strength: [R + 'B534906226/', '"a mild flavor … after adding chili oil about 5 or 6 times, it became delicious" (September 2026); "flavorful without being overwhelming" (B536539277).'],
        noodle_firmness: [R + 'B500523731/', '"a chewy texture and rich wheat flavor" (February 2025).'],
        aroma_punch: [R + 'B515790576/', '"The aroma of roasted sesame is strong and absolutely delightful" (September 2025).'],
      },
    },
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 30 June 2024 (Tabelog). The soup uses roasted Japanese golden sesame and sesame paste over a broth of Hokkaido kombu, shiitake and chicken (October 2025 review).',
      philosophy: null,
      specialty: 'Golden-sesame tantanmen.',
      anecdotes: [
        { text: 'A September 2025 diner heard the shop is popular with Yoshimoto comedians, was told to try the balsamic vinegar on the counter, and was amazed how well it worked.', source: R + 'B515790576/' },
        { text: 'A June 2026 visitor, nervous about the narrow alley, was lent a paper apron by the master.', source: R + 'B529427946/' },
        { text: 'A January 2025 diner paid ¥1,700 for the coriander bowl and later learned prices were raised ¥500 over the first three days of the New Year.', source: R + 'B498897153/' },
      ],
      japanese_sources_summary: '食べログ: ロクロクタンタン、tantanmen、東山区祇園町北側286-6、祇園四条駅から447m、月〜金 11:30〜14:30・17:00〜20:30、土 12:00〜14:30・17:00〜20:30、日曜休み、2024年6月30日オープン。口コミ (2025〜2026年、英語): 4種類、ロクロクタンタン1,000円 (2025年)・1,200円 (2026年9月)、パクチーのせ1,400円 (2025年10月)、金ごまと練りごま、Hokkaido の昆布・しいたけ・鶏のスープ、京都の老舗の製麺所の麺、最後にご飯とチーズでリゾット風、カウンターのみ、狭い路地、現金・カード可。',
      confidence: 'medium', sources: [TB, R + 'B498897153/', R + 'B500523731/', R + 'B515790576/', R + 'B515904339/', R + 'B529427946/', R + 'B534906226/', R + 'B536539277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (September 2025); one dish, point and order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側286-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004319, 135.776740), moved 2m WNW to clear kyr_gion_duck_noodles (4.6m) and kyoto_gion_nakahara (5.8m); cross-checked: GSI 京都府京都市東山区祇園町北側286番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536539277/', R + 'B515904339/'],
    price_note: 'Prices from 2025–26 reviews; the standard bowl rose from ¥1,000 (2025) to ¥1,200 (September 2026).', last_checked: TODAY, items: [
      it('ロクロクタンタン', '', 'Rokuroku Tantan (standard tantanmen)', '¥1,200', 'Tantanmen', 'no', 'no', 'September 2026 review; ¥1,000 in 2025.', 'rokuroku'),
      it('ロクロクタンタンパクチーのせ', '', 'Rokuroku Tantan with cilantro', '¥1,400', 'Tantanmen', 'no', 'no', 'October 2025 review.', 'pakuchi'),
      it('', '', 'Mini rice with grated cheese (to finish)', '', 'Side', 'ask', 'no', 'Free (February 2025).', 'rice'),
    ] }, {
    cuisine: '金ごまのベースの tantanmen 4種類: ロクロクタンタン1,000円 (2025年2月・9月)、1,200円 (2026年9月)、パクチーのせ1,200円 (2025年8月)・1,400円 (2025年10月)、残ったスープに無料のミニご飯と粉チーズでリゾット風 (2025年2月・10月)、カウンターにバルサミコ酢とラー油 (2025年9月)',
    neighborhood: '祇園、四条の北。八坂神社から徒歩4〜5分',
    gf_detail: 'グルテンフリー不可。小麦の麺 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。スープと肉味噌に鶏 (2025年の口コミ)。',
    notes: '[tantanmen・祇園] 祇園の狭い路地の奥の小さなカウンター。クリーミーで辛さ控えめの金ごまの tantanmen ひとつで勝負し、最後はご飯とチーズでリゾットに。1,200円ほど。',
  });
}

// ================================================================ お酒とお料理 来春
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040281/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_osake_to_oryori_kiharu', name: 'お酒とお料理 来春 (Osake to Oryori Kiharu)', category: 'OMNI',
    lat: 35.004798, lng: 135.776688, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and sashimi may suit, but fried dishes and sauces are common (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal vegetable obanzai (February 2024), but dashi is likely; the owner adjusts dishes for guests (2024–25 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00; closed Mondays (Tabelog). Tax and 10% service charge (Tabelog, whose "Original text" is in English: "Tax and Service charge 10% will be charged when checking."). Cards and e-money; no QR (Tabelog). 14 seats: 6 at the counter and 6–8 at tables; non-smoking; no children (Tabelog). English menu and English-speaking staff (Tabelog). 8 min from Gion-Shijo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo — 8 min from Gion-Shijo Stn',
    cuisine: 'Kyoto obanzai with sake and wine: an assorted obanzai platter as the starter (2025–26 reviews), a seasonal course ¥7,000 (Tabelog); salmon wrapped in yuba, mentaiko konnyaku (March 2025), firefly squid and new potatoes with kinome miso (February 2024), shrimp and lotus-root dumplings in broth, sea bream simmered in sake (September 2024), pork-wrapped burdock in black vinegar, grilled cod roe (2026), five-kind sashimi (July 2025), katsu-jiru (March 2025); about ¥4,000–8,000',
    website: null, gmaps: gm('お酒とお料理 来春 祇園'), menu_url: null,
    notes: '[Obanzai · Gion] A cosy wood-lined counter where the owner cooks seasonal obanzai and pairs sake and wine, with an English menu and many overseas regulars. About ¥5,000–8,000 plus 10%; adults only.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 24 September 2023 (Tabelog). The owner once worked at a famous obanzai izakaya in Gion and runs the place with a part-timer (February 2024 review); trained properly in cooking (September 2024 review).',
      philosophy: 'Seasonal Kyoto vegetables, seafood and wagyu with sake from around Japan and wines (Tabelog).',
      specialty: 'Obanzai platter; shrimp and lotus-root dumplings.',
      anecdotes: [
        { text: 'A February 2024 solo diner on a business trip had portions sized down, booked again for Thursday, and was remembered and served the dishes mentioned on the first night.', source: R + 'B479380037/' },
        { text: 'A September 2024 guest, brought by the mama of a usual Gion bar, was served an off-menu sea bream simmered in sake.', source: R + 'B491396597/' },
        { text: 'A March 2024 regular notes that drinks not on the menu are sourced from various suppliers to match the dishes.', source: R + 'B479380037/' },
      ],
      japanese_sources_summary: '食べログ: お酒とお料理 来春、居酒屋・日本料理・魚介料理、東山区祇園町北側347-143、京阪祇園四条駅から徒歩8分、火〜日 17:00〜23:00、月曜休み、税とサービス料10% (原文も英語)、カード・電子マネー可、QR 不可、14席 (カウンター6、テーブル6〜8)、禁煙、子供不可、英語メニュー・英語スタッフあり、2023年9月24日オープン、季節のコース7,000円 (紹介文、英訳)。口コミ (2023〜2026年、英語): 店主は祇園の有名なおばんざいの居酒屋で働いていた、アルバイトひとりと営む (2024年2月)、おばんざいの盛り合わせ、ホタルイカ、海老と蓮根の揚げ団子、豚肉で巻いたごぼうの黒酢あん、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B477080025/', R + 'B479380037/', R + 'B491027015/', R + 'B491396597/', R + 'B498606467/', R + 'B504223277/', R + 'B509612197/', R + 'B522204380/', R + 'B531161278/', R + 'B534720488/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); many overseas guests (2024–25 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-143',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004798, 135.776688); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 92m — a large Gion block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the course price is published (Tabelog); a la carte prices not found. Tax and 10% service added.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '¥7,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'course'),
      it('', '', 'Assorted obanzai (starter)', '', 'Obanzai', 'ask', 'ask', '2025–26 reviews.', 'obanzai'),
      it('', '', 'Shrimp and lotus-root dumplings in broth', '', 'A la carte', 'no', 'no', 'Fried in fine crumbs (September 2024).', 'renkon_dango'),
      it('', '', 'Pork-wrapped burdock in black vinegar', '', 'A la carte', 'ask', 'no', '2025–26 reviews.', 'gobo'),
    ] }, {
    cuisine: '京都のおばんざいと日本酒・ワイン: 最初におばんざいの盛り合わせ (2025〜26年の口コミ)、季節のコース7,000円 (食べログ)、湯葉で巻いた鮭、明太子のこんにゃく (2025年3月)、ホタルイカと新じゃがの木の芽味噌 (2024年2月)、海老と蓮根の揚げ団子のあんかけ、鯛を酒で煮たもの (2024年9月)、豚肉で巻いたごぼうの黒酢あん、焼いたたらこ (2026年)、刺身5種 (2025年7月)、katsu-jiru (2025年3月)、4,000〜8,000円ほど',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩8分',
    gf_detail: '要確認。おばんざいと刺身は合う可能性があるが、揚げ物とたれが多い (2024〜26年の口コミ)。',
    vegan_detail: '要確認。季節の野菜のおばんざい (2024年2月) があるが、出汁を使う可能性が高い。店主が料理を調整してくれる (2024〜25年の口コミ)。',
    notes: '[おばんざい・祇園] 木のぬくもりのある落ち着いた店で、店主が季節のおばんざいを作り日本酒とワインを合わせる。英語メニューがあり海外の常連も多い。5,000〜8,000円ほど、サービス料10%、大人のみ。',
  });
}

// ================================================================ めん屋 東太郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041367/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:00', '19:00']);
  put({
    id: 'kyoto_menya_taro_sanjo', name: 'めん屋 東太郎 (Menya Taro)', category: 'OMNI',
    lat: 35.008265, lng: 135.763409, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat somen (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the Hokkaido-style broth has chicken; duck and egg in the others (2024–25 reviews).',
    hours_raw: 'Daily 8:00–19:00 (L.O. 18:30); closing days may vary (Tabelog). 2024–25 reviews mention opening at 7:00. Cards, e-money and QR (Tabelog). 18 seats: a counter downstairs and tables upstairs (Tabelog; March 2025 review); non-smoking (Tabelog). In the Sanjo Shokusai Roji alley off Sakaimachi, 5 min from Karasuma-Oike, Shijo or Karasuma (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Sakaimachi — 5 min from Karasuma-Oike Stn',
    cuisine: 'Hokkaido-style warm somen from breakfast on: the Hokkaido-flavour somen in a broth of Hokkaido kombu, donko shiitake, burdock and chicken simmered overnight (2024–25), with Ibo no Ito noodles; duck-broth somen with Omi duck, hot or cold (¥1,300 in July 2024; set with seasoned rice ¥1,600 in September 2024); kama-tama somen ¥800 (July 2024); sets with seasoned rice ¥1,700 (March 2025) and matcha kakigori (2024–26)',
    website: null, gmaps: gm('めん屋 東太郎 三条'), menu_url: null,
    notes: '[Somen · Sanjo] A somen specialist in a Sanjo food alley, open from 8 am, serving the warm, slightly sweet somen of the owner\'s Hokkaido home with seasoned rice and shaved ice. About ¥1,300–1,700; the owner speaks English.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Hokkaido (March 2025 review).',
      background: 'Opened 3 June 2024 (Tabelog). The owner recreates the flavours of a family home in Hokkaido (September 2024 review) and used to work as a restaurant consultant (November 2025 review); English picked up from customers (June 2025 review).',
      philosophy: 'Somen eaten warm, the Hokkaido way — "a different flavour of nyumen from Kansai and Kanto" (shop sign, March 2025 review).',
      specialty: 'Hokkaido-style warm somen.',
      anecdotes: [
        { text: 'A January 2025 regular finally got the Hokkaido-style somen, which on an earlier visit was off because the owner was not happy with the taste that day.', source: R + 'B491790528/' },
        { text: 'A March 2025 couple followed the smell of dashi into the alley and found the downstairs counter full of Western tourists.', source: R + 'B502597851/' },
        { text: 'A September 2024 diner who skipped the shaved ice was given some anyway, and found it the best thing there.', source: R + 'B491790528/' },
      ],
      japanese_sources_summary: '食べログ: めん屋 東太郎、麺類、中京区道祐町135-1 三条食彩ろぉじ なずなの舗、地下鉄烏丸御池駅・四条駅、阪急烏丸駅から徒歩5分、毎日 8:00〜19:00 (L.O. 18:30)、休みは変わる場合あり、カード・電子マネー・QR 可、18席、禁煙、2024年6月3日オープン。口コミ (2024〜2026年、英語): そうめんの専門店、店主は Hokkaido の出身で実家の味を再現、Hokkaido の昆布、donko しいたけ、ごぼう、鶏をひと晩煮たスープ、Ibo no Ito の麺、Omi の鴨のつけ汁のそうめん、釜玉そうめん、炊き込みご飯、抹茶のかき氷、店主は元飲食店のコンサルタント、英語が話せる。',
      confidence: 'medium', sources: [TB, R + 'B487751926/', R + 'B491790528/', R + 'B502198964/', R + 'B502597851/', R + 'B511341139/', R + 'B516657595/', R + 'B532019928/'] },
    cultural_comfort: { level: 'english', note: 'The owner speaks English (June 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通り下る道祐町135-1 三条食彩ろぉじ なずなの舗',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008265, 135.763409); cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487751926/', R + 'B491790528/', R + 'B502597851/'],
    price_note: 'Prices from 2024–25 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hokkaido-style somen (hot) with seasoned rice', '¥1,700', 'Somen', 'no', 'no', 'March 2025 review.', 'hokkaido'),
      it('', '', 'Duck-broth somen (hot or cold)', '¥1,300', 'Somen', 'no', 'no', 'July 2024 review; set with seasoned rice ¥1,600 (September 2024).', 'kamo'),
      it('', '', 'Kama-tama somen (hot)', '¥800', 'Somen', 'no', 'no', 'July 2024 review; a cold version in July 2026.', 'kamatama'),
      it('', '', 'Matcha kakigori', '', 'Dessert', 'ask', 'ask', '2024–26 reviews.', 'kakigori'),
    ] }, {
    cuisine: '朝から Hokkaido 風の温かいそうめん: Hokkaido の昆布、donko しいたけ、ごぼう、鶏をひと晩煮たスープの Hokkaido の味のそうめん (2024〜25年)、麺は Ibo no Ito。Omi の鴨のつけ汁のそうめん 温・冷 (1,300円、2024年7月。炊き込みご飯のセット1,600円、2024年9月)、釜玉そうめん800円 (2024年7月)、炊き込みご飯のセット1,700円 (2025年3月)、抹茶のかき氷 (2024〜26年)',
    neighborhood: '三条堺町。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦のそうめん (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。Hokkaido 風のスープに鶏、ほかは鴨と卵 (2024〜25年の口コミ)。',
    notes: '[そうめん・三条] 三条の路地の朝8時からのそうめんの専門店。店主の故郷 Hokkaido の、温かくほんのり甘いそうめんを炊き込みご飯とかき氷と。1,300〜1,700円ほど、店主は英語が話せる。',
  });
}

// ================================================================ 左右田商店喫茶室
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040665/'; const R = TB + 'dtlrvwlst/';
  const D = day(['08:30', '16:00']);
  put({
    id: 'kyoto_soda_shoten_kissa', name: '左右田商店喫茶室 (Soda Shoten Kissa Shitsu)', category: 'OMNI',
    lat: 34.998263, lng: 135.76398, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is toast and baguette sandwiches; coffee and tea only (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea; the food has egg, bacon, ham or cheese (2025–26 reviews).',
    hours_raw: 'Wed–Sat 8:30–16:00; closed Mon, Tue and Sun; hours may change (Tabelog). A February 2025 review gives an 8:00 opening and an October 2025 review a morning drink set 8:00–11:00; an April 2024 visitor found it shut twice. Cards, e-money and PayPay (Tabelog). 5 counter seats; non-smoking (Tabelog). Takeaway coffee (February 2025 review). In a quiet residential street of Shimogyo, about 490 m from Kiyomizu-Gojo Stn (Tabelog; February 2026 review).',
    hours: { 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogyo, near Gojo — about 490 m from Kiyomizu-Gojo Stn',
    cuisine: 'Morning kissa: Toast A ¥500 (toast and boiled egg), Toast B ¥700 (toast, salad, bacon and egg, carrot rapée), baguette sandwiches of tamagoyaki ¥550, ham and cheese or tandoori chicken; a drink for ¥200 more 8:00–11:00 (October 2025; February 2026); blend coffee ¥450, mild or strong, from Beans Tei beans (2025–26); firm caramel pudding (2024–25)',
    website: null, gmaps: gm('左右田商店喫茶室'), menu_url: null,
    notes: '[Kissa · Shimogyo] A five-seat counter kissa where the owner, working alone, brews each coffee to order and makes thick toast breakfasts and a fluffy tamagoyaki baguette. Under ¥1,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner runs the shop alone (February 2025 and February 2026 reviews). Opened as a place for locals to gather over coffee (October 2025 review).',
      philosophy: 'A place where locals can gather and enjoy coffee at leisure (October 2025 review).',
      specialty: 'Tamagoyaki baguette sandwich; pudding.',
      anecdotes: [
        { text: 'A February 2025 couple let a takeaway customer go first, and got a free coffee refill from the owner in thanks.', source: R + 'B499665532/' },
        { text: 'A February 2026 guest asked for a café au lait and was given warm milk at no charge.', source: R + 'B524494691/' },
        { text: 'A May 2026 visitor called the tamagoyaki in the baguette the best omelette ever eaten, as several groups were turned away.', source: R + 'B527807171/' },
      ],
      japanese_sources_summary: '食べログ: 左右田商店喫茶室、喫茶店、下京区忠庵町307-1、清水五条駅から490m、水〜土 8:30〜16:00、月・火・日曜休み、カード・電子マネー・PayPay 可、カウンター5席、禁煙。口コミ (2024〜2026年、英語): 店主が一人で営む、Toast A 500円、Toast B 700円、卵焼きのバゲットサンド550円、8:00〜11:00は飲み物が200円、ブレンドコーヒー450円 (マイルドとビター)、Beans Tei の豆、固めのプリン、テイクアウト可。',
      confidence: 'medium', sources: [TB, R + 'B490569648/', R + 'B499665532/', R + 'B515299616/', R + 'B524494691/', R + 'B527807171/', R + 'B532296156/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; overseas guests common (2024–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区忠庵町307-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.998263, 135.763980); cross-checked: GSI 京都府京都市下京区忠庵町307番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515299616/', R + 'B532296156/'],
    price_note: 'Prices from October 2025 and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Toast A (toast and boiled egg)', '¥500', 'Morning', 'no', 'no', 'October 2025 review.', 'toast_a'),
      it('', '', 'Toast B (toast, salad, bacon and egg)', '¥700', 'Morning', 'no', 'no', 'October 2025 and February 2026 reviews.', 'toast_b'),
      it('', '', 'Tamagoyaki baguette sandwich', '¥550', 'Sandwiches', 'no', 'no', 'October 2025 review.', 'tamago_sand'),
      it('', '', 'Blend coffee (mild or strong)', '¥450', 'Drinks', 'ask', 'ask', 'July 2026 review; ¥200 with food 8:00–11:00 (October 2025).', 'coffee'),
      it('', '', 'Pudding', '', 'Sweets', 'ask', 'no', '2024–25 reviews.', 'pudding'),
    ] }, {
    cuisine: '朝の喫茶: Toast A 500円 (トーストとゆで卵)、Toast B 700円 (トースト、サラダ、ベーコンエッグ、キャロットラペ)、卵焼き550円・ハムとチーズ・タンドリーチキンのバゲットサンド、8:00〜11:00は飲み物が200円 (2025年10月、2026年2月)、ブレンドコーヒー450円 マイルドとビター、Beans Tei の豆 (2025〜26年)、固めのカラメルプリン (2024〜25年)',
    neighborhood: '下京区、五条の近く。清水五条駅から490mほど',
    gf_detail: 'グルテンフリー不可。食事はトーストとバゲットサンド。コーヒーと紅茶のみ (2025〜26年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーと紅茶。食事は卵、ベーコン、ハム、チーズ入り (2025〜26年の口コミ)。',
    notes: '[喫茶・下京] 店主が一人で営むカウンター5席の喫茶店。注文ごとにコーヒーを淹れ、厚切りトーストのモーニングとふわふわの卵焼きのバゲットサンド。1,000円以内。',
  });
}

save();
