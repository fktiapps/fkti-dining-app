// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 18.
//   core queue (the last four even ids):
//   + 三国そば Mikuni Soba (standing soba by Hankyu Mikuni Station, 6:00 breakfast, a no-salt-added kombu and bonito dashi)
//   + らーめん Stand R&R 3号店 Ramen Stand R&R 3 gou ten (rich chicken paitan by Route 176, open to midnight or 2:00)
//   - skipped 27064186 とり倉 大阪三国本店: existence not confirmed, the newest Tabelog review is dated August 2024 (read 2026-11-02);
//     27011030 天下一品 三国店: chain already in data (osaka_tenka_ippin_namba_wins, osaka_tenka_ippin_shinsaibashi).
//   The even-id core list is now empty for shin-osaka, so per the integrator (2026-11-02) the rest come from `next notable 80 shin-osaka`:
//   + 熟成うどん なかや Jukusei Udon Nakaya (aged udon by Higashi-Mikuni Station; Tabelog Udon WEST 100, 2024)
//   + OSORACAFE (オソラカフェ) (fruit café in a former fruit shop by Nishinakajima-Minamigata; Tabelog Cafe WEST 100, 2025)
//   Lane check: every id above is even. Taken in queue order after the skips.
//   Chain check:
//   - R&R: the "3号店" name and a web search (2026-11-02) show a 2号店 in Nishiyodogawa (FooTinder, which says it is another brand of
//     Yume Yatai). Three R&R shops at most = small group, kept. No R&R shop is in data.
//   - Mikuni Soba, Nakaya and OSORACAFE name no other shop.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Ramen block: R&R is not described on all six dimensions (no aroma), so none.
//   open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27064186', 'existence not confirmed: the newest Tabelog review is dated August 2024 (read 2026-11-02); Tabelog hours list no recent update');
skip('27011030', 'chain already in data: Tenka Ippin (osaka_tenka_ippin_namba_wins, osaka_tenka_ippin_shinsaibashi)');

