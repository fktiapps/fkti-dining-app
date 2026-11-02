// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 10 (lane: Tabelog id mod 4 = 1).
//   + パンケーキカフェ mog 難波店 Pancake Cafe Mog Namba (pancake café a minute from Namba Stn, since 2013; marshmallow pancakes)
//   + 焼肉ホルモン 坂上 裏なんば Yakiniku Horumon Sakagami Ura Namba (offal grilled by staff on a sloped iron plate; yakisoba to finish; open to 4 AM)
//   + 肉タレ屋 難波バル店 Niku Tare Ya Namba BAL (Kagoshima black-wagyu roast-beef bowls and meat bar, beef from the house's own ranch)
//   + Oh.lala... (French brasserie of W Osaka on Midosuji; steak frites, all-you-can-eat bread and desserts)
//   Skipped (lane order):
//   - グリル ぶどう亭 なんばウォーク店 27128021 — chain: 株式会社ロン lists about ten shops (グリルロン, ぶどう亭, 欧風軒, らんぷ亭,
//     豚々亭, 大阪トンテキ ×3; ron-corp.com, read 2026-11-02).
//   - チャイニーズ･ビストロ 蘭亭 本町店 27067273 — branch of a chain in data: osaka_rantei_lucua_barchika, notes "A branch of Rantei,
//     an Osaka group of seven Chinese restaurants".
//   - 祝い鳥 淀屋橋本店 27122021 — chain: 株式会社寿幸 runs 14 shops incl. 鉄板神社 and 祝い鳥 (shoku-bank.jp job page, read 2026-11-02);
//     鉄板神社 is in data (osaka_teppan_jinja_dotonbori).
//   - ムーラン 27017005 — chain: run by 株式会社バルニバービ (© line of moulin715.com), a restaurant-and-hotel company with an IR
//     section and a list of operated shops (balnibarbi.com, read 2026-11-02).
//   - BELLA BOCCA なんば店 27134237 — branch of a chain in data: osaka_bella_bocca_hankyu_umeda (website bellabocca-hankyu.kimiyu.co.jp;
//     the Namba listing links bellabocca-nu.kimiyu.co.jp and calls itself "Italian Cuisine bar proud of its own farm").
//   - PESCA なんば店 27072217 — branch of a chain in data: osaka_pesca_shinsaibashi, cuisine "'Paitza', a pizza on crisp, flaky pastry";
//     the Namba listing's signature is the same "Paitza".
//   - MONDAY VIBES COFFEE 27146377 — chain: one of ten shops of the 十忠八九 group (株式会社オーゼットカンパニー; lit.link/10chu89, read
//     2026-11-02); みなみの十忠八九 and 浪速炉ばた 東洋小噺 are in data (osaka_minami_no_jucchu_hakku_namba, osaka_naniwa_robata_toyo_kobayashi_namba).
//   Chain check of the four kept:
//   - mog: 株式会社J.C.Factory gives 3 sites and shows two, mog 難波店 and a product-development room; the third is behind a "more" link (careermap.jp, read 2026-11-02); a September 2026 diner
//     mentions "another location in the past". Kept.
//   - Sakagami: no official site found. Search results name a 梅田本店 (not opened, so not relied on). Kept; flagged.
//   - Niku Tare Ya: at least two shops (Namba BAL; 泉佐野店 on hotpepper.jp, opened 2026-11-02); none in data. Kept as a small group; flagged.
//   - Oh.lala...: the brasserie of one hotel (W Osaka; official site).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27128021', 'Chain: グリル ぶどう亭 なんばウォーク店 is one of about ten shops of 株式会社ロン (ron-corp.com).');
skip('27067273', 'Chain in data: 蘭亭 本町店 is a branch of Rantei, already in data as osaka_rantei_lucua_barchika (a seven-shop group).');
skip('27122021', 'Chain: 祝い鳥 is run by 株式会社寿幸 (14 shops, incl. 鉄板神社, in data as osaka_teppan_jinja_dotonbori).');
skip('27017005', 'Chain: ムーラン is run by 株式会社バルニバービ, a multi-shop restaurant-and-hotel company (moulin715.com; balnibarbi.com).');
skip('27134237', 'Chain in data: BELLA BOCCA なんば店 is a branch of the kimiyu.co.jp Bella Bocca, in data as osaka_bella_bocca_hankyu_umeda.');
skip('27072217', 'Chain in data: PESCA なんば店 shares the "Paitza" signature of ペスカ 心斎橋店, in data as osaka_pesca_shinsaibashi.');
skip('27146377', 'Chain: MONDAY VIBES COFFEE is one of ten 十忠八九 group shops (lit.link/10chu89); two group shops are in data.');

