// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 103.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   - すき家 四条堀川店 — chain (national gyudon chain; seven Kyoto branches in this crawl)
//   + 牛 こうの (yakiniku and offal by Jingu-Marutamachi Stn, opened 11 July 2019)
//   + あーすきっちん (Earth Kitchen Company; organic bento shop with vegetarian-marked dishes and three eat-in seats)
//   + 六花亭 (tea house inside the grounds of Kiyomizu-dera: mitarashi dango, kakigori, udon)
//   + STYLE COFFEE (light-roast specialty coffee stand by Jingu-Marutamachi, opened 27 April 2019)
//   Left in the queue for the next batch (nearer than STYLE COFFEE, not drafted here): HOTEL KUU KYOTO 26041163 (hotel
//   breakfast buffet open to non-guests; operator not found yet), 若菜屋 御池本店 26022923 (retail wagashi; founding and
//   family succession still to be sourced from a page I can open).
//   Brand checks: data/kyoto.json grepped for the four Tabelog ids, こうの, あーす, Earth Kitchen, 六花亭, STYLE COFFEE and the
//   addresses (東丸太町11, 東丸太町9-7, 桝屋町360) — no records. Pending scripts osw1 b108, osw2 b97, osw6 b107, osw8 b109 and
//   osw13 b136 name none of these ids.
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-103');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26024831', 'chain: すき家 四条堀川店 is a branch of the national gyudon chain すき家; this crawl (scripts/sweep/kyoto-missed/shops.jsonl) lists seven Kyoto すき家 branches, and osw6 b106 skipped another branch (26022160) on the same evidence');

