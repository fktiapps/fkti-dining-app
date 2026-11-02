// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 18.
//   + たらば蟹&和牛フォー LUXE 道頓堀店 (king crab and A5 wagyu pho by a Vietnamese chef, opened July 2026)
//   + 焼肉暁牛 Yakiniku Gyogyu (A5 black wagyu all-you-can-eat yakiniku, Soemoncho, 2022)
//   + SEOUL90 (Korean izakaya open noon to 5 a.m., bossam and soy-marinated crab, Dotonbori)
//   + たこ政 Tako Masa (kuwayaki skewers and shrimp toast, a Dotonbori alley shop of about 72 years)
//   - skip(): Pivot BASE (one review).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 (still undecided), 27157388 +,
//   27132636 +, 27145504 skip, 27132392 +, 27026484 +.
//   Chain check: each is the only shop of its name in shops.jsonl, and none is in data. 暁牛 is called the "Souemoncho Main
//   Branch" in two 2026 reviews, but no other branch turned up. たこ政: reviews disagree on whether たこ坊 nearby is a spin-off
//   (June 2024) or unrelated (July 2026); たこ坊 is not in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27145504', 'Too thin for a full record: one Tabelog review (July 2025).');

// ================================================================ たらば蟹&和牛フォー LUXE 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27157388/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_luxe_crab_wagyu_pho_dotonbori', name: 'たらば蟹&和牛フォー LUXE 道頓堀店 (Taraba Kani & Wagyu Pho LUXE)', category: 'OMNI',
    lat: 34.668847, lng: 135.500614, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Reviewers describe the noodles as gluten-free rice noodles (rice flour with tapioca or water, July–August 2026), but the broth, chili oil, fried chicken and spring rolls have no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pho in a beef-bone and seafood broth with crab and wagyu.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30) (Tabelog). Reservations accepted (Tabelog). Cards including UnionPay, transport IC cards, and QR payments including Alipay and WeChat Pay (Tabelog). 21 seats: 13 at the counter and two tables for four; non-smoking; children and strollers welcome; step-free for wheelchairs by lift (Tabelog; July–August 2026). English and Chinese picture menus (Tabelog). Opened 8 July 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-10-7, ウィード21 3F, the Midosuji corner of Dotonbori — 1 min from Namba Stn',
    cuisine: 'Pho by a Vietnamese chef, topped with taraba (king) crab, A5 wagyu or both (Tabelog; July 2026) · premium pho of taraba crab and A5 wagyu with shrimp and clams ¥6,820, the wagyu seared at the table, in a clear broth of beef bone, shellfish, shrimp and crab, with flat rice noodles; house chili oil; coriander can be left out (July–August 2026) · cheaper pho options, fried chicken, Vietnamese spring rolls, a sukiyaki rice bowl (July–August 2026)',
    website: null, gmaps: gm('たらば蟹&和牛フォー LUXE 道頓堀'), menu_url: null,
    notes: "[Vietnamese · Dotonbori, king crab and wagyu pho] A small new pho counter, opened July 2026, three floors above the Midosuji corner of Dotonbori, where a Vietnamese chef tops the bowls with taraba crab, A5 wagyu or both. The showpiece is the premium pho (¥6,820 in August 2026), with one and a half to two crab legs, wagyu seared as it is served, shrimp and clams over flat rice noodles in a clear beef-and-seafood broth; diners rate the broth as highly as the toppings. Cheaper bowls, fried chicken and spring rolls round out the menu, and staff ask whether you want coriander. English and Chinese picture menus; take the lift to 3F.",
    chef_bio: { chef_name: null, roles: ['Vietnamese chef (unnamed; Tabelog and July–August 2026 reviews)'], origin: 'Vietnam (the chef, per the listing)', background: 'Shop-maintained Tabelog listing: authentic pho made by traditional Vietnamese methods by a Vietnamese chef; taraba crab and A5 wagyu toppings in three bowls (king crab, black wagyu, mixed); opened 8 July 2026.', philosophy: null, specialty: 'Premium taraba crab and A5 wagyu pho.',
      anecdotes: [
        { text: '"The legs of the Taraba crab are substantial, amounting to about 1.5 to 2 legs worth." — August 2026, premium pho ¥6,820.', source: R + 'B533270581/' },
        { text: '"While it may seem like a dish focused on presentation, the broth is incredibly delicious!" — July 2026.', source: R + 'B532127716/' },
        { text: '"There was a family of about eight people who seemed to be from abroad." — July 2026, a weekday lunch.', source: R + 'B532914921/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たらば蟹&和牛フォー LUXE 道頓堀店、かに・アジア・エスニック・焼肉、大阪市中央区道頓堀1-10-7 ウィード21 3F、なんば駅から徒歩1分、毎日11:00〜23:00 (L.O.22:30)、予約可、カード (銀聯も)・交通系IC・QR (Alipay、WeChat Pay も) 可、21席 (カウンター13、4人がけテーブル2)、禁煙、子ども可、英語・中国語の写真つきメニュー、2026年7月8日オープン。店の紹介 (英訳): ベトナム人のシェフが伝統の方法で作る本格的なフォー、たらばがにと A5 和牛のトッピング、3種の丼。口コミ(2026年7月〜8月): プレミアムのたらばがにと和牛のフォー6,820円 (かにの脚1.5〜2本分、えび、あさり、和牛は出すときに焼く)、牛骨と貝とえびとかにの澄んだスープ、米粉の平たい麺 (グルテンフリーという説明)、自家製のラー油、パクチー抜きもできる、ほかに手ごろなフォー、唐揚げ、生春巻き、すき焼き丼、海外の家族客も、エレベーターで3階。',
      confidence: 'medium', sources: [TB, R + 'B532113310/', R + 'B532127716/', R + 'B532169817/', R + 'B532770384/', R + 'B532793501/', R + 'B532914921/', R + 'B533105434/', R + 'B533270581/', R + 'B534384145/', R + 'B534909060/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese picture menus and a digital menu (Tabelog); counter seating suits solo diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区道頓堀1-10-7 ウィード21 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened July 2026; reviews July–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目10番7号 (go) 8m. Same lot number as osaka_cafe_bon_dotonbori (address_ja "道頓堀1-10-7 ギャラリー香ビル 5F", 6 m) and osaka_teppan_toyoshimake_dotonbori ("道頓堀1-10-7 ぼんちビル 2F", 10 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533270581/', R + 'B534909060/'],
    price_note: 'Price from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium pho with taraba crab and A5 wagyu', '¥6,820', 'Pho', 'ask', 'no', 'August 2026 reviews.', 'premium_pho'),
      it('', '', 'Fried chicken', '', 'Sides', 'ask', 'no', 'July 2026 reviews.', 'karaage'),
      it('', '', 'Vietnamese spring rolls', '', 'Sides', 'ask', 'ask', 'August 2026 review.', 'nem'),
    ] }, {
    cuisine: 'ベトナム人のシェフのフォーで、たらばがに、A5 の和牛、またはその両方をのせる (食べログ、2026年7月)・えびとあさりも入るたらばがにと A5 和牛のプレミアムのフォー6,820円、和牛は出すときに焼き、牛骨、貝、えび、かにの澄んだスープに平たい米の麺、自家製のラー油、パクチー抜きもできる (2026年7月〜8月)・手ごろなフォー、唐揚げ、生春巻き、すき焼き丼 (2026年7月〜8月)',
    neighborhood: '道頓堀1-10-7、ウィード21の3階、道頓堀の御堂筋の角。なんば駅から1分',
    gf_detail: '要確認。麺は米粉のグルテンフリーの麺だと口コミにある (2026年7月〜8月) が、スープ、ラー油、唐揚げ、春巻きの情報はない。',
    vegan_detail: 'ヴィーガンではありません。牛骨と魚介のスープのフォーで、かにと和牛がのる。',
    notes: '[ベトナム料理・道頓堀、たらばがにと和牛のフォー] 2026年7月にできた小さなフォーの店で、道頓堀の御堂筋の角のビルの3階。ベトナム人のシェフが、たらばがに、A5 の和牛、またはその両方をのせる。看板はプレミアムのフォー (2026年8月は6,820円) で、かにの脚1.5〜2本分、出すときに焼く和牛、えび、あさりが、平たい米の麺と牛骨と魚介の澄んだスープの上に。具と同じくらいスープの評価が高い。手ごろなフォー、唐揚げ、生春巻きもあり、パクチーの有無も聞いてくれる。英語と中国語の写真つきメニュー。3階へはエレベーターで。',
  });
}

