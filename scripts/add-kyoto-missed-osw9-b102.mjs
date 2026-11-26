// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 102.
// Core and notable have nothing left in the lane; rest list, nearest-first (queue.mjs ... next rest 2000):
//   - めしや 宮本むなし 御池 — large parent: SRS Holdings (和食さと group), per the official app's App Store listing
//   - 西利 清水店 — retail food shop (pickles, takeaway)
//   + noden. (Nijo; restaurant owned by the actor 速水もこみち, opened 10 August 2026)
//   + 花鏡 (Kakyo; kaiseki with French touches on Sanjo Jingu-michi, opened 4 February 2017)
//   + 料理旅宿 井筒安 (Izuyasu; restaurant-inn by Higashi Honganji, founded 1839; dining without a stay)
//   + よこやま (Yokoyama; teppanyaki and okonomiyaki in a 100-year-old townhouse near Nijo Castle)
//   Brand checks: data/kyoto.json grepped for noden, 速水, 花鏡, Kakyo, kyoto-kakyo, 井筒安, izuyasu, Idutsuyasu, よこやま and the
//   four addresses — no records. Pending scripts osw1 b107, osw8 b108, osw13 b135 name none of these ids.
//   Pins: Tabelog /en/ geo; not OSM-checked by the worker.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-102');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005433', 'large parent: めしや 宮本むなし is a set-meal chain whose official app (App Store, developer and seller SRS HOLDINGS CO.,LTD.) finds 宮本むなし shops and SRS Group restaurants such as 和食さと; 御池 is one branch');
skip('26021003', 'retail food shop (Greg 11-07 ruling): 西利 清水店 is a takeaway pickle shop on the Kiyomizu approach, one branch of the Kyoto pickle maker 西利 (nishiri.co.jp links a shop list); founding date not sourced, no GF or vegan options sourced (2017–2025 reviews)');

