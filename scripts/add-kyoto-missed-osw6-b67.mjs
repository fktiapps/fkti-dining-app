// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 67.
//   + 先斗町 炭楽屋とりうめ Pontocho Tanrakuya Toriume (Tanba-chicken yakitori over Tosa binchotan, Pontocho) — rest
//   + KOBE BEEF STEAK ITOH DINING Kyoto (Kobe beef teppanyaki in a Gion machiya over the Shirakawa) — rest
//   + まつなが和牛焼肉 久成 Matsunaga Wagyu Yakiniku Kujou (Shimane Matsunaga Wagyu yakiniku in a Gion machiya) — rest
//   + Bar orange (fourth-floor cocktail bar with a Kamo River terrace, Pontocho) — rest
//   - skip 26023948 炙り酒場 花火 (no hours or seats on Tabelog)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand (とりうめ, 炭楽屋, ITOH, 伊藤,
//   まつなが, 久成, 花火, orange): no earlier rulings.
//   Same-name counts first (2026-11-07): とりうめ — Tabelog's other "Tori Ume" shops (Niigata, Osaka, Tokyo, Yamanashi …) are
//   unrelated names; toriume.net lists only the Pontocho shop. ITOH DINING — two on Tabelog (Kyoto; ITOH DINING by NOBU, Hakone
//   Gora); the operator's site (itoh-dining.co.jp, footer "DINING Co.Ltd.") lists seven venues, six in Hakone and this one, so
//   neither five same-name shops nor a large company — drafted, flagged for the coordinator (an October 2021 review calls it
//   "part of the NOBU group"). まつなが和牛 久成 — one (the other "Matsunaga" listings are unrelated); kyoto-kujyowagyu.com lists
//   no other shop. Bar orange — one. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: とりうめ 「お通し500円/人（コースご利用の場合は料金に含まれてます）」; Bar orange
//   service charge 「330円」; ITOH DINING and 久成 none listed. No halal claims; no owner deaths; no single-review remarks about other
//   diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023948', 'thin listing: Tabelog gives no business hours or seat count for 炙り酒場 花火 (Matsubara-dori, Teramachi east), and the reviews are mixed one-offs — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26023948/).');

