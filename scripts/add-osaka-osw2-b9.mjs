// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 9 (lane: Tabelog id mod 4 = 1).
//   + AT THE 21 namba (okonomiyaki served on small iron plates, no grill at the table; Namba branch of a 1984 Toyonaka house)
//   + 北新地はらみ 法善寺店 Kitashinchi Harami Hozenji (black-wagyu outside-skirt yakiniku in Hozenji Yokocho, staff grill at the table)
//   + イルソーレ ロッソ IL SOLE ROSSO (wood-fired Neapolitan pizzeria in Shinsaibashi since 2004; AVPN member no. 242)
//   + 黒門 轍 Wadachi (Cantonese-leaning Chinese tavern by Nippombashi Stn; house shumai; set lunches)
//   Skipped: アクアリウムイタリアン心斎橋ライム 27058889 — chain: run by オペレーションファクトリー, which operates over twenty
//   restaurants (opefac.com, read 2026-11-02).
//   Skipped: 酒解本店 27136929 — chain: one shop of reor株式会社, whose site lists seven brands (食悦堂, 酒解本店, サカトケ乃カミ,
//   酒解, さかとけ, シ酉角刀牛, 酒解能登也) across about eleven shops (shokuetudou.com, read 2026-11-02).
//   Chain check of the four kept:
//   - AT THE 21: the official site (株式会社２４) tells of the Toyonaka shop (1984) and a shop in Panasonic Stadium Suita (2016);
//     the Namba shop opened 2023-06-01 (Tabelog). Three shops at most; none in data. Kept as a small group; flagged. The official
//     site itself describes only the Toyonaka shop.
//   - Kitashinchi Harami: four shops (本店, 北新地別邸, 法善寺店, 新大宮店 in Nara) per harami.jp; none in data (grep of
//     all data/*.json). Kept as a small group; flagged.
//   - IL SOLE ROSSO: the 株式会社イル・ソーレ site lists two current shops (イルソーレ・ロッソ, イルソーレTEN-3); none in data.
//   - Wadachi: one shop (official site, Tabelog).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27058889', 'Chain: アクアリウムイタリアン心斎橋ライム is run by オペレーションファクトリー, which operates over twenty restaurants (opefac.com).');
skip('27136929', 'Chain: 酒解本店 is one shop of reor株式会社, whose site lists seven brands across about eleven shops (shokuetudou.com).');

