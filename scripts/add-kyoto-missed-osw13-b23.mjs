// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 23.
//   + 緑寿庵清水 Ryokujuan Shimizu (konpeito specialist near Hyakumanben, founded 1847)
//   + Yosuke YAMAJI 山地陽介 (Ducasse-trained chef's French in Gion; since 2015)
//   + fudo (Japanese-ingredient Italian and wine in a basement on Oike; since 2017)
//   + ソローノ Solono (wood-oven Neapolitan pizzeria near Karasuma-Oike; since 2012)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 22).
//   None is in data/kyoto.json: grep by name (緑寿庵/Ryokujuan, 山地/Yamaji, fudo, ソローノ/Solono) and address
//   (吉田泉殿町38-2, 祇園町南側570-151, 御池大東町590, 町頭町90-3) found none; Yosuke YAMAJI is 35–54 m from
//   three Gion records (Niku no Takumi Miyoshi, Gion Kida, Aji Fukushima) — not stacked.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 緑寿庵清水
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005325/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.konpeito.co.jp/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ryokujuan_shimizu', name: '緑寿庵清水 (Ryokujuan Shimizu)', category: 'OMNI',
    lat: 35.028066, lng: 135.777228, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Konpeito are sugar candies in many flavours (fruit, matcha, black sesame, buckwheat, vanilla); flavourings vary and no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly sugar and flavourings, but some flavours may use dairy; no ingredient list is published (2026 reviews).',
    hours_raw: '10:00–17:00; closed Wednesday and the fourth Tuesday of the month (Tabelog). Takeaway only (Tabelog). A small queue may form before opening, and popular seasonal flavours sell out by afternoon (September–October 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX) (Tabelog). 2 min from the Hyakumanben bus stop; 10 min from Demachiyanagi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yoshida, near Hyakumanben — 10 min from Demachiyanagi Stn',
    cuisine: 'Konpeito, Japanese sugar candy, from a shop founded in 1847 and described as Japan\'s only konpeito specialist (September 2026 reviews) · seasonal and fruit flavours such as La France pear, mikan, peach, melon, lemon, strawberry, grape, cider; matcha, black sesame and buckwheat, vanilla, cinnamon, chestnut · small bags ¥750; "Estrela" rich matcha konpeito ¥1,580; gift tins and bamboo baskets (2026 reviews)',
    website: SITE, gmaps: gm('緑寿庵清水'), menu_url: null,
    notes: "[Sweets · Hyakumanben, the konpeito house] Founded in 1847 and said to be Japan's only shop devoted to konpeito, the tiny star-shaped sugar candies, made by a craft passed down without written recipes. Here they taste of the fruit or tea they are named for: La France pear, mandarin, melon, rich matcha, black sesame and buckwheat, with seasonal flavours that sell out by afternoon. Small bags from ¥750 make light, long-keeping gifts. Takeaway only; come early; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Konpeito maker; no person is named in the sources'], origin: null,
      background: 'Per 2026 reviews: founded in 1847; described as the only konpeito specialist in Japan; the technique is passed down without written recipes. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Konpeito.',
      anecdotes: [
        { text: '"As soon as I popped one in my mouth, the flavor of La France pear juice spread instantly." — September 2026.', source: R + 'B462848388/' },
        { text: '"However, many items tend to sell out in the afternoon, so it\'s important to consider the timing of your visit." — September 2026.', source: R + 'B524717104/' },
        { text: '"I arrived around 9:45 AM, and there were already about three people waiting." — October 2026.', source: R + 'B537161276/' },
      ],
      japanese_sources_summary: '食べログ: 緑寿庵清水、和菓子、左京区吉田泉殿町38番地の2、百万遍バス停から徒歩2分、出町柳駅から徒歩10分、月・火・木〜日 10:00〜17:00、水曜と第4火曜休み、持ち帰りのみ、予約可、カード可、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜10月、英語): 1847年創業、日本唯一の金平糖専門店、季節の果物の金平糖、小袋750円、午後には売り切れ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B462848388/', R + 'B524717104/', R + 'B535483713/', R + 'B535887633/', R + 'B536547439/', R + 'B536766191/', R + 'B537161276/', R + 'B537274833/', R + 'B537555179/', R + 'B538452874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Samples to taste and point at; takeaway only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉田泉殿町38番地の2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.028066, 135.777228); cross-checked: GSI 京都府京都市左京区吉田泉殿町38番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537161276/'],
    price_note: 'No price list read; from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Konpeito, small bag (e.g. melon, lemon, strawberry)', '¥750', 'Konpeito', 'ask', 'ask', 'October 2026.', 'small_bag'),
      it('', '', '"Estrela" rich matcha konpeito', '¥1,580', 'Konpeito', 'ask', 'ask', 'October 2026.', 'estrela'),
    ] }, {
    cuisine: '1847年創業、日本唯一の金平糖専門店という店の金平糖 (2026年9月の口コミ)・ラ・フランス、みかん、桃、メロン、レモン、苺、葡萄、サイダーなどの季節や果物の味、抹茶、黒胡麻と蕎麦、バニラ、シナモン、栗・小袋750円、「Estrela」の濃い抹茶の金平糖1,580円、贈答用の缶や竹かご (2026年の口コミ)',
    neighborhood: '吉田、百万遍の近く。出町柳駅から徒歩10分',
    gf_detail: '要確認。金平糖は果物、抹茶、黒胡麻、蕎麦、バニラなどさまざまな味の砂糖菓子。味付けは品により、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。主に砂糖と香料だが、乳製品を使う味もあるかもしれない。原材料は公開されていない (2026年の口コミ)。',
    notes: '[和菓子・百万遍、金平糖の店] 1847年創業、日本で唯一の金平糖の専門店といわれ、書かれたレシピなしで技を受け継ぐ。小さな星形の砂糖菓子が、ラ・フランス、みかん、メロン、濃い抹茶、黒胡麻と蕎麦など、名の通りの味がする。季節の味は午後には売り切れる。小袋750円からで、軽く日持ちするお土産に。持ち帰りのみ、早めに、水曜休み。',
  });
}

