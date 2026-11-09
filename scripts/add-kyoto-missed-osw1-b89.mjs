// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 89.
//   + BAR LeCoq (cocktail, cognac and whisky bar off Fuyacho-Nijo) — coordinator’s lead item: bars are listed, so the
//     batch-88 “not a place to eat” skip is overridden.
//   + 松阪牛WHAT'S 京都室町店 Matsusaka Gyuu WHAT'S (Matsusaka-beef yakiniku in an 80-year-old machiya off Muromachi-Sanjo)
//     — chain check: the group site (k-whats.net, 株式会社WHAT'S) lists one WHAT'S restaurant (this one), a lifestyle shop
//     in Shiga and a Matsusaka-beef deli counter at Hankyu Umeda; earlier meat-sushi shops are commented out of the
//     list. Not 5+ same-name shops and not a large parent — drafted as part of a small local group, flagged.
//   + 立ちのみ ぼたん Tachinomi Botan (standing bar with cheap izakaya food and sake, Shinmachi south of Bukkoji)
//   + rit... (small Italian near Karasuma-Oike, opened August 2025)
//   + 屋島うどん 京都店 Yashima Udon (couple-run udon, soba and donburi counter by Higashiyama station)
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26004842, 26040326, 26043530, 26009342.
//   Next in lane: 26021450 チャクラ (fetched, not yet worked), then 26011748 やよい軒 (national chain), 26034884, 26007344.
//   queue-status.jsonl grepped for each brand (LeCoq, WHAT'S, おにくのおすし, ぼたん, rit, 屋島): no earlier rulings.
//   Data check (current main, hidden included): none of the five is in data/kyoto.json by Tabelog id, name, site or address.
//   Same-name count: ぼたん, rit... — one shop each. 屋島うどん 京都店 — the “京都店” suffix hints at another shop, but no
//   source names one; reviewers describe a couple running this counter — drafted, flagged.
//   酒処 四方 (kyoto_sake_dokoro_shikata) shares WHAT'S street address (烏帽子屋町477) and sits 3.4 m from its Tabelog
//   point; no source links the two businesses — WHAT'S pin offset 5.5 m south.
//   Invoice: WHAT'S receipt number T2130002019908 = 有限会社カリス (東山区三条通白川橋東入二丁目五軒町106-20), the same
//   address as 株式会社WHAT'S on the group site.
//   Service charges, checked against the Japanese original: WHAT'S — à la carte guests using a private room pay a 10% room
//   charge (室料10％); fully private rooms are for course bookings only (Tabelog). None listed for LeCoq.
//   Other-diner remarks (Greg 2026-11-06): none used (two WHAT'S reviewers found the meat poor value; not used).
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ BAR LeCoq
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022542/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'kyoto_bar_lecoq_fuyacho', name: 'BAR LeCoq', category: 'OMNI',
    lat: 35.01328, lng: 135.76592, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail, whisky and brandy bar; the only food in reviews is cashew nuts with drinks; check beer and liqueurs (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirits and fresh-fruit cocktails; no ingredient information (2022–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 17:00–01:00; Sunday 15:00–23:00; closed Monday (Tabelog). Cards: JCB, AMEX and Diners (Tabelog; April 2026). Smoking allowed (Tabelog). 8 counter seats and one table for two (March 2025). Groups of up to four; no loud conversation (April 2026). Often full — call ahead (November 2023; April 2026). 5 min on foot from Kyoto-Shiyakusho-mae (April 2023).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['15:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho south of Nijo — 5 min from Kyoto-Shiyakusho-mae',
    cuisine: 'An authentic bar (no food beyond snacks) · seasonal fresh-fruit cocktails such as grape, muscat, Japanese pear, ponkan and strawberry (November 2023; February and March 2025) · Southside fizz; bourbon (April 2023) · gin and tonic; Manhattan (March 2025) · a wide choice of cognac, armagnac and other brandies (April 2026) · single malts, incl. a bottling made for Bar SILENT THIRD (April 2026) · cashew nuts with drinks (February 2025)',
    website: null, gmaps: gm('BAR LeCoq 京都'), menu_url: TB,
    notes: '[Bar · Fuyacho-Nijo, cocktails and brandy] A quiet, dimly lit counter bar near Kyoto City Hall, with jazz on analog records, fine glassware, seasonal fresh-fruit cocktails, single malts and an unusually deep brandy shelf. Run by a bartender who trained at Gion’s El Tesoro. Small groups only, no loud talk; often full, so call ahead. Smoking allowed.',
    chef_bio: { chef_name: 'Minami (kanji not sourced)', roles: ['Owner-bartender'], origin: null,
      background: 'An April 2023 reviewer names the owner-bartender as Minami, who worked at the Gion bar El Tesoro before opening LeCoq. Reviewers describe a serious manner that warms up in conversation (November 2023; April 2026) and a particular love of cognac and armagnac (April 2026).',
      philosophy: null, specialty: 'Fresh-fruit cocktails; cognac and armagnac.',
      anecdotes: [
        { text: 'An April 2026 visitor from Tokyo, alone at the counter on a weekday, was introduced to cognac and given tips on bars to try in Tokyo.', source: R + 'B525725953/' },
        { text: 'An April 2026 whisky lover worked through five unfamiliar single malts at the owner’s suggestion.', source: R + 'B527157458/' },
      ],
      japanese_sources_summary: '食べログ: BAR LeCoq、バー、中京区麩屋町二条下ル尾張町210-3 第二ふじビル 1F、京都市役所前駅から363m、火〜土 17:00〜翌1:00、日 15:00〜23:00、月曜定休、カードはJCB・AMEX・Diners、喫煙可。口コミ (英語): 店主でバーテンダーのMinamiさんは祇園のEl Tesoro出身 (2023年4月)、季節のフルーツカクテル (ぶどう、マスカット、梨、ポンカン、苺)、カウンター8席と2人掛けテーブル1卓 (2025年3月)、レコードのジャズ、コニャックとアルマニャック、4人まで、大声の会話は禁止 (2026年4月)、シングルモルト、カードが使える (2026年4月)。',
      confidence: 'low', sources: [TB, R + 'B444676966/', R + 'B474353445/', R + 'B501073332/', R + 'B508415221/', R + 'B525725953/', R + 'B527157458/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet adult bar; groups of up to four; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区麩屋町二条下ル尾張町210-3 第二ふじビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.01328, 135.76592); cross-checked: GSI 京都府京都市中京区尾張町210番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508415221/', R + 'B527157458/'],
    price_note: 'No prices found; reviewers spent ¥2,000–¥3,999 a head (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal fresh-fruit cocktail', '', 'Cocktails', 'ask', 'ask', 'November 2023; February and March 2025.', 'fruit_cocktail'),
      it('', '', 'Cognac or armagnac', '', 'Spirits', 'gf', 'ask', 'April 2026.', 'brandy'),
      it('', '', 'Single malt whisky', '', 'Spirits', 'ask', 'ask', 'April 2026.', 'whisky'),
    ] }, {
    cuisine: '本格的なバー (つまみ程度で食事はない)・季節のフルーツカクテル、ぶどう、マスカット、梨、ポンカン、苺など (2023年11月、2025年2・3月)・サウスサイドフィズ、バーボン (2023年4月)・ジントニック、マンハッタン (2025年3月)・コニャック、アルマニャックなどブランデーが豊富 (2026年4月)・Bar SILENT THIRDのためのボトルを含むシングルモルト (2026年4月)・つまみのカシューナッツ (2025年2月)',
    neighborhood: '二条の南、麩屋町通。京都市役所前から徒歩5分',
    gf_detail: '要確認。カクテル、ウイスキー、ブランデーのバー。口コミにある食べ物はつまみのカシューナッツだけ。ビールやリキュールは確認を (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。蒸留酒とフルーツカクテル。材料の情報はない (2022〜2026年の口コミ)。',
    notes: '[バー・麩屋町二条、カクテルとブランデー] 京都市役所近くの静かで薄暗いカウンターのバー。レコードのジャズ、美しいグラス、季節のフルーツカクテル、シングルモルト、そして珍しいほど充実したブランデー。祇園のEl Tesoro出身のバーテンダーの店。少人数で静かに。満席が多いので電話で確認を。喫煙可。',
  });
}

