// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 27.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + テルヌーラ Ternura (Spanish bar off Shinkyogoku since 2005; paella, ajillo)
//            + おばんざいと純洋食 アイサニ Aisani (obanzai and yoshoku on the Takase River, since 2016)
//   notable: + みつばち Mitsubachi (Demachiyanagi kanmi shop: anmitsu, mamekan, summer kakigori)
//            + 祇園きなな 本店 Gion Kinana (kinako ice cream café upstairs off Hanamikoji)
//   None is in data/kyoto.json: grep by name (テルヌーラ/Ternura, アイサニ/Aisani, みつばち/Mitsubachi — the one
//   "mitsubachi" hit is a housing-company URL in another record — きなな/Kinana) and address (中之町565 no
//   Ternura record; 市之町260, 梶井町448-60, 祇園町南側570-119) found none. Tabelog URLs copied from each listing.txt
//   line 1. Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ テルヌーラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002320/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ternura.owst.jp/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'kyoto_ternura', name: 'テルヌーラ (Ternura)', category: 'OMNI',
    lat: 35.004097, lng: 135.767396, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu leans on paella and ajillo, but ajillo comes with bread, the house bread is made with Manitoba wheat flour, and there are baked pastas and coca (Spanish flatbread pizza) (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable tapas and leaf salad is on the menu, but the signature paella is cooked in a rich seafood stock based on prosciutto fat, and most dishes use pork, fish or cheese (official menu).',
    hours_raw: 'Official site and Tabelog: 12:00–24:00 (food last order 23:00, drinks 23:30), closed Wednesday; tapas and paella can be ordered all day, 12:00–23:00. A March 2026 diner wrote that the bar opens at 15:00. Bookings online, by phone (075-213-0220) or through Tabelog; parties of 5 or more by phone; private hire for 10–20 (Tabelog). No cover charge (Tabelog). About 40 seats: ground floor counter and tables (20), first floor tables (20), terrace (3) (Tabelog; Tabelog’s seat field shows 8). Non-smoking; cards and IC cards, no QR (Tabelog). Children and strollers welcome (Tabelog). Moved here from Takoyakushi-dori Fuyacho; opened 1 April 2005 (Tabelog). 3 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Shinkyogoku, north of Shijo — 3 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'Spanish bar with paella, ajillo and wine, open from noon (official site; Tabelog) · tapas from ¥500 (tortilla of the day), Iga mochi-pork roast ham, cheese, terrine, adult tuna salad, smoked mackerel with Brie, bonito marinated in balsamic · ajillo from ¥1,000 (shrimp and baby corn ¥1,100 in March 2026; Tanba shiitake and prosciutto) · paella: mussel and scampi ¥2,600, squid-ink arroz negro ¥2,800, duck and porcini ¥3,400 · grilled Iga mochi-pork shoulder ¥1,200, fish and sea-urchin cabbage roll, Spanish meatballs ¥1,100, baked pasta, coca · Basque-style cheesecake ¥600 · glass wine ¥800 (three red and three white by the glass, August 2025), house sangria ¥700, draft beer ¥700 · courses ¥3,500–6,500, some with 90-minute free flow (official site)',
    website: SITE, gmaps: gm('テルヌーラ 京都 新京極'), menu_url: SITE,
    notes: "[Spanish bar · Shinkyogoku, paella from noon] A small Spanish bar marked by a sign and a little window off Shinkyogoku, open since 2005: counter and tables downstairs, more tables upstairs, a three-seat terrace. Paella in small pans (scampi and mussel ¥2,600, squid ink ¥2,800), ajillos, Iga pork and a long by-the-glass wine list; lunch plates come with plenty of vegetables. A March 2026 diner found the squid-ink paella undercooked; others call it the highlight. 12:00–24:00, closed Wednesday; book for busy evenings.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed); a manager (店長) is mentioned on the official site'], origin: null,
      background: 'Tabelog gives the opening day as 1 April 2005 and notes the bar moved from Aburaya-cho on Takoyakushi-dori west of Fuyacho. The official site describes a hideaway Spanish bar marked by its sign and small window, with a red ceiling and wood inside, pairing wines from around the world with the food. The house bread uses Manitoba flour, Guérande salt, hard water and malt syrup at 100% hydration (official site). A July 2026 diner described two young staff as polite and quietly professional, matching the soft, gentle manner of the owner.',
      philosophy: null,
      specialty: 'Paella; ajillo; balsamic-marinated bonito.',
      anecdotes: [
        { text: '"The paella was served in a cute, individual-sized pot!" — lunch, March 2026.', source: R + 'B256375449/' },
        { text: 'A March 2026 diner found the squid-ink paella "a bit too watery and mushy, with the rice slightly undercooked" and the small table cramped; a December 2025 diner called the same paella "particularly outstanding".', source: R + 'B524572921/' },
        { text: '"There are no staff members on the second floor and no call buttons at the tables, so I had to get up." — December 2025.', source: R + 'B522310939/' },
        { text: '"They even served us some homemade bread as a complimentary treat." — January 2026.', source: R + 'B520688776/' },
      ],
      japanese_sources_summary: '公式サイト (ternura.owst.jp): スペインバル Ternura (テルヌーラ)、看板と小さな窓が目印の隠れ家的バル、12:00〜24:00 (料理L.O. 23:00、ドリンクL.O. 23:30)、水曜定休、タパス・パエリアは12:00〜23:00注文可、本日のトルティージャ500円、伊賀産もち豚のロースハム850円、本日のテリーヌ950円、スペイン風ミートボール1,100円、伊賀産もち豚肩ロースのグリル1,200円、特製 魚と雲丹のロールキャベツ、ムール貝とスカンピのパエリア2,600円 (生ハムの油をベースとした濃厚魚介ダシ)、アロス・ネグロ (イカスミ) パエリア2,800円、鴨ロースとポルチーニ茸のパエリア3,400円、アヒージョ1,000円から (丹波椎茸と生ハムなど)、コカ1,500円、バスク風黒いチーズケーキ600円、自家製パン (マニトバ粉、ゲラント塩、硬水、モルトシロップ、加水率100%)、グラスワイン800円、コース3,500〜6,500円 (飲み放題付きあり)、10〜20名で貸切可。食べログ: スペイン料理・バル・居酒屋、中京区新京極通四条上ル中之町565、12:00〜24:00、水曜定休、予約可、総席数40 (1階20、2階20、テラス3)、禁煙、カード・電子マネー可、QR 不可、子連れ可、2005年4月1日オープン、蛸薬師通麩屋町西入ル油屋町146から移転。口コミ (2024年3月〜2026年8月、英語): イカスミのパエリア、アヒージョ、鰹のバルサミコマリネ、伊賀の豚肩ロース、魚のロールキャベツ、女子会コース3,500円、自家製サングリア700円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B256375449/', R + 'B482608130/', R + 'B511672151/', R + 'B520688776/', R + 'B522310939/', R + 'B524572921/', R + 'B525512417/', R + 'B529185985/', R + 'B531391588/', R + 'B533275758/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official booking site has English, Korean and Chinese pages; order à la carte from a menu of tapas, ajillo and paella.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上ル中之町565',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official booking site and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004097, 135.767396); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 12m; kyoto_otowa_sushi (also 中之町565, per its address_ja) is 13 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B524572921/'],
    price_note: 'Official online menu (tax included); the ajillo price is from a March 2026 review.', last_checked: TODAY, items: [
      it('ムール貝とスカンピ（手長海老）のパエリア', '', 'Mussel and scampi paella', '¥2,600', 'Paella', 'ask', 'no', 'Seafood stock based on prosciutto fat.', 'scampi_paella'),
      it('アロス・ネグロ（イカスミ）パエリア', '', 'Arroz negro (squid-ink paella)', '¥2,800', 'Paella', 'ask', 'no', '', 'arroz_negro'),
      it('鴨ロースとポルチーニ茸のパエリア', '', 'Duck and porcini paella', '¥3,400', 'Paella', 'ask', 'no', '', 'duck_porcini_paella'),
      it('', '', 'Shrimp and baby corn ajillo', '¥1,100', 'Ajillo', 'no', 'no', 'March 2026; served with bread.', 'shrimp_ajillo'),
      it('伊賀産もち豚肩ロースのグリル', '', 'Grilled Iga mochi-pork shoulder', '¥1,200', 'Skillet', 'ask', 'no', '', 'iga_pork_grill'),
      it('スペイン風ミートボール', '', 'Spanish meatballs', '¥1,100', 'Skillet', 'ask', 'no', '', 'meatballs'),
      it('バスク風黒いチーズケーキ', '', 'Basque-style burnt cheesecake', '¥600', 'Dessert', 'ask', 'no', '', 'basque_cheesecake'),
      it('グラスワイン 赤or白', '', 'Glass of wine, red or white', '¥800', 'Drinks', '', '', '', 'glass_wine'),
    ] }, {
    cuisine: '昼から開いているパエリア、アヒージョ、ワインのスペインバル (公式サイト、食べログ)・タパス500円から (本日のトルティージャ)、伊賀産もち豚のロースハム、チーズ、テリーヌ、大人のツナサラダ、鯖のスモークとブリーチーズ、鰹のバルサミコマリネ・アヒージョ1,000円から (エビとヤングコーン1,100円、2026年3月、丹波椎茸と生ハム)・パエリア: ムール貝とスカンピ2,600円、アロス・ネグロ (イカスミ) 2,800円、鴨ロースとポルチーニ茸3,400円・伊賀産もち豚肩ロースのグリル1,200円、魚と雲丹のロールキャベツ、スペイン風ミートボール1,100円、焼きパスタ、コカ・バスク風黒いチーズケーキ600円・グラスワイン800円 (赤白3種ずつ、2025年8月)、自家製サングリア700円、生ビール700円・コース3,500〜6,500円、90分飲み放題付きもあり (公式サイト)',
    neighborhood: '四条の北、新京極から入ったところ。阪急京都河原町駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報はない。パエリアとアヒージョが中心だが、アヒージョにはパンが付き、自家製パンはマニトバ粉 (小麦) 使用、焼きパスタやコカ (スペイン風ピザ) もある (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。ベジタパスと葉物のサラダはあるが、名物のパエリアは生ハムの油をベースにした濃厚な魚介のだしで、ほとんどの料理に豚、魚、チーズを使う (公式メニュー)。',
    notes: '[スペインバル・新京極、昼からパエリア] 新京極から少し入った、看板と小さな窓が目印の小さなスペインバル。2005年から。1階はカウンターとテーブル、2階にもテーブル、テラスは3席。小鍋のパエリア (スカンピとムール貝2,600円、イカスミ2,800円)、アヒージョ、伊賀の豚、グラスワインが豊富。ランチは野菜がたっぷり。2026年3月の客はイカスミのパエリアの米が硬く水っぽいと書き、ほかの客は一番の料理と評価する。12時〜24時、水曜休み、混む夜は予約を。',
  });
}