// ================================================================ 三国そば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27012006/'; const R = TB + 'dtlrvwlst/';
  const D = day(['06:00', '09:00'], ['11:00', '15:00']);
  put({
    id: 'osaka_mikuni_soba_nishimikuni', name: '三国そば (Mikuni Soba)', category: 'OMNI',
    lat: 34.738592, lng: 135.483502, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: standing soba and udon in a soy-seasoned broth; tempura and curry on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is made with several kinds of bonito (Tabelog shop text).',
    hours_raw: 'Tue–Sat 6:00–9:00 and 11:00–15:00; closed Sunday and Monday, plus a few days at New Year and Obon (Tabelog). Closed for a week from Thursday 29 October to Wednesday 4 November 2026 (October 2026 review). No longer open in the evening since a change of management (June 2026). No reservations; cash only; no charge (Tabelog). Standing only: about nine or ten places at the counter, 16 on Tabelog; a line at opening and at lunch, but it moves fast (2026). Non-smoking; takeout (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西三国4丁目8-19 — 2 min from Hankyu Mikuni Stn (Tabelog), in front of the station (December 2025)',
    cuisine: 'Standing soba and udon built on the dashi: natural kombu and several kinds of bonito, warmed slowly and rested, seasoned with low-salt light soy sauce and mirin and no added salt (Tabelog shop text) · meat soba or beef udon ¥600, with onion, fried tofu and tororo kombu (2026); wakame and sweet fried tofu soba with an onigiri ¥630 (June 2026); zaru soba ¥450, large +¥120, quail egg in the dip (August 2026); tempura soba, stamina soba with egg (2026) · curry soba and curry udon, spice and sweetness to order (Tabelog shop text; 2026) · onigiri ¥100 (September 2026) · house kombu and shiitake tsukudani to take away, ¥300 per 100 g (Tabelog)',
    website: null, gmaps: gm('三国そば 西三国'), menu_url: null,
    notes: "[Soba · Mikuni, a standing soba bar that opens at 6:00 for its dashi] A standing soba counter in front of Hankyu Mikuni Station with a line before it opens at 6:00 (April 2026). The draw is the dashi, kombu and several bonitos, warmed slowly and seasoned with light soy and mirin but no added salt (Tabelog shop text). Order the meat soba or beef udon for ¥600, add an onigiri for ¥100, or try the curry soba, made as hot or sweet as you ask (2026). The lunch line moves fast (2026). Closed Sunday and Monday, and closed from 29 October to 4 November 2026. Cash only.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)'], origin: null, background: 'Tabelog shop text: a shop devoted to dashi, natural kombu and several bonitos, seasoned with low-salt light soy and mirin without added salt; homemade kombu and shiitake tsukudani; seasonal dishes; featured on a local TV programme. A June 2026 diner who has come since school days notes that the management has changed and the shop no longer opens in the evening.', philosophy: 'Dashi first: umami, depth and aroma, with no added salt (Tabelog shop text).', specialty: 'Meat soba; curry soba.',
      anecdotes: [
        { text: '"On a Saturday morning in April 2026, I arrived before 6 AM to find a line forming." — April 2026, meat soba for JPY 600.', source: R + 'B487629431/' },
        { text: '"The dashi here is truly exceptional—it\'s not an exaggeration to say it\'s the best in the world." — February 2026, tempura soba and onigiri.', source: R + 'B509375964/' },
        { text: '"The dipping sauce includes quail eggs, which makes it smooth and delicious." — August 2026, zaru soba for JPY 450.', source: R + 'B533511530/' },
      ],
      japanese_sources_summary: '食べログ: 三国そば、そば・うどん・おにぎり、大阪市淀川区西三国4丁目8-19-112、阪急 三国駅から徒歩2分、火〜土 6:00〜9:00、11:00〜15:00、日・月休み、年末年始とお盆に数日休み、予約不可、現金のみ、チャージなし、立ち食い16席、禁煙、テイクアウト、昆布の佃煮100g 300円。店の紹介: だしにこだわり、天然昆布と数種の鰹節、減塩の薄口醤油とみりんで、塩は足さない、じっくり温めて寝かせる、カレーは辛さと甘さを調整できる、季節の味、地元の番組で紹介。口コミ (2024年7月〜2026年10月): 朝6時前から行列、肉そばと肉うどん600円 (玉ねぎ、きつね、とろろ昆布)、わかめときつねのそばとおにぎり630円、ざるそば450円 (大盛り120円、つゆにうずらの卵)、天ぷらそば、スタミナそば、カレーそばとカレーうどん、おにぎり100円、経営が変わって夜はやらなくなった、2026年10月29日から11月4日まで休み。',
      confidence: 'medium', sources: [TB, R + 'B404403885/', R + 'B427344655/', R + 'B487629431/', R + 'B489396964/', R + 'B509375964/', R + 'B518282190/', R + 'B529670623/', R + 'B532445614/', R + 'B533511530/', R + 'B535616773/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; order at the counter, eat quickly. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西三国4丁目8-19-112',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026. Closed 29 October to 4 November 2026 per an October 2026 review.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西三国四丁目8番19号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B487629431/', R + 'B489396964/', R + 'B533511530/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat soba', '¥600', 'Soba', 'no', 'no', 'April and September 2026.', 'niku_soba'),
      it('', '', 'Beef udon', '¥600', 'Udon', 'no', 'no', 'October 2026.', 'niku_udon'),
      it('', '', 'Zaru soba', '¥450', 'Soba', 'no', 'no', 'August 2026; large +¥120.', 'zaru_soba'),
      it('', '', 'Onigiri', '¥100', 'Rice', 'ask', 'ask', 'September 2026.', 'onigiri'),
    ] }, {
    cuisine: 'だしが主役の立ち食いのそばとうどん: 天然昆布と数種の鰹節をじっくり温めて寝かせ、減塩の薄口醤油とみりんで、塩は足さない (食べログの店の紹介)・肉そばか肉うどん600円、玉ねぎ、きつね、とろろ昆布入り (2026年)。わかめときつねのそばにおにぎりで630円 (2026年6月)。ざるそば450円、大盛り120円、つゆにうずらの卵 (2026年8月)。天ぷらそば、卵のスタミナそば (2026年)・カレーそばとカレーうどん、辛さと甘さは注文のときに (食べログの店の紹介。2026年)・おにぎり100円 (2026年9月)・自家製の昆布と椎茸の佃煮を持ち帰りで、100g 300円 (食べログ)',
    neighborhood: '西三国4丁目8-19。阪急 三国駅から徒歩2分 (食べログ)。駅の前 (2025年12月)',
    gf_detail: 'グルテンフリーではありません。醤油味のつゆの立ち食いのそばとうどん。天ぷらやカレーもある。',
    vegan_detail: 'ヴィーガンではありません。だしに数種の鰹節を使う (食べログの店の紹介)。',
    notes: '[そば・三国、朝6時からだしで勝負する立ち食いそば] 阪急 三国駅の前の立ち食いそばのカウンターで、朝6時の開店前から行列 (2026年4月)。目当てはだしで、昆布と数種の鰹節をじっくり温め、薄口醤油とみりんで味をつけ、塩は足さない (食べログの店の紹介)。頼むなら600円の肉そばか肉うどんに、100円のおにぎり。辛さや甘さを好みにできるカレーそばも (2026年)。昼の行列はすぐ進む (2026年)。日曜と月曜休み。2026年10月29日から11月4日までは休み。現金のみ。',
  });
}

