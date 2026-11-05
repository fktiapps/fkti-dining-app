// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 3.
//   + mixologybar smooth (fresh-fruit and liquid-nitrogen cocktail bar on Kiyamachi, since 2006; core list)
//   + ja!rêve DESSERT&WINE (plated-dessert and wine counter in a Shijo Kawaramachi hotel, since 2023; core list)
//   + eze bleu (takeaway bakery on Imadegawa-dori, Bread WEST 100 2026; notable list)
//   + ビリヤニ専門店 INDIA GATE (8-seat biryani counter by Shijo Karasuma, Asian/Ethnic WEST 100 2026; notable list)
//   Picked 2026-11-05 after batch 2 was integrated. `queue.mjs kyoto-missed next core 200`, lane-1 ids in order:
//   mixologybar smooth 26013541 (drafted); 麺匠 たか松 KAWARAMACHI 26031907 and Paradise Dynasty 京都四条店 26043721
//   (skipped, chains); ja!reve DESSERT&WINE 26038885 (drafted). `next notable 200`: eze bleu 26002639 and INDIA GATE
//   26034529. None of the four drafted is in data/kyoto.json: grep by name (smooth/mixology, reve/レーヴ, eze/エズ,
//   INDIA GATE/ビリヤニ) and address (ヨシキビル, 富永町354, 大原口町212, 天神山町271) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031907', '麺匠 たか松 KAWARAMACHI: same-concept branch of 麺匠 たか松, whose 本店 is already in data/kyoto.json as kyr_mensho_takamatsu_honten ("麺匠 たか松 本店 (Mensho Takamatsu Honten)").');
skip('26043721', 'Paradise Dynasty 京都四条店: Kyoto branch of a Singapore restaurant brand (review B537492211, October 2026: "This restaurant, originating from Singapore, is one of its branches in Japan."); Tabelog also lists Paradise Dynasty 大阪心斎橋店 27155707 (大阪府大阪市中央区南船場3-12-14 クオーツ心斎橋 5F). Group website paradisegp.com was down on 2026-11-05, so the shop count is not confirmed: skipped as a chain branch, for the integrator to confirm.');

