// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 27.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 天天有 四条烏丸店 (26003259): same-concept branch of a brand already in data (kyr_tentenyu_honten).
//   + 京都祇園茶寮 Kyoto Gion Saryo (bread-and-tea café in a 100-year-old storehouse by Yasaka Shrine; since 2020)
//   + やよいComodo — the eat-in café of ちりめん山椒 京佃煮舗 やよい 本店 (Tabelog: やよい 本店), by Yasaka Shrine. The やよい brand’s
//     other outlets are retail counters in department stores (official shop list); this is its only place to eat, so drafted.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 寿斗 ふかがわ Sushi Fukagawa (sushi counter in a machiya near Teramachi-Ebisugawa; since 2013, formerly 寿司 深川龍丈)
//   - ニューベイブ 京都 (26044419): chain — Baybridge’s tonkatsu brand had five shops (Osaka, Sendai) before Kyoto opened in March 2026
//     (press release), and the crawl holds three Osaka branches.
//   + だいしめ Daishime (fishmonger’s seafood izakaya at the Kyoto Central Wholesale Market)
//   None of the four drafted is in data/kyoto.json: grep by id, name (祇園茶寮/Saryo, やよい/Yayoi — only やよい軒 chain listings exist
//   in the crawl, Comodo, ふかがわ/深川/Fukagawa, だいしめ/Daishime) and address (祇園町南側506, 清井町481, 松本町576-2, 朱雀宝蔵町44)
//   found none; kyoto_hakubi shares lot 清井町481 with やよい (see pin).
//   Service charges checked against Tabelog’s Japanese original: 祇園茶寮 「サービス料・チャージ なし」; やよい none listed; ふかがわ
//   「サービス料なし」; だいしめ none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26003259', 'same-concept branch of a brand already in data (kyr_tentenyu_honten)');
skip('26044419', 'chain: ニューベイブ (株式会社Baybridge) had five shops in Osaka and Sendai before the Kyoto shop opened in March 2026; three Osaka branches in the crawl');

