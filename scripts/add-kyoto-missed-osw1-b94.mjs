// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 94.
//   + 創作京料理 誠ごころ MAGOKORO (creative Kyoto cooking in a 70-year-old machiya south of Nishinotoin-Takoyakushi)
//   + 焼肉割烹 天の Yakiniku Kappou Amano (wagyu yakiniku and meat kaiseki in a machiya, Nishinotoin-Takatsuji)
//   + Cafe Celeste (small café for hand-drip coffee, tiramisu and cheesecakes near Gojo-Karasuma, opened 2025)
//   + あるぺんrose Alpen Rose (old-style café with mini breads, breakfasts and lunches by Higashiyama station)
//   - Maestro, 本家西尾八ッ橋 産寧坂店, マエダコーヒー 御池店, そばしき 清水店, 清修庵 清水店, 井筒八ッ橋本舗 清水寺店:
//     skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26041034, 26035670 (skipped),
//   26007170 (skipped), 26028800 (skipped), 26040320 (skipped), 26026928 (skipped), 26041700, 26015060 (skipped),
//   26042930, 26017064.
//   queue-status.jsonl grepped for each brand: 本家西尾八ッ橋 (26027207), 清修庵 (26032036) and 井筒八ッ橋本舗 (26025006)
//   have earlier rulings; 天のめし (26041554) is a different business from 天の.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or
//   address.
//   Same-name count: マエダコーヒー — six Maeda Coffee shops in a Tabelog name search (Muromachi honten, Meirin, Oike,
//   Kodaiji, Bunkaku and one more) — chain. そばしき — six Sobashiki shops in a Tabelog name search (Arashiyama, Kiyomizu,
//   Kioicho, Yokohama, Osaka Lucua, Yotsuya) — chain. 誠ごころ, Celeste, あるぺんrose — one shop each. 天の — one shop in a
//   Tabelog name search; invoice holder 株式会社天樹 (Nagaokakyo); no other shop found — drafted, flagged.
//   Service charges, checked against the Japanese original: 天の なし (the English line wrongly says a service fee is
//   added); Celeste なし; none listed for 誠ごころ or あるぺんrose.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天 (the shop name 焼肉割烹 天の is a proper name).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035670', 'Maestro: too thin — a soft-serve counter inside a flower shop with two June 2026 reviews and no menu, price or seating details');
skip('26007170', '本家西尾八ッ橋 産寧坂店: large parent — 本家西尾八ッ橋 lists about a dozen shops (same ruling as 26027207)');
skip('26028800', 'マエダコーヒー 御池店: chain — six Maeda Coffee shops in a Tabelog name search (2026-11-08)');
skip('26040320', '石臼挽き二八そば そばしき 清水店: chain — six Sobashiki shops in a Tabelog name search incl. Tokyo, Yokohama and Osaka (2026-11-08)');
skip('26026928', '清修庵 清水店: chain — 株式会社清修庵 lists 17 清修庵 soba shops (same ruling as 26032036)');
skip('26015060', '井筒八ッ橋本舗 清水寺店: large parent — a shop of the yatsuhashi maker 井筒八ッ橋本舗 (same ruling as 26025006)');