// ================================================================ 牛 こうの
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26032961/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:30']);
  put({
    id: 'kyoto_yakiniku_tb26032961_jingu_marutamachi', name: '牛 こうの', category: 'OMNI',
    lat: 35.01743443706054, lng: 135.77318577931683, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with sauce or salt, namul, yukgaejang soup and cold noodles to finish (Tabelog; March 2026 reviews); no gluten or allergy information on Tabelog.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku restaurant (tongue, skirt, Chateaubriand, tripe, small intestine, pork belly; 2025–2026 reviews); no vegan option mentioned.',
    hours_raw: 'Mon, Tue, Wed, Fri, Sat, Sun 17:00–22:30; closed Thursdays, but open when Thursday is a public holiday (Tabelog). Reservations taken; often fully booked, so book early (July 2025, November 2025 and October 2026 reviews); a July 2025 diner booked by phone 30 minutes ahead, and a March 2026 walk-in was seated for about 50 minutes before the next booking. Private hire for 20–50 people; Tabelog gives ¥5,000 a head for private parties and groups of 30 or more by arrangement. All-you-can-drink course ¥6,600 tax included (Tabelog). Service charge: the shop\'s own text on Tabelog reads 特になし (nothing in particular). Cards accepted; no e-money or QR (Tabelog). 42 seats including a counter; non-smoking; wheelchair accessible; no parking (Tabelog). English menu; BYO drinks and takeout listed (Tabelog). 1 min walk from Keihan Jingu-Marutamachi Stn (Tabelog). Opened 11 July 2019 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Marutamachi, east of the Kamo River on Marutamachi-dori — 116 m from Jingu-Marutamachi Stn',
    cuisine: 'Yakiniku of Kyoto beef with rare cuts and offal sourced through long-standing relationships, daily specials on a blackboard, yukgaejang soup and side dishes, draft beer ¥350 (Tabelog, shop\'s own text). An all-you-can-drink course of 9 dishes ¥6,600 tax included, with unlimited rice (Tabelog). Seen in reviews: the signature Bara Shabu and horumon (July 2025); an omakase-style course (November 2025, August 2026); green onion and salt tongue, grilled yukhoe, assorted namul, premium outside skirt with sauce, Chateaubriand, premium tripe and cold noodles to finish (March 2026); premium pork belly ¥1,680, triangle kalbi ¥1,780 and hoso (small intestine) ¥850 (March 2026); ice cream (March 2026); salted hoso (October 2026). Reviewers paid ¥4,000–10,000 a head (2025–2026).',
    website: null, gmaps: gm('牛 こうの 京都 東丸太町 焼肉'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Jingu-Marutamachi] A busy 42-seat yakiniku and offal restaurant by Jingu-Marutamachi Stn, run by an owner with 32 years in the meat trade: Kyoto beef, rare cuts and horumon, explained cut by cut, at ¥5,000–8,000 a head. Families with small children welcome; book ahead. Closed Thursdays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The shop\'s own text on Tabelog: run by a master with 32 years of experience across seven places, specialising in meat, who sources rare cuts through long-standing relationships. Opened 11 July 2019 (Tabelog). Reviewers describe an owner who explains each dish (July 2025), and in March 2026 a very tall owner, over 190 cm, who was warm and gentle in manner.',
      philosophy: 'The shop\'s own text on Tabelog: confident in judging and handling meat, serving fresh, high-quality cuts at reasonable prices.',
      specialty: 'Bara Shabu; offal platters; rare cuts of Kyoto beef.',
      anecdotes: [
        { text: 'A July 2025 family booked by phone 30 minutes ahead and parked bicycles in front; the place was full of regulars and families with infants, the staff handled small children with ease, and the owner, who looks intimidating, turned out to be friendly.', source: R + 'B486449790/' },
        { text: 'A July 2025 diner, used only to chain yakiniku, found the offal free of any smell even without sauce, but felt the staff were somewhat unfriendly and strict with first-timers.', source: R + 'B511090794/' },
        { text: 'After a concert at ROHM Theatre in March 2026, a diner who drove over without a booking was given about 50 minutes before the next reservation and finished with two large bowls of rice and oolong tea.', source: R + 'B529319446/' },
        { text: 'A March 2026 diner from out of town found the room packed mostly with locals and rated the Chateaubriand and premium tripe above expectations.', source: R + 'B524800155/' },
      ],
      japanese_sources_summary: '食べログ: 牛 こうの、焼肉・韓国料理・居酒屋、左京区東丸太町11-4、京阪「神宮丸太町駅」から徒歩1分。月火水金土日 17:00〜22:30、木曜休み (祝日は営業)。予約可、貸切20〜50名、カード可、電子マネー・QR不可、42席 (カウンターあり)、禁煙、車椅子可、駐車場なし、英語メニューあり、持ち込み可、テイクアウト可。サービス料: 特になし。オープン 2019年7月11日。飲み放題つきコース6,600円 (税込)。店の紹介 (英訳): 肉を専門に32年の経験を持つ店主、希少部位、黒板の本日のおすすめ、ユッケジャンスープ、生ビール350円。口コミ (2025〜2026年、英語): 家族連れや常連で満席、予約は早めに、肉の説明が丁寧、ホルモン、シャトーブリアン、冷麺。',
      confidence: 'medium', sources: [TB, R + 'B486449790/', R + 'B510962606/', R + 'B511090794/', R + 'B519077158/', R + 'B520717464/', R + 'B523831871/', R + 'B524800155/', R + 'B529319446/', R + 'B533694948/', R + 'B537700610/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu available (Tabelog). Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東丸太町11-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own text and course; reviews dated July 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.017434, 135.773186); nearest record kyoto_lannion_marutamachi about 13 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B529319446/', R + 'B524800155/'],
    price_note: 'Course price from Tabelog (tax included, seen November 2026); à la carte prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink course, 9 dishes, unlimited rice', '¥6,600', 'Course', 'ask', 'no', 'Tabelog, tax included.', 'nomihodai_course'),
      it('', '', 'Premium pork belly', '¥1,680', 'Yakiniku', 'ask', 'no', 'March 2026 review.', 'pork_belly'),
      it('', '', 'Triangle kalbi', '¥1,780', 'Yakiniku', 'ask', 'no', 'March 2026 review.', 'sankaku_kalbi'),
      it('', '', 'Hoso (small intestine)', '¥850', 'Horumon', 'ask', 'no', 'March 2026 review; salted hoso recommended in October 2026.', 'hoso'),
      it('', '', 'Bara Shabu', '', 'Yakiniku', 'ask', 'no', 'Signature dish, July 2025 review.', 'bara_shabu'),
      it('', '', 'Draft beer', '¥350', 'Drinks', 'ask', 'ask', 'Tabelog, shop\'s own text.', 'draft_beer'),
    ] }, {
    cuisine: '京都の牛肉の焼肉。長年の付き合いで仕入れる希少部位とホルモン、黒板の本日のおすすめ、ユッケジャンスープとサイドメニュー、生ビール350円 (食べログの店の紹介)。飲み放題つきで9品のコース6,600円 (税込)、ごはんおかわり自由 (食べログ)。口コミの料理: 名物の Bara Shabu とホルモン (2025年7月)。おまかせのコース (2025年11月、2026年8月)。ネギ塩タン、炙りのユッケ、ナムルの盛り合わせ、たれの上ハラミ、シャトーブリアン、上等の胃袋のホルモン、しめの冷麺 (2026年3月)。1,680円の Premium Pork Belly、1,780円の三角カルビ、850円のホソ (2026年3月)。アイスクリーム (2026年3月)。塩のホソ (2026年10月)。口コミではひとり4,000〜10,000円 (2025〜2026年)。',
    neighborhood: '丸太町通の鴨川の東、東丸太町。神宮丸太町駅から116m',
    gf_detail: '要確認。たれや塩の焼肉、ナムル、ユッケジャンスープ、しめの冷麺 (食べログ、2026年3月の口コミ)。食べログにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉の店 (タン、ハラミ、シャトーブリアン、胃袋、ホソ、豚バラ。2025〜2026年の口コミ)。ヴィーガンの対応は書かれていない。',
    notes: '[焼肉・神宮丸太町] 神宮丸太町駅のそば、いつも混み合う42席の焼肉とホルモンの店。肉を専門に32年の経験を持つ店主が、京都の牛肉、希少部位、ホルモンを部位ごとに説明しながら。ひとり5,000〜8,000円ほど。小さな子ども連れの家族も多い。予約は早めに。木曜休み。',
  });
}

