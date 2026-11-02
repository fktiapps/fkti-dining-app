// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 17.
//   + イーパンツァイタナカ Yi Pan Tsai Tanaka (ten-seat Chinese course counter by Mototanaka Stn; since 2020)
//   + fiveran ファイブラン (Karasuma-Oike bakery with an eat-in space; since 2015)
//   + Flip up! フリップアップ (takeaway bagel bakery on Oshikoji-dori, about 22 years)
//   + 炭焼創彩鳥家 人見 Sumiyaki Sosai Toriya Hitomi (Tomoki Hitomi's charcoal yakitori at Kawabata-Nijo; since 2005)
//   - skipped 焼肉矢澤 京都 26028368: Yakiniku Yazawa says it operates in seven cities across five countries (Singapore,
//     Tokyo, Milan, Beverly Hills, Kyoto, Ho Chi Minh City, Hanoi — brand text on japan-food.guide) — a chain (5+).
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (Yazawa skipped, Hitomi next).
//   None of the four is in data/kyoto.json: grep by name (タナカ/Tanaka, ファイブラン/fiveran, フリップアップ/Flip,
//   人見/Hitomi) and address (田中里ノ内町26, 役行者町377, 蛸薬師町292-2, 大菊町96) found nothing. Flip up! is 11 m from
//   mp_torisaki and 24–26 m from the IDO KYOTO pair (KOKE, shiro) — no stacking.
//   Group check: fiveran has its Kyoto main shop plus Osaka outlets (Grand Front Osaka and Ekimarche coffee bases, a
//   Yodoyabashi concourse shop) per search results I did not open — four at most, a small group: draft the main shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028368', '焼肉矢澤 京都 (Yakiniku Yazawa Kyoto): a chain — the brand operates in seven cities across five countries (Singapore, Tokyo, Milan, Beverly Hills, Kyoto, Ho Chi Minh City, Hanoi), per its listing text on japan-food.guide; Tokyo-registered operator (invoice T9010401049924 on Tabelog)');

