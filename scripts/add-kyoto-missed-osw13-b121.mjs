// Kyoto priority (kyoto-missed), worker osw13, batch 121 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Zucchero, nota, 食堂ゑびす, Lab.Igarashi. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; nota is run with 麓寿庵 kyoto_rokujuan in the same house — different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-121');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26042658', 'chain: 京都 肉のひろ重 御池之 — five+ 肉のひろ重 shops in our crawls (same call as 26043469 osw8-64 and 26040619 osw8-68)');
skip('26041212', 'too thin: まるまん — a single review with no text (May 2024); Tabelog lists no hours or seats');
skip('26035284', 'closed: 本家尾張屋 菓子処 — a November 2025 reviewer reports it closes completely on 11 January 2026, with the main 本家尾張屋 shop entering a long-term closure the same day; it was also a take-away sweets shop');

// ================================================================ Zucchero
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040648/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_zucchero', name: 'Zucchero', category: 'OMNI',
    lat: 35.013512, lng: 135.761994, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, lasagna, ravioli, gnocchi, cutlets and three homemade breads (2024–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led Italian menu with burrata, prosciutto, sea urchin, eel and beef (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu–Sun 18:00–23:00; closed Tuesday and Wednesday; hours may change. An August 2024 reviewer said lunch had started — check. Reservations taken. Mostly à la carte with a long menu and daily specials; half portions on request; courses on request. About 20 seats, counter and tables. Non-smoking. Cards; no e-money or QR codes. On the 2nd floor of the Nishimoto building on Nijo-dori west of Takakura — look for the small sign on the ground floor; there is a lift. 6 min from Karasuma Oike exit 1.',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-dori west of Takakura — 6 min from Karasuma Oike',
    cuisine: 'A seafood-led à la carte Italian opened in early 2024, whose owner\'s family runs a fish shop, with a long menu, homemade breads and natural wines by the glass (Tabelog; 2024–2026 reviews) · assorted appetizers chosen with the staff: bagna cauda, bluefin tuna and couscous, pâté de campagne, melon or strawberries with burrata and prosciutto, bonito tagliata, sea-bream carpaccio, smoked mackerel with cherries (July 2025) · risotto with two kinds of sea urchin and arugula (2025–2026) · red-snapper ravioli with fava-bean sauce; smoked tokishirazu salmon; mentaiko bruschetta (June 2026) · scale-grilled sweetfish; Amakusa eel; goma-fugu milt (July 2025–2026) · lasagna; purple-sweet-potato gnocchi with gorgonzola; veal or venison cutlet; braised beef cheek; squid pasta · hojicha bread, focaccia and grissini · Italian pudding; tartufo; bergamot liqueur; elderflower soda and alcohol-free wine',
    website: null, gmaps: gm('Zucchero 京都 二条'), menu_url: null,
    notes: '[Italian · Nijo-Takakura, a fishmonger family\'s à la carte Italian] A casual 2nd-floor Italian with a huge menu: build a plate of seafood appetizers, then uni risotto, ravioli or eel, with three homemade breads and natural wines by the glass. Half portions on request. About ¥10,000–15,000 with wine. Can be slow. Closed Tue and Wed.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened around January 2024 (an April 2024 reviewer: "open for about three months"). That reviewer writes the chef came from the Kyoto restaurant "Orto" after working at "Gion Sasaki" and "Rakumi"; a January 2025 diner credits his Japanese-cuisine experience for a rice-flour-battered sweet potato. August and December 2025 reviewers say the owner\'s family runs a fish shop, hence the fish. A July 2026 reviewer calls it listed in the Michelin Guide.',
      philosophy: null,
      specialty: 'Seafood à la carte; uni risotto; homemade breads.',
      anecdotes: [
        { text: 'December 2025: "Since the owner\'s family runs a fish shop, there are plenty of fish dishes available. The quality of the fish is outstanding, and each plate is generously portioned."', source: R + 'B519280152/' },
        { text: 'August 2024: "The portions are quite large… When I mentioned this to the chef, he said they can serve half sizes! Just let them know!"', source: R + 'B506109281/' },
        { text: 'June 2026: "The uni risotto was a luxurious dish, generously filled with uni (though it was a bit on the salty side)."', source: R + 'B530143126/' },
      ],
      japanese_sources_summary: '食べログ: Zucchero、イタリアン、中京区二条通高倉西入松屋町55-1 西本ビル2F、烏丸御池1番出口から徒歩6分、月・木〜日18:00〜23:00、火・水休み、予約可、禁煙、カード可、電子マネー・QR不可。口コミ (2024年1月〜2026年10月、英語): 2024年初めに開店、料理人はOrto出身で、Gion SasakiとRakumiでも働いた (2024年4月)、店主の家は魚屋、アラカルト中心で品数が多い、ハーフサイズ可、前菜の盛り合わせ、うにのリゾット、真鯛のラビオリ、鮎、Amakusaの鰻、ほうじ茶のパン、フォカッチャ、自然派ワイン、ミシュランガイド掲載との声 (2026年7月)、提供がゆっくり、リゾットが塩辛いとの声 (2026年6月)、2024年8月には昼営業も始めたとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B478333640', 'B482719660', 'B498474410', 'B500036408', 'B506109281', 'B510588573', 'B512922864', 'B519280152', 'B530063876', 'B530143126', 'B532454390', 'B538515685'])) },
    cultural_comfort: { level: 'friendly', note: 'Staff help build an appetizer plate; half portions on request.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入松屋町55-1 西本ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.013479, 135.762022) offset about 4.5m to (35.013512, 135.761994): same building as kyoto_stars_sake_salon (2.8m) and kyoto_la_pleine_lune (4.0m, also 西本ビル 2F); now 6.5m clear; GSI lot 京都府京都市中京区松屋町55番地 about 5m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510588573/', R + 'B530063876/', R + 'B532454390/'],
    price_note: 'No dish prices given; about ¥10,000–15,000 per person with wine (2024–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers', '', 'Antipasti', 'ask', 'no', 'July 2025.', 'antipasto_misto'),
      it('', '', 'Sea-urchin and arugula risotto', '', 'Rice', 'ask', 'no', '2025–2026.', 'uni_risotto'),
      it('', '', 'Red-snapper ravioli with fava-bean sauce', '', 'Pasta', 'no', 'no', 'June 2026.', 'ravioli'),
      it('', '', 'Lasagna', '', 'Pasta', 'no', 'no', 'April 2024.', 'lasagna'),
      it('', '', 'Braised beef cheek in red wine', '', 'Main', 'ask', 'no', 'July 2025.', 'beef_cheek'),
    ] }, {
    cuisine: '店主の家が魚屋の、2024年初め開店の魚介中心のアラカルトのイタリアン。品数が多く、自家製パンと自然派のグラスワイン (食べログ、2024〜2026年の口コミ)・スタッフと選ぶ前菜の盛り合わせ: バーニャカウダ、本まぐろとクスクス、パテ・ド・カンパーニュ、メロンやいちごとブッラータと生ハム、かつおのタリアータ、真鯛のカルパッチョ、さばの燻製とチェリー (2025年7月)・2種のうにとルッコラのリゾット (2025〜2026年)・真鯛のラビオリとそら豆のソース、ときしらずの燻製、明太子のブルスケッタ (2026年6月)・鮎のうろこ焼き、Amakusaの鰻、ごまふぐの白子 (2025年7月〜2026年)・ラザニア、紫いものニョッキのゴルゴンゾーラ、仔牛や鹿のカツレツ、牛ほほ肉の煮込み、いかのパスタ・ほうじ茶のパン、フォカッチャ、グリッシーニ・イタリアのプリン、タルトゥーフォ、ベルガモットのリキュール、エルダーフラワーソーダ、ノンアルコールワイン',
    neighborhood: '二条通、高倉の西。烏丸御池から徒歩6分',
    gf_detail: 'グルテンフリーではない: パスタ、ラザニア、ラビオリ、ニョッキ、カツレツ、自家製パン3種 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚介中心のイタリアンで、ブッラータ、生ハム、うに、鰻、牛肉 (2024〜2026年の口コミ)。',
    notes: '[イタリアン・二条高倉、魚屋の家のアラカルト] 気軽な2階のイタリアン。品数がとても多く、魚介の前菜を盛り合わせてもらい、うにのリゾット、ラビオリ、鰻などを、自家製パン3種と自然派のグラスワインで。ハーフサイズ可。ワイン込みで10,000〜15,000円ほど。提供はゆっくりめ。火・水休み。',
  });
}

