// Osaka sweep (2-mile circle around Dotonbori) — worker osw2, batch 21 (lane: Tabelog id mod 4 = 1).
//   By id first, on the coordinator's instruction:
//   + 寿し炉端 喜多郎寿し 道具屋筋横丁店 (robata format of 喜多郎寿し: sushi from ¥330 and robatayaki at an irori counter)
//     — skipped as a chain in osw2-20; re-taken as a sister concept. kitarou.jp lists the plain 喜多郎寿し (心斎橋, ウラなんば,
//     お初天神) separately from 「炉端喜多郎寿し」 (兎我野町店, 道具屋筋横丁店), plus other brands; two robata shops, none in data.
//   Then core leftovers for id mod 4 = 1 (queue.mjs osaka next core):
//   + 鮨 たけうち Sushi Takeuchi (sushi omakase a minute from Namba Stn; lunch courses, private rooms)
//   + しばいたろか!! Shibaitaroka (takoyaki and okonomiyaki stand at the entrance to Dotonbori; pay at the door, eat upstairs)
//   + ダイニングカフェバー フラット Dining Cafe Bar Flat (Shinsaibashi café bar since 1996: golden omurice, A5 wagyu bowls; owner 尾崎英司)
//   Skipped (core, lane order):
//   - 熟成肉専門店 ヨプの王豚塩焼 道頓堀店 27131713 — chain: 株式会社YOPU's press release (24 October 2023) lists 新大久保本店, GEMS新橋店,
//     赤坂店, 足立テラス店, 福岡天神店, 大阪心斎橋店 and 大阪道頓堀店 (atpress.ne.jp/news/373050, read 2026-11-02); 7 shops.
//   - ロジック 裏なんば店 27086609 — same-concept branch of a brand in data: osaka_logic_namba ("ロジック 難波店").
//   Chain check of the kept core shops:
//   - Sushi Takeuchi: one shop (Tabelog).
//   - Shibaitaroka: one shop (Tabelog; reviews).
//   - Flat: one shop since 1996 (official site; Tabelog).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27131713', 'Chain: ヨプの王豚塩焼 has seven shops in Tokyo, Fukuoka and Osaka (株式会社YOPU press release, atpress.ne.jp/news/373050).');
skip('27086609', 'Chain in data: ロジック 裏なんば店 is a branch of ロジック, in data as osaka_logic_namba.');