// ================================================================ 創作京料理 誠ごころ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041034/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_magokoro_nishinotoin', name: '創作京料理 誠ごころ (MAGOKORO)', category: 'OMNI',
    lat: 35.005923, lng: 135.755269, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, ponzu dishes, dashi-based plates, tempura, dashimaki and rice bowls; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, sea bream, sanma, pork, jidori and dashi throughout (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday lunch 11:30–14:00 (last orders 13:30), dinner 17:30–22:00 (last orders 21:30); closed Sunday, sometimes open on Sundays before public holidays — check Instagram or Google (Tabelog). Cards, e-money and QR (Tabelog). 17 seats: 7 at the counter and tables for 4 and 6 (Tabelog). Non-smoking (Tabelog). In a renovated 70-year-old machiya with a high beamed ceiling (February and November 2025). Just south of Nishinotoin-Takoyakushi; 4 min from the Shijo-Nishinotoin bus stop (Tabelog; February 2025). Open since 6 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just south of Nishinotoin-Takoyakushi — 8 min from Shijo / Karasuma',
    cuisine: 'Creative Kyoto cooking with seasonal Kyoto vegetables and seafood (November 2025; May 2026) · omakase sashimi platter ¥1,500–2,200; jidori harihari hot pot ¥1,300 (January 2025) · kumoko with ponzu; steamed guji with turnip; tempura; Kujo-negi dashimaki (February 2025) · lunch sets with salad, miso soup and dessert: pork steak (March 2025), grilled sanma (October 2025), seafood bowl with yukhoe sauce ¥2,200 (November 2025) · seared sea bream with ponzu ¥990; crisp burdock salad ¥880; dashimaki with organic eggs ¥830 (March 2026)',
    website: null, gmaps: gm('創作京料理 誠ごころ'), menu_url: TB,
    notes: '[Kyoto izakaya · Nishinotoin, machiya] A warm little izakaya in a 70-year-old townhouse with a high beamed ceiling, from an owner trained in long-established Kyoto izakayas: excellent sashimi, kumoko ponzu, a huge dashimaki and seasonal plates at night, and good-value set lunches like grilled sanma or a seafood bowl. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A February 2025 reviewer describes a kind owner with experience in long-established Kyoto izakayas. Open since April 2024 (Tabelog). No operator was found.',
      philosophy: null, specialty: 'Sashimi and seasonal Kyoto plates.',
      anecdotes: [
        { text: 'A February 2025 diner came in on the night of a big cold snap and found the old townhouse instantly warm, with genmaicha served in a painted teapot.', source: R + 'B500753581/' },
        { text: 'A March 2026 couple, struggling to book anywhere on a Saturday, got a same-day table and were surprised by the size of the dashimaki.', source: R + 'B524776593/' },
      ],
      japanese_sources_summary: '食べログ: 創作京料理 誠ごころ、居酒屋、中京区古西町431-1、月〜土 11:30〜14:00 (L.O. 13:30)・17:30〜22:00 (L.O. 21:30)、日曜定休 (祝日前の日曜は営業することも)、2024年4月6日オープン、カード・電子マネー・QR可、17席 (カウンター7席、4名と6名のテーブル)、禁煙。口コミ (2025〜2026年、英語): 西洞院蛸薬師下ル、築70年の町家、吹き抜けの梁、店主は京都の老舗居酒屋で経験、おまかせの刺身盛り合わせ1,500〜2,200円、地鶏のはりはり鍋1,300円、くもこポン酢、ぐじのかぶら蒸し、天ぷら、九条ねぎのだし巻き、昼の定食 (ポークステーキ、秋刀魚、海鮮丼2,200円)、鯛の炙りポン酢990円、ごぼうのカリカリサラダ880円、だし巻き830円。',
      confidence: 'low', sources: [TB, R + 'B499421680/', R + 'B500753581/', R + 'B502790847/', R + 'B515529560/', R + 'B516702131/', R + 'B524776593/', R + 'B534372984/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm small counter; same-day bookings sometimes possible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区古西町431-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to May 2026.' },
    pin_source: `Tabelog ${TB} (35.005923, 135.755269); cross-checked: GSI 京都府京都市中京区古西町431番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524776593/', R + 'B516702131/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase sashimi platter (one serving)', '¥1,500', 'Sashimi', 'ask', 'no', 'January 2025; ¥1,500–2,200.', 'sashimi'),
      it('', '', 'Seared sea bream with ponzu', '¥990', 'Small plates', 'ask', 'no', 'March 2026.', 'tai_ponzu'),
      it('', '', 'Crisp burdock salad', '¥880', 'Small plates', 'ask', 'ask', 'March 2026.', 'gobo_salad'),
      it('', '', 'Dashimaki with organic eggs', '¥830', 'Small plates', 'ask', 'no', 'March 2026.', 'dashimaki'),
      it('', '', 'Seafood bowl with yukhoe sauce (lunch)', '¥2,200', 'Lunch', 'ask', 'no', 'November 2025.', 'kaisendon'),
    ] }, {
    cuisine: '京野菜と旬の魚介の創作京料理 (2025年11月、2026年5月)・おまかせの刺身盛り合わせ1,500〜2,200円、地鶏のはりはり鍋1,300円 (2025年1月)・くもこポン酢、ぐじのかぶら蒸し、天ぷら、九条ねぎのだし巻き (2025年2月)・サラダ・味噌汁・デザート付きの昼の定食: ポークステーキ (2025年3月)、秋刀魚の塩焼き (2025年10月)、ユッケだれの海鮮丼2,200円 (2025年11月)・鯛の炙りポン酢990円、ごぼうのカリカリサラダ880円、有機卵のだし巻き830円 (2026年3月)',
    neighborhood: '西洞院蛸薬師のすぐ南。四条・烏丸から徒歩8分',
    gf_detail: '要確認。刺身、ポン酢の料理、出汁の皿、天ぷら、だし巻き、丼。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、鯛、秋刀魚、豚、地鶏、出汁を全体に使う (2025〜2026年の口コミ)。',
    notes: '[京の居酒屋・西洞院、町家] 京都の老舗居酒屋で経験を積んだ店主の、梁の高い築70年の町家の温かな小さな居酒屋。夜は見事な刺身、くもこポン酢、大きなだし巻き、季節の皿。昼は秋刀魚の定食や海鮮丼などお得な定食。日曜定休。',
  });
}

// ================================================================ 焼肉割烹 天の
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041700/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_kappou_amano', name: '焼肉割烹 天の (Yakiniku Kappou Amano)', category: 'OMNI',
    lat: 34.999247, lng: 135.755343, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu grilled with salt or sauce, sashimi and yukhoe, kimchi, tongue stew, and a choice of ramen, reimen, curry or bibimbap to finish; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku and meat-kaiseki restaurant (Tabelog; 2025–2026 reviews).',
    hours_raw: '17:00–23:00 daily incl. public holidays (food last orders 22:00) (Tabelog). No service charge (Tabelog, original なし; the English line says otherwise). No same-day cancellations, please (Tabelog). Cards, IC and e-money, QR incl. Alipay and WeChat Pay (Tabelog). 34 seats: a counter and private rooms for 2–20 on two floors (Tabelog; April and September 2025). Smoking room (Tabelog). In a Kyoto townhouse, 5 min from Shijo station exit 6 (Tabelog; July 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin south of Takatsuji — 5 min from Shijo station',
    cuisine: 'Black-wagyu yakiniku and meat kaiseki in a townhouse, grilled over charcoal in front of you at the counter (July 2025) · counter kaiseki course of 12 dishes ¥10,000 and a special course of 15: sashimi, salt- and sauce-grilled cuts, seasonal vegetables, tongue stew, a choice of ramen, reimen, curry or bibimbap, and a sweet (July 2025) · special kaiseki course ¥15,000 in a private room (April 2025) · à la carte raw meat, lean cuts and offal; yukhoe (February and June 2026)',
    website: null, gmaps: gm('焼肉割烹 天の'), menu_url: TB,
    notes: '[Yakiniku kappo · Nishinotoin-Takatsuji, machiya] A polished yakiniku-kappo in a Kyoto townhouse: black-wagyu courses of 12 or 15 dishes (from ¥10,000) grilled over charcoal at the counter, or à la carte yukhoe, lean cuts and offal in private rooms. Pricey; good for occasions and business dinners. Flagged: operator 株式会社天樹, other shops not found.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'The receipt invoice number on Tabelog belongs to 株式会社天樹 (Nagaokakyo). A December 2025 reviewer praises the chef’s personality and presentation. No other shop of the company was found.',
      philosophy: null, specialty: 'Black-wagyu meat kaiseki.',
      anecdotes: [
        { text: 'A September 2025 host chose the “Goku” course in a soundproofed second-floor private room for business, though found one piece of each cut a little light for men.', source: R + 'B513863244/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉割烹 天の、焼肉・肉料理・日本料理、下京区西洞院通高辻下る高辻西洞院町805-5、地下鉄四条駅6番出口から徒歩5分、毎日 17:00〜23:00 (料理L.O. 22:00)、サービス料なし、当日キャンセルはご遠慮ください、カード・交通系IC・電子マネー・QR (Alipay、WeChat Pay含む) 可、34席、個室 (2〜20名)、喫煙室あり。適格請求書: 株式会社天樹 (長岡京市)。口コミ (2025〜2026年、英語): 町家、カウンター限定の会席コース (12品 10,000円、特選15品)、刺身、塩焼き、たれ焼き、旬の野菜、タンシチュー、締めはラーメン・冷麺・カレー・ビビンバから、特選会席15,000円 (個室)、2階の防音の個室、生肉、赤身、ホルモン、ユッケ。',
      confidence: 'low', sources: [TB, R + 'B492707757/', R + 'B504377960/', R + 'B510360339/', R + 'B513863244/', R + 'B520347717/', R + 'B523191803/', R + 'B528589637/', R + 'B530381865/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; Alipay and WeChat Pay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院通高辻下る高辻西洞院町805-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (34.999247, 135.755343); cross-checked: GSI 京都府京都市下京区高辻西洞院町805番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510360339/', R + 'B504377960/'],
    price_note: 'Prices from 2025 reviews; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Counter kaiseki course, 12 dishes', '¥10,000', 'Courses', 'ask', 'no', 'July 2025.', 'kaiseki'),
      it('', '', 'Special kaiseki course, 15 dishes', '¥15,000', 'Courses', 'ask', 'no', 'April 2025.', 'tokusen'),
      it('', '', 'Yukhoe', '', 'À la carte', 'ask', 'no', 'June 2026.', 'yukhoe'),
    ] }, {
    cuisine: '町家で黒毛和牛の焼肉と肉割烹、カウンターでは目の前の炭火で焼く (2025年7月)・カウンター限定の会席コース12品10,000円と特選15品: 刺身、塩焼き、たれ焼き、旬の野菜、タンシチュー、締めはラーメン・冷麺・カレー・ビビンバから、甘味 (2025年7月)・個室で特選会席15,000円 (2025年4月)・アラカルトの生肉、赤身、ホルモン、ユッケ (2026年2・6月)',
    neighborhood: '高辻の南、西洞院通。四条駅から徒歩5分',
    gf_detail: '要確認。塩やたれで焼く和牛、刺身やユッケ、キムチ、タンシチュー、締めのラーメン・冷麺・カレー・ビビンバ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉と肉割烹の店 (食べログ、2025〜2026年の口コミ)。',
    notes: '[焼肉割烹・西洞院高辻、町家] 京都の町家の洗練された焼肉割烹。カウンターでは炭火で焼く黒毛和牛の12品・15品のコース (10,000円から)、個室ではユッケ、赤身、ホルモンをアラカルトで。高め。記念日や接待向き。運営は株式会社天樹、ほかの店舗は見つからず (要確認)。',
  });
}

// ================================================================ Cafe Celeste
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042930/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '18:00']);
  put({
    id: 'kyoto_cafe_celeste_gojo', name: 'Cafe Celeste', category: 'OMNI',
    lat: 34.99885, lng: 135.75548, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tiramisu, Basque and matcha rare cheesecakes, Mont Blanc, shortcake and ohagi; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and some wagashi may suit, but nothing is described as vegan; most cakes use cream and cheese (2025–2026 reviews).',
    hours_raw: 'Wednesday–Sunday and public holidays 8:30–18:00; closed Monday and Tuesday; temporary changes posted on Instagram and Google Maps (Tabelog). No service charge (Tabelog, original なし). Cards: JCB (Tabelog). 12 seats: 4 at the counter, two benches for two, two terrace tables for two (Tabelog). Non-smoking (Tabelog). Takeaway cakes (October 2025). Opened 6 April 2025 (February 2026).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, west of Karasuma',
    cuisine: 'A bright little café for hand-drip coffee and cakes (December 2025; February 2026) · coffee-bean-shaped tiramisu in a chocolate shell ¥700; Sicilian coffee with honey-lemon ¥700 (October and November 2025) · Basque cheesecake; matcha rare cheesecake; Americano (December 2025; June 2026) · Japanese-chestnut Mont Blanc; ohagi (November 2025) · fig shortcake to take away (October 2025) · seasonal kashiwa-mochi (May 2026)',
    website: null, gmaps: gm('Cafe Celeste 京都 五条'), menu_url: TB,
    notes: '[Café · Gojo, cakes and drip coffee] A bright, compact café with cat illustrations near Gojo-Karasuma, opened in 2025: hand-drip coffee, a big coffee-bean-shaped tiramisu, Basque and matcha cheesecakes, and a few wagashi like ohagi. Counter seats suit solo visits. Open from 8:30; closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A June 2026 reviewer says the owner is Korean. Opened on 6 April 2025 (February 2026 review). No operator was found.',
      philosophy: null, specialty: 'Tiramisu; cheesecakes.',
      anecdotes: [
        { text: 'A November 2025 visitor was impressed by the size of the coffee-bean-shaped tiramisu and the whole chestnuts inside the Mont Blanc.', source: R + 'B528447867/' },
      ],
      japanese_sources_summary: '食べログ: Cafe Celeste、カフェ、下京区藪下町6 More五条II 1F、水〜日・祝日 8:30〜18:00、月・火曜定休、臨時休業はInstagramやGoogleマップで告知、サービス料なし、カードはJCB、12席 (カウンター4、ベンチ2人掛け2、テラス2人掛け2)、禁煙。口コミ (2025〜2026年、英語): 2025年4月6日オープン、ハンドドリップのコーヒー、チョコでコーティングしたコーヒー豆の形のティラミス700円、シチリアンコーヒー700円、バスクチーズケーキ、抹茶のレアチーズケーキ、和栗のモンブラン、おはぎ、いちじくのショートケーキの持ち帰り、柏餅、店主は韓国出身。',
      confidence: 'low', sources: [TB, R + 'B515010846/', R + 'B516067122/', R + 'B519251308/', R + 'B523127631/', R + 'B524420878/', R + 'B526076836/', R + 'B528447867/', R + 'B534917046/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café; counter seats suit solo visits.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区藪下町6 More五条II 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened April 2025; reviews dated October 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (34.99885, 135.75548); cross-checked: GSI 京都府京都市下京区藪下町6番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515010846/'],
    price_note: 'Prices from an October 2025 review; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Tiramisu', '¥700', 'Cakes', 'no', 'no', 'October 2025.', 'tiramisu'),
      it('', '', 'Sicilian coffee (honey-lemon)', '¥700', 'Drinks', 'ask', 'ask', 'October 2025.', 'sicilian'),
      it('', '', 'Basque cheesecake', '', 'Cakes', 'ask', 'no', 'December 2025.', 'basque'),
      it('', '', 'Matcha rare cheesecake', '', 'Cakes', 'ask', 'no', 'December 2025; June 2026.', 'matcha_cheese'),
    ] }, {
    cuisine: 'ハンドドリップのコーヒーとケーキの明るい小さなカフェ (2025年12月、2026年2月)・チョコの殻のコーヒー豆の形のティラミス700円、はちみつレモン入りのシチリアンコーヒー700円 (2025年10・11月)・バスクチーズケーキ、抹茶のレアチーズケーキ、アメリカーノ (2025年12月、2026年6月)・和栗のモンブラン、おはぎ (2025年11月)・いちじくのショートケーキの持ち帰り (2025年10月)・季節の柏餅 (2026年5月)',
    neighborhood: '五条通、烏丸の西',
    gf_detail: '要確認。ティラミス、バスクと抹茶のレアチーズケーキ、モンブラン、ショートケーキ、おはぎ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーや和菓子の一部は合うかもしれないが、ヴィーガンと書かれた品はない。ケーキの多くは生クリームやチーズを使う (2025〜2026年の口コミ)。',
    notes: '[カフェ・五条、ケーキとドリップコーヒー] 五条烏丸近く、猫のイラストの明るくコンパクトなカフェ (2025年開店)。ハンドドリップのコーヒー、大きなコーヒー豆の形のティラミス、バスクと抹茶のチーズケーキ、おはぎなどの和菓子も少し。カウンター席は一人でも入りやすい。8時半から、月・火曜定休。',
  });
}

// ================================================================ あるぺんrose
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017064/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_alpen_rose_higashiyama', name: 'あるぺんrose (Alpen Rose)', category: 'OMNI',
    lat: 35.009155, lng: 135.781839, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breads, naan, yakisoba, spaghetti and chiffon cake (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, sausages, eggs, beef stew and cream desserts (2025–2026 reviews).',
    hours_raw: '8:00–18:00 (last orders 17:30); closed Wednesday (Tabelog; July 2026). Cash only: no cards or e-money (Tabelog). 23 seats: 3 at the counter, 17 at tables, plus a terrace where smoking is allowed (Tabelog; September 2025). Mini breads to take away (September 2026). On the ground floor of the 滋賀県人会館 building, near Higashiyama station (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo west of Jingu-michi — near Higashiyama station',
    cuisine: 'An old-style neighbourhood café with a big choice of small breads (from ¥130) and meals (2025–2026) · breakfast of three fresh breads, scrambled eggs, salad and a drink for under ¥1,000 (September 2026) · hamburg steak set with soup and breads from the display; naan sets; sausage sets (April 2025) · an-kake yakisoba with ginger egg soup (July 2025) · cream anmitsu with matcha ice (September 2025) · tea chiffon cake (November 2025; September 2026) · bagel sandwich set (April 2026) · yakiniku and beef-stew spaghetti lunches (September 2026)',
    website: null, gmaps: gm('あるぺんrose 京都'), menu_url: TB,
    notes: '[Café · Sanjo-Jingumichi, near Heian Shrine] A calm, old-fashioned café for locals near Higashiyama station and the art museum: breakfasts of fresh mini breads from 8:00, hamburg-steak and yakisoba lunches, anmitsu and big slices of chiffon cake. Cash only; smoking on the terrace; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or owner details were found; reviewers describe a café beloved by locals with smiling staff (September 2025 and 2026).',
      philosophy: null, specialty: 'Mini breads; breakfast sets.',
      anecdotes: [
        { text: 'A November 2025 visitor, after the Kyocera Museum of Art, settled in with a tea chiffon cake and coffee.', source: R + 'B516786451/' },
      ],
      japanese_sources_summary: '食べログ: あるぺんrose、カフェ・洋食・うどん、東山区三条通神宮道西入西町126 滋賀県人会館 1F、8:00〜18:00、水曜定休、カード・電子マネー不可、23席 (カウンター3席、テーブル17席)、禁煙 (テラスは喫煙可)。口コミ (2025〜2026年、英語): 平安神宮・知恩院の近く、焼きたてのナンのセット、ソーセージのセット、ハンバーグのセット (スープとパンかご飯)、あんかけ焼きそば、クリームあんみつ、紅茶のシフォンケーキ、ベーグルサンドのセット、L.O. 17:30、130円からのミニパン (持ち帰り可)、焼肉やビーフシチューのスパゲッティのランチ、パン3種・スクランブルエッグ・サラダ・ドリンクの朝食が1,000円未満。',
      confidence: 'low', sources: [TB, R + 'B507644172/', R + 'B510765588/', R + 'B514103560/', R + 'B516786451/', R + 'B523502790/', R + 'B526320146/', R + 'B532531303/', R + 'B534943881/', R + 'B537384513/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local café; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通神宮道西入西町126 滋賀県人会館 1Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.009155, 135.781839); cross-checked: GSI 京都府京都市東山区西町126番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537384513/', R + 'B534943881/'],
    price_note: 'Prices from September 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Breakfast: three breads, scrambled eggs, salad, drink', '¥1,000', 'Morning', 'no', 'no', 'September 2026; under ¥1,000.', 'breakfast'),
      it('', '', 'Mini breads (from)', '¥130', 'Bread', 'no', 'ask', 'September 2026.', 'mini_bread'),
      it('', '', 'Hamburg steak set', '', 'Lunch', 'ask', 'no', 'April 2025.', 'hamburg'),
      it('', '', 'Tea chiffon cake', '', 'Sweets', 'no', 'no', 'November 2025; September 2026.', 'chiffon'),
    ] }, {
    cuisine: 'ミニパン (130円から) と食事が豊富な昔ながらの近所のカフェ (2025〜2026年)・焼きたてのパン3種、スクランブルエッグ、サラダ、ドリンクの朝食が1,000円未満 (2026年9月)・スープとパン棚から選ぶパンのハンバーグのセット、ナンのセット、ソーセージのセット (2025年4月)・生姜の卵スープ付きのあんかけ焼きそば (2025年7月)・抹茶アイスのクリームあんみつ (2025年9月)・紅茶のシフォンケーキ (2025年11月、2026年9月)・ベーグルサンドのセット (2026年4月)・焼肉やビーフシチューのスパゲッティのランチ (2026年9月)',
    neighborhood: '三条通、神宮道の西。東山駅の近く',
    gf_detail: 'グルテンフリーではない。パン、ナン、焼きそば、スパゲッティ、シフォンケーキ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ハンバーグ、ソーセージ、卵、ビーフシチュー、クリームの甘味 (2025〜2026年の口コミ)。',
    notes: '[カフェ・三条神宮道、平安神宮の近く] 東山駅や美術館に近い、地元の人の落ち着いた昔ながらのカフェ。8時から焼きたてのミニパンの朝食、ハンバーグや焼きそばの昼食、あんみつ、大きなシフォンケーキ。現金のみ、テラスは喫煙可、水曜定休。',
  });
}

save();