// ================================================================ パンケーキカフェ mog 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27070725/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mog.foodre.jp/'; const CO = 'https://www.careermap.jp/corporations/23151';
  const W = day(['09:30', '20:00']); const E = day(['09:30', '21:00']);
  put({
    id: 'osaka_pancake_cafe_mog_namba', name: 'パンケーキカフェ mog 難波店 (Pancake Cafe Mog Namba ten)', category: 'OMNI',
    lat: 34.665871, lng: 135.501038, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pancake specialist; the menu is built on pancakes, plus croque-monsieur and an açaí bowl set (official site). Nothing is stated about the flour or the açaí bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pancakes come with marshmallows, ice cream, whipped cream, cheese, egg, bacon or Spam (official site; reviews); no vegan options are described.',
    hours_raw: 'Mon–Fri 9:30–20:00 (last order 19:20); Sat, Sun and holidays 9:30–21:00 (last order 20:20); open year-round; closed 31 December–2 January (Tabelog). The official booking page gives daily 9:30–21:00 (last order 20:20, pancakes 19:45). Reservations: weekdays 9:30–19:30, weekends and holidays only from 18:00 (Tabelog; official site). Cards (VISA, Master, JCB, AMEX), transport IC and other e-money, PayPay, d Barai, au PAY. 34 counter and table seats; non-smoking; wheelchair accessible; free Wi-Fi; kids menu (Tabelog). Orders by QR code (September 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-7-9, 南華会館ビル 1F — 1 min from Namba Stn (Midosuji Line) exit 1',
    cuisine: 'Pancake café: the house marshmallow pancake, toasted-marshmallow-and-chocolate pancake, seasonal fruit pancakes (fig and nut in autumn 2026), savoury pancakes, pancake brunch set, croque-monsieur set, açaí bowl set; tea, lattes (official site; Tabelog) · from 2026 reviews: salted caramel and nut, marshmallow and banana, peach, tiramisu, plain pancakes with whipped cream and honey, an omelette pancake with Spam or bacon, a cheese-loaded savoury pancake with salad; summer mango drink',
    website: SITE, gmaps: gm('パンケーキカフェ mog 難波店'), menu_url: SITE,
    notes: "[Café · Namba, pancakes a minute from the station] A pancake café opened in February 2013 on a side street a minute from Namba Station, run by 株式会社J.C.Factory. The house signature is a pancake topped with toasted marshmallows; seasonal fruit pancakes and savoury ones (an omelette pancake, a cheese-loaded one with salad) fill out the menu, and morning sets start at opening. A diner back in June 2026 after about ten years found some of the same dishes still on the menu. Diners in 2026 differ on texture, from fluffy to dense, thin and buttery; a September 2026 diner saw pancakes thrown away at the griddle and found seating a little disorganised. Tabelog lists an English and Korean menu.",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed; the shop of 株式会社J.C.Factory (careermap.jp)'], origin: null, background: 'Per careermap.jp, 株式会社J.C.Factory (representative director 松永 哲至, read マツナガ テツジ; founded 20 December 2010; head office Uehommachi, Tennoji) runs cafés and confectionery retail with 26 staff; the page gives three sites and shows two, mog 難波店 and a product-development room. Tabelog gives the Namba opening as 20 February 2013. A September 2026 diner remembers eating the pancakes "at another location in the past".', philosophy: '"Surely in everyone\'s heart, too, there is a pancake memory" (official site).', specialty: 'Toasted-marshmallow pancakes.',
      anecdotes: [
        { text: '"I noticed that the menu still has some items from my last visit, including the one with marshmallows." — June 2026, back after about ten years.', source: R + 'B531028474/' },
        { text: '"The fluffy pancakes were topped with lightly toasted marshmallows, which had a slightly crispy exterior and a gooey interior that was absolutely delicious." — July 2026.', source: R + 'B532740620/' },
        { text: '"Some were even discarded, and there was a large trash bin filled with pancakes." — September 2026, first visit.', source: R + 'B535515853/' },
        { text: '"The cafe is located just off the main street and can be a bit hard to find." — August 2026.', source: R + 'B534613094/' },
      ],
      japanese_sources_summary: '公式予約ページ (mog.foodre.jp): なんば駅からほど近いパンケーキ専門店、自慢のマシュマロパンケーキ、季節の果物の限定パンケーキ、ランチ・休憩・デート・ディナーに、季節ごとに装飾が変わる店内、期間限定の無花果とナッツのパンケーキ1,760円、パンケーキのブランチセット1,750円、アサイーボウルセット1,800円、クロックムッシュセット1,700円、焼きマシュマロとチョコレートのパンケーキ1,500円、毎日9:30〜21:00 (L.O.20:20、パンケーキは19:45)、予約はWEBのみ (当日は電話可)、土日祝は18時以降のみ座席予約、無休、34席、全席禁煙。careermap.jp: 株式会社J.C.Factory (パンケーキカフェモグ)、代表取締役 松永 哲至 (マツナガ テツジ)、2010年12月20日設立、カフェ・菓子小売、事業所数3 (表示はmog 難波店と商品開発室)。食べログ (店舗会員、英語版): 2013年2月20日オープン、平日9:30〜20:00、土日祝9:30〜21:00、年中無休、多言語メニュー (英語・韓国語)、キッズメニュー、車椅子可。口コミ (2026年6月〜10月): マシュマロ、塩キャラメルとナッツ、桃、ティラミス、オムレツのパンケーキ、QRコードで注文、ふわふわという声も、どっしり・薄いという声も、焼いたパンケーキが捨てられていたという声も (9月)。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B531028474/', R + 'B532740620/', R + 'B533262038/', R + 'B533277109/', R + 'B534613094/', R + 'B535515853/', R + 'B536606785/', R + 'B536795584/', R + 'B536845107/', R + 'B537157416/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a multilingual menu (English, Korean) with photos and a digital menu; orders by QR code (September 2026). No evidence on English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-7-9 南華会館ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official booking page with autumn 2026 limited menu and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目7番9号 (go) 8m. Nearest record 北極 (osaka_hokkyoku_namba_honten, "…難波3-8-22") is about 36 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Official booking page, tax included (read November 2026). Diners report ¥1,000–2,999 a head.', last_checked: TODAY, items: [
      it('焼きマシュマロとチョコレートのパンケーキ', '', 'Toasted marshmallow and chocolate pancakes', '¥1,500', 'Pancakes', 'no', 'no', 'Recommended.', 'marshmallow_pancake'),
      it('無花果とナッツのパンケーキ', '', 'Fig and nut pancakes', '¥1,760', 'Pancakes', 'no', 'no', 'Limited time, autumn 2026.', 'fig_pancake'),
      it('パンケーキのブランチセット', '', 'Pancake brunch set', '¥1,750', 'Sets', 'no', 'no', 'Recommended.', 'pancake_brunch_set'),
      it('クロックムッシュセット', '', 'Croque-monsieur set', '¥1,700', 'Sets', 'no', 'no', 'Recommended.', 'croque_monsieur'),
      it('アサイーボウルセット', '', 'Açaí bowl set', '¥1,800', 'Sets', 'ask', 'ask', 'Recommended; contents not described.', 'acai_bowl'),
    ] }, {
    cuisine: 'パンケーキカフェ: 自慢のマシュマロパンケーキ、焼きマシュマロとチョコレートのパンケーキ、季節の果物のパンケーキ (2026年秋は無花果とナッツ)、甘くないパンケーキ、パンケーキのブランチセット、クロックムッシュセット、アサイーボウルセット、紅茶やラテ (公式サイト、食べログ)・2026年の口コミから: 塩キャラメルとナッツ、マシュマロとバナナ、桃、ティラミス、ホイップとはちみつのプレーン、スパムかベーコンのオムレツパンケーキ、チーズたっぷりの甘くないパンケーキとサラダ、夏のマンゴードリンク',
    neighborhood: '難波3-7-9 南華会館ビル 1F。なんば駅 (御堂筋線) 1番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。パンケーキ専門店で、ほかにクロックムッシュやアサイーボウルのセット (公式サイト)。粉やアサイーボウルの説明はない。',
    vegan_detail: 'ヴィーガンではありません。パンケーキにはマシュマロ、アイス、ホイップ、チーズ、卵、ベーコン、スパムがのる (公式サイト、口コミ)。ヴィーガンの選択肢の説明はない。',
    notes: '[カフェ・難波、駅1分のパンケーキ] 2013年2月、なんば駅から1分の脇道に開いたパンケーキカフェで、運営は株式会社J.C.Factory。看板は焼いたマシュマロをのせたパンケーキ。季節の果物のパンケーキや、オムレツのパンケーキ、チーズたっぷりのサラダ付きなど甘くないパンケーキもあり、朝の開店からモーニングセットも。2026年6月に約10年ぶりに来た客は、前と同じメニューが残っていたと書く。2026年の口コミでは食感の感じ方が分かれ、ふわふわという声も、どっしり、薄くてバターの風味という声も。2026年9月の客は、焼いたパンケーキが捨てられるのを見て、席への案内も少し混乱していたと感じた。食べログでは英語と韓国語のメニューがあるとしている。',
  });
}

