// Kyoto priority (kyoto-missed), worker osw13, batch 137 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: 酒と魚とオトコマエ食堂 京都駅前店 (sister concept of kyoto_otokomae_shokudo_nanajo, small group), 焼肉庵 兆, 大多福, ザ ルーツ オブ オール イービル.
// Skips: fiveran coffee BASE (brand in data), アミー and 菜采堂 (too thin), ともしびzero (thin; ともしび name), パティスリー イチキュウゴ (retail), the Kyoto Yodobashi chain branches (タケル, ALEGRIA, 鎌倉パスタ, HIRO, 神戸元町ドリア, HUB, とんかつがんこ), あかり堂 (THAN), 伊藤軒 (chain), 三井ガーデンホテル (hotel chain). Shops fetched by the worker (Tabelog /en/ only, 3 s apart).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-137');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26045418', 'same brand already in data: fiveran coffee BASE 京都駅前店 (西境町167, opened 15 July 2026) is a branch of fiveran (kyoto_fiveran, 役行者町377, whose background reads "An October 2026 review calls it part of a chain and mentions the Osaka outlet fiveran osaka Coffee BASE"); reviews here call it "fiveran\'s new concept" (B535348191) and "a branch" of the main store, and a November 2026 reviewer lists fiveran shops at Grand Front, Yodoyabashi and Osaka Station; also a bread shop (Tabelog genre "Bread", takeaway)');
skip('26044530', 'too thin to verify: アミー (下之町1-1), a café with one Tabelog review (January 2026) and no menu, website or other detail found');
skip('26043582', 'too thin to verify: お酒とまるまる ともしびzero (丸太町通新町東入ル春帯町355-1) has six short Tabelog reviews (November 2025 to February 2026) and no website or menu; a February 2026 reviewer names a previous location, "Daidokoro Tomato". The name matches the ともしび izakaya shops (kyoto_tomoshibi_3rd_kiyamachi, whose background lists ともしびzero among four ともしび shops; 26036332 and 26040377 were skipped as the same brand), but no source read on 2026-11-26 ties the operator');
skip('26031144', 'retail food shop (Greg 11-07 ruling): パティスリー イチキュウゴ (丸太町通新町西入る梅屋町178-3) sells cakes, tarts and baked goods to take away (Tabelog genre "Cake, Sweets"; reviews 2019–2024 mention takeaway only); no seats on Tabelog, and no founding date, family succession or GF/vegan options in the listing or the 10 reviews fetched');
skip('26045274', 'chain: 1ポンドのステーキハンバーグ タケル 京都ヨドバシ店 (official site steak-takeru.jp); a web search on 2026-11-26 returned listing pages for six more branches in Osaka (LINKS UMEDA, 阪急三番街, 西中島, 東三国, 上新庄, ららぽーとEXPOCITY), so 5+ same-name shops');
skip('26044626', 'chain: シュラスコ＆ビアレストラン ALEGRIA 京都ヨドバシカメラ店; the gurunavi page of ALEGRIA 外苑前 (r.gnavi.co.jp/j0b64p2a0000/, read 2026-11-26) calls it "全国44店舗展開のシュラスコレストラン" (also skipped at 26044969)');
skip('26016930', 'large parent: 鎌倉パスタ 京都ヨドバシ店, a Saint Marc Holdings brand (the Tabelog listing links saint-marc-hd.com/kamakura/; saint-marc-hd.com, read 2026-11-26, gives "グループ店舗数 768 店舗")');
skip('26017632', 'same brand already in data: HIRO 京都ヨドバシ店 (hamburger steak) gives manzo-kyoto.com/shop/hiro/ as its website; that page (株式会社萬蔵, read 2026-11-26) lists 和牛ステーキHIRO 京都四条河原町店 at 京都河原町ガーデン8F, already in data as kyoto_wagyu_steak_hiro_kawaramachi; the 萬蔵 group runs 5 brands and about 10 shops');
skip('26037066', 'large parent: 神戸元町ドリア 京都ヨドバシ店, a Saint Marc Holdings brand (its page saint-marc-hd.com/doria/shop/173/ carries "© SAINTMARC HOLDINGS"; the group site gives "グループ店舗数 768 店舗", read 2026-11-26)');
skip('26022924', 'chain: HUB 京都ヨドバシ店 (pub-hub.com shop 84); 株式会社ハブ\'s FY2026 securities report (edinetdb.jp/company/E03473, read 2026-11-26) gives "英国風ＰＵＢチェーン110店舗（2026年２月28日現在）" (also skipped at 26028425, 26003690)');
skip('26044962', 'chain: とんかつがんこ 京都ヨドバシ店, website gankofood.co.jp (がんこフードサービス, about 100 restaurants; ruled at 26003081 and 26001132)');
skip('26044902', 'large parent: あかり堂 京都タワー店 (京都タワービル北新館 3F); the top Tabelog review calls it "A new restaurant from the popular group THAN, which operates over 50 locations"; 株式会社 THAN\'s brands page gives "26ブランド 60店舗" (see 26038128)');
skip('26039286', 'chain: 果菓 伊藤軒 京都タワーサンド店; the listing links kyoto-itoken.co.jp, whose shop list shows eight 伊藤軒 shops (ruled at 26043363 and 26036723)');
skip('26033706', 'big-chain hotel (Greg 11-08): 三井ガーデンホテル 京都駅前; gardenhotels.co.jp (Mitsui Fudosan Hotel Management, read 2026-11-26) lists 36 Mitsui Garden Hotels, six in Kyoto');
skip('26028924', 'no 2025–26 review: 菜采堂 (京都タワー 1F) has one Tabelog review, dated June 2024');