// ================================================================ らーめん Stand R&R 3号店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270302/27132228/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '16:00'], ['17:00', '00:00']); const F = day(['11:00', '16:00'], ['17:00', '02:00']);
  put({
    id: 'osaka_ramen_stand_rr_3_mikuni', name: 'らーめん Stand R&R 3号店 (Ramen Stand R&R 3 Gou Ten)', category: 'OMNI',
    lat: 34.735261, lng: 135.481865, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried rice and kara-age in the sets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken paitan broth with chashu.',
    hours_raw: 'Mon–Thu and Sun 11:00–16:00 and 17:00–24:00; Fri–Sat 11:00–16:00 and 17:00–02:00; hours may change (Tabelog). No reservations; Tabelog lists no cards, e-money or QR. Ticket machine (2026). 10 counter seats; non-smoking (Tabelog). A short wait at weekday lunch (May 2026). No parking, but a nearby lot is partnered (May 2026). Student ID gets a free seasoned egg (February 2026). Points card (May 2026). Opened 14 October 2022 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: '新高4-1-43 — on Route 176, about 240 m from Hankyu Mikuni Stn (Tabelog; February 2026)',
    cuisine: 'Chicken paitan ramen (2026) · rich chicken paitan, thick and creamy, chicken and vegetables, with flat wavy noodles, chopped onion and green onion ¥990, with seasoned egg ¥1,090 (February 2026) · "super rich" paitan ¥1,090 (April 2026); extra-rich kake ramen ¥990 (October 2026) · light chicken-salt ramen with yuzu (March 2026) · choice of chashu, chicken among them (May 2026) · weekday sets ¥990: A, ramen with half egg fried rice; B, ramen with two kara-age and rice (June and September 2026) · condiments: orange vinegar, black pepper, garlic chili, black shichimi, sesame pepper, extra ramen tare, spicy garlic chives (2026) · bottled beer (July 2026)',
    website: null, gmaps: gm('らーめん Stand R&R 3号店 新高'), menu_url: null,
    notes: "[Ramen · Mikuni, thick chicken paitan by Route 176 until late] A 10-seat counter on Route 176 near Hankyu Mikuni serving a thick, creamy chicken paitan that clings to flat wavy noodles, sharpened with chopped onion, ¥990 (2026). Go \"super rich\" if you like it dense, or try the lighter chicken-salt bowl with yuzu (2026). The weekday ¥990 sets, ramen with half fried rice or with kara-age and rice, are the local lunch (2026). A row of condiments, from orange vinegar to garlic chili, lets you change the bowl halfway (2026). Open to midnight, and to 2:00 on Friday and Saturday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 14 October 2022 (Tabelog). The third R&R shop; a second is in Nishiyodogawa (web search 2026-11-02). Reviewers: one young staff member ran the evening alone, offering a paper apron and warning that the bowl was hot (June 2026).', philosophy: null, specialty: 'Rich chicken paitan ramen.',
      anecdotes: [
        { text: '"The high-viscosity, thick white broth clings perfectly to the flat, wavy noodles, making it almost like a \'drinkable noodle\' experience." — April 2026, super rich chicken paitan for JPY 1,090.', source: R + 'B526625775/' },
        { text: '"This place is known for its ramen, but the fried rice is absolutely amazing!!" — January 2026.', source: R + 'B496746690/' },
        { text: '"On the table, you can find orange vinegar, black pepper, garlic chili, black shichimi, and sesame pepper for flavor adjustments." — September 2026, weekday lunch set B for JPY 990.', source: R + 'B535163190/' },
      ],
      japanese_sources_summary: '食べログ: らーめん Stand R&R 3号店、ラーメン・つけ麺、大阪市淀川区新高4-1-43、三国駅から239m、月〜木・日11:00〜16:00、17:00〜24:00、金・土11:00〜16:00、17:00〜翌2:00、予約不可、カード・電子マネー・QR 不可、カウンター10席、禁煙、2022年10月14日オープン。口コミ (2026年1〜10月): 国道176号ぞい、提携の駐車場、学生証で味玉サービス、ポイントカード、券売機、濃厚鶏白湯 (鶏と野菜、とろり) に平打ちのちぢれ麺、玉ねぎのみじん切り、990円、味玉つき1,090円、超濃厚1,090円、濃厚かけラーメン990円、柚子の淡麗鶏塩ラーメン、チャーシューを選べる、平日のセット990円 (A はラーメンと半チャーハン、B はラーメンとから揚げ2個とライス)、卵チャーハンがうまい、卓上に orange vinegar、黒胡椒、にんにく唐辛子、黒七味、sesame pepper、追加のタレ、辛いニラ、瓶ビール、夜はひとりで回す若いスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B455271682/', R + 'B455757534/', R + 'B496746690/', R + 'B523318407/', R + 'B525222697/', R + 'B526625775/', R + 'B529312813/', R + 'B530294136/', R + 'B531836612/', R + 'B535163190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; many condiments on the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区新高4-1-43',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区新高四丁目1番43号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B455271682/', R + 'B526625775/', R + 'B535163190/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich chicken paitan ramen', '¥990', 'Ramen', 'no', 'no', 'February 2026; with seasoned egg ¥1,090.', 'noukou_paitan'),
      it('', '', 'Super rich chicken paitan ramen', '¥1,090', 'Ramen', 'no', 'no', 'April 2026.', 'chou_noukou'),
      it('', '', 'Weekday set A: ramen and half egg fried rice', '¥990', 'Sets', 'no', 'no', 'June 2026.', 'set_a'),
      it('', '', 'Weekday set B: ramen, two kara-age and rice', '¥990', 'Sets', 'no', 'no', 'September 2026.', 'set_b'),
    ] }, {
    cuisine: '鶏白湯ラーメン (2026年)・とろりと濃い鶏と野菜の濃厚鶏白湯に、平打ちのちぢれ麺、玉ねぎのみじん切り、青ねぎで990円、味玉つき1,090円 (2026年2月)・超濃厚1,090円 (2026年4月)。濃厚かけラーメン990円 (2026年10月)・柚子のきいた淡麗鶏塩ラーメン (2026年3月)・チャーシューは鶏などから選べる (2026年5月)・平日のセット990円: A はラーメンと半分の卵チャーハン、B はラーメンとから揚げ2個とライス (2026年6月と9月)・卓上: orange vinegar、黒胡椒、にんにく唐辛子、黒七味、sesame pepper、追加のラーメンのタレ、辛いニラ (2026年)・瓶ビール (2026年7月)',
    neighborhood: '新高4-1-43。国道176号ぞい、阪急 三国駅から約240m (食べログ。2026年2月)',
    gf_detail: 'グルテンフリーではありません。小麦の麺。セットにはチャーハンとから揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープにチャーシュー。',
    notes: '[ラーメン・三国、国道176号ぞいの夜おそくまでの濃厚鶏白湯] 阪急 三国駅の近く、国道176号ぞいのカウンター10席の店。とろりと濃い鶏白湯が平打ちのちぢれ麺にからみ、玉ねぎのみじん切りで引きしめる。990円 (2026年)。濃いのが好きなら「超濃厚」、軽めなら柚子の鶏塩も (2026年)。平日の990円のセット、ラーメンに半チャーハンか、から揚げとライスが地元のランチ (2026年)。orange vinegar からにんにく唐辛子まで、卓上の調味料で途中で味を変えられる (2026年)。夜12時まで、金曜と土曜は2時まで。',
  });
}