// ================================================================ noden.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045423/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://noden-restaurant.jp/'; const LOC = SITE + 'pages/location'; const CO = SITE + 'pages/company';
  const TC = 'https://www.tablecheck.com/en/noden'; const TCR = 'https://www.tablecheck.com/en/noden/reserve';
  const D = day(['10:00', '17:00'], ['18:30', '21:30']);
  put({
    id: 'kyoto_noden_nijo', name: 'noden.', category: 'OMNI',
    lat: 35.01155199786379, lng: 135.75485063043206, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The dinner course has had brioche, spring rolls, focaccia and a mezze maniche pasta (August–October 2026 reviews), and lunch is curry or a sandwich (October 2026 review); no gluten or allergy information on the official site or TableCheck.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single omakase course with shrimp and caviar, scallops and prosciutto, fish, duck, aged beef and lamb (August–October 2026 reviews); no vegan option mentioned.',
    hours_raw: 'Official site: takeout 10:00–17:00; standing bar 10:00–17:00 (L.O. 16:30), no reservation needed; lunch 11:00–14:30 (L.O. 13:30), Saturdays and Sundays only, public holidays irregularly; dinner 18:30–21:30 (L.O. 21:00), by reservation only; closed Wednesdays. Tabelog gives a different weekday start (13:00–17:00 on weekdays, 10:00–17:00 at weekends and on public holidays) and "lunch every other weekend, 11:00–15:00", and says lunch cannot be booked. An October 2026 lunch-goer queued from 7:30 for numbered lottery tickets handed out at 9:00, then came back at 11:00. Dinner (TableCheck): all bookings start at 18:30; card details are taken at booking but "Payment must be made in cash on the day of your visit" — Tabelog instead lists cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR; 7 or more guests by phone; children only if they can order from the adults\' menu; no strong perfume; late guests may miss courses, and a booking may be cancelled 15 minutes after the reserved time. Seating: a standing area at the entrance, a live kitchen at the back of the ground floor ringed by a white leather counter, and tables and semi-private rooms upstairs (official site); reviewers in August and September 2026 counted about eight seats at the U-shaped counter. Non-smoking; no parking (Tabelog). In a renovated townhouse over 100 years old near Nijo Castle, 5–6 min walk from Exit 2 of Karasuma-Oike Stn (official site; October 2026 review). Opened 10 August 2026 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-dori north of Oike, near Nijo Castle — 428 m from Nijojo-mae Stn',
    cuisine: 'Genre-free dishes built on Kyoto ingredients plus produce from farmers and fishermen around Japan (official site). Dinner is one omakase course, ¥25,300 tax included, with a ¥9,000 drink pairing (TableCheck); reviewers paid ¥25,000 (August and September 2026, pairing ¥8,000 in September) and ¥26,000 with an eleven-glass ¥9,000 wine pairing (October 2026). The August 2026 course: amuse "Experience" (sweet shrimp marinated in Shaoxing wine, aromatic vegetables, cream sauce and caviar, with brioche and grilled lime), corn soup with a corn tuile, scallop and prosciutto salad of charred and raw vegetables, Kamiyama shiitake in vegetable broth with burnt Kaneyama miso, deep-fried spring roll, aromatic steamed Spanish mackerel or beltfish, Nanatani duck mezze maniche, aged beef with chimichurri and anchovy, a rice bowl of hogget, and a dessert of financier, grilled fruit, mascarpone and sorbet. In October 2026 the soup was a Turkish-style eggplant soup with mint and tomato oils, the spring roll held sardine (or Pacific saury) with an olive and pepper sauce, focaccia came with olive oil, and the mackerel was steamed with Kujo green onions and lime. Lunch (October 2026): beef curry ¥2,500 or a sandwich ¥3,000, each with vegetable soup, pudding and coffee or tea. The standing bar serves wine with small bites (official site).',
    website: SITE, gmaps: gm('noden. 京都 押西洞院町'), menu_url: TC,
    notes: '[Innovative · Nijo] The actor 速水もこみち\'s first restaurant (August 2026), in a century-old townhouse near Nijo Castle: a ¥25,300 omakase of Kyoto and regional produce mixing Italian, Chinese and Mediterranean ideas at a small U-shaped counter, a walk-in standing bar from 10:00, and weekend lunch by lottery ticket. The owner cooks only now and then; several reviewers did not meet the owner. Closed Wednesdays.',
    chef_bio: { chef_name: 'Mocomichi Hayami (速水もこみち)', roles: ['Owner'], origin: null,
      background: 'The official site: a restaurant owned by the actor and cook 速水もこみち, who produces everything from the food to the tableware and the space and cooks there from time to time as chef and operator. TableCheck calls it the first restaurant the actor has led. The business office on the company page is in Nishi-Waseda, Shinjuku, Tokyo. The name, says the site, joins "node" and "en" (ご縁, connection), and its "no" also stands for farming (農). An August 2026 reviewer notes the opening day, 10 August, is the owner\'s birthday; an October 2026 reviewer was greeted by two chefs, one specialising in Italian and one in Chinese cooking.',
      philosophy: 'The official site: to connect producers and diners through food, passing on the work of the farmers and fishermen the owner has come to know across Japan.',
      specialty: 'Omakase course; Kamiyama shiitake with burnt miso; Nanatani duck pasta.',
      anecdotes: [
        { text: 'An August 2026 diner who got in on a last-minute cancellation was greeted from behind by the owner and wrote, thrilled, about how tall the owner is; the owner was described as loving barbecue, which inspired the charred-vegetable salad.', source: R + 'B534813043/' },
        { text: 'Several September and October 2026 diners came hoping to meet the owner, did not, and still liked the course; one praised the dessert above all.', source: R + 'B535524871/' },
        { text: 'A September 2026 diner found the operation not up to standard: a stiff, silent atmosphere that the U-shaped live kitchen did nothing to lift.', source: R + 'B534961514/' },
        { text: 'A September 2026 diner noted that cutlery was not changed, so mint sauce from the soup was still on the spoon for the shiitake broth, and thought ¥25,000 plus ¥8,000 for pairing high for Kyoto.', source: R + 'B536762569/' },
        { text: 'For an October 2026 weekend lunch a diner queued from 7:30, got the fourth lottery ticket at 9:00 (the second in line had come before 7:00), and found the curry sweet and good but the soup under-salted and the pickles too vinegary.', source: R + 'B536724143/' },
      ],
      japanese_sources_summary: '公式サイト: 「noden.」 ノーデン。俳優、そして料理人である速水もこみちがオーナーを務めるレストラン。元離宮二条城に近い築100余年の京町家。速水もこみち自身も不定期でシェフ・オペレーターとして料理を振る舞う。入り口のスタンディングエリア (予約なし、1杯から)、1階奥の真っ白のレザーカウンターに囲まれたライブキッチン、2階のテーブルと半個室。noden.の「no」は「農」でもあり、全国の農家さんと漁師さん。中京区押西洞院町610番地。テイクアウト10:00〜17:00、立ち飲み10:00〜17:00 (L.O.16:30)、ランチ11:00〜14:30 (L.O.13:30、土日のみ、祝日は不定期)、ディナー18:30〜21:30 (L.O.21:00、完全予約制)、水曜定休。事業所は東京都新宿区西早稲田。TableCheck: おまかせコース25,300円、ペアリング9,000円 (税込)、18:30一斉スタート、当日は現金払い。食べログ: 2026年8月10日オープン、カード可、ランチは予約不可。口コミ (2026年8月〜10月、英語): U字のカウンターに8席ほど、イタリアンと中華の料理人、9品ほどのコース、ランチは整理券 (9時配布)、カレー2,500円、サンドイッチ3,000円。',
      confidence: 'medium', sources: [SITE, LOC, CO, TC, TCR, TB, R + 'B533932498/', R + 'B534813043/', R + 'B534961514/', R + 'B535455864/', R + 'B535524871/', R + 'B536724143/', R + 'B536762569/', R + 'B536921804/', R + 'B538024828/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking in English on TableCheck; the English parts of the handwritten menu were written by the chef (August 2026 review). Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院通御池上る押西洞院町610番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and TableCheck booking page; Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (35.011552, 135.754851); nearest records kyoto_ikkon_oike and kyoto_imaya_coffee about 87–88 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TC, R + 'B538024828/', R + 'B536724143/'],
    price_note: 'Course and pairing prices from TableCheck (tax included, seen November 2026); lunch prices and dishes from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥25,300', 'Dinner', 'ask', 'no', 'TableCheck; all seats start at 18:30.', 'omakase'),
      it('', '', 'Drink pairing', '¥9,000', 'Drinks', 'ask', 'ask', 'TableCheck; eleven glasses of wine in October 2026.', 'pairing'),
      it('', '', 'Kamiyama shiitake with burnt Kaneyama miso', '', 'Dinner course', 'ask', 'ask', 'August and October 2026 reviews.', 'kamiyama_shiitake'),
      it('', '', 'Nanatani duck mezze maniche', '', 'Dinner course', 'no', 'no', 'August and October 2026 reviews.', 'duck_pasta'),
      it('', '', 'Curry (lunch, with soup, dessert and a drink)', '¥2,500', 'Lunch', 'ask', 'no', 'October 2026 review.', 'lunch_curry'),
      it('', '', 'Sandwich (lunch, with soup, dessert and a drink)', '¥3,000', 'Lunch', 'no', 'no', 'October 2026 review.', 'lunch_sandwich'),
    ] }, {
    cuisine: '京都の食材を軸に、全国の農家さんや漁師さんの食材を使ったジャンルにとらわれない料理 (公式サイト)。夜はおまかせコースのみで25,300円 (税込)、ペアリング9,000円 (TableCheck)。口コミでは25,000円 (2026年8月と9月、9月のペアリングは8,000円)、26,000円と11杯のワインのペアリング9,000円 (2026年10月)。2026年8月のコース: アミューズ「Experience」 (紹興酒に漬けた甘えび、香味野菜、クリームソース、キャビア、ブリオッシュと焼いたライム)、とうもろこしのスープとチュイル、焼いた野菜と生の野菜のほたてと生ハムのサラダ、Kamiyama のしいたけの野菜のだしと焦がした Kaneyama の味噌、春巻き、さわらやたちうおの香味蒸し、Nanatani の鴨のメッツェマニケ、熟成肉のチミチュリと塩漬けのアンチョビ、ホゲットの丼、フィナンシェと焼いたフルーツとマスカルポーネとソルベのデザート。2026年10月は、ミントとトマトのオイルのトルコ風のなすのスープ、いわし (またはさんま) の春巻きとオリーブとパプリカのソース、オリーブオイルのフォカッチャ、九条ねぎとライムのさわらの香味蒸し。昼 (2026年10月): ビーフカレー2,500円かサンドイッチ3,000円、どちらも野菜のスープ、プリン、コーヒーか紅茶つき。立ち飲みはワインと軽いつまみ (公式サイト)。',
    neighborhood: '西洞院通の御池の北、二条城の近く。二条城前駅から428m',
    gf_detail: '要確認。夜のコースにはブリオッシュ、春巻き、フォカッチャ、メッツェマニケのパスタ (2026年8月〜10月の口コミ)、昼はカレーかサンドイッチ (2026年10月の口コミ)。公式サイトにも TableCheck にもグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。おまかせコースのみで、えびとキャビア、ほたてと生ハム、魚、鴨、熟成肉、ラム (2026年8月〜10月の口コミ)。ヴィーガンの対応は書かれていない。',
    notes: '[イノベーティブ・二条] 俳優の速水もこみちの初めてのレストラン (2026年8月)。二条城の近くの築100年を超える町家で、京都と各地の食材にイタリアン、中華、地中海の発想を合わせた25,300円のおまかせを、小さなU字のカウンターで。10時からの予約なしの立ち飲み、週末の昼は整理券の抽選。オーナーが料理をするのは不定期で、会えなかったという口コミが多い。水曜休み。',
  });
}

