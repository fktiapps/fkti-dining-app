// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 22.
//   + est pizzeria e trattoria GION (wood-fired Neapolitan pizza and fresh pasta, Gion)
//   + 京家 きよみず 祇をん新橋 Kyoya Kiyomizu Gion Shinbashi (obanzai and Kyoto oden in a 150-year-old machiya)
//   + 食堂ほかげ Shokudo Hokage (one-man counter of seasonal dishes and clay-pot rice, Kawaramachi Marutamachi)
//   + うどん しき 京都うどん Udon Shiki Kyoto Udon (handmade udon and tempura, near Kawaramachi)
//   - skip 26042560 蒸とアテふぅふぅ 烏丸六角店 (chain by name count)
//   - skip 26044114 炭料理 ひより (name count; see reason)
//   - skip 26007274 サー・トーマス・リプトン ポルタ店 (chain by name count)
//   Same-name counts first, across concepts (2026-11-05):
//   est — one ("est pizzeria" on Tabelog nationwide shows only this shop).
//   京家 きよみず — four in Kyoto (木屋町, 柳馬場本家, 西錦小路, 祇をん新橋), none in data; other "Kiyomizu" shops elsewhere
//   (Ehime, Tokyo yakiniku, Kumamoto, Saitama, Shizuoka) are unrelated businesses; drafted as a small group.
//   ほかげ — one. うどん しき — one in Kyoto ("Udon Shiki" elsewhere not found; a reviewer says it has roots in Roppongi).
//   ふぅふぅ — 蒸とアテふぅふぅ 京都駅前, 烏丸六角, 東岡崎 (Aichi), 鉄板とアテふぅふぅ 四条烏丸, お好み焼き鉄板焼ふぅふぅ: 5 → chain.
//   ひより — Tabelog Kyoto shows 炭料理ひより, ひより, Hiyori TauT, よりどころ ひより, 京焼肉ひより, ごはん処ひより亭, HIYORI Chapter
//   Kyoto: 7 shops named Hiyori (a common word, 日和) — skipped under the 5+ same-name rule, flagged for a ruling.
//   リプトン — Sir Thomas Lipton 三条本店, 四条店, ポルタ店, Lipton Cake Shop 三条店, plus Lipton-named shops in Kagawa and Ehime: 5+.
//   Taken on 2026-11-05: `next core 200` gave est 26035030, ふぅふぅ (skip) and 京家 きよみず 26028988; `next notable 200` gave
//   ひより (skip), 食堂ほかげ 26022052, リプトン (skip) and うどん しき 26043904. None is in data/kyoto.json: grep by name and address
//   (祇園町北側347-147, 橋本町416, 出水町273-1, 丸屋町415-23) found none. Service charges per Tabelog's Japanese original:
//   est 「サービス料・チャージ料なし」; 京家 きよみず 「チャージ料無し」; ほかげ and うどん しき none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042560', 'chain by name count: Tabelog (https://tabelog.com/en/rstLst/?sw=アテふぅふぅ and the Kyoto search for ふぅふぅ) lists 蒸とアテふぅふぅ 京都駅前店, 烏丸六角店 and 東岡崎店 (Aichi), 鉄板とアテふぅふぅ 四条烏丸店 and お好み焼き鉄板焼 ふぅふぅ — 5 Fufuu-named shops.');
// un-skipped by integrator 2026-11-05 (unrelated shops sharing a common word are not a same-name chain): skip('26044114', 'same-name count: a Tabelog Kyoto search for ひより (https://tabelog.com/en/kyoto/rstLst/?sw=ひより) lists 7 shops named Hiyori — 炭料理ひより, Hiyori, Hiyori TauT 阪急洛西口店, よりどころ ひより, 京焼肉ひより, ごはん処ひより亭, HIYORI Chapter Kyoto. Hiyori (日和) is a common word and the shops look unrelated, so this skip is flagged for a ruling.');
skip('26007274', 'chain by name count: Tabelog (https://tabelog.com/en/rstLst/?sw=リプトン) lists Sir Thomas Lipton 三条本店, 四条店 and this ポルタ店, Lipton Cake Shop 三条店, and Lipton-named shops in Kagawa and Ehime — 5+.');

