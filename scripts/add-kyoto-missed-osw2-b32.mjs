// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 32.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 洋食とワイン Ao (yoshoku and wine counter at Sanjo-Karasuma) — invoice 株式会社LINO DREAM WORKS, the operator of Lino
//     (kyoto_lino_karasuma_oike, already in data, by name and company); a small local group, drafted as a sister concept and flagged.
//   + 三日月氷菓店 Mikazuki Hyoka Ten (year-round kakigori in a Kiyomizu-Gojo townhouse; moved from Kashiwa, Chiba; here since 2024)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + そ/s/KAWAHIGASHI (nine-seat "culinary hub" by the Kamo at Jingu-Marutamachi; since 2019) — One Rice One Soup株式会社
//   + おはぎ巴屋 Ohagi Tomoeya (couple-run ohagi shop by Toji’s west gate; takeaway only)
//   None of the four is in data/kyoto.json: grep by id, name (Ao/洋食とワイン, 三日月/Mikazuki, KAWAHIGASHI/そ, 巴屋/Tomoeya) and address
//   (御倉町73, 下新シ町329, 東丸太町18-5, 八条内田町76) found none. Same-name counts: one listing each (仙太郎 is unrelated to 鮨 仙太).
//   Service charges: Ao 「アラカルトは席料としてお一人様300円(税込)」 (a ¥300 seat charge on à la carte); none listed for the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 洋食とワイン Ao
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039469/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001073236';
  const WD = day(['17:30', '22:00']); const SA = day(['16:00', '22:00']);
  put({
    id: 'kyoto_yoshoku_wine_ao', name: '洋食とワイン Ao (Yoshoku to Wine Ao)', category: 'OMNI',
    lat: 35.00863823926917, lng: 135.7586158295779, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yoshoku with breaded croquettes and cutlets, fried shrimp, sauces and baguette; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu-hamburg and seafood yoshoku menu (Tabelog; reviews).',
    hours_raw: 'Monday–Friday 17:30–22:00 (last order 21:00, last entry 20:30); Saturday 16:00–22:00; closed Sunday (open when Monday is a holiday) and two other days a month (Tabelog). Earlier reviews mention a lunch course (October–November 2025); Tabelog now lists dinner only. À la carte carries a ¥300 seat charge per person (Tabelog’s Japanese original: 「アラカルトは席料としてお一人様300円(税込)」). 15 seats: a 9-seat wooden counter and 6 at tables; cards (VISA, Master, JCB, AMEX, Diners) and PayPay (Tabelog). An easy-to-miss street-level entrance on Sanjo-dori west of Karasuma, past NHK, 261 m from Karasuma-Oike Stn (Tabelog; January 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Karasuma — 261 m from Karasuma-Oike Stn',
    cuisine: 'Yoshoku with wine, as courses or à la carte, built around 100% Kuroge wagyu hamburg steak and seasonal ingredients (Tabelog) · hamburg in several sauces (salt is a favourite), foie-gras hamburg, uni cream croquette, "angel" fried shrimp with Saikyo-miso tartare, rare cutlet of Miyazaki wagyu sirloin cap, tuna and ratatouille tartare, sea bream with garlic butter, salmon cutlet, appetizer platters · authentic yoshoku course ¥10,800 with a six-glass wine pairing ¥6,600 (October 2026) (2025–2026 reviews)',
    website: null, gmaps: gm('洋食とワイン Ao 三条烏丸'), menu_url: TB,
    notes: "[Yoshoku · Sanjo-Karasuma, wagyu hamburg and wine at the counter] A calm, grown-up yoshoku room behind an easy-to-miss door on Sanjo-dori, with a long wooden counter. The draw is a 100% Kuroge wagyu hamburg in several sauces — or with foie gras — plus uni cream croquettes and a rare-fried wagyu cutlet, matched with wine. Order à la carte (¥300 seat charge) or the ¥10,800 course. Dinner only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operator 株式会社LINO DREAM WORKS (invoice holder), which also runs Lino'], origin: null,
      background: 'Per Tabelog’s official introduction: a cosy 15-seat restaurant at Karasuma-Oike serving Western dishes centred on 100% Kuroge wagyu hamburg and seasonal ingredients, as courses or à la carte, with wines to match. The invoice number belongs to 株式会社LINO DREAM WORKS, a Kyoto Italian-restaurant company that also operates Lino (a separate record).',
      philosophy: null,
      specialty: '100% Kuroge wagyu hamburg steak.',
      anecdotes: [
        { text: 'A January 2026 dinner guest was met outside by staff confirming the booking and shown in.', source: R + 'B521116840/' },
        { text: 'An October 2026 pair booked the ¥10,800 course for the uni cream croquette and foie-gras hamburg and were given a table for four.', source: R + 'B536666194/' },
        { text: 'A January 2026 diner tried the hamburg in several sauces and liked the salt version best.', source: R + 'B524384813/' },
      ],
      japanese_sources_summary: '食べログ: 洋食とワイン Ao (アオ)、洋食・ワインバー、中京区三条通烏丸西入御倉町73 ファーストコートビル1F、烏丸御池駅から261m、月〜金17:30〜22:00 (L.O. 21:00、最終入店20:30)、土16:00〜22:00、日曜定休 (月曜祝日の場合は営業)、月2回不定休、アラカルトは席料1人300円、15席 (カウンター9、テーブル6)、カード・PayPay 可、インボイス T3130001073236 (株式会社LINO DREAM WORKS)。公式紹介: 黒毛和牛100%のハンバーグと季節の食材の洋食をコースやアラカルトで、料理に合うワイン。口コミ (2025〜2026年、英語): 塩などソース違いのハンバーグ、フォアグラハンバーグ、雲丹クリームコロッケ、西京味噌タルタルの天使の海老フライ、宮崎牛イチボのレアカツ、本格洋食コース10,800円、ワインペアリング6杯6,600円。',
      confidence: 'medium', sources: [TB, INV, R + 'B488461360/', R + 'B508681178/', R + 'B511452715/', R + 'B512373612/', R + 'B515422270/', R + 'B516077482/', R + 'B519129803/', R + 'B521116840/', R + 'B522688422/', R + 'B524384813/', R + 'B531992752/', R + 'B536666194/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating; staff explain each dish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通烏丸西入御倉町73 ファーストコートビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008638, 135.758616); cross-checked: GSI 京都府京都市中京区御倉町73番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536666194/', R + 'B524384813/'],
    price_note: 'Course price from an October 2026 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Authentic yoshoku course', '¥10,800', 'Course', 'ask', 'no', '', 'yoshoku_course'),
      it('', '', 'Six-glass wine pairing', '¥6,600', 'Drinks', '', '', '', 'wine_pairing'),
      it('', '', '100% Kuroge wagyu hamburg steak', '', 'À la carte', 'ask', 'no', 'Several sauces.', 'hamburg'),
      it('', '', 'Uni cream croquette', '', 'À la carte', 'no', 'no', '', 'uni_croquette'),
      it('', '', 'À la carte seat charge', '¥300', 'Charge', '', '', '', 'seat_charge'),
    ] }, {
    cuisine: '黒毛和牛100%のハンバーグと季節の食材の洋食を、ワインとともにコースでもアラカルトでも (食べログ)・ソース違いのハンバーグ (塩が人気)、フォアグラハンバーグ、雲丹クリームコロッケ、西京味噌タルタルの天使の海老フライ、宮崎牛イチボのレアカツ、鮪とラタトゥイユのタルタル、鯛のガーリックバター、鮭のカツレツ、前菜の盛り合わせ・本格洋食コース10,800円、ワインペアリング6杯6,600円 (2026年10月) (2025〜2026年の口コミ)',
    neighborhood: '三条烏丸。烏丸御池駅から261m',
    gf_detail: '要確認。パン粉のコロッケやカツ、海老フライ、ソース、バゲットの洋食。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛ハンバーグと魚介の洋食 (食べログ、口コミ)。',
    notes: '[洋食・三条烏丸、カウンターで和牛ハンバーグとワイン] 三条通の見落としそうな扉の奥、長い木のカウンターの落ち着いた大人の洋食。目当ては黒毛和牛100%のハンバーグで、ソースを選ぶかフォアグラのせで。雲丹クリームコロッケや和牛のレアカツも、ワインとともに。アラカルト (席料300円) か10,800円のコース。夜のみ、日曜休み。',
  });
}