// ================================================================ イーパンツァイタナカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26035247/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_yi_pan_tsai_tanaka', name: 'イーパンツァイタナカ (Yi Pan Tsai Tanaka)', category: 'OMNI',
    lat: 35.033756, lng: 135.780002, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A Chinese course with soy and fermented-bean seasonings, dumplings, spring rolls and noodles; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of seafood, soft-shell turtle, duck, pork and shark fin (2026 reviews).',
    hours_raw: 'Tabelog gives times for Mon, Sat and Sun only: 12:00–14:00 and 17:00–21:30 (lunch at 12:00 only; dinner starts at 17:00, 18:00 or 19:00). Tue, Thu and Fri are listed as open with no times, and the note says no lunch on those days; Wednesday is closed, plus irregular days — check Instagram for opening days (Tabelog). Because three open days have no published times, no hours are stored. Reservation only (Tabelog), via TableCheck; bookings open a month ahead and fill within a minute (October 2026). Course only, ¥9,000 before tax for lunch and dinner, six dishes, with dim sum, noodles, rice and desserts added à la carte (October 2026). Private parties are cash only (October 2026). 10 seats: a counter of 4 and two tables for 4 (Tabelog; September 2026). Non-smoking (Tabelog). Cards (VISA, Master, AMEX, Diners) (Tabelog). 5 min from Mototanaka Stn on the Eiden line (Tabelog). Opened 10 December 2020 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanaka, by Mototanaka Stn on the Eiden line, a street dense with Chinese restaurants — 5 min on foot',
    cuisine: 'Cantonese-based Chinese courses that change each visit, from a team trained in hotel Chinese kitchens (2026 reviews) · six-dish course ¥9,000 before tax at lunch and dinner (October 2026) · autumn 2026: an appetiser platter (Shaoxing-marinated sweet shrimp, steamed chicken with scallion oil, jellyfish, yuba-wrapped mushrooms, honey char siu); Jinhua-ham soups; dried abalone with shark fin; Matsutake xiaolongbao; Shanghai-crab spring rolls; soft-shell turtle; grouper with yellow chives; chestnut sticky rice · à la carte extras: mapo tofu with rice, hot-and-sour noodles and black-vinegar sudachi cold noodles ¥1,600, kadaif shrimp, almond tofu · gin, vodka, wines',
    website: null, gmaps: gm('イーパンツァイタナカ'), menu_url: null,
    notes: "[Chinese · Mototanaka, a ten-seat Cantonese course counter] In a little enclave of Chinese restaurants by Mototanaka Station on the Eiden line, a chef and madam trained in hotel Chinese kitchens run ten seats and one ever-changing six-dish course: a lavish appetiser platter, Jinhua-ham soups, dried abalone with shark fin, Matsutake xiaolongbao, Shanghai-crab spring rolls. Regulars add mapo tofu or hot-and-sour noodles at the end. The course is ¥9,000 before tax at lunch and dinner — good value, so tables go within a minute of opening on TableCheck a month ahead. Closed Wednesdays; check Instagram for days.",
    chef_bio: { chef_name: null, roles: ['Chef and madam trained in hotel Chinese cooking (September 2026 review); not named in the sources'], origin: null,
      background: 'Per 2026 reviews: Cantonese cooking by a chef and madam trained in hotel Chinese restaurants; once à la carte in the evenings, now a set course with à la carte add-ons; listed as Michelin Kyoto 2023 Bib Gourmand, per a September 2026 review. Tabelog: opened 10 December 2020; Chinese WEST "Tabelog 100" 2024, 2026.',
      philosophy: null, specialty: 'Appetiser platter; Matsutake xiaolongbao; mapo tofu.',
      anecdotes: [
        { text: '"I can understand why reservations fill up a month in advance within just 50 seconds." — October 2026.', source: R + 'B537141898/' },
        { text: '"The mapo tofu here might just be the best I\'ve ever had." — October 2026, a fifteenth visit.', source: R + 'B482005506/' },
        { text: '"since I was seated at the counter, it would have been nice to have some communication with the staff" — September 2026.', source: R + 'B535147415/' },
      ],
      japanese_sources_summary: '食べログ: イーパンツァイタナカ、中華、左京区田中里ノ内町26、元田中駅から徒歩5分、月・土・日は昼12:00のみと夜17:00・18:00・19:00スタート、火・木・金は夜のみ、水曜と不定休 (営業日は Instagram)、予約のみ、10席、カード可、2020年12月10日オープン、中国料理 WEST 百名店 2024・2026。口コミ (2026年8〜10月、英語): ホテルの中華で修業したシェフとマダム、6品のコース9,000円 (税別)、点心や麺を追加、松茸の小籠包、麻婆豆腐、TableCheck の予約は1か月前にすぐ埋まる。',
      confidence: 'medium', sources: [TB, R + 'B437261683/', R + 'B482005506/', R + 'B494917315/', R + 'B509998737/', R + 'B524460224/', R + 'B528837165/', R + 'B535147415/', R + 'B537141898/', R + 'B537185781/', R + 'B538079716/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set course with à la carte add-ons; book on TableCheck the moment bookings open.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中里ノ内町26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.033756, 135.780002); cross-checked: GSI 京都府京都市左京区田中里ノ内町26番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B437261683/', R + 'B509998737/'],
    price_note: 'No published prices read; from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Six-dish course (lunch or dinner)', '¥9,000 + tax', 'Course', 'ask', 'no', 'October 2026.', 'course'),
      it('', '', 'Hot-and-sour noodle soup (add-on)', '¥1,600', 'À la carte', 'no', 'no', 'September 2026.', 'suanla_noodles'),
      it('', '', 'Black-vinegar sudachi cold noodles (add-on)', '¥1,600', 'À la carte', 'no', 'no', 'September 2026.', 'cold_noodles'),
    ] }, {
    cuisine: 'ホテルの中華で修業したチームによる、毎回変わる広東料理ベースのコース (2026年の口コミ)・6品のコース9,000円 (税別、昼夜とも、2026年10月)・2026年秋: 前菜の盛り合わせ (紹興酒漬けの甘海老、ねぎ油の蒸し鶏、くらげ、湯葉で巻いたきのこ、蜂蜜のチャーシュー)、金華ハムのスープ、干し鮑とフカヒレ、松茸の小籠包、上海蟹の春巻き、すっぽん、grouper と黄ニラ、栗のおこわ・追加の一品: 麻婆豆腐とご飯、酸辣湯麺や黒酢とすだちの冷麺1,600円、カダイフの海老、杏仁豆腐・ジン、ウォッカ、ワイン',
    neighborhood: '田中、叡電の元田中駅のそば、中華料理店が多い通り。徒歩5分',
    gf_detail: '予約時に要確認。醤油や豆豉で味付けし、点心、春巻き、麺もある中華のコース。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、すっぽん、鴨、豚、フカヒレのコース (2026年の口コミ)。',
    notes: '[中華・元田中、10席の広東料理のコース] 叡電の元田中駅そばの中華料理店が集まる一角で、ホテルの中華で修業したシェフとマダムが10席を切り盛りし、毎回変わる6品のコースを出す: 豪華な前菜の盛り合わせ、金華ハムのスープ、干し鮑とフカヒレ、松茸の小籠包、上海蟹の春巻き。常連は締めに麻婆豆腐や酸辣湯麺を追加。昼夜とも9,000円 (税別) と手頃で、TableCheck の予約は1か月前の受付開始後すぐに埋まる。水曜休み、営業日は Instagram で。',
  });
}