// ================================================================ 焼肉暁牛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132636/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['11:00', '14:30'], ['17:00', '24:00']);
  put({
    id: 'osaka_yakiniku_gyogyu_soemoncho', name: '焼肉暁牛 (Yakiniku Gyogyu)', category: 'OMNI',
    lat: 34.669405, lng: 135.502462, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakiniku sauces and marinades are usually soy-based; cold noodles and meat sushi are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black wagyu yakiniku.',
    hours_raw: 'Mon–Fri and holidays 17:00–24:00 (last order 23:30); Sat–Sun 11:00–14:30 (last order 14:00) and 17:00–24:00; irregular closing days (Tabelog). Reservations accepted (Tabelog). No charge (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 44 seats: partitioned tables, a private room for 6, sunken seating; heated-tobacco smoking area (Tabelog; August 2026). Chinese-speaking staff (November 2025). Opened 26 October 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 7-12, 岩伸リバーサイド 2F — 5 min from Nippombashi Stn, 8 min from Namba Stn',
    cuisine: 'Yakiniku of A5 black wagyu from a wagyu wholesaler that runs the shop (Tabelog; August 2026) · special A5 wagyu all-you-can-eat course ¥8,778 including tax (Tabelog), ¥7,980 before tax (August–September 2026), about ¥9,700 before tax with drinks (August 2026): a tiered assorted platter, thick-cut tongue, top outside skirt, rare lean cuts, fresh tripe, lean yukhoe, kimchi, salad, rice, ice cream; chicken and pork too (August–September 2026) · the shop recommends sea-urchin beef and harami (Tabelog) · marbled short rib, special loin, cold noodles, namul, meat sushi, wagyu tataki (2025 reviews)',
    website: null, gmaps: gm('焼肉暁牛 宗右衛門町'), menu_url: null,
    notes: "[Yakiniku · Soemoncho, A5 wagyu all-you-can-eat] A calm, partitioned yakiniku room on the second floor of a Soemoncho building, run by a wagyu wholesaler, which makes its A5 black wagyu all-you-can-eat course (¥7,980 before tax in 2026) unusually good value. It starts with a tiered platter of thick-cut tongue, outside skirt and rare lean cuts, then runs to yukhoe, tripe, kimchi and ice cream. The shop's own picks are sea-urchin beef and harami. Most 2026 diners were delighted; one November 2025 diner found the meat-sushi rice hard and the lean cuts fatty. Weekend lunch too.",
    chef_bio: { chef_name: null, roles: ['Floor staff (unnamed); Chinese-speaking staff (November 2025)'], origin: null, background: 'Shop-maintained Tabelog listing: premium black wagyu and signature dishes in a calm room on Soemoncho street; recommends sea-urchin beef and harami; chef\'s-choice courses to budget; opened 26 October 2022. An August 2026 review: run directly by a wagyu wholesale company; two 2026 reviews call it the Soemoncho main branch.', philosophy: null, specialty: 'A5 wagyu all-you-can-eat; thick-cut tongue.',
      anecdotes: [
        { text: '"This restaurant is directly operated by a Wagyu specialty wholesale company, offering top-quality A5 grade black-haired Wagyu" — August 2026, the ¥7,980 course.', source: R + 'B534637452/' },
        { text: '"When it comes to all-you-can-eat yakiniku restaurants, I usually expect a casual and lively atmosphere. However, this place surprised me" — August 2026.', source: R + 'B536522803/' },
        { text: '"However, the rice in the meat sushi was hard, which was disappointing." — November 2025.', source: R + 'B518096978/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉暁牛、焼肉・ホルモン、大阪市中央区宗右衛門町7-12 岩伸リバーサイド 2F、日本橋駅から徒歩5分、なんば駅から8分、月〜金・祝17:00〜24:00 (L.O.23:30)、土日11:00〜14:30 (L.O.14:00)・17:00〜24:00、不定休、予約可、チャージなし、カード可、電子マネー・QR 不可、44席、6名の個室、加熱式たばこの喫煙所、2022年10月26日オープン、特選 A5 和牛の食べ放題8,778円 (税込)。店の紹介 (英訳): 落ち着いた店で黒毛和牛、おすすめはうに牛とハラミ、予算に合わせたおまかせのコース。口コミ(2025年2月〜2026年9月): 和牛の卸の会社の直営、A5 和牛の食べ放題7,980円 (税抜)、飲み放題つきで9,700円ほど、段の盛り合わせ、厚切りのタン、上ハラミ、希少な赤身、新鮮なホルモン、赤身のユッケ、キムチ、サラダ、ご飯、アイス、鶏と豚も、上カルビ、特選ロース、冷麺、ナムル、肉寿司のご飯が固く赤身が脂っぽかったという声 (2025年11月)、中国語を話すスタッフ、仕切りのある席と掘りごたつ。',
      confidence: 'medium', sources: [TB, R + 'B500632289/', R + 'B504896435/', R + 'B516619736/', R + 'B518096978/', R + 'B534525856/', R + 'B534637452/', R + 'B534946160/', R + 'B536522803/', R + 'B537367473/', R + 'B537439276/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese-speaking staff (November 2025); no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-12 岩伸リバーサイド 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番12号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534637452/', R + 'B536522803/'],
    price_note: 'Course prices from the Tabelog listing and August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special A5 wagyu all-you-can-eat course', '¥8,778', 'Courses', 'ask', 'no', 'Tabelog listing (tax included); ¥7,980 before tax in August–September 2026 reviews.', 'a5_tabehodai'),
      it('', '', 'Sea-urchin beef', '', 'Specials', 'ask', 'no', 'Tabelog listing.', 'uni_gyu'),
      it('', '', 'Thick-cut tongue', '', 'Grill', 'ask', 'no', 'August–September 2026 reviews.', 'atsugiri_tan'),
    ] }, {
    cuisine: '店を直営する和牛の卸の会社の A5 黒毛和牛の焼肉 (食べログ、2026年8月)・特選 A5 和牛の食べ放題は税込8,778円 (食べログ)、税抜7,980円 (2026年8月〜9月)、飲み放題つきで税抜9,700円ほど (2026年8月): 段の盛り合わせ、厚切りのタン、上ハラミ、希少な赤身、新鮮なホルモン、赤身のユッケ、キムチ、サラダ、ご飯、アイス。鶏や豚も (2026年8月〜9月)・店のおすすめはうに牛とハラミ (食べログ)・上カルビ、特選ロース、冷麺、ナムル、肉寿司、和牛のたたき (2025年の口コミ)',
    neighborhood: '宗右衛門町7-12、岩伸リバーサイド2階。日本橋駅から5分、なんば駅から8分',
    gf_detail: '要確認。グルテンの情報なし。焼肉のたれや下味は一般に醤油ベースで、冷麺や肉寿司もある。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉。',
    notes: '[焼肉・宗右衛門町、A5 和牛の食べ放題] 宗右衛門町のビルの2階の、仕切りのある落ち着いた焼肉の店で、和牛の卸の会社の直営。だから A5 黒毛和牛の食べ放題 (2026年は税抜7,980円) がとてもお得。段の盛り合わせの厚切りのタン、外ハラミ、希少な赤身から始まり、ユッケ、ホルモン、キムチ、アイスまで。店のおすすめはうに牛とハラミ。2026年の客の多くは大満足、2025年11月には肉寿司のご飯が固く赤身が脂っぽかったという声も。週末は昼も。',
  });
}