// ================================================================ 三日月氷菓店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041155/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_mikazuki_hyoka_ten', name: '三日月氷菓店 (Mikazuki Hyoka Ten)', category: 'OMNI',
    lat: 34.99391202788042, lng: 135.77188520024194, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shaved ice with fruit syrups, mascarpone or cheese, ice cream and red-bean paste; some bowls add peanuts or mousse; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit syrups over ice, but most bowls include ice cream, cheese, mascarpone or condensed milk (2026 reviews).',
    hours_raw: '11:00–18:00; closed Wednesday; hours may change (Tabelog). Queues can form before opening in summer (August 2026). No service charge listed (Tabelog). 14 seats: 4 at a counter with a garden view and 10 at tables; non-smoking; VISA and QR (Tabelog; September 2026). Tea or cold water and a small snack are served with the ice (August 2026). In a renovated townhouse in a quiet lane near Kiyomizu-Gojo, 381 m from Kiyomizu-Gojo Stn (Tabelog; 2026 reviews). Opened here 27 April 2024; reviewers say it moved from Kashiwa, Chiba (Tabelog; August–September 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-Gojo — 381 m from Kiyomizu-Gojo Stn',
    cuisine: 'Year-round kakigori of finely shaved, wide-ribbon ice with house fruit syrups (2026 reviews) · seasonal bowls, e.g. Joyo fig with cheese, peanuts and ice cream ¥1,500 (August 2026), peach, apricot, melon with mascarpone, mango, Kyoho grape with compote and cream cheese · milk kintoki with hidden matcha ice cream and red-bean paste, condensed milk to pour (2025–2026 reviews)',
    website: null, gmaps: gm('三日月氷菓店 清水五条'), menu_url: TB,
    notes: "[Sweets · Kiyomizu-Gojo, year-round kakigori in a townhouse] A kakigori specialist that moved from Kashiwa, Chiba, to a quiet Kyoto townhouse near Kiyomizu-Gojo, with a counter looking onto a little garden. The ice is shaved into fine, wide ribbons that melt at once, under house syrups of the season's fruit — fig with cheese and peanuts, peach, Kyoho grape — with ice cream hidden inside. About ¥1,500 a bowl; a favourite of penguin fans. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per 2026 reviews: a well-known kakigori shop from Kashiwa, Chiba, that relocated to Kyoto; Tabelog gives the Kyoto opening as 27 April 2024. Reviewers note large ice-shaving machines, seasonal limited bowls and attentive staff who pour warm tea.',
      philosophy: null,
      specialty: 'Seasonal fruit kakigori.',
      anecdotes: [
        { text: 'An August 2026 visitor who had queued for it years ago in the Tokyo area was surprised to find the shop had moved to Kyoto.', source: R + 'B533567121/' },
        { text: 'An August 2026 guest was offered a choice of warm tea or cold water with the ice.', source: R + 'B533308790/' },
        { text: 'A July 2026 regular on a second visit switched from mango to melon, with extra melon juice and mascarpone inside.', source: R + 'B512028811/' },
      ],
      japanese_sources_summary: '食べログ: 三日月氷菓店、かき氷、東山区下新シ町329、清水五条駅から381m、11:00〜18:00、水曜定休、14席 (カウンター4、テーブル10)、禁煙、VISA・QR 可、2024年4月27日オープン。口コミ (2025〜2026年、英語): 千葉・柏から京都へ移転、町家を改装、庭の見えるカウンター、薄く幅広に削る氷、通年のかき氷、季節限定 (城陽のいちじくとチーズとピーナッツ1,500円、桃、杏、メロンとマスカルポーネ、マンゴー、巨峰)、抹茶アイス入りのミルク金時、練乳はかけ放題、温かいお茶、ペンギン。',
      confidence: 'medium', sources: [TB, R + 'B512028811/', R + 'B531487007/', R + 'B531981779/', R + 'B533032364/', R + 'B533308790/', R + 'B533567121/', R + 'B534333776/', R + 'B534816641/', R + 'B535035596/', R + 'B536571965/', R + 'B537349372/', R + 'B538363706/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the seasonal board; expect a queue in summer.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下新シ町329',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.993912, 135.771885); cross-checked: GSI 京都府京都市東山区下新シ町329番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534816641/', R + 'B531487007/'],
    price_note: 'From 2026 reviews; seasonal menu.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fig kakigori with cheese, peanuts and ice cream', '¥1,500', 'Kakigori', 'ask', 'no', 'Seasonal.', 'fig'),
      it('', '', 'Milk kintoki with matcha ice cream', '', 'Kakigori', 'ask', 'no', '', 'milk_kintoki'),
      it('', '', 'Seasonal fruit kakigori (peach, melon, grape…)', '', 'Kakigori', 'ask', 'ask', '', 'seasonal_fruit'),
    ] }, {
    cuisine: '薄く幅広に削った氷に自家製の果物シロップの通年のかき氷 (2026年の口コミ)・季節の一杯、たとえば城陽のいちじくにチーズ、ピーナッツ、アイスで1,500円 (2026年8月)、桃、杏、マスカルポーネ入りのメロン、マンゴー、コンポートとクリームチーズの巨峰・抹茶アイスと餡を隠したミルク金時、練乳は自分でかける (2025〜2026年の口コミ)',
    neighborhood: '清水五条。清水五条駅から381m',
    gf_detail: '要確認。果物のシロップのかき氷にマスカルポーネやチーズ、アイス、餡。ピーナッツやムースが入るものも。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。果物のシロップだが、多くにアイス、チーズ、マスカルポーネ、練乳が入る (2026年の口コミ)。',
    notes: '[スイーツ・清水五条、町家の通年かき氷] 千葉・柏から京都の静かな町家に移ったかき氷の専門店。小さな庭の見えるカウンターも。氷は薄く幅広に削られてすぐに溶け、季節の果物の自家製シロップ: チーズとピーナッツのいちじく、桃、巨峰、中にはアイス。1杯1,500円ほど。ペンギン好きにも人気。水曜休み。',
  });
}