// ================================================================ mixologybar smooth
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013541/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/_mixologybarsmooth_/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_mixologybar_smooth', name: 'mixologybar smooth', category: 'OMNI',
    lat: 35.004879, lng: 135.770639, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar: fresh-fruit cocktails on liqueurs, whisky and brandy, some with mascarpone or milk fat, and dried-apple or apple-chip snacks; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many cocktails are fresh fruit with spirits, but some use mascarpone or milk fat; no ingredient list is published (2024–2026 reviews).',
    hours_raw: '18:00–03:00; closed Wednesday (Tabelog). Reservations accepted; the whole bar can be hired for up to 20 (Tabelog). A ¥500 a person charge (Tabelog). Cocktails about ¥1,000–2,000 each (February 2026); strong, but can be made lighter on request (April 2026). 19 seats: 11 at the counter and 8 at tables, with a sofa at the back (Tabelog; July 2026). Heated tobacco only inside, ashtray outside (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). English menu (Tabelog). On Kiyamachi-dori, ground floor of ヨシキビル; 3 min walk from Kawaramachi Stn (Hankyu) (Tabelog). Opened 7 July 2006 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi-dori near Shijo — 3 min walk from Kawaramachi Stn',
    cuisine: 'Mixology bar: fresh-fruit cocktails made with liquid nitrogen, espuma and smoke machines (Tabelog shop text) · melon mojito, kiwi and pear cocktails, a mascarpone cocktail, a liquid-nitrogen mojito, a chocolate-mint cocktail with frozen milk fat (about 10% alcohol), smoked cocktails, a smoky coffee cocktail with a salt-and-chocolate rim (2023–2026 reviews) · cocktails made to your stated taste (March 2025) · apple chips and dried apple with the drinks (2025–2026 reviews)',
    website: IG, gmaps: gm('mixologybar smooth 京都 木屋町'), menu_url: null,
    notes: "[Cocktail bar · Kiyamachi, fresh fruit and liquid nitrogen] A late-night mixology bar on Kiyamachi, open since 2006 until 03:00: tell the bartenders what you like and they build a fresh-fruit cocktail in front of you with liquid nitrogen, espuma, smoke, a triangular flask of brandy and test tubes of water — a melon mojito, a kiwi or pear cocktail, a chocolate-mint drink of frozen milk fat. Cocktails run about ¥1,000–2,000, plus ¥500 a head; they pour strong but will make it lighter. Counter, a few tables and a sofa at the back; English menu. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed in the sources)'], origin: null,
      background: 'Per the Tabelog shop text: "Fresh Fruits + Cutting-Edge Technology → Mixology", using fresh fruits, liquid nitrogen, espuma and smoke machines. Opened 7 July 2006 (Tabelog). Reviews from 2023 to 2026 describe friendly, talkative bartenders (two on a May 2026 night), regulars who liven the room when busy (July 2026), and drinks made to order from a guest’s stated taste.',
      philosophy: null, specialty: 'Fresh-fruit cocktails; liquid-nitrogen and smoked cocktails.',
      anecdotes: [
        { text: '"I simply said I wanted something coffee-based, and they served me a smoky, sweet coffee cocktail... I was amazed to find the rim of the glass coated with salt and chocolate!" — March 2025.', source: R + 'B507190570/' },
        { text: '"The brandy stored in a triangular flask, distilled water poured from a test tube, and the smoke machine with liquid nitrogen created an exciting atmosphere!" — July 2026.', source: R + 'B532065380/' },
        { text: '"The alcohol was quite strong in a good way, so if you\'re not used to drinking, be careful not to overindulge. ⚠️ They can make it lighter upon request." — April 2026.', source: R + 'B526624510/' },
        { text: '"I thought bars in Kyoto would be intimidating and hard to enter." Then: "once I started talking to them, I realized how fun they were." — May 2026.', source: R + 'B528358045/' },
      ],
      japanese_sources_summary: '食べログ: バー・ダイニングバー・イタリアン、中京区木屋町通 ヨシキビル1F、阪急河原町駅から徒歩3分、18:00〜翌3:00、水曜休み、予約可、貸切20名まで、サービス料1人500円、19席 (カウンター11、テーブル8)、加熱式たばこのみ、カード・電子マネー・PayPay 可、英語メニューあり、2006年7月7日オープン、店舗紹介: フレッシュフルーツと液体窒素、エスプーマ、スモークマシンのミクソロジー。口コミ (2023年5月〜2026年7月、英語): メロンモヒート、キウイ、洋梨、マスカルポーネ、液体窒素のモヒート、チョコミント、スモークカクテル、好みに合わせたカクテル、1杯1,000〜2,000円ほど、強めだが薄くもできる、奥にソファ、話しやすいバーテンダー。',
      confidence: 'medium', sources: [TB, IG, R + 'B480639908/', R + 'B487230958/', R + 'B496509543/', R + 'B502408931/', R + 'B507190570/', R + 'B514767301/', R + 'B524525469/', R + 'B526624510/', R + 'B528358045/', R + 'B532065380/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; say what flavours you like and the bartenders build a cocktail; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通 ヨシキビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004879, 135.770639); the address has no lot number and GSI matches only 京都府京都市中京区木屋町 (town) about 1.1 km away, so the pin rests on the Tabelog point alone (GSI only this round, no OSM); nearest record mp_kyoto_shitamachi_no_okon at 43 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524525469/', R + 'B526624510/'],
    price_note: 'No menu read; a February 2026 review gives cocktails at about ¥1,000–2,000 each; ¥500 a person charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Melon mojito', '', 'Cocktails', '', '', 'April 2026.', 'melon_mojito'),
      it('', '', 'Fresh-fruit cocktails (kiwi, pear, orange and others)', '¥1,000–2,000', 'Cocktails', '', '', 'February 2026, approximate.', 'fruit_cocktails'),
      it('', '', 'Smoked cocktail', '', 'Cocktails', '', '', 'November 2024.', 'smoked_cocktail'),
    ] }, {
    cuisine: 'ミクソロジーのバー: フレッシュフルーツのカクテルを液体窒素、エスプーマ、スモークマシンで作る (食べログの店舗紹介)・メロンのモヒート、キウイや洋梨のカクテル、マスカルポーネのカクテル、液体窒素のモヒート、乳脂肪を凍らせたチョコミントのカクテル (アルコール10%ほど)、スモークカクテル、塩とチョコレートを縁に付けたスモーキーなコーヒーのカクテル (2023〜2026年の口コミ)・好みを伝えると合わせて作ってくれる (2025年3月)・ドリンクにはアップルチップスやドライアップル (2025〜2026年の口コミ)',
    neighborhood: '四条近くの木屋町通。河原町駅から徒歩3分',
    gf_detail: '要確認。カクテルのバーで、フレッシュフルーツにリキュール、ウイスキー、ブランデー。マスカルポーネや乳脂肪を使うものもあり、つまみはドライアップルやアップルチップス。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。多くはフレッシュフルーツとお酒のカクテルだが、マスカルポーネや乳脂肪を使うものもある。原材料の一覧は公開されていない (2024〜2026年の口コミ)。',
    notes: '[カクテルバー・木屋町、フルーツと液体窒素] 2006年から木屋町で深夜3時まで開くミクソロジーのバー。好みを伝えると、目の前でフレッシュフルーツのカクテルを液体窒素、エスプーマ、スモーク、三角フラスコのブランデー、試験管の水で作ってくれる。メロンのモヒート、キウイや洋梨のカクテル、乳脂肪を凍らせたチョコミント。1杯1,000〜2,000円ほどに1人500円。強めだが薄くもしてくれる。カウンター、テーブル少し、奥にソファ。英語メニューあり。水曜休み。',
  });
}

