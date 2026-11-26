// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 95.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance). Shops fetched by the worker from
//   Tabelog /en/ with 3 s between requests.
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 京都 炭火鰻 翠川 祇園八坂 — charcoal-grilled domestic eel by the pond in Maruyama Park, opened 16 November 2024 (Tabelog);
//     no source romaji (Tabelog's English listing name is machine romaji), so the name stays in kanji
//   + 炭火焼 木石 (Sumibiyaki Kiseki; reading スミビヤキキセキ from gurunavi) — irori-table charcoal grill at Fuyacho-Nijo, opened 2015
//   + ステーキハウス 芦屋 (Steak House Ashiya; gurunavi gives ステーキハウスアシヤ, the shop's domain is steak-house-ashiya.com)
//     — teppan steak in an old house near Kiyomizu, "Kyoto's first steakhouse since 1970" (Tabelog official information)
//   + &Hoek (あんどふーく per rurubu) — machiya café of seasonal fruit pies at Kiyomizu-Gojo, opened 28 December 2025
//   Skips: THE OIKE TERRACE (big-chain hotel), 京都ことこと 烏丸御池店 (hotel restaurant of a Tokyu Stay, flagged), ホリーズカフェ (chain).
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Brands: all four are single shops as far as searched (翠川: HotPepper and a web search show only this shop).
//   Service charges: Steak House Ashiya's prices include service charge and tax (Tabelog). None found for the others.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042631', 'ダイニング＆カフェ THE OIKE TERRACE: big-chain hotel venue — the restaurant of ザ ロイヤルパークホテル アイコニック 京都 (Royal Park Hotels; ozmall, ikyu); Tabelog tags it "Hotel restaurant" and notes The Club points');
skip('26030313', '京都ことこと 烏丸御池店: big-chain hotel venue — Tabelog tags it "Hotel restaurant" with breakfast, gurunavi says 宿泊施設と隣接, and its address 柿本町392 is that of 東急ステイ京都両替町通 (now 東急ステイ京都三条烏丸, travelist); operator not found (flagged)');
skip('26036895', 'ホリーズカフェ 三条室町店: chain — ホリーズカフェ already ruled a chain (osw8-51)');