// ================================================================ そ/s/KAWAHIGASHI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033217/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.culinaryhub-so.onericeonesoupproject.com/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001064399';
  const D = day(['17:30', '21:00']); const L = day(['12:00', '14:00']);
  put({
    id: 'kyoto_so_kawahigashi', name: 'そ/s/KAWAHIGASHI (So Kawahigashi)', category: 'MOM_AND_POP',
    lat: 35.017670887866025, lng: 135.77404436048042, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese small plates, clay-pot rice, tempura, fried hamo and grilled fu with butter and soy; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-rich Kyoto-style dishes and earlier wild-herb vegetable broths, but fish and meat are served too; nothing vegan is marked (2024–2026 reviews).',
    hours_raw: 'Tuesday–Thursday dinner 17:30–21:00, à la carte without reservations, as 膳いぬい; Friday and Saturday lunch 12:00–14:00, an 8-course menu by reservation only, as 刻toki (Tabelog; official site). Closed Sunday and Monday. Bookings via TableCheck up to two months ahead (official site). No service charge listed (Tabelog). 9 seats at a U-shaped counter (13 with event tables); private hire up to 20; non-smoking; cards, transit IC, iD, QUICPay and PayPay (Tabelog). On Marutamachi-dori east of the Kamo River, about 3 min from exit 4 of Jingu-Marutamachi Stn (official site). Opened 25 October 2019 (official site; Tabelog). Lunch udon service ended with a renovation in January 2025 (March 2025 review).',
    hours: { 1: D, 2: D, 3: D, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi east of the Kamo — 3 min from Jingu-Marutamachi Stn',
    cuisine: 'A nine-seat "culinary hub" sharing one counter between two cooks (official site) · 膳いぬい (Tuesday–Thursday): gentle Japanese dinners with sake and Japanese wine — one-soup-three or five-dish sets (e.g. ¥3,900 with clay-pot rice, June 2025), clay-pot rice, sashimi, roast beef, corn tempura, fried hamo, pickles, grilled fu with butter and soy; Kyoto sake and Japanese whisky · 刻toki (Friday–Saturday): an 8-course lunch (official site; Tabelog; 2025–2026 reviews)',
    website: SITE, gmaps: gm('そ/s/KAWAHIGASHI 丸太町'), menu_url: SITE,
    notes: "[Japanese · Marutamachi by the Kamo, a nine-seat shared counter] A small U-shaped counter east of the Kamo River where two cooks take turns: Tuesday to Thursday evenings bring Inui's gentle Kyoto dinners — clay-pot rice, seasonal small plates, roast beef, with Japanese sake, wine and whisky — no booking needed; Friday and Saturday lunch is a reserved eight-course menu from the Nakahigashi side. Simple, careful seasoning. Closed Sunday and Monday.",
    chef_bio: { chef_name: 'Atsushi Nakahigashi (中東 篤志)', roles: ['Owner chef and culinary director (刻toki, Friday–Saturday)', 'Kazuhiro Inui (いぬい) cooks Tuesday–Thursday as 膳いぬい'], origin: 'Born in Kyoto',
      background: 'Per the official site: born in Kyoto into a family of restaurateurs, trained under the chef’s father at 草喰なかひがし from the age of 12, then worked at the vegan restaurant Kajitsu in New York from 2011; founded One Rice One Soup Inc. in the US in 2016 and One Rice One Soup株式会社 in Japan in 2019 (the invoice holder); based in New York and Kyoto; opened this counter on 25 October 2019. A December 2025 reviewer calls the chef the third son of Hisashi Nakahigashi of 草喰なかひがし. Kazuhiro Inui runs the Tuesday–Thursday dinners.',
      philosophy: 'Per the official site: a flat, welcoming place for anyone who loves to eat and drink, where people keep coming back; per a December 2025 review, "so" stands for origin and essence and for the seasoning order sa-shi-su-se-so.',
      specialty: 'Clay-pot rice and seasonal small plates.',
      anecdotes: [
        { text: 'An August 2025 diner on an Inui night ordered à la carte with Ichiro’s Malt whisky, and Inui came over to chat.', source: R + 'B511118533/' },
        { text: 'A June 2025 guest went back for seconds of the clay-pot rice.', source: R + 'B509007218/' },
        { text: 'A January 2025 visitor ate a New Year special: ramen made as Kyoto white-miso zoni, with Ohara vegetables and a round mochi.', source: R + 'B498715566/' },
      ],
      japanese_sources_summary: '公式サイト: そ/s/KAWAHIGASHI、おいしいを見つける9席のカリナリーハブ、左京区丸太町通川端東入ル東丸太町18-5、京阪神宮丸太町駅4番出口から徒歩約3分、金・土は「刻toki」、火〜木は「膳いぬい」(日本酒と日本ワインのやさしい和食の夜)、オーナーシェフ 中東篤志 (京都の料亭の家に生まれ12歳から父の草喰なかひがしで修業、2011年からニューヨークのヴィーガンレストラン Kajitsu、2016年米国で One Rice One Soup Inc.、2019年 One Rice One Soup株式会社を設立)、2019年10月25日オープン、予約は TableCheck で2か月先まで。食べログ: 日本料理・居酒屋、火〜木17:30〜21:00 (アラカルト、予約不要)、金・土12:00〜14:00 (予約制、8品のコース)、日月定休、U字カウンター9席、禁煙、カード・電子マネー・PayPay 可、インボイス T4130001064399 (One Rice One Soup株式会社)。口コミ (2024〜2026年、英語): 一汁三菜・五菜の定食 (土鍋ご飯付き3,900円)、ローストビーフ、とうもろこしの天ぷら、鱧のフライ、焼き麩のバター醤油、京都の日本酒、イチローズモルト、2025年1月の改装で昼のうどんは終了。',
      confidence: 'high', sources: [TB, SITE, INV, R + 'B492998606/', R + 'B494755547/', R + 'B498406141/', R + 'B498715566/', R + 'B499721206/', R + 'B506254521/', R + 'B508794153/', R + 'B509007218/', R + 'B511118533/', R + 'B517480032/', R + 'B520006210/', R + 'B524010206/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekday dinners take walk-ins; weekend lunch must be booked.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区丸太町通川端東入ル東丸太町18-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.017671, 135.774044); cross-checked: GSI 京都府京都市左京区東丸太町18番地 (lot) 71m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508794153/', R + 'B511118533/'],
    price_note: 'From 2025 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'One-soup five-dish set with clay-pot rice', '¥3,900', 'Dinner', 'ask', 'no', 'June 2025.', 'ichiju_gosai'),
      it('', '', 'Clay-pot rice', '', 'Dinner', 'ask', 'ask', '', 'donabe_gohan'),
      it('', '', 'Eight-course lunch (Friday–Saturday, reservation)', '', 'Lunch', 'ask', 'no', '', 'toki_lunch'),
    ] }, {
    cuisine: '一つのカウンターを2人の料理人が分け合う9席の「カリナリーハブ」(公式サイト)・膳いぬい (火〜木): 日本酒と日本ワインのやさしい和食の夜。一汁三菜・五菜の定食 (たとえば土鍋ご飯付き3,900円、2025年6月)、土鍋ご飯、お造り、ローストビーフ、とうもろこしの天ぷら、鱧のフライ、漬物、焼き麩のバター醤油。京都の日本酒と日本のウイスキー・刻toki (金・土): 8品の昼のコース (公式サイト、食べログ、2025〜2026年の口コミ)',
    neighborhood: '鴨川の東の丸太町通。神宮丸太町駅から徒歩3分',
    gf_detail: '要確認。和食の小皿、土鍋ご飯、天ぷら、鱧のフライ、焼き麩のバター醤油など。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜の多い京風の料理で、以前は野草の野菜出汁もあったが、魚や肉も出る。ヴィーガンの表示はない (2024〜2026年の口コミ)。',
    notes: '[和食・鴨川東の丸太町、9席の分け合うカウンター] 鴨川の東の小さなU字カウンター。2人の料理人が交代で立つ: 火〜木の夜はいぬいさんのやさしい京の夕食で、土鍋ご飯、季節の小皿、ローストビーフを日本酒やワイン、ウイスキーと。予約不要。金・土の昼は中東さんの側の予約制の8品のコース。味付けは素直で丁寧。日月休み。',
  });
}

