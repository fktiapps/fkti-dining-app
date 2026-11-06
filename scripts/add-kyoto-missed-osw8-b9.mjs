// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 9.
//   + 焼肉つむぎ Yakiniku Tsumugi (drum-can wagyu yakiniku courses on Nishi-Kiyamachi; core list)
//   + カワカフェ kawa cafe (all-day French-Japanese café in a machiya on the Kamo River, since 2012; core list)
//   + 日本料理 櫻川 Sakuragawa (Kiyamachi Nijo kaiseki counter; notable list)
//   + COPPIE (genre-free creative cooking in a Takatsuji machiya, since 2021; notable list)
//   Picked 2026-11-05 after batch 8 was integrated. `queue.mjs kyoto-missed next core 200`: 焼肉つむぎ 26044699;
//   河道屋倖松庵 26040067 skipped (same-name group of 5+); カワカフェ 26019877. `next notable 200`: 日本料理 櫻川 26000659 and
//   COPPIE 26036377. None of the four is in data/kyoto.json: grep by name (つむぎ/Tsumugi, カワカフェ/kawa cafe, 櫻川/
//   Sakuragawa, COPPIE) and address (北車屋町272 — kyoto_menya_edition_kiyamachi shares the lot; 美濃屋町176; 上樵木町491 —
//   kyoto_kappou_yamashita is at 491-3; 高辻猪熊町367) found none.
//   Pins: Tsumugi's Tabelog point is 4.7 m from kyoto_menya_edition_kiyamachi (same lot 272-1), moved ~2 m to sit 6 m away;
//   Sakuragawa's Tabelog point is 1.3 m from kyoto_kappou_yamashita (same lot 491), moved ~4 m north to sit 5.7 m away.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040067', '河道屋倖松庵: one of a group of same-name 河道屋 shops — our Tabelog crawl lists 河道屋 養老 26001100, 総本家 河道屋 26014542, 晦庵河道屋 26043813, 河道屋銀華 26000214, 河道屋倖松庵分店 26010441 and 河新麺房 河道屋支店 26014107 besides this one; same-name shops with 5+ branches count as a chain (Greg, 2026-11-05).');

