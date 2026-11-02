// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 19.
//   + 元祖ぶっち切り寿司 魚心 南 難波店 Uoshin Minami (oversized-topping sushi, Sennichimae)
//   + 心斎橋神楽 Shinsaibashi Kagura (creative Japanese izakaya with a fish tank and private rooms)
//   + 裏難波 路地裏酒場 とんぼ Rojiura Sakaba Tonbo (chicken sashimi and binchotan yakitori, Ura-Namba)
//   + 肉と炉端と釜めし くろ屋 Kuroya (robata "genshi-yaki" and kamameshi, Nishi-Shinsaibashi)
//   - 27053735 力丸 法善寺横丁 炉ばた焼 水かけ茶屋: one of the Rikimaru robata group's many Osaka shops (Umeda, Tennoji,
//     Namba, Shinsaibashi, Abeno, Juso and more; search results) — chain (5+).
//   - 27140575 THE COMMA,Italian Terrace NAMBA: a Namba branch of COMMA, ("COMMA,が2024年3月24日 なんばにNew Open",
//     HotPepper); COMMA, 梅田店 (osaka_comma_umeda) is already in data — branch of a brand in data.
//   Group-size line (brief): 魚心 has 本店 in Umeda, 心斎橋店 and this 南店 (gurunavi) — small group. とんぼ runs this
//   shop, 別館, 裏 and はなれ (gurunavi, Tabelog shop text) — small group. 神楽 and くろ屋: one shop found each (くろ屋
//   also appears as "難波店", apparently this shop). None of the four is in data/osaka.json (grep by name, id, address).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27053735', 'chain: 力丸 robata group, many Osaka shops (Umeda, Tennoji, Namba, Shinsaibashi, Abeno, Juso and more)');
skip('27140575', 'branch of a brand in data: COMMA, (osaka_comma_umeda); Namba shop opened 24 March 2024');