// ================================================================ SEOUL90
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27132392/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '05:00']);
  put({
    id: 'osaka_seoul90_dotonbori', name: 'SEOUL90', category: 'OMNI',
    lat: 34.668913, lng: 135.50265, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Soy-marinated crab, fried chicken, tteokbokki and instant noodles are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Korean izakaya of pork bossam, marinated crab and fried chicken.',
    hours_raw: 'Daily 12:00–5:00 the next morning (last order 4:00) (Tabelog). Reservations accepted; dinner on Friday to Sunday limited to two hours (Tabelog). Dinner charge ¥390 (Tabelog). Cards, e-money and QR payments including PayPay and Alipay (Tabelog). 60 seats, sofas, sports screen; heated-tobacco smoking area (Tabelog). English and Korean menus; Korean-speaking staff (Tabelog). Order by bell or QR code; leftovers can be taken home in containers (August and October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-8, 道頓堀だるまビル 2F — 5–8 min from Namba Stn',
    cuisine: 'Korean izakaya from lunch to 5 a.m. (Tabelog) · lunch sets: soy- or spicy-marinated crab or shrimp with bibimbap ¥1,580–1,680, soy-marinated salmon ¥1,680, pork bossam (Tabelog; July 2026) · bossam set with cold noodles and yukhoe kimbap or stir-fried baby octopus ¥5,368, enough for two (July and September 2026) · the "Mukbang" platter of fried chicken, shrimp tempura, sotteok sotteok and cheese balls; tteokbokki; Korean fried chicken with yangnyeom and mustard sauces; doctored instant noodles (Tabelog; April–October 2026) · Korean soju such as Chamisul, and Jooundae; all-you-can-drink ¥1,490 for two hours with food, no draft beer (Tabelog; April 2026)',
    website: 'http://www.dotonbori.or.jp/sp/ja/shops/164', gmaps: gm('SEOUL90 道頓堀'), menu_url: null,
    notes: "[Korean · Dotonbori, bossam and soju until 5 a.m.] A dim, K-pop-loud Korean izakaya on the second floor of a Dotonbori building, open from noon to 5 a.m. and popular with young groups and Korean visitors. Lunch is a deal: soy-marinated crab or shrimp with bibimbap for ¥1,580–1,680 (July 2026). At night share the bossam set (¥5,368 with cold noodles and yukhoe kimbap, enough for two) or the Mukbang platter of fried chicken, cheese balls and more. All-you-can-drink is ¥1,490 for two hours with food, though there is no draft beer. Leftovers can be boxed to take home. Service draws mixed reviews: a June 2026 diner waited for a missed drinks order, an October 2026 one found the staff cold.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); Korean-speaking staff (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Korean food and drinks from afternoon to night; the Mukbang set (chicken, shrimp tempura, sotteok sotteok, cheese balls); pork bossam lunch set; Korean shochu; two-hour all-you-can-drink; K-pop; listed on dotonbori.or.jp.', philosophy: null, specialty: 'Bossam set; marinated crab lunch; Mukbang platter.',
      anecdotes: [
        { text: '"The Bossam Set comes with all this for just JPY 5,368! Honestly, it’s enough to fill two people up completely!" — July 2026.', source: R + 'B532531717/' },
        { text: '"The Mukbang Set had a variety of items, making it a great choice for snacks." — April 2026; no draft beer on the all-you-can-drink list.', source: R + 'B526860828/' },
        { text: '"It\'s great that you can take home any leftovers. The portions are generous!" — October 2026.', source: R + 'B537922883/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SEOUL90、韓国料理・居酒屋、大阪市中央区道頓堀1-6-8 道頓堀だるまビル 2F、なんば駅から徒歩5〜8分、毎日12:00〜翌5:00 (L.O.4:00)、予約可 (金土日の夜は2時間制)、夜はチャージ390円、カード・電子マネー・QR 可、60席、加熱式たばこの喫煙所、英語と韓国語のメニュー、韓国語のスタッフ、2時間の単品飲み放題1,490円。店の紹介 (英訳): 昼から夜まで本格的な韓国料理と酒、Mukbang セット (チキン、えびの天ぷら、ソトクソトク、チーズボール)、ランチのポッサム、韓国の焼酎、K-POP。口コミ(2026年4月〜10月): カンジャンケジャンやヤンニョムケジャン、えびのビビンバの定食1,580〜1,680円、サーモンの醤油漬けの定食1,680円、ポッサムと冷麺とユッケキンパのセット5,368円、トッポッキ、チキン、インスタントラーメン、チャミスルなど、生ビールはない、残りは持ち帰れる、暗く音楽が大きい、注文が通っていなかった・スタッフが冷たいという声、若い客や韓国の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B526860828/', R + 'B529603310/', R + 'B530425339/', R + 'B532161337/', R + 'B532531717/', R + 'B533481810/', R + 'B534747720/', R + 'B534879913/', R + 'B535136555/', R + 'B537922883/'] },
    cultural_comfort: { level: 'english', note: 'English and Korean menus, Korean-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-8 道頓堀だるまビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532161337/', R + 'B532531717/', TB],
    price_note: 'Prices from July 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Soy-marinated crab bibimbap lunch set', '¥1,580', 'Lunch', 'ask', 'no', 'July 2026 review.', 'ganjang_gejang_set'),
      it('', '', 'Bossam set (cold noodles, yukhoe kimbap or baby octopus)', '¥5,368', 'Sets', 'ask', 'no', 'July and September 2026 reviews.', 'bossam_set'),
      it('', '', 'Two-hour all-you-can-drink (with food orders)', '¥1,490', 'Drinks', 'ask', 'ask', 'Tabelog; April 2026.', 'nomihodai'),
    ] }, {
    cuisine: '昼から朝5時までの韓国の居酒屋 (食べログ)・ランチの定食: 醤油漬けか辛いたれのかにやえびとビビンバ1,580〜1,680円、サーモンの醤油漬け1,680円、ポッサム (食べログ、2026年7月)・冷麺とユッケキンパかテナガダコの炒めものつきのポッサムのセット5,368円で2人前 (2026年7月と9月)・唐揚げ、えびの天ぷら、ソトクソトク、チーズボールの「Mukbang」セット、トッポッキ、ヤンニョムとマスタードのたれの韓国のフライドチキン、具を足したインスタントラーメン (食べログ、2026年4月〜10月)・チャミスルなど韓国の焼酎、料理を頼めば2時間の飲み放題1,490円、生ビールはない (食べログ、2026年4月)',
    neighborhood: '道頓堀1-6-8、道頓堀だるまビル2階。なんば駅から5〜8分',
    gf_detail: '要確認。グルテンの情報なし。醤油漬けのかに、フライドチキン、トッポッキ、インスタントラーメンもある。',
    vegan_detail: 'ヴィーガンではありません。ポッサム、漬けたかに、フライドチキンの韓国の居酒屋。',
    notes: '[韓国料理・道頓堀、朝5時までのポッサムと焼酎] 道頓堀のビルの2階の、薄暗く K-POP が大きく流れる韓国の居酒屋で、昼12時から朝5時まで。若いグループや韓国の客が多い。お得なのはランチで、醤油漬けのかにやえびとビビンバが1,580〜1,680円 (2026年7月)。夜はポッサムのセット (冷麺とユッケキンパつきで5,368円、2人で満腹) や、唐揚げやチーズボールの「Mukbang」セットを分けて。料理を頼めば2時間の飲み放題が1,490円だが生ビールはない。残った料理は持ち帰れる。サービスの評価は分かれ、2026年6月は飲み物の注文が通っていなかった、10月はスタッフが冷たいという声。',
  });
}