// ================================================================ 松阪牛WHAT'S 京都室町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004842/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://matsusakabeef-whats.com/'; const FAQ = SITE + 'faq/'; const GROUP = 'http://www.k-whats.net/';
  const HL = day(['11:00', '14:00'], ['17:00', '23:00']); const HD = day(['17:00', '23:00']);
  put({
    id: 'kyoto_matsusaka_gyu_whats_muromachi', name: '松阪牛WHAT\'S 京都室町店 (Matsusaka Gyuu WHAT\'S Kyoto Muromachi)', category: 'OMNI',
    lat: 35.008395, lng: 135.757999, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled Matsusaka and other wagyu with sauces, yukhoe, meat sushi and namul; sauce ingredients are not stated (own site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku restaurant (own site; Tabelog).',
    hours_raw: 'Daily 17:00–23:00 (last orders 22:00); lunch 11:00–14:00 Monday–Wednesday, sometimes closed; closures possible over New Year (Tabelog; the shop’s FAQ gives dinner hours only). Seats are held for 2 hours (last orders at 90 minutes) (Tabelog; own site). Private rooms for 2–8: à la carte guests pay a 10% room charge, and fully private rooms are for course bookings only (Tabelog, original 室料10％). Cards, IC cards, QR incl. Alipay and WeChat Pay (Tabelog). 72 seats incl. tatami and sunken-floor seating around a courtyard with a small pond (Tabelog; own site). Non-smoking (Tabelog). English menu and English-speaking staff (own site; August 2026). 4 min on foot from Karasuma-Oike (Tabelog).',
    hours: { 0: HL, 1: HL, 2: HL, 3: HD, 4: HD, 5: HD, 6: HD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi south of Sanjo — 4 min from Karasuma-Oike',
    cuisine: 'Matsusaka-beef yakiniku from whole cattle bought by the shop, in an 80-year-old Kyoto machiya (own site) · three-wagyu platter of Kobe, Omi and Matsusaka beef (chateaubriand, fillet, sirloin) from ¥7,000 for 120 g; limited “premium” platter of 20 Matsusaka cuts ¥50,000 (own site) · yukhoe, two kinds of meat sushi, grilled tongue and five cuts (August 2026) · strip loin (May 2025) · lightly seared sashimi-grade beef; namul (July 2026)',
    website: SITE, gmaps: gm('松阪牛WHAT\'S 京都室町店'), menu_url: SITE,
    notes: '[Yakiniku · Muromachi-Sanjo machiya, Matsusaka beef] Matsusaka-beef yakiniku in an 80-year-old townhouse with private rooms around a pond courtyard, aimed squarely at visitors: English menu and staff, cuts explained at the table, platters from ¥7,000. Expensive; à la carte guests pay 10% for a private room. Flagged: one of a small group (株式会社WHAT\'S) with a lifestyle shop in Shiga and a deli counter in Osaka.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Run by the Kyoto company 株式会社WHAT\'S (group site), whose receipts are issued by 有限会社カリス at the same Higashiyama address (NTA invoice register). The shop says it buys whole Matsusaka cattle, and it won awards in the SAVOR JAPAN Best Restaurant Award 2025–2026, including first place nationally for bookings from overseas visitors (own site).',
      philosophy: null, specialty: 'Matsusaka-beef yakiniku; wagyu platters.',
      anecdotes: [
        { text: 'An August 2026 host brought a foreign guest, who called it the best Japanese yakiniku ever tasted; staff explained each cut in English.', source: R + 'B534150744/' },
      ],
      japanese_sources_summary: '公式サイト: 松阪牛WHAT\'S 京都室町店、烏丸御池駅から徒歩4分、築80年の京町家、松阪牛の一頭買い、小さな池のある中庭、個室・半個室、三大和牛盛り合わせ (神戸牛・近江牛・松阪牛、120g 7,000円〜)、数量限定の松阪牛プレミアム盛り (20種の部位、50,000円)、SAVOR JAPAN Best Restaurant Award 2025-2026で全国予約数ランキング1位など、英語メニューと英語対応スタッフ、17:00〜23:00 (L.O. 22:00)、年末年始など臨時休業あり、席のみ予約は2時間制。グループサイト: 株式会社WHAT\'S (東山区三条通白川橋東入ル2丁目五軒町106-20)、京都室町店、滋賀 堅田、阪急うめだ本店。適格請求書: 有限会社カリス (同住所)。食べログ: 72席、個室はアラカルトの場合室料10％、完全個室はコース予約のみ、月〜水は昼 11:00〜14:00 (不定休)、カード・交通系IC・QR (Alipay、WeChat Pay含む)、禁煙。口コミ (2025〜2026年、英語): ユッケ、肉寿司2種、タン、5種の焼肉、英語で部位を説明。',
      confidence: 'medium', sources: [SITE, FAQ, GROUP, TB, R + 'B507554077/', R + 'B516342337/', R + 'B531574994/', R + 'B534150744/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; 10% room charge on à la carte in private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通三条下ル烏帽子屋町477',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog official listing; reviews dated May 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.008445, 135.757999), offset 5.5 m south because 酒処 四方 (kyoto_sake_dokoro_shikata) at the same street address sits 3.4 m from the Tabelog point; cross-checked: GSI 京都府京都市中京区烏帽子屋町477番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the shop’s site; à la carte guests in private rooms pay a 10% room charge.', last_checked: TODAY, items: [
      it('', '', 'Three-wagyu platter (Kobe, Omi, Matsusaka), from 120 g', '¥7,000', 'Yakiniku', 'ask', 'no', 'Own site; from ¥7,000.', 'sandai_wagyu'),
      it('', '', 'Matsusaka-beef premium platter, 20 cuts (limited)', '¥50,000', 'Yakiniku', 'ask', 'no', 'Own site.', 'premium'),
      it('', '', 'Beef yukhoe', '', 'Starters', 'ask', 'no', 'August 2026.', 'yukhoe'),
      it('', '', 'Meat sushi', '', 'Starters', 'ask', 'no', 'August 2026.', 'niku_sushi'),
    ] }, {
    cuisine: '一頭買いの松阪牛の焼肉、築80年の京町家で (公式サイト)・神戸牛・近江牛・松阪牛の三大和牛盛り合わせ (シャトーブリアン、ヘレ、サーロイン) 120g 7,000円〜、数量限定の松阪牛プレミアム盛り (20種の部位) 50,000円 (公式サイト)・ユッケ、肉寿司2種、タン、5種の焼肉 (2026年8月)・サーロイン (2025年5月)・軽く炙った刺身用の牛肉、ナムル (2026年7月)',
    neighborhood: '三条の南、室町通。烏丸御池から徒歩4分',
    gf_detail: '要確認。たれで焼く松阪牛などの和牛、ユッケ、肉寿司、ナムル。たれの材料は書かれていない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛肉の焼肉店 (公式サイト、食べログ)。',
    notes: '[焼肉・室町三条の町家、松阪牛] 池のある中庭を囲む個室のある築80年の町家で松阪牛の焼肉。英語メニューと英語のできるスタッフ、席で部位の説明があり、訪日客向け。盛り合わせは7,000円から。高め。個室をアラカルトで使うと室料10％。株式会社WHAT\'Sの小さなグループの店 (滋賀の雑貨店、大阪の惣菜売り場) (要確認)。',
  });
}