// ================================================================ 焼肉ホルモン 坂上 裏なんば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27094237/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['11:00', '04:00']);
  put({
    id: 'osaka_horumon_sakagami_ura_namba', name: '焼肉ホルモン 坂上 裏なんば (Yakiniku Horumon Sakagami Ura Namba)', category: 'OMNI',
    lat: 34.66541, lng: 135.504229, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Every cut comes in a white or a black marinade, which are not described, and the meal ends with udon or soba (yakisoba-style) in the black sauce (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an offal yakiniku restaurant; the kimchi, namul and salads are sides and are not described.',
    hours_raw: 'Daily 11:00–04:00 (last food order 03:00, drinks 03:30); open year-round (Tabelog); the same listing also says "open until 5 AM". Reservations taken; weekend diners advise booking (2024 and October 2026 reviews). ¥440 table charge. Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money. 47 seats: 16 counter seats on the first floor, 19 on the second, a 12-seat horigotatsu room on the third (bookings of 8 or more). Heated tobacco only in a designated area (Tabelog); October 2026 and 2024 diners mention IQOS smoking.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 3-21, Ura Namba — 5 min from Namba Stn',
    cuisine: 'Horumon (offal) yakiniku grilled by the staff on a sloped iron plate over bean sprouts; the juices run down into a pot and season the finishing noodles (Tabelog) · course of ten cuts in two marinades — white: tongue, maruchou, tsurami, pork cheek, cartilage; black: outside skirt, heart, hoso, akasen, shimachou — then udon or soba fried in the black sauce, rice optional (Tabelog menu, December 2025) · à la carte cuts incl. liver, kimchi, namul, egg over rice; garlic sauce; giant "mega" mugs of drinks (reviews) · all-you-can-drink course',
    website: TB, gmaps: gm('焼肉ホルモン 坂上 裏なんば'), menu_url: M,
    notes: "[Yakiniku · Ura Namba, staff-grilled offal and yakisoba to finish] A three-storey offal yakiniku in Ura Namba, opened October 2016, where the staff do all the grilling on a sloped iron plate: the juices run down over a bed of bean sprouts into a pot, and that pan sauce becomes the finishing noodles. The course takes ten cuts in a white then a black marinade; diners in 2026 rave about the yakisoba at the end, the garlic sauce and the half-cooked liver, and like the staff's chat while grilling. Open from 11 AM to 4 AM, it serves daytime drinkers and late crowds alike. Be ready for smoke and smell; one August 2026 diner had concerns about safety and hygiene but praised taste and prices. The course price is ¥3,740 on the December 2025 menu and in a September 2026 review; an October 2026 diner gives ¥3,400.",
    chef_bio: { chef_name: null, roles: ['Grill staff unnamed (Tabelog; reviews)'], origin: null, background: 'Per Tabelog, the shop grills on a specially designed iron plate that lets the meat juices drip down and collects them in a rich sauce for the finishing noodles; staff grill each piece to the doneness asked for, or to the staff\'s own judgement. The Tabelog English text calls the shop both "Sakagami" and "Horumon Sakaue". Reviews in 2026 describe the staff explaining each cut while grilling.', philosophy: '"Savor every drop of the meat\'s deliciousness" (Tabelog menu).', specialty: 'Offal grilled on a sloped iron plate; yakisoba in the pan juices.',
      anecdotes: [
        { text: '"Here, all the grilling is done by the staff on the teppan, allowing for easy conversation and a simple, enjoyable experience." — September 2026, course for four.', source: R + 'B535085931/' },
        { text: '"The half-cooked liver is at the highest level." — August 2026.', source: R + 'B534545350/' },
        { text: '"If you can overlook some concerns about safety and hygiene, the taste and prices are excellent, making it a great choice!" — August 2026.', source: R + 'B534707462/' },
        { text: '"I had my kids with me, but the staff were very kind, and I really felt the Osaka vibe!!" — September 2026, visitors from Kanto.', source: R + 'B536486341/' },
        { text: '"Just be prepared for the smoke and smell!" — October 2026.', source: R + 'B537564623/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (店舗会員、英語版): 焼肉ホルモン 坂上 裏なんば、難波千日前3-21、2016年10月15日オープン、毎日11:00〜翌4:00 (L.O.料理3:00、ドリンク3:30)、「朝5時まで営業」との記載も、年中無休、お通し440円、47席 (1階16、2階19、3階掘りごたつ12は8名以上の予約制)、加熱式たばこのみ喫煙所、肉汁が流れ落ちる特製の鉄板で焼き、落ちた肉汁を濃厚なタレにして締めの麺に、スタッフが焼く。メニュー (2025年12月): コース3,740円、白いタレ5種 (タン、Maruchou、Tsurami、Tontoro、Korikori)、黒いタレ5種 (ハラミ、ハツ、Hoso、Akasen、Shimachou)、締めは udon か soba、アラカルト、キムチ、ナムル。口コミ (2024年〜2026年10月): 締めの Yakisoba が絶品、ガーリックのタレ、半生のレバー、メガジョッキ、もやしは食べ放題、スタッフが部位を説明しながら焼く、煙とにおいに注意、衛生面が気になるという声も (8月)、コース3,400円という声も (10月)。',
      confidence: 'medium', sources: [TB, M, R + 'B484047406/', R + 'B534545350/', R + 'B534707462/', R + 'B535085931/', R + 'B535663083/', R + 'B536395888/', R + 'B536486341/', R + 'B536793936/', R + 'B537564623/', R + 'B538079383/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill everything and explain the cuts (2026 reviews). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with an October 2026 hours notice; reviews dated through October 2026. No official site found.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前3番 (lot level only; the address has no building number) 38m. Nearest record 炭火焼鳥 鴨人 (osaka_sumibi_yakitori_kamojin_namba, "…難波千日前3-19", a different lot) is about 7 m away; the Tabelog pin is kept as precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated December 2025, tax included; ¥440 table charge. The course is ¥3,740 (menu; September 2026 review) or ¥3,400 (October 2026 review). Diners report ¥4,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Sakagami course: ten cuts in white and black marinades, then udon or soba in the pan juices', '¥3,740', 'Course', 'ask', 'no', 'Rice optional.', 'horumon_course'),
      it('', '', 'Liver', '¥869', 'À la carte', 'ask', 'no', 'Half-cooked, praised August 2026.', 'liver'),
      it('', '', 'Outside skirt', '¥1,419', 'À la carte', 'ask', 'no', 'White or black marinade.', 'harami'),
      it('', '', 'Tongue', '¥1,419', 'À la carte', 'ask', 'no', 'White or black marinade.', 'tongue'),
      it('', '', 'Finishing noodles (udon or soba)', '¥440', 'Noodles', 'no', 'no', 'Fried in the black sauce and pan juices.', 'shime_noodles'),
    ] }, {
    cuisine: 'ホルモン焼肉。スタッフが傾いた鉄板でもやしの上で焼き、流れ落ちた肉汁を鍋に集めて締めの麺の味付けに (食べログ)・コースは2種のタレで10部位。白いタレ: タン、Maruchou、Tsurami、Tontoro、Korikori。黒いタレ: ハラミ、ハツ、Hoso、Akasen、Shimachou。締めは黒いタレで焼く udon か soba、ご飯は選べる (食べログのメニュー、2025年12月)・アラカルトにレバーなど、キムチ、ナムル、卵かけご飯。ガーリックのタレ、特大のメガジョッキ (口コミ)・飲み放題付きコース',
    neighborhood: '難波千日前3-21、裏なんば。なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。どの部位も白か黒のタレで、タレの説明はない。締めは黒いタレの udon か soba (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ホルモン焼肉の店で、キムチ、ナムル、サラダはサイド。説明はない。',
    notes: '[焼肉・裏なんば、スタッフが焼くホルモンと締めの Yakisoba] 2016年10月にオープンした裏なんばの3階建てのホルモン焼肉店。焼くのはすべてスタッフで、傾いた鉄板から肉汁がもやしの上を流れて鍋にたまり、そのタレが締めの麺になる。コースは10部位を白いタレ、黒いタレの順で。2026年の客は締めの Yakisoba、ガーリックのタレ、半生のレバーを絶賛し、焼きながらのスタッフとの会話も好評。朝11時から翌朝4時まで開いていて、昼飲みにも深夜にも使われる。煙とにおいは覚悟を。2026年8月の客の1人は衛生面が気になったが、味と値段は高く評価した。コースは2025年12月のメニューと2026年9月の口コミで3,740円、2026年10月の客は3,400円としている。',
  });
}

// ================================================================ 肉タレ屋 難波バル店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27087573/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://nikutareya-namba.com/'; const FOOD = SITE + 'food.html'; const CON = SITE + 'concept.html';
  const H = day(['11:00', '15:30'], ['18:00', '23:00']);
  put({
    id: 'osaka_nikutareya_namba_bal', name: '肉タレ屋 難波バル店 (Niku Tare Ya Namba baru ten)', category: 'OMNI',
    lat: 34.662468, lng: 135.500793, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The roast beef comes with the house sauces and the menu includes beef cutlets, kara-age, spring rolls and wasabi-soy dishes (official site; reviews); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu meat bar; the salads, pickles and smoked snacks are sides and many carry bacon, beef or fish (official site).',
    hours_raw: 'Mon, Wed–Sun 11:00–15:30 (last order 15:00) and 18:00–23:00 (last order 22:30); closed Tuesday, or the next day when Tuesday is a holiday; open 3 November and 29 December 2026, closed 4 November (Tabelog; official site). Lunch bookings by phone or Instagram DM; seat-only bookings get a table snack and need one drink each (Tabelog); a one-drink order is required (October 2026 review). Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. 75 seats over four floors, incl. a 30-seat tatami room on the third floor (bookings only) and private rooms on the fourth (¥2,200 per room); non-smoking; wheelchair accessible (Tabelog; official site). Mobile ordering (October 2026 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-8-96 (Naniwa-ku), near Namba Parks — 5 min from Nankai Namba and Namba Stn',
    cuisine: 'Meat bar of Kagoshima black wagyu "Yamasan beef", A4 and above heifers raised on the house\'s directly run Yamasan ranch in Izumi, Kagoshima (official site) · lunch bowls: roast beef bowl (a gold award at a national donburi grand prix, per the site), rare steak bowl, outside skirt bowl, roast beef with three-tuna negitoro bowl, beef cutlet set · dinner: "towering" potato salad wrapped in roast beef, roast beef platters, negitoro roast-beef rolls, seared wagyu nigiri, sirloin and fillet steaks, sirloin-and-snow-crab KANIKUJYU box, beef-tendon egg rice "Wa!!Gyu!! TKG!!", house-smoked snacks (official site) · highballs in a goldfish bowl, about 70 drinks; all-you-can-drink courses from ¥4,400',
    website: SITE, gmaps: gm('肉タレ屋 難波バル店'), menu_url: FOOD,
    notes: "[Meat bar · Nambanaka, Kagoshima wagyu roast beef] A casual wood-panelled meat bar near Namba Parks, open since September 2015, serving roast beef and steaks of black wagyu from the house's own ranch in Kagoshima. Lunch is about the roast beef bowls, generous and good value by most 2026 accounts; one August 2026 regular wished the slices were thicker. At night the draw is the tall potato salad wrapped in roast beef, meat-heavy all-you-can-drink courses and highballs served in a goldfish bowl for ten. Celebrity autographs line the stairs. A September 2026 diner found the prices on the outside menu looked high and the real bill reasonable. Tabelog lists English-speaking staff and an English, Chinese and Korean menu; the official site says the beef-tendon egg rice is a big hit with travellers from abroad.",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed (official site; Tabelog)'], origin: null, background: 'Per the official site, the beef is "Yamasan beef", A4-and-above black-wagyu heifers fattened on the directly run Yamasan ranch in Izumi, Kagoshima, and the concept page speaks of "the finest lean meat raised by a 110-year-old butcher". The house slices each roast-beef cut to a different thickness to bring out texture. A second 肉タレ屋 runs in Izumisano (hotpepper.jp).', philosophy: '"Beauty, splendour and luxurious flavour" (official site).', specialty: 'Kagoshima black-wagyu roast beef bowls; roast-beef potato salad.',
      anecdotes: [
        { text: '"However, the prices on the menu outside were high, making it hard to realize how reasonable it actually is, which is a shame!" — September 2026.', source: R + 'B537076253/' },
        { text: '"I felt that the roast beef could have been a bit thicker, but it was still delicious." — August 2026, second visit.', source: R + 'B524759069/' },
        { text: '"The casual atmosphere features a wooden decor, and there are celebrity autographs displayed on the stairs." — October 2026, all-you-can-drink lunch course.', source: R + 'B536893381/' },
        { text: '"Mobile ordering system in place. One drink order required." — October 2026.', source: R + 'B525344559/' },
      ],
      japanese_sources_summary: '公式サイト: 肉タレ屋 なんばBAL店、浪速区難波中2-8-96、南海難波駅・なんば駅から徒歩5分、難波PARKSのすぐそば、黒毛和牛はすべて自社牧場の「やまさん牛」(鹿児島県出水市の直営牧場「やまさん牧場」で肥育したA4以上の雌牛)、「創業110年 老舗肉屋が育てた極上の赤身」、とにかく背高いポテトサラダ1,300円、ローストビーフ盛り合わせ、ネギトロ巻き、肉寿司「炙」、サーロインステーキ、ヘレステーキ、カニク重 (KANIKUJYU)、ローストビーフ丼は全国丼グランプリ金賞、レアステーキ丼、Wa!!Gyu!!TKG!! は外国の旅行者に大人気、金魚鉢のハイボール、ランチ11:00〜15:30・ディナー18:00〜23:00、火曜休み、75席、4階完全個室 (1室2,200円)、全面禁煙、英語・中国語・韓国語のページ。食べログ (店舗会員、英語版): 2015年9月16日オープン、多言語メニュー (英語・中国語・韓国語)、英語を話すスタッフ、飲み放題コース4,400円〜、約70種のドリンク。ホットペッパー: 肉タレ屋 泉佐野店。口コミ (2026年3月〜11月): ローストビーフ丼、ハラミ丼、ネギトロ丼、牛カツ、ポテトサラダ、コースはお得、肉がもう少し厚ければという声、外の看板の値段が高く見えるという声、モバイルオーダー、ワンドリンク制、階段に有名人のサイン。',
      confidence: 'medium', sources: [TB, SITE, CON, FOOD, 'https://www.hotpepper.jp/strJ004469689/', R + 'B524759069/', R + 'B525344559/', R + 'B533691509/', R + 'B534300957/', R + 'B536073370/', R + 'B536203303/', R + 'B536670484/', R + 'B536893381/', R + 'B537076253/', R + 'B537821987/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists English-speaking staff and a menu in English, Traditional and Simplified Chinese and Korean; the official site has English, Chinese and Korean pages and says the beef-tendon egg rice is popular with travellers from abroad.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-8-96',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November and December 2026 opening notes and shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番96号 (go) 4m. Nearest record (osaka_ruggeri_nambanaka, "…難波中2丁目8-93", a different building) is about 27 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, TB, R + 'B525344559/'],
    price_note: 'Official food page, tax included (read November 2026). Lunch bowls ¥1,400–1,500 in November 2026 (review). All-you-can-drink courses from ¥4,400 (Tabelog). Diners report ¥1,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Kagoshima wagyu roast beef bowl, extra large', '¥1,500', 'Lunch', 'ask', 'no', 'November 2026 review.', 'roast_beef_don'),
      it('', '', 'Roast beef and three-tuna negitoro bowl, large', '¥1,400', 'Lunch', 'ask', 'no', 'November 2026 review.', 'roast_beef_negitoro_don'),
      it('とにかく背高いポテトサラダ', '', 'Towering potato salad wrapped in wagyu roast beef', '¥1,300', 'Roast beef', 'ask', 'no', 'Most popular at dinner.', 'roast_beef_potato_salad'),
      it('サーロインステーキ', '', 'Yamasan wagyu sirloin steak, 100 g', '¥3,200', 'Premium', 'ask', 'no', '200 g ¥5,900.', 'sirloin_steak'),
      it('黒毛和牛サーロインと紅ズワイガニのKANIKUJYU', '', 'Wagyu sirloin and red snow crab box (KANIKUJYU)', '¥4,590', 'Special', 'ask', 'no', '', 'kanikujyu'),
    ] }, {
    cuisine: '鹿児島県産黒毛和牛「やまさん牛」の肉バル。鹿児島県出水市の直営牧場「やまさん牧場」で肥育したA4以上の雌牛 (公式サイト)・ランチの丼: ローストビーフ丼 (全国丼グランプリ金賞と公式サイト)、レアステーキ丼、ハラミ丼、ローストビーフと三種マグロのネギトロ丼、牛カツの定食・ディナー: ローストビーフで巻いたとにかく背高いポテトサラダ、ローストビーフ盛り合わせ、ローストビーフネギトロ巻き、肉寿司「炙」、サーロインとヘレのステーキ、サーロインと紅ズワイガニのカニク重、牛すじの Wa!!Gyu!!TKG!!、自家製燻製 (公式サイト)・金魚鉢のハイボール、約70種のドリンク、飲み放題コース4,400円〜',
    neighborhood: '浪速区難波中2-8-96、難波PARKSのすぐそば。南海難波駅、なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ローストビーフは店のタレで、牛カツ、唐揚げ、春巻き、わさび醤油の皿もある (公式サイト、口コミ)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の肉バルで、サラダ、漬物、燻製はサイド。ベーコン、牛肉、魚を使うものが多い (公式サイト)。',
    notes: '[肉バル・難波中、鹿児島の和牛のローストビーフ] 難波PARKSの近く、木目を基調にした気軽な肉バルで、2015年9月オープン。自社牧場の鹿児島の黒毛和牛でローストビーフやステーキを出す。ランチはローストビーフ丼が中心で、2026年の口コミでは量が多くお得という声が多い。2026年8月の常連は肉がもう少し厚ければと書く。夜の名物は、ローストビーフで巻いた背の高いポテトサラダ、肉づくしの飲み放題コース、10人分の金魚鉢のハイボール。階段には有名人のサインが並ぶ。2026年9月の客は、外の看板の値段は高く見えるが実際の会計は手頃だったと書く。食べログでは英語を話すスタッフと英語・中国語・韓国語のメニューがあるとし、公式サイトは牛すじの卵かけご飯が外国の旅行者に大人気としている。',
  });
}