// ================================================================ 花鏡 (Kakyo)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028833/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-kakyo.com/'; const MSG = SITE + 'message.html'; const MENU = SITE + 'menu.html'; const ACC = SITE + 'access.html'; const EN = SITE + 'en/index.html';
  const D = day(['12:00', '15:00'], ['18:00', '22:30']);
  put({
    id: 'kyoto_kakyo_jingumichi', name: '花鏡 (Kakyo)', category: 'OMNI',
    lat: 35.00930340787469, lng: 135.78458334038848, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses only, of seasonal kaiseki with French touches built on Japanese dashi (official site; 2017–2018 reviews); no gluten or allergy information on the official site.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dishes are built on Japanese dashi (2017–2019 reviews), and courses include sashimi, crab, soft roe, fish and meat (2018–2025 reviews); no vegan course mentioned.',
    hours_raw: 'Lunch 12:00–15:00 (L.O. 13:30), dinner 18:00–22:30 (L.O. 20:00) (official site; Tabelog gives lunch until 15:30). Closed Mondays, but open on Mondays for special reservations; check the online booking calendar for closing days (Tabelog); the official site lists closing days as irregular. Omakase courses only; reservation needed (official site, English page); online booking on TableCheck or by phone (official site). Prices include tax and service charge (official site); Tabelog lists a 10% service charge. Cards (VISA, Master, AMEX); no e-money (Tabelog). Seats: 7 at the counter and 9 at two tables (up to 14); private hire for 10 or more adults (official site); Tabelog gives 16 seats. Non-smoking; wheelchair accessible; free Wi-Fi; no parking (Tabelog). Ground floor of Schilf Jingu-michi on Sanjo, east of Jingu-michi: 2 min from the Sanjo Jingu-michi city bus stop, 6 min walk from Higashiyama or Keage Stn (Tabelog). Opened 4 February 2017 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori east of Jingu-michi, at the Okazaki side of Higashiyama — 477 m from Higashiyama Stn',
    cuisine: 'Seasonal kaiseki with a French touch, paired with wine, sake, house-made juices and blended teas (official site). Omakase courses only, tax and service included (official site, seen November 2026): lunch ¥10,000, ¥13,000 or ¥16,000; dinner ¥18,000, ¥24,000, or a ¥30,000 special course of selected seasonal ingredients. Sake pairing of 5–8 glasses ¥6,500–10,000 (half size ¥5,000–8,000); non-alcoholic pairing of 5–6 glasses ¥4,000–5,000, the amount and taste set on the day (official site). Reviews: dishes on Japanese dashi with Kyoto ingredients and desserts by a pastry chef, chestnut rice in November (November 2017); bamboo shoots, sashimi, meat and desserts at lunch (March 2018); a ¥7,000 lunch course (September 2023, March 2025); appetizers of crab and soft roe, fish with white miso, and maitake and Spanish mackerel rice at lunch (December 2025); a ¥20,000 dinner with five Hinamatsuri appetizers, a pairing of six sakes and wines, and bamboo shoot rice with fish (March 2026). An August 2023 reviewer describes pork steak and a cabbage roll with a highball.',
    website: SITE, gmaps: gm('kakyo 花鏡 京都 三条神宮道'), menu_url: MENU,
    notes: '[Kaiseki · Sanjo Jingu-michi] A sixteen-seat counter and table restaurant on the Okazaki side of Sanjo, run since 2017 by an owner-chef who is also a senior sommelier and sake sommelier: seasonal kaiseki with French touches, ¥10,000–16,000 at lunch and ¥18,000–30,000 at dinner, with sake, wine or non-alcoholic pairings. Closed Mondays.',
    chef_bio: { chef_name: 'Chujo Tomohito (中上朝史)', roles: ['Owner-chef'], origin: null,
      background: 'The owner, 中上朝史 (ちゅうじょう ともひと, official site; Chujo Tomohito on the English site), is a cook, a sake sommelier (kikizakeshi, 1997) and a senior sommelier (2012), and holds grade 2 of the Kyoto Kentei, taken in 2010 so as to introduce Kyoto\'s culture and history to the many visitors (official site). A November 2017 reviewer wrote that the chef had worked under another chef before opening this place. The name comes from 花鏡, the treatise in which Zeami, who spread Noh in Kyoto about 600 years ago, gathered a theory of the art; the owner took it for its best-known saying, 「初心忘るべからず」 (never forget the beginner\'s spirit) (official site). Opened 4 February 2017 (Tabelog).',
      philosophy: 'The official site: original, individual new Japanese cuisine served with wine, sake, house-made juices and blended teas; omakase only, so each plate\'s seasoning and presentation can give the course its rhythm.',
      specialty: 'Kaiseki with French touches; drink pairings chosen by the owner.',
      anecdotes: [
        { text: 'A diner from Tokyo who returned again and again between November 2017 and April 2019 had already booked December on the November 2017 visit; the omakase drinks began with a sparkling sake, light enough for those who seldom drink.', source: R + 'B280190996/' },
        { text: 'In March 2025 a diner called for a next-day lunch, got no answer and hung up, then was surprised by a return call and a seat at the ¥7,000 lunch.', source: R + 'B503636647/' },
        { text: 'A couple celebrating their wedding anniversary in March 2026 had the ¥20,000 course with five Hinamatsuri-themed appetizers; the reviewer noticed a slight fishy smell in some dishes and, too full by the end, would have liked a lighter bamboo shoot rice without fish.', source: R + 'B524039535/' },
        { text: 'Three friends at lunch in December 2025 enjoyed the different coloured plates and unusual presentation as much as the food.', source: R + 'B522724634/' },
      ],
      japanese_sources_summary: '公式サイト: kakyo 花鏡 (かきょう)。京都 三条神宮道。四季折々の懐石料理にフレンチのテイストが入った料理と、ワイン、日本酒のマリアージュ。店主 中上朝史 (ちゅうじょう ともひと)、利酒師 (1997年取得)、シニアソムリエ (2012年取得)、京都検定2級 (2010年取得)。独創性 (個性) のある新しい日本料理を、ワインや日本酒、手作りジュースや各種ブレンド茶とともに。屋号は世阿弥が能芸論を集大成した本から、「初心忘るべからず」。おまかせコースのみ: ランチ10,000円・13,000円・16,000円、ディナー18,000円・24,000円・30,000円 (税・サービス料込)、お酒のペアリング5〜8杯6,500〜10,000円 (ハーフ5,000〜8,000円)、ノンアルコールペアリング5〜6杯4,000〜5,000円。ランチ12時〜15時 (L.O.13時30分)、ディナー18時〜22時30分 (L.O.20時)、不定休、カウンター7席、テーブル2卓9席 (14席まで)、大人10名以上で貸切。食べログ (店舗の公式情報): 東山区中之町203 schilf神宮道 1F、月曜休み (特別な予約で営業)、サービス料10%、16席、2017年2月4日オープン。口コミ (2017〜2026年、英語): 日本のだしとフレンチ、パティシエのデザート、ランチ7,000円 (2023年、2025年)、20,000円のコース (2026年3月)。',
      confidence: 'medium', sources: [SITE, MSG, MENU, ACC, EN, TB, R + 'B280190996/', R + 'B326377201/', R + 'B469274851/', R + 'B470927676/', R + 'B503636647/', R + 'B522724634/', R + 'B524039535/', R + 'B529218097/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English and French versions of the official site; the owner took the Kyoto Kentei to introduce Kyoto to visitors (official site). Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条神宮道東入4丁目中之町203 schilf神宮道 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current course prices; Tabelog official listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.009303, 135.784583); nearest record kyoto_natural_bal_meat_up (中之町210-4) about 40 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu page, tax and service included (seen November 2026).', last_checked: TODAY, items: [
      it('旬の素材を使ったランチコース', '', 'Seasonal lunch course', '¥10,000–16,000', 'Lunch', 'ask', 'no', 'Official site; three prices: ¥10,000, ¥13,000, ¥16,000.', 'lunch_course'),
      it('旬の食材を使ったコース', '', 'Seasonal dinner course', '¥18,000', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_18000'),
      it('旬の食材をふんだんに使ったコース', '', 'Dinner course rich in seasonal ingredients', '¥24,000', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_24000'),
      it('旬の厳選食材をふんだんに使ったスペシャルコース', '', 'Special course of selected seasonal ingredients', '¥30,000', 'Dinner', 'ask', 'no', 'Official site.', 'dinner_30000'),
      it('', '', 'Sake pairing, 5–8 glasses', '¥6,500–10,000', 'Drinks', 'ask', 'ask', 'Official site; half size ¥5,000–8,000.', 'sake_pairing'),
      it('', '', 'Non-alcoholic pairing, 5–6 glasses', '¥4,000–5,000', 'Drinks', 'ask', 'ask', 'Official site; house-made juices and blended teas.', 'na_pairing'),
    ] }, {
    cuisine: '四季折々の懐石料理にフレンチのテイストを入れた料理を、ワイン、日本酒、手作りジュース、ブレンド茶と (公式サイト)。おまかせコースのみ、税・サービス料込 (公式サイト、2026年11月): ランチ10,000円・13,000円・16,000円、ディナー18,000円・24,000円、旬の厳選食材のスペシャルコース30,000円。お酒のペアリング5〜8杯6,500〜10,000円 (ハーフ5,000〜8,000円)、ノンアルコールペアリング5〜6杯4,000〜5,000円、量や好みは当日に (公式サイト)。口コミ: 日本のだしと京都の食材の料理、パティシエのデザート、11月は栗ごはん (2017年11月)。昼にたけのこ、刺身、肉、デザート (2018年3月)。7,000円のランチコース (2023年9月、2025年3月)。昼にかにと白子の前菜、白味噌の魚、舞茸とさわらのごはん (2025年12月)。20,000円のディナーでひな祭りの前菜5品、日本酒とワイン6種のペアリング、魚の入ったたけのこごはん (2026年3月)。2023年8月の口コミにはポークステーキとロールキャベツとハイボール。',
    neighborhood: '三条通の神宮道の東、東山の岡崎寄り。東山駅から477m',
    gf_detail: '要確認。日本のだしを使った、フレンチのテイストのある季節の懐石のおまかせコースのみ (公式サイト、2017〜2018年の口コミ)。公式サイトにグルテンやアレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。日本のだしの料理 (2017〜2019年の口コミ)、コースに刺身、かに、白子、魚、肉 (2018〜2025年の口コミ)。ヴィーガンのコースは書かれていない。',
    notes: '[懐石・三条神宮道] 三条通の岡崎側、カウンターとテーブルの16席。シニアソムリエで利酒師でもある店主が2017年から営む店。フレンチのテイストを入れた季節の懐石を、昼10,000〜16,000円、夜18,000〜30,000円で、日本酒やワインやノンアルコールのペアリングとともに。月曜休み。',
  });
}

// ================================================================ 料理旅宿 井筒安 (Izuyasu)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26017739/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://izuyasu.com/'; const MEAL = SITE + 'meal/'; const ABOUT = SITE + 'about/'; const ABOUT2 = SITE + 'about2'; const EN = SITE + 'en/';
  const N = day(['19:00', '21:00']);
  put({
    id: 'kyoto_izuyasu_higashihonganji', name: '料理旅宿 井筒安 (Izuyasu)', category: 'OMNI',
    lat: 34.99085230787899, lng: 135.7612952102185, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tea-style kaiseki whose menu changes daily (official site; March 2026 review); no gluten information. The inn asks for allergies and dislikes in advance and may not manage them on the day (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki with fish, beef and dashi-based soups (March 2026 review); no vegan menu mentioned.',
    hours_raw: 'Dining without a stay is welcome (official site; Tabelog). By reservation only (Tabelog). Dinner: one kaiseki course, everyone starts at 19:00 (official site); Tabelog lists 19:00–21:00 on Mondays, Tuesdays, Thursdays, Fridays, Saturdays and public holidays, closed Sundays and one weekday (Wednesday in the timetable), and closed on a Monday that is a public holiday. Lunch: a shokado box or the kaiseki course, the course starting at 12:00 (official site); the site does not say which days lunch is served. Breakfast of Kyoto obanzai ¥1,870 is also on the menu page (official site). Prices include tax and service charge (official site). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats; a counter, tables for groups, a hall and private rooms for 2 to 20 people; private use up to 20 (official site; Tabelog). Non-smoking; parking for 3 cars, by reservation (Tabelog). Just by Higashi Honganji, 10 min walk from JR Kyoto Station (Tabelog; March 2026 review).',
    hours: { 0: N, 1: N, 3: N, 4: N, 5: N }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-dori in the temple town of Higashi Honganji — 10 min walk from JR Kyoto Station',
    cuisine: 'Kaiseki whose menu changes with each of the 24 solar terms and daily with the produce, cooked by the seventh-generation owner, a tea practitioner (official site). Official prices, tax and service included (seen November 2026): dinner kaiseki course ¥15,400; lunch: a shokado box ¥6,050 with a seasonal soup, or the kaiseki course ¥15,400; breakfast of seasonal-vegetable obanzai, simmered dishes, dressed vegetables and egg ¥1,870. Kyoto sake above all, several dozen wines kept in a wine cellar, beer, shochu and whisky (official site); Tabelog\'s own text says over 100 wines. A March 2026 course: a seasonal hassun, shrimp paste in clear dashi, sea bream and young bluefin tuna sashimi, beef with green onions, sake-steamed cod with Shogoin turnip, and sea bream rice to finish; another March 2026 diner paid ¥15,400.',
    website: SITE, gmaps: gm('料理旅宿 井筒安 京都 東洞院'), menu_url: MEAL,
    notes: '[Kaiseki · Kyoto Station] A restaurant-inn founded in 1839 at the gate of Higashi Honganji, where the seventh-generation owner, a tea practitioner, cooks kaiseki for each of the 24 solar terms — ¥15,400 at dinner (all guests at 19:00) or a ¥6,050 shokado lunch — for diners as well as overnight guests, among the inn\'s scrolls, art and Edo-period festival dolls. Reservation only.',
    chef_bio: { chef_name: '井筒安次郎', roles: ['Owner-chef'], origin: null,
      background: 'Opened in 1839 (Tenpo 10) as a restaurant and inn in the temple town of Higashi Honganji, serving monks and pilgrims and later travellers and business guests; the woodblock artist 棟方志功 stayed for several months late in life while making the fusuma paintings for Higashi Honganji\'s Shoseien (official site). The front lattice and the lantern garden are almost as they were at the founding; one lantern in the garden survived the great fire of the Onin War; a renovation in 2013 added a library lounge, 「京都本箱」 (official site). The seventh-generation head, who signs the greeting 井筒安次郎, is the cook and a tea practitioner who has taken part in tea gatherings through the seasons (official site); Tabelog\'s shop text links the owner to the Omotesenke school of tea. Art handed down over seven generations, including works by 伊藤若冲, 小野竹喬 and 稲葉心田, and Edo-period hina and May dolls set out for the festivals (official site).',
      philosophy: 'The greeting on the official site: to keep things unchanged one must keep changing; tradition is adding one more layer to what earlier generations built. Service is held back a little so guests can keep their own pace (official site).',
      specialty: 'Kaiseki for the 24 solar terms; shokado lunch.',
      anecdotes: [
        { text: 'In March 2026, near the Doll Festival, a diner was shown the inn\'s carefully kept hina doll display and listened to the seventh-generation owner\'s stories over a course that ended with sea bream rice.', source: R + 'B523777643/' },
        { text: 'A January 2026 diner was offered a look at the historic rooms upstairs after the meal.', source: R + 'B538463463/' },
        { text: 'A guest who stayed in October 2021 found it quiet for somewhere so near Kyoto Station, with seasonal flowers and art throughout and none of the stiffness of a luxury inn.', source: R + 'B529290792/' },
      ],
      japanese_sources_summary: '公式サイト: 料理旅宿 井筒安、天保10年 (1839年) 創業、東本願寺の門前町で料理屋、旅籠屋として始まる。棟方志功が晩年に東本願寺渉成園の襖絵のために数ヶ月逗留。二十四節気に即した懐石、腕をふるうのは料理人である七代目主人 (茶人)。カウンター、テーブル席、広間、個室、お食事だけの利用も可能 (会食、結納、法事、節句の祝い)。京都産を中心とした日本酒、ワインは常時数十種。夕食: 懐石コース15,400円 (19時から一斉)。昼食: 松花堂ランチ6,050円、懐石コース15,400円 (12時から)。朝食1,870円。消費税・サービス料込。アレルギーは事前に。伊藤若冲、小野竹喬、稲葉心田の作品、江戸時代の雛人形や五月人形。2013年の改装でライブラリー「京都本箱」。応仁の乱の大火をくぐり抜けた傘灯篭。七代目当主 井筒安次郎。下京区笹屋町272。食べログ: 完全予約制、19:00〜21:00、日曜と平日1日休み、20席、個室2〜20名、駐車場3台、カード可。口コミ (2021〜2026年、英語): 二十四節気の懐石、雛人形、2階の部屋。',
      confidence: 'medium', sources: [SITE, MEAL, ABOUT, ABOUT2, EN, TB, R + 'B523777643/', R + 'B526076260/', R + 'B529290792/', R + 'B538463463/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English version of the official site, which invites diners who are not staying. Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通下珠数屋町上る笹屋町272',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current meal prices; Tabelog official listing; reviews dated January and March 2026.' },
    pin_source: `Tabelog ${TB} (34.990852, 135.761295); nearest record kyoto_bistro_kizano about 80 m away; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MEAL],
    price_note: 'Official site meal page, tax and service included (seen November 2026).', last_checked: TODAY, items: [
      it('二十四節気をもとにした懐石コース料理', '', 'Kaiseki course for the 24 solar terms (dinner, from 19:00)', '¥15,400', 'Dinner', 'ask', 'no', 'Official site; also at lunch from 12:00.', 'kaiseki'),
      it('二十四節気をもとにした松花堂ランチ', '', 'Shokado lunch box with a seasonal soup', '¥6,050', 'Lunch', 'ask', 'no', 'Official site.', 'shokado'),
      it('', '', 'Breakfast of Kyoto obanzai', '¥1,870', 'Breakfast', 'ask', 'ask', 'Official site.', 'breakfast'),
    ] }, {
    cuisine: '二十四節気の節気ごとに、またその日の食材で毎日献立を変える懐石。料理するのは茶人でもある七代目主人 (公式サイト)。公式の値段、消費税・サービス料込 (2026年11月): 夕食の懐石コース15,400円。昼食は季節の椀物つきの松花堂ランチ6,050円か懐石コース15,400円。朝食は季節の野菜のおばんざい、炊き合わせ、和え物、たまご料理で1,870円。京都産を中心とした日本酒、ワインセラーに常時数十種のワイン、ビール、焼酎、ウイスキー (公式サイト)。食べログの店の紹介文では100種以上のワイン。2026年3月のコース: 季節の八寸、えびのすり身のお椀、鯛とよこわの刺身、牛肉とねぎ、たらの酒蒸しと聖護院かぶ、しめに鯛ごはん。2026年3月の別の口コミでは15,400円。',
    neighborhood: '東洞院通、東本願寺の門前町。JR京都駅から徒歩10分',
    gf_detail: '要確認。茶懐石をもとにした、毎日献立の変わる懐石 (公式サイト、2026年3月の口コミ)。グルテンの情報はない。アレルギーや苦手なものは事前に連絡するよう、当日は対応できない場合があると公式サイトにある。',
    vegan_detail: 'ヴィーガン不可。魚、牛肉、だしのお椀の懐石 (2026年3月の口コミ)。ヴィーガンの献立は書かれていない。',
    notes: '[懐石・京都駅] 1839年に東本願寺の門前で創業した料理旅宿。茶人でもある七代目主人が二十四節気ごとの懐石を作る。夜は15,400円 (19時から一斉)、昼は6,050円の松花堂ランチ。泊まらなくても食事ができ、代々の掛け軸や美術品、江戸時代の節句人形に囲まれて。完全予約制。',
  });
}

// ================================================================ よこやま (Yokoyama)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029835/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '22:00']); const F = day(['17:00', '22:30']);
  put({
    id: 'kyoto_okonomiyaki_yokoyama_nijo', name: 'よこやま (Yokoyama)', category: 'OMNI',
    lat: 35.0121957478635, lng: 135.75520116043833, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter okonomiyaki and negiyaki, yakisoba and teppanyaki with a house sauce (Tabelog; 2019–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork and egg, beef tendon, clams, scallops and Wagyu on the griddle (Tabelog; 2019–2026 reviews); no vegan option mentioned.',
    hours_raw: 'Tue–Thu 17:00–22:00 (L.O. 21:30); Fri and Sat 17:00–22:30 (L.O. 22:00); Sun and public holidays 17:00–22:00; closed Mondays (Tabelog, official information; the timetable heading reads "Mon–Thu" but Mondays are given as closed). Reservations taken (Tabelog). No cards or e-money; QR payments accepted (Tabelog). A ¥390 starter is served and a drink order is required (September 2024 review). 18 seats, 6 at the counter, and a semi-private room for six where children are welcome; babies and strollers welcome; takeaway; English menu (Tabelog). Non-smoking; paid parking in front (Tabelog). In a 100-year-old townhouse in a residential street between Nijo Castle and Karasuma-Oike, 3 min walk from Nijojo-mae Stn (Tabelog; September 2024 review). Opened 17 October 2017 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-dori east of Nishinotoin, near Nijo Castle — 3 min walk from Nijojo-mae Stn',
    cuisine: 'Teppanyaki of selected ingredients with drinks, finishing with Kyoto-style okonomiyaki in an original sauce and yakisoba made with noodles from a long-established noodle maker; the shop recommends its A5 Wagyu steak (Tabelog, official information). Seen in reviews: はんなり焼き, the house negiyaki of Kujo green onions with clams and young ginger in light soy sauce, ¥1,100 (August 2019, November 2023, September 2024); beef tendon on the griddle ¥1,320, yakisoba ¥950 (+¥60 garlic), butatama ¥1,100 and tonpei-yaki variations ¥1,100 (September 2024); mixed okonomiyaki and mixed yakisoba, chicken in sauce, lotus root with cheese, tomato with fluffy egg, grilled tofu and konnyaku sashimi (August 2019); scallops with garlic and okonomiyaki with a fluffy batter (November 2024); butter-garlic king oyster mushrooms, scallops and thin, chewy yakisoba noodles (January 2026). Sake, shochu and wine (Tabelog). The sign mentions a sweets café, but in November 2023 there were no sweets (November 2023 review).',
    website: null, gmaps: gm('よこやま 京都 押小路通西洞院 鉄板焼'), menu_url: null,
    notes: '[Okonomiyaki · Nijo] A teppanyaki and okonomiyaki bar in a 100-year-old townhouse by Nijo Castle: Kyoto-style okonomiyaki in a house sauce, yakisoba, beef tendon and the house negiyaki of Kujo green onions and clams, at ¥4,000–5,000 a head, under walls of signed celebrity posters. Evenings only; no cards; closed Mondays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 17 October 2017 in a 100-year-old townhouse (Tabelog, official information). In November 2023 two women, perhaps the owners according to the reviewer, chatted with the guests; a November 2024 review describes the shop as run by a beautiful proprietress whose skill and house sauce explain the ratings. The walls are covered in signed posters of famous visitors (September 2024, April 2025 reviews).',
      philosophy: null,
      specialty: 'はんなり焼き (negiyaki of Kujo green onions and clams); okonomiyaki in the house sauce; yakisoba.',
      anecdotes: [
        { text: 'Looking for sweets on a second stop in November 2023, two friends found the sweets long gone but stayed for teppanyaki; the menu joked "beautiful smiles — free, beautiful service — market price". The reviewer found the prices high for the area, the portions small and the house negiyaki ordinary.', source: R + 'B482370931/' },
        { text: 'A September 2024 diner out with a colleague was surprised by the signed posters on the walls and took the staff\'s advice to add garlic to the yakisoba.', source: R + 'B493146395/' },
        { text: 'After the evening light-up at Nijo Castle in April 2025 a diner found it a little pricey but loved the tomato with fluffy egg.', source: R + 'B504491512/' },
        { text: 'A January 2026 passer-by who stopped in on a whim found the owner kind and very friendly.', source: R + 'B520418519/' },
      ],
      japanese_sources_summary: '食べログ (店舗の公式情報): よこやま、お好み焼き・鉄板焼き・甘味処、中京区二条西洞院町632、二条城前駅から徒歩3分、火〜木 17:00〜22:00 (L.O.21:30)、金土 17:00〜22:30 (L.O.22:00)、日祝 17:00〜22:00、月曜休み、予約可、カード・電子マネー不可、QR可、18席 (カウンター6席)、6名の半個室、子ども可、テイクアウト、英語メニュー、禁煙、2017年10月17日オープン。築100年の町家、こだわりの食材の鉄板焼き、A5の和牛ステーキ、特製ソースの京風お好み焼き、老舗の製麺所の麺の焼きそば。口コミ (2019〜2026年): はんなり焼き (九条ねぎ、あさり、新しょうが、薄口しょうゆ) 1,100円、すじ肉焼き1,320円、焼きそば950円、豚玉1,100円、お通し390円とワンドリンク (2024年9月)、焼きそばミックス、お好み焼きミックス、鳥タレ焼き、れんこんチーズ、トマトとふんわり卵、豆腐焼き、こんにゃく刺し (2019年8月)、壁に有名人のサイン。',
      confidence: 'low', sources: [TB, R + 'B418900906/', R + 'B482370931/', R + 'B493146395/', R + 'B496398193/', R + 'B496593285/', R + 'B504491512/', R + 'B506962490/', R + 'B520418519/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu available (Tabelog); a chatty, friendly counter (November 2023 and January 2026 reviews). Phone service may be Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通西洞院東入二条西洞院町632',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.012196, 135.755201); nearest record kyoto_kissa_madrague about 40 m away; kyoto_noden_nijo (this batch) about 78 m; not OSM-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493146395/', R + 'B418900906/'],
    price_note: 'Prices from a September 2024 review; no menu with prices on Tabelog.', last_checked: TODAY, items: [
      it('はんなり焼き', '', 'House negiyaki: Kujo green onions, clams and young ginger in light soy sauce', '¥1,100', 'Teppanyaki', 'no', 'no', 'September 2024 review; also August 2019 and November 2023.', 'hannari_yaki'),
      it('すじ肉焼き', '', 'Beef tendon on the griddle', '¥1,320', 'Teppanyaki', 'no', 'no', 'September 2024 review; sweet-savoury sauce.', 'suji_yaki'),
      it('', '', 'Yakisoba', '¥950', 'Noodles', 'no', 'no', 'September 2024 review; garlic +¥60.', 'yakisoba'),
      it('', '', 'Butatama (pork okonomiyaki)', '¥1,100', 'Okonomiyaki', 'no', 'no', 'September 2024 review.', 'butatama'),
      it('トマトとふんわり卵', '', 'Tomato with fluffy egg', '', 'Teppanyaki', 'ask', 'no', 'August 2019 and April 2025 reviews.', 'tomato_egg'),
      it('れんこんチーズ', '', 'Lotus root with cheese', '', 'Teppanyaki', 'ask', 'no', 'August 2019 review.', 'renkon_cheese'),
    ] }, {
    cuisine: 'こだわりの食材の鉄板焼きでお酒を楽しみ、しめに特製ソースの京風お好み焼きと老舗の製麺所の麺の焼きそば。おすすめはA5の和牛ステーキ (食べログの店舗の公式情報)。口コミの料理: はんなり焼き、九条ねぎにあさりと新しょうがを入れて薄口しょうゆで仕上げる店のねぎ焼き1,100円 (2019年8月、2023年11月、2024年9月)。すじ肉焼き1,320円、焼きそば950円 (にんにく60円増し)、豚玉1,100円、とんぺい焼きの創作メニュー1,100円 (2024年9月)。お好み焼きミックス、焼きそばミックス、鳥タレ焼き、れんこんチーズ、トマトとふんわり卵、豆腐焼き、こんにゃく刺し (2019年8月)。にんにくのほたてとふんわりした生地のお好み焼き (2024年11月)。エリンギのバターにんにく、ほたて、細くてもちもちの焼きそばの麺 (2026年1月)。日本酒、焼酎、ワイン (食べログ)。甘味処の看板があるが、2023年11月には甘味はなかった (2023年11月の口コミ)。',
    neighborhood: '押小路通の西洞院の東、二条城の近く。二条城前駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦の生地のお好み焼きとねぎ焼き、焼きそば、特製ソースの鉄板焼き (食べログ、2019〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚肉と卵のお好み焼き、すじ肉、あさり、ほたて、和牛の鉄板焼き (食べログ、2019〜2026年の口コミ)。ヴィーガンの対応は書かれていない。',
    notes: '[お好み焼き・二条] 二条城のそば、築100年の町家の鉄板焼きとお好み焼きの店。特製ソースの京風お好み焼き、焼きそば、すじ肉焼き、九条ねぎとあさりの店のねぎ焼き「はんなり焼き」。ひとり4,000〜5,000円ほど、壁には有名人のサインのポスター。夜のみ、カード不可、月曜休み。',
  });
}

save();
