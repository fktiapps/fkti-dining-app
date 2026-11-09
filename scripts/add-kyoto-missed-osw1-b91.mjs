// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 91.
//   + 柳桜園茶舗 Ryuoen Chaho (matcha and tea merchant on Nijo-dori, founded 1875; takeaway only) — coordinator’s lead item:
//     qualifies under Greg’s 2026-11-08 back-fill ruling (historic shop with a sourced founding date; succession not
//     sourced); overrides the batch-90 retail skip.
//   + 京都つぶら乃 Kyoto Tsuburano (Kyoto-vegetable lunches and matcha sweets by the Yasaka pagoda, since 2014)
//   - 町家猫喫茶 うたねこ堂: skipped (reason below).
//   + Bistrot VAPEURS 烏丸御池 (French bistro prix-fixe near Karasuma-Oike; sister of Brasserie VAPEURS)
//   + 七輪焼カネコ KANEKO (charcoal yakiniku in a residential lane between Shijo and Gojo stations)
//   - ザ ヒラマツ 京都: skipped (big-chain hotel).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032610 (skipped), 26023778, 26004734,
//   26030330, 26034290 (skipped). Next in lane: 26043464 京都御所南 串かつ凡 (fetched; Fモトアキラ株式会社 runs 串かつ凡
//   in Osaka, Ginza, Kyoto and Paris plus other brands — may need a ruling), 26031242 サウナの梅湯, 26039600 しかしわがし.
//   queue-status.jsonl grepped for each brand (柳桜園, うたねこ堂, つぶら乃, VAPEURS/ヴァプール, カネコ, ヒラマツ): no earlier
//   rulings.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or
//   address.
//   VAPEURS — Tabelog lists Bistrot VAPEURS and Brasserie VAPEURS (Sanjo-Shinmachi), called sister restaurants by a May
//   2026 reviewer; neither in data — a two-shop local pair, drafted, flagged. カネコ — one shop.
//   Same-name count: 柳桜園茶舗 — one shop (its teas are also sold in department stores). 京都つぶら乃 — one restaurant;
//   reviewers say the management changed and the founding chef couple left (October and December 2025); new operator
//   not found — drafted, flagged.
//   Service charges, checked against the Japanese original: VAPEURS サービス料、チャージ料なし (Tabelog); none listed
//   for the others.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032610', '町家猫喫茶 うたねこ堂: no reviews dated 2025–2026 (latest November 2024)');
skip('26034290', 'large parent: Hiramatsu hotel — ザ ヒラマツ 京都 is one of six HIRAMATSU HOTELS run nationally by the listed restaurant company 株式会社ひらまつ (press releases; big-chain-hotel ruling, Greg 2026-11-08)');

