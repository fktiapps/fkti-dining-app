// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 45.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 餃子の王将 七条烏丸店 — skipped: national chain.
//   - 仏男 (French Man) — skipped: flagship of 有限会社らくちん's 大衆酒場フレンチマン brand; the company runs 11 shops.
//   + 七番館 Restaurant Nanabankan (French-based yoshoku bistro by Kyoto Station; since 2002; owner-chef 折橋正明)
//   + キッチン くじら Kitchen Kujira (obanzai set-meal diner and bento near Kumano Shrine; since 2017)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + HAMBURG LABO 四条西洞院店 (teppan-finished hamburg steaks; since 2007) — three HAMBURG LABO shops found, all in Kyoto
//     (this one, the Pontocho shop 26038824 and HAMBURG LABO PREMIUM Sakaimachi-Rokkaku per Gurunavi); a local group under 5.
//   + 小籠包 包伸一 ツツミシンイチ (xiaolongbao izakaya near Higashi Hongan-ji; since 2021) — invoice 株式会社ｂｉｇ ｎｏｓｅ, a Kyoto
//     company whose site lists this one brand and one shop; billed as an affiliate of a Tokyo Bib Gourmand shop.
//   None of the four is in data/kyoto.json: grep by id, name (七番館/Nanabankan, くじら/Kujira, HAMBURG LABO, 包伸一) and address
//   (真苧屋町210, 山王町43-20, 妙伝寺町694, 新シ町139) found none.
//   Service charges: 包伸一 ¥480 per person (all-you-can-eat house zha cai); HAMBURG LABO none; くじら none; 七番館 none listed.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005245', 'national chain: 餃子の王将');
skip('26025933', '仏男 (French Man): flagship of a chain — Tabelog calls it "the origin of the ever-popular 大衆酒場フレンチマン" and names frenchman-rakuchin.jp, whose company page (read 2026-11-06) gives 有限会社らくちん with 11 shops (8 directly run, 3 franchised)');