// ================================================================ est pizzeria
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035030/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_est_pizzeria_gion', name: 'est pizzeria e trattoria GION', category: 'OMNI',
    lat: 35.004794, lng: 135.776146, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A pizzeria of wheat-dough Neapolitan pizza and fresh pasta, with fried starters; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. About 30 pizzas, mostly with cheese, plus meat and seafood starters (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 17:30–22:30 (last order); closed Sunday and public holidays (Tabelog). Reservations accepted; courses must be booked ahead, arriving by 18:00 (Tabelog). No service charge or cover (Tabelog, Japanese text: 「サービス料・チャージ料なし」). 19 seats: 6 at a solid-wood counter facing the open kitchen, 8 at tables and a private room for 4–5 (Tabelog; July 2026). Non-smoking; cards and IC cards, no QR (Tabelog). Behind a hidden entrance in a Gion lane, 6 min from Gion-Shijo Stn exit 7 (Tabelog). Opened 27 October 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — 6 min from Gion-Shijo Stn',
    cuisine: 'Neapolitan pizza from a custom wood-fired oven by pizzaioli who won Japan’s national qualifier, and handmade fresh pasta (Tabelog, shop text) · about 30 pizzas — margherita, quattro formaggi, bufalina (2025–26 reviews) · three kinds of fresh pasta, risotto, appetizer platters, braised wagyu tripe, fried porcini and matsutake, fried squid, seasonal corn soup with caviar ¥1,400 (July 2026) (2025–26 reviews) · a walk-in wine cellar about 3 m high, leaning to Burgundy (Tabelog; July 2026) · lunch about ¥3,000–4,000, dinner about ¥10,000–20,000 a head (2025–26 reviews); pizza to take away (October 2025)',
    website: null, gmaps: gm('est pizzeria e trattoria GION'), menu_url: TB + 'dtlmenu/',
    notes: "[Pizza & Italian · Gion, wood-fired pizza behind a hidden door] A Gion pizzeria with a solid-wood counter facing a custom wood-fired oven, where prize-winning pizzaioli bake around 30 Neapolitan pizzas — the bufalina is a favourite — alongside fresh pasta, starters and a deep, Burgundy-heavy cellar. Lunch is a casual ¥3,000–4,000; dinners à la carte run higher, and a couple of reviewers found value only fair. No service charge. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef and pizzaioli (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Neapolitan pizza from a custom wood-fired oven by craftsmen who took first place in the Japan representative qualifiers, and fresh pasta by an award-winning chef; opened 27 October 2020. An August 2025 diner noted a pizzaiolo with experience in Italy.',
      philosophy: null, specialty: 'Neapolitan pizza; fresh pasta.',
      anecdotes: [
        { text: 'An October 2026 diner loved the porcini and fried squid but found the value not as good as expected.', source: R + 'B536916438/' },
        { text: 'A June 2025 lunch guest found the margherita delicious but felt something was missing.', source: R + 'B508649980/' },
        { text: 'A July 2026 diner found aged Burgundies in the walk-in cellar at prices now hard to match.', source: R + 'B531382143/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ピザ・パスタ、東山区祇園町北側347-147 1F、祇園四条駅7番出口から徒歩6分、昼 11:30〜14:00・夜 17:30〜22:30 (L.O.)、日曜・祝日休み、予約可 (コースは要予約、18時までに来店)、サービス料・チャージ料なし、19席 (カウンター6、テーブル8、個室)、禁煙、カード・交通系IC可、2020年10月27日オープン、特注の薪窯のナポリピッツァ、日本代表選考会で1位の職人、約30種のピッツァ、手打ちの生パスタ、高さ3m のワインセラー。口コミ (2025年5月〜2026年10月、英語): bufalina、マルゲリータ、クアトロ・フォルマッジ、ポルチーニのフライ、とうもろこしのスープとキャビア1,400円、ブルゴーニュ中心のワイン、昼は3,000〜4,000円、コスパはいまひとつという声。',
      confidence: 'medium', sources: [TB, R + 'B452617041/', R + 'B507042787/', R + 'B508649980/', R + 'B512775120/', R + 'B515731097/', R + 'B522175698/', R + 'B527118085/', R + 'B531382143/', R + 'B534422492/', R + 'B536916438/', R + 'B537819187/', R + 'B537894119/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order pizza à la carte; book courses ahead; cards and IC cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-147 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004794, 135.776146); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531382143/', R + 'B527118085/'],
    price_note: 'Item price from a July 2026 review; lunch and dinner ranges from 2025–26 reviews; no service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal corn soup with caviar', '¥1,400', 'Starters', 'ask', 'no', 'July 2026.', 'corn_soup_caviar'),
      it('', '', 'Margherita', '', 'Pizza', 'no', 'no', '2025–26 reviews.', 'margherita'),
      it('', '', 'Bufalina (buffalo mozzarella pizza)', '', 'Pizza', 'no', 'no', 'August 2025.', 'bufalina'),
    ] }, {
    cuisine: '特注の薪窯で焼くナポリピッツァ (日本代表選考会で1位の職人) と手打ちの生パスタ (食べログの店の紹介)・約30種のピッツァ: マルゲリータ、クアトロ・フォルマッジ、bufalinaなど (2025〜2026年の口コミ)・3種の生パスタ、リゾット、前菜の盛り合わせ、和牛のトリッパの煮込み、ポルチーニと松茸のフライ、イカのフライ、季節のとうもろこしのスープとキャビア1,400円 (2026年7月) (2025〜2026年の口コミ)・高さ約3m のワインセラー、ブルゴーニュが中心 (食べログ、2026年7月)・昼は約3,000〜4,000円、夜は約10,000〜20,000円 (2025〜2026年の口コミ)。ピッツァの持ち帰りも (2025年10月)',
    neighborhood: '四条の北の祇園。祇園四条駅から徒歩6分',
    gf_detail: '要確認。小麦の生地のナポリピッツァと生パスタ、揚げ物の前菜もあるピッツェリア。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。約30種のピッツァの多くはチーズ入りで、肉や魚介の前菜もある (食べログ、2025〜2026年の口コミ)。',
    notes: '[ピッツァ・イタリアン・祇園、隠れ扉の薪窯ピッツァ] 祇園の一枚板のカウンターの前に特注の薪窯。受賞歴のあるピッツァイオーロが約30種のナポリピッツァを焼き、bufalinaが人気。生パスタや前菜、ブルゴーニュ中心の充実したセラーも。昼は3,000〜4,000円と気軽で、夜のアラカルトは高めになり、コスパはまずまずという声も。サービス料なし。日曜休み。',
  });
}

