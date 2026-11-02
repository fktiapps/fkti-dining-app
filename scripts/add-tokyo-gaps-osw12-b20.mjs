// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 20.
//   + Guruatsu STAND (take-out tofu muffins, scones and vegetable deli near Kappabashi; Wednesdays and Fridays)
//   + Craft Ramen BiT (7-seat consommé ramen counter near Iriya; opened February 2024) — no ramen block
//   + ラーメン長山 Ramen Nagayama (chicken-and-pork ramen and tsukemen by Uguisudani South Exit; since 2007) — no ramen block
//   + 純酒肴 吟 Junshukou Gin (seafood and sake izakaya on a Yushima second floor; kue hot pot in winter)
// Skipped (see skip()): ディップパレス 御徒町店 13199455, よもだそば 御徒町店 13256881, CoCo壱番屋 御徒町春日通り店 13035270.
// Undecided (no put, no skip): あさが家 13307245, まつり屋 上野本店 13284227 (no count found);
//   肉ダイニング ビアバックス 上野店 13247943 — no other branch confirmed, no count found;
//   ホルモン青木 上野店 13236362 — branches of the 亀戸 original found in 赤羽, 上野, 下北沢 (Tabelog 赤羽 page) = at least 4,
//   no full count found.
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). Guruatsu: a 2018 review mentions a second
//   Guruatsu with eat-in closer to Ueno — a small shop, drafted. BiT, Nagayama, Gin: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13199455', 'chain: ディップパレス has at least five same-brand shops (三田, 文京ガーデン, 飯田橋サクラテラス, 四谷四丁目, 御徒町; Gnavi/Hitosara listings) and its operator runs "5 brands, 15 shops" in Tokyo and Yokohama.');
skip('13256881', 'chain: よもだそば has at least five shops (日本橋, 新宿西口, 新宿西口2号店, 名古屋うまいもん通り広小路口店, 御徒町; Tabelog/Retty listings).');
skip('13035270', 'national chain: CoCo壱番屋; this is the 御徒町春日通り店.');