// ================================================================ nota
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040258/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '17:00']), WE = day(['11:00', '18:00']);
  put({
    id: 'kyoto_nota_rokkaku', name: 'nota', category: 'OMNI',
    lat: 35.007469, lng: 135.755753, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the dorayaki are pancake layers of wheat batter (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dorayaki are served with cream, and the pancakes are egg-based (2025–2026 reviews); drinks include matcha and hojicha.',
    hours_raw: 'Tabelog: Mon–Fri 12:00–17:00; Sat, Sun and holidays 11:00–18:00; open every day; hours may change. No reservations; queues at weekends. Food must be ordered — no drinks-only (April 2026). Cash only: no cards, e-money or QR codes. Counter on the 1st floor, tables upstairs. One person may be serving at weekends; a September 2026 diner waited over 30 minutes. In the converted storehouse of the Kubo residence, a registered cultural property, down an alley off Rokkaku-dori west of Shinmachi; 5 min from Karasuma, Shijo or Karasuma Oike.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'An alley off Rokkaku-dori west of Shinmachi — 5 min from Shijo',
    cuisine: 'A café in an old storehouse serving copper-griddled dorayaki stacked like pancakes — four layers with sweet bean paste, cream, black syrup, nuts and berries — with matcha or hojicha (Tabelog; 2024–2026 reviews) · plain dorayaki with hojicha ¥1,450 (September 2026) or iced matcha ¥1,550 (April 2026) · matcha dorayaki with hojicha ¥1,650 (May 2026) · seasonal dorayaki — sakura (April 2026), yomogi (May 2025) — with matcha ¥2,050 · matcha or hojicha ice cream · "hanawarabi" flower warabi-mochi from the sister café 麓寿庵 (April–May 2026)',
    website: null, gmaps: gm('nota 六角 どら焼き'), menu_url: null,
    notes: '[Dorayaki café · Rokkaku-Shinmachi, griddle dorayaki in an old storehouse] Down an alley in the storehouse of a registered cultural-property house: warm, copper-griddled dorayaki stacked like pancakes with bean paste, cream and black syrup, plus matcha or hojicha. Sets about ¥1,450–2,050. Cash only; expect a wait at weekends. Open daily.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A May 2025 reviewer reported the original owner — who served pancake-style dorayaki with Japanese black teas — was closing on 31 May 2025. By 2026 it had reopened under a new operator with the same copper-griddled dorayaki but matcha and hojicha in place of the black teas (April 2026), and reviewers say it serves the hanawarabi of 麓寿庵, the café in the main house of the same residence (kyoto_rokujuan in this guide); one May 2026 guest was sent here when 麓寿庵 was full.',
      philosophy: null,
      specialty: 'Copper-griddled pancake dorayaki.',
      anecdotes: [
        { text: 'April 2026: "This cafe has been taken over from the previous owner, and while the Japanese black tea is no longer available, they still offer dorayaki cooked on a copper plate, along with matcha or hojicha!"', source: R + 'B483753894/' },
        { text: 'May 2026: "These pancakes are a fun twist with four layers of dorayaki! They are filled with sweet red bean paste!"', source: R + 'B527428685/' },
        { text: 'September 2026: "I waited over 30 minutes for my order without any updates… However, the food was indeed delicious."', source: R + 'B535871666/' },
      ],
      japanese_sources_summary: '食べログ: nota、カフェ、中京区六角通新町西入西六角町101、烏丸・四条・烏丸御池から徒歩5分、月〜金12:00〜17:00、土日・祝日11:00〜18:00、年中無休、予約不可、カード・電子マネー・QR不可、禁煙。口コミ (2024年4月〜2026年10月、英語): 登録有形文化財のKubo家住宅の蔵を改装、銅板で焼くパンケーキ風のどら焼き (4枚重ね、あんこ、クリーム、黒蜜、ナッツ、ベリー)、プレーン・ほうじ茶セット1,450円、抹茶どら焼き・ほうじ茶セット1,650円、季節の桜どら焼き・抹茶セット2,050円、前の店主は2025年5月31日で閉店、その後新しい運営で再開 (和紅茶はなくなった)、麓寿庵の花わらびも、飲み物だけの注文は不可、週末はひとりで対応し30分以上待つことも (2026年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B483753894', 'B524961643', 'B525804563', 'B526652016', 'B527329510', 'B527428685', 'B529259498', 'B529622965', 'B530041185', 'B534916041', 'B535871666', 'B537883483'])) },
    cultural_comfort: { level: 'friendly', note: 'Cash only; no drinks-only orders; long waits possible at weekends.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通新町西入西六角町101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reopened under new management, with reviews dated March to October 2026.' },
    pin_source: `Tabelog ${TB} (35.007469, 135.755753); GSI lot 京都府京都市中京区西六角町101番地 about 4m away; nearest pin kyoto_rokujuan 9.0m (the main house of the same residence); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527428685/', R + 'B529259498/', R + 'B535871666/'],
    price_note: 'Set prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Plain dorayaki and hojicha set', '¥1,450', 'Set', 'no', 'no', 'September 2026.', 'plain_dorayaki_set'),
      it('', '', 'Matcha dorayaki and hojicha set', '¥1,650', 'Set', 'no', 'no', 'May 2026.', 'matcha_dorayaki_set'),
      it('', '', 'Seasonal dorayaki and matcha set', '¥2,050', 'Set', 'no', 'no', 'April 2026 (sakura).', 'seasonal_dorayaki_set'),
      it('', '', 'Hanawarabi (flower warabi-mochi)', '', 'Sweets', 'ask', 'ask', 'April–May 2026.', 'hanawarabi'),
    ] }, {
    cuisine: '古い蔵のカフェ。銅板で焼くパンケーキのように重ねたどら焼き (4枚、あんこ、クリーム、黒蜜、ナッツ、ベリー) に抹茶かほうじ茶 (食べログ、2024〜2026年の口コミ)・プレーンのどら焼きとほうじ茶1,450円 (2026年9月)、アイス抹茶1,550円 (2026年4月)・抹茶のどら焼きとほうじ茶1,650円 (2026年5月)・季節のどら焼き、桜 (2026年4月)、よもぎ (2025年5月)、抹茶付き2,050円・抹茶やほうじ茶のアイス・姉妹店の麓寿庵の「花わらび」(2026年4〜5月)',
    neighborhood: '六角通、新町の西の路地。四条から徒歩5分',
    gf_detail: 'グルテンフリーではない: どら焼きは小麦の生地のパンケーキを重ねたもの (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: どら焼きはクリーム添えで、生地には卵を使う (2025〜2026年の口コミ)。飲み物は抹茶やほうじ茶。',
    notes: '[どら焼きカフェ・六角新町、古い蔵の銅板どら焼き] 文化財の住宅の路地の奥の蔵で、銅板で焼いた温かいどら焼きをパンケーキのように重ね、あんこ、クリーム、黒蜜とともに、抹茶かほうじ茶で。セットは1,450〜2,050円ほど。現金のみ。週末は待つことも。毎日営業。',
  });
}

// ================================================================ 食堂ゑびす
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029008/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00'], D = ['17:30', '21:00'];
  put({
    id: 'kyoto_shokudo_ebisu', name: '食堂ゑびす (Shokudo Ebisu)', category: 'OMNI',
    lat: 35.014874, lng: 135.766792, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: set meals with fried shrimp and fish, miso soup and soy-simmered dishes, and Chinese noodles at night (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fishmonger\'s diner — sashimi, grilled and simmered fish, fried shrimp, pork and beef (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 11:00–14:00 and 17:30–21:00; Sat 11:00–14:00; closed Sunday and public holidays; hours may change. Lunch is a single daily set by weekday, served without ordering (Friday: fried shrimp). Evening set meals plus a long handwritten menu. Cash only: no cards, e-money or QR codes. 17 seats: 12 at tables, 5 at the counter; water is self-service. Non-smoking. Styrofoam fish boxes may be stacked at the door. On Ebisugawa-dori west of Teramachi, 6 min from Kyoto Shiyakusho-mae.',
    hours: { 0: [L, D], 1: [L, D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ebisugawa-dori west of Teramachi — 6 min from Kyoto Shiyakusho-mae',
    cuisine: 'A small diner run by siblings from a fishmonger family: a cheap daily fish set at lunch and a long market-driven menu at night (Tabelog; 2023–2026 reviews) · daily lunch set ¥880, e.g. Friday fried shrimp and white fish with sides and miso soup (May–June 2026); sashimi set about ¥800 (2023) · evening sets ¥1,300 (sashimi and simmered fish) and ¥2,000 (sashimi, grilled mackerel, shrimp and fish tempura) (October 2026) · sashimi platter of seasonal fish, shellfish, squid and shrimp; black-vinegar pork; firefly squid in soy; white asparagus with grass-fed beef; giant fried shrimp; Chinese noodles to finish (May 2024) · Shine Muscat and ricotta salad; bear shank with ponzu; omurice; seafood bowl; grilled flounder (July 2025)',
    website: null, gmaps: gm('食堂ゑびす 夷川'), menu_url: null,
    notes: '[Fish diner · Ebisugawa-Teramachi, a fishmonger family\'s shokudo] A no-frills 17-seat diner where the fish comes straight from the family business: one ¥880 lunch set a day, evening sets from ¥1,300, and a handwritten menu of sashimi, simmered fish and surprises with beer. Cash only. Closed Sun and holidays; Saturday lunch only.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed siblings)'], origin: null,
      background: 'A May 2024 reviewer describes a relaxed, warm place run by siblings, with a daily handwritten menu by the owner; May 2026 reviewers say it is run by a fishmonger and sources from markets and producers. Regulars fill it at lunch; one June 2026 first-timer felt brushed off at the till compared with regulars.',
      philosophy: null,
      specialty: 'Daily fish set meals; sashimi platters.',
      anecdotes: [
        { text: 'May 2024: "The atmosphere, run by siblings, is pleasantly relaxed and warm… Here, ordering the sashimi platter is a must."', source: R + 'B485033349/' },
        { text: 'October 2026: "They were surprised to see a set meal available at night, especially for just JPY 1300, which includes sashimi and simmered fish!"', source: R + 'B498819023/' },
        { text: 'May 2026: "For lunch, they only offer a daily special, with a fixed menu for each day of the week… I was amazed by the price—just JPY 880 in this day and age!"', source: R + 'B528233930/' },
      ],
      japanese_sources_summary: '食べログ: 食堂ゑびす、海鮮・日本料理、中京区夷川通寺町西入丸屋町695、京都市役所前から徒歩6分、月〜金11:00〜14:00・17:30〜21:00、土11:00〜14:00、日・祝日休み、予約可、17席 (テーブル12・カウンター5)、禁煙、カード・電子マネー・QR不可。口コミ (2023年1月〜2026年10月、英語): きょうだいで営む (2024年5月)、魚屋が営む食堂、昼は曜日ごとの日替わり定食のみ880円 (金曜はえびフライ)、夜は定食1,300円・2,000円と手書きの品書き、刺身の盛り合わせ、黒酢の酢豚、ほたるいかのしょうゆ漬け、ホワイトアスパラと牛肉、大きなえびフライ、締めの中華そば、熊のすね肉のぽん酢、オムライス、海鮮丼、常連が多い、会計時の対応が素っ気なかったとの声 (2026年6月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B459217079', 'B461263355', 'B485033349', 'B498819023', 'B510609111', 'B528233930', 'B528555498', 'B530469962'])) },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' diner; fixed lunch set; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通寺町西入丸屋町695',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014892, 135.766792) offset about 2m south to (35.014874, 135.766792): kyoto_furlan_ebisugawa (丸屋町693, next door) was 4.7m away, now 6.3m clear; GSI lot 京都府京都市中京区丸屋町695番地 about 8m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498819023/', R + 'B528233930/', R + 'B530469962/'],
    price_note: 'Prices from 2023–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (e.g. Friday fried shrimp)', '¥880', 'Set meal', 'no', 'no', 'May–June 2026.', 'higawari_lunch'),
      it('', '', 'Evening set: sashimi and simmered fish', '¥1,300', 'Set meal', 'no', 'no', 'October 2026.', 'evening_set_1300'),
      it('', '', 'Evening set: sashimi, grilled mackerel, tempura', '¥2,000', 'Set meal', 'no', 'no', 'October 2026.', 'evening_set_2000'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'May 2024 and July 2025.', 'sashimi_moriawase'),
    ] }, {
    cuisine: '魚屋の家のきょうだいが営む小さな食堂。昼は手頃な日替わりの魚の定食、夜は市場の仕入れ次第の多彩な品書き (食べログ、2023〜2026年の口コミ)・日替わり昼定食880円、例えば金曜はえびフライと白身魚のフライに小鉢とみそ汁 (2026年5〜6月)、刺身定食800円ほど (2023年)・夜の定食1,300円 (刺身と煮魚)、2,000円 (刺身、焼きさば、えびと魚の天ぷら) (2026年10月)・旬の魚、貝、いか、えびの刺身の盛り合わせ、黒酢の豚、ほたるいかのしょうゆ漬け、ホワイトアスパラとグラスフェッドの牛肉、大きなえびフライ、締めの中華そば (2024年5月)・シャインマスカットとリコッタのサラダ、熊のすね肉のぽん酢、オムライス、海鮮丼、ひらめの焼き物 (2025年7月)',
    neighborhood: '夷川通、寺町の西。京都市役所前から徒歩6分',
    gf_detail: 'グルテンフリーではない: えびや魚のフライ、みそ汁、しょうゆの煮物の定食、夜は中華そばも (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚屋の食堂。刺身、焼き魚、煮魚、えびフライ、豚肉、牛肉 (2023〜2026年の口コミ)。',
    notes: '[魚の食堂・夷川寺町、魚屋の家の食堂] 家業の魚がそのまま届く、飾らない17席の食堂。昼は1日1種の880円の定食、夜は1,300円からの定食と、刺身、煮魚、意外な一品が並ぶ手書きの品書きをビールとともに。現金のみ。日・祝日休み、土曜は昼のみ。',
  });
}

// ================================================================ Lab.Igarashi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045328/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_lab_igarashi', name: 'Lab.Igarashi', category: 'OMNI',
    lat: 35.005635, lng: 135.754787, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. There is no fixed menu: the chef builds each course around the day\'s ingredients and your preferences, and calls once about the course when you book; sauces are made from scratch. Courses reviewed came with baguette for the sauce (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Courses are tailored to each guest and use organic vegetables, but the reviewed menus centre on meat, game and fish (2026 reviews); no vegan information.',
    hours_raw: 'Tabelog: Tue–Sun 18:00–23:00 (L.O. 22:00); closed Monday. Reservations taken; the restaurant calls once to discuss the course; may turn guests away when full, as one chef cooks and serves (June 2026). Short course ¥4,500; omakase from ¥6,000, with game such as venison, wild boar or pigeon when available; à la carte possible; call ahead for specific dishes. 10 seats, counter and tables; private hire up to 20. Non-smoking. Cards, IC cards and QR codes. Opened May 2026. 6 min from Hankyu Karasuma.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma — 6 min from Hankyu Karasuma',
    cuisine: 'A ten-seat French counter opened in May 2026, where the owner-chef cooks alone and builds each course from the day\'s ingredients and your tastes and budget (Tabelog; June–October 2026 reviews) · short course ¥4,500 (July–September 2026) · omakase from ¥6,000 with same-day game — venison, wild boar, pigeon — or monkfish and milk-fed beef (July and October 2026) · corn ice cream as a starter; mushroom sauce with baguette; meat carved at the counter (August–September 2026) · house-made sauces; organic vegetables; wine',
    website: null, gmaps: gm('Lab.Igarashi 京都'), menu_url: null,
    notes: '[French · Shijo-Karasuma, a one-chef tasting "lab"] A friendly new 10-seat counter where the chef works alone and plans your course on the phone: from-scratch sauces, organic vegetables and, from ¥6,000, game or milk-fed beef carved in front of you. Short course ¥4,500. Book ahead. Closed Monday.',
    chef_bio: { chef_name: 'Igarashi', roles: ['Owner-chef (works alone)'], origin: null,
      background: 'Opened in May 2026 (August 2026 review: "SINCE 2026. Newly opened in May"). Reviewers describe an owner-chef who runs the restaurant single-handed, explains each dish across the counter and enjoys talking with guests (June–October 2026). No source links it to other restaurants named Igarashi.',
      philosophy: 'Creating "new encounters" for guests with a course made for each of them (August 2026 review).',
      specialty: 'Made-to-order French courses; game.',
      anecdotes: [
        { text: 'July 2026: "If you choose a course over JPY 6,000, you can enjoy fresh game such as venison, wild boar, and pigeon, sourced that day… if you call in advance, they will do their best to accommodate requests like \'I\'d like to have pâté.\'"', source: R + 'B532403363/' },
        { text: 'June 2026: "Since it\'s a one-person operation with both table and counter seating, they sometimes have to turn away customers if they are fully booked."', source: R + 'B533443051/' },
        { text: 'August 2026: "The appetizer was surprisingly corn ice cream, which was unexpectedly delicious."', source: R + 'B533562961/' },
      ],
      japanese_sources_summary: '食べログ: Lab.Igarashi、フレンチ、中京区古西町441 シーフレックス錦ビル1F、阪急烏丸駅から徒歩6分、火〜日18:00〜23:00 (L.O.22:00)、月曜休み、予約可 (コースについて一度電話あり)、10席、貸切20名まで、禁煙、カード・電子マネー・QR可。口コミ (2026年6〜10月、英語): 2026年5月開店、店主の料理人がひとりで営む、決まったメニューはなくその日の食材と好みと予算でコースを組む、ショートコース4,500円、6,000円からのおまかせにジビエ (鹿・猪・鳩)、あんこう、ミルクフェッドの牛肉、ソースも手作り、有機野菜、とうもろこしのアイス、マッシュルームのソースとバゲット。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B530667990', 'B532403363', 'B533437656', 'B533443051', 'B533562961', 'B535233533', 'B537317728', 'B537958357'])) },
    cultural_comfort: { level: 'friendly', note: 'Chef explains each dish and plans the course with you; one-person kitchen.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The restaurant phones once after booking to plan the course around preferences (Tabelog remarks; 2026 reviews).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区古西町441 シーフレックス錦ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened May 2026) with reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.005635, 135.754787); GSI lot 京都府京都市中京区古西町441番地 about 12m away; nearest pin kyoto_joko_ya 59.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532403363/', R + 'B533562961/', R + 'B537317728/'],
    price_note: 'Course prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Short course', '¥4,500', 'Course', 'ask', 'ask', 'July–September 2026.', 'short_course'),
      it('', '', 'Omakase course (game when available)', 'from ¥6,000', 'Course', 'ask', 'no', 'July and October 2026.', 'omakase_course'),
    ] }, {
    cuisine: '2026年5月開店の10席のフレンチのカウンター。店主の料理人がひとりで、その日の食材とお客の好みや予算からコースを組む (食べログ、2026年6〜10月の口コミ)・ショートコース4,500円 (2026年7〜9月)・6,000円からのおまかせ。当日のジビエ (鹿、猪、鳩) やあんこう、ミルクフェッドの牛肉 (2026年7月・10月)・前菜のとうもろこしのアイス、バゲットで味わうマッシュルームのソース、カウンターで切り分ける肉 (2026年8〜9月)・手作りのソース、有機野菜、ワイン',
    neighborhood: '四条烏丸の近く。阪急烏丸から徒歩6分',
    gf_detail: '要確認 (予約時に): 決まったメニューはなく、その日の食材と好みでコースを組み、予約後に一度電話でコースの相談がある。ソースは手作り。口コミのコースにはソース用のバゲットがついた (2026年の口コミ)。',
    vegan_detail: '要確認 (予約時に): コースは客ごとに組み、有機野菜を使うが、口コミの献立は肉、ジビエ、魚が中心 (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[フレンチ・四条烏丸、料理人ひとりの「ラボ」] 料理人がひとりで営む、気さくな新しい10席のカウンター。電話でコースを相談し、手作りのソース、有機野菜、6,000円からはジビエやミルクフェッドの牛肉を目の前で切り分けて。ショートコース4,500円。予約を。月曜休み。',
  });
}

save();