// ================================================================ Yosuke YAMAJI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025794/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.yosukeyamaji.com/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_yosuke_yamaji', name: 'Yosuke YAMAJI (山地陽介)', category: 'MOM_AND_POP',
    lat: 35.002686, lng: 135.775694, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. French courses with complex sauces (including sesame sauces) and bread; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of fish and meat such as Kyoto Akadori chicken (2026 reviews).',
    hours_raw: 'Lunch entry at 12:00 (to 15:00); dinner in two seatings at 18:00 and 19:00 (to 22:00); closed Wednesday and two irregular days a month (Tabelog). Reservation only, by phone or online; 100% cancellation charge from the day before; change numbers at least two days ahead (Tabelog). Lunch course ¥6,800 (October 2026); dinner ¥12,000 (September 2026); diners report up to ¥30,000–39,999 with wine. 18 seats: a counter and four tables, with a small courtyard (October 2026). 5 min from Gion-Shijo Stn exit 6 (Tabelog). Opened 16 June 2015 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, the south side lanes off Hanamikoji — 5 min from Gion-Shijo Stn',
    cuisine: 'Innovative French with Japanese seasonal sensibility, using organic produce from the chef\'s family farm (September 2026) · lunch course ¥6,800 (an 11th-anniversary course with Kyoto Akadori chicken, October 2026); dinner course ¥12,000 (September 2026) · dishes described as creative and boldly combined, with complex sauces and careful plating; the menu reads like an essay (October 2026) · wine with a sommelier; coffee, tea or hojicha with dessert',
    website: SITE, gmaps: gm('Yosuke YAMAJI 祇園'), menu_url: null,
    notes: "[French · Gion, a Ducasse alumnus on Kyoto's south side] Chef Yosuke Yamaji — Hotel Okura, the Institut Paul Bocuse in Lyon, then Alain Ducasse au Plaza Athénée in Paris — cooks creative French with Kyoto seasons and produce from the family farm, in an eighteen-seat room with a counter, four tables and a small courtyard. Sommelier-manager Maeda leads warm service, and the team sees guests off at the door. Lunch from ¥6,800 is a good-value entry; dinner from ¥12,000. 2026 opinions vary: most praise the sauces and presentation, a few found it salty or slow. Closed Wednesdays.",
    chef_bio: { chef_name: 'Yosuke Yamaji (山地陽介; Tabelog lists the shop under the chef\'s name)', roles: ['Owner-chef', 'Manager and sommelier Maeda (September 2026 review)'], origin: null,
      background: 'Per a September 2026 review: worked at Hotel Okura around 1998, moved to France in 2001, studied at the Institut Paul Bocuse in Lyon and trained at Alain Ducasse au Plaza Athénée in Paris. Another September 2026 review mentions organic produce from the chef\'s family farm; an October 2026 review notes a listing in the Michelin Guide Kyoto 2026. Tabelog: opened 16 June 2015; The Tabelog Award Bronze 2017–2020; French WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: null, specialty: 'Creative French with Kyoto seasons; sauces.',
      anecdotes: [
        { text: '"They even saw us off until the chef was out of sight, showing their professionalism." — October 2026.', source: R + 'B536826591/' },
        { text: '"The use of organic ingredients from the chef\'s family farm, the depth of the complex sauces, the incorporation of Japanese culinary techniques... were all exceptional." — September 2026.', source: R + 'B535893453/' },
        { text: '"Everything was overly salty, raising concerns about sodium intake." — September 2026.', source: R + 'B536350003/' },
      ],
      japanese_sources_summary: '食べログ: Yosuke YAMAJI (山地陽介)、フレンチ・イノベーティブ、東山区祇園町南側570-151、祇園四条駅6番出口から徒歩5分、昼は12:00入店、夜は18:00と19:00の2部制、水曜と月2回の不定休、予約のみ、前日・当日のキャンセルは100%、2015年6月16日オープン、The Tabelog Award Bronze 2017〜2020、フレンチ WEST 百名店 2021・2023・2025。口コミ (2026年9〜10月、英語): Hotel Okura、リヨンの Paul Bocuse Institute、パリの Alain Ducasse、家族の畑の有機野菜、昼6,800円・夜12,000円のコース、ソムリエの Maeda さん、塩気が強いという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535410599/', R + 'B535893453/', R + 'B536262623/', R + 'B536350003/', R + 'B536409162/', R + 'B536826591/', R + 'B537297826/', R + 'B537365868/', R + 'B538101654/', R + 'B538402914/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses; online booking; staff explain the dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-151',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002686, 135.775694); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 183m — the large 570 block, so the pin stays on the Tabelog point; nearest records 35–54 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538101654/', R + 'B536262623/'],
    price_note: 'No published prices read; from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥6,800', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch'),
      it('', '', 'Dinner course', '¥12,000', 'Dinner', 'ask', 'no', 'September 2026.', 'dinner'),
    ] }, {
    cuisine: '日本の季節感を取り入れたイノベーティブなフレンチ。シェフの家族の畑の有機野菜 (2026年9月)・昼のコース6,800円 (京都の赤鶏の11周年の特別コース、2026年10月)、夜のコース12,000円 (2026年9月)・創造的で大胆な組み合わせ、複雑なソース、盛り付けへのこだわり、エッセイのような献立 (2026年10月)・ソムリエのワイン、デザートにコーヒー、紅茶、ほうじ茶',
    neighborhood: '祇園、花見小路から入った南側の路地。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。複雑なソース (胡麻のソースなど) とパンのあるフレンチのコース。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。京都の赤鶏など魚と肉のフレンチのコース (2026年の口コミ)。',
    notes: '[フレンチ・祇園、Ducasse 出身のシェフ] Hotel Okura、リヨンの Institut Paul Bocuse、パリの Alain Ducasse au Plaza Athénée を経た山地陽介シェフが、京都の季節と家族の畑の野菜で創造的なフレンチを作る。カウンターと4卓、小さな坪庭の18席。マネージャー兼ソムリエの Maeda さんの温かい接客で、帰りはスタッフ総出で見送り。昼6,800円からはお値打ち、夜は12,000円から。2026年の評価はソースや盛り付けを褒める声が多い一方、塩気や待ち時間が気になったという声も。水曜休み。',
  });
}

