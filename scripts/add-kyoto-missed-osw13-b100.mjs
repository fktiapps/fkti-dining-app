// Kyoto priority (kyoto-missed), worker osw13, batch 100 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 異風酒食洞 サマサマ, IL LAGO, 和牛一乃音 WAGYU ICHINONE, 菜処 やすかわ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-100');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26043978', 'large parent: CRAFT倶楽部 祇園店 is one of four CRAFT倶楽部 bars (神田, 京都店 in 祇園町南側, 祇園店, 下総中山) whose site also lists sister CafeBar and BakeryCafe shops in Tokyo and Kyoto (craft-club.jp); invoice T1010401150350 is 株式会社LUXURY, 港区六本木 (NTA) — a multi-brand Tokyo operator');
skip('26042526', 'chain: BRISKSTAND KYOTO is a branch of the Kobe burger brand BRISKSTAND (株式会社BRISK STAND) — branches in Umeda, Shinjuku, Kitasenju, Himeji (franchise), Miyakojima and Nago; a Miyakojima opening article counts 26 shops (value-press.com release for BRISKSTAND SHINJUKU; haveagood-holiday.com Miyakojima article)');
skip('26022396', 'chain: や台ずし 祇園花見小路町 — the Tabelog listing links to yossix-shop.com; や台ずし is the main brand of ヨシックス, which reported 310 shops in December 2018 (JPX monthly disclosure)');
skip('26021736', 'large parent: master-piece coffee Kyoto is the cafe inside the Kyoto store of the bag brand master-piece (Tabelog remarks; website master-piece.co.jp/store/kissamaster-sort-kyoto-store/) — a sub-brand of a national maker, as with 蝶矢');

