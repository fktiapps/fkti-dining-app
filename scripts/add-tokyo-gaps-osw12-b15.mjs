// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 15.
//   + 博多豚骨らぁ麺一絆 上野御徒町本店 Hakata Tonkotsu Ramen Ichiban (clear tonkotsu ramen by Okachimachi North Exit, to 2 am) — no ramen block
//   + カフェ ベル Cafe Bell (cafeteria-style café in the International Library of Children's Literature, Ueno Park)
//   + らぁめん千寿 御徒町店 ramen senju (first Tokyo shop of a 2002 Sapporo miso-ramen shop; opened 1 Sept 2026) — no ramen block
//   + sardexka (8-seat Basque/Spanish counter near Uguisudani; Tabelog Spanish 100 2024/2026)
// Skipped (see skip()): 米線専門店 天府李米線 13282250, マクドナルド 上野御徒町店 13254339, 大衆酒場 天ぷら宮 13312382,
//   再来宴 上野仲町通り店 13034317, きのこ鍋＆きのこ料理専門店 何鮮菇 13228848 (chains).
// Chain check (with Greg's 2026-11-02 rulings). Ichiban: "本店" in the name, but no other branch found. Cafe Bell, sardexka: one
//   shop each. ramen senju: the Okachimachi shop is a branch of the Sapporo original (founded 2002) — two shops in all as found,
//   kept under the integrator's two-shop ruling; flag.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13282250', 'chain: 天府李米線 shares its name with 天府李米线 Tina\'s Noodle Kitchen, a Melbourne rice-noodle chain run by Tina Li with several locations (CBD, Preston, Box Hill); a July 2026 reviewer says the Ueno shop originates from Australia and directories list it as "天府李米線 TINA\'S NOODLE KITCHEN". Link not confirmed by the operator — flag.');
skip('13254339', 'national chain: McDonald\'s; this is the 上野御徒町店.');
skip('13312382', 'chain: 株式会社天ぷら宮 runs the 天ぷら宮 brand in Ueno (上野本店 and 上野駅前店 opened 2024, this 大衆酒場 天ぷら宮 in June 2025; tendon and soba on all three menus) plus ミヤノ家 and 天むす宮 — same brand, expanding fast (miya-food.com).');
skip('13034317', 'chain: a 2026 review says 再来宴 has "other branches nearby"; this is the 上野仲町通り店.');
skip('13228848', 'chain: Ueno branch of the Dalian (China) mushroom hot-pot chain 何鮮菇 (Retty listing: 中国大連で大人気きのこ鍋屋 … の上野店).');