// ================================================================ 京都 炭火鰻 翠川 祇園八坂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042193/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ004067526/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_sumibi_unagi_tb26042193', name: '京都 炭火鰻 翠川 祇園八坂', category: 'OMNI',
    lat: 35.003030077144764, lng: 135.78093680437942, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: the eel is glazed with a house tare (reviews), and no gluten information is published; ask about salt-grilled wagyu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel and wagyu restaurant.',
    hours_raw: '11:00–21:00 daily including holidays (last order 20:00); 29 December–4 January 11:00–20:00 (last order 19:00) (Tabelog). HotPepper gives last orders at 19:30 and no regular closing day. Bookings taken, online through Tabelog (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments (PayPay, Rakuten Pay, au PAY; Alipay on Tabelog); e-money accepted per Tabelog, not accepted per HotPepper. 61 seats (Tabelog) or 80 (HotPepper); no private rooms. Non-smoking. No parking. By the pond inside Maruyama Park, about 10 minutes on foot from Keihan Gion-Shijo through Yasaka Shrine (Tabelog). Opened 16 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Domestic eel skewered and grilled Kansai-style over binchotan by skilled craftsmen (HotPepper; June 2026), with A5 Kuroge wagyu sirloin grilled over charcoal · unaju with a whole eel (premium) ¥7,700, with liver soup, uzaku and pickles (May–July 2026); the same unaju at ¥7,000 and the eel-and-A5-wagyu bowl at ¥8,000 in May–June 2026 · domestic eel and A5 wagyu sirloin bowl ¥8,800, with yuba soup and pickles (May 2026) · a special unaju with two eels (June 2026) · umaki and grilled liver on the menu (May 2026) · glass of wine ¥880 (May 2026), draft beer ¥850–935, sake ¥800 (June–July 2026)',
    website: null, gmaps: gm('京都 炭火鰻 翠川 祇園八坂'), menu_url: null,
    notes: '[Unagi · Maruyama Park, charcoal eel by the pond] Charcoal-grilled domestic eel in a Japanese-style building by the pond in Maruyama Park: unaju with a whole eel, and a bowl that pairs eel with A5 wagyu sirloin. Window tables look over the garden and pond. Open all day from 11:00; bookings taken.',
    chef_bio: { chef_name: null, roles: ['Operator (not named)'], origin: null,
      background: 'Opened on 16 November 2024 (Tabelog). By the pond in the Japanese garden of Maruyama Park, south of Yasaka Shrine (May–June 2026 reviews). A June 2026 reviewer heard the building was once a teahouse and describes a calm modern-Japanese room of warm wood with large windows on the garden and pond; the grill can be watched from inside and outside (June 2026). HotPepper describes skilled craftsmen grilling selected domestic eel over charcoal one skewer at a time. A May 2026 reviewer noticed many visitors from overseas.',
      philosophy: null,
      specialty: 'Unaju with a whole domestic eel; eel and A5 wagyu sirloin bowl.',
      anecdotes: [
        { text: 'A May 2026 couple arrived just after 11:00, well before the booked time, and got a window table looking over the weeping cherry and the pond — enough to order unplanned wine.', source: R + 'B528806501/' },
        { text: 'A June 2026 diner timed it: seated two minutes after arriving at 12:50 on a Sunday with a booking, beer on the table by 12:59, and a whole eel so long it seemed ready to leap out of the box.', source: R + 'B530144911/' },
        { text: 'A local who came in July 2026 had not known the place existed until recently, about a year after it opened, and was struck by how fresh the eel soup tasted.', source: R + 'B531196778/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): 京都 炭火鰻 翠川 祇園八坂、うなぎ・日本料理・甘味処、京都市東山区円山町467、京阪祇園四条駅から八坂神社を抜けて徒歩約10分、毎日11:00〜21:00 (L.O.20:00)、12月29日〜1月4日は11:00〜20:00、予約可、カード可、電子マネー可、QRコード決済可、61席、個室なし、全席禁煙、駐車場なし、オープン日2024年11月16日。ホットペッパー: 月〜日11:00〜21:00 (料理L.O.19:30、ドリンクL.O.19:30)、定休日なし、80席、全席禁煙、電子マネー利用不可、厳選された国産鰻を熟練の職人が一串一串、丁寧に炭火で調理、鰻重・鰻丼、A5黒毛和牛サーロインと鰻重。口コミ (2026年5〜7月、英語): 円山公園の池のそば、窓から庭と池、関西風の炭火焼き、鰻重 (上) 7,700円 (肝吸い、うざく、香の物付き)、国産鰻とA5和牛サーロインの重8,800円 (2026年5月)、2026年5〜6月は鰻重7,000円と鰻と和牛の重8,000円。',
      confidence: 'medium', sources: [TB, HP, R + 'B527815795/', R + 'B528806501/', R + 'B528836672/', R + 'B529290295/', R + 'B530144911/', R + 'B530193132/', R + 'B530699622/', R + 'B531196778/', R + 'B531818523/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (May 2026 review); bookings online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区円山町467',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member) and HotPepper; reviews dated May–July 2026.' },
    pin_source: `Tabelog ${TB} (35.003030, 135.780937); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528806501/', R + 'B531818523/', R + 'B530193132/'],
    price_note: 'Prices from reviews, dated by visit; ¥7,000/¥8,000 in May–June 2026 and ¥7,700/¥8,800 in May–July 2026 reviews.', last_checked: TODAY, items: [
      it('鰻重 (上)', '', 'Unaju with a whole domestic eel, liver soup, uzaku and pickles', '¥7,700', 'Eel', 'no', 'no', 'May–July 2026; ¥7,000 in May–June 2026 reviews.', 'unaju'),
      it('国産鰻とA5和牛サーロインの重', '', 'Domestic eel and A5 wagyu sirloin bowl, with yuba soup and pickles', '¥8,800', 'Eel', 'no', 'no', 'May 2026; ¥8,000 in May–June 2026 reviews.', 'unagi_wagyu'),
    ] }, {
    cuisine: '国産鰻を職人が串打ちし備長炭で関西風に焼く (ホットペッパー、2026年6月)、A5黒毛和牛サーロインの炭火焼きも・鰻を一尾のせた鰻重 (上) 7,700円、肝吸い、うざく、香の物付き (2026年5〜7月)、2026年5〜6月は鰻重7,000円、鰻とA5和牛の重8,000円・国産鰻とA5和牛サーロインの重8,800円、湯葉のお吸い物と香の物付き (2026年5月)・鰻二尾の特上の鰻重 (2026年6月)・う巻きと肝焼きもある (2026年5月)・グラスワイン880円 (2026年5月)、生ビール850〜935円、日本酒800円 (2026年6〜7月)',
    neighborhood: '円山公園',
    gf_detail: 'グルテンフリー不可 (提供のまま)。鰻は店のたれで焼く (口コミ)。グルテンの情報は公開されていない。和牛の塩での提供は要確認。',
    vegan_detail: 'ヴィーガン不可。鰻と和牛の店。',
    notes: '[鰻・円山公園、池のそばの炭火鰻] 円山公園の池のそばの和風の建物で炭火焼きの国産鰻。一尾のせた鰻重、鰻とA5和牛サーロインの重。窓際の席から庭と池が見える。11時から通し営業、予約可。',
  });
}

// ================================================================ 炭火焼 木石
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026497/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://keh5300.gorp.jp/'; const GN = 'https://r.gnavi.co.jp/7fg0ka5p0000/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kiseki_fuyacho', name: '炭火焼 木石 (Sumibiyaki Kiseki)', category: 'OMNI',
    lat: 35.0130815176336, lng: 135.76592703259723, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood, meat and vegetables grilled over charcoal at the table, horse and chicken sashimi, sea bream rice; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and meat grill; vegetables are grilled too, but no vegan information is published.',
    hours_raw: '18:00–23:00 daily including holidays (last order 22:00), closed irregularly (official site; Tabelog). Bookings by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no debit cards, e-money or QR payments (Tabelog). 24 seats with counter seating and two semi-private rooms for 6–10 and 12–14; up to 24 seated or 40 standing for parties (official site; Tabelog). Smoking allowed (Tabelog). All-you-can-drink available; English menu (Tabelog). On the ground floor of the 塩田ビル on Fuyacho south of Nijo, 5 minutes from Kyoto Shiyakusho-mae station, exit 9 at Zest Oike (official site; Tabelog). Opened 7 October 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho-Nijo',
    cuisine: 'Charcoal-grill restaurant with an irori hearth at every table, local sake and seasonal ingredients (official site; gurunavi) · seafood platter ¥1,000, red horse-meat sashimi ¥800, chicken sashimi ¥1,500 (official site, tax included, undated); Kagoshima jidori sashimi (official site) · grilled sea urchin (July 2024; November 2020) · shrimp, scallops and fatty yellowtail collar grilled over charcoal, thick-cut sashimi (November 2025) · grilled squid and oysters, vegetables, tsukune and hamburg steak to grill (December 2025) · sea bream rice (June 2024; March 2026) · a ¥11,000 course of seafood, vegetables and large cuts of beef, ending with steak (November 2024) · all-you-can-drink with shochu and sake (December 2024)',
    website: SITE, gmaps: gm('炭火焼 木石 麩屋町'), menu_url: SITE,
    notes: "[Izakaya · Fuyacho-Nijo, irori charcoal grill] A charcoal-grill izakaya where every table has an irori hearth: seafood such as sea urchin, scallops and yellowtail collar grilled in front of you, horse and chicken sashimi, and sea bream rice, with sake and shochu. Several reviewers note slow service. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'Opened on 7 October 2015 (Tabelog); the official site marks its 11th anniversary. gurunavi says the owner picks the seasonal ingredients. A December 2024 reviewer found the owner approachable and warm; a March 2024 reviewer thought it family-run, seeing the owner’s children at the shop, and found it hard for the owner to manage alone at that size. The official site says the horse sashimi has impressed people from Kumamoto.',
      philosophy: 'Local sake and fresh seasonal ingredients grilled over charcoal (official site).',
      specialty: 'Seafood grilled over charcoal at the irori; horse sashimi.',
      anecdotes: [
        { text: 'A November 2024 traveller, finding everything closed on a Wednesday night, phoned without a booking; the person on the phone gave directions from the hotel, and the ¥11,000 course of seafood, vegetables and beef seemed half the price it would be in Tokyo.', source: R + 'B496289023/' },
        { text: 'In August 2019 a diner liked grilling at the irori but found the room so hot in summer, with every table’s hearth lit, that the air conditioning could not keep up; the service was slow.', source: R + 'B452089621/' },
        { text: 'A July 2024 visitor expected to grill anything and found only a limited selection could be grilled at the table, but tried grilled sea urchin for the first time and loved it.', source: R + 'B491713374/' },
        { text: 'A November 2025 diner praised the top-quality seafood but called the service slow and, with the long waits, the value low.', source: R + 'B519711577/' },
        { text: 'A January 2024 guest noted that charcoal was not used that evening, but enjoyed the meat, a generous grilled amberjack collar and the rice.', source: R + 'B478229290/' },
      ],
      japanese_sources_summary: '公式サイト: 炭火焼 木石、全席囲炉裏完備の炭火焼専門店、美味しい地酒と新鮮な旬の素材を炭火焼きで、11周年、海鮮盛り1,000円 (税込)、馬刺し 赤身800円 (税込)、鶏刺し1,500円 (税込)、鹿児島地鶏刺し、熊本の方も唸った馬刺し、総席数24席、18:00〜23:00 (L.O.22:00)、定休日なし (不定休日あり)、京都府京都市中京区麩屋町通二条下ル尾張町220-1 塩田ビル1F、地下鉄東西線京都市役所前駅から徒歩5分。ぐるなび: 炭火焼 木石 (スミビヤキキセキ)、店主自らが選び抜いた旬の食材、シェフがいる、テーブル個室あり。食べログ (店舗会員、英語版): 海鮮・もつ鍋・居酒屋、毎日18:00〜23:00、不定休、予約可、カード可、デビットカード不可、24席、半個室 (6〜10名、12〜14名)、喫煙可、飲み放題、英語メニュー、オープン日2015年10月7日。口コミ (2019〜2026年、英語): 囲炉裏で焼く、焼きウニ、提供が遅い (2019年8月、2024年3月、2025年11月)、夏は暑い (2019年8月)、11,000円のコース (2024年11月)、鯛めし (2024年6月、2026年3月)。',
      confidence: 'medium', sources: [SITE, GN, TB, R + 'B452089621/', R + 'B478229290/', R + 'B482264651/', R + 'B489154944/', R + 'B491713374/', R + 'B496289023/', R + 'B497872506/', R + 'B519711577/', R + 'B520134369/', R + 'B523855500/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通二条下ル尾張町220-1 塩田ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (11th anniversary) and Tabelog listing (corporate member); reviews dated November and December 2025 and March 2026.' },
    pin_source: `Tabelog ${TB} (35.013082, 135.765927); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B496289023/'],
    price_note: 'Official-site prices, tax included, undated; course price from a November 2024 review.', last_checked: TODAY, items: [
      it('海鮮盛り', '', 'Seafood platter', '¥1,000', 'Sashimi', 'ask', 'no', 'Official site.', 'kaisen_mori'),
      it('馬刺し 赤身', '', 'Red horse-meat sashimi', '¥800', 'Sashimi', 'ask', 'no', 'Official site.', 'basashi'),
      it('鶏刺し', '', 'Chicken sashimi', '¥1,500', 'Sashimi', 'ask', 'no', 'Official site.', 'torisashi'),
      it('', '', 'Course of seafood, vegetables and beef, ending with steak', '¥11,000', 'Courses', 'ask', 'no', 'November 2024 review.', 'course'),
    ] }, {
    cuisine: '全席に囲炉裏のある炭火焼の店、地酒と旬の素材 (公式サイト、ぐるなび)・海鮮盛り1,000円、馬刺し 赤身800円、鶏刺し1,500円 (公式サイト、税込、日付なし)、鹿児島地鶏刺し (公式サイト)・焼きウニ (2024年7月、2020年11月)・海老、ホタテ、脂ののったブリのカマの炭火焼き、厚切りの刺身 (2025年11月)・イカと牡蠣の焼き物、野菜、つくね、ハンバーグも焼ける (2025年12月)・鯛めし (2024年6月、2026年3月)・海鮮、野菜、大きな牛肉、締めのステーキの11,000円のコース (2024年11月)・焼酎と日本酒の飲み放題 (2024年12月)',
    neighborhood: '麩屋町二条',
    gf_detail: '要確認。囲炉裏で焼く海鮮、肉、野菜、馬刺し、鶏刺し、鯛めし。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮と肉の炭火焼の店。野菜も焼くが、ヴィーガンの情報はない。',
    notes: '[居酒屋・麩屋町二条、囲炉裏の炭火焼] 全席に囲炉裏のある炭火焼の居酒屋。ウニ、ホタテ、ブリのカマなどの海鮮を目の前で焼き、馬刺し、鶏刺し、鯛めし、日本酒と焼酎も。提供が遅いという口コミが複数ある。喫煙可。',
  });
}

