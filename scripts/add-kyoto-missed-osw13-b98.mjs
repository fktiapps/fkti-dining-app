// Kyoto priority (kyoto-missed), worker osw13, batch 98 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 京鴨とお蕎麦 陸, おばんざい みろく, 桟敷, ぎおん家.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26031126', 'large parent: 茅乃舎 大丸京都 is a shop of 久原本家 (Kubara Honke), whose shop list (kubara.jp/shoplist/kayanoya/; kayanoya.com/shop/) covers 茅乃舎 shops and restaurants nationwide, including 京都祇園 茅乃舎 and 御料理 茅乃舎 京都分店');
skip('26040498', 'chain: 国産牛焼肉食べ放題 あぶりや 三条店 is one of 10+ あぶりや shops (aburiya.1dining.co.jp course pages list 鶴橋駅前, 千里中央, 江坂, 阪急高槻市駅前, 庄内, 野田阪神, 福島駅前; listings also show 梅田, 千日前, あべのルシアス and 四条河原町駅前) — this also settles 26029860 (osw13-74), skipped then as "group size unconfirmed"');

// ================================================================ 京鴨とお蕎麦 陸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045694/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_kyogamo_osoba_riku_sanjo', name: '京鴨とお蕎麦 陸 (Kyogamo to Osoba Riku)', category: 'OMNI',
    lat: 35.009044, lng: 135.770674, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the finishing soba is described as 100% buckwheat (October 2026), but the dipping sauces, tsukune and fried sides need checking (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat Kyoto-duck restaurant (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00 (food last order 22:00, drinks 22:30); closing days may vary. Reservations taken; more than 10 minutes late counts as a cancellation; private hire by phone. Charge ¥418 including tax — Tabelog, Japanese original 「418円（税込）」. 32 seats with counter and sofas. Non-smoking; free Wi-Fi. Cards; no e-money or QR. 4F-A of 三条木屋町ビル on Sanjo east of Kawaramachi, behind a fire door bearing the shop\'s nameplate (October 2026). Opened 5 October 2026 (reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Kiyamachi, 4th floor — 3 min walk from Keihan Sanjo exit 7',
    cuisine: 'A new Sanjo-Kiyamachi restaurant built around all-you-can-eat Kyoto duck (kyogamo), grilled on a teppan lid and simmered as shabu-shabu in the pot below (2026 reviews) · all-you-can-eat duck courses ¥5,980 (October 2026) and ¥6,980 with duck breast, tsukune, hot-pot vegetables and 100% buckwheat soba to finish; all-you-can-drink +¥850 (October 2026) · duck loin to start; duck yukhoe; chicken wings; a pork course too (October 2026) · Kujo-leek dashimaki, nama-fu, Manganji peppers, French fries on the eat-all menu (October 2026) · soba finished in the duck broth, with grated yam (October 2026)',
    website: null, gmaps: gm('京鴨とお蕎麦 陸 三条木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto duck · Sanjo-Kiyamachi, all-you-can-eat grill and shabu] Opened October 2026 behind an unmarked-looking fire door on a 4th floor: eat-all Kyoto duck you sear on a teppan rim and swish in the broth below, with tsukune, obanzai and 100% buckwheat soba to finish, about ¥6,000–7,000. ¥418 charge. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 5 October 2026 (September and October 2026 reviews; HotPepper listed it as opening that day). Tabelog lists it as a corporate member; no source names the operator — one October 2026 reviewer called it the "Kyoto Kawaramachi Branch", but no other shop was found. Reviewers praise fresh, light duck, staff who set up the leek ring for grilling, and attentive service.',
      philosophy: null,
      specialty: 'Kyoto-duck yaki-shabu; buckwheat soba.',
      anecdotes: [
        { text: 'October 2026: "First, the staff made a circle with green onions and garlic chives, and I grilled the duck meat inside that circle."', source: R + 'B536895617/' },
        { text: 'October 2026: "The fat from the grilled duck dives right into the shabu-shabu, enhancing the flavor of the duck."', source: R + 'B537376124/' },
      ],
      japanese_sources_summary: '食べログ: 京鴨とお蕎麦 陸、居酒屋・しゃぶしゃぶ・そば、中京区三条通河原町東入中島町96 三条木屋町ビル 4F A区画、京阪三条駅7番出口から徒歩約3分、毎日 17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、休みは変わることがある、予約可 (10分遅れで取消)、原文で「418円（税込）」、32席、禁煙、Wi-Fi、カード可、電子マネー・QR不可、法人会員。口コミ (2026年9月〜10月、英語): 2026年10月5日オープン、京鴨の焼きしゃぶ食べ放題 (上の鉄板で焼き、下の鍋でしゃぶしゃぶ)、5,980円、鴨むね・つくね・鍋野菜・十割そば付きで6,980円、飲み放題850円、鴨ロースの先付、鴨ユッケ、手羽、豚のコースも、九条ねぎのだし巻き、生麩、万願寺、フライドポテト、鴨だしのそばととろろ、防火扉の奥の隠れ家。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B536640607', 'B536642434', 'B536888322', 'B536895617', 'B536923677', 'B537004292', 'B537232127', 'B537370189', 'B537376124', 'B537436959', 'B537459219', 'B537606160'])) },
    cultural_comfort: { level: 'japanese', note: 'All-you-can-eat courses; ¥418 charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通河原町東入中島町96 三条木屋町ビル 4F A区画',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing; opened 5 October 2026, reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009044, 135.770608), offset 6m east because kyoto_neze_sanjo_kiyamachi (三条木屋町ビルⅡ) sits 2.7m from the Tabelog point — now 8.7m from the nearest pin; cross-checked: GSI 京都府京都市中京区中島町96番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536923677/', R + 'B537232127/'],
    price_note: 'Course prices from October 2026 reviews; ¥418 charge.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat Kyoto duck course', '¥5,980', 'Course', 'ask', 'no', 'October 2026.', 'duck_tabehodai'),
      it('', '', 'All-you-can-eat duck shabu-shabu (breast, tsukune, vegetables, 100% soba)', '¥6,980', 'Course', 'ask', 'no', 'October 2026.', 'duck_shabu_tabehodai'),
      it('', '', 'All-you-can-drink add-on', '+¥850', 'Drink', 'ask', 'ask', 'October 2026.', 'nomihodai'),
    ] }, {
    cuisine: '京鴨の食べ放題が中心の三条木屋町の新しい店で、鉄板のふちで焼き、下の鍋でしゃぶしゃぶに (2026年の口コミ)・京鴨の食べ放題コース5,980円 (2026年10月)、鴨むね、つくね、鍋野菜、締めの十割そば付きで6,980円、飲み放題850円 (2026年10月)・先付の鴨ロース、鴨ユッケ、手羽、豚のコースも (2026年10月)・食べ放題には九条ねぎのだし巻き、生麩、万願寺、フライドポテトも (2026年10月)・鴨だしで食べる締めのそばととろろ (2026年10月)',
    neighborhood: '三条木屋町、ビル4階。京阪三条駅7番出口から徒歩3分',
    gf_detail: '要確認: 締めのそばは十割そばとされる (2026年10月) が、たれ、つくね、揚げ物は確認を (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 京鴨の食べ放題の店 (2026年の口コミ)。',
    notes: '[京鴨・三条木屋町、焼きしゃぶの食べ放題] 2026年10月、ビル4階の防火扉の奥にできた店。鉄板で焼き、下のだしでくぐらせる京鴨の食べ放題に、つくね、おばんざい、締めの十割そばで6,000〜7,000円ほど。チャージ418円。毎晩営業。',
  });
}

