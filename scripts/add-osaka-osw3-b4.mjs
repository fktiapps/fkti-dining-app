// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 4.
//   + 華蓮 大阪心斎橋店 Karen (JA Kagoshima's Kagoshima black beef and pork: shabu-shabu, seiro-mushi; Hot Pot 100)
//   + THE BUTCHER (charcoal-grilled burgers by Namba Grand Kagetsu, from the BURGERLION group; Hamburger 100)
//   + 美津の Mizuno (Dotonbori okonomiyaki for 70+ years; flour-free yam-yaki; Okonomiyaki 100)
//   + はり重 道頓堀本店 Harijyu (sukiyaki and shabu-shabu of kuroge wagyu, founded 1919, on Dotonbori since 1948; Hot Pot 100)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 3):
//   27013726, 27091986, 27001278, 27001250 (13726 % 4 = 2, 91986 % 4 = 2, 01278 % 4 = 2, 01250 % 4 = 2).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address; はり重 appears only inside BANCO's
//   address_ja "はり重大宝寺店1F", a Harijyu shop that closed on 30 December 2023 per harijyu.co.jp).
//   Chain check. Karen: four shops run directly by JA鹿児島県経済連 (Kagoshima, Hakata, Osaka Shinsaibashi, Ginza;
//   karen-ja.or.jp store list); a co-operative's showcase, not fast-growing; none in data/osaka.json. THE BUTCHER: one of
//   four BURGERLION-group shops (Tabelog remarks: Higobashi, Tamatsukuri, Sakai), none in data. Mizuno: one shop
//   (mizuno-osaka.com). Harijyu: the company runs this Dotonbori building (Japanese restaurant, Harijyu Grill, curry shop,
//   butcher) plus department-store counters and two more Grills (harijyu.co.jp); the sukiyaki restaurant is the only one.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 華蓮 大阪心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013726/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.karen-ja.or.jp/karen/'; const LUNCH = 'https://www.karen-ja.or.jp/karen/wp-content/uploads/2026/04/osaka_lunch.pdf';
  const H = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_karen_shinsaibashi', name: '華蓮 大阪心斎橋店 (Karen Osaka Shinsaibashi)', category: 'OMNI',
    lat: 34.670971, lng: 135.500719, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Shabu-shabu and seiro-mushi are meat and vegetables cooked in a kombu broth or steamed, but they come with ponzu and sesame sauce, the shabu-shabu ends with noodles (shabu-men), and the cutlets are breaded. Ask about the sauces and swap the noodles for rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course is built on Kagoshima black beef, black pork or Satsuma chicken. A vegetable platter is sold as an add-on.',
    hours_raw: 'Daily 11:30–15:00 (drinks last order 14:00) and 17:00–22:30 (last order 21:30, last entry 21:00); closed 31 December–4 January (Tabelog). The operator\'s store list gives last orders of 14:00 and 22:00 (official site). One course per person at lunch (official lunch menu). Reservations: online bookings get 90 minutes at the table, up to two hours if seats allow; phone for bookings after 19:30 (Tabelog). Dinner adds a 10% service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and IC cards, Rakuten Edy, iD; no QR (Tabelog). 90 seats, parties up to 28; private rooms for 2, 4, 6 or 8; tatami and sunken seating; non-smoking with a smoking room; wheelchair accessible; children and strollers welcome; free Wi-Fi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-7-18, プライムスクエア心斎橋 B1F, on Midosuji (the basement of the Dolce & Gabbana building, per a September 2026 diner) — 5 min from Shinsaibashi Stn',
    cuisine: 'Kagoshima black beef (A5 rank) and Kagoshima black pork, with Satsuma chicken and Kagoshima vegetables (official lunch menu, tax included, uploaded April 2026; Tabelog) · seiro-mushi steamed in a wooden steamer, the house favourite: black pork ¥4,200, black beef and black pork ¥5,500, black beef rib roast ¥6,500, each with a starter, vegetable platter, rice, miso soup, pickles and dessert · shabu-shabu in a kombu broth (October 2026), ending with shabu-men: black pork ¥3,700, beef and pork ¥5,000, black beef rib roast ¥6,000 · cutlets with rice and miso soup: Satsuma young shamo chicken ¥1,600, black pork loin ¥2,000, thick-cut loin ¥2,500, black pork fillet ¥2,000, black beef sirloin ¥5,500, fillet ¥6,500 · black beef steaks: sirloin ¥6,200, fillet ¥7,200 · lunch specials: A5 black beef teppanyaki ¥2,800, black pork teppanyaki with egg-yolk ponzu ¥1,800, Karen hamburg of black beef and pork ¥2,000 · sukiyaki and set courses at dinner (diners report ¥10,000–¥19,999 a head); barley-miso soup, pickles in Kagoshima miso and sweet-potato ice cream (October 2026)',
    website: SITE, gmaps: gm('華蓮 大阪心斎橋店'), menu_url: LUNCH,
    notes: "[Shabu-shabu · Shinsaibashi, Kagoshima black beef and pork from the farmers' co-op] A calm Japanese-style basement on Midosuji with private and semi-private rooms, run directly by JA Kagoshima's economic federation, which also has Karen restaurants in Kagoshima, Hakata and Ginza. The meat is its own: A5-rank Kagoshima black beef, which the shop's menu says won the Prime Minister's Prize at the 2022 national wagyu show, and Kagoshima black pork. The favourite is seiro-mushi, the meat and a colourful load of vegetables steamed in a wooden box, which diners find light, the fat dripping away; shabu-shabu in kombu broth ends with noodles. Lunch is the bargain (black pork shabu-shabu ¥3,700, a black pork teppanyaki ¥1,800, black beef and pork hamburg ¥2,000), and meals close with barley-miso soup, Kagoshima pickles and sweet-potato ice cream. Tabelog Hot Pot 100 in 2024 and 2026. Book online; dinner adds 10% service.",
    chef_bio: { chef_name: null, roles: ['Run directly by JA鹿児島県経済連 (the JA Kagoshima Prefecture economic federation; "JA Kagoshima Economic Federation" in an October 2026 review)'], origin: null,
      background: 'Per the Tabelog remarks (shop-maintained listing): run directly by the federation, which also has shops in Kagoshima, Hakata and Ginza; serves Kagoshima black beef, said there to have won the overall title at the 11th National Wagyu Show and been crowned the best wagyu in Japan, plus Kagoshima black pork, black Satsuma chicken and Kagoshima vegetables. The official lunch menu (karen-ja.or.jp, April 2026) cites the 12th show in 2022: the Prime Minister\'s Prize, Agriculture Minister\'s prizes in six categories, and the best carcass prize at two shows running; all beef is A5 rank. Tabelog Hot Pot 100 in 2024 and 2026.',
      philosophy: null, specialty: 'Seiro-mushi of Kagoshima black beef and pork; black pork shabu-shabu.',
      anecdotes: [
        { text: '"Steaming allows excess fat to drip away, making it surprisingly light and refreshing." — September 2026, a black pork seiro-mushi lunch.', source: R + 'B536093158/' },
        { text: '"I was particularly impressed by the miso soup made with barley miso, which had a unique flavor different from the usual miso soup" — October 2026, beef and pork seiro-mushi.', source: R + 'B538245327/' },
        { text: '"The prices felt a bit high, and I sensed that the pricing reflects not just the dishes, but also the location, private space, and service." — October 2026.', source: R + 'B536908765/' },
      ],
      japanese_sources_summary: 'JA鹿児島県経済連 (karen-ja.or.jp): 華蓮 店舗一覧、鹿児島店、博多店、大阪心斎橋店、鹿児島華蓮 銀座店。大阪心斎橋店: 昼 11:30〜15:00 (LO14:00)、夜 17:00〜22:30 (LO22:00)、心斎橋筋2丁目7-18 プライムスクエア心斎橋B1F。お昼のメニュー (2026年4月、税込): 鹿児島黒牛は「A5ランク」、お一人様一コース、2022年の第12回全国和牛能力共進会で内閣総理大臣賞、農林水産大臣賞六部門制覇、最優秀枝肉賞二大会連続、せいろ蒸し (先付・お肉・野菜盛り・御飯・味噌汁・香物・水物) 鹿児島黒豚4,200円、鹿児島黒牛鹿児島黒豚味わい5,500円、鹿児島黒牛6,500円、しゃぶしゃぶ (しゃぶ麺つき) 3,700円・5,000円・6,000円、カツ (さつま若しゃもカツ1,600円〜鹿児島黒牛ヒレ牛カツ6,500円)、鹿児島黒牛サーロインステーキ6,200円、ヒレステーキ7,200円、A5ランク鹿児島黒牛鉄板焼き2,800円、鹿児島黒豚鉄板焼き1,800円 (黄身ポン酢)、華蓮ハンバーグランチ2,000円。食べログ (店舗会員): しゃぶしゃぶ・すき焼き・ステーキ、ネット予約は1時間半、19時半以降は電話、ディナーはサービス料10%、90席、個室 (2〜8名)、座敷・掘りごたつ、禁煙 (喫煙室あり)、車椅子可、年末年始休み、鍋 百名店 2024・2026。口コミ(2026年9月〜10月): せいろ蒸しが一番人気、昆布のだし、ゴマだれとポン酢、しゃぶ麺で締め、麦味噌の味噌汁、鹿児島の味噌の漬物、さつまいものアイス、個室で落ち着く。',
      confidence: 'medium', sources: [TB, SITE, LUNCH, R + 'B534715228/', R + 'B535358822/', R + 'B535422276/', R + 'B535469205/', R + 'B535851269/', R + 'B536093158/', R + 'B536908765/', R + 'B537607127/', R + 'B537804606/', R + 'B537910462/', R + 'B538245327/', R + 'B538377690/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses in private rooms; book online on Tabelog. The operator\'s site has an English page.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-18 プライムスクエア心斎橋 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator\'s store list with an April 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番18号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH],
    price_note: 'Lunch prices from the official lunch menu PDF (tax included; uploaded April 2026, read November 2026). Dinner adds 10% service.', last_checked: TODAY, items: [
      it('鹿児島黒豚せいろ蒸し', '', 'Kagoshima black pork seiro-mushi (lunch)', '¥4,200', 'Lunch', 'ask', 'no', 'Official lunch menu.', 'pork_seiro'),
      it('鹿児島黒牛鹿児島黒豚味わいせいろ蒸し', '', 'Black beef and black pork seiro-mushi (lunch)', '¥5,500', 'Lunch', 'ask', 'no', 'Official lunch menu; October 2026.', 'beef_pork_seiro'),
      it('鹿児島黒豚しゃぶしゃぶ', '', 'Kagoshima black pork shabu-shabu (lunch)', '¥3,700', 'Lunch', 'ask', 'no', 'Official lunch menu; September 2026; ends with noodles.', 'pork_shabu'),
      it('鹿児島黒牛しゃぶしゃぶ', '', 'Kagoshima black beef rib-roast shabu-shabu (lunch)', '¥6,000', 'Lunch', 'ask', 'no', 'Official lunch menu.', 'beef_shabu'),
      it('鹿児島黒豚鉄板焼き', '', 'Black pork belly teppanyaki with egg-yolk ponzu (lunch)', '¥1,800', 'Lunch', 'ask', 'no', 'Official lunch menu.', 'pork_teppan'),
      it('華蓮ハンバーグランチ', '', 'Karen hamburg of black beef and pork (lunch)', '¥2,000', 'Lunch', 'ask', 'no', 'Official lunch menu; October 2026.', 'hamburg'),
      it('鹿児島黒豚「厚切り」ロースカツ', '', 'Thick-cut black pork loin cutlet (lunch)', '¥2,500', 'Lunch', 'no', 'no', 'Official lunch menu.', 'pork_katsu'),
    ] }, {
    cuisine: 'A5ランクの鹿児島黒牛と鹿児島黒豚、さつまの鶏と鹿児島の野菜 (公式のお昼のメニュー、税込み、2026年4月掲載。食べログ)・一番人気はせいろ蒸し: 鹿児島黒豚4,200円、黒牛と黒豚5,500円、黒牛リブロース6,500円、いずれも先付、野菜盛り、御飯、味噌汁、香物、水物つき・昆布のだしのしゃぶしゃぶ (2026年10月)、しゃぶ麺で締め: 黒豚3,700円、黒牛と黒豚5,000円、黒牛リブロース6,000円・カツ (ご飯、味噌汁つき): さつま若しゃも1,600円、黒豚ロース2,000円、「厚切り」ロース2,500円、黒豚ヒレ2,000円、黒牛サーロイン5,500円、ヒレ6,500円・黒牛ステーキ: サーロイン6,200円、ヒレ7,200円・お勧めランチ: A5ランク鹿児島黒牛鉄板焼き2,800円、黄身ポン酢で食べる鹿児島黒豚鉄板焼き1,800円、黒牛と黒豚の華蓮ハンバーグ2,000円・夜はすき焼きやコースも (口コミの予算は1人10,000〜19,999円)。麦味噌の味噌汁、鹿児島の味噌の漬物、さつまいものアイス (2026年10月)',
    neighborhood: '心斎橋筋2-7-18 プライムスクエア心斎橋 B1F、御堂筋沿い (2026年9月の口コミでは Dolce & Gabbana のビルの地下)。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。しゃぶしゃぶとせいろ蒸しは肉と野菜を昆布のだしで煮るか蒸すだけだが、ポン酢とゴマだれで食べ、しゃぶしゃぶの締めはしゃぶ麺、カツには衣。たれを確認し、麺をご飯に替えられるか聞いて。',
    vegan_detail: 'ヴィーガンではありません。どのコースも鹿児島黒牛、黒豚、さつまの鶏が中心。野菜盛りは追加で頼める。',
    notes: '[しゃぶしゃぶ・心斎橋、農協が出す鹿児島黒牛と黒豚] 御堂筋沿いの地下、個室と半個室のある落ち着いた和の店。JA鹿児島県経済連の直営で、鹿児島、博多、銀座にも華蓮がある。肉は自前のもので、メニューによれば2022年の全国和牛能力共進会で内閣総理大臣賞を取った A5ランクの鹿児島黒牛と、鹿児島黒豚。一番人気はせいろ蒸しで、肉と色とりどりの野菜を木のせいろで蒸し、余分な脂が落ちて軽いという声。昆布のだしのしゃぶしゃぶはしゃぶ麺で締める。お得なのは昼 (黒豚しゃぶしゃぶ3,700円、黒豚鉄板焼き1,800円、黒牛と黒豚のハンバーグ2,000円)。最後は麦味噌の味噌汁、鹿児島の漬物、さつまいものアイス。食べログ 鍋 百名店 2024・2026。予約はネットで、夜はサービス料10%。',
  });
}

