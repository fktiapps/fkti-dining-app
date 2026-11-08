// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 70.
//   Queue run from the osw2 worktree, 2026-11-08. First a recheck of this lane's retail-only skips under Greg's 2026-11-07 ruling
//   ("Include particularly historic family owned shops, as well as GF and vegan options"), then rest tier nearest-first.
//   Recheck:
//   + 白心堂 Hakushindo (yatsuhashi maker founded 1926 by 野崎梅治郎; presidents since are 野崎一雄, 野崎さだ子, 野崎益宏 — company history page)
//   - 藤菜美 ジェイアール京都伊勢丹店 — counter of a chain (藤菜美, eight shops; its main shop 26025740 was skipped as a chain)
//   - 錦まるん — retail food shop (Greg 11-07 ruling)
//   Rest tier:
//   + ベーグル君とぱすたちゃん Bagel-kun to Pasta-chan (rice-flour bagels and fresh pasta near Shijo; 月虹庵 is upstairs)
//   - 祇園 晩餐 京色 — same-concept second shop of BANSAN 京色 (in data)
//   + オリオン食堂 Orion Shokudo (Okinawa soba counter near Kiyamachi, open midnight to 8 am)
//   + 大衆酒場 こうじゑん Taishu Sakaba Koujien (sashimi izakaya in a townhouse at the end of an alley near Kawaramachi-Matsubara)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl:
//   rulings followed for 藤菜美 and 京色.
//   Service charges: none listed.
//   Days the sources do not state are left out of hours.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; ベーグル君とぱすたちゃん offset ~3 m off 月虹庵 (same building, 7 m); each now 9 m+ from every
//   pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027247', '藤菜美 ジェイアール京都伊勢丹店: a department-store counter of a chain — 藤菜美 has eight shops (Tabelog name search, ruling on its main shop 26025740); rechecked 2026-11-08 under the retail-food ruling, the chain rule applies first');
skip('26030031', '錦まるん: retail food shop (Greg 11-07 ruling) — a souvenir shop for cookies, candies and jellies with branches near Kiyomizu-dera and Arashiyama; no sourced founding history or GF/vegan options; rechecked 2026-11-08');
skip('26026707', '祇園 晩餐 京色: a same-concept second shop of a brand in data — the izakaya brand 京色 (kyosyoku.com) whose BANSAN 京色 (kyoto_bansan_kyoshoku) is in data; うらやま京色 is in data too');