// ================================================================ fudo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029086/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.fudokyoto.com/';
  put({
    id: 'kyoto_fudo', name: 'fudo', category: 'OMNI',
    lat: 35.011159, lng: 135.765427, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian dishes with pasta, risotto, yatsuhashi pastry, fried dishes and spiced bread; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie gras, fish, chicken liver and beef feature throughout (2026 reviews).',
    hours_raw: 'Mon, Wed and Sun 17:00–23:00 (last food order 22:00); Fri and Sat 17:00–24:00; Thursday is listed with a last order of 23:00 but no opening time, and holidays with no times; closed Tuesday unless a holiday (Tabelog). Because Thursday and holidays have no stated hours, no hours are stored. Reservations accepted, including same day (Tabelog); a weekday booking took about a month ahead (September 2026). Omakase or à la carte; diners spend about ¥8,000–14,999. 19 seats at a counter and tables (Tabelog; 2026). Cards (Tabelog). In a basement off Oike-dori, 4 min from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 1 June 2017 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori near City Hall, down an outdoor stair to a basement — 4 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Italian technique with Japanese seasonal ingredients — "fudo" means climate — with Japanese wines (2026 reviews) · signatures: foie gras marinated in Saikyo miso with fresh yatsuhashi; pasta in sea-bream broth with plenty of karasumi; sweetfish risotto with three whole confit ayu; chicken white-liver with spiced baguette; steak with a condiment-rich broth; figs fried with lots of pepper; eel and chili pasta; spencer roll (September–October 2026) · aromatic non-alcohol drinks; Japanese wine pairings · diners spend about ¥8,000–14,999',
    website: SITE, gmaps: gm('fudo 京都 御池'), menu_url: null,
    notes: "[Italian · City Hall, Kyoto ingredients in a late-night basement] Down a narrow stair off Oike-dori, a lively counter-and-table room where Italian technique meets Kyoto produce and Japanese wines: foie gras with Saikyo miso folded into fresh yatsuhashi, pasta in sea-bream broth under shaved karasumi, a risotto into which you break three confit ayu. Diners call it fun, creative and good value at around ¥10,000, and it serves until late — midnight on Fridays and Saturdays. Book about a month ahead for weekdays; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Restaurant team; no person is named in the sources'], origin: null,
      background: 'Per a September 2026 review: the name is the Japanese word for climate, reflecting seasonal Japanese ingredients cooked with Italian technique. Tabelog: Italian, creative and wine bar; opened 1 June 2017; Italian WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Foie gras with yatsuhashi; sweetfish risotto; Japanese wines.',
      anecdotes: [
        { text: '"If someone asks for a delicious place where you can have fun for around JPY 10,000, I often recommend this spot." — September 2026.', source: R + 'B535769939/' },
        { text: '"For the finale, we enjoyed a risotto with confit sweetfish, mixing in three whole sweetfish as we ate." — September 2026.', source: R + 'B538402492/' },
        { text: '"The entrance to the basement was so small that I almost walked past it." — October 2026.', source: R + 'B536999683/' },
      ],
      japanese_sources_summary: '食べログ: fudo、イタリアン・創作・ワインバー、中京区御池大東町590 加納ビル B1F、京都市役所前駅から徒歩4分、月・水・日 17:00〜23:00 (L.O.22:00)、金・土 17:00〜24:00、木曜は L.O.23:00 の記載のみ、火曜休み (祝日は営業)、予約可、当日予約も可、19席、カード可、2017年6月1日オープン、イタリアン WEST 百名店 2025。口コミ (2026年9〜10月、英語): fudo は風土、日本の食材とイタリアンの技法、生八ッ橋と西京味噌のフォアグラ、からすみの鯛だしパスタ、鮎のリゾット、日本ワイン。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535769939/', R + 'B535929371/', R + 'B536051535/', R + 'B536216337/', R + 'B536618546/', R + 'B536999683/', R + 'B537633358/', R + 'B537716202/', R + 'B538026463/', R + 'B538402492/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase or à la carte at the counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池大東町590 加納ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011159, 135.765427); cross-checked: GSI 京都府京都市中京区御池大東町590番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices read; diners spend about ¥8,000–14,999 (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Foie gras with Saikyo miso and fresh yatsuhashi', '', 'Signatures', 'no', 'no', 'September 2026.', 'foie_yatsuhashi'),
      it('', '', 'Sweetfish risotto with three confit ayu', '', 'Signatures', 'ask', 'no', 'September–October 2026.', 'ayu_risotto'),
    ] }, {
    cuisine: 'イタリアンの技法と日本の季節の食材、「fudo」は風土、日本ワインとともに (2026年の口コミ)・名物: 西京味噌漬けのフォアグラと生八ッ橋、たっぷりのからすみの鯛だしパスタ、丸ごと3尾の鮎のコンフィのリゾット、スパイスのバゲットと鶏の白レバー、薬味たっぷりの出汁のステーキ、胡椒たっぷりのいちじくのフリット、鰻と唐辛子のパスタ、スペンサーロール (2026年9〜10月)・香りのノンアルコールドリンク、日本ワインのペアリング・予算は約8,000〜14,999円',
    neighborhood: '市役所近くの御池通、外階段を下りた地下。京都市役所前駅から徒歩4分',
    gf_detail: '要確認。パスタ、リゾット、八ッ橋の皮、揚げ物、スパイスのパンのあるイタリアン。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、魚、鶏レバー、牛肉が中心 (2026年の口コミ)。',
    notes: '[イタリアン・市役所前、夜遅くまでの地下の京都イタリアン] 御池通から細い階段を下りると、カウンターとテーブルのにぎやかな店。イタリアンの技と京都の食材、日本ワイン: 西京味噌のフォアグラを生八ッ橋で包み、鯛だしのパスタにからすみを削り、3尾の鮎のコンフィを崩して混ぜるリゾット。楽しく創造的で、1万円ほどでお値打ちという声。金・土は24時まで。平日でも1か月前の予約を、火曜休み。',
  });
}