// ================================================================ Guruatsu STAND
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13181963/'; const R = TB + 'dtlrvwlst/';
  const WS = 'https://guruatsu.thebase.in/';
  const D = day(['11:30', '16:00']);
  put({
    id: 'tokyo_guruatsu_stand_matsugaya', name: 'Guruatsu STAND', category: 'OMNI',
    lat: 35.715282, lng: 139.785477, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: a May 2017 review called it a gluten-free scone and muffin shop, but a November 2018 review says the tofu muffins use whole-wheat flour; check each item.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: per 2018 reviews, the muffins and scones are made without butter, eggs, milk, white sugar or oil, using organic soy milk and tofu, and the lunch deli is vegetable-only (2021); a 2017 reviewer was unsure whether everything is strictly vegan, so ask.',
    hours_raw: 'Wednesdays and Fridays 11:30–16:00; closed other days (Tabelog; may change). Take-out only; no reservations. Cash only (no cards, e-money or QR, per Tabelog). Popular items such as zunda sweets can sell out by noon (November 2021). Online shop on BASE.',
    hours: { 2: D, 4: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsugaya 3-chōme, behind Kappabashi toward Higashi-Ueno — 10 min from Inaricho; 15 min from JR Ueno',
    cuisine: 'Take-out stand for tofu and soy-milk muffins and scones, natural foods and a vegetable deli (Tabelog; reviews) · muffins and scones such as chocolate banana ¥340 (May 2017), matcha and chestnut, beet and white chocolate tofu muffin, soy-milk zunda (limited), salted banana scone · vegetable box with organic vegetables ¥880 (June 2020) · soy-milk bread; amazake · natural foods and seasonings for sale',
    website: WS, gmaps: gm('Guruatsu STAND 松が谷3-8-4'), menu_url: null,
    notes: "[Bakery & deli · Kappabashi, plant-based muffins to take away] A tiny take-out stand on the back streets behind Kappabashi, open only on Wednesdays and Fridays, selling palm-sized muffins and scones made with tofu and soy milk rather than butter, eggs or milk, plus a vegetable-only lunch box (¥880 in 2020) and natural foods. The muffins are chewy, almost mochi-like, and only lightly sweet; flavours change, from chocolate banana and matcha-chestnut to beet and white chocolate. Most reviews are from 2017–2021, with a July 2026 visitor still buying soy-milk muffins. Cash only; the popular flavours go early.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing; a 2018 review mentions a second Guruatsu with eat-in seating closer to Ueno, and a 2017 review says the shop sells at the Aoyama Farmers Market. No source names the owner.', philosophy: 'Per 2018 reviews: baking without butter, margarine, eggs, milk, white sugar or preservatives.', specialty: 'Tofu and soy-milk muffins and scones.',
      anecdotes: [
        { text: '"This place offers incredibly healthy bread made without butter, margarine, eggs, milk, white sugar, or preservatives." — November 2018.', source: R + 'B397443725/' },
        { text: '"This Zunda muffin has a pleasantly chewy texture from the soymilk and a perfect level of sweetness." — July 2020, soy-milk zunda muffin (limited).', source: R + 'B428174117/' },
        { text: '"I took home three muffins to enjoy." — July 2026, soy-milk muffins.', source: R + 'B531725128/' },
      ],
      japanese_sources_summary: '食べログ: Guruatsu STAND、松が谷3-8-4、稲荷町駅から徒歩10分、JR上野駅から15分、水・金11:30〜16:00、ほかは休み、テイクアウトのみ、予約不可、カード・電子マネー・QR不可、野菜にこだわり、ベジタリアン向け。口コミ (2017年5月〜2026年7月): 豆腐と豆乳のマフィンとスコーン、チョコバナナマフィン340円、抹茶と栗、ビーツとホワイトチョコの豆腐マフィン、豆乳ずんだ、塩バナナスコーン、オーガニック野菜の野菜ボックス880円、バター・マーガリン・卵・牛乳・白砂糖・保存料不使用 (2018年)、全粒粉 (2018年)、2017年にはグルテンフリーのスコーンとマフィンの店という声、もちもちの食感、人気の品は昼に売り切れ、上野寄りにイートインのある店も、青山ファーマーズマーケットにも出店。',
      confidence: 'low', sources: [TB, WS, R + 'B268218137/', R + 'B268438614/', R + 'B296754307/', R + 'B340848865/', R + 'B397443725/', R + 'B411445322/', R + 'B427618343/', R + 'B428174117/', R + 'B462787206/', R + 'B531725128/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take-out counter; point at the muffins; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区松が谷3-8-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; most reviews 2017–2021, latest July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区松が谷三丁目8番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B268438614/', R + 'B427618343/'],
    price_note: 'Old prices from 2017 and 2020 reviews; likely higher now.', last_checked: TODAY, items: [
      it('', '', 'Chocolate banana muffin', '¥340', 'Muffins', 'ask', 'ask', 'May 2017.', 'choco_banana_muffin'),
      it('', '', 'Vegetable box (organic vegetables)', '¥880', 'Deli', 'ask', 'ask', 'June 2020.', 'vegetable_box'),
    ] }, {
    cuisine: '豆腐と豆乳のマフィンとスコーン、自然食品、野菜のデリのテイクアウトの店 (食べログ、口コミ)・チョコバナナ340円 (2017年5月)、抹茶と栗、ビーツとホワイトチョコの豆腐マフィン、豆乳ずんだ (限定)、塩バナナスコーンなど・オーガニック野菜の野菜ボックス880円 (2020年6月)・豆乳パン、甘酒・自然食品や調味料の販売',
    neighborhood: '松が谷三丁目、かっぱ橋の裏手から東上野方面。稲荷町駅から徒歩10分、JR上野駅から15分',
    gf_detail: 'グルテンフリーは要確認。2017年5月の口コミではグルテンフリーのスコーンとマフィンの店とされていますが、2018年11月の口コミでは豆腐マフィンに全粒粉を使用。品ごとに確認を。',
    vegan_detail: 'ヴィーガンの選択肢あり。2018年の口コミによると、マフィンとスコーンはバター、卵、牛乳、白砂糖、油を使わず、オーガニックの豆乳と豆腐で作り、ランチのデリは野菜のみ (2021年)。2017年には完全にヴィーガンかはわからないという声もあるので確認を。',
    notes: '[ベーカリー・デリ・かっぱ橋、植物性のマフィンをテイクアウト] かっぱ橋の裏通りにある小さなテイクアウトの店で、営業は水曜と金曜だけ。バター、卵、牛乳の代わりに豆腐と豆乳で作る手のひらサイズのマフィンとスコーン、野菜だけのお弁当 (2020年に880円)、自然食品を販売。マフィンはもちもちで甘さ控えめ、味はチョコバナナ、抹茶と栗、ビーツとホワイトチョコなどと替わります。口コミの多くは2017〜2021年で、2026年7月にも豆乳マフィンを買った人が。現金のみ、人気の味は早めになくなります。',
  });
}