// ================================================================ 立ちのみ ぼたん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040326/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_tachinomi_botan_shinmachi', name: '立ちのみ ぼたん (Tachinomi Botan)', category: 'OMNI',
    lat: 35.00092, lng: 135.756797, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried mackerel, croquettes, kushikatsu, pizza, tonpei-yaki and oden; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, offal and mackerel dishes, and oden in dashi (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 15:00–22:00; closed Monday (Tabelog). 12 places at an L-shaped counter, standing room for 15; folding chairs on hand (Tabelog; March 2025, January and May 2026). Cards, e-money and barcode payment (May 2026). Non-smoking, with a smoking spot outside (Tabelog; May 2026). 5 min on foot from Shijo station (January 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi south of Bukkoji — 5 min from Shijo',
    cuisine: 'A cheap, clean standing bar for afternoon drinking (March 2025; May 2026) · Manganji pepper miso; stir-fried pork skirt; curry croquettes; sweet-spicy fried mackerel (July 2025) · tonpei-yaki; offal stewed in sake-lees miso (February 2026) · oden and oden-broth dashimaki (February 2026) · extra-large kushikatsu ¥400; margherita pizza ¥450; red-shiso highball ¥380 (May 2026) · Kaku highball ¥380 (January 2026) · seasonal sake, cheaper as the season turns (May 2026)',
    website: null, gmaps: gm('立ちのみ ぼたん 京都'), menu_url: TB,
    notes: '[Standing bar · Shinmachi-Bukkoji, from 15:00] A small, spotless L-shaped standing bar near Shijo-Karasuma, open from mid-afternoon: highballs from ¥380, a changing sake list, oden and hearty small plates. Chairs are there if you need one; staff are all women, and regulars chat freely. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A May 2026 reviewer describes an owner keen on sake and happy to talk about it, and an all-female staff. No operator was found.',
      philosophy: null, specialty: 'Oden and izakaya small plates; sake.',
      anecdotes: [
        { text: 'A February 2026 visitor walking from Gojo to Shijo spotted the oden pot over the counter and ordered the oden-broth dashimaki.', source: R + 'B522400119/' },
      ],
      japanese_sources_summary: '食べログ: 立ちのみ ぼたん、立ち飲み、下京区新町通仏光寺南入岩戸山町421 コタニビル 1F、四条駅から332m、火〜日 15:00〜22:00、月曜定休、カウンター12席、立ち飲み15名、禁煙、電子マネー可。口コミ (2025〜2026年、英語): 折りたたみ椅子あり、万願寺みそ、豚ハラミ炒め、カレーコロッケ、鯖の甘辛揚げ、とん平焼き、ホルモンの酒粕味噌煮、おでん、おでん出汁巻き、特大串カツ400円、マルゲリータ450円、赤しそハイボール380円、角ハイボール380円、店主は日本酒好き、スタッフは全員女性、店外に喫煙所、カード・電子マネー・バーコード決済可。',
      confidence: 'low', sources: [TB, R + 'B503305926/', R + 'B510960818/', R + 'B521944952/', R + 'B522172585/', R + 'B522400119/', R + 'B528184005/', R + 'B528707379/', R + 'B531396390/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ standing bar; easy for solo women (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通仏光寺南入岩戸山町421 コタニビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (35.00092, 135.756797); cross-checked: GSI 京都府京都市下京区岩戸山町421番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528707379/', R + 'B522172585/'],
    price_note: 'Prices from January and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Extra-large kushikatsu', '¥400', 'Small plates', 'no', 'no', 'May 2026.', 'kushikatsu'),
      it('', '', 'Margherita pizza', '¥450', 'Small plates', 'no', 'no', 'May 2026.', 'pizza'),
      it('', '', 'Oden-broth dashimaki', '', 'Oden', 'ask', 'no', 'February 2026.', 'oden_dashimaki'),
      it('', '', 'Sweet-spicy fried mackerel', '', 'Small plates', 'ask', 'no', 'July 2025.', 'saba'),
      it('', '', 'Kaku highball', '¥380', 'Drinks', 'ask', 'ask', 'January 2026.', 'highball'),
    ] }, {
    cuisine: '昼から飲める安くて清潔な立ち飲み (2025年3月、2026年5月)・万願寺みそ、豚ハラミ炒め、カレーコロッケ、鯖の甘辛揚げ (2025年7月)・とん平焼き、ホルモンの酒粕味噌煮 (2026年2月)・おでん、おでん出汁巻き (2026年2月)・特大串カツ400円、マルゲリータ450円、赤しそハイボール380円 (2026年5月)・角ハイボール380円 (2026年1月)・季節で値下がりする日本酒 (2026年5月)',
    neighborhood: '仏光寺の南、新町通。四条から徒歩5分',
    gf_detail: '要確認。鯖の揚げ物、コロッケ、串カツ、ピザ、とん平焼き、おでん。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚、ホルモン、鯖の料理、出汁のおでん (2025〜2026年の口コミ)。',
    notes: '[立ち飲み・新町仏光寺、15時から] 四条烏丸近く、L字カウンターの小さくてとても清潔な立ち飲み。昼過ぎから開き、ハイボールは380円から、入れ替わる日本酒、おでん、食べ応えのある小皿。椅子も借りられる。スタッフは全員女性で、常連との会話も気軽。月曜定休。',
  });
}