// ================================================================ 七番館
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002047/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.nanabankan.com/'; const ABOUT = SITE + 'about/'; const FOOD = SITE + 'food/';
  const LD = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_restaurant_nanabankan', name: '七番館 (Restaurant Nanabankan)', category: 'MOM_AND_POP',
    lat: 34.989118152490505, lng: 135.76049136512364, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried and sauced yoshoku — chicken katsu, fried prawns, curry, demi-glace hamburg, gratin — plus grilled fish and salads; no gluten information is published (official menu; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop uses vegetables from contract farms in Yagi, but the menu is meat- and fish-led (Tabelog; official site).',
    hours_raw: 'Lunch 11:30–13:30, dinner 17:00–22:00 (last order 21:00); closed Sunday, except for private bookings (official site). Cash only (official site; Tabelog; October 2026). Bookings online or by phone, with a cancellation fee (official site). 30 seats per the official site, 35 per Tabelog (28 at tables, 7 at the counter); a private room and a semi-private room for 2–6; parties up to 30 seated or 40 standing; heated tobacco only at some tables (official site; Tabelog). Vegetables from the contract farmers are sometimes on sale in the shop (Tabelog). On Shichijo-dori east of Karasuma, 5 min walk from Kyoto Station Exit 1 (official site).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Shichijo, 5 min walk north of Kyoto Station',
    cuisine: 'French-based yoshoku bistro (official site) · lunch, each with salad, miso soup, rice and a self-service coffee: A (meat of the day) or B (fish of the day) ¥1,000, C (both) ¥1,400; homemade curry ¥1,000 (10 a day), with chicken kara-age ¥1,300, pork katsu ¥1,500, wagyu hamburg ¥1,900; wagyu hamburg steak with demi-glace ¥2,100; two 20 cm fried prawns with tartar ¥2,100; beef-rib stew ¥2,800 (official menu) · dinner à la carte: hors d’oeuvres, Caesar salad with prosciutto, seared-salmon carpaccio with mango-chilli sauce, prawn and mushroom ajillo, curry poutine, aubergine and meat-sauce gratin, fish, meat and pasta; courses from ¥5,300 (official menu; December 2025) · several dozen wines (official site)',
    website: SITE, gmaps: gm('レストラン七番館 京都駅'), menu_url: FOOD,
    notes: "[Yoshoku bistro · Karasuma-Shichijo by Kyoto Station, a hotel-trained chef's Showa-style diner] A retro, Showa-style restaurant five minutes from Kyoto Station, on a plot the owner-chef's family has held for three generations. The ¥1,000 lunch — a daily meat or fish plate such as chicken katsu with tomato sauce, with rice, miso soup and a self-serve coffee — is one of the best deals near the station. At night it turns French-leaning bistro with wine and courses from about ¥5,300. Cash only; closed Sunday.",
    chef_bio: { chef_name: '折橋正明', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site: owner-chef 折橋正明 trained for 17 years in French cooking at a well-known Kyoto hotel, then opened a bistro-style “French-based yoshoku restaurant” on this plot in front of Kyoto Station, held by the family since the grandfather’s generation; the restaurant marked its 21st anniversary on 15 March 2023. Vegetables come from contract farmers in Yagi, Kyoto.',
      philosophy: 'Per the official site: “good to look at, delicious to eat, and something you want to eat again” — so that diners of every age can eat favourite dishes to the full.',
      specialty: 'Daily lunch plates and homemade curry.',
      anecdotes: [
        { text: 'A November 2025 couple found a Showa-era yoshoku place in front of the station that had not changed for the tourists.', source: R + 'B20065783/' },
        { text: 'A December 2025 party guest wished the curry served at the end of the course came on its own.', source: R + 'B518185771/' },
        { text: 'A December 2025 traveller on Course A was told at 21:00 that the kitchen was closing.', source: R + 'B520886820/' },
      ],
      japanese_sources_summary: '公式サイト (nanabankan.com): 京都駅の洋食ビストロ「レストラン七番館」、老若男女どなたでも好きな物を好きなだけ、オーナーシェフ 折橋正明 (京都の有名ホテルで17年間フレンチ一筋)、祖父の代から続く京都駅前のこの地で「フレンチベースの洋食屋」、モットーは「見た目よく」「食べておいしく」「食べた後にまた食べてみたい」、数十種類のワイン、京都八木町の契約畑の野菜、2023年3月15日で21周年、ランチ (サラダ・みそ汁・ご飯・セルフサービスコーヒー付き): Aランチ (本日のお肉料理) 1,000円、Bランチ (本日のお魚料理) 1,000円、Cランチ 1,400円、大海老フライ2,100円、自家製カレーライス1,000円 (限定10食)、チキン唐揚げカレー1,300円、ポークカツカレー1,500円、和牛ハンバーグカレー1,900円、和牛ハンバーグステーキ2,100円、ビーフシチュー2,800円、前菜・魚・肉・パスタ・コース、ランチ11:30〜13:30、ディナー17:00〜22:00 (L.O. 21:00)、日曜定休 (貸切は営業)、30席、宴会は着席30名・立食40名、個室・半個室、現金のみ、下京区七条通烏丸東入ル真苧屋町210、京都駅1番出口から徒歩5分。食べログ: フレンチ・ビストロ・洋食、35席 (テーブル28、カウンター7)、加熱式たばこのみ一部の席で可、ベジタリアン対応、契約農家の野菜を店内で販売することも。口コミ (2025〜2026年、英語): 昭和の雰囲気、チキンカツのトマトソース、日替わりの肉と魚、ふりかけ1袋、ご飯大盛り、コースA 5,300円、締めのカレー、現金のみ。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, FOOD, R + 'B20065783/', R + 'B518185771/', R + 'B520886820/', R + 'B521661565/', R + 'B522039302/', R + 'B524171655/', R + 'B525973781/', R + 'B528397311/', R + 'B530496251/', R + 'B530574266/', R + 'B530775552/', R + 'B537047672/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸東入ル真苧屋町210',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated July 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989118, 135.760491); cross-checked: GSI 京都府京都市下京区真苧屋町210番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD],
    price_note: 'Official lunch menu (tax included), read November 2026.', last_checked: TODAY, items: [
      it('Aランチ', '', 'Lunch A: meat of the day, salad, miso soup, rice, coffee', '¥1,000', 'Lunch', 'ask', 'no', '', 'lunch_a'),
      it('Bランチ', '', 'Lunch B: fish of the day, salad, miso soup, rice, coffee', '¥1,000', 'Lunch', 'ask', 'no', '', 'lunch_b'),
      it('Cランチ', '', 'Lunch C: meat and fish of the day', '¥1,400', 'Lunch', 'ask', 'no', '', 'lunch_c'),
      it('自家製カレーライス', '', 'Homemade curry rice with salad and miso soup', '¥1,000', 'Curry', 'no', 'no', 'Ten a day.', 'curry'),
      it('和牛ハンバーグステーキ 自家製デミグラスソース', '', 'Wagyu hamburg steak, house demi-glace', '¥2,100', 'Lunch', 'no', 'no', '', 'hamburg'),
      it('国産牛バラ肉のビーフシチュー', '', 'Japanese beef-rib stew', '¥2,800', 'Lunch', 'no', 'no', '', 'beef_stew'),
    ] }, {
    cuisine: 'フレンチベースの洋食ビストロ (公式サイト)・ランチはサラダ、みそ汁、ご飯、セルフサービスのコーヒー付き: Aランチ (本日のお肉料理) かBランチ (本日のお魚料理) 1,000円、Cランチ (両方) 1,400円、自家製カレーライス1,000円 (限定10食)、チキン唐揚げカレー1,300円、ポークカツカレー1,500円、和牛ハンバーグカレー1,900円、和牛ハンバーグステーキのデミグラスソース2,100円、20cmの大海老フライ2本とタルタル2,100円、国産牛バラ肉のビーフシチュー2,800円 (公式のメニュー)・夜はアラカルト: オードブル、生ハムのシーザーサラダ、炙りサーモンのカルパッチョ マンゴーチリソース、海老とマッシュルームのアヒージョ、カレープーティン、茄子とミートソースのグラタン、魚、肉、パスタ、コースは5,300円から (公式のメニュー、2025年12月)・数十種類のワイン (公式サイト)',
    neighborhood: '烏丸七条、京都駅から北へ徒歩5分',
    gf_detail: '要確認。チキンカツ、海老フライ、カレー、デミグラスのハンバーグ、グラタンなどの揚げ物やソースの洋食に、焼き魚やサラダ。グルテンの情報は公開されていない (公式のメニュー、口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応、八木町の契約畑の野菜を使うが、メニューは肉と魚が中心 (食べログ、公式サイト)。',
    notes: '[洋食ビストロ・京都駅近くの烏丸七条、ホテル出身のシェフの昭和の洋食屋] 京都駅から徒歩5分、シェフの祖父の代から続く土地のレトロな店。1,000円のランチは、トマトソースのチキンカツなど日替わりの肉か魚に、ご飯、みそ汁、セルフのコーヒー付きで、駅前でも指折りのお得さ。夜はワインと5,300円ほどからのコースのフレンチ寄りのビストロに。現金のみ、日曜休み。',
  });
}

