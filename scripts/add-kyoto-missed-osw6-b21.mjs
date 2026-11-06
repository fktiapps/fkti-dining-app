// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 21.
//   + お好み焼き 鉄板焼 OAGARI (creative teppanyaki with rice-flour okonomiyaki and wine, Kawaramachi Sanjo)
//   + 炭火やきとり隠れ家 呑んべゑ Sumibi Yakitori Kakurega Nonbee (late-night yakitori counter, Gion)
//   + 出町ろろろ Demachi Rororo (obanzai bento lunches of Ohara vegetables, Demachi)
//   + 鮨おおが東山 Sushi Ooga Higashiyama (Sakai's Sushi Ooga, second shop, inside Six Senses Kyoto)
//   - skip 26007556 万豚記 京都 錦小路店 (chain)
//   - skip 26039998 Nippon Ramen 凛 離れ (brand already in data)
//   Same-name counts first (2026-11-05): 万豚記 — Tabelog lists Wan Tsu Chi shops in Sapporo, Yokohama, Tokyo (Gakugeidaigaku,
//   Akihabara, Sangenjaya, Kunitachi), Hiroshima and Kyoto: 5+ → chain. Nippon Ramen 凛 — 3 (KYOTO, Tokyo, 離れ); KYOTO is in data.
//   OAGARI — the okonomiyaki shop plus Wagyu Kazan Oagari Gion and Arashiyama honten on Tabelog (a small group; neither wagyu shop
//   is in data under that name), drafted as a sister concept. 呑んべゑ — one in central Kyoto (two other "Nonbee" in other areas
//   are unrelated). ろろろ — one in Kyoto. 鮨おおが — two: Sushi Ooga in Sakai, Osaka, and this Kyoto shop; a small group.
//   Six Senses Kyoto has no hotel record in data.
//   Taken on 2026-11-05: `next core 200` gave 万豚記 (skip), 凛 離れ (skip), OAGARI 26043958 and 呑んべゑ 26033572;
//   `next notable 200` gave 出町ろろろ 26005648 and 鮨おおが東山 26041138. None is in data/kyoto.json: grep by name and address
//   (恵比須町442-1, 祇園町北側347-118, 一真町67-1, 妙法院側町431) found none. 呑んべゑ shares lot 347-118 with kyoto_gion_endo.
//   Service charges per Tabelog's Japanese original: OAGARI 「サービス料（お通し）あり 495円税込」; 呑んべゑ 「330」;
//   ろろろ and おおが none listed.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26007556', 'chain: Tabelog search for 万豚記 (https://tabelog.com/en/rstLst/?sw=万豚記) lists Wan Tsu Chi shops in Sapporo, Yodobashi Yokohama, Gakugeidaigaku, Yodobashi Akiba, Sangenjaya, Kunitachi, Hiroshima Motomachi and this Kyoto Nishikikoji shop — 5+.');
skip('26039998', 'brand already in data: Nippon Ramen 凛 KYOTO is in data ("Nippon Ramen 凛 KYOTO (Nippon Ramen Rin Kyoto)"); Tabelog lists Japan Ramen Rin KYOTO, Rin Tokyo and this Hanare (https://tabelog.com/en/rstLst/?sw=Nippon%20Ramen%20凛).');