// ================================================================ 先斗町 炭楽屋とりうめ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020270/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.toriume.net/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_tanrakuya_toriume', name: '先斗町 炭楽屋とりうめ (Pontocho Tanrakuya Toriume)', category: 'OMNI',
    lat: 35.007675, lng: 135.771092, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori comes with house tare or mizu-shio (salt water) (official site); the menu also has chicken-broth udon and grilled rice balls (2024–25 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori house built on chicken broth — even the appetizer is tofu in chicken broth (April 2025).',
    hours_raw: 'Mon and Wed–Sun 17:00–23:00 (last order 22:00); closed Tuesday and every other Wednesday (Tabelog); the official site says closed Tuesday and alternate Mondays or Wednesdays; closing times may vary (Tabelog). Reservations accepted, incl. by phone on the day (Tabelog; August 2026). Appetizer charge ¥500 per person, included in courses (Tabelog, Japanese text: 「お通し500円/人（コースご利用の場合は料金に含まれてます）」); a July 2026 bill showed ¥550. Cards, e-money and QR (Tabelog). 24 seats: 8 at the counter, 16 at tables (Tabelog). Non-smoking (Tabelog). English menu (Tabelog). Pontocho Building 1F, Pontocho south of Sanjo, 3 min from Keihan Sanjo (Tabelog). Opened 11 April 2012 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, south of Sanjo — Keihan Sanjo',
    cuisine: 'Yakitori of Tanba chicken grilled over Tosa binchotan, with house tare or mizu-shio, and over 20 local sakes, about 10 from Kyoto, chosen by a sake sommelier (official site; Tabelog) · courses: 14 items with 10 skewers ¥3,960; 19 items with vegetables and seafood ¥5,500; with all-you-can-drink ¥6,160 (Tabelog) · chicken-soup rice porridge, grilled Kyoto nama-fu dengaku (June 2023) · simmered chicken liver (October 2023; May 2025) · Kujo green onion skewer (December 2024) · tofu in chicken broth, fried rice balls in chicken broth, chicken-broth udon; sake from ¥770 a 90 ml glass (April 2025) · chicken comb and other rare cuts (May 2025; February 2026) · 12-skewer set ¥2,640, dashimaki ¥770, highball ¥660 (July 2026)',
    website: SITE, gmaps: gm('先斗町 炭楽屋とりうめ'), menu_url: TB,
    notes: '[Yakitori · Pontocho, since 2012] A small charcoal yakitori house at the Sanjo end of Pontocho, grilling Tanba chicken over Tosa binchotan with house tare or salt water, plus rare cuts like comb, a pâté-rich simmered liver and a chicken-broth finale of fried rice balls or udon. Over 20 local sakes. Good-value courses from ¥3,960; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the official site: a yakitori restaurant opened in April 2012 in Pontocho, grilling carefully chosen chicken over Tosa binchotan, with local sake selected by a kikisake-shi (sake sommelier).',
      philosophy: null, specialty: 'Charcoal yakitori; chicken-broth dishes.',
      anecdotes: [
        { text: 'A May 2025 diner tried chicken comb for the first time and found the simmered liver as rich as a pâté.', source: R + 'B506245544/' },
        { text: 'An April 2025 visitor would travel from Osaka just for the fried rice balls soaked in chicken broth.', source: R + 'B505765184/' },
        { text: 'A February 2026 diner suggests ordering à la carte rather than a course to try the unusual dishes.', source: R + 'B522190043/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 焼鳥・居酒屋、中京区先斗町三条下ル橋下町135 先斗町ビル 1F、京阪三条駅から徒歩3分、月・水〜日17:00〜23:00 (L.O. 22:00)、火曜と隔週水曜休み (公式サイトは火曜と隔週月曜か水曜)、予約可、お通し500円 (コースは込み)、カード・電子マネー・QR 可、24席 (カウンター8、テーブル16)、禁煙、英語メニュー、2012年4月11日オープン、Tanba の鶏を土佐備長炭で、自家製のタレと水塩、利酒師が選んだ地酒20種以上 (京都の酒約10種)、コース3,960円・5,500円・飲み放題付き6,160円。口コミ (2023年6月〜2026年8月、英語): 鶏スープの雑炊、生麩の田楽、レバー煮、Kujo ねぎ、鶏出汁の揚げ出し豆腐、鶏出汁の焼きおにぎり茶漬けとうどん、とさか、12本セット2,640円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B454851179/', R + 'B473701645/', R + 'B485128199/', R + 'B492960710/', R + 'B498477135/', R + 'B499780973/', R + 'B505765184/', R + 'B506245544/', R + 'B522190043/', R + 'B531579977/', R + 'B532544250/', R + 'B533753724/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); the courses are the easy way in.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル橋下町135 先斗町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.007675, 135.771092); cross-checked: GSI 京都府京都市中京区橋下町135番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532544250/', R + 'B505765184/'],
    price_note: 'Course prices from Tabelog; à la carte prices from July 2026 and April 2025.', last_checked: TODAY, items: [
      it('', '', 'Recommended yakitori course (14 items, 10 skewers)', '¥3,960', 'Courses', 'ask', 'no', 'Tabelog.', 'course_3960'),
      it('', '', 'Charcoal gourmet course (19 items, with vegetables and seafood)', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_5500'),
      it('', '', 'Yakitori course with all-you-can-drink', '¥6,160', 'Courses', 'ask', 'no', 'Tabelog.', 'course_nomihodai'),
      it('', '', 'Yakitori 12-skewer set', '¥2,640', 'Yakitori', 'ask', 'no', 'July 2026.', 'set12'),
      it('', '', 'Dashimaki omelette', '¥770', 'Small plates', 'ask', 'no', 'July 2026.', 'dashimaki'),
      it('', '', 'Fried rice balls in chicken broth', '', 'To finish', 'ask', 'no', 'April 2025.', 'yaki_onigiri_chazuke'),
    ] }, {
    cuisine: 'Tanba の鶏を土佐備長炭で焼く焼鳥、自家製のタレか水塩、利酒師が選んだ地酒20種以上 (うち京都の酒約10種) (公式サイト、食べログ)・コースは10本付き14品3,960円、野菜と魚介付き19品5,500円、飲み放題付き6,160円 (食べログ)・鶏スープの雑炊、京生麩の田楽 (2023年6月)・レバー煮 (2023年10月、2025年5月)・Kujo ねぎの串 (2024年12月)・鶏出汁の揚げ出し豆腐、鶏出汁の焼きおにぎり、鶏出汁のうどん、日本酒は90mlで770円から (2025年4月)・とさかなど珍しい部位 (2025年5月、2026年2月)・12本セット2,640円、だし巻き770円、ハイボール660円 (2026年7月)',
    neighborhood: '先斗町、三条の南。京阪三条駅',
    gf_detail: '要確認。焼鳥は自家製のタレか水塩 (公式サイト)。鶏出汁のうどんや焼きおにぎりもある (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏出汁が基本の焼鳥店で、お通しも鶏出汁の豆腐 (2025年4月)。',
    notes: '[焼鳥・先斗町、2012年から] 先斗町の三条側にある小さな炭火の焼鳥店。Tanba の鶏を土佐備長炭で、自家製のタレか水塩で焼く。とさかなど珍しい部位、パテのように濃厚なレバー煮、締めは鶏出汁の焼きおにぎりかうどん。地酒20種以上。お得なコースは3,960円から。火曜休み。',
  });
}

