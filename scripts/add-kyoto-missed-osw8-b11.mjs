// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 11.
//   + 温 onn (creative wagashi and matcha café in a townhouse off Gokomachi, since 2023; core list)
//   + 大神 Oogami (9-seat Gion kaiseki counter of about 30 years; core list)
//   + いはら田 Iharada (Nishioji-Shichijo kaiseki with aged Tajima beef and its own Ohara farm, since 2002; notable list)
//   + 燕 En (à la carte kappo counter near Kyoto Station's Hachijo exit, since 2013; notable list)
//   Picked 2026-11-05 after batch 10. `queue.mjs kyoto-missed next core 200`, lane-1 ids in order: 温 26040439 (drafted);
//   祇園 寿司六 26034631 (skipped, no 2025–26 reviews); 祇をん 八咫 26000557 (skipped, temporarily closed); 大神 26000599
//   (drafted). `next notable 200`: いはら田 26001469 and 燕 26022259. Same-name check first: no other 温, 大神, いはら田 or
//   燕 shop of the same concept appears in our crawls (the 燕 hits are 燕燕, 燕楽, 燕食堂 — different names). None of the four is
//   in data/kyoto.json: grep by name and address (伊勢屋町341, 末吉町88, 比輪田町26, 西山王町15) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034631', '祇園 寿司六: newest review is October 2024 (B493946613); none from 2025–26 to confirm it is operating, and Tabelog notes a closure from 1 February 2025 to the end of July 2025.');
skip('26000557', '祇をん 八咫: Tabelog shop text (read 2026-11-05) — "Notice of Temporary Closure … we will be temporarily closed starting from Wednesday, October 28, 2026 … We will inform you of the reopening date as soon as it is decided."');