// ================================================================ rit...
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043530/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_rit_karasuma_oike', name: 'rit...', category: 'OMNI',
    lat: 35.012201, lng: 135.76221, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, house focaccia and pizza; mushroom risotto and salads on the menu; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A daily oil-based pasta (such as peperoncino) and salads may suit, but nothing is described as vegan; the dressing has cheese (2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday: lunch 11:30–15:00 (last orders 14:00), dinner 17:30–23:00 (last orders 22:00); closed Thursday (Tabelog). Opened 21 August 2025 (Tabelog). Cards, e-money and QR (Tabelog). A counter facing the kitchen and four tables for two at the back (September 2026). Non-smoking; children welcome (Tabelog). Busy some nights — call ahead (September 2026). 5 min on foot from Karasuma-Oike (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike — 5 min from the station',
    cuisine: 'Straightforward Italian (March 2026) · lunch from ¥1,500: salad, a choice of two or three daily pastas (one tomato, one oil-based) and house focaccia; half-and-half pasta (March, May and August 2026) · “sweets set” ¥2,100 adding tiramisu and a drink (September 2026) · assorted antipasti; squid-ink spaghetti (April 2026) · mushroom risotto; wine by the glass from ¥700; most dishes in smaller portions on request (September 2026) · dinner course with antipasti, ajillo and baguette, salad, pizza and pasta (February 2026)',
    website: null, gmaps: gm('rit... 京都 イタリアン'), menu_url: TB,
    notes: '[Italian · Karasuma-Oike, opened 2025] A small, friendly Italian near Karasuma-Oike with a counter facing a spotless kitchen: ¥1,500 pasta lunches with salad and house focaccia, tiramisu, and at night antipasti, risotto and pasta, many in solo-sized portions. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A December 2025 reviewer learned that the chef trained in hotels and restaurants rather than at cooking school. Reviewers describe a friendly owner who chats with guests (August and September 2026). No operator was found.',
      philosophy: null, specialty: 'Pasta; tiramisu.',
      anecdotes: [
        { text: 'A September 2026 solo diner was told the two-person antipasti platter was fine for one, and heard a regular declare it the best Italian in the area.', source: R + 'B536201105/' },
      ],
      japanese_sources_summary: '食べログ: rit...、イタリアン、中京区左京町、烏丸御池駅から徒歩5分、月〜水・金〜日 11:30〜15:00 (L.O. 14:00)・17:30〜23:00 (L.O. 22:00)、木曜定休、2025年8月21日オープン、カード・電子マネー・QR可、禁煙、子供可。口コミ (2025〜2026年、英語): ホテルやレストランで修業、パスタランチ1,500円 (サラダ、日替わりパスタ2〜3種、自家製フォカッチャ)、スイーツセット2,100円 (ティラミスとドリンク)、前菜の盛り合わせ、イカスミのスパゲッティ、キノコのリゾット、グラスワイン700円から、量の調整可、ディナーコース (前菜、アヒージョ、サラダ、ピザ、パスタ)。',
      confidence: 'low', sources: [TB, R + 'B519857282/', R + 'B523421253/', R + 'B524162966/', R + 'B526850309/', R + 'B527447796/', R + 'B532867053/', R + 'B535960279/', R + 'B536201105/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter; solo diners welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区左京町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened August 2025; reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.012201, 135.76221); no lot number — GSI places only 左京町 (town, 33 m); OSM reverse gives the neighbouring 瓦町 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535960279/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with salad and house focaccia', '¥1,500', 'Lunch', 'no', 'ask', 'March, August and September 2026.', 'pasta_lunch'),
      it('', '', 'Sweets set: pasta lunch, tiramisu and a drink', '¥2,100', 'Lunch', 'no', 'no', 'September 2026.', 'sweets_set'),
      it('', '', 'Mushroom risotto', '', 'Dinner', 'ask', 'ask', 'September 2026.', 'risotto'),
      it('', '', 'Squid-ink spaghetti', '', 'Dinner', 'no', 'no', 'April 2026.', 'nero'),
    ] }, {
    cuisine: 'まっすぐなイタリアン (2026年3月)・ランチは1,500円から、サラダ、日替わりパスタ2〜3種 (トマト系とオイル系)、自家製フォカッチャ、パスタのハーフ&ハーフも (2026年3・5・8月)・ティラミスとドリンク付きの「スイーツセット」2,100円 (2026年9月)・前菜の盛り合わせ、イカスミのスパゲッティ (2026年4月)・キノコのリゾット、グラスワイン700円から、ほとんどの料理は量を減らせる (2026年9月)・前菜、アヒージョとバゲット、サラダ、ピザ、パスタのディナーコース (2026年2月)',
    neighborhood: '烏丸御池。駅から徒歩5分',
    gf_detail: '要確認。パスタ、自家製フォカッチャ、ピザ。キノコのリゾットやサラダもある。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。日替わりのオイル系パスタ (ペペロンチーノなど) やサラダは合うかもしれないが、ヴィーガンと書かれた品はない。ドレッシングにはチーズ (2026年の口コミ)。',
    notes: '[イタリアン・烏丸御池、2025年開店] 烏丸御池近く、ぴかぴかの厨房に面したカウンターのある小さく気さくなイタリアン。サラダと自家製フォカッチャ付きのパスタランチ1,500円、ティラミス、夜は前菜、リゾット、パスタ。一人分の量にもしてくれる。木曜定休。',
  });
}