// ================================================================ おはぎ巴屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26014275/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_ohagi_tomoeya', name: 'おはぎ巴屋 (Ohagi Tomoeya)', category: 'OMNI',
    lat: 34.981768837074526, lng: 135.74601937897566, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ohagi are glutinous rice with red-bean paste or kinako (soybean flour); no ingredient list is published (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ohagi are usually made from rice, beans and sugar, but the shop publishes no ingredients (2025–2026 reviews).',
    hours_raw: 'From 10:00 until sold out (listed to 18:00); closed Wednesday and Thursday; hours may change (Tabelog). Queues at opening, especially on Toji market days; the kinako often sells out by early afternoon (June–September 2026). Takeaway only — no space to eat in (December 2025; April 2026). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). A very small shop among houses by the west gate of Toji, 644 m from Toji Stn (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Toji west gate — 644 m from Toji Stn',
    cuisine: 'Handmade ohagi in two kinds only: red-bean (tsubu-an over soft glutinous rice) and kinako (rice wrapped round bean paste, coated in unsweetened soybean flour), ¥200 each (up from ¥150; 2025–2026 reviews) · best eaten the same day (January 2026)',
    website: null, gmaps: gm('おはぎ巴屋 東寺'), menu_url: TB,
    notes: "[Sweets · Toji west gate, ohagi to take away] A tiny shop among the houses behind Toji, where a couple make just two kinds of ohagi each morning — chunky red bean, and kinako with bean paste hidden inside — at ¥200 apiece. The day's batch sells out, so come before lunch, especially on Toji market days. Takeaway only, cash only; best eaten the same day. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (March 2026 review); not named'], origin: null,
      background: 'Per 2025–2026 reviews: a handmade-ohagi shop by Toji’s west gate run by a couple, open from 10:00 until the day’s ohagi are gone; only red-bean and kinako are made; the price rose to ¥200 each.',
      philosophy: null,
      specialty: 'Red-bean and kinako ohagi.',
      anecdotes: [
        { text: 'A September 2026 visitor arriving past noon found the red-bean sold out and six kinako left, and was served with a smile.', source: R + 'B499260046/' },
        { text: 'A September 2026 regular saw a line from opening on Toji flea-market day and got the last few around lunchtime.', source: R + 'B488819746/' },
        { text: 'An August 2026 buyer’s red-bean ohagi got squashed on the way home; the kinako held up.', source: R + 'B534825578/' },
      ],
      japanese_sources_summary: '食べログ: おはぎ巴屋 (ともえや)、和菓子、南区八条内田町76 東寺西門前、東寺駅から644m、10:00〜18:00 (売り切れ次第終了)、水・木定休、カード・電子マネー・QR 不可、テイクアウト。口コミ (2025〜2026年、英語): 夫婦で営む、手作りのおはぎは粒あんときなこの2種、1個200円 (以前は150円)、イートインなし、開店前から行列、東寺の市の日は混む、きなこは午後に売り切れることも、当日中に。',
      confidence: 'medium', sources: [TB, R + 'B137261834/', R + 'B461445782/', R + 'B488819746/', R + 'B499260046/', R + 'B509499230/', R + 'B519047701/', R + 'B519443462/', R + 'B521095785/', R + 'B524319276/', R + 'B528335259/', R + 'B530234361/', R + 'B534825578/'] },
    cultural_comfort: { level: 'japanese', note: 'Takeaway only; cash only; point at red bean or kinako.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市南区八条内田町76 東寺西門前',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.981769, 135.746019); cross-checked: GSI 京都府京都市南区八条内田町76番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528335259/', R + 'B530234361/'],
    price_note: 'Prices from June–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Red-bean ohagi', '¥200', 'Ohagi', 'ask', 'ask', '', 'ohagi_an'),
      it('', '', 'Kinako ohagi', '¥200', 'Ohagi', 'ask', 'ask', '', 'ohagi_kinako'),
    ] }, {
    cuisine: '手作りのおはぎは2種のみ: やわらかいもち米に粒あんをのせた粒あん、あんを包んだもち米に甘くないきなこをまぶしたきなこ。1個200円 (以前は150円、2025〜2026年の口コミ)・当日中に (2026年1月)',
    neighborhood: '東寺の西門前。東寺駅から644m',
    gf_detail: '要確認。もち米に粒あんかきなこ (大豆粉) のおはぎ。原材料は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。おはぎはふつう米、豆、砂糖で作るが、店は原材料を公開していない (2025〜2026年の口コミ)。',
    notes: '[和菓子・東寺西門前、持ち帰りのおはぎ] 東寺の裏手の家並みの中の小さな店。夫婦が毎朝、2種のおはぎだけを作る: 粒あんと、中にあんを包んだきなこ、1個200円。売り切れるので昼前に。とくに東寺の市の日は混む。持ち帰りのみ、現金のみ、当日中に。水木休み。',
  });
}

save();