// ================================================================ Oh.lala... (W Osaka)
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121705/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ohlala.wosaka.com/'; const MENU = SITE + 'en/our-menus';
  const H = day(['07:00', '11:00'], ['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_ohlala_w_osaka', name: 'Oh.lala... (W Osaka)', category: 'OMNI',
    lat: 34.677814, lng: 135.500183, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information on the menu. Tabelog lists allergy information as available. Lunch and dinner centre on all-you-can-eat bread, pasta, steak frites and desserts (official menu).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the à la carte menu has a vegan section — vegan burger, vegetable pasta, minestrone, green salad with vegan chicken, sautéed seasonal vegetables (official menu). Tabelog also lists vegetarian options. Courses are not vegan.',
    hours_raw: 'Daily breakfast 7:00–11:00 (last order 10:45, buffet), lunch 12:00–15:00 (last order 14:00; lunch bookings limited to 90 minutes), dinner 17:30–22:00 (last order 21:00) (official site; Tabelog lists lunch and dinner). Reservations taken; no seat requests; seat selection unavailable at weekends and holidays (Tabelog). Tabelog says Marriott Bonvoy benefits and discounts do not apply; an October 2026 hotel guest says a Marriott member discount was given. À la carte unavailable on 19, 20, 24, 25 and 31 December 2026 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and transport IC and other e-money; no QR. 160 seats; non-smoking; wheelchair accessible; kids menu; smart casual (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisemba 4-1-3, W Osaka 3F, on Midosuji — 3 min from Shinsaibashi Stn exit 3',
    cuisine: 'French brasserie of W Osaka: traditional French cooking with Japanese ingredients (official site; Tabelog) · signature steak frites with Café de Paris butter or béarnaise; "Boulangerie" lunch and dinner courses with all-you-can-eat bread and desserts by the hotel\'s pastry and bakery chefs (lunch 2–4 courses ¥5,400–7,400, weekday pasta lunch ¥3,900); dinner courses ¥5,800–15,000 · à la carte: onion gratin soup, fish & chips, Osaka sea bass, lobster, Kagoshima pork, wagyu stew, Kawachi duck, Miyazaki Nakamura beef fillet, Kobe beef burger, truffle ramen, wagyu sukiyaki udon, a vegan section (official menu, read November 2026) · breakfast buffet · wine, cocktails, sommelier',
    website: SITE, gmaps: gm('Oh.lala W Osaka'), menu_url: MENU,
    notes: "[French · Minamisemba, W Osaka's brasserie on Midosuji] The all-day French brasserie on the third floor of W Osaka, opened March 2021, with big windows over the tree-lined Midosuji and a white, black and blue room with polka-dot touches. Lunch is the popular buy: courses with unlimited bread brought to the table and unlimited desserts. Most 2026 diners loved the bread and the lasagna; some found the single pasta choice limiting, the salad salty or the desserts samey. Dinner centres on steak frites, cooked rare and served with butter or sauce, against the night view. One October 2026 diner writes that the menu was developed with Chef Yusuke Takada of La Cime and the W Osaka chefs. The menu has a vegan section.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen team unnamed; breads and desserts by the W Osaka pastry and bakery chefs (Tabelog)'], origin: null, background: 'A restaurant of W Osaka, opened 16 March 2021 (Tabelog). The official site describes traditional French cooking fused with Japanese ingredients and a modern sensibility, and playful presentation; the name is what the French say when surprised or excited. An October 2026 diner writes that the menu is developed by Chef Yusuke Takada of the two-Michelin-star La Cime together with the W Osaka executive chef team; no other source checked here says so.', philosophy: '"Traditional French fused with Japanese ingredients and a modern sensibility" (official site).', specialty: 'Steak frites; all-you-can-eat bread and desserts.',
      anecdotes: [
        { text: '"The staff regularly came around with fresh bread, and for dessert, we could order from the menu without having to move at all, which was a nice touch." — October 2026, weekday lunch.', source: R + 'B537246781/' },
        { text: '"The main dish is only a daily pasta special, so I would have been happier if there were a few more options." — September 2026.', source: R + 'B536322344/' },
        { text: '"In the evening, you can enjoy the beautiful night view of Osaka through the large windows, adding a special touch to the hotel dining experience." — October 2026, steak frites course.', source: R + 'B536760266/' },
        { text: '"As a Marriott member, I also received a discount." — October 2026, hotel guest (Tabelog says Marriott Bonvoy discounts do not apply).', source: R + 'B536751475/' },
      ],
      japanese_sources_summary: '公式サイト (日本語): W大阪の Oh.lala...、朝食からランチ、ディナーまで、御堂筋の並木道が見える窓、白・黒・青のモダンな内装に水玉のアクセント、朝食はブッフェ、3F・160席、朝7:00〜11:00 (L.O.10:45)、ランチ12:00〜15:00 (L.O.14:00)、ディナー17:30〜22:00 (L.O.21:00)、伝統的なフレンチに日本の食材とモダンな感性、誕生日の方1名にステーキフリット4品コース無料 (2名以上)、ブーランジェリーディナー、ワインブッフェ、キッズ無料、住所は南船場4-1-3 (英語版のメニューページは「4-3-1 Minami Semba」と表記)。食べログ (店舗会員、英語版): 2021年3月16日オープン、ランチは90分制、席の指定不可、Marriott Bonvoy の特典・割引は対象外、2026年12月の一部日程はアラカルトなし、アレルギー表示あり、ベジタリアン対応、駐車場1時間1,500円 (利用額で無料時間)。口コミ (2026年9月〜10月): パンとデザートの食べ放題、ラザニア、ステーキフリット、夜景、パスタの選択肢が1つ、サラダが塩辛い、デザートの味が似ている、Marriott 会員割引を受けたという声も、La Cime の Yusuke Takada シェフと共同開発という声も。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B536322344/', R + 'B536455435/', R + 'B536619491/', R + 'B536667452/', R + 'B536751475/', R + 'B536760266/', R + 'B537246781/', R + 'B537333464/', R + 'B538102333/', R + 'B538337005/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A W hotel restaurant whose official site and menu are also in English. No evidence on English-speaking staff in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-1-3 W大阪 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (W Osaka) and shop-maintained (corporate-member) Tabelog listing with December 2026 notices; reviews dated through October 2026. The English menu page gives the address as 4-3-1 Minami Semba; the Japanese site and Tabelog give 南船場4-1-3.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目1番3号 (go) 24m (W Osaka is a large building). Nearest records (osaka_yakiniku_nikutoieba_matsuda_hakuromachi, "…博労町4-3-14 1F") are about 52 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB],
    price_note: 'Official English menu (read November 2026). Lunch courses ¥3,900–7,400; dinner courses ¥5,800–15,000. Diners report ¥3,000–5,999 at lunch and ¥6,000–14,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Signature steak frites (Café de Paris butter or béarnaise)', '¥5,000', 'Meat', 'ask', 'no', 'À la carte; also the centre of the dinner courses.', 'steak_frites'),
      it('', '', 'Boulangerie lunch, 2 courses with all-you-can-eat bread and desserts', '¥5,400', 'Lunch', 'no', 'no', 'Caesar salad and a main.', 'boulangerie_lunch'),
      it('', '', 'Pasta lunch course (weekdays, booking required)', '¥3,900', 'Lunch', 'no', 'no', 'Salad, pasta of the day, coffee or tea.', 'pasta_lunch'),
      it('', '', 'Onion gratin soup', '¥2,000', 'Hot starters', 'no', 'no', '', 'onion_gratin_soup'),
      it('', '', 'Vegan burger', '¥4,000', 'Vegan dishes', 'ask', 'vegan', 'In the vegan section.', 'vegan_burger'),
      it('', '', 'Vegetable pasta', '¥3,400', 'Vegan dishes', 'no', 'vegan', 'In the vegan section.', 'vegetable_pasta'),
    ] }, {
    cuisine: 'W大阪のフレンチブラッスリー。伝統的なフレンチに日本の食材 (公式サイト、食べログ)・名物はカフェ・ド・パリバターかベアルネーズのステーキフリット。ホテルのペストリー・ベーカリーシェフのパンとデザートが食べ放題のブーランジェリーのランチとディナー (ランチ2〜4品5,400〜7,400円、平日のパスタランチ3,900円)、ディナーコース5,800〜15,000円・アラカルト: オニオングラタンスープ、フィッシュ&チップス、Osaka のスズキ、ロブスター、Kagoshima の豚、和牛シチュー、Kawachi の鴨、Miyazaki の Nakamura 牛フィレ、Kobe 牛バーガー、トリュフの Ramen、和牛 Sukiyaki の Udon、ヴィーガンのメニュー (公式の英語メニュー、2026年11月)・朝食ブッフェ・ワイン、カクテル、ソムリエ',
    neighborhood: '南船場4-1-3 W大阪 3F、御堂筋沿い。心斎橋駅3番出口から徒歩3分',
    gf_detail: '要確認。メニューにグルテンの情報なし。食べログではアレルギー表示ありとしている。ランチとディナーはパンの食べ放題、パスタ、ステーキフリット、デザートが中心 (公式メニュー)。',
    vegan_detail: 'ヴィーガンの選択肢あり。アラカルトにヴィーガンのコーナーがあり、ヴィーガンバーガー、野菜のパスタ、ミネストローネ、ヴィーガンチキンのグリーンサラダ、季節の野菜のソテー (公式メニュー)。食べログではベジタリアン対応もあり。コースはヴィーガンではない。',
    notes: '[フレンチ・南船場、御堂筋沿いのW大阪のブラッスリー] W大阪の3階にある終日営業のフレンチブラッスリーで、2021年3月オープン。御堂筋の並木道が見える大きな窓と、白・黒・青に水玉をあしらった内装。人気はランチで、パンが席まで運ばれてくる食べ放題とデザートの食べ放題が付く。2026年の客の多くはパンとラザニアを絶賛したが、パスタが1種類だけ、サラダが塩辛い、デザートの味が似ているという声も。ディナーはステーキフリットが中心で、レアに焼いた肉をバターかソースで、夜景とともに。2026年10月の客の1人は、メニューは La Cime の Yusuke Takada シェフとW大阪のシェフ陣が共同開発したと書いている。メニューにはヴィーガンのコーナーがある。',
  });
}

save();