// ================================================================ ja!rêve DESSERT&WINE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038885/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ja-reve.com/';
  const H = day(['18:30', '23:30']);
  put({
    id: 'kyoto_ja_reve_dessert_wine', name: 'ja!rêve DESSERT&WINE', category: 'OMNI',
    lat: 35.001069, lng: 135.768406, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog’s staff-maintained listing ticks "gluten-free options", but no gluten-free dish is named; the desserts are tarts, cakes, Mont Blanc and croissants (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The plated desserts use cream, custard, butter pastry and ice cream; fruit and gelato vary; no ingredient list is published (2025–2026 reviews).',
    hours_raw: 'Tabelog lists 18:30–23:30 (last order), closed Wednesday and irregularly; the shop text says it is open from the morning as a café, with croissant sandwiches and espresso, and reviewers came at 10:00 (September 2025) and for brunch (March 2026), but no morning hours are published (Tabelog; 2025–2026 reviews). Bookings accepted; each guest orders at least one food item and one drink; ¥1,000 a person for cancellations the day before (Tabelog). 10% service charge and a one-drink rule (Tabelog). Bring-your-own bottled wine with a ¥3,000 corkage (Tabelog). Birthday plates on advance request (Tabelog). 9–11 counter seats plus tables at the back; non-smoking; wheelchair accessible; children and strollers welcome (Tabelog; January 2026). Cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR; one reviewer could not use PayPay (Tabelog; September 2025). Ground floor of the hotel Rakuten STAY URBAN四条河原 (as Tabelog writes it); 5 min walk from Kyoto-Kawaramachi Stn (Tabelog). Opened 22 January 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hotel ground floor south of Shijo, west of the Kamo River — 5 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'Dessert café-bar with wine: plated desserts finished at the counter by a pastry chef who is also a certified sommelier, with wines to match (Tabelog shop text; June 2026) · melon tart assembled in front of you with cream, custard, crown melon and white wine jelly, ¥2,500 (April 2025) · classic chocolate cake with strawberry ice cream; pudding plate with matcha meringue cookies and berry gelato; strawberry shortcake; Mont Blanc on a log-shaped plate; coffee jelly; affogato with homemade vanilla ice cream (2025–2026 reviews) · mornings: croissants and croissant sandwiches with salad, summer mango-and-cheese croissant, espresso from beans ground to order (Tabelog shop text; 2025–2026 reviews) · wines by the glass, sparkling wine, royal milk tea, a blue latte (2025–2026 reviews) · baked goods to take away (January 2026)',
    website: SITE, gmaps: gm('ja!reve DESSERT&WINE 京都'), menu_url: null,
    notes: "[Desserts & wine · Shijo Kawaramachi, a pastry chef-sommelier's counter] A blue-themed counter on the ground floor of a hotel south of Shijo, where a pastry chef who is also a sommelier finishes plated desserts in front of you — a melon tart broken open at the counter (¥2,500), Mont Blanc, pudding with matcha meringue — and pours a wine to go with each, until 23:30. It opens as a café in the morning too, for croissants and espresso. One food and one drink each, plus 10% service; reviewers call the prices bar-level. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Pastry chef, also a certified sommelier (Tabelog shop text); a barista for the coffee; no one is named'], origin: null,
      background: 'Per the shop’s Tabelog text: a café-bar for any time of day — croissant sandwiches, homemade pastries and barista espresso from the morning; in the evening, plated desserts by a pastry chef who is also a certified sommelier, with wines; a blue-themed interior. Opened 22 January 2023 (Tabelog). One reviewer chatted with the owner (January 2026); another received Kyoto travel tips at the end of a visit (June 2026).',
      philosophy: null, specialty: 'Plated desserts with wine pairings; croissants.',
      anecdotes: [
        { text: '"The tart is assembled right in front of you, and then served after being beautifully broken apart." — April 2025.', source: R + 'B504185031/' },
        { text: '"It was fun to watch the pastry chef finish them right at the counter. … I was thrilled to receive tips for my trip to Kyoto at the end." — June 2026.', source: R + 'B530834769/' },
        { text: '"It was a holiday evening, but since it was late, I was able to get in without a reservation." Some desserts were sold out by 22:30. — January 2026.', source: R + 'B520756022/' },
        { text: '"If I had to mention one downside, being a bar, the prices are generally on the higher side." — July 2026.', source: R + 'B532929228/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ワインバー・スイーツ、下京区富永町354-2 Rakuten STAY URBAN四条河原 1F、阪急京都河原町駅から徒歩5分、18:30〜23:30 (L.O.)、水曜・不定休、予約可 (1人1フード1ドリンク、前日キャンセルは1人1,000円)、サービス料10%・1ドリンク制、9席 (カウンター11席とも)、禁煙、車椅子可、子供可、ベビーカー可、カード可、電子マネー・QR 不可、グルテンフリーメニューあり、ソムリエ、持ち込みはボトルワインのみ (750mlで3,000円)、2023年1月22日オープン、店舗紹介: 朝からクロワッサンサンドや自家製のペストリー、バリスタのエスプレッソ、夜はソムリエでもあるパティシエの皿盛りデザートとワイン、青をテーマにした店内。口コミ (2025年3月〜2026年7月、英語): メロンのタルト2,500円、チョコレートケーキ、プリン、ショートケーキ、モンブラン、コーヒーゼリー、アフォガート、クロワッサン、朝のスパークリングワイン、焼き菓子の販売。',
      confidence: 'medium', sources: [TB, R + 'B504185031/', R + 'B504219937/', R + 'B513843650/', R + 'B520588895/', R + 'B520756022/', R + 'B521752760/', R + 'B522612202/', R + 'B523871137/', R + 'B530834769/', R + 'B532929228/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter service; at least one dessert and one drink each; 10% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富永町354-2 Rakuten STAY URBAN四条河原 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained); reviews dated through July 2026. The official site (ja-reve.com) did not answer on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.001069, 135.768406); cross-checked: GSI 京都府京都市下京区富永町354番地 (lot) 27 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504185031/'],
    price_note: 'No menu read; one price from an April 2025 review; 10% service charge and a one-drink rule (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Melon tart assembled at the counter (crown melon, custard, white wine jelly)', '¥2,500', 'Plated desserts', 'no', 'no', 'April 2025; seasonal.', 'melon_tart'),
      it('', '', 'Mont Blanc', '', 'Plated desserts', 'ask', 'no', 'July 2026.', 'mont_blanc'),
      it('', '', 'Pudding plate', '', 'Plated desserts', 'ask', 'no', 'January 2026.', 'pudding_plate'),
      it('', '', 'Croissant', '', 'Morning', 'no', 'no', '', 'croissant'),
    ] }, {
    cuisine: 'ワインと楽しむデザートのカフェバー: ソムリエでもあるパティシエがカウンターで仕上げる皿盛りデザートと、合わせるワイン (食べログの店舗紹介、2026年6月)・目の前で組み立てるメロンのタルト (クリーム、カスタード、クラウンメロン、白ワインのゼリー) 2,500円 (2025年4月)・クラシックなチョコレートケーキといちごのアイス、抹茶のメレンゲクッキーとベリーのジェラートのプリンの皿、いちごのショートケーキ、丸太形の皿のモンブラン、コーヒーゼリー、自家製バニラアイスのアフォガート (2025〜2026年の口コミ)・朝: クロワッサンとクロワッサンサンドにサラダ、夏のマンゴーとチーズのクロワッサン、挽きたての豆のエスプレッソ (食べログの店舗紹介、2025〜2026年の口コミ)・グラスワイン、スパークリングワイン、ロイヤルミルクティー、青いラテ (2025〜2026年の口コミ)・持ち帰りの焼き菓子 (2026年1月)',
    neighborhood: '四条の南、鴨川の西のホテル1階。京都河原町駅から徒歩5分',
    gf_detail: '要確認。食べログの店舗会員のページには「グルテンフリーメニューあり」とあるが、どの料理かは書かれていない。デザートはタルト、ケーキ、モンブラン、クロワッサン (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。皿盛りデザートはクリーム、カスタード、バターの生地、アイスを使う。フルーツやジェラートは日によって違う。原材料の一覧は公開されていない (2025〜2026年の口コミ)。',
    notes: '[デザートとワイン・四条河原町、パティシエ兼ソムリエのカウンター] 四条の南のホテル1階、青を基調にしたカウンター。ソムリエでもあるパティシエが目の前で皿盛りデザートを仕上げ、それぞれに合うワインを注いでくれる。カウンターで割って出すメロンのタルト (2,500円)、モンブラン、抹茶のメレンゲのプリンなど。夜は23時半まで。朝はカフェとして開き、クロワッサンとエスプレッソ。1人1フード1ドリンク、サービス料10%。口コミではバー並みの値段との声も。水曜休み。',
  });
}