// ================================================================ AT THE 21 namba
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27136557/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://at-the-21.jp/';
  const W = day(['12:00', '15:30'], ['17:30', '22:00']); const E = day(['12:00', '22:00']);
  put({
    id: 'osaka_at_the_21_namba', name: 'AT THE 21 namba (Okonomiyaki AT THE 21 Namba)', category: 'OMNI',
    lat: 34.664211, lng: 135.505386, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the batter is made with fine cake flour (official site, Toyonaka shop), and yakisoba, modern-yaki and omusoba carry noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the batter uses a house dashi from chicken bones, kombu and other ingredients (official site, Toyonaka shop); fillings are pork, squid, octopus, shrimp, scallop, beef tendon and mochi with cheese, and dishes come with mayonnaise and bonito flakes (Tabelog menu; reviews).',
    hours_raw: 'Mon–Fri 12:00–15:30 and 17:30–22:00; Sat, Sun and holidays 12:00–22:00; closing days not fixed (closed 21 and 28 November 2026) (Tabelog). Reservations taken; online booking via Tabelog. Cards (VISA, Master) and PayPay; no e-money. 28 table seats; non-smoking (Tabelog). Orders by QR code (September and October 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 4-5 — 5 min from Namba Stn exit E5; 7 min from Nippombashi Stn exit 5',
    cuisine: 'Okonomiyaki, negiyaki (soy-sauce flavour), modern-yaki, yakisoba and omusoba, cooked in the kitchen and brought to the table on small one-person iron plates; fillings of pork, squid, octopus, shrimp, scallop, beef tendon, mushroom, cheese and mochi; mayonnaise and mustard can be left off (Tabelog menu, last updated 2023) · the batter uses a house dashi of chicken bones, kombu and other ingredients and fine cake flour (official site, Toyonaka shop) · from 2026 reviews: pork modern-yaki, mochi-cheese modern-yaki, omusoba, tonpei-yaki, potato salad',
    website: SITE, gmaps: gm('AT THE 21 namba'), menu_url: M,
    notes: "[Okonomiyaki · Namba Sennichimae, iron-plate okonomiyaki without a table grill] The Namba branch, opened June 2023, of AT THE 21, an okonomiyaki house opened in 1984 in a smart Toyonaka residential area by the second son of a liquor-shop family. The founding idea, kept here, is a bright café-like room with no grill on the tables: okonomiyaki are cooked in the kitchen and served on a small one-person iron plate, so clothes and hair do not pick up the smell. Diners in 2026 praise the fluffy, thick okonomiyaki and modern-yaki and the big portions; two September and October 2026 diners found the batter dry or the sauce light and did not plan to return. Orders are by QR code. Two diners (September and November 2026) noticed many guests from abroad, and the November diner found the staff attentive and kind.",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed; Namba branch of AT THE 21 (official site; Tabelog)'], origin: null, background: 'Per the official site (株式会社２４, representative director 西 真澄), the founder, second son of a liquor shop, opened AT THE 21 in Toyonaka in 1984, choosing okonomiyaki as the dish closest to Osaka people; the glass-fronted, café-like shop with no noren or sign became the talk of the area, and from 2016 the house also had a shop in Panasonic Stadium Suita. The Tabelog listing for Namba (opened 2023-06-01) says the house is "recognized as one of the top 100 establishments".', philosophy: '"Bright and modern so that solo diners and women can come in easily"; no iron plates on the tables "so that guests\' smart clothes do not pick up stains or smell" (official site).', specialty: 'Okonomiyaki and modern-yaki on one-person iron plates.',
      anecdotes: [
        { text: '"Since there’s no teppan right in front of you, it’s not hot, and your clothes and hair won’t pick up any odors." — September 2026.', source: R + 'B536641285/' },
        { text: '"It was fluffy and served on the teppan, so it stayed hot until the very end—delicious!" — September 2026, mochi-cheese modern-yaki.', source: R + 'B535347169/' },
        { text: '"The batter was dry and crumbly, like a custard with chopped green onions thrown in." — September 2026, third visit.', source: R + 'B466345739/' },
        { text: '"The food was not particularly memorable, but the service from the staff was very attentive and kind." — November 2026.', source: R + 'B538500760/' },
      ],
      japanese_sources_summary: '公式サイト (株式会社２４、代表取締役 西 真澄): 酒屋の次男だった創業者が1984年に豊中市でAT THE 21を開店、大阪人に身近なお好み焼き、カフェのようなガラス張りで暖簾・看板なし、お一人様や女性も入りやすい明るくモダンな店、テーブルに鉄板を置かず焼き上がりをオーダーメイドの小さな1人用の鉄板で出す、2016年からパナソニックスタジアム吹田にも出店、生地は鶏ガラ・昆布などの自家製だしとケーキ用の上質な小麦粉、キャベツや青ねぎは季節ごとに一番美味しい産地のもの (豊中の店の説明)。食べログ (店舗会員、英語版): 難波千日前4-5、2023年6月1日オープン、月〜金12:00〜15:30・17:30〜22:00、土日祝12:00〜22:00、不定休、予約可、カード (VISA、Master)・PayPay、テーブル28席、禁煙、子ども歓迎。メニュー (2023年更新): お好み焼き、チーズお好み焼き、焼きそば、ネギ焼き (しょうゆ味)、モダン焼き、チーズモダン焼き、オムそば、マヨネーズとからしは抜きもできる。口コミ (2026年9月〜11月): ふわふわで分厚い、量が多い、QRコードで注文、モダン焼き (ブタ) 1,700円、海鮮のネギ焼き2,100円、外国からの客が多い、生地がぱさつく・ソースが薄いという声も。',
      confidence: 'medium', sources: [TB, M, SITE, SITE + 'story', SITE + 'company', SITE + 'menu', R + 'B466345739/', R + 'B535314807/', R + 'B535347169/', R + 'B535471046/', R + 'B536641285/', R + 'B537416043/', R + 'B537693558/', R + 'B537815628/', R + 'B538045877/', R + 'B538500760/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code (2026 reviews). Two diners noticed many guests from abroad (September and November 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November 2026 closing days; reviews dated through November 2026. The official site at-the-21.jp describes the Toyonaka shop only.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番5号 (go) 10m. Nearest record 牡蠣小屋 (osaka_kaki_goya_laundry_nipponbashi, "…日本橋2-7-25") is about 27 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B538045877/', R + 'B535314807/', R + 'B466345739/'],
    price_note: 'Tabelog menu last updated August 2023 (okonomiyaki from ¥1,100, modern-yaki from ¥1,500, mixes up to ¥2,600); 2026 diners paid more: pork modern-yaki ¥1,700 (September and October 2026) and seafood negiyaki ¥2,100 (September 2026). Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'Tabelog menu 2023: ¥1,100.', 'okonomiyaki_pork'),
      it('', '', 'Pork modern-yaki (okonomiyaki with noodles)', '¥1,700', 'Modern-yaki', 'no', 'no', 'September and October 2026 reviews; no.1 on the 2023 menu.', 'modern_yaki'),
      it('', '', 'Pork negiyaki, soy-sauce flavour', '', 'Negiyaki', 'no', 'no', 'Tabelog menu 2023: ¥1,250.', 'negiyaki'),
      it('', '', 'Pork omusoba', '', 'Omusoba', 'no', 'no', 'Recommended on the 2023 menu: ¥1,250.', 'omusoba'),
      it('', '', 'Pork yakisoba', '', 'Yakisoba', 'no', 'no', 'Tabelog menu 2023: ¥1,100.', 'yakisoba'),
    ] }, {
    cuisine: 'お好み焼き、ネギ焼き (しょうゆ味)、モダン焼き、焼きそば、オムそばを厨房で焼き、小さな1人用の鉄板にのせて席へ。具はブタ、イカ、タコ、エビ、貝柱、スジ、キノコ、チーズ、もち。マヨネーズとからしは抜きもできる (食べログのメニュー、2023年更新)・生地は鶏ガラ・昆布などの自家製だしとケーキ用の上質な小麦粉 (公式サイト、豊中の店)・2026年の口コミから: モダン焼き (ブタ)、もちチーズモダン焼き、オムそば、Tonpei-yaki、ポテトサラダ',
    neighborhood: '難波千日前4-5。なんば駅E5出口から徒歩5分、日本橋駅5番出口から徒歩7分',
    gf_detail: 'グルテンフリーではありません。生地にケーキ用の上質な小麦粉を使い (公式サイト、豊中の店)、焼きそば、モダン焼き、オムそばには麺が入る。',
    vegan_detail: 'ヴィーガンではありません。生地に鶏ガラ・昆布などの自家製だし (公式サイト、豊中の店)。具はブタ、イカ、タコ、エビ、貝柱、スジ、もち、チーズで、マヨネーズとかつお節がのる (食べログのメニュー、口コミ)。',
    notes: '[お好み焼き・難波千日前、テーブルに鉄板のないお好み焼き] 1984年に豊中の住宅地で酒屋の次男が開いたお好み焼き店 AT THE 21 の難波店で、2023年6月オープン。カフェのような明るい店でテーブルに鉄板を置かないという創業時のスタイルをここでも続け、厨房で焼いたお好み焼きを1人用の小さな鉄板にのせて出すので、服や髪ににおいが付かない。2026年の口コミでは、ふわふわで分厚いお好み焼きやモダン焼き、量の多さが好評。一方、2026年9月と10月の2人は生地がぱさつく、ソースが薄いと感じ、再訪はないとした。注文はQRコードで。2026年9月と11月の2人が外国からの客の多さに触れ、11月の客はスタッフの気配りと親切さを挙げている。',
  });
}