// ================================================================ fiveran
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026337/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://fiveran.jp/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_fiveran', name: 'fiveran (ファイブラン)', category: 'OMNI',
    lat: 35.008994, lng: 135.757923, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — croissants, salt bread, baguettes and brioche (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most breads use butter, cream, cheese or meat; plain loaves may suit, but no ingredient list is published (2026 reviews).',
    hours_raw: '9:00–18:00 every day; no regular closing day since 4 December 2025 (Tabelog). Queues at busy times; breads thin out by afternoon (October 2026). No reservations (Tabelog). 19 seats: 16 at tables and 3 at the counter, at the back of the shop (Tabelog). Non-smoking (Tabelog). No cards; PayPay accepted (Tabelog). About 5 min from Karasuma-Oike Stn (Tabelog). Opened 2 November 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Between Karasuma and Horikawa south of Oike, a stylish bakery — about 5 min from Karasuma-Oike Stn',
    cuisine: 'Bakery with an eat-in space and coffee (2026 reviews) · examples with October 2026 prices: salt bread ¥149, black-sesame salt bread ¥167, black-bean kinako ¥260, croissant ¥280, milk France ¥320, maple cheddar bacon ¥353, croque monsieur ¥371, curry dog ¥408, chili dog ¥445 · also truffle salt bread, cheese France, coarse pork sausage, walnut baguette, bacon épi, cream buns, Earl Grey melon bread, raisin bread · espresso ¥463, hojicha latte ¥723',
    website: SITE, gmaps: gm('fiveran 京都'), menu_url: null,
    notes: "[Bakery · Karasuma-Oike, the queue-worthy bread shop] A stylish bakery a few minutes from Karasuma-Oike whose counters run from ¥149 salt bread to truffle salt bread, cheese France, croque monsieur and a chili dog, with coffee and a few seats at the back for eating in. Croissants are buttery enough to eat cold. Expect a line at weekends and a thinner selection by mid-afternoon. Open daily 9:00–18:00; no cards, but PayPay works. One October 2026 visitor found the croissant unremarkable after a long wait before eating, so eat it fresh.",
    chef_bio: { chef_name: null, roles: ['Owner-baker; not named in the sources read'], origin: null,
      background: 'Tabelog: bakery and café, opened 2 November 2015; Bread "Tabelog 100" 2019 and Bread WEST 2020, 2022, 2026. An October 2026 review calls it part of a chain and mentions the Osaka outlet fiveran osaka Coffee BASE in Umeda.',
      philosophy: null, specialty: 'Salt bread; croissants; hot dogs.',
      anecdotes: [
        { text: '"I lined up to choose my bread." — October 2026, a Sunday at 2 PM.', source: R + 'B537583475/' },
        { text: '"Here, the operation was well-organized." — October 2026, comparing the Kyoto shop with the Osaka outlet.', source: R + 'B537299643/' },
        { text: '"There were many inbound customers, and the atmosphere was stylish!" — October 2026.', source: R + 'B538402885/' },
      ],
      japanese_sources_summary: '食べログ: fiveran (ファイブラン)、パン・カフェ、中京区役行者町377、烏丸御池駅から徒歩約5分、毎日9:00〜18:00、2025年12月4日から定休日なし、予約不可、19席 (テーブル16、カウンター3)、カード不可・PayPay 可、2015年11月2日オープン、パン百名店 2019、パン WEST 百名店 2020・2022・2026。口コミ (2026年10月、英語): 塩パン149円、クロワッサン280円、クロックムッシュ、チリドッグ、トリュフ塩パン、行列、イートイン、大阪にも店。',
      confidence: 'medium', sources: [TB, R + 'B537128445/', R + 'B537226992/', R + 'B537258443/', R + 'B537299643/', R + 'B537369338/', R + 'B537583475/', R + 'B537622932/', R + 'B538114066/', R + 'B538402885/', R + 'B538408478/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service bread trays; pay at the register (PayPay or cash).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区役行者町377',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the December 2025 hours change; ten reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.008994, 135.757923); cross-checked: GSI 京都府京都市中京区役行者町377番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537226992/', R + 'B537583475/'],
    price_note: 'No published price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salt bread', '¥149', 'Bread', 'no', 'ask', 'October 2026.', 'salt_bread'),
      it('', '', 'Croissant', '¥280', 'Bread', 'no', 'no', 'October 2026.', 'croissant'),
      it('', '', 'Croque monsieur', '¥371', 'Bread', 'no', 'no', 'October 2026.', 'croque'),
      it('', '', 'Hojicha latte', '¥723', 'Drinks', '', 'no', 'October 2026.', 'hojicha_latte'),
    ] }, {
    cuisine: 'イートインとコーヒーのあるパン屋 (2026年の口コミ)・2026年10月の値段の例: 塩パン149円、黒ごま塩パン167円、黒豆きなこ260円、クロワッサン280円、ミルクフランス320円、メープルチェダーベーコン353円、クロックムッシュ371円、カレードッグ408円、チリドッグ445円・ほかにトリュフ塩パン、チーズフランス、粗挽きソーセージ、くるみのバゲット、ベーコンエピ、クリームパン、アールグレイのメロンパン、レーズンパン・エスプレッソ463円、ほうじ茶ラテ723円',
    neighborhood: '御池の南、烏丸と堀川の間のおしゃれなパン屋。烏丸御池駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。クロワッサン、塩パン、バゲット、ブリオッシュなど小麦のパン (2026年の口コミ)。',
    vegan_detail: '要確認。多くのパンにバター、クリーム、チーズ、肉を使う。シンプルなパンなら合うかもしれないが、原材料は公開されていない (2026年の口コミ)。',
    notes: '[パン・烏丸御池、並んでも買いたいパン屋] 烏丸御池から数分のおしゃれなパン屋。149円の塩パンから、トリュフ塩パン、チーズフランス、クロックムッシュ、チリドッグまで並び、コーヒーと奥に少しのイートイン席。クロワッサンは冷めてもバターが香る。週末は行列、午後半ばには品数が減る。毎日9時〜18時、カード不可だが PayPay 可。2026年10月には、時間がたってから食べたクロワッサンは平凡だったという声もあり、焼きたてを。',
  });
}