// ================================================================ Craft Ramen BiT
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13294446/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['17:30', '20:00']);
  put({
    id: 'tokyo_craft_ramen_bit_shitaya', name: 'Craft Ramen BiT', category: 'OMNI',
    lat: 35.719398, lng: 139.782745, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles in salt or soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: consommé broths with pork chashu, and a venison broth and venison chashu in the premium bowl.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:00–14:30 (last order 14:15) and 17:30–20:00 (last order 19:45); closed Wednesdays and some other days, announced monthly on social media (Tabelog). No reservations. Tickets from a machine. Cash only (no cards, e-money or QR). 7 counter seats. Non-smoking. Opened 26 February 2024.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shitaya 1-chōme, an alley off Shōwa-dōri — 3 min from Iriya Stn; 7 min from JR Uguisudani South Exit; 10 min from JR Ueno Iriya Exit',
    cuisine: 'Consommé-based ramen from a chef from the well-known Ramen Kai (October 2026 review) · shio and shoyu ramen with thin noodles and a clear broth; seasoned-egg shoyu ramen ¥1,250; premium shio ramen ¥1,700; limited "Takumi" consommé ramen made with venison, with venison chashu, seasoned egg ¥2,350; extra noodles ¥300 (2026 reviews)',
    website: null, gmaps: gm('Craft Ramen BiT 下谷1-12-25'), menu_url: null,
    notes: "[Ramen · Iriya, consommé ramen at a café-like counter] A seven-seat ramen counter in an alley near Iriya Station, opened in 2024 by a chef from the well-known Ramen Kai, that looks more like a calm café than a ramen shop. The broths are consommés, clear and deep: a shio and a shoyu with fine thin noodles and tender chashu (about ¥1,250 with egg), a ¥1,700 premium shio, and a limited Takumi bowl built on venison with a steak-like venison chashu (¥2,350). Reviewers in 2026 call it craft ramen in every sense; one questioned the ¥2,000-plus price of the consommé bowl. Cash only; closed Wednesdays, and evening hours are short.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 February 2024 (Tabelog)', background: 'Per an October 2026 review, run by a chef from the renowned Ramen Kai, specialising in consommé-based ramen. No source names the chef.', philosophy: null, specialty: 'Consommé ramen; venison Takumi ramen.',
      anecdotes: [
        { text: '"The broth, made with venison, features venison chashu that resembles a steak rather than traditional chashu." — October 2026, Takumi consommé ramen ¥2,350.', source: R + 'B536987265/' },
        { text: '"The beautifully presented bowl immediately catches the eye with its clear broth." — October 2026, shoyu ramen.', source: R + 'B536796225/' },
        { text: '"But I wonder what the deal is with the consomme ramen that costs over JPY 2000?" — October 2026.', source: R + 'B534756149/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): Craft Ramen BiT、下谷1-12-25 1F、入谷駅から徒歩3分、JR鶯谷駅南口から7分、JR上野駅入谷口から10分、月火木金土日11:00〜14:30 (L.O.14:15)・17:30〜20:00 (L.O.19:45)、水曜休み (ほか不定休、SNSで告知)、予約不可、カード・電子マネー・QR不可、カウンター7席、禁煙、2024年2月26日オープン。口コミ (2024年7月〜2026年10月): 有名店のRamen Kai出身の店主によるコンソメのラーメン、塩と醤油、細麺、澄んだスープ、味玉醤油ラーメン1,250円、特製塩ラーメン1,700円、限定の「匠」は鹿のスープと鹿のチャーシュー、味玉付き2,350円、替え玉300円、カフェのような落ち着いた店内、コンソメのラーメンの値段に疑問の声も。',
      confidence: 'medium', sources: [TB, R + 'B489265855/', R + 'B534756149/', R + 'B535941646/', R + 'B536349646/', R + 'B536364836/', R + 'B536695767/', R + 'B536796225/', R + 'B536987265/', R + 'B537538652/', R + 'B537658122/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区下谷1-12-25 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目12番25号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537538652/', R + 'B536364836/', R + 'B536987265/'],
    price_note: 'Prices from 2026 reviews (tax included); no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seasoned-egg shoyu ramen', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_shoyu'),
      it('', '', 'Premium shio ramen', '¥1,700', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei_shio'),
      it('', '', 'Takumi consommé ramen with seasoned egg (venison, limited)', '¥2,350', 'Ramen', 'no', 'no', 'October 2026; extra noodles ¥300.', 'takumi'),
    ] }, {
    cuisine: '有名店 Ramen Kai 出身の店主によるコンソメのラーメン (2026年10月の口コミ)・細麺と澄んだスープの塩と醤油、味玉醤油ラーメン1,250円、特製塩ラーメン1,700円、限定の「匠」コンソメラーメンは鹿のスープと鹿のチャーシュー、味玉付き2,350円、替え玉300円 (2026年の口コミ)',
    neighborhood: '下谷一丁目、昭和通りから入った路地。入谷駅から徒歩3分、JR鶯谷駅南口から7分、JR上野駅入谷口から10分',
    gf_detail: 'グルテンフリーではありません。塩や醤油のスープに小麦の細麺。',
    vegan_detail: 'ヴィーガンではありません。コンソメのスープに豚のチャーシュー、特製の丼は鹿のスープと鹿のチャーシュー。',
    notes: '[ラーメン・入谷、カフェのようなカウンターのコンソメラーメン] 入谷駅近くの路地にある7席のラーメンのカウンターで、有名店 Ramen Kai 出身の店主が2024年に開店。ラーメン屋というより落ち着いたカフェのよう。スープはコンソメで澄んで深く、塩と醤油は細麺とやわらかいチャーシュー (味玉付きで約1,250円)、特製塩1,700円、限定の「匠」は鹿のスープにステーキのような鹿のチャーシュー (2,350円)。2026年の口コミではまさにクラフトラーメンという声、コンソメの丼の2,000円超えの値段に疑問の声も。現金のみ、水曜休み、夜は短め。',
  });
}

// ================================================================ ラーメン長山
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13045680/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '23:50']);
  put({
    id: 'tokyo_ramen_nagayama_negishi', name: 'ラーメン長山 (Ramen Nagayama)', category: 'OMNI',
    lat: 35.720734, lng: 139.779724, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (thin or thick) in a chicken and pork-bone broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and tonkotsu broth with pork chashu.',
    hours_raw: 'Tue–Sat 11:00–23:50; Sun 11:00–22:00; closed Mondays (Tabelog; may change). No reservations. Tickets from a machine; staff ask your size (large is free; tsukemen up to 400 g free) and thick or thin noodles. Cash only. 12 counter seats in an L. Smoking allowed except 12:00–13:00 (Tabelog). One person ran the shop on an October 2026 evening. Opened 15 December 2007.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Negishi 1-chōme, just east of JR Uguisudani South Exit across the overpass — 3 min',
    cuisine: 'Rich, creamy chicken-paitan and tonkotsu ramen and tsukemen (reviews) · ramen ¥950 (September 2026); seasoned-egg chashu ramen ¥1,350 (October 2026); miso and shoyu ramen; chashu ramen; tsukemen with soft-boiled egg · free large size, choice of thin or thick noodles · condiments on the counter: shichimi, pepper, chilli miso, garlic, doubanjiang',
    website: null, gmaps: gm('ラーメン長山 根岸1-3-21'), menu_url: null,
    notes: "[Ramen · Uguisudani, rich chicken-and-pork ramen since 2007] A small L-shaped ramen counter just across the overpass from Uguisudani's South Exit, open since 2007 and still one of the area's most popular bowls. The broth is a thick, creamy blend of chicken paitan and pork bone that clings to the noodles yet is not too salty, served as shoyu, miso or tsukemen, with tender chashu; you choose thick or thin noodles, and a large portion (up to 400 g for tsukemen) costs nothing extra. Ramen is about ¥950, a seasoned-egg chashu bowl ¥1,350. Open until nearly midnight except Sundays; closed Mondays. Cash only, and smoking is allowed except at lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2007 (Tabelog)', background: 'Tabelog listing. An October 2026 diner saw one person running the shop. No source names the owner.', philosophy: null, specialty: 'Chicken-and-pork-bone ramen; tsukemen.',
      anecdotes: [
        { text: '"The rich and impactful broth was a delightful blend of chicken and pork bone flavors." — September 2026, ramen ¥950.', source: R + 'B535743412/' },
        { text: '"You can increase the portion for free up to 400 grams, so of course, I went for the maximum." — September 2026, tsukemen.', source: R + 'B294449450/' },
        { text: '"The noodles were flat and on the softer side. The broth was average." — September 2026.', source: R + 'B294449450/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン長山、根岸1-3-21、JR鶯谷駅南口から徒歩3分、火〜土11:00〜23:50、日11:00〜22:00、月曜休み、予約不可、カード・電子マネー・QR不可、カウンター12席、喫煙可 (12:00〜13:00は禁煙)、2007年12月15日オープン。口コミ (2026年9〜11月): 鶏白湯と豚骨の濃厚でクリーミーなスープ、ラーメン950円、味玉チャーシュー麺1,350円、味噌、醤油、つけ麺、大盛り無料 (つけ麺は400gまで)、太麺か細麺、卓上に七味、こしょう、辛味噌、にんにく、豆板醤、夜は一人で切り盛り、スープは普通という声も。',
      confidence: 'medium', sources: [TB, R + 'B294449450/', R + 'B498917992/', R + 'B535743412/', R + 'B536273056/', R + 'B536693496/', R + 'B536757791/', R + 'B537343895/', R + 'B537827295/', R + 'B537935973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask size and noodle thickness; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区根岸1-3-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目3番21号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535743412/', R + 'B537827295/'],
    price_note: 'Prices from 2026 reviews (tax included); no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥950', 'Ramen', 'no', 'no', 'September 2026; large size free.', 'ramen'),
      it('', '', 'Seasoned-egg chashu ramen', '¥1,350', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama_chashu'),
    ] }, {
    cuisine: '濃厚でクリーミーな鶏白湯と豚骨のラーメンとつけ麺 (口コミ)・ラーメン950円 (2026年9月)、味玉チャーシュー麺1,350円 (2026年10月)、味噌と醤油、チャーシュー麺、半熟卵のつけ麺・大盛り無料、細麺か太麺を選べる・卓上に七味、こしょう、辛味噌、にんにく、豆板醤',
    neighborhood: '根岸一丁目、JR鶯谷駅南口から跨線橋を渡ってすぐ東。徒歩3分',
    gf_detail: 'グルテンフリーではありません。鶏と豚骨のスープに小麦の麺 (細麺か太麺)。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と豚骨のスープに豚のチャーシュー。',
    notes: '[ラーメン・鶯谷、2007年からの濃厚な鶏豚骨ラーメン] 鶯谷駅南口から跨線橋を渡ってすぐの、L字の小さなラーメンのカウンターで2007年から。今もこの辺りで人気の一杯です。スープは鶏白湯と豚骨の濃厚でクリーミーな合わせで、麺によく絡みつつしょっぱすぎない。醤油、味噌、つけ麺で、やわらかいチャーシュー。太麺か細麺を選べ、大盛り (つけ麺は400gまで) は無料。ラーメンは約950円、味玉チャーシュー麺1,350円。日曜以外は深夜近くまで営業、月曜休み。現金のみ、昼以外は喫煙可。',
  });
}