// ================================================================ 焼肉つむぎ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044699/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_tsumugi', name: '焼肉つむぎ (Yakiniku Tsumugi)', category: 'OMNI',
    lat: 35.007025, lng: 135.770130, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu yakiniku with salt or sauce, strip loin grilled sukiyaki-style and dipped in egg yolk, kimchi and namul; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house; the only sides in the course are kimchi and bean-sprout namul (Tabelog; 2026 reviews).',
    hours_raw: '15:00–23:00, every day (last order food 22:00, drinks 22:30); closing days may vary (Tabelog). Reservations accepted, though walk-ins are welcomed; full by 17:00 on a September 2026 evening, so booking is wise (Tabelog; September 2026). 10% service charge (Tabelog). 18 table seats on high chairs around drum-can grills; can be hired for up to 50 (Tabelog; October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). By the Takase River on Nishi-Kiyamachi south of Sanjo; 3 min walk from Sanjo Stn (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi by the Takase River, south of Sanjo — 3 min walk from Sanjo Stn',
    cuisine: 'Wagyu yakiniku in small portions, "like sushi", grilled around drum cans (Tabelog shop text; September 2026) · Wagyu course, 120 g, ¥4,400: assorted kimchi, bean-sprout namul, three kinds of kuroge wagyu tongue, special outside skirt, chateaubriand, premium kalbi (or the day’s cut) with salt and with sauce, sliced strip loin grilled sukiyaki-style with egg yolk (Tabelog; September–October 2026) · Premium wagyu course, 180 g, ¥5,500 (Tabelog) · rice ¥330; Kyoto Beer Matcha ¥990; umeshu soda ¥770 (September 2026)',
    website: null, gmaps: gm('焼肉つむぎ 京都 木屋町'), menu_url: TB,
    notes: "[Yakiniku · Kiyamachi, wagyu courses round a drum can] A casual yakiniku room by the Takase River where you sit on high chairs round drum-can grills and work through small portions of wagyu: three kinds of tongue, outside skirt, chateaubriand, kalbi with salt and with sauce, and a strip-loin slice grilled sukiyaki-style and dipped in egg yolk — 120 g for ¥4,400, or 180 g for ¥5,500, plus 10% service. Cheerful staff explain the cuts. Open from 15:00; book for evenings.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: high-quality meat at prices as accessible as possible, small portions of wagyu like sushi, "satisfaction beyond the price" in Kiyamachi. October 2026 reviewers describe cheerful staff who explain each cut and a mix of tourists and locals.',
      philosophy: 'Per the Tabelog shop text: "satisfaction beyond the price".',
      specialty: 'Wagyu course with chateaubriand; strip loin with egg yolk.',
      anecdotes: [
        { text: '"The style of grilling around the drum can was refreshing, creating a different atmosphere from the usual yakiniku." — September 2026.', source: R + 'B536475942/' },
        { text: '"The meat portion is 120g per person, which might be just right for women! For men, it might feel a bit insufficient." — October 2026.', source: R + 'B537718366/' },
        { text: '"The cheerful and energetic staff provided explanations about the meat, making the dining experience enjoyable." — October 2026.', source: R + 'B537027578/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉・ホルモン、中京区北車屋町272-1、京阪三条駅から徒歩3分、毎日15:00〜23:00 (L.O. 料理22:00・ドリンク22:30)、不定休、予約可、サービス料10%、18席 (テーブル)、貸切50名まで、カード・PayPay・d払い・楽天ペイ・au PAY・Alipay 可、和牛コース120g 4,400円 (牛タン3種、シャトーブリアン、ハラミ、ロースの焼きすき)、特選和牛コース180g 5,500円、店舗紹介: 寿司のように少量ずつ味わう和牛、値段以上の満足。口コミ (2026年9〜10月、英語): ドラム缶を囲む焼肉、ハイチェア、キムチ盛り合わせ、もやしナムル、上カルビ (塩・たれ)、卵黄のロース、ライス330円、Kyoto Beer Matcha 990円、梅酒ソーダ770円、明るいスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B536459253/', R + 'B536475942/', R + 'B537027578/', R + 'B537160452/', R + 'B537211156/', R + 'B537374626/', R + 'B537601951/', R + 'B537706674/', R + 'B537718366/', R + 'B537721257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fixed courses; staff explain the cuts; 10% service; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区北車屋町272-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007020, 135.770151), moved ~2 m to stay 6 m from kyoto_menya_edition_kiyamachi on the same lot (272-1); cross-checked: GSI 京都府京都市中京区北車屋町272番地 (lot) 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536459253/'],
    price_note: 'Tabelog course prices (tax included); drinks from a September 2026 review; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Wagyu course, 120 g (8 items, with chateaubriand)', '¥4,400', 'Courses', 'ask', 'no', '', 'wagyu_course'),
      it('', '', 'Premium wagyu course, 180 g (11 items)', '¥5,500', 'Courses', 'ask', 'no', '', 'premium_course'),
      it('', '', 'Rice', '¥330', 'Sides', '', '', 'September 2026.', 'rice'),
      it('', '', 'Kyoto Beer Matcha', '¥990', 'Drinks', '', '', 'September 2026.', 'kyoto_beer_matcha'),
    ] }, {
    cuisine: '寿司のように少量ずつ、ドラム缶を囲んで焼く和牛の焼肉 (食べログの店舗紹介、2026年9月)・和牛コース120g 4,400円: キムチ盛り合わせ、もやしナムル、黒毛和牛の牛タン3種、特選ハラミ、シャトーブリアン、上カルビ (またはその日の部位) の塩とたれ、卵黄で食べるロースの焼きすき (食べログ、2026年9〜10月)・特選和牛コース180g 5,500円 (食べログ)・ライス330円、Kyoto Beer Matcha 990円、梅酒ソーダ770円 (2026年9月)',
    neighborhood: '三条の南、高瀬川沿いの西木屋町。三条駅から徒歩3分',
    gf_detail: '要確認。塩かたれの和牛の焼肉、焼きすき風のロースを卵黄で、キムチとナムル。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店で、コースの副菜はキムチともやしナムルだけ (食べログ、2026年の口コミ)。',
    notes: '[焼肉・木屋町、ドラム缶を囲む和牛のコース] 高瀬川沿いのカジュアルな焼肉。ハイチェアでドラム缶の焼き台を囲み、和牛を少しずつ: 牛タン3種、ハラミ、シャトーブリアン、塩とたれのカルビ、卵黄で食べる焼きすきのロース。120gで4,400円、180gで5,500円、サービス料10%。明るいスタッフが部位を説明してくれる。15時から、夜は予約を。',
  });
}