// ================================================================ あーすきっちん (Earth Kitchen Company)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004233/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.earthkitchencompany.jp/'; const MENU = SITE + 'menu.php'; const ABOUT = SITE + 'about.php'; const ACC = SITE + 'access.php';
  const IG = 'https://www.instagram.com/earthkitchencompany/';
  const D = day(['10:30', '18:00']);
  put({
    id: 'kyoto_earth_kitchen_marutamachi', name: 'あーすきっちん (Earth Kitchen Company)', category: 'OMNI',
    lat: 35.01766810786556, lng: 135.7726259904814, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bento include deep-fried croquettes and a minced-meat cutlet, and the sides are seasoned with naturally brewed seasonings (official site); no gluten information. A low-allergy bento can be ordered ahead after consulting the shop (official site); a 2007 reviewer also noted allergy-friendly bento by advance order.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu marks vegetarian dishes (soy-milk croquette, bean and vegetable croquette, multigrain sorghum croquette, vegetable potato-salad croquette and a vegetable tofu burger; the last two also carry the egg mark), and says vegetarians can order those (official site). But the dashi is made from bonito flakes, dried sardines and kelp (official site), and the side dishes change daily, so ask which sides are free of fish stock and egg. A 2007 reviewer described vegetarian and vegan-friendly bento.',
    hours_raw: 'Official site: 10:30–18:00, closed Saturdays, Sundays, public holidays and in summer (a summer closure notice was posted for 2026). Tabelog gives Mon–Fri 10:30–18:30. Mainly takeaway; a few seats inside: one table (April 2007 review), three eat-in seats (February 2024 review). The daily bento can sell out by noon (February 2024) and in the past the shop often sold out and closed by evening (April 2007). Eat within one hour of purchase (official site). Catering: party platters for 5 from ¥7,560 and feast bento from ¥1,600 for 5 or more, by advance order; 30 or more bento can be discussed for weekend events (official site). No cards or e-money (Tabelog; QR not stated). On Marutamachi-dori, three doors east of Exit 4 of Keihan Jingu-Marutamachi Stn (official site), next to the yakitori shop Torito (April 2007 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: null, halal: false, open_late: false },
    neighborhood: 'Higashi-Marutamachi, east of the Kamo River on Marutamachi-dori — 63 m from Jingu-Marutamachi Stn',
    cuisine: 'Organic bento (official site): low-pesticide organic rice, seasonal vegetables grown with no or low pesticides, carefully sourced meat and fish, free-range eggs, tofu of Japanese soybeans and natural nigari, naturally brewed seasonings, and dashi from bonito flakes, dried sardines and kelp; everything handmade with no synthetic preservatives. Each bento is a main dish with three or four mostly vegetable sides that change daily. Official prices, tax included (seen November 2026): meat bento ¥1,050 (burdock hamburg steak simmered in miso, tea-simmered chicken, tofu meatballs in sweet-and-sour sauce, Japanese-style tofu hamburg with grated daikon and ponzu, hamburg steak in tomato sauce, minced-meat cutlet); fish bento ¥1,050 (lightly salted grilled fish, house miso-marinated mackerel); croquette bento ¥1,050 (nikujaga, vegetable potato salad, soy-milk cream, bean and vegetable, multigrain sorghum); a vegetable tofu burger bento ¥1,050; today\'s bento ¥1,030; keema curry with a fried egg (or a vegetable side instead) ¥850; any main with sides but no rice ¥930; a mini plate of one main and two sides ¥690. Reviews: brown rice or seven-tenths polished rice (2007, 2008), hijiki and simmered vegetables (2007, 2010), free-range chicken simmered in tea ¥950 (February 2024), a Japanese-style tofu hamburg bento ¥1,050 served hot, with sesame burdock, komatsuna with bonito flakes and simmered dried daikon (May 2026).',
    website: SITE, gmaps: gm('あーすきっちん 京都 東丸太町 弁当'), menu_url: MENU,
    notes: '[Bento · Jingu-Marutamachi] A long-running organic bento shop on Marutamachi-dori by the Kamo River: ¥1,050 boxes of a main and three or four vegetable sides on low-pesticide organic rice, with vegetarian-marked croquettes and a vegetable tofu burger, a low-allergy bento to order ahead, and three seats to eat in. Weekdays only; closed weekends, holidays and in summer.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The operator writes its name あーすきっちんかんぱにー in the site footer (official site). Reviews go back to 2007; a 2008 reviewer found the shop easy to spot by the human-shaped sign out front, and a 2016 reviewer came after seeing the bento on community TV.',
      philosophy: 'The official site: 「自然の恵みをお弁当に詰めました。」 — gentle, handmade bento from carefully chosen ingredients.',
      specialty: 'Bento of the day; tofu hamburg; vegetarian croquettes.',
      anecdotes: [
        { text: 'An April 2007 diner, put off before by the shop selling out and closing early, finally tried the multigrain tofu hamburg bento (¥735) and recommended eating it by the Kamo River, as the shop had room for only one table.', source: R + 'B112714131/' },
        { text: 'A February 2016 diner counted out ¥699 for the daily bento and was told ¥755 at the register; the price shown had been before tax.', source: R + 'B144297118/' },
        { text: 'Arriving around noon on a weekday in February 2024, a diner found the daily bento sold out but got one of three eat-in seats for the tea-simmered free-range chicken bento.', source: R + 'B479012782/' },
        { text: 'A May 2026 diner was surprised the Japanese-style tofu hamburg bento came hot and fresh, and found the flavours gentle and comforting.', source: R + 'B529273926/' },
      ],
      japanese_sources_summary: '公式サイト: オーガニックお弁当 あーすきっちん。「自然の恵みをお弁当に詰めました。」 お米は低農薬有機米、旬の無 (低) 農薬野菜、安全なお肉、お魚、平飼卵、国産大豆天然にがり豆腐、自然醸造の調味料、お出汁は鰹節、煮干し、昆布などの天然の素材から。手作り、合成保存料不使用。メインと野菜中心の副菜3〜4品、副菜は日替わり。メニューにベジタリアンと卵のマーク。お肉のお弁当、お魚のお弁当、コロッケのお弁当、七福 (野菜) 豆腐バーグ弁当 各1,050円、本日のお弁当1,030円、キーマカレー850円、各種おかずのみ930円、ミニおかず690円 (税込)。低アレルギーさん弁当は要相談。パーティー料理5人前7,560円から、ごちそう弁当1,600円から (5個以上)。AM10:30〜PM6:00、土曜・日曜・祝日と夏期休み。京阪「神宮丸太町駅」4番出口の東3軒目、左京区川端丸太町東丸太町9-7。事業者は あーすきっちんかんぱにー。食べログ: 月〜金 10:30〜18:30、カード・電子マネー不可。口コミ (2007〜2026年、英語): 菜食向けのお弁当、イートインの席3つ (2024年2月)、豆腐ハンバーグのお弁当1,050円 (2026年5月)。',
      confidence: 'medium', sources: [SITE, MENU, ABOUT, ACC, IG, TB, R + 'B112714131/', R + 'B116250677/', R + 'B117588003/', R + 'B118165572/', R + 'B144297118/', R + 'B144536688/', R + 'B479012782/', R + 'B489789838/', R + 'B529273926/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Japanese-only official site and menu; point-and-buy counter. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区川端丸太町東丸太町9-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current prices and a 2026 summer closure notice; Tabelog listing; review dated May 2026.' },
    pin_source: `Tabelog ${TB} (35.017668, 135.772626); next door to kyoto_sumibi_kushiyaki_torito (東丸太町9-5) about 10 m away, as the April 2007 review describes; kyoto_yakiniku_tb26032961_jingu_marutamachi (this batch) about 49 m; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu page, tax included (seen November 2026).', last_checked: TODAY, items: [
      it('本日のお弁当', '', 'Bento of the day (one fish, meat or egg dish and one tofu dish)', '¥1,030', 'Bento', 'ask', 'ask', 'Official site; changes daily.', 'todays_bento'),
      it('豆腐入り和風ハンバーグ,おろしポン酢添え弁当', '', 'Japanese-style tofu and chicken hamburg with grated daikon and ponzu', '¥1,050', 'Bento', 'ask', 'no', 'Official site; egg mark.', 'tofu_hamburg'),
      it('自家製鯖の味噌漬弁当', '', 'House miso-marinated mackerel bento', '¥1,050', 'Bento', 'ask', 'no', 'Official site.', 'saba_miso'),
      it('豆乳のクリーミィコロッケ', '', 'Creamy soy-milk croquette bento', '¥1,050', 'Bento', 'no', 'ask', 'Official site; vegetarian mark; deep-fried croquette; sides change daily and dashi is fish-based.', 'soy_milk_croquette'),
      it('お豆と野菜のコロッケ', '', 'Bean and vegetable croquette bento', '¥1,050', 'Bento', 'no', 'ask', 'Official site; vegetarian mark; sides change daily and dashi is fish-based.', 'bean_croquette'),
      it('七福（野菜）豆腐バーグ弁当', '', 'Vegetable tofu burger bento', '¥1,050', 'Bento', 'ask', 'no', 'Official site; vegetarian and egg marks.', 'veg_tofu_burger'),
      it('キーマカレー(インド風ドライカレー）', '', 'Keema curry with a fried egg (or a vegetable side)', '¥850', 'Curry', 'ask', 'no', 'Official site; minced chicken.', 'keema_curry'),
      it('低アレルギーさん弁当', '', 'Low-allergy bento (advance order)', '', 'Bento', 'ask', 'ask', 'Official site; ask the shop for details.', 'low_allergy_bento'),
    ] }, {
    cuisine: 'オーガニックのお弁当 (公式サイト): 低農薬有機米、旬の無 (低) 農薬野菜、安全なお肉とお魚、平飼卵、国産大豆と天然にがりの豆腐、自然醸造の調味料、お出汁は鰹節と煮干しと昆布から。すべて手作りで合成保存料は使わない。メインと野菜中心の副菜3〜4品、副菜は日替わり。公式の値段、税込 (2026年11月): お肉のお弁当1,050円 (ごぼうたっぷり味噌煮込みハンバーグ、鶏の紅茶煮、豆腐入り肉団子の甘酢あん、豆腐入り和風ハンバーグのおろしポン酢添え、トマトソース煮込みハンバーグ、お肉のミンチかつ)。お魚のお弁当1,050円 (魚の甘塩焼き、自家製鯖の味噌漬)。コロッケのお弁当1,050円 (肉じゃが、野菜ポテトサラダ、豆乳のクリーミィ、お豆と野菜、雑穀高きび)。七福 (野菜) 豆腐バーグ弁当1,050円。本日のお弁当1,030円。目玉焼きのせのキーマカレー850円 (目玉焼きを野菜のおかずに替えられる)。ごはんなしの各種おかずのみ930円。メイン1品と副菜2品のミニおかず690円。口コミ: 玄米や七分づきのごはん (2007年、2008年)、ひじきや野菜の煮物 (2007年、2010年)、平飼い鶏の紅茶煮950円 (2024年2月)、温かい豆腐入り和風ハンバーグのお弁当1,050円、ごぼうのごま和え、小松菜のおかか和え、切り干し大根の煮物 (2026年5月)。',
    neighborhood: '丸太町通の鴨川の東、東丸太町。神宮丸太町駅から63m',
    gf_detail: '要確認。コロッケやミンチかつの揚げ物があり、おかずは自然醸造の調味料で味つけ (公式サイト)。グルテンの情報はない。低アレルギーさん弁当は相談のうえ予約で (公式サイト)。2007年の口コミにも、予約すればアレルギーに配慮したお弁当ができるとある。',
    vegan_detail: '要確認。メニューにベジタリアンのマークがあり (豆乳のクリーミィコロッケ、お豆と野菜のコロッケ、雑穀高きびコロッケ、野菜ポテトサラダコロッケ、七福 (野菜) 豆腐バーグ。最後の2つは卵のマークも)、ベジタリアンの人はそれを選べる (公式サイト)。ただしお出汁は鰹節、煮干し、昆布から (公式サイト)、副菜は日替わりなので、魚のだしや卵を使わない副菜かどうかは要確認。2007年の口コミでは、ベジタリアンやヴィーガン向けのお弁当がある。',
    notes: '[お弁当・神宮丸太町] 鴨川のそば、丸太町通の長く続くオーガニックのお弁当の店。低農薬有機米にメインと野菜中心の副菜3〜4品で1,050円。ベジタリアンのマークのコロッケや七福 (野菜) 豆腐バーグ、予約で低アレルギーさん弁当。店内で食べられる席が3つ。平日のみ、土日祝と夏期は休み。',
  });
}

// ================================================================ 六花亭 (Kiyomizu-dera tea house)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014037/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_teahouse_tb26014037_kiyomizudera', name: '六花亭', category: 'OMNI',
    lat: 34.99458348007319, lng: 135.78294473831477, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mitarashi dango in a sweet soy glaze, warabimochi and kakigori, plus udon and soba (2020–2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango, warabimochi, zenzai and matcha shaved ice are on the menu (2020–2026 reviews), but there is no ingredient information, the udon and soba come in broth, and some kakigori and the matcha latte use milk (October 2026 review).',
    hours_raw: 'Tabelog: 9:00 until sunset; closing days not fixed. No cards, e-money or QR payments (Tabelog). Inside the grounds of Kiyomizu-dera, on the path towards Chawan-zaka, a little back from the main route and quieter than the tea houses in front of it, with public toilets close by (November 2024, November 2025, February 2026 and October 2026 reviews); a September 2026 diner stopped here after climbing Chawan-zaka into the temple. Phone charging was available in October 2026 (review). The website Tabelog lists (www5e.biglobe.ne.jp/~rokkatei/) returned 404 in November 2026.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Inside the grounds of Kiyomizu-dera, Higashiyama, on the path towards Chawan-zaka',
    cuisine: 'A tea house of sweets and simple noodles (reviews): mitarashi dango, freshly grilled, crisp outside and soft inside, five to a skewer (November 2021, March 2025, November 2025, February 2026), warabimochi and matcha (October 2020), zenzai (November 2024), chilled amazake (non-alcoholic, November 2024) and amazake with a hint of ginger (February 2026), kakigori in summer and autumn: matcha shaved ice "Uji" ¥700, cheaper than the Uji Kintoki (September 2026), Uji milk kakigori and a matcha latte (October 2026). Udon (November 2021, May 2023, January 2026) and soba (January 2026). Reviewers paid under ¥1,000 a head, ¥1,000–2,000 for lunch (2024–2026).',
    website: null, gmaps: gm('六花亭 清水寺 茶屋'), menu_url: null,
    notes: '[Tea house · Kiyomizu-dera] A small tea house inside the grounds of Kiyomizu-dera, set a little back on the path to Chawan-zaka and quieter than the approach: freshly grilled mitarashi dango, warabimochi, amazake, matcha kakigori and bowls of udon or soba, for under ¥1,000 at most visits. Open from 9:00 until sunset; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A tea house within Kiyomizu-dera\'s grounds (Tabelog address; March 2025 and September 2026 reviews). Reviewers note the prices are a little lower than usual for a tourist spot (May 2023) and reasonable (January 2026).',
      philosophy: null,
      specialty: 'Mitarashi dango; matcha kakigori.',
      anecdotes: [
        { text: 'A solo traveller in October 2020, during the main hall\'s renovation, had never liked warabimochi until trying the firm yet soft, gently sweet version here with matcha.', source: R + 'B434219703/' },
        { text: 'A May 2023 diner found it quiet, a little off the main route, and the udon good, though the staff were somewhat indifferent.', source: R + 'B464978873/' },
        { text: 'A diner who had loved the mitarashi dango years earlier came back in March 2025 and called it the best ever: freshly made, warm and chewy, with just the right grill marks.', source: R + 'B515870769/' },
        { text: 'In the heat of September 2026, with over 200 people queuing for temple stamps, a diner who had just climbed Chawan-zaka revived with a ¥700 matcha kakigori.', source: R + 'B536166179/' },
      ],
      japanese_sources_summary: '食べログ: 六花亭、甘味処、東山区清水寺 清水寺境内、9:00〜日没、不定休、カード・電子マネー・QR不可、個室なし、貸切不可。食べログに載っている公式サイト (www5e.biglobe.ne.jp/~rokkatei/) は2026年11月に404。口コミ (2020〜2026年、英語): 清水寺の境内、Chawan-zaka へ向かう道、少し奥まって静か、近くにお手洗い。焼きたてのみたらし団子 (1本に5個)、わらび餅と抹茶、ぜんざい、冷たい甘酒、しょうがの甘酒、抹茶のかき氷700円、Uji Milk のかき氷、抹茶ラテ、うどん、そば。',
      confidence: 'low', sources: [TB, R + 'B434219703/', R + 'B443718078/', R + 'B451164887/', R + 'B464978873/', R + 'B494895664/', R + 'B494897109/', R + 'B515870769/', R + 'B517202120/', R + 'B521768287/', R + 'B522446227/', R + 'B536166179/', R + 'B537572705/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A casual temple tea house; no English menu noted. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水寺 清水寺境内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January, February, September and October 2026. The website Tabelog links returned 404.' },
    pin_source: `Tabelog ${TB} (34.994583, 135.782945); inside the temple grounds, nearest records kyoto_saryo_kiraku and kyoto_sakura_tb26025197_kiyomizu about 95–96 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536166179/', R + 'B515870769/', R + 'B537572705/'],
    price_note: 'Only one price seen, in a September 2026 review; no menu on Tabelog.', last_checked: TODAY, items: [
      it('みたらし団子', '', 'Mitarashi dango (grilled rice dumplings in a sweet soy glaze)', '', 'Sweets', 'ask', 'ask', 'November 2021 to February 2026 reviews.', 'mitarashi_dango'),
      it('', '', 'Matcha shaved ice "Uji"', '¥700', 'Sweets', 'ask', 'ask', 'September 2026 review.', 'kakigori_uji'),
      it('', '', 'Uji milk kakigori', '', 'Sweets', 'ask', 'no', 'October 2026 review.', 'kakigori_uji_milk'),
      it('わらび餅', '', 'Warabimochi', '', 'Sweets', 'ask', 'ask', 'October 2020 review.', 'warabimochi'),
      it('甘酒', '', 'Amazake (non-alcoholic)', '', 'Drinks', 'ask', 'ask', 'November 2024 and February 2026 reviews.', 'amazake'),
      it('うどん', '', 'Udon', '', 'Noodles', 'no', 'ask', '2021–2026 reviews.', 'udon'),
    ] }, {
    cuisine: '甘味と軽いめんの茶屋 (口コミ): 焼きたてで外はかりっと中はふんわりのみたらし団子、1本に5個 (2021年11月、2025年3月、2025年11月、2026年2月)。わらび餅と抹茶 (2020年10月)。ぜんざい (2024年11月)。冷たい甘酒、アルコールなし (2024年11月)、しょうがの香る甘酒 (2026年2月)。夏から秋のかき氷: 抹茶のかき氷「Uji」700円、Uji Kintoki より安い (2026年9月)、Uji Milk のかき氷と抹茶ラテ (2026年10月)。うどん (2021年11月、2023年5月、2026年1月)、そば (2026年1月)。口コミではひとり1,000円未満、昼食で1,000〜2,000円 (2024〜2026年)。',
    neighborhood: '東山、清水寺の境内、Chawan-zaka へ向かう道',
    gf_detail: '要確認。甘いしょうゆだれのみたらし団子、わらび餅、かき氷、うどんとそば (2020〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。団子、わらび餅、ぜんざい、抹茶のかき氷がある (2020〜2026年の口コミ)。ただし材料の情報はなく、うどんとそばはつゆ、一部のかき氷と抹茶ラテには牛乳 (2026年10月の口コミ)。',
    notes: '[甘味・清水寺] 清水寺の境内、Chawan-zaka へ向かう道の少し奥まった静かな茶屋。焼きたてのみたらし団子、わらび餅、甘酒、抹茶のかき氷、うどんやそば。たいていひとり1,000円未満。9時から日没まで、現金のみ。',
  });
}

