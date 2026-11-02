// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 14.
//   + 鶏白湯ラーメン 鳥ぶし Toribushi (halal-concept chicken-paitan ramen; researched in place of tokyo3__219) — no ramen block
//   + 歳歳紅 Saisai Kou (Hunan rice-noodle shop by Okachimachi North Exit; opened January 2025)
//   + 博多 からくさや Hakata Karakusaya (Hakata motsunabe and grilled ramen izakaya, Higashi-Ueno back street)
// Skipped (see skip()): あいだや 13288181 — same brand as あいだや２ (tokyo_aidayatsu_ueno, in data); coordinator review 2026-11-02.
// Chain check (with Greg's 2026-11-02 rulings).
//   Toribushi, Saisai Kou: one shop each found. Karakusaya: a May 2026 review calls it related to Hakata "KENZO cafe", which
//   opened in Ryogoku and later moved here — the same shop's lineage, not a second branch.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address except the hidden placeholder tokyo3__219 (鳥ぶし), researched
//   in place. Toribushi shares 上野6-1-6 (御徒町グリーンハイツ) with KHANA KHAJA (tokyo_khana_khaja_okachimachi) and the hidden
//   placeholder tokyo3__232 (心洗庵); its Tabelog point is 29 m from KHANA KHAJA, so no offset needed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13288181', 'same-concept branch of a brand in data: あいだや and あいだや２ are the same brand (Koike group), and あいだや２ is already in data as tokyo_aidayatsu_ueno.');

