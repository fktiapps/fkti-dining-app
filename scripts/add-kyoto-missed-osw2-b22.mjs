// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 22.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + うしのほね あなざ Ushi no Hone Another (obanzai-and-beef-stew izakaya in a Sanjo townhouse)
//   + 京都祇園鉄板焼プランチャー健 Plancha Ken (teppanyaki counter in a Gion alley; since 2014)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + LE CHENE (French restaurant of the Meiji-era Chourakukan in Maruyama Park)
//   + 鴨川たかし Kamogawa Takashi (Omi Hino beef yakiniku and kaiseki near the Imperial Palace)
//   None is in data/kyoto.json: grep by id, name (うしのほね/Ushinohone, プランチャー/Plancha, LE CHENE/Chene, 鴨川たかし/Takashi)
//   and address (中之町15-1, 祇園町北側282-3, 円山町604, 末丸町265) found none.
//   Same-name counts (same brand or operator): うしのほね — 3 in the Tabelog crawl (うしのほね 本店, 草風土 うしのほね, うしのほね
//   あなざ), a local group (the brief lists うしのほねグループ as not a large parent) — drafted; プランチャー健, 鴨川たかし — one listing each;
//   LE CHENE — the restaurant of 株式会社長楽館 (invoice holder), whose Dessert Cafe Chourakukan is already in data as its own
//   record (kyoto_dessert_cafe_chourakukan); no hotel-wide record covers the building’s dining, so drafted as a sister venue.
//   Service charges checked against Tabelog’s Japanese original: プランチャー健 「サービス料なし、チャージ料お一人600円（税込）12月31日
//   から1月3日まではチャージ料1100円（税込）」; LE CHENE — 10% (15% over New Year), shown in English only on Tabelog; うしのほね あなざ
//   and 鴨川たかし none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ うしのほね あなざ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000625/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ushinohone-anaza.com/'; const INFO = SITE + 'shopinfo.html';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8130001006678';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_ushinohone_anaza', name: 'うしのほね あなざ (Ushi no Hone Another)', category: 'OMNI',
    lat: 35.008692, lng: 135.764687, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, charcoal grills and kamameshi alongside a beef stew served with bread, spring rolls and fried dishes; Tabelog lists vegetarian options, but no gluten information is published (official site; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and vegetables come direct from contract farmers, but most dishes use dashi, fish or meat; no ingredient list is published (Tabelog; official site).',
    hours_raw: '17:00–23:30 (last order 23:00); open daily (official site; Tabelog lists irregular closures). Bookings by phone or web; same-day cancellations may be charged 100% of the food (official site). 48 seats: a counter of 8 and tatami rooms of 40, all with sunken seating, shoes off; an attic-like 2nd-floor room for up to 20, private hire from 12 (official site; August 2026). Cards and PayPay (official site). On Sanjo-dori west of Tominokoji in a renovated townhouse; 5 min from Karasuma-Oike Stn, 7 min from Kyoto-Kawaramachi or Karasuma Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori west of Tominokoji — 5 min from Karasuma-Oike Stn',
    cuisine: 'Townhouse izakaya of obanzai, fish and the house beef stew (official site; 2025–26 reviews) · "Ushi no Hone" beef stew, slow-cooked and served with free bread refills · obanzai assortments (three or eight kinds), sashimi of salmon and sawara, charcoal-grilled dishes, seasonal kamameshi · mentaiko potato salad, tamagoyaki, thick chicken tsukune, curry spring rolls, turban-shell and eggplant spring rolls, fried hamo, somen like pasta · courses about ¥5,000–5,500 (August 2026) · sake and shochu',
    website: SITE, gmaps: gm('うしのほね あなざ 三条'), menu_url: SITE,
    notes: "[Izakaya · Sanjo, obanzai and beef stew in a townhouse] A shoes-off townhouse izakaya on Sanjo-dori with sunken seating and an attic-like room upstairs, part of the local うしのほね group. Start with a plate of obanzai and seasonal sashimi, add charcoal grills, spring rolls or kamameshi, and do not miss the signature beef stew with unlimited bread. Courses run about ¥5,000–5,500. Friendly, quick staff; open every evening to 23:30.",
    chef_bio: { chef_name: null, roles: ['Head chef not named; operator 株式会社セカンダイズ (the invoice holder)'], origin: null,
      background: 'Per the official site: a Japanese-style izakaya on Sanjo-dori using produce sent direct from contract farmers, with seasonal kamameshi and charcoal grills; part of the うしのほね group, which also has うしのほね 本店 and 草風土 うしのほね (Tabelog crawl). The invoice number belongs to 株式会社セカンダイズ (NTA corporate-number site). An October 2026 regular praises the head chef’s training of the energetic staff.',
      philosophy: null,
      specialty: 'Beef stew; obanzai.',
      anecdotes: [
        { text: 'An October 2026 family of four found a handwritten note on the table saying "please relax and enjoy your time".', source: R + 'B484395272/' },
        { text: 'An October 2026 diner says a friend makes a point of coming back for the beef stew on every visit to Japan.', source: R + 'B538486140/' },
      ],
      japanese_sources_summary: '公式サイト (ushinohone-anaza.com): 烏丸御池の和食居酒屋 うしのほねあなざ、三条通に面した町屋居酒屋、契約農家さん直送の野菜、旬の釜飯、炭火焼、カウンターとテーブルはいずれも掘りごたつ、2F は屋根裏の隠れ家のようなお座敷 (最大20名、12名以上で貸切)、中京区三条富小路西入ル中之町15-1、阪急京都河原町駅・烏丸駅より徒歩7分、烏丸御池駅より徒歩5分、17:00〜23:30 (L.O. 23:00)、定休日無し、48席 (カウンター8、お座敷40)、カード・PayPay 可、当日キャンセルは料理代金の100%の場合あり、インボイス T8130001006678 (株式会社セカンダイズ)。食べログ: 居酒屋・日本料理・魚介料理、不定休、ベジタリアンメニュー、子ども可。口コミ (2024〜2026年、英語): ビーフシチューとおかわり自由のパン、おばんざい盛り合わせ、刺身、つくね、カレー春巻き、コース5,000〜5,500円。',
      confidence: 'medium', sources: [TB, SITE, INFO, CORP, R + 'B441225542/', R + 'B484395272/', R + 'B504954723/', R + 'B533209418/', R + 'B533578651/', R + 'B533890857/', R + 'B534488114/', R + 'B535970010/', R + 'B536597164/', R + 'B537580270/', R + 'B537702292/', R + 'B538486140/'] },
    cultural_comfort: { level: 'english', note: 'English site; shoes off; sunken seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通柳馬場東入ル中之町15-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008692, 135.764687); cross-checked: GSI 京都府京都市中京区中之町15番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533209418/', R + 'B533578651/'],
    price_note: 'Course prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with the signature beef stew', '¥5,500', 'Course', 'ask', 'no', 'A ¥5,000 course also reported (August 2026).', 'course'),
      it('', '', 'Ushi no Hone beef stew with bread', '', 'Signature', 'no', 'no', 'Bread refills free.', 'beef_stew'),
    ] }, {
    cuisine: 'おばんざい、魚、名物のビーフシチューの町家の居酒屋 (公式サイト、2025〜2026年の口コミ)・じっくり煮込んだ「うしのほね」のビーフシチュー、パンはおかわり自由・おばんざいの盛り合わせ (3種や8種)、サーモンや鰆のお造り、炭火焼、季節の釜飯・明太子ポテトサラダ、だし巻き、太いつくね、カレー春巻き、さざえと茄子の春巻き、鱧の天ぷら、パスタのような素麺・コースは5,000〜5,500円ほど (2026年8月)・日本酒と焼酎',
    neighborhood: '富小路の西の三条通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。おばんざい、刺身、炭火焼、釜飯に、パン付きのビーフシチュー、春巻き、揚げ物。食べログではベジタリアンメニューありだが、グルテンの情報は公開されていない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありで、野菜は契約農家から直送だが、多くの料理はだし、魚、肉を使う。原材料は公開されていない (食べログ、公式サイト)。',
    notes: '[居酒屋・三条、町家のおばんざいとビーフシチュー] 三条通にある、靴を脱いで上がる町家の居酒屋。掘りごたつの席と屋根裏のような2階の座敷があり、地元の「うしのほね」グループの店。まずはおばんざいの盛り合わせと旬のお造り、炭火焼や春巻き、釜飯も。名物のビーフシチューはパンのおかわり自由で、ぜひ。コースは5,000〜5,500円ほど。スタッフは元気で手早い。毎晩23:30まで。',
  });
}

