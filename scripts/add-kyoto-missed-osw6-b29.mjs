// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 29.
//   + 圓徳院アメックスラウンジ Entokuin Amex Lounge (AMEX cardholders' tea lounge in Entoku-in, Kodai-ji; un-skipped from osw6-28
//     per Greg's 2026-11-05 ruling that members-only and referral-only places are listed with the restriction stated)
//   + 逸品 はし長 Ippin Hashinaga (kappo with monthly courses, Shijo Muromachi)
//   + 十二段家 花見小路店 Junidanya Hanamikoji (shabu-shabu and sukiyaki on Hanamikoji, Gion)
//   + 先斗町ふじ田 Pontocho Fujita (Kyoto kaiseki facing the Pontocho Kaburenjo)
//   Same-name counts first, per brand or operator (2026-11-05): 圓徳院アメックスラウンジ — one (the only AMEX lounge outside an
//   airport, May 2023 review). はし長 — one in Kyoto. 十二段家 — Tabelog lists this shop; the official site (junidanya-kyoto.com)
//   names 十二段家 本店 and 十二段家 花見小路店 as separate shops, four doors apart; data has 丸太町十二段家 (ochazuke, Marutamachi),
//   whose own site traces it to a Gion sweets shop named Junidanya — no source found that ties it to the shabu-shabu shops,
//   so this is drafted and the possible link flagged. ふじ田 — one.
//   Taken on 2026-11-05: `next core 200` gave 26022754 (un-skip) and はし長 26034442; `next notable 200` gave 十二段家
//   花見小路店 26001352 and 先斗町ふじ田 26002672. None is in data/kyoto.json: grep by name and address (下河原町530,
//   鯉山町535 室蛸ビル, 祇園町南側570-240, 材木町179-2) found none.
//   Service charges per Tabelog: none listed for any of the four.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 圓徳院アメックスラウンジ (un-skip of osw6-28)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022754/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_entokuin_amex_lounge', name: '圓徳院アメックスラウンジ (Entokuin Amex Lounge)', category: 'OMNI',
    lat: 35.001254, lng: 135.779806, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese sweets served with the tea (2025–26 reviews); no ingredient information. The teas named in reviews are kombu tea, Uji tea and barley tea.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tea (kombu tea, Uji tea, barley tea, ume kombucha, hiyashi ame) and a Japanese sweet (2023–26 reviews); no ingredient information for the sweets.',
    hours_raw: 'AMEX CARDHOLDERS ONLY: entry is for holders of an AMEX Gold or Business Gold card or higher (Tabelog remarks; reviews from August 2024, December 2025 and May 2026), and the cardholder’s companions may come in too (April 2026). A cardholder with a US-issued AMEX was turned away and entered on a friend’s card (April 2026), so the card may need to be issued in Japan. 10:00–17:00 daily, closed irregularly (Tabelog). No reservations (Tabelog). Tea, sweets and entry to Entoku-in (normally ¥500) are free for cardholders (December 2025); nothing to pay. 20 tatami seats; non-smoking (Tabelog). Kodai-ji parking free for 1 hour (Tabelog). Enter by a back gate off Nene no Michi with an AMEX sign, not the temple’s main entrance (February and August 2024); ring the bell if no one is there; shoes off (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Entoku-in at Kodai-ji, off Nene no Michi — 761 m from Gion-Shijo Stn',
    cuisine: 'AMEX Gold-or-higher cardholders only (Tabelog; 2024–26 reviews) · complimentary seasonal tea — kombu tea, ume kombucha, Uji tea, barley tea, hiyashi ame (chilled ginger sweet drink) — with a Japanese sweet, served on tatami facing the garden (2023–26 reviews) · free entry to Entoku-in, normally ¥500 (December 2025) · free sutra copying and miniature dry-garden making (February 2024, April 2026)',
    website: 'https://www.americanexpress.com/japan/personal/benefits/travel/travel_support/sightseeing_lounge.shtml', gmaps: gm('圓徳院 高台寺'), menu_url: TB,
    notes: '[AMEX lounge · Kodai-ji, tea in a temple — AMEX Gold cardholders or higher only] A tea room inside Entoku-in, the Kodai-ji sub-temple, open only to holders of an AMEX Gold card or higher and anyone accompanying a cardholder (Tabelog; 2024–26 reviews); one April 2026 visitor with a US-issued card was refused. Through a back gate off Nene no Michi, ring the bell, leave shoes, and sit on tatami over the garden with free seasonal tea — kombu tea, Uji tea, chilled hiyashi ame — and a sweet. Entry to the temple, sutra copying and a miniature dry-garden are included. 10:00–17:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the AMEX cardholder lounge in Entoku-in, a sub-temple of Kodai-ji, described in May 2023 as the only AMEX lounge outside an airport and in December 2025 as the Entoku-in Guest Hall, formerly the Kyoto Special Tourist Lounge. Tabelog links the AMEX Japan benefits page and states that only Amex Gold or Amex Business Gold cardholders or higher may enter.',
      philosophy: null, specialty: 'Complimentary seasonal tea and a sweet.',
      anecdotes: [
        { text: 'A May 2023 visitor was welcomed after ringing the bell in the courtyard and served ume kombucha at a high tea table; Uji tea, ume water, kombu tea and roasted tea rotate.', source: R + 'B465327627/' },
        { text: 'A February 2024 visitor likened the place to a relative’s grandmother’s house crossed with a ninja mansion, with a hanging scroll within reach.', source: R + 'B480484142/' },
        { text: 'A June 2026 regular singled out the hiyashi ame, a chilled ginger drink, for humid days.', source: R + 'B529974986/' },
      ],
      japanese_sources_summary: '食べログ: 東山区高台寺下河原町530、祇園四条から761m、10:00〜17:00、不定休、予約不可、カード・電子マネー・QR 不可、20席、座敷、禁煙、高台寺駐車場1時間無料、備考 (英訳): Amex Gold と Amex Business Gold 以上のカード会員のみ入場可。口コミ (2022年7月〜2026年6月、英語): AMEX Gold 以上で無料、同伴者も可、米国発行のカードでは入れなかった (2026年4月)、昆布茶・梅昆布茶・Uji のお茶・麦茶・冷やし飴と和菓子、圓徳院の拝観 (通常500円) も無料、写経、小さな枯山水づくり、Nene no Michi 側の裏口、呼び鈴、靴を脱ぐ。',
      confidence: 'medium', sources: [TB, R + 'B455410523/', R + 'B465327627/', R + 'B471500727/', R + 'B480484142/', R + 'B483211352/', R + 'B490504074/', R + 'B490617678/', R + 'B519072312/', R + 'B526192006/', R + 'B526801760/', R + 'B528610593/', R + 'B529974986/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Entry only with an AMEX Gold card or higher (companions welcome); a US-issued card was refused in April 2026, so check the card qualifies. Find the back gate off Nene no Michi, ring the bell, shoes off; staff serve the tea.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺下河原町530',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026. The AMEX page Tabelog links did not load (redirect loop) on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.001254, 135.779806); cross-checked: GSI 京都府京都市東山区下河原町530番地 (lot) 67m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519072312/', R + 'B490504074/', TB],
    price_note: 'Free for AMEX Gold-or-higher cardholders and companions (December 2025; April 2026); not open to others.', last_checked: TODAY, items: [
      it('', '', 'Seasonal tea (kombu tea, Uji tea, barley tea, hiyashi ame)', '¥0', 'Tea', 'ask', 'ask', '2023–26 reviews; cardholders only.', 'seasonal_tea'),
      it('', '', 'Japanese sweet', '¥0', 'Tea', 'ask', 'ask', 'April and May 2026; cardholders only.', 'wagashi'),
      it('', '', 'Entry to Entoku-in', '¥0', 'Temple', '', '', 'Normally ¥500 (December 2025); free for cardholders.', 'temple_entry'),
    ] }, {
    cuisine: 'AMEX Gold 以上のカード会員のみ (食べログ、2024〜2026年の口コミ)・季節の無料のお茶 (昆布茶、梅昆布茶、Uji のお茶、麦茶、冷やし飴) と和菓子、庭に面した座敷で (2023〜2026年の口コミ)・圓徳院の拝観 (通常500円) も無料 (2025年12月)・写経と小さな枯山水づくりも無料 (2024年2月、2026年4月)',
    neighborhood: '高台寺の圓徳院、Nene no Michi 側。祇園四条駅から761m',
    gf_detail: '要確認。お茶と一緒に和菓子が出る (2025〜2026年の口コミ)。原材料の情報はない。',
    vegan_detail: '要確認。お茶 (昆布茶、Uji のお茶、麦茶、梅昆布茶、冷やし飴) と和菓子 (2023〜2026年の口コミ)。和菓子の原材料の情報はない。',
    notes: '[AMEX ラウンジ・高台寺、お寺でお茶 — AMEX Gold 以上のカード会員のみ] 高台寺の塔頭、圓徳院の中のお茶の部屋。入れるのは AMEX Gold 以上のカード会員と同伴者だけ (食べログ、2024〜2026年の口コミ)。2026年4月には米国発行のカードで断られた人もいる。Nene no Michi 側の裏口から入り、呼び鈴を鳴らし、靴を脱いで庭に面した座敷へ。昆布茶、Uji のお茶、冷やし飴など季節のお茶と和菓子が無料。拝観、写経、小さな枯山水づくりも含まれる。10時〜17時。',
  });
}