// ================================================================ THE BUTCHER
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27091986/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:30', '16:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_the_butcher_namba', name: 'THE BUTCHER', category: 'OMNI',
    lat: 34.664648, lng: 135.503619, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The shop offers "protein burgers" with lettuce in place of the bun (Tabelog), and steaks from the grill; sauces, the mashed-beef patty and the shared fryer (fries, onion rings, fish and chips) are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable burger is on the menu (¥1,210) but its patty and bun are not described; everything else is beef, pork, chicken, fish, egg or cheese.',
    hours_raw: 'Daily 11:30–16:00 (last order 15:30) and 17:00–21:00 (last order 20:30); irregular closing days (Tabelog). No reservations (Tabelog); a few tables, so expect a short queue at busy times (2024–2026 reviews). Up steep stairs to the second floor (September 2026). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money; no service charge (Tabelog). 26 seats, counter and sofas; non-smoking; children welcome; takeaway (Tabelog). Opened 12 May 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 10-13, スギモトビル 2F, across from Namba Grand Kagetsu — by Namba Stn',
    cuisine: 'Charcoal-grilled burgers and steaks, "made by a butcher" (shop text on Tabelog); prices from the shop menu on Tabelog, which notes they may have changed (read November 2026) · burger ¥1,320 (¥1,300 in September 2026), cheese ¥1,540, egg, bacon, avocado, pineapple, broccoli, gorgonzola and mozzarella versions ¥1,485–¥1,958; double cheese ¥2,365 · THE BUTCHER with three Brooklyn mashed-beef patties ¥2,585 (¥2,550 in October 2026); Big Macho ¥2,255, Giga Macho with four patties ¥3,575 · jalapeño cheese ¥1,738 (¥1,903 in October 2026), sriracha jalapeño; pulled pork from ¥1,375; the Jamie with blueberry and peanut butter ¥1,650; Cajun chicken from ¥1,155; fish burgers; vegetable burger ¥1,210 · protein burgers in lettuce instead of a bun ¥1,540–¥2,420 · cooked medium by default, other doneness on request (October 2026); burgers come with salad and fries (2026 reviews) · fries, broccoli fries, onion rings, Cajun popcorn shrimp, fish and chips ¥550–¥825 · steaks cut to order from the grill, 20–30 minutes · protein shakes ¥990; Heartland beer; cocktails',
    website: null, gmaps: gm('THE BUTCHER 難波 ハンバーガー'), menu_url: MENU,
    notes: "[Burgers · Namba, charcoal-grilled burgers across from NGK] Up a steep staircase across the street from Namba Grand Kagetsu, a small American-style meat diner with sofas, born from the Nishi-ku burger shop BURGERLION. Patties are grilled over charcoal and served medium unless you ask otherwise, with a smoky, beefy flavour diners rate highly; the bun is tall and toasted, and burgers come with salad and fries. Pick from some 40 burgers, from the plain ¥1,320 burger to THE BUTCHER with three patties (¥2,585) and the four-patty Giga Macho, or have many of them wrapped in lettuce instead of a bun as a \"protein burger\". Tabelog Hamburger 100 in 2022, 2024 and 2026. Few tables and no bookings, so lines form at lunch; an October 2026 diner found most of the room were Western visitors. Open daily 11:30–21:00 with a break at 16:00.",
    chef_bio: { chef_name: null, roles: ['Run by the BURGERLION group (shop text and remarks on Tabelog)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a meat diner born from the Nishi-ku hamburger shop BURGERLION, famous for grilled hamburgers, with sister shops BURGERLION -UTSUBO A GOGO- (Higobashi), BURGERLION -MEAT CRUSADERS- (Tamatsukuri) and LAIDBACK BY BURGERLION (Sakai). Opened 12 May 2016. Tabelog Hamburger 100 in 2022, 2024 and 2026. No owner or chef is named.',
      philosophy: null, specialty: 'Charcoal-grilled burgers; THE BUTCHER triple; protein burgers in lettuce.',
      anecdotes: [
        { text: '"The majority of the patrons inside were Westerners." — October 2026, THE BUTCHER burger, ¥2,550.', source: R + 'B537304190/' },
        { text: '"Once I reached the top, I was welcomed with a friendly \'Irasshaimase!\' (Welcome!)." — October 2026, a ¥1,430 burger.', source: R + 'B537772618/' },
        { text: '"There was only one staff member in the dining area, which made the service a bit slow." — October 2026, Saturday afternoon, garlic cheeseburger.', source: R + 'B537822252/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): THE BUTCHER、ハンバーガー・ステーキ・カフェ、難波千日前10-13 スギモトビル 2F、各線難波駅すぐ、なんばグランド花月の向かい、毎日11:30〜16:00 (L.O.15:30)・17:00〜21:00 (L.O.20:30)、不定休、予約不可、カード・PayPay可、サービス料なし、26席、禁煙、テイクアウト可、2016年5月12日オープン、ハンバーガー 百名店 2022・2024・2026、西区の BURGERLION から生まれたミートダイナー、バンズの代わりにレタスのプロテインバーガー、系列店 (Higobashi、Tamatsukuri、Sakai)。食べログのメニュー (英訳で確認): バーガー1,320円、チーズ1,540円、THE BUTCHER 2,585円、プロテインバーガー、ベジタブルバーガー1,210円、サイド550〜825円、ステーキは20〜30分。口コミ(2024年8月〜2026年10月): 炭火のパティ、焼き加減はミディアムが基本、サラダとポテトつき、急な階段、昼は行列、欧米の客が多い日も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B380908131/', R + 'B490945915/', R + 'B535791403/', R + 'B536023899/', R + 'B536440698/', R + 'B536479029/', R + 'B536584668/', R + 'B537028840/', R + 'B537304190/', R + 'B537772618/', R + 'B537822252/', R + 'B538098401/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu names in English; order at the table; many Western visitors (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前10-13 スギモトビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前10番13号 (go) 3m. Kyushu Ramen Kio (osaka_kyushu_ramen_kio_namba_ngk, address_ja "難波千日前10-13", no building or floor given) shares the street number and is pinned 10m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B537304190/', R + 'B490945915/'],
    price_note: 'Prices from the shop-maintained Tabelog menu (tax included; the menu notes prices may have changed; read November 2026); October 2026 diners paid slightly more for some burgers.', last_checked: TODAY, items: [
      it('', '', 'Burger', '¥1,320', 'Burgers', 'no', 'no', 'Shop menu; ¥1,300 in September 2026.', 'burger'),
      it('', '', 'THE BUTCHER: three Brooklyn mashed-beef patties', '¥2,585', 'Burgers', 'no', 'no', 'Shop menu; ¥2,550 in October 2026.', 'the_butcher'),
      it('', '', 'Avocado cheeseburger', '¥1,815', 'Burgers', 'no', 'no', 'Shop menu; September 2026.', 'avocado_cheese'),
      it('', '', 'Jalapeño cheeseburger', '¥1,738', 'Burgers', 'no', 'no', 'Shop menu; ¥1,903 in October 2026.', 'jalapeno'),
      it('', '', 'Protein burger (lettuce instead of a bun)', '¥1,595', 'Burgers', 'ask', 'no', 'Shop menu and shop text.', 'protein_burger'),
      it('', '', 'Vegetable burger', '¥1,210', 'Burgers', 'no', 'ask', 'Shop menu.', 'vegetable_burger'),
      it('', '', 'French fries', '¥550', 'Sides', 'ask', 'ask', 'Shop menu.', 'fries'),
    ] }, {
    cuisine: '炭火焼きのハンバーガーとステーキ、「肉屋がつくる」(食べログの店の紹介)。値段は食べログの店のメニュー (変更の可能性ありと注記、2026年11月に確認)・バーガー1,320円 (2026年9月は1,300円)、チーズ1,540円、卵、ベーコン、アボカド、パイナップル、ブロッコリー、ゴルゴンゾーラ、モッツァレラ1,485〜1,958円、ダブルチーズ2,365円・Brooklyn mashed beef のパティ3枚の THE BUTCHER 2,585円 (2026年10月は2,550円)、Big Macho 2,255円、パティ4枚の Giga Macho 3,575円・ハラペーニョチーズ1,738円 (2026年10月は1,903円)、シラチャ、プルドポーク1,375円から、ブルーベリーとピーナッツバターの Jamie 1,650円、ケイジャンチキン1,155円から、フィッシュ、ベジタブルバーガー1,210円・バンズの代わりにレタスのプロテインバーガー1,540〜2,420円・焼き加減はミディアムが基本、好みも可 (2026年10月)、サラダとポテトつき (2026年の口コミ)・ポテト、ブロッコリーフライ、オニオンリング、ケイジャンポップコーンシュリンプ、フィッシュ&チップス550〜825円・グリルのステーキは注文から20〜30分・プロテインシェイク990円、Heartland ビール、カクテル',
    neighborhood: '難波千日前10-13 スギモトビル 2F、なんばグランド花月の向かい。各線難波駅すぐ',
    gf_detail: '要確認。グルテンの情報なし。バンズの代わりにレタスで包む「プロテインバーガー」があり (食べログ)、グリルのステーキも。ソース、パティ、揚げ物の油 (ポテト、オニオンリング、フィッシュ&チップス) は説明がない。',
    vegan_detail: '要確認。ベジタブルバーガー (1,210円) はあるがパティとバンズの説明はない。ほかは牛、豚、鶏、魚、卵、チーズ。',
    notes: '[ハンバーガー・難波、NGK 向かいの炭火焼きバーガー] なんばグランド花月の向かい、急な階段を上がった2階の、ソファのある小さなアメリカンなミートダイナー。西区のハンバーガー店 BURGERLION から生まれた。パティは炭火で焼き、焼き加減は頼まなければミディアム。スモーキーで肉の味が濃いと評判で、バンズは高く香ばしく、サラダとポテトつき。1,320円のバーガーから、パティ3枚の THE BUTCHER (2,585円)、4枚の Giga Macho まで40種類ほど。多くはバンズの代わりにレタスで包む「プロテインバーガー」にできる。食べログ ハンバーガー 百名店 2022・2024・2026。テーブルが少なく予約不可なので昼は行列も。2026年10月には客の多くが欧米からの人だったという。毎日11時半〜21時、16時に休憩。',
  });
}