// ================================================================ キッチン くじら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028663/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/kitchenkujira/';
  const WD = day(['08:00', '14:00'], ['17:30', '20:30']); const SA = day(['08:00', '13:30']);
  put({
    id: 'kyoto_kitchen_kujira', name: 'キッチン くじら (Kitchen Kujira)', category: 'OMNI',
    lat: 35.01780340786712, lng: 135.77776376047913, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A daily set of a fried main (kara-age, tonkatsu, chicken nanban, tempura) with five vegetable obanzai, rice and miso or sake-lees soup; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish mains; the obanzai are not described as vegan (reviews).',
    hours_raw: 'Monday–Friday 8:00–14:00 and 17:30–20:30; Saturday 8:00–13:30; closed Sunday; hours may change (Tabelog). Takeout bento until 14:00 and 20:00 (November 2025). The daily lunch can sell out by 12:30 (November 2025); daily specials are posted on Instagram @kitchenkujira (December 2025). No reservations. Cash only (Tabelog; November 2025). No service or appetiser charge (Tabelog). 15 seats: 10 at tables, 4 at the counter; open kitchen; non-smoking (Tabelog). Near Kumano Shrine, 4 min walk from the Kumano-jinja-mae bus stop, 505 m from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin by Kumano Shrine — 505 m from Jingu-Marutamachi Stn',
    cuisine: 'Home-style set meals heavy on vegetables (2025–2026 reviews) · the daily set ¥1,000: a main such as shrimp fry and kara-age, tonkatsu, chicken nanban with tartar, chicken tempura with aonori or teriyaki chicken tsukune, with five obanzai (komatsuna ohitashi, carrot salad, potato salad, kinpira gobo, cabbage salad), rice with free refills, a vegetable-packed miso soup or sake-lees soup and hojicha (November 2025–June 2026) · bento to take away; dashimaki to add; beer or highball +¥200 (2025)',
    website: IG, gmaps: gm('キッチンくじら 聖護院'), menu_url: IG,
    notes: "[Set-meal diner · Shogoin by Kumano Shrine, obanzai and fried mains] A small, open-kitchen diner by Kyoto University Hospital that opens at 8:00 and fills up at lunch. One daily set for about ¥1,000: a crisp fried main — chicken nanban, kara-age, tonkatsu — with five vegetable obanzai, a hearty miso or sake-lees soup and free rice refills; bento too. The lunch can sell out by 12:30. Cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 22 February 2017 (Tabelog). Reviewers (2025–2026) describe a daily set built around five vegetable obanzai, with specials posted on Instagram.',
      philosophy: null,
      specialty: 'Daily set with five obanzai.',
      anecdotes: [
        { text: 'A December 2025 diner ate all the vegetables before touching the aonori chicken tempura.', source: R + 'B518730224/' },
        { text: 'A November 2025 visitor arrived at 12:30 to find the day’s set sold out and lunch over.', source: R + 'B518868073/' },
        { text: 'A December 2025 guest near the hospital liked the quick set but went home smelling of the fryer.', source: R + 'B520667350/' },
      ],
      japanese_sources_summary: '食べログ: キッチン くじら、食堂・弁当・カフェ、左京区聖護院山王町43-20、市バス「熊野神社前」から徒歩4分、神宮丸太町駅5番出口から徒歩10分、月〜金 8:00〜14:00・17:30〜20:30、土 8:00〜13:30、日曜定休、予約不可、カード・電子マネー・QR不可、サービス料・お通し代なし、15席 (テーブル10、カウンター4)、禁煙、テイクアウト、2017年2月22日オープン。口コミ (2025〜2026年、英語): 日替わり定食1,000円、おばんざい5種 (小松菜のおひたし、人参のサラダ、ポテトサラダ、きんぴらごぼう、キャベツのサラダ)、海老フライと唐揚げ、とんかつ、チキン南蛮、とり天、照り焼きのつくね、具だくさんの味噌汁や粕汁、ご飯おかわり無料、ほうじ茶、弁当、だし巻き、ドリンク+200円、Instagram @kitchenkujira、昼は12時半に売り切れることも、現金のみ。',
      confidence: 'medium', sources: [TB, IG, R + 'B505082992/', R + 'B512863558/', R + 'B517536106/', R + 'B517906646/', R + 'B518730224/', R + 'B518868073/', R + 'B520569470/', R + 'B520667350/', R + 'B523229017/', R + 'B525320765/', R + 'B525349513/', R + 'B530234644/'] },
    cultural_comfort: { level: 'japanese', note: 'One daily set; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.017803, 135.777764); cross-checked: GSI 京都府京都市左京区聖護院山王町43番地 (lot) 103m — a large lot; 9m from kyr_daiichi_asahi_kumano_ten; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517536106/', R + 'B505082992/'],
    price_note: 'Prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily set: fried main, five obanzai, rice, soup', '¥1,000', 'Set', 'ask', 'no', 'Free rice refills; sells out.', 'higawari'),
      it('', '', 'Bento', '', 'Bento', 'ask', 'no', 'Takeout.', 'bento'),
      it('', '', 'Drink with the set (beer, highball)', '+¥200', 'Drink', 'ask', 'ask', 'April 2025.', 'drink'),
    ] }, {
    cuisine: '野菜たっぷりの家庭的な定食 (2025〜2026年の口コミ)・日替わり定食1,000円: 海老フライと唐揚げ、とんかつ、タルタルのチキン南蛮、青のりのとり天、照り焼きのつくねなどのおかずに、おばんざい5種 (小松菜のおひたし、人参のサラダ、ポテトサラダ、きんぴらごぼう、キャベツのサラダ)、おかわり自由のご飯、具だくさんの味噌汁か粕汁、ほうじ茶 (2025年11月〜2026年6月)・持ち帰りの弁当、追加のだし巻き、ビールやハイボールは+200円 (2025年)',
    neighborhood: '熊野神社そばの聖護院。神宮丸太町駅から505m',
    gf_detail: '要確認。唐揚げ、とんかつ、チキン南蛮、天ぷらなどの揚げ物のおかずに、野菜のおばんざい5種、ご飯、味噌汁や粕汁の日替わり定食。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉や魚のおかず、おばんざいもヴィーガンとはされていない (口コミ)。',
    notes: '[定食屋・熊野神社そばの聖護院、おばんざいと揚げ物] 京大病院近くの、朝8時から開くオープンキッチンの小さな食堂。昼はすぐ埋まる。日替わり定食は1,000円ほどで、チキン南蛮、唐揚げ、とんかつなどカリッとしたおかずに、野菜のおばんざい5種、具だくさんの味噌汁か粕汁、ご飯おかわり自由。弁当も。昼は12時半に売り切れることも。現金のみ、日曜休み。',
  });
}

