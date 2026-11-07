// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 55.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 味浪漫いしがま亭 Aji Roman Ishigama Tei (Kyoto duck shabu-shabu by the Kamo River)
//   - 炭火焼鳥と一口餃子 TORA鶏YA 四条河原町店 — branch of a brand in data (備長炭と宮崎鶏専門 TORA鶏YA); also shops in
//     Namba, Sannomiya and Takatsuki
//   + 京料理 多から Kyoryori Takara (Pontocho kaiseki house of 120+ years with a kawadoko)
//   - 星乃珈琲店 河原町店 — chain (Doutor Nichires)
//   - 焼肉ライク 京都河原町蛸薬師店 — chain
//   - アーバンリサーチ京都 カフェ — sub-brand of a large parent (the apparel company URBAN RESEARCH)
//   + 天の川 Amanogawa (Pontocho obanzai and nama-fu courses)
//   + 鉄板ダイニング 京四季庵 Teppan Dining Kyoshikian (basement teppanyaki in Pontocho)
//   Same-name counts first: いしがま亭 0 (one shop; owner changed in 2018 per a job listing); 多から 0; 天の川 0
//   (its old group site kyo-sakusaku.com no longer resolves; no other shop found); 京四季庵 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: いしがま亭 「チャージ660円(コースご注文の場合は
//   いただきません)」; 京四季庵 「席料550円 アラカルトのみ コースには席料も含まれています」; 天の川 — Tabelog remarks
//   (English only) give a ¥500 appetizer fee; 多から has no section.
//   Pins: 多から — GSI matched only the town 柏屋町, loc_precise false; 天の川 — Tabelog point 3.7 m from
//   kyoto_pontocho_asari, moved 3 m NNE (6.0 m from the nearest record); 京四季庵 — Tabelog point 2.4 m from
//   kyoto_hoshoan_pontocho, moved 4 m north (6.3 m). Checked against main 8fd265cb.
//   Ruling applied: other-diner remarks only where several reviews agree.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042171', 'branch of a brand in data: TORA鶏YA (備長炭と宮崎鶏専門 TORA鶏YA is in data); the brand also has shops in Namba, Sannomiya and Takatsuki (HotPepper and job listings)');
skip('26023397', 'chain: 星乃珈琲店');
skip('26034809', 'chain: 焼肉ライク');
skip('26014361', 'sub-brand of a large parent: the café of the apparel company URBAN RESEARCH');