// ================================================================ eze bleu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002639/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '19:00']);
  put({
    id: 'kyoto_eze_bleu', name: 'eze bleu (エズ ブルー)', category: 'OMNI',
    lat: 35.029058, lng: 135.767233, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — croissants, hard breads, baguettes, Danish and donuts (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Croissants and many pastries are made with butter, cream or cheese; the hard breads and baguettes are simpler, but no ingredient list is published (2025–2026 reviews).',
    hours_raw: '7:00–19:00; closed Tuesday (Tabelog; an October 2026 review gives the same hours). Takeaway only (Tabelog). Popular items sell out by lunchtime, and by mid-afternoon much of the shelf is empty — go in the morning (September and October 2026). Cash only (Tabelog; September 2026). No parking; coin parking nearby (October 2026). On Imadegawa-dori west of Teramachi, under a red awning; 5 min walk from Imadegawa Stn, 8 min from Demachiyanagi Stn (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori west of Teramachi, by the Imperial Palace — 5 min walk from Imadegawa Stn',
    cuisine: 'Neighbourhood bakery of everyday breads and authentic hard breads, most items around ¥200 (2026 reviews) · Bacon Spice, a hard bread with bacon, cheese and black pepper, ¥324 (the best-seller in June 2025) · all-butter croissant ¥248, pain au chocolat ¥259, apple-cinnamon Danish ¥259, Furano melon-cream bun ¥216, cream bun ¥205, butter roll ¥118, cinnamon donut ¥172 (September 2026) · potato-butter French bread ¥248 (October 2026); pain aux fruits with raisins and walnuts ¥669, mini sausage croissant ¥97 (September 2026) · sesame baguette, cheese-and-bean bread, curry donut with egg, pear pie, rusks (2026 reviews)',
    website: null, gmaps: gm('eze bleu エズブルー 京都 今出川'), menu_url: null,
    notes: "[Bakery · Imadegawa, the neighbourhood's bread] A takeaway bakery under a red awning on Imadegawa-dori near the Imperial Palace and Doshisha, open from 7:00, with shelves of everyday breads at around ¥200 and serious hard breads — the cheese-and-pepper Bacon Spice (¥324) is the favourite, and the all-butter croissant (¥248) is crisp outside and moist within. Go in the morning; by mid-afternoon much is sold out. Cash only; closed Tuesday. Tabelog Bread WEST 100 2026.",
    chef_bio: { chef_name: null, roles: ['Bakery (no baker is named in the sources)'], origin: null,
      background: 'A September 2026 reviewer calls it a bakery "around for a long time and … loved by the locals"; another returned after five and a half years and found it an everyday bakery with basic breads at fair prices. Tabelog Bread WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Bacon Spice; croissant; hard breads.',
      anecdotes: [
        { text: '"The croissant had a crispy outer layer and a moist interior, making it absolutely delightful." — October 2026.', source: R + 'B507890451/' },
        { text: '"When I visited on a Saturday at 3 PM, most of the items were sold out" — September 2026.', source: R + 'B535014628/' },
        { text: 'A June 2025 visitor bought "the popular No. 1 item, Bacon Spice": "a hard bread with a great blend of spices, and the combination of bacon and cheese was absolutely delicious."', source: R + 'B507890451/' },
      ],
      japanese_sources_summary: '食べログ: パン・サンドイッチ・ベーグル、上京区今出川通寺町西入大原口町212 カーサビアンカビル1F、今出川駅から徒歩5分、出町柳駅から徒歩8分、7:00〜19:00、火曜休み、予約不可、テイクアウトのみ、カード・電子マネー・QR 不可、禁煙、パン WEST 百名店 2026。口コミ (2025年6月〜2026年10月、英語): Bacon Spice324円 (人気1位)、クロワッサン248円、パン・オ・ショコラ259円、Furano メロンクリームパン216円、バターロール118円、ポテトバターフランス248円、パン・オ・フリュイ669円、ハード系のパン、ごまのバゲット、昼過ぎには売り切れが多い、現金のみ、赤いテント。',
      confidence: 'medium', sources: [TB, R + 'B271930836/', R + 'B507890451/', R + 'B535014628/', R + 'B535855669/', R + 'B535988804/', R + 'B536343966/', R + 'B536422120/', R + 'B536957850/', R + 'B537433410/', R + 'B538188737/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service with tongs; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通寺町西入大原口町212 カーサビアンカビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.029058, 135.767233); cross-checked: GSI 京都府京都市上京区大原口町212番地 (lot) 5 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B271930836/', R + 'B535855669/', R + 'B536343966/'],
    price_note: 'No price list read; prices from September–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Bacon Spice (hard bread with bacon, cheese, black pepper)', '¥324', 'Hard breads', 'no', 'no', 'September 2026.', 'bacon_spice'),
      it('', '', 'Croissant (all butter)', '¥248', 'Pastries', 'no', 'no', 'September–October 2026.', 'croissant'),
      it('', '', 'Pain au chocolat', '¥259', 'Pastries', 'no', 'no', 'September 2026.', 'pain_au_chocolat'),
      it('', '', 'Pain aux fruits (raisins, walnuts)', '¥669', 'Hard breads', 'no', 'ask', 'September 2026.', 'pain_aux_fruits'),
      it('', '', 'Furano melon-cream bun', '¥216', 'Sweet breads', 'no', 'no', 'September 2026.', 'melon_cream_bun'),
      it('', '', 'Potato-butter French bread', '¥248', 'Hard breads', 'no', 'no', 'October 2026.', 'potato_butter_france'),
    ] }, {
    cuisine: '毎日のパンと本格的なハード系の町のパン屋。多くは200円ほど (2026年の口コミ)・ベーコン、チーズ、黒こしょうのハード系「Bacon Spice」324円 (2025年6月の人気1位)・バター100%のクロワッサン248円、パン・オ・ショコラ259円、りんごとシナモンのデニッシュ259円、Furano メロンのクリームパン216円、クリームパン205円、バターロール118円、シナモンドーナツ172円 (2026年9月)・ポテトバターのフランスパン248円 (2026年10月)、レーズンとくるみのパン・オ・フリュイ669円、ミニソーセージクロワッサン97円 (2026年9月)・ごまのバゲット、チーズと豆のパン、卵入りのカレードーナツ、洋梨のパイ、ラスク (2026年の口コミ)',
    neighborhood: '寺町の西の今出川通、御所の近く。今出川駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない。小麦のパン屋で、クロワッサン、ハード系のパン、バゲット、デニッシュ、ドーナツ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。クロワッサンや多くのペストリーはバター、クリーム、チーズを使う。ハード系やバゲットはシンプルだが、原材料の一覧は公開されていない (2025〜2026年の口コミ)。',
    notes: '[パン・今出川、町のパン屋] 御所と同志社の近く、今出川通の赤いテントの持ち帰り専門のパン屋。朝7時から開き、200円ほどの毎日のパンと本格的なハード系が並ぶ。人気はチーズと黒こしょうのBacon Spice (324円)、バター100%のクロワッサン (248円) は外はさくさく、中はしっとり。午後には多くが売り切れるので朝がおすすめ。現金のみ、火曜休み。食べログパン WEST 百名店 2026。',
  });
}