// ================================================================ 鶏白湯ラーメン 鳥ぶし (in place of tokyo3__219)
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13279450/'; const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/spots/243941/';
  const D = day(['11:00', '21:30']);
  put({
    id: 'tokyo3__219', name: '鶏白湯ラーメン 鳥ぶし (Toripaitan Ramen Toribushi)', category: 'OMNI',
    lat: 35.7082, lng: 139.776128, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in chicken broth; side dishes include gyoza and karaage.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-paitan broth with chicken chashu, chicken soboro and egg.',
    hours_raw: 'Daily 11:00–21:30 (last order); no fixed closing day (san-tatsu, November 2023). Tabelog lists no hours. Reviews in 2026 found it open at weekday lunch and from 17:30. No reservations. Tickets from a machine; Tabelog says no cards, e-money or QR, while a July 2026 diner found the machine cash only but QR payment possible by asking staff at the back. Counter seating; strollers and a children\'s menu (May 2026). English menu (Tabelog). Non-smoking. Opened 28 November 2022.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 6-chōme, 御徒町グリーンハイツ 106, near the Kasuga-dōri and Shōwa-dōri crossing — 2–4 min from JR Okachimachi; 1 min from Naka-Okachimachi',
    cuisine: 'Chicken-paitan ramen with the concept "chicken paitan ramen for halal diners", made so Muslims can eat it (san-tatsu, 2023) · July 2026 menu: toripaitan ramen ¥1,080 (¥980 in February 2026), seasoned-egg ¥1,280, chashu ¥1,480, coriander ¥1,480; an all-toppings bowl about ¥600 more (April 2026) · spicy red chicken ramen with chilli oil and doubanjiang; coriander can be swapped for green onion; chicken-dashi rice cooked with the chicken chashu; chicken gyoza and karaage (san-tatsu, 2023) · toppings: chicken chashu, chicken soboro, wood-ear mushroom, mitsuba (March 2026)',
    website: null, gmaps: gm('鶏白湯ラーメン 鳥ぶし 上野6-1-6'), menu_url: null,
    notes: "[Ramen · Okachimachi, halal chicken-paitan ramen] A small ramen shop near Okachimachi Station built around one idea: chicken paitan ramen that Muslim diners can eat. The broth is lighter and clearer than most paitan — gentle but full of chicken flavour — topped with tender chicken chashu, soboro, wood-ear mushroom and mitsuba (¥1,080 in July 2026; ¥1,280 with egg). There is also a spicy red version, chicken-dashi rice, gyoza and karaage. Many diners and staff are from overseas (2026 reviews). Reviews in 2026 are split: some loved the clean broth and family-friendly welcome (strollers, a children's menu), while others in September and October 2026 found it too weak and the chicken dry. Buy a ticket at the cash machine, or ask staff about QR payment.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 November 2022 (Tabelog)', background: 'Concept per san-tatsu (November 2023): 「鶏白湯らーめんをハラルの方々に」 — chicken paitan ramen for halal diners. Several 2026 reviewers describe it as halal-certified; no source names a certifying body. A May 2026 review mentions gyoza and beer on the menu. No source names the owner or cooks.', philosophy: 'Chicken paitan ramen that Muslims can eat (san-tatsu, 2023).', specialty: 'Toripaitan ramen.',
      anecdotes: [
        { text: '"Unlike the typical rich and thick varieties, the broth here has a slightly clearer appearance, with a gentle flavor that allows the chicken\'s umami to shine through." — May 2026.', source: R + 'B528708484/' },
        { text: '"The broth was rich with high-quality chicken fat and deep flavors." — April 2026, egg-topped toripaitan ¥1,280.', source: R + 'B526177564/' },
        { text: '"The flavor was simply too weak and not delicious at all" — October 2026.', source: R + 'B537497620/' },
        { text: '"It mentioned that QR code payments were accepted, but it turned out to be cash only." — July 2026 (QR payment was then handled by staff at the back).', source: R + 'B531712938/' },
      ],
      japanese_sources_summary: '食べログ: 鶏白湯ラーメン 鳥ぶし、上野6-1-6 御徒町グリーンハイツ 1F、仲御徒町駅から86m、予約不可、カード・電子マネー・QR不可、カウンター席、禁煙、英語のメニュー、2022年11月28日オープン (営業時間の記載なし)。さんたつ (2023年11月1日): 「鶏白湯らーめんをハラルの方々に」というコンセプトで、ムスリムが食べられる鶏白湯のハラルラーメン、ラー油や豆板醤の鶏赤湯らーめん、パクチーはネギに変更可、鶏チャーシューと炊いた鳥ダシご飯、鶏餃子、唐揚げ、営業時間11:00〜21:30LO、定休日なし、住所は御徒町グリーンハイツ106、JR御徒町駅から徒歩4分。口コミ (2026年2〜10月): 鶏白湯ラーメン1,080円 (2月は980円)、味玉1,280円、チャーシュー・パクチー1,480円、券売機は現金のみでQR決済は奥で、ベビーカー可・子どもメニュー、ハラール認証という声、2026年9〜10月には味が薄いという声も。',
      confidence: 'medium', sources: [TB, ST, R + 'B523029883/', R + 'B523468183/', R + 'B526177564/', R + 'B526452772/', R + 'B528708484/', R + 'B529319737/', R + 'B531712938/', R + 'B537497620/', R + 'B538070967/', R + 'B538485228/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; ticket machine; many overseas diners and staff from abroad.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-1-6 御徒町グリーンハイツ 106',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目1番6号 (go) 32m; same building as tokyo_khana_khaja_okachimachi (29 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531712938/', R + 'B526177564/'],
    price_note: 'Prices from the July 2026 ticket machine as a reviewer listed them (tax included).', last_checked: TODAY, items: [
      it('', '', 'Toripaitan ramen', '¥1,080', 'Ramen', 'no', 'no', 'July 2026; ¥980 in February 2026.', 'toripaitan'),
      it('', '', 'Seasoned-egg toripaitan ramen', '¥1,280', 'Ramen', 'no', 'no', 'April and July 2026.', 'ajitama_toripaitan'),
      it('', '', 'Chashu toripaitan ramen', '¥1,480', 'Ramen', 'no', 'no', 'July 2026.', 'chashu_toripaitan'),
      it('', '', 'Coriander toripaitan ramen', '¥1,480', 'Ramen', 'no', 'no', 'July 2026.', 'pakuchi_toripaitan'),
    ] }, {
    cuisine: 'ムスリムが食べられるように作る「鶏白湯らーめんをハラルの方々に」というコンセプトの鶏白湯ラーメン (さんたつ、2023年)・2026年7月のメニュー: 鶏白湯ラーメン1,080円 (2026年2月は980円)、味玉1,280円、チャーシュー1,480円、パクチー1,480円。全部のせは約600円増し (2026年4月)・ラー油と豆板醤の辛い鶏赤湯らーめん、パクチーはネギに変更可、鶏チャーシューと炊いた鳥ダシご飯、鶏餃子、唐揚げ (さんたつ、2023年)・具: 鶏チャーシュー、鶏そぼろ、きくらげ、三つ葉 (2026年3月)',
    neighborhood: '上野六丁目、御徒町グリーンハイツ 106、春日通りと昭和通りの交差点近く。JR御徒町駅から徒歩2〜4分、仲御徒町駅から1分',
    gf_detail: 'グルテンフリーではありません。鶏のスープに小麦の麺。サイドは餃子や唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のスープに鶏チャーシュー、鶏そぼろ、卵。',
    notes: '[ラーメン・御徒町、ハラールの鶏白湯ラーメン] 御徒町駅近くの小さなラーメン店で、ムスリムも食べられる鶏白湯ラーメンというひとつの考えから生まれた店。スープは一般的な鶏白湯より軽く澄んでいて、やさしいながら鶏の旨味たっぷり。鶏チャーシュー、そぼろ、きくらげ、三つ葉をのせて1,080円 (2026年7月)、味玉付き1,280円。辛い赤いスープ、鳥ダシご飯、餃子、唐揚げも。客もスタッフも海外出身の人が多い (2026年の口コミ)。2026年の口コミは分かれ、澄んだスープや家族連れへの歓迎 (ベビーカー可、子どもメニュー) をほめる声がある一方、2026年9〜10月には味が薄い、鶏がぱさつくという声も。券売機は現金で、QR決済はスタッフに相談を。',
  });
}

// ================================================================ 歳歳紅
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13305994/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'tokyo_saisai_kou_okachimachi', name: '歳歳紅 (Saisai Kou)', category: 'OMNI',
    lat: 35.708248, lng: 139.775345, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: the noodles are rice vermicelli (mifen), but the stir-fries and stews are sauced and not described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: nearly every dish is pork, beef, offal, gizzard or seafood; a May 2026 diner swapped meat for egg on request; no vegan dish is named.',
    hours_raw: 'Daily 11:00–22:00 (last order 21:30), including holidays (Tabelog). Reservations taken. Order by QR code on your phone (2026 reviews); Japanese and Chinese menus. 14 seats (8 at the counter, 3 tables for two). Non-smoking. No cards or e-money; QR payment (PayPay, Alipay, WeChat Pay). Take-out; leftovers can be taken home (May 2026). Opened 23 January 2025.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 6-chōme, タイガービル6 1F・2F, at the edge of Ameyoko — 1 min from JR Okachimachi North Exit; 2 min from Ueno-Okachimachi',
    cuisine: 'Hunan rice-noodle (mifen) specialist: stir-fries and stews over wide or thin rice noodles, soupy or dry-mixed, or over rice (Tabelog; reviews) · menu (Tabelog, February 2025): spicy beef stew rice noodles ¥1,518, pork belly and chilli ¥1,518, braised pork trotters ¥1,408, shredded pork ¥1,078, pork offal and chilli ¥1,518, spicy-sour gizzard ¥1,408, squid and spare-rib stew ¥1,518; extra noodles ¥220 · 2026 reviews: cheapest bowl ¥680 with noodle refills (May 2026); Hunan spicy beef noodle soup ¥1,500, rice milk ¥300 (August 2026); home-style pork liver and gizzard; five-ingredient tofu with pork belly; farmer\'s bowl · free condiment station (chilli oil, pickles, black vinegar)',
    website: null, gmaps: gm('歳歳紅 上野6-3-13'), menu_url: TB + 'dtlmenu/',
    notes: "[Hunan rice noodles · Okachimachi, spicy mifen by the North Exit] A small Hunan rice-noodle shop a minute from Okachimachi Station's North Exit, at the Ameyoko end, open 11:00–22:00 every day and busy at night mostly with Chinese diners. Order on your phone by QR code: choose a topping — pork belly with fresh chilli, beef stew, pork offal, sour-spicy gizzard, braised trotters — then wide or thin rice noodles, in soup or dry-mixed, or rice instead. The heat is the sharp, sour fresh-chilli kind rather than Sichuan numbing, and a self-serve station adds more. Most bowls are about ¥1,000–1,500; a May 2026 diner found a ¥680 bowl with noodle refills. Pay by QR only (no cards). Service can be slow and the condiment jars were empty one June 2026 night.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 January 2025 (Tabelog)', background: 'Tabelog official listing ("Hunan Mi Fun Specialty Shop"); Chinese-speaking staff. No source names the owner or cooks.', philosophy: null, specialty: 'Hunan rice noodles (mifen).',
      anecdotes: [
        { text: '"I prefer the sharp spiciness of Hunan\'s fresh chili and sour flavors over the numbing heat of Sichuan… The taste is just like what you\'d find locally!" — July 2026, wide rice noodles.', source: R + 'B532612526/' },
        { text: '"I went for the most affordable menu item at JPY 680! You can get a refill on the noodles" — May 2026.', source: R + 'B527994698/' },
        { text: '"I was able to request a change from meat to egg by writing it down, and I could take home what I couldn\'t finish." — May 2026, farmer\'s bowl.', source: R + 'B527672154/' },
        { text: '"Despite the simplicity of just boiling the noodles and adding the broth, the service speed was surprisingly slow" — August 2026, Hunan spicy beef noodle soup ¥1,500.', source: R + 'B534644339/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 歳歳紅、湖南米粉の専門店、上野6-3-13 タイガービル6 1F・2F、JR御徒町駅北口から徒歩1分、上野御徒町駅から2分、毎日11:00〜22:00 (L.O.21:30)、予約可、14席 (カウンター8、2人用テーブル3)、禁煙、カード・電子マネー不可、QR決済 (PayPay、Alipay、WeChat Pay)、テイクアウト、中国語のメニューとスタッフ、2025年1月23日オープン。メニュー (2025年2月): 牛肉煮込み米線1,518円、豚バラと唐辛子炒め1,518円、豚足煮込み1,408円など、太麺か細麺、麺追加220円。口コミ (2025年9月〜2026年8月): QRコードで注文、汁ありと汁なし、ご飯にも変更可、680円の一番安い品は麺のおかわり可、無料のトッピング、夜は中国の客が多い、提供が遅い日も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B513022365/', R + 'B527672154/', R + 'B527861326/', R + 'B527994698/', R + 'B529177183/', R + 'B530045922/', R + 'B532091202/', R + 'B532612526/', R + 'B532648421/', R + 'B534644339/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone; Japanese menu can be confusing (June 2026); Chinese-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-3-13 タイガービル6 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目3番13号 (go) 4m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B527994698/', R + 'B534644339/'],
    price_note: 'Prices from the Tabelog menu (updated February 2025, tax included); 2026 reviews mention a ¥680 bowl and spicy beef noodle soup at ¥1,500.', last_checked: TODAY, items: [
      it('', '', 'Spicy beef stew rice noodles (wide or thin)', '¥1,518', 'Rice noodles', 'ask', 'no', 'Tabelog menu, February 2025.', 'beef_mifen'),
      it('', '', 'Stir-fried pork belly and chilli rice noodles', '¥1,518', 'Rice noodles', 'ask', 'no', 'Tabelog menu, February 2025.', 'pork_chilli_mifen'),
      it('', '', 'Braised pork trotter rice noodles', '¥1,408', 'Rice noodles', 'ask', 'no', 'Tabelog menu, February 2025.', 'trotter_mifen'),
      it('', '', 'Stir-fried shredded pork rice noodles', '¥1,078', 'Rice noodles', 'ask', 'no', 'Tabelog menu, February 2025.', 'shredded_pork_mifen'),
      it('', '', 'Spicy-sour gizzard rice noodles', '¥1,408', 'Rice noodles', 'ask', 'no', 'Tabelog menu, February 2025.', 'gizzard_mifen'),
      it('', '', 'Extra rice noodles', '¥220', 'Rice noodles', 'ask', 'ask', 'Tabelog menu, February 2025.', 'extra_mifen'),
      it('', '', 'Rice milk', '¥300', 'Drinks', 'ask', 'ask', 'August 2026.', 'rice_milk'),
    ] }, {
    cuisine: '湖南の米粉 (ミーフェン) の専門店: 炒め物や煮込みを太いか細い米粉に、汁ありか汁なしで、またはご飯に (食べログ、口コミ)・メニュー (食べログ、2025年2月): 牛肉煮込み米粉1,518円、豚バラと唐辛子1,518円、豚足の煮込み1,408円、細切り豚肉1,078円、豚ホルモンと唐辛子1,518円、砂肝の酸辣1,408円、イカとスペアリブの煮込み1,518円、麺の追加220円・2026年の口コミ: 一番安い680円の品は麺のおかわり可 (2026年5月)、湖南の辛い牛肉麺1,500円、ライスミルク300円 (2026年8月)、豚レバーと砂肝の家庭風、具だくさんの豆腐と豚バラ、農家の丼・無料の薬味コーナー (ラー油、漬物、黒酢)',
    neighborhood: '上野六丁目、タイガービル6 1F・2F、アメ横のはずれ。JR御徒町駅北口から徒歩1分、上野御徒町駅から2分',
    gf_detail: 'グルテンフリーは要確認。麺は米粉 (ミーフェン) ですが、炒め物や煮込みのたれにグルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。ほぼすべてが豚、牛、ホルモン、砂肝、魚介。2026年5月には頼んで肉を卵に替えてもらった人も。ヴィーガンの料理名はありません。',
    notes: '[湖南米粉・御徒町、北口の辛いミーフェン] JR御徒町駅北口から1分、アメ横の端にある小さな湖南の米粉の店で、毎日11:00〜22:00営業、夜は中国の客が中心でにぎわいます。スマホでQRコードから注文: 具を選び (豚バラと生唐辛子、牛肉の煮込み、豚ホルモン、酸っぱ辛い砂肝、豚足の煮込みなど)、太いか細い米粉を汁ありか汁なしで、またはご飯に。辛さは四川のしびれではなく、生唐辛子と酸味のキレのある辛さで、セルフの薬味コーナーでさらに足せます。ほとんどの丼は約1,000〜1,500円、2026年5月には麺のおかわりができる680円の品も。支払いはQRのみ (カード不可)。提供が遅いことも、2026年6月の夜には薬味の容器が空だったという声も。',
  });
}