// ITOH DINING: drafted by the worker; converted to a skip by the integrator (non-local multi-venue group, as アルポルトカフェ).
skip('26007526', 'non-local group: KOBE BEEF STEAK ITOH DINING is run by DINING Co.Ltd. (itoh-dining.co.jp), which lists 7 venues, 6 of them in Hakone; an October 2021 review calls it part of the NOBU group. Treated like アルポルトカフェ (non-local multi-venue brand)');

// ================================================================ まつなが和牛焼肉 久成
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042326/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://kyoto-kujyowagyu.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_matsunaga_wagyu_kujo', name: 'まつなが和牛焼肉 久成 (Matsunaga Wagyu Yakiniku Kujou)', category: 'OMNI',
    lat: 35.005778, lng: 135.773811, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shio-grilled cuts are on the menu alongside tare, miso and sukiyaki, katsu sandwiches, ramen and tempura (official site); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house; salads and grilled vegetables exist but come with beef courses (official site).',
    hours_raw: 'Mon, Wed–Sun and holidays 17:00–23:00 (last orders food 22:00, drinks 22:30); closed Tuesday; days may change (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, WeChat Pay); no e-money (Tabelog). 36 seats: counter and private rooms for up to 10, some upstairs (Tabelog; February 2025). Non-smoking (Tabelog). Menus in English, Chinese and Korean; English-speaking staff (Tabelog). A machiya on cobbled Shinbashi-dori near Tatsumi Shrine, 3 min from Gion-Shijo (Tabelog; February 2025). Opened 4 January 2025 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, near Tatsumi Shrine — Gion-Shijo',
    cuisine: 'Yakiniku of Matsunaga Wagyu from Shimane, A5 with marbling score 10 or more (official site; 2025 reviews) · Kujyo course of 10 dishes incl. sukiyaki, salt-, tare- and miso-grilled beef and ramen ¥11,000; with sirloin steak ¥15,400 (official site) · lobster bisque, seared wagyu nigiri, wagyu katsu sandwich, Caesar salad (January–February 2025) · à la carte: tongue ¥1,890, sirloin sukiyaki ¥4,400, Chateaubriand steak ¥8,800, katsu sandwich ¥2,200, special ramen ¥2,000 (official site) · "Meat Feast" course (July 2026)',
    website: SITE, gmaps: gm('まつなが和牛焼肉 久成'), menu_url: TB,
    notes: '[Wagyu yakiniku · Gion Shinbashi, since 2025] A machiya yakiniku house on cobbled Shinbashi-dori, opened in January 2025 to serve Shimane\'s award-winning Matsunaga Wagyu: courses that run from lobster bisque and seared wagyu nigiri through salt, tare and miso grills to sukiyaki, a wagyu katsu sandwich and ramen. Counter or private rooms; English-speaking staff. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Per 2025 reviews: the chef handled meat at popular steakhouses such as Morton\'s in Tokyo and at hotel restaurants. Per the official site: Matsunaga Wagyu is mainly descended from the bull Dai-7 Itozakura and won the Prime Minister\'s Prize (2008) and national honour prizes (2020, 2022, 2023).',
      philosophy: null, specialty: 'Matsunaga Wagyu yakiniku courses.',
      anecdotes: [
        { text: 'A February 2025 diner liked that the lobster bisque was kept light to let the shrimp on top shine.', source: R + 'B500721918/' },
        { text: 'A February 2025 visitor arrived at dusk with the lanterns lit and was led upstairs to a private room.', source: R + 'B501829491/' },
        { text: 'A July 2026 diner finished the Meat Feast course completely stuffed.', source: R + 'B532410692/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 焼肉、東山区元吉町69-3、京阪祇園四条駅から徒歩3分、月・水〜日・祝17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、火曜休み、予約可、カード・QR 可、36席、個室 (〜10名)、禁煙、英語・中国語・韓国語のメニュー、英語を話すスタッフ、2025年1月4日オープン、島根のまつなが和牛 (A5・BMS10以上、第7糸桜の系統、内閣総理大臣賞2008年)、久成コース11,000円、サーロインステーキ付き15,400円、タン塩1,890円、シャトーブリアン8,800円、カツサンド2,200円。口コミ (2025年1月〜2026年7月、英語): 新橋通の町家、料理長は東京の Morton’s やホテルの経験、オマール海老のビスク、炙り寿司、カツサンド、Meat Feast コース。',
      confidence: 'medium', sources: [TB, SITE, R + 'B499507727/', R + 'B499675976/', R + 'B499813574/', R + 'B500721918/', R + 'B501248027/', R + 'B501829491/', R + 'B502169146/', R + 'B532410692/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos; English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区元吉町69-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005778, 135.773811); cross-checked: GSI 京都府京都市東山区元吉町69番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site prices, tax included (read 2026-11-07); a February 2025 diner paid ¥16,500 for the sirloin course.', last_checked: TODAY, items: [
      it('', '', 'Matsunaga Wagyu Kujyo course (10 dishes)', '¥11,000', 'Courses', 'ask', 'no', 'Sukiyaki, salt-, tare- and miso-grilled beef, ramen, dessert.', 'kujyo_course'),
      it('', '', 'Course with luxury sirloin steak (11 dishes)', '¥15,400', 'Courses', 'ask', 'no', 'Official site.', 'sirloin_course'),
      it('', '', 'Beef tongue, salt-grilled', '¥1,890', 'Grill', 'ask', 'no', 'Official site.', 'tan_shio'),
      it('', '', 'Chateaubriand steak', '¥8,800', 'Steak', 'ask', 'no', 'Official site.', 'chateaubriand'),
      it('', '', 'Wagyu katsu sandwich', '¥2,200', 'Chef’s specials', 'no', 'no', 'Official site.', 'katsu_sando'),
      it('', '', 'Special ramen', '¥2,000', 'Rice and noodles', 'no', 'no', 'Official site.', 'ramen'),
    ] }, {
    cuisine: '島根のまつなが和牛 (A5、BMS10以上) の焼肉 (公式サイト、2025年の口コミ)・すき焼き、塩焼き、タレ焼き、味噌焼き、ラーメンなど10品の久成コース11,000円、サーロインステーキ付き15,400円 (公式サイト)・オマール海老のビスク、和牛の炙り寿司、和牛のカツサンド、シーザーサラダ (2025年1〜2月)・単品はタン塩1,890円、サーロインのすき焼き4,400円、シャトーブリアンステーキ8,800円、カツサンド2,200円、スペシャルラーメン2,000円 (公式サイト)・Meat Feast コース (2026年7月)',
    neighborhood: '祇園新橋。祇園四条',
    gf_detail: '要確認。塩焼きのほか、タレ、味噌、すき焼き、カツサンド、ラーメン、天ぷらもある (公式サイト)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店。サラダや焼き野菜はあるが牛肉のコースが中心 (公式サイト)。',
    notes: '[和牛焼肉・祇園新橋、2025年から] 石畳の新橋通の町家に2025年1月に開いた焼肉店。受賞歴のある島根のまつなが和牛を、オマール海老のビスクや炙り寿司から、塩・タレ・味噌の焼き、すき焼き、カツサンド、ラーメンまでのコースで。カウンターか個室。英語を話すスタッフ。火曜休み。',
  });
}

