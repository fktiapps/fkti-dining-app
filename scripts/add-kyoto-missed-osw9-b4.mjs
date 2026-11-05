// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 4.
//   + 柚子元 京都先斗町店 Yuzu Gen (yuzu hot pot and yuzu gyoza in a Pontocho townhouse; since 2005)    [core]
//   + 先斗町 あさり Pontocho Asari (obanzai, yuba and motsu-nabe izakaya on Pontocho; since 2022)       [core]
//   + プチレストランないとう Petit Restaurant Naitou (yoshoku and tonkatsu near City Hall; since 2001)  [notable]
//   + 京菓子司 松寿軒 Shojuken (wagashi maker for Kenninji; Mikasa and monaka)                         [notable]
//   - 祇園サンボア 26001401 skipped (see the skip reason: Sambor bars, a group of 5+)
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26003381, 26037431) and
//   `next notable 200` (26001401 skipped, then 26033759, 26009387), after batch 3. None is in data/kyoto.json: grep by
//   name (柚子元/Yuzu, あさり/Asari, ないとう/Naitou — only "Bar 内藤", a different bar — 松寿軒/Shojuken, サンボア) and
//   address (鍋屋町212, 鍋屋町213, 尾張町217, 弓矢町19) found none.
//   Group checks: 柚子元 is a brand of the KIWA Corporation, whose brand list links 柚子元 to this Pontocho shop only —
//   one shop of its concept, drafted. Pontocho Asari: no group found.
//   Pins: Yuzu Gen (鍋屋町212) and Asari (鍋屋町213) Tabelog points are 6.7 m apart; nearest other record 37 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001401', '祇園サンボア: one of the Sambor (サンボア) bars, same name and highball-bar concept, at least 5 — Gion (26001401), 島之内サンボア (Tabelog 27027996), 天神橋サンボア (27074644) in our crawls, Sukiyabashi Samboa Bar in Ginza (hamoni.jp listing) and a Kitashinchi Samboa (named in that listing\'s review); a May 2026 Tabelog review (B534385989) says Sambor was founded in Kobe in 1918 and expanded with branches, Gion in 1972. Group of 5+ under the working line; flagged for Greg because the bars may be independently owned');