// ================================================================ 京都祇園茶寮
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034669/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-saryou.kyoto/'; const MENU = SITE + 'menu/'; const RECRUIT = SITE + 'news/recruit/';
  const WD = day(['09:00', '15:30']); const WE = day(['08:00', '16:30']);
  put({
    id: 'kyoto_gion_saryo', name: '京都祇園茶寮 (Kyoto Gion Saryo)', category: 'OMNI',
    lat: 35.00231523787718, lng: 135.77846447032223, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery café built around thick toast of its house-baked bread, with cakes and hot sandwiches (official menu; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Teas and lattes can be made with soy milk (August 2026), but the bread sets come with butter and egg salad; nothing vegan is marked (official menu; reviews).',
    hours_raw: 'Weekdays 9:00–15:30; Saturday and Sunday 8:00–16:30 (Tabelog); the official site gives 9:00–17:00 (last order 16:30). Closing days are posted monthly on the official site. No service or cover charge (Tabelog’s Japanese original: 「サービス料・チャージ なし」). The bread sets are limited to about 20–30 a day, so come early (November 2025; March 2026). Seating on two floors, including sofas; non-smoking; cards (JCB, AMEX), transit IC, iD and QR (Tabelog; 2026 reviews). Whole-building hire with food for groups (official site). A renovated storehouse about 100 years old in front of the south gate of Yasaka Shrine; about 5 min from the Higashiyama-Yasui bus stop (official site). Opened 1 August 2020 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Yasaka Shrine south gate — 5 min from Higashiyama-Yasui bus stop',
    cuisine: 'Breakfast and tea café whose signature is 蔵出し食パン, a chewy loaf baked in the shop (official site) · freshly baked plain loaf with salad and soup ¥1,380 (November 2025); matcha and plain loaf set ¥2,650 with salad, corn soup, salted butter, egg salad and yuzu jam (June 2026); sansho corned-beef hot sandwich; seasonal salad; morning soup; three patissier’s cakes with a drink about ¥2,000 · drinks: matcha latte from 八十八良葉舎, hōjicha latte from 一保堂, matcha espresso ¥1,080, burnt-caramel latte, Mlesna teas, sake-lees lemonade, plum juice; monaka with milk ice cream (official menu; 2025–2026 reviews)',
    website: SITE, gmaps: gm('京都祇園茶寮 八坂神社'), menu_url: MENU,
    notes: "[Café · Yasaka Shrine, thick toast in an old storehouse] A two-floor café in a century-old storehouse facing the south gate of Yasaka Shrine, open from 8:00 at weekends — handy before the crowds. The draw is a chewy house-baked loaf served thick with butter, egg salad, yuzu jam or sweet bean paste, plus soup and salad; only 20–30 sets a day. Matcha espresso and Ippodo hōjicha lattes for later. Upstairs looks out toward the shrine. Closing days vary; check the site.",
    chef_bio: { chef_name: null, roles: ['Operator not named'], origin: null,
      background: 'Per the official site: a select tea house that aims to hand Kyoto’s history and culture down to the next generation (its theme is "紡ぐ", to spin a thread); a renovated storehouse about 100 years old near the main gate of Yasaka Shrine, with 13 staff in 2023 (recruiting page). The loaf 蔵出し食パン is baked in the shop’s own workshop. Opened 1 August 2020 (Tabelog).',
      philosophy: 'Per the official site: to spin Kyoto’s history and culture into the future.',
      specialty: 'Thick toast of the house-baked 蔵出し食パン.',
      anecdotes: [
        { text: 'A March 2026 visitor who came at 8:00 near Yasaka Shrine got one of the roughly 30 bread sets.', source: R + 'B525473448/' },
        { text: 'An August 2026 guest had the matcha espresso made with soy milk.', source: R + 'B534297808/' },
        { text: 'An April 2026 pair wished the only dessert option, a three-cake set, could be varied.', source: R + 'B525773921/' },
      ],
      japanese_sources_summary: '公式サイト (gion-saryou.kyoto): 京都祇園茶寮、京都の文化を世界に伝えるセレクト茶寮、テーマは京都の想いを後世に紡ぐこと、八坂神社南楼門前、東山区祇園町南側506、9:00〜17:00 (L.O. 16:30)、市バス東山安井から徒歩約5分、定休日は毎月お知らせ、一棟まるごとプラン。メニュー: 焼きたて蔵出し食パン、季節のサラダ、お目覚めスープ、山椒コンビーフのホットサンド、パティシエのおすすめケーキ3種とドリンク、八十八良葉舎の抹茶ラテ、一保堂のほうじ茶ラテ、抹茶エスプレッソ、ムレスナティー。求人 (2023年): 築100年の蔵を改装、スタッフ13名。食べログ: カフェ・パン、平日9:00〜15:30、土日8:00〜16:30、サービス料・チャージなし、カード・交通系IC・iD・QR 可、禁煙、2020年8月1日オープン。口コミ (2025年9月〜2026年9月、英語): 食パン1,380円、抹茶とプレーンの食パン2,650円、1日20〜30食、抹茶エスプレッソ1,080円、豆乳に変更可。',
      confidence: 'medium', sources: [TB, SITE, MENU, RECRUIT, R + 'B514197154/', R + 'B517418188/', R + 'B518093807/', R + 'B521039457/', R + 'B521059991/', R + 'B524054964/', R + 'B524281568/', R + 'B525473448/', R + 'B525773921/', R + 'B530035020/', R + 'B534297808/', R + 'B536547928/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors in the morning; order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側506',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (closing-day notices 2026) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002315, 135.778464); cross-checked: GSI 京都府京都市東山区祇園町南側506番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B518093807/', R + 'B530035020/'],
    price_note: 'Items from the official menu; prices from November 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('焼きたて蔵出し食パン (プレーン）', '', 'Freshly baked house loaf (plain) with toppings, salad and soup', '¥1,380', 'Bread', 'no', 'no', 'About 20–30 a day.', 'kuradashi_plain'),
      it('', '', 'Matcha and plain loaf set with salad, corn soup, butter, egg salad and yuzu jam', '¥2,650', 'Bread', 'no', 'no', 'June 2026.', 'kuradashi_matcha_plain'),
      it('山椒コンビーフのホットサンド', '', 'Sansho corned-beef hot sandwich', '', 'Food', 'no', 'no', '', 'sansho_cornedbeef'),
      it('パティシエのおすすめケーキ 3 種', '', 'Three patissier’s cakes with a drink', '', 'Sweets', 'no', 'no', 'About ¥2,000 (April 2026).', 'cake_trio'),
      it('抹茶エスプレッソ', '', 'Matcha espresso', '¥1,080', 'Drinks', '', 'ask', 'Soy milk on request.', 'matcha_espresso'),
    ] }, {
    cuisine: '店内の工房で焼くもちもちの「蔵出し食パン」が看板の朝食とお茶のカフェ (公式サイト)・焼きたてのプレーン食パンとサラダとスープ1,380円 (2025年11月)、抹茶とプレーンの食パンのセットにサラダ、コーンスープ、有塩バター、たまごサラダ、柚子ジャムで2,650円 (2026年6月)、山椒コンビーフのホットサンド、季節のサラダ、お目覚めスープ、パティシエのおすすめケーキ3種とドリンクで2,000円ほど・ドリンク: 八十八良葉舎の抹茶ラテ、一保堂のほうじ茶ラテ、抹茶エスプレッソ1,080円、焦がしキャラメルラテ、ムレスナティー、酒粕のレモネード、梅ジュース。ミルクアイスの最中も (公式メニュー、2025〜2026年の口コミ)',
    neighborhood: '祇園、八坂神社南楼門前。東山安井バス停から徒歩5分',
    gf_detail: 'グルテンフリー不可。店で焼く食パンの厚切りトーストが中心で、ケーキやホットサンドも (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ラテは豆乳に変えられる (2026年8月) が、食パンのセットにはバターやたまごサラダが付く。ヴィーガンの表示はない (公式メニュー、口コミ)。',
    notes: '[カフェ・八坂神社、古い蔵の厚切りトースト] 八坂神社の南楼門前、築100年ほどの蔵を改装した2階建てのカフェ。週末は朝8時からで、混む前に寄りやすい。目当ては店で焼くもちもちの食パンの厚切りで、バター、たまごサラダ、柚子ジャムや餡を添え、スープとサラダ付き。1日20〜30食のみ。その後は抹茶エスプレッソや一保堂のほうじ茶ラテを。2階からは神社の方を望める。定休日は月ごとに変わるのでサイトで確認を。',
  });
}

// ================================================================ やよいComodo (ちりめん山椒 京佃煮舗 やよい 本店)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007753/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yayoi-ojako.co.jp/'; const CAFE = SITE + 'cafe'; const INFO = SITE + 'info'; const SHOP = SITE + 'shop';
  const RENAME = SITE + 'archives/8275'; const WARABI = SITE + 'archives/8290';
  const H = day(['09:30', '15:00']);
  put({
    id: 'kyoto_yayoi_comodo', name: 'やよいComodo (やよい 本店, Yayoi)', category: 'MOM_AND_POP',
    lat: 35.00184, lng: 135.77839694031775, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The ojako is chirimen-jako simmered in soy sauce, and the udon is wheat; warabi-mochi and green tea are also served; no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the meals are built on chirimen-jako (baby sardines), and the udon broth is made from the simmered ojako (official site).',
    hours_raw: 'Café 9:30–15:00 (last order 14:00); closed Tuesday, Wednesday and irregularly (official café page). Tabelog instead lists eat-in at weekends and holidays 9:30–14:00 — check before going. The shop itself is open 9:30–17:00 daily except 1–2 January (official site; Tabelog). Ojako-zen is limited to 12 a day; matcha warabi-mochi from 11:00 while it lasts (official site). No service charge listed (Tabelog). 12 places on floor cushions in the back, past the shop counter (Tabelog; July 2026). Cards (VISA, Master, JCB, AMEX) and QR (Tabelog). In the はなれ behind the main shop, about 100 m south of the south gate of Yasaka Shrine on Shimogawara-dori (official site). The café opened in 2004 and was renamed やよいComodo on 1 October 2026 (official site).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shimogawara-dori — 100 m south of Yasaka Shrine’s south gate',
    cuisine: 'Café of a chirimen-sansho maker, serving its ojako — baby sardines simmered with sansho — with rice cooked in a hagama (official site) · おじゃこ膳 ¥1,100: ojako with fresh rice, soup, dashimaki, pickles, grated-sansho miso, condiments and dessert, 12 a day · sweet kitsune udon in an ojako broth with an ojako rice ball ¥1,210 · summer sansho shaved ice ¥880 · matcha warabi-mochi made by monna of Kiyomizu ¥1,100 · sansho tonic ¥660 · green tea of 一保堂 Uji-shimizu ¥550 (official café page, tax included) · the shop sells ojako, Kurama sansho and seasonal tsukudani (official site)',
    website: SITE, gmaps: gm('やよい 本店 祇園下河原'), menu_url: CAFE,
    notes: "[Café · Yasaka Shrine, Kyoto's chirimen-sansho in a back-room café] Behind the sales counter of Yayoi, a Gion maker of chirimen-sansho (baby sardines simmered with Japanese pepper), a small floor-cushion room serves the house ojako as a set meal with rice from an iron hagama, soup and dashimaki (¥1,100, 12 a day), or in a sweet fox udon. In summer there is sansho shaved ice. Buy a bag of ojako on the way out — a classic Kyoto souvenir. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: 'Katsuji Nakanishi (founder)', roles: ['Founder, per Tabelog’s official introduction; company head 代表取締役 中西 良仁 (official site)'], origin: null,
      background: 'Per the official site: the founder was a former cook who began making ojako at the family home in 1982; it spread as a gift among the tea houses of Gion; 有限会社やよい was set up in 1988, the main shop opened on Shimogawara-dori by Yasaka Shrine in 1994, a factory followed, and the café opened in the はなれ behind the shop in 2004; shops in Isetan Kyoto (2002) and Shinjuku, and department-store fairs nationwide; 65 staff. Tabelog’s official introduction names the founder Katsuji Nakanishi, who wondered what could be made with one pot, and says the founder’s son now selects the chirimen-jako from Kyushu and Shikoku, paired with Tanba sansho.',
      philosophy: 'Per the official site: "美味しい物は素材が全て" — good food is all in the ingredients.',
      specialty: 'Ojako-zen; ojako chirimen-sansho.',
      anecdotes: [
        { text: 'An October 2026 regular of 30 years bought eight bags of ojako, then ate it in the back with fresh rice and miso soup.', source: R + 'B537940251/' },
        { text: 'A July 2026 visitor tried the sansho shaved ice, topped with fruit and a sansho-yuzu syrup, with matcha on the side.', source: R + 'B532365971/' },
        { text: 'A February 2025 customer who first tried the ojako about 20 years ago found that the shop now serves meals as well.', source: R + 'B502335633/' },
      ],
      japanese_sources_summary: '公式サイト (yayoi-ojako.co.jp): ちりめん山椒 京佃煮舗 やよい、初代は元調理人、1982年創業、1988年有限会社やよい設立、1994年八坂神社下河原通りに本店、2001年本社工場、2002年 JR京都伊勢丹、2004年本店奥 (はなれ) にカフェ併設、2007年伊勢丹新宿店、代表取締役 中西良仁、従業員65名、「美味しい物は素材が全て」。カフェ「やよいのはなれ Comodo」: 祇園下河原清井町481 (八坂神社南楼門を南へ100m)、9:30〜15:00 (L.O. 14:00)、火・水・不定休、おじゃこ膳1,100円 (1日12食)、やよいの甘きつねうどん1,210円 (おじゃこのおにぎり付)、山椒氷880円 (夏季)、抹茶わらび餅1,100円 (清水 monna)、山椒トニック660円、一保堂のグリーンティ550円。2026年10月1日にやよいカフェから「やよいComodo」に改称。食べログ: やよい 本店、その他、9:30〜17:00、イートインは土日祝9:30〜14:00、1月1・2日休み、12席 (座布団)、カード・QR 可、公式紹介: 創業者 Katsuji Nakanishi、息子がちりめんじゃこを九州・四国から選び丹波の山椒と合わせる。口コミ (2024〜2026年、英語): 奥のイートイン、炊きたてご飯とおじゃこ、山椒氷。',
      confidence: 'high', sources: [TB, SITE, CAFE, INFO, SHOP, RENAME, WARABI, R + 'B482065465/', R + 'B493977779/', R + 'B499853758/', R + 'B502335633/', R + 'B514327183/', R + 'B516588688/', R + 'B521367256/', R + 'B529457360/', R + 'B531808516/', R + 'B532223357/', R + 'B532365971/', R + 'B537940251/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English pages on the official site; staff are warm with regulars and tourists alike.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園下河原清井町481',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (café renamed 1 October 2026; news November 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00187, 135.778397); GSI resolves the full address only to 祇園町南側, so cross-checked as 京都府京都市東山区清井町481番地 (lot) 17m; the Tabelog point was 5m from kyoto_hakubi (清井町481-1), so moved about 3m south to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [CAFE, WARABI],
    price_note: 'Official café menu (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('おじゃこ膳', '', 'Ojako set: chirimen-sansho with hagama rice, soup, dashimaki, pickles, sansho miso and dessert', '¥1,100', 'Meals', 'ask', 'no', '12 a day.', 'ojako_zen'),
      it('やよいの甘きつねうどん', '', 'Sweet kitsune udon in ojako broth, with an ojako rice ball', '¥1,210', 'Meals', 'no', 'no', '', 'kitsune_udon'),
      it('山椒氷', '', 'Sansho shaved ice with matcha syrup', '¥880', 'Sweets', 'ask', 'ask', 'Summer only.', 'sansho_kori'),
      it('抹茶 わらび餅', '', 'Matcha warabi-mochi with matcha kinako', '¥1,100', 'Sweets', 'ask', 'ask', 'From 11:00, limited.', 'matcha_warabi'),
      it('山椒トニック', '', 'Sansho tonic', '¥660', 'Drinks', '', 'ask', '', 'sansho_tonic'),
    ] }, {
    cuisine: 'ちりめん山椒の店のカフェで、店のおじゃこ (ちりめんじゃこを山椒と炊いたもの) を羽釜で炊いたご飯とともに (公式サイト)・おじゃこ膳1,100円: おじゃこ、炊き立てのご飯、椀物、出し巻、漬物、おろし山椒味噌、薬味、デザート、1日12食・おじゃこを炊いた出汁の甘きつねうどん、おじゃこのおにぎり付き1,210円・夏の山椒氷880円・清水 monna の本わらび餅の抹茶わらび餅1,100円・山椒トニック660円・一保堂の宇治清水のグリーンティ550円 (公式カフェページ、税込)・店ではおじゃこ、鞍馬山椒、季節の佃煮を販売 (公式サイト)',
    neighborhood: '祇園、下河原通。八坂神社南楼門から南へ100m',
    gf_detail: '要確認。おじゃこはちりめんじゃこを醤油で炊いたもので、うどんは小麦。わらび餅やグリーンティもある。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。料理はちりめんじゃこが中心で、うどんの出汁もおじゃこを炊いたもの (公式サイト)。',
    notes: '[カフェ・八坂神社、ちりめん山椒の店の奥のカフェ] 祇園のちりめん山椒の老舗やよいの売り場の奥、座布団の小さな部屋で、店のおじゃこを羽釜のご飯、椀物、出し巻とともに膳で (1,100円、1日12食)、または甘いきつねうどんで。夏は山椒のかき氷。帰りにはおじゃこを一袋、京都の定番のお土産に。火水休み。',
  });
}