// ================================================================ 酒と魚とオトコマエ食堂 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26029356/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://otokomae-syokudou.jp/';
  const PR = 'https://www.prdesse.com/posts/download_file/20845/pdf/pdf_file';
  const H = day(['11:30', '24:00']);
  put({
    id: 'kyoto_otokomae_shokudo_ekimae', name: '酒と魚とオトコマエ食堂 京都駅前店 (Sake to Sakana to Otokomae Shokudo, Kyoto Ekimae)', category: 'OMNI',
    lat: 34.98771765788073, lng: 135.76049907018734, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a seafood izakaya with sashimi platters and grilled fish, but also eggplant gyoza, deep-fried chicken, a mini soy-sauce ramen and Inaniwa udon (2026 reviews); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: yam fries, French fries and yuba sashimi are on the menu (June, October 2026), but the menu is built on fish and seafood; no vegan option stated.',
    hours_raw: 'Tabelog: daily 11:30–24:00 (last order 23:30); closed days not fixed. From opening until 17:00 the food is a lunch and "lunch drinks" menu (June, September 2026). Reservations taken; ask by phone for a non-smoking seat (Tabelog). Two-hour limit when busy, two and a half hours for courses (Tabelog). Cards accepted; no e-money or QR payments (Tabelog). 50 seats: since April 2020 the 26 table seats are smoking, the 11 counter seats and 8 table seats non-smoking (Tabelog). No parking; coin parking nearby. Opened 2 May 2017 (Tabelog). 3 min walk from JR Kyoto Station (Tabelog), on the street of inns north of the station (September 2026). Staff offer to keep suitcases (August, September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Kyoto Station, on the street of inns — 3 min from JR Kyoto Station',
    cuisine: 'A seafood izakaya by Kyoto Station whose theme is regional dishes and sake: fish, meat and vegetables bought from ports and farms around Japan and cooked the way they are eaten where they come from (press release, February 2024; Tabelog) · the shop names Aomori scallops, Ehime Dateguro tuna, Iwate Kitakuri sea urchin and vegetables from contract farms in Aomori, cooked by a chef trained in Kyoto (Tabelog) · the "Otokomae" sashimi platter served on ice in a large bowl: five kinds ¥1,209 (September 2026), ¥1,869 (October 2026); more than five kinds came (August 2026) · eggplant gyoza ¥714, spring-roll filling wrapped in eggplant (September 2026) · shrimp yukhoe (August 2026), grilled salmon collar about ¥800 (September 2026), simmered octopus ¥659 (September 2026), fried fish and eggplant (October 2026), squid liver, potato salad (November 2026) · deep-fried chicken neck ¥659, spicy chicken ¥659, yuba sashimi ¥769, dashimaki ¥714 (October 2026) · Inaniwa udon to dip (August 2026); a mini soy-sauce ramen ¥549 and yam fries ¥604 on the daytime menu (September 2026) · lunch sets (September 2026) · a wide choice of sake from a special sake server (Tabelog; June, September 2026), Taki Jiman (September 2026); mega highball ¥769, mega Otokomae sour ¥769 (September 2026), mega lemon sour ¥824, sours ¥549 (October 2026), red wine ¥549 (September 2026) · about ¥2,000–6,000 a head (reviews)',
    website: SITE, gmaps: gm('酒と魚とオトコマエ食堂 京都駅前店 東塩小路町538-2'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · north of Kyoto Station, a seafood and sake izakaya] Sashimi platters on ice, eggplant gyoza and regional seafood with a long sake list, open from 11:30 with a daytime drinks menu. Smoking at the tables, non-smoking counter. Part of the small Otokomae Shokudo group (its sushi-led sister is listed separately).',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Run by 株式会社すぎうら, a Kyoto company (代表取締役 杉浦 茂樹). A February 2024 press release from the company gave "オトコマエ食堂" as three shops (京都駅前店, 西院店 and LINKS UMEDA店) with the themes 「他産地消」 and 「郷土料理と日本酒」; the official site, read 2026-11-26, lists 京都駅前店, 西院店 and 京都駅前七条店, the last added as a shop "with sushi as its main focus" (お鮨をメインにしたお店). That sushi-led shop is already listed (kyoto_otokomae_shokudo_nanajo, 酒と鮨とオトコマエ食堂, whose background reads "Part of the Otokomae Shokudo seafood-izakaya group"). Tabelog\'s shop text says the owner visits fishing ports and producers to choose the ingredients. Reviewers describe a cool, pleasant interior (August 2026), a mostly Japanese crowd and cramped seating (October 2026), friendly, attentive staff (August, September 2026), smoking allowed at the tables (November 2026), and a place more for dining than for a casual drink (September 2026). Several find the prices a little high or the portions small (September, October 2026); others find it good value (August, October 2026). One found the sea urchin a bit dry (August 2026), one the mini ramen salty (September 2026), one the mega drinks weak (September 2026).',
      philosophy: 'From the press release (February 2024): fresh fish, meat and vegetables from ports and farms around Japan, cooked the way they are eaten where they come from.',
      specialty: 'Sashimi platters on ice; eggplant gyoza; regional sake.',
      anecdotes: [
        { text: 'August 2026: "The staff were friendly and attentive, promptly clearing empty plates and even offering to hold my suitcase."', source: R + 'B534103026/' },
        { text: 'September 2026: "It comes in a large bowl filled with ice, topped with fresh, thick slices of sashimi. The presentation is quite impressive."', source: R + 'B535053249/' },
        { text: 'October 2026: "The sashimi was incredibly fresh, and considering the prices, the cost-performance ratio is excellent. The fried fish and eggplant were especially delicious and paired perfectly with the sake."', source: R + 'B536642237/' },
      ],
      japanese_sources_summary: '株式会社すぎうらのプレスリリース (2024年2月2日): 「オトコマエ食堂」は京都駅前店、西院店、LINKS UMEDA店の3店舗、「他産地消」「郷土料理と日本酒」がテーマの海鮮居酒屋、日本全国の漁港や農場を訪問し取り寄せた新鮮な魚、肉、野菜を、その産地で食べられているおいしい調理法で。公式サイト: 京都駅前店、西院店、京都駅前七条店 (お鮨をメインにしたお店)。食べログ: 酒と魚とオトコマエ食堂、居酒屋・海鮮・日本酒バー、下京区東塩小路町538-2、JR京都駅から徒歩3分、毎日11:30〜24:00 (L.O. 23:30)、不定休、予約可 (禁煙席は電話で)、繁忙時は2時間制、コースは2時間半制、カード可、電子マネー・QR不可、50席、2020年4月より喫煙席はテーブル26席、禁煙席はカウンター11席とテーブル8席、駐車場なし (近隣にコインパーキング)、オープン2017年5月2日、圧巻のサイズ！オトコマエ刺身盛、特別な日本酒サーバーを使用！、最大20名様までのご宴会が可能。口コミ (2026年6月〜11月、英語): オトコマエ刺身盛り5点1,209円 (2026年9月)、1,869円 (2026年10月)、なすの餃子714円、たこ道具煮659円、ミニラーメン549円 (2026年9月)、えびのユッケ (2026年8月)、湯葉刺し769円、だし巻き714円 (2026年10月)、昼から飲める、スーツケースを預かってくれる (2026年8月、9月)。',
      confidence: 'low', sources: [TB, SITE, PR].concat(rv(R, ['B529818752', 'B530254756', 'B533010442', 'B534103026', 'B534562138', 'B535053249', 'B535972898', 'B536642237', 'B537320332', 'B539443442'])) },
    cultural_comfort: { level: 'japanese', note: 'No English menu noted; a mostly Japanese crowd (October 2026); staff keep suitcases for travellers (2026 reviews); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町538-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June to November 2026; listed on the official site (read 2026-11-26).' },
    pin_source: `Tabelog ${TB} (34.987718, 135.760499); not pin-checked by the worker (integrator to check); nearest pins kyoto_wanone_kyoto_ekimae (hidden) 33.4m, osw8-b109 pending kyoto_natural_cafe_kyoto_ekimae about 43m, kyoto_izakaya_kyoto_tower_since1905 46.8m; sister kyoto_otokomae_shokudo_nanajo about 230m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535053249/', R + 'B537320332/', R + 'B534562138/'],
    price_note: 'Prices tax included from September–October 2026 reviews; no menu prices read on Tabelog.', last_checked: TODAY, items: [
      it('オトコマエ刺身盛り', '', 'Otokomae sashimi platter (five kinds, on ice)', '¥1,209', 'Sashimi', 'ask', 'no', 'September 2026; ¥1,869 in October 2026.', 'sashimi_mori'),
      it('', '', 'Eggplant gyoza', '¥714', 'Small plate', 'ask', 'ask', 'September 2026.', 'nasu_gyoza'),
      it('たこ道具煮', '', 'Simmered octopus', '¥659', 'Small plate', 'ask', 'no', 'September 2026.', 'tako_dogu_ni'),
      it('', '', 'Yuba sashimi', '¥769', 'Small plate', 'ask', 'ask', 'October 2026.', 'yuba_sashimi'),
      it('', '', 'Dashimaki (rolled omelette)', '¥714', 'Small plate', 'ask', 'no', 'October 2026.', 'dashimaki'),
      it('', '', 'Deep-fried chicken neck', '¥659', 'Fried', 'ask', 'no', 'October 2026.', 'seseri_karaage'),
      it('', '', 'Yam fries', '¥604', 'Fried', 'ask', 'ask', 'September 2026 (daytime menu).', 'yam_fries'),
      it('', '', 'Mini ramen (soy sauce)', '¥549', 'Noodles', 'no', 'ask', 'September 2026 (daytime menu).', 'mini_ramen'),
    ] }, {
    cuisine: '京都駅近くの海鮮居酒屋。テーマは郷土料理と日本酒、日本全国の漁港や農場から取り寄せた魚、肉、野菜を、その産地で食べられている調理法で (プレスリリース、2024年2月、食べログ)・Aomori のほたて、Ehime の Dateguro のまぐろ、Iwate の Kitakuri のうに、Aomori の契約農家の野菜を、京都で修業した料理人が (食べログ)・大きな器に氷を敷いたオトコマエ刺身盛り: 5点1,209円 (2026年9月)、1,869円 (2026年10月)、5種より多く盛られていた (2026年8月)・なすの餃子714円、春巻きの具をなすで包む (2026年9月)・えびのユッケ (2026年8月)、鮭のかま焼き800円ほど (2026年9月)、たこ道具煮659円 (2026年9月)、魚となすの揚げ物 (2026年10月)、いかの肝、ポテトサラダ (2026年11月)・鶏の首肉の唐揚げ659円、ピリ辛の鶏659円、湯葉刺し769円、だし巻き714円 (2026年10月)・稲庭うどんのつけうどん (2026年8月)、昼のメニューのミニラーメン (しょうゆ) 549円、長いものフライ604円 (2026年9月)・ランチセット (2026年9月)・特別な日本酒サーバーで日本酒が多い (食べログ、2026年6月、9月)、Taki Jiman (2026年9月)、メガハイボール769円、メガオトコマエサワー769円 (2026年9月)、メガレモンサワー824円、サワー549円 (2026年10月)、赤ワイン549円 (2026年9月)・ひとり2,000〜6,000円ほど (口コミ)',
    neighborhood: '東塩小路、京都駅の北。JR京都駅から徒歩3分',
    gf_detail: '要確認: 刺身の盛り合わせや焼き魚の海鮮居酒屋だが、なすの餃子、鶏の唐揚げ、ミニラーメン (しょうゆ)、稲庭うどんもある (2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 長いものフライ、フライドポテト、湯葉刺しがある (2026年6月、10月) が、料理は魚と魚介が中心。ヴィーガン対応の記載なし。',
    notes: '[居酒屋・京都駅の北、海鮮と日本酒の居酒屋] 氷を敷いた刺身の盛り合わせ、なすの餃子、各地の魚介と日本酒。11:30から昼飲みのメニューも。テーブルは喫煙、カウンターは禁煙。小さなオトコマエ食堂のグループの店で、お鮨が中心の姉妹店は別に掲載。',
  });
}

// ================================================================ 焼肉庵 兆 京都駅前本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26029974/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakiniku-an-kizashi.com/';
  const D = ['17:00', '22:30']; const W = day(D); const E = day(['11:30', '14:30'], D);
  put({
    id: 'kyoto_yakiniku_an_kizashi_shichijo', name: '焼肉庵 兆 京都駅前本店 (Yakiniku An Kizashi)', category: 'OMNI',
    lat: 34.98943228787828, lng: 135.75622542020767, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: wagyu yakiniku with salt or a light dipping sauce (August 2026), plus wagyu sushi, cold noodles and egg kuppa on the courses (2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; every course and lunch set is built on beef (Tabelog; 2026 reviews); no vegan option stated.',
    hours_raw: 'Tabelog: Mon–Fri and the day after a public holiday 17:00–22:30 (last order 22:00); Sat, Sun, public holidays and the day before 11:30–14:30 (last order 14:00) and 17:00–22:30 (last order 22:00). Open all year, including 31 December and 1 January (Tabelog). Reservations taken; online booking for courses (Tabelog). Private rooms have a two-hour limit (May 2026). Cards, iD/QUICPay and QR payments, including Alipay and WeChat Pay (Tabelog). 48 seats: private rooms for up to 10, tables, sunken kotatsu seats, counter and sofa seats; smoke-free roasters (Tabelog). Non-smoking. Children welcome (Tabelog). Ordering by QR code (August 2026) or tablet (May 2026). No parking; coin parking nearby. Opened 24 December 2017 (Tabelog). On Shichijo-dori at Shinmachi, 6 min walk from JR Kyoto Station (Tabelog; August 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-dori at Shinmachi — 6 min from Kyoto Station',
    cuisine: 'A wagyu yakiniku restaurant with designer private rooms near Kyoto Station: Kuroge wagyu from around Japan, including Kobe and Matsusaka beef, wagyu meat sushi and seared yukhoe (Tabelog) · courses, food only (Tabelog, tax included): "Gokujou" 13 dishes ¥11,000; "KIZASHI" 11 dishes ¥8,800; a premium wagyu course served in a bucket, 11 dishes ¥7,700 (most popular); horumon can be swapped · the KIZASHI course in 2026: premium tongue, Kuroge wagyu outside skirt, the day\'s special wagyu (ichibo, August 2026), seared wagyu sushi, grilled wagyu "shabu-roast" with homemade ponzu, salad, kimchi and namul, short rib, horumon, Morioka cold noodles or egg kuppa, and dessert, ¥8,000 (May, June 2026); all-you-can-drink ¥2,000 extra (June 2026) · lunch (weekends on Tabelog) from ¥1,680: the Kizashi lunch of wagyu kalbi, salted tongue and outside skirt with kamado-cooked rice, salad, beef-broth soup, a small dish and dessert, ¥2,480 (August 2026); a wagyu lean-meat lunch (June, July 2026); premium tongue and outside-skirt lunches with yuzu sorbet (August 2026) · thick-cut meat (June, August 2026) · fruit sours, yuzu wine and non-alcoholic drinks (Tabelog) · about ¥1,000–3,000 at lunch, ¥10,000–20,000 a head at dinner (reviews)',
    website: SITE, gmaps: gm('焼肉庵 兆 京都駅前本店 夷之町709'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Shichijo-Shinmachi near Kyoto Station, wagyu in private rooms] Kuroge wagyu yakiniku with meat sushi and seared yukhoe in designer private rooms; courses ¥7,700–11,000, weekend lunch sets from ¥1,680. Multilingual menu. Open all year. Several reviewers report slow or forgetful service.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog invoice registration (T6130001070263) belongs to 株式会社Ｇｅｍｅｏｓ, registered at the shop\'s own address (NTA corporate-number site, read 2026-11-26); the shop\'s website describes only this one shop. Reviewers describe a chic, stylish room unlike a typical yakiniku place (August 2026), spacious designer private rooms (August 2026), and a calm atmosphere for business meals and small gatherings (June, July 2026). Service draws complaints: a course that was forgotten until the diners asked, slow service, and grated daikon spilled and not replaced (May 2026, a reviewer who found the food "just average"); mistakes in the number of guests, timing and speed (November 2026); a private room that was too cold and an emergency bell that went off mid-meal (August 2026). An August 2026 lunch guest found the female server "incredibly cute" and the service excellent. Several reviewers find it good value (August 2026; November 2026).',
      philosophy: null,
      specialty: 'Kuroge wagyu yakiniku; wagyu meat sushi and seared yukhoe.',
      anecdotes: [
        { text: 'August 2026: "Inside, it has a chic and stylish atmosphere that is quite different from typical yakiniku restaurants."', source: R + 'B318154183/' },
        { text: 'August 2026: "As for the meat, it tends to be on the thicker side. However, if overcooked, it can become tough, and if undercooked, it might taste too raw, so grilling skills are definitely required."', source: R + 'B532862944/' },
        { text: 'November 2026: "The taste itself was very good, perhaps a bit higher than the price would suggest... However, the hospitality did not meet expectations for the price."', source: R + 'B539976455/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉庵 兆 京都駅前本店 (yakinikuan KIZASHI)、兆(KIZASHI)コース。食べログ: 焼肉・居酒屋・韓国料理、下京区夷之町709、JR京都駅から徒歩6分、月〜金と祝日の翌日17:00〜22:30 (L.O. 22:00)、土日祝と祝前日11:30〜14:30 (L.O. 14:00)、17:00〜22:30、年中無休 (12月31日、1月1日も営業)、予約可、カード・電子マネー (iD、QUICPay)・QR可、48席、個室は10名まで、無煙ロースター、禁煙、子ども可、多言語メニュー (英語、中国語、韓国語)、オープン2017年12月24日、インボイス登録番号T6130001070263 (株式会社Ｇｅｍｅｏｓ)。コース (税込): Gokujou コース13品11,000円、兆(KIZASHI)コース11品8,800円、バケツ盛りの和牛コース11品7,700円。口コミ (2026年5月〜11月、英語): 兆(KIZASHI)コース8,000円 (2026年5月、6月)、飲み放題2,000円 (2026年6月)、ランチは1,680円から、Kizashi Lunch 2,480円 (2026年8月)、前菜 サラダ、本日の厳選はイチボ、炙りユッケ、玉子クッパ、デザート (2026年8月)、コースを忘れられた、接客が遅い (2026年5月)、人数やタイミングのミス (2026年11月)。',
      confidence: 'low', sources: [TB, SITE, 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=6130001070263'].concat(rv(R, ['B318154183', 'B529320155', 'B530905825', 'B531860355', 'B531950866', 'B532862944', 'B533069128', 'B533614867', 'B534653333', 'B539976455'])) },
    cultural_comfort: { level: 'english', note: 'Multilingual menu (English, Chinese, Korean), photo and digital menus; QR-code or tablet ordering (Tabelog; 2026 reviews); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区夷之町709',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May to November 2026; own website live (read 2026-11-26).' },
    pin_source: `Tabelog ${TB} (34.989432, 135.756225); not pin-checked by the worker (integrator to check); nearest pins kyoto_tsunku_shichijo 15.2m (夷之町714, a different building), kyoto_saredo_cafe_dining 84.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B318154183/', R + 'B533614867/'],
    price_note: 'Course prices tax included from the Tabelog listing (read 2026-11-26); lunch prices from 2026 reviews. Courses are food only.', last_checked: TODAY, items: [
      it('', '', '"Gokujou" course (13 dishes)', '¥11,000', 'Course', 'ask', 'no', 'Tabelog course listing.', 'course_gokujou'),
      it('兆(KIZASHI)コース', '', '"KIZASHI" course (11 dishes)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog course listing; ¥8,000 in May and June 2026 reviews.', 'course_kizashi'),
      it('', '', 'Premium wagyu course in a bucket (11 dishes)', '¥7,700', 'Course', 'ask', 'no', 'Tabelog course listing; marked most popular.', 'course_bucket'),
      it('', '', 'Kizashi lunch (wagyu kalbi, salted tongue, outside skirt, rice, soup, salad, dessert)', '¥2,480', 'Lunch', 'ask', 'no', 'August 2026; lunch from ¥1,680.', 'lunch_kizashi'),
      it('', '', 'All-you-can-drink (with a course)', '¥2,000', 'Drink', 'ask', 'ask', 'June 2026.', 'nomihodai'),
    ] }, {
    cuisine: '京都駅近くの和牛の焼肉店、デザイナーの個室。神戸牛、松阪牛など各地の黒毛和牛、和牛の肉寿司、炙りユッケ (食べログ)・コース、料理のみ (食べログ、税込): Gokujou コース13品11,000円、兆(KIZASHI)コース11品8,800円、バケツ盛りの和牛コース11品7,700円 (いちばん人気)、ホルモンは変更可・2026年の兆(KIZASHI)コース: 上タン、黒毛和牛のハラミ、本日の厳選和牛 (イチボ、2026年8月)、炙りの肉寿司、自家製ポン酢の焼きしゃぶ、サラダ、キムチとナムル、カルビ、ホルモン、盛岡冷麺か玉子クッパ、デザートで8,000円 (2026年5月、6月)、飲み放題は2,000円 (2026年6月)・ランチ (食べログでは土日) は1,680円から: 和牛カルビ、塩タン、ハラミにかまど炊きのご飯、サラダ、牛だしのスープ、小鉢、デザートの Kizashi Lunch 2,480円 (2026年8月)、和牛の赤身のランチ (2026年6月、7月)、上タンとハラミのランチにゆずのシャーベット (2026年8月)・肉は厚切り (2026年6月、8月)・フルーツサワー、ゆずワイン、ノンアルコールも (食べログ)・昼はひとり1,000〜3,000円ほど、夜は10,000〜20,000円ほど (口コミ)',
    neighborhood: '七条通と新町、京都駅から徒歩6分',
    gf_detail: '要確認: 和牛の焼肉は塩かあっさりしたたれ (2026年8月)、コースには肉寿司、冷麺、玉子クッパも (2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 和牛の焼肉店で、コースもランチも牛肉が中心 (食べログ、2026年の口コミ)。ヴィーガン対応の記載なし。',
    notes: '[焼肉・京都駅近くの七条新町、個室で和牛] デザイナーの個室で黒毛和牛の焼肉、肉寿司、炙りユッケ。コースは7,700〜11,000円、土日のランチは1,680円から。多言語メニューあり。年中無休。接客が遅い、忘れられたという口コミも。',
  });
}

