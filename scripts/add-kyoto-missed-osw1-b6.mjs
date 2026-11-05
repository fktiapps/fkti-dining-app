// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 6.
//   + 麺や 轍 木屋町店 Menya Wadachi Kiyamachi (small late-night ramen counter on Kiyamachi; since 2023)
//   + 京都焼鳥製作所 Kyoto Yakitori Seisakujo (Kyo Akajidori yakitori izakaya off Shijo; since 2015)
//   + ゆたか Yutaka (Gion steakhouse in a former ochaya, founded 1962; Steak WEST Tabelog 100 2022, 2024, 2025)
//   + リストランテ野呂 Ristorante Noro (Italian-yoshoku in a machiya near Nijo Stn; Italian WEST Tabelog 100 2021, 2025)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26039360, 26025122)
//   and from `next notable 200` (26001272, 26029064). None is in data/kyoto.json: grep by name (轍/Wadachi, 焼鳥製作所,
//   ゆたか/Yutaka, 野呂/Noro) and address (鍋屋町209, 足袋屋町324, 祇園町南側 四条花見小路下ル, 西ノ京職司町67) found none.
//   Nearest existing pins: kyoto_wasai_taka_kiyamachi 11.4 m from Wadachi (same lot 鍋屋町209; Wasai Taka's address_ja is
//   "京都府京都市中京区鍋屋町209-3 木屋町岡本ビル 1F"); kyr_yamanoya 30 m from Yakitori Seisakujo; kyoto_gion_kinana_honten
//   63 m from Yutaka; kyo_au_petit_foreau 91 m from Noro. None within 3 m.
//   Group checks: Wadachi has a shop in Kokura (a November 2025 review); no branch list found. Yutaka has two shops, Gion
//   and Ginza (official site) — a small group, none in data. Noro's chef worked at Yoshoku Ogata (in data as
//   mp_yoshoku_ogata, a different concept), and one review calls Noro a sister restaurant without naming the other.
//   Ramen: Wadachi is drafted without a ramen block — the reviews give soup and noodles but not all six profile
//   dimensions, so a block would be partly invented.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麺や 轍 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039360/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_menya_wadachi_kiyamachi', name: '麺や 轍 木屋町店 (Menya Wadachi Kiyamachi)', category: 'OMNI',
    lat: 35.005258, lng: 135.770625, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in soy-sauce and salt broths, mazesoba, kara-age and fried rice (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: back-fat soy and chicken-based broths with chashu (2025–2026 reviews).',
    hours_raw: 'Tabelog lists no hours. Reviewers describe a late-night shop: busy at about 4:00 (February 2025), "open until 9 AM" (May 2025), "open until the morning" (October 2025); one reviewer came at about 15:00 (August 2026). No reservations (Tabelog). Cash only (Tabelog; November 2025, October 2026). 11 seats (7 counter, 2 table) (Tabelog). A November 2025 reviewer found the owner working alone on a busy Friday night; e-cigarettes allowed inside (November 2025). Opened 1 May 2023 (Tabelog). 226 m from Gion-Shijo Stn (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 226 m from Gion-Shijo Stn',
    cuisine: 'Late-night ramen counter for the end of a night out (2025–2026 reviews) · original back-fat soy sauce ramen ¥950–960 (November 2025 – October 2026), light despite the fat, thin straight noodles · lemon salt ramen ¥900 (February 2025) · curry mazesoba with chicken broth and egg yolk · spicy ramen, "Yokozuna" ramen, carbonara noodles · hanasaki chashu +¥350, fried rice ¥500, mini kara-age rice bowl (2025 reviews)',
    website: null, gmaps: gm('麺や 轍 木屋町店'), menu_url: null,
    notes: '[Ramen · Kiyamachi, a late-night counter] A small ramen counter in the middle of Kiyamachi that reviewers find open deep into the night and morning, for a last bowl after drinking. The staple is the back-fat soy sauce ramen (¥960 in October 2026) — lighter than it looks, with thin straight noodles — alongside a lemon salt ramen and curry mazesoba. Reviews are mixed: some praise the kara-age bowl and the value, while a November 2025 visitor, who knew the Kokura shop, found the fried rice cold and the ramen bland on a busy night. Cash only. Hours are not published.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; a November 2025 reviewer saw the owner working alone)'], origin: null,
      background: 'A November 2025 reviewer had earlier eaten at the shop\'s Kokura branch and found it better. Tabelog gives the opening as 1 May 2023.',
      philosophy: null, specialty: 'Back-fat soy sauce ramen; lemon salt ramen.',
      anecdotes: [
        { text: '"When I arrived around 4 AM, it was quite busy." — February 2025.', source: R + 'B504190853/' },
        { text: 'A November 2025 visitor ordered back-fat soy sauce ramen (¥950), hanasaki chashu (¥350) and fried rice (¥500), found the rice cold and the ramen under-seasoned, and allowed that the owner was alone on a busy Friday.', source: R + 'B518057492/' },
        { text: 'An October 2025 reviewer called the mini kara-age rice bowl well made, and noted that the small room fills with people who have just finished drinking, which explains some low ratings.', source: R + 'B515836681/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 轍 木屋町店、ラーメン、中京区鍋屋町209、祇園四条駅から226m、営業時間の記載なし、予約不可、11席 (カウンター7、テーブル2)、カード・電子マネー・QR 不可、2023年5月1日オープン。口コミ (2025〜2026年、英語): 深夜から朝まで営業、背脂醤油ラーメン950〜960円、レモン塩ラーメン900円、カレーまぜそば、唐揚げミニ丼、炒飯500円、現金のみ、Kokura の店。',
      confidence: 'low', sources: [TB, R + 'B504190853/', R + 'B506523104/', R + 'B515836681/', R + 'B517828242/', R + 'B518057492/', R + 'B519172844/', R + 'B519740015/', R + 'B520296035/', R + 'B534418918/', R + 'B537412568/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; small counter; hours not published.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町209',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing without hours; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005258, 135.770625); cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 38m; same lot as kyoto_wasai_taka_kiyamachi (鍋屋町209-3), 11 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537412568/', R + 'B504190853/', R + 'B518057492/'],
    price_note: 'No menu read; prices from February 2025 – October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original back-fat soy sauce ramen', '¥960', 'Ramen', 'no', 'no', 'October 2026 (¥950 in November 2025).', 'seabura_shoyu'),
      it('', '', 'Lemon salt ramen', '¥900', 'Ramen', 'no', 'no', 'February 2025.', 'lemon_shio'),
      it('', '', 'Hanasaki chashu (topping)', '+¥350', 'Toppings', '', 'no', 'November 2025.', 'hanasaki_chashu'),
      it('', '', 'Fried rice', '¥500', 'Sides', 'ask', 'no', 'November 2025.', 'fried_rice'),
    ] }, {
    cuisine: '飲んだあとの締めの深夜のラーメンのカウンター (2025〜2026年の口コミ)・オリジナルの背脂醤油ラーメン950〜960円 (2025年11月〜2026年10月)、見た目より軽く、細いストレート麺・レモン塩ラーメン900円 (2025年2月)・鶏ガラと卵黄のカレーまぜそば・辛いラーメン、「Yokozuna」ラーメン、カルボナーラ麺・hanasaki チャーシュー+350円、炒飯500円、唐揚げのミニ丼 (2025年の口コミ)',
    neighborhood: '四条の北の木屋町。祇園四条駅から226m',
    gf_detail: 'グルテンフリーではない。醤油や塩のスープの小麦の麺、まぜそば、唐揚げ、炒飯 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。背脂醤油や鶏のスープにチャーシュー (2025〜2026年の口コミ)。',
    notes: '[ラーメン・木屋町、深夜のカウンター] 木屋町の真ん中にある小さなラーメンのカウンター。口コミによれば深夜から朝まで開いていて、飲んだあとの一杯に。定番は背脂醤油ラーメン (2026年10月は960円) で、見た目より軽く細いストレート麺、ほかにレモン塩ラーメンやカレーまぜそば。評価は分かれ、唐揚げ丼や値ごろ感をほめる声がある一方、Kokura の店を知る2025年11月の客は、混んだ夜に炒飯が冷たくラーメンも味が薄かったという。現金のみ。営業時間は公開されていない。',
  });
}