// ================================================================ はし長
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ippin_hashinaga', name: '逸品 はし長 (Ippin Hashinaga)', category: 'OMNI',
    lat: 35.006244, lng: 135.757946, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set courses that include tempura and fried dishes (March 2025, June 2026) and soy-seasoned dishes; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led courses built on dashi — clear soups, dobin-mushi, chawanmushi (2025–26 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (last entry 12:30), dinner 18:00–22:00 (last entry 19:30); closed Tuesday (Tabelog). Reservations accepted; the shop asks for a call before visiting as it is small (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR, but lunch and all-you-can-drink cannot be paid by card (Tabelog). 20 seats: 6 at the counter and 12 on tatami; semi-private rooms separated by blinds, private hire up to 20 (Tabelog). Non-smoking (Tabelog). On Muromachi north of Takoyakushi; 5 min from Shijo Stn (Tabelog). Opened 21 April 2011 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi north of Takoyakushi — 5 min from Shijo Stn',
    cuisine: 'Kappo set courses that change monthly (April 2025) · lunch course ¥3,500 in 2025, about seven dishes — chirashi sushi, clear soup, sashimi, tempura, chawanmushi, rice with homemade chirimen sansho and red miso soup, hojicha ice cream (March and May 2025); ¥4,400 lunch with hamo sashimi and simmered octopus and taro (June 2026) · dinner courses ¥5,800 (April 2025), ¥7,700 (October 2025), and ¥6,000 or ¥8,000 with more hamo in summer (August 2026) · matsutake dobin-mushi in autumn (October 2026) · homemade desserts (December 2025) · Kyoto sake (March 2026)',
    website: 'https://kyoto-hashinaga.com/', gmaps: gm('逸品 はし長 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Kappo · Shijo Muromachi, monthly courses at a fair price] A small counter-and-tatami kappo on Muromachi that has served monthly-changing courses since 2011: a ¥3,500–4,400 lunch of chirashi sushi, sashimi, tempura and homemade chirimen sansho rice, and dinner courses from about ¥6,000, with hamo in summer and matsutake dobin-mushi in autumn. Desserts are homemade; Kyoto sake. Lunch is cash or e-money only. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as kind and explaining each dish (October 2025)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant particular about fish and sake, opened 21 April 2011, with 6 counter seats and 12 on tatami. An April 2025 diner learned the menu changes monthly.',
      philosophy: null, specialty: 'Seasonal kappo courses; hamo in summer, matsutake dobin-mushi in autumn.',
      anecdotes: [
        { text: 'An April 2025 diner found the dashi in the soup course so good it could be sipped forever, and was so taken with the meal that work talk never came up.', source: R + 'B505575346/' },
        { text: 'An August 2026 diner chose between hamo courses: about one piece a dish at ¥6,000, about five at ¥8,000.', source: R + 'B533287509/' },
        { text: 'An August 2026 diner called the sea urchin the best of half a century of eating.', source: R + 'B534754063/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区室町通蛸薬師上ル鯉山町535 室蛸ビル 1F、四条駅から徒歩5分、昼12:00〜14:00 (最終入店12:30)、夜18:00〜22:00 (最終入店19:30)、火曜休み、予約可、カード・電子マネー・QR 可 (昼と飲み放題はカード不可)、20席 (カウンター6、座敷12)、半個室、2011年4月21日オープン。口コミ (2025年3月〜2026年11月、英語): 昼のコース3,500円・4,400円、夜5,800円・7,700円、夏は鱧のコース6,000円と8,000円、松茸の土瓶蒸し、ちりめん山椒のご飯、自家製のデザート、月替わりの献立、京都の地酒。',
      confidence: 'medium', sources: [TB, 'https://kyoto-hashinaga.com/', R + 'B502285308/', R + 'B504605702/', R + 'B505575346/', R + 'B507537708/', R + 'B515532297/', R + 'B525714640/', R + 'B530288718/', R + 'B532088873/', R + 'B533287509/', R + 'B534754063/', R + 'B536857609/', R + 'B538591693/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a set course; dishes are explained (October 2025); tatami seating suits families (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通蛸薬師上ル鯉山町535 室蛸ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.006244, 135.757946); cross-checked: GSI 京都府京都市中京区鯉山町535番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502285308/', R + 'B530288718/', R + 'B505575346/', R + 'B515532297/', R + 'B533287509/'],
    price_note: 'Course prices from dated reviews (2025–26); the menu changes monthly.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥3,500', 'Lunch', 'ask', 'no', 'March and May 2025; ¥4,400 in June 2026.', 'lunch_course'),
      it('', '', 'Evening course', '¥5,800', 'Dinner', 'ask', 'no', 'April 2025.', 'dinner_course_5800'),
      it('', '', 'Course', '¥7,700', 'Dinner', 'ask', 'no', 'October 2025.', 'dinner_course_7700'),
      it('', '', 'Hamo course', '¥8,000', 'Dinner', 'ask', 'no', 'August 2026; a ¥6,000 course has less hamo.', 'hamo_course'),
    ] }, {
    cuisine: '月替わりの割烹のコース (2025年4月)・昼のコース3,500円は約7品、ちらし寿司、お吸い物、刺身、天ぷら、茶碗蒸し、自家製ちりめん山椒のご飯と赤だし、ほうじ茶のアイス (2025年3月・5月)・鱧の刺身や蛸と里芋の炊き合わせの昼4,400円 (2026年6月)・夜のコース5,800円 (2025年4月)、7,700円 (2025年10月)、夏は6,000円か鱧の多い8,000円 (2026年8月)・秋は松茸の土瓶蒸し (2026年10月)・自家製のデザート (2025年12月)・京都の地酒 (2026年3月)',
    neighborhood: '蛸薬師の北の室町通。四条駅から徒歩5分',
    gf_detail: '要確認。天ぷらや揚げ物、醤油の料理が入ったコース (2025年3月、2026年6月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚中心で出汁を使うコース (お吸い物、土瓶蒸し、茶碗蒸し) (2025〜2026年の口コミ)。',
    notes: '[割烹・四条室町、手頃な月替わりのコース] 室町通の小さな割烹。カウンターと座敷で、2011年から月替わりのコースを出す。昼は3,500〜4,400円でちらし寿司、刺身、天ぷら、自家製ちりめん山椒のご飯。夜は約6,000円からで、夏は鱧、秋は松茸の土瓶蒸し。デザートも自家製、京都の地酒も。昼はカード不可。火曜休み。',
  });
}

