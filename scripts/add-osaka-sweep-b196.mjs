// Osaka sweep (2-mile circle around Dotonbori), batch 196 — name-revisit queue 4/6 (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + 南船場Nat's食堂 Minamisenba Nat's Shokudo (yoshoku lunch plates, bistro and sake at night; Minami-Senba)
//   + 橋本屋 Hashimoto Ya (clay-pot spice chicken curry, Tabelog Award Bronze 2025/2026, ticket system; Minami-Senba)
//   + 居酒屋 十兵衛 Izakaya Jubei (grilled chicken thigh lunch sets with 12 sauces, yakitori at night; Minami-Senba)
//   + かつ丼千代松豪仁 Katsu-don Chiyomatsu Hideto (thick low-temperature katsu-don from a former sumo wrestler's group; Shinmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 196);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 南船場Nat's食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27072891/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00'], ['17:30', '22:30']); const N = day(['17:30', '22:30']);
  put({
    id: 'osaka_nats_shokudo_minamisenba', name: "南船場Nat's食堂 (Minamisenba Nat's Shokudo)", category: 'OMNI',
    lat: 34.677773, lng: 135.50299, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the lunch plates are built on fried shrimp, cutlets, croquettes and demi-glace or curry sauce, so ask about the hamburg steak and the grated-ponzu option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, cutlets, fried shrimp and chicken make up the menu.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:30–22:30; Sat 17:30–22:30 (food last order 21:30, drinks 22:00); closed Sunday and public holidays (Tabelog). Table reservations only for full meals; at dinner a ¥1,000 charge applies when you only eat (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 15 seats: 7 at an L-shaped counter, two tables of 4; smoking allowed at dinner, no smoking at lunch; private hire up to 20 (Tabelog). Lunch rice refills cost ¥100 from April 2025 (April 2025 review). Opened 22 April 2013 (Tabelog).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-1-7, ground floor at the back of the building (several shops share it) — 6 min north of Shinsaibashi Stn exits 1 and 2',
    cuisine: 'Yoshoku lunch and an evening bistro with wine and sake (15 seats) · daily lunch plate ¥1,000–1,100 (2026): hamburg steak with two of fried shrimp, cream croquette, beef cutlet, bite-sized pork cutlet, white-fish fry or chicken-wing kara-age, with soup, salad and rice · Nat\'s hamburg steak ¥1,000 in a hot skillet, cooked to order, with demi-glace, beef-tendon curry sauce or grated-daikon ponzu · hamburg steak and Angus beef cutlet ¥1,280 · omurice · tonteki set · soup of the day (corn chowder, pumpkin, potato) · evenings: fish delivered daily, market vegetables, rice milled to order, wine and sake (shop text)',
    website: null, gmaps: gm("南船場Nat's食堂"), menu_url: null,
    notes: "[Yoshoku · Minami-Senba, the hamburg-steak lunch hidden at the back of a building] A small Western-style diner tucked deep inside a ground-floor arcade of shops north of Shinsaibashi, announced by a board that asks whether you have ever eaten a truly delicious hamburg steak. It fills up at lunch for the daily plate: a meaty hamburg paired with fried shrimp and a cream croquette, a beef cutlet or juicy chicken-wing kara-age, with the soup of the day (corn chowder, pumpkin) and salad, for about ¥1,000–1,100. The house hamburg is seared crisp in a hot skillet and comes with demi-glace, grated-daikon ponzu, or a beef-tendon curry sauce simmered for a week that, per a September 2026 diner, won a 2013 award for European-style curry. One diner found the hamburg didn't match the board's boast; the daily plate is what most order. Heavy metal plays. At night it becomes a bistro pouring wine and sake. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yoshoku restaurant and bistro that opened on 22 April 2013; a corporate-member Tabelog listing (Tabelog).', philosophy: 'Fresh seafood delivered daily, unusual vegetables bought straight from the wholesale market and rice milled each time, with carefully made sauces; wines and sake chosen to match (Tabelog, shop-provided).', specialty: 'Hamburg steak with fried shrimp and croquettes; beef-tendon curry sauce.',
      anecdotes: [
        { text: '"Today\'s special was a golden trio of Hamburg Steak, Ebi Fry, and a Bite-sized Cutlet, a classic selection from a Western-style restaurant." — March 2025, daily lunch special (the same diner\'s ninth visit was in August 2026).', source: R + 'B502859729/' },
        { text: '"This curry sauce is a European-style curry that has been simmered for a week and won the Ultimate Curry Award 2013 for European-style curry." — September 2026, Nat\'s Hamburger Steak ¥1,000.', source: R + 'B535358833/' },
      ],
      japanese_sources_summary: "食べログ: 南船場Nat's食堂、大阪市中央区南船場3-1-7 日宝東心斎橋ビル 1F、心斎橋駅1・2番出口から北へ徒歩6分ほど、月〜金11:30〜14:00・17:30〜22:30、土17:30〜22:30 (L.O. 料理21:30、ドリンク22:00)、日曜・祝日休み、席の予約は食事のコースのみ、ディナータイムの食事のみの場合はチャージ料1,000円、カード・電子マネー・QR不可、15席 (カウンター7、テーブル4×2)、昼は禁煙・夜は喫煙可、貸切20名まで、オープン日2013年4月22日、法人会員の店。店の紹介: 毎日届く鮮魚、市場から直接仕入れる野菜、その都度精米するお米、こだわりのソース、料理に合うワインと日本酒。口コミ(2025年3月〜2026年10月): ビルの奥の目立たない洋食店、「本当においしいハンバーグを食べたことがありますか!」の看板、日替わりランチ1000〜1100円 (ハンバーグとエビフライ、クリームコロッケ、牛カツ、一口カツ、白身魚フライ、手羽唐揚げ)、Nat'sハンバーグ1000円は鉄板で、注文を受けてから焼く、デミグラス・牛すじカレーソース・特製おろしポン酢から選ぶ、カレーソースは1週間煮込んだ欧風カレーで2013年のアワード受賞、ハンバーグとアンガス牛カツ1280円、オムライス、トンテキ定食、日替わりスープ (コーンチャウダー、かぼちゃ、じゃがいも)、2025年4月からご飯の大盛り・おかわりは100円、BGMはヘヴィメタル、看板ほどではなかったという声も。",
      confidence: 'medium', sources: [TB, R + 'B502859729/', R + 'B529712076/', R + 'B531350778/', R + 'B535358833/', R + 'B536760593/', R + 'B537049953/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; lunch is first come (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-1-7 日宝東心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目1番7号 (go) 18m; same building as osaka_tamaki_minamisenba (separate Tabelog point); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535358833/', R + 'B536760593/', R + 'B537049953/', R + 'B531350778/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch special (hamburg steak with two fried items, soup, salad, rice)', '¥1,000–1,100', 'Lunch', 'no', 'no', 'June–August 2026; the pairing changes daily.', 'daily'),
      it('', '', "Nat's hamburg steak (demi-glace, beef-tendon curry sauce or grated-daikon ponzu)", '¥1,000', 'Lunch', 'ask', 'no', 'September–October 2026; served in a hot skillet.', 'hamburg'),
      it('', '', 'Hamburg steak and Angus beef cutlet', '¥1,280', 'Lunch', 'no', 'no', 'September 2026.', 'angus'),
      it('', '', 'Omurice', '', 'Lunch', 'ask', 'no', 'August 2025.', 'omurice'),
    ] }, {
    cuisine: '洋食のランチと、夜はワインと日本酒のビストロ (15席)・日替わりランチ1000〜1100円 (2026年): ハンバーグにエビフライ、クリームコロッケ、牛カツ、一口カツ、白身魚フライ、手羽唐揚げから2品、スープ、サラダ、ご飯・Nat\'sハンバーグ1000円、注文を受けてから焼いて鉄板で、デミグラス、牛すじカレーソース、特製おろしポン酢から・ハンバーグとアンガス牛カツ1280円・オムライス・トンテキ定食・日替わりスープ (コーンチャウダー、かぼちゃ、じゃがいも)・夜: 毎日届く鮮魚、市場の野菜、その都度精米するお米、ワインと日本酒 (店の紹介)',
    neighborhood: '南船場3-1-7 日宝東心斎橋ビル 1F、ビルの奥 (数軒の店が並ぶ)。心斎橋駅1・2番出口から北へ徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。ランチはエビフライ、カツ、コロッケ、デミグラスやカレーのソースが中心なので、ハンバーグとおろしポン酢について確認を。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、カツ、エビフライ、鶏が中心のメニュー。',
    notes: "[洋食・南船場、ビルの奥のハンバーグランチ] 心斎橋の北、ビルの1階の奥に隠れた小さな洋食店で、「本当においしいハンバーグを食べたことがありますか!」という看板が目印。昼は会社員でいっぱいになり、日替わりランチは肉々しいハンバーグにエビフライとクリームコロッケ、牛カツ、ジューシーな手羽唐揚げなどを組み合わせ、日替わりスープ (コーンチャウダー、かぼちゃ) とサラダ付きで1000〜1100円ほど。看板のハンバーグは鉄板で表面をカリッと焼き、デミグラス、おろしポン酢、または1週間煮込んで2013年に欧風カレーのアワードを受けたという牛すじカレーソースで。看板ほどではなかったという声もあり、多くの人は日替わりを頼む。BGMはヘヴィメタル。夜はワインと日本酒のビストロに。現金のみ。",
  });
}