// ================================================================ Flip up!
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004579/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '18:00']); const SUN = day(['07:00', '16:00']);
  put({
    id: 'kyoto_flip_up', name: 'Flip up! (フリップアップ)', category: 'OMNI',
    lat: 35.012356, lng: 135.758275, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — bagels, hard breads, croissants and danishes from domestic and imported wheat (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some bagels may be plain, but many breads use cheese, butter, custard or salted butter; no ingredient list is published (2026 reviews).',
    hours_raw: 'Mon–Sat 7:00–18:00, Sun 7:00–16:00, until sold out (Tabelog); popular bagels can be gone by lunchtime (October 2026). Takeaway only, no seats; the shop holds about 4–5 people at a time, so a short queue forms outside (Tabelog; October 2026). Reservations accepted (Tabelog). Cards (VISA, Master), transport IC cards and PayPay (Tabelog). On Oshikoji-dori, 4 min from Karasuma-Oike Stn exit 2 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori east of Muromachi, a tiny shop near Karasuma-Oike — 4 min from Karasuma-Oike Stn',
    cuisine: 'Small bakery known for chewy bagels — more than ten kinds — plus hard breads, danishes and sweet buns, made with domestic and imported wheat and its own natural yeast (October 2026 review) · examples: chocolate bagel with black cocoa and 65% cacao chips; cheese bagel ¥280; pumpkin bagel with salted butter ¥280; white fig bagel; banana croissant with custard ¥260; heart-shaped cream bun ¥150; blue-cheese croissant; anpan; mentaiko French bread (October 2026) · diners spend under ¥1,000',
    website: null, gmaps: gm('Flip up! 京都'), menu_url: null,
    notes: "[Bakery · Karasuma-Oike, the early-opening bagel shop] A tiny takeaway bakery on Oshikoji-dori, open from 7:00, that has been turning out chewy bagels for about 22 years — chocolate with black cocoa, cheese, pumpkin with salted butter, white fig — alongside croissants, danishes and a heart-shaped ¥150 cream bun. Only four or five people fit inside, so expect a short line, and the bagels sell out by lunchtime. Most items are ¥150–300. Cards, IC cards and PayPay accepted; closes at 16:00 on Sundays.",
    chef_bio: { chef_name: null, roles: ['Bakery staff; no person is named in the sources'], origin: null,
      background: 'Per an October 2026 review: open for about 22 years; breads made with a blend of domestic and high-quality imported wheat and the shop\'s own natural yeast; over ten kinds of bagel, classic and seasonal. Tabelog Bread "Tabelog 100" 2017–2019 and Bread WEST 2020, 2022, 2026.',
      philosophy: null, specialty: 'Bagels; cream bun.',
      anecdotes: [
        { text: '"When you\'re feeling frustrated, eat this. Cream buns bring a comforting and gentle feeling." — the shop\'s sign for the heart-shaped cream bun, quoted in an October 2026 review.', source: R + 'B535863852/' },
        { text: '"I went around lunchtime specifically for their popular bagels, but by that time, most of them were already sold out." — October 2026.', source: R + 'B537256823/' },
        { text: '"Grateful for the early opening!" — October 2026, before work.', source: R + 'B538403139/' },
      ],
      japanese_sources_summary: '食べログ: Flip up! (フリップアップ)、パン・ベーグル・サンドイッチ、中京区押小路通室町東入ル蛸薬師町292-2、烏丸御池駅から徒歩4分、月〜土 7:00〜18:00、日 7:00〜16:00、売り切れ次第終了、席なし (持ち帰りのみ)、予約可、カード・交通系 IC・PayPay 可、パン百名店 2017〜2019、パン WEST 百名店 2020・2022・2026。口コミ (2026年10〜11月、英語): 22年続く小さな店、国産と輸入の小麦と自家製の天然酵母、10種以上のベーグル、ハートのクリームパン150円、昼には売り切れ。',
      confidence: 'medium', sources: [TB, R + 'B535863852/', R + 'B537167645/', R + 'B537194063/', R + 'B537256823/', R + 'B537777126/', R + 'B537925521/', R + 'B538083755/', R + 'B538403139/', R + 'B538407592/', R + 'B538507424/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service trays in a tiny shop; wait your turn outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通室町東入ル蛸薬師町292-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.012356, 135.758275); cross-checked: GSI 京都府京都市中京区蛸薬師町292番地 (lot) 64m; mp_torisaki is 11 m away and KOKE/shiro 24–26 m — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537167645/', R + 'B538407592/', R + 'B535863852/'],
    price_note: 'No published price list; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cheese bagel', '¥280', 'Bagels', 'no', 'no', 'October 2026.', 'cheese_bagel'),
      it('', '', 'Pumpkin bagel with salted butter', '¥280', 'Bagels', 'no', 'no', 'October 2026.', 'pumpkin_bagel'),
      it('', '', 'Banana croissant with custard', '¥260', 'Pastries', 'no', 'no', 'October 2026.', 'banana_croissant'),
      it('', '', 'Heart-shaped cream bun', '¥150', 'Sweet buns', 'no', 'no', 'October 2026.', 'cream_bun'),
    ] }, {
    cuisine: 'もちもちのベーグル10種以上で知られる小さなパン屋。ハード系、デニッシュ、菓子パンも、国産と輸入の小麦と自家製の天然酵母で (2026年10月の口コミ)・例: 黒ココアの生地に65%のカカオのチョコレートのベーグル、チーズベーグル280円、塩バター香るかぼちゃベーグル280円、白いちじくのベーグル、カスタードとバナナのクロワッサン260円、ハートのクリームパン150円、ブルーチーズのクロワッサン、あんパン、明太フランス (2026年10月)・予算は1,000円未満',
    neighborhood: '室町通の東の押小路通、烏丸御池近くの小さな店。烏丸御池駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。国産と輸入の小麦のベーグル、ハード系、クロワッサン、デニッシュ (2026年の口コミ)。',
    vegan_detail: '要確認。シンプルなベーグルもありそうだが、多くはチーズ、バター、カスタード、塩バターを使う。原材料は公開されていない (2026年の口コミ)。',
    notes: '[パン・烏丸御池、朝早くからのベーグルの店] 押小路通の小さな持ち帰りのパン屋で、朝7時から。22年ほど、もちもちのベーグルを焼き続ける: 黒ココアのチョコ、チーズ、塩バターのかぼちゃ、白いちじく。クロワッサン、デニッシュ、150円のハートのクリームパンも。店内は4〜5人でいっぱいなので外に少し並び、ベーグルは昼には売り切れる。多くは150〜300円。カード、交通系 IC、PayPay 可、日曜は16時まで。',
  });
}