// ================================================================ 十二段家 花見小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001352/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_junidanya_hanamikoji', name: '十二段家 花見小路店 (Junidanya Hanamikoji)', category: 'OMNI',
    lat: 35.003014, lng: 135.775056, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: sukiyaki with udon in the pot (December 2025), a tempura rice bowl (Tabelog category; January 2026) and soy-based sauces. For shabu-shabu, ask about the sesame and ponzu sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef house; even the yuba soy-milk hot pot set came with simmered beef and a dashi omelette (January 2026).',
    hours_raw: '11:30–14:00 and 17:00–20:00; closed Wednesday and Thursday (Tabelog). No reservations (Tabelog); waits of 15–30 min at 18:00 (October 2025, February 2026). Cards and PayPay, no e-money (Tabelog). 55 seats with tatami; private hire for 20–50 (Tabelog). Non-smoking (Tabelog). On Hanamikoji; 5 min east of Gion-Shijo Stn (Tabelog). The separate main shop, four doors east, took groups of two or more only (December 2025).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, on Hanamikoji south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Shabu-shabu from the house that calls itself its birthplace (official site; Tabelog) · shabu-shabu set ¥3,800 — three large slices of marbled beef with vegetables, tofu and kombu in an individual pot, sesame sauce or ponzu, both for +¥200, rice and pickles (October 2025, April 2026, August 2026); extra meat from ¥900 (October 2025) · beef sukiyaki set ¥4,200 with a little udon (December 2025) · yuba soy-milk hot pot (January 2026) · Black Wagyu strip loin grilled on a tile (November 2025) · simmered beef, dashimaki omelette, tempura rice bowl (2025–26 reviews)',
    website: 'http://junidanya-kyoto.com/', gmaps: gm('十二段家 花見小路店'), menu_url: TB + 'dtlmenu/',
    notes: '[Shabu-shabu · Gion Hanamikoji, where beef shabu-shabu began] The Hanamikoji branch of Junidanya, whose second-generation owner devised beef mizutaki — now known as shabu-shabu — in 1949, and opened this shop as a more casual one (official site). A ¥3,800 set brings three slices of marbled beef for your own pot with sesame sauce or ponzu; the sukiyaki set (¥4,200) is the other favourite. No reservations — expect a short wait at dinner. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site (junidanya-kyoto.com): 「牛肉の水炊き(しゃぶしゃぶ)発祥の店」. In 1949 (昭和24年) the second-generation owner, advised by a doctor friend from Tottori (吉田璋也) and others, devised beef mizutaki, which became the shabu-shabu known across Japan. The same owner opened the Hanamikoji shop to make it easier to drop in; the main shop is four doors east, and the site marks the two as separate shops.',
      philosophy: null, specialty: 'Shabu-shabu with house sesame sauce; beef sukiyaki.',
      anecdotes: [
        { text: 'An April 2026 diner dipped the beef mostly in the sesame sauce and kept the milder ponzu for the vegetables.', source: R + 'B526148559/' },
        { text: 'An August 2026 diner noted that every other customer was from overseas, and several staff too.', source: R + 'B534035655/' },
        { text: 'A December 2025 diner, turned away from the main shop as a party of one, came here instead for shabu-shabu with simmered beef and Kyoto yuba.', source: R + 'B519324468/' },
      ],
      japanese_sources_summary: '公式サイト: 牛肉の水炊き(しゃぶしゃぶ)発祥の店、昭和24年に二代目が鳥取の医師 吉田璋也らの助言で考案、二代目がより気軽にと花見小路店を出店、本店はその四軒東で別店舗。食べログ: しゃぶしゃぶ・鍋・天丼、東山区祇園町南側570-240、祇園四条から徒歩5分、11:30〜14:00・17:00〜20:00、水木休み、予約不可、カード・PayPay 可、55席、座敷、貸切20〜50名。口コミ (2025年10月〜2026年8月、英語): しゃぶしゃぶ定食3,800円 (肉3枚、ごまだれ・ぽん酢、両方で200円増し)、追加の肉900円から、すき焼き御膳4,200円、湯葉の豆乳鍋、黒毛和牛ロースの瓦焼き、だし巻き、牛の煮物、外国人の客と店員が多い、夕方は15〜30分待ち。',
      confidence: 'medium', sources: [TB, 'http://junidanya-kyoto.com/', R + 'B516138032/', R + 'B516913669/', R + 'B518579719/', R + 'B519006663/', R + 'B519324468/', R + 'B520560134/', R + 'B522924164/', R + 'B523143441/', R + 'B524540834/', R + 'B526148559/', R + 'B534035655/', R + 'B534757587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in and wait; set meals with your own pot, and staff explain how long to simmer (December 2025). Many overseas guests and several overseas staff (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-240',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003014, 135.775056); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot; GSI does not resolve -240) 115m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526148559/', R + 'B516913669/', R + 'B518579719/', R + 'B534757587/'],
    price_note: 'Prices from dated reviews (October 2025 – August 2026).', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu set', '¥3,800', 'Hot pot', 'ask', 'no', 'Sesame sauce or ponzu (April 2026; August 2026).', 'shabu_shabu_set'),
      it('', '', 'Both sauces', '+¥200', 'Hot pot', 'ask', '', 'April 2026.', 'both_sauces'),
      it('', '', 'Extra meat', 'from ¥900', 'Hot pot', 'ask', 'no', 'October 2025.', 'extra_meat'),
      it('', '', 'Beef sukiyaki set', '¥4,200', 'Hot pot', 'no', 'no', 'With udon (December 2025).', 'sukiyaki_set'),
      it('', '', 'Yuba soy-milk hot pot', '', 'Hot pot', 'ask', 'no', 'Set with simmered beef and dashimaki (January 2026).', 'yuba_nabe'),
    ] }, {
    cuisine: '牛肉の水炊き(しゃぶしゃぶ)発祥の店 (公式サイト、食べログ)・しゃぶしゃぶ定食3,800円は霜降りの大きな肉3枚と野菜、豆腐、昆布の一人鍋、ごまだれかぽん酢 (両方で200円増し)、ご飯と漬物 (2025年10月、2026年4月・8月)、追加の肉は900円から (2025年10月)・牛すき焼き御膳4,200円、少しうどん入り (2025年12月)・湯葉の豆乳鍋 (2026年1月)・黒毛和牛ロースの瓦焼き (2025年11月)・牛の煮物、だし巻き、天丼 (2025〜2026年の口コミ)',
    neighborhood: '祇園、四条の南の花見小路。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。すき焼きにうどんが入り (2025年12月)、天丼もあり (食べログのジャンル、2026年1月)、醤油のたれを使う。しゃぶしゃぶはごまだれとぽん酢について要確認。',
    vegan_detail: 'ヴィーガン不可。牛肉の店で、湯葉の豆乳鍋の定食にも牛の煮物とだし巻きが付く (2026年1月)。',
    notes: '[しゃぶしゃぶ・祇園花見小路、牛のしゃぶしゃぶ発祥] 十二段家の花見小路店。昭和24年に二代目が考案した「牛肉の水炊き」が今のしゃぶしゃぶになり、その二代目がより気軽にと出したのがこの店 (公式サイト)。3,800円の定食は霜降りの肉3枚を一人鍋で、ごまだれかぽん酢で。すき焼き御膳 (4,200円) も人気。予約不可、夕方は少し待つ。水木休み。',
  });
}