// ================================================================ おばんざい みろく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044128/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_obanzai_miroku_gion', name: 'おばんざい みろく (Obanzai Miroku)', category: 'OMNI',
    lat: 35.004731, lng: 135.77574, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and kakiage, sweet-miso dishes, curry to finish (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, sashimi, gizzards and beef tendon (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat 17:00–22:00; closed Sunday, Monday and holidays. Reservations taken; change or cancel by the day before. 8 counter seats. Non-smoking. Cash only per Tabelog (no cards, e-money or QR). Ground floor of 第5雅会館 just off Tominaga-cho, Gion. Opened about December 2025 (a December 2025 reviewer found it newly opened).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Off Tominaga-cho, Gion — 5 min walk from Gion-Shijo',
    cuisine: 'An eight-seat Gion obanzai counter with over 20 sakes chosen by a sake sommelier son (2025–2026 reviews) · small-portion obanzai: firefly squid with sweet miso, lotus-root dumplings; gizzards stir-fried with garlic shoots; beef tendon with konnyaku; anchovy potato salad; oden (April–October 2026) · shrimp and shiitake tempura with a spicy sauce; white-shrimp kakiage (July 2026) · sashimi assortment, cut to a single serving on request (October 2026) · rice dishes and curry to finish (February and October 2026) · Kyoto and national sakes, e.g. Tedorigawa; Ebisu and Sapporo Lager Akaboshi among three bottled beers (2026)',
    website: null, gmaps: gm('おばんざい みろく 祇園 富永町'), menu_url: null,
    notes: '[Obanzai & sake · off Tominaga-cho, Gion, a family-run eight-seat counter] A tiny, spotless counter run by sisters with family help, opening early by Gion standards: small plates of obanzai, tempura and oden, with a sake list picked by the sommelier son and prices reviewers call reasonable for the area. Cash only. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed)'], origin: null,
      background: 'Reviewers say the counter is "run by sisters" (December 2025), with family now helping (January 2026), and that the sake is "made by the son, who is a sake sommelier" (July 2026). Reviewers praise warm conversation, reasonable Gion prices and the 5 pm opening; one December 2025 diner noted the menu was still short just after opening.',
      philosophy: null,
      specialty: 'Obanzai with sommelier-picked sake.',
      anecdotes: [
        { text: 'July 2026: "Every time I go, I look forward to trying the unique Japanese sake they have in stock. The selections are made by the son, who is a sake sommelier."', source: R + 'B519197639/' },
        { text: 'October 2026: "They adjusted the sashimi assortment to a single serving for me, which I enjoyed with some Japanese sake."', source: R + 'B537210717/' },
      ],
      japanese_sources_summary: '食べログ: おばんざい みろく、食堂・居酒屋、東山区祇園町北側347-67 第5雅会館、京阪祇園四条駅から徒歩5分、火〜土 17:00〜22:00、日・月・祝休み、予約可 (変更・取消は前日まで)、カウンター8席、禁煙、カード・電子マネー・QR不可。口コミ (2025年12月〜2026年10月、英語): 姉妹で営むおばんざいの店、家族も手伝う (2026年1月)、日本酒は利き酒師の息子が選ぶ (2026年7月)、20種以上の日本酒、少量のおばんざい、ほたるいかの甘味噌、れんこん団子、砂肝とにんにくの芽の炒め物、牛すじこんにゃく、アンチョビのポテサラ、おでん、海老としいたけの天ぷら、白えびのかき揚げ、ひとり分の刺身盛り、締めのご飯やカレー、瓶ビール3種 (エビス、サッポロラガー赤星)、祇園では手頃。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B519197639', 'B519514896', 'B521830410', 'B522328607', 'B523373270', 'B526819348', 'B531276137', 'B537210717'])) },
    cultural_comfort: { level: 'japanese', note: 'Eight-seat counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-67 第5雅会館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004731, 135.775740); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 8m; nearest pin kyoto_yassan_gion 7.5m (no offset needed); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531276137/'],
    price_note: 'No item prices in the sources; reviewers spent about ¥3,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Obanzai (small plates)', null, 'Obanzai', 'ask', 'no', '2026 reviews.', 'obanzai'),
      it('', '', 'Shrimp and shiitake tempura with spicy sauce', null, 'Fried', 'no', 'no', 'July 2026.', 'tempura'),
      it('', '', 'Curry (to finish)', null, 'Rice', 'no', 'no', 'October 2026.', 'curry'),
    ] }, {
    cuisine: '利き酒師の息子が選ぶ20種以上の日本酒がある、祇園の8席のおばんざいのカウンター (2025〜2026年の口コミ)・少量のおばんざい: ほたるいかの甘味噌、れんこん団子、砂肝とにんにくの芽の炒め物、牛すじこんにゃく、アンチョビのポテサラ、おでん (2026年4〜10月)・海老としいたけの天ぷら (辛いソース)、白えびのかき揚げ (2026年7月)・ひとり分にしてくれる刺身盛り合わせ (2026年10月)・締めのご飯やカレー (2026年2月・10月)・京都や各地の日本酒 (手取川など)、瓶ビール3種 (エビス、サッポロラガー赤星) (2026年)',
    neighborhood: '富永町から少し入ったところ、祇園。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: 天ぷらとかき揚げ、甘味噌の料理、締めのカレー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: だしのおばんざい、刺身、砂肝、牛すじ (2026年の口コミ)。',
    notes: '[おばんざいと日本酒・祇園の富永町近く、家族で営む8席のカウンター] 姉妹が営み家族も手伝う、小さく清潔なカウンター。祇園にしては早い17時から、少量のおばんざい、天ぷら、おでんに、利き酒師の息子が選ぶ日本酒。祇園にしては手頃という声。現金のみ。日・月休み。',
  });
}