// ================================================================ 京都焼鳥製作所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025122/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yakitoriseisakusyo.com/'; const MENU = SITE + 'menu.html'; const COURSE = SITE + 'party.html';
  const H = day(['17:00', '24:00']); const HL = day(['17:00', '01:00']);
  put({
    id: 'kyoto_yakitori_seisakujo', name: '京都焼鳥製作所 (Kyoto Yakitori Seisakujo)', category: 'OMNI',
    lat: 35.002609, lng: 135.766123, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori comes with salt by default (Guérande salt), but tare, kara-age with soy marinade, chicken nanban and spring rolls are also on the menu; no gluten information (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan options, but the official menu is built on chicken; grilled vegetables appear in the courses (Tabelog; official site).',
    hours_raw: 'Sunday–Thursday 17:00–24:00 (last order 23:00); Friday, Saturday and the day before a holiday 17:00–1:00 (last order 24:00); irregular closures, posted on the site (official site; Tabelog). Reservations online or by phone; same-day courses possible (official site; March 2026). ¥330 service charge (Tabelog). Seats: 53 on the official site (6 counter, 14 table, 20 in a sunken-kotatsu room, two semi-private rooms), 60 on Tabelog; non-smoking (Tabelog). Cards, PayPay and Alipay (Tabelog). Menus in English, Chinese and Korean, with staff who speak them (Tabelog). 2 min from Kyoto Kawaramachi Stn exit 10 (official site). Opened 25 February 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: HL, 5: HL, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Yakitori izakaya using only female Kyo Akajidori chickens, grilled over binchotan with Guérande salt (official site) · aburi-yaki of thigh ¥1,320, neck ¥880, breast ¥968, harami ¥748, with yuzu kosho · skewers: thigh ¥352, negima, neck, breast with skin, bonjiri ¥275, white liver ¥330, sasami ¥253, tsukune ¥330 in four styles (with Ranno egg yolk, cheese, salt or grated daikon) · beef-tendon doteyaki ¥825, kara-age with grated daikon and ponzu ¥715, chicken-stock dashimaki ¥715, iburi-gakko potato salad ¥528, oyakodon ¥880 · chicken nanban · courses with all-you-can-drink ¥4,000–7,000, chicken hot-pot course ¥6,000 (book by the day before) · sake, e.g. Juyondai (January 2026)',
    website: SITE, gmaps: gm('京都焼鳥製作所'), menu_url: MENU,
    notes: '[Yakitori · Shijo Kawaramachi, Kyo Akajidori over binchotan] A retro-modern yakitori izakaya down a narrow "eel\'s bed" building a couple of minutes from Kawaramachi Stn, using only female Kyo Akajidori chickens grilled over binchotan and salted with Guérande salt. Start with the aburi-yaki (thigh ¥1,320), then skewers from ¥253 — the tsukune with Ranno egg yolk and the white liver (when it hasn\'t sold out) are favourites — and finish with the oyakodon, which one regular calls the best anywhere. Courses with all-you-can-drink from ¥4,000. Open to midnight, to 1:00 on Friday and Saturday; ¥330 service charge.',
    chef_bio: { chef_name: null, roles: ['Kitchen unnamed; the official menu says the beef-tendon doteyaki has been made since training days in Osaka'], origin: null,
      background: 'Per the official site: the restaurant uses only female Kyo Akajidori, grills over binchotan for a crisp outside and juicy inside, and settled on French Guérande salt after a long search; yakitori is served with salt by default; the chicken is grilled before it goes into the oyakodon, made with Ranno eggs. Tabelog gives the opening as 25 February 2015.',
      philosophy: null, specialty: 'Kyo Akajidori aburi-yaki and yakitori; oyakodon.',
      anecdotes: [
        { text: '"The oyakodon (chicken and egg rice bowl) here is on another level—absolutely delicious!" — January 2026.', source: R + 'B521514403/' },
        { text: 'A February 2026 regular from the early days came back for the white liver at 21:30 on a Friday and found it sold out.', source: R + 'B522241595/' },
        { text: 'A May 2026 diner sat at the back counter facing the grill, which is closed in by clear walls so no smoke reaches the room.', source: R + 'B529370748/' },
        { text: 'A June 2026 diner found the yakitori varied and good but some orders were slow or missed.', source: R + 'B531232793/' },
      ],
      japanese_sources_summary: '公式サイト (yakitoriseisakusyo.com): 京都焼鳥製作所 (きょうとやきとりせいさくしょ)、下京区足袋屋町324、京赤地どりの雌のみ、備長炭、ゲランドの塩、焼き鳥は基本的に塩、炙り焼き (もも1,320円、せせり880円、胸とろ968円、鶏ハラミ748円)、串 (もも352円、ねぎま・せせり・皮つき胸・ぼんじり275円、白肝330円、ささみ253円、つくね330円)、牛すじどて焼き825円 (大阪での修業時代から)、唐揚げおろしポン酢715円、鶏スープだし巻き715円、いぶりがっこポテトサラダ528円、親子丼880円 (蘭王)、飲み放題付きコース4,000〜7,000円、鍋コース6,000円 (前日までに予約)、日〜木17:00〜24:00、金土17:00〜25:00、不定休、53席。食べログ: 焼き鳥・鶏料理・居酒屋、サービス料330円、60席、禁煙、カード・PayPay・Alipay 可、英語・中国語・韓国語メニュー、ヴィーガンメニューあり、2015年2月25日オープン。',
      confidence: 'medium', sources: [TB, SITE, MENU, COURSE, R + 'B520885163/', R + 'B521514403/', R + 'B522241595/', R + 'B522973601/', R + 'B523045496/', R + 'B526088408/', R + 'B526705420/', R + 'B529370748/', R + 'B529599934/', R + 'B531232793/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus and staff (Tabelog); many guests from abroad (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区足袋屋町324',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (closure notice for 9 November) and Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.002609, 135.766123); cross-checked: GSI 京都府京都市下京区足袋屋町324番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, COURSE],
    price_note: 'Official menu and course pages (tax included, undated).', last_checked: TODAY, items: [
      it('もも焼', '', 'Aburi-yaki of chicken thigh', '¥1,320', 'Aburi-yaki', 'ask', 'no', 'With yuzu kosho.', 'momo_yaki'),
      it('もも', '', 'Thigh skewer', '¥352', 'Yakitori', 'ask', 'no', 'Salt by default.', 'momo'),
      it('つくね', '', 'Tsukune (Ranno egg yolk, cheese, salt or grated daikon)', '¥330', 'Yakitori', 'ask', 'no', '', 'tsukune'),
      it('白肝', '', 'White liver skewer', '¥330', 'Yakitori', 'ask', 'no', 'Can sell out.', 'shirogimo'),
      it('いぶりがっこポテトサラダ', '', 'Iburi-gakko potato salad', '¥528', 'Small plates', 'ask', 'ask', '', 'iburigakko_potesara'),
      it('親子丼', '', 'Oyakodon', '¥880', 'Rice', 'ask', 'no', 'Ranno eggs.', 'oyakodon'),
      it('', '', 'Course with 150-minute all-you-can-drink (14 dishes)', '¥6,000', 'Courses', 'ask', 'no', 'From two people.', 'course_6000'),
    ] }, {
    cuisine: '京赤地どりの雌だけを備長炭で焼き、ゲランドの塩で味付けする焼き鳥の居酒屋 (公式サイト)・炙り焼き: もも1,320円、せせり880円、胸とろ968円、ハラミ748円、柚子胡椒で・串: もも352円、ねぎま、せせり、皮つき胸、ぼんじり275円、白肝330円、ささみ253円、つくね330円 (蘭王の黄身の月見、チーズ、塩、おろしの4種)・牛すじどて焼き825円、唐揚げおろしポン酢715円、鶏スープだし巻き715円、いぶりがっこポテトサラダ528円、親子丼880円・チキン南蛮・飲み放題付きコース4,000〜7,000円、鶏鍋のコース6,000円 (前日までに予約)・日本酒、たとえば Juyondai (2026年1月)',
    neighborhood: '四条の南。京都河原町駅から徒歩2分',
    gf_detail: '要確認。焼き鳥は基本的に塩 (ゲランドの塩) だが、たれ、醤油の下味の唐揚げ、チキン南蛮、春巻きもある。グルテンの情報はない (公式メニュー)。',
    vegan_detail: '要確認。食べログはヴィーガンメニューありとするが、公式メニューは鶏が中心。コースには焼き野菜もある (食べログ、公式サイト)。',
    notes: '[焼き鳥・四条河原町、京赤地どりを備長炭で] 京都河原町駅から2分、奥に長い「うなぎの寝床」のレトロモダンな焼き鳥の居酒屋。京赤地どりの雌だけを備長炭で焼き、ゲランドの塩で。まずは炙り焼き (もも1,320円)、串は253円から。蘭王の黄身のつくねや白肝 (売り切れでなければ) が人気で、締めの親子丼はどこよりもおいしいという常連も。飲み放題付きコースは4,000円から。0時まで、金土は1時まで、サービス料330円。',
  });
}