// ================================================================ 熟成うどん なかや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27053546/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:15', '14:15'], ['18:00', '21:30']); const SA = day(['11:15', '14:15'], ['17:30', '21:30']);
  put({
    id: 'osaka_jukusei_udon_nakaya_higashimikuni', name: '熟成うどん なかや (Jukusei Udon Nakaya)', category: 'OMNI',
    lat: 34.739158, lng: 135.497353, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat udon; tempura and fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and chikuwa tempura, duck and pork dishes, dashi broths.',
    hours_raw: 'Mon–Fri 11:15–14:15 and 18:00–21:30; Sat and holidays 11:15–14:15 and 17:30–21:30; last entry at lunch 14:00; closed Sunday and Monday holidays, some other holidays, New Year, Golden Week and Obon; may close early when the noodles run out (Tabelog). Reservations by phone for parties, or for seats if spending ¥2,000–3,000 a head (the listing gives both figures) (Tabelog). Cash only (Tabelog; September 2026). 25 seats: 5 at the counter and 20 at tables; non-smoking; children welcome, kids\' udon (Tabelog). Lines at weekday lunch (2026). Opened 15 November 2010 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '宮原5-3-52, ground floor of フォルム新大阪 — 2 min from Exit 5 of Higashi-Mikuni Stn (Tabelog)',
    cuisine: 'Aged udon: thick, firm, chewy noodles, best cold (2026); Tabelog Udon WEST 100, 2024 · torichiku-ten bukkake (chicken and chikuwa tempura) ¥980 (September and October 2026); hot torichiku-ten udon with kayaku rice ¥980 (October 2026); cold version ¥1,100 (July 2026) · chikuwa-tempura kitsune tororo udon ¥980 (September 2026) · Nakaya duck udon ¥1,100: a warm duck dip with cherry tomatoes, lemon and soft-boiled egg (October 2026); kamo-tama udon (October 2026) · today\'s set of bukkake udon and a rice bowl (pork bowl, kakiage bowl) ¥930 (2026); a little extra udon free (October 2026) · izakaya at night: katsuo fry with tartar sauce (October 2026); mega chuhai; lemon hiyakake udon to finish (July 2024)',
    website: null, gmaps: gm('熟成うどん なかや 東三国'), menu_url: null,
    notes: "[Udon · Higashi-Mikuni, aged udon with a Tabelog Udon 100 badge] A neighbourhood udon shop two minutes from Higashi-Mikuni Station, in the Tabelog Udon 100 for 2024, with thick, firm, chewy aged noodles at their best served cold (2026). At lunch take the torichiku-ten bukkake, crisp chicken and chikuwa tempura over cold udon for ¥980, or the ¥930 set of udon and a rice bowl; expect a line on weekdays (2026). At night it is also an izakaya: try the duck dipping udon with cherry tomatoes, ¥1,100, and a katsuo fry (October 2026). Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 15 November 2010; Tabelog Udon WEST 100, 2024 (Tabelog). Reviewers call it the best udon in the neighbourhood and note fast service at lunch (2026).', philosophy: null, specialty: 'Torichiku-ten bukkake; duck dipping udon.',
      anecdotes: [
        { text: '"Both the chicken tempura and the chikuwa tempura were freshly fried and crispy, and the udon had an incredible chewiness that is probably the best in this area." — September 2026, torichiku-ten bukkake for JPY 980.', source: R + 'B458952357/' },
        { text: '"I was pleasantly surprised to see mini tomatoes floating in the dipping sauce; it was a lovely touch." — October 2026, Nakaya duck udon for JPY 1,100.', source: R + 'B537350423/' },
        { text: '"As always, the noodles had a nice firm texture. This consistency is what I love about it." — October 2026, today\'s set for JPY 930.', source: R + 'B531929054/' },
      ],
      japanese_sources_summary: '食べログ: 熟成うどん なかや、うどん・居酒屋・うどんすき、うどん WEST 百名店 2024、大阪市淀川区宮原5-3-52 フォルム新大阪 1F、東三国駅5番出口から徒歩2分、月〜金11:15〜14:15、18:00〜21:30、土・祝11:15〜14:15、17:30〜21:30、昼の入店は14:00まで、日曜と祝日の月曜休み、麺がなくなれば早じまい、宴会や1人2,000〜3,000円以上なら電話で席の予約可、現金のみ、25席 (カウンター5、テーブル20)、禁煙、子ども可、2010年11月15日オープン。口コミ (2024年7月〜2026年10月): 太くてかためでもちもちの麺、冷たいのがいい、とりちく天ぶっかけ980円、温かいとりちく天うどんとかやくご飯980円、冷たいのは1,100円、ちくわ天のきつねとろろうどん980円、なかやの鴨うどん1,100円 (温かい鴨のつけ汁にミニトマト、レモン、半熟卵)、鴨玉うどん、日替わりのセット (ぶっかけうどんと豚肉の丼やかき揚げの丼) 930円、少し大盛りは無料、夜は居酒屋で、カツオのフライのタルタル、メガ酎ハイ、しめのレモンの冷やかけ、平日の昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B458952357/', R + 'B469620567/', R + 'B526808812/', R + 'B527409221/', R + 'B531929054/', R + 'B536533953/', R + 'B536547141/', R + 'B537350423/', R + 'B538399895/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; set menu at lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原5-3-52 フォルム新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原五丁目3番52号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B458952357/', R + 'B531929054/', R + 'B537350423/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Torichiku-ten bukkake udon (chicken and chikuwa tempura)', '¥980', 'Udon', 'no', 'no', 'September and October 2026.', 'torichiku_bukkake'),
      it('', '', 'Today\'s set: bukkake udon and a rice bowl', '¥930', 'Lunch', 'no', 'no', 'October 2026.', 'higawari_set'),
      it('', '', 'Nakaya duck udon (dipping)', '¥1,100', 'Udon', 'no', 'no', 'October 2026.', 'kamo_udon'),
      it('', '', 'Chikuwa-tempura kitsune tororo udon', '¥980', 'Udon', 'no', 'no', 'September 2026.', 'kitsune_tororo'),
    ] }, {
    cuisine: '熟成うどん: 太くてかためでもちもちの麺、冷たいのがいちばん (2026年)。食べログ うどん WEST 百名店 2024・とりちく天ぶっかけ (とり天とちくわ天) 980円 (2026年9月と10月)。温かいとりちく天うどんとかやくご飯980円 (2026年10月)。冷たいのは1,100円 (2026年7月)・ちくわ天のきつねとろろうどん980円 (2026年9月)・なかやの鴨うどん1,100円: 温かい鴨のつけ汁にミニトマト、レモン、半熟卵 (2026年10月)。鴨玉うどん (2026年10月)・日替わりのセット、ぶっかけうどんと丼 (豚肉の丼、かき揚げの丼) 930円 (2026年)。少し大盛りは無料 (2026年10月)・夜は居酒屋: カツオのフライのタルタル (2026年10月)。メガ酎ハイ。しめにレモンの冷やかけうどん (2024年7月)',
    neighborhood: '宮原5-3-52、フォルム新大阪の1階。東三国駅5番出口から徒歩2分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。太い小麦のうどん。天ぷらや揚げ物。',
    vegan_detail: 'ヴィーガンではありません。とり天とちくわ天、鴨や豚の料理、だしのつゆ。',
    notes: '[うどん・東三国、うどん百名店の熟成うどん] 東三国駅から徒歩2分の町のうどん屋で、食べログのうどん百名店 2024。太くてかためでもちもちの熟成麺は、冷たいのがいちばん (2026年)。昼はとりちく天ぶっかけ、揚げたてのとり天とちくわ天を冷たいうどんに980円、またはうどんと丼の930円のセット。平日は行列 (2026年)。夜は居酒屋にもなり、ミニトマト入りの鴨のつけうどん1,100円や、カツオのフライを (2026年10月)。現金のみ。日曜休み。',
  });
}