// ================================================================ 純酒肴 吟
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13033235/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'tokyo_junshukou_gin_yushima', name: '純酒肴 吟 (Junshukou Gin)', category: 'OMNI',
    lat: 35.708294, lng: 139.772125, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: sashimi-led seafood menu, but simmered fish, tempura and hot pots are seasoned with unlisted sauces; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya — sashimi, simmered fish, kue hot pot on bonito dashi, crab, oysters.',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sundays, holidays, Obon, New Year and some other days (Tabelog). Reservations taken (easy to book, March 2026); children by phone. 16 seats: about 6 at the counter and 3 tables (September 2026). Heated-tobacco smoking area. Tabelog lists cards and QR (PayPay, au PAY); a September 2026 diner was charged a 3% surcharge for non-cash payment.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yushima 3-chōme (Bunkyō), コスモビル 2F, off the main street — 2 min from Exit A3 of Ueno-Hirokoji / Ueno-Okachimachi; 3 min from Yushima; 6 min from JR Okachimachi',
    cuisine: 'Hidden second-floor izakaya for fish and Japanese sake (Tabelog) · daily sashimi, with half-and-half portions: herring, sea bream cured in yuzu or kombu, stone flounder, squid (2026 reviews); menu (Tabelog, 2022): seared anago sashimi ¥850, natural kanpachi ¥950, bonito salt tataki ¥1,000, marinated tuna ¥900, sashimi platter from ¥2,000, bonito shuto ¥500, heshiko ¥650 · simmered sardines, simmered umazura-hagi with liver, spear squid, namerō, chicken tempura with curry salt, Akkeshi oysters, Seiko crab in season · winter kue hot pot course ¥9,000 (February 2026) · a wide sake list, e.g. Nabeshima ¥1,500',
    website: null, gmaps: gm('純酒肴 吟 湯島3-41-10'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Yushima, a hidden second-floor fish and sake bar] A small, quiet izakaya up the stairs of a Yushima building, easy to miss from the street, where the master is from Saitama and the counter seats face the kitchen. Fish leads: daily sashimi you can order half-and-half (sea bream cured in kombu or yuzu, herring, flounder), simmered fish with its liver, namerō, oysters from Akkeshi and Seiko crab in season, and in winter a ¥9,000 kue hot-pot course on bonito broth. The sake list is long. Most diners find it good value; one in September 2026 found the portions small, the sashimi thinly sliced and a 3% surcharge on card payments. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per a November 2025 review, the owner is from Saitama. No source names the owner or the chef.', philosophy: null, specialty: 'Sashimi; kue hot pot.',
      anecdotes: [
        { text: '"The sashimi platter featured two types: Ishikarei (stone flounder) and Tai (sea bream) with kombu kelp, and I appreciated the option for a half-and-half selection on the menu." — March 2026.', source: R + 'B63853734/' },
        { text: '"First, I tried the Kue sashimi… The main dish, Kue hot pot, had an exceptionally refined broth." — December 2025.', source: R + 'B519840308/' },
        { text: '"However, I was surprised to find a 3% surcharge for payments made by methods other than cash" — September 2026.', source: R + 'B536991390/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 純酒肴 吟、文京区湯島3-41-10 コスモビル 2F、上野広小路駅・上野御徒町駅A3出口から徒歩2分、湯島駅2番出口から3分、JR御徒町駅北口から6分、月〜土17:00〜22:00、日祝・お盆・年末年始休み (ほか不定休)、予約可、16席、加熱式たばこの喫煙所、カード・QR可。メニュー (2022年): 炙り穴子刺し850円、天然かんぱち950円、かつおの塩たたき1,000円、刺身盛り合わせ2,000円から、かつおの酒盗500円、へしこ650円。口コミ (2025年11月〜2026年9月): 日替わりの刺身、半々で注文可、ニシン、鯛の柚子漬け、昆布締め、イシガレイ、イワシの煮付け、ウマヅラの煮付けと肝、なめろう、鶏天のカレー塩、厚岸のカキ、セイコガニ、冬のクエ鍋コース9,000円、鍋島1,500円、店主は埼玉出身、2026年9月には量が少なめで現金以外は3%の手数料という声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B452988484/', R + 'B472324277/', R + 'B518231406/', R + 'B519840308/', R + 'B522549223/', R + 'B523876172/', R + 'B525822641/', R + 'B532929674/', R + 'B536991390/', R + 'B63853734/'] },
    cultural_comfort: { level: 'japanese', note: 'A small second-floor izakaya with a daily menu; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-41-10 コスモビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目41番10号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B522549223/'],
    price_note: 'À la carte prices from the Tabelog menu (2022); the kue course from February 2026.', last_checked: TODAY, items: [
      it('', '', 'Kue hot pot course (winter)', '¥9,000', 'Courses', 'ask', 'no', 'February 2026.', 'kue_nabe'),
      it('', '', 'Natural kanpachi sashimi', '¥950', 'Sashimi', 'ask', 'no', 'Tabelog menu, 2022.', 'kanpachi'),
      it('', '', 'Bonito salt tataki', '¥1,000', 'Sashimi', 'ask', 'no', 'Tabelog menu, 2022.', 'katsuo_tataki'),
      it('', '', 'Sashimi platter', 'from ¥2,000', 'Sashimi', 'ask', 'no', 'Tabelog menu, 2022.', 'sashimi_mori'),
    ] }, {
    cuisine: '魚と日本酒の、ビル2階の隠れ家のような居酒屋 (食べログ)・日替わりの刺身は半々でも注文可: ニシン、鯛の柚子漬けや昆布締め、イシガレイ、イカ (2026年の口コミ)。メニュー (食べログ、2022年): 炙り穴子刺し850円、天然かんぱち950円、かつおの塩たたき1,000円、まぐろ赤身の漬け900円、刺身盛り合わせ2,000円から、かつおの酒盗500円、へしこ650円・イワシの煮付け、ウマヅラの肝のせ煮付け、ヤリイカ、なめろう、カレー塩の鶏天、厚岸のカキ、季節のセイコガニ・冬のクエ鍋コース9,000円 (2026年2月)・日本酒が豊富、たとえば鍋島1,500円',
    neighborhood: '湯島三丁目 (文京区)、コスモビル 2F、大通りから入ったところ。上野広小路駅・上野御徒町駅A3出口から徒歩2分、湯島駅から3分、JR御徒町駅から6分',
    gf_detail: 'グルテンフリーは要確認。刺身中心の魚のメニューですが、煮付け、天ぷら、鍋の味付けは不明で、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、刺身、煮魚、かつおだしのクエ鍋、カニ、カキ。',
    notes: '[居酒屋・湯島、ビル2階の隠れた魚と日本酒の店] 湯島のビルの階段を上がった、通りからは見落としやすい小さく静かな居酒屋で、店主は埼玉出身、カウンターは厨房に向かいます。主役は魚: 半々でも頼める日替わりの刺身 (鯛の昆布締めや柚子漬け、ニシン、カレイ)、肝のせの煮付け、なめろう、季節には厚岸のカキやセイコガニ、冬はかつおだしのクエ鍋コース9,000円。日本酒も豊富。多くの人はお手頃と感じていますが、2026年9月には量が少なく刺身が薄い、カード払いに3%の手数料という声も。日曜・祝日休み。',
  });
}

save();