// ================================================================ 柳桜園茶舗 (retail, Greg 11-08 back-fill ruling)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007344/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/gourmet/394409';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_ryuoen_chaho_nijo', name: '柳桜園茶舗 (Ryuoen Chaho)', category: 'OMNI',
    lat: 35.013795, lng: 135.766209, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Loose matcha, hojicha, genmaicha (with roasted rice) and other teas to take home; no ingredient statements; the matcha soft-serve sold here is another maker’s product (Serai; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Teas only, not described as vegan; the matcha soft-serve in the freezer is from another maker (2025–2026 reviews).',
    hours_raw: 'Takeaway only — a tea-leaf shop; tea is poured for customers during the choosing, and there is a bench outside (August 2025; September 2026). Monday–Saturday 9:00–17:00; closed Sunday (Tabelog); Serai gives 9:00–18:00. No reservations (Tabelog). Cards; no QR (Tabelog). Non-smoking (Tabelog). 6 min on foot from Kyoto-Shiyakusho-mae (Serai).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori — 6 min from Kyoto-Shiyakusho-mae',
    cuisine: 'Takeaway only: a matcha-led Japanese tea shop founded in 1875 south of the Imperial Palace, blending Uji leaves and grinding matcha on stone mills at the back of the shop; a rare “sitting-sale” shop front; favoured by tea-ceremony schools including Urasenke (Serai) · matcha such as “雅の白” for usucha (Serai) · hojicha “Koetsu”; genmaicha (August 2025) · karigane genmaicha; tins printed with the Choju-giga scrolls (August 2025; September 2026)',
    website: SERAI, gmaps: gm('柳桜園茶舗'), menu_url: SERAI,
    notes: '[Tea merchant · Nijo-dori, founded 1875, takeaway only] A historic matcha and tea shop on Nijo-dori, founded in 1875 and supplying tea-ceremony schools, with matcha still ground on stone mills at the back. Buy hojicha, genmaicha or matcha in tins printed with the Choju-giga scrolls; staff pour a cup while you choose. Takeaway only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Tea merchant (staff unnamed)'], origin: 'Kyoto',
      background: 'Founded in Meiji 8 (1875) south of the Imperial Palace (Serai). Family succession not sourced.',
      philosophy: 'Blends carefully chosen Uji leaves and grinds matcha fresh on stone mills to sell it newly milled (Serai).',
      specialty: 'Matcha; hojicha.',
      anecdotes: [
        { text: 'A September 2026 regular, who usually buys these teas in department stores, was given a seat and a cup of tea at the main shop while choosing karigane genmaicha.', source: R + 'B111448127/' },
      ],
      japanese_sources_summary: 'サライ: 柳桜園茶舗、明治8年 (1875) 創業、京都御所南、抹茶が主体の日本茶専門店、宇治産の厳選茶葉を調合し店舗奥の石臼で碾いた碾きたての抹茶、薄茶用の「雅の白」、裏千家や三千家家元・大徳寺などに贔屓にされる、珍しい座売りの店舗、中京区二条通御幸町西入る丁子屋町690、地下鉄東西線京都市役所前駅から徒歩約6分、9時〜18時、日曜定休。食べログ: 柳桜園茶舗、月〜土 9:00〜17:00、日曜定休、予約不可、カード可、QR不可、禁煙、テイクアウト。口コミ (2025〜2026年、英語): ほうじ茶「光悦」、玄米茶、かりがね玄米茶、鳥獣戯画の茶缶、来店するとお茶を出してくれる、店外にベンチ、冷凍庫の抹茶ソフトは別の茶舗の品。',
      confidence: 'medium', sources: [SERAI, TB, R + 'B511244096/', R + 'B111448127/', R + 'B519626405/'] },
    cultural_comfort: { level: 'japanese', note: 'Traditional tea shop; takeaway only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通御幸町西入る丁子屋町690',
    existence: { status: 'confirmed', checked: TODAY, note: 'Founded 1875 (Serai); family succession not sourced. Tabelog listing; reviews dated August 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.013795, 135.766209); GSI places only 丁子屋町 (town, 51 m); OSM reverse gives the shop node 柳桜園 on 二条通 — precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SERAI, R + 'B511244096/'],
    price_note: 'No prices found. Takeaway only.', last_checked: TODAY, items: [
      it('', '', 'Matcha “雅の白” for usucha (takeaway)', '', 'Matcha', 'ask', 'ask', 'Serai.', 'miyabi_no_shiro'),
      it('', '', 'Hojicha “Koetsu” (takeaway)', '', 'Tea', 'ask', 'ask', 'August 2025.', 'koetsu'),
      it('', '', 'Karigane genmaicha (takeaway)', '', 'Tea', 'ask', 'ask', 'September 2026.', 'karigane_genmai'),
    ] }, {
    cuisine: 'テイクアウトのみ。京都御所南で1875年に創業した抹茶が主体の日本茶専門店。宇治の茶葉を調合し、店の奥の石臼で抹茶を碾く。珍しい座売りの店構え。裏千家などの茶道の家元に贔屓にされる (サライ)・薄茶用の抹茶「雅の白」など (サライ)・ほうじ茶「光悦」、玄米茶 (2025年8月)・かりがね玄米茶、鳥獣戯画の茶缶 (2025年8月、2026年9月)',
    neighborhood: '御幸町の西、二条通。京都市役所前から徒歩6分',
    gf_detail: '要確認。持ち帰りの抹茶、ほうじ茶、玄米茶 (炒り米入り) など。原材料の表示は手元の情報源にない。店で売る抹茶ソフトは別の店の品 (サライ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。お茶のみで、ヴィーガンとは書かれていない。冷凍庫の抹茶ソフトは別の店の品 (2025〜2026年の口コミ)。',
    notes: '[茶舗・二条通、1875年創業、テイクアウトのみ] 1875年創業、茶道の家元に茶を納める二条通の老舗の抹茶・日本茶の店。今も店の奥の石臼で抹茶を碾く。鳥獣戯画の茶缶に入ったほうじ茶、玄米茶、抹茶を買える。選ぶ間にお茶を出してくれる。テイクアウトのみ、日曜定休。',
  });
}