// ================================================================ 魚心 南 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001943/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'osaka_uoshin_minami_namba', name: '元祖ぶっち切り寿司 魚心 南 難波店 (Ganso Bucchigiri Zushi Uoshin Minami Namba)', category: 'OMNI',
    lat: 34.668108, lng: 135.503616, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi on red-vinegar rice with soy sauce, red miso soup with the sets; eel and anago come glazed.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi restaurant.',
    hours_raw: 'Daily 11:30–23:00, last order 22:30 (Tabelog). Reservations accepted but sometimes not possible depending on the day (Tabelog); booking avoids a wait (July–August 2026). 10% service charge from 27 December to 3 January (Tabelog). Cards (VISA, Master, JCB, Diners), transport IC and other e-money, PayPay, d Barai, Rakuten Pay and au PAY (Tabelog). 61 seats with counter and sofas; non-smoking (Tabelog). Many foreign visitors in the area (August and October 2026), fewer inside than expected (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-7-9, 1F — 5 min from Namba Stn and Nipponbashi Stn',
    cuisine: '"Bucchigiri" sushi with toppings about three times the usual size at ordinary prices, from a fishmonger background (Tabelog shop text) · lunch: Bucchigiri set ¥1,000 with red miso soup, including eel and red shrimp (July and August 2026); premium sushi set ¥1,800 (September 2026); seafood chirashi on red-vinegar rice, large rice +¥100 (September 2026) · à la carte: bluefin otoro ¥1,980, anago ¥780, layered kisu nigiri ¥680, toro salmon ¥880, whelk ¥780, seared octopus ¥880, scallop ¥880 (July 2026); summer specials including abalone with liver (July 2026) · chutoro, uni, engawa, kensaki squid, fatty salmon, tuna yukke, sweet shrimp, yellowtail (August 2026); sea bream, hamachi, tachiuo, mackerel, sardine (September 2026) · ikura overflowing the gunkan; huge eel and anago (August–September 2026)',
    website: 'https://www.ajibil.com/', gmaps: gm('魚心 南 難波店'), menu_url: null,
    notes: '[Sushi · Sennichimae, toppings that hide the rice] A lively Sennichimae sushi bar whose name promises toppings "three times" the usual size, and reviewers agree: anago, eel and yellowtail drape over the rice. Lunch is the bargain, with a ¥1,000 Bucchigiri set and a ¥1,800 premium set, both with red miso soup. À la carte is priced per piece (otoro ¥1,980, most ¥680–880 in July 2026). Book to skip the queue; one September 2026 diner found the value only average.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: "the original Bucchigiri sushi", portions about three times larger than usual from a fishmonger "ditching the abacus"; operator website ajibil.com. Other shops: 本店 in Umeda and 心斎橋店 (gurunavi, search results).', philosophy: null, specialty: 'Oversized-topping nigiri.',
      anecdotes: [
        { text: '"The toppings completely overshadow the rice ... Especially the anago (sea eel)! The rice is practically nowhere to be seen." — August 2026.', source: R + 'B533574202/' },
        { text: '"This area has a very high ratio of foreign visitors, but surprisingly, the proportion of foreign customers in the restaurant was lower than expected" — September 2026.', source: R + 'B536296330/' },
        { text: '"The taste is good, but... the price-to-quality balance is just average." — September 2026.', source: R + 'B535479982/' },
      ],
      japanese_sources_summary: '食べログ: 元祖ぶっち切り寿司 魚心 南 難波店、寿司・魚介・うなぎ、大阪市中央区千日前1-7-9 1F、なんば駅・日本橋駅から徒歩5分、毎日11:30〜23:00 (L.O. 22:30)、予約可 (状況により不可)、12月27日〜1月3日はサービス料10%、カード・電子マネー・QR 決済可、61席、禁煙、公式 ajibil.com。ネタが普通の約3倍の大きさの元祖ぶっち切り寿司。口コミ(2026年7月〜10月): 昼のぶっち切り定食1,000円 (赤だしつき)、寿司のセット1,800円、海鮮ちらし (赤酢のシャリ、大盛り+100円)、本まぐろ大とろ1,980円、穴子780円、キスの重ね握り680円、とろサーモン880円、つぶ貝780円、炙りなまだこ880円、ほたて880円、ウニ、えんがわ、ケンサキイカ、こぼれるいくら、大きな穴子とうなぎ、周辺は外国人が多い、値段と質のバランスはふつうという声も。系列は梅田の本店と心斎橋店 (ぐるなび)。',
      confidence: 'medium', sources: [TB, 'https://www.ajibil.com/', R + 'B530538060/', R + 'B532260595/', R + 'B532433263/', R + 'B532551231/', R + 'B533574202/', R + 'B533873587/', R + 'B533964541/', R + 'B534638225/', R + 'B534908995/', R + 'B535479982/', R + 'B536083391/', R + 'B536296330/', R + 'B536518028/', R + 'B537879640/', R + 'B538348873/', 'https://r.gnavi.co.jp/k120822/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and sofa seating; a set lunch makes ordering easy. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-9 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番9号 (go) 11m. Nearest records: 創作鉄板 銀 (1-7-7) 15 m, 松阪牛焼肉M (1-7-11) 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533964541/', R + 'B534638225/', R + 'B534908995/', TB],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: Bucchigiri set with red miso soup', '¥1,000', 'Lunch', 'ask', 'no', 'July–August 2026 reviews.', 'bucchigiri_teishoku'),
      it('', '', 'Lunch: premium sushi set', '¥1,800', 'Lunch', 'ask', 'no', 'September 2026 review.', 'jo_sushi_set'),
      it('', '', 'Bluefin otoro nigiri', '¥1,980', 'Nigiri', 'ask', 'no', 'July 2026 review.', 'otoro'),
      it('', '', 'Anago nigiri', '¥780', 'Nigiri', 'ask', 'no', 'July 2026 review.', 'anago'),
      it('', '', 'Toro salmon nigiri', '¥880', 'Nigiri', 'ask', 'no', 'July 2026 review.', 'toro_salmon'),
    ] }, {
    cuisine: 'ネタが普通の約3倍の大きさで値段はふつうの「ぶっち切り」寿司。魚屋の出身 (食べログの店の紹介)・昼: 赤だしつきのぶっち切り定食1,000円、うなぎと赤えびも (2026年7月・8月)、寿司のセット1,800円 (2026年9月)、赤酢のシャリの海鮮ちらし、大盛り+100円 (2026年9月)・単品: 本まぐろ大とろ1,980円、穴子780円、キスの重ね握り680円、とろサーモン880円、つぶ貝780円、炙りなまだこ880円、ほたて880円 (2026年7月)、夏の限定のあわびの肝のせなど (2026年7月)・中とろ、ウニ、えんがわ、ケンサキイカ、とろサーモン、まぐろユッケ、甘えび、ぶり (2026年8月)、鯛、はまち、太刀魚、さば、いわし (2026年9月)・軍艦からこぼれるいくら、大きなうなぎと穴子 (2026年8〜9月)',
    neighborhood: '千日前1-7-9 1F。なんば駅・日本橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。赤酢のシャリの寿司に醤油、セットには赤だし。うなぎと穴子はたれ。',
    vegan_detail: 'ヴィーガンではありません。魚の寿司屋。',
    notes: '[寿司・千日前、シャリが隠れるネタ] 千日前のにぎやかな寿司屋で、名前の通りネタが普通の「3倍」。口コミでも穴子、うなぎ、ぶりがシャリを覆う。お得なのは昼で、ぶっち切り定食1,000円、寿司のセット1,800円、どちらも赤だしつき。単品は1貫ずつの値段 (2026年7月は大とろ1,980円、多くは680〜880円)。予約すれば並ばずに入れる。2026年9月には値段に対してふつうという声も。',
  });
}

