// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 13.
//   + 個室 和食 矗々家 難波店 Chikuchikuya Namba (Kyoto-townhouse-style Japanese izakaya behind Marui; gozen lunches)
//   + はり重カレーショップ Harijyu Curry Shop (the casual yoshoku and curry shop of Harijyu, Dotonbori)
//   + 四ツ橋・新町 牡蠣と肉たらしビストロAKIRA (oyster and meat bistro, Shinmachi)
//   + 燻製スギヤ商店 Kunsei Sugiya Shoten (smoked-food izakaya, counter only, Namba)
//   Chain check (Greg's ruling 2026-11-02: sister concepts are not chains): 矗々家 has one other shop, JR大阪駅前店 in
//   Umeda (Tabelog lists it as on hold), not in data. Harijyu Curry Shop is a different format from はり重 道頓堀本店
//   (osaka_harijyu_dotonbori, sukiyaki) in the same building — a sister concept, drafted. AKIRA: one shop found; a
//   similarly named "Bistro KAI" in Fukushima shows no stated link. Sugiya: one shop found. None of the four is in
//   data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 矗々家 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005167/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_chikuchikuya_namba', name: '個室 和食 矗々家 難波店 (Chikuchikuya Namba)', category: 'OMNI',
    lat: 34.665857, lng: 135.500846, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch gozen include tempura, dashi-maki, sashimi and miso soup; the dinner courses are chef\'s choice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-focused Japanese restaurant cooking with Kansai-style dashi (July 2026).',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:00–23:00 (last order 22:00) (Tabelog). In the Obon week of August 2026 there was no weekday lunch (August 2026 review). Reservations accepted; the Tabelog remarks say lunch bookings are for groups of 4 or more on the banquet course, booked 2 days ahead, while August 2026 reviewers booked lunch for one and for three by phone — ask. About ten people queued before opening on a July 2026 day. Cards, PayPay and d Barai; no e-money (Tabelog). 64 seats in a three-storey house: counter (shoes off, August 2026), tatami, sunken seating and private rooms for 6 to 30+; banquets up to 60 (Tabelog). Smoking: Tabelog says non-smoking at lunch and smoking allowed at dinner; a July 2026 reviewer found smoking and non-smoking separated by floor. No toilets on the ground floor (August 2026). Children welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-7-11, behind Marui — 1 min from Namba Stn exit 1 (Midosuji Line)',
    cuisine: 'Japanese izakaya in a Kyoto-townhouse-style building: fish bought at the market each day by the head chef, over 50 local sakes (Tabelog shop text); fish from Kizu Market (August 2026) · lunch: "Obanzai Jussai Gozen" Ume ¥1,980 (sashimi, roast beef, tempura, dashi-maki, grilled fish, rice and miso soup), Take ¥2,380 (three sashimi and chawanmushi), Matsu ¥2,980 (with a small hot pot or wagyu steak) (July 2026); Chikuchiku Gozen ¥1,780 with three sashimi and tempura, bottled beer ¥770 (August 2026); rice in small, medium or large · dinner: chef\'s omakase banquets, food only, ¥5,000, ¥6,000 and ¥7,000, budgets up to ¥10,000 by request; courses with all-you-can-drink (Tabelog); grilled ayu and sea bream sashimi (July 2026); a course that came with a bottle of sake (August 2026)',
    website: null, gmaps: gm('矗々家 難波店'), menu_url: null,
    notes: '[Japanese izakaya · Namba, gozen lunches in an old townhouse] A three-storey, Kyoto-townhouse-style Japanese restaurant a minute from Namba Station, with a counter, tatami rooms and private rooms. At lunch it serves trays of ten small dishes — sashimi, tempura, dashi-maki, grilled fish — from about ¥1,800 to ¥3,000; at night, chef\'s-choice courses built on market fish, with over 50 local sakes. Lunch has a queue at opening; book, and ask about smoking if it matters (the rules depend on time and floor).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): the head chef goes to the market every day to choose fish; over 50 local sakes; private rooms in a Kyoto-townhouse-style setting. Reviewers name Kizu Market as the source (August 2026). One other shop, 矗々家 JR大阪駅前店 in Umeda, appears on Tabelog with its listing on hold.', philosophy: null, specialty: 'Obanzai gozen lunches; market fish.',
      anecdotes: [
        { text: '"There were about ten people lined up before the opening. The interior has an old-fashioned charm reminiscent of \'Spirited Away.\'" — July 2026, at lunch.', source: R + 'B534248902/' },
        { text: '"When I made the reservation by phone about two days ago ... only counter seats were available, but when we arrived ... a sunken kotatsu seating for us" — August 2026, three generations at lunch.', source: R + 'B535082842/' },
        { text: '"It\'s a small three-story building, but there are no restrooms on the first floor, so elderly guests may find it challenging to go up to the second floor." — August 2026.', source: R + 'B533063706/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 個室 和食 矗々家 難波店、居酒屋・魚介・和食、大阪市中央区難波3-7-11、Marui の裏、なんば駅1番出口から徒歩1分、毎日11:30〜14:30 (L.O. 14:00)、17:00〜23:00 (L.O. 22:00)、予約可、昼の予約は4名以上の宴会コースのみ (2日前まで)、カード・PayPay・d払い可、電子マネー不可、64席、個室あり (6名〜30名以上)、宴会は着席60名まで、昼は禁煙・夜は喫煙可、子ども可。料理長が毎日市場で魚を仕入れる、全国の地酒50種以上、京町家風の和食、おまかせ宴会コース5,000円・6,000円・7,000円。口コミ(2026年6月〜10月): Obanzai Jussai Gozen の Ume 1,980円・Take 2,380円・Matsu 2,980円、御膳1,780円、瓶ビール770円、刺身、天ぷら、だし巻き、焼き魚、ご飯は大中小、Kizu Market の魚、開店前に10人ほどの行列、カウンターは靴を脱ぐ、1階にトイレなし、階ごとに喫煙と禁煙が分かれていたという声。',
      confidence: 'medium', sources: [TB, R + 'B531341397/', R + 'B531751209/', R + 'B532049656/', R + 'B532135746/', R + 'B532512370/', R + 'B533063706/', R + 'B533165310/', R + 'B533329033/', R + 'B533718698/', R + 'B534248902/', R + 'B535082842/', R + 'B535083192/', R + 'B536680227/', R + 'B537076903/', R + 'B537949605/', 'https://tabelog.com/osaka/A2701/A270101/27007273/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set gozen trays make lunch easy to order; shoes come off at the counter (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目7番11号 (go) 2m. Nearest record: パンケーキカフェ mog 難波店 (osaka_pancake_cafe_mog_namba, 3-7-9) 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533165310/', R + 'B533718698/', TB],
    price_note: 'Lunch prices from July–August 2026 reviews; dinner courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Obanzai Jussai Gozen, Ume (ten small dishes with sashimi, tempura, rice, miso soup)', '¥1,980', 'Lunch', 'no', 'no', 'July 2026 review.', 'gozen_ume'),
      it('', '', 'Obanzai Jussai Gozen, Take (adds three sashimi and chawanmushi)', '¥2,380', 'Lunch', 'no', 'no', 'July 2026 review.', 'gozen_take'),
      it('', '', 'Obanzai Jussai Gozen, Matsu (adds a small hot pot or wagyu steak)', '¥2,980', 'Lunch', 'no', 'no', 'July 2026 review.', 'gozen_matsu'),
      it('', '', 'Chikuchiku Gozen (three sashimi and tempura)', '¥1,780', 'Lunch', 'no', 'no', 'August 2026 review.', 'chikuchiku_gozen'),
      it('', '', 'Chef\'s omakase banquet, food only', '¥5,000 / ¥6,000 / ¥7,000', 'Course', 'ask', 'no', 'Tabelog listing; 2–40 people.', 'omakase_banquet'),
    ] }, {
    cuisine: '京町家風の建物の和食の居酒屋: 料理長が毎日市場で仕入れる魚、全国の地酒50種以上 (食べログの店の紹介)。魚は Kizu Market から (2026年8月)・昼: 「Obanzai Jussai Gozen」の Ume 1,980円 (刺身、ローストビーフ、天ぷら、だし巻き、焼き魚、ご飯、味噌汁)、Take 2,380円 (刺身3種と茶碗蒸し)、Matsu 2,980円 (小鍋か和牛ステーキつき) (2026年7月)、刺身3種と天ぷらの御膳1,780円、瓶ビール770円 (2026年8月)、ご飯は小・中・大・夜: 料理だけのおまかせ宴会コース5,000円、6,000円、7,000円、予算は10,000円まで相談可、飲み放題つきのコースも (食べログ)、鮎の塩焼きと鯛の刺身 (2026年7月)、日本酒が1本ついたコース (2026年8月)',
    neighborhood: '難波3-7-11、Marui の裏。なんば駅1番出口 (御堂筋線) から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。昼の御膳には天ぷら、だし巻き、刺身、味噌汁。夜のコースはおまかせ。',
    vegan_detail: 'ヴィーガンではありません。魚が中心の和食で、関西風のだしを使う (2026年7月)。',
    notes: '[和食の居酒屋・なんば、古い町家風の店で御膳ランチ] なんば駅から1分、京町家風の3階建ての和食の店で、カウンター、座敷、個室がある。昼は刺身、天ぷら、だし巻き、焼き魚など10品ほどの御膳が1,800〜3,000円ほど、夜は市場の魚のおまかせコースと50種以上の地酒。昼は開店前から並ぶので予約を。喫煙のルールは時間と階で違うので、気になるなら確認を。',
  });
}