// ================================================================ STYLE COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26032337/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.stylecoffee.jp/'; const ACC = SITE + 'about'; const LAW = SITE + 'law';
  const WD = day(['08:30', '17:00']); const WE = day(['09:00', '17:00']);
  put({
    id: 'kyoto_style_coffee_marutamachi', name: 'STYLE COFFEE', category: 'OMNI',
    lat: 35.01830145786401, lng: 135.7689955504903, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, plus banana cake, apple and red-bean pies, muffins and weekend cinnamon rolls (2024–2026 reviews); no gluten or allergy information on the official site.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drip coffee, espresso and cold brew are served alongside milk lattes (2023–2026 reviews); no plant milk or ingredient information for the cakes is given (official site; reviews).',
    hours_raw: 'Official site: weekdays 8:30–17:00, weekends 9:00–17:00, closed Mondays and Fridays. Tabelog instead gives every day 9:00–17:00. No reservations; takeout (Tabelog). Cards (JCB, AMEX), e-money and QR payments accepted (Tabelog). A small stand with a few chairs and a long bench but no tables (April 2024 and February 2025 reviews); a February 2025 reviewer called it a standing bar. Non-smoking; no parking (Tabelog). Ground floor of ペアリーフ御所東 on Kawaramachi-dori, about 5 min walk from Keihan Jingu-Marutamachi Stn and 11 min from Marutamachi subway Stn (Tabelog). Opened 27 April 2019 (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori, east of the Imperial Palace — 297 m from Jingu-Marutamachi Stn',
    cuisine: 'A specialty coffee stand focused on light roasts that bring out each bean\'s character, with tastings by origin, farm and variety and a "Sensory Lab" for cuppings, workshops and training wholesale clients (official site). Beans to take home or by mail: single origins such as Honduras, Costa Rica, Ethiopia, Kenya and an espresso-roast Brazil, about ¥1,730–6,300 for 200 g or 500 g, drip bags ¥450 and subscriptions (official online shop, seen November 2026). Seen in reviews: Honduras light roast with a floral aroma (February 2023); hot caffe latte ¥500 (November 2023); Ethiopian cold brew ¥500 and banana cake ¥350 (February 2024); iced caffe latte ¥550 (April and August 2024); Brazil light roast (July 2024); hand-dripped coffee and lattes from freshly ground beans (February 2025); espresso with sudachi syrup and soda, apple pie and large muffins (July 2025); weekend-only cinnamon rolls, a red-bean pie and Kenyan cold brew (May 2026).',
    website: SITE, gmaps: gm('STYLE COFFEE 京都 桝屋町'), menu_url: null,
    notes: '[Coffee · Jingu-Marutamachi] A pared-back light-roast specialty coffee stand on Kawaramachi-dori near the Imperial Palace: single-origin drip, concentrated lattes, cold brew and espresso-and-soda drinks, beans to take home, and cakes and weekend cinnamon rolls. A few chairs, no tables. Closed Mondays and Fridays (official site).',
    chef_bio: { chef_name: '黒須工', roles: ['Owner (the seller named on the online shop\'s legal notice)'], origin: null,
      background: 'The legal notice of the shop\'s online store names the business as 黒須工 at the stand\'s address (official site). A February 2025 reviewer wrote that the owner came from WEEKENDERS COFFEE and that the stand had been recommended in a coffee book by the owner of ONIBUS. Opened 27 April 2019 (Tabelog).',
      philosophy: 'The official site: high-quality coffee and knowledge, under three ideas — Face The Coffee (tasting by origin, farm and variety), Range Of Coffee (light roasting to show each bean\'s character, with tips for enjoying light roasts at home) and Sensory Lab (experiments, cuppings and workshops).',
      specialty: 'Light-roast single origins; iced caffe latte; weekend cinnamon rolls.',
      anecdotes: [
        { text: 'On a sweltering August 2024 day a diner, a little daunted by the stylish room and two handsome staff chatting, watched an iced latte poured at about 9.5 parts milk to 0.5 espresso and was amazed how strongly the coffee still came through.', source: R + 'B490919080/' },
        { text: 'A February 2025 diner praised the beans-first latte but, finding only chairs and nowhere to put a cup, asked for even a small table.', source: R + 'B501285426/' },
        { text: 'A regular of about ten visits wrote in July 2025 that the snacks and drinks had grown, praising a sudachi espresso soda, and in May 2026 the weekend cinnamon rolls; the reviewer preferred the red-bean pie to the sour apple pie.', source: R + 'B509322149/' },
        { text: 'A September 2025 diner liked the coffee, prices and clean shop but found the layout not very relaxing and the drinks slow, and suggested takeaway for a walk.', source: R + 'B513630015/' },
      ],
      japanese_sources_summary: '公式サイト: STYLE COFFEE、上京区桝屋町360-1 ペアリーフ御所東1階。Open / Weekday 8:30-17:00、Weekend 9:00-17:00、Closed / Monday and Friday。浅煎り、Face The Coffee、Range Of Coffee、Sensory Lab。オンラインショップ: シングルオリジンの豆 (ホンジュラス、コスタリカ、エチオピア、ケニア、ブラジル)、ドリップバッグ、定期便。特定商取引法に基づく表記: 事業者の名称 黒須工。食べログ: コーヒースタンド、毎日 9:00〜17:00、予約不可、カード (JCB、AMEX)・電子マネー・QR可、禁煙、テイクアウト、オープン 2019年4月27日。口コミ (2023〜2026年、英語): 浅煎りのスペシャルティコーヒー、カフェラテ500〜550円、水出しコーヒー500円、バナナケーキ350円、週末だけのシナモンロール、テーブルのない店内。',
      confidence: 'medium', sources: [SITE, ACC, LAW, TB, R + 'B461711084/', R + 'B474785086/', R + 'B479988459/', R + 'B483715245/', R + 'B489163391/', R + 'B490919080/', R + 'B501285426/', R + 'B503069814/', R + 'B509322149/', R + 'B513630015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Official site partly in English, with hours given in English; friendly, courteous counter service (November 2023 and August 2024 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区桝屋町360-1 ペアリーフ御所東 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and online shop; Tabelog listing; review dated May 2026.' },
    pin_source: `Tabelog ${TB} (35.018301, 135.768996); nearest record kyoto_bifuu_tainan_tears2 (桝屋町359) about 38 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B474785086/', R + 'B479988459/', R + 'B490919080/', SITE],
    price_note: 'Drink and cake prices from 2023–2024 reviews; bean prices from the official online shop (seen November 2026).', last_checked: TODAY, items: [
      it('', '', 'Caffe latte (hot)', '¥500', 'Coffee', 'ask', 'no', 'November 2023 review.', 'latte_hot'),
      it('', '', 'Iced caffe latte', '¥550', 'Coffee', 'ask', 'no', 'April and August 2024 reviews.', 'latte_iced'),
      it('', '', 'Cold brew', '¥500', 'Coffee', 'ask', 'ask', 'February 2024 review; Ethiopian then, Kenyan in May 2026.', 'cold_brew'),
      it('', '', 'Banana cake', '¥350', 'Sweets', 'ask', 'ask', 'February 2024 review.', 'banana_cake'),
      it('', '', 'Cinnamon roll (weekends only)', '', 'Sweets', 'no', 'ask', 'May 2026 review.', 'cinnamon_roll'),
      it('', '', 'Single-origin beans, 200 g / 500 g', '¥1,730–6,300', 'Beans', 'ask', 'ask', 'Official online shop.', 'beans'),
    ] }, {
    cuisine: '浅煎りで豆の個性を引き出すスペシャルティコーヒーのスタンド。産地、農園、品種ごとのテイスティング、カッピングやワークショップ、卸先のトレーニングの Sensory Lab (公式サイト)。持ち帰りや通販の豆: ホンジュラス、コスタリカ、エチオピア、ケニア、エスプレッソローストのブラジルなどのシングルオリジン、200gか500gで約1,730〜6,300円、ドリップバッグ450円、定期便 (公式オンラインショップ、2026年11月)。口コミ: 花のような香りのホンジュラスの浅煎り (2023年2月)。ホットのカフェラテ500円 (2023年11月)。エチオピアの水出しコーヒー500円とバナナケーキ350円 (2024年2月)。アイスカフェラテ550円 (2024年4月と8月)。ブラジルの浅煎り (2024年7月)。挽きたての豆のハンドドリップとラテ (2025年2月)。すだちのシロップのエスプレッソソーダ、アップルパイ、大きなマフィン (2025年7月)。週末だけのシナモンロール、あんこのパイ、ケニアの水出しコーヒー (2026年5月)。',
    neighborhood: '河原町通、御所の東。神宮丸太町駅から297m',
    gf_detail: '要確認。コーヒーのほか、バナナケーキ、アップルパイとあんこのパイ、マフィン、週末のシナモンロール (2024〜2026年の口コミ)。公式サイトにグルテンやアレルギーの情報はない。',
    vegan_detail: '要確認。ドリップ、エスプレッソ、水出しコーヒーと牛乳のラテ (2023〜2026年の口コミ)。植物性ミルクやケーキの材料の情報はない (公式サイト、口コミ)。',
    notes: '[コーヒー・神宮丸太町] 御所に近い河原町通の、すっきりした浅煎りのスペシャルティコーヒーのスタンド。シングルオリジンのドリップ、濃いラテ、水出しコーヒー、エスプレッソソーダ、持ち帰りの豆、ケーキと週末のシナモンロール。椅子はあるがテーブルはない。月曜と金曜休み (公式サイト)。',
  });
}

save();