// ================================================================ 白心堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029485/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hakushindo.co.jp/';
  const HIST = 'https://hakushindo.co.jp/hpgen/HPB/entries/1.html';
  put({
    id: 'kyoto_hakushindo_yatsuhashi', name: '白心堂 (Hakushindo)', category: 'OMNI',
    lat: 35.001110306484904, lng: 135.76640809937666, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nama-yatsuhashi are made with rice flour, but some lines list wheat among allergens (e.g. 抹茶三昧) and others do not (e.g. 粋都 chocolate: milk, egg, soy) — check each pack’s label (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Several flavoured lines list milk and egg among allergens (official site); check the plain cinnamon nama-yatsuhashi label.',
    hours_raw: 'Takeaway only — packaged yatsuhashi and goshiki-mame to take home. Tabelog gives no hours for this listing, which is the company’s head office and factory; the company’s own shop, ビアンコ店, is a few doors along on the same street (official site). Its sweets are also sold in souvenir shops across Kyoto (official site; reviews). Cash only per Tabelog. On Gokomachi south of Bukkoji (official site).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gokomachi south of Bukkoji, south of Shijo',
    cuisine: 'Family yatsuhashi maker since 1926 (official site) · nama-yatsuhashi in classic cinnamon and matcha, four for ¥216 (June 2026); tsubu-an nama-yatsuhashi since 1973; an-butter, pudding and seasonal flavours such as sakura, New Year packs ¥700 (2026 reviews) · 粋都 "Western-style" nama-yatsuhashi, chocolate 8 pieces ¥648; 抹茶三昧 ¥680 (official site) · baked yatsuhashi and goshiki-mame (official site)',
    website: SITE, gmaps: gm('白心堂 八ッ橋 御幸町'), menu_url: SITE,
    notes: "[Yatsuhashi · Gokomachi, a family maker since 1926] A yatsuhashi maker founded in 1926 and run by the 野崎 family since, making chewy nama-yatsuhashi — classic cinnamon, matcha, an-butter, pudding — sold four for about ¥216. Takeaway only; buy at the company’s own ビアンコ店 nearby or in Kyoto souvenir shops.",
    chef_bio: { chef_name: null, roles: ['野崎 family company'], origin: null,
      background: 'The company history says 故野崎梅治郎 founded the business as a sole trader on Gojo-dori in January 1926, making yatsuhashi and goshiki-mame; it became 有限会社白心堂 in 1953, and the presidents since have been 野崎一雄, 野崎さだ子 and, now, 野崎益宏. It opened shops at the Sennichi department store (1958) and Kyoto Tower (1964), began tsubu-an nama-yatsuhashi in 1973 and the 粋都 line in 2007; about 70 staff (official site).',
      philosophy: 'To convey the heart of Kyoto through yatsuhashi and goshiki-mame (official site).',
      specialty: 'Nama-yatsuhashi.',
      anecdotes: [
        { text: 'A June 2026 reviewer bought the smallest four-piece packs of cinnamon and matcha for ¥216 each.', source: R + 'B498871603/' },
        { text: 'A March 2026 recipient found the sakura yatsuhashi the chewiest ever tasted.', source: R + 'B523475914/' },
        { text: 'A June 2026 buyer was reminded of the school-trip flavour of Kyoto souvenirs.', source: R + 'B529881126/' },
      ],
      japanese_sources_summary: '公式サイト: 八ツ橋・五色豆の京都銘菓 白心堂、株式会社白心堂、本社と本社工場は京都市下京区御幸町通り仏光寺下ル橘町432番地、直営店はビアンコ店 (橘町454-1)、従業員70名。沿革: 大正15年1月、五条通富小路東入ルで故野崎梅治郎氏が個人で菓子製造販売業を創業 (八ツ橋・五色豆等)、昭和28年に有限会社白心堂、昭和33年に千日デパート店、昭和39年に京都タワー店、昭和48年につぶあん入り生八ツ橋、野崎一雄氏、野崎さだ子氏、野崎益宏氏が代表取締役に就任、平成19年に粋都シリーズ。商品: 粋都チョコレート8個入り648円 (アレルゲン 乳・卵・大豆)、抹茶三昧680円 (アレルゲン 小麦・乳・卵・大豆・米)。販売店: 嵯峨、新京極、清水、伏見稲荷などのみやげ物店。食べログ: 和菓子、カード・QR不可、営業時間の記載なし。口コミ (2026年、英語・日本語): ニッキと抹茶の生八ツ橋4個入り216円、あんバター、プリン、桜、新年の生八ツ橋700円、もちもちの皮、修学旅行の思い出の味。',
      confidence: 'medium', sources: [SITE, HIST, 'https://hakushindo.co.jp/hpgen/HPB/entries/3.html', 'https://hakushindo.co.jp/SHOP/11.html', 'https://hakushindo.co.jp/SHOP/18.html', TB, R + 'B498871603/', R + 'B503757358/', R + 'B523475914/', R + 'B524735856/', R + 'B529881126/', R + 'B536748766/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway packaged sweets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通仏光寺下ル橘町432',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (product updates to September 2026) and Tabelog listing; reviews dated through September 2026. Drafted under Greg’s 2026-11-07 retail-food ruling: historic (1926) and family-run (野崎 family presidents).' },
    pin_source: `Tabelog ${TB} (35.001110, 135.766408); cross-checked: GSI 京都府京都市下京区橘町432番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: ['https://hakushindo.co.jp/SHOP/11.html', 'https://hakushindo.co.jp/SHOP/18.html', R + 'B498871603/'],
    price_note: 'Prices from the official online shop (tax included) and a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Nama-yatsuhashi, cinnamon or matcha, 4 pieces', '¥216', 'Yatsuhashi', 'ask', 'ask', 'June 2026.', 'nama4'),
      it('粋都（すいーつ）チョコレート 8個入り', '', 'Suito chocolate nama-yatsuhashi, 8 pieces', '¥648', 'Yatsuhashi', 'ask', 'no', 'Allergens: milk, egg, soy.', 'suito_choco'),
      it('抹茶三昧', '', 'Matcha zanmai nama-yatsuhashi', '¥680', 'Yatsuhashi', 'no', 'no', 'Allergens include wheat, milk, egg.', 'matcha_zanmai'),
    ] }, {
    cuisine: '1926年からの家族の八ツ橋屋 (公式サイト)・ニッキと抹茶の生八ツ橋、4個入り216円 (2026年6月)、1973年からのつぶあん入り生八ツ橋、あんバター、プリン、桜などの季節の味、新年の詰め合わせ700円 (2026年の口コミ)・洋風生八ツ橋「粋都」チョコレート8個入り648円、抹茶三昧680円 (公式サイト)・焼き八ツ橋と五色豆 (公式サイト)',
    neighborhood: '御幸町の仏光寺下ル、四条の南',
    gf_detail: '要確認。生八ツ橋は米粉だが、商品によりアレルゲンに小麦があるもの (抹茶三昧など) とないもの (粋都チョコレート: 乳・卵・大豆) がある。箱の表示を確認 (公式サイト)。',
    vegan_detail: '要確認。味つきの商品のいくつかはアレルゲンに乳と卵 (公式サイト)。プレーンのニッキの生八ツ橋は表示を確認。',
    notes: '[八ツ橋・御幸町、1926年からの家族の店] 1926年創業、野崎家が受け継ぐ八ツ橋屋。もちもちの生八ツ橋はニッキ、抹茶、あんバター、プリンなど、4個入りで216円ほどから。持ち帰りのみ。近くの直営店ビアンコ店か京都のみやげ物店で。',
  });
}

// ================================================================ ベーグル君とぱすたちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043267/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '17:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_bagel_kun_to_pasta_chan', name: 'ベーグル君とぱすたちゃん (Bagel-kun to Pasta-chan)', category: 'OMNI',
    lat: 35.002674, lng: 135.763844, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small bagels made with rice flour and fresh pasta; whether wheat is used is not published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Bolognese, prosciutto and cheese, roast-beef bagel sandwiches (reviews).',
    hours_raw: '11:30–17:00 (last order 16:00) and 17:30–22:00 (last order 21:00), daily including holidays (Tabelog). Reservations recommended at lunch (April 2026). Cards and PayPay accepted; no e-money (Tabelog). One drink each when not ordering a lunch set (August 2026). 23 seats: a 6-seat counter downstairs with dried flowers, and retro sofa seats upstairs; non-smoking (Tabelog; 2026 reviews). The upstairs room is shared with 月虹庵, a separate evening café (August 2026). Just off Shijo, 7–10 min from Karasuma Stn (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just off Shijo between Karasuma and Kawaramachi — 7–10 min from Karasuma Stn',
    cuisine: 'Rice-flour bagels and fresh pasta (2026 reviews) · lunch sets A and B with the day’s pasta — e.g. shrimp peperoncino, Bolognese, Neapolitan — soup, salad, canapés, a small bagel and a drink, ¥1,500 (May and October 2026); a rice-flour bagel sandwich lunch, e.g. roast beef (September 2026) · gratin and lasagne a la carte (August 2026) · steamed bagels in a bamboo basket on the all-you-can-drink course (August 2026) · yuzu soda, café latte (2026)',
    website: null, gmaps: gm('ベーグル君とぱすたちゃん 京都'), menu_url: TB,
    notes: "[Pasta & bagels · off Shijo, a cosy lunch] A small, pretty restaurant just off Shijo for chewy fresh pasta and mini rice-flour bagels — a ¥1,500 lunch set brings soup, salad, canapés, bagel and a drink. Counter downstairs under dried flowers, retro sofas upstairs; dinner too. Book at lunch.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2026) describe a small pasta and bagel restaurant whose rice-flour bagels are chewy and dense, with a flower-decked counter downstairs and a retro upstairs room it shares with 月虹庵.',
      philosophy: null,
      specialty: 'Fresh pasta with rice-flour bagels.',
      anecdotes: [
        { text: 'An October 2026 guest received a welcome sweet and loved the slightly sweet Neapolitan.', source: R + 'B537543622/' },
        { text: 'A June 2026 pair lunched here before a show at Sanjo and arrived with ten minutes to spare.', source: R + 'B530488604/' },
        { text: 'An August 2026 drinker tried a bagel steamed in a bamboo basket for the first time.', source: R + 'B534230331/' },
      ],
      japanese_sources_summary: '食べログ: ベーグル君とぱすたちゃん、イタリアン・ベーグル・パスタ、京都市下京区相之町139、烏丸駅から徒歩10分、毎日 (祝日含む) 11:30〜17:00 (L.O.16:00)・17:30〜22:00 (L.O.21:00)、予約可、カード・PayPay可、電子マネー不可、23席 (1階6、2階17)、個室・半個室、20名まで貸切、禁煙。口コミ (2026年、英語): 米粉のベーグル、生パスタ、パスタランチA・B (日替わりパスタ、スープ、サラダ、カナッペ、小さなベーグル、ドリンク) 1,500円、ベーグルサンドのランチ、グラタン、ラザニア、飲み放題コースで蒸籠の蒸しベーグル、柚子ソーダ、1階はドライフラワーのカウンター、2階はレトロなソファ席で月虹庵と共用、ランチは予約がおすすめ、ランチセット以外はワンドリンク制。',
      confidence: 'low', sources: [TB, R + 'B526591873/', R + 'B527153024/', R + 'B528760225/', R + 'B529260286/', R + 'B530488604/', R + 'B533612622/', R + 'B534230331/', R + 'B534480984/', R + 'B536359948/', R + 'B537173254/', R + 'B537543622/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards and PayPay; book at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区相之町139',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB} (35.002692, 135.763866), offset ~3m to clear 月虹庵 (same building, 7m); cross-checked: GSI 京都府京都市下京区相之町139番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528760225/', R + 'B537543622/'],
    price_note: 'Lunch price from May and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch set (day’s pasta, soup, salad, canapés, bagel, drink)', '¥1,500', 'Lunch', 'ask', 'no', '', 'pasta_lunch'),
      it('', '', 'Rice-flour bagel sandwich lunch', '', 'Lunch', 'ask', 'no', '', 'bagel_lunch'),
      it('', '', 'Lasagne', '', 'A la carte', 'no', 'no', '', 'lasagne'),
    ] }, {
    cuisine: '米粉のベーグルと生パスタ (2026年の口コミ)・パスタランチA・B、日替わりパスタ (海老のペペロンチーノ、ボロネーゼ、ナポリタンなど)、スープ、サラダ、カナッペ、小さなベーグル、ドリンクで1,500円 (2026年5月、10月)、米粉ベーグルサンドのランチ、たとえばローストビーフ (2026年9月)・グラタンとラザニア (2026年8月)・飲み放題コースで蒸籠の蒸しベーグル (2026年8月)・柚子ソーダ、カフェラテ (2026年)',
    neighborhood: '烏丸と河原町の間、四条通のすぐ脇。烏丸駅から徒歩7〜10分',
    gf_detail: '要確認。米粉の小さなベーグルと生パスタ。小麦を使うかは公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ボロネーゼ、生ハムとチーズ、ローストビーフのベーグルサンド (口コミ)。',
    notes: '[パスタとベーグル・四条の脇、ほっとするランチ] 四条のすぐ脇の小さくてかわいい店。もちもちの生パスタと米粉のミニベーグル。1,500円のランチにスープ、サラダ、カナッペ、ベーグル、ドリンク付き。1階はドライフラワーのカウンター、2階にレトロなソファ。夜も営業、昼は予約を。',
  });
}

// ================================================================ オリオン食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035197/'; const R = TB + 'dtlrvwlst/';
  const H = day(['00:00', '08:00']);
  put({
    id: 'kyoto_orion_shokudo_kiyamachi', name: 'オリオン食堂 (Orion Shokudo)', category: 'OMNI',
    lat: 35.00744560787147, lng: 135.77077885037943, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: Okinawa soba is a wheat noodle (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito broth and pork spare ribs (reviews).',
    hours_raw: 'Opens at midnight and runs to 08:00 (Tabelog lists 00:00–08:00 Monday–Wednesday and Friday–Sunday; closed Thursday); hours may change, and some reviewers found it open from around 21:00 (Tabelog; September 2025). Cards and QR payments accepted; no e-money (Tabelog). A 6–7-seat counter; smoking allowed (Tabelog; March 2026). Often a queue (2024–2025 reviews). Tucked into a building in a quiet Kiyamachi alley (Tabelog; September 2025).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, near Sanjo',
    cuisine: 'Okinawa soba counter for the end of the night (2024–2026 reviews) · soki soba in a gentle bonito broth with tender pork ribs: small ¥700, medium ¥900, large ¥1,100 (May and August 2026) · cartilage soki ¥650; jushi Okinawan mixed rice ¥150, also as a tea-rice finish (2025–2026) · Orion draught beer ¥700, passion-fruit awamori highball ¥600, shikuwasa sour (2025–2026)',
    website: null, gmaps: gm('オリオン食堂 木屋町'), menu_url: TB,
    notes: "[Okinawa soba · Kiyamachi, midnight to 8 am] A tiny counter tucked into a Kiyamachi building that opens at midnight for Okinawa soba — tender soki pork ribs in a gentle bonito broth, from ¥700 — with jushi rice and Orion beer. The classic end to a night out; expect a queue. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a small Okinawan counter in Kiyamachi run by a distinctive owner, opening late at night for soki soba; a reviewer with Okinawan parents was surprised to find such good noodles in Kyoto.',
      philosophy: null,
      specialty: 'Soki soba.',
      anecdotes: [
        { text: 'A November 2025 guest whose parents are from Okinawa slipped out of a party for a bowl and was won over.', source: R + 'B517943754/' },
        { text: 'A May 2025 regular, torn between meats, was served half of each.', source: R + 'B485693160/' },
        { text: 'A March 2026 early-morning visitor found the jushi already sold out.', source: R + 'B525375646/' },
      ],
      japanese_sources_summary: '食べログ: オリオン食堂、沖縄料理・居酒屋、京都市中京区材木町184 都会館1F、月〜水・金〜日 0:00〜8:00、木曜定休、カード・QR可、電子マネー不可、喫煙可。口コミ (2024〜2026年、英語): 木屋町の路地のビルの一角、カウンター6〜7席、深夜0時に開いて朝まで (21時ごろからという声も)、ソーキそば小700円・中900円・大1,100円、軟骨ソーキ650円、じゅーしー150円 (茶漬けにも)、オリオン生ビール700円、パッションフルーツの泡盛ハイボール600円、シークヮーサーサワー、かつお出汁のやさしいスープ、行列も、存在感のある店主、沖縄出身の両親を持つ客も絶賛。',
      confidence: 'low', sources: [TB, R + 'B485693160/', R + 'B491762560/', R + 'B500883571/', R + 'B501129093/', R + 'B511097599/', R + 'B512866961/', R + 'B514558316/', R + 'B517943754/', R + 'B525375646/', R + 'B529529187/', R + 'B532874569/', R + 'B538432634/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny counter; smoking allowed; late-night only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町184 都会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007446, 135.770779); cross-checked: GSI 京都府京都市中京区材木町184番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529529187/', R + 'B532874569/'],
    price_note: 'Prices from May and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Soki soba, small', '¥700', 'Soba', 'no', 'no', 'Medium ¥900, large ¥1,100.', 'soki_s'),
      it('', '', 'Cartilage soki', '¥650', 'Dishes', 'ask', 'no', '', 'nankotsu'),
      it('', '', 'Jushi (Okinawan mixed rice)', '¥150', 'Rice', 'ask', 'no', 'Can sell out.', 'jushi'),
      it('', '', 'Orion draught beer', '¥700', 'Drink', 'no', 'ask', '', 'orion'),
    ] }, {
    cuisine: '夜の締めの沖縄そばのカウンター (2024〜2026年の口コミ)・やさしいかつお出汁にやわらかいソーキのソーキそば、小700円、中900円、大1,100円 (2026年5月、8月)・軟骨ソーキ650円、じゅーしー150円、茶漬けにも (2025〜2026年)・オリオン生ビール700円、パッションフルーツの泡盛ハイボール600円、シークヮーサーサワー (2025〜2026年)',
    neighborhood: '木屋町、三条の近く',
    gf_detail: 'グルテンフリー不可。沖縄そばは小麦の麺 (口コミ)。',
    vegan_detail: 'ヴィーガン不可。かつお出汁と豚のソーキ (口コミ)。',
    notes: '[沖縄そば・木屋町、深夜0時から朝8時] 木屋町のビルの一角の小さなカウンター。深夜0時に開き、やさしいかつお出汁にやわらかいソーキのソーキそばを700円から、じゅーしーやオリオンビールも。飲んだあとの定番、行列も。木曜休み。',
  });
}

// ================================================================ 大衆酒場 こうじゑん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031189/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_taishu_sakaba_koujien', name: '大衆酒場 こうじゑん (Taishu Sakaba Koujien)', category: 'OMNI',
    lat: 34.99934936787556, lng: 135.76744068029998, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, vinegared oysters, chicken tataki, ham katsu, meat tofu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya. Pickled myoga and aubergine dishes appear — ask (August 2024).',
    hours_raw: '17:00–22:00 Thursday–Sunday; closed Monday–Wednesday; hours may change (Tabelog). Reservations advised; or arrive at opening (January 2024). Cash only — no cards, e-money or QR (Tabelog). 44 seats in a converted townhouse: a curved 6–7-seat counter and a few tables downstairs, tatami with round low tables up steep stairs; non-smoking, smoking outside (Tabelog; 2023–2026 reviews). The ground floor can be cold in winter (February 2025). At the end of a residential alley between Takatsuji and Matsubara near Kawaramachi — pass quietly (Tabelog; November 2024; March 2026).',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Kawaramachi-Matsubara, down a side alley',
    cuisine: 'Townhouse izakaya known for its sashimi platters (2024–2026 reviews) · assorted sashimi, e.g. sawara, bonito, ark shell, tuna, sea bream, abalone, kanpachi and squid with vinegar miso (August 2024); vinegared oysters; prices change with the market (January 2024) · chicken tataki, mackerel namero, ham katsu, meat tofu, Okinawan mozuku, pickled myoga, aubergine (2024) · a good sake list, cocktails and wine by the glass (February 2024)',
    website: null, gmaps: gm('大衆酒場 こうじゑん'), menu_url: TB,
    notes: "[Izakaya · Kawaramachi-Matsubara, sashimi at the end of an alley] A hidden izakaya in a converted townhouse at the end of a quiet residential alley — walk softly — known for generous, very fresh sashimi platters, vinegared oysters and good sake. Counter downstairs, tatami up steep Showa stairs. Cash only; Thursday–Sunday evenings.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a two-storey izakaya converted from an old townhouse at the end of a residential alley, with friendly owner and staff and a strong sashimi platter.',
      philosophy: null,
      specialty: 'Assorted sashimi platter.',
      anecdotes: [
        { text: 'A November 2024 visitor nearly gave up at the full ground floor but was led up the steep stairs to round chabudai tables.', source: R + 'B495767432/' },
        { text: 'A March 2026 second-rounder learned of the unspoken rule to walk quietly through the residential alley.', source: R + 'B524762263/' },
        { text: 'A February 2024 guest singled out the red clam in the platter as exceptionally fresh.', source: R + 'B480529917/' },
      ],
      japanese_sources_summary: '食べログ: 大衆酒場 こうじゑん、居酒屋、京都市下京区松原通寺町東入幸竹町382-14、木〜日 17:00〜22:00、月火水定休、カード・電子マネー・QR不可、44席 (カウンター6〜7、テーブル、2階座敷)、禁煙 (外で喫煙可)。口コミ (2023〜2026年、英語): 京町家を改装した2階建て、住宅の並ぶ路地の奥、静かに通るのが暗黙のルール、刺身の盛り合わせが名物 (サワラ、カツオ、赤貝、マグロ、鯛、アワビ、カンパチ、イカの酢味噌)、酢牡蠣、時価で値段が変わる、鶏のたたき、鯖のなめろう、ハムカツ、肉豆腐、沖縄のもずく、みょうがの甘酢漬け、茄子、日本酒が充実、カクテル、グラスワイン、急な階段、丸いちゃぶ台、冬の1階は寒い、開店直後か予約がおすすめ、Instagram @kou_zi_en。',
      confidence: 'low', sources: [TB, R + 'B477637314/', R + 'B480529917/', R + 'B487929392/', R + 'B490091528/', R + 'B490436297/', R + 'B495767432/', R + 'B501423837/', R + 'B511951128/', R + 'B517455662/', R + 'B519809771/', R + 'B524762263/', R + 'B529968653/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; hidden alley; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通寺町東入幸竹町382-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (34.999349, 135.767441); cross-checked: GSI 京都府京都市下京区幸竹町382番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490091528/'],
    price_note: 'No published prices; sashimi is priced at market rate (January 2024).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi platter', '', 'Fish', 'ask', 'no', 'Market price.', 'moriawase'),
      it('', '', 'Vinegared oysters', '', 'Fish', 'ask', 'no', '', 'su_gaki'),
      it('', '', 'Meat tofu', '', 'Dishes', 'ask', 'no', '', 'niku_dofu'),
    ] }, {
    cuisine: '刺身の盛り合わせで知られる町家の居酒屋 (2024〜2026年の口コミ)・刺身盛り合わせ、たとえばサワラ、カツオ、赤貝、マグロ、鯛、アワビ、カンパチ、イカの酢味噌 (2024年8月)、酢牡蠣、値段は時価で変わる (2024年1月)・鶏のたたき、鯖のなめろう、ハムカツ、肉豆腐、沖縄のもずく、みょうが、茄子 (2024年)・日本酒が充実、カクテルとグラスワイン (2024年2月)',
    neighborhood: '河原町松原の近く、路地の奥',
    gf_detail: '要確認。刺身、酢牡蠣、鶏のたたき、ハムカツ、肉豆腐。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の居酒屋。みょうがや茄子の料理はある、要確認 (2024年8月)。',
    notes: '[居酒屋・河原町松原、路地の奥の刺身] 静かな住宅の路地の奥 (そっと歩いて)、京町家を改装した隠れ家の居酒屋。たっぷりで新鮮な刺身の盛り合わせ、酢牡蠣、日本酒。1階はカウンター、2階は急な昭和の階段の先の座敷。現金のみ、木〜日の夜だけ。',
  });
}

save();