// ================================================================ はり重カレーショップ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001595/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '20:00']);
  put({
    id: 'osaka_harijyu_curry_shop_dotonbori', name: 'はり重カレーショップ (Harijyu Curry Shop)', category: 'OMNI',
    lat: 34.668464, lng: 135.500629, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the mainstays are breaded beef, chicken and pork katsu with curry or demi-glace sauce; the "Beef Wan" beef bowl is simmered in a sweet-salty sauce, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is built on Harijyu beef — beef curry, beef katsu, beef bowl, yakiniku set; the beef bowl has a dashi-based sauce (September 2026).',
    hours_raw: 'Mon and Wed–Sun 11:30–20:00; closed Tuesdays, but open on Tuesdays that are holidays or the day before a holiday, and every day in December (Tabelog). No reservations (Tabelog). Fills around noon at weekends, but seats free up quickly (June and October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR payment (Tabelog). 38 seats at tables; non-smoking (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-9-17, the corner of the Harijyu building on Midosuji — 1 min from Namba Stn exit 14',
    cuisine: 'The casual curry and yoshoku shop of Harijyu, the Dotonbori wagyu sukiyaki house (reviews, July–August 2026): "Beef Wan" beef bowl with simmered egg, sukiyaki-style but more salty than sweet, with a little sansho — ¥1,200 (September 2026), ¥1,210 (June 2026), about ¥1,240 (July 2026); add red miso soup (July 2026) · beef katsu curry ¥1,540 (August 2026), chicken katsu curry ¥1,320 (June 2026), beef curry, mild and full of umami (July 2026) — another reviewer found it pleasantly spicy (October 2026) · bifukatsu of kuroge wagyu with demi-glace, with spaghetti, and an onion soup set (September–October 2026) · yakiniku set meal ¥2,200, said to use trimmings of steak-house wagyu (October 2026) · hayashi rice and vegetable salad (July 2026) · fukujinzuke and hojicha with the meal; drinks ¥660 (June 2026)',
    website: 'http://www.harijyu.co.jp/', gmaps: gm('はり重カレーショップ'), menu_url: null,
    notes: '[Yoshoku and curry · Dotonbori, Harijyu beef at diner prices] The Showa-era diner on the Midosuji corner of the Harijyu building, where the famous sukiyaki house serves its beef cheaply. Order the "Beef Wan" (a beef-and-egg rice bowl, about ¥1,200) or the beef katsu curry (¥1,540); the wagyu bifukatsu with demi-glace is the splurge. No bookings and no Tuesday service (except holidays and December); reviewers walk in at Sunday noon while the surrounding streets are packed with tourists.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per reviews (July–August 2026): run by Harijyu, the Dotonbori sukiyaki house, next to the main restaurant and Harijyu Grill. The neighbouring record はり重 道頓堀本店 (osaka_harijyu_dotonbori) notes: "Harijyu Grill, a curry shop and the butcher share the building (official site)" and dates the house to a butcher opened in 1919 that came to Dotonbori in 1948.', philosophy: null, specialty: '"Beef Wan" beef bowl; beef katsu curry.',
      anecdotes: [
        { text: '"While Namba is bustling with tourists, this restaurant is a hidden gem despite being an established spot. I was able to get in without waiting." — September 2026, Sunday noon.', source: R + 'B105291045/' },
        { text: '"Today, Dotonbori is bustling with inbound tourists. While foreign visitors are everywhere, I make my way to the retro Showa-style Hariju Curry Shop, located along Midosuji." — October 2026, a regular.', source: R + 'B538120628/' },
        { text: '"The paper napkins were folded into triangles, giving a wonderful retro feel." — July 2026.', source: R + 'B532035568/' },
      ],
      japanese_sources_summary: '食べログ: はり重カレーショップ、洋食・カレー・牛肉の丼、大阪市中央区道頓堀1-9-17、なんば駅14番出口から徒歩1分以内、月・水〜日11:30〜20:00、火曜休み (祝日・祝前日・12月は営業)、予約不可、カード・電子マネー・QR 決済可、38席 (4人テーブル8、2人テーブル3)、禁煙、公式 harijyu.co.jp。口コミ(2026年6月〜10月): すき焼きのはり重が営む店、Beef Wan 1,200円・1,210円・1,240円ほど (時期で違う)、甘さより塩気、山椒、赤だし、ビーフカツカレー1,540円、チキンカツカレー1,320円、辛くないうまみのカレーという声と、ほどよい辛さという声、和牛のビフカツとデミグラスソース、オニオンスープのセット、焼肉定食2,200円、ハヤシライス、福神漬けとほうじ茶、ドリンク660円、昭和レトロの店内、道頓堀は観光客が多いが店は入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B105291045/', R + 'B435812403/', R + 'B472260382/', R + 'B530783450/', R + 'B530934830/', R + 'B531433434/', R + 'B532035568/', R + 'B533794345/', R + 'B534082013/', R + 'B534135781/', R + 'B535910066/', R + 'B536801340/', R + 'B537006748/', R + 'B538120628/', R + 'B538389240/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in diner with a short set menu; reviewers note it stays easy to enter while Dotonbori is crowded with tourists (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-9-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.668464,135.500629 kept: 10 m from はり重 道頓堀本店 (osaka_harijyu_dotonbori, same address 1-9-17, 34.66855,135.500655), on the Midosuji side where reviewers place the shop. GSI 大阪府大阪市中央区道頓堀一丁目9番17号 (go) 34.668674,135.500595 is 23 m north; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B105291045/', R + 'B435812403/', R + 'B538120628/', TB],
    price_note: 'Prices from June–October 2026 reviews; the Beef Wan was reported at ¥1,200, ¥1,210 and about ¥1,240.', last_checked: TODAY, items: [
      it('', '', '"Beef Wan" beef bowl with simmered egg', '¥1,200–1,240', 'Bowls', 'ask', 'no', 'June–September 2026 reviews.', 'beef_wan'),
      it('', '', 'Beef katsu curry', '¥1,540', 'Curry', 'no', 'no', 'August 2026 review.', 'beef_katsu_curry'),
      it('', '', 'Chicken katsu curry', '¥1,320', 'Curry', 'no', 'no', 'June 2026 review.', 'chicken_katsu_curry'),
      it('', '', 'Beef curry', '', 'Curry', 'ask', 'no', 'July 2026 review.', 'beef_curry'),
      it('', '', 'Bifukatsu (wagyu cutlet) with demi-glace', '', 'Yoshoku', 'no', 'no', 'September–October 2026 reviews.', 'bifukatsu'),
      it('', '', 'Yakiniku set meal', '¥2,200', 'Set meals', 'ask', 'no', 'October 2026 review.', 'yakiniku_teishoku'),
    ] }, {
    cuisine: '道頓堀の和牛すき焼きの店、はり重のカジュアルなカレーと洋食の店 (2026年7〜8月の口コミ): 「Beef Wan」は牛肉と卵を煮た丼で、すき焼き風だが甘さより塩気、山椒を少し — 1,200円 (2026年9月)、1,210円 (2026年6月)、1,240円ほど (2026年7月)、赤だしも追加できる (2026年7月)・ビーフカツカレー1,540円 (2026年8月)、チキンカツカレー1,320円 (2026年6月)、うまみたっぷりで辛くないビーフカレー (2026年7月)、ほどよい辛さという声も (2026年10月)・黒毛和牛のビフカツとデミグラスソース、スパゲティつき、オニオンスープのセット (2026年9〜10月)・焼肉定食2,200円、ステーキ用の和牛の切り落としという (2026年10月)・ハヤシライスと野菜サラダ (2026年7月)・福神漬けとほうじ茶、ドリンク660円 (2026年6月)',
    neighborhood: '道頓堀1-9-17、はり重のビルの Midosuji 側の角。なんば駅14番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。中心は衣をつけた牛・鶏・豚のカツにカレーかデミグラスソース。Beef Wan は甘辛いたれで煮た丼で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。はり重の牛肉が中心: ビーフカレー、ビフカツ、牛肉の丼、焼肉定食。Beef Wan のたれはだし (2026年9月)。',
    notes: '[洋食とカレー・道頓堀、はり重の牛肉を食堂の値段で] はり重のビルの Midosuji 側の角にある昭和の食堂で、すき焼きの名店の牛肉を手ごろに。「Beef Wan」(牛肉と卵の丼、1,200円ほど) かビーフカツカレー (1,540円) を、ぜいたくするなら和牛のビフカツとデミグラスソースを。予約不可、火曜休み (祝日と12月は営業)。観光客でいっぱいの道頓堀でも、日曜の昼に待たずに入れたという声。',
  });
}