// ================================================================ 異風酒食洞 サマサマ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019012/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '25:00']);
  put({
    id: 'kyoto_samasama_indonesian', name: '異風酒食洞 サマサマ (Ifu Shushokudo Samasama)', category: 'OMNI',
    lat: 35.009353, lng: 135.770593, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried noodles (mie goreng), fried rice, kara-age fried chicken and satay in a sweet-savory sauce (July 2026 review). Ask about bihun goreng (rice noodles), but sauces were not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog marks vegetarian options and says the shop is particular about vegetables; the dishes reviewers name are chicken, lamb, fish soup and seafood (2024–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:30–1:00; closed on irregular days. Reservations taken. Cash only — no cards, e-money or QR (Tabelog). 57 seats: 7 counter and 15 table seats on the 1st floor; the 2nd floor takes private parties of 10–35. Shoes come off at the entrance; chair and floor seating. Heated tobacco only in a designated area. Down a narrow alley off Kiyamachi near Sanjo — enter the narrow alley marked by the Komai-tei sign, the shop is on the right (Tabelog); reviewers say the entrance is easy to miss.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi just north of Sanjo — 5 min walk from Sanjo (Keihan)',
    cuisine: 'An Indonesian bar and kitchen down an alley off Sanjo Kiyamachi, with shoes off and floor seating (Tabelog; 2016–2026 reviews) · satay ayam, four chicken skewers ¥1,000; nasi goreng ¥1,000; mie goreng ¥1,000; bihun goreng with seafood ¥1,000; original kara-age ¥950 (July 2026) · lamb satay with the house peanut sauce (July 2026) · fish soup in winter; Indonesian-style fried noodles (April 2024) · Bintang beer (June 2024)',
    website: null, gmaps: gm('異風酒食洞 サマサマ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Indonesian · Sanjo Kiyamachi, a shoes-off alley bar] A long-running Indonesian bar-restaurant hidden down a narrow alley off Kiyamachi: satay with peanut sauce, nasi and mie goreng, Bintang beer, about ¥1,000 a plate, open to 1 am. Floor or chair seating, a party room upstairs. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Chef (unnamed)'], origin: null,
      background: 'A December 2024 reviewer writes that it is run by an Indonesian owner who has lived in Japan for over 40 years; a March 2026 reviewer says the chef has cooked in Indonesia and Korea. Reviewers since 2016 describe a dim, relaxed Asian bar with friendly staff fluent in Japanese and flavors adjusted somewhat to Japanese tastes. Criticism: one reviewer wanted bigger portions (March 2026).',
      philosophy: null,
      specialty: 'Satay with house peanut sauce; nasi goreng and mie goreng.',
      anecdotes: [
        { text: 'July 2026: "The lamb skewers (satay) were so good that I immediately ordered more. The original peanut sauce is addictive!"', source: R + 'B533440493/' },
        { text: 'December 2024: "It\'s run by an Indonesian owner who has lived here for over 40 years… It was a fun night where I got to speak Indonesian after a long time."', source: R + 'B498506686/' },
      ],
      japanese_sources_summary: '食べログ: 異風酒食洞 サマサマ、バー・インドネシア料理、中京区上大阪町532、京阪三条駅から徒歩5分、看板のある細い路地を入って右手、毎日17:30〜翌1:00、不定休、予約可、カード・電子マネー・QR不可、57席 (1階カウンター7席・テーブル15席、2階は10〜35名の貸切)、靴を脱いで上がる、加熱式たばこのみ喫煙可の席あり、野菜にこだわり・ベジタリアンメニューあり。口コミ (2016年11月〜2026年7月、英語): インドネシア料理のアジアンバー、サテアヤム4本1,000円、ナシゴレン、ミーゴレン、ビーフンゴレン各1,000円、から揚げ950円 (2026年7月)、羊のサテとピーナッツソース、冬の魚のスープ、ビンタンビール、在日40年以上のインドネシア人の店主 (2024年12月)、インドネシアと韓国で料理経験のある料理人 (2026年3月)、量が少なめとの声あり。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B249801423', 'B274718261', 'B486177102', 'B490737560', 'B498506686', 'B526803142', 'B529055226', 'B533440493', 'B538766406'])) },
    cultural_comfort: { level: 'some_english', note: 'Shoes off at the entrance; cash only. Staff described as fluent in Japanese; an Indonesian owner (December 2024 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪町532',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March, May and July 2026.' },
    pin_source: `Tabelog ${TB} (35.009353, 135.770593); GSI lot 京都府京都市中京区上大阪町532番地 about 69m away; nearest pin kyoto_honke_gepaikeya_naomasa 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538766406/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Satay ayam (chicken skewers, 4)', '¥1,000', 'Grill', 'no', 'no', 'July 2026.', 'satay_ayam'),
      it('', '', 'Nasi goreng (fried rice with fried egg)', '¥1,000', 'Rice', 'no', 'no', 'July 2026.', 'nasi_goreng'),
      it('', '', 'Mie goreng (fried noodles)', '¥1,000', 'Noodles', 'no', 'no', 'July 2026.', 'mie_goreng'),
      it('', '', 'Bihun goreng (rice noodles with seafood)', '¥1,000', 'Noodles', 'ask', 'no', 'July 2026.', 'bihun_goreng'),
      it('', '', 'Original kara-age', '¥950', 'Fried', 'no', 'no', 'July 2026.', 'karaage'),
    ] }, {
    cuisine: '三条木屋町の路地奥、靴を脱いで上がるインドネシア料理のバー (食べログ、2016〜2026年の口コミ)・サテアヤム (鶏の串4本) 1,000円、ナシゴレン1,000円、ミーゴレン1,000円、魚介のビーフンゴレン1,000円、オリジナルから揚げ950円 (2026年7月)・羊のサテと自家製ピーナッツソース (2026年7月)・冬の魚のスープ、インドネシア風焼きそば (2024年4月)・ビンタンビール (2024年6月)',
    neighborhood: '三条のすぐ北の木屋町。京阪三条から徒歩5分',
    gf_detail: 'グルテンフリーではない: ミーゴレン (焼きそば)、ナシゴレン、から揚げ、甘辛いたれのサテ (2026年7月の口コミ)。ビーフンゴレン (米粉の麺) は要確認、たれの説明はなし。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューあり・野菜にこだわりとあるが、口コミに出る料理は鶏、羊、魚のスープ、魚介 (2024〜2026年の口コミ)。',
    notes: '[インドネシア料理・三条木屋町、靴を脱ぐ路地のバー] 木屋町の細い路地の奥にある長年のインドネシア料理のバー。ピーナッツソースのサテ、ナシゴレン、ミーゴレン、ビンタンビール、一皿1,000円ほどで深夜1時まで。座敷と椅子席、2階は貸切。現金のみ。',
  });
}

// ================================================================ IL LAGO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029884/'; const R = TB + 'dtlrvwlst/';
  const H1 = day(['15:00', '24:00']); const H2 = day(['15:00', '25:00']);
  put({
    id: 'kyoto_il_lago_bacaro', name: 'IL LAGO', category: 'OMNI',
    lat: 35.009543, lng: 135.769558, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pastas (penne with Gorgonzola cream, Genovese with shrimp), fried blue crab and maitake fritters (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cicchetti, prosciutto, pâté, cheese and seafood pastas (2026 reviews). Some vegetable plates (marinated purple cabbage, eggplant with balsamic), but no vegan menu is mentioned.',
    hours_raw: 'Tabelog: Mon–Wed 15:00–24:00 (food L.O. 22:00, drinks 23:30); Fri–Sun 15:00–1:00 (food L.O. 23:00, drinks 0:30); 15:00–17:00 drinks and light snacks, then dinner and bar; light snacks only after 22:00. Closed Thursday and other irregular days — check the shop\'s Instagram. Reservations taken; dessert plates by phone; courses by the day before. Standing at the counter is free; tables carry a ¥400 seat charge at dinner — Tabelog, Japanese original 「スタンディングはチャージなし、テーブルはお席代400円」. 36 places: 20 standing, 16 at high tables. Non-smoking. Cards, e-money and QR. English menu and English-speaking staff (Tabelog). Children welcome.',
    hours: { 0: H1, 1: H1, 2: H1, 4: H2, 5: H2, 6: H2 }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Sanjo, two blocks north — 2 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A Venetian-style bacaro: a standing wine bar with cicchetti at the front and high tables for dinner, near Kyoto City Hall since November 2017 (Tabelog; 2026 reviews) · cicchetti assortment ¥1,000, red wine by the glass ¥800 (September 2026) · Genovese pasta with large shrimp; anchovy roe with marinated peppers (July 2026) · marinated purple cabbage with grain mustard, bacon and spinach tagliata, eggplant with balsamic, country pâté, fried blue crab, penne with Gorgonzola cream (April 2026) · maitake fritters (July 2026) · prosciutto platter, fruit caprese (May 2026) · Primitivo as the house wine (August 2026) · courses and birthday plates',
    website: null, gmaps: gm('IL LAGO 京都 恵比須町'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian standing bar · Kawaramachi-Sanjo, a Venetian bacaro] A Venice-style bacaro near City Hall: stand at the front counter for cicchetti and a glass of wine from about ¥1,800, or take a high table for pasta, fritters and courses. Open from 3 pm to midnight or 1 am; English menu. ¥400 table charge, standing free. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社HOTTA (NTA invoice registration at the shop address)'], origin: null,
      background: 'Opened 3 November 2017 (Tabelog). 2026 reviewers describe a lively place, popular with diners in their 20s, used for girls\' nights and birthdays, with attentive staff and an extensive wine list; weekday tables were nearly fully booked in August 2026 while the standing counter was quiet.',
      philosophy: 'Modeled on the bacari of Venice (September 2026 review).',
      specialty: 'Cicchetti; pastas; Italian wine by the glass.',
      anecdotes: [
        { text: 'September 2026: "I had researched beforehand and found this Italian place inspired by the bacari of Venice, which opens at 3:00 PM… Leaning against the counter while chatting casually with the staff and sipping beer was fantastic."', source: R + 'B535674610/' },
        { text: 'April 2026: "The marinated purple cabbage was especially delicious, so I ordered it twice. The wine selection was also extensive."', source: R + 'B527633775/' },
      ],
      japanese_sources_summary: '食べログ: IL LAGO、イタリアン・立ち飲み・ワインバー、中京区河原町三条二筋上ル恵比須町534-29、地下鉄京都市役所前駅から徒歩2分、月〜水15:00〜24:00 (料理L.O.22:00、ドリンクL.O.23:30)、金〜日15:00〜翌1:00 (料理L.O.23:00、ドリンクL.O.0:30)、15:00〜17:00はドリンクと軽食、22時以降は軽食のみ、木曜と不定休 (Instagramで告知)、予約可、デザートプレートは電話で、原文で「スタンディングはチャージなし、テーブルはお席代400円」、36席 (立ち20・テーブル16)、禁煙 (外に灰皿)、カード・電子マネー・QR可、英語メニュー・英語対応スタッフ、子連れ可、2017年11月3日オープン。インボイス登録は株式会社HOTTA (店の住所、国税庁)。口コミ (2026年4月〜10月、英語): ヴェネツィアのバーカロ風の立ち飲みイタリアン、チケッティ盛り合わせ1,000円、グラスの赤ワイン800円、エビのジェノベーゼ、紫キャベツのマリネ、ペンネのゴルゴンゾーラクリーム、舞茸のフリット、生ハム、フルーツのカプレーゼ、ハウスワインはプリミティーヴォ、誕生日プレート、コース。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001060837'].concat(rv(R, ['B526595150', 'B527633775', 'B531566918', 'B531612011', 'B531691659', 'B533241256', 'B534750316', 'B535674610', 'B536208688', 'B536565129', 'B537528409'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu and English-speaking staff (Tabelog). Standing counter is free; ¥400 per person at tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条二筋上ル恵比須町534-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August, September and October 2026.' },
    pin_source: `Tabelog ${TB} (35.009543, 135.769558); GSI lot 京都府京都市中京区恵比須町534番地 about 16m away; nearest pin kyoto_goichi_panino 6.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536565129/'],
    price_note: 'Prices from a September 2026 review; ¥400 table charge at dinner.', last_checked: TODAY, items: [
      it('', '', 'Cicchetti assortment', '¥1,000', 'Antipasti', 'ask', 'no', 'September 2026.', 'cicchetti'),
      it('', '', 'Red wine by the glass', '¥800', 'Drink', 'ask', 'ask', 'September 2026.', 'glass_wine'),
      it('', '', 'Genovese pasta with large shrimp', null, 'Pasta', 'no', 'no', 'July 2026.', 'genovese'),
      it('', '', 'Penne with Gorgonzola cream', null, 'Pasta', 'no', 'no', 'April 2026.', 'penne_gorgonzola'),
      it('', '', 'Maitake mushroom fritters', null, 'Fried', 'no', 'ask', 'July 2026.', 'maitake_fritto'),
    ] }, {
    cuisine: '市役所近く、2017年11月からのヴェネツィアのバーカロ風。手前はチケッティで飲む立ち飲みカウンター、奥はハイテーブルで食事 (食べログ、2026年の口コミ)・チケッティ盛り合わせ1,000円、グラスの赤ワイン800円 (2026年9月)・大きなエビのジェノベーゼ、アンチョビの卵とマリネしたペッパー (2026年7月)・紫キャベツと粒マスタードのマリネ、ベーコンとほうれん草のタリアータ、茄子のバルサミコ、パテ・ド・カンパーニュ、ワタリガニのフライ、ペンネのゴルゴンゾーラクリーム (2026年4月)・舞茸のフリット (2026年7月)・生ハムの盛り合わせ、フルーツのカプレーゼ (2026年5月)・ハウスワインはプリミティーヴォ (2026年8月)・コース、誕生日プレート',
    neighborhood: '河原町三条から二筋北。地下鉄京都市役所前から徒歩2分',
    gf_detail: 'グルテンフリーではない: パスタ (ペンネのゴルゴンゾーラクリーム、エビのジェノベーゼ)、ワタリガニのフライ、舞茸のフリット (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: チケッティ、生ハム、パテ、チーズ、魚介のパスタ (2026年の口コミ)。紫キャベツのマリネや茄子のバルサミコなど野菜の皿はあるが、ヴィーガンメニューの記載はない。',
    notes: '[立ち飲みイタリアン・河原町三条、ヴェネツィアのバーカロ] 市役所近くのヴェネツィア風バーカロ。手前のカウンターでチケッティとグラスワインなら1,800円ほど、ハイテーブルではパスタやフリット、コースも。15時から24時または深夜1時まで。英語メニューあり。テーブルは400円、立ち飲みはチャージなし。木曜休み。',
  });
}