// ================================================================ カワカフェ kawa cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019877/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kawa-cafe.com/';
  const H = day(['10:00', '23:30']);
  put({
    id: 'kyoto_kawa_cafe', name: 'カワカフェ (kawa cafe)', category: 'OMNI',
    lat: 34.999736, lng: 135.768813, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Quiche, galettes, pasta, pizza, sandwiches, crêpes and tarts by day, bistro dishes at night; no gluten information (official site; October 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. French bistro and café menu with cakes and tarts; no vegan dish is named (official site; 2026 reviews).',
    hours_raw: 'Tabelog: 10:00–23:30 every day, closed irregularly. The official site gives 10:00 to midnight in Japanese and 10:00–23:00 in English and French, "non-stop". No reservations (Tabelog); private hire for groups (official site). The riverside terrace (kawayuka) runs only in season, until September, with a ¥300 seat charge (July–October 2026). Cash only (Tabelog). 20 seats; non-smoking (Tabelog). Many guests and staff are from abroad (2026 reviews). On Kiyamachi north of Matsubara, backing onto the Kamo River; 8 min walk from Kawaramachi, Gion-Shijo and Kiyomizu-Gojo stations (Tabelog). Open since 2012 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Matsubara, on the Kamo River — 8 min walk from Kawaramachi Stn',
    cuisine: 'All-day café, bistro and bar in a Kyoto townhouse on the Kamo River — breakfast, brunch, lunch, tea, aperitif, dinner and bar, with French bistro dishes, sweets and Japanese food (official site) · lunch in October 2026: quiche, galettes, pasta, pizza, baguette sandwiches, crêpes, tarts, and even shoyu and tonkotsu ramen; bistro menu with wine and cocktails at night · pear tart ¥950, orange juice ¥650 (October 2026); iced chai ¥700 (July 2026); shandy gaff ¥900 (September 2026) · an August 2026 reviewer found the food menu gone late in the evening, with only drinks, cakes and snacks',
    website: SITE, gmaps: gm('kawa cafe 京都 木屋町'), menu_url: SITE,
    notes: "[Café · Kiyamachi, a machiya on the Kamo River] An all-day café-bistro in an old townhouse whose big back windows — and, until September, a riverside terrace — look straight onto the Kamo River and the herons on its banks. French-leaning food from galettes and quiche at lunch to bistro plates and wine at night, with cakes, chai and cocktails between; the house cat Kawa-chan naps in a basket. Many staff and guests are from abroad. Service draws mixed reviews in 2026 — slow, orders misunderstood, a ¥300 terrace charge. Cash only.",
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed in the sources)'], origin: null,
      background: 'Per the official site (in Japanese, English and French): Kawa Café, since 2012, in a machiya facing the Kamogawa, offers non-stop service from breakfast to bar, French bistro food, sweets and Japanese dishes "at very friendly prices", and aims to preserve Kyoto’s architectural heritage and save water and energy. Reviewers in 2026 describe staff mostly from abroad and a resident cat, Kawa-chan, the cat on the shop sign.',
      philosophy: 'Per the official site: Kyoto heritage preserved, water and energy saved, "an eco-friendly perspective".',
      specialty: 'Tarts; galettes; drinks on the river.',
      anecdotes: [
        { text: '"Kawa-chan was wandering around the cafe and napping in a basket, looking incredibly cute!" — June 2026.', source: R + 'B530801900/' },
        { text: '"There was a white heron on the opposite bank, and I leisurely enjoyed a relaxing afternoon." — June 2026.', source: R + 'B530835777/' },
        { text: 'A July 2026 visitor paid a ¥300 terrace charge, found the chairs worn, had to repeat an order for iced chai several times, received no water, and felt ¥700 for a weak chai was too much.', source: R + 'B531331884/' },
        { text: 'A May 2026 visitor found both staff members on duty unfriendly.', source: R + 'B529432894/' },
        { text: 'An October 2026 visitor was served an iced drink instead of a hot one and found the wanted cake sold out.', source: R + 'B537220539/' },
      ],
      japanese_sources_summary: '公式サイト (kawa-cafe.com、日本語・英語・フランス語): Since 2012、鴨川に面した京町家、床シーズンにはテラス席、朝食、ブランチ、ランチ、スイーツとお茶、夕食前の一杯、ディナー、バータイムまでノンストップ営業、フランスのビストロ料理、スイーツ、和食、営業時間は毎日朝10時から夜24時まで (英語・仏語では23時まで)、個室貸し切り、京都の建築遺産と資源の保全。食べログ: カフェ・ビストロ・バー、下京区木屋町通松原上ル美濃屋町176-1、毎日10:00〜23:30、不定休、予約不可、20席、カード・電子マネー・QR 不可、禁煙。口コミ (2026年5〜10月、英語): 看板猫の Kawa-chan、鴨川の眺め、テラス席は9月まで・席料300円、洋梨のタルト950円、アイスチャイ700円、シャンディガフ900円、キッシュ、ガレット、パスタ、ピザ、ラーメン、海外のスタッフ、接客への不満。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529432894/', R + 'B530801900/', R + 'B530835777/', R + 'B530928995/', R + 'B531331884/', R + 'B533816624/', R + 'B533903506/', R + 'B537220539/', R + 'B537458486/', R + 'B537628241/'] },
    cultural_comfort: { level: 'english', note: 'Trilingual website; many staff from abroad; cash only; terrace seat charge in season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原上ル美濃屋町176-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999736, 135.768813); cross-checked: GSI 京都府京都市下京区美濃屋町176番地 (lot) 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537628241/', R + 'B531331884/', R + 'B537458486/'],
    price_note: 'No menu prices read; from July–October 2026 reviews; ¥300 terrace charge in season.', last_checked: TODAY, items: [
      it('', '', 'Pear tart', '¥950', 'Sweets', 'no', 'ask', 'October 2026.', 'pear_tart'),
      it('', '', 'Iced chai', '¥700', 'Drinks', '', '', 'July 2026.', 'iced_chai'),
      it('', '', 'Shandy gaff', '¥900', 'Drinks', '', '', 'September 2026.', 'shandy_gaff'),
      it('', '', 'Galette', '', 'Lunch', 'ask', 'ask', 'October 2026.', 'galette'),
    ] }, {
    cuisine: '鴨川に面した京町家の、朝から夜までのカフェ・ビストロ・バー。朝食、ブランチ、ランチ、お茶、アペリティフ、ディナー、バー。フランスのビストロ料理、スイーツ、和食も (公式サイト)・2026年10月の昼: キッシュ、ガレット、パスタ、ピザ、バゲットサンド、クレープ、タルト、さらに醤油と豚骨のラーメンも。夜はビストロの料理とワイン、カクテル・洋梨のタルト950円、オレンジジュース650円 (2026年10月)、アイスチャイ700円 (2026年7月)、シャンディガフ900円 (2026年9月)・2026年8月の口コミでは、夜遅くには料理のメニューがなく、飲み物、ケーキ、軽食だけだった',
    neighborhood: '松原の北の木屋町、鴨川沿い。河原町駅から徒歩8分',
    gf_detail: '要確認。昼はキッシュ、ガレット、パスタ、ピザ、サンドイッチ、クレープ、タルト、夜はビストロ料理。グルテンの情報はない (公式サイト、2026年10月)。',
    vegan_detail: '要確認。フランスのビストロとカフェのメニューにケーキとタルト。ヴィーガンの料理は書かれていない (公式サイト、2026年の口コミ)。',
    notes: '[カフェ・木屋町、鴨川に面した町家] 古い町家の裏の大きな窓から、そして9月までは川床のテラスから、鴨川と岸の鷺を眺められる、朝から夜までのカフェ・ビストロ。昼のガレットやキッシュから夜のビストロ料理とワインまでフランス寄りの料理に、合間はケーキ、チャイ、カクテル。看板猫の Kawa-chanがかごで眠る。スタッフも客も海外の人が多い。2026年の接客の評価は分かれ、遅い、注文が通じない、テラスの席料300円との声も。現金のみ。',
  });
}