// ================================================================ 京都つぶら乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023778/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_tsuburano_yasaka', name: '京都つぶら乃 (Kyoto Tsuburano)', category: 'OMNI',
    lat: 34.99813, lng: 135.780094, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai plates, yuba and sukiyaki sets with dashi and soy-based seasonings; matcha sweets; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream, yellowtail, shrimp, chicken and wagyu, with dashi throughout (2025–2026 reviews).',
    hours_raw: 'Lunch 11:00–15:00 (last orders 14:00); tea time 11:00–18:00 (last orders 17:00); dinner 17:00–21:00 (last orders 20:00); closed Wednesday (Tabelog). Bookings taken (Tabelog); busy at lunch, walk-ins may wait (October 2025; March 2026). Cards: JCB, AMEX and Diners; e-money and QR (Tabelog). 40 seats on two floors; upstairs tables look out on the Yasaka pagoda (Tabelog; March 2025; March 2026). Non-smoking (Tabelog). Open since 4 June 2014 (Tabelog). Its sandwiches have also been sold at Kyoto Isetan (February 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka pagoda — Higashiyama',
    cuisine: 'Kyoto-vegetable cooking and matcha sweets made with Uji tea from contracted farms, near the Yasaka pagoda (May 2025) · “Kyoto plate” lunch ¥4,800: sea-bream sashimi, shrimp and kombu rolls, grilled yellowtail, dashimaki, ganmodoki, simmered vegetables, inari sushi, chirimen-sansho rice (May 2025) · yuba gozen; wagyu sukiyaki bento (March 2026) · seasonal course meals for groups (January 2026) · dashimaki and Kujo-negi sandwich wrapped in omelette, ham-cutlet sandwich (February and May 2025)',
    website: null, gmaps: gm('京都つぶら乃'), menu_url: TB,
    notes: '[Obanzai lunch · by the Yasaka pagoda, since 2014] A two-floor Japanese restaurant and tea room steps from the Yasaka pagoda, with pagoda views from upstairs: obanzai “Kyoto plate” lunches, yuba and sukiyaki sets, matcha sweets, and courses for groups. Busy at lunch; closed Wednesday. Flagged: the management changed in 2025 and the founding chef couple left; the new operator is not known.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Open since June 2014 (Tabelog). An October 2025 reviewer heard that the management had changed; a December 2025 reviewer learned that the founding chef couple had moved back home, with the name and dishes unchanged. No operator was found.',
      philosophy: null, specialty: 'Obanzai plate lunches; matcha sweets.',
      anecdotes: [
        { text: 'A March 2025 diner arrived half an hour early out of the cold, was welcomed in, and was moved upstairs to a table with a view.', source: R + 'B503425581/' },
        { text: 'A March 2026 family had the yuba gozen and a wagyu sukiyaki bento looking out on the Yasaka pagoda.', source: R + 'B524834194/' },
      ],
      japanese_sources_summary: '食べログ: 京都つぶら乃、甘味処・カフェ・野菜料理、東山区八坂上町368-1-8、祇園四条駅から955m、ランチ 11:00〜15:00 (L.O. 14:00)、ティータイム 11:00〜18:00 (L.O. 17:00)、ディナー 17:00〜21:00 (L.O. 20:00)、水曜定休、2014年6月4日オープン、予約可、カードはJCB・AMEX・Diners、電子マネー・QR可、40席、禁煙。口コミ (2025〜2026年、英語): 京野菜中心の料理と契約農園の宇治茶の抹茶スイーツ、京都プレートランチ4,800円 (鯛の刺身、海老、昆布巻き、鰤の焼き物、だし巻き、がんもどき、炊き合わせ、いなり寿司、ちりめん山椒ご飯)、湯葉御膳、和牛すき焼き弁当、団体向けのコース、2階から八坂の塔、九条ねぎとだし巻きのサンドを京都伊勢丹で販売、経営が変わり創業の料理人夫婦は故郷へ (2025年10・12月)。',
      confidence: 'low', sources: [TB, R + 'B487063530/', R + 'B502227617/', R + 'B503425581/', R + 'B506563557/', R + 'B507200174/', R + 'B519318282/', R + 'B521513192/', R + 'B524834194/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sightseeing-area restaurant; book for lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂上町368-1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February 2025 to March 2026; management changed in 2025.' },
    pin_source: `Tabelog ${TB} (34.99813, 135.780094); cross-checked: GSI 京都府京都市東山区八坂上町368番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507200174/'],
    price_note: 'One price from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', '“Kyoto plate” obanzai lunch', '¥4,800', 'Lunch', 'ask', 'no', 'May 2025.', 'kyoto_plate'),
      it('', '', 'Yuba gozen', '', 'Lunch', 'ask', 'no', 'March 2026.', 'yuba_gozen'),
      it('', '', 'Wagyu sukiyaki bento', '', 'Lunch', 'ask', 'no', 'March 2026.', 'sukiyaki_bento'),
    ] }, {
    cuisine: '八坂の塔近く、京野菜中心の料理と契約農園の宇治茶を使った抹茶スイーツ (2025年5月)・「京都プレート」ランチ4,800円: 鯛の刺身、海老と昆布巻き、鰤の焼き物、だし巻き、がんもどき、炊き合わせ、いなり寿司、ちりめん山椒ご飯 (2025年5月)・湯葉御膳、和牛すき焼き弁当 (2026年3月)・団体向けの季節のコース (2026年1月)・九条ねぎとだし巻きを薄焼き卵で包んだサンド、ハムカツサンド (2025年2・5月)',
    neighborhood: '八坂の塔のそば。東山',
    gf_detail: '要確認。出汁や醤油系の味付けのおばんざいのプレート、湯葉やすき焼きのセット、抹茶スイーツ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鯛、鰤、海老、鶏、和牛、出汁を全体に使う (2025〜2026年の口コミ)。',
    notes: '[おばんざいのランチ・八坂の塔のそば、2014年から] 八坂の塔のすぐ近くの2階建ての和食と甘味の店。2階からは塔が見える。おばんざいの「京都プレート」ランチ、湯葉やすき焼きのセット、抹茶スイーツ、団体向けのコース。昼は混む。水曜定休。2025年に経営が変わり、創業の料理人夫婦は退いた。新しい運営者は不明 (要確認)。',
  });
}

// ================================================================ Bistrot VAPEURS 烏丸御池
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004734/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_bistrot_vapeurs_karasuma_oike', name: 'ビストロ ヴァプール 烏丸御池 (Bistrot VAPEURS Karasuma Oike)', category: 'OMNI',
    lat: 35.01229, lng: 135.761216, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prix-fixe courses with bread, cream sauces, soups and parfait; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken in cream, fish and red-wine-braised beef cheek; cream cheese and ice cream (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last orders 14:00), dinner 17:00–22:00 (last orders 21:00); closed Tuesday (Tabelog). No service or cover charge (Tabelog, original サービス料、チャージ料なし). Cash only: no cards, e-money or QR (Tabelog). 25 seats; non-smoking (Tabelog). Fills up quickly — book (October 2026). 3 min from Karasuma-Oike exit 1 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike — 3 min from exit 1',
    cuisine: 'A Parisian-style bistro with red-check tablecloths and choose-your-own prix-fixe courses (May 2026) · lunch courses ¥1,800 / ¥2,500 / ¥3,200: appetizer platter, a main such as chicken in cream sauce, bread (June and July 2026) · dinner course ¥4,300 with amuse, appetizers, main and dessert (May 2026) · signature red-wine-braised beef cheek, extra on the cheaper courses; a ¥4,800 course with chilled pumpkin soup, fish and beef cheek (August, October and November 2026) · parfait for dessert; little garlic used (June, July and September 2026)',
    website: null, gmaps: gm('Bistrot VAPEURS 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: '[French bistro · Karasuma-Oike, prix fixe] A cheerful little bistro near Karasuma-Oike with red-check tablecloths and good-value set courses — lunches from ¥1,800, dinner from ¥4,300 — built around an appetizer platter and mains like chicken in cream or the much-praised red-wine-braised beef cheek. Warm front-of-house; cash only; closed Tuesday. Flagged: sister of Brasserie VAPEURS.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A May 2026 reviewer says the sister restaurant is Brasserie VAPEURS, that the mentor chef reportedly comes from Grill Onaka, a French restaurant in Gion, and praises the attentive Madame out front. No operator was found.',
      philosophy: null, specialty: 'Red-wine-braised beef cheek.',
      anecdotes: [
        { text: 'An October 2026 first-timer, drawn in by the smell from the street, meant to order the lightest course and ended up with the ¥4,800 one with beef cheek and a small parfait.', source: R + 'B536716450/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ ヴァプール 烏丸御池、フレンチ・ビストロ、中京区船屋町399-1、地下鉄烏丸御池駅1番出口から徒歩3分、ランチ 11:30〜15:00 (L.O. 14:00)、ディナー 17:00〜22:00 (L.O. 21:00)、火曜定休、サービス料・チャージ料なし、カード・電子マネー・QR不可、25席、禁煙。口コミ (2026年、英語): 赤いギンガムチェックのテーブルクロス、姉妹店はブラッスリー ヴァプール、師匠のシェフは祇園のフレンチ Grill Onaka 出身とのこと、マダムの接客、ランチコース1,800円/2,500円/3,200円、ディナーコース4,300円、牛ほほ肉の赤ワイン煮、4,800円のコース、パフェ、にんにく控えめ。',
      confidence: 'low', sources: [TB, R + 'B528303643/', R + 'B528698870/', R + 'B529978400/', R + 'B530077106/', R + 'B532372485/', R + 'B534023172/', R + 'B536374502/', R + 'B536716450/', R + 'B538611903/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the courses; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区船屋町399-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May to November 2026.' },
    pin_source: `Tabelog ${TB} (35.01229, 135.761216); cross-checked: GSI 京都府京都市中京区船屋町399番地 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529978400/', R + 'B528303643/', R + 'B536716450/'],
    price_note: 'Prices from 2026 reviews; no service or cover charge; cash only.', last_checked: TODAY, items: [
      it('', '', 'Lunch course: appetizer platter, main, bread', '¥1,800', 'Lunch', 'no', 'no', 'June and July 2026.', 'lunch_1800'),
      it('', '', 'Course with appetizers, fish and meat', '¥3,200', 'Lunch', 'no', 'no', 'June 2026.', 'course_3200'),
      it('', '', 'Dinner course', '¥4,300', 'Dinner', 'no', 'no', 'May 2026.', 'dinner_4300'),
      it('', '', 'Red-wine-braised beef cheek (extra on the cheaper courses)', '', 'Mains', 'ask', 'no', 'August, October and November 2026.', 'beef_cheek'),
    ] }, {
    cuisine: '赤いギンガムチェックのテーブルクロスのパリの街角のようなビストロ、選べるプリフィクスのコース (2026年5月)・ランチコース1,800円/2,500円/3,200円: 前菜の盛り合わせ、鶏のクリーム煮などのメイン、パン (2026年6・7月)・アミューズ、前菜、メイン、デザートのディナーコース4,300円 (2026年5月)・名物の牛ほほ肉の赤ワイン煮 (安いコースは追加料金)、冷製かぼちゃのスープ、魚、牛ほほ肉の4,800円のコース (2026年8・10・11月)・デザートにパフェ、にんにく控えめ (2026年6・7・9月)',
    neighborhood: '烏丸御池。1番出口から徒歩3分',
    gf_detail: '要確認。パン、クリームソース、スープ、パフェのあるプリフィクスのコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏のクリーム煮、魚、牛ほほ肉の赤ワイン煮、クリームチーズやアイス (2026年の口コミ)。',
    notes: '[フレンチビストロ・烏丸御池、プリフィクス] 烏丸御池近く、赤いギンガムチェックの明るい小さなビストロ。ランチ1,800円から、ディナー4,300円からのお得なコースで、前菜の盛り合わせに鶏のクリーム煮や評判の牛ほほ肉の赤ワイン煮。温かい接客。現金のみ、火曜定休。ブラッスリー ヴァプールの姉妹店 (要確認)。',
  });
}