// ================================================================ 博多豚骨らぁ麺一絆
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13281009/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '02:00']);
  put({
    id: 'tokyo_hakata_tonkotsu_ichiban_okachimachi', name: '博多豚骨らぁ麺一絆 上野御徒町本店 (Hakata Tonkotsu Ramen Ichiban)', category: 'OMNI',
    lat: 35.708118, lng: 139.775116, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles in pork-bone broth; the vegetable topping comes in a thick sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth, back fat, rare pork chashu; mentaiko on the table.',
    hours_raw: 'Daily 11:00–2:00, until sold out (Tabelog). Bookings through Tabelog put you in the line on arrival rather than holding a seat (October 2026). Queues of about 10 at times; quieter mid-afternoon. Ticket machine, then an order sheet for noodle firmness, fat, spice and toppings (October 2026). No cards, e-money or QR (Tabelog); extra noodles paid in cash at the counter. 15 counter seats. Non-smoking. Free Wi-Fi. English menu and staff; listing also notes Vietnamese- and Sri Lankan-speaking staff. Opened 13 January 2023.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ueno 6-chōme, deep in Ameyoko — 1 min from JR Okachimachi North Exit',
    cuisine: 'Hakata tonkotsu ramen, billed as the birthplace of "clear tonkotsu" — a pork-bone broth without the usual cloudiness (Tabelog) · menu (Tabelog, October 2026): plain tonkotsu ramen ¥650, tonkotsu ramen ¥800, special ¥1,000, tonkotsu vegetable ramen ¥1,000, clear tonkotsu vegetable ramen ¥1,200, special clear tonkotsu ramen ¥1,650 (rare chashu around the bowl, three toppings) · extra noodles, vegetables, rice ¥150 each; chashu or chicken-salt rice bowl ¥400; tamago kake gohan ¥350; rare chashu ¥300 · stir-fried vegetables in a thick sauce served on a separate plate; free mentaiko on the table',
    website: null, gmaps: gm('博多豚骨らぁ麺一絆 上野6-4-18'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Okachimachi, clear tonkotsu ramen until 2 am] A 15-seat ramen counter a minute from Okachimachi's North Exit that calls itself the birthplace of clear tonkotsu: a pork-bone broth that stays transparent yet tastes of pork, with a punch of garlic. Buy a ticket, then fill in an order sheet for noodle firmness, fat and toppings. The special clear tonkotsu (¥1,650) comes ringed with slices of rare chashu; the plain bowl is only ¥650, and stir-fried vegetables in a thick sauce come on the side. Mentaiko on the table is free. Open from 11:00 to 2:00 every day, with a line at lunch. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 January 2023 (Tabelog)', background: 'Tabelog official listing; the counter seating was crafted by the owner, per an October 2026 review. No source names the owner.', philosophy: null, specialty: 'Clear tonkotsu ramen.',
      anecdotes: [
        { text: '"I started with the broth, and I was surprised by its clarity despite being tonkotsu!" — October 2026, special clear tonkotsu ramen.', source: R + 'B537584820/' },
        { text: '"The broth was a clear tonkotsu, light yet easy to drink, with a punch of garlic that added depth to its flavor, contrary to its appearance." — October 2026.', source: R + 'B537693051/' },
        { text: '"The seasoning was quite strong, but everything else was average." — October 2026, tonkotsu ramen.', source: R + 'B537949465/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 博多豚骨らぁ麺一絆 上野御徒町本店、上野6-4-18、JR御徒町駅北口から徒歩1分、毎日11:00〜翌2:00 (売り切れ次第終了)、予約可、15席、禁煙、カード・電子マネー・QR不可、Wi-Fi、英語のメニューとスタッフ、2023年1月13日オープン、「世界初、透明豚骨らぁ麺発祥の店」。メニュー (2026年10月): 豚骨素ラーメン650円、豚骨ラーメン800円、特製1,000円、豚骨野菜ラーメン1,000円、透明豚骨野菜ラーメン1,200円、特製透明豚骨ラーメン1,650円、替え玉・野菜増し・ライス各150円、レアチャーシュー300円、卵かけご飯350円。口コミ (2026年10月): 食券のあと注文用紙で麺の硬さや脂を指定、レアチャーシュー、野菜炒めは別皿、卓上の明太子は無料、10人ほどの行列、店主手作りのカウンター。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B537461086/', R + 'B537584820/', R + 'B537693051/', R + 'B537805976/', R + 'B537843761/', R + 'B537893022/', R + 'B537949465/', R + 'B538367918/', R + 'B538436654/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; ticket machine plus an order sheet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-4-18',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目4番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Plain tonkotsu ramen', '¥650', 'Ramen', 'no', 'no', 'Tabelog menu, October 2026.', 'su_tonkotsu'),
      it('', '', 'Tonkotsu ramen', '¥800', 'Ramen', 'no', 'no', 'Tabelog menu, October 2026.', 'tonkotsu'),
      it('', '', 'Tonkotsu vegetable ramen', '¥1,000', 'Ramen', 'no', 'no', 'Tabelog menu, October 2026.', 'tonkotsu_yasai'),
      it('', '', 'Clear tonkotsu vegetable ramen', '¥1,200', 'Ramen', 'no', 'no', 'Tabelog menu, October 2026.', 'clear_yasai'),
      it('', '', 'Special clear tonkotsu ramen', '¥1,650', 'Ramen', 'no', 'no', 'Tabelog menu, October 2026.', 'clear_special'),
      it('', '', 'Extra noodles (kaedama)', '¥150', 'Extras', 'no', 'ask', 'Tabelog menu, October 2026.', 'kaedama'),
      it('', '', 'Chashu rice bowl', '¥400', 'Rice', 'ask', 'no', 'Tabelog menu, October 2026.', 'chashu_don'),
      it('', '', 'Tamago kake gohan', '¥350', 'Rice', 'ask', 'no', 'Tabelog menu, October 2026.', 'tkg'),
    ] }, {
    cuisine: '「透明豚骨」発祥をうたう博多豚骨ラーメン。濁らない豚骨スープ (食べログ)・メニュー (食べログ、2026年10月): 豚骨素ラーメン650円、豚骨ラーメン800円、特製1,000円、豚骨野菜ラーメン1,000円、透明豚骨野菜ラーメン1,200円、特製透明豚骨ラーメン1,650円 (丼のまわりにレアチャーシュー、トッピング3つ)・替え玉、野菜増し、ライス各150円、チャーシュー丼・鶏塩丼400円、卵かけご飯350円、レアチャーシュー300円・あんかけの野菜炒めは別皿、卓上の明太子は無料',
    neighborhood: '上野六丁目、アメ横の奥。JR御徒町駅北口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。豚骨スープに小麦の細麺。野菜はとろみのあるあんかけ。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、背脂、豚のレアチャーシュー。卓上に明太子。',
    notes: '[ラーメン・御徒町、深夜2時までの透明豚骨] 御徒町駅北口から1分、15席のラーメンのカウンターで、「透明豚骨」発祥の店を名乗ります。澄んだままなのに豚の旨味があり、にんにくの効いたスープ。食券を買い、注文用紙に麺の硬さ、脂、トッピングを記入。特製透明豚骨 (1,650円) は丼のまわりをレアチャーシューが囲み、素ラーメンなら650円。あんかけの野菜炒めは別皿で。卓上の明太子は無料。毎日11:00〜翌2:00営業で、昼は行列も。現金のみ。',
  });
}