// ================================================================ 京都祇園鉄板焼プランチャー健
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023389/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9810773763681';
  const D = day(['17:00', '22:30']); const W = day(['12:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_plancha_ken', name: '京都祇園鉄板焼プランチャー健 (Plancha Ken)', category: 'MOM_AND_POP',
    lat: 35.004294, lng: 135.776472, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — Tabelog’s booking note asks guests with a gluten allergy to say so when reserving, and the restaurant will try to accommodate. Courses include sauces, baked cheese curry or curry as a finish, and dessert (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, Matsusaka beef, lobster, abalone and foie gras teppanyaki courses (2026 reviews).',
    hours_raw: 'Dinner 17:00–22:30 (last order 21:00) Tuesday to Friday, holidays and the day before; also lunch 12:00–14:30 on Saturday and Sunday; closed Monday (Tabelog). Bookings taken; gluten-allergic guests should say so when booking (Tabelog). No service charge; a seat charge of ¥600 per person, ¥1,100 from 31 December to 3 January (Tabelog’s Japanese original: 「サービス料なし、チャージ料お一人600円（税込）12月31日から1月3日まではチャージ料1100円（税込）」). 22 seats with a counter and a semi-private room; cards and PayPay (Tabelog). On the corner of the lane into Hanamikoji-Tominagacho, past a tobacco shop; 5 min from Gion-Shijo Stn exit 7 (Tabelog). Opened 14 February 2014 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Lane into Tominagacho off Hanamikoji, Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Teppanyaki of A5 Kuroge wagyu, Matsusaka beef and live lobster (2026 reviews) · Maruyama course with A5 wagyu fillet ¥8,800 (October 2026) · Gion course with A5 wagyu steak and Canadian lobster ¥10,500 (October 2026): seasonal appetizers (wagyu tataki, broccoli mousse, purple sweet potato purée), Matsusaka beef grilled shabu-shabu, seasonal soup, lobster, steak flambéed at the counter, grilled vegetables, a choice of finish such as cheese curry, dessert and coffee · courses with foie gras and abalone; birthday plates; a tenugui to take home (October 2026)',
    website: null, gmaps: gm('京都祇園鉄板焼プランチャー健'), menu_url: TB,
    notes: "[Teppanyaki · Gion, wagyu and lobster on a back lane] A teppanyaki counter on a quiet lane off Hanamikoji, run by a chef from a hotel teppanyaki background, per reviewers. Courses (about ¥8,800–10,500) bring wagyu tataki, Matsusaka beef grilled shabu-shabu, a live Canadian lobster shown before cooking, and an A5 steak flambéed in front of you, finishing with cheese curry. Gluten-allergic guests can ask when booking. No service charge, but a ¥600 seat charge. Closed Monday.",
    chef_bio: { chef_name: '浅沼 健史', roles: ['Owner (the invoice holder); reviewers describe a master chef with hotel teppanyaki experience'], origin: null,
      background: 'The invoice register lists an individual, 浅沼 健史, for the shop’s invoice number. October 2026 reviewers say the restaurant is run by a chef who was head chef at a prestigious hotel, with a gentle, playful manner. Opened 14 February 2014 (Tabelog).',
      philosophy: null,
      specialty: 'A5 wagyu and lobster teppanyaki.',
      anecdotes: [
        { text: 'An October 2026 birthday couple lifted the live lobster for a photo before it was cooked, and got a birthday plate for dessert.', source: R + 'B538165742/' },
        { text: 'An October 2026 diner was surprised by the beef-rich baked curry as the closing dish and was given a tenugui to take home.', source: R + 'B537806841/' },
      ],
      japanese_sources_summary: '食べログ: 京都祇園鉄板焼プランチャー健、ステーキ・鉄板焼き・洋食、東山区祇園町北側282-3 太田ビル 1F、祇園四条駅7番出口から徒歩5分、花見小路富永町へ入る路地の角、火〜金・祝・祝前日 17:00〜22:30 (L.O. 21:00)、土日 12:00〜14:30・17:00〜22:30、月曜休み、予約可、グルテンアレルギーの方は予約時に連絡を (できる限り対応)、サービス料なし、チャージ料1人600円 (税込、12月31日〜1月3日は1,100円)、22席、半個室、カード・PayPay 可、2014年2月14日オープン、インボイス: 浅沼 健史 (個人)。口コミ (2026年9〜11月、英語): 円山コース8,800円、祇園コース10,500円、A5黒毛和牛、松阪牛の焼きしゃぶ、カナダ産オマール海老、フランベ、チーズカレー、ホテルの料理長だった料理人。',
      confidence: 'medium', sources: [TB, INV, R + 'B401347628/', R + 'B537422464/', R + 'B537678130/', R + 'B537763870/', R + 'B537806841/', R + 'B538165742/', R + 'B538211879/', R + 'B538226301/', R + 'B538348787/', R + 'B538369257/', R + 'B538482774/', R + 'B538703796/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ¥600 seat charge; say if you have a gluten allergy when booking.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog’s booking note (auto-translated) asks guests with a gluten allergy to contact the restaurant when booking; it will do its best to accommodate.', source: TB, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側282-3 太田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004294, 135.776472); cross-checked: GSI 京都府京都市東山区祇園町北側282番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537422464/', R + 'B538348787/'],
    price_note: 'Course prices from October 2026 reviews; ¥600 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Maruyama course with A5 wagyu fillet', '¥8,800', 'Course', 'ask', 'no', 'October 2026.', 'maruyama'),
      it('', '', 'Gion course with A5 wagyu steak and lobster', '¥10,500', 'Course', 'ask', 'no', 'October 2026.', 'gion_course'),
    ] }, {
    cuisine: 'A5黒毛和牛、松阪牛、活けオマール海老の鉄板焼き (2026年の口コミ)・A5和牛ヒレの円山コース8,800円 (2026年10月)・A5和牛ステーキとカナダ産オマール海老の祇園コース10,500円 (2026年10月): 季節の前菜 (和牛のたたき、ブロッコリーのムース、紫芋のピューレ)、松阪牛の焼きしゃぶ、季節のスープ、オマール海老、カウンターでフランベするステーキ、焼き野菜、チーズカレーなど選べる締め、デザートとコーヒー・フォアグラや鮑のコースも、誕生日プレート、持ち帰りの手ぬぐい (2026年10月)',
    neighborhood: '花見小路から富永町に入る路地、祇園。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。食べログの予約の注意書きでは、グルテンアレルギーの方は予約時に連絡を、できる限り対応するとのこと。コースにはソース、締めのチーズカレーやカレー、デザートが入る (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、松阪牛、オマール海老、鮑、フォアグラの鉄板焼きのコース (2026年の口コミ)。',
    notes: '[鉄板焼き・祇園、路地の和牛とオマール海老] 花見小路から入る静かな路地の鉄板焼きのカウンター。口コミによれば、ホテルの鉄板焼きの料理長だった料理人の店。コース (8,800〜10,500円ほど) は和牛のたたき、松阪牛の焼きしゃぶ、焼く前に見せてくれるカナダ産の活けオマール海老、目の前でフランベする A5 のステーキ、締めはチーズカレー。グルテンアレルギーは予約時に相談可。サービス料はないがチャージ600円。月曜休み。',
  });
}