// ================================================================ 牡蠣と肉たらしビストロAKIRA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126119/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '23:00']), WE = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_bistro_akira_shinmachi', name: '四ツ橋・新町 牡蠣と肉たらしビストロAKIRA (Yotsubashi Shinmachi Kaki to Nikutarashi Bistro AKIRA)', category: 'OMNI',
    lat: 34.677509, lng: 135.49612, cuisine_type: 'oyster',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Raw oysters come with lemon, shallot vinegar and yuzu ponzu (July 2026); fried oysters, fish and chips, oyster pasta and risotto are also on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster and meat bistro; the shop mentions seasonal dishes for people who do not eat oysters, but none described as plant-based.',
    hours_raw: 'Mon–Fri 15:00–23:00; Sat, Sun and holidays 11:30–15:00 and 17:00–23:00; last order food 22:00, drinks 22:30; closed 31 December–5 January (Tabelog). Reservations accepted; fills up at weekends (September 2026). ¥500 appetiser for guests not on a course (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, PayPay, Rakuten Pay, au PAY, Alipay and WeChat Pay (Tabelog). 36 seats: 14 at the counter, 22 at tables, a semi-private room for 6; non-smoking, ashtray by the entrance; wheelchair accessible; BYO drinks (Tabelog). Pets only at the counter by the entrance (Tabelog), in a cart (August 2026); dog menu (August 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-9-17, 矢野園ビル 1F, in a quiet back street — 5 min from Yotsubashi Stn',
    cuisine: 'Oyster bar and meat bistro: over five kinds of raw oysters all year from around Japan — true oysters, rock oysters and branded oysters — raw, grilled, fried and in pasta; wagyu and game cooked over charcoal; fish direct from Miyakubo port in the Seto Inland Sea (Tabelog shop text) · courses: oyster lover\'s course ¥6,600; oysters, crab, lobster, beef, duck and foie gras ¥5,500; deluxe course with caviar and truffle ¥6,600 (Tabelog); +¥1,000 to choose 2–5 kinds of raw oyster on a course (June 2026) · raw oysters by origin, about ¥550–650 each: Nanao (Ishikawa), Ofunato (Iwate), Murotsu (Hyogo), Konagai (Nagasaki) (July 2026); assorted raw oysters from Hiroshima, Hokkaido, Iwate, Hyogo and Nagasaki ¥2,500 (August 2026) · fried oysters ¥550, fish and chips ¥1,580, fresh-fish risotto ¥1,580, oyster cream pasta (August 2026) · Imabari fish carpaccio ¥1,200, charcoal-grilled kuroge wagyu steak (Awaji beef) ¥3,980 (July 2026) · oysters with ikura and uni (October 2026) · crab bisque appetiser (August 2026) · roast duck lunch course (July 2026) · wine, all-you-can-drink wine on courses (June 2026) · dog menu: Awaji beef or chicken ¥600',
    website: null, gmaps: gm('牡蠣と肉たらしビストロAKIRA'), menu_url: null,
    notes: '[Oyster bar · Shinmachi, raw oysters by origin and charcoal-grilled wagyu] A counter-led oyster and meat bistro in a quiet street of Shinmachi, with an ice bed of oysters from around Japan at the door. Order a tasting of three origins (about ¥600 each), staff explain each one, then the charcoal-grilled Awaji wagyu; courses run ¥5,500–6,600. Reviews in 2026 are mostly warm, but two diners in August–September 2026 found the cooking average and the wagyu disappointing. Book at weekends; open from 15:00 on weekdays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 25 October 2021; oysters and meat, fish from Miyakubo port in the Seto Inland Sea, half-private rooms. A September 2026 reviewer mentions an open kitchen.', philosophy: null, specialty: 'Raw oysters from several regions; charcoal-grilled wagyu.',
      anecdotes: [
        { text: '"It was interesting to learn that each one has a different flavor depending on its origin, with the staff explaining the characteristics of each." — August 2026.', source: R + 'B536418014/' },
        { text: '"I was a bit worried if it was okay to eat this many raw oysters ... if you have a sensitive stomach, it might be better to order a la carte and take it slow." — June 2026, a course with five kinds of oyster.', source: R + 'B530639391/' },
        { text: '"Overall, the dishes were just average. The ajillo was a bit bland, and the pasta was overly seasoned." — August 2026; a September 2026 reviewer was also disappointed by the wagyu and saw a potato that fell on the kitchen floor served.', source: R + 'B533731016/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 四ツ橋・新町 牡蠣と肉たらしビストロAKIRA、オイスターバー・肉バル・ビストロ、大阪市西区新町1-9-17 矢野園ビル 1F、四ツ橋駅から徒歩5分、月〜金15:00〜23:00、土日祝11:30〜15:00、17:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、12月31日〜1月5日休み、予約可、コース以外はお通し500円、カード・電子マネー・QR 決済可、36席 (カウンター14、テーブル22)、禁煙 (入口横に灰皿)、ペットは入口のカウンターのみ、2021年10月25日オープン。全国の生牡蠣を常時5種以上、生・焼き・揚げ・パスタ、和牛とジビエの炭火焼き、Miyakubo の漁港 (Seto Inland Sea) から直送の魚、牡蠣好きのコース6,600円、牡蠣・カニ・ロブスター・牛・鴨・フォアグラのコース5,500円。口コミ(2026年6月〜10月): 産地別の生牡蠣1個550〜650円、Nanao、Ofunato、Murotsu、Konagai、生牡蠣の盛り合わせ2,500円、カキフライ550円、フィッシュアンドチップス1,580円、Imabari の魚のカルパッチョ1,200円、黒毛和牛 (Awaji beef) の炭火焼きステーキ3,980円、犬のメニュー600円、店の人が産地ごとの味を説明、ふつうだった・和牛が残念だったという声も (2026年8〜9月)。',
      confidence: 'medium', sources: [TB, R + 'B497058135/', R + 'B526498356/', R + 'B529528138/', R + 'B530639391/', R + 'B531190904/', R + 'B532010946/', R + 'B532974232/', R + 'B533712663/', R + 'B533727788/', R + 'B533731016/', R + 'B534010980/', R + 'B536335585/', R + 'B536418014/', R + 'B536672725/', R + 'B538093881/', 'https://autoreserve.com/en/restaurants/CRpFMBF7WWgmpMkNmQnD'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain each oyster\'s origin (2026); counter seating. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-9-17 矢野園ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目9番17号 (go) 4m. Nearest record: 伊勢田 (osaka_kushikatsu_iseda_shinmachi, 1-9-14) 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531190904/', R + 'B497058135/', R + 'B533727788/', TB],
    price_note: 'Prices from July–August 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Raw oyster by origin (e.g. Nanao, Ofunato, Murotsu, Konagai)', '¥550–650 each', 'Oysters', 'ask', 'no', 'July 2026 reviews.', 'raw_oyster'),
      it('', '', 'Assorted raw oysters', '¥2,500', 'Oysters', 'ask', 'no', 'August 2026 review.', 'oyster_platter'),
      it('', '', 'Fried oysters', '¥550', 'Oysters', 'no', 'no', 'August 2026 review.', 'kaki_fry'),
      it('', '', 'Charcoal-grilled kuroge wagyu steak (Awaji beef)', '¥3,980', 'Meat', 'ask', 'no', 'July 2026 reviews.', 'wagyu_steak'),
      it('', '', 'Fish carpaccio (Imabari)', '¥1,200', 'Fish', 'ask', 'no', 'July 2026 reviews.', 'carpaccio'),
      it('', '', 'Oyster lover\'s course', '¥6,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'oyster_course'),
    ] }, {
    cuisine: 'オイスターバーと肉のビストロ: 全国の生牡蠣を一年中5種以上 (真牡蠣、岩牡蠣、ブランド牡蠣)、生・焼き・揚げ・パスタで。和牛とジビエの炭火焼き、Miyakubo の漁港 (Seto Inland Sea) から直送の魚 (食べログの店の紹介)・コース: 牡蠣好きのコース6,600円、牡蠣・カニ・ロブスター・牛・鴨・フォアグラのコース5,500円、キャビアとトリュフのデラックスコース6,600円 (食べログ)、コースは+1,000円で生牡蠣を2〜5種から選べる (2026年6月)・産地別の生牡蠣1個550〜650円ほど: Nanao (Ishikawa)、Ofunato (Iwate)、Murotsu (Hyogo)、Konagai (Nagasaki) (2026年7月)、Hiroshima・Hokkaido・Iwate・Hyogo・Nagasaki の生牡蠣の盛り合わせ2,500円 (2026年8月)・カキフライ550円、フィッシュアンドチップス1,580円、鮮魚のリゾット1,580円、牡蠣のクリームパスタ (2026年8月)・Imabari の魚のカルパッチョ1,200円、黒毛和牛 (Awaji beef) の炭火焼きステーキ3,980円 (2026年7月)・いくらとウニの牡蠣 (2026年10月)・お通しのカニのビスク (2026年8月)・ランチコースの鴨のロースト (2026年7月)・ワイン、コースのワイン飲み放題 (2026年6月)・犬のメニュー: Awaji beef か鶏で600円',
    neighborhood: '新町1-9-17 矢野園ビル 1F、静かな裏通り。四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。生牡蠣はレモン、エシャロットの酢、柚子ポン酢で (2026年7月)。カキフライ、フィッシュアンドチップス、牡蠣のパスタ、リゾットも。',
    vegan_detail: 'ヴィーガンではありません。牡蠣と肉のビストロ。牡蠣が苦手な人向けの季節の料理はあるが、植物性の料理の説明はない。',
    notes: '[オイスターバー・新町、産地別の生牡蠣と和牛の炭火焼き] 新町の静かな通りにある、カウンターが中心の牡蠣と肉のビストロで、入口には全国の牡蠣を並べた氷のケース。3つの産地の食べ比べ (1個600円ほど) を頼むと店の人が1つずつ説明してくれる。続けて Awaji beef の和牛の炭火焼きを。コースは5,500〜6,600円。2026年の口コミはおおむね好評だが、2026年8〜9月には料理はふつう、和牛が残念という声も2件。週末は予約を。平日は15時から。',
  });
}