// ================================================================ HAMBURG LABO 四条西洞院店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005731/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hamburg-labo.com/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_hamburg_labo_shijo_nishinotoin', name: 'HAMBURG LABO 四条西洞院店 (Hamburg Labo Shijo-Nishinotoin)', category: 'OMNI',
    lat: 35.003357917869174, lng: 135.7554171503489, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamburg steaks steamed then finished on the teppan, with sauces such as demi-glace and teriyaki, and toppings; onion gratin soup and baguette also served; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef and wagyu hamburg steaks (Tabelog).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00); dinner 17:00–23:00 (last food order 22:00, drinks 22:30); closed Wednesday and the 2nd and 4th Thursday (Tabelog). Bookings online — the shop warns that diners mix it up with its Pontocho branch; one main per person; no rice sets at dinner (Tabelog; August 2025). No cover charge (Tabelog). Cards, e-money and QR (Tabelog). 31 seats: a 9-seat counter facing the teppan, tables and two raised tatami rooms for four; non-smoking; free Wi-Fi; English and Chinese menus; children and strollers welcome (Tabelog). 5 min walk from Shijo / Karasuma Stns (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Nishinotoin — 5 min walk from Shijo Stn',
    cuisine: 'Hamburg steak specialist: patties steamed then finished on a hot iron plate, 100% domestic pork, beef-and-pork, wagyu or 100% beef, in sizes such as 160 g and 300 g (Tabelog; 2025–2026 reviews) · sauces demi-glace, teriyaki, green-onion salt; toppings avocado, cheese, camembert, extra onions (2025) · pork hamburg with camembert, large rice and red miso soup ¥3,400 at dinner (August 2025) · lunch sets; wagyu dice steak set ¥2,900 (September 2026) · French onion gratin soup, Caesar salad, baguette (December 2025) · wine and sake (Tabelog)',
    website: SITE, gmaps: gm('HAMBURG LABO 四条西洞院'), menu_url: TB,
    notes: "[Hamburg steak · Shijo-Nishinotoin, teppan-finished patties] A calm, polished hamburg-steak house where each patty — pork, beef-and-pork or wagyu — is steamed, then seared on the teppan in front of the counter, and dressed with demi-glace, teriyaki or toppings like avocado and camembert. Juicy and generous; many reviewers find it pricey (lunch about ¥2,000–3,000, dinner more). Tatami rooms for families. Closed Wednesday and the 2nd and 4th Thursday.",
    chef_bio: { chef_name: null, roles: ['Chef not named; one of three HAMBURG LABO shops in Kyoto'], origin: null,
      background: 'Opened 12 July 2007 (Tabelog). Tabelog’s introduction: carefully made hamburgers and wagyu steaks; steamed-and-grilled hamburgers cooked one by one on a hot plate; an original hamburger of 100% domestic pork and wagyu; trimmings from preparation are used in dishes to reduce waste. Other shops: Pontocho (Tabelog 26038824) and HAMBURG LABO PREMIUM in Sakaimachi-Rokkaku (Gurunavi).',
      philosophy: null,
      specialty: 'Teppan-finished hamburg steak.',
      anecdotes: [
        { text: 'An eight-time August 2025 regular noticed the à la carte menu had gone and the focus was now all hamburg.', source: R + 'B460937842/' },
        { text: 'A December 2025 lunch guest balked at the prices, then found the cheese hamburg "simply amazing" as the juices ran.', source: R + 'B522073387/' },
        { text: 'A March 2026 family booked a tatami room but found the food not worth the price and a staff answer condescending.', source: R + 'B527181053/' },
      ],
      japanese_sources_summary: '食べログ: HAMBURG LABO 四条西洞院店、ハンバーグ・ステーキ・ダイニングバー、下京区西洞院通四条下ル妙伝寺町694 コンツェルト四条西洞院101、四条駅・烏丸駅から徒歩5分、昼11:30〜14:30 (L.O. 14:00)、夜17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、水曜と第2・第4木曜定休、先斗町店との予約間違いに注意、1人1メイン、チャージ料なし、カード・電子マネー・QR可、31席 (カウンター9、テーブル、4名の小上がり座敷2)、禁煙、Wi-Fi、英語・中国語メニュー、子ども・ベビーカー可、2007年7月12日オープン。公式紹介: 蒸し焼きで肉汁を閉じ込め鉄板で仕上げるハンバーグ、アボカドやチーズのトッピング、和牛ステーキ、国産豚と和牛のオリジナルハンバーグ、仕込みの端材を料理に活用。口コミ (2025〜2026年、英語): 豚100%、合挽き、黒毛和牛、牛100%、160g・300g、デミグラス、照り焼き、ねぎ塩、カマンベール、夜はライスセットなし、豚ハンバーグとカマンベールと大盛りご飯と赤だしで3,400円、和牛サイコロステーキのセット2,900円、オニオングラタンスープ、シーザーサラダ、バゲット、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B460937842/', R + 'B511500257/', R + 'B512725804/', R + 'B514601769/', R + 'B517053048/', R + 'B517970970/', R + 'B519847925/', R + 'B522073387/', R + 'B527088991/', R + 'B527181053/', R + 'B536349381/', R + 'B536767544/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus; online booking (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西洞院通四条下ル妙伝寺町694 コンツェルト四条西洞院 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003358, 135.755417); cross-checked: GSI 京都府京都市下京区妙伝寺町694番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B460937842/', R + 'B536349381/'],
    price_note: 'Prices from August 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork hamburg steak with camembert, large rice and red miso soup (dinner)', '¥3,400', 'Dinner', 'ask', 'no', 'August 2025 total.', 'pork_camembert'),
      it('', '', 'Wagyu dice steak set (lunch)', '¥2,900', 'Lunch', 'ask', 'no', 'September 2026.', 'dice_steak'),
      it('', '', 'Wagyu hamburg steak, demi-glace', '', 'Main', 'ask', 'no', '', 'wagyu_hamburg'),
      it('', '', 'French onion gratin soup', '', 'Side', 'no', 'no', '', 'onion_gratin'),
    ] }, {
    cuisine: 'ハンバーグ専門店: 蒸し焼きにして鉄板で仕上げるハンバーグ、国産豚100%、合挽き、和牛、牛100%、160gや300gなど (食べログ、2025〜2026年の口コミ)・ソースはデミグラス、照り焼き、ねぎ塩、トッピングはアボカド、チーズ、カマンベール、追加の玉ねぎ (2025年)・夜の豚ハンバーグのカマンベールのせ、大盛りご飯、赤だしで3,400円 (2025年8月)・ランチセット、和牛サイコロステーキのセット2,900円 (2026年9月)・オニオングラタンスープ、シーザーサラダ、バゲット (2025年12月)・ワインと日本酒 (食べログ)',
    neighborhood: '四条西洞院。四条駅から徒歩5分',
    gf_detail: '要確認。蒸してから鉄板で仕上げるハンバーグに、デミグラスや照り焼きなどのソースとトッピング。オニオングラタンスープやバゲットも。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、牛、和牛のハンバーグ (食べログ)。',
    notes: '[ハンバーグ・四条西洞院、鉄板仕上げのハンバーグ] 落ち着いた洗練されたハンバーグ店。豚、合挽き、和牛のパティを蒸してから、カウンター前の鉄板で焼き上げ、デミグラスや照り焼き、アボカドやカマンベールのトッピングで。ジューシーでボリュームがあるが、高めと感じる口コミが多い (昼2,000〜3,000円ほど、夜はそれ以上)。家族向けの座敷も。水曜と第2・第4木曜休み。',
  });
}