// ================================================================ 桟敷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004012/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sajiki_takoyakushi', name: '桟敷 (Sajiki)', category: 'OMNI',
    lat: 35.006252, lng: 135.762737, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: white-miso motsu-nabe with noodles to finish, karaage, fried nama-fu and fried ebi-imo (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-offal hotpot, fish and duck dishes (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Wed–Sun and days before holidays 17:00–24:00 (last order 23:00); closed Tuesday. Reservations taken; groups of 7+ by phone; no children under school age. 53 seats in private and semi-private rooms for 2–8, some on a loft floor with low beams (July 2025), and sunken round tables. Non-smoking. Cards; no e-money or QR. On Takoyakushi east of Takakura, north of Daimaru. A sister of Rokuhakuya (an August 2026 reviewer was redirected here when it was closed on a Monday).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takoyakushi east of Takakura — 5 min walk from Shijo exit 15',
    cuisine: 'A private-room izakaya known for Kyoto-style motsu-nabe in white miso (2025–2026 reviews) · Kyoto white-miso motsu-nabe, noodles to finish; motsu-nabe course of seven dishes with all-you-can-drink ¥5,500 with a cash discount (May 2025) · sashimi of the day; grilled nodoguro (January 2026); grilled hamo (July 2025) · duck chashu; several kinds of dashimaki (2025) · beef-tendon tofu; Kyo-mochi pork with Kujo leek; fried nama-fu; fried ebi-imo; karaage (2025–2026) · about ten sakes, warm sake; Sapporo Black Label (2025–2026)',
    website: null, gmaps: gm('桟敷 蛸薬師 高倉'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Takoyakushi-Takakura, private rooms and white-miso motsu-nabe] A late-opening izakaya of small private and loft rooms north of Daimaru, best for its Kyoto-style motsu-nabe in white miso, plus nodoguro, dashimaki and a good sake list. No young children. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog lists it as a corporate member; an August 2026 reviewer calls it the sister restaurant of Rokuhakuya. Reviewers from 2025 to 2026 praise the white-miso motsu-nabe, careful appetizers and quiet private rooms; one July 2025 guest kept hitting the low loft-floor beams, and one August 2025 group found its private room a little small.',
      philosophy: null,
      specialty: 'Kyoto white-miso motsu-nabe.',
      anecdotes: [
        { text: 'March 2025: "The gentle flavor of the Kyoto white miso was delightful, and as it cooked, it developed a rich and robust taste that was delicious."', source: R + 'B502559660/' },
        { text: 'August 2025: "The dashimaki omelet in the photo is exactly as its name suggests; it\'s both a rolled omelet and a flavorful dashi dish."', source: R + 'B512260499/' },
      ],
      japanese_sources_summary: '食べログ: 桟敷、居酒屋・魚介料理・もつ鍋、中京区蛸薬師通高倉東入ル雁金町364、地下鉄四条駅15番出口から徒歩5分、月・水〜日・祝前日 17:00〜24:00 (L.O. 23:00)、火曜休み、予約可 (7名以上は電話)、未就学児不可、53席、個室・半個室 (2〜8名)、掘りごたつ、禁煙、カード可、電子マネー・QR不可、法人会員。口コミ (2025年3月〜2026年8月、英語): 京風の白味噌もつ鍋と締めの麺、飲み放題付きもつ鍋コース7品5,500円 (現金割引、2025年5月)、刺身、のどぐろの塩焼き、鱧の焼き物、鴨のチャーシュー、だし巻き各種、牛すじ豆腐、京もち豚と九条ねぎの炒め物、生麩の揚げ物、海老芋の揚げ物、唐揚げ、日本酒10種ほど、燗酒、サッポロ黒ラベル、Rokuhakuya の姉妹店 (2026年8月)、ロフト席の梁が低い (2025年7月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B502559660', 'B505076885', 'B506800114', 'B509005156', 'B511232821', 'B512260499', 'B512812466', 'B518761792', 'B518980528', 'B520380600', 'B522110260', 'B533950626'])) },
    cultural_comfort: { level: 'japanese', note: 'Private rooms; no children under school age.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通高倉東入ル雁金町364',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006252, 135.762737); cross-checked: GSI 京都府京都市中京区雁金町364番地 (lot) 13m; nearest pin kyoto_kame_hironaga 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506800114/'],
    price_note: 'Course price from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Kyoto motsu-nabe course (7 dishes, all-you-can-drink)', '¥5,500', 'Course', 'no', 'no', 'May 2025; cash-discount price.', 'motsunabe_course'),
      it('', '', 'Kyoto white-miso motsu-nabe', null, 'Hotpot', 'no', 'no', '2025–2026 reviews.', 'motsunabe'),
      it('', '', 'Dashimaki', null, 'Egg', 'ask', 'no', 'July and August 2025.', 'dashimaki'),
    ] }, {
    cuisine: '京風の白味噌のもつ鍋で知られる個室の居酒屋 (2025〜2026年の口コミ)・京の白味噌もつ鍋と締めの麺、飲み放題付きもつ鍋コース7品5,500円 (現金割引、2025年5月)・日替わりの刺身、のどぐろの塩焼き (2026年1月)、鱧の焼き物 (2025年7月)・鴨のチャーシュー、だし巻き各種 (2025年)・牛すじ豆腐、京もち豚と九条ねぎの炒め物、生麩の揚げ物、海老芋の揚げ物、唐揚げ (2025〜2026年)・日本酒10種ほど、燗酒、サッポロ黒ラベル (2025〜2026年)',
    neighborhood: '蛸薬師高倉東入ル。四条駅15番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 白味噌もつ鍋と締めの麺、唐揚げ、生麩や海老芋の揚げ物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牛もつ鍋、魚、鴨の料理 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・蛸薬師高倉、個室と白味噌のもつ鍋] 大丸の北にある、小さな個室とロフト席の深夜までの居酒屋。名物は京風の白味噌もつ鍋、ほかにのどぐろ、だし巻き、日本酒も充実。未就学児不可。火曜休み。',
  });
}