// ================================================================ 大多福
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26027376/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ota-fuku.jp/';
  const L = ['11:30', '14:30']; const A = day(L, ['17:30', '23:30']); const WED = day(L, ['17:30', '22:00']);
  put({
    id: 'kyoto_otafuku_udon_kojinguchi', name: '大多福 (Otafuku)', category: 'OMNI',
    lat: 35.02112555786242, lng: 135.76960883051842, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat udon shop; the curry udon broth is thick (March 2026), and toppings include ham katsu and kakiage (2025–2026 reviews; shop website); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the udon is served in dashi (December 2022; January 2025), and the curry udons come with meat, ham katsu or cheese (2022–2026 reviews); kombu udon and mushroom curry udon are on the menu (February 2025; March 2026), but no vegan option is stated.',
    hours_raw: 'Tabelog: Mon, Thu–Sun 11:30–14:30 and 17:30–23:30; Wed 11:30–14:30 and 17:30–22:00; closed Tuesday (Tabelog; the shop\'s website also gives Tuesday as the closing day). The website posts changes, e.g. lunch only (11:30–14:00) on Saturday 14 November for an event. Lunch sets come with inari sushi or rice; the inari can sell out (September 2024; March 2026). Cash only: no cards or e-money (Tabelog). Smoking allowed (Tabelog). Counter and table seats (Tabelog; March 2026). No parking. Opened 8 May 2016 (Tabelog). On the corner of Kawaramachi-dori and Kojinguchi-dori, 2 min from the Kojinguchi bus stop, 6 min from Jingu-Marutamachi station (Tabelog; March 2026).',
    hours: { 0: A, 2: WED, 3: A, 4: A, 5: A, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori at Kojinguchi — 2 min from the Kojinguchi bus stop',
    cuisine: 'An "udon sakaba" (udon bar), known for curry udon at lunch and izakaya dishes at night (shop website; 2022–2026 reviews) · dashi made from additive-free ingredients (shop website; March 2026) · curry udon ¥780, rice ¥20 more (September 2024); cheese curry udon ¥900 (May 2025), as a lunch set ¥800 in 2022; ham katsu curry udon with a thick slice of ham katsu ¥930 (May 2025), ¥950 with rice ¥30 extra (February 2026); mushroom curry udon with shiitake, enoki, bunashimeji and maitake ¥930 (March 2026); miso curry udon (December 2022) · seasonal curry udons: autumn curry udon, limited kakiage curry udon and kakiage cold tsukemen, a tantan curry udon in winter (shop website) · kombu udon, burdock tempura udon (February 2025), meat udon in a slightly sweet, light broth (January 2025) · noodles thin (December 2022; January 2025) or medium-thick and chewy (March 2026), the bowl seasoned with sansho (January 2025) · tofu from Toyoke Chaya (March 2026) · oden from 11 November (shop website) · sake and shochu (Tabelog) · a curry udon and draught beer set ¥1,200 (website offer, June 2026) · under ¥1,000 at lunch (reviews)',
    website: SITE, gmaps: gm('大多福 うどん 京都 上生洲町214'), menu_url: null,
    notes: '[Udon · Kawaramachi at Kojinguchi, a curry udon bar] Curry udon in many versions (cheese, ham katsu, mushroom, seasonal) in a thick, additive-free dashi broth at lunch, izakaya dishes at night; a poster-covered room run by the owner. Cash only, smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop calls itself 「大多福 うどん酒場」, with 「ROCK 大多福 うどん酒場」 in its header (website, read 2026-11-26); a hashtag there looks ahead to its tenth anniversary. A March 2026 reviewer writes that "the owner is running the place solo in a casual manner" and calls it "a unique udon shop run by a charismatic owner". The walls are covered with posters (March 2026), including David Bowie and Frank Zappa flyers (May 2025), and from outside it looks more like an izakaya than an udon shop (March 2026). Reviewers come on cold days for curry udon (January 2025; February 2025; January 2026), and one found a slight smell of tobacco inside (December 2022).',
      philosophy: null,
      specialty: 'Curry udon in many versions; Kyoto dashi.',
      anecdotes: [
        { text: 'March 2026: "The broth was so thick that it was difficult to scoop with the ladle. I was told the broth is additive-free."', source: R + 'B525143132/' },
        { text: 'January 2025: "The udon here has a unique thickness, and the bowl is pre-seasoned with sansho pepper, adding to the Kyoto charm."', source: R + 'B499729182/' },
        { text: 'May 2025: "The interior was decorated with wonderful flyers featuring #David Bowie and #Frank Zappa, creating a fantastic atmosphere."', source: R + 'B506777256/' },
      ],
      japanese_sources_summary: '公式サイト: 大多福 うどん酒場 (ROCK 大多福 うどん酒場)、上京区上生洲町214、定休日は火曜日、無添加素材の出汁、11月11日からおでん、秋のカレーうどん、数量限定のかき揚げカレーうどんとかき揚げの冷やしつけ麺、冬の担々カレーうどん、カレーうどんと生ビールのセット1,200円 (2026年6月)。食べログ: 居酒屋・うどん、荒神口バス停から徒歩2分、京阪神宮丸太町駅から徒歩6分、月木金土日11:30〜14:30、17:30〜23:30、水11:30〜14:30、17:30〜22:00、火曜休み、予約可、カード・電子マネー不可、喫煙可、カウンター席、オープン2016年5月8日。口コミ (2022年10月〜2026年8月、英語): カレーうどん780円 (2024年9月)、チーズカレーうどん900円 (2025年5月)、ハムカツカレーうどん930円 (2025年5月)、950円 (2026年2月)、きのこのカレーうどん930円 (2026年3月)、みそカレーうどん (2022年12月)、昆布うどん、ごぼう天うどん (2025年2月)、肉うどん (2025年1月)、山椒 (2025年1月)、店主がひとりで切り盛り (2026年3月)。',
      confidence: 'low', sources: [TB, SITE].concat(rv(R, ['B455989572', 'B458703521', 'B496418706', 'B498571901', 'B499729182', 'B506777256', 'B522302748', 'B525143132', 'B533694330'])) },
    cultural_comfort: { level: 'japanese', note: 'No English noted in Tabelog, the website or reviews; cash only; phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区上生洲町214',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January 2025 to August 2026; the shop website posts November 2026 notices (read 2026-11-26).' },
    pin_source: `Tabelog ${TB} (35.021126, 135.769609); not pin-checked by the worker (integrator to check); nearest pins kyoto_da_uchi_curry 26.5m, osw1-b108 pending kyoto_yoshoku_hamburg_kojinguchi / kyoto_pouka_cookie_shop_kojinguchi about 34m and 41m, kyoto_chez_kikusui 37.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522302748/', R + 'B525143132/', R + 'B506777256/', R + 'B496418706/', SITE],
    price_note: 'Prices tax included from 2024–2026 reviews and the shop website; lunch sets add inari sushi or rice.', last_checked: TODAY, items: [
      it('', '', 'Ham katsu curry udon', '¥950', 'Udon', 'no', 'no', 'February 2026; ¥930 in May 2025.', 'hamkatsu_curry_udon'),
      it('', '', 'Mushroom curry udon', '¥930', 'Udon', 'no', 'ask', 'March 2026.', 'kinoko_curry_udon'),
      it('', '', 'Cheese curry udon', '¥900', 'Udon', 'no', 'no', 'May 2025.', 'cheese_curry_udon'),
      it('', '', 'Curry udon', '¥780', 'Udon', 'no', 'no', 'September 2024.', 'curry_udon'),
      it('', '', 'Curry udon and draught beer set', '¥1,200', 'Set', 'no', 'no', 'Shop website offer, June 2026.', 'curry_udon_beer_set'),
    ] }, {
    cuisine: 'うどん酒場。昼はカレーうどん、夜は居酒屋の料理 (公式サイト、2022〜2026年の口コミ)・無添加素材の出汁 (公式サイト、2026年3月)・カレーうどん780円、ご飯は20円追加 (2024年9月)、チーズカレーうどん900円 (2025年5月)、2022年はランチセットで800円、厚いハムカツのハムカツカレーうどん930円 (2025年5月)、950円、ご飯は30円追加 (2026年2月)、しいたけ、えのき、ぶなしめじ、まいたけのきのこのカレーうどん930円 (2026年3月)、みそカレーうどん (2022年12月)・季節のカレーうどん: 秋のカレーうどん、数量限定のかき揚げカレーうどんとかき揚げの冷やしつけ麺、冬の担々カレーうどん (公式サイト)・昆布うどん、ごぼう天うどん (2025年2月)、少し甘くあっさりしただしの肉うどん (2025年1月)・麺は細め (2022年12月、2025年1月)、中太でもちもち (2026年3月)、どんぶりに山椒 (2025年1月)・豆腐は Toyoke Chaya のもの (2026年3月)・11月11日からおでん (公式サイト)・日本酒と焼酎 (食べログ)・カレーうどんと生ビールのセット1,200円 (公式サイト、2026年6月)・昼はひとり1,000円未満 (口コミ)',
    neighborhood: '河原町通と荒神口の角。荒神口バス停から徒歩2分',
    gf_detail: 'グルテンフリー不可: 小麦のうどんの店。カレーうどんのだしはとろみが強く (2026年3月)、ハムカツやかき揚げものせる (2025〜2026年の口コミ、公式サイト)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: うどんはだしで (2022年12月、2025年1月)、カレーうどんには肉、ハムカツ、チーズ (2022〜2026年の口コミ)。昆布うどん、きのこのカレーうどんもある (2025年2月、2026年3月) が、ヴィーガン対応の記載なし。',
    notes: '[うどん・河原町の荒神口、カレーうどんの酒場] チーズ、ハムカツ、きのこ、季節のものなどいろいろなカレーうどんを無添加の出汁で。夜は居酒屋の料理。ポスターだらけの店を店主が切り盛り。現金のみ、喫煙可。火曜休み。',
  });
}

// ================================================================ ザ ルーツ オブ オール イービル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028876/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_roots_of_all_evil_tower_sando', name: 'ザ ルーツ オブ オール イービル (The Roots of all evil.)', category: 'OMNI',
    lat: 34.9874997, lng: 135.759404, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a craft-gin bar; the cocktails use herbs, spices, roots and bark (Tabelog; March 2026), and a gin highball was made with an imo shochu base (February 2025); snacks are served (2023–2025 reviews); no gluten-free information stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: gin cocktails and non-alcoholic cocktails made with botanicals (Tabelog; 2022–2026 reviews); the snacks are not described; no vegan option stated.',
    hours_raw: 'Tabelog: daily 11:00–23:00; closing days may vary. No reservations (Tabelog). Cards, e-money and QR payments accepted; non-smoking (Tabelog). A standing bar with a counter in the basement food hall of Kyoto Tower Sando (Tabelog; October 2024); you can also order and drink at the food-hall seats (March 2026). Quiet at lunchtime, busier in the evening (December 2023; October 2024); the counter is often full (March 2026). Linked to Kyoto Station by an underground passage (September 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Tower Sando B1F — opposite Kyoto Station',
    cuisine: 'A craft-gin standing bar in the Kyoto Tower food hall: craft gins from Japan and around the world and original gin cocktails (Tabelog; 2022–2026 reviews) · signature cocktails: "THE ROOTS" with burdock, ginger and dandelion root, and "BOTANICAL GARDEN" with lavender and rosemary (Tabelog); THE ROOTS, spicy (June 2025) · herbs floating in an aquarium-like glass (September 2025); cocktails with spices, herbs, leaves and tree bark (March 2026) · gin and tonic with Spice Gate gin from Kyoto ¥1,200 (August 2025); a gin and tonic with Sakurao gin from Hiroshima, and Ebisu Gin as a local pick (November 2025); Kadotaka tan gin with shiso, and Kyoki no Hana with cilantro (July 2026) · a gin buck on an imo shochu base (February 2025) · non-alcoholic cocktails (2022–2026 reviews) · snacks and photogenic dishes (February 2023; August 2025) · about ¥1,000–3,000 a head (reviews)',
    website: null, gmaps: gm('The Roots of all evil 京都タワーサンド'), menu_url: null,
    notes: '[Gin bar · Kyoto Tower Sando, a craft-gin stand] Craft gins and botanical cocktails, such as THE ROOTS with burdock and dandelion root, at a standing counter in the food hall under Kyoto Tower; staff help you choose by taste, and there are non-alcoholic cocktails. Open 11:00–23:00, no bookings.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Tabelog describes an interior inspired by roots drawing water from the earth. Reviewers praise staff who help guests choose a gin by taste and talk about the gins (October 2022 to September 2026), "a young male staff member" who explained gins and their regions (November 2025), and friendly female staff (May 2025). A Shiga regular has logged eleven visits from October 2022 to September 2026. The bar is popular with foreign tourists (January 2025; March 2026), and suits a drink before a train (January, November 2025).',
      philosophy: null,
      specialty: 'Craft gin and botanical gin cocktails.',
      anecdotes: [
        { text: 'September 2025: "In a glass resembling an aquarium, herbs gently float, creating a drink that feels like an aquatic experience."', source: R + 'B515812203/' },
        { text: 'November 2025: "I requested a refreshing, dry gin that would hit the throat, and the staff recommended a gin and tonic made with "Sakurao" from Hiroshima."', source: R + 'B517712414/' },
        { text: 'March 2026: "It\'s quite popular among foreign tourists, and the counter is usually full."', source: R + 'B525451484/' },
      ],
      japanese_sources_summary: '食べログ: ザ ルーツ オブ オール イービル (The Roots of all evil.)、立ち飲み・バー、下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO B1F、毎日11:00〜23:00、不定休、予約不可、カード・電子マネー・QR可、禁煙、立ち飲み。世界のクラフトジンのカクテル、THE ROOTS (ごぼう、しょうが、たんぽぽの根)、BOTANICAL GARDEN (ラベンダー、ローズマリー)。口コミ (2022年10月〜2026年9月、英語): 好みを伝えるとジンを選んでくれる、ノンアルコールのカクテル、Spice Gate のジントニック1,200円 (2025年8月)、Sakurao、Ebisu Gin (2025年11月)、外国人観光客に人気でカウンターはいつも満席 (2026年3月)、昼は空いている (2023年12月、2024年10月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B455526522', 'B470881888', 'B498528176', 'B507177976', 'B511373014', 'B513136244', 'B515270431', 'B515812203', 'B517712414', 'B525451484'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with foreign tourists (2025–2026 reviews); staff choose a gin from what you like; no English menu noted; no reservations.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} gives (34.987554, 135.759405), 0.2m from kyoto_link_tower_sando (same Kyoto Tower Sando B1F food hall); offset about 6m south to (34.9874997, 135.759404) so the pins do not stack; then about 6m from kyoto_link_tower_sando, 12m from kyoto_tower_sand_bar, 14m from kyoto_gihan_hajimedo_tower_sando, 18m from kyoto_bubble_tea_berries; not pin-checked by the worker (integrator to check); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B511373014/'],
    price_note: 'Only one price read: a gin and tonic in August 2025; reviewers spent about ¥1,000–3,000 a head.', last_checked: TODAY, items: [
      it('', '', 'THE ROOTS (gin cocktail with burdock, ginger, dandelion root)', null, 'Cocktail', 'ask', 'ask', 'Tabelog; June 2025.', 'the_roots'),
      it('', '', 'BOTANICAL GARDEN (gin cocktail with lavender, rosemary)', null, 'Cocktail', 'ask', 'ask', 'Tabelog.', 'botanical_garden'),
      it('', '', 'Gin and tonic (Spice Gate, Kyoto)', '¥1,200', 'Gin', 'ask', 'ask', 'August 2025.', 'gin_tonic'),
    ] }, {
    cuisine: '京都タワーのフードホールのクラフトジンの立ち飲みバー。国内と世界のクラフトジン、オリジナルのジンのカクテル (食べログ、2022〜2026年の口コミ)・看板のカクテル: ごぼう、しょうが、たんぽぽの根の「THE ROOTS」、ラベンダーとローズマリーの「BOTANICAL GARDEN」(食べログ)、THE ROOTS はスパイシー (2025年6月)・水槽のようなグラスにハーブが浮かぶ (2025年9月)、スパイス、ハーブ、葉、木の皮を使ったカクテル (2026年3月)・Kyoto の Spice Gate のジントニック1,200円 (2025年8月)、Hiroshima の Sakurao のジントニック、地元のおすすめに Ebisu Gin (2025年11月)、シソの Kadotaka tan gin、パクチーの Kyoki no Hana (2026年7月)・芋焼酎がベースのジンバック (2025年2月)・ノンアルコールのカクテル (2022〜2026年の口コミ)・つまみ、写真映えする料理 (2023年2月、2025年8月)・ひとり1,000〜3,000円ほど (口コミ)',
    neighborhood: '京都タワーサンド地下1階、京都駅の向かい',
    gf_detail: '要確認: クラフトジンのバーで、カクテルにはハーブ、スパイス、根、木の皮を使う (食べログ、2026年3月)。芋焼酎がベースのジンハイボールも (2025年2月)、つまみもある (2023〜2025年の口コミ)。グルテンフリーの情報の記載なし。',
    vegan_detail: '要確認: ボタニカルのジンのカクテルとノンアルコールのカクテル (食べログ、2022〜2026年の口コミ)。つまみの中身は不明。ヴィーガン対応の記載なし。',
    notes: '[ジンバー・京都タワーサンド、クラフトジンの立ち飲み] クラフトジンと、ごぼうやたんぽぽの根の THE ROOTS などボタニカルのカクテルを、京都タワーの地下のフードホールの立ち飲みのカウンターで。好みを伝えるとジンを選んでくれる。ノンアルコールのカクテルも。11:00〜23:00、予約不可。',
  });
}

save();