// ================================================================ 味浪漫いしがま亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042453/'; const R = TB + 'dtlrvwlst/';
  const CM = 'https://www.careermap.jp/corporations/94190';
  const D = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_aji_roman_ishigamatei', name: '味浪漫いしがま亭 (Aji Roman Ishigama Tei)', category: 'OMNI',
    lat: 35.002596, lng: 135.770668, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck shabu-shabu in a white broth, but tempura, ramen to finish and soy seasonings are part of the meals (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kyoto-duck restaurant; hamo and eel dishes (2026 reviews).',
    hours_raw: 'Daily 11:30–14:30 (food last order 13:30) and 17:30–22:00 (food last order 21:00, last entry 20:30); irregular closures (Tabelog). Bookings taken; for courses the whole table orders the same course (Tabelog). People queue before opening on holidays (September 2026 review). Table charge: Tabelog\'s Japanese original says 「チャージ660円(コースご注文の場合はいただきません)」 — ¥660, not charged with a course. Cards, e-money and QR (Tabelog). 52 seats — counter, tables, tatami and 6-seat tatami private rooms — plus riverside seats on the Kamo River after a move to this site (August–October 2026 reviews); non-smoking; wheelchair accessible (Tabelog). On Nishi-Ishigaki south of Shijo, 3 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Ishigaki on the Kamo River, south of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Kyoto duck and seasonal Kyoto cooking (job listing; 2026 reviews): Kyoto duck shabu-shabu in a white broth with pepper and a house chilli oil, finished with thin ramen or rice porridge; roast duck; duck tempura; hamo tempura set and a hamo-shabu course; eel; fresh yuba salad, fried taro, eggplant like agedashi; lunch gozen ¥2,200 with duck tempura, yuba and miso soup (September 2026); duck shabu-shabu set at lunch; Kyoto duck shabu-shabu course at night; sake a focus (Tabelog)',
    website: null, gmaps: gm('味浪漫いしがま亭'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto duck · Kamo riverside] A Kyoto-duck restaurant in a renovated townhouse on the Kamo River, now with riverside tables: duck shabu-shabu in a white broth finished with ramen, roast duck, hamo in season, and a ¥2,200 lunch gozen. Courses about ¥6,000–8,000. ¥660 charge without a course.",
    chef_bio: { chef_name: null, roles: ['Owner and cooks (unnamed)'], origin: null,
      background: 'Opened in 2000 with Kyoto duck and hamo; new ownership from 2018, keeping Kyoto-duck kaiseki (job listing, careermap.jp). A long-time regular noted in August 2026 that the restaurant had moved to its present riverside site.',
      philosophy: null, specialty: 'Kyoto duck shabu-shabu.',
      anecdotes: [
        { text: 'A long-time regular\'s first visit since the move, in August 2026, was a course of duck shabu-shabu finished with ramen.', source: R + 'B534781631/' },
        { text: 'Arriving at opening on a September 2026 holiday, a returning diner found about six groups waiting and ordered the ¥2,200 gozen again.', source: R + 'B506998757/' },
        { text: 'A September 2026 diner who booked 17:30 got a riverside seat for an autumn course, but found the finishing rice porridge one dish too many.', source: R + 'B536548503/' },
      ],
      japanese_sources_summary: '食べログ: 味浪漫いしがま亭、居酒屋・しゃぶしゃぶ・日本料理、下京区西石垣通四条下ル斎藤町140-29、阪急河原町駅から徒歩3分、毎日 11:30〜14:30 (料理 L.O. 13:30)・17:30〜22:00 (料理 L.O. 21:00、最終入店20:30)、不定休、予約可 (コースは全員同じコース)、チャージ660円 (コースの場合なし)、カード・電子マネー・QR 可、52席 (カウンター4、テーブル18、座敷24、座敷の個室6)、禁煙、車椅子可、テラス。求人 (careermap): 2000年開業、京鴨や鱧、2018年にオーナーが交代、京鴨中心の会席。口コミ (2026年8〜10月、英語): 移転して鴨川沿いの席、京鴨のしゃぶしゃぶ (白いスープ、胡椒と自家製のラー油、締めのラーメンや雑炊)、鴨ロース、鴨の天ぷら、鱧の天ぷらの定食、鱧しゃぶのコース、鰻、生湯葉のサラダ、里芋の揚げ物、茄子の揚げ出し風、昼の御膳2,200円、祝日は開店前に行列。',
      confidence: 'medium', sources: [TB, CM, R + 'B506998757/', R + 'B534781631/', R + 'B534825439/', R + 'B535020938/', R + 'B535056798/', R + 'B536145742/', R + 'B536548503/', R + 'B536822345/', R + 'B538063742/', R + 'B538150361/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses ordered per table; riverside seats by booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西石垣通四条下ル斎藤町140-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002596, 135.770668); cross-checked: GSI 京都府京都市下京区斎藤町140番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506998757/'],
    price_note: 'Lunch price from a September 2026 review; table charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch gozen (duck tempura, yuba, miso soup)', '¥2,200', 'Lunch', 'no', 'no', 'September 2026 review.', 'gozen'),
      it('', '', 'Kyoto duck shabu-shabu course', '', 'Courses', 'ask', 'no', 'September 2026 reviews.', 'kamo_shabu'),
    ] }, {
    cuisine: '京鴨と季節の京料理 (求人、2026年の口コミ): 胡椒と自家製のラー油で食べる白いスープの京鴨のしゃぶしゃぶ、締めは細いラーメンか雑炊。鴨ロース、鴨の天ぷら、鱧の天ぷらの定食と鱧しゃぶのコース、鰻、生湯葉のサラダ、里芋の揚げ物、揚げ出し風の茄子。鴨の天ぷら・湯葉・味噌汁の昼の御膳2,200円 (2026年9月)、昼の鴨しゃぶの定食、夜の京鴨しゃぶしゃぶのコース。日本酒にこだわる (食べログ)',
    neighborhood: '鴨川沿いの西石垣、四条の南。河原町駅から徒歩3分',
    gf_detail: '要確認。白いスープの鴨しゃぶだが、天ぷら、締めのラーメン、醤油の味付けもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。京鴨の店。鱧や鰻の料理も (2026年の口コミ)。',
    notes: '[京鴨・鴨川沿い] 鴨川沿いの町家を改装した京鴨の店。移転して川辺の席もある。白いスープの鴨しゃぶしゃぶを締めのラーメンまで、鴨ロース、季節の鱧、2,200円の昼の御膳。コースは6千〜8千円ほど。コース以外はチャージ660円。',
  });
}