// ================================================================ 七輪焼カネコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26030330/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_shichirinyaki_kaneko', name: '七輪焼カネコ (KANEKO)', category: 'OMNI',
    lat: 34.999299, lng: 135.756641, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled wagyu and A4 beef with sauces; salads of Kyoto vegetables and rice from low-pesticide farming; no gluten information (Tabelog; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant (Tabelog).',
    hours_raw: '17:00–22:30 (last orders 22:00); closed Wednesday (Tabelog). Two-hour limit when busy; often fully booked (May 2025). Cards, e-money and QR (Tabelog). 16 seats incl. a counter (Tabelog; May 2025). Smoking allowed (Tabelog). In a residential street, 6 min on foot from Shijo or Gojo subway stations (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Shijo and Gojo stations — 6 min from either',
    cuisine: 'Charcoal yakiniku of wagyu and A4 beef at moderate prices; salads of Kyoto vegetables; rice from low-pesticide farming (Tabelog) · half portions on request; sweet, well-marbled fillet (May 2025) · omakase for two (November 2025)',
    website: null, gmaps: gm('七輪焼カネコ 京都'), menu_url: TB,
    notes: '[Yakiniku · between Shijo and Gojo, charcoal] A small charcoal-grill yakiniku tucked into a residential street, serving wagyu and A4 beef at fair prices, with half portions so two can try many cuts. Often full; two-hour limit when busy; smoking allowed. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop describes its aim as high-quality, delicious yakiniku at an affordable price, from an owner particular about ingredients (Tabelog). A November 2025 reviewer saw many overseas guests. No operator was found.',
      philosophy: 'High-quality, delicious yakiniku at an affordable price (Tabelog).', specialty: 'Charcoal-grilled wagyu.',
      anecdotes: [
        { text: 'A May 2025 pair, turned away once when it was fully booked, came back and worked through half portions of many cuts at the counter.', source: R + 'B507621556/' },
      ],
      japanese_sources_summary: '食べログ: 七輪焼カネコ、焼肉・居酒屋・鉄板焼き、下京区御影町460、地下鉄四条駅・五条駅から徒歩6〜7分、17:00〜22:30 (L.O. 22:00)、水曜定休、カード・電子マネー・QR可、16席、喫煙可、住宅街の隠れ家、コンセプトは高品質でおいしい焼肉をお手頃に、和牛とA4ランクの牛肉、京野菜のサラダ、減農薬のお米。口コミ (2025年、英語): 予約で満席、混雑時は2時間制、ハーフサイズ可、ヒレ、二人のおまかせ、海外の客が多い。',
      confidence: 'low', sources: [TB, R + 'B507621556/', R + 'B516850320/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; half portions available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御影町460',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May and November 2025.' },
    pin_source: `Tabelog ${TB} (34.999349, 135.756641), offset 5.5 m south because おやこや (kyoto_oyakoya_shinmachi, 御影町460-1) sits 5.4 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区御影町460番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B507621556/'],
    price_note: 'No prices found; reviewers spent ¥6,000–¥7,999 a head (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled wagyu fillet', '', 'Yakiniku', 'ask', 'no', 'May 2025.', 'hire'),
      it('', '', 'Omakase for two', '', 'Yakiniku', 'ask', 'no', 'November 2025.', 'omakase'),
      it('', '', 'Kyoto-vegetable salad', '', 'Sides', 'ask', 'ask', 'Tabelog.', 'salad'),
    ] }, {
    cuisine: '和牛とA4ランクの牛肉を七輪の炭火で、手頃な値段で。京野菜のサラダ、減農薬のお米 (食べログ)・ハーフサイズ可、甘くほどよい脂のヒレ (2025年5月)・二人のおまかせ (2025年11月)',
    neighborhood: '四条駅と五条駅の間。どちらからも徒歩6分',
    gf_detail: '要確認。たれで食べる炭火焼きの和牛やA4の牛肉、京野菜のサラダ、減農薬のお米。グルテンの情報はない (食べログ、2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼肉店 (食べログ)。',
    notes: '[焼肉・四条と五条の間、炭火] 住宅街にひっそりある小さな炭火の焼肉店。和牛やA4の牛肉を手頃な値段で。ハーフサイズで二人でもいろいろな部位を楽しめる。満席が多く、混雑時は2時間制。喫煙可。水曜定休。',
  });
}

save();