// ================================================================ ステーキハウス 芦屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001627/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/5ugzupm40000/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_steak_house_ashiya', name: 'ステーキハウス 芦屋 (Steak House Ashiya)', category: 'OMNI',
    lat: 34.99639876788071, lng: 135.77776113026292, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan-grilled wagyu steak courses with salad, potatoes with butter and dessert; no gluten information is published (gurunavi; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak courses.',
    hours_raw: 'Wednesday–Sunday 17:30–22:00, closed Monday and Tuesday (Tabelog); gurunavi gives 17:30–21:00. Reservation only; seat requests are not taken, as seating depends on party size (Tabelog; gurunavi). No preschool children (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Prices include service charge and tax (Tabelog). 15 seats, all at a sunken-kotatsu counter in a tatami room (Tabelog; gurunavi); private hire up to 20. Non-smoking. English menu (Tabelog). A maiko visit can be arranged for an extra fee, by reservation (Tabelog). In a back alley near Kiyomizu-dera, on Matsubara east of Hiromichi (gurunavi address; 2016 review). The website listed on Tabelog (steak-house-ashiya.com) did not resolve on 26 November 2026.',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu',
    cuisine: 'Wagyu teppan-yaki grilled in front of you at a sunken counter (gurunavi; December 2013; May 2014) · steak courses of 100 g ¥12,000, 150 g ¥18,000, 200 g ¥23,000 (gurunavi, undated) · a ¥10,000 course (November 2016) · salad with a house dressing, steamed potatoes with butter, potato salad, dessert (December 2013; May 2014; May 2015) · steak with vegetables (April 2026)',
    website: null, gmaps: gm('ステーキハウス 芦屋 京都 清水'), menu_url: GN,
    notes: "[Steak · Kiyomizu, a steakhouse since 1970] A teppan steakhouse in an old Japanese house near Kiyomizu-dera, which calls itself Kyoto's first steakhouse, since 1970: wagyu grilled in front of you at a sunken counter over the garden, with a gallery upstairs of photos of famous guests. Reviewers love the playful proprietress. Reservation only; a maiko visit can be arranged.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and proprietress (not named)'], origin: null,
      background: 'Tabelog (official information): "We have been operating as Kyoto’s first steakhouse since 1970." gurunavi: opened over 40 years ago in a renovated traditional Japanese house, with a skilled owner and a playful proprietress (お茶目な女将). Reviewers give the history as about 50 years (December 2013) and recall visiting with family over 50 years earlier, when the owner was an American and many customers were Americans (May 2014). That May 2014 reviewer says the American owner has since died and the proprietress now runs the restaurant; a December 2013 reviewer says the proprietress’s husband is American. Reviewers describe celebrity guests, including President Clinton and Hollywood stars (December 2013; May 2015), a red fan at the entrance in memory of the late actor Ken Takakura (December 2013), and an upstairs gallery of photos of notable guests (May 2015). An April 2026 reviewer heard that about 80% of customers come from overseas.',
      philosophy: 'Hospitality unchanged since it opened (gurunavi).',
      specialty: 'Teppan-grilled wagyu steak courses; steamed potatoes with butter.',
      anecdotes: [
        { text: 'A May 2014 diner, back after several decades, found the steamed potatoes with butter that had seemed so strange as a child still on the menu, though the chef of old heaped on far more butter.', source: R + 'B51254390/' },
        { text: 'A review dated May 2015 tells of a Christmas Eve visit: a couple got a same-day booking, were greeted at the door by the proprietress, toured the upstairs gallery, and ended with a surprise the reviewer kept secret.', source: R + 'B95625786/' },
        { text: 'An August 2018 visitor found the building old enough to be a little worrying and the food somewhat lacking, but wanted to come back just to see the owner again.', source: R + 'B372327891/' },
        { text: 'A December 2013 reviewer called the proprietress the most entertaining hostess in Kyoto and urged readers to go while the proprietress is still lively.', source: R + 'B111266787/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): ステーキハウス 芦屋、ステーキ・洋食・鉄板焼き、京都市東山区清水4-172-13、水〜日17:30〜22:00、月・火定休、完全予約制、席の指定不可、掘りごたつのカウンター15席、未就学児不可、カード可、表示料金にはサービス料と消費税を含む、全席禁煙、英語メニュー、1970年から京都初のステーキハウス、舞妓の手配可 (有料、要予約)。ぐるなび: ステーキハウス 芦屋 (ステーキハウスアシヤ)、清水寺付近の隠れ家、腕利きの店主とお茶目な女将、四十数年前に伝統的な日本家屋を改築して開業、開業40年以来変わらぬおもてなし、17:30〜21:00、月・火定休、15席、ステーキ100gコース12,000円、150gコース18,000円、200gコース23,000円、席の指定は一切お断り。口コミ (2013〜2026年、英語): 約50年の歴史 (2013年12月)、アメリカ人の店主は亡くなり今は女将が切り盛り (2014年5月)、じゃがバター、2階のギャラリー (2015年5月)、客の約8割が海外から (2026年4月)。',
      confidence: 'medium', sources: [TB, GN, R + 'B111266787/', R + 'B203913755/', R + 'B372327891/', R + 'B51254390/', R + 'B526922776/', R + 'B95625786/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); about 80% of guests from overseas (April 2026 review). Reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原広道東入ル清水4-172-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member) and gurunavi; review dated April 2026. The website on Tabelog did not resolve on 2026-11-26.' },
    pin_source: `Tabelog ${TB} (34.996399, 135.777761); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [GN],
    price_note: 'gurunavi course prices, undated; Tabelog says displayed prices include service charge and tax.', last_checked: TODAY, items: [
      it('ステーキ100gコース', '', 'Steak course, 100 g', '¥12,000', 'Courses', 'ask', 'no', 'gurunavi.', 'steak100'),
      it('ステーキ150gコース', '', 'Steak course, 150 g', '¥18,000', 'Courses', 'ask', 'no', 'gurunavi.', 'steak150'),
      it('ステーキ200gコース', '', 'Steak course, 200 g', '¥23,000', 'Courses', 'ask', 'no', 'gurunavi.', 'steak200'),
    ] }, {
    cuisine: '掘りごたつのカウンターで目の前で焼く和牛の鉄板焼きステーキ (ぐるなび、2014年5月)・ステーキ100gコース12,000円、150gコース18,000円、200gコース23,000円 (ぐるなび、日付なし)・10,000円のコース (2016年11月)・自家製ドレッシングのサラダ、じゃがバター、ポテトサラダ、デザート (2013年12月、2014年5月、2015年5月)・ステーキと野菜 (2026年4月)',
    neighborhood: '清水',
    gf_detail: '要確認。和牛の鉄板焼きステーキのコース、サラダ、じゃがバター、デザート。グルテンの情報は公開されていない (ぐるなび、口コミ)。',
    vegan_detail: 'ヴィーガン不可。ステーキのコース。',
    notes: '[ステーキ・清水、1970年からのステーキハウス] 清水寺近くの古い日本家屋の鉄板焼きステーキの店。1970年から京都初のステーキハウスとうたう。庭を望む掘りごたつのカウンターで目の前で焼く和牛、2階には著名な客の写真のギャラリー。お茶目な女将が口コミで人気。完全予約制、舞妓の手配も可。',
  });
}

// ================================================================ &Hoek
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044263/'; const R = TB + 'dtlrvwlst/';
  const RB = 'https://rurubu.jp/andmore/spot/80134443';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_and_hoek_gojo', name: '&Hoek', category: 'OMNI',
    lat: 34.99377313788073, lng: 135.77259768024, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a café of pies, tarts, cakes and baked goods (reviews; rurubu); no gluten-free item is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream pies, cheesecake and panna cotta; oat milk can be added to lattes for ¥50 (November 2026).',
    hours_raw: 'Wednesday–Sunday 10:00–17:00, closed Monday and Tuesday; hours may change (Tabelog; rurubu). A September 2026 review quoting the shop gives 10:00–18:00. No seat bookings, and items cannot be held; takeaway of cakes and baked goods (Tabelog; November 2026 review). Order and pay at the counter on the 1st floor first; self-service water; no time limit (August and November 2026 reviews). Lines form before opening on weekends, and the pies sell out by early afternoon (2026 reviews). Cards, e-money and QR accepted (Tabelog). Non-smoking. Counter seats and window seats on the 1st floor, more seating on the 2nd floor (2026 reviews; rurubu). About 6 minutes on foot from Keihan Kiyomizu-Gojo (rurubu). Opened 28 December 2025 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-Gojo',
    cuisine: 'Seasonal fruit pies, cakes and baked goods in a renovated wooden machiya (rurubu; November 2026) · caramel fig pie with figs from Joyo, Kyoto ¥850 (September 2026) · strawberry caramel pie (custard caramel strawberry pie) ¥1,100 (November 2026) · marron cream pie with rum and berry jam (October 2026) · banana caramel pie (October–November 2026) · lemon meringue pie (July 2026) · fig and tea Victoria cake (October 2026) · Shine Muscat panna cotta, fig tart (August 2026) · Basque cheesecake (September 2026) · café latte ¥650, iced chai ¥700, matcha latte ¥700, chamomile-apple herbal tea ¥700 (August–November 2026) · cookie tins on Mother’s Day, Father’s Day and other occasions only (rurubu)',
    website: null, gmaps: gm('&Hoek 京都 清水五条'), menu_url: null,
    notes: '[Café · Kiyomizu-Gojo, seasonal fruit pies] A café in a renovated wooden machiya, opened in December 2025 by two friends who had dreamed of running a café together since high school: big seasonal fruit pies such as the caramel fig and strawberry caramel, cakes and baked goods. Popular — lines before opening on weekends, pies sold out by early afternoon. Order and pay first; no seat bookings.',
    chef_bio: { chef_name: null, roles: ['Two co-owners, high-school classmates (not named)'], origin: null,
      background: 'rurubu: two women who were high-school classmates made the shared dream of running a café together come true at Kiyomizu-Gojo; fans of the sweets and of the gentle atmosphere the two create are growing fast. Opened on 28 December 2025 (Tabelog) in a renovated traditional wooden house (November 2026 review). A November 2026 reviewer came after seeing the café on TV.',
      philosophy: null,
      specialty: 'Seasonal fruit pies: caramel fig, strawberry caramel, marron cream.',
      anecdotes: [
        { text: 'An October 2026 visitor who had read the pies sell out by 15:00 came as a second stop and learned while still in line that the fig caramel pie had sold out — then watched the banana caramel pie go too, and settled happily for a fig and tea Victoria cake.', source: R + 'B536968635/' },
        { text: 'A September 2026 diner who saw on Instagram that the fig pie sells out around 13:00–14:00 arrived at 10:30 and found the pie large and full of whole figs.', source: R + 'B536286733/' },
        { text: 'A November 2026 visitor found the 1st floor full, was seated upstairs in a high-ceilinged room with big windows, and spent ¥1,650 on pie and coffee before a line formed outside.', source: R + 'B539627447/' },
        { text: 'A Saturday-afternoon visitor in August 2026 queued to pay, found the room full of young women and couples, and planned a quieter weekday next time.', source: R + 'B534903167/' },
      ],
      japanese_sources_summary: 'るるぶ&more: ＆Hoek (アンドフーク、あんどふーく)、京都府京都市東山区下新シ町345、10〜17時、月・火曜休み、京阪清水五条駅から徒歩6分、駐車場なし、高校の同級生だった女の子2人が「一緒にカフェをやる！」という夢を清水五条で叶えた店、旬のフルーツを使ったケーキ、焼き菓子のテイクアウト、クッキー缶は母の日、父の日など記念日限定、カウンター席。食べログ: &Hoek、カフェ、水〜日10:00〜17:00、月・火定休、予約不可、カード・電子マネー・QRコード決済可、全席禁煙、オープン日2025年12月28日。口コミ (2026年、英語): キャラメル無花果パイ850円 (Joyo のいちじく、2026年9月)、いちごのキャラメルパイ1,100円 (2026年11月)、マロンクリームパイ (2026年10月)、レモンパイ (2026年7月)、先に1階で注文と支払い、週末は開店前から行列、パイは昼過ぎに売り切れ。',
      confidence: 'medium', sources: [TB, RB, R + 'B527069359/', R + 'B534549602/', R + 'B534642649/', R + 'B534903167/', R + 'B535008394/', R + 'B536286733/', R + 'B536911998/', R + 'B536968635/', R + 'B539518253/', R + 'B539627447/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the 1st-floor counter; no seat bookings.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区下新シ町345',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and rurubu; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.993773, 135.772598); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536911998/', R + 'B539518253/', R + 'B534549602/'],
    price_note: 'Prices from 2026 reviews, dated by visit; pies are seasonal.', last_checked: TODAY, items: [
      it('キャラメル無花果パイ', '', 'Caramel fig pie (seasonal)', '¥850', 'Pies', 'no', 'no', 'September 2026.', 'fig_pie'),
      it('', '', 'Custard caramel strawberry pie (seasonal)', '¥1,100', 'Pies', 'no', 'no', 'November 2026.', 'strawberry_pie'),
      it('', '', 'Café latte', '¥650', 'Drinks', '', 'ask', 'September 2026; oat milk +¥50 (November 2026).', 'latte'),
      it('', '', 'Matcha latte', '¥700', 'Drinks', '', 'ask', 'November 2026.', 'matcha_latte'),
    ] }, {
    cuisine: '古い木造の町家を改装した店で旬のフルーツのパイ、ケーキ、焼き菓子 (るるぶ&more、2026年11月)・Joyo のいちじくのキャラメル無花果パイ850円 (2026年9月)・カスタードとキャラメルのいちごのパイ1,100円 (2026年11月)・ラム酒のマロンクリームとベリーのジャムのパイ (2026年10月)・バナナのキャラメルパイ (2026年10〜11月)・レモンのメレンゲパイ (2026年7月)・いちじくと紅茶のヴィクトリアケーキ (2026年10月)・シャインマスカットのパンナコッタ、いちじくのタルト (2026年8月)・バスクチーズケーキ (2026年9月)・カフェラテ650円、アイスチャイ700円、抹茶ラテ700円、カモミールとりんごのハーブティー700円 (2026年8〜11月)・クッキー缶は母の日、父の日など記念日限定 (るるぶ&more)',
    neighborhood: '清水五条',
    gf_detail: 'グルテンフリー不可。パイ、タルト、ケーキ、焼き菓子のカフェ (口コミ、るるぶ&more)。グルテンフリーの品の記載はない。',
    vegan_detail: 'ヴィーガン不可。クリームのパイ、チーズケーキ、パンナコッタ。ラテはオーツミルクに変更可、プラス50円 (2026年11月)。',
    notes: '[カフェ・清水五条、旬のフルーツのパイ] 高校の同級生2人が一緒にカフェをやる夢を叶え、2025年12月に開いた町家のカフェ。キャラメル無花果パイやいちごのキャラメルパイなど大きな旬のフルーツのパイ、ケーキ、焼き菓子。週末は開店前から行列、パイは昼過ぎに売り切れることも。先に注文と支払い、席の予約不可。',
  });
}

save();