// ================================================================ 京家 きよみず 祇をん新橋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028988/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:30']);
  put({
    id: 'kyoto_kyoya_kiyomizu_gion_shinbashi', name: '京家 きよみず 祇をん新橋 (Kyoya Kiyomizu Gion Shinbashi)', category: 'OMNI',
    lat: 35.005717, lng: 135.776308, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in kombu-and-dashi broth, obanzai, sashimi and tempura, seasoned with soy (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the Kyoto oden and obanzai are made with dashi (Tabelog).',
    hours_raw: '16:00–22:30 (last order 22:00) daily; closed 31 December–3 January (Tabelog). Reservations accepted; two guests are usually seated at the counter; cancellation 50% the day before, 100% on the day; seating may be limited to 2 hours when busy (Tabelog). No cover charge (Tabelog, Japanese text: 「チャージ料無し」). Courses from about ¥5,000, ¥7,500 with 90 minutes of all-you-can-drink, and an obanzai, oden and sashimi set for two ¥8,800 (2025–26 reviews). 48 seats: a counter on the ground floor, tatami and private rooms with alcoves upstairs for 3–8, whole-floor use for 18–24 (Tabelog; 2025–26 reviews). Cards, IC cards, e-money and QR, including Alipay and WeChat Pay (Tabelog). On Shinbashi-dori east of Hanamikoji, Gion; 5 min from Gion-Shijo Stn (Tabelog). Opened 14 March 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, east of Hanamikoji — 5 min from Gion-Shijo Stn',
    cuisine: 'Obanzai and year-round Kyoto oden in a fully renovated machiya over 150 years old, with yuba, nama-fu, Kyoto vegetables and local sake (Tabelog, shop text) · assorted obanzai platter, Kyoto oden in kombu dashi, sashimi of sea bream, squid and bonito, dashimaki, nama-fu dengaku, fresh yuba sashimi, grilled hamo, eggplant tempura, steak, grilled stingray fin, chirimen sansho, Mont Blanc potato salad (2025–26 reviews) · sake from Sasaki Shuzo in Kyoto and from Ine (November 2025) · courses about ¥5,000–7,500; winter premium course with Kyoto beef and oden (Tabelog; 2025–26 reviews)',
    website: 'https://www.kyoya-kiyomizu.com/gionshinbashi_menu.html', gmaps: gm('京家 きよみず 祇をん新橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Obanzai & oden izakaya · Gion Shinbashi, a 150-year-old machiya] One of four Kyoya Kiyomizu izakaya, this one in a renovated Gion Shinbashi townhouse with a counter downstairs and tatami rooms above. Order the obanzai platter, Kyoto oden in a gentle kombu dashi, yuba sashimi and nama-fu dengaku, with Kyoto sake. Courses from about ¥5,000, good value for Gion. Open 16:00–22:30 daily; 2-hour limit when busy.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the Kyoya Kiyomizu group; staff unnamed'], origin: null,
      background: 'Per Tabelog (the shop’s own text): an izakaya in a fully renovated Kyoto machiya over 150 years old, serving obanzai, Kyoto oden all year, yuba, nama-fu and Kyoto vegetables with local sake; opened 14 March 2016. Tabelog lists three other Kyoya Kiyomizu shops — Kiyamachi, Yanagibaba honke and Nishi-Nishikikoji.',
      philosophy: null, specialty: 'Kyoto oden; obanzai platter.',
      anecdotes: [
        { text: 'An April 2026 regular found value had changed a little since earlier visits but still a safe choice under ¥10,000 in Gion.', source: R + 'B432636615/' },
        { text: 'A September 2026 diner on the ¥7,500 all-you-can-drink course found each type of drink limited to one brand.', source: R + 'B534867323/' },
        { text: 'A December 2025 year-end party sat on chairs at tables in the upstairs tatami room, easy on the knees.', source: R + 'B520954920/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん・豚しゃぶ、東山区新橋通花見小路東入ル2丁目橋本町416、祇園四条駅から徒歩5分、毎日16:00〜22:30 (L.O. 22:00)、12月31日〜1月3日休み、予約可 (2名はカウンター)、キャンセル料 前日50%・当日100%、混雑時は2時間制、チャージ料無し、48席 (座敷、床の間付きの個室、カウンター)、カード・電子マネー・QR 可、2016年3月14日オープン、築150年以上の京町家を改装、おばんざい、通年の京おでん、湯葉、生麩、京野菜、地酒。口コミ (2025年8月〜2026年10月、英語): おばんざいの盛り合わせ、刺身、だし巻き、生麩田楽、生湯葉の刺身、鱧、コース約5,000円、飲み放題付き7,500円、2人用セット8,800円、飲み放題は銘柄が少ないという声。',
      confidence: 'medium', sources: [TB, 'https://www.kyoya-kiyomizu.com/gionshinbashi_menu.html', R + 'B432636615/', R + 'B450569467/', R + 'B513535177/', R + 'B515230364/', R + 'B517139771/', R + 'B517698812/', R + 'B520954920/', R + 'B522620679/', R + 'B528897696/', R + 'B534867323/', R + 'B535862720/', R + 'B537011271/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; courses or à la carte; cards, IC and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通花見小路東入ル2丁目橋本町416',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005717, 135.776308); cross-checked: GSI 京都府京都市東山区橋本町416番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534867323/', R + 'B517139771/', R + 'B535862720/'],
    price_note: 'Prices from September 2025–September 2026 reviews; no cover charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Course', '¥5,000', 'Course', 'ask', 'no', 'September 2026.', 'course_5000'),
      it('', '', 'Course of 9 dishes with 90 min all-you-can-drink', '¥7,500', 'Course', 'ask', 'no', 'September 2026.', 'course_nomihodai'),
      it('', '', 'Obanzai, oden and sashimi set for two', '¥8,800', 'Set', 'ask', 'no', 'November 2025.', 'set_for_two'),
    ] }, {
    cuisine: '築150年以上の京町家を全面改装した店で、おばんざいと通年の京おでん、湯葉、生麩、京野菜、地酒 (食べログの店の紹介)・おばんざいの盛り合わせ、昆布出汁の京おでん、鯛・いか・鰹のお造り、だし巻き、生麩田楽、生湯葉のお造り、焼き鱧、茄子の天ぷら、ステーキ、えいひれ、ちりめん山椒、モンブランのようなポテトサラダ (2025〜2026年の口コミ)・京都の Sasaki 酒造や Ine の日本酒 (2025年11月)・コース約5,000〜7,500円、京都牛とおでんの冬のプレミアムコース (食べログ、2025〜2026年の口コミ)',
    neighborhood: '祇園新橋、花見小路の東。祇園四条駅から徒歩5分',
    gf_detail: '要確認。昆布と出汁のおでん、おばんざい、刺身、天ぷらで、醤油を使う (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。京おでんとおばんざいに出汁を使う (食べログ)。',
    notes: '[おばんざい・おでん・祇園新橋、築150年の町家] 京家 きよみずの4店のひとつ。祇園新橋の改装した町家で、1階はカウンター、2階は座敷。おばんざいの盛り合わせ、やさしい昆布出汁の京おでん、生湯葉のお造り、生麩田楽を京都の日本酒と。コースは約5,000円からで、祇園にしては割安。毎日16時〜22時30分、混雑時は2時間制。',
  });
}