// ================================================================ 寿斗 ふかがわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006733/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=7130001045628';
  const H = day(['12:00', '15:00'], ['16:00', '21:00']);
  put({
    id: 'kyoto_sushi_fukagawa', name: '寿斗 ふかがわ (Sushi Fukagawa)', category: 'OMNI',
    lat: 35.01505754786536, lng: 135.76675470045913, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Each piece comes pre-seasoned with salt or soy sauce, and the rice is cooked in katsuobushi dashi; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omakase sushi, with rice cooked in katsuobushi dashi (Tabelog official course descriptions).',
    hours_raw: 'Lunch 12:00–15:00 (last entry 14:00); dinner 16:00–21:00 (last entry 19:00); open daily (Tabelog). Omakase courses only on weekends (October 2026); bookings advised. No service charge (Tabelog’s Japanese original: 「サービス料なし」). 12 counter seats; private hire for up to 12; non-smoking; children welcome, kids’ menu, strollers OK; cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transit IC, iD, QUICPay and QR including PayPay, Alipay and WeChat Pay (Tabelog). Many overseas guests (December 2025; October 2026). A machiya with a noren near Teramachi-Ebisugawa, 488 m from Kyoto-Shiyakusho-mae Stn (Tabelog; August 2025). Opened 1 March 2013 as 寿司 深川龍丈 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-Ebisugawa — 488 m from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Omakase sushi on rice cooked in katsuobushi dashi, each piece seasoned so no dipping is needed (Tabelog; reviews) · courses (Tabelog, tax included): lunch omakase ¥15,500; dinner omakase ¥23,000 and ¥28,500 · reviewers also report a lunch omakase at ¥9,500 (January and July 2026) and a 13-piece lunch at ¥8,800 · e.g. Niigata tuna, Akashi sea bream, kama-toro, sayori, Hokkaido uni, monkfish liver, scallops, a California-style yuba roll with uni, steamed uni roll, marinated sea bream, eel, grilled anago (2025–2026 reviews)',
    website: null, gmaps: gm('寿斗 ふかがわ 京都'), menu_url: TB,
    notes: "[Sushi · Teramachi-Ebisugawa, dashi-cooked rice in a machiya] A twelve-seat counter in a quiet machiya north of City Hall, where the rice is cooked in katsuobushi dashi and every piece arrives already seasoned with salt or soy. Omakase runs from about ¥9,500 at lunch to ¥28,500 at night: Niigata tuna, Akashi sea bream, kama-toro, Hokkaido uni and a melting grilled anago to finish. Popular with overseas visitors. Open daily; book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; works with an apprentice (October 2026); operator 株式会社ふかがわ (invoice holder)'], origin: null,
      background: 'Per Tabelog: opened 1 March 2013 under the former name 寿司 深川龍丈; a sushi-only course using rice cooked in katsuobushi dashi and carefully chosen fish. The invoice number belongs to 株式会社ふかがわ (head office in 東山区泉涌寺門前町). An October 2026 reviewer was served by the chef and an apprentice.',
      philosophy: 'Per Tabelog’s official introduction: traditional sushi made with care in a calm setting, a short step from the city’s bustle.',
      specialty: 'Omakase nigiri on dashi-cooked rice; grilled anago.',
      anecdotes: [
        { text: 'A January 2026 diner heard from the chef that grilled anago is the hardest piece to make and the chef’s own favourite.', source: R + 'B520891140/' },
        { text: 'A December 2025 guest found the owner curt with newcomers but chatty with regulars, and still recommended a visit.', source: R + 'B519724161/' },
        { text: 'A May 2026 birthday guest, a sushi novice, noticed the hidden knife work on the white and silver-skinned fish.', source: R + 'B528477457/' },
      ],
      japanese_sources_summary: '食べログ: 寿斗 ふかがわ (旧店名 寿司 深川龍丈)、寿司・日本料理・かに、中京区松本町576-2 ルレーブ寺町夷川、京都市役所前駅から488m、12:00〜15:00 (最終入店14:00)、16:00〜21:00 (最終入店19:00)、サービス料なし、カウンター12席、12名まで貸切可、禁煙、子供可・キッズメニュー、カード・電子マネー・QR (Alipay・WeChat Pay 含む) 可、2013年3月1日オープン、インボイス T7130001045628 (株式会社ふかがわ)。コース: 昼のおまかせ15,500円、夜のおまかせ23,000円・28,500円、鰹節の出汁で炊いたシャリ。口コミ (2025〜2026年、英語): 昼のおまかせ9,500円、13貫8,800円、一貫ごとに塩や醤油で味付け、新潟の鮪、明石の鯛、カマトロ、北海道の雲丹、穴子、海外からの客が多い。',
      confidence: 'medium', sources: [TB, INV, R + 'B461324874/', R + 'B480978299/', R + 'B504385876/', R + 'B511696825/', R + 'B519494505/', R + 'B519692991/', R + 'B519724161/', R + 'B520891140/', R + 'B528477457/', R + 'B530911801/', R + 'B531317110/', R + 'B536940682/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; pieces come pre-seasoned.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区松本町576-2 ルレーブ寺町夷川',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with bookable courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015058, 135.766755); cross-checked: GSI 京都府京都市中京区松本町576番地 (lot) 58m; 12m from mp_soba_roujina; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531317110/', R + 'B461324874/'],
    price_note: 'Course prices from Tabelog (tax included), checked November 2026; the ¥9,500 lunch from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase (as reported by reviewers)', '¥9,500', 'Lunch', 'ask', 'no', 'January and July 2026.', 'lunch_9500'),
      it('', '', 'Lunch omakase course', '¥15,500', 'Lunch', 'ask', 'no', '', 'lunch_omakase'),
      it('', '', 'Dinner omakase course', '¥23,000', 'Dinner', 'ask', 'no', '', 'dinner_23000'),
      it('', '', 'Dinner omakase course', '¥28,500', 'Dinner', 'ask', 'no', '', 'dinner_28500'),
    ] }, {
    cuisine: '鰹節の出汁で炊いたシャリのおまかせの寿司で、一貫ずつ味付けされていて醤油を付けずに食べる (食べログ、口コミ)・コース (食べログ、税込): 昼のおまかせ15,500円、夜のおまかせ23,000円・28,500円・口コミでは昼のおまかせ9,500円 (2026年1月・7月)、13貫の昼8,800円も・例: 新潟の鮪、明石の鯛、カマトロ、サヨリ、北海道の雲丹、あん肝、帆立、雲丹の湯葉のカリフォルニアロール、蒸し雲丹の巻物、鯛の漬け、鰻、焼き穴子 (2025〜2026年の口コミ)',
    neighborhood: '寺町夷川。京都市役所前駅から488m',
    gf_detail: '要確認。一貫ずつ塩や醤油で味付けされ、シャリは鰹節の出汁で炊く。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。おまかせの寿司で、シャリも鰹節の出汁で炊く (食べログの公式コース説明)。',
    notes: '[寿司・寺町夷川、出汁で炊いたシャリの町家] 市役所の北の静かな町家の12席のカウンター。シャリは鰹節の出汁で炊き、一貫ずつ塩か醤油で味付けして出す。おまかせは昼の9,500円ほどから夜の28,500円まで: 新潟の鮪、明石の鯛、カマトロ、北海道の雲丹、締めにとろける焼き穴子。海外からの客にも人気。毎日営業、予約を。',
  });
}