// ================================================================ 小籠包 包伸一 ツツミシンイチ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26035257/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.bignose-osaka.com/brands/tsutsumishin-ichi/shops/kyoto/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4120001182268';
  const WD = day(['17:00', '22:30']); const WE = day(['16:00', '22:30']);
  put({
    id: 'kyoto_tsutsumi_shinichi', name: '小籠包 包伸一 ツツミシンイチ (Shaolongbao Tsutsumi Shinichi)', category: 'OMNI',
    lat: 34.989401217878644, lng: 135.7572995202066, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a xiaolongbao house — thin wheat wrappers rolled to order, gyoza, dan dan noodles and soy-seasoned Taiwanese dishes (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-chicken-stock xiaolongbao, lu rou fan and chicken dishes (official site).',
    hours_raw: 'Monday–Friday 17:00–22:30, Saturday, Sunday and holidays 16:00–22:30 (last food order 21:45, drinks 22:00); no fixed closing day (Tabelog; official site). Bookings recommended — it fills soon after opening; semi-private room by phone only; 60- and 90-minute seat-only bookings (Tabelog; September 2026). ¥480 per person for all-you-can-eat house zha cai (Tabelog). From 1 July 2026 payment is cash, PayPay or WESMO only (Tabelog). QR-code ordering (September 2026). 44–46 seats: counter and tables, semi-private room up to 10, Taiwan-imported interior and murals by a picture-book artist; non-smoking; English menu (Tabelog; official site). Next to Higashi Hongan-ji, 5 min walk from Kyoto Station (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi Hongan-ji, 5 min walk north of Kyoto Station',
    cuisine: 'Xiaolongbao made to order — dough rolled from scratch and steamed at the table — with Taiwanese dishes (official site) · plain xiaolongbao with a 7-hour stock, 4 pieces ¥640; shiitake, crab miso, scallop, oyster, truffle and shungiku versions (official site; 2026 reviews) · yodare chicken ¥860, lu rou fan ¥690, spicy chicken, bang bang chicken, steamed fish, crab-miso mapo aubergine, daikon cake, steamed gyoza, spring rolls, Kyoto mochi-pork spare ribs, sesame balls, almond tofu (official site; 2026 reviews) · courses ¥5,500–7,500 with drinks (official site) · Tsingtao ¥730, Taiwan beer ¥710, 12-year Shaoxing ¥690 a glass, osmanthus wine (official site; September 2026)',
    website: SITE, gmaps: gm('小籠包 包伸一 京都'), menu_url: SITE,
    notes: "[Xiaolongbao · Higashi Hongan-ji by Kyoto Station, Taiwan-style dumpling bar] A lively, Taiwan-styled xiaolongbao bar five minutes from Kyoto Station, linked to a Tokyo Bib Gourmand shop: wrappers are rolled to order and steamed at your table, so the soup stays in. Try plain, truffle, scallop or shungiku (four for about ¥640 plain), with yodare chicken and lu rou fan. Book — it fills fast. Cash or PayPay only; ¥480 zha cai charge.",
    chef_bio: { chef_name: null, roles: ['Chefs not named; run by 株式会社big nose (invoice register; official site)'], origin: null,
      background: 'Opened 8 February 2021 (Tabelog). Per the official site: the first Kyoto shop of an affiliate of a Tokyo restaurant listed as Michelin Bib Gourmand 2019; Tabelog Hot Restaurant two years running; every xiaolongbao is rolled from scratch after ordering, wrapped thin enough to hold the soup; interior imported from Taiwan. Operator 株式会社ｂｉｇ ｎｏｓｅ, registered at the shop’s address (NTA invoice register); its site lists this one brand and one shop.',
      philosophy: null,
      specialty: 'Xiaolongbao steamed at the table.',
      anecdotes: [
        { text: 'An August 2026 diner thought the name silly, then found the xiaolongbao "incredibly delicious".', source: R + 'B534269326/' },
        { text: 'A September 2026 guest waited by the entrance counter, watching the staff wrap the dumplings, and struggled with the QR ordering.', source: R + 'B535997806/' },
        { text: 'An October 2026 diner booked a month ahead and ordered the shungiku xiaolongbao twice.', source: R + 'B537767822/' },
      ],
      japanese_sources_summary: '公式サイト: 東京ミシュランビブグルマン系列店 小籠包 包伸一 ツツミシンイチ、京都駅徒歩5分、東京都内・ミシュランビブグルマン2019掲載店舗の系列店が京都に初出店、食べログHOTレストラン2年連続、テーブル席で蒸す出来立て小籠包、オーダーが入ってから生地を一から伸ばし皮を薄くして包む、七時間煮込んだスープの原味 (プレーン) 4ケ640円、椎茸、蟹味噌、よだれ鶏860円、ルーロー飯690円、台湾から直接輸入したインテリア、絵本作家の壁画、46席、コース5,500〜7,500円、青島ビール730円、台湾ビール710円、甕出し紹興酒十二年グラス690円、料理L.O. 21:45、ドリンク22:00、閉店22:30、定休日なし、下京区新シ町139-3。食べログ: 居酒屋・中華・餃子、平日17:00〜22:30、土日祝16:00〜22:30、不定休、半個室は電話予約のみ、自家製ザーサイ食べ放題480円、2026年7月1日から現金・PayPay・WESMOのみ、44席、禁煙、英語メニュー、2021年2月8日オープン、インボイス T4120001182268 (株式会社ｂｉｇ ｎｏｓｅ)。口コミ (2026年、英語): トリュフ、帆立、牡蠣、春菊の小籠包、よだれ鶏、棒棒鶏、蒸し魚、蟹味噌麻婆茄子、大根餅、ごま団子、杏仁豆腐、桂花陳酒、QRコードで注文、入口で包む様子が見える、東本願寺の隣、予約必須。',
      confidence: 'medium', sources: [TB, SITE, INV, R + 'B534269326/', R + 'B534612533/', R + 'B534702477/', R + 'B535268443/', R + 'B535781577/', R + 'B535997806/', R + 'B536195704/', R + 'B536201805/', R + 'B537594675/', R + 'B537767822/', R + 'B538489795/', R + 'B538769442/'] },
    cultural_comfort: { level: 'english', note: 'English menu; QR-code ordering (Tabelog; September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新シ町139-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with live booking; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.989401, 135.7573); cross-checked: GSI 京都府京都市下京区新シ町139番地 (lot) 51m; 12m from kyoto_jijibaba_daisan_sakaba; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site prices (tax included), November 2026.', last_checked: TODAY, items: [
      it('原味（プレーン） 4ケ', '', 'Plain xiaolongbao, 4 pieces', '¥640', 'Xiaolongbao', 'no', 'no', '', 'genmi'),
      it('よだれ鶏', '', 'Yodare chicken (mouth-watering chicken)', '¥860', 'Dishes', 'ask', 'no', '', 'yodare'),
      it('ルーロー飯', '', 'Lu rou fan (braised pork rice)', '¥690', 'Rice', 'ask', 'no', '', 'lurou'),
      it('', '', 'Course with 2 drinks, 15 dishes', '¥5,500', 'Course', 'no', 'no', '', 'course_5500'),
      it('', '', 'Top course with 2-hour free-flow, 19 dishes', '¥7,500', 'Course', 'no', 'no', '', 'course_7500'),
    ] }, {
    cuisine: '注文ごとに生地から伸ばし、テーブルで蒸す小籠包と台湾料理 (公式サイト)・七時間煮込んだスープのプレーン4個640円、椎茸、蟹味噌、帆立、牡蠣、トリュフ、春菊 (公式サイト、2026年の口コミ)・よだれ鶏860円、ルーロー飯690円、辛い鶏、棒棒鶏、蒸し魚、蟹味噌の麻婆茄子、大根餅、蒸し餃子、春巻き、京都もち豚のスペアリブ、ごま団子、杏仁豆腐 (公式サイト、2026年の口コミ)・ドリンク付きコース5,500〜7,500円 (公式サイト)・青島ビール730円、台湾ビール710円、紹興酒十二年グラス690円、桂花陳酒 (公式サイト、2026年9月)',
    neighborhood: '東本願寺のそば、京都駅から北へ徒歩5分',
    gf_detail: 'グルテンフリー不可。注文ごとに伸ばす小麦の皮の小籠包、餃子、担々麺、醤油味の台湾料理 (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉と鶏ガラスープの小籠包、ルーロー飯、鶏料理 (公式サイト)。',
    notes: '[小籠包・京都駅近くの東本願寺、台湾風の小籠包酒場] 京都駅から徒歩5分の、台湾風のにぎやかな小籠包の店。東京のビブグルマン店の系列。注文ごとに皮を伸ばし、テーブルで蒸すのでスープが逃げない。プレーン (4個640円ほど)、トリュフ、帆立、春菊を、よだれ鶏やルーロー飯と。予約がおすすめ、すぐ埋まる。現金かPayPayのみ、ザーサイ代480円。',
  });
}

save();