// ================================================================ 寿し炉端 喜多郎寿し 道具屋筋横丁店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27140201/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://kitarou.jp/';
  const W = day(['17:00', '01:00']); const E = day(['16:00', '24:00']);
  put({
    id: 'osaka_robata_kitaro_sushi_douguyasuji', name: '寿し炉端 喜多郎寿し 道具屋筋横丁店 (Sushi Robata Kitaro Sushi Douguyasuji yokochou ten)', category: 'OMNI',
    lat: 34.66352, lng: 135.50345, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi and sashimi sit beside fried dishes (octopus kara-age, fried tuna collar, fried shrimp with tartar sauce) and simmered fish (Tabelog menu); soy sauce and simmering liquid are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and robatayaki izakaya of fish and meat.',
    hours_raw: 'Mon–Fri 17:00–01:00 (last order 24:00); Sat, Sun and holidays 16:00–24:00 (last order 23:00); irregular closing days from May 2026 (Tabelog). Reservations taken; seat requests by phone; a confirmation call after 15 minutes late (Tabelog); a 2-hour limit on a busy Sunday (August 2026 review). A table charge applies (Tabelog). Cards (incl. UnionPay), PayPay, Alipay, WeChat Pay; no e-money. Counter on the first floor facing the robata hearth; more seats upstairs (reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 14-18, Doguyasuji Yokocho — 5 min from Namba Stns',
    cuisine: 'Sushi from ¥330 a plate and robatayaki "originating from Tohoku", grilled at an irori-style hearth in front of the counter (Tabelog): Senshu shirasu, sashimi platters, sea-bream yukhoe, octopus kara-age, extra-large shrimp with house tartar, grilled fatty sardine, simmered nodoguro or kinki, simmered red-snapper head, fried bluefin collar, open-flame Unzen ham (Tabelog menu, November 2025; reviews) · selected sake and beer, including Sapporo Lager',
    website: SITE, gmaps: gm('喜多郎寿し 道具屋筋横丁店'), menu_url: M,
    notes: "[Izakaya · Doguyasuji Yokocho, sushi plus robata at the hearth] The robata version of the Osaka sushi name 喜多郎寿し, opened in February 2024 in the Doguyasuji Yokocho alley five minutes from Namba: sushi from ¥330 a plate alongside fish, shrimp and Unzen ham grilled over an open hearth in front of the first-floor counter. Diners in 2026 recommend booking the counter to watch the grill, and praise the grilled kinki, the sea-bream yukhoe and the friendly staff; one Sunday visit had a strict two-hour limit.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed; a shop of the 喜多郎寿し group (kitarou.jp)'], origin: null, background: 'Per kitarou.jp, the group runs the plain sushi shops 喜多郎寿し (心斎橋, ウラなんば, お初天神), the robata shops 炉端喜多郎寿し (兎我野町, 道具屋筋横丁), 角打ち喜多郎 and other brands in Osaka, Okinawa and Thailand. Per Tabelog, this shop pairs ¥330 sushi with robatayaki of Tohoku origin in a warm wooden room; opened 14 February 2024.', philosophy: null, specialty: 'Robata grill and ¥330 sushi.',
      anecdotes: [
        { text: '"The counter has an impressive robata grill, and watching the fish and ham being cooked makes you want to try everything on the menu—it\'s a dangerous seat!" — October 2026, fourth visit.', source: R + 'B481441884/' },
        { text: '"I highly recommend the counter seats over the second floor." — August 2026.', source: R + 'B535221999/' },
        { text: '"The grilled Kinki fish was amazing!" — May 2026.', source: R + 'B528659713/' },
      ],
      japanese_sources_summary: '喜多郎寿し公式サイト (kitarou.jp): 店舗は喜多郎寿し (心斎橋店、ウラなんば店、お初天神店)、炉端喜多郎寿し (兎我野町店、道具屋筋横丁店)、角打ち喜多郎 なんば店、その他 (道頓堀酒処喜多蔵、斬新和菜出雲、那覇久茂地店など)、お品書きは寿し・炉端焼き・逸品・コース。食べログ (英語版): 寿し炉端 喜多郎寿し 道具屋筋横丁店、難波千日前14-18 道具屋筋横丁、なんば駅から徒歩5分、2024年2月14日オープン、平日17:00〜翌1:00、土日祝16:00〜24:00、2026年5月から不定休、チャージあり、330円からの寿しと東北発祥の炉端焼き。メニュー (2025年11月): 泉州のしらす、刺身盛り、鯛のユッケ、たこの唐揚げ、特大海老の自家製タルタル、とろいわしの焼き、のどぐろやきんきの煮付け、鯛のかぶと煮、本まぐろのかまの唐揚げ、雲仙ハム。口コミ (2026年5月〜10月): 1階のカウンターで炉端焼きを見られる (2階よりカウンター)、きんきの焼き、鯛の塩ユッケ、かつおのたたき、サッポロラガー赤星、スタッフが親切、日曜は2時間制。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B481441884/', R + 'B509974532/', R + 'B528659713/', R + 'B530684719/', R + 'B532982816/', R + 'B535221999/', R + 'B535228485/', R + 'B536110007/', R + 'B536474186/', R + 'B538326491/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-18 道具屋筋横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Group site listing the shop and Tabelog listing with a May 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番18号 (go) 9m. Same lot (道具屋筋横丁) as 尊塾 (osaka_sonjuku_namba) and 食堂ペスカ (osaka_shokudo_pesca_namba), which sit on the GSI/Tabelog point, so this pin is set about 8–11 m from them to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated November 2025, tax included; a table charge applies; sushi from ¥330. Diners report ¥2,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Sea-bream yukhoe', '¥1,500', 'Specialties', 'ask', 'no', '', 'tai_yukhoe'),
      it('', '', 'Extra-large shrimp with house tartar', '¥1,650', 'Grilled and simmered', 'no', 'no', '', 'ebi_tartar'),
      it('', '', 'Unzen ham over the open flame', '¥770', 'Robata', 'ask', 'no', 'Nagasaki specialty.', 'unzen_ham'),
      it('', '', 'Sashimi platter for one', '¥1,800', 'Specialties', 'ask', 'no', '', 'sashimi_moriawase'),
    ] }, {
    cuisine: '330円からの寿しと東北発祥の炉端焼き。カウンター前の囲炉裏のような炉で焼く (食べログ): 泉州のしらす、刺身盛り、鯛のユッケ、たこの唐揚げ、特大海老の自家製タルタル、とろいわしの焼き、のどぐろやきんきの煮付け、鯛のかぶと煮、本まぐろのかまの唐揚げ、直火の雲仙ハム (食べログのメニュー、2025年11月、口コミ)・厳選の日本酒とビール、サッポロラガーも',
    neighborhood: '難波千日前14-18、道具屋筋横丁。各線なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。寿しと刺身のほか、揚げ物 (たこの唐揚げ、まぐろのかまの唐揚げ、海老フライのタルタル) や煮付けもある (食べログのメニュー)。しょうゆや煮汁の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚と肉の寿しと炉端焼きの居酒屋。',
    notes: '[居酒屋・道具屋筋横丁、寿しと炉端] 大阪の寿しの店、喜多郎寿しの炉端版で、2024年2月になんばから5分の道具屋筋横丁に開いた。1皿330円からの寿しと、1階カウンター前の炉で焼く魚、海老、雲仙ハム。2026年の客は焼き場が見えるカウンターの予約を勧め、きんきの焼き、鯛のユッケ、親切なスタッフを褒める。日曜は厳しい2時間制だったという声も。',
  });
}