// ================================================================ 心斎橋神楽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27069879/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_shinsaibashi_kagura', name: '心斎橋神楽 (Shinsaibashi Kagura)', category: 'OMNI',
    lat: 34.674075, lng: 135.504215, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu runs to sashimi with soy, tempura, fried chicken, a tempura rice ball, deep-fried nama-fu in dashi and a hamburger.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and meat Japanese restaurant; dishes come in dashi (September 2026).',
    hours_raw: 'Mon–Sat 17:00–23:00, last order 22:30; closed Sundays and holidays (Tabelog); closed for Obon 11–16 August 2026 (Tabelog). Same-day reservations possible (April 2026); guests arriving before the booked time wait outside (April 2026). Charge ¥600; fully private rooms for up to 4 cost ¥500 + tax per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 52 seats with counter, tatami and sunken-kotatsu private and semi-private rooms for up to 24; all non-smoking since 14 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-13-3, マンション馬やど 1F, a fish tank at the door — 3 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Creative Japanese cooking on a "food as medicine" idea, with dishes like lettuce shabu-shabu and salted green peppers (Tabelog shop text) · Kagura course with two hours of drinks, 10 dishes, ¥11,500 (¥10,000 with a coupon in early November 2026); banquet course ¥6,300, drinks +¥2,500 (Tabelog); sushi cake for celebrations (Tabelog) · signature salted green peppers (January–September 2026) · live squid sashimi and grilled squid (March–September 2026); sashimi platter (2026) · milk tofu as the appetiser (April 2026); thick dashi omelette, mentaiko omelette, tempura rice ball (April–August 2026) · pork-wrapped asparagus, grilled eel (August 2026) · seko crab in season (November 2025) · grilled ginkgo, surf clam, miso-pickled burdock, dried mentaiko, deep-fried nama-fu in dashi, fried Awa-odori chicken, Kagura hamburger (September 2026) · iburi-gakko (August 2026)',
    website: 'https://www.kaguraosaka.com/', gmaps: gm('心斎橋神楽'), menu_url: null,
    notes: '[Japanese izakaya · Higashi-Shinsaibashi, live squid and salted peppers] A calm, upscale Japanese izakaya in the back streets of Higashi-Shinsaibashi, with a fish tank at the door and tatami private rooms, often used for business dinners. Order the signature salted green peppers, live squid when available, sashimi and the tempura rice ball; courses run ¥6,300–11,500 with drinks extra or included. Closed Sundays. Fully non-smoking since January 2025.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 12 December 2012; creative Japanese cuisine on the idea of food as medicine; website kaguraosaka.com.', philosophy: '"Food as medicine" (ishoku dogen, per ikyu).', specialty: 'Salted green peppers; live squid.',
      anecdotes: [
        { text: '"With many inbound tourists in the Minami area, establishments like this are truly appreciated." — February 2026, on the calm room.', source: R + 'B522805525/' },
        { text: '"If you arrive earlier than your reservation time, you\'ll have to wait outside, so I recommend arriving right on time" — April 2026.', source: R + 'B526129971/' },
        { text: '"The moment I saw the fish tank at the entrance, I knew I was in for a treat." — September 2026.', source: R + 'B536644240/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 心斎橋神楽、居酒屋・魚介・日本料理、大阪市中央区東心斎橋1-13-3 マンション馬やど 1F、長堀橋駅から徒歩3分、心斎橋駅から徒歩5分、月〜土17:00〜23:00 (L.O. 22:30)、日・祝休み、2026年8月11日〜16日はお盆休み、予約可、チャージ600円、完全個室はひとり500円 (税抜)、カード・PayPay 可、電子マネー不可、52席、個室・半個室 (24名まで)、2025年1月14日から全席禁煙、2012年12月12日オープン、公式 kaguraosaka.com。医食同源の創作和食、レタスしゃぶしゃぶ、塩ピーマン、神楽コース (飲み放題2時間) 11,500円、宴会コース6,300円、お祝いの寿司ケーキ。口コミ(2025年11月〜2026年9月): 名物の塩ピーマン、イカの活け造り、刺身の盛り合わせ、ミルク豆腐、だし巻き、天むす、セコガニ、ぎんなん、ホッキ貝、山ごぼうの味噌漬け、生麩の揚げ出し、Awa-odori の鶏の唐揚げ、神楽ハンバーグ、いぶりがっこ、入口に生け簀、商談に使われる。',
      confidence: 'medium', sources: [TB, 'https://www.kaguraosaka.com/', R + 'B463678733/', R + 'B519174367/', R + 'B519982091/', R + 'B522805525/', R + 'B522845938/', R + 'B526129971/', R + 'B526409486/', R + 'B527140675/', R + 'B531226669/', R + 'B533259114/', R + 'B534122268/', R + 'B534298871/', R + 'B534678516/', R + 'B535436621/', R + 'B536644240/', 'https://restaurant.ikyu.com/110352/highlights'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A calm Japanese room used for business dinners; private rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-3 マンション馬やど 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番3号 (go) 7m. Nearest records: HOME STYLE バル 1416 (1-13-5) 18 m, あげてんかっ！ 本店 (1-13-1) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534678516/'],
    price_note: 'Courses from the Tabelog listing; dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salted green peppers (signature)', '', 'Signature', 'ask', 'ask', '2026 reviews.', 'shio_piman'),
      it('', '', 'Live squid sashimi (when available)', '', 'Sashimi', 'ask', 'no', 'March–September 2026 reviews.', 'ika_ikizukuri'),
      it('', '', 'Tempura rice ball', '', 'Rice', 'no', 'no', 'August 2026 review.', 'tenmusu'),
      it('', '', 'Banquet course', '¥6,300', 'Course', 'ask', 'no', 'Tabelog listing; drinks +¥2,500.', 'enkai_course'),
      it('', '', 'Kagura course with 2 hours of drinks, 10 dishes', '¥11,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'kagura_course'),
    ] }, {
    cuisine: '「医食同源」の創作和食。レタスしゃぶしゃぶや塩ピーマンなど (食べログの店の紹介)・2時間飲み放題つきの神楽コース10品11,500円 (2026年11月初めはクーポンで10,000円)、宴会コース6,300円、飲み放題+2,500円 (食べログ)、お祝いの寿司ケーキ (食べログ)・名物の塩ピーマン (2026年1〜9月)・イカの活け造りと焼き物 (2026年3〜9月)、刺身の盛り合わせ (2026年)・お通しのミルク豆腐 (2026年4月)、だし巻き、明太だし巻き、天むす (2026年4〜8月)・アスパラの豚巻き、うなぎの蒲焼き (2026年8月)・季節のセコガニ (2025年11月)・焼きぎんなん、ホッキ貝、山ごぼうの味噌漬け、干し明太子、生麩の揚げ出し、Awa-odori の鶏の唐揚げ、神楽ハンバーグ (2026年9月)・いぶりがっこ (2026年8月)',
    neighborhood: '東心斎橋1-13-3 マンション馬やど 1F、入口に生け簀。長堀橋駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。醤油で食べる刺身、天ぷら、唐揚げ、天むす、生麩の揚げ出し、ハンバーグがある。',
    vegan_detail: 'ヴィーガンではありません。魚と肉の和食の店で、だしの料理も (2026年9月)。',
    notes: '[和食の居酒屋・東心斎橋、イカの活け造りと塩ピーマン] 東心斎橋の裏通りにある落ち着いた上質な和食の居酒屋で、入口に生け簀、座敷の個室があり、商談にも使われる。名物の塩ピーマン、あればイカの活け造り、刺身、天むすを。コースは6,300〜11,500円で、飲み放題は別か込み。日曜休み。2025年1月から全席禁煙。',
  });
}