// ================================================================ 温 onn
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040439/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_onn_wagashi', name: '温 (onn)', category: 'OMNI',
    lat: 35.006960, lng: 135.766477, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative wagashi built on daifuku (rice-flour mochi) with fillings such as rum raisin, Earl Grey, chestnut and osmanthus, and kakigori with kinako, shiratama and job’s tears; no ingredient list is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wagashi are bean-, rice- and chestnut-based, but some kakigori come with fresh cream or milk and the latte uses milk; no ingredient list is published (2026 reviews).',
    hours_raw: '11:00–18:00; closed Tuesday and Wednesday (Tabelog). No reservations: write your name and number at the door and they call when a seat is free, asking you to come within about 10 minutes; waits of up to two hours in summer 2026, while solo guests and weekday visitors were sometimes seated at once (Tabelog; August–October 2026). Order at the counter by the entrance first (August 2026). 13 seats; non-smoking; no table charge (Tabelog). Cards, transport IC, iD and QUICPay (Tabelog). Takeaway sweets sold at the front (2026 reviews). 6 min walk from Kyoto-Kawaramachi Stn exit 9 (Tabelog). Opened 16 November 2023 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Townhouse north of Shijo — 6 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'Creative seasonal wagashi on a daifuku base, with matcha whisked in front of you in a bowl you choose (2026 reviews) · sets of two or three sweets with matcha or tea; sweets such as "Ajisai" (hydrangea, with rum raisin), "Razu", "Yamato Kuri" (chestnut paste with whole chestnuts), an Earl Grey sweet, an osmanthus sweet with cinnamon, and autumn names "Hanaberry", "Koke Musubi", "Shizuka", "Onka", "Hisui" (August–October 2026) · kakigori: hojicha with kinako espuma; rich matcha with Wazuka matcha, chestnut, Dainagon azuki, Tanba black beans, shiratama, job’s tears and fresh cream ¥1,870 (August–October 2026) · iced matcha latte, cold Yabukita tea (August 2026) · takeaway sweets about ¥400 each (October 2026)',
    website: null, gmaps: gm('温 onn 京都 和菓子'), menu_url: null,
    notes: "[Wagashi café · Kawaramachi, matcha in a townhouse] A calm, much-queued tea room in a renovated townhouse with a small garden seen through a round window, serving seasonal creative wagashi on a daifuku base — rum-raisin \"Ajisai\", chestnut \"Yamato Kuri\", osmanthus with cinnamon — with matcha whisked before you in a bowl you pick from a shelf of handmade pottery. Summer brings kakigori such as hojicha with kinako espuma or rich Wazuka matcha (¥1,870). No bookings: leave your number and they call. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who chose the pottery (October 2026 review)'], origin: null,
      background: 'Opened 16 November 2023 (Tabelog). An October 2026 reviewer calls it "onn Kyoto Gion-cho", a renovated Kyoto townhouse with a small garden through a round window and handcrafted pottery chosen by the owner; reviewers in August–October 2026 describe long summer waits, staff who are pleasant, and a shop seen on Instagram.',
      philosophy: null, specialty: 'Seasonal creative wagashi; hojicha kakigori.',
      anecdotes: [
        { text: '"I saw a sign saying there was a 2-hour wait. I hesitated but decided to go in and made a reservation by writing my name and phone number." The call came about an hour later. — August 2026.', source: R + 'B534686222/' },
        { text: '"The Ajisai had a striking flavor of rum raisin, which is a unique combination not often found in wagashi." — September 2026.', source: R + 'B537911995/' },
        { text: '"You can also choose your matcha bowl, so be sure to pick your favorite; mine is the camellia bowl." — October 2026.', source: R + 'B538131102/' },
      ],
      japanese_sources_summary: '食べログ: 甘味処・和菓子、中京区伊勢屋町341-1、阪急京都河原町駅9番出口から徒歩6分、11:00〜18:00、火・水曜休み、予約不可、13席、禁煙、チャージなし、カード・交通系IC・iD・QUICPay 可、2023年11月16日オープン。口コミ (2026年8〜10月、英語): 入口で名前と電話番号を書いて呼び出し、夏は2時間待ち、入口のカウンターで先に注文、大福が基本の創作和菓子 (Ajisai のラムレーズン、Yamato Kuri、アールグレイ、金木犀とシナモン)、選べる抹茶碗、目の前で点てる抹茶、ほうじ茶のかき氷ときな粉のエスプーマ、Wazuka の抹茶のかき氷1,870円、町家と丸窓の坪庭、持ち帰りの和菓子は1個400円ほど。',
      confidence: 'medium', sources: [TB, R + 'B534450831/', R + 'B534686222/', R + 'B535330063/', R + 'B536153847/', R + 'B537009490/', R + 'B537911995/', R + 'B538131102/', R + 'B538302260/', R + 'B538414786/', R + 'B538490217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter by the door; leave a name and number when there is a wait; cards and IC accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区伊勢屋町341-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006960, 135.766477); cross-checked: GSI 京都府京都市中京区伊勢屋町341番地 (lot) 32 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538490217/', R + 'B538414786/'],
    price_note: 'No menu read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich matcha kakigori (Wazuka matcha, chestnut, azuki, black beans, shiratama, cream)', '¥1,870', 'Kakigori', 'ask', 'no', 'October 2026.', 'matcha_kakigori'),
      it('', '', 'Hojicha kakigori with kinako espuma', '', 'Kakigori', 'ask', 'ask', 'August 2026.', 'hojicha_kakigori'),
      it('', '', 'Set of two or three wagashi with matcha', '', 'Wagashi', 'ask', 'ask', '2026.', 'wagashi_set'),
      it('', '', 'Wagashi to take away', '¥400', 'Takeaway', 'ask', 'ask', 'About, October 2026.', 'takeaway_wagashi'),
    ] }, {
    cuisine: '大福を基本にした季節の創作和菓子に、選んだ器で目の前で点てる抹茶 (2026年の口コミ)・和菓子2種か3種と抹茶やお茶のセット。Ajisai (ラムレーズン)、Razu、Yamato Kuri (栗あんと大粒の栗)、アールグレイの菓子、シナモンの金木犀の菓子、秋は Hanaberry、Koke Musubi、Shizuka、Onka、Hisui (2026年8〜10月)・かき氷: きな粉のエスプーマのほうじ茶、Wazuka の抹茶、栗、大納言小豆、丹波の黒豆、白玉、はと麦、生クリームの濃い抹茶1,870円 (2026年8〜10月)・アイス抹茶ラテ、冷たいやぶきた茶 (2026年8月)・持ち帰りの和菓子は1個400円ほど (2026年10月)',
    neighborhood: '四条の北の町家。京都河原町駅から徒歩6分',
    gf_detail: '要確認。大福 (米粉の餅) にラムレーズン、アールグレイ、栗、金木犀などを合わせた創作和菓子と、きな粉、白玉、はと麦のかき氷。原材料の一覧は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。和菓子は豆、米、栗が中心だが、生クリームや乳を使うかき氷もあり、ラテは乳を使う。原材料の一覧は公開されていない (2026年の口コミ)。',
    notes: '[和菓子カフェ・河原町、町家の抹茶] 丸窓から坪庭の見える町家を改装した、行列の絶えない静かな甘味処。大福を基本にした季節の創作和菓子 (ラムレーズンの Ajisai、栗の Yamato Kuri、シナモンの金木犀) を、手作りの器の棚から選んだ茶碗で目の前で点てる抹茶とともに。夏はきな粉のエスプーマのほうじ茶やWazuka の濃い抹茶のかき氷 (1,870円)。予約不可で、番号を残すと電話で呼んでくれる。火・水休み。',
  });
}