// ================================================================ ビリヤニ専門店 INDIA GATE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034529/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30'], D = ['17:00', '20:00'];
  put({
    id: 'kyoto_india_gate_biryani', name: 'ビリヤニ専門店 INDIA GATE (Biryani Senmon Ten INDIA GATE)', category: 'OMNI',
    lat: 35.004955, lng: 135.756742, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani is basmati rice, but it comes with a little mapo tofu and achaar on the side, and the sea bream biryani uses a dashi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the biryanis are chicken, mutton or sea bream (in a fish dashi), with mapo tofu on the side; lassi and chai are dairy (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Friday and Saturday 11:30–14:30 and 17:00–20:00; Sunday 11:30–15:30; closed Wednesday and Thursday (Tabelog). No reservations (Tabelog): a queue forms at opening — about ten people at 11:30 on a Sunday, under an hour’s wait (October 2026); a weekday 13:30 visitor waited about 10 minutes (September 2026). One drink per person on weekends (October 2026). 8 counter seats; non-smoking; cards (VISA, Master, JCB, AMEX) and PayPay; takeaway; English menu (Tabelog). Do not leave bicycles at neighbouring shops; use the nearby bicycle park (Tabelog). On a narrow one-way street (November 2026); 5 min walk from Karasuma Stn (Hankyu), near Shijo Stn (subway) (Tabelog). Opened 31 July 2020 (Tabelog).',
    hours: { 0: [L, D], 1: [L, D], 4: [L, D], 5: [L, D], 6: [['11:30', '15:30']] }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Side street west of Shijo Karasuma — 5 min walk from Karasuma Stn',
    cuisine: 'Biryani specialist with a gentle, Japanese-leaning style (2026 reviews) · chicken biryani; mutton biryani (spicier); sea bream dashi chicken biryani, mild so the broth comes through; limited biryanis such as shirasu and fresh seaweed; two-kind platters; each comes with achaar and a little mapo tofu (2026 reviews) · mutton keema; extra toppings such as spiced egg and nagaimo achaar (October–November 2026) · spice highball (Suntory Kaku with cinnamon, clove and cardamom), Sapporo Lager, lassi, weekend chai (2026 reviews)',
    website: null, gmaps: gm('ビリヤニ専門店 INDIA GATE 京都'), menu_url: null,
    notes: "[Biryani · Shijo Karasuma, an 8-seat biryani counter] An eight-seat counter on a narrow side street west of Shijo Karasuma that is only about biryani: fluffy basmati rice in chicken, mutton or a mild sea bream-dashi chicken version, served with achaar and a spoon of mapo tofu, often as a two-kind platter. The style is gentle and Japanese-leaning, with the mutton the spicy one; weekends bring chai and a one-drink rule. Expect a queue at opening (up to an hour on a Sunday). Lunch and early dinner; closed Wednesday and Thursday. Tabelog Asian/Ethnic WEST 100 2026.",
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed in the sources)'], origin: null,
      background: 'Opened 31 July 2020 (Tabelog); a November 2026 reviewer notes six years in business. Reviewers in 2026 call it one of Japan’s top three biryani shops; it has taken pop-ups to Tokyo (Seibu Ikebukuro in January 2022; Toranomon Yokocho "SPICE UP!" in September 2026) and served a lamb noodle bowl, "Hitsujiro", at a 2026 ramen event. A November 2026 reviewer praised "the youthful energy of the manager and staff". Tabelog Asian/Ethnic WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Sea bream dashi chicken biryani; mutton biryani.',
      anecdotes: [
        { text: '"On Sunday afternoon, I arrived at the restaurant shortly after it opened at 11:30 AM, and there were about 10 people in line." — October 2026.', source: R + 'B537270269/' },
        { text: '"The Sea Bream Dashi Chicken Biryani was mild in spice, allowing the rich flavor of the broth to shine through" — October 2026.', source: R + 'B538156816/' },
        { text: '"The restaurant is small, and the street in front is a narrow one-way, making it feel a bit risky with cars passing by. The youthful energy of the manager and staff is fantastic!" — November 2026.', source: R + 'B538573282/' },
        { text: 'A September 2026 diner found it "wasn\'t spicy and wasn\'t served piping hot", mild and refreshing.', source: R + 'B538489583/' },
      ],
      japanese_sources_summary: '食べログ: インド料理・カレー、中京区天神山町271、阪急烏丸駅から徒歩5分、月・火・金・土 11:30〜14:30・17:00〜20:00、日 11:30〜15:30、水・木休み、予約不可、8席 (カウンター)、禁煙、カード・PayPay 可、テイクアウト、英語メニューあり、近くの店や会社の駐輪場に自転車を停めない、2020年7月31日オープン、アジア・エスニック WEST 百名店 2026。口コミ (2026年9〜11月、英語): チキンビリヤニ、マトンビリヤニ、鯛出汁チキンビリヤニ、しらすと生のりの限定ビリヤニ、2種盛り、アチャールと麻婆豆腐、マトンキーマ、スパイスハイボール、週末のチャイと1ドリンク制、開店時の行列、狭い一方通行の道、東京でのポップアップ。',
      confidence: 'medium', sources: [TB, R + 'B445159214/', R + 'B536495629/', R + 'B537270269/', R + 'B537313598/', R + 'B537960401/', R + 'B537987147/', R + 'B538156816/', R + 'B538438041/', R + 'B538489583/', R + 'B538573282/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; queue at the door, no reservations; cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区天神山町271',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Asian/Ethnic WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.004955, 135.756742); cross-checked: GSI 京都府京都市中京区天神山町271番地 (lot) 44 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538156816/', R + 'B537270269/'],
    price_note: 'No menu or prices read; dishes from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sea bream dashi chicken biryani', '', 'Biryani', 'ask', 'no', 'With achaar and mapo tofu.', 'sea_bream_biryani'),
      it('', '', 'Mutton biryani', '', 'Biryani', 'ask', 'no', 'Spicier.', 'mutton_biryani'),
      it('', '', 'Chicken biryani', '', 'Biryani', 'ask', 'no', '', 'chicken_biryani'),
      it('', '', 'Two-kind biryani platter', '', 'Biryani', 'ask', 'no', '', 'biryani_platter'),
      it('', '', 'Spice highball', '', 'Drinks', '', '', 'October 2026.', 'spice_highball'),
    ] }, {
    cuisine: 'やさしく和の感じのあるビリヤニの専門店 (2026年の口コミ)・チキンビリヤニ、辛めのマトンビリヤニ、出汁の味が生きる穏やかな鯛出汁チキンビリヤニ、しらすと生のりなどの限定ビリヤニ、2種盛り。どれもアチャールと少しの麻婆豆腐付き (2026年の口コミ)・マトンキーマ、スパイスの卵や長芋のアチャールなどのトッピング (2026年10〜11月)・スパイスハイボール (サントリー Kaku にシナモン、クローブ、カルダモン)、サッポロラガー、ラッシー、週末のチャイ (2026年の口コミ)',
    neighborhood: '四条烏丸の西の路地。烏丸駅から徒歩5分',
    gf_detail: '要確認。ビリヤニはバスマティ米だが、アチャールと少しの麻婆豆腐が付き、鯛のビリヤニは出汁を使う。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ビリヤニは鶏、マトン、鯛 (魚の出汁) で、麻婆豆腐が付く。ラッシーとチャイは乳製品 (2026年の口コミ)。',
    notes: '[ビリヤニ・四条烏丸、8席のビリヤニのカウンター] 四条烏丸の西の狭い路地にある、ビリヤニだけの8席のカウンター。ふわっとしたバスマティ米のチキン、マトン、穏やかな鯛出汁チキンのビリヤニに、アチャールと麻婆豆腐を少し添えて、よく2種盛りで出す。やさしく和の感じのある味で、辛いのはマトン。週末はチャイと1ドリンク制。開店時は行列 (日曜は1時間近く待つことも)。昼と早めの夜、水・木休み。食べログアジア・エスニック WEST 百名店 2026。',
  });
}

save();