// ================================================================ だいしめ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033421/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '20:00']);
  put({
    id: 'kyoto_daishime', name: 'だいしめ (Daishime)', category: 'OMNI',
    lat: 34.99112123706672, lng: 135.74016967907423, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood marinated in soy, fried horse mackerel, shumai, eel wrapped in bread and somen; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fishmonger’s seafood omakase (reviews).',
    hours_raw: 'Thursday, Friday and Saturday 16:30–20:00; closed Sunday–Wednesday (Tabelog). Extremely hard to book: reviewers in 2026 report waits of about a year, and many evenings are booked whole by groups (April–August 2026). Omakase of about ¥10,000; bring-your-own alcohol with a ¥500 corkage per bottle, and self-service drinks (April–July 2026). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). By the Kyoto Central Wholesale Market, 365 m from Umekoji-Kyotonishi Stn (Tabelog; reviews).',
    hours: { 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyoto Central Wholesale Market — 365 m from Umekoji-Kyotonishi Stn',
    cuisine: 'Seafood omakase from a fishmonger at the Kyoto Central Wholesale Market, about ¥10,000, in generous portions (2025–2026 reviews) · e.g. crab to start, ikura tofu, a tasting of five rare cuts of tuna, two kinds of uni with tuna wrapped in nori, firefly squid marinated in soy, namerou, simmered baby octopus, fried horse mackerel, eel shumai, sanma rolls, okra somen, eel wrapped in bread, a rice of shirasu and sakura shrimp (2025–2026 reviews)',
    website: null, gmaps: gm('だいしめ 京都 中央市場'), menu_url: TB,
    notes: "[Seafood · Central Wholesale Market, the hardest-to-book fish izakaya] A fishmonger's izakaya beside Kyoto's wholesale fish market, open only Thursday to Saturday evenings and booked about a year out. For around ¥10,000 the chef piles on the market's best: crab, a tasting of five rare tuna cuts, uni with tuna in nori, firefly squid, eel shumai and sakura-shrimp rice. Bring your own bottle (¥500 corkage) and pour your own drinks. Cash only.",
    chef_bio: { chef_name: null, roles: ['Chef-owner not named; a fishmonger at the Kyoto Central Wholesale Market (reviews)'], origin: null,
      background: 'Reviewers describe it as run by a fishmonger from the Kyoto Central Wholesale Market who buys the fish there each day, with a cheerful, talkative chef and very generous portions (2025–2026 reviews). Tabelog gives no opening date.',
      philosophy: null,
      specialty: 'Five-cut rare tuna tasting; uni and tuna wrapped in nori.',
      anecdotes: [
        { text: 'An April 2026 first-timer, in on a friend’s private booking, heard the next open date was a year away.', source: R + 'B528436366/' },
        { text: 'A July 2026 regular on a sixth visit noted the corkage was still ¥500 a bottle.', source: R + 'B486484287/' },
        { text: 'A regular who travels about two hours to come says shy guests are soon won over by the chef’s charm (October 2025).', source: R + 'B521239483/' },
      ],
      japanese_sources_summary: '食べログ: だいしめ、魚介料理・居酒屋、下京区朱雀宝蔵町44、梅小路京都西駅から365m、木・金・土16:30〜20:00、日〜水定休、カード・電子マネー・QR 不可、サービス料の記載なし。口コミ (2025年10月〜2026年8月、英語): 京都中央卸売市場の魚屋が営む居酒屋、予約は1年待ち、貸切の会が多い、おまかせ1万円ほど、持ち込みは1本500円、ドリンクはセルフ、蟹、いくら豆腐、鮪の希少部位5種、2種の雲丹と鮪の海苔巻き、ホタルイカの醤油漬け、なめろう、鯵フライ、鰻の焼売、さんま巻き、オクラそうめん、しらすと桜海老のご飯。',
      confidence: 'medium', sources: [TB, R + 'B468648960/', R + 'B483443501/', R + 'B486484287/', R + 'B503032508/', R + 'B513035921/', R + 'B521239483/', R + 'B522817705/', R + 'B527960671/', R + 'B528084390/', R + 'B528436366/', R + 'B534590370/', R + 'B534774059/'] },
    cultural_comfort: { level: 'japanese', note: 'Booked about a year ahead; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区朱雀宝蔵町44',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.991121, 135.74017); cross-checked: GSI 京都府京都市下京区朱雀宝蔵町44番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528084390/', R + 'B534590370/', R + 'B486484287/'],
    price_note: 'From 2026 reviews; no menu or prices published.', last_checked: TODAY, items: [
      it('', '', 'Omakase seafood course', '¥10,000', 'Course', 'ask', 'no', 'About ¥10,000 (May 2026).', 'omakase'),
      it('', '', 'Five rare cuts of tuna', '', 'Course', 'ask', 'no', '', 'tuna_five'),
      it('', '', 'Uni and tuna wrapped in nori', '', 'Course', 'ask', 'no', '', 'uni_tuna'),
      it('', '', 'Corkage per bottle brought in', '¥500', 'Charge', '', '', 'July 2026.', 'corkage'),
    ] }, {
    cuisine: '京都中央卸売市場の魚屋のおまかせ、1万円ほどで量はたっぷり (2025〜2026年の口コミ)・例: 最初の蟹、いくら豆腐、鮪の希少部位5種の食べ比べ、2種の雲丹と鮪の海苔巻き、ホタルイカの醤油漬け、なめろう、小さな蛸の煮付け、鯵フライ、鰻の焼売、さんま巻き、オクラそうめん、鰻のパン包み、しらすと桜海老のご飯 (2025〜2026年の口コミ)',
    neighborhood: '京都中央卸売市場。梅小路京都西駅から365m',
    gf_detail: '要確認。醤油漬けの魚介、鯵フライ、焼売、鰻のパン包み、そうめん。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚屋の魚介のおまかせ (口コミ)。',
    notes: '[魚介・中央市場、いちばん予約の取れない魚の居酒屋] 京都の中央卸売市場のそばの魚屋の居酒屋。木〜土の夜のみで、予約は1年ほど先まで埋まる。1万円ほどで市場の魚がどんどん出る: 蟹、鮪の希少部位5種、雲丹と鮪の海苔巻き、ホタルイカ、鰻の焼売、桜海老のご飯。お酒は持ち込み (1本500円) で、ドリンクはセルフ。現金のみ。',
  });
}

save();