// ================================================================ 大神
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000599/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '13:00'], D = ['17:00', '20:00'];
  put({
    id: 'kyoto_oogami_gion', name: '大神 (Oogami)', category: 'MOM_AND_POP',
    lat: 35.005183, lng: 135.773817, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase kaiseki with dashi soups, sashimi, vinegared miso dishes, simmered and grilled courses and kamameshi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the kaiseki is built on fish, shellfish, hamo, eel and dashi (2024–2026 reviews).',
    hours_raw: 'Lunch from 11:30, dinner from 17:00, all guests starting together; allow about two hours for lunch and three for dinner; closed Thursday (Tabelog; February 2025). Reservation only, for two or more (Tabelog); lunch is hard to book (August 2025). Lunch ¥6,500 per Tabelog, ¥7,000 in February 2026; service included; cash only (Tabelog; 2026 reviews). Dress smartly (Tabelog). 9 counter seats; non-smoking (Tabelog). In a back alley of Gion north of Shijo, ground floor of サカタビル; 8 min walk from Kawaramachi Stn (Tabelog; September 2025).',
    hours: { 0: [L, D], 1: [L, D], 2: [L, D], 4: [L, D], 5: [L, D], 6: [L, D] }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Back alley of Gion north of Shijo — 8 min walk from Kawaramachi Stn',
    cuisine: 'Gion kaiseki omakase changing monthly, many small dishes in fine tableware (2024–2026 reviews) · lunch course ¥6,500–7,000 (Tabelog; February 2026), with tea included and the kamameshi wrapped as onigiri to take home (September 2025) · dinner omakase, about ¥13,800 in May 2024; bills ¥20,000–29,999 in 2025–2026 reviews · a September 2025 dinner: corn purée with squid, grilled-fish soup, sea urchin and abalone in jelly, sea bream and hamo sashimi, grilled ayu, prawns, hassun, hairy crab, dobin-mushi, chawanmushi, crispy rice and soup, kuzukiri with ice cream · bottled Asahi and Kirin, a half bottle of Chablis, sake and shochu (July 2026)',
    website: null, gmaps: gm('大神 祇園 京都'), menu_url: null,
    notes: "[Kaiseki · Gion, a nine-seat counter of many small dishes] A nine-seat counter in a Gion back alley where Mr. Oogami, cooking here for about 30 years with an apprentice, sends out a stream of small seasonal dishes in beautiful tableware — two hours at lunch, three at dinner, everyone starting together. Lunch at ¥6,500–7,000 is the famous bargain and hard to book; the leftover kamameshi comes wrapped as rice balls to take home. The chef looks stern but is chatty and funny. Cash only; book for two or more; dress smartly; closed Thursday.",
    chef_bio: { chef_name: 'Oogami', roles: ['Owner-chef (May 2024 review: "The owner, Mr. Oogami"), with an apprentice (July 2026)'], origin: null,
      background: 'Per a May 2024 review: kaiseki in Gion for about 30 years; the owner, Mr. Oogami, is meticulous and serves an astonishing variety of dishes, with the menu changing monthly; the restaurant was shown on the TV programme "Hayashi’s Nippon Drill" on 23 January 2019 as a favourite of Hayashi Osamu (also March 2025). Reviewers in 2025–2026 describe a chef who looks intimidating but is friendly and entertaining, and who shared a beer with guests and the apprentice (July 2026).',
      philosophy: null, specialty: 'Omakase kaiseki of many small dishes; kamameshi.',
      anecdotes: [
        { text: '"At the end, they offered to wrap the kamameshi in bamboo leaves as an onigiri to take home" — September 2025.', source: R + 'B501615055/' },
        { text: '"What surprised me was how entertaining the head chef was." The lunch course lasted about two hours. — August 2025.', source: R + 'B512391100/' },
        { text: 'A July 2026 diner, alone with the chef and the apprentice at 17:00, shared a bottle of Asahi — the chef’s favourite — and toasted with both.', source: R + 'B532627873/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区末吉町88 サカタビル1階、河原町駅から8分、昼11:30〜・夜17:00〜 (昼は約2時間、夜は約3時間)、木曜休み、完全予約制 (2名から)、昼6,500円、サービス料込み、カード・電子マネー・QR 不可、ドレスコード、9席 (カウンター)、禁煙。口コミ (2024年5月〜2026年7月、英語): 祇園で約30年の会席、店主の Oogami さん、毎月変わる献立、美しい器、Hayashi Osamu の番組 (2019年1月)、昼のコース6,500〜7,000円、全員一斉スタート、釜飯を葉で包んだおにぎりの持ち帰り、見た目は怖いが気さくで面白い大将、弟子、アサヒの瓶ビール、シャブリのハーフボトル。',
      confidence: 'medium', sources: [TB, R + 'B464032276/', R + 'B485991931/', R + 'B486215726/', R + 'B501615055/', R + 'B504261949/', R + 'B504631897/', R + 'B512391100/', R + 'B514042742/', R + 'B522559969/', R + 'B532627873/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for two or more; fixed start time; cash only; smart dress.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町88 サカタビル1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.005183, 135.773817); cross-checked: GSI 京都府京都市東山区末吉町88番地 (lot) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B522559969/'],
    price_note: 'Lunch ¥6,500 on Tabelog, ¥7,000 in a February 2026 review; dinner price not published.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥6,500–7,000', 'Lunch', 'ask', 'no', 'Service included; cash only.', 'lunch'),
      it('', '', 'Dinner omakase course', '', 'Dinner', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: '毎月替わる祇園の会席おまかせ。美しい器で小さな料理が次々と (2024〜2026年の口コミ)・昼のコース6,500〜7,000円 (食べログ、2026年2月)。お茶付き、釜飯はおにぎりにして持ち帰りも (2025年9月)・夜のおまかせは2024年5月に13,800円ほど、2025〜2026年の口コミでは2万〜3万円・2025年9月の夜: とうもろこしのすり流しといか、焼き魚の椀、ウニと鮑のジュレ、鯛と鱧のお造り、鮎の塩焼き、海老、八寸、毛蟹、土瓶蒸し、茶碗蒸し、おこげと汁、くずきりとアイス・アサヒとキリンの瓶ビール、シャブリのハーフボトル、日本酒、焼酎 (2026年7月)',
    neighborhood: '四条の北、祇園の路地。河原町駅から徒歩8分',
    gf_detail: '要確認。だしの椀、お造り、酢味噌の和え物、煮物、焼き物、釜飯のおまかせ会席。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、鱧、鰻、だしの会席 (2024〜2026年の口コミ)。',
    notes: '[会席・祇園、小さな料理が続く9席のカウンター] 祇園の路地の9席のカウンター。この地で約30年の Oogami さんが弟子と、美しい器で季節の小さな料理を次々と出す。昼は2時間、夜は3時間、全員一斉に始まる。昼の6,500〜7,000円は名物のお得なコースで予約が取りにくい。残った釜飯はおにぎりにして持ち帰れる。大将は見た目はこわもてだが話し好きで面白い。現金のみ、2名から予約、服装はきちんと、木曜休み。',
  });
}

// ================================================================ いはら田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26001469/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.iharada.jp/'; const MENU = SITE + 'menu/'; const ABOUT = SITE + 'about/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_iharada', name: 'いはら田 (Iharada)', category: 'OMNI',
    lat: 34.990543, lng: 135.732151, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses with sushi, a fried dish, miso-marinated items and red miso soup; no gluten information (official menu; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include hamo, soft-shelled turtle, crab, aged Tajima beef and dashi throughout (official menu; 2025–2026 reviews).',
    hours_raw: '17:30–22:00, last entry 20:00; closed Sunday (official site); Tabelog adds irregular closures and opening on holidays that fall on Sunday. Reservations by phone or TableCheck; same-day cancellations are charged 100% (official site; Tabelog). Courses ¥12,000, ¥15,000, ¥20,000 before tax and 10% service (¥14,520, ¥18,150, ¥24,200 all-in) (official site). Children from elementary-school age, eating the adult course (official site). A 6 m single-plank hinoki counter of 9–10 seats and a second-floor room for 2–20; non-smoking at the table, with a smoking corner (official site; Tabelog). Cards accepted (official site). On Nishioji-dori 150 m north of Shichijo, west side; 1 min from the Nishioji-Shichijo bus stop, about 10 min by taxi from Kyoto Stn (official site). Opened 5 October 2002 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishioji-dori north of Shichijo, west Kyoto — 10 min by taxi from Kyoto Stn',
    cuisine: '"New washoku", traditional and innovative: about 10–11 courses from fish bought at the market each morning, vegetables from the house’s own farm in Ohara, aged Tajima beef from 中勢似 (carcass-aged on the bone), hamo, soft-shelled turtle, matsutake and crab (official site) · courses ¥14,520, ¥18,150 and ¥24,200 all-in (official site) · a sample ¥15,000 menu: hamo, sea urchin and kumiage yuba starter; soft-shelled-turtle egg tofu soup with matsutake; whelk and botan shrimp, straw-smoked bonito; mackerel sushi; a hassun mid-course; aged Tajima beef fillet; crab vinegared dish; oysters with Kujo negi purée; rice with salmon roe and red miso; sudachi sherbet and a mascarpone monaka (official menu) · reviewers single out the tuna and mackerel sushi, the soft-shelled turtle pot and the ice-cream monaka (2025–2026 reviews)',
    website: SITE, gmaps: gm('いはら田 京都 西大路七条'), menu_url: MENU,
    notes: "[Kaiseki · Nishioji-Shichijo, aged beef and the house farm] A white, modern kaiseki house on Nishioji, a short taxi ride from Kyoto Station, with a 6 m single-plank hinoki counter and calligraphy on the walls: 10–11 courses of morning-market fish, vegetables from its own Ohara farm and carcass-aged Tajima beef, with the hassun served mid-course, mackerel sushi, soft-shelled turtle and an ice-cream monaka to finish. Courses ¥14,520–24,200 all-in. Regulars return for years; one March 2026 diner felt rushed by the schedule. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef and okami (unnamed on the pages read)'], origin: null,
      background: 'Per the official site: fish bought at the market every morning; vegetables grown at いはら田農園 in Ohara; aged Tajima beef specially bought from 中勢似, carcass-aged on the bone; calligraphy by 山田秋邨 throughout the white interior; a greeting from the okami on its fifteenth year; press from 2003 (All About Japan, Gainer) to 2008 (あまから手帖). Opened 5 October 2002 (Tabelog). Reviewers describe the head chef seeing guests off (March 2026), an eight-time regular (February 2026), and an earlier complaint about the pace that a December 2025 diner found fixed.',
      philosophy: 'Per the official site: traditional yet innovative "new washoku", with the cook free to combine whatever the season allows.',
      specialty: 'Aged Tajima beef; mackerel sushi; hassun.',
      anecdotes: [
        { text: '"This time, both the atmosphere and the pace have changed dramatically … and I was very satisfied." — December 2025.', source: R + 'B518992068/' },
        { text: '"I also love the ice cream monaka that they serve for dessert here." — April 2026.', source: R + 'B455196276/' },
        { text: 'A March 2026 diner who arrived late had to rush the meal to fit the restaurant’s schedule.', source: R + 'B530305134/' },
        { text: '"The top sirloin, aged for two months, allowed me to fully enjoy the rich taste of the red meat." — November 2026.', source: R + 'B538644572/' },
      ],
      japanese_sources_summary: '公式サイト (iharada.jp): 御料理 いはら田、下京区西七条比輪田町26 (西大路七条上る150m西側)、17:30〜22:00 (最終入店20:00)、日曜定休、カウンター9席と2Fの個室 (2〜20名)、喫煙コーナーあり、カード可、毎朝市場で仕入れる魚、大原のいはら田農園の野菜、熟成但馬牛のヒレ (中勢似から仕入れる枝肉熟成)、鱧、すっぽん、松茸、カニ、長さ6mの一枚板の檜のカウンター、書道家 山田秋邨の書、女将のごあいさつ、コース12,000円 (税サ込14,520円)・15,000円 (18,150円)・20,000円 (24,200円)、約10〜11品、当日キャンセルは100%、小学生以上、メディア掲載 (2003〜2008年)、TableCheck。食べログ (店舗会員): 日本料理、月〜土 17:30〜22:00、日曜 (祝日除く)・不定休、30席 (1階カウンター10、2階テーブル20)、サービス料10%、禁煙、2002年10月5日オープン。口コミ (2025年12月〜2026年11月、英語): 鯖寿司と鮪の握り、すっぽん鍋、八寸、熟成肉、アイス最中、急かされたとの声 (2026年3月)。',
      confidence: 'medium', sources: [TB, SITE, MENU, ABOUT, R + 'B228718361/', R + 'B453604822/', R + 'B455196276/', R + 'B518845016/', R + 'B518992068/', R + 'B523897629/', R + 'B525550141/', R + 'B530305134/', R + 'B531149227/', R + 'B538644572/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese pages on the official site; book via TableCheck; tell the taxi "Nishioji Shichijo, 150 m north".' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西七条比輪田町26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (staff-maintained); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.990543, 135.732151); cross-checked: GSI 京都府京都市下京区西七条比輪田町26番地 (lot) 20 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site (before tax and 10% service; all-in prices in the note).', last_checked: TODAY, items: [
      it('12,000円コース', '', 'Kaiseki course', '¥12,000', 'Course', 'ask', 'no', '¥14,520 with tax and service.', 'course_12000'),
      it('15,000円コース', '', 'Kaiseki course', '¥15,000', 'Course', 'ask', 'no', '¥18,150 with tax and service.', 'course_15000'),
      it('20,000円コース', '', 'Kaiseki course', '¥20,000', 'Course', 'ask', 'no', '¥24,200 with tax and service.', 'course_20000'),
    ] }, {
    cuisine: '伝統的で革新的な「新しい和食」: 毎朝市場で仕入れる魚、大原の自家農園の野菜、中勢似の枝肉熟成の熟成但馬牛、鱧、すっぽん、松茸、カニで約10〜11品 (公式サイト)・コースは税サ込14,520円、18,150円、24,200円 (公式サイト)・15,000円の一例: 鱧二枚落とし、雲丹、汲み上げ湯葉の先附、鼈玉子豆腐と松茸の椀、ツブ貝と牡丹海老、藁燻の戻鰹のお造り、鯖寿司、コース中ほどの八寸、熟成但馬牛ヒレの焼物、渡蟹の酢の物、真牡蠣と九条葱の摺流しの焚合、筋子の白御飯と赤出汁、酢橘のシャーベットとマスカルポーネの最中 (公式メニュー)・口コミでは鮪と鯖の寿司、すっぽん鍋、アイス最中が人気 (2025〜2026年の口コミ)',
    neighborhood: '西大路七条の北、京都の西。京都駅からタクシーで10分',
    gf_detail: '要確認。寿司、揚物、味噌漬け、赤出汁のある会席。グルテンの情報はない (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鱧、すっぽん、蟹、熟成但馬牛、だしの会席 (公式メニュー、2025〜2026年の口コミ)。',
    notes: '[会席・西大路七条、熟成肉と自家農園] 京都駅からタクシーで少しの西大路にある、白を基調にしたモダンな会席。長さ6mの一枚板の檜のカウンターと壁の書。毎朝の市場の魚、大原の自家農園の野菜、枝肉熟成の但馬牛で10〜11品、八寸はコースの中ほどに。鯖寿司、すっぽん、締めのアイス最中。コースは税サ込14,520〜24,200円。長年の常連も多い一方、2026年3月の客は時間に急かされたと書いている。日曜休み。',
  });
}