// ================================================================ 日本料理 櫻川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000659/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-sakuragawa.jp/'; const KAISEKI = SITE + 'kaiseki/'; const CONCEPT = SITE + 'concept/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_nihon_ryori_sakuragawa', name: '日本料理 櫻川 (Japanese cuisine Sakuragawa)', category: 'OMNI',
    lat: 35.012215, lng: 135.770684, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant states on Tabelog, "We do not accept reservations for vegetarians or those with gluten allergies," and may decline other dietary restrictions (Tabelog, staff-maintained).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant does not accept reservations for vegetarians (Tabelog); the kaiseki is built on fish, freshly shaved katsuobushi dashi and seasonal seafood (official site; 2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00, dinner 18:00–22:00; closed Sunday and over New Year (official site; Tabelog). Lunch course at ¥16,500 must be booked by the day before (official site). Cancellations: 50% the day before, 100% on the day; tell the shop if more than 15 minutes late — after 30 minutes the booking may be cancelled (Tabelog). 10% service charge at lunch and dinner (official site). No vegetarians or gluten-allergic guests; other dietary restrictions may be declined (Tabelog). Counter seats from middle-school age, ordering the adult course (Tabelog). 14 seats: a 10-seat white-wood counter and a semi-private table for 2–4; non-smoking; wheelchair accessible (official site; Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Kiyamachi south of Nijo by the Takase River; 3 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Nijo, by the Takase River — 3 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Seasonal kaiseki at a white-wood counter, with katsuobushi shaved fresh for the dashi (official site) · lunch courses ¥8,800 and ¥16,500 (book the day before); dinner courses ¥22,000 and ¥27,500; à la carte at night on request; all plus 10% service (official site) · seasonal examples: hamo shabu-shabu in an onion dashi (July–August), ayu and hamo otoshi (May–June), autumn eggplant and ochiayu steak (September–October) (official site) · autumn 2026: hassun with figs in sesame soy and grilled sanma liver, matsutake and hamo soup, kombu-cured sea bream, grilled kamasu, turnip mousse, clay-pot rice with eel and simmered beef (September 2026); hamo and matsutake in many ways (September 2026) · 15–20 sakes and wines at any time, served in artists’ sake vessels (official site) · tsukudani, nabe sets and ponzu by mail; New Year osechi (official site)',
    website: SITE, gmaps: gm('日本料理 櫻川 京都 木屋町'), menu_url: KAISEKI,
    notes: "[Kaiseki · Kiyamachi Nijo, a white-wood counter by the Takase River] A quiet kaiseki restaurant by the Takase River with a 10-seat white-wood counter, where the cooks use freshly shaved katsuobushi and build seasonal courses — hamo shabu-shabu in summer, matsutake and hamo in autumn, clay-pot rice with eel to finish. Lunch from ¥8,800, dinner ¥22,000–27,500, plus 10% service. Note: the house does not take bookings from vegetarians or guests with gluten allergies. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner and cooks (unnamed in the sources)'], origin: null,
      background: 'Per the official site: Japanese cooking that respects tradition while offering Sakuragawa’s own taste, katsuobushi shaved fresh, fifteen to twenty sakes and wines on hand, sake vessels made by artists, and dishes suited to each guest’s tastes; a branch, おばんざい櫻川, closed in February 2026. A September 2026 reviewer says the restaurant has earned a Michelin star; an eighteen-time regular describes the counter full of locals (September 2026).',
      philosophy: 'Per the official site: no corner cut, from buying to cooking to serving.',
      specialty: 'Hamo and matsutake; clay-pot rice; pudding.',
      anecdotes: [
        { text: 'An 18th-visit regular in September 2026 had hamo from Awaji and Korea and matsutake from Iwate in a dobin-mushi, a fried dish, a grilled wrap, sashimi and clay-pot rice, and took the leftover rice home.', source: R + 'B443970092/' },
        { text: '"This was the best kombu-kelp marinated dish I’ve ever had." — September 2026.', source: R + 'B537999618/' },
        { text: '"If I had to wish for something more, I would have liked to have one additional dish... It might be a bit insufficient in quantity for men." — November 2026.', source: R + 'B538708545/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-sakuragawa.jp): 京都・木屋町の日本料理、白木のカウンター十席と半個室のテーブル一卓、昼12:00〜14:00・夜18:00〜22:00、昼夜ともサービス料10%、日曜定休、年末年始休み、削りたての鰹節、常時15〜20種の日本酒とワイン、作家の酒器、夜の会席22,000円・27,500円 (税込)、夜は一品料理も、昼の会席8,800円・16,500円 (前日までの要予約)、季節の例 (鱧しゃぶ玉葱風味だし、秋茄子と落鮎のステーキ ほか)、佃煮・鍋セット・ポン酢の通販、おせち、支店おばんざい櫻川は2026年2月に閉店。食べログ (店舗会員): ベジタリアンとグルテンアレルギーの方の予約は不可、その他の食事制限もお断りする場合あり、カウンターは中学生以上、キャンセル料 (前日50%、当日100%)、14席、禁煙、車椅子可、カード可。口コミ (2026年5〜11月、英語): 昼の会席16,500円+サービス料、鱧しゃぶ、松茸、昆布締めの鯛、土鍋ご飯、プリン、ミシュランの星。',
      confidence: 'medium', sources: [TB, SITE, KAISEKI, CONCEPT, R + 'B432302088/', R + 'B443970092/', R + 'B515936681/', R + 'B530646561/', R + 'B530755095/', R + 'B531486618/', R + 'B532828762/', R + 'B533937555/', R + 'B537999618/', R + 'B538708545/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English page on the official site; book ahead (TableCheck); no vegetarian or gluten-allergy bookings.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Declines reservations from vegetarians and guests with gluten allergies; may decline other dietary restrictions (Tabelog, staff-maintained).'], confidence: 'medium' },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通二条下ル上樵木町491 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (September 2026 notices) and Tabelog listing (staff-maintained); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012176, 135.770684), moved ~4 m north to stay 5.7 m from kyoto_kappou_yamashita (491-3, same lot); GSI matches only the town 京都府京都市中京区上樵木町 for 491, 491-3 and 492 (72 m), so the pin rests on the Tabelog point (GSI only, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [KAISEKI],
    price_note: 'Official site (tax included); 10% service charge on top.', last_checked: TODAY, items: [
      it('昼の会席コース', '', 'Lunch kaiseki course', '¥8,800', 'Lunch', 'no', 'no', '', 'lunch_8800'),
      it('昼の会席コース (前日までの要予約)', '', 'Lunch kaiseki course (book by the day before)', '¥16,500', 'Lunch', 'no', 'no', '', 'lunch_16500'),
      it('夜の会席コース', '', 'Dinner kaiseki course', '¥22,000', 'Dinner', 'no', 'no', '', 'dinner_22000'),
      it('夜の会席コース', '', 'Dinner kaiseki course (larger)', '¥27,500', 'Dinner', 'no', 'no', '', 'dinner_27500'),
    ] }, {
    cuisine: '白木のカウンターの季節の会席。だしには削りたての鰹節 (公式サイト)・昼の会席8,800円と16,500円 (前日までに予約)、夜の会席22,000円と27,500円、夜は希望すれば一品料理も、いずれもサービス料10%別 (公式サイト)・季節の例: 鱧しゃぶ玉葱風味だし (7〜8月)、鮎塩焼きや鱧おとし (5〜6月)、秋茄子と落鮎のステーキ (9〜10月) (公式サイト)・2026年秋: いちじくの胡麻醤油や秋刀魚の肝焼きの八寸、松茸と鱧の椀、鯛の昆布締め、かますの焼き物、かぶのムース、鰻と牛肉の炊いたんを添えた土鍋ご飯 (2026年9月)、鱧と松茸づくし (2026年9月)・常時15〜20種の日本酒とワイン、作家の酒器 (公式サイト)・佃煮、鍋セット、ポン酢の通販、おせち (公式サイト)',
    neighborhood: '二条の南の木屋町、高瀬川沿い。京都市役所前駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。店は食べログで「ベジタリアンとグルテンアレルギーの方の予約は受け付けない」としており、その他の食事制限も断る場合がある (食べログ、店舗会員)。',
    vegan_detail: 'ヴィーガン不可。ベジタリアンの予約は受け付けない (食べログ)。会席は魚、削りたての鰹節のだし、季節の魚介が中心 (公式サイト、2026年の口コミ)。',
    notes: '[会席・木屋町二条、高瀬川沿いの白木のカウンター] 高瀬川沿いの静かな会席料理店。10席の白木のカウンターで、削りたての鰹節を使い、季節の会席を作る: 夏は鱧しゃぶ、秋は松茸と鱧、締めは鰻を添えた土鍋ご飯。昼8,800円から、夜22,000〜27,500円、サービス料10%別。ベジタリアンとグルテンアレルギーの方の予約は受けていないので注意。日曜休み。',
  });
}