// ================================================================ 柚子元 京都先斗町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003381/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kiwa-group.co.jp/yuzugen_pontocho/'; const MENU = 'https://kiwa-group.co.jp/wp5/wp-content/uploads/2025/03/yuzugen_pontocho_grand_2503.pdf';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yuzugen_pontocho', name: '柚子元 京都先斗町店 (Yuzu Gen Pontocho)', category: 'OMNI',
    lat: 35.004944, lng: 135.771041, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The yuzu hot pots finish with noodles or rice porridge, and the menu adds gyoza, noodle bowls and fried chicken; the broth ingredients are not published (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but every hot pot on the menu is wagyu, sea bream, shrimp, pork or chicken, and the gyoza filling is not described as meat-free (Tabelog; official menu).',
    hours_raw: '17:00–22:00 (last order 21:00); closed Tuesday; hours may change with weather or season (Tabelog). The operator’s own page also lists lunch 11:30–14:00 (last order) — not on Tabelog, so check. Bookings by phone or Tabelog only (not via Auto Reserve); two-hour seating; ¥3,000 a head for same-day cancellation or no-show; a service charge is added (Tabelog). One-drink policy and QR ordering (December 2025). 48 seats: a counter downstairs, tatami rooms up a steep staircase; restroom on the first floor only (Tabelog; October 2026). Cards, IC cards and QR payments; non-smoking (Tabelog). Takeaway and Uber Eats (official site). On Pontocho, north of Shijo; 2 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho alley, just north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Yuzu-themed Chinese-style hot-pot house in a renovated Pontocho townhouse (official site) · yuzu nabe per person (from two servings): black-wagyu yuzu shabu ¥4,800, shrimp and sea bream ¥3,300, sea bream ¥3,000, pork ¥2,800, chicken ¥2,800, finished with noodles or rice porridge · yuzu-shaped gyoza, green yuzu (with yuzu kosho, spicy) and yellow yuzu (yuzu miso), 4, 6 or 8 pieces from ¥500 · yuzu noodle bowls ¥1,380–1,800; spicy beef-tendon noodles · whole fried sea bream or chicken with yurin sauce, yuzu cabbage, smashed cucumber · yuzu sakes and yuzu highball (official menu, March 2025, prices with tax; 2026 reviews)',
    website: SITE, gmaps: gm('柚子元 先斗町'), menu_url: MENU,
    notes: "[Yuzu hot pot · Pontocho, a townhouse full of citrus] A small renovated townhouse on Pontocho, open since 2005, where almost everything carries yuzu: hot pots of sea bream, shrimp, pork, chicken or wagyu in a tart yuzu broth (from ¥2,800 a head, finished with noodles or porridge), yuzu-shaped gyoza in green and yellow versions, and yuzu sakes. Counter downstairs, tatami rooms up a steep stair. Dinner 17:00–22:00; closed Tuesday; book through Tabelog or by phone.",
    chef_bio: { chef_name: null, roles: ['Run by KIWA Corporation (際コーポレーション); kitchen staff unnamed'], origin: null,
      background: 'Opened 16 July 2005 (Tabelog). One of the many restaurant brands of KIWA Corporation (際コーポレーション), whose brand list links 柚子元 to this Pontocho shop only (official site). A December 2025 reviewer who has eaten here since it opened said the taste is unchanged.',
      philosophy: 'Per the operator: a small, cute townhouse in historic Pontocho where yuzu dishes and drinks soothe with their scent — "a drink at a fair price, and a full stomach" (official site).',
      specialty: 'Yuzu nabe; yuzu gyoza.',
      anecdotes: [
        { text: '"The taste has remained unchanged since the opening!" — December 2025; the same regular noted mostly foreign customers in June 2026.', source: R + 'B433465889/' },
        { text: 'With one burner per table of four, a March 2026 diner advised ordering a pot each and not overcooking the sea bream.', source: R + 'B524911710/' },
        { text: 'An April 2026 visitor found the meal "just okay", the yuzu broth reminiscent of a Taiwanese sour-cabbage hot pot, while the yuzu dumplings were the highlight.', source: R + 'B526705925/' },
        { text: 'Steep stairs to the second floor worried a couple with knee trouble, though the staff were very pleasant — January 2026.', source: R + 'B521342614/' },
      ],
      japanese_sources_summary: '公式サイト (kiwa-group.co.jp): 柚子元 先斗町、柚子を使った料理やお酒、歴史ある花街先斗町の京町家を改装した小さくてかわいらしい店、1階はカウンター、2階はお座敷、11:30〜14:00 L.O.・17:00〜22:00 (21:00 L.O.)、火曜定休、48席、個室あり、カード・QR・電子マネー可、禁煙、テイクアウト・UberEats、中京区先斗町四条上る鍋屋町212。メニュー (2025年3月、税込): 柚子鍋 (一人前、二人前より) 黒毛和牛柚子しゃぶ4,800円・海老と鯛柚子鍋3,300円・鯛柚子鍋3,000円・豚柚子鍋2,800円・鶏柚子鍋2,800円、柚子麺1,380〜1,800円、青柚子餃子・黄柚子餃子 (8ケ1,000円・6ケ750円・4ケ500円)、鯛油淋、鶏唐揚、柚子キャベツ、たたき胡瓜、柚子酒。食べログ: 中華料理・鍋・居酒屋、17:00〜22:00 (L.O. 21:00)、火曜休み、席は2時間制、当日キャンセル・無断キャンセルは1人3,000円、サービス料あり、ベジタリアンメニューあり、2005年7月16日オープン。口コミ (2025年12月〜2026年10月、英語): 豚柚子鍋、鯛の鍋、柚子餃子2種、締めの麺と雑炊、急な階段、外国からの客が多い。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B433465889/', R + 'B521342614/', R + 'B524911710/', R + 'B525767689/', R + 'B526705925/', R + 'B528543731/', R + 'B532773217/', R + 'B535935626/', R + 'B537131245/', R + 'B537601752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; book via Tabelog or phone; two-hour seating; tatami upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町四条上る鍋屋町212',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004944, 135.771041); cross-checked: GSI 京都府京都市中京区鍋屋町212番地 (lot) 20m; 6.7 m from kyoto_pontocho_asari next door; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Operator menu PDF dated March 2025 (code 2503), prices with tax; service charge extra (Tabelog).', last_checked: TODAY, items: [
      it('豚柚子鍋', '', 'Pork yuzu hot pot (per person, from two servings)', '¥2,800', 'Yuzu nabe', 'ask', 'no', '', 'pork_yuzu_nabe'),
      it('鯛柚子鍋', '', 'Sea bream yuzu hot pot (per person)', '¥3,000', 'Yuzu nabe', 'ask', 'no', '', 'tai_yuzu_nabe'),
      it('海老と鯛柚子鍋', '', 'Shrimp and sea bream yuzu hot pot (per person)', '¥3,300', 'Yuzu nabe', 'ask', 'no', '', 'ebi_tai_yuzu_nabe'),
      it('黒毛和牛柚子しゃぶ', '', 'Black-wagyu yuzu shabu-shabu (per person)', '¥4,800', 'Yuzu nabe', 'ask', 'no', '', 'wagyu_yuzu_shabu'),
      it('青柚子餃子', '', 'Green yuzu gyoza with yuzu kosho, 8 pieces', '¥1,000', 'Gyoza', 'no', 'ask', 'Also 6 (¥750) or 4 (¥500).', 'ao_yuzu_gyoza'),
      it('黄柚子餃子', '', 'Yellow yuzu gyoza with yuzu miso, 8 pieces', '¥1,000', 'Gyoza', 'no', 'ask', 'Also 6 (¥750) or 4 (¥500).', 'ki_yuzu_gyoza'),
    ] }, {
    cuisine: '先斗町の京町家を改装した、柚子がテーマの中華風の鍋の店 (公式サイト)・柚子鍋 (一人前、二人前から): 黒毛和牛柚子しゃぶ4,800円、海老と鯛3,300円、鯛3,000円、豚2,800円、鶏2,800円、締めは麺か雑炊・柚子の形の餃子、ゆず胡椒入りでピリ辛の青柚子と柚子味噌の黄柚子、4・6・8ケで500円から・柚子麺1,380〜1,800円、辛い牛すじ麺・鯛や鶏の丸揚げの油淋だれ、柚子キャベツ、たたき胡瓜・柚子酒、柚子ハイボール (公式メニュー2025年3月、税込、2026年の口コミ)',
    neighborhood: '四条のすぐ北の先斗町。京都河原町駅から徒歩2分',
    gf_detail: '要確認。柚子鍋の締めは麺か雑炊で、ほかに餃子、麺、唐揚げ。スープの原材料は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、鍋は和牛、鯛、海老、豚、鶏のみで、餃子のあんも肉なしとは書かれていない (食べログ、公式メニュー)。',
    notes: '[柚子鍋・先斗町、柚子づくしの町家] 先斗町の小さな京町家を改装した店で、2005年開店。ほとんどの料理に柚子: 鯛、海老、豚、鶏、和牛を酸味のある柚子のスープで食べる鍋 (1人2,800円から、締めは麺か雑炊)、柚子の形の青と黄の餃子、柚子酒。1階はカウンター、急な階段の上に座敷。夜17時〜22時、火曜休み。予約は食べログか電話で。',
  });
}