// ================================================================ 北新地はらみ 法善寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27106857/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://hozenji.harami.jp/'; const GROUP = 'https://harami.jp/';
  const H = day(['12:00', '23:30']);
  put({
    id: 'osaka_kitashinchi_harami_hozenji', name: '北新地はらみ 法善寺店 (Kitashinchi Harami Houzenji ten)', category: 'OMNI',
    lat: 34.668213, lng: 135.502853, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The harami steak comes with several dips (sauce, egg yolk, truffle, red-wine salt, wasabi, salt), and the menu also has seared nigiri, kalbi, cold noodles and namul (Tabelog menu; reviews); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku restaurant; namul, kimchi and salad are sides and are not described.',
    hours_raw: 'Daily 12:00–23:30 (last food order 23:00); closing days not fixed, posted on Instagram (Tabelog). Courses and seats limited to 2 hours; a no-show is assumed after 15 minutes late without a call (Tabelog). 10% service charge on tax-inclusive prices (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay, d Barai, au PAY; no e-money. 24 seats (8 counter, 16 table); non-smoking; free Wi-Fi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-8, inside Hozenji Yokocho — 7 min from Namba Stn',
    cuisine: 'Yakiniku built around harami (outside skirt) of top black wagyu, Japan\'s first harami-specialist (Tabelog); the signature thick harami steak is grilled by the staff at the table, flambéed and sliced in the kitchen; red meat chosen weekly with the suppliers, and the manager visits cattle farms (Tabelog) · courses of 13 dishes at ¥9,900, ¥13,200 and ¥16,500 (Tabelog) · à la carte: harami yukhoe-style with truffle, harami and caviar spoon, seared nigiri, Kobe, Matsusaka and Ota beef strip loin, Chateaubriand, thick-cut tongue, kalbi, offal, namul, kimchi, truffle tamago-kake-gohan, sudachi cold noodles (Tabelog menu, May 2026) · tableware made for the house by the fifth-generation potter of やすお陶房, Shigaraki (official site) · wine chosen by a sommelier; sake, shochu, cocktails',
    website: SITE, gmaps: gm('北新地はらみ 法善寺店'), menu_url: M,
    notes: "[Yakiniku · Hozenji Yokocho, black-wagyu harami grilled at the table] The Hozenji Yokocho shop, opened September 2018, of Kitashinchi Harami, a four-shop yakiniku name devoted to harami (outside skirt) of top black wagyu; Tabelog says it was produced by Ryuka Hattori, who trained at the Italian restaurant Ponte Vecchio. Behind a heavy wooden door on the stone-paved alley, staff grill the thick harami steak at the table, flambé it with brandy and slice it in the kitchen; it is eaten with egg yolk, truffle, red-wine salt or sauce. Most 2026 diners take the 13-dish Hozenji course and call it a place for celebrations; one says opinions about the place vary. The house says it was ranked 3rd in Japan in the fine-dining category of TripAdvisor's Best of the Best 2026. A June 2026 diner found all the other guests were from abroad.",
    chef_bio: { chef_name: null, roles: ['Produced by Ryuka Hattori, who trained at the Italian restaurant Ponte Vecchio (Tabelog); grill staff unnamed'], origin: null, background: 'Per harami.jp, Kitashinchi Harami runs four shops: the main shop and 北新地別邸 in Kitashinchi, the Hozenji shop and 新大宮店 in Nara (opened May 2020). Per Tabelog, harami is a rare cut of only 2–3 kg per cow, which the house gets through its own channels; the manager visits cattle farms and picks the red meat each week with lean-cut suppliers. The official site says the interiors are by a popular shop designer and the tableware was designed and fired for the house by the fifth-generation potter of やすお陶房 in Shigaraki.', philosophy: '"Dishes that women also find easy to eat"; harami that is healthy for the body yet delicious (official site).', specialty: 'Black-wagyu harami steak grilled and flambéed at the table.',
      anecdotes: [
        { text: '"The harami steak was served rare, allowing us to enjoy it with sauce and egg yolk." — March 2026, Hozenji course.', source: R + 'B525809665/' },
        { text: '"The staff grilled it for us until the end, making for a fun dining experience." — April 2026, at the counter.', source: R + 'B527005372/' },
        { text: '"While there are various opinions about this place, I personally found it to be absolutely satisfying!" — May 2026.', source: R + 'B528528132/' },
        { text: '"All the other customers were foreigners." — June 2026, ¥9,900 course.', source: R + 'B529663481/' },
        { text: '"Highly recommend! Chef Yuji was fantastic. Above and beyond." — Google review shown on the official site.', source: SITE },
      ],
      japanese_sources_summary: '公式サイト: 北新地はらみ 法善寺店、道頓堀1-7-8 仲谷ビル1F、国産高級黒毛和牛から厳選した部位だけを出すはらみ特化店、ヘルシーで美味しい、「女性も食べやすい料理」、ワインが豊富、人気店舗デザイナーの内外装、食器は信楽焼やすお陶房の五代目安兵工窯が当店のために制作、法善寺横丁にひっそり佇む木造の店、トリップアドバイザー「ベスト・オブ・ザ・ベスト2026」高級店部門日本3位 (2026年10月6日のお知らせ)。グループサイト (harami.jp): 店舗は北新地はらみ本店、北新地別邸、法善寺店、新大宮店 (奈良、2020年5月12日オープン)、名物はらみステーキはスタッフが目の前で焼く。食べログ (店舗会員、英語版): 2018年9月21日オープン、毎日12:00〜23:30 (L.O.23:00)、不定休 (Instagramで告知)、コースは2時間制、サービス料10%、24席、禁煙、Ryuka Hattori (Ponte Vecchio出身) のプロデュース、日本初のはらみ専門、はらみは牛1頭から2〜3kg、店長が牧場を訪ね毎週赤身を厳選、コース9,900円・13,200円・16,500円。口コミ (2026年3月〜8月): 法善寺コース13,200円、はらみステーキをブランデーでフランベし卵黄・トリュフ・赤ワイン塩などで、厚切りタン、肉寿司、スタッフが焼いてくれる、他の客は全員外国人だった (6月)、評価はいろいろだが満足という声。',
      confidence: 'medium', sources: [TB, M, SITE, SITE + 'about/', GROUP, R + 'B525809665/', R + 'B526894832/', R + 'B527005372/', R + 'B527493979/', R + 'B528021337/', R + 'B528403743/', R + 'B528528132/', R + 'B529663481/', R + 'B533919592/', R + 'B534630384/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A June 2026 diner found all the other guests were from abroad, and the official site shows Google reviews in English, Dutch and French; one Dutch reviewer says the staff prepare the meat and explain how best to eat it. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-8 仲谷ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with an October 2026 notice and shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番8号 (go) 4m. Nearest record 法善寺 三平 (osaka_hozenji_sanpei, "…道頓堀1-7-9 日宝横丁ビル 1F", a different building) is about 13 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated May 2026, tax included, plus 10% service charge. Courses ¥9,900–16,500; lunch from ¥2,960 (May 2026 review). Diners report ¥6,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Black wagyu harami steak, 100 g (from 200 g)', '¥4,500', 'Harami', 'ask', 'no', 'Signature; grilled at the table.', 'harami_steak'),
      it('', '', 'Harami yukhoe-style with truffle (served heated)', '¥1,980', 'Harami', 'ask', 'no', '', 'harami_yukhoe'),
      it('', '', 'Harami and caviar spoon (served heated)', '¥1,900', 'Harami', 'ask', 'no', '', 'harami_caviar'),
      it('', '', 'Today\'s seared nigiri, 2 pieces', '¥1,900', 'Harami', 'ask', 'no', '', 'aburi_nigiri'),
      it('', '', 'Special premium thick-cut tongue', '¥3,850', 'Grill', 'ask', 'no', '', 'thick_tongue'),
      it('', '', 'Truffle tamago-kake-gohan', '¥1,800', 'Rice', 'ask', 'no', 'Most popular on the menu.', 'truffle_tkg'),
    ] }, {
    cuisine: '最高級の黒毛和牛のはらみを軸にした焼肉、日本初のはらみ専門 (食べログ)・名物の厚いはらみステーキはスタッフが席で焼き、フランベして厨房で切る。赤身は仕入れ先と毎週選び、店長が牧場を訪ねる (食べログ)・13品のコース9,900円、13,200円、16,500円 (食べログ)・アラカルト: トリュフのはらみ Yukhoe 風、はらみとキャビアのスプーン、Aburi nigiri、神戸牛・松阪牛・太田牛のサーロイン、シャトーブリアン、厚切りタン、カルビ、Horumon、ナムル、キムチ、トリュフの Tamago-kake-gohan、Sudachi 冷麺 (食べログのメニュー、2026年5月)・食器は信楽焼やすお陶房の五代目が当店のために制作 (公式サイト)・ソムリエ選びのワイン、日本酒、焼酎、カクテル',
    neighborhood: '道頓堀1-7-8、法善寺横丁の中。なんば駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。はらみステーキはタレ、卵黄、トリュフ、赤ワイン塩、わさび、塩など数種で食べ、Aburi nigiri、カルビ、冷麺、ナムルもある (食べログのメニュー、口コミ)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉の店で、ナムル、キムチ、サラダはサイド。説明はない。',
    notes: '[焼肉・法善寺横丁、黒毛和牛のはらみを席で焼く] 黒毛和牛のはらみに特化した4店の焼肉店、北新地はらみの法善寺横丁の店で、2018年9月オープン。食べログによると、イタリア料理店 Ponte Vecchio で修業した Ryuka Hattori のプロデュース。石畳の横丁に面した重い木の扉の奥で、スタッフが厚いはらみステーキを席で焼き、ブランデーでフランベし、厨房で切り分ける。卵黄、トリュフ、赤ワイン塩、タレで食べる。2026年の客の多くは13品の法善寺コースを選び、記念日向きの店と言う。評価はいろいろだと書く客も1人。店はトリップアドバイザーの「ベスト・オブ・ザ・ベスト2026」高級店部門で日本3位に選ばれたとしている。2026年6月の客は、ほかの客が全員外国人だったと書く。',
  });
}

