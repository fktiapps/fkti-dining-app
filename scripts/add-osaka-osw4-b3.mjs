// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 3.
//   + 深夜焼肉 じる Shinya Yakiniku Jiru (late-night horumon yakiniku, the after-hours face of Pome; Tabelog Yakiniku 100 2026)
//   + 炭火焼鳥 木鶏 Mokkei (aged jidori yakitori over binchotan in a Higashi-Shinsaibashi basement; Yakitori WEST 100 2023)
//   + Craft Burger co. 北堀江店 (burgers by an Australian-Japanese couple since 2015; Hamburger 100 2019–2024)
//   + ステーキ＆ワイン オクソン Steak & Wine OXON (Kobe-beef teppanyaki since 1974, desserts and concerts in the basement salon; Steak 100 2021)
//   - skip シンサコッケダン 27149759: Japanese outpost of a Seoul gejang chain (original in Sinsa, a Seoul Apgujeong Rodeo
//     branch, and in Japan a Higashi-Umeda shop opened on 7 December per a press release, a Kyoto Shijo-Karasuma shop and
//     this Horie shop), so a fast-growing chain under the brief.
//   Chain check: Jiru is the late-night name of Pome (ぽめ) at the same premises (reviews), one shop, neither in data.
//   Mokkei: one shop (Tabelog, online shop only). Craft Burger co.: Kitahorie (1st, 2015) and Dojima (2nd, 2018; Kansai
//   Walker), not a chain. None is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27149759', 'シンサコッケダン: Japanese branch of a Seoul gejang chain (Sinsa original, Apgujeong Rodeo branch; Higashi-Umeda, Kyoto Shijo-Karasuma and Horie in Japan) — fast-growing chain');