// ================================================================ 先斗町 あさり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037431/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '02:00']); const WE = day(['12:00', '02:00']);
  put({
    id: 'kyoto_pontocho_asari', name: '先斗町 あさり (Pontocho Asari)', category: 'OMNI',
    lat: 35.004998, lng: 135.771073, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The house hot pot is soy-sauce based, and the menu includes tempura, sushi and fried eel rolls; no gluten information (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there are yuba, nama-fu and vegetable obanzai, but obanzai such as eggplant in dashi are made with broth, and the hot pot holds pork, offal and clams (Tabelog; 2025–26 reviews).',
    hours_raw: 'Monday–Friday 15:00–2:00, Saturday and Sunday 12:00–2:00, open every day (Tabelog). Bookings via Tabelog, even on the day; parties of two sit at the counter; large groups may be sent to an annex nearby (Tabelog; 2025–26 reviews). Courses with all-you-can-drink from about ¥5,000–6,000 (2025–26 reviews; Tabelog). A March 2026 reviewer was charged 10% service at night. 78 seats, private rooms for 6 to 30+, private hire for 20–50; heated-tobacco area only; cards, IC cards and QR payments (Tabelog). Second floor on Pontocho, about 1 min north of Shijo; 3 min from Kawaramachi or Gion-Shijo Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho alley, just north of Shijo (2F) — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Casual izakaya for Kyoto vegetables, obanzai with yuba and nama-fu, Kyoto and Shiga sake, and hot pot (Tabelog) · house hot pot of pork, horumon, asari clams and vegetables in a soy-garlic broth, finished with zosui; also an asari-and-yuba hot pot (2025 reviews) · obanzai: fresh yuba sashimi, fried eggplant in dashi, Manganji peppers, simmered chicken, Kujo green onion, dashimaki tamago; sashimi, tempura, nigiri sushi, unagi-katsu roll (2025–26 reviews) · all-you-can-drink courses: obanzai and sushi, ¥6,000; Kyoto obanzai 10 dishes, ¥5,000 (Tabelog; March 2026)',
    website: null, gmaps: gm('先斗町 あさり'), menu_url: null,
    notes: "[Izakaya · Pontocho, obanzai and hot pot until 2 am] A large, bright second-floor izakaya on Pontocho with Japanese umbrellas hanging from the ceiling, open from mid-afternoon (noon at weekends) to 2:00 every day: Kyoto obanzai like yuba sashimi and eggplant in dashi, a pork-offal-and-clam hot pot, and Kyoto and Shiga sake, mostly as all-you-can-drink courses (¥5,000–6,000). Easy to book even on the day. Reviews are mixed; many guests are tourists.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 1 May 2022 (Tabelog). Per the operator’s Tabelog text: a casual izakaya for first-timers, with seasonal Kyoto vegetables, obanzai such as yuba and nama-fu, and local sake from Kyoto and Shiga.',
      philosophy: null, specialty: 'Obanzai courses; asari and horumon hot pot.',
      anecdotes: [
        { text: 'A party of 11 got a last-minute Friday booking; the yuba was the highlight, the only downside bottled beer — June 2025.', source: R + 'B509319684/' },
        { text: 'A March 2025 diner found the dishes over-seasoned and the drinks hastily made.', source: R + 'B504088787/' },
        { text: 'A March 2026 reviewer reported a 10% night service charge, a clogged soy-sauce dispenser and staff who did not name the dishes.', source: R + 'B524205320/' },
        { text: 'A group of 15 that booked a "fully private room" was sent to another location and seated in a space other guests could enter — September 2026.', source: R + 'B536013029/' },
      ],
      japanese_sources_summary: '食べログ: 先斗町 あさり、居酒屋・もつ鍋・日本料理、中京区鍋屋町213 2F、四条先斗町から北へ徒歩約1分、月〜金 15:00〜2:00、土日 12:00〜2:00、年中無休、2名の予約はカウンター席、78席、個室あり、貸切20〜50人、加熱式たばこのみ喫煙可、カード・電子マネー・QR 可、2022年5月1日オープン、京野菜、湯葉や生麩のおばんざい、京都と滋賀の地酒、飲み放題付きおばんざいと握り寿司のコース6,000円、ベジタリアンメニューあり。口コミ (2025年1月〜2026年9月、英語): 生湯葉、もつ鍋 (豚、ホルモン、あさり、醤油ベース)、雑炊、飲み放題付き京のおばんざい10品コース5,000円、夜はサービス料10%、別館の個室、観光客が多い。',
      confidence: 'medium', sources: [TB, R + 'B498946852/', R + 'B499395418/', R + 'B504088787/', R + 'B509319684/', R + 'B517321204/', R + 'B519687009/', R + 'B519735724/', R + 'B524205320/', R + 'B524765486/', R + 'B536013029/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on Tabelog; courses with all-you-can-drink are the easy order.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町213 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text and courses); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004998, 135.771073); cross-checked: GSI 京都府京都市中京区鍋屋町213番地 (lot) 23m; 6.7 m from kyoto_yuzugen_pontocho next door; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524765486/'],
    price_note: 'Course prices from the Tabelog course list and a March 2026 review; no à la carte menu read.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink obanzai and nigiri sushi course (8 items)', '¥6,000', 'Courses', 'ask', 'no', '', 'obanzai_sushi_course'),
      it('', '', 'All-you-can-drink Kyoto obanzai course (10 dishes)', '¥5,000', 'Courses', 'ask', 'no', 'March 2026.', 'obanzai_10_course'),
    ] }, {
    cuisine: '京野菜、湯葉や生麩のおばんざい、京都と滋賀の地酒、鍋のカジュアルな居酒屋 (食べログ)・豚、ホルモン、あさり、野菜を醤油とにんにくのスープで煮る鍋、締めは雑炊。あさりと湯葉の鍋も (2025年の口コミ)・おばんざい: 生湯葉の刺身、揚げなすの煮浸し、万願寺とうがらし、鶏の煮物、九条ねぎ、だし巻き。刺身、天ぷら、握り寿司、うなぎかつの巻物 (2025〜26年の口コミ)・飲み放題付きコース: おばんざいと握り寿司6,000円、京のおばんざい10品5,000円 (食べログ、2026年3月)',
    neighborhood: '四条のすぐ北の先斗町 (2階)。京都河原町駅から徒歩3分',
    gf_detail: '要確認。名物の鍋は醤油ベースで、天ぷら、寿司、うなぎかつの巻物もある。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、湯葉、生麩、野菜のおばんざいもあるが、なすの煮浸しなどは出汁を使い、鍋は豚、ホルモン、あさり (食べログ、2025〜26年の口コミ)。',
    notes: '[居酒屋・先斗町、深夜2時までのおばんざいと鍋] 先斗町の2階にある広く明るい居酒屋で、天井に和傘。毎日昼過ぎ (土日は12時) から深夜2時まで。生湯葉の刺身やなすの煮浸しなどの京のおばんざい、豚ホルモンとあさりの鍋、京都と滋賀の地酒を、主に飲み放題付きのコース (5,000〜6,000円) で。当日でも予約しやすい。口コミの評価は分かれ、観光客が多い。',
  });
}