// ================================================================ 京料理 多から
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002901/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kyoryori_takara_pontocho', name: '京料理 多から (Kyoryori Takara)', category: 'OMNI',
    lat: 35.004293, lng: 135.771114, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki with sashimi and soups, but soy-seasoned sukiyaki and nabe appear (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses, suppon (soft-shell turtle) nabe and sukiyaki (reviews).',
    hours_raw: 'Tue–Sun 12:00–14:30 (last entry 14:00) and 17:00–22:00 (last entry 21:00); closed Monday; hours may change (Tabelog). Bookings taken (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 50 seats with tatami rooms overlooking the Kamo River, a kawadoko deck in season and a tatami hall for about 20; non-smoking (Tabelog; September 2024 review). On Pontocho just north of Shijo, 3 min from Hankyu Kawaramachi and Keihan Gion-Shijo Stns (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, just north of Shijo — on the Kamo River',
    cuisine: 'Seasonal Kyoto kaiseki with a river view (Tabelog; reviews): courses of hamo soup, sashimi of hamo, toro, sea bream and squid, saba sushi and grilled ayu (August 2022); suppon (soft-shell turtle) hot pot, a signature (Hitosara; 2022–23 reviews); clam soup and strawberry jelly (April 2024); a limited-time sukiyaki on the river (September 2026); seasonal dishes in the tatami hall (September 2024)',
    website: null, gmaps: gm('京料理 多から 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto kaiseki · Pontocho, Kamo River] A Pontocho kaiseki house of more than 120 years, now with its fourth-generation owner: tatami rooms over the Kamo River and a kawadoko deck in season, seasonal Kyoto courses, suppon hot pot and a riverside sukiyaki. About ¥10,000–15,000 at night. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Fourth-generation owner (unnamed)'], origin: null,
      background: 'A traditional Kyoto-cuisine restaurant of more than 120 years, run by the fourth generation (Tabelog shop text). Hitosara describes it as a long-established ryotei whose specialty is suppon (soft-shell turtle), with kawadoko dining on the Kamo River.',
      philosophy: 'Seasonal kaiseki of fine ingredients, with the river view (Tabelog).',
      specialty: 'Suppon nabe; seasonal kaiseki.',
      anecdotes: [
        { text: 'A September 2026 diner had the limited-time sukiyaki overlooking the river and found it worth the price, ordering more rice.', source: R + 'B535537206/' },
        { text: 'A November 2025 diner praised the view, the attentive staff and dishes that came promptly.', source: R + 'B518228589/' },
        { text: 'A regular, back again in May 2026, had described an autumn 2024 meal in a tatami hall for about twenty over the river.', source: R + 'B492707688/' },
      ],
      japanese_sources_summary: '食べログ: 京料理 多から、日本料理・ふぐ・鍋、中京区先斗町通四条上ル柏屋町173-2、阪急河原町駅・京阪祇園四条駅から徒歩3分、火〜日 12:00〜14:30 (最終入店14:00)・17:00〜22:00 (最終入店21:00)、月曜休み、予約可、カード可、50席、座敷、禁煙、創業120年余りの老舗の京料理、鴨川の眺め、季節の川床、4代目の店主。ヒトサラ: 先斗町 多から、老舗の料亭、名物はすっぽん、川床。口コミ (2022〜2026年、英語): 鱧の吸い物、鱧・トロ・鯛・いかの刺身、鯖寿司、鮎の塩焼き、すっぽん鍋、はまぐりの吸い物、いちごのゼリー、川を眺める期間限定のすき焼き (2026年9月)、20人ほどの座敷の広間 (2024年9月)、景色と細やかな接客 (2025年11月)。',
      confidence: 'medium', sources: [TB, 'https://hitosara.com/0006048825/', R + 'B518228589/', R + 'B535537206/', R + 'B492707688/', R + 'B496627179/', R + 'B489987731/', R + 'B484716577/', R + 'B466126415/', R + 'B452368770/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tatami rooms; book for the kawadoko.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区先斗町通四条上ル柏屋町173-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004293, 135.771114); GSI matched only the town 柏屋町 (centroid 21 m away), so not lot-checked; the point is on Pontocho just north of Shijo as the address says; 6.3 m from kyoto_bar_rinto_pontocho; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535537206/', R + 'B452368770/'],
    price_note: 'No prices read; reviewers spend about ¥10,000–15,000.', last_checked: TODAY, items: [
      it('', '', 'Seasonal Kyoto kaiseki', '', 'Courses', 'ask', 'no', '2022–26 reviews.', 'kaiseki'),
      it('', '', 'Suppon (soft-shell turtle) hot pot', '', 'Nabe', 'ask', 'no', '2022–23 reviews; Hitosara.', 'suppon'),
    ] }, {
    cuisine: '川を眺める季節の京懐石 (食べログ、口コミ): 鱧の吸い物、鱧・トロ・鯛・いかの刺身、鯖寿司、鮎の塩焼きのコース (2022年8月)、名物のすっぽん鍋 (ヒトサラ、2022〜23年の口コミ)、はまぐりの吸い物といちごのゼリー (2024年4月)、川辺で期間限定のすき焼き (2026年9月)、座敷の広間の季節の料理 (2024年9月)',
    neighborhood: '先斗町、四条のすぐ北。鴨川沿い',
    gf_detail: '要確認。刺身や吸い物の京懐石だが、醤油味のすき焼きや鍋もある (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚のコース、すっぽん鍋、すき焼き (口コミ)。',
    notes: '[京懐石・先斗町の鴨川沿い] 創業120年を超え、4代目が営む先斗町の京料理の店。鴨川を見下ろす座敷と季節の川床で、季節の京懐石、すっぽん鍋、川辺のすき焼き。夜は1万〜1万5千円ほど。月曜休み。',
  });
}