// ================================================================ 鮨 たけうち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27129613/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_sushi_takeuchi_namba', name: '鮨 たけうち (Sushi Takeuchi)', category: 'OMNI',
    lat: 34.66782, lng: 135.50093, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A sushi omakase with small dishes; a December 2025 diner says the staff accommodated allergies on a same-day booking (review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and Japanese-cuisine counter; lunch also offers Kobe beef and eel bowls (Tabelog).',
    hours_raw: 'Daily 11:30–15:00 and 17:00–23:00 (Tabelog). Reservations taken. Cards (incl. UnionPay), transport IC and other e-money, PayPay, Rakuten Pay, WeChat Pay. 22 seats at a counter, tables and a semi-private room for 4; private hire for up to 20 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-7-6, ニュー豊楽ビル 1F, behind Namba HIPS — 1 min from Namba Stns',
    cuisine: 'Sushi and creative Japanese dishes: an omakase course in the evening; at lunch, sushi lunch courses (about ¥5,000–7,000 in 2026), Kobe beef and eel rice bowls (Tabelog; reviews) · nigiri such as chu-toro, red snapper, grilled angel shrimp, ikura rice bowl, house-made karasumi (reviews)',
    website: TB, gmaps: gm('鮨 たけうち 難波'), menu_url: TB,
    notes: "[Sushi · Namba, a calm counter a minute from the station] A sushi counter with private rooms in a building behind Namba HIPS, opened in July 2022, a quiet surprise on a busy street a minute from Namba Station. Lunch courses of about eight nigiri with small dishes cost around ¥5,000–7,000 in 2026; evenings are omakase. Diners praise the careful nigiri, the chu-toro and the attentive chef, who handled one diner's allergies on a same-day booking; one July diner found it classic sushi with nothing unusual, another notes lunch prices have risen.",
    chef_bio: { chef_name: null, roles: ['Chef unnamed (Tabelog; reviews)'], origin: null, background: 'Per Tabelog, top-quality sushi by skilled chefs with seasonal ingredients, omakase in the evening and sushi lunch courses, Kobe beef and unagi bowls at lunch; opened 15 July 2022. Reviews note many visitors from abroad given the location.', philosophy: null, specialty: 'Sushi lunch courses; omakase.',
      anecdotes: [
        { text: '"The interior exudes a sense of luxury, yet it’s not overly formal, allowing for a relaxed dining experience." — December 2025, course.', source: R + 'B519054609/' },
        { text: '"I can\'t believe there was a sushi restaurant on this street!" — March 2026, special lunch.', source: R + 'B524613930/' },
        { text: '"There weren\'t any particularly unique toppings or interesting arrangements, but it was classic sushi." — July 2026.', source: R + 'B532432515/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 鮨 たけうち、難波1-7-6 ニュー豊楽ビル 1F、各線なんば駅から徒歩1分、2022年7月15日オープン、毎日11:30〜15:00・17:00〜23:00、22席 (カウンター、テーブル、4名の半個室)、20名まで貸切、旬の素材の寿司と創作の日本料理、夜はおまかせ、昼は寿司ランチのコース、神戸牛やうなぎの丼。口コミ (2025年12月〜2026年7月): なんばHIPSの裏、ランチのコース約5,000〜7,000円、中とろ、真鯛、炙りのぼたん海老、いくら丼、自家製からすみ、当日の予約でもアレルギーに対応、外国からの客も多い、値上がりしたという声、定番の寿司で特に変わったネタはないという声。',
      confidence: 'medium', sources: [TB, R + 'B518986083/', R + 'B519054609/', R + 'B519413396/', R + 'B519495120/', R + 'B523374298/', R + 'B524613930/', R + 'B524776726/', R + 'B526007616/', R + 'B530866747/', R + 'B532432515/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A December 2025 diner saw many visitors from abroad. No English menu or English-speaking staff found in the sources.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['A December 2025 diner says allergies were accommodated on a same-day booking (review).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-6 ニュー豊楽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番6号 (go) 7m. Same building as 炉端 一心 (osaka_robata_isshin_namba, "…ニュー豊楽ビル 2F"), which sits 2 m from the Tabelog point, so this pin is set about 12 m from it to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B530866747/', R + 'B532432515/'],
    price_note: 'No Tabelog menu; lunch courses about ¥5,000–7,000 (2026 reviews). Diners report ¥5,000–19,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase lunch course (about 8 nigiri and small dishes)', '¥5,000', 'Lunch', 'ask', 'no', 'June 2026.', 'omakase_lunch'),
      it('', '', 'Lunch course', '¥7,000', 'Lunch', 'ask', 'no', 'About ¥7,000, July 2026.', 'lunch_course'),
    ] }, {
    cuisine: '寿司と創作の日本料理: 夜はおまかせ、昼は寿司ランチのコース (2026年で約5,000〜7,000円)、神戸牛やうなぎの丼 (食べログ、口コミ)・中とろ、真鯛、炙りのぼたん海老、いくら丼、自家製からすみなど (口コミ)',
    neighborhood: '難波1-7-6 ニュー豊楽ビル 1F、なんばHIPSの裏。各線なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。寿司のおまかせと小皿。2025年12月の客は当日の予約でもアレルギーに対応してもらったと書く (口コミ)。',
    vegan_detail: 'ヴィーガンではありません。寿司と日本料理の店で、ランチには神戸牛やうなぎの丼も (食べログ)。',
    notes: '[寿司・難波、駅1分の静かなカウンター] なんばHIPSの裏のビルにある個室もある寿司店で、2022年7月オープン。なんば駅から1分のにぎやかな通りの静かな驚き。ランチはにぎり約8貫と小皿のコースで2026年に約5,000〜7,000円、夜はおまかせ。客は丁寧なにぎり、中とろ、気配りのある大将を褒め、当日予約でもアレルギーに対応してもらった客も。7月の客は定番の寿司で変わったネタはないと書き、ランチが値上がりしたという声も。',
  });
}