// ================================================================ ぎおん家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006298/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_gionya_soba', name: 'ぎおん家 (Gion Ya)', category: 'OMNI',
    lat: 35.004032, lng: 135.776067, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, soba with soy-based dashi, tempura (2015–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito dashi, herring, eel and shrimp (2015–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:00–15:00; closed Wednesday; hours may change. Lunch only. Tabelog lists no cards, e-money or QR; a January 2023 reviewer paid by PayPay — bring cash to be safe. Non-smoking. English menu (May 2024). Roomy, with celebrity autographs on the walls (July 2023). On the north side of Shijo-dori in Gion, next to the former Gion Kagetsu (2020; 2023).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north side by the former Gion Kagetsu — 5 min walk from Gion-Shijo',
    cuisine: 'A long-standing Gion soba and udon lunch shop with a Showa-era feel (2015–2025 reviews) · nishin soba with sweet-simmered herring ¥1,250 (May 2024); with chirimen-sansho rice (April 2024; June 2025) · kitsune udon; zaru udon; zaru soba; tempura udon with plump shrimp (2023) · unagi rice bowl ¥1,850 (January 2023) · homemade-tasting chirimen-sansho rice (January 2023) · sobayu praised (September 2025)',
    website: null, gmaps: gm('ぎおん家 祇園 そば'), menu_url: null,
    notes: '[Soba & udon · Gion north side, a Showa-era lunch shop] A roomy old-school soba house by the former Gion Kagetsu theatre, its walls signed by comedians: nishin soba with sweet herring, kitsune or tempura udon in clear Kansai dashi, and chirimen-sansho rice. Some find it plain for the price. Lunch only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers describe a long-established Gion soba and udon shop next to the former Gion Kagetsu, with autographs from Yoshimoto comedians and other celebrities on the walls (July 2023), clear Kansai broth and English menus. Criticism: "a bit high" prices (January 2023) and a zaru soba that was "just ordinary" with poor value (May 2023).',
      philosophy: null,
      specialty: 'Nishin soba; Kansai dashi.',
      anecdotes: [
        { text: 'July 2023: "the walls were adorned with signatures from Yoshimoto comedians and other celebrities, giving it a well-known, esteemed atmosphere."', source: R + 'B470113204/' },
        { text: 'September 2025: "The soba was exquisite, but I was particularly moved by the sobayu (soba water)."', source: R + 'B518595291/' },
      ],
      japanese_sources_summary: '食べログ: ぎおん家、そば、東山区祇園北側279、祇園四条から381m、月・火・木〜日 11:00〜15:00、水曜休み、時間は変わることがある、カード・電子マネー・QR不可、禁煙。口コミ (2015年2月〜2025年9月、英語): 祇園の老舗のそば・うどん、昭和の雰囲気、旧祇園花月の隣、吉本の芸人などのサイン、英語のメニュー、にしんそば1,250円、ちりめん山椒ご飯、きつねうどん、ざるうどん、ざるそば、天ぷらうどん、うなぎ丼1,850円 (2023年1月)、そば湯、PayPay で支払い (2023年1月)、やや高め (2023年1月)、ざるそばは普通 (2023年5月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B458874980', 'B459154076', 'B469981911', 'B470113204', 'B483170148', 'B485028686', 'B487454214', 'B504092852', 'B508953188', 'B517809617', 'B518595291'])) },
    cultural_comfort: { level: 'english', note: 'English menu; lunch only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園北側279',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June and September 2025.' },
    pin_source: `Tabelog ${TB} (35.004032, 135.776067); cross-checked: GSI 京都府京都市東山区祇園町北側279番地 (lot) 27m; nearest pin kyoto_gion_nanba 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485028686/', R + 'B459154076/'],
    price_note: 'Prices from 2023–2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nishin soba', '¥1,250', 'Soba', 'no', 'no', 'May 2024.', 'nishin_soba'),
      it('', '', 'Unagi rice bowl', '¥1,850', 'Rice', 'no', 'no', 'January 2023.', 'unadon'),
      it('', '', 'Chirimen-sansho rice', null, 'Rice', 'ask', 'no', '2023–2025 reviews.', 'chirimen_rice'),
    ] }, {
    cuisine: '昭和の雰囲気の祇園の老舗のそば・うどんの昼の店 (2015〜2025年の口コミ)・甘く炊いたにしんのにしんそば1,250円 (2024年5月)、ちりめん山椒ご飯と (2024年4月、2025年6月)・きつねうどん、ざるうどん、ざるそば、ぷりぷりの海老の天ぷらうどん (2023年)・うなぎ丼1,850円 (2023年1月)・手作りのようなちりめん山椒ご飯 (2023年1月)・ほめられるそば湯 (2025年9月)',
    neighborhood: '祇園の北側、旧祇園花月の隣。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦のうどん、醤油のだしのそば、天ぷら (2015〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: かつおだし、にしん、うなぎ、海老 (2015〜2025年の口コミ)。',
    notes: '[そば・うどん・祇園の北側、昭和の昼の店] 旧祇園花月の隣、芸人のサインが並ぶ広い老舗のそば屋。甘いにしんのにしんそば、関西のすんだだしのきつねや天ぷらうどん、ちりめん山椒ご飯。値段の割に普通という声も。昼のみ、水曜休み。',
  });
}

save();