// ================================================================ カフェ ベル
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13061152/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:30', '17:00']);
  put({
    id: 'tokyo_cafe_bell_ueno_park', name: 'カフェ ベル (Cafe Bell)', category: 'OMNI',
    lat: 35.719219, lng: 139.773834, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: curry, Napolitan spaghetti, fried fish, sandwiches and cakes; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: curry, hamburg steak, fried fish with tartar sauce, omelette, cakes and soft-serve; no vegan dish is named.',
    hours_raw: 'Tue–Sun 9:30–17:00; closed Mondays, the third Wednesday of each month and public holidays (Tabelog). Lunch from 11:30 (July 2026); popular dishes like curry sell out early (September 2026). Inside the International Library of Children\'s Literature, open to all ages (July 2026). Buy a ticket from the machine (cash only), hand it in, take a number and collect your food. Tabelog lists 10 table seats; reviewers describe closely packed tables and a terrace. Non-smoking.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ueno Park, International Library of Children\'s Literature 1F — about 15 min on foot from JR Uguisudani or through the park from JR Ueno',
    cuisine: 'Library café and lunch counter (Tabelog; reviews) · curry rice ¥550 (November 2025); large omurice curry with salad, soup ¥100 (July 2026); hamburg curry; Napolitan spaghetti, known as the house speciality (November 2025) · value set ¥700: fried white fish with pink tartar sauce and twice-cooked pork in a bento box (July 2026); daily special ¥800 (August 2026); pasta, sandwiches, bento · coffee ¥400, iced ¥450 (up from ¥300/¥320 early 2026); drinks ¥150 with lunch · cake set ¥650 (October 2026); shaved ice with unlimited syrup, soft-serve',
    website: 'http://www.kodomo.go.jp', gmaps: gm('カフェ ベル 国際子ども図書館'), menu_url: null,
    notes: "[Café · Ueno Park, cheap lunch inside a historic library] A simple self-service café on the ground floor of the International Library of Children's Literature, housed in the brick building that was once the Imperial Library, with a modern glass wing and a terrace. Buy a ticket (cash only), collect your tray when your number is called, and eat for well under ¥1,000: a ¥550 curry that reviewers rate like an old Western-style restaurant's, Napolitan spaghetti, a ¥700 bento-style set, or coffee for ¥400 with a cake set at ¥650. Lunch starts at 11:30 and fills up near noon; curry can sell out. Closed Mondays, public holidays and the third Wednesday. The library's children's-literature gallery upstairs is worth the visit too.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Café in the International Library of Children\'s Literature (Tabelog lists the library site as its website). No source names the operator.', philosophy: null, specialty: 'Curry rice; Napolitan spaghetti.',
      anecdotes: [
        { text: '"The curry is at the level of a long-established Western-style restaurant, making it undoubtedly delicious." — July 2026, large omurice curry.', source: R + 'B514499449/' },
        { text: '"Until the beginning of this year, coffee was just JPY 300 (JPY 320 for iced)… the price had increased to JPY 400 (JPY 450 for iced)." — July 2026.', source: R + 'B531601240/' },
        { text: '"The food was a bit cold, but it was quick and convenient." — August 2026, daily special ¥800.', source: R + 'B533055303/' },
      ],
      japanese_sources_summary: '食べログ: カフェ ベル、上野公園12-49 国際子ども図書館内 1F、鶯谷駅から448m、火〜日9:30〜17:00、月曜・第3水曜・祝日休み、予約不可、カード・電子マネー・QR不可、10席 (テーブル)、テラス、禁煙。口コミ (2025年11月〜2026年10月): カレーライス550円、ナポリタンが名物、オムライスカレー、ハンバーグカレー、お得なセット700円 (白身魚フライと回鍋肉の弁当)、日替わり800円、コーヒー400円 (アイス450円、年初までは300円・320円)、ランチのドリンク150円、ケーキセット650円、かき氷、ソフトクリーム、食券は現金のみ、番号札で呼ばれる、昼は満席に近い、カレーは早く売り切れる。',
      confidence: 'medium', sources: [TB, R + 'B514499449/', R + 'B531601240/', R + 'B532334009/', R + 'B532641899/', R + 'B533055303/', R + 'B534847256/', R + 'B535143744/', R + 'B535262200/', R + 'B535670809/', R + 'B536837159/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash), number tag, self-service; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野公園12-49 国際子ども図書館内 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野公園12番49号 (go) 44m — the lot is the library; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514499449/', R + 'B531601240/', R + 'B532334009/', R + 'B536837159/'],
    price_note: 'Prices from 2025–2026 reviews (tax included); coffee rose in early 2026.', last_checked: TODAY, items: [
      it('', '', 'Curry rice', '¥550', 'Meals', 'no', 'no', 'November 2025.', 'curry_rice'),
      it('', '', 'Value set (fried white fish and twice-cooked pork, bento box)', '¥700', 'Meals', 'no', 'no', 'July 2026.', 'value_set'),
      it('', '', 'Daily special', '¥800', 'Meals', 'ask', 'ask', 'August 2026.', 'daily_special'),
      it('', '', 'Coffee', '¥400', 'Drinks', 'ask', 'ask', 'July 2026; iced ¥450; ¥150 with lunch.', 'coffee'),
      it('', '', 'Cake set', '¥650', 'Sweets', 'no', 'no', 'October 2026.', 'cake_set'),
    ] }, {
    cuisine: '図書館のカフェと昼食のカウンター (食べログ、口コミ)・カレーライス550円 (2025年11月)、大盛りのオムライスカレー、サラダ、スープ100円 (2026年7月)、ハンバーグカレー、名物として知られるナポリタン (2025年11月)・お得なセット700円: 幕の内風の弁当箱に白身魚フライのピンクのタルタルソースと回鍋肉 (2026年7月)、日替わり800円 (2026年8月)、パスタ、サンドイッチ、弁当・コーヒー400円、アイス450円 (2026年初めまでは300円・320円)、ランチのドリンク150円・ケーキセット650円 (2026年10月)、シロップかけ放題のかき氷、ソフトクリーム',
    neighborhood: '上野公園、国際子ども図書館 1F。JR鶯谷駅から徒歩約15分、JR上野駅から公園を抜けても約15分',
    gf_detail: 'グルテンフリーは要確認。カレー、ナポリタン、白身魚フライ、サンドイッチ、ケーキ。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。カレー、ハンバーグ、タルタルソースの白身魚フライ、オムライス、ケーキ、ソフトクリーム。ヴィーガンの料理名はありません。',
    notes: '[カフェ・上野公園、歴史ある図書館の中の安いお昼] 国際子ども図書館の1階にあるシンプルなセルフサービスのカフェ。かつて帝国図書館だったれんがの建物に、ガラスの新しい棟とテラス。食券を買い (現金のみ)、番号を呼ばれたらトレイを受け取り、1,000円を大きく下回る値段で食事ができます: 老舗の洋食店並みと口コミで評される550円のカレー、ナポリタン、700円の弁当風セット、コーヒー400円、ケーキセット650円。ランチは11:30からで昼前後は満席に近く、カレーは売り切れることも。月曜、祝日、第3水曜休み。2階の児童文学のギャラリーもおすすめ。',
  });
}