// ================================================================ 橋本屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27107555/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '13:30']);
  put({
    id: 'osaka_curry_hashimotoya_minamisenba', name: '橋本屋 (Hashimoto Ya)', category: 'OMNI',
    lat: 34.677317, lng: 135.505466, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; one chicken curry built on chicken broth, kombu, onions and freshly ground spices, with spiced rice, but no source says whether any flour or soy sauce goes in.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the only dish is a chicken curry on a whole-chicken broth, with an egg, and the rice is cooked with chicken fat.',
    hours_raw: 'Mon–Thu 11:45–13:30; closed Friday–Sunday and public holidays (Tabelog). Reopened 8 September 2026 after a break (Tabelog). Numbered tickets are handed out from about 10:05 at the shop: each person in line (up to 4 per representative) chooses a time slot, orders and pays cash on the spot, then returns 5 minutes before the slot (Tabelog; October 2026 reviews). October 2026 diners lined up from 9:15–9:55 and were given slots from 10:50 to 12:20; servings run out (one April 2026 diner had ticket 35 of about the last 40). Cash only (Tabelog; October 2026 reviews). 16 seats: 6 at the counter, 10 at tables; non-smoking; school-age children welcome (Tabelog). The room is a dimly lit bar at night (October 2026 reviews). Tabelog Award Bronze 2025 and 2026; Tabelog Curry WEST Top 100 2026; rated 4.02.',
    hours: { 0: H, 1: H, 2: H, 3: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-2-21, near Shinsaibashi-suji — 4 min from Nagahoribashi Stn',
    cuisine: 'One dish: clay-pot chicken curry ("Rich Chicken Curry") ¥1,400 (October 2026) (16 seats) · spice levels 0–3, and even 1 is hot · in the pot: tender chicken, a soft-boiled egg and marinated tomatoes in a thin, soup-like curry; about 20 whole spices ground in an electric mill for each order; broth from Daisendori and two kinds of whole chicken with Rausu kombu and onions (October 2026 review) · spiced rice cooked with chicken fat, about 10 spices and onions, served apart; large rice +¥100 · add-ons: extra chicken, onion pickles (achaar) · an eating guide: smell, sip the clear top, eat with rice, then tip the rice into the pot and break the egg for a porridge finish, with spice and Sichuan-pepper grinders on the table',
    website: null, gmaps: gm('橋本屋 南船場 カレー'), menu_url: null,
    notes: "[Curry · Minami-Senba, one clay-pot chicken curry and a morning ticket line] One of Osaka's most sought-after curries, a Tabelog Award Bronze winner in 2025 and 2026, served at lunch Monday to Thursday in a dim room that is a bar at night. There is one dish: chicken curry brought bubbling in a clay pot, with tender chicken, a soft-boiled egg and marinated tomatoes in a thin, soup-like curry that tastes of whole spices ground to order rather than curry powder. A card explains how to eat it: smell it, sip the clear top like soup, eat it with the spiced rice, then tip the rice and onion pickles into the pot and break the egg for a creamy porridge. To eat, queue from about 9:30, take a numbered ticket when they are handed out around 10:05, order and pay cash, and come back at your time slot; the day's servings go by mid-morning. Diners describe a gentle owner and pleasant staff; one found the flavour a little monotonous, and another thought one visit enough.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Curry shop with Tabelog Award Bronze in 2025 and 2026 and Tabelog Curry WEST Top 100 in 2026 (Tabelog); reopened on 8 September 2026 (Tabelog). The owner hands out the numbered tickets (April 2026 review).', philosophy: 'Spices ground fresh for each serving (about 20 whole spices, per an October 2026 review); a guide card for eating the curry in stages.', specialty: 'Clay-pot "Rich Chicken Curry" with spiced rice.',
      anecdotes: [
        { text: '"The interior feels like a \'BAR.\' It\'s dimly lit and calm, with the sound of an electric mill grinding about 20 types of whole spices after each order, filling the air with a fresh and intense aroma of spices." — October 2026, Clay Pot Chicken Curry (mild) ¥1,400.', source: R + 'B538179201/' },
        { text: '"There are various suggestions on how to eat, but the owner was very gentle and the staff were all very pleasant… even after waiting in line for so long in the morning, I didn\'t feel annoyed at all." — October 2026, Rich Chicken Curry, level 1, small rice.', source: R + 'B538083177/' },
      ],
      japanese_sources_summary: '食べログ: 橋本屋、大阪市中央区南船場2-2-21、長堀橋駅から徒歩4分、月〜木11:45〜13:30、金〜日・祝日休み、2026年9月8日営業再開、整理券の配布は10:05ごろ、予約不可、カード・電子マネー・QR不可、16席 (カウンター6、テーブル10)、禁煙、小学生から可、The Tabelog Award 2025・2026 Bronze、食べログ カレー WEST 百名店 2026、評価4.02。口コミ(2025年11月〜2026年10月): 9:15〜9:55ごろから並び、10:05ごろから整理券、代表者1人で4人まで、その場で時間と注文を決めて現金で前払い、時間の5分前に戻る、10:50〜12:20の枠、35番前後で売り切れ、メニューは芳醇チキンカレー1400円だけ、辛さ0〜3、ライス大盛り+100円、チキン増し、玉ねぎのアチャール、土鍋でぐつぐつ、柔らかい鶏肉、半熟卵、トマトのマリネ、さらっとしたスープのようなカレー、注文ごとに電動ミルで約20種のホールスパイスを挽く、Daisendori と2種類の丸鶏、Rausu の昆布、玉ねぎのだし、鶏油と約10種のスパイスと玉ねぎで炊いたごはん、食べ方の指南書 (香り、上澄み、ごはんと、最後にごはんを土鍋に入れて卵を崩しておじや風)、卓上のスパイスミルと花椒、夜はバーになる薄暗い店内、やさしい店主と感じのよいスタッフ、一度で十分、単調という声も。',
      confidence: 'medium', sources: [TB, R + 'B516890335/', R + 'B518536544/', R + 'B525434524/', R + 'B525856886/', R + 'B537515075/', R + 'B537999211/', R + 'B538083177/', R + 'B538179201/', R + 'B538224130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue before 10:00 for a numbered ticket; order and pay cash in line (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-2-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (reopened 8 September 2026); many reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目2番21号 (go) 3m; same address as osaka_shokudo_ruta_minamisenba (2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537999211/', R + 'B538179201/', R + 'B537515075/', R + 'B538224130/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('芳醇チキンカレー', '', 'Rich Chicken Curry (clay pot, with spiced rice)', '¥1,400', 'Curry', 'ask', 'no', 'October 2026; spice levels 0–3.', 'curry'),
      it('', '', 'Large rice', '+¥100', 'Add-ons', 'ask', 'no', 'October 2026; choose when ordering.', 'rice'),
      it('', '', 'Extra chicken', '', 'Add-ons', 'ask', 'no', 'October 2026.', 'chicken'),
      it('', '', 'Onion pickles (achaar)', '', 'Add-ons', 'ask', 'ask', 'October 2026.', 'achaar'),
    ] }, {
    cuisine: '一品だけ: 土鍋のチキンカレー (芳醇チキンカレー) 1400円 (2026年10月) (16席)・辛さ0〜3、1でも十分辛い・土鍋の中は柔らかい鶏肉、半熟卵、トマトのマリネ、さらっとしたスープのようなカレー。注文ごとに約20種のホールスパイスを電動ミルで挽く。だしは Daisendori と2種類の丸鶏、Rausu の昆布、玉ねぎ (2026年10月の口コミ)・鶏油と約10種のスパイスと玉ねぎで炊いたごはんは別盛り、大盛り+100円・追加: チキン、玉ねぎのアチャール・食べ方の指南書: 香りをかぎ、上澄みをスープのように、ごはんと食べ、最後にごはんを土鍋に入れて卵を崩しおじや風に。卓上にスパイスと花椒のミル',
    neighborhood: '南船場2-2-21、心斎橋筋の近く。長堀橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。鶏のだし、昆布、玉ねぎ、挽きたてのスパイスのチキンカレーとスパイスのごはんだが、小麦粉や醤油を使うかどうかは情報なし。',
    vegan_detail: 'ヴィーガンではありません。料理は丸鶏のだしのチキンカレーだけで卵入り、ごはんも鶏油で炊く。',
    notes: '[カレー・南船場、土鍋のチキンカレー一品と朝の整理券] The Tabelog Award で2025・2026年に Bronze を受けた、大阪でも指折りの人気のカレー店。月〜木の昼だけ、夜はバーになる薄暗い店で出す。料理は一品だけで、土鍋でぐつぐつのチキンカレー。柔らかい鶏肉、半熟卵、トマトのマリネに、カレー粉ではなく注文ごとに挽くホールスパイスの香るさらっとしたスープのようなカレー。食べ方のカードがあり、香りをかぎ、上澄みをスープのように飲み、スパイスのごはんと食べ、最後にごはんと玉ねぎのアチャールを土鍋に入れて卵を崩し、クリーミーなおじやに。食べるには9:30ごろから並び、10:05ごろに配る整理券をもらい、その場で注文して現金で払い、時間に戻る。その日の分は午前中になくなる。やさしい店主と感じのよいスタッフという声。味が少し単調という声や、一度で十分という声も。',
  });
}