// ================================================================ 燻製スギヤ商店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27109671/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']), FS = day(['17:00', '23:30']);
  put({
    id: 'osaka_kunsei_sugiya_shoten_namba', name: '燻製スギヤ商店 (Kunsei Sugiya Shoten)', category: 'OMNI',
    lat: 34.66808, lng: 135.501136, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is served with smoked soy sauce, the smoked sukiyaki uses a sweet soy broth, and courses end with rice or udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signatures are smoked wagyu, smoked sukiyaki with smoked raw egg, sashimi, bacon and sausage.',
    hours_raw: 'Tue–Thu, Sun and holidays 17:00–23:00 (last food order 22:30); Fri–Sat 17:00–23:30 (last food order 23:00); closed Mondays and 30 December–4 January (Tabelog). Reservations accepted, also by Instagram DM; two-hour limit when busy; cancellation fees for no-shows (Tabelog). ¥330 appetiser (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 28 seats, all at a U-shaped counter (Tabelog; September 2026); non-smoking (Tabelog). No one under 20 admitted (Tabelog). Menu in English, Chinese and Korean, with photos and a digital menu (Tabelog); order by QR code (October 2026). Hard to find: no sign outside, 4th floor, look for the name on the building directory (October 2026); shoes off and a low entrance to crouch through (September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-7-18, 心斎橋ヨーロピアンビル 4F, in a back street — 2 min from Namba Stn exit 14',
    cuisine: 'Izakaya where almost everything is smoked, food and drinks (Tabelog shop text): instant-smoked wagyu tenderloin, 16-hour smoked cheese, smoked sausage, plank-grilled dishes, smoked lemon sour · "Sugiya\'s Specialty! Smoked Sukiyaki" ¥2,160, with smoked raw egg and smoked tomato sorbet as dips (September 2026) · smoked potato salad you finish yourself ¥690 (September 2026), with diced pickled radish (August 2026) · assorted sashimi with smoked soy sauce ¥1,480, instant-smoked wagyu tenderloin ¥2,700 (September 2026) · courses: instant-smoked tenderloin and seven smoked dishes ¥4,000 (smoked potato salad; smoked takuan, tarako, soy-pickled cream cheese and cucumber; smoked cheese; sashimi; tenderloin; smoked egg over rice; smoked raw chocolate), all-you-can-drink ¥1,500 + ¥500 for smoked drinks (July 2026); beef course with drinks ¥6,000; smoked sukiyaki course with drinks ¥6,000, finished with rice or udon (Tabelog) · horse sashimi, smoked bacon and sausage (August 2026) · smoked highball, smoked ginger highball, smoked sangria (2026)',
    website: 'https://kunsei-sugiya-shouten.com', gmaps: gm('燻製スギヤ商店'), menu_url: null,
    notes: '[Smoked-food izakaya · Namba, smoked sukiyaki at a counter] A hideaway on the 4th floor of a Namba back-street building — no sign outside, shoes off, a low door — where almost everything on the menu is smoked, down to the soy sauce and the lemon sour. Order the smoked sukiyaki (¥2,160) with its smoked egg and tomato-sorbet dips, the smoked potato salad and the 16-hour smoked cheese; the ¥4,000 course covers the classics. Counter only, adults only (20+), English menu. One July 2026 reviewer found many dishes too salty.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member) and website kunsei-sugiya-shouten.com: opened 7 March 2019; a smoked-food izakaya "tucked away in a back alley of Namba".', philosophy: null, specialty: 'Smoked sukiyaki; instant-smoked wagyu.',
      anecdotes: [
        { text: '"I arrived at the right location, but I couldn\'t find the sign for the restaurant. After a bit of searching, I finally spotted a notice with the restaurant\'s name on the building directory and entered." — October 2026, a first visit.', source: R + 'B537029571/' },
        { text: '"Eating the smoked tomato sorbet wrapped in meat like sushi made me involuntarily exclaim, \'So good!\'" — September 2026, Sunday at 5 PM.', source: R + 'B536396004/' },
        { text: '"Upon arrival, I found a reserved cushion with my name printed on it ... the appetizer was smoked takuan" — August 2026, a Friday booking.', source: R + 'B533223980/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 燻製スギヤ商店、居酒屋・すき焼き、大阪市中央区難波1-7-18 心斎橋ヨーロピアンビル 4F、なんば駅14番出口から徒歩2分、火〜木・日・祝17:00〜23:00 (料理 L.O. 22:30)、金・土17:00〜23:30 (料理 L.O. 23:00)、月曜休み、12月30日〜1月4日休み、予約可 (Instagram の DM も)、混雑時は2時間制、お通し330円、カード・PayPay 可、電子マネー不可、28席 (カウンターのみ)、禁煙、20歳未満は入店不可、英語・中国語・韓国語のメニュー、2019年3月7日オープン。和牛ヒレの瞬間燻製、16時間燻製のチーズ、燻製ソーセージ、板焼き、燻製レモンサワー、燻製すき焼きのコース6,000円。口コミ(2026年7月〜10月): 燻製すき焼き2,160円 (燻製の生卵と燻製トマトのシャーベット)、燻製ポテトサラダ690円、刺身の盛り合わせ1,480円 (燻製醤油)、瞬間燻製の和牛ヒレ2,700円、7品のコース4,000円、飲み放題1,500円と燻製ドリンク+500円、お通しは燻製たくあん、看板がない、靴を脱いでかがんで入る、QR コードで注文、塩辛い料理が多いという声も。',
      confidence: 'medium', sources: [TB, 'https://kunsei-sugiya-shouten.com', R + 'B426421737/', R + 'B464177335/', R + 'B469091345/', R + 'B473293911/', R + 'B531387349/', R + 'B532735770/', R + 'B533223980/', R + 'B534307338/', R + 'B534348972/', R + 'B535273799/', R + 'B535354354/', R + 'B536396004/', R + 'B536768519/', R + 'B537029571/', R + 'B537581697/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean with photos, plus QR ordering (Tabelog; October 2026). Hard to find: no sign outside, 4th floor (2026). Adults only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-18 心斎橋ヨーロピアンビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番18号 (go) 8m. Nearest records, next door at 1-7-16: 味乃家 本店 (osaka_ajinoya_honten_namba) 14 m, 肉匠なか田 本店 (osaka_nikushou_nakata_honten) 16 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535354354/', R + 'B532735770/', TB],
    price_note: 'Prices from July–September 2026 reviews; drink courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', '"Sugiya\'s Specialty! Smoked Sukiyaki" (smoked egg, smoked tomato sorbet)', '¥2,160', 'Signature', 'ask', 'no', 'September 2026 reviews.', 'kunsei_sukiyaki'),
      it('', '', 'Instant-smoked wagyu tenderloin', '¥2,700', 'Meat', 'ask', 'no', 'September 2026 review.', 'shunkan_kunsei_hire'),
      it('', '', 'Smoked potato salad', '¥690', 'Small plates', 'ask', 'ask', 'September 2026 reviews.', 'kunsei_potesara'),
      it('', '', 'Assorted sashimi with smoked soy sauce', '¥1,480', 'Fish', 'ask', 'no', 'September 2026 review.', 'sashimi_moriawase'),
      it('', '', 'Instant-smoked tenderloin and seven smoked dishes course', '¥4,000', 'Course', 'ask', 'no', 'July 2026 review.', 'kunsei_course'),
    ] }, {
    cuisine: '料理も飲み物もほとんどが燻製の居酒屋 (食べログの店の紹介): 和牛ヒレの瞬間燻製、16時間燻製のチーズ、燻製ソーセージ、板焼き、燻製レモンサワー・名物の燻製すき焼き2,160円、つけだれは燻製の生卵と燻製トマトのシャーベット (2026年9月)・仕上げを自分でする燻製ポテトサラダ690円 (2026年9月)、刻んだたくあん入り (2026年8月)・燻製醤油の刺身の盛り合わせ1,480円、瞬間燻製の和牛ヒレ2,700円 (2026年9月)・コース: 瞬間燻製のヒレと燻製7品4,000円 (燻製ポテトサラダ、燻製のたくあん・たらこ・クリームチーズの醤油漬け・たたききゅうり、燻製チーズ、刺身、ヒレ、燻製卵のご飯、燻製の生チョコ)、飲み放題1,500円、燻製ドリンクは+500円 (2026年7月)、牛肉のコース飲み放題つき6,000円、燻製すき焼きのコース飲み放題つき6,000円、締めはご飯かうどん (食べログ)・馬刺し、燻製ベーコンとソーセージ (2026年8月)・燻製ハイボール、燻製ジンジャーハイボール、燻製サングリア (2026年)',
    neighborhood: '難波1-7-18 心斎橋ヨーロピアンビル 4F、裏通り。なんば駅14番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。刺身は燻製醤油で、燻製すき焼きは甘い醤油の割下、コースの締めはご飯かうどん。',
    vegan_detail: 'ヴィーガンではありません。名物は燻製の和牛、燻製の生卵で食べる燻製すき焼き、刺身、ベーコン、ソーセージ。',
    notes: '[燻製の居酒屋・なんば、カウンターで燻製すき焼き] なんばの裏通りのビルの4階、看板はなく、靴を脱いで低い入口から入る隠れ家で、醤油やレモンサワーまでほとんどが燻製。燻製すき焼き (2,160円) を燻製の卵とトマトのシャーベットで、燻製ポテトサラダと16時間燻製のチーズも。4,000円のコースで定番がそろう。カウンターのみ、20歳以上のみ、英語のメニューあり。2026年7月には塩辛い料理が多いという声も。',
  });
}

save();