// ================================================================ らぁめん千寿 御徒町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13325775/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '21:00']);
  put({
    id: 'tokyo_ramen_senju_okachimachi', name: 'らぁめん千寿 御徒町店 (ramen senju)', category: 'OMNI',
    lat: 35.708359, lng: 139.773941, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: medium-thick curly wheat noodles in a miso, salt or soy-sauce soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soup sealed with lard, pork chashu, egg.',
    hours_raw: 'Daily 11:00–21:00; closes when the soup sells out — check the shop\'s Instagram (Tabelog). No reservations. Long queues since opening: 1 hour 15 minutes at 11:30 in November 2026 (a reviewer suspected a TV feature); 14 outside and 5 inside at 13:30 in October 2026; shorter mid-afternoon. Ticket machine, then a waiting area inside. 14 counter seats. Non-smoking. No cards; transport IC and QR (PayPay, d Barai, au PAY, Alipay, WeChat Pay). No table charge. Children welcome. Opened 1 September 2026.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 4-chōme, 美濃里ビル 1F — 1 min from JR Okachimachi North Exit and Exit A5 of Ueno-Hirokoji / Ueno-Okachimachi Stns',
    cuisine: 'Sapporo miso ramen: the first Tokyo shop of ramen senju, founded in Sapporo in 2002 (Tabelog Hokkaido ramen 100 in 2024 and 2025); a rich miso soup stir-fried from over 30 ingredients, with curly medium-thick noodles made for the shop by Ichinobu Seimen, as the listing romanizes it (Tabelog) · menu (Tabelog, August 2026): miso ramen ¥1,100, with bean sprouts and ginger ¥1,250, chashu ¥1,500, special ¥1,600; the same four in salt and soy sauce · table seasonings: pepper, garlic, chilli oil, niboshi vinegar',
    website: 'https://olive423271.studio.site/', gmaps: gm('らぁめん千寿 上野4-2-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Okachimachi, Sapporo miso ramen with a queue] The first Tokyo branch of Senju, a Sapporo miso-ramen shop founded in 2002 and named in Tabelog's Hokkaido ramen 100 in 2024 and 2025, opened by Okachimachi Station in September 2026. Expect the Sapporo style: a rich, slightly salty miso soup sealed under a layer of lard so it stays hot, garlic and ginger, and springy curly noodles (miso ramen ¥1,100; with bean sprouts and ginger ¥1,250). Salt and soy-sauce versions too. Lines have been long — over an hour at lunch in November 2026, which a reviewer put down to a TV feature — and the shop closes when the soup runs out. A few reviewers found it milder or less hot than the Sapporo greats.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of ramen senju, founded in Sapporo, Hokkaido, in 2002; this shop opened 1 September 2026 (Tabelog).', background: 'Per an October 2026 review, the Sapporo original is run by a chef who trained at Sumire. No source names the chef in Okachimachi.', philosophy: 'Per the listing: a bowl you would want to eat every day.', specialty: 'Sapporo miso ramen.',
      anecdotes: [
        { text: '"After waiting for 1 hour and 15 minutes, I finally got my bowl. I ordered the regular Miso Ramen for JPY 1,100" — November 2026.', source: R + 'B535002783/' },
        { text: '"The surface was coated with oil, keeping the ramen hot until the very last bite" — October 2026, miso ramen.', source: R + 'B538299680/' },
        { text: '"Compared to other places like Oshima and San Tora, the miso, broth, and noodles are a bit weaker." — October 2026.', source: R + 'B538401025/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): らぁめん千寿 御徒町店、上野4-2-5 美濃里ビル 1F、JR御徒町駅北口・上野広小路駅A5出口・上野御徒町駅A5出口から徒歩1分、毎日11:00〜21:00 (スープがなくなり次第終了、公式Instagramで案内)、予約不可、14席 (カウンター)、禁煙、カード不可・交通系IC・QR可、チャージなし、2026年9月1日オープン、2002年札幌創業、ラーメン 百名店 北海道 2024・2025、30種以上の食材を炒めた味噌スープ、千寿専用の中太縮れ麺。メニュー (2026年8月): 味噌らーめん1,100円、もやし生姜1,250円、チャーシュー1,500円、特製1,600円、塩・醤油も同じ。口コミ (2026年10〜11月): 開店以来の行列、テレビで紹介後は1時間以上待ち、ラードでスープが冷めない、にんにくと生姜、札幌の本店はすみれで修業した店主、ほかの名店より穏やかという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B535002783/', R + 'B535238668/', R + 'B537468323/', R + 'B538281802/', R + 'B538290898/', R + 'B538299680/', R + 'B538330976/', R + 'B538332667/', R + 'B538401025/', R + 'B538502771/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; queue outside, then a waiting area; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-2-5 美濃里ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (opened 1 September 2026); reviews dated October–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目2番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B535002783/'],
    price_note: 'Prices from the Tabelog menu (updated August 2026, tax included); miso ramen ¥1,100 confirmed November 2026.', last_checked: TODAY, items: [
      it('', '', 'Miso ramen', '¥1,100', 'Miso', 'no', 'no', 'Tabelog menu August 2026; November 2026.', 'miso'),
      it('', '', 'Miso ramen with bean sprouts and ginger', '¥1,250', 'Miso', 'no', 'no', 'Tabelog menu August 2026; October 2026.', 'miso_moyashi'),
      it('', '', 'Miso chashu ramen', '¥1,500', 'Miso', 'no', 'no', 'Tabelog menu, August 2026.', 'miso_chashu'),
      it('', '', 'Special miso ramen', '¥1,600', 'Miso', 'no', 'no', 'Tabelog menu, August 2026.', 'miso_special'),
      it('', '', 'Salt ramen', '¥1,100', 'Salt', 'no', 'no', 'Tabelog menu, August 2026.', 'shio'),
      it('', '', 'Soy-sauce ramen', '¥1,100', 'Soy sauce', 'no', 'no', 'Tabelog menu, August 2026.', 'shoyu'),
    ] }, {
    cuisine: '札幌の味噌ラーメン: 2002年札幌創業の千寿の東京1号店 (食べログ ラーメン 百名店 北海道 2024・2025)。30種以上の食材を炒めた濃厚な味噌スープに、製麺所 (Ichinobu Seimen) が千寿のために作る中太の縮れ麺 (食べログ)・メニュー (食べログ、2026年8月): 味噌らーめん1,100円、もやし生姜1,250円、チャーシュー1,500円、特製1,600円。塩と醤油も同じ4種・卓上: こしょう、にんにく、ラー油、煮干し酢',
    neighborhood: '上野四丁目、美濃里ビル 1F。JR御徒町駅北口、上野広小路駅・上野御徒町駅A5出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。味噌、塩、醤油のスープに小麦の中太縮れ麺。',
    vegan_detail: 'ヴィーガンではありません。ラードでふたをしたスープ、豚のチャーシュー、卵。',
    notes: '[ラーメン・御徒町、行列の札幌味噌ラーメン] 2002年創業、食べログ ラーメン 百名店 北海道に2024年と2025年に選ばれた札幌の味噌ラーメン店、千寿の東京1号店で、2026年9月に御徒町駅前に開店。札幌らしく、ラードの層で熱々に保たれた濃厚でやや塩気のある味噌スープ、にんにくと生姜、弾力のある縮れ麺 (味噌らーめん1,100円、もやし生姜1,250円)。塩と醤油も。行列は長く、2026年11月の昼には1時間以上 (口コミではテレビの影響とも)。スープがなくなり次第終了。札幌の名店と比べて穏やか、熱さが足りないという声も。',
  });
}

// ================================================================ sardexka
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13196197/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:30', '23:00']);
  put({
    id: 'tokyo_sardexka_shitaya', name: 'sardexka', category: 'OMNI',
    lat: 35.719593, lng: 139.780899, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a set course of small vegetable and seafood dishes; no gluten-free statement, so tell the restaurant when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses include fish, octopus, Iberico pork and pork-blood spring rolls, and the paella is seafood.',
    hours_raw: 'Dinner Mon–Wed and Fri–Sun, holidays 18:30–23:00; closed Thursdays and some irregular days (Tabelog). Lunch on Wednesdays and Sundays by reservation (Tabelog menu, January 2026); reviewers had a Sunday paella lunch (November 2026) and a weekend lunch (August 2026). Reservations only — TableCheck, or message by SMS, email, Instagram or Facebook; the phone is not for inquiries. Courses start as each guest arrives (November 2026). 8 counter seats. Non-smoking. No children (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR. Opened 23 May 2016.',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shitaya 1-chōme, 竹内マンション 1F, on a quiet street between Uguisudani and Iriya — 5 min from JR Uguisudani South Exit or Iriya Stn',
    cuisine: 'Spanish and Basque cooking with seasonal Japanese ingredients ("sardexka" is Basque for fork, per the website); Tabelog Spanish 100 in 2024 and 2026 · dinner (Tabelog, January 2026): omakase of about 10 small dishes ¥9,000 or about 9 dishes ¥7,000; desserts and a closing dish extra · lunch courses ¥7,700, or ¥8,800 with dessert (August 2026); paella course ¥8,800 (November 2026) · dishes reviewers name: watermelon gazpacho, piquillo peppers, pisto, octopus with potatoes or beans, stuffed peppers, crisp sea bream, Hokkaido salmon, eggplant and pork-blood spring rolls, seafood paella, coffee blancmange · wine',
    website: 'http://www.sardexka.com', gmaps: gm('sardexka 下谷1-6-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Spanish · Uguisudani, an eight-seat Basque counter] A tiny counter restaurant on a quiet street between Uguisudani and Iriya, open since 2016 and in Tabelog's Spanish 100 for 2024 and 2026. The chef trained in the Basque Country and cooks small, gentle dishes from Japanese seasonal produce — piquillo peppers, pisto, tender octopus, crisp sea bream, salmon belly — in omakase courses of about nine or ten plates (¥7,000 or ¥9,000), with dessert extra. Lunch is on Wednesdays and Sundays by reservation; the lunch courses reviewers had ended with a generous seafood paella (about ¥8,800). Two people run it, the chef and one other; a November 2026 reviewer describes a husband-and-wife team. Reservations only, by TableCheck or message; no children.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 May 2016 (Tabelog)', background: 'Per an August 2026 review, the chef trained in the Basque region. Run by two people — the chef and a staff member (September 2026), described as a husband-and-wife team in November 2026. No source names the chef.', philosophy: 'Per the website: "日本の旬とスペインの香り" — Japanese seasonal ingredients with the aroma of Spain, cooked with a Japanese sensibility.', specialty: 'Omakase of small Basque-style dishes; paella.',
      anecdotes: [
        { text: '"The sauces crafted by the chef are truly artistic. Especially the citrus-based sauce, which perfectly balances acidity, bitterness, sweetness, and umami." — May 2026.', source: R + 'B502316433/' },
        { text: '"Although it was said to be Basque cuisine, it felt more like creative dishes using Japanese ingredients rather than traditional regional dishes." — September 2026, ¥7,000 course.', source: R + 'B537878163/' },
        { text: '"The final dish, paella, was quite generous in portion size, leaving me feeling full." — August 2026, ¥8,800 lunch course.', source: R + 'B534998343/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): sardexka、下谷1-6-7 竹内マンション 1F、JR鶯谷駅南口・入谷駅から徒歩5分、月火水金土日祝18:30〜23:00、木曜休み (ほか不定休)、完全予約制 (TableCheck、SMS、メール、Instagram・Facebook)、8席 (カウンター)、禁煙、子ども不可、カード可、2016年5月23日オープン、食べログ スペイン料理 百名店 2024・2026。メニュー (2026年1月): おまかせ約10品9,000円、約9品7,000円、ランチは水曜・日曜 (要予約)。公式サイト: バスク語でフォーク、日本の旬とスペインの香り。口コミ (2026年5〜11月): バスクで修業したシェフ、二人で営業 (11月の口コミでは夫婦)、ピキージョ、ピスト、タコ、鯛、鮭、なすと豚の血の春巻き、パエリアのランチコース8,800円、コースは来店順に始まる。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'http://www.sardexka.com', R + 'B234766243/', R + 'B502316433/', R + 'B532225810/', R + 'B532555202/', R + 'B533219112/', R + 'B534998343/', R + 'B535191819/', R + 'B535372100/', R + 'B537878163/', R + 'B538405940/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by TableCheck or message; the menu lists only ingredients (July 2026); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区下谷1-6-7 竹内マンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (Spanish 100, 2026); reviews dated May–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目6番7号 (go) 15m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B534998343/', R + 'B538405940/'],
    price_note: 'Dinner prices from the Tabelog menu (updated January 2026); lunch prices from August and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase (about 10 dishes)', '¥9,000', 'Dinner', 'ask', 'no', 'Tabelog menu, January 2026.', 'omakase_9000'),
      it('', '', 'Dinner omakase (about 9 dishes)', '¥7,000', 'Dinner', 'ask', 'no', 'Tabelog menu January 2026; September 2026.', 'omakase_7000'),
      it('', '', 'Lunch paella course', '¥8,800', 'Lunch', 'ask', 'no', 'August and November 2026; ¥7,700 without dessert (August 2026).', 'paella_course'),
    ] }, {
    cuisine: '日本の旬の食材で作るスペイン・バスク料理 (サイトによると「sardexka」はバスク語でフォーク)。食べログ スペイン料理 百名店 2024・2026・夜 (食べログ、2026年1月): 約10品のおまかせ9,000円、約9品7,000円、デザートとシメは追加・昼のコース7,700円、デザート付き8,800円 (2026年8月)、パエリアのコース8,800円 (2026年11月)・口コミに出てくる料理: すいかのガスパチョ、ピキージョ、ピスト、タコとじゃがいもや豆、ピーマンの詰め物、カリッと焼いた鯛、北海道の鮭、なすと豚の血の春巻き、魚介のパエリア、コーヒーのブランマンジェ・ワイン',
    neighborhood: '下谷一丁目、竹内マンション 1F、鶯谷と入谷の間の静かな通り。JR鶯谷駅南口・入谷駅から徒歩5分',
    gf_detail: 'グルテンフリーは要確認。野菜と魚介の小皿のおまかせコース。グルテンフリーの説明はないので予約時に伝えて。',
    vegan_detail: 'ヴィーガンではありません。コースに魚、タコ、イベリコ豚、豚の血の春巻きがあり、パエリアは魚介。',
    notes: '[スペイン料理・鶯谷、8席のバスクのカウンター] 鶯谷と入谷の間の静かな通りにある小さなカウンターの店で、2016年から。食べログ スペイン料理 百名店に2024年と2026年に選出。バスクで修業したシェフが、日本の旬の食材でやさしい小皿を作ります: ピキージョ、ピスト、やわらかいタコ、カリッと焼いた鯛、鮭のハラスなど。おまかせは約9品か10品 (7,000円か9,000円)、デザートは別。昼は水曜と日曜で要予約。口コミの昼のコースは、たっぷりの魚介のパエリアで締めくくり (約8,800円)。シェフともう一人の二人で営業し、2026年11月の口コミでは夫婦とのこと。完全予約制 (TableCheck かメッセージ)、子どもは不可。',
  });
}

save();