// ================================================================ COPPIE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26036377/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:30']);
  put({
    id: 'kyoto_coppie', name: 'COPPIE', category: 'OMNI',
    lat: 34.999245, lng: 135.750449, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Genre-free plates include spring rolls, shumai, noodles, risotto and curry alongside sashimi and grilled fish and game; the shop asks to be told of allergies and dietary restrictions in advance (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu is built on fish, game and meat, but the shop invites guests to state dietary restrictions in advance (Tabelog; 2026 reviews).',
    hours_raw: 'From 17:00 to 24:30, last food order 21:30; closed irregularly — see Instagram (Tabelog). Reservations accepted; tell the shop in advance about allergies, restrictions or a stay under two hours; no strong perfume (Tabelog). Children under 9 only at one table, arranged in advance; children’s meals on request (Tabelog). 20 seats: 12 at the counter and 8 at tables; non-smoking, with a smoking spot outside (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), no e-money or QR (Tabelog). Sommelier; bring-your-own possible (Tabelog). In a townhouse with a courtyard on Takatsuji; 10 min walk from Shijo-Omiya, about 10 min by taxi from Kyoto Stn (Tabelog; June 2026). Opened 12 August 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takatsuji-dori near Inokuma, south-west of Shijo Omiya — 10 min walk from Shijo-Omiya Stn',
    cuisine: 'Genre-free creative cooking from ingredients all over Japan, mostly à la carte in small portions, with courses at times (2026 reviews) · June 2026 plates: Shimane horse mackerel sashimi with green plum, Kamo eggplant with mole poblano and passion fruit, Aichi conger and young corn spring roll with gorgonzola, charcoal-grilled sweet sea bream with gyokuro and Manganji pepper, Ezo venison loin, clams with soy milk and chilled kudzu noodles · April 2026 course: funazushi-flavoured potato salad, lamb and turnip, firefly squid shumai, bonito with wild garlic, sea bream, spiced curry, a terrine for dessert · fifth-anniversary course ¥15,000 with sea bream risotto and noodles under karasumi made when the shop opened (August 2026) · wine, sake and drink pairings; alcohol-free "craft winy" mocktails, Belgian alcohol-free beer, homemade ginger ale, sansho soda (2026 reviews)',
    website: null, gmaps: gm('COPPIE 京都 高辻'), menu_url: null,
    notes: "[Creative · Shijo Omiya, a genre-free townhouse counter] A stylish machiya counter with a courtyard, a short walk off the beaten track south-west of Shijo Omiya, cooking genre-free small plates from ingredients all over Japan — Kamo eggplant with mole and passion fruit, conger and gorgonzola spring rolls, Ezo venison — mostly à la carte, with clever wine, sake and alcohol-free pairings. Staff are friendly and full of stories. Bills run about ¥10,000–30,000. A March 2026 regular felt the mood changed with many overseas guests. Open from 17:00; closed irregularly (Instagram).",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed in the sources)'], origin: null,
      background: 'Opened 12 August 2021 (Tabelog); reviewers celebrated its fifth anniversary in August 2026 with a special course. 2026 reviewers describe friendly, knowledgeable staff, drink pairings full of surprises, and an alcohol-free list of "craft winy" mocktails. A March 2026 regular found the visit disappointing, suggesting that about half the guests being foreigners had changed the atmosphere.',
      philosophy: null, specialty: 'Genre-free small plates; drink pairings.',
      anecdotes: [
        { text: '"For the noodle dish, I had it topped with karasumi (dried mullet roe) made when the restaurant first opened" — August 2026.', source: R + 'B533578742/' },
        { text: '"What stood out this time was the impressive selection of non-alcoholic drinks." — August 2026.', source: R + 'B533582903/' },
        { text: '"This time was a bit disappointing. Perhaps it’s because about half of the customers were foreigners, which changed the atmosphere?" — March 2026.', source: R + 'B480417628/' },
        { text: '"The à la carte dishes were excellent, but what truly stood out was the wine and drink pairings, which were filled with surprises and excitement." — October 2026.', source: R + 'B538682315/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 創作料理・イノベーティブ、下京区高辻猪熊町367、阪急四条大宮駅から徒歩10分、17:00〜24:30 (料理 L.O. 21:30)、不定休 (Instagram)、予約可 (アレルギーや苦手なもの、2時間未満の滞在は事前に連絡、香水は控える)、9歳未満は1卓のみ・事前連絡、子供の料理は予約時に相談、20席 (カウンター12、テーブル8)、禁煙 (屋外に喫煙所)、カード可、電子マネー・QR 不可、ソムリエ、持ち込み可、2021年8月12日オープン。口コミ (2026年3〜10月、英語): ジャンルレスのアラカルト、Shimane の鯵、賀茂茄子のモーレ、穴子とゴルゴンゾーラの春巻き、甘鯛の炭火焼き、Ezo 鹿、5周年の特別コース15,000円、開店時のカラスミ、ノンアルコールのペアリング、自家製ジンジャーエール、中庭、海外の客が多いとの声。',
      confidence: 'medium', sources: [TB, R + 'B480417628/', R + 'B526278332/', R + 'B529624187/', R + 'B530163020/', R + 'B530626085/', R + 'B533578742/', R + 'B533582903/', R + 'B537175625/', R + 'B537539599/', R + 'B538682315/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and mention allergies; à la carte at the counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻猪熊町367',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999245, 135.750449); cross-checked: GSI 京都府京都市下京区高辻猪熊町367番地 (lot) 38 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530626085/', R + 'B533582903/'],
    price_note: 'No menu prices read; a ¥15,000 anniversary course (August 2026); bills ¥10,000–30,000 in 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kamo eggplant with mole poblano and passion fruit', '', 'À la carte', 'ask', 'ask', 'June 2026.', 'kamo_nasu_mole'),
      it('', '', 'Conger and young corn spring roll with gorgonzola', '', 'À la carte', 'no', 'no', 'June 2026.', 'anago_spring_roll'),
      it('', '', 'Ezo venison loin', '', 'À la carte', 'ask', 'no', 'June 2026.', 'ezo_venison'),
      it('', '', 'Fifth-anniversary course', '¥15,000', 'Course', 'ask', 'no', 'August 2026.', 'anniversary_course'),
    ] }, {
    cuisine: '全国の食材のジャンルレスな創作料理。少量ずつのアラカルトが中心で、コースのときも (2026年の口コミ)・2026年6月の皿: Shimane の鯵の刺身と青梅、賀茂茄子のモーレ・ポブラーノとパッションフルーツ、Aichi の穴子とヤングコーンとゴルゴンゾーラの春巻き、甘鯛の炭火焼きと玉露と万願寺とうがらし、Ezo 鹿のロース、貝の豆乳と冷たい葛麺・2026年4月のコース: 鮒寿司風味のポテトサラダ、羊とかぶ、ほたるいかのしゅうまい、かつおと行者にんにく、鯛、スパイスカレー、デザートのテリーヌ・5周年のコース15,000円、鯛のリゾットと開店時に作ったカラスミをのせた麺 (2026年8月)・ワイン、日本酒のペアリング、ノンアルコールの「クラフト ワイニー」モクテル、ベルギーのノンアルコールビール、自家製ジンジャーエール、山椒ソーダ (2026年の口コミ)',
    neighborhood: '四条大宮の南西、猪熊近くの高辻通。四条大宮駅から徒歩10分',
    gf_detail: '要確認。春巻き、しゅうまい、麺、リゾット、カレーと、刺身や焼き魚、ジビエが並ぶジャンルレスな料理。アレルギーや食事制限は事前に伝えるよう店が求めている (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。魚、ジビエ、肉が中心だが、食事制限は事前に伝えるよう店が案内している (食べログ、2026年の口コミ)。',
    notes: '[創作・四条大宮、ジャンルレスな町家のカウンター] 四条大宮の南西、少し外れた中庭のある町家のおしゃれなカウンター。全国の食材でジャンルにとらわれない小皿を作る: 賀茂茄子のモーレとパッションフルーツ、穴子とゴルゴンゾーラの春巻き、Ezo 鹿。アラカルト中心で、ワイン、日本酒、ノンアルコールのペアリングも巧み。スタッフは気さくで話が楽しい。会計は1人10,000〜30,000円ほど。2026年3月の常連は、海外の客が多く雰囲気が変わったと書いている。17時から、不定休 (Instagram)。',
  });
}

save();