// ================================================================ OAGARI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043958/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_oagari_teppan', name: 'お好み焼き 鉄板焼 OAGARI', category: 'OMNI',
    lat: 35.009174, lng: 135.769621, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature "French Maiko" okonomiyaki is made with rice flour and dashi — a June 2026 diner called it gluten-free — but wheat yakisoba is cooked on the same teppan and sauces are used throughout (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the rice-flour batter uses dashi, and most dishes have meat, seafood, egg or cheese (2026 reviews).',
    hours_raw: '17:00–23:00 (last orders food 22:00, drinks 22:30); closed Thursday and 26 December–4 January (Tabelog). Reservations accepted (Tabelog). Table charge with an appetizer ¥495 (Tabelog, Japanese text: 「サービス料（お通し）あり 495円税込」). 18 seats: 6 at the counter facing the teppan, 3 tables; private hire up to 20 (Tabelog). Cards, IC cards, e-money and QR (Tabelog). On the ground floor at the back of a building in a back street near Sanjo Kiyamachi; 3 min from Kyoto Shiyakusho-mae Stn, 4 min from Sanjo Stn (Tabelog; June 2026). Opened 3 December 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo Kiyamachi — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Creative teppanyaki built on rice-flour okonomiyaki, with wine chosen by a sommelier (Tabelog, shop text) · signature "French Maiko" rice-flour okonomiyaki with a cheese sauce and egg yolk ¥1,980 (June 2026) · squid-ink and Parmigiano black yakisoba ¥1,800–1,880, shiso-basil Genovese yakisoba, tonpei kimchi cheese tartare-yaki ¥1,180, seafood bakudan-yaki ¥2,480 (May–October 2026) · beef heart carpaccio, beef carpaccio ¥1,580, octopus carpaccio ¥1,080, yellowfin tartare ¥980, French-style daikon oden ¥480, sea urchin dashimaki, duck steak with sage red-wine sauce, wagyu steak (2026 reviews) · Japanese and imported wines from ¥800 a glass, a three-sake tasting ¥1,980 (May–June 2026)',
    website: null, gmaps: gm('OAGARI お好み焼き 鉄板焼 三条'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki & teppan · Sanjo Kiyamachi, French twists with wine] A bar-like teppan counter tucked behind a building near Sanjo Kiyamachi, opened in December 2025 and sharing its name with the Wagyu Kazan Oagari shops. The rice-flour \"French Maiko\" okonomiyaki comes under a cheese sauce and egg yolk, and the rest of the menu runs to squid-ink yakisoba, beef-heart carpaccio, French-style daikon oden and duck steak — all paired with wine. ¥495 table charge. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner and sommelier (unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a hidden dining spot built on rice-flour okonomiyaki and teppanyaki, with wine chosen by a sommelier; opened 3 December 2025. It shares the OAGARI name with the Wagyu Kazan Oagari shops in Gion and Arashiyama (Tabelog). A May 2026 diner praised the owner’s wine selection; a June 2026 diner noted Aesop soap and mouthwash in the restroom.',
      philosophy: null, specialty: 'French Maiko rice-flour okonomiyaki; black yakisoba.',
      anecdotes: [
        { text: 'An October 2026 diner was satisfied with taste and portions but would not call it the best value for money.', source: R + 'B537776628/' },
        { text: 'A June 2026 diner described the French Maiko as gluten-free, made with rice flour and dashi, creamy rather than fluffy.', source: R + 'B530562711/' },
        { text: 'An October 2026 traveller ranked it among the top five restaurants of recent years.', source: R + 'B538604689/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き、中京区恵比須町442-1 ル･シゼームビル 1F、京都市役所前駅から徒歩3分、三条駅から4分、17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、木曜休み、12月26日〜1月4日休み、予約可、サービス料 (お通し) 495円税込、18席 (カウンター6、テーブル3)、貸切20名まで、カード・電子マネー・QR 可、2025年12月3日オープン、米粉のお好み焼きと鉄板焼、ソムリエが選ぶワイン。口コミ (2026年5〜10月、英語): French Maiko1,980円、イカスミとパルミジャーノの黒焼きそば、Tonpei kimchi cheese tartare-yaki、牛ハツのカルパッチョ、フレンチ風の大根おでん、鴨のステーキ、日本酒3種飲み比べ1,980円、コスパは最高ではないという声。',
      confidence: 'medium', sources: [TB, R + 'B528495657/', R + 'B528515919/', R + 'B528622216/', R + 'B528832904/', R + 'B528832909/', R + 'B529342893/', R + 'B529387220/', R + 'B530063935/', R + 'B530562711/', R + 'B530668512/', R + 'B537776628/', R + 'B538604689/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; order à la carte; ¥495 table charge; cards, IC and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町442-1 ル･シゼームビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened December 2025; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009219, 135.769621); cross-checked: GSI 京都府京都市中京区恵比須町442番地 (lot) 10m; the Tabelog point sits 1.4 m from mp_tetsunabe_gyoza_to_osake, so moved 5 m south to 35.009174; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530063935/', R + 'B529387220/', R + 'B530668512/'],
    price_note: 'Prices from May–October 2026 reviews; ¥495 table charge with appetizer (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'French Maiko rice-flour okonomiyaki', '¥1,980', 'Okonomiyaki', 'ask', 'no', 'June 2026.', 'french_maiko'),
      it('', '', 'Squid-ink and Parmigiano black yakisoba', '¥1,880', 'Yakisoba', 'no', 'no', 'June 2026; ¥1,800 in another June 2026 review.', 'black_yakisoba'),
      it('', '', 'Tonpei kimchi cheese tartare-yaki', '¥1,180', 'Teppan', 'ask', 'no', 'June 2026.', 'tonpei_kimchi'),
      it('', '', 'Seafood bakudan-yaki', '¥2,480', 'Teppan', 'ask', 'no', 'June 2026.', 'bakudan_yaki'),
      it('', '', 'Table charge with appetizer', '¥495', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '米粉のお好み焼きを軸にした創作鉄板焼と、ソムリエが選ぶワイン (食べログの店の紹介)・名物「French Maiko」は米粉のお好み焼きにチーズソースと卵黄、1,980円 (2026年6月)・イカスミとパルミジャーノの黒焼きそば1,800〜1,880円、大葉バジルのジェノベーゼ焼きそば、Tonpei kimchi cheese tartare-yaki 1,180円、seafood bakudan-yaki 2,480円 (2026年5〜10月)・牛ハツのカルパッチョ、牛肉のカルパッチョ1,580円、蛸のカルパッチョ1,080円、キハダマグロのタルタル980円、フレンチ風の大根おでん480円、雲丹のだし巻き、鴨のステーキのセージ赤ワインソース、和牛ステーキ (2026年の口コミ)・国産と輸入のワインはグラス800円から、日本酒3種飲み比べ1,980円 (2026年5〜6月)',
    neighborhood: '三条木屋町の近く。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。名物の「French Maiko」は米粉と出汁で作り、2026年6月の客はグルテンフリーと書くが、同じ鉄板で小麦の焼きそばを焼き、ソースも広く使う (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。米粉の生地に出汁を使い、多くの料理に肉、魚介、卵、チーズが入る (2026年の口コミ)。',
    notes: '[お好み焼き・鉄板焼・三条木屋町、フランス風の鉄板とワイン] 三条木屋町近くのビルの奥、バーのような鉄板のカウンター。2025年12月開店で、Wagyu Kazan Oagari と同じ名を持つ。米粉の「French Maiko」はチーズソースと卵黄をのせたお好み焼きで、ほかにイカスミの焼きそば、牛ハツのカルパッチョ、フレンチ風の大根おでん、鴨のステーキなどをワインと。お通し495円。木曜休み。',
  });
}

// ================================================================ 呑んべゑ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033572/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_nonbee_gion', name: '炭火やきとり隠れ家 呑んべゑ (Sumibi Yakitori Kakurega Nonbee)', category: 'OMNI',
    lat: 35.00507, lng: 135.77583, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori comes with salt or a soy-based tare; ask for salt (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori bar; vegetables and tofu are grilled on the same grill (July 2025).',
    hours_raw: '18:00–3:00 (last order 2:00); closed Sunday and public holidays (Tabelog). Reservations accepted, advised — often fully booked (Tabelog; August 2025, April 2026). Charge ¥330 (Tabelog, Japanese text gives only 「330」). A Tabelog course of 10 skewers ¥3,300 for 2–8 (Tabelog). 16 seats: 8 at the counter and a private room for up to 6; a tight counter (Tabelog; December 2025). Smoking allowed (Tabelog). Cards; no e-money or QR (Tabelog). At the end of a narrow lane off Hanamikoji east of Shinbashi, with a tobacco shop on the corner; 3 min from the Gion bus stop, 7 min from Gion-Shijo Stn (Tabelog; December 2025). Opened 25 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, a lane off Hanamikoji — 7 min from Gion-Shijo Stn',
    cuisine: 'Binchotan-grilled yakitori of chicken bought fresh each morning, at Gion prices that reviewers find low (Tabelog, shop text; 2025–26 reviews) · course of 10 skewers ¥3,300 (Tabelog) · liver (kimo) — the house recommendation, mild even for those who dislike liver — tsukune, the jumbo "Otsukimi" tsukune with egg yolk, beef skewers (Tabelog; 2025–26 reviews) · chicken liver sashimi (September 2025) · grilled eggplant, grilled atsuage, yaki-onigiri, a cucumber starter (2025 reviews) · beer, sake, shochu, strong highballs; no desserts (2025 reviews) · about ¥3,000–7,000 a head (2025–26 reviews)',
    website: null, gmaps: gm('炭火やきとり隠れ家 呑んべゑ 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Gion, binchotan skewers till 3 a.m.] A small counter at the end of a Gion back lane where morning-fresh chicken goes over binchotan: start with the 10-skewer course (¥3,300) and don't skip the liver, the house pride. Prices are low for Gion, so it books up — reserve. Smoking allowed; ¥330 charge. Open 18:00–3:00, closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner and chef (unnamed)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): yakitori grilled over binchotan by a chef trained at a well-known restaurant in Shijo Mibu, with chicken prepared and skewered in-house by the owner; opened 25 November 2019.',
      philosophy: null, specialty: 'Chicken liver (kimo); 10-skewer course.',
      anecdotes: [
        { text: 'A July 2026 regular waited over ten minutes for the first beer when the tap failed, with only two staff on, and wished bottled beer had been offered at once.', source: R + 'B532466218/' },
        { text: 'A December 2025 diner found the counter so tight that elbows kept bumping.', source: R + 'B518332489/' },
        { text: 'A September 2025 diner’s husband, who usually avoids liver, happily ate it.', source: R + 'B512953785/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥・居酒屋・鶏料理、東山区四条通大和大路東入北側347-118、祇園四条駅から徒歩7分、祇園バス停から3分、月〜土 18:00〜翌3:00 (L.O. 2:00)、日曜・祝日休み、予約可、チャージ330円、焼き鳥10本のコース3,300円、16席 (カウンター8、個室6名まで)、喫煙可、カード可、2019年11月25日オープン、朝引きの鶏を備長炭で、Shijo Mibu の名店で修業した料理人、おすすめはきも。口コミ (2023年12月〜2026年7月、英語): 祇園にしては安い、レバー刺し、月見つくね、焼きおにぎり、予約で埋まる、カウンターが狭い、ビールが出るまで10分以上待ったという声。',
      confidence: 'medium', sources: [TB, R + 'B476212363/', R + 'B494499166/', R + 'B510694969/', R + 'B512953785/', R + 'B514043410/', R + 'B517597681/', R + 'B518332489/', R + 'B523781717/', R + 'B529425375/', R + 'B531508559/', R + 'B532466218/', R + 'B537203914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; the course is the easiest order; smoking allowed; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区四条通大和大路東入北側347-118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005030, 135.775799); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 30m; same lot number 347-118 as kyoto_gion_endo; the Tabelog point sits 3.8 m from kyoto_gion_hitsuji_cafe, so moved about 5 m north-east to 35.005070, 135.775830; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from the Tabelog set-menu page (tax included); ¥330 charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Nonbee course: 10 recommended yakitori', '¥3,300', 'Course', 'ask', 'no', 'Tabelog; 2–8 people.', 'nonbee_course'),
      it('', '', 'Chicken liver (kimo) skewer', '', 'Yakitori', 'ask', 'no', '2024–26 reviews.', 'kimo'),
      it('', '', 'Charge', '¥330', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '朝引きの鶏を備長炭で焼く焼き鳥。祇園にしては安いと口コミは書く (食べログの店の紹介、2025〜2026年の口コミ)・10本のコース3,300円 (食べログ)・店のおすすめのきもは、苦手な人でも食べやすい。つくね、卵黄の大きな「月見」つくね、牛串 (食べログ、2025〜2026年の口コミ)・レバー刺し (2025年9月)・焼き茄子、焼き厚揚げ、焼きおにぎり、お通しのきゅうり (2025年の口コミ)・ビール、日本酒、焼酎、濃いハイボール。デザートはない (2025年の口コミ)・1人約3,000〜7,000円 (2025〜2026年の口コミ)',
    neighborhood: '祇園、花見小路から入った路地。祇園四条駅から徒歩7分',
    gf_detail: '要確認。焼き鳥は塩か醤油ベースのたれ。塩を頼むとよい (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥の店で、野菜や豆腐も同じ焼き台で焼く (2025年7月)。',
    notes: '[焼き鳥・祇園、朝3時までの備長炭] 祇園の路地の奥の小さなカウンター。朝引きの鶏を備長炭で焼く。まずは10本のコース (3,300円) で、店自慢のきもは外さずに。祇園にしては安く、予約で埋まるので予約を。喫煙可、チャージ330円。18時〜翌3時、日曜休み。',
  });
}

// ================================================================ 出町ろろろ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005648/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '16:00']); const W = day(['11:30', '13:30'], ['18:00', '20:30']);
  put({
    id: 'kyoto_demachi_rororo', name: '出町ろろろ (Demachi Rororo)', category: 'OMNI',
    lat: 35.030192, lng: 135.768599, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bento of small obanzai seasoned with soy, dashi and miso, plus tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: mostly vegetables, but dressed with niboshi and dashi, with egg and fish in some dishes (July and October 2026). Ask when booking.',
    hours_raw: 'Tue–Thu 11:30–16:00; Fri–Sun lunch 11:30–13:30 and dinner 18:00–20:30; closed Monday and the second and fourth Sundays (Tabelog). Reservations essential — walk-ins are turned away; book by phone, best around 8:00–11:00, as calls during service go to voicemail; the mini kaiseki must be booked by the day before (Tabelog; July–September 2026). No cards or e-money (Tabelog). 15 seats at lunch (a U-shaped counter and two small tables), 9 counter seats at night; shoes off (Tabelog; July 2026). Non-smoking (Tabelog). On Imadegawa-dori, Demachi; 7 min from Demachiyanagi Stn, 2 min from the Aoi Bridge West End bus stop (Tabelog). Opened 25 July 2007 (Tabelog).',
    hours: { 1: L, 2: L, 3: L, 4: W, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Imadegawa, Demachi — 7 min from Demachiyanagi Stn',
    cuisine: 'Obanzai lunches built on organic vegetables from Ohara (July 2026) · Rororo bento ¥1,500: a two-tier box of 8–12 small seasonal dishes — water spinach with niboshi, green beans with sesame, eggplant with ginger, zucchini with shiso sauce, dashimaki with tororo-kombu sauce, tempura — with clay-pot rice with a crisp crust and miso soup (June–October 2026) · rice refills ¥50 half, ¥100 full (July 2026) · mini kaiseki ¥2,650 adds fish and dessert, booked by the day before (September 2026) · evening service Friday to Sunday (Tabelog)',
    website: null, gmaps: gm('出町ろろろ'), menu_url: null,
    notes: "[Obanzai · Demachi, the two-tier vegetable bento] A shoes-off counter on Imadegawa near Demachiyanagi whose ¥1,500 lunch bento — a dozen small dishes of Ohara organic vegetables, each seasoned differently, with clay-pot rice and its crisp crust — is booked solid weeks ahead. Phone in the morning (8–11), since calls go to voicemail during service; the mini kaiseki (¥2,650) adds fish and dessert. Cash only. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed); a man runs the floor with a woman in the kitchen (July 2026)'], origin: null,
      background: 'Opened 25 July 2007 (Tabelog). A July 2026 diner saw a man, probably the owner, handling the room single-handed with a woman in the kitchen; an August 2026 diner felt the owner’s passion matched the careful cooking.',
      philosophy: null, specialty: 'Obanzai bento; clay-pot rice.',
      anecdotes: [
        { text: 'A September 2026 group found the room poorly ventilated; eyes hurt and a strong smell clung to clothes for the rest of the day.', source: R + 'B536285286/' },
        { text: 'An August 2026 diner saw walk-ins turned away even when tables had freed up.', source: R + 'B533767259/' },
        { text: 'A June 2026 diner loved the variety but thought the portions might be small for some.', source: R + 'B530587984/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、上京区今出川通寺町東入一真町67-1、出町柳駅から徒歩約7分、Aoi Bridge West End バス停から2分、火〜木 11:30〜16:00、金〜日 11:30〜13:30・18:00〜20:30、月曜と第2・第4日曜休み、予約可、営業中は電話に出られないことがあり朝8時〜11時がつながりやすい、カード・電子マネー不可、15席 (夜はカウンター9席)、禁煙、2007年7月25日オープン。口コミ (2026年6〜10月、英語): ろろろ弁当1,500円 (Ohara の有機野菜のおばんざい8〜12品、土鍋ご飯とおこげ、味噌汁)、ご飯のおかわり半分50円・1杯100円、ミニ懐石2,650円は前日までに予約、靴を脱いで上がる、予約なしは断られる、換気が悪く匂いが服に残ったという声。',
      confidence: 'medium', sources: [TB, R + 'B529554411/', R + 'B530587984/', R + 'B531871222/', R + 'B531937501/', R + 'B532044086/', R + 'B532807042/', R + 'B533607805/', R + 'B533767259/', R + 'B533795523/', R + 'B536285286/', R + 'B537413261/', R + 'B537840728/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone in the morning (Japanese helps); shoes off; bring cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通寺町東入一真町67-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030192, 135.768599); cross-checked: GSI 京都府京都市上京区一真町67番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531871222/', R + 'B536285286/', R + 'B532807042/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rororo bento: 8–12 obanzai, clay-pot rice, miso soup', '¥1,500', 'Lunch', 'ask', 'no', 'June–October 2026.', 'rororo_bento'),
      it('', '', 'Mini kaiseki (bento plus fish and dessert; book by the day before)', '¥2,650', 'Lunch', 'ask', 'no', 'September 2026.', 'mini_kaiseki'),
      it('', '', 'Rice refill (full)', '¥100', 'Extra', '', '', 'July 2026; half ¥50.', 'rice_refill'),
    ] }, {
    cuisine: 'Ohara の有機野菜のおばんざいの昼ごはん (2026年7月)・ろろろ弁当1,500円: 二段のお重に季節の小鉢8〜12品 (空芯菜と煮干し、いんげんの胡麻和え、茄子と生姜、ズッキーニの大葉ソース、とろろ昆布あんのだし巻き、天ぷらなど)、おこげのある土鍋ご飯と味噌汁 (2026年6〜10月)・ご飯のおかわり半分50円、1杯100円 (2026年7月)・ミニ懐石2,650円は魚とデザートが付き、前日までに予約 (2026年9月)・夜の営業は金〜日 (食べログ)',
    neighborhood: '今出川通、出町。出町柳駅から徒歩7分',
    gf_detail: '要確認。醤油、出汁、味噌で味付けしたおばんざいのお弁当で、天ぷらも入る (2026年の口コミ)。',
    vegan_detail: 'このままではヴィーガン不可。野菜が中心だが、煮干しや出汁で和え、卵や魚の料理もある (2026年7月・10月)。予約時に確認を。',
    notes: '[おばんざい・出町、二段のお重の野菜弁当] 出町柳近くの今出川通の、靴を脱いで上がるカウンター。昼の1,500円のお弁当はOhara の有機野菜の小鉢が十数品、それぞれ味付けが違い、おこげのある土鍋ご飯と味噌汁が付く。予約は数週間先まで埋まり、営業中は留守電になるので電話は朝8〜11時に。ミニ懐石 (2,650円) は魚とデザート付き。現金のみ。月曜休み。',
  });
}

// ================================================================ 鮨おおが東山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041138/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '20:30']);
  put({
    id: 'kyoto_sushi_ooga_higashiyama', name: '鮨おおが東山 (Sushi Ooga Higashiyama)', category: 'OMNI',
    lat: 34.991159, lng: 135.774333, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of small dishes and nigiri with soy, marinated fish and sauces (2024–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish sushi omakase (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–14:30 and dinner 18:00–20:30; closed Wednesday (Tabelog). Reservation only; omakase course only; cancellation within 48 hours charged 100%; booking released if no contact 30 minutes after the time; children from middle school get the adult menu (Tabelog). 10 counter seats; private hire up to 20 (Tabelog). Cards; no e-money or QR (Tabelog). On the second basement of Six Senses Kyoto, through a door behind the lobby; 3 min from the Higashiyama-Shichijo bus stop, 10 min from Shichijo Stn (Tabelog; 2024–25 reviews). Opened 1 May 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama Shichijo, in Six Senses Kyoto — 3 min from Higashiyama-Shichijo bus stop',
    cuisine: 'Edomae omakase from the Kyoto branch of Sakai’s Sushi Ooga, with tuna from the same wholesaler, Yamako (Tabelog, shop text) · small dishes such as sakura-shrimp or seiko-crab chawanmushi, Akashi sea bream, kinmedai with salt and soy, hairy crab with manganji pepper and Kamo eggplant, sake-steamed fish, ikura (2024–25 reviews) · nigiri: marinated fish, se-toro, chutoro, otoro, kohada, kuruma ebi, squid, uni, Densuke anago (2024–25 reviews) · bills about ¥30,000–59,999 a head (2024–26 reviews)',
    website: null, gmaps: gm('鮨おおが東山 シックスセンシズ京都'), menu_url: null,
    notes: "[Sushi · Higashiyama Shichijo, Sushi Ooga inside Six Senses] The Kyoto counter of Sakai's famously hard-to-book Sushi Ooga, hidden behind a door at the back of the Six Senses Kyoto lobby, two floors down. Ten seats, omakase only: small dishes, then nigiri centred on tuna from the same wholesaler as the original — se-toro, chutoro, otoro — by a young head chef trained at the main shop. Expect ¥30,000–50,000+. Strict 48-hour cancellation. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Head chef (a young apprentice of the Sakai shop; reviewers give the name Sakai, 2024)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the second shop of Osaka’s Sushi Ooga, serving only the chef’s omakase with tuna from Yamako, the original’s wholesaler, inside Six Senses Kyoto; opened 1 May 2024. Reviewers in 2024 describe the head chef as the Sakai shop’s top apprentice, trained there for seven years and 26 years old (June 2024), and name the chef as Sakai (April and August 2024); a December 2025 diner found the head chef friendly and kind.',
      philosophy: null, specialty: 'Tuna nigiri.',
      anecdotes: [
        { text: 'A June 2024 diner found it underwhelming for the price and the nori not crisp despite being toasted, while liking the young owner’s manner.', source: R + 'B487974263/' },
        { text: 'An April 2024 diner came on opening day for lunch; Mr. Ooga came from Sakai to greet guests.', source: R + 'B483960459/' },
        { text: 'A September 2024 diner found the cost performance poor, on the expensive side even by Tokyo standards.', source: R + 'B492541107/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、東山区馬町通妙法院北門前妙法院側町431 シックスセンシズ京都 B2F、七条駅から徒歩約10分、東山七条バス停から3分、昼 12:00〜14:30・夜 18:00〜20:30、水曜休み、完全予約制、おまかせのみ、48時間前以降のキャンセルは100%、予約時間から30分連絡がなければキャンセル、中学生以上は大人と同じ料理、カウンター10席、貸切20名まで、カード可、2024年5月1日オープン、大阪の鮨おおがの2号店、本店と同じ仲卸 Yamakoのまぐろ。口コミ (2024年4月〜2026年1月、英語): 本店で修業した若い大将、せとろ・中とろ・大とろ、1人約30,000〜59,999円、値段に比べ物足りないという声。',
      confidence: 'medium', sources: [TB, R + 'B483960459/', R + 'B484133724/', R + 'B487104330/', R + 'B487330154/', R + 'B487974263/', R + 'B491175349/', R + 'B492541107/', R + 'B516791013/', R + 'B519824450/', R + 'B523569899/', R + 'B523602193/', R + 'B523654946/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; omakase only; ask hotel staff for the hidden door; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区馬町通妙法院北門前妙法院側町431 シックスセンシズ京都 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (34.991159, 135.774333); cross-checked: GSI 京都府京都市東山区妙法院前側町431番地 (lot, via 前側町; 妙法院側町 alone gives only the town) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487330154/', R + 'B523569899/'],
    price_note: 'No course price found; reviews give about ¥30,000–59,999 a head (2024–26).', last_checked: TODAY, items: [
      it('', '', 'Omakase: small dishes and nigiri', 'about ¥30,000–60,000', 'Course', 'ask', 'no', '2024–26 reviews.', 'omakase'),
    ] }, {
    cuisine: '堺の鮨おおがの京都店の江戸前のおまかせ。まぐろは本店と同じ仲卸 Yamakoから (食べログの店の紹介)・桜海老やせいこ蟹の茶碗蒸し、Akashi の鯛、金目鯛を塩と醤油で、毛蟹と万願寺とうがらしと賀茂なす、魚の酒蒸し、いくらなどのつまみ (2024〜2025年の口コミ)・握り: 漬け、せとろ、中とろ、大とろ、こはだ、車海老、いか、雲丹、Densuke の穴子 (2024〜2025年の口コミ)・1人約30,000〜59,999円 (2024〜2026年の口コミ)',
    neighborhood: '東山七条、シックスセンシズ京都の中。東山七条バス停から徒歩3分',
    gf_detail: '要確認。醤油、漬け、たれを使うつまみと握りのおまかせ (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚と貝のおまかせ寿司 (2024〜2026年の口コミ)。',
    notes: '[寿司・東山七条、シックスセンシズの中の鮨おおが] 予約の取れない堺の鮨おおがの京都店。シックスセンシズ京都のロビーの奥の扉から地下2階へ。10席でおまかせのみ。つまみのあと、本店と同じ仲卸のまぐろ (せとろ、中とろ、大とろ) を中心にした握りを、本店で修業した若い大将が握る。1人30,000〜50,000円以上。48時間前からキャンセル料。水曜休み。',
  });
}

save();