// ================================================================ イルソーレ ロッソ IL SOLE ROSSO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001789/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://www.ilsole.jp/rosso/'; const CO = 'https://ilsole.jp/company/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'osaka_il_sole_rosso_shinsaibashi', name: 'イルソーレ ロッソ (IL SOLE ROSSO)', category: 'OMNI',
    lat: 34.672779, lng: 135.501678, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Neapolitan pizzeria whose pizza dough uses pizza flour from Italy (official site) and whose menu is mostly pizza and pasta (Tabelog menu). Meat and seafood dishes such as octopus carpaccio exist, but nothing is stated about wheat or the wood-fired oven.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegan and vegetarian options. The marinara (tomato sauce, garlic, oregano) carries no cheese (Tabelog menu); nothing is said about the dough.',
    hours_raw: 'Tue–Sun and holidays 11:30–15:00 (last order 14:30) and 17:30–22:00 (last food order 21:00, drinks 21:30); closed Monday, open when Monday is a holiday and then closed Tuesday; also 2–4 irregular days off a month (Tabelog). Reservations taken; a late arrival is treated as a cancellation (Tabelog); an October 2026 diner found a queue at opening on a Saturday and advises booking at weekends. No service charge. Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. 54 seats incl. a 6-seat counter facing the wood-fired oven; elevator, wheelchair accessible; non-smoking (Tabelog; official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-4-14, 燕京ビル 2F — 4 min from Shinsaibashi Stn exit 6',
    cuisine: 'Neapolitan pizza from a wood-fired oven brought from Naples, set in the middle of the room, with pizza flour from Italy (official site; Tabelog); certified by the Associazione Verace Pizza Napoletana in April 2007 as its 242nd member and the first in Osaka (Tabelog) · about twenty pizzas from marinara and Margherita to a buffalo-mozzarella Margherita DOC, a sun-shaped house pizza and porcini with truffle, half-and-half for ¥440 more; pasta such as rigatoni with Neapolitan ragù, octopus in tomato sauce and colatura spaghetti from Cetara; octopus carpaccio, burrata, fried seafood, Nakayama beef tagliata (Tabelog menu, November 2025) · lunch from ¥1,100 (official site) · wine, cocktails, sangria',
    website: SITE, gmaps: gm('イルソーレ ロッソ 心斎橋'), menu_url: M,
    notes: "[Italian · Shinsaibashi, wood-fired Neapolitan pizza since 2004] A Neapolitan pizzeria opened in April 2004 on the second floor of a building near Shinsaibashi Daimaru, the older of the two shops of the Il Sole group, founded in 1994. In April 2007 it became the 242nd member worldwide, and the first in Osaka, of the Associazione Verace Pizza Napoletana. Firewood is stacked by the Naples-built oven and Napoli shirts hang on the walls. Diners in 2026 praise the charred, chewy Margherita, the honey-drizzled four-cheese pizza and the octopus-in-tomato pasta; one lunch regular has come for about fifteen years. Portions are large; one diner found à la carte pasta pricey and lunch the better deal. Tabelog lists a menu in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; shop of 株式会社イル・ソーレ (official site)'], origin: null, background: 'Per the official site, the group was founded by 中西康之, a Tsuji graduate who trained in Italy from 1990, including at one-Michelin-star restaurants, and set up Il Sole in 1994; 中西 stepped down in October 2022 and stays on as adviser. The second-generation president 谷健太郎 was on the opening staff of Il Sole Rosso in 2004, became a shop manager at 26 (2009), trained in Cetara, Italy (2010), was named Kansai area leader of the Associazione Verace Pizza Napoletana and qualified as a sommelier (2013), and became president in October 2022; the site names 谷 as group head manager. The group also ran other shops over the years; its current shops are Il Sole Rosso and Il Sole TEN-3 (Tenjinbashi, 2012). The Tabelog menu calls the octopus carpaccio "a dish I learned in Cetara, Southern Italy" without naming the cook.', philosophy: '"Authentic Neapolitan pizza by a pizza-association-certified chef: chewy dough full of the fragrance of wheat" (official site).', specialty: 'Wood-fired Neapolitan pizza; octopus carpaccio with colatura.',
      anecdotes: [
        { text: '"I\'ve been a regular at this restaurant for about 15 years." — September 2026, Margherita lunch.', source: R + 'B536440851/' },
        { text: '"Upon entering, you’ll notice the firewood stacked up and Napoli uniforms displayed, which adds to the charm of its enduring atmosphere." — October 2026.', source: R + 'B537270432/' },
        { text: '"The a la carte pasta is a bit pricey, so lunch is a better option if you decide to go." — September 2026.', source: R + 'B536091895/' },
        { text: '"After that, we were served pasta and pizza, but the portions were so large that we couldn\'t finish them." — October 2026.', source: R + 'B536963833/' },
      ],
      japanese_sources_summary: '公式サイト: イルソーレ・ロッソは2004年に心斎橋でオープン、20年以上ナポリの味、ナポリピッツァ協会認定シェフの本格ナポリピッツァ、イタリアから取り寄せたピッツァ専用の小麦粉、ランチ1,100円〜、薪窯の見えるカウンター6席。会社概要 (株式会社イル・ソーレ、天神橋3-5-16、設立1994年4月): 創業者中西康之 (辻調理師専門学校卒、1990年イタリア研修、1994年創業、2022年10月退社後顧問・相談役)、2代目代表取締役兼統括店長谷健太郎 (イルソーレロッソオープニングスタッフ、2009年26歳で店長、2010年チェターラで研修、2013年真のナポリピッツァ協会関西エリアリーダー・ソムリエ、2022年代表取締役)、沿革に2004年4月ロッソ、2012年7月 TEN-3 (天神橋) など。食べログ (店舗会員、英語版): 2004年4月27日オープン、2007年4月に真のナポリピッツァ協会の世界242番目・大阪初の認定店、ナポリ製の薪窯、火〜日・祝11:30〜15:00・17:30〜22:00、月曜休み (祝日は営業、翌火曜休み)、月2〜4日の不定休、54席、エレベーターあり、多言語メニュー (英語・中国語・韓国語)、ヴィーガン・ベジタリアン対応ありの表示。口コミ (2026年9月〜10月): マルゲリータ、はちみつの4種チーズ、タコのトマトソースパスタ、約15年通う常連、量が多い、アラカルトのパスタはやや高め、週末は行列。',
      confidence: 'medium', sources: [TB, M, SITE, CO, R + 'B536091895/', R + 'B536440851/', R + 'B536541262/', R + 'B536844784/', R + 'B536963833/', R + 'B537098255/', R + 'B537192155/', R + 'B537270432/', R + 'B537993205/', R + 'B538343074/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a multilingual menu (English, Traditional and Simplified Chinese, Korean) with photos and a digital menu. No evidence on English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-4-14 燕京ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番14号 (go) 3m. Same building as 中華旬彩 森本 (osaka_chuka_shunsai_morimoto, "…心斎橋筋1-4-14 燕京ビル B1F"), whose pin is about 7 m away, so the two are not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, SITE],
    price_note: 'Tabelog menu last updated November 2025, tax included; no service charge. Lunch from ¥1,100 (official site); September 2026 diners paid ¥1,419 and ¥1,639 for lunch sets. Diners report ¥1,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Margherita classica', '¥1,749', 'Pizza', 'no', 'no', '', 'margherita'),
      it('', '', 'Buffalo-mozzarella Margherita', '¥2,189', 'Pizza', 'no', 'no', 'Recommended.', 'margherita_bufala'),
      it('', '', 'Marinara (tomato sauce, garlic, oregano)', '¥1,320', 'Pizza', 'no', 'ask', 'No cheese.', 'marinara'),
      it('', '', 'IL SOLE ROSSO sun-shaped pizza', '¥2,420', 'Pizza', 'no', 'no', 'House original.', 'sun_pizza'),
      it('', '', 'Octopus in tomato sauce, Santa Lucia style, spaghetti', '¥1,859', 'Pasta', 'no', 'no', '', 'octopus_tomato_pasta'),
      it('', '', 'Octopus carpaccio with colatura dressing', '¥2,618', 'Antipasto', 'ask', 'no', 'Learned in Cetara (menu).', 'octopus_carpaccio'),
    ] }, {
    cuisine: 'ナポリから運んだ薪窯を店の真ん中に置いて焼くナポリピッツァ、小麦粉はイタリアから取り寄せたピッツァ専用 (公式サイト、食べログ)・2007年4月に真のナポリピッツァ協会の世界242番目、大阪初の認定店 (食べログ)・マリナーラ、マルゲリータから水牛モッツァレラのマルゲリータ DOC、太陽の形の店オリジナル、ポルチーニとトリュフまで約20種、ハーフ&ハーフは440円増し。パスタはナポリ風ラグーのリガトーニ、タコのトマトソース、チェターラのコラトゥーラのスパゲッティなど。タコのカルパッチョ、ブッラータ、魚介のフリット、Nakayama 牛のタリアータ (食べログのメニュー、2025年11月)・ランチ1,100円〜 (公式サイト)・ワイン、カクテル、サングリア',
    neighborhood: '心斎橋筋1-4-14 燕京ビル 2F。心斎橋駅6番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。ピッツァ生地はイタリアから取り寄せたピッツァ専用の小麦粉 (公式サイト)、メニューはピッツァとパスタが中心 (食べログのメニュー)。タコのカルパッチョなど肉や魚介の皿もあるが、小麦や薪窯についての説明はない。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアン対応ありの表示。マリナーラ (トマトソース、にんにく、オレガノ) はチーズなし (食べログのメニュー)。生地の説明はない。',
    notes: '[イタリアン・心斎橋、2004年からの薪窯ナポリピッツァ] 心斎橋大丸近くのビルの2階に2004年4月に開いたナポリピッツァの店で、1994年創業のイルソーレグループの2店のうち古いほう。2007年4月、真のナポリピッツァ協会の世界242番目、大阪初の認定店になった。ナポリ製の薪窯のそばには薪が積まれ、壁にはナポリのユニフォーム。2026年の口コミでは、焦げ目のあるもちもちのマルゲリータ、はちみつをかけた4種チーズ、タコのトマトソースのパスタが好評で、約15年ランチに通う常連も。量は多く、アラカルトのパスタはやや高めでランチがお得という声も。食べログでは英語・中国語・韓国語のメニューがあるとしている。',
  });
}