// ================================================================ とんぼ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27051563/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '24:00']), SA = day(['12:00', '24:00']), SU = day(['12:00', '23:00']);
  put({
    id: 'osaka_rojiura_sakaba_tonbo_ura_namba', name: '裏難波 路地裏酒場 とんぼ (Ura Namba Rojiura Sakaba Tonbo)', category: 'OMNI',
    lat: 34.664203, lng: 135.502993, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori with tare or salt, chicken-wing gyoza, shrimp shabu-shabu and dashi omelettes are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan options, but nothing is described; the menu centres on chicken, seafood and dashi omelettes.',
    hours_raw: 'Mon–Fri 15:00–24:00; Sat 12:00–24:00; Sun and holidays 12:00–23:00; last order 30–60 minutes before close (Tabelog). Weekday highball ¥100 from 15:00 to 18:00 (Tabelog); a happy hour with all drinks ¥300 (October 2026). Reservations accepted; two-hour limit when busy, counted from the booking time at weekends; 15 minutes late without notice cancels the booking (Tabelog). Appetiser ¥450 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), Rakuten Edy, iD, QUICPay, PayPay, Alipay and WeChat Pay (Tabelog). 60 seats; non-smoking here, smoking allowed at the 別館 annex; children welcome with family coupons; wheelchair accessible (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 13-6, 千日前セントラル第4ビル 1F, an alley in Ura-Namba — 3 min from Namba Stn',
    cuisine: 'Showa-retro alley izakaya of fresh local chicken: chicken sashimi from morning-slaughtered chicken, yakitori over binchotan, straw-grilled chicken thigh served rare (Tabelog shop text; July–October 2026) · courses with drinks: 10 dishes ¥4,000 or ¥4,500 (Tabelog) · chicken sashimi assortment (October 2026); straw-grilled thigh, best eaten within 20 minutes (September 2026); five-skewer yakitori omakase of negima, skirt, neck, heart and wings (August 2026) · liver special and liver sashimi (August 2026) · "luxurious" potato salad with ikura and tobiko; chicken-wing gyoza on a hot plate; yukke sushi; egg crème brûlée (August–September 2026) · sweet shrimp yukhoe with the heads; dashi omelette with mentaiko and ikura, made with Ranchou eggs (June and October 2026) · shrimp shabu-shabu (August 2026) · dried stingray fin grilled yourself on a shichirin (August and October 2026) · moromi cucumber, miso daikon (August 2026)',
    website: null, gmaps: gm('路地裏酒場 とんぼ 裏難波'), menu_url: null,
    notes: '[Yakitori · Ura-Namba, chicken sashimi and straw-grilled thigh] A busy Showa-style alley izakaya in Ura-Namba built on fresh local chicken: a chicken-sashimi assortment, binchotan skewers and straw-grilled thigh served rare. Add the ikura potato salad and the mentaiko-ikura dashi omelette, and grill your own stingray fin at the table. Open from 15:00 on weekdays and noon at weekends, with ¥100 highballs on weekday afternoons. Raw and rare chicken is a house style; order it cooked through if you prefer.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): fresh local chicken and binchotan yakitori; sister shops nearby, "Tombow Bekkan" (2nd) and "Tombow Ura" (3rd), where smoking is allowed; gurunavi also lists とんぼはなれ (search results).', philosophy: null, specialty: 'Chicken sashimi; straw-grilled chicken.',
      anecdotes: [
        { text: '"I was told that the best time to enjoy it is within 20 minutes, so I hurried to eat it. I had never tried chicken that wasn\'t fully cooked before" — September 2026, the straw-grilled chicken.', source: R + 'B536249821/' },
        { text: '"I had reserved an all-you-can-drink course in advance, but I found out that the menu didn\'t include draft beer. So, I paid an additional JPY 500 to add it." — August 2026.', source: R + 'B534186741/' },
        { text: '"One of the dishes I ordered never arrived. When our time at the table was up, we had to leave." — August 2026.', source: R + 'B533454269/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 裏難波 路地裏酒場 とんぼ、居酒屋・焼き鳥・鶏料理、大阪市中央区難波千日前13-6 千日前セントラル第4ビル 1F、なんば駅から徒歩3分、月〜金15:00〜24:00、土12:00〜24:00、日・祝12:00〜23:00、混雑時は2時間制、お通し450円、カード・電子マネー・QR 決済可、60席、禁煙 (喫煙は別館で)、平日15〜18時は角ハイボール100円、子ども連れのクーポン、ヴィーガン対応の表示、10品の飲み放題コース4,000円・4,500円。口コミ(2026年6月〜10月): 朝引きの地鶏の鶏刺し、備長炭の焼き鳥、レアで出す鶏ももの藁焼き、レバー、いくらととびこのポテトサラダ、手羽餃子、ユッケ寿司、玉子のブリュレ、頭つきの甘えびのユッケ、明太といくらのだし巻き、えびしゃぶ、七輪で焼くエイヒレ、ハッピーアワーは全部300円、注文が届かなかったという声も。系列は別館、裏、はなれ。',
      confidence: 'medium', sources: [TB, R + 'B512865218/', R + 'B530868124/', R + 'B531727076/', R + 'B533277847/', R + 'B533454269/', R + 'B533484325/', R + 'B533998745/', R + 'B534186741/', R + 'B534888710/', R + 'B535764706/', R + 'B536249821/', R + 'B536861681/', R + 'B536873476/', R + 'B538382684/', R + 'B538410720/', 'https://r.gnavi.co.jp/kee1600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively alley izakaya; families welcome. No English evidence found.' },
    safety: { ...SAFETY0, positives: [] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前13-6 千日前セントラル第4ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前13番6号 (go) 11m. Nearest records: 山桜 (13-5) 10 m, 炭焼笑店 陽 難波店 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538410720/', R + 'B533277847/', TB],
    price_note: 'Courses from the Tabelog listing; dishes from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken sashimi assortment (morning-slaughtered chicken)', '', 'Signature', 'ask', 'no', 'October 2026 review.', 'torisashi'),
      it('', '', 'Straw-grilled chicken thigh (served rare)', '', 'Signature', 'ask', 'no', 'July and September 2026 reviews.', 'wara_yaki'),
      it('', '', 'Yakitori omakase, 5 skewers', '', 'Yakitori', 'ask', 'no', 'August 2026 review.', 'yakitori_5'),
      it('', '', 'Dashi omelette with mentaiko and ikura', '', 'Small plates', 'ask', 'no', 'June and October 2026 reviews.', 'dashimaki'),
      it('', '', 'Course with all-you-can-drink, 10 dishes', '¥4,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_4000'),
    ] }, {
    cuisine: '新鮮な地鶏の昭和レトロな路地裏の居酒屋: 朝引きの鶏の鶏刺し、備長炭の焼き鳥、レアで出す鶏ももの藁焼き (食べログの店の紹介、2026年7〜10月)・飲み放題つきのコース10品4,000円か4,500円 (食べログ)・鶏刺しの盛り合わせ (2026年10月)、20分以内が食べごろの鶏ももの藁焼き (2026年9月)、ねぎま、ハラミ、せせり、ハツ、手羽の焼き鳥おまかせ5本 (2026年8月)・レバー特製とレバ刺し (2026年8月)・いくらととびこの「贅沢」ポテトサラダ、鉄板の手羽餃子、ユッケ寿司、玉子のクレームブリュレ (2026年8〜9月)・頭つきの甘えびのユッケ、Ranchou の卵の明太といくらのだし巻き (2026年6月・10月)・えびしゃぶ (2026年8月)・七輪で自分で焼くエイヒレ (2026年8月・10月)・もろきゅう、味噌大根 (2026年8月)',
    neighborhood: '難波千日前13-6 千日前セントラル第4ビル 1F、裏なんばの路地。なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥はたれか塩で、手羽餃子、えびしゃぶ、だし巻きもある。',
    vegan_detail: '要確認。食べログにはヴィーガン対応とあるが詳細なし。鶏、魚介、だし巻きが中心。',
    notes: '[焼き鳥・裏なんば、鶏刺しと鶏ももの藁焼き] 裏なんばのにぎやかな昭和風の路地裏の居酒屋で、新鮮な地鶏が主役: 鶏刺しの盛り合わせ、備長炭の串、レアで出す鶏ももの藁焼き。いくらのポテトサラダ、明太といくらのだし巻きも頼んで、エイヒレは卓上で自分で焼く。平日は15時から、週末は昼12時からで、平日の昼すぎは角ハイボールが100円。生やレアの鶏が店のスタイルなので、よく焼きがよければ注文のときに伝えて。',
  });
}