// ================================================================ おばんざいと純洋食 アイサニ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028030/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://aisani.net/'; const SHOP = SITE + 'shop/index.html'; const FOOD = SITE + 'food/index.html';
  const KODAWARI = SITE + 'kodawari/index.html'; const DRINK = SITE + 'drink/index.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_aisani_takasegawa', name: 'おばんざいと純洋食 アイサニ (Obanzai to Jun Youshoku Aisani)', category: 'OMNI',
    lat: 35.002144, lng: 135.769937, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu mixes Kyoto obanzai with yoshoku such as menchi-katsu, bifkatsu, a crab gratin and a demi-glace hamburger steak, plus fried dishes (tempura, kara-age) (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The obanzai include vegetable dishes (Kyoto-style okara, eggplant, yuba with greens, lotus root and celery kinpira), but several are simmered dishes (炊いたん) with no stock stated, and one has jako; the rest of the menu is meat and fish (official menu).',
    hours_raw: 'Tabelog: 17:00–23:00 (last order 22:00), closed Tuesday; hours may change; a July 2026 review gives the same and a June 2026 diner was told the shop stays open late at weekends. The official site still lists dinner 17:00–last order 20:30, closing 21:00, and opening 30 December–3 January. An October 2026 diner ate a set lunch (one option). Bookings by phone (075-744-1610); diners in October 2026 found it full or were turned away (Tabelog; October 2026). 16 seats: 8 at the counter and two tables of 4 in sunken-kotatsu seats by the Takase River window; non-smoking (official site; Tabelog). JCB and AMEX cards and QR payments (Tabelog). Opened 14 October 2016 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi on the Takase River, north of Ayanokoji — near Hankyu Kawaramachi Stn',
    cuisine: 'Kyoto obanzai and old-style yoshoku by the Takase River (official site) · obanzai ¥550 each (Kyoto-style okara, eggplant, yuba with greens, lotus root and celery kinpira, manganji pepper with jako), three for ¥920, five for ¥1,380 · Kyoto-style dashimaki ¥640, silken yuba ¥700, cream cheese cured in Saikyo miso ¥650, chicken liver with sansho ¥880, assorted Kyoto pickles ¥800 · yoshoku: demi-glace hamburger steak ¥1,280, menchi-katsu ¥1,280, crab and mushroom white-miso gratin ¥1,280, beef skirt steak ¥1,520, bifkatsu ¥1,520, beef cheek stewed in red miso and wine ¥1,520, unseasoned grilled eel ¥1,800 · seasonal clay-pot pilaf ¥950 and sea-bream rice ¥980 (from two servings) (official menu) · five-kind sashimi ¥980, strawberries with mozzarella and balsamic ¥900 (July 2026) · Kyoto sake, warm or cold; Akaboshi bottled beer ¥700; wine by the glass from ¥700 (official drink menu)',
    website: SITE, gmaps: gm('おばんざいと純洋食 アイサニ 京都'), menu_url: FOOD,
    notes: "[Obanzai & yoshoku · Takase River, a casual counter] A 16-seat counter and two sunken-kotatsu tables looking onto the Takase River in Nishi-Kiyamachi, open since October 2016; the name means \"now and then\" in Kyoto dialect, for a place people drop into now and then. Obanzai at ¥550 a dish (five for ¥1,380) laid out on the counter, plus yoshoku such as demi-glace hamburger steak and bifkatsu, and Kyoto sake. A five-kind sashimi plate was ¥980 in July 2026. One March 2026 visitor found it a little pricey for the food but loved the view. 17:00–23:00, closed Tuesday; book by phone.",
    chef_bio: { chef_name: null, roles: ['Master (マスター, unnamed on the official site)'], origin: null,
      background: 'The official site says the master aims for a casual shop that is easy to enter even alone, centred on Kyoto obanzai and nostalgic yoshoku, and explains the name as Kyoto dialect for "now and then", wishing guests would drop by now and then. It sits on the Takase River in Nishi-Kiyamachi, where the cherry trees bloom in spring. Tabelog gives the opening day as 14 October 2016; a September 2026 diner saw the 10th anniversary being celebrated and three friendly staff.',
      philosophy: 'Per the official site: a casual shop, easy to enter even for one, centred on Kyoto obanzai and old-fashioned yoshoku.',
      specialty: 'Obanzai assortment; demi-glace hamburger steak; Kyoto sake.',
      anecdotes: [
        { text: '"The staff is friendly, even with foreign customers." — February 2026.', source: R + 'B523285865/' },
        { text: 'A March 2026 visitor liked the fried eggplant, okara and spinach ohitashi but found it "a bit overpriced considering the touristy location"; the view is the draw.', source: R + 'B532182708/' },
        { text: '"Although the seating is limited, the location is great, so they had to turn away many customers." — October 2026.', source: R + 'B537236899/' },
        { text: 'A September 2026 diner chose from obanzai laid out on the counter — silken yuba, a five-dish assortment, avocado with house chili oil — with warm Kyoto sake.', source: R + 'B538424100/' },
      ],
      japanese_sources_summary: '公式サイト (aisani.net): おばんざいと純洋食 アイサニ、マスターのこだわり「京都のおばんざいと昔懐かしの洋食を中心に、お一人様でも入りやすいカジュアルなお店」、アイサニは京都弁で時々という意味、西木屋町の高瀬川沿い、春には満開の桜、ディナー 17:00〜L.O.20:30 閉店21:00、年末年始は12月30日〜1月3日まで営業、カウンター8席と高瀬川を臨むテーブル席 (4名×2)、メニュー: おばんざい各550円 (京風おから、茄子オランダ煮、湯葉と菜っ葉の炊いたん、蓮根とセロリのきんぴら、万願寺唐辛子とじゃこの炊いたん)、三種盛り合わせ920円、五種盛り合わせ1,380円、京風だし巻き640円、とろとろ湯葉700円、クリームチーズの西京味噌漬け650円、鳥肝の山椒煮880円、デミグラスハンバーグ1,280円、メンチカツ1,280円、ビフカツ1,520円、牛ホホ肉赤味噌ワイン煮こみ1,520円、鰻の白焼き1,800円、季節の土鍋ピラフ950円・鯛めし980円 (二人前より)、瓶ビール (赤星ラガー) 700円。食べログ: 洋食・居酒屋・日本料理、下京区西木屋町通綾小路上ル市之町260-2、17:00〜23:00 (L.O. 22:00)、火曜定休、予約可、16席、禁煙、カード (JCB、AMEX)・QR 可、2016年10月14日オープン。口コミ (2026年2月〜10月、英語): 刺身5種盛り980円、苺とモッツァレラのバルサミコ900円、掘りごたつのテーブル、高瀬川の眺め、10周年、満席で断られる客も。',
      confidence: 'medium', sources: [TB, SITE, SHOP, FOOD, KODAWARI, DRINK, R + 'B523285865/', R + 'B525720294/', R + 'B530838987/', R + 'B530928679/', R + 'B531496708/', R + 'B532182708/', R + 'B532440480/', R + 'B537236899/', R + 'B537326228/', R + 'B538424100/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official menu gives English names for many dishes, and obanzai sit on the counter to point at; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町通綾小路上ル市之町260-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026 (10th anniversary, September 2026).' },
    pin_source: `Tabelog ${TB} (35.002144, 135.769937); cross-checked: GSI 京都府京都市下京区市之町260番地 (lot) 90m; kyoto_takasegawa_maki (市之町240-2) is 7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOOD, DRINK, R + 'B532440480/'],
    price_note: 'Official menu (undated; changes with the season); sashimi and strawberry prices from a July 2026 review.', last_checked: TODAY, items: [
      it('おばんざい五種盛り合わせ', '', 'Five obanzai assortment', '¥1,380', 'Obanzai', 'ask', 'ask', '', 'obanzai_5'),
      it('京風おから', '', 'Kyoto-style okara', '¥550', 'Obanzai', 'ask', 'ask', '', 'kyo_okara'),
      it('京風だし巻き', '', 'Kyoto-style dashimaki omelette', '¥640', 'Small dishes', 'ask', 'no', '', 'dashimaki'),
      it('とろとろ湯葉', '', 'Silken yuba', '¥700', 'Small dishes', 'ask', 'ask', '', 'toro_yuba'),
      it('デミグラスハンバーグ', '', 'Demi-glace hamburger steak', '¥1,280', 'Mains', 'ask', 'no', '', 'hamburg'),
      it('ビフカツ', '', 'Bifkatsu (breaded beef cutlet)', '¥1,520', 'Mains', 'no', 'no', '', 'bifkatsu'),
      it('鯛めし', '', 'Sea-bream rice (from two servings)', '¥980', 'Mains', 'ask', 'no', '', 'taimeshi'),
      it('', '', 'Assorted sashimi, 5 kinds', '¥980', 'Sashimi', 'ask', 'no', 'July 2026.', 'sashimi_5'),
    ] }, {
    cuisine: '高瀬川沿いの京都のおばんざいと昔懐かしの洋食 (公式サイト)・おばんざい各550円 (京風おから、茄子オランダ煮、湯葉と菜っ葉の炊いたん、蓮根とセロリのきんぴら、万願寺唐辛子とじゃこの炊いたん)、三種920円、五種1,380円・京風だし巻き640円、とろとろ湯葉700円、クリームチーズの西京味噌漬け650円、鳥肝の山椒煮880円、京漬物盛り合わせ800円・洋食: デミグラスハンバーグ1,280円、メンチカツ1,280円、カニとキノコの白みそグラタン1,280円、ハラミステーキ1,520円、ビフカツ1,520円、牛ホホ肉赤味噌ワイン煮こみ1,520円、鰻の白焼き1,800円・季節の土鍋ピラフ950円、鯛めし980円 (二人前より) (公式メニュー)・刺身5種盛り980円、苺とモッツァレラのバルサミコ900円 (2026年7月)・京都の日本酒を冷やでも燗でも、瓶ビール (赤星) 700円、グラスワイン700円から (公式ドリンクメニュー)',
    neighborhood: '綾小路の北、高瀬川沿いの西木屋町。阪急京都河原町駅の近く',
    gf_detail: '要確認。グルテンの情報はない。おばんざいのほか、メンチカツ、ビフカツ、カニのグラタン、デミグラスハンバーグなどの洋食、天ぷら、からあげがある (公式メニュー)。',
    vegan_detail: '要確認。ヴィーガンの情報はない。おばんざいには野菜の料理 (京風おから、茄子、湯葉と菜っ葉、蓮根とセロリのきんぴら) もあるが、炊いたんの煮汁は書かれておらず、じゃこを使うものもある。ほかは肉と魚 (公式メニュー)。',
    notes: '[おばんざいと洋食・高瀬川、気軽なカウンター] 西木屋町の高瀬川を眺める、カウンターと掘りごたつのテーブル2卓の16席。2016年10月から。店名は京都弁で「時々」の意味で、時々寄ってもらえる店にとの思いから。カウンターに並ぶおばんざいは1品550円 (五種で1,380円)、デミグラスハンバーグやビフカツなどの洋食、京都の日本酒。2026年7月には刺身5種盛りが980円。2026年3月の客は料理の割に少し高いと感じたが、眺めは魅力と書いている。17時〜23時、火曜休み、電話で予約。',
  });
}

// ================================================================ みつばち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002128/'; const R = TB + 'dtlrvwlst/';
  const W2020 = 'https://www.walkerplus.com/article/222744/'; const W2018 = 'https://www.walkerplus.com/article/135619/';
  const RETTY = 'https://retty.me/restaurant/100000048161/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_mitsubachi_demachi', name: 'みつばち (Mitsubachi)', category: 'MOM_AND_POP',
    lat: 35.027996, lng: 135.769639, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The core sweets are agar jelly from tengusa seaweed, Hokkaido red peas and azuki, black syrup from Hateruma brown sugar, shiratama and house-stewed apricots (Kansai Walker 2020; 2026 reviews), but nothing is said about wheat or shared equipment; ice cream and kinako toppings are also served.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Anmitsu, mamekan and zenzai are built on agar, beans, brown-sugar syrup and rice dumplings, but cream versions, vanilla or matcha ice cream and a milk shaved ice are also on the menu (2026 reviews); no vegan information.',
    hours_raw: 'Tabelog: Tuesday–Saturday 11:00–18:00 (last order 17:45), closed Sunday and Monday; open until sold out; hours may change (Tabelog; Kansai Walker 2020). No reservations; queues are common — one to eight groups on summer and autumn 2026 afternoons, a line before 10:45 on an August Saturday — and orders are taken while you wait (2025–2026 reviews). Mamekan and apricot ice can sell out (August–September 2026). Cash only (no cards, e-money or QR). 14 table seats; non-smoking (Tabelog; Kansai Walker 2020 gave 12). Children welcome; takeaway (Tabelog). 5 min walk from Demachiyanagi Stn exit 1, or the Kawaramachi-Imadegawa bus stop (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori south of Imadegawa — 5 min walk from Demachiyanagi Stn',
    cuisine: 'Kanmidokoro of homemade anmitsu and mamekan, with shaved ice in summer (Tabelog; Kansai Walker) · agar from Chiba tengusa seaweed, black syrup from Hateruma Island brown sugar, Hokkaido red peas and azuki, red-bean paste cooked each morning with a little salt, house-stewed apricots (Kansai Walker 2018, 2020; 2026 reviews) · shiratama anmitsu ¥800 (August 2026), matcha cream anmitsu, mamekan, tokoroten, zenzai (warm or chilled) · mini sets pairing anmitsu with zenzai or a small shaved ice · shaved ice in about five flavours: milk, hojicha made with Ippodo tea, Uji, black syrup and kinako, Uji kintoki, and the summer apricot ice (¥1,050, Retty review posted October 2025) · green tea',
    website: TB, gmaps: gm('みつばち 京都 出町柳 あんみつ'), menu_url: TB,
    notes: "[Kanmi · Demachiyanagi, anmitsu and summer kakigori] A small table-only sweets shop on Kawaramachi-dori, marked by a noren reading \"anmitsu\": agar from Chiba tengusa, black syrup of Hateruma brown sugar, Hokkaido red peas and lightly salted red-bean paste, all made in the shop. Shiratama anmitsu ¥800; summer brings a thick house apricot ice and an Ippodo-hojicha shaved ice, winter zenzai. Expect a queue; cash only. Wagashi WEST Tabelog 100 2023 and 2026. 11:00–18:00 until sold out, closed Sunday and Monday.",
    chef_bio: { chef_name: '松尾恵子', roles: ['Owner (店主, Kansai Walker 2020)'], origin: null,
      background: 'Kansai Walker (February 2020) quotes the owner, 松尾恵子: the black syrup of Okinawa Hateruma brown sugar is made with a stronger aroma and flavour so that it is not overpowered by the sea taste of the agar, and the plump Hokkaido red peas are popular. Kansai Walker (February 2018) adds agar slowly simmered from tengusa from the Chiba sea and red-bean paste cooked every morning with salt to hold down the sweetness. Tabelog Sweets WEST "Tabelog 100" 2019, 2020, 2022 and Wagashi WEST 2023, 2026.',
      philosophy: null,
      specialty: 'Anmitsu; mamekan; apricot shaved ice.',
      anecdotes: [
        { text: 'A diner who comes back every summer for the shaved ice: "The red bean paste had a hint of saltiness, which made it even more delicious" — August 2025.', source: R + 'B489083958/' },
        { text: '"This hojicha is made from tea leaves sourced from Ippodo … the flavor was rich and deep." — August 2026.', source: R + 'B535573073/' },
        { text: '"By the time I left, there was a line of about eight groups." — September 2026; the apricot ice had sold out.', source: R + 'B536057816/' },
        { text: '"The texture is possibly the best I\'ve ever had." — of the agar jelly, October 2026.', source: R + 'B537080653/' },
      ],
      japanese_sources_summary: '関西ウォーカー (2020年2月): みつばち、店主の松尾恵子さん「沖縄県波照間島産の黒糖で作る黒みつは、寒天の海藻の味に負けないよう、香りや風味を強めに出しています。北海道産赤エンドウ豆のふっくらとした食感も人気です」、豆かん650円、ミニところ天セット900円、「あんみつ」と書かれたのれん、上京区河原町通今出川下ル梶井町448-60、11:00〜18:00 (LO17:45)、休み日月、12席、禁煙。関西ウォーカー (2018年2月): 千葉県の海から届くテングサをじっくり煮込んだ寒天、毎朝炊き上げるあんこは塩を効かせて甘さを控え、白玉あんみつ650円、白玉ぜんざいとあんみつのセット950円、抹茶クリームあんみつ700円、売切れ次第終了。Retty: 白玉あんみつ800円、特製あんず氷1,050円、火〜土 11:00〜18:00、日月休み。食べログ: 甘味処・かき氷、11:00〜18:00 (L.O. 17:45)、日月休み、売り切れ次第終了、予約不可、カード・電子マネー・QR 不可、テーブル14席、禁煙、子供可、テイクアウト可、スイーツ WEST 百名店 2019・2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2024年7月〜2026年10月、英語): 白玉あんみつ800円、あんず氷、一保堂の茶葉のほうじ茶氷、ミルク、宇治金時、黒みつきなこ氷、豆かん、ぜんざい、行列。',
      confidence: 'medium', sources: [TB, W2020, W2018, RETTY, R + 'B489083958/', R + 'B534431870/', R + 'B534879344/', R + 'B535573073/', R + 'B536017888/', R + 'B536057816/', R + 'B537080653/', R + 'B537305655/', R + 'B537821466/', R + 'B538195112/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order verbally from a short sweets menu; wait in line outside and bring cash. Many overseas visitors in summer (August 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区河原町今出川下ル梶井町448-60',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Wagashi WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.027996, 135.769639); GSI resolves 京都府京都市上京区梶井町448番地 (lot, not 448-60) 228m away, outside 150m, so the pin rests on the Tabelog point; kyoto_oryori_hayashi (448-61) is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534431870/', RETTY, W2020],
    price_note: 'No published menu; prices from an August 2026 review, Retty (review posted October 2025) and Kansai Walker (February 2020).', last_checked: TODAY, items: [
      it('白玉あんみつ', '', 'Shiratama anmitsu', '¥800', 'Anmitsu', 'ask', 'ask', 'August 2026.', 'shiratama_anmitsu'),
      it('特製あんず氷', '', 'House apricot shaved ice (summer)', '¥1,050', 'Shaved ice', 'ask', 'ask', 'Retty review posted October 2025.', 'apricot_ice'),
      it('豆かん', '', 'Mamekan (agar with red peas)', '¥650', 'Anmitsu', 'ask', 'ask', 'February 2020.', 'mamekan'),
      it('ミニところ天セット', '', 'Mini tokoroten set with zenzai', '¥900', 'Sets', 'ask', 'ask', 'February 2020.', 'tokoroten_set'),
    ] }, {
    cuisine: '自家製のあんみつと豆かん、夏はかき氷の甘味処 (食べログ、関西ウォーカー)・千葉のテングサの寒天、波照間島の黒糖の黒みつ、北海道の赤エンドウ豆と小豆、毎朝塩を効かせて炊くあんこ、自家製の煮あんず (関西ウォーカー 2018・2020年、2026年の口コミ)・白玉あんみつ800円 (2026年8月)、抹茶クリームあんみつ、豆かん、ところてん、ぜんざい (温・冷)・あんみつとぜんざいやミニかき氷のミニセット・かき氷は5種ほど: ミルク、一保堂の茶葉のほうじ茶、宇治、黒みつきなこ、宇治金時、夏のあんず氷 (1,050円、Retty 2025年10月投稿の口コミ)・グリーンティー',
    neighborhood: '今出川の南の河原町通。出町柳駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。テングサの寒天、北海道の赤エンドウ豆と小豆、波照間の黒糖の黒みつ、白玉、自家製の煮あんずが中心 (関西ウォーカー 2020年、2026年の口コミ) だが、小麦や器具の共用については情報がない。アイスやきなこのトッピングもある。',
    vegan_detail: '要確認。あんみつ、豆かん、ぜんざいは寒天、豆、黒糖の蜜、白玉が中心だが、クリームの品、バニラや抹茶のアイス、ミルクのかき氷もある (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[甘味・出町柳、あんみつと夏のかき氷] 「あんみつ」ののれんが目印の、河原町通のテーブル席だけの小さな甘味処。千葉のテングサの寒天、波照間の黒糖の黒みつ、北海道の赤エンドウ豆、塩を効かせたあんこをすべて店で作る。白玉あんみつ800円。夏は濃い自家製のあんず氷や一保堂のほうじ茶の氷、冬はぜんざい。行列を覚悟、現金のみ。和菓子・甘味処 WEST 百名店 2023・2026。11時〜18時 (売り切れまで)、日・月曜休み。',
  });
}

// ================================================================ 祇園きなな 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002500/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyo-kinana.com/'; const HELLO = SITE + 'sample-page/'; const SHOP = SITE + 'shop/';
  const MENU = SITE + 'menu/'; const MAT = SITE + 'material/'; const ICHIWAN = SITE + 'ichiwan/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_gion_kinana_honten', name: '祇園きなな 本店 (Gion Kinana Honten)', category: 'MOM_AND_POP',
    lat: 35.002337, lng: 135.774294, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The kinako ice cream itself lists milk, cream, sugar, glucose, kinako (soy), skim milk powder, starch, agar and konjac flour (official site), but the parfaits add yatsuhashi, warabi mochi, rice-flour cookies and tiramisu (2026 reviews), and nothing is said about wheat in the starch or shared equipment.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The signature kinana ice cream is made with milk, cream and skim milk powder (official site), so the parfaits and sets are not vegan; it contains no egg. Ask about the shaved ice — the black-syrup kinako ice hides kinako ice cream inside (September 2026).',
    hours_raw: 'Official site: 12:00–18:00 (last order 17:30); irregular closing days, posted on Instagram around the 20th of the month before. Tabelog instead gives 12:00–17:30, closed Thursday. Reservations take priority; bookings by phone (075-525-8300); a notice in the Instagram feed on the official site (read November 2026) said bookings for October were paused while days, hours, menu and the booking system were reviewed — reviews show the café open in October and November 2026. One order per person and a one-hour limit when busy (September 2026). Cashless only, no cash (official site; Tabelog). Children under 12 are not admitted (official site; Tabelog and an August 2026 review say under 6). Upstairs by a steep staircase: 18 seats, 6 at the counter; non-smoking; wheelchair users can ask two weeks ahead about the ground-floor shop (official site; August 2026). English menu (Tabelog). In a lane one street west of Hanamikoji; 7 min walk from Keihan Gion-Shijo Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a lane west of Hanamikoji — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Kinako ice cream café: "kinana" is ice cream of Tanba black-soybean kinako blended with domestic kinako, made without eggs, colourings or preservatives (official site) · freshly made kinana, served soft before it fully freezes, drink set ¥1,400; three-scoop set ¥1,600; parfaits with a drink — berry-berry kinana, kinana hapon (Japanese style: warabi mochi, shiratama, Tanba dainagon azuki, mugwort and black-sesame ice), kinana italian ¥1,600, kinana tiramisu ¥1,700 (official menu); a September 2026 diner paid ¥600 for freshly made kinana and ¥1,100 for the hapon · lunch plates with a day’s vegetables, roast pork or mouthwatering chicken with sixteen-grain rice and soup ¥2,600 (until 14:00); croque-monsieur and hummus with bagel until 17:00 · seasonal shaved ice: black syrup and kinako ¥1,800, Uji kintoki ¥2,100 with a drink (official menu)',
    website: SITE, gmaps: gm('祇園きなな 本店'), menu_url: MENU,
    notes: "[Kinako ice cream · Gion, upstairs off Hanamikoji] An upstairs café in a Gion townhouse lane serving kinana — ice cream of Tanba black-soybean kinako made without eggs or additives, served freshly made, soft and smooth, with hojicha or matcha (drink sets from ¥1,400). Parfaits pile it with warabi mochi, shiratama, yatsuhashi and mugwort or black-sesame ice. The owner first served it as the dessert at the restaurant 一碗, which has reopened downstairs as a six-seat counter. Cashless only; no children under 12. 12:00–18:00, irregular closures; booking recommended.",
    chef_bio: { chef_name: '大本勝司', roles: ['Owner (店主, official site)'], origin: null,
      background: 'Per the owner’s greeting on the official site: more than 20 years ago the owner ran 一碗, a Kyoto restaurant shaped by the Slow Food idea, and the kinako ice cream served there after meals proved so popular that a sweets-only shop followed. The ice is made around the theme "gentle and delicious" with Tanba black-soybean kinako, no chemical colourings or preservatives, little fat and no eggs, so guests with egg allergy can eat it. The honten has 一碗 on the ground floor and the café upstairs. The 一碗 page (undated) says the shop had been in Gion 21 years when kinana was remade the previous autumn, with far fewer seats and bookings so guests no longer wait, and 味司一碗 reopened downstairs after 21 years: six counter seats, reservation only (Instagram DM), one omakase course ¥10,000. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Wagashi WEST 2026.',
      philosophy: 'Per the official site: to keep serving ice cream that is truly gentle on the body and delicious, not something that looks good only because it is "Kyoto" or "Gion".',
      specialty: 'Freshly made kinana; kinana parfaits.',
      anecdotes: [
        { text: '"Kinana is said to be ice cream just before it completely freezes." — September 2026.', source: R + 'B536020686/' },
        { text: '"The mugwort ice cream contained finely chopped mugwort, allowing me to truly appreciate its flavor." — September 2026.', source: R + 'B535961927/' },
        { text: 'An August 2026 diner liked the shaved ice but found the green tea serving "quite minimal", and advised budgeting about ¥1,200 even for a drink.', source: R + 'B534587274/' },
        { text: 'A September 2026 diner found the shop "located on a narrow alley just off Hanamikoji Street", among places that "seem exclusive to first-time visitors".', source: R + 'B536020686/' },
      ],
      japanese_sources_summary: '公式サイト (kyo-kinana.com): 店主 大本勝司のあいさつ「きななとはきなこのアイス」、20年以上前にスローフードの理念に感化された料理店「一碗」を経営、食後のデザートのきなこアイスがルーツ、丹波黒大豆きなこ、化学的な着色料・保存料不使用、脂肪分控えめ、卵不使用で卵アレルギーの方も、一階は料理店「一碗」、二階が甘味処、「京都だから」「祇園だから」という外見ばかりのものではなく本当に体にやさしく美味しいアイスを。店舗: 祇園町南側570-119、花見小路から一本西の路地、工房併設、12:00〜L.O.17:30 (18:00閉店)、不定休 (翌月の店休日を毎月20日頃 Instagram に投稿)、2階カウンター・テーブル全18席、予約優先、キャッシュレス決済のみ (現金不可)、全席禁煙、12歳未満はご遠慮、車椅子は2週間以上前の相談で一階の別店舗で対応。原材料: 牛乳、生クリーム、砂糖、ぶどう糖、きなこ (大豆)、脱脂粉乳、でんぷん、寒天、こんにゃく粉。メニュー: できたてきなな ドリンクセット1,400円、アイス3種盛り1,600円、きななハポン1,600円、きななイタリアン1,600円、きななティラミス1,700円、1日分の野菜プレート2,600円 (14:00 L.O.)、黒みつきなこ氷1,800円、宇治金時2,100円。一碗のページ: 祇園に21年、昨秋きななを一新、席数を減らし予約制に、一階に味司一碗が21年ぶりにオープン、カウンター6席、完全予約制、おまかせコース10,000円。Instagram の告知: 10月の予約受付を見合わせ、営業日・時間・メニュー・予約制の有無を調整中。食べログ: 甘味処・ジェラート・カフェ、12:00〜17:30、木曜定休、予約優先、キャッシュレスのみ、18席、6歳未満不可、英語メニュー、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2026。口コミ (2026年8月〜11月、英語): できたてきなな600円、きななハポン1,100円、ほうじ茶付き1,400円、よもぎと黒ごまのアイス、ひとり一品、混雑時は1時間制。',
      confidence: 'medium', sources: [TB, SITE, HELLO, SHOP, MENU, MAT, ICHIWAN, R + 'B534587274/', R + 'B535961927/', R + 'B535969115/', R + 'B536019312/', R + 'B536020686/', R + 'B536104148/', R + 'B536670646/', R + 'B537314677/', R + 'B538070283/', R + 'B538577535/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); book by phone if you can; bring a card or IC card — no cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-119',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Wagashi WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.002337, 135.774294); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 142m — the large 570 block, so the pin stays on the Tabelog point; kyoto_gion_fukushi (570-120) is 25 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B535961927/'],
    price_note: 'Official menu (drink-set prices, undated); a September 2026 review gives à la carte prices without a drink.', last_checked: TODAY, items: [
      it('できたてきなな ドリンクセット', '', 'Freshly made kinana with a drink', '¥1,400', 'Kinana', 'ask', 'no', '¥600 without a drink (September 2026).', 'dekitate_kinana'),
      it('アイス３種盛り ドリンクセット', '', 'Three-scoop ice with a drink', '¥1,600', 'Kinana', 'ask', 'no', '', 'ice_3'),
      it('きななハポン ドリンクセット', '', 'Kinana hapon parfait with a drink', '¥1,600', 'Parfaits', 'no', 'no', 'Warabi mochi, shiratama, yatsuhashi (2026 reviews).', 'kinana_hapon'),
      it('きななティラミス ドリンクセット', '', 'Kinana tiramisu with a drink', '¥1,700', 'Parfaits', 'no', 'no', '', 'kinana_tiramisu'),
      it('黒みつきなこ氷 ドリンクセット', '', 'Black syrup and kinako shaved ice with a drink (seasonal)', '¥1,800', 'Shaved ice', 'ask', 'no', 'Kinako ice cream inside (September 2026).', 'kuromitsu_kinako_ice'),
    ] }, {
    cuisine: 'きなこアイスの甘味処:「きなな」は丹波黒大豆きなこと国内産大豆きなこを合わせたアイスで、卵、着色料、保存料は使わない (公式サイト)・凍りきる前のやわらかいできたてきなな ドリンクセット1,400円、アイス3種盛り1,600円、ドリンク付きのパフェ: ベリーベリーきなな、きななハポン (わらび餅、白玉、丹波大納言小豆、よもぎと黒ごまのアイス)、きななイタリアン1,600円、きななティラミス1,700円 (公式メニュー)、2026年9月の客はできたてきなな600円、ハポン1,100円・1日分の野菜のプレート (ローストポークかよだれ鶏、十六穀米、スープ) 2,600円 (14時まで)、クロックムッシュ、フムスとベーグルは17時まで・季節のかき氷: 黒みつきなこ氷1,800円、宇治金時2,100円 (ドリンク付き、公式メニュー)',
    neighborhood: '祇園、花見小路から一本西の路地。祇園四条駅から徒歩7分',
    gf_detail: '要確認。きなこアイス自体の原材料は牛乳、生クリーム、砂糖、ぶどう糖、きなこ (大豆)、脱脂粉乳、でんぷん、寒天、こんにゃく粉 (公式サイト) だが、パフェには八ッ橋、わらび餅、米粉のクッキー、ティラミスが入り (2026年の口コミ)、でんぷんの原料や器具の共用については情報がない。',
    vegan_detail: '要確認。看板のきななは牛乳、生クリーム、脱脂粉乳を使う (公式サイト) ので、パフェやセットはヴィーガン不可。卵は使っていない。かき氷は確認を。黒みつきなこ氷の中にはきなこアイスが入っている (2026年9月)。',
    notes: '[きなこアイス・祇園、花見小路の一本西の2階] 祇園の町家の路地の2階のカフェ。丹波黒大豆きなこのアイス「きなな」を、卵や添加物を使わずに作る。凍りきる前のなめらかなできたてを、ほうじ茶や抹茶と (ドリンクセット1,400円から)。パフェにはわらび餅、白玉、八ッ橋、よもぎや黒ごまのアイス。店主が料理店「一碗」で食後に出していたのが始まりで、その一碗は1階でカウンター6席の店として再開した。キャッシュレスのみ、12歳未満不可。12時〜18時、不定休、予約がおすすめ。',
  });
}

save();