// ================================================================ たこ政
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27026484/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_tako_masa_dotonbori', name: 'たこ政 (Tako Masa)', category: 'OMNI',
    lat: 34.668294, lng: 135.502203, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature is shrimp toast on bread, and fried items and sauced skewers fill the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled meat and seafood skewers.',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sunday and Mondays that fall on holidays; hours may change (Tabelog). No reservations (Tabelog). Cash only (Tabelog; April 2026). Smoking allowed (Tabelog). A two-hour limit (June 2024). A counter and several four-seat tables (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-8-5, down a side alley just south of Dotonbori near Hozenji',
    cuisine: 'Kuwayaki, an old Osaka style of grilled skewers said to come from farmers grilling on a hoe; about 30 kinds of grilled and fried skewers (2024–2026 reviews) · shrimp toast with butter and shrimp paste, the signature (2023–2026) · peppers stuffed with meat, lotus root stuffed with curry-flavoured meat, tonpei-yaki of pork wrapped in egg, conger eel with sansho, beef, beef tongue, beef liver, gizzard, kisu, quail egg, onion, enoki, "Oranda" and "Bon chicken"; oysters and ginkgo in season (2024–2026 reviews) · beer and shochu highballs (August 2025)',
    website: null, gmaps: gm('たこ政 道頓堀'), menu_url: null,
    notes: "[Kuwayaki · Dotonbori back alley, skewers of old Osaka] A long-established kuwayaki shop in an alley just south of Dotonbori, said in July 2026 to be 72 years old, one of the last places serving kuwayaki, an old Osaka style of grilled skewers. The must-order is the shrimp toast, bread spread with shrimp paste and butter and grilled crisp; then stuffed peppers, curry-scented stuffed lotus root, tonpei-yaki and conger eel with sansho, ordered one skewer at a time. Reviewers disagree on whether nearby たこ坊 is a spin-off. Quiet and unhurried; cash only, smoking allowed, and it closes at 10 p.m. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kuwayaki cooks (unnamed)'], origin: null, background: 'Tabelog: kushiyaki and izakaya at Dotonbori 1-8-5, Mon–Sat 17:00–22:00, cash only. Reviews: a long-established kuwayaki restaurant (2023–2026), 72 years since its founding (July 2026); the counter was later joined by tables (September 2026).', philosophy: null, specialty: 'Shrimp toast; kuwayaki skewers.',
      anecdotes: [
        { text: '"This year marks 72 years since its founding!" — July 2026.', source: R + 'B531898208/' },
        { text: '"The shrimp toast, topped with butter and shrimp paste, is crispy and makes me want to eat about five pieces." — April 2026, a fifth visit.', source: R + 'B526010157/' },
        { text: '"I remember decades ago, the elderly chef at the entrance would only give fruit to women!" — September 2026.', source: R + 'B536146979/' },
      ],
      japanese_sources_summary: '食べログ: たこ政、串焼き・居酒屋、大阪市中央区道頓堀1-8-5、月〜土17:00〜22:00、日曜と祝日の月曜休み、予約不可、カード・電子マネー不可、喫煙可。口コミ(2023年7月〜2026年9月): 老舗のくわ焼きの店、創業72年 (2026年7月)、名物のえびパン (バターとえびのすり身)、肉詰めピーマン、カレー風味のれんこんの肉詰め、とん平焼き、山椒の穴子、牛、牛タン、牛レバー、砂ずり、きす、うずら、玉ねぎ、えのき、「Oranda」と「Bon chicken」、季節のかきと銀杏、30種ほどの串と揚げ物、2時間制、現金のみ、法善寺に近い路地、カウンターと4人がけのテーブル、近くのたこ坊とは関係があるという声もないという声も。',
      confidence: 'medium', sources: [TB, R + 'B478758815/', R + 'B481759748/', R + 'B486146503/', R + 'B487471516/', R + 'B492690108/', R + 'B493492910/', R + 'B505853617/', R + 'B526010157/', R + 'B531898208/', R + 'B536146979/'] },
    cultural_comfort: { level: 'japanese', note: 'Old-style counter, cash only; no English evidence found. Skewers can be ordered one at a time (September 2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-8-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目8番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526010157/', R + 'B487471516/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Shrimp toast (ebi pan)', '', 'Kuwayaki', 'no', 'no', '2024–2026 reviews.', 'ebi_pan'),
      it('', '', 'Meat-stuffed green pepper', '', 'Kuwayaki', 'ask', 'no', '2024–2026 reviews.', 'piman_nikuzume'),
      it('', '', 'Tonpei-yaki', '', 'Kuwayaki', 'ask', 'no', '2026 reviews.', 'tonpei'),
    ] }, {
    cuisine: '農家が鍬で焼いたのが由来という昔の大阪の串焼き、くわ焼きの店で、焼き物と揚げ物の串は30種ほど (2024〜2026年の口コミ)・名物はバターとえびのすり身のえびパン (2023〜2026年)・肉詰めピーマン、カレー風味のれんこんの肉詰め、豚を卵で包むとん平焼き、山椒の穴子、牛、牛タン、牛レバー、砂ずり、きす、うずら、玉ねぎ、えのき、「Oranda」と「Bon chicken」。季節のかきと銀杏 (2024〜2026年の口コミ)・ビールと焼酎のハイボール (2025年8月)',
    neighborhood: '道頓堀1-8-5、道頓堀のすぐ南、法善寺近くの路地',
    gf_detail: 'グルテンフリーではありません。名物はパンのえびパンで、揚げ物やたれの串も多い。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の串焼き。',
    notes: '[くわ焼き・道頓堀の路地、昔の大阪の串] 道頓堀のすぐ南の路地の老舗のくわ焼きの店で、2026年7月の口コミでは創業72年。昔の大阪の串焼き、くわ焼きを出す数少ない店のひとつ。必ず頼みたいのはえびパンで、パンにえびのすり身とバターを塗ってカリッと焼いたもの。それから肉詰めピーマン、カレー風味のれんこんの肉詰め、とん平焼き、山椒の穴子を1本ずつ。近くのたこ坊が分かれた店かどうかは口コミで意見が分かれる。静かでゆったり。現金のみ、喫煙可、夜10時閉店。日曜休み。',
  });
}

save();