// ================================================================ LE CHENE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006415/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.chourakukan.co.jp/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=4130001009461';
  const H = day(['11:30', '15:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_le_chene_chourakukan', name: 'LE CHENE (長楽館)', category: 'OMNI',
    lat: 35.003063, lng: 135.780018, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the restaurant asks in advance for allergies and any ingredient restrictions for everyone in the party (Tabelog). French courses with bread, sauces and pastry (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask in advance — the restaurant takes restrictions for the whole party ahead of time; courses centre on fish, duck, meat and butter sauces with Kyoto vegetables (Tabelog; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–15:30 (last entry 14:00) and dinner 17:30–22:00 (last entry 19:30); closed Tuesday and one irregular day a month (Tabelog). Service charge 10% (15% from 31 December to 5 January), per Tabelog. Allergies and restrictions (including pregnancy, caffeine and alcohol in cooking) must be told in advance for the whole party (Tabelog). About 10 parking spaces at the east front entrance; 7 min from the Gion bus stop, 11 min from Gion-Shijo Stn (Tabelog). Inside 長楽館, a Meiji-era Western-style mansion in Maruyama Park that also houses a dessert café and a hotel; meals are served in the historic rooms or a newer annex (2025–26 reviews). Cards (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, east of Yasaka Shrine — 11 min from Gion-Shijo Stn',
    cuisine: 'French cooking with Kyoto ingredients and vegetables the chef sources personally (2025–26 reviews) · lunch course "Paon" ¥12,100, nine dishes (April 2026) · dishes reviewers had: Japan Sea mackerel with heshiko, omohata poêlé with beurre blanc, Nanatani duck, sea urchin consommé royale, whelk, red snapper, kinmedai, a signature beurre-noisette dish, cold consommé · wine pairing of six glasses ¥12,000 (June 2026)',
    website: SITE, gmaps: gm('LE CHENE 長楽館'), menu_url: TB,
    notes: "[French · Maruyama Park, dining in a Meiji mansion] The main dining room of 長楽館, a Western-style mansion built in the Meiji era by a tobacco magnate as a guesthouse and now an Important Cultural Property, per reviewers. Chef Kazuki Hashimoto cooks French courses around Kyoto produce the chef sources in person — Wakasa mackerel with heshiko, rare omohata with beurre blanc, local Nanatani duck — served under high ceilings (dress warmly in winter) or in the annex. Lunch from ¥12,100; 10% service. The chef often greets diners after the meal. Closed Tuesday.",
    chef_bio: { chef_name: 'Kazuki Hashimoto', roles: ['Chef (January 2026 review); operator 株式会社長楽館 (the invoice holder)'], origin: null,
      background: 'Per 2025–26 reviewers: 長楽館 was built in the Meiji era as a guesthouse by a prominent businessman and was used to welcome foreign guests; it is an Important Cultural Property; the restaurant is named after the founder’s family crest of three oak leaves; chef Kazuki Hashimoto personally sources Kyoto vegetables and has long used local Nanatani duck (January 2026). The invoice number belongs to 株式会社長楽館 (NTA corporate-number site). The same building’s dessert café is a separate record. Chef’s name known only in Latin letters.',
      philosophy: null,
      specialty: 'French courses with Kyoto vegetables; Nanatani duck.',
      anecdotes: [
        { text: 'A January 2026 diner warns the high-ceilinged historic rooms feel chilly in winter.', source: R + 'B520272409/' },
        { text: 'A June 2026 hotel guest who stayed on points paid for dinner and called six glasses of pairing wine for ¥12,000, including Dom Pérignon, a good deal.', source: R + 'B530102236/' },
        { text: 'A February 2026 diner was greeted by the chef after the meal.', source: R + 'B522821924/' },
      ],
      japanese_sources_summary: '食べログ: LE CHENE、フレンチ、東山区八坂鳥居前東入円山町604 長楽館、祇園バス停から徒歩7分、祇園四条駅6番出口から徒歩11分、ランチ11:30〜15:30 (最終入店14:00)、ディナー17:30〜22:00 (最終入店19:30)、火曜と月1回不定休、サービス料10% (12月31日〜1月5日は15%)、アレルギーや食材の制限は事前に同行者全員分を、駐車場約10台、カード可、インボイス T4130001009461 (株式会社長楽館)。口コミ (2025〜2026年、英語): 明治の迎賓館、重要文化財、たばこ王、家紋の三つ柏が店名の由来、Kazuki Hashimoto シェフ、京都の食材、へしこの鯖、オモハタ、七谷鴨、ランチ Paon 12,100円、ワインのマリアージュ6杯12,000円。',
      confidence: 'medium', sources: [TB, SITE, CORP, R + 'B519015861/', R + 'B520272409/', R + 'B522821924/', R + 'B523753666/', R + 'B524514619/', R + 'B526331752/', R + 'B526533891/', R + 'B529179048/', R + 'B529267779/', R + 'B530102236/', R + 'B538616014/'] },
    cultural_comfort: { level: 'english', note: 'Historic mansion with a hotel; tell all dietary restrictions in advance; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区八坂鳥居前東入円山町604 長楽館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003063, 135.780018); GSI matched only the town 京都府京都市東山区円山町 (town) 249m away, the centre of a large park town — loc_approx single; 23m from the same building’s Dessert Cafe Chourakukan pin; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526331752/', R + 'B530102236/'],
    price_note: 'Prices from April and June 2026 reviews; 10% service.', last_checked: TODAY, items: [
      it('', 'Paon', 'Lunch course "Paon", nine dishes', '¥12,100', 'Lunch', 'ask', 'ask', 'April 2026.', 'paon'),
      it('', '', 'Wine pairing, six glasses', '¥12,000', 'Drinks', '', '', 'June 2026.', 'pairing'),
    ] }, {
    cuisine: 'シェフが自ら仕入れる京都の食材と野菜のフランス料理 (2025〜2026年の口コミ)・ランチコース「Paon」12,100円、9品 (2026年4月)・口コミの料理: へしこを使った日本海の鯖、オモハタのポワレとブールブラン、七谷鴨、雲丹のコンソメロワイヤル、つぶ貝、真鯛、金目鯛、名物のブールノワゼットの一品、冷製コンソメ・ワインのマリアージュ6杯12,000円 (2026年6月)',
    neighborhood: '八坂神社の東、円山公園。祇園四条駅から徒歩11分',
    gf_detail: '予約時に要確認。アレルギーや食材の制限は同行者全員分を事前に伝えるよう店が案内している (食べログ)。パン、ソース、パイ生地を使うフランス料理のコース (2025〜2026年の口コミ)。',
    vegan_detail: '事前に要確認。店は同行者全員の制限を事前に受け付ける。コースは京都の野菜とともに魚、鴨、肉、バターのソースが中心 (食べログ、2025〜2026年の口コミ)。',
    notes: '[フレンチ・円山公園、明治の洋館で食べるフランス料理] 口コミによれば、明治時代にたばこ王が迎賓館として建て、今は重要文化財の洋館「長楽館」のメインダイニング。Kazuki Hashimoto シェフが自ら仕入れる京都の食材でフランス料理のコースを作る: へしこを使った若狭の鯖、珍しいオモハタのブールブラン、地元の七谷鴨。天井の高い歴史ある部屋 (冬は暖かい服装で) か別館で。ランチは12,100円から、サービス料10%。食後にシェフが挨拶に来ることも。火曜休み。',
  });
}

// ================================================================ 鴨川たかし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26021271/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kamogawa-takashi.jp/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=1130001064030';
  const L = day(['11:00', '14:00'], ['18:00', '22:00']); const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kamogawa_takashi', name: '鴨川たかし (Kamogawa Takashi)', category: 'OMNI',
    lat: 35.015891, lng: 135.769577, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled Omi beef with sauces, grilled sukiyaki dipped in egg, beef bowls, croquettes and cutlets, and noodles to finish; no gluten information is published (official site; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Omi beef restaurant — even the vegetables are grilled in Omi beef fat (official site; February 2026).',
    hours_raw: 'Lunch 11:00–14:00 (last order 13:00) Monday, Friday, Saturday and Sunday; dinner 18:00–22:00 (last orders food 21:00, drinks 21:30) Monday and Wednesday to Sunday; closed Tuesday (Tabelog). Phone bookings only at 10:00–11:00 and 17:00–18:00 (Tabelog). Private and semi-private rooms in an old house (June and August 2026). Cards, e-money and QR including UnionPay, Alipay and WeChat Pay (Tabelog). On Nakamachi-dori north of Takeyamachi; about 8 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: L, 2: D, 3: D, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakamachi-dori near Kawaramachi-Marutamachi — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'Charcoal yakiniku and meat kaiseki of Omi Hino beef from the Okazaki farm only (official site) · lunch: Omi beef bowl ¥500, large ¥700, with namul and soup; Omi beef croquette ¥200; beef cutlet and minced cutlet; Kamogawa Takashi gozen (2026 reviews) · dinner: meat kaiseki course ¥7,800 (February 2026) up to the "Ultimate" course, with rare cuts grilled on a shichirin, grilled sukiyaki dipped in raw egg, vegetables grilled in Omi beef fat, ochazuke or simmered noodles to finish, and a creative dessert (2024–26 reviews)',
    website: SITE, gmaps: gm('鴨川たかし 末丸町'), menu_url: SITE,
    notes: "[Yakiniku · Marutamachi, Omi Hino beef from one farm] A beef restaurant in an old house near the Imperial Palace that serves only Omi Hino beef from the Okazaki farm, whose cows are raised long and unhurried. Lunch is a bargain — an Omi beef bowl with namul and soup for ¥500 — while dinner is a meat kaiseki (from about ¥7,800) of rare cuts grilled over charcoal on a shichirin, grilled sukiyaki in egg and noodles to finish. Private rooms; phone bookings at set hours only. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operator 株式会社Ｍｕｎｄｏ Ｒｉｃｏ (the invoice holder)'], origin: null,
      background: 'Per the official site: after tasting Omi Hino beef at the Okazaki farm in Shiga, the owners set out to serve only that farm’s beef — heifers fattened slowly to 36–40 months in a calm environment on the farm’s own feed — grilled simply over charcoal. The invoice number belongs to 株式会社Ｍｕｎｄｏ Ｒｉｃｏ (NTA corporate-number site). Reviewers describe a friendly chef and grill master (February 2026) and a young manager (August 2026); one guest from Tokyo has come back five or six times (October 2026).',
      philosophy: 'Per the official site: "ただ純粋に本物をお届けしたい" — simply to serve the real thing.',
      specialty: 'Okazaki-farm Omi Hino beef; grilled sukiyaki; ¥500 beef bowl lunch.',
      anecdotes: [
        { text: 'A regular of about 20 visits always looks forward to the charcoal-grilled sukiyaki, rolled and dipped in raw egg, and the creative dessert.', source: R + 'B492371188/' },
        { text: 'A June 2026 group of four in a private room found the meat portions a bit small and ordered extras.', source: R + 'B530931754/' },
      ],
      japanese_sources_summary: '公式サイト (kamogawa-takashi.jp): 完熟近江牛 鴨川たかし、滋賀県近江の岡崎牧場の近江日野牛、日本最古のブランド牛、雌牛のみを生後36〜40ヶ月を目標に長期肥育、炭火焼き、オンラインショップ。食べログ: 焼肉・日本料理・すき焼き、中京区中町通竹屋町上ル末丸町265-1、神宮丸太町駅から徒歩約8分、月・金・土・日 11:00〜14:00 (L.O. 13:00)・18:00〜22:00、水・木 18:00〜22:00、火曜休み、予約電話は10:00〜11:00と17:00〜18:00、カード・電子マネー・QR 可、インボイス T1130001064030 (株式会社Ｍｕｎｄｏ Ｒｉｃｏ)。口コミ (2024〜2026年、英語): 近江牛丼500円 (大盛り700円)、コロッケ200円、肉懐石7,800円、七輪の炭火、焼きすき、近江牛の脂で焼く野菜、個室。',
      confidence: 'medium', sources: [TB, SITE, CORP, R + 'B492371188/', R + 'B520432704/', R + 'B522542876/', R + 'B522608534/', R + 'B522848625/', R + 'B529080898/', R + 'B530931754/', R + 'B531139368/', R + 'B533359530/', R + 'B533748617/', R + 'B536860703/', R + 'B538317898/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only at 10:00–11:00 and 17:00–18:00; you grill at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中町通竹屋町上ル末丸町265-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015891, 135.769577); cross-checked: GSI 京都府京都市中京区末丸町265番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531139368/', R + 'B522542876/'],
    price_note: 'Prices from February and July 2026 reviews.', last_checked: TODAY, items: [
      it('近江牛丼', 'gyudon', 'Omi beef rice bowl with namul and soup (lunch)', '¥500', 'Lunch', 'ask', 'no', 'Large ¥700 (July 2026).', 'gyudon'),
      it('', '', 'Omi beef croquette', '¥200', 'Lunch', 'no', 'no', 'July 2026.', 'croquette'),
      it('', '', 'Meat kaiseki course', '¥7,800', 'Dinner', 'ask', 'no', 'February 2026.', 'kaiseki'),
    ] }, {
    cuisine: '岡崎牧場の近江日野牛だけを使う炭火焼肉と肉懐石 (公式サイト)・昼: ナムルとスープ付きの近江牛丼500円、大盛り700円、近江牛コロッケ200円、ビフカツやミンチカツ、鴨川たかし御膳 (2026年の口コミ)・夜: 肉懐石のコース7,800円 (2026年2月) から「Ultimate」まで、七輪の炭火で焼く希少部位、生卵で食べる焼きすき、近江牛の脂で焼く野菜、締めのお茶漬けや煮麺、創作のデザート (2024〜2026年の口コミ)',
    neighborhood: '河原町丸太町に近い中町通。神宮丸太町駅から徒歩8分',
    gf_detail: '要確認。たれで食べる炭火の近江牛、生卵の焼きすき、牛丼、コロッケやカツ、締めの麺。グルテンの情報は公開されていない (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。近江牛の店で、野菜も近江牛の脂で焼く (公式サイト、2026年2月)。',
    notes: '[焼肉・丸太町、一つの牧場の近江日野牛] 御所近くの古民家で、岡崎牧場の近江日野牛だけを出す牛肉の店。牛はゆったりと長く育てられる。昼はナムルとスープ付きの近江牛丼が500円とお得、夜は七輪の炭火で焼く希少部位、卵で食べる焼きすき、締めの麺の肉懐石 (7,800円ほどから)。個室あり、電話予約は決まった時間のみ。火曜休み。',
  });
}

save();