// ================================================================ しばいたろか!!
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27138241/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_shibaitaroka_dotonbori', name: 'しばいたろか!! (Shibaitaroka!!)', category: 'OMNI',
    lat: 34.668259, lng: 135.503113, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki and okonomiyaki of wheat batter with a dashi-flavoured batter (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: takoyaki with octopus and a dashi batter; okonomiyaki with pork or mixed fillings (reviews).',
    hours_raw: 'Opening hours are not listed on Tabelog; diners report visits from lunch to after 23:00 (2025–2026 reviews). Phone 11:00–20:00 on weekdays; reservations taken (Tabelog). No cards; e-money accepted, no QR (Tabelog). 30 seats: a first-floor counter and 23 table seats on the second floor; non-smoking (Tabelog). Pay at the entrance and pick up food downstairs; no water served (2025 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-5, at the entrance to Dotonbori near the Glico sign — 10 min from JR and Nankai Namba',
    cuisine: 'Takoyaki and okonomiyaki: takoyaki crisp outside and gooey inside with a dashi-flavoured batter, eight for about ¥700–900 with salt or two sauces, ¥400 toppings; okonomiyaki such as pork and mix (¥1,600) (2025–2026 reviews) · highballs and soft drinks',
    website: TB, gmaps: gm('しばいたろか 道頓堀'), menu_url: TB,
    notes: "[Okonomiyaki · Dotonbori, takoyaki at the gateway to Dotonbori] A loud-named takoyaki and okonomiyaki stand at the entrance to Dotonbori, opened in September 2023 and featured on TV, where you pay at the door and eat at the counter or upstairs. Diners in 2025–2026, many of whom are visitors, call the takoyaki crisp, gooey and dashi-rich, for some the best in Dotonbori, and like the sauce and the reasonable prices. No water is served, so order a drink. Hours are not published on Tabelog.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, opened 1 September 2023 with 30 seats over two floors. A March 2026 diner says it has been featured on TV several times.', philosophy: null, specialty: 'Takoyaki with a dashi batter.',
      anecdotes: [
        { text: '"During my trip to Osaka, I tried several famous places in Umeda and Dotonbori, but personally, this was the most delicious." — March 2025.', source: R + 'B504078754/' },
        { text: '"You pay at the entrance and then go down to get your food even from the second floor." — October 2025.', source: R + 'B515270663/' },
        { text: '"You can really taste the dashi flavor in the batter, and the seasoning is perfectly balanced—not too strong." — June 2026.', source: R + 'B530380272/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): しばいたろか!!、道頓堀1-7-5、JR難波駅・南海なんば駅から徒歩10分、2023年9月1日オープン、営業時間の記載なし、平日11〜20時は電話可、予約可、カード不可・電子マネー可、30席 (1階カウンター、2階テーブル23)、禁煙。口コミ (2025年2月〜2026年9月): 外はカリッと中はとろとろのたこ焼き、出汁の効いた生地、塩のたこ焼き8個700円、2種のソースで8個900円、トッピング400円、ミックスのお好み焼き1,600円、入口で支払い2階からも下へ取りに行く、水は出ない、テレビで何度も紹介、道頓堀の入口、観光客が多い。',
      confidence: 'low', sources: [TB, R + 'B504078754/', R + 'B511285695/', R + 'B514515941/', R + 'B515270663/', R + 'B519874617/', R + 'B525148061/', R + 'B525378393/', R + 'B526928175/', R + 'B530380272/', R + 'B536449400/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with tourists (2025 reviews); pay at the entrance. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番5号 (go) 2m. Nearest record (osaka_junkissa_american_dotonbori, "…道頓堀1-7-4") is about 12 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B514515941/', R + 'B515270663/'],
    price_note: 'No Tabelog menu; prices from 2025 reviews. Diners report under ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki, 8, with salt', '¥700', 'Takoyaki', 'no', 'no', 'September 2025.', 'takoyaki_shio'),
      it('', '', 'Takoyaki, 8, with two sauces', '¥900', 'Takoyaki', 'no', 'no', 'October 2025.', 'takoyaki'),
      it('', '', 'Mixed okonomiyaki', '¥1,600', 'Okonomiyaki', 'no', 'no', 'October 2025.', 'okonomiyaki_mix'),
    ] }, {
    cuisine: 'たこ焼きとお好み焼き: 外はカリッと中はとろとろ、出汁の効いた生地のたこ焼き8個約700〜900円 (塩か2種のソース)、トッピング400円、ブタやミックス (1,600円) のお好み焼き (2025〜2026年の口コミ)・ハイボール、ソフトドリンク',
    neighborhood: '道頓堀1-7-5、グリコの看板近くの道頓堀の入口。JR難波駅・南海なんば駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。小麦の生地のたこ焼きとお好み焼きで、生地には出汁 (口コミ)。',
    vegan_detail: 'ヴィーガンではありません。たこ入りで出汁の生地のたこ焼き、ブタやミックスのお好み焼き (口コミ)。',
    notes: '[お好み焼き・道頓堀、道頓堀の入口のたこ焼き] 道頓堀の入口にある威勢のいい名前のたこ焼きとお好み焼きの店で、2023年9月オープン、テレビでも紹介。入口で支払い、カウンターか2階で食べる。2025〜2026年の客は観光客も多く、たこ焼きはカリッととろとろで出汁が濃く、道頓堀で一番という声も。ソースと手頃な値段も好評。水は出ないので飲み物を頼んで。食べログに営業時間の記載はない。',
  });
}