// ================================================================ Bar orange
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009356/'; const R = TB + 'dtlrvwlst/';
  const H = day(['14:00', '01:00']);
  put({
    id: 'kyoto_bar_orange_pontocho', name: 'Bar orange', category: 'OMNI',
    lat: 35.007812, lng: 135.771112, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mainly cocktails; food includes homemade smoked dishes and pizza (Tabelog); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A cocktail bar; snacks such as smoked nuts and homemade chocolate (April 2025) and smoked dishes and pizza (Tabelog) — no vegan information.',
    hours_raw: 'Daily 14:00–1:00; open all year (Tabelog; the listing also carries an old notice of shorter emergency-period hours). Reservations accepted; whole-bar hire for 20–50 (Tabelog). Cash only — no cards or e-money (Tabelog). Service charge ¥330 (Tabelog, Japanese text: 「330円」). 42 seats: 7 at the counter, 8 table, 8 sofa and 18 on the terrace (Tabelog). Smoking allowed (Tabelog). Emerald Kaikan 4F, Pontocho by the Kamo River, 3 min from Keihan Sanjo (Tabelog; April 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Pontocho, south of Sanjo on the Kamo River — Keihan Sanjo',
    cuisine: 'Cocktail bar with a terrace over the Kamo River; homemade smoked dishes and pizza; a ¥4,000 course with all-you-can-drink (Tabelog) · fresh-fruit cocktails, drinks made to taste (May 2022; May 2023) · gin cocktails (September 2023) · ¥1,000 lunch set with beer or sparkling wine; coffee set (June 2023) · smoked nuts, homemade chocolate (April 2025) · Grasshopper (March 2025) · watermelon mojito, dry martini (June 2026)',
    website: null, gmaps: gm('Bar orange 先斗町'), menu_url: TB,
    notes: '[Cocktail bar · Pontocho, Kamo River terrace] A fourth-floor bar on the Kamo River side of Pontocho with a sofa terrace over the river — kotatsu and blankets in winter, breezes in summer — open from 14:00 to 1:00. Fruit and gin cocktails made to your taste, smoked nuts, homemade chocolate, smoked dishes and pizza. Cash only; ¥330 service charge; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), described as attentive (January 2024)'], origin: null,
      background: 'Per Tabelog: a bar with Kamo River terrace seating, homemade smoked dishes and pizza, and a wide drink list.',
      philosophy: null, specialty: 'Cocktails; Kamo River terrace.',
      anecdotes: [
        { text: 'A January 2024 visitor sipped coffee under a terrace kotatsu, sheltered from the wind, while friends worked through the cocktails.', source: R + 'B478108903/' },
        { text: 'A May 2022 visitor described a preference and got a gently sweet custom cocktail; blankets were handed out on the chilly terrace.', source: R + 'B449553771/' },
        { text: 'On a June 2026 summer night the staff dealt quickly with bugs drawn to the terrace lights.', source: R + 'B530515597/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・バー、中京区橋下町133-1 エメラルド会館 4F、京阪三条駅から徒歩3分、毎日14:00〜翌1:00、年中無休、予約可、貸切20〜50名、現金のみ、サービス料330円、42席 (カウンター7、テーブル8、ソファ8、テラス18)、喫煙可、鴨川を望むテラス、自家製の燻製とピザ、飲み放題付きコース4,000円。口コミ (2022年5月〜2026年6月、英語): 冬はテラスにこたつと毛布、フルーツやジンのカクテル、ランチセット1,000円、燻製ナッツ、自家製チョコレート、グラスホッパー、スイカのモヒート、ドライマティーニ。',
      confidence: 'medium', sources: [TB, R + 'B449553771/', R + 'B460737314/', R + 'B466325786/', R + 'B471538402/', R + 'B478108903/', R + 'B484062022/', R + 'B494705459/', R + 'B502845081/', R + 'B505875045/', R + 'B509047851/', R + 'B530515597/', R + 'B532941654/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Describe the flavour you like and the bartender will build a cocktail; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋下町133-1 エメラルド会館 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.007812, 135.771112); cross-checked: GSI 京都府京都市中京区橋下町133番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B494705459/'],
    price_note: 'Course price from Tabelog; lunch set from June 2023; ¥330 service charge; cash only.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥4,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'course_4000'),
      it('', '', 'Lunch set with beer or sparkling wine', '¥1,000', 'Sets', 'ask', 'ask', 'June 2023.', 'lunch_set'),
      it('', '', 'Smoked nuts', '', 'Snacks', 'ask', 'ask', 'April 2025.', 'smoked_nuts'),
      it('', '', 'Pizza', '', 'Food', 'no', 'ask', 'Tabelog.', 'pizza'),
    ] }, {
    cuisine: '鴨川を望むテラスのあるカクテルバー、自家製の燻製とピザ、飲み放題付きコース4,000円 (食べログ)・フルーツのカクテル、好みに合わせたカクテル (2022年5月、2023年5月)・ジンのカクテル (2023年9月)・ビールかスパークリングワイン付きのランチセット1,000円、コーヒーのセット (2023年6月)・燻製ナッツ、自家製チョコレート (2025年4月)・グラスホッパー (2025年3月)・スイカのモヒート、ドライマティーニ (2026年6月)',
    neighborhood: '先斗町、三条の南、鴨川沿い。京阪三条駅',
    gf_detail: '要確認。主にカクテル。料理は自家製の燻製やピザ (食べログ)。グルテンの情報はない。',
    vegan_detail: '要確認。カクテルバーで、燻製ナッツや自家製チョコレート (2025年4月)、燻製やピザ (食べログ)。ヴィーガンの情報はない。',
    notes: '[カクテルバー・先斗町、鴨川のテラス] 先斗町の鴨川側、ビル4階のバー。川を望むソファのテラスは冬はこたつと毛布、夏は川風。14時から深夜1時まで。好みに合わせたフルーツやジンのカクテル、燻製ナッツ、自家製チョコレート、燻製やピザ。現金のみ、サービス料330円、喫煙可。',
  });
}

save();