// ================================================================ 和牛一乃音 WAGYU ICHINONE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044752/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_wagyu_ichinone', name: '和牛一乃音 WAGYU ICHINONE', category: 'OMNI',
    lat: 35.003968, lng: 135.776294, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki simmered in a sweet secret sauce (warishita) that reviewers say comes from a long-established Japanese restaurant in Fukui (April–May 2026 reviews); soy-based sauces normally contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an A5 Wagyu sukiyaki shop; egg yolk and cheese in the finishing rice (2026 reviews).',
    hours_raw: 'Tabelog: Mon and Wed–Sun and holidays 12:00–21:00; closed Tuesday. Reservations taken. 12 seats: 8 at the counter and private rooms for 2 and 4 (sunken kotatsu seating per a 2026 review); private hire up to 20. Non-smoking. Cards (incl. UnionPay), e-money and QR (incl. Alipay, WeChat Pay). Basement of the 祇園ファーストビル on the Shijo-dori approach to Yasaka Shrine, about a minute from the shrine. Opened 1 May 2026.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-machi Kitagawa on Shijo-dori by Yasaka Shrine — 5 min walk from Gion-Shijo',
    cuisine: 'Single-portion A5 Wagyu sukiyaki cooked in a hot stone pot, opened May 2026 (Tabelog; April–June 2026 reviews) · stone-pot sukiyaki with A5 misuji (top blade) or A5 rib roast in 60g, 120g or 180g portions (April 2026) · A5 misuji 120g ¥4,700; A5 rib roast 120g ¥5,300 (May 2026) · rice included; cheese stone-grilled rice to finish, made in the pot with the leftover sauce and egg yolk · shichimi and sansho to season',
    website: null, gmaps: gm('和牛一乃音 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu sukiyaki · Gion by Yasaka Shrine, a basement counter] A new (May 2026) basement counter a minute from Yasaka Shrine serving one-person A5 Wagyu sukiyaki bubbling in a hot stone pot — about ¥4,700–5,300 for 120g — finished with cheesy stone-grilled rice. Open from noon. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 May 2026 (Tabelog). The listing says each cut of Wagyu is chosen by a master connoisseur; a May 2026 reviewer calls the sauce a company secret, and an April 2026 reviewer says it comes from a long-established Japanese restaurant in Fukui. Reviewers describe the staff cooking the sukiyaki for the diner. Operator not identified; one April 2026 review was written at a pre-opening tasting.',
      philosophy: null,
      specialty: 'Stone-pot A5 Wagyu sukiyaki; cheese stone-grilled rice.',
      anecdotes: [
        { text: 'April 2026: "The dipping sauce deserves special mention. Sourced from a long-established Japanese restaurant in Fukui, its balance of sweetness and richness elevates the meat\'s flavor."', source: R + 'B526846031/' },
        { text: 'May 2026: "You don\'t have to worry about cooking it yourself; it\'s delicious right from the start… The secret sauce is a company secret."', source: R + 'B528711421/' },
      ],
      japanese_sources_summary: '食べログ: 和牛一乃音 WAGYU ICHINONE、すき焼き・牛料理、東山区祇園町北側281-1-1 祇園ファーストビル B1F、京阪祇園四条駅から徒歩5分、月・水〜日・祝 12:00〜21:00、火曜休み、予約可、12席 (カウンター8席、2名・4名の個室)、貸切20名まで、禁煙、カード・電子マネー・QR可、2026年5月1日オープン、目利きが選ぶ和牛を石焼で。口コミ (2026年4月〜6月、英語、うち1件はプレオープン): 一人用の石焼すき焼き、A5ミスジまたはA5ロースを60g・120g・180gで、A5ミスジ120g 4,700円、A5ロース120g 5,300円、割り下は福井の老舗日本料理店のものとの記載、七味と山椒、締めはチーズの石焼ごはん (卵黄入り)、八坂神社から徒歩1分。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B526846031', 'B527144569', 'B527458894', 'B527508017', 'B528711421', 'B528864706'])) },
    cultural_comfort: { level: 'japanese', note: 'Counter and small private rooms; staff cook the sukiyaki for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側281-1-1 祇園ファーストビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 1 May 2026) with reviews dated May and June 2026.' },
    pin_source: `Tabelog ${TB} (35.003968, 135.776294); GSI lot 京都府京都市東山区祇園町北側281番地 about 22m away; nearest pin kyoto_gionya_soba 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528864706/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Stone-pot sukiyaki, A5 misuji (top blade) 120g', '¥4,700', 'Sukiyaki', 'no', 'no', 'May 2026.', 'ishiyaki_sukiyaki_misuji'),
      it('', '', 'Stone-pot sukiyaki, A5 rib roast (ribeye) 120g', '¥5,300', 'Sukiyaki', 'no', 'no', 'May 2026.', 'ishiyaki_sukiyaki_rib'),
      it('', '', 'Cheese stone-grilled rice (finish)', null, 'Rice', 'no', 'no', 'May 2026.', 'cheese_ishiyaki_rice'),
    ] }, {
    cuisine: '石焼の鍋で仕上げる一人用のA5和牛すき焼き、2026年5月オープン (食べログ、2026年4月〜6月の口コミ)・A5ミスジまたはA5ロースの石焼すき焼き、60g・120g・180g (2026年4月)・A5ミスジ120g 4,700円、A5ロース120g 5,300円 (2026年5月)・ごはん付き、締めは残った割り下と卵黄で作るチーズの石焼ごはん・七味と山椒',
    neighborhood: '八坂神社前、四条通の祇園町北側。祇園四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: 甘い秘伝の割り下で煮るすき焼き。割り下は福井の老舗日本料理店のものと口コミにあり (2026年4月〜5月)。しょうゆベースのたれは通常小麦を含む。',
    vegan_detail: 'ヴィーガン不可: A5和牛のすき焼き店。締めのごはんに卵黄とチーズ (2026年の口コミ)。',
    notes: '[和牛すき焼き・八坂神社そば、地下のカウンター] 2026年5月、八坂神社から1分の地下にできたカウンター。一人用のA5和牛すき焼きを石焼の鍋で、120gで4,700〜5,300円ほど。締めはチーズの石焼ごはん。昼12時から。火曜休み。',
  });
}

// ================================================================ 菜処 やすかわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037642/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:30']);
  put({
    id: 'kyoto_saidokoro_yasukawa', name: '菜処 やすかわ (Saidokoro Yasukawa)', category: 'OMNI',
    lat: 35.005354, lng: 135.775992, cuisine_type: 'oden',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Kyoto oden shop whose menu runs to croquettes, ham and tenderloin cutlets, fried oysters, shrimp fry and fried sardines; oden includes chikuwa and other fish cakes (2023–2026 reviews). Ask about plain oden items such as daikon and egg — the broth was not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi with egg and beef tendon, sashimi, cutlets (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:30; closed Sunday; hours and closed days may change, so check before visiting. Reservations taken — a November 2024 reviewer says they are a must. No credit cards (Tabelog). 14 seats: 6 at the counter, 8 at tables. Non-smoking. In the ザ・マインビル, down the first alley north off Sueyoshi-cho east of Hanamikoji (November 2024 review). The shop moved here before December 2023.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion-machi Kitagawa, an alley east of Hanamikoji — 422m from Gion-Shijo',
    cuisine: 'A small Gion oden and obanzai shop (Tabelog; 2023–2026 reviews) · Kyoto-style oden in a light broth — daikon, egg, konnyaku, shirataki, chikuwa, ganmo, beef tendon — ¥300 each, beef tendon more (April 2026) · omakase course ¥4,000: obanzai, sashimi, five oden, three fried dishes and one rice dish such as mackerel sushi (April 2025) · oden potato salad; dashimaki tamago; fried small potatoes; croquettes, ham cutlet, tenderloin cutlet, fried oysters (2023–2026) · onigiri made to order; seared tuna (November 2024)',
    website: null, gmaps: gm('菜処 やすかわ 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Oden & obanzai · Gion north of Shijo, an alley counter] A cheerful 14-seat oden counter tucked down a Gion alley: light Kyoto oden at about ¥300 a piece, obanzai, cutlets and an oden-broth potato salad, or a ¥4,000 omakase course. Reasonable for Gion. Book ahead; no cards. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers since January 2023 describe a homey oden and obanzai shop that relocated within Gion before December 2023, with a cheerful owner who sees guests off and prices well below the Gion norm. Criticism: two reviewers found the oden broth too light or not fully soaked into every item (February and November 2024).',
      philosophy: null,
      specialty: 'Kyoto-style oden; oden potato salad; fried small potatoes.',
      anecdotes: [
        { text: 'April 2025: "Oh, and I also ordered the oden potato salad as an extra! It was like egg salad but with the flavor of oden broth—simply exquisite! This is a must-order!"', source: R + 'B504645434/' },
        { text: 'December 2023: "This was my first visit since they relocated, and the oden was just as good as ever, cooked in a wonderfully flavorful broth."', source: R + 'B477045208/' },
      ],
      japanese_sources_summary: '食べログ: 菜処 やすかわ、おでん・日本料理、東山区祇園町北側347-133 ザ・マインビル 1F、月〜土18:00〜23:30、日曜休み、営業時間・定休日は変更の可能性あり、予約可、カード不可、14席 (カウンター6・テーブル8)、禁煙。口コミ (2023年1月〜2026年4月、英語): 移転後も変わらぬ京風のおでん (2023年12月)、大根・卵・こんにゃく・しらたき・ちくわ・がんも・牛すじ、1品300円で牛すじは少し高め (2026年4月)、おまかせコース4,000円 (おばんざい、刺身、おでん5品、揚げ物3品、ごはん1品、2025年4月)、おでんのポテトサラダ、だし巻き、小芋の揚げ物、コロッケ、ハムカツ、ヒレカツ、カキフライ、その場で握るおにぎり、まぐろのたたき、明るい店主、予約必須との声 (2024年11月)、だしが薄いとの声 (2024年2月・11月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B459772218', 'B463621685', 'B470708651', 'B477045208', 'B479361094', 'B495254468', 'B495746432', 'B495863791', 'B504645434', 'B526010587', 'B527186789', 'B534452576'])) },
    cultural_comfort: { level: 'japanese', note: 'Small counter shop; book ahead; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-133 ザ・マインビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January and April 2026.' },
    pin_source: `Tabelog ${TB} (35.005354, 135.775992); GSI lot 京都府京都市東山区祇園町北側347番地 about 70m away; nearest pin kyoto_gion_ichirinka 6.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526010587/', R + 'B504645434/'],
    price_note: 'Oden price from an April 2026 review; course price from an April 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Oden, per piece (beef tendon extra)', '¥300', 'Oden', 'ask', 'no', 'April 2026.', 'oden_piece'),
      it('', '', 'Omakase course (obanzai, sashimi, 5 oden, 3 fried, rice)', '¥4,000', 'Course', 'no', 'no', 'April 2025.', 'omakase_course'),
      it('', '', 'Oden potato salad', null, 'Small dish', 'ask', 'no', 'April 2025; April 2026.', 'oden_potato_salad'),
      it('', '', 'Fried small potatoes', null, 'Fried', 'ask', 'ask', 'November 2024; April 2026.', 'fried_koimo'),
      it('', '', 'Dashimaki tamago', null, 'Small dish', 'ask', 'no', 'November 2024; April 2026.', 'dashimaki'),
    ] }, {
    cuisine: '祇園の小さなおでんとおばんざいの店 (食べログ、2023〜2026年の口コミ)・あっさりしただしの京風おでん、大根・卵・こんにゃく・しらたき・ちくわ・がんも・牛すじ、1品300円で牛すじは少し高め (2026年4月)・おまかせコース4,000円: おばんざい、刺身、おでん5品、揚げ物3品、さば寿司などのごはん1品 (2025年4月)・おでんのポテトサラダ、だし巻き、小芋の揚げ物、コロッケ、ハムカツ、ヒレカツ、カキフライ (2023〜2026年)・その場で握るおにぎり、まぐろのたたき (2024年11月)',
    neighborhood: '花見小路の東、祇園町北側の路地。祇園四条から422m',
    gf_detail: 'グルテンフリーではない: コロッケ、ハムカツ、ヒレカツ、カキフライ、エビフライ、いわしのフライなどが並ぶ京風おでんの店。おでんにはちくわなどの練り物も (2023〜2026年の口コミ)。大根や卵などは要確認、だしの説明はなし。',
    vegan_detail: 'ヴィーガン不可: だしのおでんに卵や牛すじ、刺身、カツ (2023〜2026年の口コミ)。',
    notes: '[おでんとおばんざい・祇園、路地のカウンター] 祇園の路地にある14席の明るいおでん屋。あっさりした京風おでんが1品300円ほど、おばんざい、カツ、おでんだしのポテトサラダ、4,000円のおまかせコースも。祇園にしては手頃。要予約、カード不可。日曜休み。',
  });
}

save();