// ================================================================ ダイニングカフェバー フラット
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27020129/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://www.diningcafebar-flatt.com/';
  const W = day(['12:00', '23:30']); const F = day(['12:00', '24:00']); const S = day(['12:00', '23:00']);
  put({
    id: 'osaka_dining_cafe_bar_flat_shinsaibashi', name: 'ダイニングカフェバー フラット (Dining Cafe Bar Flat)', category: 'MOM_AND_POP',
    lat: 34.673908, lng: 135.502396, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Omurice, curries, rice bowls and steaks sit beside pasta, pork cutlet and fried shrimp (Tabelog menu; reviews); the demi-glace and curry are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg, wagyu, pork and seafood dishes; no vegan options are described.',
    hours_raw: 'Mon–Thu 12:00–23:30; Fri, Sat and the day before a holiday 12:00–24:00; Sun and holidays 12:00–23:00; irregular closing days; may close early when ingredients run out (Tabelog). Reservations taken, seat-only bookings for one welcome; a 10% late fee after 15 minutes and 20% after 30 minutes; no long stays without ordering (Tabelog). Cards (incl. UnionPay), PayPay, d Barai, Alipay, WeChat Pay; no e-money. Pets allowed, with food for them (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-20, 心斎橋EOビル 2F, just off Shinsaibashi-suji — 1 min from Shinsaibashi Stn exits 5 and 6',
    cuisine: 'Café bar with a meat-bar and omurice menu: the house "golden omurice" with red eggs ("over 6.6 million served"; single, double or triple egg), omurice curry with Kobe-beef tendon and hamburg, A5 black-wagyu strip-loin yakiniku or sukiyaki bowls, A5 roast-beef bowl with ikura, eel and dashi-egg bowl, a "30-year aged" Shinsaibashi curry, Gyu-hitsumabushi, fresh basil pesto pasta (Tabelog menu, September 2025; reviews) · wines, cocktails, desserts; all-you-can-drink courses',
    website: SITE, gmaps: gm('ダイニングカフェバー フラット 心斎橋'), menu_url: M,
    notes: "[Yoshoku · Shinsaibashi, golden omurice since 1996] A green-filled second-floor café bar just off Shinsaibashi-suji, open since 1996 and run by owner 尾崎英司, who has appeared on Yomiuri TV and NHK. The house is famous for its fluffy omurice of rich red eggs and offers A5 wagyu bowls, curries and pesto pasta, with sofas for long evenings and pets welcome. The site greets international visitors in English and a 2025 diner saw English and Chinese menus. Diners in 2023–2025 like the generous dishes and comfortable sofas; one found it quite pricey. The latest Tabelog reviews date from 2025.",
    chef_bio: { chef_name: '尾崎英司', roles: ['Owner (店主) (official site)'], origin: null, background: 'Per the official site, Dining Cafe Bar Flat opened in 1996; owner 尾崎英司 has appeared on Yomiuri TV\'s 「ご馳走コンシェルジュ」 and NHK\'s 「ええやんこの人」; the shop welcomes pets and international travellers. A September 2023 reviewer describes the omurice curry with premium red eggs as "cherished for 28 years".', philosophy: null, specialty: 'Golden omurice with red eggs.',
      anecdotes: [
        { text: '"Experience the exquisite Omurice Curry with premium red eggs, cherished for 28 years" — September 2023.', source: R + 'B471408092/' },
        { text: '"Given that the menu is available in both English and Chinese, I wonder if they are targeting foreign tourists." — September 2025.', source: R + 'B513203657/' },
        { text: '"The spacious table seating was fantastic, and the sofas were incredibly comfortable!" — October 2025.', source: R + 'B515422792/' },
      ],
      japanese_sources_summary: '公式サイト: 心斎橋の「ダイニングカフェバー フラット」、ディナーデートに人気、海外の旅行者向けの英語の案内 (心斎橋で外国人に人気の店の一つ)、店主尾崎英司が読売テレビ「ご馳走コンシェルジュ」とNHK「ええやんこの人」に出演、ペット同伴可でペットのご飯も用意、1996年オープン。食べログ (英語版): ダイニングカフェバー フラット、東心斎橋1-18-20 心斎橋EOビル 2F、心斎橋駅5・6番出口から徒歩1分、月〜木12:00〜23:30、金土・祝前日12:00〜24:00、日祝12:00〜23:00、不定休、遅刻は15分で10%・30分で20%の料金。メニュー (2025年9月): 黄金のオムライス (660万食以上)、神戸牛すじとハンバーグのオムカレー、A5黒毛和牛の焼肉丼・すき焼き丼、A5ローストビーフといくらの丼、うなぎとだし巻きの丼、30年熟成の心斎橋カレー。口コミ (2023年6月〜2025年10月): 牛ひつまぶし、バジルのジェノベーゼ、赤玉子のオムライスカレー (28年)、緑の多い内装、ソファ、食べ放題コース、英語と中国語のメニュー、値段は高めという声。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B467679948/', R + 'B468792447/', R + 'B470837139/', R + 'B471408092/', R + 'B471946922/', R + 'B482070655/', R + 'B483778422/', R + 'B502713260/', R + 'B513203657/', R + 'B515422792/'] },
    cultural_comfort: { level: 'english', note: 'The official site welcomes international travellers in English, and a September 2025 diner saw menus in English and Chinese. No evidence on English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-20 心斎橋EOビル 2F',
    existence: { status: 'probable', checked: TODAY, note: 'Official site live (read 2026-11-02) and Tabelog listing with a September 2025 menu; the latest Tabelog reviews date from October 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番20号 (go) 6m. Nearest record 鳥料理 とり匠 (osaka_tori_ryori_torisho_higashishinsaibashi, "…東心斎橋1-18-20 アソルティ心斎橋 2F", a different building on the same lot) is about 9 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B467679948/'],
    price_note: 'Tabelog menu last updated September 2025; prices mostly not listed. Gyu-hitsumabushi ¥4,980 (June 2023); courses about ¥6,600 with all-you-can-drink (2023). Diners report ¥2,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Golden omurice (single, double or triple egg)', '', 'Specialty', 'ask', 'no', 'Over 6.6 million served (menu).', 'omurice'),
      it('', '', 'Omurice curry with Kobe-beef tendon and hamburg', '', 'Specialty', 'ask', 'no', '', 'omurice_curry'),
      it('', '', 'A5 strip-loin gyu-hitsumabushi', '¥4,980', 'Bowls', 'ask', 'no', 'June 2023 review.', 'gyu_hitsumabushi'),
    ] }, {
    cuisine: '肉バルとオムライスのカフェバー: 赤玉子の「黄金のオムライス」(660万食以上、卵1個・2個・3個)、神戸牛すじとハンバーグのオムカレー、A5黒毛和牛サーロインの焼肉丼やすき焼き丼、いくらのせA5ローストビーフ丼、うなぎとだし巻きの丼、「30年熟成」の心斎橋カレー、牛ひつまぶし、生バジルのジェノベーゼ (食べログのメニュー、2025年9月、口コミ)・ワイン、カクテル、デザート、飲み放題コース',
    neighborhood: '東心斎橋1-18-20 心斎橋EOビル 2F、心斎橋筋から一本入る。心斎橋駅5・6番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。オムライス、カレー、丼、ステーキのほか、パスタ、豚カツ、海老フライもある (食べログのメニュー、口コミ)。デミグラスやカレーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。卵、和牛、豚、魚介の料理で、ヴィーガンの選択肢の説明はない。',
    notes: '[洋食・心斎橋、1996年からの黄金のオムライス] 心斎橋筋から一本入ったビル2階の緑の多いカフェバーで、1996年から。店主の尾崎英司は読売テレビやNHKにも出演。赤玉子のふわふわのオムライスで知られ、A5和牛の丼、カレー、ジェノベーゼもあり、ソファで夜をゆっくり過ごせ、ペットも歓迎。公式サイトは英語で海外の旅行者を迎え、2025年の客は英語と中国語のメニューを見た。2023〜2025年の客はボリュームのある料理と心地よいソファを褒め、高めと感じた客も。食べログの最新の口コミは2025年。',
  });
}

save();