// ================================================================ 燕
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26022259/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_en_hachijo', name: '燕 (En)', category: 'OMNI',
    lat: 34.983081, lng: 135.760105, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte kappo: sashimi, tempura and fried dishes, nama-fu dengaku, miso-marinated scallops, mackerel sushi, duck and truffle noodles; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, fish, meat and dashi dishes; even the appetiser has yuba with dashi jelly (2026 reviews).',
    hours_raw: '17:30–23:00, Monday to Saturday; closed Sunday (Tabelog). Reservations accepted and needed — reviewers took three to five tries to get in; many regulars (Tabelog; June–September 2026). An appetiser charge of about ¥900, varying with the season (Tabelog). Cash only (Tabelog). 12 seats: a counter and one table; non-smoking (Tabelog; October 2026). A small, easy-to-miss sign; two doors from a Daily Yamazaki, 5 min walk from Kyoto Stn’s Hachijo exit — Tabelog warns that Google Maps puts it in the wrong place (Tabelog; October 2026). Opened 18 April 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Kujo, south of Kyoto Stn — 5 min walk from the Hachijo exit',
    cuisine: 'Kappo counter with a long à la carte menu for drinkers — rare among Kyoto counters (August 2026) · assorted sashimi (shima-aji, isaki, sea urchin with salt and nori, Biwa trout, toro hidden under shiso) (June–July 2026) · seasonal plates: hamo, grilled ayu done before you, grilled water eggplant, white asparagus and corn fritters, beef cutlet, simmered kinmedai, tuna cheek, grilled tuna collar, white shrimp and lily-bulb tempura, figs with walnut miso, nama-fu dengaku, miso-marinated scallops, duck and truffle noodles, mackerel sushi (June–October 2026) · dishes marked on the menu as suited to solo diners (June 2026) · sake chosen to match, highballs, plum water (2026 reviews) · bills about ¥9,000–15,000 (2026 reviews)',
    website: null, gmaps: gm('燕 京都 八条口'), menu_url: null,
    notes: "[Kappo · Kyoto Station Hachijo, an à la carte counter] A 12-seat counter a few minutes south of Kyoto Station, behind a sign so small that Tabelog warns Google Maps has it wrong: one of the few Kyoto counters where you order à la carte, from a long seasonal list — sashimi with sea urchin and toro, ayu grilled before you, white shrimp and lily-bulb tempura, simmered kinmedai, duck and truffle noodles. The owner's warm, careful service is praised as much as the food. Bills about ¥9,000–15,000; cash only; book well ahead. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef and owner (a woman, front of house), unnamed in the sources'], origin: null,
      background: 'Opened 18 April 2013 (Tabelog). Reviewers in 2026 describe a chef working in view across the counter, an owner whose attentive service and choice of words they single out, and women staff who are kind from the moment of booking; many regulars, and bookings that take several tries.',
      philosophy: null, specialty: 'À la carte seasonal plates; sashimi; tempura.',
      anecdotes: [
        { text: '"After trying three times, I finally managed to make a reservation." The menu marks dishes suited to solo diners. — June 2026.', source: R + 'B530789187/' },
        { text: 'A July 2026 diner most wanted to stress the owner’s service — exceptionally attentive, with impressive choice of words — and paid ¥9,200 for one.', source: R + 'B531460858/' },
        { text: '"Finally got to the restaurant I\'ve always wanted to visit! … it was my fifth attempt!" — September 2026.', source: R + 'B538387328/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、南区東九条西山王町15-2、京都駅八条口から5分、Daily Yamazaki の2軒隣 (Google マップの位置は違う)、月〜土 17:30〜23:00、日曜休み、予約可、お通し約900円 (季節変動)、12席、カード・電子マネー・QR 不可、禁煙、2013年4月18日オープン。口コミ (2026年6〜10月、英語): アラカルトのカウンター、お造りの盛り合わせ (しまあじ、いさき、ウニ、Biwa trout、トロ)、鱧、目の前で焼く鮎、白海老と百合根の天ぷら、金目鯛の煮付け、鴨とトリュフの麺、鯖寿司、生麩田楽、一人客向けの印、常連が多い、予約に3〜5回、女将の気配り、1人9,000〜15,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B530547853/', R + 'B530575099/', R + 'B530789187/', R + 'B531460858/', R + 'B532669653/', R + 'B534651937/', R + 'B534880968/', R + 'B536900506/', R + 'B538159225/', R + 'B538387328/'] },
    cultural_comfort: { level: 'japanese', note: 'À la carte Japanese menu at a small counter; book by phone well ahead; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町15-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.983081, 135.760105); cross-checked: GSI 京都府京都市南区東九条西山王町15番地 (lot) 18 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531460858/', TB],
    price_note: 'No menu prices read; a July 2026 bill was ¥9,200 for one; appetiser charge about ¥900 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', '', 'sashimi'),
      it('', '', 'White shrimp and lily-bulb tempura', '', 'Fried', 'no', 'no', 'Autumn 2026.', 'shiraebi_tempura'),
      it('', '', 'Duck and truffle noodles', '', 'Noodles', 'no', 'no', 'June 2026.', 'duck_truffle_noodles'),
    ] }, {
    cuisine: '酒飲みのための長いアラカルトのある割烹カウンター。京都のカウンターでは珍しい (2026年8月)・お造りの盛り合わせ (しまあじ、いさき、塩と海苔のウニ、Biwa trout、大葉の下のトロ) (2026年6〜7月)・季節の皿: 鱧、目の前で焼く鮎、焼き水茄子、白アスパラととうもろこしの揚げ物、牛カツ、金目鯛の煮付け、まぐろのほほ肉、まぐろのカマ焼き、白海老と百合根の天ぷら、いちじくのくるみ味噌、生麩田楽、帆立の味噌漬け、鴨とトリュフの麺、鯖寿司 (2026年6〜10月)・一人客向けの印のついた料理 (2026年6月)・料理に合わせた日本酒、ハイボール、青梅のシロップ水 (2026年の口コミ)・会計は1人9,000〜15,000円ほど (2026年の口コミ)',
    neighborhood: '京都駅の南、東九条。八条口から徒歩5分',
    gf_detail: '要確認。アラカルトの割烹: お造り、天ぷらや揚げ物、生麩田楽、帆立の味噌漬け、鯖寿司、鴨とトリュフの麺。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。お造り、魚、肉、だしの料理。お通しにも湯葉とだしのジュレ (2026年の口コミ)。',
    notes: '[割烹・京都駅八条口、アラカルトのカウンター] 京都駅の南、数分の12席のカウンター。看板が小さく、食べログも Google マップの位置は違うと注意している。京都のカウンターでは珍しくアラカルトで頼め、季節の品書きは長い: ウニやトロのお造り、目の前で焼く鮎、白海老と百合根の天ぷら、金目鯛の煮付け、鴨とトリュフの麺。料理と同じくらい、女将のあたたかく細やかなもてなしが評判。1人9,000〜15,000円ほど、現金のみ、早めの予約を。日曜休み。',
  });
}

save();