// ================================================================ ゆたか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001272/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yutaka-steak.com/'; const GION = SITE + 'gion/'; const CONCEPT = SITE + 'concept/';
  const H = day(['11:30', '14:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_gion_yutaka_steak', name: 'ゆたか (Yutaka)', category: 'MOM_AND_POP',
    lat: 35.002405, lng: 135.774977, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses pair the steak with carpaccio, soup, salad with house dressing, garlic rice and bread; the steak itself is steamed on garlic on the griddle; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steakhouse whose courses centre on wagyu fillet, with seafood starters (official site).',
    hours_raw: 'Lunch 11:30–13:30 (last order); dinner from 17:30 (Tabelog lists 17:30–22:30, last order 22:00); closed Sunday and public holidays, and irregularly (Tabelog; official site). Reservation only (Tabelog), by phone or TableCheck (official site). Lunch steak course ¥8,800; dinner courses from ¥32,000; prices include service and tax (official site). 24 seats: a 10-seat counter facing the kitchen and a small garden, a private room for 6, and an upstairs zashiki with a stage for parties with geiko and maiko (official site; Tabelog). Non-smoking; cards accepted (Tabelog). Gion Machi Minamigawa, south of Shijo off Hanamikoji; about 10 min from Gion-Shijo Stn (Tabelog). Moved here from 末吉町 on 7 May 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Machi Minamigawa, south of Shijo off Hanamikoji — 10 min from Gion-Shijo Stn',
    cuisine: 'Gion steakhouse founded in 1962, serving only the centre of domestic black wagyu fillet, cut thick and steamed slowly over garlic on the griddle (official site) · lunch steak course ¥8,800: hors d\'oeuvre, salad, 80 g steak, bread, dessert; lunch hamburg steak of black wagyu (July 2025) · dinner: special steak course ¥32,000 and Yutaka standard course ¥38,000, each with 100 g Chateaubriand and garlic rice; Yutaka special course ¥66,000 with tartare, abalone and Beluga caviar, sirloin, hamburg steak and a fillet katsu sandwich (official site) · à la carte starters from ¥6,600 (seafood carpaccio) to Beluga caviar ¥66,000; consommé ¥1,800 (official site) · pudding to finish · mostly French wine, with a sommelier (official site)',
    website: GION, gmaps: gm('祇園ゆたか ステーキ'), menu_url: GION,
    notes: '[Steak · Gion, a 1962 steakhouse in a former teahouse] A Gion steakhouse in a remodelled ochaya south of Shijo, entered under a noren and red lantern, with a vermilion counter that faces the griddle and a small garden. The house steak is the heart of the black wagyu fillet, cut thick and steamed slowly over garlic so it is soft enough to barely need chewing; it comes with garlic rice and a triangle of pudding. The lunch course (¥8,800, 80 g fillet) is the way in; dinner courses start at ¥32,000. Upstairs there is a zashiki with a stage for parties with geiko and maiko. Reservation only; closed Sunday.',
    chef_bio: { chef_name: 'Mamoru Takada (official site; the kanji is not given)', roles: ['Second-generation owner-chef (official site: 二代目オーナーシェフ)'], origin: null,
      background: 'Per the official site: Steak House Yutaka was founded in 1962 (Showa 37); following the founder, the father, Takada entered cooking after high school, was put in charge of the Gion shop at 24 and became owner young; the father\'s teaching "cooking is conversation" is kept; the company also runs Yutaka Ginza in Tokyo. A June 2025 review gives the owner-chef\'s name as "Ei Takada"; a September 2026 review (in Japanese) gives 創業62年 and saw the owner and one young cook running the room. A June 2026 reviewer says Kazuo Inamori and family were regulars in the founder\'s time. Tabelog Steak WEST "Tabelog 100" 2022, 2024 and 2025.',
      philosophy: 'Per the official site: the joy of food that comes out of conversation — reading each guest and recommending what suits that day, from the composition of the meal to the doneness of the meat.',
      specialty: 'Steamed black wagyu fillet (Chateaubriand); garlic rice.',
      anecdotes: [
        { text: 'A September 2026 lunch guest (writing in Japanese) found the room to be a business-entertaining restaurant of an older era, run that day by the owner and one young cook, and had the ¥8,800 lunch course.', source: R + 'B233369835/' },
        { text: 'A June 2026 diner had 150 g of Chateaubriand while a companion over 70 ordered 300 g and finished it.', source: R + 'B485503055/' },
        { text: 'A March 2026 regular of about ten years booked the second-floor private room for a group of eight.', source: R + 'B524600122/' },
      ],
      japanese_sources_summary: '公式サイト (yutaka-steak.com): 祇園ゆたか、東山区祇園町南側 四条花見小路下ル四筋目東入ル、かつてのお茶屋の京町家を改築、1階カウンター10席と個室6席、2階に舞台のあるお座敷 (芸妓・舞妓をまじえた宴席)、昼8,800円〜 (11:30〜L.O.13:30)、夜32,000円〜 (17:30〜)、サービス料・消費税込み、カード可、特選ステーキコース32,000円、ゆたかスタンダードコース38,000円、ゆたかスペシャルコース66,000円、ステーキランチコース8,800円、国産黒毛和牛のフィレの芯の部分のみ、鉄板に敷いたニンニクの上で蒸し焼き、フランス産中心のワイン。オーナーシェフ Mamoru Takada: 昭和37年創業のステーキハウスゆたかの二代目、先代である父にならい高校卒業後から料理の世界へ、24歳で祇園店を任される、「料理は対話」。ゆたか銀座 (東京)。食べログ: ステーキ、完全予約制、24席、個室 (4人・6人)、日祝休み、2012年5月7日に末吉町西入から移転、ステーキ・鉄板焼き WEST 百名店 2022・2024・2025。',
      confidence: 'medium', sources: [TB, SITE, GION, CONCEPT, R + 'B233369835/', R + 'B485503055/', R + 'B501722119/', R + 'B502639125/', R + 'B508258177/', R + 'B509373546/', R + 'B516048875/', R + 'B519320531/', R + 'B519541691/', R + 'B524600122/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone or TableCheck; the counter faces the chef; an English page exists on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側 四条花見小路下ル四筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002405, 135.774977); the address has no lot (祇園町南側 四条花見小路下ル四筋目東入ル) and GSI matches only 祇園町南側 (74 m away), so the pin rests on the Tabelog point; nearest other record kyoto_gion_kinana_honten is 63 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [GION],
    price_note: 'Official Gion page (service and tax included, undated); contents and prices change with the season.', last_checked: TODAY, items: [
      it('ステーキランチコース', '', 'Steak lunch course (hors d\'oeuvre, salad, 80 g steak, bread, dessert)', '¥8,800', 'Lunch', 'ask', 'no', '', 'steak_lunch'),
      it('特選ステーキコース', '', 'Special steak course (100 g Chateaubriand, garlic rice)', '¥32,000', 'Dinner', 'ask', 'no', '', 'tokusen_course'),
      it('ゆたかスタンダードコース', '', 'Yutaka standard course (assorted hors d\'oeuvres, 100 g Chateaubriand)', '¥38,000', 'Dinner', 'ask', 'no', '', 'standard_course'),
      it('本日の魚介類のカルパッチョ', '', 'Carpaccio of the day\'s seafood', '¥6,600', 'Hors d\'oeuvres', 'ask', 'no', '', 'seafood_carpaccio'),
      it('コンソメスープ', '', 'Consommé', '¥1,800', 'Soup', 'ask', 'no', '', 'consomme'),
    ] }, {
    cuisine: '1962年創業の祇園のステーキハウス。国産黒毛和牛のフィレの芯だけを厚く切り、鉄板に敷いたニンニクの上でじっくり蒸し焼きに (公式サイト)・ステーキランチコース8,800円: オードブル、サラダ、ステーキ80g、パン、デザート。ランチは黒毛和牛のハンバーグも (2025年7月)・夜: 特選ステーキコース32,000円とゆたかスタンダードコース38,000円 (どちらもシャトーブリアン100gとガーリックライス)、タルタルステーキ、アワビとベルーガキャビア、サーロイン、ハンバーグ、フィレカツサンドのゆたかスペシャルコース66,000円 (公式サイト)・アラカルトのオードブルは魚介のカルパッチョ6,600円からベルーガキャビア66,000円まで、コンソメスープ1,800円 (公式サイト)・締めのプリン・フランス産中心のワイン、ソムリエあり (公式サイト)',
    neighborhood: '四条の南、花見小路を入った祇園町南側。祇園四条駅から徒歩10分',
    gf_detail: '要確認。コースはステーキにカルパッチョ、スープ、自家製ドレッシングのサラダ、ガーリックライス、パン。ステーキは鉄板のニンニクの上で蒸し焼き。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。黒毛和牛のフィレが中心のステーキハウスで、前菜は魚介 (公式サイト)。',
    notes: '[ステーキ・祇園、元お茶屋の1962年創業のステーキハウス] 四条の南、お茶屋だった町家を改築した祇園のステーキハウス。暖簾と赤い提灯をくぐると、鉄板と小さな庭に向いた朱色のカウンター。名物は黒毛和牛のフィレの芯を厚く切り、ニンニクの上でじっくり蒸し焼きにしたステーキで、驚くほどやわらかい。ガーリックライスと三角のプリンが続く。入口はランチコース (8,800円、フィレ80g)、夜のコースは32,000円から。2階には芸妓や舞妓をまじえた宴席のための舞台付きのお座敷も。完全予約制、日曜休み。',
  });
}

// ================================================================ リストランテ野呂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26029064/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ristorante-noro.com/';
  const H = day(['11:30', '13:30'], ['17:30', '20:30']);
  put({
    id: 'kyoto_ristorante_noro', name: 'リストランテ野呂 (Ristorante Noro)', category: 'MOM_AND_POP',
    lat: 35.011111, lng: 135.745812, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature is a breaded menchi-katsu with demi-glace, and handmade pasta features in most courses, but fish dishes, risotto and salads are also served and the kitchen takes requests (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Courses centre on fish, meat and egg pasta; the seasonal vegetable plate is the most plant-based dish reviewed, but its jelly is set with a dashi broth (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–13:30 and 17:30–20:30; closed Monday; hours may change (Tabelog). Reservations taken; lunch fills up, so book (Tabelog; July 2026). Lunch: menchi-katsu set ¥3,300 (August 2026); lunch course with soup, fish tasting, pasta, main, dessert and drink. Dinner course ¥10,000 (¥11,000 with tax) (October 2026); à la carte at night has no printed prices (July 2026). 12 counter seats on the ground floor (10 per an August 2026 review), with tables upstairs and in a separate building; non-smoking; JCB, AMEX and Diners only (Tabelog; 2026 reviews). 8 min from JR Nijo Stn; no parking (Tabelog). Opened 13 June 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinokyo, east of JR Nijo Stn — 8 min walk',
    cuisine: 'Italian-based yoshoku with Japanese touches, in a renovated machiya (2026 reviews) · signature menchi-katsu of Ozaki beef and Kofuku pork with demi-glace and balsamic (2026 reviews) · lunch: menchi-katsu set with soup, seasonal vegetable plate and drink ¥3,300 (August 2026); lunch course with chilled soup, a tasting of seasonal fish, handmade tagliolini, a choice of main and dessert · dinner course ¥10,000 plus tax: vegetable purée, seasonal fish tasting, Daisendori chicken involtini, sautéed sea bream, menchi-katsu and Tanba pork tonteki, Sicilian-style sardine spaghetti, dessert (October 2026) · à la carte: seafood platters, homemade prosciutto, risotto, pasta with your choice of sauce, Kamo eggplant dengaku with duck and tomato miso, wagyu steak · wine with a sommelier (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('リストランテ野呂 京都'), menu_url: null,
    notes: '[Italian yoshoku · Nijo, a menchi-katsu worth the trip] A renovated machiya a short walk from JR Nijo Stn where chef Noro — trained in Italy, then at Hotel Granvia Kyoto\'s La Risata and at Yoshoku Ogata — cooks Italian-based yoshoku with Japanese touches. The signature is a juicy menchi-katsu of Ozaki beef and Kofuku pork under demi-glace and balsamic; the menchi-katsu lunch set (¥3,300) comes with a soup and a vegetable plate that reviewers rave about. Dinner is a ¥10,000 course or à la carte with handmade pasta, risotto and the day\'s fish. Lunch fills up — book. Closed Monday.',
    chef_bio: { chef_name: 'Noro (surname only; owner-chef per July and August 2026 reviews)', roles: ['Owner-chef (July 2026 review: "Chef Noro, the owner"; August 2026: "The owner, Mr. Noro")'], origin: null,
      background: 'Per a July 2026 review: chef Noro trained in Italy, then worked at Hotel Granvia Kyoto\'s La Risata and at Yoshoku Ogata before opening Ristorante Noro in 2017 (Tabelog: 13 June 2017). Yoshoku Ogata is in data as mp_yoshoku_ogata. Another July 2026 reviewer calls Noro a sister restaurant of a place where no table was free, without naming it. The official site describes the shop as a kappo-like restaurant that serves "100 dishes for 100 guests", for ordinary days and special ones. Tabelog Italian WEST "Tabelog 100" 2021 and 2025.',
      philosophy: 'Per the official site: 「100人の方に、100様の料理でもてなす、割烹のようなレストラン」 — a restaurant like a kappo, serving each guest a dish made for that guest.',
      specialty: 'Menchi-katsu with demi-glace and balsamic; handmade pasta.',
      anecdotes: [
        { text: 'An August 2026 diner was seen off at the door by the owner, Mr. Noro, and found the welcome very friendly and warm.', source: R + 'B533546598/' },
        { text: 'An August 2026 regular, on a second visit, wrote at length about the chilled corn soup of Dake Kimi corn and a vegetable plate of beets, apple and blood-orange jelly set with dashi.', source: R + 'B527593433/' },
        { text: 'An August 2026 diner asked for both a seafood and a summer-vegetable risotto, and the kitchen made one with cream and one with tomato.', source: R + 'B533363174/' },
      ],
      japanese_sources_summary: '公式サイト (ristorante-noro.com): リストランテ野呂、「ふだんの日にも､特別な日にも。100人の方に、100様の料理でもてなす、割烹のようなレストラン。」、コースメニューと毎日の日替わりメニュー。食べログ: イタリアン・洋食、中京区西ノ京職司町67-14、JR二条駅から徒歩8分、火〜日 11:30〜13:30・17:30〜20:30、月曜休み、予約可、カウンター12席 (2階にテーブル)、禁煙、カード (JCB・AMEX・Diners)、ソムリエあり、2017年6月13日オープン、イタリアン WEST 百名店 2021・2025。口コミ (2026年7〜10月、英語): シェフの Noro はイタリアで修業し、Hotel Granvia Kyoto の La Risata と Yoshoku Ogata を経て開業、メンチカツのデミグラスとバルサミコ、メンチカツのセット3,300円、夜のコース10,000円 (税込11,000円)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B334288357/', R + 'B527593433/', R + 'B531307553/', R + 'B531990908/', R + 'B532816068/', R + 'B533294510/', R + 'B533363174/', R + 'B533546598/', R + 'B534140985/', R + 'B536779301/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially for lunch; cards are JCB, AMEX and Diners only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京職司町67-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011111, 135.745812); cross-checked: GSI 京都府京都市中京区西ノ京職司町67番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532816068/', R + 'B536779301/'],
    price_note: 'No menu read; prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Menchi-katsu lunch set (soup, vegetable plate, menchi-katsu, drink)', '¥3,300', 'Lunch', 'no', 'no', 'August 2026.', 'menchikatsu_set'),
      it('', '', 'Dinner course', '¥11,000', 'Dinner', 'ask', 'no', 'October 2026; ¥10,000 before tax.', 'dinner_course'),
      it('', '', 'Ginger ale', '¥700', 'Drinks', '', '', 'August 2026.', 'ginger_ale'),
    ] }, {
    cuisine: '改装した町家の、和のひと手間を加えたイタリアンベースの洋食 (2026年の口コミ)・名物は Ozaki の牛と Kofuku の豚のメンチカツ、デミグラスとバルサミコ (2026年の口コミ)・昼: スープ、季節の野菜の皿、ドリンク付きのメンチカツのセット3,300円 (2026年8月)、冷製スープ、旬の魚の食べ比べ、手打ちタリオリーニ、選べるメインとデザートのランチコース・夜のコース10,000円+税: 野菜のピュレ、旬の魚の食べ比べ、Daisendori の鶏のインヴォルティーニ、鯛のソテー、メンチカツと Tanba の豚のトンテキ、イワシのシチリア風スパゲッティ、デザート (2026年10月)・アラカルト: 魚介の盛り合わせ、自家製の生ハム、リゾット、ソースを選べるパスタ、鴨の味噌とトマト味噌の賀茂なすの田楽、和牛のステーキ・ソムリエのいるワイン (食べログ、2026年の口コミ)',
    neighborhood: 'JR二条駅の東の西ノ京。徒歩8分',
    gf_detail: '要確認。名物はパン粉の衣のメンチカツにデミグラスで、ほとんどのコースに手打ちパスタが入る。魚料理、リゾット、サラダもあり、要望にも応じてくれる (2026年の口コミ)。',
    vegan_detail: '要確認。コースは魚、肉、卵のパスタが中心。いちばん植物性に近いのは季節の野菜の皿だが、ゼリーに出汁を使う (2026年の口コミ)。',
    notes: '[イタリアン洋食・二条、わざわざ行きたいメンチカツ] JR二条駅から少し歩いた改装町家。イタリアで修業し、Hotel Granvia Kyoto の La Risata、Yoshoku Ogata を経たシェフの Noro が、和のひと手間を加えたイタリアンベースの洋食を作る。名物は Ozaki の牛と Kofuku の豚のジューシーなメンチカツにデミグラスとバルサミコ。ランチのメンチカツのセット (3,300円) はスープと評判の野菜の皿付き。夜は10,000円のコースかアラカルトで、手打ちパスタ、リゾット、その日の魚。ランチは埋まるので予約を。月曜休み。',
  });
}

save();