// ================================================================ 美津の
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001278/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'http://www.mizuno-osaka.com/'; const CONCEPT = SITE + 'concept.html'; const MZMENU = SITE + 'menu.html';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_mizuno_dotonbori', name: '美津の (Mizuno)', category: 'OMNI',
    lat: 34.668363, lng: 135.503285, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The okonomiyaki, yoshoku-yaki, modern-yaki and yakisoba are wheat-batter or noodle dishes. The shop\'s own menu says the yam-yaki (山芋焼) uses no flour, 100% yam ("粉を使わず山芋100％"), but it is finished with sauce or mustard mayonnaise and cooked on the shared griddle. Ask about the sauce before ordering it.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every okonomiyaki carries pork, seafood or the house minced meat, and the yam-yaki is topped with scallops and pork (2024–2026 reviews).',
    hours_raw: 'Daily 11:00–22:00 (last order 21:00); no closing day since February 2026, when the Thursday closing ended (official site). Tabelog lists 11:00–21:00. No reservations (Tabelog); courses for two or more can be arranged (official site). Queues are usual: about 30 minutes on a weekday at 19:00 (September 2026) and on a December 2024 visit, shorter at weekday lunch (October 2026); orders are taken while you wait, last orders are strict near closing, and one diner felt pressed to give up the table (December 2024; September 2026). Staff cook everything at your table (September 2026). Cards from ¥3,000 (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 38 seats, 12 at the counter; non-smoking; children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-4-15, just inside the arcade from Dotonbori — 5 min from Namba Stn exit 15 (Midosuji Line) or Nihonbashi Stn',
    cuisine: 'Dotonbori okonomiyaki for more than 70 years (official site) · 山芋焼 yam-yaki, 100% yam with no flour, the No. 1 seller for 34 years (official site): with thick scallops and pork belly (2024–2026), ¥1,680 (shop menu on Tabelog), finished with mustard mayonnaise (October 2026) · 美津の焼 Mizuno-yaki, the house mix ¥1,450 on the Tabelog menu, ¥1,650 in September 2026; the site\'s mix has six fillings: pork, squid, shrimp, scallop, octopus (oysters in winter) and the house minced meat, which the previous owner added · 洋食焼 yoshoku-yaki, the thin pre-okonomiyaki pancake of early Showa, on a chewy batter handed down from the grandparents (official site) · modern-yaki with soba or udon on any okonomiyaki · 道頓焼 with diced yam, minced meat and a soft half-cooked egg, made in thanks to 安井道頓 (official site) · 道頓そば Doton soba of thick noodles and rich sauce with a fried egg, ¥1,300 (September 2026) · negiyaki · white soup ¥100 (December 2024) · draft beer, local sake, shochu, sudachi liqueur, hiyashi-ame, ramune',
    website: SITE, gmaps: gm('美津の 道頓堀 お好み焼'), menu_url: MZMENU,
    notes: "[Okonomiyaki · Dotonbori, the 70-year-old home of yam-yaki] A few steps into the arcade from Dotonbori, a little okonomiyaki shop that has stayed on this spot for more than 70 years and always has a queue. The draw is yam-yaki: no flour at all, just grated yam with cabbage, scallops and pork, cooked by the staff at your table into something fluffy and almost creamy, and the shop's best seller for 34 years. The house mix, Mizuno-yaki, carries pork, squid, shrimp, scallops, octopus and the minced meat a previous owner added, and the old-style yoshoku-yaki keeps the grandparents' chewy batter. The shop buys from Kuromon Market and named suppliers, from tenkasu and salt to rice. Expect about half an hour in line at dinner; order while you wait. Tabelog Okonomiyaki 100 five times from 2018 to 2025. Open daily 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed); the family has run the shop for generations: the batter is "handed down from the grandparents" and the previous owner (先代) devised the minced meat (official site)'], origin: null,
      background: 'Per the official site: a small okonomiyaki shop "with no name" that has lasted more than 70 years on this spot, just inside the arcade from Dotonbori; rooted in yoshoku-yaki; the previous owner, an "ideas man", added minced meat, rare in Osaka; the yam-yaki made of 100% yam without flour debuted 34 years ago and is the No. 1 item; ingredients from Kuromon Market, and tenkasu, salt, ichimi, ponzu and rice from named shops; fish from the fishmonger, meat from the butcher, pickles and konnyaku from specialist shops, delivered by bicycle each day. The Thursday closing ended in February 2026. Reviewers call it the birthplace of yam-yaki (September 2026). Tabelog Okonomiyaki 100 in 2018, 2019, 2022, 2024 and 2025.',
      philosophy: 'A shop people never tire of, like the whorl of the の in its name; the best from each specialist supplier, which only a small shop can do (official site).', specialty: 'Yam-yaki of 100% yam; Mizuno-yaki; yoshoku-yaki.',
      anecdotes: [
        { text: '"Made with 100% yam, this was truly amazing. … It was fluffy, light, and had a slight crispness on the cooked edges." — September 2026, with a daughter before heading back to Nagoya.', source: R + 'B536819344/' },
        { text: '"The staff cooked everything for us, which was a relief, and [the staff] were very kind. [The staff] even provided a large pitcher of water" — September 2026, Mizuno-yaki ¥1,650 and Doton soba ¥1,300.', source: R + 'B535325219/' },
        { text: '"There was quite a line, mostly with foreign visitors." — October 2026, dinner.', source: R + 'B537212090/' },
      ],
      japanese_sources_summary: '公式サイト (mizuno-osaka.com): 本場大阪、道頓堀お好み焼の老舗「美津の」、2026年2月より木曜日の定休日は無くなり通常営業、道頓堀からアーケードに入ってすぐ、名も無い小さなお好み焼屋がこの地で70年以上、洋食焼から山芋焼まで、大阪の台所黒門市場から仕入れる特選素材、天かす、塩、一味、ポン酢、米も顔の見えるお店から、日本全国、海外からのお客さま、11時〜22時 (L.O.21時)、無休。こだわり: 「の」の字のうず巻き、洋食焼をルーツに持ち、アイディアマンの先代の発案でミンチを入れる、魚は魚屋、肉は肉屋、漬物は漬物屋、こんにゃくはこんにゃく屋、自転車で配達。お品書き: 豚、いか、えび、貝柱、たこ (冬季かき) と特製ミンチの6種類の具のミックス、祖父母から受け継いだ「もちもち生地」の洋食焼、デビューして34年、粉を使わず山芋100％の山芋焼は不動の人気ナンバー1、モダン焼、安井道頓さんへの感謝を形にした道頓焼、粉モン協会プロデュースのめんとソースの道頓そば、2名様からのコース、税込み。食べログ: お好み焼き 百名店 2018・2019・2022・2024・2025、予約不可、カードは3,000円から、38席 (カウンター12)、禁煙。口コミ(2024年12月〜2026年10月): いつも行列で約30分、待つ間に注文、山芋焼にホタテと豚バラ、からしマヨネーズ、美津の焼1,650円、道頓そば1,300円、店の人が焼いてくれる、海外からの客も多い。',
      confidence: 'medium', sources: [SITE, CONCEPT, MZMENU, TB, MENU, R + 'B497942095/', R + 'B535325219/', R + 'B535344097/', R + 'B535434074/', R + 'B535610951/', R + 'B535833138/', R + 'B536385271/', R + 'B536819344/', R + 'B537212090/', R + 'B537232281/', R + 'B537588033/', R + 'B538420147/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook at the table; many overseas visitors in the queue (October 2026); the official site has English pages.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-4-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notice on hours) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.668363, 135.503230); same street number as Kirinji Sennichimae (osaka_kirinji_sennichimae, address_ja "道頓堀1-4-15", pinned 3m from this Tabelog point) and 7m from Ichiran Dotonbori Bekkan (osaka_ichiran_dotonbori_bekkan, "道頓堀1-4-16"), so this pin is offset ~5m east to keep them apart; GSI 大阪府大阪市中央区道頓堀一丁目4番15号 (go) 4m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, MZMENU, R + 'B535325219/'],
    price_note: 'Prices from the Tabelog menu (undated) and a September 2026 review; dish names from the official site.', last_checked: TODAY, items: [
      it('山芋焼', '', 'Yam-yaki: 100% yam, no flour', '¥1,680', 'Okonomiyaki', 'ask', 'no', 'Official site (no flour); Tabelog menu price.', 'yamaimo'),
      it('美津の焼', '', 'Mizuno-yaki, the house mix', '¥1,650', 'Okonomiyaki', 'no', 'no', 'September 2026; ¥1,450 on the Tabelog menu.', 'mizuno_yaki'),
      it('洋食焼', '', 'Yoshoku-yaki, the old thin pancake', '', 'Okonomiyaki', 'no', 'no', 'Official site.', 'yoshoku_yaki'),
      it('道頓焼', '', 'Doton-yaki with diced yam, minced meat and half-cooked egg', '', 'Okonomiyaki', 'ask', 'no', 'Official site.', 'doton_yaki'),
      it('道頓そば', '', 'Doton soba: thick noodles, rich sauce, fried egg', '¥1,300', 'Yakisoba', 'no', 'no', 'September 2026.', 'doton_soba'),
    ] }, {
    cuisine: '70年以上続く道頓堀のお好み焼 (公式サイト)・山芋焼: 粉を使わず山芋100％、デビューして34年の不動の人気ナンバー1 (公式サイト)。厚い貝柱と豚バラ (2024〜2026年)、1,680円 (食べログのメニュー)、からしマヨネーズで (2026年10月)・美津の焼: 店のミックス、食べログのメニューで1,450円、2026年9月は1,650円。サイトのミックスは豚、いか、えび、貝柱、たこ (冬季はかき) と特製ミンチの6種類で、ミンチは先代の発案・洋食焼: 昭和のはじめの薄い生地の焼き方、祖父母から受け継いだ「もちもち生地」(公式サイト)・モダン焼: どのお好み焼にもそば、うどんをのせられる・道頓焼: 角切りの山芋、ミンチ、ぷるぷる半玉子、安井道頓さんへの感謝を形にしたもの (公式サイト)・道頓そば: 太めんと濃厚ソースに目玉焼き、1,300円 (2026年9月)・ねぎ焼き・白いスープ100円 (2024年12月)・生ビール、地酒、焼酎、すだち酒、冷しあめ、ラムネ',
    neighborhood: '道頓堀1-4-15、道頓堀からアーケードに入ってすぐ。地下鉄御堂筋線なんば駅15番出口または日本橋駅から徒歩5分',
    gf_detail: '要確認。お好み焼、洋食焼、モダン焼、焼きそばは小麦の生地や麺。店のメニューでは山芋焼は「粉を使わず山芋100％」だが、ソースかからしマヨネーズで仕上げ、同じ鉄板で焼く。注文の前にソースを確認して。',
    vegan_detail: 'ヴィーガンではありません。どのお好み焼にも豚、魚介、特製ミンチが入り、山芋焼にも貝柱と豚 (2024〜2026年の口コミ)。',
    notes: '[お好み焼・道頓堀、70年続く山芋焼の店] 道頓堀からアーケードに入ってすぐ、この地で70年以上続く小さなお好み焼屋で、いつも行列。名物は山芋焼で、粉を使わずすりおろした山芋にキャベツ、貝柱、豚、店の人がテーブルで焼き上げ、ふわふわでとろりとした口あたり。デビューから34年の一番人気。店のミックスの美津の焼は豚、いか、えび、貝柱、たこと先代が加えたミンチ入り、昔ながらの洋食焼は祖父母から受け継いだもちもちの生地。黒門市場や顔の見える店から天かす、塩、米まで仕入れる。夜は30分ほど並ぶことも、待つ間に注文を。食べログ お好み焼き 百名店に2018〜2025年に5回。毎日11時〜22時。',
  });
}