// ================================================================ 深夜焼肉 じる
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126023/'; const R = TB + 'dtlrvwlst/';
  const H = day(['23:00', '04:00']);
  put({
    id: 'osaka_shinya_yakiniku_jiru_higashishinsaibashi', name: '深夜焼肉 じる (Shinya Yakiniku Jiru)', category: 'OMNI',
    lat: 34.671827, lng: 135.505497, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with tare or salt (several cuts are offered salted), and the menu also has ramen, Shin Ramyeon, cold noodles and a meat pasta; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku menu of beef cuts and horumon, with egg soup and meat-based ramen; kimchi, namul and rice are the only plant dishes mentioned.',
    hours_raw: 'Fri and Sat 23:00–04:00; closed Sunday to Thursday; hours may change (Tabelog). Reservations by Instagram DM or phone (Tabelog); fully booked at 23:00 in March 2026, with walk-ins sometimes possible later in the night (2025–2026 reviews). Cash only: no cards, e-money or QR (Tabelog; October 2026 review). Prices shown without tax, plus a ¥300 table charge (November 2026 review). Non-smoking (Tabelog). Gas roasters at the table (October 2026 review).',
    hours: { 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-1-25, 大優ビル 1F, on the premises of the yakiniku restaurant Pome (ぽめ) — a few minutes from Nagahoribashi Stn',
    cuisine: 'Late-night à la carte yakiniku built around horumon, from the kitchen of the hard-to-book Pome (2026 reviews) · horumon platter ¥1,480 (tetchan, akasen, mino, black mino with honeycomb tripe, small intestine, collagen; November 2026) · mino sashimi (ミノてっさ) ¥1,480 · harami ¥1,680 (November 2026) · black tongue, tsurami, kalbi, chuck tender, liver (2026) · October 2026: salted hanging tender with peppercorn ¥2,280, premium outside skirt from Kamiya ¥3,200, premium tongue ¥3,500, tsunami ¥1,280, horumon for three ¥4,440, the day\'s yukke-style ¥1,480 · spicy ramen loaded with horumon, a late-night favourite (2026) · Shin Ramyeon, cold noodles, bibimbap, shiso rice ¥500, rice ¥400, egg soup · kimchi · makgeolli, highballs, sake · prices without tax in November 2026',
    website: null, gmaps: gm('深夜焼肉 じる 東心斎橋'), menu_url: null,
    notes: '[Yakiniku · Higashi-Shinsaibashi, Friday and Saturday after 23:00] When the hard-to-book yakiniku restaurant Pome closes for the night, the curtain changes and the same room reopens as Jiru, an à la carte horumon bar for the small hours, open only on Friday and Saturday from 23:00 to 04:00. Diners rate the quality as Pome\'s, without the course: black tongue, tsurami that one diner ordered three times, an outside skirt so tender it cuts with chopsticks, a horumon platter of tetchan, akasen, mino and more, then a spicy ramen loaded with horumon that some come for alone. Expect ¥5,000–10,000 a head in 2026, cash only, plus a ¥300 table charge. Book by Instagram DM or phone for 23:00; walk-ins sometimes find a seat later. Tabelog Yakiniku 100 in 2026.',
    chef_bio: { chef_name: null, roles: ['Run by the team of the yakiniku restaurant Pome (ぽめ), unnamed in the sources read'], origin: null, background: 'Reviewers describe Jiru as Pome\'s late-night second brand at the same premises, with only the noren changing (October 2026), "carrying on the DNA" of Pome (February 2026), and a place that has been "dedicated to horumon for many years" (June 2026). A June 2023 diner calls it Pome\'s 2nd branch, open only at weekends, and saw Pome\'s owner cooking behind the counter. A February 2026 diner notes the signatures of well-known diners lining the walls. Tabelog Yakiniku 100 in 2026.', philosophy: null, specialty: 'Horumon platter; black tongue; horumon spicy ramen.',
      anecdotes: [
        { text: '"The ambiance is just like Pome\'s, with only the noren (curtain) changing to display \'Shinya Yakiniku Jiru.\'" — October 2026, a second visit after three and a half years.', source: R + 'B467569513/' },
        { text: '"I encountered such a stunning tsurami for the first time. … I ended up ordering it three times" — June 2026.', source: R + 'B530535254/' },
        { text: '"They open at 11 PM, and I made a reservation through Instagram beforehand, arriving right at 11 PM. The place was fully booked at that hour" — March 2026.', source: R + 'B524455375/' },
      ],
      japanese_sources_summary: '食べログ: 深夜焼肉 じる、焼肉、大阪市中央区東心斎橋2-1-25 大優ビル 1F、金・土23:00〜翌4:00、日〜木休み、予約は Instagram の DM か電話、カード・電子マネー・QR不可、禁煙、焼肉 百名店 2026。口コミ(2023年6月〜2026年11月): ぽめの深夜の二号店で、のれんだけが変わる、ホルモン中心のアラカルト、黒タン、tsurami、ハラミ、ホルモン盛 (てっちゃん、akasen、ミノ、小腸など) 1,480円、ミノてっさ1,480円、ハラミ1,680円、しそご飯500円、ええ白米400円、玉子スープ、ぽめ賄いのミートパスタ (2026年11月、税抜、テーブルチャージ300円)、ホルモンたっぷりの辛いラーメン、Shin Ramyeon、冷麺、ビビンバ、makgeolli、23時は予約で満席 (2026年3月)、ガスのロースター、現金のみ、女性スタッフの接客。',
      confidence: 'medium', sources: [TB, R + 'B467569513/', R + 'B515557372/', R + 'B520589174/', R + 'B521850982/', R + 'B521972697/', R + 'B522567500/', R + 'B524455375/', R + 'B528352178/', R + 'B528716589/', R + 'B529170096/', R + 'B529455849/', R + 'B530021618/', R + 'B530535254/', R + 'B535212960/', R + 'B538488480/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte yakiniku you grill yourself; book through Instagram DM or by phone (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-25 大優ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained) in the 2026 Yakiniku 100; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番25号 (go) 6m. Nearest records are next door at 東心斎橋2-1-27 (osaka_sushi_shizuku_shinsaibashi 15 m, osaka_sushi_kazue_higashishinsaibashi 18 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538488480/', R + 'B467569513/'],
    price_note: 'Prices from reviews: November 2026 (without tax, plus ¥300 table charge) and October 2026; no menu published.', last_checked: TODAY, items: [
      it('ホルモン盛', '', 'Horumon platter (tetchan, akasen, mino, small intestine, collagen…)', '¥1,480', 'Horumon', 'ask', 'no', 'November 2026 review, without tax.', 'horumon_platter'),
      it('ミノてっさ', '', 'Mino (beef tripe) sashimi', '¥1,480', 'Horumon', 'ask', 'no', 'November 2026 review, without tax.', 'mino_tessa'),
      it('ハラミ', '', 'Harami (outside skirt)', '¥1,680', 'Meat', 'ask', 'no', 'November 2026 review, without tax; ¥3,200 for the premium Kamiya cut in October 2026.', 'harami'),
      it('', '', 'Premium beef tongue', '¥3,500', 'Meat', 'ask', 'no', 'October 2026 review.', 'premium_tongue'),
      it('', '', 'Tsunami', '¥1,280', 'Meat', 'ask', 'no', 'October 2026 review.', 'tsunami'),
      it('', '', 'Spicy horumon ramen', '', 'Noodles', 'no', 'no', 'April and June 2026 reviews.', 'horumon_ramen'),
      it('しそご飯', '', 'Shiso rice', '¥500', 'Rice', 'ask', 'ask', 'November 2026 review, without tax.', 'shiso_rice'),
    ] }, {
    cuisine: '人気で予約の取りにくいぽめの厨房による、ホルモン中心の深夜のアラカルト焼肉 (2026年の口コミ)・ホルモン盛1,480円 (てっちゃん、akasen、ミノ、黒ミノ、小腸、コリコリなど、2026年11月)・ミノてっさ1,480円・ハラミ1,680円 (2026年11月)・黒タン、tsurami、カルビ、レバー (2026年)・2026年10月: 山椒の塩ハラミ2,280円、Kamiya の上ハラミ3,200円、上タン3,500円、Tsunami 1,280円、3人前のホルモン4,440円、その日の yukke 風1,480円・ホルモンたっぷりの辛いラーメンが深夜の人気 (2026年)・Shin Ramyeon、冷麺、ビビンバ、しそご飯500円、ええ白米400円、玉子スープ・キムチ・makgeolli、ハイボール、日本酒・2026年11月の値段は税抜',
    neighborhood: '東心斎橋2-1-25 大優ビル 1階、焼肉店ぽめと同じ店。長堀橋駅から徒歩数分',
    gf_detail: '要確認。グルテンの情報なし。肉はタレか塩 (塩で出す部位もいくつか) で、ラーメン、Shin Ramyeon、冷麺、ミートパスタもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモンの焼肉に、玉子スープや肉のラーメン。植物性のものはキムチ、ナムル、ご飯くらい。',
    notes: '[焼肉・東心斎橋、金曜と土曜の23時から] 予約の取りにくい焼肉店ぽめが閉まると、のれんが変わって同じ店が「じる」になる。深夜のためのアラカルトのホルモン焼肉で、営業は金曜と土曜の23時から朝4時まで。質はぽめと同じでコースなし、という声。黒タン、3回頼んだ人もいる tsurami、箸で切れるハラミ、てっちゃん、akasen、ミノなどのホルモン盛、そしてこれだけを目当てに来る人もいるホルモンたっぷりの辛いラーメン。2026年はひとり5,000〜10,000円ほど、現金のみで、テーブルチャージ300円。23時なら Instagram の DM か電話で予約を。遅い時間なら予約なしで入れることも。2026年の食べログ焼肉 百名店。',
  });
}

// ================================================================ 炭火焼鳥 木鶏
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099039/'; const R = TB + 'dtlrvwlst/';
  const SHOP = 'https://ecsp.tsuku2.jp/m/itemStore.php?scd=0000104167';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sumibi_yakitori_mokkei_higashishinsaibashi', name: '炭火焼鳥 木鶏 (Mokkei)', category: 'OMNI',
    lat: 34.673609, lng: 135.504671, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Skewers come with salt or tare, the tsukune with tare, kumquat, cheese or truffle, and the course ends with a TKG with soy sauce and a chicken soup; the mizutaki comes with house ponzu. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant of yakitori, chicken sashimi and mizutaki; homemade tofu, grilled vegetables and edamame appear only inside the courses.',
    hours_raw: 'Daily 17:00–23:00, last order food 22:00, drinks 22:30, last entry 21:30; closed over New Year and on some announced days (Tabelog). Reservation only; online bookings with an unreachable phone number may be refused; a course must be ordered for everyone booked; same-day cancellations cost ¥5,000 a person (Tabelog). Charge ¥800 a person, children included, built into course prices; private rooms for 2, 4 or 6 cost ¥3,300 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 26 seats at a long wooden counter, tables and private rooms; non-smoking; free Wi-Fi (Tabelog; August 2026 review). Opened 18 July 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-8-14, オーブナテビル B1F, down the stairs — 3 min from Nagahoribashi Stn exit 7, 5 min from Shinsaibashi Stn',
    cuisine: 'Yakitori of jidori (Miyazaki Jitokko, Niwa Jidori, Awa Oidori) aged whole at low temperature, butchered and skewered in house, and grilled over Kishu binchotan (Tabelog) · 7 Assorted Yakitori course ¥7,800, 16 items (Tabelog; ¥7,500 in August–September 2026): chicken-breast confit with white wood ear and sansho, vinegared offal with mizutaki-ponzu jelly, chicken ham with seasonal fruit (figs from Okayama in 2026), chicken consommé, homemade tofu of Hokkaido Toyomasari soybeans, seven skewers (breast, negima, wing, neck, tsukune, heart, liver), two vegetables, golden TKG under gold leaf, chicken white soup · yakitori short course ¥6,500, 12 items · golden chicken mizutaki course ¥6,800, broth simmered four hours, homemade ponzu (Tabelog) · tsukune with tare, kumquat, cheese or truffle shaved at the table (September 2026) · à la carte: chicken sashimi platter, liver sashimi, wasabi chicken breast, gizzard, quail egg, oyakodon, fried cartilage (2026) · sake and wine; take-out and an online shop',
    website: SHOP, gmaps: gm('炭火焼鳥 木鶏 東心斎橋'), menu_url: null,
    notes: '[Yakitori · Higashi-Shinsaibashi, a basement of aged jidori] Down a flight of stairs off a Higashi-Shinsaibashi street is a calm, modern room with a long wooden counter in front of the charcoal, tables and private rooms, and jazz playing (2026). Three jidori breeds are aged whole at low temperature, broken down and skewered in house, and grilled over Kishu binchotan by a chef with 20 years of experience (September 2026 reviews). Book the 7 Assorted Yakitori course: small plates of confit breast, vinegared offal and chicken ham with figs, a consommé, homemade tofu, seven skewers with a choice of tsukune (truffle shaved at the table, or kumquat yolk), then a golden TKG under gold leaf and a chicken white soup. Reservation only, ¥7,500–7,800 for the course plus drinks. Tabelog Yakitori WEST 100 in 2023.',
    chef_bio: { chef_name: null, roles: ['Grill chef with 20 years of experience, unnamed (September 2026 reviews)'], origin: null, background: 'Per the Tabelog shop text: "as much as possible by our own hands"; Miyazaki Jitokko, Niwa Jidori and Awa Oidori are aged one bird at a time at low temperature, broken down by hand and skewered, and grilled slowly over Kishu binchotan; mizutaki and sukiyaki are also served. Two September 2026 diners describe the skewers as grilled by a chef with 20 years of experience. An August 2026 group with a member who avoids raw food was given well-cooked alternatives. Opened 18 July 2017; Tabelog Yakitori WEST 100 in 2023.', philosophy: '"As much as possible by our own hands" (Tabelog shop text).', specialty: 'Aged jidori yakitori; golden TKG; golden chicken mizutaki.',
      anecdotes: [
        { text: '"One of our friends is not fond of raw dishes, but the restaurant kindly accommodated us by providing well-cooked options and alternative dishes." — August 2026, a fifth visit, the 7 Assorted Yakitori course for four.', source: R + 'B436970973/' },
        { text: '"For the tsukune, I could choose the seasoning; I opted for kin-kan (kumquat), while my friend chose truffle! They shaved the truffle right in front of us" — September 2026, the ¥7,500 course.', source: R + 'B534834833/' },
        { text: '"We descended the stairs to the underground restaurant... The interior resembles a sushi bar, with a long, comfortable wooden counter and several large tables" — August 2026.', source: R + 'B534600165/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼鳥 木鶏 (Mokkei)、焼き鳥・水炊き、大阪市中央区東心斎橋1-8-14 オーブナテビル B1F、長堀橋駅7番出口から徒歩3分、心斎橋駅5・6番出口から徒歩5分、毎日17:00〜23:00 (L.O. 料理22:00、ドリンク22:30、最終入店21:30)、年末年始休み、完全予約制、当日キャンセルは1名5,000円、チャージ料金1名 (子どもも) 税込800円でコースに含む、個室 (2・4・6名、室料3,300円)、カード可、電子マネー・QR不可、26席、禁煙、2017年7月18日オープン、Miyazaki Jitokko、Niwa Jidori、Awa Oidori を1羽ずつ低温で熟成し、手でさばいて串打ち、Kishu binchotan でじっくり焼く、できる限り自分たちの手で、焼き鳥ショートコース6,500円 (12品)、焼き鳥7種盛りコース7,800円 (16品)、黄金鶏水炊きコース6,800円 (4時間炊いたスープ、自家製ポン酢)、黄金の TKG、オンラインショップ、焼き鳥 WEST 百名店 2023。口コミ(2026年6月〜11月): 7種盛りコース7,500円、鶏むね肉のコンフィ、酢モツとポン酢のジュレ、鶏ハムといちじく、鶏のコンソメ、Hokkaido の Toyomasari の自家製豆腐、つくねはタレ、金柑、チーズ、トリュフから選べる、金箔の TKG、鶏白湯、鶏刺し盛り合わせ、レバー刺し、20年の経験の職人が焼く、地下へ階段を下りる、木の長いカウンター、ジャズ、生が苦手な人には火を通した料理に替えてくれた。',
      confidence: 'high', sources: [TB, SHOP, R + 'B436970973/', R + 'B441291878/', R + 'B463191266/', R + 'B490570817/', R + 'B530239093/', R + 'B534600165/', R + 'B534791894/', R + 'B534834833/', R + 'B534927278/', R + 'B534935971/', R + 'B534966880/', R + 'B535129578/', R + 'B535727701/', R + 'B537911934/', R + 'B538478768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked online in advance; each course dish is a fixed sequence, with one tsukune choice (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['August 2026 review: a diner who avoids raw food was given well-cooked options and alternative dishes.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-8-14 オーブナテビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目8番14号 (go) 2m. Same building as 小料理 たく庵 (osaka_koryori_takuan_higashishinsaibashi, address_ja "東心斎橋1-8-14 オーブナテ 5F"), pinned 11 m away, so the two stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534834833/', R + 'B490570817/'],
    price_note: 'Course prices from the Tabelog listing (tax and the ¥800 charge included); the 7 Assorted course was ¥7,500 in August–September 2026 reviews; à la carte prices not seen.', last_checked: TODAY, items: [
      it('', '', '7 Assorted Yakitori course (16 items)', '¥7,800', 'Course', 'ask', 'no', 'Tabelog listing; ¥7,500 in August–September 2026 reviews.', 'yakitori_7_course'),
      it('', '', 'Yakitori short course (12 items)', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'yakitori_short_course'),
      it('', '', 'Golden chicken mizutaki course (5 items, house ponzu)', '¥6,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'mizutaki_course'),
      it('', '', 'Tsukune with tare, kumquat, cheese or truffle', '', 'Skewers', 'ask', 'no', 'September 2026 reviews.', 'tsukune'),
      it('', '', 'Golden TKG (egg on rice under gold leaf)', '', 'Rice', 'ask', 'no', 'Tabelog; 2026 reviews.', 'golden_tkg'),
      it('', '', 'Chicken sashimi platter', '', 'À la carte', 'ask', 'no', 'June and October 2026 reviews.', 'chicken_sashimi'),
    ] }, {
    cuisine: 'Miyazaki Jitokko、Niwa Jidori、Awa Oidori を丸ごと低温で熟成し、店でさばいて串打ちし、Kishu binchotan で焼く焼き鳥 (食べログ)・焼き鳥7種盛りコース7,800円、16品 (食べログ、2026年8〜9月の口コミでは7,500円): 白きくらげと山椒の鶏むね肉のコンフィ、水炊きポン酢のジュレの酢モツ、季節の果物の鶏ハム (2026年は Okayama のいちじく)、鶏のコンソメ、Hokkaido の Toyomasari の大豆の自家製豆腐、串7本 (むね、ねぎま、手羽、ネック、つくね、ハツ、レバー)、野菜2種、金箔の黄金 TKG、鶏白湯・焼き鳥ショートコース6,500円、12品・黄金鶏水炊きコース6,800円、4時間炊いたスープと自家製ポン酢 (食べログ)・つくねはタレ、金柑、チーズ、目の前で削るトリュフから選べる (2026年9月)・アラカルト: 鶏刺し盛り合わせ、レバー刺し、ささみのわさび、sunazuri、うずらの卵、親子丼、軟骨の唐揚げ (2026年)・日本酒とワイン、テイクアウトとオンラインショップ',
    neighborhood: '東心斎橋1-8-14 オーブナテビル 地下1階、階段を下りる。長堀橋駅7番出口から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。串は塩かタレ、つくねはタレ、金柑、チーズ、トリュフから選び、コースの締めは醤油の TKG と鶏のスープ。水炊きは自家製ポン酢で。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。焼き鳥、鶏刺し、水炊きの鶏料理の店。自家製豆腐、焼き野菜、枝豆はコースの中の一品だけ。',
    notes: '[焼き鳥・東心斎橋、熟成地鶏の地下の店] 東心斎橋の通りから階段を下りると、炭火の前に木の長いカウンター、テーブル、個室のある落ち着いたモダンな店で、ジャズが流れる (2026年)。3種の地鶏を丸ごと低温で熟成し、店でさばいて串を打ち、20年の経験の職人が Kishu binchotan で焼く (2026年9月の口コミ)。予約するなら焼き鳥7種盛りコースを。むね肉のコンフィ、酢モツ、いちじくと鶏ハムの小皿、コンソメ、自家製豆腐、串7本 (つくねは目の前で削るトリュフか、金柑の黄身から選ぶ)、最後は金箔の黄金 TKG と鶏白湯。完全予約制で、コースは7,500〜7,800円に飲み物。2023年の食べログ焼き鳥 WEST 百名店。',
  });
}

// ================================================================ Craft Burger co. 北堀江店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27088635/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://craftburger.jp/';
  const MENU = 'https://cdn.shopify.com/s/files/1/0659/6735/8167/files/Menu_5.0_H_Eng_Outline_Final.png';
  const MENU_JA = 'https://cdn.shopify.com/s/files/1/0659/6735/8167/files/Menu_5.0_H_Jap_Outline_Final.png';
  const KW = 'https://www.walkerplus.com/article/152031/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'osaka_craft_burger_co_kitahorie', name: 'Craft Burger co. 北堀江店 (Craft Burger co. Kitahorie)', category: 'OMNI',
    lat: 34.674154, lng: 135.496313, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information, but every burger can be served on a salad plate instead of the bun (official menu). Fries, onion rings in beer batter, chicken bites and sauces are not described for gluten, and nothing is labelled gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu marks one burger vegetarian: the tofu steak burger of seasoned deep-fried tofu with a choice of ketchup, teriyaki, BBQ, chipotle or peanut butter (official menu). Its bun, special sauce and frying oil are not described, so ask whether it can be made vegan.',
    hours_raw: 'Daily 11:00–22:30, last order 22:00; closed over New Year (Tabelog; the official menu gives the same hours). Reservations from 16:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards, iD, QUICPay and PayPay (Tabelog). 23 seats: a counter of 7, tables and a terrace counter; smoking on the terrace only; dogs on the terrace; take-out at the same prices as eating in (Tabelog; official menu). English menu (official site). Opened 11 November 2015 (Tabelog; Kansai Walker).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-6-12, a small corner shop with a terrace — about 30 seconds from Yotsubashi Stn',
    cuisine: 'Burgers with a patty of 100% domestic beef ground in the shop every day and shaped by hand, no filler (official site); sizes petit, regular, double; each with a free side of fries, onion rings, salad or soup (prices from the official menu, tax included) · Craft Burger ¥890 / ¥1,550 / ¥2,250 · Craft Cheese Burger ¥990 / ¥1,650 / ¥2,450 · Craft Burger Deluxe with bacon, avocado and NZ cheddar ¥1,190 / ¥1,990 / ¥2,690 (¥1,990 in August and October 2026) · Western BBQ ¥1,190 / ¥1,890 · Onion Smash ¥1,590 / ¥2,390 / triple ¥3,190 · Gorgonzola, Swiss Mushroom ¥1,090 / ¥1,790 · Peanut Butter ¥1,790 · Pulled Pork ¥1,290 · Grilled Salmon ¥1,290 / ¥2,490 · Spicy Chicken and Teriyaki Chicken ¥790 / ¥1,290 · Tofu Steak Burger (vegetarian) ¥790 / ¥1,290 · craft fries, truffle fries, onion rings in beer batter · salads · lunch set with a domestic-beef burger ¥1,390 (August 2026) · shakes · draft beer including Minoh Beer, cocktails',
    website: SITE, gmaps: gm('Craft Burger co. 北堀江'), menu_url: MENU,
    notes: '[Burgers · Kita-Horie by Yotsubashi Stn] A small burger shop with a terrace, half a minute from Yotsubashi Station, opened in 2015 by an Australian owner and a Japanese co-owner, a married couple. The patty is 100% domestic beef, ground in the shop every day and shaped by hand, the sauces are made in house, and each burger tastes different by design. Get the Craft Burger Deluxe with bacon, avocado and cheddar (¥1,990 in 2026), or a smaller petit size; every burger comes with fries, onion rings, salad or soup, and can be served on a salad instead of the bun. There is a tofu steak burger marked vegetarian. A lunch set was ¥1,390 in August 2026. Drink a Minoh Beer on the terrace. Tabelog Hamburger 100 in 2019, 2021, 2022 and 2024.',
    chef_bio: { chef_name: 'パット アゴスティネリ', roles: ['Owner (Kansai Walker 2018)', 'Co-owner: 美希, married to the owner (Kansai Walker 2018)'], origin: 'Australia (owner; Kansai Walker 2018)', background: 'Per Kansai Walker (2018): the owner パット アゴスティネリ came to Japan from Australia at 30 to change course in life and taught English for seven years; the co-owner 美希 had worked part-time in cafés, McDonald\'s and びっくりドンキー before a staff job at a civil-engineering firm. The two met at a friend\'s bar in Higashi-Shinsaibashi and married. After a plan to co-run a relative\'s friend\'s burger shop fell through, the couple opened Craft Burger co. on 11 November 2015, aiming to change the image of burgers in Japan with an original, healthier menu; the "co." was a hope of becoming a company, realised as a godo kaisha in January 2018. A second shop opened in Dojima on 18 June 2018. A TV feature and English comments on Google Maps brought overseas visitors (Kansai Walker). Tabelog Hamburger 100 in 2019, 2021, 2022 and 2024.', philosophy: '"Our burgers are not like an ordinary burger shop\'s: buns, sauces and meat are all handmade, so we are the same as a restaurant" (official site, translated).', specialty: 'Craft Burger Deluxe; hand-shaped 100% domestic beef patties.',
      anecdotes: [
        { text: '"I ordered the 100% domestic beef burger lunch set for JPY 1,390, with fries on the side and BBQ sauce. … It came with whole grain mustard, which might be Tasmanian mustard." — August 2026.', source: R + 'B534726701/' },
        { text: '"They offer a mini size for those with smaller appetites, which is a nice touch." — October 2026, Craft Burger Deluxe for JPY 1,990.', source: R + 'B536707944/' },
        { text: '"I felt the vibe of Amerikamura with some foreign customers around, which was nice!" — August 2026, Craft Burger Deluxe for JPY 1,990.', source: R + 'B534775789/' },
      ],
      japanese_sources_summary: '公式サイト: Craft Burger co、2015年より創業、無添加100%国産牛、北海道産のこだわり部位を毎日お店でミンチにして手でパティを作る、つなぎなし、バンズ、ソース、肉、全て手作りでレストランと同じ、チーズは世界各地から直輸入、日本語と英語のメニュー: 堀江店 大阪市西区北堀江1-6-12、毎日11:00〜22:30、サイズはプチ、レギュラー、ダブル、無料サイド (ポテト、オニオンリング、サラダ、スープ)、バンズの代わりにサラダプレートに変更できる、クラフトバーガー890円・1,550円・2,250円、クラフトバーガーデラックス1,190円・1,990円・2,690円、豆腐ステーキバーガー (ベジタリアン) 790円・1,290円、税込、店内とテイクアウトは同じ値段。関西ウォーカー (2018年): オーストラリア人のオーナー パット アゴスティネリさんと共同オーナーで妻の美希さん、北堀江店は2015年11月11日オープン、堂島店は2018年6月18日、合同会社に。食べログ (店舗会員): 23席 (カウンター7)、テラスで喫煙可、ペットはテラスのみ、16時から予約可、カード・電子マネー・PayPay 可、箕面ビールなど、ハンバーガー 百名店 2019・2021・2022・2024。口コミ(2026年5月〜10月): デラックス1,990円、ランチセット1,390円、プチサイズ、海外の客も。',
      confidence: 'high', sources: [TB, SITE, MENU, MENU_JA, KW, R + 'B527678418/', R + 'B528238853/', R + 'B534159834/', R + 'B534726701/', R + 'B534775789/', R + 'B535563000/', R + 'B536142242/', R + 'B536707944/'] },
    cultural_comfort: { level: 'english', note: 'English menu on the official site; the owner is Australian (Kansai Walker 2018); some overseas customers (August 2026).' },
    safety: { ...SAFETY0, positives: ['Official menu: every burger can be served on a salad plate instead of the bun.', 'Official menu: a tofu steak burger marked vegetarian.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-6-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (menu updated 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目6番12号 (go) 6m. No other record in data within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU, MENU_JA, R + 'B534775789/', R + 'B536707944/'],
    price_note: 'Prices from the official grand menu (tax included, eat-in and take-out the same; image file of 2026); the Deluxe at ¥1,990 matches August and October 2026 reviews.', last_checked: TODAY, items: [
      it('クラフトバーガー', '', 'Craft Burger (petit / regular / double)', '¥1,550', 'Burgers', 'ask', 'no', 'Official menu: petit ¥890, double ¥2,250; can be served on a salad instead of the bun.', 'craft_burger'),
      it('クラフトチーズバーガー', '', 'Craft Cheese Burger', '¥1,650', 'Burgers', 'ask', 'no', 'Official menu: petit ¥990, double ¥2,450.', 'craft_cheese_burger'),
      it('クラフトバーガーデラックス', '', 'Craft Burger Deluxe (bacon, avocado, NZ cheddar)', '¥1,990', 'Burgers', 'ask', 'no', 'Official menu: petit ¥1,190, double ¥2,690; 2026 reviews.', 'craft_burger_deluxe'),
      it('オニオンスマッシュバーガー', '', 'Onion Smash Burger', '¥1,590', 'Burgers', 'ask', 'no', 'Official menu: double ¥2,390, triple ¥3,190.', 'onion_smash_burger'),
      it('豆腐ステーキバーガー', '', 'Tofu Steak Burger (vegetarian; choice of flavour)', '¥1,290', 'Burgers', 'ask', 'ask', 'Official menu: petit ¥790; marked vegetarian.', 'tofu_steak_burger'),
      it('', '', 'Grilled Salmon Burger', '¥2,490', 'Burgers', 'ask', 'no', 'Official menu: petit ¥1,290.', 'grilled_salmon_burger'),
      it('オニオンリング', '', 'Onion rings in beer batter', '¥450', 'Sides', 'no', 'ask', 'Official menu: small ¥450, large ¥800.', 'onion_rings'),
    ] }, {
    cuisine: '毎日店でミンチにして手で作る、つなぎなしの国産牛100%のパティのハンバーガー (公式サイト)。サイズはプチ、レギュラー、ダブル。ポテト、オニオンリング、サラダ、スープから無料のサイドを選べる (値段は公式メニュー、税込)・クラフトバーガー890円・1,550円・2,250円・クラフトチーズバーガー990円・1,650円・2,450円・ベーコン、アボカド、チェダーのクラフトバーガーデラックス1,190円・1,990円・2,690円 (2026年8月と10月は1,990円)・ウエスタンBBQバーガー1,190円・1,890円・オニオンスマッシュバーガー1,590円・2,390円・トリプル3,190円・ゴルゴンゾーラバーガー、スイスチーズきのこバーガー1,090円・1,790円・ピーナッツバターバーガー1,790円・プルドポークバーガー1,290円・サーモングリルバーガー1,290円・2,490円・スパイシーチキンバーガーと照り焼きチキンバーガー790円・1,290円・豆腐ステーキバーガー (ベジタリアン) 790円・1,290円・クラフトポテトフライ、トリュフポテト、ビールで作った衣のオニオンリング・サラダ・国産牛のバーガーのランチセット1,390円 (2026年8月)・シェイク・箕面ビールなどの生ビール、カクテル',
    neighborhood: '北堀江1-6-12、テラスのある小さな角の店。四ツ橋駅から30秒ほど',
    gf_detail: '要確認。グルテンの情報はないが、どのバーガーもバンズの代わりにサラダプレートにできる (公式メニュー)。ポテト、ビールの衣のオニオンリング、チキン、ソースについては説明がなく、グルテンフリーの表示もない。',
    vegan_detail: '要確認。メニューでベジタリアンと書かれているのは、味付けして揚げた豆腐の豆腐ステーキバーガーひとつで、味はケチャップ、照り焼き、バーベキュー、チポトレ、ピーナッツバターから選ぶ (公式メニュー)。バンズ、スペシャルソース、揚げ油の説明はないので、ヴィーガンにできるか聞いてみて。',
    notes: '[ハンバーガー・北堀江、四ツ橋駅のそば] 四ツ橋駅から30秒ほどの、テラスのある小さなハンバーガー店。2015年にオーストラリア人のオーナーと日本人の共同オーナーの夫婦が開いた。パティは国産牛100%で、毎日店でミンチにして手で作り、ソースも手作り、どのバーガーも味が違うように考えられている。ベーコン、アボカド、チェダーのクラフトバーガーデラックス (2026年は1,990円) か、小さめのプチサイズを。どのバーガーにもポテト、オニオンリング、サラダ、スープのどれかがつき、バンズの代わりにサラダにもできる。ベジタリアンの豆腐ステーキバーガーもある。2026年8月のランチセットは1,390円。テラスで箕面ビールを。食べログのハンバーガー 百名店に2019年、2021年、2022年、2024年に選ばれている。',
  });
}

// ================================================================ ステーキ＆ワイン オクソン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27003799/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://oxon.jp/';
  const L = ['11:30', '14:00'], D = ['17:00', '23:00'];
  const H = day(L, D);
  put({
    id: 'osaka_steak_wine_oxon_nishishinsaibashi', name: 'ステーキ＆ワイン オクソン (Steak & Wine OXON)', category: 'OMNI',
    lat: 34.669933, lng: 135.499787, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The steak can be eaten with salt, wasabi, ponzu, garlic soy sauce or the house sauce (2025–2026 reviews); courses also bring a quiche, a consommé or potage, garlic rice and cakes in the salon. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppanyaki courses of Kobe and black wagyu beef and live seafood, with beef consommé and dairy desserts.',
    hours_raw: 'Mon–Sat and the day before a holiday 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order 22:00; Tabelog says 21:30); closed Sunday and holidays, but dinner is served every day in December (official site). Reservations by phone, 11:30–21:00 except Sundays and holidays; cancellation fee 50% the day before, 100% on the day (official site). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (official site; Tabelog). 32 seats: a counter for up to 13 around the teppan, a table for up to 7 and a private room for 10–15; smoking only in the private room; children welcome; sommelier (official site; Tabelog). Founded 1974 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-3-9, オクソンビル 1F, west of Midosuji north of Namba — 4 min from Kintetsu Osaka-Namba Stn, 6 min from Namba Stn',
    cuisine: 'Teppanyaki steak house: A5 Kobe beef from black-haired heifers, seasonal live seafood and vegetables grilled at the counter (official site; Tabelog) · dinner courses (Tabelog): Kusaemon course with two live-seafood dishes and 130 g premium black wagyu ¥24,000, Special Kobe Beef Strip Loin course 130 g ¥29,600, Chateaubriand course of A5 heifer fillet 130 g ¥23,000 · a course runs sea-bream carpaccio, beef consommé or potage, seasonal salad, steak (fillet, sirloin or half and half, with salt, wasabi, ponzu or sauce) and garlic rice, then a lemon sorbet (2025–2026 reviews) · lunch sets with wagyu steak; garlic rice instead of white rice for a supplement (2025–2026 reviews) · after the meal, homemade cakes (panna cotta, tiramisu, baked cheesecake in July 2026) and siphon coffee in the basement salon · a long wine list including Romanée-Conti; the house\'s own balsamic vinegar (official site)',
    website: SITE, gmaps: gm('ステーキ＆ワイン オクソン 西心斎橋'), menu_url: SITE + 'menu/',
    notes: '[Teppanyaki · Nishi-Shinsaibashi, a 1974 steak house with a salon below] Behind a heavy door north of Namba is a steak house from 1974 furnished with Art Nouveau antiques, stained glass and lamps, where chefs grill A5 Kobe heifer beef and live seafood on the teppan in front of you, with a paper apron at your place. After the garlic rice you are led downstairs to a salon of antiques for homemade cakes and siphon coffee, and on some evenings a classical concert there (October 2025, February and July 2026). The owner, a woman, looks after the room in person and chats with guests (2026 reviews). Dinner courses cost ¥23,000–29,600 (Tabelog), while lunch averages ¥4,000–4,999 (Tabelog). Book by phone; closed Sundays. Tabelog Steak 100 in 2021.',
    chef_bio: { chef_name: null, roles: ['Owner, a woman, unnamed in the sources read (2026 reviews)', 'Teppanyaki chefs, unnamed'], origin: null, background: 'Per the official site: a steak house founded in 1974 in Osaka Minami, with seasonal starters, soups and vegetables made by experienced chefs, Art Nouveau antiques, a basement salon for desserts and digestifs, its own balsamic vinegar and a rooftop garden; past events include a special dinner by the executive chef of the Imperial Hotel in Vienna and wine evenings with a former president of the Japan Sommelier Association, and the menu carried contributions by the writers 藤本義一 and 桐島洋子. The house holds OXON concerts (オクソン音楽会). Reviews from February, March and May 2026 describe the female owner looking after guests in person; a May 2026 diner repeats a saying attributed to Shigeo Nagashima, "the mountain is Fuji, and the meat is Oxon". The 2F of the building houses the sister restaurant なにわ懐石しゃぶしゃぶ 久壷庵 (official site). Tabelog Steak 100 in 2021.', philosophy: 'Seasonal ingredients brought out by the skill of experienced chefs, in pursuit of the real taste (official site, translated).', specialty: 'A5 Kobe heifer steak on the teppan; desserts in the basement salon.',
      anecdotes: [
        { text: '"For dessert, we moved to a room downstairs where we were celebrated with live music." — July 2026, a celebratory dinner.', source: R + 'B535923992/' },
        { text: '"The lovely owner also took the time to chat with us, and before we knew it, time flew by." — March 2026, a return after many years.', source: R + 'B524652037/' },
        { text: '"Table Set. You will be given a paper apron when seated." — July 2026, an early birthday dinner; fillet and sirloin shared half and half.', source: R + 'B531228432/' },
      ],
      japanese_sources_summary: '公式サイト: ステーキ＆ワイン オクソン、大阪ミナミの1974年創業のステーキ専門店、豊富なワインリスト、季節の前菜やスープ、野菜、デザートは階下サロンで手作りスイーツと食後酒、アールヌーボーのアンティーク、黒毛雌神戸牛A5ステーキ、カウンター13名まで、テーブル7名まで、個室10〜15名、ロマネ・コンティなど希少なワイン、サイフォンのコーヒー、オクソン音楽会、自家醸造バルサミコ酢、屋上庭園、オープン当時のメニュー、ウィーン・インペリアルホテル総料理長を招いた特別ディナー、日本ソムリエ協会会長を務めた人を招いたワイン会、メニュー表には藤本義一さんと桐島洋子さんの寄稿、大阪市中央区西心斎橋2-3-9、大阪難波駅から徒歩4分、なんば駅から徒歩6分、月〜土・祝前11:30〜14:00 (L.O. 13:30)、17:00〜23:00 (L.O. 22:00)、日曜・祝日休み (12月のディナーは無休)、電話予約、前日キャンセル50%、当日100%、カード可 (銀聯も)、2階は なにわ懐石しゃぶしゃぶ 久壷庵。食べログ (店舗会員): サービス料10%、32席、個室のみ喫煙可、ステーキ 百名店 2021、コース 2万3千〜2万9,600円。口コミ(2025年2月〜2026年7月): 鯛のカルパッチョ、コンソメかポタージュ、サラダ、ヒレかサーロイン、ガーリックライス、紙のエプロン、地下のサロンでケーキとサイフォンのコーヒー、地下での音楽会、女性のオーナーが自ら接客。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about/', SITE + 'menu/', SITE + 'access/', R + 'B502343132/', R + 'B511760302/', R + 'B515493780/', R + 'B521191208/', R + 'B523498391/', R + 'B524652037/', R + 'B528520879/', R + 'B529934209/', R + 'B531228432/', R + 'B535923992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set teppanyaki courses with the chef cooking in front of you; reservations by phone (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-3-9 オクソンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目3番9号 (go) 11m. Nearest records are osaka_wa_bistro_ikki_ichiyu (西心斎橋2-3-22) 22 m and osaka_old_cairo_cafe (西心斎橋2-3-21) 37 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B502343132/', R + 'B531228432/'],
    price_note: 'Dinner course prices from the Tabelog listing (tax included; plus 10% service); the official menu is published as images not read; lunch prices not seen in 2026.', last_checked: TODAY, items: [
      it('', '', 'Kusaemon dinner course: two live-seafood teppan dishes and 130 g premium black wagyu', '¥24,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'kusaemon_course'),
      it('', '', 'Special Kobe beef strip loin course (130 g)', '¥29,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'kobe_striploin_course'),
      it('', '', 'Chateaubriand course (A5 heifer fillet, 130 g)', '¥23,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'chateaubriand_course'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'ask', 'Courses; a supplement instead of white rice at lunch (2025–2026 reviews).', 'garlic_rice'),
      it('', '', 'Homemade cakes and siphon coffee in the basement salon', '', 'Dessert', 'ask', 'no', '2025–2026 reviews; official site.', 'salon_dessert'),
    ] }, {
    cuisine: '鉄板焼きのステーキハウス: 黒毛雌の神戸牛A5、季節の活魚介と野菜をカウンターで焼く (公式サイト、食べログ)・ディナーコース (食べログ): 活魚介の鉄板焼き2品と特選黒毛和牛130gの Kusaemon コース24,000円、特選神戸牛ロース130gのコース29,600円、A5の雌のヒレ130gのシャトーブリアンコース23,000円・コースは鯛のカルパッチョ、牛のコンソメかポタージュ、季節のサラダ、ステーキ (ヒレ、サーロイン、半分ずつも、塩、わさび、ポン酢、ソースで)、ガーリックライス、レモンのシャーベット (2025〜2026年の口コミ)・ランチは和牛ステーキのセット、白ご飯をガーリックライスに追加料金で (2025〜2026年の口コミ)・食後は階下のサロンで手作りのケーキ (2026年7月はパンナコッタ、ティラミス、ベイクドチーズケーキ) とサイフォンのコーヒー・ロマネ・コンティもあるワインリスト、自家醸造のバルサミコ酢 (公式サイト)',
    neighborhood: '西心斎橋2-3-9 オクソンビル 1階、なんばの北、御堂筋の西。大阪難波駅から徒歩4分、なんば駅から徒歩6分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ステーキは塩、わさび、ポン酢、ガーリック醤油、店のソースで (2025〜2026年の口コミ)。コースにはキッシュ、コンソメかポタージュ、ガーリックライス、サロンのケーキもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。神戸牛と黒毛和牛、活魚介の鉄板焼きコースで、牛のコンソメや乳製品のデザートもある。',
    notes: '[鉄板焼き・西心斎橋、地下にサロンのある1974年のステーキハウス] なんばの北、重い扉の奥にある1974年創業のステーキハウス。アールヌーボーのアンティークやステンドグラス、照明に囲まれ、シェフが目の前の鉄板で神戸牛A5の雌牛や活魚介を焼いてくれ、席には紙のエプロン。ガーリックライスのあとは階下のアンティークのサロンへ案内され、手作りのケーキとサイフォンのコーヒー。夜によってはそこでクラシックの音楽会もある (2025年10月、2026年2月と7月)。女性のオーナーが自ら店に立ち、客と話をしてくれる (2026年の口コミ)。ディナーのコースは23,000〜29,600円 (食べログ)、ランチは平均4,000〜4,999円 (食べログ)。電話で予約を。日曜休み。2021年の食べログのステーキ 百名店。',
  });
}

save();