// ================================================================ 食堂ほかげ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26022052/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '21:30']); const S = day(['13:00', '20:00']);
  put({
    id: 'kyoto_shokudo_hokage', name: '食堂ほかげ (Shokudo Hokage)', category: 'OMNI',
    lat: 35.018927, lng: 135.769134, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese dishes with dashi and soy, including agedashi sesame tofu and fried horse mackerel (2024–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the vegetable kuzu-hiki and takikomi rice are made with dashi, and fish and meat dishes dominate (2024–26 reviews).',
    hours_raw: 'Tue–Sat 17:00–21:30; Sun 13:00–20:00; closed Monday (Tabelog). Reservations accepted; same-day bookings sometimes possible (Tabelog; October 2024). Clay-pot rice takes about 30 minutes, so order it early (July 2022). 10 counter seats, some with a sunken footwell at the back (Tabelog; September 2024). Non-smoking; cards, no e-money or QR (Tabelog). On Kawaramachi-dori north of Marutamachi, opposite the prefectural medical university; 5 min from Jingu-Marutamachi Stn (Tabelog; June 2023).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi Marutamachi — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'À la carte seasonal Japanese dishes and freshly cooked clay-pot rice from a one-man counter (2024–26 reviews) · takikomi gohan cooked to order, about 30 minutes — shirasu and shiso, sakura shrimp and corn, chicken and burdock, octopus, bamboo shoot with chirimen (2022–26 reviews) · sashimi such as sea bream, kinmedai, ishidai and bonito; seasonal vegetables with kuzu sauce; agedashi sesame tofu; smoked or fried horse mackerel; pork kakuni with poached egg; simmered chicken liver; steamed white fish with domyoji; beef tendon with daikon (2024–26 reviews) · sake tasting sets, a lemon sour of domestic lemons, organic ginger ale (2022–26 reviews) · about ¥4,000–10,000 a head (2024–26 reviews)',
    website: null, gmaps: gm('食堂ほかげ 河原町丸太町'), menu_url: null,
    notes: "[Japanese bistro · Kawaramachi Marutamachi, one cook and a clay pot] A ten-seat counter north of Marutamachi run by a single cook, with a long seasonal à la carte list — sashimi, vegetables in kuzu sauce, agedashi sesame tofu — and rice cooked to order in a clay pot (order it first; it takes half an hour), perhaps shirasu and shiso or sakura shrimp and corn. Gentle, careful cooking for about ¥5,000–10,000. Closed Monday; Sunday from 13:00.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed), running the counter alone (2024–26 reviews)'], origin: null,
      background: 'Reviewers describe the restaurant as run single-handed by the owner (February 2024, July and September 2026), with a pace that keeps up despite that (July 2026); a February 2024 visitor was sent by the chef of a popular restaurant.',
      philosophy: null, specialty: 'Clay-pot takikomi gohan; seasonal vegetable kuzu-hiki.',
      anecdotes: [
        { text: 'A March 2024 diner thought 1.5 go of bamboo-shoot rice too much for one, then finished it.', source: R + 'B482188655/' },
        { text: 'A September 2026 diner asked about the dry lemon sour and learned it uses domestic green lemons.', source: R + 'B536543210/' },
        { text: 'A July 2022 visitor saw the notice that the rice takes about 30 minutes and ordered sake tastings while waiting.', source: R + 'B451899109/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、上京区河原町通丸太町上る出水町273-1、神宮丸太町駅から徒歩5分、火〜土 17:00〜21:30、日 13:00〜20:00、月曜休み、予約可、10席、禁煙、カード可。口コミ (2022年7月〜2026年9月、英語): 店主一人で営むカウンター、季節のアラカルト、土鍋の炊き込みご飯 (約30分、しらすと大葉、桜海老ととうもろこし、鶏ごぼう、蛸、筍)、季節の野菜の葛引き、揚げ出し胡麻豆腐、鯵、豚の角煮、日本酒の飲み比べ、国産レモンのレモンサワー。',
      confidence: 'medium', sources: [TB, R + 'B451899109/', R + 'B467478066/', R + 'B471747657/', R + 'B480317677/', R + 'B482188655/', R + 'B493727821/', R + 'B506117474/', R + 'B527599930/', R + 'B532199152/', R + 'B534078063/', R + 'B536543210/', R + 'B536835214/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; order the clay-pot rice early; Japanese menu; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区河原町通丸太町上る出水町273-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.018927, 135.769134); cross-checked: GSI 京都府京都市上京区出水町273番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536835214/', R + 'B532199152/'],
    price_note: 'No item prices found; reviews give about ¥4,000–10,000 a head (2024–26).', last_checked: TODAY, items: [
      it('', '', 'Clay-pot takikomi gohan (seasonal; about 30 minutes)', '', 'Rice', 'ask', 'no', '2022–26 reviews.', 'donabe_takikomi'),
      it('', '', 'Seasonal vegetables with kuzu sauce', '', 'Small plates', 'ask', 'no', '2024–26 reviews.', 'kuzuhiki'),
      it('', '', 'Agedashi sesame tofu', '', 'Small plates', 'ask', 'no', 'February 2024.', 'agedashi_gomadofu'),
    ] }, {
    cuisine: '店主一人のカウンターの、季節のアラカルトと炊きたての土鍋ご飯 (2024〜2026年の口コミ)・注文してから炊く炊き込みご飯 (約30分): しらすと大葉、桜海老ととうもろこし、鶏ごぼう、蛸、筍とちりめん (2022〜2026年の口コミ)・鯛、金目鯛、石鯛、鰹などのお造り、季節の野菜の葛引き、揚げ出し胡麻豆腐、鯵の燻製やフライ、豚の角煮と温玉、鶏レバーの煮物、白身魚の道明寺蒸し、牛すじ大根 (2024〜2026年の口コミ)・日本酒の飲み比べ、国産レモンのレモンサワー、オーガニックのジンジャーエール (2022〜2026年の口コミ)・1人約4,000〜10,000円 (2024〜2026年の口コミ)',
    neighborhood: '河原町丸太町。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。出汁と醤油の和食で、揚げ出し胡麻豆腐や鯵フライもある (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。野菜の葛引きや炊き込みご飯も出汁を使い、魚と肉の料理が中心 (2024〜2026年の口コミ)。',
    notes: '[和食・河原町丸太町、店主一人と土鍋] 丸太町の北の10席のカウンターを店主が一人で営む。季節のアラカルトが長く、お造り、野菜の葛引き、揚げ出し胡麻豆腐など。土鍋で炊く炊き込みご飯は30分かかるので最初に頼んで、しらすと大葉や桜海老ととうもろこしを。やさしく丁寧な料理で1人5,000〜10,000円ほど。月曜休み、日曜は13時から。',
  });
}

// ================================================================ うどん しき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043904/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_udon_shiki', name: 'うどん しき 京都うどん (Udon Shiki Kyoto Udon)', category: 'OMNI',
    lat: 35.001899, lng: 135.766414, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: handmade wheat udon from four domestic flours, with wheat-batter tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is a bonito dashi (Tabelog).',
    hours_raw: 'Lunch 11:00–15:00 (last order 14:30) and dinner 17:00–23:00 (last order 22:30), daily (Tabelog). Not taking reservations for now — come in person and join the waiting list by QR code or app; waits of 30 minutes to over an hour (Tabelog; September–October 2026). May close early when the noodles sell out (September 2026). 37 seats: 9 at the counter, 28 at tables; noodle-making room and waiting area upstairs (Tabelog; October 2026). Non-smoking; cards, IC cards, e-money and QR (Tabelog). In a quiet residential lane, so you cannot queue outside; 8 min from Kyoto Kawaramachi Stn (Tabelog; October 2026). Opened 3 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo near Kawaramachi — 8 min from Kyoto Kawaramachi Stn',
    cuisine: 'Freshly made chewy udon in a rich bonito dashi, with seasonal vegetable tempura (Tabelog, shop text) · cold tempura bukkake or zaru udon with large shrimp and vegetables ¥1,500–1,650; chicken and egg tempura bukkake; Japanese-style curry udon ¥1,650; nabe-yaki curry udon ¥2,280; "Roppongi udon" ¥2,400; carbonara udon (August–October 2026) · noodles from four kinds of domestic wheat flour (August 2026)',
    website: null, gmaps: gm('うどん しき 京都うどん'), menu_url: TB + 'dtlmenu/',
    notes: "[Udon · near Kawaramachi, chewy handmade udon and crisp tempura] A modern machiya-style udon shop opened in December 2025, with a noodle-making room upstairs. The firm, chewy udon comes cold with big shrimp and vegetable tempura, in curry, or as a cheese-and-yolk carbonara; about ¥1,500–2,400. No bookings — sign up on the waiting list (often an hour in the evening) and wander off. Some found the broth and service uneven. Open daily.",
    chef_bio: { chef_name: null, roles: ['Udon shop; staff unnamed'], origin: null,
      background: 'Per Tabelog (the shop’s own text): freshly made, chewy udon with a rich bonito dashi and seasonal vegetable tempura, made in a noodle room on the second floor; opened 3 December 2025. An August 2026 reviewer says the restaurant has roots in Roppongi and uses four domestic wheat flours.',
      philosophy: null, specialty: 'Tempura bukkake udon; carbonara udon.',
      anecdotes: [
        { text: 'An October 2026 diner, first in at 17:00, waited until 17:20 for orders to be taken and for water, though the tempura was outstanding.', source: R + 'B537395309/' },
        { text: 'An August 2026 diner liked the chewy noodles but found the broth a poor match and the egg tempura overcooked.', source: R + 'B534198912/' },
        { text: 'An October 2026 diner waited 65 minutes on a Tuesday night and advised checking in well ahead.', source: R + 'B538228889/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・うどん・鍋、下京区丸屋町415-23、京都河原町駅から徒歩8分、毎日 11:00〜15:00 (L.O. 14:30)・17:00〜23:00 (L.O. 22:30)、新規予約は受けていない (直接来店)、37席 (カウンター9、テーブル28)、禁煙、カード・電子マネー・QR 可、2025年12月3日オープン、2階に製麺室、もちもちの手打ちうどんと濃い鰹出汁、季節の野菜の天ぷら。口コミ (2026年8〜10月、英語): 天ぷらぶっかけ1,650円、和風カレーうどん1,650円、鍋焼きカレーうどん2,280円、六本木うどん2,400円、カルボナーラうどん、国産小麦4種、アプリで順番待ち (1時間以上)、麺がなくなり次第終了、出汁が合わないという声。',
      confidence: 'medium', sources: [TB, R + 'B534198912/', R + 'B534286339/', R + 'B534316189/', R + 'B534514656/', R + 'B534709375/', R + 'B535009066/', R + 'B536821803/', R + 'B537335060/', R + 'B537395309/', R + 'B537583707/', R + 'B538228889/', R + 'B538667211/'] },
    cultural_comfort: { level: 'none_needed', note: 'Join the waiting list by QR code or app; many international guests; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区丸屋町415-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened December 2025; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001899, 135.766414); cross-checked: GSI 京都府京都市下京区丸屋町415番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534316189/', R + 'B534709375/', R + 'B537583707/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura bukkake udon (cold)', '¥1,650', 'Udon', 'no', 'no', 'August 2026.', 'tempura_bukkake'),
      it('', '', 'Japanese-style curry udon', '¥1,650', 'Udon', 'no', 'no', 'August 2026.', 'curry_udon'),
      it('', '', 'Nabe-yaki curry udon (chicken)', '¥2,280', 'Udon', 'no', 'no', 'October 2026.', 'nabeyaki_curry'),
      it('', '', 'Roppongi udon', '¥2,400', 'Udon', 'no', 'no', 'August 2026.', 'roppongi_udon'),
    ] }, {
    cuisine: '打ちたてのもちもちのうどんと濃い鰹出汁、季節の野菜の天ぷら (食べログの店の紹介)・冷たい天ぷらぶっかけやざるうどん (大きな海老と野菜の天ぷら) 1,500〜1,650円、鶏天と玉子天のぶっかけ、和風カレーうどん1,650円、鍋焼きカレーうどん2,280円、「六本木うどん」2,400円、カルボナーラうどん (2026年8〜10月)・麺は国産小麦4種 (2026年8月)',
    neighborhood: '四条の南、河原町の近く。京都河原町駅から徒歩8分',
    gf_detail: 'グルテンフリーではない。国産小麦4種の手打ちうどんと、小麦の衣の天ぷら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁は鰹 (食べログ)。',
    notes: '[うどん・河原町近く、もちもちのうどんと揚げたて天ぷら] 2025年12月開店の、町家風のモダンなうどん店。2階に製麺室。しっかりしたコシのうどんを、大きな海老と野菜の天ぷらの冷たいぶっかけで、カレーで、チーズと卵黄のカルボナーラで。1,500〜2,400円ほど。予約は受けておらず、順番待ちに登録して (夜は1時間待ちも) 外で待つ。出汁や接客にむらがあるという声も。年中無休。',
  });
}

save();