// ================================================================ 天の川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007089/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:30']); const E = day(['11:00', '14:30'], ['16:00', '23:30']);
  put({
    id: 'kyoto_amanogawa_pontocho', name: '天の川 (Amanogawa)', category: 'OMNI',
    lat: 35.005053, lng: 135.771069, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yuba and tofu dishes, but nama-fu is wheat gluten and fried items and soy seasonings appear (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nama-fu, yuba, tofu and Kyoto vegetables feature, but dashi and fish dishes are likely; not described (Tabelog; reviews).',
    hours_raw: 'Mon–Fri 16:00–23:30; Sat, Sun and holidays 11:00–14:30 and 16:00–23:30; open year-round (Tabelog). Bookings taken (Tabelog). Tabelog remarks (English) give a ¥500 appetizer fee. Cards (VISA, Master, JCB, AMEX) and e-money (Tabelog). 40 seats; smoking allowed (Tabelog). Staff invite passers-by in from the street (2021–24 reviews). On Pontocho just north of Shijo, 3 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, just north of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Obanzai and Kyoto-kaiseki courses with nama-fu and nama-yuba from the old maker 半兵衛麸, courses from ¥2,980 (Tabelog shop text); à la carte Kyoto dishes such as tofu shumai, okra and yuba salad, hot pots including anglerfish in winter, fried chicken, sashimi (2017–24 reviews); draft beer, sake and shochu, all-you-can-drink plans (Tabelog)',
    website: null, gmaps: gm('天の川 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Obanzai & nama-fu · Pontocho] An easy-going Pontocho restaurant open from late afternoon (and lunch at weekends) with obanzai and Kyoto courses from ¥2,980 using nama-fu and yuba from 半兵衛麸, plus hot pots and drink plans. Reviews are mixed on value. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog\'s shop text says it uses fresh nama-fu and nama-yuba from the long-established maker 半兵衛麸. An older group website (kyo-sakusaku.com) no longer resolves. Reviews are mixed: several from 2021–23 found portions small or prices high for Pontocho; 2024–25 reviewers found it good value and friendly.',
      philosophy: 'Obanzai and Kyoto kaiseki at reasonable prices (Tabelog).',
      specialty: 'Nama-fu and yuba courses.',
      anecdotes: [
        { text: 'Arriving after most nearby places had closed for lunch in May 2025, a diner liked the retro room, friendly staff and well-chilled draft beer.', source: R + 'B509208488/' },
        { text: 'A January 2025 diner dropping in for a drink found the food decent but unremarkable.', source: R + 'B499959239/' },
        { text: 'A May 2024 holiday visitor before 16:00 found the room busy with late lunches and early dinners, and tofu shumai on a wide menu.', source: R + 'B484360172/' },
      ],
      japanese_sources_summary: '食べログ: 天の川、日本料理、中京区先斗町四条上ル鍋屋町211-3、阪急河原町駅から徒歩3分、月〜金 16:00〜23:30、土日祝 11:00〜14:30・16:00〜23:30、無休、予約可、カード・電子マネー可、40席、喫煙可、日本酒・焼酎にこだわる、お通し500円 (英語の備考)、老舗の半兵衛麸の生麩と生湯葉、おばんざいと京懐石、コース2,980円から、飲み放題。口コミ (2017〜2025年、英語): 豆腐焼売、オクラと湯葉のサラダ、鍋 (冬はあんこう)、唐揚げ、刺身、2021〜23年は量が少なく割高という声、2024〜25年はお得で親切という声、店の前で呼び込み。',
      confidence: 'low', sources: [TB, R + 'B509208488/', R + 'B499959239/', R + 'B484360172/', R + 'B477519322/', R + 'B462825513/', R + 'B447690217/', R + 'B444081065/', R + 'B291792017/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; staff call in from the street.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上ル鍋屋町211-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.005028, 135.771056) is 3.7 m from kyoto_pontocho_asari, so moved 3 m north-north-east to 35.005053, 135.771069 (6.0 m from the nearest record); cross-checked: GSI 京都府京都市中京区鍋屋町211番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog\'s shop text.', last_checked: TODAY, items: [
      it('', '', 'Nama-fu and yuba course', 'from ¥2,980', 'Courses', 'ask', 'ask', 'Tabelog shop text.', 'course'),
      it('', '', 'Tofu shumai', '', 'Dishes', 'ask', 'ask', 'May 2024 review.', 'tofu_shumai'),
    ] }, {
    cuisine: '老舗の半兵衛麸の生麩と生湯葉を使うおばんざいと京懐石のコース、2,980円から (食べログの店の紹介)。単品は豆腐焼売、オクラと湯葉のサラダ、冬のあんこうなどの鍋、唐揚げ、刺身 (2017〜24年の口コミ)。生ビール、日本酒、焼酎、飲み放題 (食べログ)',
    neighborhood: '先斗町、四条のすぐ北。河原町駅から徒歩3分',
    gf_detail: '要確認。湯葉や豆腐の料理もあるが、生麩は小麦のグルテンで、揚げ物や醤油の味付けもある (食べログ、口コミ)。',
    vegan_detail: '要確認。生麩、湯葉、豆腐、京野菜が中心だが、だしや魚の料理もあると思われ、説明はない (食べログ、口コミ)。',
    notes: '[おばんざいと生麩・先斗町] 夕方から (週末は昼も) 開く気軽な先斗町の店。半兵衛麸の生麩と湯葉のおばんざいや京料理のコースが2,980円から、鍋や飲み放題も。値段の感じ方は口コミで分かれる。喫煙可。',
  });
}

// ================================================================ 鉄板ダイニング 京四季庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004833/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_teppan_dining_kyoshikian', name: '鉄板ダイニング 京四季庵 (Teppan Dining Kyoshikian)', category: 'OMNI',
    lat: 35.005115, lng: 135.771196, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppanyaki steak and vegetables, but garlic rice, sauces and yuba dishes may use soy; not described (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak courses with abalone (2024–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–23:00 (last order 22:30); closed Monday, but open on holidays (then possibly closed Tuesday) (Tabelog). Bookings taken; day-before or same-day cancellations are charged 100% for courses and ¥5,000 per person for table bookings (Tabelog). Seat charge: Tabelog\'s Japanese original says 「席料550円 アラカルトのみ コースには席料も含まれています」 — ¥550 à la carte only, included in courses. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 30 seats — a counter of 8 facing the grill and 22 at tables; non-smoking (Tabelog). In the basement of 紫光會館 on Pontocho, 3 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, north of Shijo — basement of 紫光會館',
    cuisine: 'Casual teppanyaki of kuroge wagyu (2024–26 reviews): courses such as a ¥4,800 dinner course (July 2026) and an 8-dish wagyu course ¥4,400 (December 2022); yuba with caviar, yuba tofu, butter-grilled abalone, seasonal Kyoto vegetables, strip-loin steak cut into bite-size pieces, garlic rice to finish for a supplement; all-you-can-drink options; wine (2024–26 reviews; Tabelog)',
    website: null, gmaps: gm('鉄板ダイニング 京四季庵 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Teppanyaki · Pontocho basement] A relaxed basement teppanyaki on Pontocho: wagyu steak courses around ¥4,800 with yuba (even topped with caviar), abalone and Kyoto vegetables, and garlic rice to finish, with drink plans. About ¥5,000–8,000. Strict cancellation charges; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Master chef and staff (unnamed)'], origin: null,
      background: 'A teppanyaki restaurant in the basement of 紫光會館 on Pontocho (Tabelog). A June 2024 reviewer describes a hard-working master overseeing younger staff.',
      philosophy: null, specialty: 'Wagyu teppanyaki; garlic rice.',
      anecdotes: [
        { text: 'Visiting on a wedding anniversary in November 2025 without a booking, a couple went down on the strength of a flyer and were warmly welcomed.', source: R + 'B517591837/' },
        { text: 'A December 2025 year-end traveller who booked ahead tried yuba topped with caviar for the first time.', source: R + 'B519784557/' },
        { text: 'Two friends at the counter in July 2026 had a clear view of the grill on the ¥4,800 course.', source: R + 'B533705775/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板ダイニング 京四季庵、鉄板焼き・ステーキ・居酒屋、中京区先斗町通四条上ル鍋屋町227 紫光會館 B1F、阪急河原町駅から徒歩3分、火〜日 17:00〜23:00 (L.O. 22:30)、月曜休み (祝日は営業、翌火曜休みの場合あり)、予約可、前日・当日のキャンセルはコース代100%、席のみは1人5,000円、席料550円 (アラカルトのみ、コースに含む)、カード可、電子マネー・QR 不可、30席 (カウンター8、テーブル22)、禁煙。口コミ (2022年12月〜2026年7月、英語): 黒毛和牛の鉄板焼き、コース4,800円 (2026年7月)、8品のコース4,400円 (2022年12月)、キャビアをのせた湯葉、湯葉豆腐、鮑のバター焼き、京野菜、ひと口大のサーロイン、追加料金のガーリックライス、飲み放題、マスターと若いスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B517591837/', R + 'B519784557/', R + 'B533705775/', R + 'B496134134/', R + 'B489286151/', R + 'B458056043/', R + 'B458566757/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement entrance; book ahead in busy seasons.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル鍋屋町227 紫光會館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005079, 135.771196) is 2.4 m from kyoto_hoshoan_pontocho, so moved 4 m north to 35.005115 (6.3 m from it); cross-checked: GSI 京都府京都市中京区鍋屋町227番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533705775/', TB],
    price_note: 'Course price from a July 2026 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Teppanyaki dinner course', '¥4,800', 'Courses', 'ask', 'no', 'July 2026 review.', 'course'),
      it('', '', 'Seat charge (à la carte only)', '¥550', 'Charges', 'ask', 'ask', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '気軽な黒毛和牛の鉄板焼き (2024〜26年の口コミ): 夜のコース4,800円 (2026年7月)、8品の和牛のコース4,400円 (2022年12月)。キャビアをのせた湯葉、湯葉豆腐、鮑のバター焼き、季節の京野菜、ひと口大のサーロインステーキ、追加料金で締めのガーリックライス、飲み放題、ワイン (2024〜26年の口コミ、食べログ)',
    neighborhood: '先斗町、四条の北。紫光會館の地下',
    gf_detail: '要確認。鉄板のステーキと野菜だが、ガーリックライス、たれ、湯葉の料理に醤油を使う可能性。説明はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮑の付く和牛ステーキのコース (2024〜26年の口コミ)。',
    notes: '[鉄板焼き・先斗町の地下] 先斗町の地下の気軽な鉄板焼き。キャビアをのせた湯葉、鮑、京野菜と和牛ステーキの4,800円ほどのコースに締めのガーリックライス、飲み放題も。5千〜8千円ほど。キャンセル料は厳しめ。月曜休み。',
  });
}

save();