// ================================================================ 屋島うどん 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26009342/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30']);
  put({
    id: 'kyoto_yashima_udon_higashiyama', name: '屋島うどん 京都店 (Yashima Udon Kyoto)', category: 'OMNI',
    lat: 35.009757, lng: 135.77887, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, soba and tempura (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: noodles in dashi broth; egg, chicken and shrimp-tempura bowls (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–13:30; closed Sunday (Tabelog). Lines form at lunch; quick turnover (May and December 2025). Cash only: no cards, e-money or QR (Tabelog). About six or seven counter seats; return your tray to the counter when done (Tabelog; May and September 2026). Takeaway (Tabelog; November 2026). 55 m from Higashiyama station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — by Higashiyama station',
    cuisine: 'A long-standing neighbourhood udon, soba and donburi counter (May 2025) · Kyoto-style thin noodles in a light dashi (2025–2026) · rice bowl and mini noodle sets: tendon with mini udon ¥950 (February 2025); oyakodon with mini kitsune soba (May 2025); konoha-don (March 2025) · tempura udon ¥650; mini tamago-don ¥350; zaru udon (May 2026) · nishin soba (January 2025) · kitsune and tempura udon to take away, ¥880 for both (November 2026)',
    website: null, gmaps: gm('屋島うどん 東山'), menu_url: TB,
    notes: '[Udon and soba · Higashiyama-Sanjo, couple-run] A tiny, old-fashioned counter by Higashiyama station where an older couple turns out Kyoto-style udon and soba in light dashi, with mini rice-bowl sets, at prices well under ¥1,000. Lunch only, Monday to Saturday; cash only; expect a short queue.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'Reviewers describe the shop as run by a couple, efficient and polite under pressure (February and May 2025), and as an elderly couple who struggle when customers arrive all at once (September 2026). A May 2026 visitor saw a man and a woman working. No founding date or other shop was found.',
      philosophy: null, specialty: 'Kyoto-style udon and soba with mini donburi.',
      anecdotes: [
        { text: 'A May 2025 group, turned away by full soba and Chinese restaurants after Heian Shrine, found an oyakodon set here just before a queue formed outside.', source: R + 'B507215698/' },
      ],
      japanese_sources_summary: '食べログ: 屋島うどん 京都店、うどん・そば・丼、東山区古川三条上分木65、東山駅から55m、月〜土 11:30〜13:30、日曜定休、カード・電子マネー・QR不可、カウンター席のみ、テイクアウト可。口コミ (2025〜2026年、英語): 夫婦で営む、天丼とミニうどん950円、親子丼とミニきつねそば、木の葉丼、にしんそば、天ぷらうどん650円、ミニ玉子丼350円、ざるうどん、きつねうどんと天ぷらうどんの持ち帰り2つで880円、カウンター6〜7席、食器は返却口へ。',
      confidence: 'low', sources: [TB, R + 'B487587569/', R + 'B499913351/', R + 'B500224310/', R + 'B503081402/', R + 'B507215698/', R + 'B518406669/', R + 'B528398506/', R + 'B530948755/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny local counter; menu on the wall; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区古川三条上分木65',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.009757, 135.77887); cross-checked: GSI 京都府京都市東山区分木町65番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528398506/', R + 'B487587569/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura udon', '¥650', 'Udon', 'no', 'no', 'May 2026.', 'tempura_udon'),
      it('', '', 'Mini tamago-don', '¥350', 'Donburi', 'ask', 'no', 'May 2026.', 'mini_tamagodon'),
      it('', '', 'Tendon with mini udon', '¥950', 'Sets', 'no', 'no', 'February 2025.', 'tendon_set'),
      it('', '', 'Kitsune udon', '', 'Udon', 'no', 'no', 'December 2025.', 'kitsune'),
      it('', '', 'Nishin soba', '', 'Soba', 'no', 'no', 'January 2025.', 'nishin_soba'),
    ] }, {
    cuisine: '昔からある近所のうどん・そば・丼のカウンター (2025年5月)・京風の細めの麺とやさしい出汁 (2025〜2026年)・丼とミニ麺のセット: 天丼とミニうどん950円 (2025年2月)、親子丼とミニきつねそば (2025年5月)、木の葉丼 (2025年3月)・天ぷらうどん650円、ミニ玉子丼350円、ざるうどん (2026年5月)・にしんそば (2025年1月)・きつねうどんと天ぷらうどんの持ち帰り、2つで880円 (2026年11月)',
    neighborhood: '東山三条。東山駅のそば',
    gf_detail: 'グルテンフリーではない。小麦のうどん、そば、天ぷら (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の麺、卵・鶏・海老天ぷらの丼 (2025〜2026年の口コミ)。',
    notes: '[うどん・そば・東山三条、夫婦の店] 東山駅のそばの小さな昔ながらのカウンター。年配の夫婦が出汁のやさしい京風のうどんやそばにミニ丼のセットを、1,000円を切る値段で出す。月〜土の昼のみ、現金のみ。少し並ぶことも。',
  });
}

save();