// ================================================================ 博多 からくさや
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13209813/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_hakata_karakusaya_higashiueno', name: '博多 からくさや (Hakata Karakusaya)', category: 'OMNI',
    lat: 35.709099, lng: 139.781601, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce from Fukuoka is used throughout, the signature grilled ramen and Hakata ramen are wheat noodles, and the motsunabe ends with noodles; chicken nanban and chicken tempura are battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-offal hot pot, sesame mackerel, offal sashimi, chicken and cod roe; the side vegetables (spicy miso cucumber, lotus root, takana) are not described.',
    hours_raw: 'Lunch 11:30–14:00 daily (until sold out). Dinner: Mon–Fri and the day before a holiday 17:30–23:00 (last order 22:30); Sat 17:00–22:00 (last order 21:30); Sun and holidays 17:00–21:00 (last order 20:30); dinner may end early (Tabelog). Reservations taken. At dinner it is a drinking place: eating only is not allowed (Tabelog), one drink minimum (May 2026), and an April 2026 diner met a two-dishes-per-person rule. Children not accepted (Tabelog). 36 seats at tables; parties of about 40. Smoking: electronic cigarettes only inside; paper cigarettes outside the entrance. Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['11:30', '14:00'], ['17:00', '22:00']), 6: day(['11:30', '14:00'], ['17:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 2-chōme, 岩原ビル 1F, a back street between Shin-Okachimachi and Inaricho — 5 min from either; 10 min from JR Ueno',
    cuisine: 'Hakata cooking from an owner who ran a yatai in Hakata, with soy sauce brought from Fukuoka (Tabelog) · menu (Tabelog, May 2026): motsunabe ¥1,850 per person (from one person), grilled wagyu horumon ¥1,680, charcoal-grilled Hakata chicken ¥1,700, goma saba (sesame mackerel) ¥1,190, seared mackerel ¥1,190, chicken liver sashimi ¥910, vinegared offal ¥590, Miyazaki chicken nanban ¥990, Oita chicken tempura ¥920, mentaiko ¥870, spicy lotus root ¥880 · signature grilled ramen (yaki ramen) ¥980: thin Hakata noodles fried on a sizzling iron plate with vegetables, meat, raw egg and Baby Star snacks; Hakata ramen ¥980 · lunch sets: grilled ramen ¥900, chicken nanban, goma saba rice bowl (2026 reviews) · shochu by the bottle with mixers; all-you-can-drink',
    website: null, gmaps: gm('博多 からくさや 東上野2-5-16'), menu_url: TB + 'dtlmenu/',
    notes: "[Hakata izakaya · Higashi-Ueno, motsunabe and sizzling grilled ramen] A casual Hakata-style izakaya on a quiet back street between Shin-Okachimachi and Inaricho, run by an owner who once had a yatai stall in Hakata and uses soy sauce from Fukuoka. At night the draws are garlicky beef-offal motsunabe (¥1,850 a head, ending with noodles), goma saba sesame mackerel, vinegared offal and Kyushu chicken dishes, with shochu by the bottle — it is a drinking place after dark, with a drink minimum and no children. At lunch, local workers come for the signature grilled ramen: thin Hakata noodles seared on a hot iron plate with an egg and crunchy Baby Star bits, best with spicy miso mayonnaise and pickled ginger (about ¥900–980). Reviews disagree on its history: a July 2026 review says it was founded in 2009 and has been here over 15 years; a May 2026 review links it to Hakata KENZO cafe, opened around 2010 in Ryogoku and later moved here.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Founded in 2009 and at this address for over 15 years per a July 2026 review; a May 2026 review says the related Hakata "KENZO cafe" opened around 2010 in Ryogoku and later moved here because the building was ageing.', background: 'Per the Tabelog listing (official information), the owner ran a yatai food stall in Hakata. No source names the owner.', philosophy: 'Per the listing: "Bringing you the flavors of Hakata, even better than in Hakata!"', specialty: 'Motsunabe; grilled ramen; goma saba.',
      anecdotes: [
        { text: '"The noodles were served on a teppan with what looked like Baby Star? and a raw egg on top. It may look like yakisoba, but the flavor is definitely ramen." — February 2026, grilled ramen lunch.', source: R + 'B528870062/' },
        { text: '"The Motsunabe was rich and flavorful with a strong garlic taste, which was delicious." — February 2026.', source: R + 'B522657506/' },
        { text: '"In particular, the rule of ordering two dishes per person seemed to create a slight dissonance with my stomach\'s condition at that moment" — April 2026.', source: R + 'B527344264/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 博多 からくさや、東上野2-5-16 岩原ビル 1F、稲荷町駅・新御徒町駅から徒歩5分、JR上野駅から10分、ランチ毎日11:30〜14:00 (売り切れ次第終了)、夜は月〜金と祝前日17:30〜23:00、土17:00〜22:00、日祝17:00〜21:00、予約可、夜の食事のみの利用は不可、子ども不可、36席 (テーブル)、電子タバコのみ店内可、カード・電子マネー・PayPay可、博多で屋台をしていた店主、福岡の醤油。メニュー (2026年5月): もつ鍋1,850円 (一人前から)、和牛ホルモン焼き1,680円、ごまさば1,190円、酢もつ590円、チキン南蛮990円、焼きラーメン980円、博多ラーメン980円など。口コミ (2025年12月〜2026年7月): 焼きラーメンにベビースターと生卵、辛子味噌マヨと紅しょうが、ランチは近くの会社員、夜は1ドリンク制、一人2品の決まり、2009年創業でここで15年以上という声と、両国の KENZO cafe の流れで移転したという声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B483802647/', R + 'B511281890/', R + 'B518848083/', R + 'B522657506/', R + 'B527344264/', R + 'B528870062/', R + 'B529029803/', R + 'B530853601/', R + 'B532403777/', R + 'B533222542/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual izakaya; drink minimum and a two-dishes-per-person rule at night; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野2-5-16 岩原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated May 2026); reviews dated December 2025–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野二丁目5番16号 (go) 8m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B529029803/'],
    price_note: 'Prices from the Tabelog menu (updated May 2026, tax included); lunch grilled ramen ¥900 (May 2026).', last_checked: TODAY, items: [
      it('', '', 'Motsunabe (beef offal hot pot), per person', '¥1,850', 'Hot pot', 'no', 'no', 'Tabelog menu, May 2026; from one person.', 'motsunabe'),
      it('', '', 'Grilled ramen (yaki ramen)', '¥980', 'Noodles', 'no', 'no', 'Tabelog menu May 2026; lunch regular ¥900.', 'yaki_ramen'),
      it('', '', 'Hakata ramen', '¥980', 'Noodles', 'no', 'no', 'Tabelog menu, May 2026.', 'hakata_ramen'),
      it('', '', 'Goma saba (sesame mackerel)', '¥1,190', 'Hakata dishes', 'no', 'no', 'Tabelog menu, May 2026.', 'goma_saba'),
      it('', '', 'Vinegared offal (su-motsu)', '¥590', 'Hakata dishes', 'ask', 'no', 'Tabelog menu, May 2026.', 'sumotsu'),
      it('', '', 'Miyazaki chicken nanban', '¥990', 'Hakata dishes', 'no', 'no', 'Tabelog menu, May 2026.', 'chicken_nanban'),
      it('', '', 'Mentaiko (spicy cod roe)', '¥870', 'Hakata dishes', 'ask', 'no', 'Tabelog menu, May 2026.', 'mentaiko'),
      it('', '', 'Spicy miso cucumber or cabbage', '¥420', 'Sides', 'ask', 'ask', 'Tabelog menu, May 2026.', 'miso_kyuri'),
    ] }, {
    cuisine: '博多で屋台をしていた店主による博多料理、醤油は福岡から (食べログ)・メニュー (食べログ、2026年5月): もつ鍋 一人前1,850円 (一人から)、和牛ホルモン焼き1,680円、博多地鶏の炭火焼き1,700円、ごまさば1,190円、炙りさば1,190円、鶏レバー刺し910円、酢もつ590円、宮崎チキン南蛮990円、大分とり天920円、明太子870円、辛子れんこん880円・名物の焼きラーメン980円: 細い博多麺を熱い鉄板で野菜、肉、生卵、ベビースターと焼いたもの。博多ラーメン980円・ランチのセット: 焼きラーメン900円、チキン南蛮、ごまさば丼 (2026年の口コミ)・焼酎のボトルと割り材、飲み放題',
    neighborhood: '東上野二丁目、岩原ビル 1F、新御徒町と稲荷町の間の裏通り。どちらの駅からも徒歩5分、JR上野駅から10分',
    gf_detail: 'グルテンフリーではありません。福岡の醤油を全体に使い、名物の焼きラーメンと博多ラーメンは小麦の麺、もつ鍋のシメも麺。チキン南蛮ととり天は衣付き。',
    vegan_detail: 'ヴィーガンではありません。牛ホルモンの鍋、ごまさば、ホルモンの刺身、鶏、明太子。副菜の野菜 (辛子味噌きゅうり、れんこん、高菜) の説明はありません。',
    notes: '[博多居酒屋・東上野、もつ鍋とじゅうじゅうの焼きラーメン] 新御徒町と稲荷町の間の静かな裏通りにある気軽な博多居酒屋で、博多で屋台をしていた店主が福岡の醤油を使って作ります。夜の目当てはにんにくの効いた牛ホルモンのもつ鍋 (一人1,850円、シメは麺)、ごまさば、酢もつ、九州の鶏料理で、焼酎はボトルで。夜は飲む店で、ドリンクの注文が必要、子どもは不可。昼は近くで働く人が名物の焼きラーメンに集まります: 細い博多麺を熱い鉄板で焼き、卵とサクサクのベビースターをのせ、辛子味噌マヨと紅しょうがで (約900〜980円)。歴史は口コミで食い違い、2026年7月の口コミは2009年創業でここで15年以上、2026年5月の口コミは2010年ごろ両国で開いた博多 KENZO cafe の流れで、のちに移転したとしています。',
  });
}

save();