// ================================================================ 先斗町ふじ田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002672/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'kyoto_pontocho_fujita', name: '先斗町ふじ田 (Pontocho Fujita)', category: 'OMNI',
    lat: 35.007914, lng: 135.770998, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses include tempura, nama-fu (wheat gluten) and grilled fu (August 2025, July 2026); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cooking rests on a kombu and katsuobushi dashi (Tabelog, shop text); fish and meat courses.',
    hours_raw: 'Lunch 11:30–14:00 (last food order 12:00), dinner 17:30–21:30 (last food order 19:00); closed Monday and Tuesday (Tabelog). Tabelog still notes a closure until mid-April 2026 after a fire next door; reviews from June to October 2026 show it open again. Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 50 seats at a counter and in private and tatami rooms (Tabelog); shoes off at the entrance (July 2026). Non-smoking (Tabelog). On Pontocho south of Sanjo, facing the Pontocho Kaburenjo (September 2025); 4 min from Keihan Sanjo Stn (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, facing the Kaburenjo — 4 min from Sanjo Stn',
    cuisine: 'Kyoto cuisine built on a dashi of three kombu, steeped at 60°C for two hours, with katsuobushi; fish chosen each morning at the central market by the head chef and from a fishmonger of over 20 years (Tabelog, shop text) · lunch and dinner kaiseki and à la carte (Tabelog) · eight-dish course ¥12,000 (Tabelog), the same price as the Hana dinner (July 2026) · Miyabi lunch course ¥8,000: sashimi, Kyoto wagyu steak, hamo tempura, squid rice (August 2025) · Tsuki dinner course (April 2025) · a ¥25,400 course with seared kinmedai (June 2025) · fried hamo (June and October 2026) · hojicha gelato (July 2025) · roast beef coated in tea leaves sold online (Tabelog)',
    website: null, gmaps: gm('先斗町ふじ田'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Pontocho, facing the Kaburenjo] A kaiseki house on Pontocho opposite the Kaburenjo theatre, where the head chef shops the central market every morning and builds everything on a two-hour kombu-and-bonito dashi. Lunch courses from about ¥8,000, dinner around ¥12,000; seats at the counter, where the chef talks with guests, or in window rooms upstairs. One May 2025 diner found the meat and grilled fish weaker than the rest. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), who goes to the central market each morning (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): Kyoto cuisine centred on dashi from ma-kombu and two kinds of Rishiri kombu, steeped at 60°C for two hours with katsuobushi added quickly; seafood from Setouchi and Kyushu through a fishmonger of more than 20 years; private rooms for business and celebrations; an online shop sells roast beef of Kyoto beef round coated in tencha tea leaves from Wazuka, Uji.',
      philosophy: 'Dashi as the essence of every dish, drawing out the ingredients’ own flavour (Tabelog, shop text).', specialty: 'Kyoto kaiseki courses; hamo in season.',
      anecdotes: [
        { text: 'A May 2025 diner found the head chef friendly and easy to talk to; most guests were from overseas and were served well in English.', source: R + 'B507011810/' },
        { text: 'A September 2025 diner ate in a second-floor private room looking out on the Pontocho Kaburenjo, a filming location of the film “National Treasure”.', source: R + 'B515076439/' },
        { text: 'An October 2026 diner was served hamo described as “the best at this time of year” and found it remarkably fluffy.', source: R + 'B538081651/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区先斗町通三条下る材木町179-2、三条駅から徒歩4分、昼11:30〜14:00・夜17:30〜21:30、月火休み、隣の店の火事で2026年4月中旬まで休業との記載、予約可、カード可 (電子マネー・QR 不可)、50席、個室、禁煙。店の紹介 (英訳): 3種の昆布を60℃で2時間、鰹節で引く出汁、料理長が毎朝中央市場へ、20年以上の付き合いの魚屋から Setouchi と Kyushu の魚介、昼と夜の懐石とアラカルト、8品のコース12,000円、てん茶をまぶしたローストビーフの通販。口コミ (2025年2月〜2026年10月、英語): 歌舞練場の向かい、2階の個室、料理長と話せる、英語での対応 (2025年5月)、肉と焼き魚は今ひとつ (2025年5月)、常連が多く落ち着かない日も (2025年7月)、鱧の天ぷらと揚げ物、ほうじ茶のジェラート。',
      confidence: 'medium', sources: [TB, R + 'B501836586/', R + 'B503541332/', R + 'B507011810/', R + 'B509376869/', R + 'B511861257/', R + 'B512831794/', R + 'B514369270/', R + 'B515076439/', R + 'B529781590/', R + 'B533597423/', R + 'B536063380/', R + 'B538081651/'] },
    cultural_comfort: { level: 'english', note: 'A May 2025 diner reported most guests were from overseas and were served well in English; the head chef chats at the counter. Shoes off; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通三条下る材木町179-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (closure notice to mid-April 2026 after a neighbouring fire); reviews dated June–October 2026 show it reopened.' },
    pin_source: `Tabelog ${TB} (35.007914, 135.770998); cross-checked: GSI 京都府京都市中京区材木町179番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B511861257/', R + 'B533597423/', R + 'B509376869/'],
    price_note: 'Tabelog lists one 8-dish course at ¥12,000; other prices from dated reviews (2025–26).', last_checked: TODAY, items: [
      it('', '', 'Course (8 dishes)', '¥12,000', 'Dinner', 'ask', 'no', 'Tabelog; the Hana dinner was ¥12,000 in July 2026.', 'course_12000'),
      it('', '', 'Miyabi lunch course', '¥8,000', 'Lunch', 'no', 'no', 'Includes hamo tempura and nama-fu (August 2025).', 'miyabi_lunch'),
      it('', '', 'Course', '¥25,400', 'Dinner', 'ask', 'no', 'June 2025.', 'course_25400'),
    ] }, {
    cuisine: '3種の昆布を60℃で2時間かけ、鰹節を加えて引く出汁が要の京料理。料理長が毎朝中央市場で選ぶ魚と、20年以上の付き合いの魚屋の魚 (食べログ、店の紹介)・昼と夜の懐石とアラカルト (食べログ)・8品のコース12,000円 (食べログ)、Hana のディナーも12,000円 (2026年7月)・昼の Miyabi のコース8,000円、刺身、京都の和牛ステーキ、鱧の天ぷら、いかご飯 (2025年8月)・夜の Tsuki のコース (2025年4月)・炙った金目鯛の入る25,400円のコース (2025年6月)・鱧の揚げ物 (2026年6月・10月)・ほうじ茶のジェラート (2025年7月)・茶葉をまぶしたローストビーフの通販 (食べログ)',
    neighborhood: '先斗町、歌舞練場の向かい。三条駅から徒歩4分',
    gf_detail: '要確認。懐石のコースに天ぷら、生麩、焼き麩が入る (2025年8月、2026年7月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。昆布と鰹節の出汁が料理の基本 (食べログ、店の紹介)。魚と肉のコース。',
    notes: '[京料理・先斗町、歌舞練場の向かい] 先斗町の歌舞練場の向かいにある懐石の店。料理長が毎朝中央市場で仕入れ、昆布と鰹節で2時間かけて引く出汁がすべての料理の要。昼のコースは約8,000円から、夜は約12,000円。料理長と話せるカウンターか、2階の窓のある個室で。2025年5月の口コミでは肉と焼き魚はほかに比べて今ひとつ。月火休み。',
  });
}

save();