// ================================================================ くろ屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27145495/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']), WE = day(['12:00', '16:00'], ['17:00', '23:30']);
  put({
    id: 'osaka_kuroya_nishishinsaibashi', name: '肉と炉端と釜めし くろ屋 (Niku to Robata to Kamameshi Kuroya)', category: 'OMNI',
    lat: 34.673611, lng: 135.498074, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kamameshi is cooked in a bonito and kombu dashi (Tabelog); the menu also has tuna cutlet, giant shrimp with tartare, burdock tempura and ankimo with ponzu jelly.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the kamameshi is cooked in a bonito and kombu dashi (Tabelog), and the menu is meat and fish.',
    hours_raw: 'Mon–Fri 17:00–23:30; Sat, Sun and holidays 12:00–16:00 and 17:00–23:30; last order food 22:30 (kamameshi and genshi-yaki 22:00), drinks 23:00; closed irregularly (Tabelog). Weekend lunch all-you-can-drink 120 minutes ¥1,650 with two dishes per person (Tabelog). Reservations accepted; 2-hour limit on courses, 2.5 hours for table-only bookings (Tabelog). Appetiser ¥350 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay and Alipay; no e-money (Tabelog). 41 seats with counter, sofas, tatami and sunken seating, a private room for 8; non-smoking, ashtray by the entrance (Tabelog). English, Chinese and Korean menus with photos; English-speaking staff (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-10-19, 心斎橋尼伊ビル 1F — 3 min from Shinsaibashi Stn and Yotsubashi Stn',
    cuisine: 'Robata izakaya of "genshi-yaki" (slow grilling over indirect heat), straw-grilling, and kamameshi of domestic Koshihikari cooked in a bonito-kombu dashi with chicken, beef or fish (Tabelog shop text) · September 2026 prices: fatty sardine ¥850, extra-large shrimp with homemade tartare ¥1,490, straw-grilled beef skirt tataki ¥1,290, Chateaubriand skewers ¥830, salmon belly and ikura kamameshi ¥1,980, smoked potato chips with mentaiko potato salad ¥750, rare tuna cutlet in shiso ¥980 · October 2026 prices: salmon belly and ikura kamameshi ¥2,190, beef tail and green onion kamameshi ¥2,080, homemade roast beef ¥1,030, rare tuna cutlet ¥1,180, Chateaubriand skewers (2) ¥1,760, fatty sardine ¥890, extra-large shrimp ¥1,690 · ankimo with ponzu jelly, thick shiitake, mentaiko dashi omelette, smoked assortment, whole roasted onion (August–September 2026) · ikura-topped baguette (August 2026) · grilled squid, heart sashimi, yam, burdock tempura appetiser (September 2026) · sea bream head, Mont Blanc (October 2026) · ¥5,500 course (August 2026) · leftover kamameshi can be taken home as rice balls (September 2026)',
    website: null, gmaps: gm('肉と炉端と釜めし くろ屋'), menu_url: null,
    notes: '[Robata izakaya · Nishi-Shinsaibashi, slow-grilled fish and kamameshi] A wood-toned izakaya near Yotsubashi built around "genshi-yaki", fish and shrimp grilled slowly beside the fire, and iron-pot kamameshi in a house dashi. Order the fatty sardine, the giant shrimp, the rare tuna cutlet and a salmon-and-ikura kamameshi to finish (order it early; it takes time). Prices rose between September and October 2026. English menu and English-speaking staff; weekend lunch from noon.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): robata cooking "from the era without gas or electricity" — genshi-yaki over indirect heat and wara-yaki — and kamameshi of domestic Koshihikari in a bonito and kombu dashi made from scratch. Some reviewers and Foodle call it 難波店 (Namba branch).', philosophy: 'Fire, aroma and food.', specialty: 'Genshi-yaki; kamameshi.',
      anecdotes: [
        { text: '"We received only one sardine for two people in the course. Doesn\'t that seem a bit too little?" — August 2026, the ¥5,500 course.', source: R + 'B532925055/' },
        { text: '"Enjoy the crispy bits and ochazuke (rice with tea), and if there\'s any leftover, you can take it home as onigiri" — September 2026.', source: R + 'B533368249/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉と炉端と釜めし くろ屋、居酒屋・炉端焼き・肉料理、大阪市中央区西心斎橋1-10-19 心斎橋尼伊ビル 1F、心斎橋駅・四ツ橋駅から徒歩3分、月〜金17:00〜23:30、土日祝12:00〜16:00、17:00〜23:30 (料理 L.O. 22:30、釜めしと原始焼きは22:00)、不定休、週末の昼は120分飲み放題1,650円 (ひとり2品以上)、予約可、お通し350円、カード・PayPay・Alipay 可、電子マネー不可、41席、個室8名、禁煙 (入口横に灰皿)、英語・中国語・韓国語のメニュー、英語を話すスタッフ。原始焼き、藁焼き、国産の Koshihikari をかつお節と昆布のだしで炊く釜めし。口コミ(2026年8月〜10月): とろいわし850円 (10月は890円)、特大えびの自家製タルタル1,490円 (10月は1,690円)、ハラミのたたきの藁焼き1,290円、シャトーブリアンの串、サーモンハラスといくらの釜めし1,980円 (10月は2,190円)、ぎゅうテールとねぎの釜めし2,080円、まぐろのレアカツ、あん肝のポン酢ジュレ、燻製の盛り合わせ、玉ねぎの丸焼き、残った釜めしはおにぎりで持ち帰れる、5,500円のコースは量が少ないという声も。',
      confidence: 'medium', sources: [TB, R + 'B532925055/', R + 'B533368249/', R + 'B533573529/', R + 'B534520799/', R + 'B534819676/', R + 'B535008641/', R + 'B535510667/', R + 'B536260828/', R + 'B536354949/', R + 'B536917947/', R + 'B537090401/', R + 'B537150227/', R + 'B537767889/', R + 'B538225281/', R + 'B538430293/', 'https://foodle.pro/restaurants/osaka/6812137b32ce2'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-19 心斎橋尼伊ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目10番19号 (go) 12m. Same address as Streamer Coffee Company 心斎橋 (osaka_streamer_coffee_shinsaibashi) 9 m away on its own point; 天ぷら互生 20 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536354949/', R + 'B537767889/', TB],
    price_note: 'Prices from September and October 2026 reviews; several rose in October.', last_checked: TODAY, items: [
      it('', '', 'Salmon belly and ikura kamameshi', '¥1,980–2,190', 'Kamameshi', 'ask', 'no', 'September (¥1,980) and October (¥2,190) 2026 reviews.', 'harasu_ikura_kamameshi'),
      it('', '', 'Beef tail and green onion kamameshi', '¥2,080', 'Kamameshi', 'ask', 'no', 'October 2026 review.', 'gyutail_kamameshi'),
      it('', '', 'Fatty sardine, genshi-yaki', '¥850–890', 'Robata', 'ask', 'no', 'September and October 2026 reviews.', 'toro_iwashi'),
      it('', '', 'Extra-large shrimp with homemade tartare', '¥1,490–1,690', 'Robata', 'ask', 'no', 'September and October 2026 reviews.', 'ebi_tartare'),
      it('', '', 'Rare tuna cutlet in shiso', '¥980–1,180', 'Fried', 'no', 'no', 'September and October 2026 reviews.', 'maguro_rare_katsu'),
    ] }, {
    cuisine: '「原始焼き」(遠火でじっくり焼く)、藁焼き、国産の Koshihikari をかつお節と昆布のだしで鶏、牛、魚と炊く釜めしの炉端の居酒屋 (食べログの店の紹介)・2026年9月の値段: とろいわし850円、特大えびの自家製タルタル1,490円、牛ハラミのたたきの藁焼き1,290円、シャトーブリアンの串830円、サーモンハラスといくらの釜めし1,980円、燻製ポテトチップスと明太ポテトサラダ750円、大葉で巻いたまぐろのレアカツ980円・2026年10月の値段: サーモンハラスといくらの釜めし2,190円、ぎゅうテールとねぎの釜めし2,080円、自家製ローストビーフ1,030円、まぐろのレアカツ1,180円、シャトーブリアンの串2本1,760円、とろいわし890円、特大えび1,690円・あん肝のポン酢ジュレ、肉厚しいたけ、明太だし巻き、燻製の盛り合わせ、玉ねぎの丸焼き (2026年8〜9月)・いくらをのせたバゲット (2026年8月)・イカの焼き物、ハツ刺し、長芋、お通しのごぼうの天ぷら (2026年9月)・鯛のかぶと、モンブラン (2026年10月)・5,500円のコース (2026年8月)・残った釜めしはおにぎりにして持ち帰れる (2026年9月)',
    neighborhood: '西心斎橋1-10-19 心斎橋尼伊ビル 1F。心斎橋駅・四ツ橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。釜めしはかつお節と昆布のだしで炊く (食べログ)。まぐろのカツ、えびのタルタル、ごぼうの天ぷら、あん肝のポン酢ジュレもある。',
    vegan_detail: 'ヴィーガンではありません。釜めしはかつお節と昆布のだしで炊き (食べログ)、料理は肉と魚。',
    notes: '[炉端の居酒屋・西心斎橋、遠火の魚と釜めし] 四ツ橋近くの木の温もりのある居酒屋で、魚やえびを火のそばでじっくり焼く「原始焼き」と、店のだしで炊く鉄釜の釜めしが看板。とろいわし、特大えび、まぐろのレアカツを頼んで、締めはサーモンといくらの釜めしを (時間がかかるので早めに注文を)。2026年9月から10月に値上がりした。英語のメニューと英語を話すスタッフあり。週末は昼12時から。',
  });
}

save();