// ================================================================ 居酒屋 十兵衛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092542/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '14:30'], ['18:00', '23:00']); const S = day(['11:00', '14:30']);
  put({
    id: 'osaka_izakaya_jubei_minamisenba', name: '居酒屋 十兵衛 (Izakaya Jubei)', category: 'OMNI',
    lat: 34.677941, lng: 135.502345, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the 12 sauces for the grilled thigh include sweet miso, wasabi soy and curry, and the menu has tonkatsu, chicken katsu, kushikatsu and yakisoba; salt-grilled yakitori is the place to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken izakaya; the lunch sets are chicken or pork with miso soup.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 18:00–23:00 (food last order 22:00, drinks 22:30); Sat 11:00–14:30; closed Sunday and public holidays (Tabelog). Lunch has a line most weekdays, with waits of 10–20 minutes around noon (2025–2026 reviews); lunch bento to take away (April 2026 review; shop site). Reservations accepted; parties of 12 or more by arrangement; private hire up to 20; all-you-can-drink (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: a long L-shaped counter and two tables of four at the back (September 2026 review); smoking allowed except at lunch (Tabelog). Opened 21 January 2016 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-8-1 — 5 min from Sakaisuji-Hommachi Stn, 7 min from Shinsaibashi Stn',
    cuisine: 'Chicken izakaya with a cheap, busy lunch (20 seats) · lunch: grilled chicken thigh set ¥850 (October 2026) with crisp skin on cabbage, single, double or triple, with two of 12 sauces (stamina garlic, salt, spicy, spicy curry, wasabi soy, sweet miso, green onion, ginger, a shichimi set with yuzu pepper) · mixed set (thigh and a cutlet), tonkatsu set, chicken katsu, pork thigh · free raw egg, refills of rice and miso soup · chicken-katsu bento ¥600 with miso soup to take away (April 2026) · night: yakitori (heart, harami with tare, negima on a long iron skewer, yagen cartilage, seseri), whole grilled thigh, sliced onion, "addictive" cabbage, kimchi, fried eggplant, horumon with ponzu, plain salt yakisoba with egg yolk · sake and shochu; the shop site names yakitori (from 大山産がいな鶏 chicken), kushikatsu and oden as the three mainstays',
    website: 'http://www.10-bay.com', gmaps: gm('居酒屋 十兵衛 南船場'), menu_url: null,
    notes: "[Izakaya · Minami-Senba, the chicken-thigh lunch with twelve sauces] A narrow, retro counter izakaya near Shinsaibashi that draws a line at lunch for a very cheap, hearty set: a whole grilled chicken thigh, skin crackling, laid on cabbage, with two sauces picked from a list of twelve (the garlicky stamina sauce is the favourite), a free raw egg, and refills of rice and miso soup, ¥850. Diners go double or mix it with a cutlet, and finish a second bowl of rice as tamago kake gohan. At night the owner runs the room alone: yakitori from heart to seseri, the same grilled thigh, horumon with ponzu, quick plates of cabbage and kimchi, and a plain salt yakisoba, with local sake. At a busy lunch, one diner had to ask twice for the free egg.",
    chef_bio: { chef_name: null, roles: ['Owner (runs the room alone at dinner, per a September 2026 review)'], origin: null, background: 'Izakaya that opened on 21 January 2016; a corporate-member Tabelog listing (Tabelog). The shop site describes a cheap izakaya for office workers, banquets and solo drinkers.', philosophy: 'Yakitori, kushikatsu and oden as three mainstays, none done by halves (shop site).', specialty: 'Grilled chicken thigh with a choice of 12 sauces; yakitori.',
      anecdotes: [
        { text: '"You can also select two sauces from a choice of 12, and I went with the spicy sauce and wasabi soy sauce. Apparently, there\'s even a triple option." — September 2025, double grilled chicken thigh set.', source: R + 'B510967180/' },
        { text: '"The interior features a long L-shaped counter with two tables for four at the back, all managed by the owner alone." — September 2026, dinner.', source: R + 'B537031895/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 十兵衛、大阪市中央区南船場3-8-1、堺筋本町駅から徒歩5分・心斎橋駅から徒歩7分、月〜金11:00〜14:30・18:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、土11:00〜14:30、日曜・祝日休み、予約可、12名以上は相談、貸切20名まで、飲み放題、カード可 (VISA、Master、JCB、AMEX、Diners)、電子マネー・QR不可、20席、昼のみ禁煙、オープン日2016年1月21日、法人会員の店。店のサイト: 本町・心斎橋・南船場の安いうまい居酒屋、焼き鳥 (大山産がいな鶏)・串かつ・おでんの三本柱、宴会、飲み放題、全メニューテイクアウト可、ランチタイムに店頭でお弁当。口コミ(2025年7月〜2026年10月): 平日の昼はいつも行列、もも焼き定食850円、皮はパリッと、キャベツの上に、ダブル・トリプルも、12種類のソースから2つ (スタミナ、塩だれ、辛口、辛口カレー、わさび醤油、甘味噌、ねぎ、生姜、七味と柚子胡椒)、ミックス定食、豚カツ定食、チキンカツ、豚もも、生卵1個無料、ご飯と味噌汁はおかわり自由、卵かけご飯に、テイクアウトのチキンカツ弁当600円 (味噌汁付き)、夜は店主ひとり、長いL字のカウンターと奥に4人のテーブル2つ、焼き鳥 (ハツ、はらみ、ねぎま、やげん軟骨、せせり)、鶏もも一枚焼き、オニオンスライス、やみつきキャベツ、キムチ、なす揚げ、ホルモンポン酢、シンプルな塩焼きそば、地酒、昼は忙しく卵を2回頼んだという声も。',
      confidence: 'medium', sources: [TB, 'http://www.10-bay.com', R + 'B510967180/', R + 'B518135434/', R + 'B531344508/', R + 'B531623080/', R + 'B537031895/', R + 'B537065786/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch line at noon; pick two sauces from the list (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-8-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目8番1号 (go) 2m; OSM node/6325646981 「居酒屋 十兵衛」 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537065786/', R + 'B518135434/', R + 'B510967180/', R + 'B537031895/'],
    price_note: 'Prices from April and October 2026 reviews.', last_checked: TODAY, items: [
      it('もも焼き定食', '', 'Grilled chicken thigh set (choice of sauces; double and triple available)', '¥850', 'Lunch', 'ask', 'no', 'October 2026; free egg, rice and miso soup refills.', 'momo'),
      it('', '', 'Mixed set (grilled thigh and a cutlet)', '', 'Lunch', 'no', 'no', 'June 2026.', 'mix'),
      it('豚カツ定食', '', 'Tonkatsu set', '', 'Lunch', 'no', 'no', 'July 2026.', 'tonkatsu'),
      it('', '', 'Chicken-katsu bento with miso soup (takeaway)', '¥600', 'Takeaway', 'no', 'no', 'April 2026.', 'bento'),
      it('', '', 'Yakitori (heart, harami, negima, yagen cartilage, seseri)', '', 'Dinner', 'ask', 'no', 'September 2026.', 'yakitori'),
    ] }, {
    cuisine: '安くてにぎわう昼の鶏の居酒屋 (20席)・昼: もも焼き定食850円 (2026年10月)、パリッとした皮でキャベツの上に、ダブル・トリプルも、12種類のソースから2つ (スタミナ、塩だれ、辛口、辛口カレー、わさび醤油、甘味噌、ねぎ、生姜、七味と柚子胡椒)・ミックス定食 (ももとカツ)、豚カツ定食、チキンカツ、豚もも・生卵1個無料、ご飯と味噌汁はおかわり自由・テイクアウトのチキンカツ弁当600円 (味噌汁付き、2026年4月)・夜: 焼き鳥 (ハツ、たれのはらみ、長い鉄串のねぎま、やげん軟骨、せせり)、鶏もも一枚焼き、オニオンスライス、やみつきキャベツ、キムチ、なす揚げ、ホルモンポン酢、卵黄のせのシンプルな塩焼きそば・日本酒、焼酎。店のサイトでは大山産がいな鶏の焼き鳥、串かつ、おでんが三本柱',
    neighborhood: '南船場3-8-1。堺筋本町駅から徒歩5分、心斎橋駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。もも焼きの12種類のソースには甘味噌、わさび醤油、カレーもあり、豚カツ、チキンカツ、串かつ、焼きそばもある。確認するなら塩の焼き鳥から。',
    vegan_detail: 'ヴィーガンではありません。鶏の居酒屋で、昼の定食は鶏か豚に味噌汁。',
    notes: '[居酒屋・南船場、12種類のソースのもも焼きランチ] 心斎橋近くの細長いレトロなカウンターの居酒屋で、昼は行列ができる、とても安くてボリュームのある定食の店。皮がパリパリの鶏もも一枚をキャベツの上にのせ、12種類から選ぶソースは2つ (人気はにんにくのスタミナ)、生卵1個無料、ご飯と味噌汁はおかわり自由で850円。ダブルにしたり、カツと合わせたり、2杯目のご飯を卵かけご飯にする人も。夜は店主がひとりで切り盛りし、ハツからせせりまでの焼き鳥、同じもも焼き、ホルモンポン酢、キャベツやキムチのつまみ、シンプルな塩焼きそばを地酒と。忙しい昼に、無料の卵を2回頼んだという声も。',
  });
}

// ================================================================ かつ丼千代松豪仁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152247/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'osaka_katsudon_chiyomatsu_hideto_shinmachi', name: 'かつ丼千代松豪仁 (Katsu-don Chiyomatsu Hideto)', category: 'OMNI',
    lat: 34.677127, lng: 135.496838, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried pork cutlet over rice with a sweet katsu-don sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlet and egg, with pork miso soup.',
    hours_raw: 'Daily 11:00–15:00; closed 29 December–4 January (Tabelog). An April 2026 review describes a weekday-evening visit, and the Tabelog budget lists a dinner range, so evening opening may vary; check before going. No reservations (Tabelog). Order by QR code on your phone; English, Simplified Chinese and Korean menus (Tabelog; 2025–2026 reviews). Cards (VISA, Master, JCB) and PayPay; no e-money (Tabelog). 14 seats: 8 at the counter, 6 at tables; non-smoking; children and strollers welcome; a step at the entrance, staff help with wheelchairs (Tabelog). Opened 20 September 2025 (Tabelog), on a former ramen shop site (December 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-8-24, 1F (Nishi-ku) — 2–5 min from Yotsubashi Stn exit 1-A',
    cuisine: 'Katsu-don counter from a former sumo wrestler (14 seats) · thick pork loin cutlet marinated and cooked slowly at low temperature, then fried, laid over a soft, runny egg on rice rather than simmered in it, so the crust stays crisp; the shop says 5 cm thick · sizes by the weight of cutlet: regular 200 g ¥1,500, jo 300 g ¥2,000, and a larger special (2025–2026) · pork miso soup included · ponzu, mustard, yuzu pepper, rock salt and katsu sauce to change the taste · takeaway; Hoegaarden beer',
    website: null, gmaps: gm('かつ丼千代松豪仁 新町'), menu_url: null,
    notes: "[Katsu-don · Shinmachi near Yotsubashi, very thick cutlets from a former sumo wrestler] A bright little katsu-don shop opened in September 2025 as a sister shop of Sennichimae's long-queue thick-cut tonkatsu, once called Chiyomatsu and now Osaka Tonkatsu; the shop is run by a former sumo wrestler, and a life-size panel of the wrestler stands inside. The pork is marinated and cooked low and slow before frying, so the thick cutlet is tender and seasoned all the way through, and it sits on a soft egg over the rice instead of being simmered in it, which keeps the crust crisp. Sizes go by weight (200 g regular ¥1,500, 300 g jo ¥2,000), with pork miso soup and a tray of ponzu, mustard and yuzu pepper. Opinions split: many love it, others found the pre-seasoned pork ham-like or too salty, and the miso soup thin. Order on your phone by QR code; English menu.",
    chef_bio: { chef_name: null, roles: ['Former sumo wrestler (runs the shop, per Tabelog and 2025–2026 reviews)'], origin: null, background: 'Katsu-don shop that opened on 20 September 2025 (Tabelog); a sister shop of the Sennichimae thick-cut tonkatsu shop once called Chiyomatsu and renamed Osaka Tonkatsu, which also has a stall in the Abeno Hoop dining court (January and March 2026 reviews). A life-size panel of the wrestler stands in the shop (January 2026 review).', philosophy: 'Thick meat slow-cooked for a tender, juicy, generous bowl; satisfying portions (Tabelog, shop-provided).', specialty: 'Very thick low-temperature katsu-don with egg underneath.',
      anecdotes: [
        { text: '"Since this Katsu-don is not topped with a beaten egg, the katsu remains crispy and fresh. You can enjoy the tonkatsu with the accompanying yuzu pepper, mustard, and special sauce to change up the flavors." — April 2026, regular katsu-don ¥1,500.', source: R + 'B525466922/' },
        { text: '"The main branch is in Namba, and the name has now changed to \'Osaka Tonkatsu.\' I decided to try this new location, which seems to be a sister restaurant." — January 2026, katsu-don regular ¥1,500.', source: R + 'B520534501/' },
      ],
      japanese_sources_summary: '食べログ: かつ丼千代松豪仁、大阪市西区新町1-8-24 角屋四ツ橋ビル 1F、四ツ橋駅から徒歩5分 (288m)、毎日11:00〜15:00、12月29日〜1月4日休み、予約不可、カード (VISA、Master、JCB)・PayPay可、電子マネー不可、14席 (カウンター8、テーブル6)、禁煙、子供・ベビーカー可、入口に段差あり (スタッフが手伝う)、英語・簡体字・韓国語メニュー、QRコードで注文、テイクアウト可、オープン日2025年9月20日、法人会員の店。店の紹介: 元力士の極厚かつ丼、5cmの豚カツをとろとろの卵の上にのせる、柚子胡椒・ポン酢・からしで味変、ヒューガルデン。口コミ(2025年12月〜2026年9月): ラーメン店の跡地、元力士の店で等身大のパネル、千日前の極厚とんかつの店 (Chiyomatsu から Osaka Tonkatsu に改名) の姉妹店、特製の液に漬けて低温で火を入れた厚い豚肉、並200g 1500円、上300g 2000円、特上も、豚汁付き、卵でとじないのでカツがサクサク、ポン酢・からし・柚子胡椒・岩塩・ソース、ハムのよう・塩辛い・豚汁が薄いという声も。',
      confidence: 'medium', sources: [TB, R + 'B519498161/', R + 'B520378173/', R + 'B520534501/', R + 'B524308834/', R + 'B525466922/', R + 'B528106323/', R + 'B529005603/', R + 'B537220246/'] },
    cultural_comfort: { level: 'english', note: 'QR-code ordering with an English menu (Tabelog, 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-8-24 角屋四ツ橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated December 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目8番24号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520378173/', R + 'B524000557/', R + 'B529005603/', R + 'B537220246/'],
    price_note: 'Prices from December 2025–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Katsu-don, regular (200 g cutlet), with pork miso soup', '¥1,500', 'Katsu-don', 'no', 'no', 'January–September 2026.', 'nami'),
      it('', '', 'Katsu-don jo (300 g cutlet), with pork miso soup', '¥2,000', 'Katsu-don', 'no', 'no', 'December 2025–March 2026.', 'jo'),
    ] }, {
    cuisine: '元力士のかつ丼の店 (14席)・厚い豚ロースを漬けて低温でじっくり火を入れてから揚げ、ご飯の上のとろとろの卵にのせる (卵でとじない) のでサクサク。店の紹介では5cmの厚さ・カツの重さで: 並200g 1500円、上300g 2000円、さらに大きい特上も (2025〜2026年)・豚汁付き・ポン酢、からし、柚子胡椒、岩塩、ソースで味変・テイクアウト可、ヒューガルデン',
    neighborhood: '新町1-8-24 角屋四ツ橋ビル 1F (西区)。四ツ橋駅1-A出口から徒歩2〜5分',
    gf_detail: 'グルテンフリーではありません。パン粉で揚げた豚カツをご飯にのせ、甘いかつ丼のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚カツと卵、豚汁。',
    notes: '[かつ丼・新町、四ツ橋の近く、元力士の極厚カツ] 千日前の行列の極厚とんかつの店 (Chiyomatsu から、いまは Osaka Tonkatsu) の姉妹店として、2025年9月に開いた明るい小さなかつ丼の店。元力士の店で、店内には等身大のパネルも。豚肉は漬けて低温でじっくり火を入れてから揚げるので、厚いカツが柔らかく中まで味がしみている。卵でとじずにご飯の上のとろとろの卵にのせるので、衣はサクサクのまま。大きさは重さで選び (並200g 1500円、上300g 2000円)、豚汁と、ポン酢、からし、柚子胡椒のトレー付き。評価は分かれ、絶賛する声の一方で、下味の豚がハムのよう、塩辛い、豚汁が薄いという声も。注文はスマホでQRコードから。英語のメニューあり。',
  });
}

save();