// ================================================================ 黒門 轍 Wadachi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27012609/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://www.kuromon-wadachi.jp/';
  const H = day(['11:30', '15:00'], ['17:30', '23:30']);
  put({
    id: 'osaka_kuromon_wadachi_nipponbashi', name: '黒門 轍 (Wadachi)', category: 'OMNI',
    lat: 34.66637, lng: 135.505814, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is dumplings, spring rolls, noodles and sauced stir-fries (Tabelog menu); fried rice, steamed chicken and seafood dishes are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese tavern built on meat and seafood; no vegan or vegetarian options are described.',
    hours_raw: 'Tue–Sun 11:30–15:00 and 17:30–23:30 (last order 23:00); closed Monday, or the next weekday when Monday is a holiday (Tabelog; official site). Lunch last order 14:30 per Tabelog, 14:45 per the official site; a September 2026 diner says lunch is served until 2 PM. Reservations taken, lunch included (Tabelog; September 2026 review). Cards (VISA, Master, JCB, AMEX) and PayPay (Tabelog); the official site says e-money is not accepted at lunch. 38 seats: 6 counter, 20 table, 12 tatami, private rooms for 4–20; smoking allowed (Tabelog). Delivery and takeout (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 1-18-4, 南地ビル B1F — 1 min from Nippombashi Stn exit 5; 5 min from Namba Stn',
    cuisine: 'Seafood-rich Cantonese cooking by an owner who trained for many years under a former embassy head chef; domestic vegetables and fish bought at nearby Kuromon Market (official site) · house shumai of domestic pork belly, Thai vannamei shrimp and Awaji onion, hand-wrapped and steamed, with a yuzu-pepper dipping sauce (official site) · from the Tabelog menu (December 2024): shrimp and chive gyoza, xiaolongbao, spring rolls in egg wrappers, mapo tofu, sweet and sour pork, shrimp with mayonnaise, shark-fin soup, char siu fried rice, salmon and lettuce fried rice, noodles, almond tofu, sesame balls, daily specials such as Peking duck · set lunches from about ¥1,100 with free rice refills · all-you-can-drink courses',
    website: SITE, gmaps: gm('黒門 轍 日本橋'), menu_url: M,
    notes: "[Chinese · Nipponbashi, house shumai a minute from the station] A basement Chinese tavern a minute from Nippombashi Station, near Kuromon Market, where the owner, trained for many years under a former embassy head chef, cooks seafood-rich Cantonese dishes with fish bought at the market. The hand-wrapped shumai of pork and shrimp with a yuzu-pepper dip is the name dish, and several lunch regulars come back monthly for it; lunch sets of shumai with kara-age and soup draw a line, though bookings are taken. At night it turns into an izakaya with half-size plates and all-you-can-drink courses. Smoking is allowed (Tabelog).",
    chef_bio: { chef_name: null, roles: ['Owner (店主), unnamed, trained for many years under a former embassy head chef (official site)'], origin: null, background: 'Per the official site, the owner cooks Cantonese food full of seafood, picks domestic vegetables and goes directly to nearby Kuromon Market for fish, sometimes serving live fish. Tabelog adds Chinese ingredients from Kobe and seafood from Toyosu and Kuromon. The company introduced a scholarship-repayment support scheme for staff from April 2024 (official site).', philosophy: '"Every dish made carefully, with no compromise in pursuing the flavour of the ingredients" (official site).', specialty: 'Hand-wrapped shrimp and pork shumai with yuzu-pepper sauce.',
      anecdotes: [
        { text: '"The shumai is incredibly delicious—possibly the best I\'ve ever had!" — September 2026, sixth visit.', source: R + 'B332029027/' },
        { text: '"All sets include Kara-age, and it would be perfect if there were sets without fried items as well." — September 2026.', source: R + 'B332029027/' },
        { text: '"There’s usually a long line, but I made a reservation through Tabelog this time, so it was a breeze." — September 2026, lunch.', source: R + 'B471657985/' },
        { text: '"The complimentary tsukune (grilled chicken meatball) is quite large, providing a satisfying experience." — October 2026, dinner.', source: R + 'B537668907/' },
      ],
      japanese_sources_summary: '公式サイト: 中華酒場 黒門-轍-（わだち）、日本橋1-18-4 南地ビルB1階、元大使館料理長の下で長年修行を積んだ店主の海鮮たっぷりの広東料理、野菜は国産、魚は黒門市場で直接仕入れ、時には活魚も、名物しゅうまいは国産豚バラ肉・タイ産バナメイ海老・淡路産たまねぎを手作業で包み蒸しあげ、和風ベースのタレに柚子コショウの自家製付けダレ、飲み放題付きコース、宴会25〜35名、11:30〜15:00 (L.O.14:45)・17:30〜23:30 (L.O.23:00)、月曜休み (祝日は翌平日)、2024年4月から奨学金返還支援制度。食べログ (店舗会員、英語版): 38席 (カウンター6、テーブル20、座敷12)、個室、喫煙可、デリバリー・テイクアウト、ランチ670円〜約14種、ご飯おかわり無料、しゅうまい3個230円〜 (2024年12月のメニューでは290円)、神戸の中華食材、豊洲と黒門の魚介。口コミ (2023年〜2026年10月): しゅうまいが一番の人気、月に一度通う客、ランチは行列だが食べログで予約可、名物定食1,300円、しゅうまい定食1,180円、日替わり1,100円、夜は半量の皿も、サービスの Tsukune。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B332029027/', R + 'B436278541/', R + 'B471657985/', R + 'B513321443/', R + 'B533178205/', R + 'B533632754/', R + 'B535861501/', R + 'B537668907/', R + 'B538225624/', R + 'B538383593/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site links a course menu PDF labelled 中国語・English (not opened). No English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-18-4 南地ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目18番4号 (go) 7m. Nearest record 鮨 あまと (osaka_sushi_amato_ura_namba, "…日本橋1-19-6 福喜ビル 2F", a different building) is about 14 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, SITE, R + 'B538383593/', R + 'B537668907/'],
    price_note: 'Tabelog menu last updated December 2024; October 2026 diners paid more (shumai about ¥380 for three against ¥290 on the menu). Set lunches ¥1,100–1,300 (October 2026). Courses with all-you-can-drink ¥5,300–8,000 (Tabelog). Diners report ¥1,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'House shrimp and pork shumai, 3 pieces, yuzu-pepper sauce', '¥380', 'Signature', 'no', 'no', 'About ¥380 in October 2026; ¥290 on the 2024 menu.', 'shumai'),
      it('', '', 'Famous set lunch: 6 shumai, shrimp mayo, kara-age, rice, soup', '¥1,300', 'Lunch', 'no', 'no', 'October 2026.', 'shumai_set_lunch'),
      it('', '', 'Mapo tofu', '¥980', 'Meat', 'ask', 'no', 'October 2026.', 'mapo_tofu'),
      it('', '', 'Salmon and lettuce crispy fried rice', '', 'Rice', 'ask', 'no', 'Menu 2024: ¥980.', 'salmon_fried_rice'),
      it('', '', 'Shrimp and chive fried gyoza', '', 'Dim sum', 'no', 'no', 'Menu 2024: ¥580.', 'shrimp_gyoza'),
    ] }, {
    cuisine: '元大使館料理長の下で長年修行を積んだ店主の海鮮たっぷりの広東料理。野菜は国産、魚は近くの黒門市場で仕入れる (公式サイト)・名物しゅうまいは国産豚バラ肉、タイ産バナメイ海老、淡路産たまねぎを手で包んで蒸し、柚子コショウの付けダレで (公式サイト)・食べログのメニュー (2024年12月) から: 海老とニラの焼き Gyoza、小籠包、卵の皮の春巻き、麻婆豆腐、酢豚、海老マヨ、フカヒレスープ、焼豚チャーハン、鮭とレタスのチャーハン、麺、杏仁豆腐、ごま団子、北京ダックなどの日替わり・ご飯おかわり無料のランチ定食は約1,100円から・飲み放題付きコース',
    neighborhood: '日本橋1-18-4 南地ビル B1F。日本橋駅5番出口から徒歩1分、なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。Gyoza、春巻き、麺、タレのある炒め物が多い (食べログのメニュー)。チャーハン、蒸し鶏、魚介の皿の説明はない。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介が中心の中華酒場で、ヴィーガンやベジタリアンの対応の説明はない。',
    notes: '[中華・日本橋、駅1分の名物しゅうまい] 日本橋駅から1分、黒門市場近くの地下の中華酒場。元大使館料理長の下で長年修行した店主が、市場で仕入れた魚を使い、海鮮たっぷりの広東料理を作る。名物は豚肉と海老を手で包んだしゅうまいで、柚子コショウのタレで食べる。これを目当てに毎月通うランチの常連もいる。しゅうまいに Kara-age とスープの付くランチ定食には行列ができるが、予約もできる。夜は半量の皿や飲み放題付きコースのある居酒屋に。喫煙可 (食べログ)。',
  });
}

save();