// ================================================================ はり重 道頓堀本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001250/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.harijyu.co.jp/'; const SHOP = SITE + 'shop-info/2173/'; const HIST = SITE + 'menu/category/history/';
  const PRICE = SITE + 'news/38749/'; const DEC = SITE + 'news/38824/';
  const H = day(['11:30', '15:30'], ['17:00', '21:00']);
  put({
    id: 'osaka_harijyu_dotonbori', name: 'はり重 道頓堀本店 (Harijyu Dotonbori Honten)', category: 'OMNI',
    lat: 34.66855, lng: 135.500655, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Sukiyaki is cooked in warishita, a soy-sauce-based sauce, and shabu-shabu is eaten with dipping sauces; neither is described as wheat-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sukiyaki and shabu-shabu courses of kuroge wagyu, dipped in raw egg for sukiyaki.',
    hours_raw: 'Lunch 11:30–15:30 (last order 14:30), dinner 17:00–21:00 (last order 20:00); closed Tuesday, but open on public holidays and every day in December, when hours and last orders run an hour later (official site; Tabelog). Bookings for two or more, online or by phone (official site); one diner failed to get a booking several times (September 2026). Prices include tax and service (official site); some sukiyaki and shabu-shabu prices rose from 1 November 2026 with wagyu costs (official notice). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 200 seats in tatami and table rooms upstairs, private rooms for 2 to over 30; non-smoking with a smoking area; children welcome, strollers left at the entrance (Tabelog). A foreign-language menu (September 2026). The same building holds Harijyu Grill (yoshoku), a curry shop and the butcher\'s counter (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-9-17, at the entrance to Dotonbori — 3 min from Namba Stn exit 14 (Midosuji Line)',
    cuisine: 'Sukiyaki and shabu-shabu of kuroge wagyu from a butcher founded in 1919 (official site; prices include tax and service, as listed on the shop page read 1 November 2026, the day a partial price rise took effect) · sukiyaki courses named 雪 ¥9,900, 月 ¥12,100, 花 ¥14,300, 星 ¥16,500, special ¥19,800, each a different cut (October 2026: one diner ordered Yuki, Hana and Hoshi to compare) · shabu-shabu courses 銀杏 ¥9,900, 紅葉 ¥12,100, 水仙 ¥14,300, 桔梗 ¥16,500, special ¥19,800 · kaiseki from ¥12,100 and butter-yaki from ¥13,200, both to be booked · lunch: sukiyaki or shabu-shabu ¥7,150, mini kaiseki ¥9,900 (booked) · a monthly course at lunch (October 2026) · sukiyaki is started by the staff, with the sauce from the beginning rather than meat grilled first, then left to you; vegetables are mitsuba, green onion, shirataki, grilled tofu and shiitake; rice refills (2026 reviews) · sandwiches at the first-floor butcher (October 2026); beef miso-zuke by mail order (official site)',
    website: SITE, gmaps: gm('はり重 道頓堀本店'), menu_url: SHOP,
    notes: "[Sukiyaki · Dotonbori, a 1919 wagyu house at the entrance to Dotonbori] Behind the noren of an old building at the entrance to Dotonbori (as the official site puts it), a sukiyaki and shabu-shabu restaurant of a wagyu butcher. 藤本喜蔵 opened the first shop in Sakai in 1919, moved to Shinsekai with sukiyaki and a meat counter, and came to Dotonbori in 1948, when the street was full of theatres and the stars of the film era were regulars (official site). Up the old staircase are tatami and table rooms with flowers, worn tatami and long-serving staff; a server starts your sukiyaki with the sauce in from the beginning, then hands over, and the meat is dipped in egg. Courses go by cut, from 雪 (¥9,900) to 星 (¥16,500) and a special at ¥19,800, all tax and service included; lunch from ¥7,150. Tabelog Hot Pot 100 in 2024 and 2026. Book ahead; closed Tuesdays except holidays and December. Harijyu Grill, a curry shop and the butcher share the building (official site).",
    chef_bio: { chef_name: null, roles: ['Company: 播重 (はり重), founded by its first president 藤本喜蔵 (official site)', '"The owner" prepared the first dishes at the table (October 2026 review)'], origin: null,
      background: 'Per the official history: 藤本喜蔵 opened a small shop in Sakai in 1919 (Taisho 8); a few years later opened a sukiyaki restaurant and butcher in the middle of Shinsekai; in 1948 moved to Dotonbori and added yoshoku. Dotonbori then was full of playhouses and theatres, and stylish gentlemen and ladies, women of the hanamachi, actors, comedians, writers, foreigners and the film stars and singers of the day came for celebration meals. A second shop, Daihoji (in what is now Amerikamura), opened in 1970 and closed on 30 December 2023. Department-store meat counters followed from 1966, with eat-in corners from 2005. The company calls itself a kuroge wagyu specialist. Tabelog Hot Pot 100 in 2024 and 2026.',
      philosophy: 'The best kuroge wagyu, hospitality like a high-class ryokan, and creating food culture around Dotonbori (official site).', specialty: 'Sukiyaki of kuroge wagyu; shabu-shabu.',
      anecdotes: [
        { text: '"The historical staircase, the seasoned waitstaff, and the slightly worn tatami mats—all of it brings back memories." — September 2026, a first sukiyaki at the main restaurant in 20 years.', source: R + 'B536287225/' },
        { text: '"I ordered one serving each of \'Yuki,\' \'Hana,\' and \'Hoshi.\' … Since I was there, I decided to order all three types to compare." — October 2026.', source: R + 'B537511692/' },
        { text: '"The restaurant seemed to be constantly busy with many inbound foreign customers, which might have contributed to the somewhat careless service." — September 2026, a first visit.', source: R + 'B536656050/' },
      ],
      japanese_sources_summary: '公式サイト (harijyu.co.jp): 大正八年に初代社長藤本喜蔵が開業した黒毛和牛専門店、創業百年、1919年大阪府堺市で小さな店、数年後に新世界にすき焼き屋兼精肉販売の店、1948年に道頓堀に移り洋食も、芝居好きの食道楽が集う地、映画全盛の大スターや有名歌手、1970年に大宝寺店 (2023年12月30日閉店)、1966年から百貨店に精肉店、高級旅館のような店内とサービス。道頓堀本店 日本料理: 昼の部11:30〜15:30 (L.O.14:30)、夜の部17:00〜21:00 (L.O.20:00)、火曜日休み (祝日、12月は営業)、2名様から予約、すき焼き 雪9,900円・月12,100円・花14,300円・星16,500円・特撰コース19,800円、しゃぶしゃぶ 銀杏・紅葉・水仙・桔梗・特撰コース (同価格)、会席12,100円〜、バター焼き13,200円〜、昼のすき焼き・しゃぶしゃぶ7,150円、ミニ会席9,900円、価格は消費税・サービス料込み。お知らせ: 2026年11月1日より和牛の価格高騰ですき焼き、しゃぶしゃぶ含むメニューの一部を価格改定、12月は営業時間とラストオーダーを1時間延長。食べログ (店舗会員): 鍋 百名店 2024・2026、200席、個室、禁煙 (喫煙所あり)、カード・PayPay可。口コミ(2026年9月〜11月): 昔ながらの階段、年季の入った畳、ベテランの仲居さん、最初は店の人が焼き、割下を最初から入れる、溶き卵、外国語のメニュー、海外からの客も多い、白いご飯のおかわり。',
      confidence: 'medium', sources: [SITE, SHOP, HIST, PRICE, DEC, TB, R + 'B535071242/', R + 'B535122974/', R + 'B535862620/', R + 'B536287225/', R + 'B536656050/', R + 'B537037512/', R + 'B537181879/', R + 'B537199376/', R + 'B537425257/', R + 'B537511692/', R + 'B538206678/', R + 'B538458372/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A foreign-language menu (September 2026); staff start the sukiyaki and show how to eat it (2026). Book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-9-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notices dated October 2026) and the shop-maintained Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目9番17号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SHOP],
    price_note: 'Prices from the official shop page (tax and service included; read 1 November 2026, the day a partial price rise took effect, so some may change).', last_checked: TODAY, items: [
      it('雪', '', 'Sukiyaki course Yuki', '¥9,900', 'Sukiyaki', 'ask', 'no', 'Official site; September 2026.', 'yuki'),
      it('花', '', 'Sukiyaki course Hana', '¥14,300', 'Sukiyaki', 'ask', 'no', 'Official site; ¥14,300 booked in October 2026.', 'hana'),
      it('星', '', 'Sukiyaki course Hoshi', '¥16,500', 'Sukiyaki', 'ask', 'no', 'Official site.', 'hoshi'),
      it('銀杏', '', 'Shabu-shabu course 銀杏', '¥9,900', 'Shabu-shabu', 'ask', 'no', 'Official site.', 'ginkgo_course'),
      it('すき焼き・しゃぶしゃぶ', '', 'Lunch sukiyaki or shabu-shabu', '¥7,150', 'Lunch', 'ask', 'no', 'Official site.', 'lunch'),
    ] }, {
    cuisine: '1919年創業の精肉店の黒毛和牛のすき焼きとしゃぶしゃぶ (公式サイト。値段は消費税・サービス料込みで、一部の価格改定が始まった2026年11月1日に店のページで確認)・すき焼き: 雪9,900円、月12,100円、花14,300円、星16,500円、特撰コース19,800円、コースごとに部位が違う (2026年10月には雪、花、星を食べ比べた人も)・しゃぶしゃぶ: 銀杏9,900円、紅葉12,100円、水仙14,300円、桔梗16,500円、特撰コース19,800円・会席12,100円〜とバター焼き13,200円〜はどちらも要予約・昼: すき焼き・しゃぶしゃぶ7,150円、ミニ会席9,900円 (要予約)・昼の月替わりのコース (2026年10月)・すき焼きは最初に店の人が焼き、肉を焼いてからではなく最初から割下で、あとはお任せ。野菜は三つ葉、ねぎ、しらたき、焼き豆腐、しいたけ。ご飯はおかわりできる (2026年の口コミ)・1階の精肉店のサンドイッチ (2026年10月)、通信販売の牛肉の味噌漬 (公式サイト)',
    neighborhood: '道頓堀1-9-17、道頓堀の入り口。地下鉄御堂筋線なんば駅14番出口から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。すき焼きは醤油ベースの割下で煮て、しゃぶしゃぶはたれで食べる。どちらも小麦を使わないとは書かれていない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛のすき焼きとしゃぶしゃぶのコースで、すき焼きは生卵につけて食べる。',
    notes: '[すき焼き・道頓堀、道頓堀の入り口の1919年創業の和牛の店] 道頓堀の入り口、古い建物ののれんの奥にある、精肉店のすき焼きとしゃぶしゃぶの店。藤本喜蔵が1919年に堺で小さな店を開き、新世界ですき焼きと精肉の店を構え、1948年に道頓堀へ。当時の道頓堀は芝居小屋や劇場が並び、映画全盛の大スターも通った (公式サイト)。昔ながらの階段を上がると、花を飾った座敷やテーブルの部屋、年季の入った畳、ベテランの仲居さん。すき焼きは店の人が最初から割下で焼き始め、あとはお任せで、肉は溶き卵で。コースは部位で選び、雪 (9,900円) から星 (16,500円)、特撰19,800円まで、消費税・サービス料込み。昼は7,150円から。食べログ 鍋 百名店 2024・2026。予約がおすすめ、火曜休み (祝日と12月は営業)。同じ建物にはり重グリル、カレーショップ、精肉店も (公式サイト)。',
  });
}

save();