// ================================================================ OSORACAFE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27092990/'; const R = TB + 'dtlrvwlst/'; const W = 'https://osoracafe-1935.com';
  const D = day(['10:00', '16:30']);
  put({
    id: 'osaka_osoracafe_nishinakajima', name: 'オソラカフェ (OSORACAFE)', category: 'OMNI',
    lat: 34.726375, lng: 135.499014, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Fresh fruit and juices, but parfaits come with rusks and granola, and there are fruit sandwiches and toast.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Juices and smoothies are built on fresh fruit, but no source says whether milk is added; parfaits use cream and ice cream.',
    hours_raw: 'Daily 10:00–16:30 (last order 16:00); irregular closing days, check the website, Instagram or Facebook (Tabelog). Reservations online through the website; most guests reserve, though walk-ins sometimes get a table (Tabelog; September–October 2026). Cards and PayPay accepted (Tabelog). A small room of tables and a few counter seats; narrow for strollers and wheelchairs (September 2026). Non-smoking; children welcome; takeout (Tabelog). No photos of the menu (Tabelog). Weekday breakfast set (October 2026). Opened 26 January 2016 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-18-8 — 1 min from Nishinakajima-Minamigata Stn and Hankyu Minamikata Stn, 12 min from Shin-Osaka (Tabelog)',
    cuisine: 'Fruit café in a former fruit shop; Tabelog Cafe WEST 100, 2025 (Tabelog; September 2026) · fruit plates with a drink, e.g. fig plate ¥3,800 (September 2026); pear and grape plates (October 2026) · parfaits: Earl Grey with grapes and pears, Halloween parfait of persimmon, fig and grapes with black sesame ice cream; house rusks and granola (October 2026) · Premium Maboroshi Kinsyu peach toast, cheese +¥500 (September 2026) · juices and smoothies: peach juice ¥999, "Momo Momo Momo" smoothie ¥999, peach smoothie (September–October 2026) · premium iced coffee ¥680, royal milk tea (October 2026) · weekday breakfast set, half size available: bite-size fruit sandwich, salad, pear rusk (October 2026) · a little extra fruit often comes on the side (2026)',
    website: W, gmaps: gm('OSORACAFE 西中島'), menu_url: null,
    notes: "[Café · Nishinakajima, fruit plates and parfaits from a former fruit shop] A small café by Nishinakajima-Minamigata Station that grew out of a fruit shop and serves the fruit at its peak: fig and pear plates, Earl Grey parfaits with grapes and pears, and peach smoothies thick with real fruit (2026). The staff explain the varieties and often add a piece of fruit on the side, even with a coffee (October 2026). It is in the Tabelog Cafe 100 for 2025. Prices are high, a fruit plate with a drink near ¥4,000, but juices and coffee are under ¥1,000 (2026). Book online; no photos of the menu. 10:00–16:30, irregular days off.",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 26 January 2016; Tabelog Cafe WEST 100, 2025 (Tabelog). Reviewers: the café used to be a fruit shop (September–October 2026); staff explain the condition and varieties of the fruit (September–October 2026).', philosophy: null, specialty: 'Seasonal fruit plates and parfaits.',
      anecdotes: [
        { text: '"Of course, the fruits were exceptionally delicious." — October 2026, Earl Grey parfait.', source: R + 'B538248873/' },
        { text: '"What delighted me was that, despite only ordering coffee, I was pleasantly surprised with a complimentary grape." — October 2026, premium iced coffee for JPY 680.', source: R + 'B538194574/' },
        { text: '"At first glance at the menu, I was taken aback by the prices, thinking, \'Did I choose the wrong place...?\'" — September 2026, peach toast with extra cheese.', source: R + 'B536564043/' },
      ],
      japanese_sources_summary: '食べログ: オソラカフェ (OSORACAFE)、カフェ、カフェ WEST 百名店 2025、大阪市淀川区西中島3-18-8、西中島南方駅と阪急 南方駅から徒歩1分、新大阪駅から徒歩12分、毎日10:00〜16:30 (L.O. 16:00)、不定休はサイトや Instagram、Facebook で、予約はサイトから、カードと PayPay 可、禁煙、子ども可、テイクアウト、メニューの撮影は禁止、2016年1月26日オープン。口コミ (2026年9〜10月): 元は果物屋、イチジクのプレートとドリンク3,800円、梨とぶどう、アールグレイのパフェ、ハロウィンのパフェ (柿、イチジク、ぶどう、黒ごまアイス)、自家製ラスクとグラノーラ、Premium Maboroshi Kinsyu の桃のトースト (チーズ500円)、桃のジュース999円、「Momo Momo Momo」スムージー999円、プレミアムアイスコーヒー680円、ロイヤルミルクティー、平日のモーニング、果物を少しおまけしてくれる、品種の説明がていねい、値段は高め、予約の客が多い、席は少なくて通路はせまい。',
      confidence: 'medium', sources: [TB, W, R + 'B536360700/', R + 'B536548749/', R + 'B536564043/', R + 'B536769662/', R + 'B536994046/', R + 'B537018059/', R + 'B537570820/', R + 'B537896572/', R + 'B538194574/', R + 'B538248873/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; staff explain the fruit; no menu photos. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-18-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目18番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536548749/', R + 'B536769662/', R + 'B538194574/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fig plate with a drink', '¥3,800', 'Fruit plates', 'ask', 'ask', 'September 2026.', 'fig_plate'),
      it('', '', 'Peach juice', '¥999', 'Drinks', 'ask', 'ask', 'September 2026.', 'peach_juice'),
      it('', '', '"Momo Momo Momo" smoothie', '¥999', 'Drinks', 'ask', 'ask', 'October 2026; limited time.', 'momo_smoothie'),
      it('', '', 'Premium iced coffee', '¥680', 'Drinks', 'ask', 'ask', 'October 2026.', 'iced_coffee'),
    ] }, {
    cuisine: '元果物屋のフルーツカフェ。食べログ カフェ WEST 百名店 2025 (食べログ。2026年9月)・ドリンクつきのフルーツのプレート、たとえばイチジク3,800円 (2026年9月)。梨とぶどう (2026年10月)・パフェ: ぶどうと梨のアールグレイ、柿とイチジクとぶどうに黒ごまアイスのハロウィン。自家製のラスクとグラノーラ (2026年10月)・Premium Maboroshi Kinsyu の桃のトースト、チーズ500円 (2026年9月)・ジュースとスムージー: 桃のジュース999円、「Momo Momo Momo」スムージー999円、桃のスムージー (2026年9〜10月)・プレミアムアイスコーヒー680円、ロイヤルミルクティー (2026年10月)・平日のモーニング、ハーフもある: ひと口のフルーツサンド、サラダ、梨のラスク (2026年10月)・果物を少しおまけしてくれることが多い (2026年)',
    neighborhood: '西中島3-18-8。西中島南方駅と阪急 南方駅から徒歩1分、新大阪から徒歩12分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。新鮮な果物とジュースだが、パフェにはラスクとグラノーラ、フルーツサンドやトーストもある。',
    vegan_detail: '要確認。ジュースとスムージーは果物が主役だが、牛乳を入れるかは情報がない。パフェにはクリームとアイス。',
    notes: '[カフェ・西中島、元果物屋のフルーツのプレートとパフェ] 西中島南方駅のそばの小さなカフェで、果物屋から始まり、食べごろの果物を出す: イチジクや梨のプレート、ぶどうと梨のアールグレイのパフェ、果物たっぷりの濃い桃のスムージー (2026年)。スタッフが品種を説明してくれ、コーヒーだけでも果物を少しおまけしてくれることが多い (2026年10月)。食べログのカフェ百名店 2025。値段は高めで、ドリンクつきのフルーツのプレートは4,000円近いが、ジュースやコーヒーは1,000円未満 (2026年)。予約はサイトから。メニューの撮影は禁止。10時から16時半、不定休。',
  });
}

save();