// ================================================================ ソローノ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019511/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_solono', name: 'ソローノ (Solono)', category: 'OMNI',
    lat: 35.009809, lng: 135.756815, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Neapolitan pizzeria of wheat-dough pizzas; antipasti such as burrata caprese exist but are not described as gluten-free (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetarian diner ate well here (October 2026), but pizzas use cheese; a marinara-style pizza may suit — check.',
    hours_raw: 'Lunch 11:30–14:00 and dinner 18:00–21:30; closed Thursday (Tabelog). Reservations accepted (Tabelog); walk-ins usually fine at weekday or opening times (October 2026). No service charge; one drink per person at dinner (Tabelog). Only one pizza size; leftovers can be boxed for ¥110 (October 2026). 28 seats: a counter of 6, tables for 12 and 10 upstairs (Tabelog). Non-smoking (Tabelog). Cards (Tabelog). On Anekoji-dori east of Shinmachi, near Karasuma-Oike (Tabelog). Opened 11 February 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Anekoji-dori east of Shinmachi, a short walk from Karasuma-Oike Stn',
    cuisine: 'Authentic Neapolitan pizza from a wood-fired oven, ¥1,900–2,500 each (October 2026) · Margherita; funghi with Parmigiano grated at the table; gorgonzola; Bismarck; Siciliana; Genovese with onion sauce and smoked cheese; a pizza with spicy house salami; quattro formaggi · served with a spicy basil oil for the crust · antipasti: ham with tuna sauce, burrata caprese, grapes with burrata, meatballs in tomato · wine, sake, shochu, cocktails · diners spend about ¥2,000–3,999',
    website: null, gmaps: gm('ソローノ 京都'), menu_url: null,
    notes: "[Pizza · Karasuma-Oike, the neighbourhood Neapolitan] A plain, office-like front on Anekoji-dori hides a lively pizzeria where pizzaioli work a wood-fired oven behind a high counter. The crust is the star — crisp at the edge, chewy within, good to the last bite even cold — under classics like Margherita and funghi with Parmigiano grated at the table, or a fiery house salami. Spoon on the spicy basil oil. Antipasti like ham with tuna sauce are worth extra bread. Pizzas ¥1,900–2,500; lunch is easier than dinner. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Pizzaioli; no person is named in the sources'], origin: null,
      background: 'Tabelog: pizza and Italian, opened 11 February 2012; Pizza "Tabelog 100" 2025. 2026 reviews describe pizza baked in a wood-fired oven by artisans at the counter, with a friendly female pizzaiola who takes requests.',
      philosophy: null, specialty: 'Neapolitan pizza; Margherita; funghi.',
      anecdotes: [
        { text: '"The pizza crust is so delicious that it’s consistently good no matter what toppings are added!" — September 2026.', source: R + 'B528046607/' },
        { text: '"I wanted to order a smaller pizza, but they no longer offer that size." — October 2026.', source: R + 'B536879810/' },
        { text: '"By the way, the spicy sauce with basil was also authentically hot." — October 2026.', source: R + 'B537943417/' },
      ],
      japanese_sources_summary: '食べログ: ソローノ、ピザ・イタリアン、中京区新町姉小路東入ル町頭町90-3、烏丸御池駅から282m、月〜水・金〜日 11:30〜14:00・18:00〜21:30、木曜休み、予約可、サービス料なし (夜は1人1ドリンク制)、28席 (カウンター6、テーブル12、2階10)、禁煙、カード可、2012年2月11日オープン、ピザ百名店 2025。口コミ (2026年9〜10月、英語): 薪窯のナポリピッツァ1,900〜2,500円、マルゲリータ、きのこ、ゴルゴンゾーラ、辛いバジルのオイル、持ち帰りの箱110円。',
      confidence: 'medium', sources: [TB, R + 'B528046607/', R + 'B536383604/', R + 'B536879810/', R + 'B537018551/', R + 'B537125828/', R + 'B537184714/', R + 'B537190691/', R + 'B537353929/', R + 'B537683310/', R + 'B537943417/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte pizzas; staff take requests; one drink each at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町姉小路東入ル町頭町90-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Pizza Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.009809, 135.756815); cross-checked: GSI 京都府京都市中京区町頭町90番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537943417/'],
    price_note: 'Pizza price range from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Margherita', '¥1,900–2,500', 'Pizza', 'no', 'no', 'October 2026 (range for pizzas).', 'margherita'),
      it('', '', 'Funghi (mushroom) pizza', '¥1,900–2,500', 'Pizza', 'no', 'no', 'October 2026 (range for pizzas).', 'funghi'),
    ] }, {
    cuisine: '薪窯の本格ナポリピッツァ、1枚1,900〜2,500円 (2026年10月)・マルゲリータ、目の前でパルミジャーノを削るきのこ、ゴルゴンゾーラ、ビスマルク、シチリアーナ、玉ねぎのソースとスモークチーズのジェノベーゼ、辛い自家製サラミのピッツァ、クアトロフォルマッジ・耳には辛いバジルのオイルを・前菜: ツナソースのハム、ブッラータのカプレーゼ、葡萄とブッラータ、トマトのミートボール・ワイン、日本酒、焼酎、カクテル・予算は約2,000〜3,999円',
    neighborhood: '新町の東の姉小路通、烏丸御池駅から少し歩いたところ',
    gf_detail: 'グルテンフリーではありません。小麦の生地のナポリピッツァの店。ブッラータのカプレーゼなどの前菜もあるが、グルテンフリーとは書かれていない (2026年の口コミ)。',
    vegan_detail: '要確認。ベジタリアンの客も満足していた (2026年10月) が、ピッツァにはチーズを使う。マリナーラ風なら合うかもしれないので確認を。',
    notes: '[ピザ・烏丸御池、街のナポリピッツァ] 姉小路通の事務所のような外観の奥に、高いカウンターの向こうで職人が薪窯を操るにぎやかなピッツェリア。主役は生地で、縁はかりっと中はもちっと、冷めても最後までおいしい。マルゲリータや目の前でパルミジャーノを削るきのこ、辛い自家製サラミのピッツァなど。辛いバジルのオイルをかけて。ツナソースのハムなどの前菜はパンを追加したくなる。ピッツァは1,900〜2,500円、昼の方が入りやすい。木曜休み。',
  });
}

save();