// ================================================================ プチレストランないとう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26033759/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://petitrestaurant-naito.com/';
  const RENEW = SITE + '2026/09/03/%e3%80%90%e3%83%aa%e3%83%8b%e3%83%a5%e3%83%bc%e3%82%a2%e3%83%ab%e3%80%91%e5%96%b6%e6%a5%ad%e3%81%94%e3%81%82%e3%82%93%e3%81%aa%e3%81%84/';
  const PLATE = SITE + '2026/09/03/%e3%81%aa%e3%81%84%e3%81%a8%e3%81%86%e3%83%97%e3%83%ac%e3%83%bc%e3%83%88%e3%80%901%e6%97%a510%e9%a3%9f%e9%99%90%e5%ae%9a%e3%80%91/';
  const NOV = SITE + '2026/09/28/%e3%80%90%e4%ba%88%e5%ae%9a%e3%80%9111%e6%9c%88%e3%81%ae%e5%96%b6%e6%a5%ad%e3%81%94%e3%81%82%e3%82%93%e3%81%aa%e3%81%84-4/';
  const FOOD = SITE + 'food/';
  const H = day(['13:00', '21:00']);
  put({
    id: 'kyoto_petit_restaurant_naitou', name: 'プチレストランないとう (Petit Restaurant Naitou)', category: 'MOM_AND_POP',
    lat: 35.013227, lng: 135.765542, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the menu is built on breaded cutlets (tonkatsu, beef cutlet, ham cutlet, fried shrimp, croquettes), demi-glace stews and curry; no gluten information (official menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is pork, beef, seafood or chicken, and the salads carry house ham, bacon, meatloaf or pork (official menu).',
    hours_raw: 'Since September 2026: 13:00–21:00 straight through (last order 20:30); closed Monday (official site; November 2026 calendar). 13:00–16:00: one drink per person (coffee or tea after the meal counts), à la carte, plus the Naitou special plate until 15:00, ten a day; from 16:00: one drink and a seasonal otsukidashi ¥800 (table charge) (official site). The lunch set menu ended in August 2026; Tabelog still shows the old lunch/dinner split. Bookings preferred, by phone (official site). 25 seats with a 5-seat bar counter; non-smoking; cards, e-money and QR (Tabelog). On Fuyacho-dori north of Oshikoji, 5 min from Kyoto Shiyakusho-mae Stn (official site; Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho north of Oshikoji, south of the Imperial Palace — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Seasonal dishes and tonkatsu, à la carte (official site) · Naitou special plate (13:00–15:00, ten a day): fillet cutlet, hamburg steak, fried shrimp, pork-shabu salad, green salad, ¥2,900, or ¥3,500 with rice and tonjiru (official site, September 2026) · pork: loin tonkatsu, Gorgonzola fillet cutlet, ginger-and-shiso mille-feuille cutlet, quattro formaggi "pizza katsu" with honey, house ham cutlet and ham steak, tonteki · beef: wagyu hamburg steak, beef cutlet (¥3,300, August 2026), black-wagyu beef stew, tongue stew (winter) · seafood: shrimp-and-crab cream croquettes, kuruma-ebi fry, oyster fry (season), sea bream poêlée · wild sea bream curry, roast pork curry, tonkatsu jū (official menu) · a considered sake list, including a dry Shiga junmai ginjo (Tabelog; August 2026)',
    website: SITE, gmaps: gm('プチレストランないとう 京都'), menu_url: FOOD,
    notes: "[Yoshoku · south of the Imperial Palace, tonkatsu and seasonal plates] A small, red-carpeted western-style restaurant on Fuyacho run by its owner since 2001 (first an eight-seat counter in Kawaramachi-Sanjo): crisp tonkatsu and creative cutlets, a dense wagyu hamburg steak, beef cutlet and demi-glace stews. Since September 2026 it runs straight through 13:00–21:00 with a one-drink rule; before 15:00 try the Naitou plate (¥2,900, ten a day). Book by phone. Closed Monday.",
    chef_bio: { chef_name: '内藤毅彦', roles: ['Owner (店主, official site)'], origin: null,
      background: 'Per the official site: opened in 2001 as an eight-seat, four-tsubo counter at Kawaramachi-Sanjo, when the owner was 33; moved to Yanagibaba-dori south of the palace in 2004 and to Fuyacho-dori in 2019 (December 2019, per Tabelog). From September 2026 the lunch sets ended and the shop switched to straight-through hours. Tabelog Yoshoku WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Tonkatsu; wagyu hamburg steak; Naitou special plate.',
      anecdotes: [
        { text: 'Beef cutlet ¥3,300, Australian top sirloin cooked medium-rare, with a generous tonjiru — August 2026.', source: R + 'B514720632/' },
        { text: 'A July 2026 family party found the host adjusted the à la carte portions for sharing so it felt like a course.', source: R + 'B537948636/' },
        { text: 'A November 2026 diner paid over ¥4,000 for the plate set and a juice and found the hamburg steak firmer than hoped.', source: R + 'B538591368/' },
        { text: 'The room has a deep red carpet and curtains, wooden tables and European decorations: three tables for four, one for five and about four counter seats — September 2026.', source: R + 'B535088952/' },
      ],
      japanese_sources_summary: '公式サイト (petitrestaurant-naito.com): 季節の料理&とんかつのお店、2001年 河原町三条にカウンター8席4坪で開業 (33歳)、2004年 御所南・柳馬場通りに移転、2019年 御所南・麩屋町通りに移転、店主 内藤毅彦、2026年9月から通し営業 13時〜21時 (20時30分 L.O)、13時〜16時はワンドリンク制 (食後のコーヒー紅茶可)、16時からはワンドリンク制と季節のおつきだし800円 (テーブルチャージ)、ランチセットメニューは2026年8月末で終了、ご予約優先、定休日 月曜日、ないとうスペシャルプレート (1日10食、13時〜15時): ヒレトンカツ、ハンバーグ、エビフライ、豚しゃぶサラダ、グリーンサラダ、プレートのみ2,900円・ご飯と豚汁セット3,500円、メニュー: ロースとんかつ、ゴルゴンゾーラポークカツ、生姜と大葉のミルフィーユサンドカツ、ピザカツ、自家製ハムカツ、トンテキ、天然鯛のカレーライス、海老と蟹のクリームコロッケ、牡蠣フライ (季節)、和牛ハンバーグステーキ、黒毛和牛三角バラのビーフシチュー、中京区尾張町217 サンロータス池治1F。食べログ: 洋食・とんかつ・ハンバーグ、25席、禁煙、カード・電子マネー・QR 可、洋食 WEST 百名店 2025。口コミ (2025年10月〜2026年11月、英語): ビーフカツ3,300円、ないとうプレート、豚汁、ハンバーグ。',
      confidence: 'medium', sources: [TB, SITE, RENEW, PLATE, NOV, FOOD, R + 'B514720632/', R + 'B532334677/', R + 'B533610947/', R + 'B534171406/', R + 'B535088952/', R + 'B536496830/', R + 'B537948636/', R + 'B538305004/', R + 'B538591368/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; one drink per person; ¥800 starter charge after 16:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区尾張町217 サンロータス池治 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 notices, December calendar) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013227, 135.765542); cross-checked: GSI 京都府京都市中京区尾張町217番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [PLATE, RENEW, R + 'B514720632/'],
    price_note: 'Plate prices from the official site (September 2026); the à la carte menu online has no prices; beef cutlet price from an August 2026 review.', last_checked: TODAY, items: [
      it('ないとうスペシャルプレート', '', 'Naitou special plate: fillet cutlet, hamburg steak, fried shrimp, pork-shabu salad, green salad', '¥2,900', 'Plate (13:00–15:00)', 'no', 'no', 'Ten a day.', 'naitou_plate'),
      it('ないとうスペシャルプレート ご飯と豚汁セット', '', 'Naitou special plate with rice and tonjiru', '¥3,500', 'Plate (13:00–15:00)', 'no', 'no', '', 'naitou_plate_set'),
      it('', '', 'Beef cutlet', '¥3,300', 'Beef', 'no', 'no', 'August 2026.', 'beef_cutlet'),
      it('季節のおつきだし', '', 'Seasonal otsukidashi (table charge after 16:00)', '¥800', 'Charges', '', '', '', 'otsukidashi'),
    ] }, {
    cuisine: '季節の料理ととんかつ、アラカルト (公式サイト)・ないとうスペシャルプレート (13時〜15時、1日10食): ヒレトンカツ、ハンバーグ、エビフライ、豚しゃぶサラダ、グリーンサラダ、2,900円、ご飯と豚汁付き3,500円 (公式サイト、2026年9月)・豚肉: ロースとんかつ、ゴルゴンゾーラのヒレカツ、生姜と大葉のミルフィーユサンドカツ、クワトロフォルマッジ蜂蜜かけのピザカツ、自家製ハムカツとハムステーキ、トンテキ・牛肉: 和牛ハンバーグステーキ、ビーフカツ (2026年8月 3,300円)、黒毛和牛のビーフシチュー、牛タンシチュー (冬)・海鮮: 海老と蟹のクリームコロッケ、車海老フライ、牡蠣フライ (季節)、天然鯛のポワレ・天然鯛のカレーライス、炙り豚カレー、とんかつ重 (公式メニュー)・辛口の滋賀の純米吟醸など、こだわりの日本酒 (食べログ、2026年8月)',
    neighborhood: '御所南、押小路の北の麩屋町通。京都市役所前駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない。メニューの中心は衣のついたカツ (とんかつ、ビーフカツ、ハムカツ、エビフライ、コロッケ)、デミグラスのシチュー、カレー。グルテンの情報はない (公式メニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。メインはどれも豚、牛、魚介、鶏で、サラダにも自家製のハム、ベーコン、ミートローフ、豚肉が入る (公式メニュー)。',
    notes: '[洋食・御所南、とんかつと季節の皿] 麩屋町通にある赤い絨毯の小さな洋食店。店主の内藤さんが2001年に河原町三条の8席のカウンターで始めた。サクッとしたとんかつや工夫のカツ、肉の詰まった和牛ハンバーグ、ビーフカツ、デミグラスのシチュー。2026年9月から13時〜21時の通し営業でワンドリンク制、15時までは1日10食のないとうプレート (2,900円) も。予約は電話で。月曜休み。',
  });
}

// ================================================================ 京菓子司 松寿軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26009387/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kyogashi_shojuken', name: '京菓子司 松寿軒 (Kyogashi Tsukasa Shojuken)', category: 'OMNI',
    lat: 34.998696, lng: 135.771487, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mochi and bean-paste sweets such as botamochi and warabi mochi may suit, but the Mikasa is a small dorayaki (a baked batter cake) and the monaka has a wafer shell; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and mochi sweets such as botamochi, warabi mochi and monaka may suit, but the Mikasa batter and the other sweets have no published ingredient list (2026 reviews).',
    hours_raw: 'No fixed hours published. Tabelog (operator text): reservation-only, and "currently closed all day" for renovation while taking phone orders; seasonal fresh wagashi must be ordered by the day before; walk-in sales happen but booked orders come first and items sell out. Reviewers bought over the counter through November 2026, mostly between 11:00 and 15:00; a November 2026 reviewer says it opens at 11:00, not 10:00 as some sites say. Book by phone (075-561-4030) a day or more ahead. Cash only; non-smoking (Tabelog; June 2026). Room for about five inside (October 2026). On a narrow lane west of Yamato-oji on Matsubara-dori, near Kenninji; 6 min from Kiyomizu-Gojo Stn (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yumiya-cho, between Kenninji and Matsubara-dori — 6 min from Kiyomizu-Gojo Stn',
    cuisine: 'Kyoto wagashi maker supplying Kenninji and Kodaiji temples and Gion teahouses (Tabelog) · Mikasa, a small dorayaki with chunky bean paste, ¥180 · monaka filled to order, ¥180 · seasonal jō-namagashi ¥300–360, e.g. Ubatama, Ubazukuri, Tsubaki mochi, Wakaayu, Yamatsuto · botamochi (bean paste or kinako) ¥200, warabi mochi ¥350, doyō-mochi in high summer (2026 reviews)',
    website: null, gmaps: gm('京菓子司 松寿軒'), menu_url: null,
    notes: "[Wagashi · Kenninji, a temple supplier in a back lane] A tiny wagashi shop on a quiet lane by Kenninji, supplier to Kenninji and Kodaiji: the small dorayaki called Mikasa (¥180), a monaka filled after you order so the shell stays crisp (¥180), and seasonal fresh sweets from ¥300. Phone ahead — booked orders come first, and fresh sweets need a day's notice; walk-ins often find things sold out. Tabelog says it is under renovation and taking phone orders. Cash only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per the operator’s Tabelog text: founded in 1932; a favourite of Kenninji since its founding and, by reputation, also a supplier to Kodaiji; trusted by Gion teahouses. A March 2026 reviewer gives 2026 as its 94th year; a November 2026 reviewer gives the founding as 1927. Tabelog Japanese-sweets WEST "Tabelog 100" 2023 and 2026, Sweets WEST 2018–2020 and 2022, Sweets 2017.',
      philosophy: null, specialty: 'Mikasa; monaka; seasonal jō-namagashi.',
      anecdotes: [
        { text: 'Without a booking at 11:30, a March 2026 visitor was told the Mikasa was not ready and came back at 14:30; dried sweets were given free.', source: R + 'B522865103/' },
        { text: 'Customers who came after a May 2026 reviewer without a booking found the products sold out.', source: R + 'B528078336/' },
        { text: '"The monaka is filled with sweet red bean paste right after you order it" — February 2026.', source: R + 'B528201096/' },
        { text: 'A March 2026 reviewer heard the shop is a favourite of Kenninji and was patronised by Nene, wife of Toyotomi Hideyoshi.', source: R + 'B524920882/' },
      ],
      japanese_sources_summary: '食べログ: 京菓子司 松寿軒、和菓子・どら焼き、東山区松原通大和大路西入弓矢町19-12、清水五条駅から徒歩6分、予約優先 (来店時は売り切れの場合あり)、現在は終日休業で改装中だが電話予約は可能、上生菓子は前日までに要連絡、カード・電子マネー・QR 不可、禁煙、1932年創業、建仁寺御用達、高台寺にも納める、祇園のお茶屋さん、和菓子・甘味処 WEST 百名店 2023・2026、スイーツ WEST 百名店 2018〜2020・2022、スイーツ百名店 2017。口コミ (2026年2〜11月、英語): Mikasa (小さなどら焼き) 180円、注文後にあんを詰める最中180円、季節の上生菓子300〜360円、ぼたもち200円、わらび餅350円、土用餅、開店は11時、1927年創業とする口コミも。',
      confidence: 'medium', sources: [TB, R + 'B522865103/', R + 'B524920882/', R + 'B528078336/', R + 'B528201096/', R + 'B530521989/', R + 'B532217030/', R + 'B535260951/', R + 'B536924774/', R + 'B538630637/', R + 'B538654293/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone ahead to reserve sweets; small counter shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路西入弓矢町19-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text says closed for renovation but taking phone orders); reviews show counter sales through November 2026; Japanese-sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.998696, 135.771487); cross-checked: GSI 京都府京都市東山区弓矢町19番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538654293/', R + 'B524920882/', R + 'B528201096/'],
    price_note: 'No price list read; prices from February–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mikasa (small dorayaki)', '¥180', 'Wagashi', 'no', 'ask', 'October 2026.', 'mikasa'),
      it('最中', '', 'Monaka, filled to order', '¥180', 'Wagashi', 'ask', 'ask', 'October 2026.', 'monaka'),
      it('', '', 'Seasonal jō-namagashi', '¥300~', 'Wagashi', 'ask', 'ask', 'February–October 2026; order a day ahead.', 'jo_namagashi'),
      it('', '', 'Botamochi (bean paste or kinako)', '¥200', 'Wagashi', 'ask', 'ask', 'March 2026.', 'botamochi'),
      it('', '', 'Warabi mochi', '¥350', 'Wagashi', 'ask', 'ask', 'March 2026.', 'warabi_mochi'),
    ] }, {
    cuisine: '建仁寺や高台寺、祇園のお茶屋さんに納める京菓子の店 (食べログ)・小さなどら焼き Mikasa、粒あん、180円・注文後にあんを詰める最中180円・季節の上生菓子300〜360円 (Ubatama、Ubazukuri、椿餅、若鮎、Yamatsuto など)・ぼたもち (あんか、きな粉) 200円、わらび餅350円、夏の土用餅 (2026年の口コミ)',
    neighborhood: '建仁寺と松原通の間の弓矢町。清水五条駅から徒歩6分',
    gf_detail: '要確認。ぼたもちやわらび餅などの餅とあんの菓子は合うかもしれないが、Mikasa は小さなどら焼き (焼いた生地の菓子) で、最中には皮がある。原材料の一覧は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ぼたもち、わらび餅、最中などのあんや餅の菓子は合うかもしれないが、Mikasa の生地もほかの菓子も原材料の一覧は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・建仁寺、路地の御用達の店] 建仁寺近くの静かな路地にある小さな和菓子店で、建仁寺と高台寺に納める。小さなどら焼きの Mikasa (180円)、注文してからあんを詰めるので皮がパリッとした最中 (180円)、季節の上生菓子は300円から。電話での予約がおすすめで、予約分が優先、上生菓子は前日までに。予約なしだと売り切れのことも多い。食べログでは改装中で電話予約を受付中とある。現金のみ。',
  });
}

save();