// ================================================================ 炭焼創彩鳥家 人見
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005610/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_toriya_hitomi', name: '炭焼創彩鳥家 人見 (Sumiyaki Sosai Toriya Hitomi)', category: 'MOM_AND_POP',
    lat: 35.013392, lng: 135.773132, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with salt or sauce; there are fried dishes and rice dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken grill; even the starter cabbage comes with ponzu (2026 reviews).',
    hours_raw: '18:00–23:00 (last order 22:00); closed Wednesday and irregularly (Tabelog). Reservations accepted, by phone (075-771-7818), easiest 15:00–16:45 (Tabelog); bookings fill fast — a July 2026 diner booked a month and a half ahead. 30 seats: counter and tables on the ground floor, tables (a tatami room) upstairs (Tabelog; July 2026). Non-smoking (Tabelog). Cash only (Tabelog). Children welcome (Tabelog). On Kawabata-dori at Nijo, about 7 min from Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawabata-dori at Nijo, a spacious old townhouse — about 7 min from Sanjo Stn',
    cuisine: 'Charcoal yakitori over Kishu binchotan, ordered by the skewer, with Takasaka chicken and other breeds (2026 reviews) · a Takasaka chicken omakase of five cuts; neck, chicken-and-leek, skin, shiso rolls, tsukune, heart, gizzard, wings, liver comparisons between breeds; Kyoto duck loin (2026 reviews) · sides: free refills of cabbage with ponzu; chicken breast with yam and ume; steamed chicken with sansho sauce; potato salad; fried tofu; Kobe caciocavallo cheese · to finish: yakitori rice bowl, onigiri with sansho and chicken soup · sake, shochu, wine, cocktails · diners spend about ¥4,000–9,999',
    website: null, gmaps: gm('炭焼創彩鳥家 人見'), menu_url: null,
    notes: "[Yakitori · Kawabata-Nijo, the hard-to-book binchotan grill] In a roomy old townhouse on Kawabata-dori, owner Tomoki Hitomi grills over Kishu binchotan, skewer by skewer: a five-cut Takasaka chicken omakase, crisp-skinned wings, neck and liver tasted side by side from two breeds, and a Kyoto duck loin. Free refills of cabbage with ponzu come first; onigiri with sansho and chicken soup finish. Diners describe a humble, attentive owner who remembers regulars. Prices are reasonable for the quality, so bookings go fast — phone between 15:00 and 16:45. Cash only; open to 23:00; closed Wednesdays.",
    chef_bio: { chef_name: 'Tomoki Hitomi (June 2026 review: "the owner, Tomoki Hitomi"; no given-name kanji in a source)', roles: ['Owner, at the grill (2026 reviews)'], origin: null,
      background: 'Per a June 2026 review: a yakitori specialist opened in 2005, among the hardest restaurants in Kyoto to book, grilling Takasaka chicken and other breeds over Kishu binchotan. Tabelog Yakitori "Tabelog 100" 2018, 2019, 2021, 2022 and Yakitori WEST 2023–2025.',
      philosophy: null, specialty: 'Takasaka chicken omakase; liver; duck loin.',
      anecdotes: [
        { text: '"I was humbled by the polite and humble service from the owner, Tomoki Hitomi, which heightened my expectations." — June 2026.', source: R + 'B530377149/' },
        { text: '"Even though it had been a while, the master remembered me, which made me happy." — September 2026.', source: R + 'B535785904/' },
        { text: '"I made a reservation a month and a half in advance and was really looking forward to it!" — July 2026.', source: R + 'B528177733/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼創彩鳥家 人見、焼き鳥、左京区二条通川端東入大菊町96、三条駅から徒歩約7分、月・火・木〜日 18:00〜23:00 (L.O.22:00)、水曜と不定休、予約可 (電話は15:00〜16:45がつながりやすい)、30席 (1階カウンターとテーブル、2階テーブル)、カード不可、子ども可、焼鳥百名店 2018・2019・2021・2022、焼鳥 WEST 百名店 2023〜2025。口コミ (2026年3〜11月、英語): 2005年開業、店主の Tomoki Hitomi さん、紀州備長炭、高坂鶏のおまかせ、謙虚で気配りのある店主、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B473296058/', R + 'B495856258/', R + 'B502331537/', R + 'B524787396/', R + 'B526609090/', R + 'B528177733/', R + 'B530377149/', R + 'B530759333/', R + 'B535785904/', R + 'B58944128/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order skewers one by one; book by phone in the afternoon window.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区二条通川端東入大菊町96',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013392, 135.773132); cross-checked: GSI 京都府京都市左京区大菊町96番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535785904/', R + 'B530377149/'],
    price_note: 'No published prices; diners spend about ¥4,000–9,999 (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Takasaka chicken omakase (five cuts)', '', 'Yakitori', 'ask', 'no', 'June–September 2026.', 'omakase'),
      it('', '', 'Onigiri with sansho and chicken soup', '', 'To finish', 'ask', 'no', 'September 2026.', 'onigiri'),
    ] }, {
    cuisine: '紀州備長炭で焼く焼き鳥を1本から、高坂鶏やほかの鶏で (2026年の口コミ)・5種の高坂鶏のおまかせ、せせり、ねぎま、皮、大葉巻き、つくね、ハツ、砂肝、手羽、品種による肝の食べ比べ、京鴨のロース (2026年の口コミ)・一品: おかわり自由のキャベツとポン酢、むね肉と長芋の梅和え、山椒のたれの蒸し鶏、ポテトサラダ、厚揚げ、Kobe のカチョカヴァロ・締め: 焼き鳥丼、山椒のおにぎりと鶏スープ・日本酒、焼酎、ワイン、カクテル・予算は約4,000〜9,999円',
    neighborhood: '二条の川端通、広々とした古民家。三条駅から徒歩約7分',
    gf_detail: '要確認。串は塩かたれ、揚げ物やご飯ものもある。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼き鳥の店で、最初のキャベツにもポン酢 (2026年の口コミ)。',
    notes: '[焼き鳥・川端二条、予約の取れない備長炭の店] 川端通のゆったりした古民家で、店主の Tomoki Hitomi さんが紀州備長炭で1本ずつ焼く: 5種の高坂鶏のおまかせ、皮のぱりっとした手羽、せせり、2品種の肝の食べ比べ、京鴨のロース。まずおかわり自由のキャベツとポン酢、締めは山椒のおにぎりと鶏スープ。謙虚で気配りの行き届いた店主は常連の顔を覚えているという声。質の割に手頃なので予約はすぐ埋まる。電話は15時〜16時45分に。現金のみ、23時まで、水曜休み。',
  });
}

save();
