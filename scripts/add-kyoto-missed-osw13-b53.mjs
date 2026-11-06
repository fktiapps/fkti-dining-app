// Kyoto priority (kyoto-missed), worker osw13, batch 53 — lane: Tabelog id mod 6 = 0.
// Core: トラットリア ラ・ヴォーチェ, 焼貝とお酒 貝貝貝〜ごひいき〜. Notable: MIZO, 味野里香.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ トラットリア ラ・ヴォーチェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26011812/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.lavoce-kyoto.com/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_trattoria_la_voce', name: 'トラットリア ラ・ヴォーチェ (Trattoria La Voce)', category: 'MOM_AND_POP',
    lat: 35.004587, lng: 135.757532, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, lasagna, gnocchi, cannelloni and pizza are the core of the menu (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options, but the lunches seen are cheese-heavy pasta and lasagna and the courses lean on meat and fish (2026 reviews).',
    hours_raw: 'Official site: Tue–Sun lunch 12:00–15:00 (last order 14:00), dinner 17:00–23:00 (last order 22:00); closed Monday, plus about two irregular Sundays or Tuesdays a month; closed 31 December–1 January and for summer and winter breaks; open days on Instagram. Weekday lunch is the daily special only; weekends and holidays have the regular pasta lunch, and a dinner course at lunch for 2+ booked by the day before (official site; Tabelog). Dinner seat charge ¥500 a person, covering the starter (Tabelog, Japanese original 「席料(つきだしなど)…￥500」). Pairs usually sit at the counter; some plans are limited to two hours (Tabelog). 21 seats — 9 counter, 12 at tables that become private rooms for 4 and 5–8; non-smoking, ashtray outside; wheelchair accessible; English menu and English-speaking staff; small children in private rooms only (Tabelog). Cards (Visa, Master, JCB, Diners); the site also lists PayPay and Rakuten Pay, Tabelog says no QR. Founded in Kuzuha, Osaka on 26 May 2004; moved here 18 March 2009 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma — 2 min walk from Hankyu Karasuma Stn; 4 min from Shijo Stn',
    cuisine: 'Italian trattoria that puts the ingredient first: produce shipped from Italy, Hokkaido akaushi beef, vegetables from contract farms in Kyoto; a walk-in wine cellar and a shop of Italian groceries and take-out (official site) · lunch: nine choices ¥1,800–3,500 (July 2026); weekend pasta lunch ¥2,800 (September 2026); panna cotta +¥600 (May 2026) · seen: an antipasto platter with quiche, couscous and pickles, peach or corn soup, sweet-potato and gorgonzola lasagna, gnocchi, Roman cannelloni of duck and pork, prawn bisque pasta, scallop and canola pesto, venison, tiramisu (2026 reviews) · omakase dinner with wine ¥10,000–14,999 (September 2026) · lasagna, pizza and rice croquettes by delivery (official site)',
    website: SITE, gmaps: gm('トラットリア ラ・ヴォーチェ 観音堂町'), menu_url: SITE + 'course.html',
    notes: '[Italian · Shijo-Karasuma trattoria, since 2009] A 21-seat trattoria two minutes from Karasuma Station — counter, two private rooms and a wine cellar you can walk into. Weekend lunches have antipasto platters and pastas like a Roman duck-and-pork cannelloni; dinner runs to venison and omakase. Some find the portions small (March 2026) or the flavours light (April 2026). ¥500 seat charge at dinner. English menu. Closed Monday.',
    chef_bio: { chef_name: '山本 (owner)', roles: ['Owner (signs the shop notices "オーナー 山本", official site); chef not named'], origin: null,
      background: 'Per the official site: Trattoria La Voce opened in Kuzuha, Osaka on 26 May 2004 and moved to Shijo-Karasuma on 18 March 2009, marking 20 years in 2024 with a fair signed by the owner, 山本. The name is Italian for "voice" or "opinion": a restaurant full of happy voices that listens to its guests. Since opening it has held to the Italian basic of enjoying the ingredient’s own taste; in 2022 it added a shop for Italian wine and food, alongside department-store events and catalogue sales.',
      philosophy: 'Official site: 「素材が持つ本来の味を楽しむ」 — enjoy the taste the ingredient already has.',
      specialty: 'Lasagna; antipasto platter; pasta lunch.',
      anecdotes: [
        { text: 'A July 2026 diner, choosing among nine lunches, passed up lasagna and venison ragù: "I might not have another chance to try cannelloni" — duck and pork rolled in sheet pasta.', source: R + 'B532092224/' },
        { text: '"While the portions might be a bit small for men, everything was tasty." — March 2026.', source: R + 'B523748569/' },
        { text: 'An October 2026 diner was won over by the venison — "the subsequent sirloin cap completely faded in comparison."', source: R + 'B537350868/' },
      ],
      japanese_sources_summary: '公式サイト (lavoce-kyoto.com): Trattoria La Voce (トラットリア ラ・ヴォーチェ)、四条烏丸のイタリアン、2004年5月26日に大阪府樟葉で開業、2009年3月18日に現在地へ移転、創業20周年 (オーナー 山本)、店名はイタリア語で声・意見、「素材が持つ本来の味を楽しむ」、イタリア直送の食材、北海道の“あか牛”、京都の契約農家の野菜、自由に見られるワインセラー、2022年から物販スペース、デリバリーはラザニア・ピッツァ・ライスコロッケ、火〜日 昼12:00〜15:00 (L.O. 14:00)・夜17:00〜23:00 (L.O. 22:00)、月曜休み (不定期で日曜か火曜、月2回程度)、平日はピッツァランチのみ、土日祝はパスタランチ、21席 (テーブル12、カウンター9)、カード可、PayPay・楽天ペイ可。食べログ: イタリアン・ビストロ、中京区観音堂町456 シティキャスル四条 1F、ディナーのみ席料 (つきだしなど) 1人500円、2名は原則カウンター、プランにより2時間制、個室2つ、英語メニュー・英語対応、ベジタリアン対応、小さな子供は個室のみ、2009年3月18日オープン。口コミ (2026年3月〜10月、英語): ランチは9種1,800〜3,500円、週末のパスタランチ2,800円、さつまいもとゴルゴンゾーラのラザニア、ニョッキ、鴨と豚のカネロニ、海老のビスク、鹿肉、ティラミス、パンナコッタ+600円、男性には量が少なめ、味は軽め、おまかせコース。',
      confidence: 'high', sources: [SITE, TB, R + 'B374246522/', R + 'B523748569/', R + 'B526076514/', R + 'B527356372/', R + 'B527531243/', R + 'B531697262/', R + 'B532092224/', R + 'B535861960/', R + 'B536572554/', R + 'B537350868/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町新町の間四条上ル観音堂町456 シティキャスル四条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004587, 135.757532); cross-checked: GSI 京都府京都市中京区観音堂町456番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532092224/', R + 'B535861960/', R + 'B527356372/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch (nine choices)', '¥1,800–3,500', 'Lunch', 'no', 'ask', 'July 2026.', 'pasta_lunch'),
      it('', '', 'Weekend pasta lunch', '¥2,800', 'Lunch', 'no', 'ask', 'September 2026.', 'pasta_lunch'),
      it('', '', 'Panna cotta (add-on)', '+¥600', 'Dessert', 'ask', 'no', 'May 2026.', 'panna_cotta'),
    ] }, {
    cuisine: '素材そのものの味を大切にするイタリアンのトラットリア。イタリア直送の食材、北海道のあか牛、京都の契約農家の野菜、自由に見られるワインセラー、イタリア食材とテイクアウトの物販 (公式サイト)・ランチは9種で1,800〜3,500円 (2026年7月)、週末のパスタランチ2,800円 (2026年9月)、パンナコッタ+600円 (2026年5月)・口コミではキッシュやクスクスの入った前菜の盛り合わせ、桃やコーンのスープ、さつまいもとゴルゴンゾーラのラザニア、ニョッキ、鴨と豚のローマ風カネロニ、海老のビスクのパスタ、帆立と菜の花のペースト、鹿肉、ティラミス (2026年)・ワインと合わせたおまかせのディナーで1万〜1万5千円ほど (2026年9月)・ラザニア、ピッツァ、ライスコロッケはデリバリーも (公式サイト)',
    neighborhood: '四条烏丸。阪急烏丸駅から徒歩2分、地下鉄四条駅から徒歩4分',
    gf_detail: 'グルテンフリーではない: パスタ、ラザニア、ニョッキ、カネロニ、ピッツァが中心 (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応とあるが、口コミのランチはチーズたっぷりのパスタやラザニア、コースは肉や魚が中心 (2026年の口コミ)。',
    notes: '[イタリアン・四条烏丸のトラットリア、2009年から] 烏丸駅から2分、21席のトラットリア。カウンター、個室2つ、中に入れるワインセラー。週末のランチは前菜の盛り合わせと、鴨と豚のローマ風カネロニなどのパスタ。夜は鹿肉やおまかせも。量が少なめ (2026年3月)、味が軽め (2026年4月) という声も。ディナーは席料500円。英語メニューあり。月曜休み。',
  });
}

// ================================================================ 焼貝とお酒 貝貝貝〜ごひいき〜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043462/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '22:00']); const WE = day(['13:00', '22:00']);
  put({
    id: 'kyoto_kaikaikai_shinpukan', name: '焼貝とお酒 貝貝貝〜ごひいき〜 (Kai Kai Kai)', category: 'OMNI',
    lat: 35.009598, lng: 135.759829, cuisine_type: 'oyster',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried oysters, an oyster and shirako gratin and crab fried rice are on the menu; grilled shellfish may be seasoned with soy (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster and shellfish bar (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon–Fri and the days before and after holidays 16:00–22:00; Sat, Sun and holidays 13:00–22:00 (last orders food 21:00, drinks 21:30); 11–15 August 12:00–22:00. 10 counter seats only, standing up to 20; book ahead at weekends (October 2025; February 2026). Inside the yakitori shop Kyoto Suehiro-gari in Shinpukan, sharing its entrance — easy to miss (Tabelog; 2026 reviews). Non-smoking; English and Simplified Chinese menus with photos; small children by phone consultation (Tabelog). Charge: ¥550 a person (Tabelog, Japanese original 「550円」). Cards, transit IC and most e-money and QR. Opened 3 September 2025 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinpukan, Karasuma Oike — 1 min walk from Karasuma Oike Stn',
    cuisine: 'A ten-seat counter for grilled and raw shellfish and sake (Tabelog) · oysters raw or grilled ¥330 each, ¥220 with a coupon (June 2026); raw ¥300–600 (August 2026); Miyajima oysters (February 2026) · signature steamed shellfish for two — scallops, shrimp, clams, mussels — then risotto +¥770 (January–June 2026) · grilled scallops and turban shells, dashimaki with ikura, fried oysters, foie gras on daikon, shirako and oyster gratin, stingray sashimi, crab fried rice, potato fries with cod roe and anchovy butter (2026 reviews) · a solo drinking course, a chef’s course and all-you-can-eat (Tabelog; 2026 reviews) · sake, shochu, wine, a fruity local highball (February 2026)',
    website: null, gmaps: gm('貝貝貝 新風館'), menu_url: null,
    notes: '[Oyster bar · Shinpukan, ten seats behind a yakitori shop] A ten-seat counter for oysters and grilled shellfish hidden at the back of a yakitori shop in Shinpukan, a minute from Karasuma Oike. Oysters from ¥330 (¥220 with a coupon), a steamed shellfish pot finished as risotto, and a solo drinking course. One February 2026 regular found new staff less practised and the oysters overcooked. ¥550 charge a person. English menu.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 3 September 2025 (Tabelog), inside Kyoto Suehiro-gari, a yakitori shop in the Shinpukan complex, with a grill right in front of the counter and a high ceiling (2026 reviews). A June 2026 diner noted a male chef and young female staff, and regulars and newcomers treated alike.',
      philosophy: null,
      specialty: 'Signature steamed shellfish with a risotto finish; oysters.',
      anecdotes: [
        { text: 'February 2026: "Has there been a change in staff?" — the female staff from the year before were gone, and "some of the new staff seemed a bit inexperienced… which may have led to the oysters being overcooked."', source: R + 'B518094930/' },
        { text: '"The male chef and the beautiful female staff (students, perhaps?) showed great care" — June 2026.', source: R + 'B530433088/' },
        { text: 'A January 2026 solo diner got "kind service without any hint of disdain."', source: R + 'B521371400/' },
      ],
      japanese_sources_summary: '食べログ: 焼貝とお酒 貝貝貝〜ごひいき〜、居酒屋・海鮮・オイスターバー、中京区場之町586-2 新風館 1F、京都スエヒロガリの中、烏丸御池駅から徒歩1分、平日 16:00〜22:00、土日祝 13:00〜22:00 (料理 L.O. 21:00、ドリンク L.O. 21:30)、8月11〜15日は12:00〜22:00、カウンター10席のみ (立ち20名)、禁煙、英語・簡体中国語のメニュー、子連れは電話で相談、チャージ550円、カード・電子マネー・QR可、2025年9月3日オープン。口コミ (2025年10月〜2026年11月、英語): 焼鳥店の奥、入口がわかりにくい、生牡蠣・焼牡蠣は1個330円 (クーポンで220円)、Miyajima の牡蠣、名物の貝の蒸し物とリゾット+770円、帆立やサザエの焼き物、いくらのだし巻き、牡蠣フライ、大根とフォアグラ、白子と牡蠣のグラタン、エイの刺身、蟹炒飯、ひとり飲みコース、食べ放題、スタッフが変わり牡蠣が焼きすぎという声、親切な接客。',
      confidence: 'medium', sources: [TB, R + 'B518094930/', R + 'B520999871/', R + 'B521371400/', R + 'B521657957/', R + 'B523074113/', R + 'B524243697/', R + 'B525517691/', R + 'B530433088/', R + 'B534201003/', R + 'B538700224/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English and Chinese menus with photos; counter only; the entrance is through a yakitori shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通姉小路下ル場之町586-2 新風館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009598, 135.759829); cross-checked: GSI 京都府京都市中京区場之町586番地 (lot) 69m — the lot is the whole Shinpukan block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530433088/', R + 'B524243697/', R + 'B534201003/'],
    price_note: 'Prices from 2026 reviews; ¥550 charge a person.', last_checked: TODAY, items: [
      it('', '', 'Oyster, raw or grilled (each)', '¥330', 'Oysters', 'ask', 'no', 'June 2026; ¥220 with a coupon; ¥300–600 raw in August 2026.', 'oyster'),
      it('', '', 'Signature steamed shellfish (for two)', null, 'Shellfish', 'ask', 'no', '2026 reviews.', 'steamed_shellfish'),
      it('', '', 'Risotto finish', '+¥770', 'Shellfish', 'ask', 'no', 'February 2026.', 'risotto'),
      it('', '', 'Fried oysters', null, 'Fried', 'no', 'no', 'January–February 2026.', 'kaki_fry'),
    ] }, {
    cuisine: '焼いた貝や生の貝と日本酒のカウンター10席 (食べログ)・牡蠣は生でも焼きでも1個330円、クーポンで220円 (2026年6月)、生牡蠣300〜600円 (2026年8月)、Miyajima の牡蠣 (2026年2月)・名物の貝の蒸し物 (2人前、帆立、海老、あさり、ムール貝) と、締めのリゾット+770円 (2026年1〜6月)・帆立やサザエの焼き物、いくらのだし巻き、牡蠣フライ、大根とフォアグラ、白子と牡蠣のグラタン、エイの刺身、蟹炒飯、明太子とアンチョビバターのポテトフライ (2026年の口コミ)・ひとり飲みコース、おまかせのコース、食べ放題 (食べログ、2026年の口コミ)・日本酒、焼酎、ワイン、フルーティーなハイボール (2026年2月)',
    neighborhood: '新風館、烏丸御池。烏丸御池駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: 牡蠣フライ、白子と牡蠣のグラタン、蟹炒飯がある。焼き貝に醤油を使うことも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 牡蠣と貝のバー (食べログ、口コミ)。',
    notes: '[オイスターバー・新風館、焼鳥店の奥の10席] 烏丸御池から1分、新風館の焼鳥店の奥に隠れたカウンター10席の牡蠣と焼き貝の店。牡蠣は330円から (クーポンで220円)、貝の蒸し物は締めにリゾットに、ひとり飲みコースもある。2026年2月には、スタッフが替わって慣れておらず牡蠣が焼きすぎだったという常連の声。チャージは1人550円。英語メニューあり。',
  });
}

// ================================================================ MIZO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033430/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://eatarymizo.com/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_mizo_nijo', name: 'MIZO', category: 'OMNI',
    lat: 35.013950, lng: 135.742425, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every lunch set is built around pasta and bread; tarts and cheesecake for dessert (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: vegetables from pesticide-free and low-pesticide farms (official site), but the dishes reviewed all carry fish, meat, cheese or egg; dietary requests were met for a low-salt diner (October 2026).',
    hours_raw: 'Official site: lunch 11:30–15:00 (last order 14:00), dinner 17:30–22:00 (last order 21:00); closed Thursday, plus irregular days (in November 2026 also Wednesday the 11th and 25th); may close early when ingredients run out. Lunch seats about two hours. No café-only use; coffee to take away. Dinner has no service charge but one drink per person (official site; Tabelog 「ディナータイムはサービス料は頂きませんがワンドリンクはオーダー頂きます」). Cancellation: lunch ¥2,500 a person after 10:00 on the day; dinner ¥5,500 a person on the day; omakase full price (official site). 12 table seats, no private room; non-smoking; children welcome but call first — narrow aisles, small restroom with no changing space; cards and PayPay. Opened 21 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo, on Senbon-dori — 2–3 min walk north of JR/subway Nijo Stn',
    cuisine: 'Gentle Italian cooking with natural wine and specialty coffee (official site) · lunch A ¥1,800 (salad, pasta; +¥300 coffee, +¥400 dolce), B ¥2,700 (antipasto, pasta, dolce, coffee), C ¥3,900 (adds a main) (official site) · dinner prix-fixe from ¥3,850 (antipasto platter, pasta or main, dolce, coffee); omakase from ¥6,600, book by the day before; à la carte antipasti from ¥1,100, pasta ¥1,650, mains ¥2,750, dolci ¥1,100 (official site) · all natural wine, bottles from ¥5,500, glasses from ¥990; light-roast espresso drinks (official site) · seen: Bolognese with an onsen egg, shirasu and Kujo leek aglio e olio, Yamagata pork ragù, sawara carpaccio, scallops in sea-urchin cream, a "broken" pear tart (2026 reviews)',
    website: SITE, gmaps: gm('MIZO 西ノ京小堀町'), menu_url: SITE,
    notes: '[Italian · Nijo, natural wine and a Bolognese with onsen egg] A twelve-seat Italian bistro on Senbon-dori, two minutes from Nijo Station: lunch sets from ¥1,800, a ¥3,850 dinner prix-fixe or omakase from ¥6,600, all with natural wine and light-roast coffee. The Bolognese with an onsen egg is the one people mention. Quibbles: small portions, subtle sauces, and tight seats against the wall (2026). One drink a person at dinner; strict cancellation fees. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 21 November 2019 (Tabelog). The official site describes gentle Italian food, natural wines from organic grapes, and specialty coffee from a Synesso espresso machine; pesticide-free open-field vegetables, fish sent direct from the source including kinds rare in Kyoto, and carefully raised meat; a bright front room on Senbon-dori and a calmer room behind. It also sells P Mustard from Pullst Factory and links to Pullst Cafe and べんてん洞.',
      philosophy: 'Official site: 「優しいイタリア料理と自然派ワインとスペシャルティコーヒーのお店」 — gentle Italian food, natural wine and specialty coffee.',
      specialty: 'Bolognese with onsen egg; prix-fixe dinner.',
      anecdotes: [
        { text: 'August 2026: "the gentlest Bolognese I’ve ever had" — though "I would have been even happier if decaf coffee was available."', source: R + 'B533792391/' },
        { text: 'An October 2026 diner asked for a low-salt option, "and they kindly accommodated my request."', source: R + 'B536822451/' },
        { text: '"For some reason, I felt there was a bias towards eggplant dishes on the menu. Overall, the portion sizes were a bit on the smaller side." — September 2026.', source: R + 'B536004538/' },
        { text: 'A June 2026 lunch guest stayed over an hour and "felt a bit awkward as they kept refilling our water."', source: R + 'B530239167/' },
      ],
      japanese_sources_summary: '公式サイト (eatarymizo.com): MIZO、優しいイタリア料理と自然派ワインとスペシャルティコーヒーのお店、JR・地下鉄二条駅から北へ徒歩約2分、千本通りに面する、無農薬露地栽培や低農薬の野菜、産地直送の魚、自然派ワインのみ (ボトル5,500円〜、グラス990円〜)、シネッソのエスプレッソマシンで浅煎り、店内でカフェのみは不可、テイクアウト可、テーブル12席、ランチA 1,800円・B 2,700円・C 3,900円、ディナーのプリフィックス3,850円〜、お任せ6,600円〜 (前日までに予約)、アラカルト 前菜1,100円〜・パスタ1,650円〜・メイン2,750円〜・ドルチェ1,100円〜、ディナーはサービス料なしでワンドリンク制、ランチ11:30〜15:00 (L.O. 14:00)、ディナー17:30〜22:00 (L.O. 21:00)、木曜休み・不定休、11月は11日と25日の水曜も休み、キャンセル料 (ランチ当日10時以降2,500円、ディナー当日5,500円、お任せは全額)、カード・PayPay可、プルストファクトリーPマスタード販売、プルストカフェとべんてん洞へのリンク。食べログ: イタリアン・カフェ・ワインバー、中京区西ノ京小堀町1-7、12席、禁煙、子供可 (通路狭く、おむつ替えスペースなし)、2019年11月21日オープン。口コミ (2026年6月〜10月、英語): 温玉のボロネーゼ、しらすと九条ねぎのアーリオ・オーリオ、Yamagata の豚のラグー、鰆のカルパッチョ、帆立と雲丹のクリーム、洋梨のタルト、減塩に対応、デカフェなし、量は少なめ、茄子が多い、ソースは控えめ、壁側の席が狭い、水を何度も注がれて気まずい。',
      confidence: 'high', sources: [SITE, TB, R + 'B530239167/', R + 'B530741446/', R + 'B531095652/', R + 'B533792391/', R + 'B534011988/', R + 'B536004538/', R + 'B536381526/', R + 'B536822451/', R + 'B538566428/', R + 'B538605121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead — often full, and walk-ins were turned away in October 2026; strict cancellation fees.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京小堀町1-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated October 2026; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013950, 135.742425); cross-checked: GSI 京都府京都市中京区西ノ京小堀町1番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site, tax included.', last_checked: TODAY, items: [
      it('ランチA', '', 'Lunch A (seasonal salad, pasta of the day)', '¥1,800', 'Lunch', 'no', 'ask', 'Official site; +¥300 coffee, +¥400 dolce.', 'pasta_lunch'),
      it('ランチB', '', 'Lunch B (antipasto, pasta, dolce, coffee)', '¥2,700', 'Lunch', 'no', 'ask', 'Official site.', 'pasta_lunch'),
      it('ランチC', '', 'Lunch C (antipasto platter, pasta, main, dolce, coffee)', '¥3,900', 'Lunch', 'no', 'no', 'Official site.', 'pasta_lunch'),
      it('プリフィックスコース', '', 'Dinner prix-fixe', 'from ¥3,850', 'Dinner', 'no', 'ask', 'Official site.', 'set_course'),
      it('お任せコース', '', 'Omakase course', 'from ¥6,600', 'Dinner', 'no', 'no', 'Official site; book by the day before.', 'set_course'),
    ] }, {
    cuisine: '優しいイタリア料理に自然派ワインとスペシャルティコーヒー (公式サイト)・ランチA 1,800円 (季節のサラダ、本日のパスタ。カフェ+300円、ドルチェ+400円)、ランチB 2,700円 (前菜、パスタ、ドルチェ、カフェ)、ランチC 3,900円 (メイン付き) (公式サイト)・ディナーはプリフィックス3,850円〜 (前菜の盛り合わせ、パスタかメイン、ドルチェ、カフェ)、お任せ6,600円〜 (前日までに予約)、アラカルトは前菜1,100円〜、パスタ1,650円〜、メイン2,750円〜、ドルチェ1,100円〜 (公式サイト)・ワインはすべて自然派で、ボトル5,500円〜、グラス990円〜。浅煎りのエスプレッソ (公式サイト)・口コミでは温玉のボロネーゼ、しらすと九条ねぎのアーリオ・オーリオ、Yamagata の豚のラグー、鰆のカルパッチョ、帆立の雲丹クリーム、崩した洋梨のタルト (2026年)',
    neighborhood: '二条、千本通沿い。JR・地下鉄二条駅から北へ徒歩2〜3分',
    gf_detail: 'グルテンフリーではない: ランチはどれもパスタとパンが中心。デザートにタルトやチーズケーキ (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認: 無農薬・低農薬の野菜を使う (公式サイト) が、口コミの料理はどれも魚、肉、チーズ、卵入り。2026年10月には減塩の要望に応えてくれたという声。',
    notes: '[イタリアン・二条、自然派ワインと温玉のボロネーゼ] 二条駅から2分、千本通沿いの12席のイタリアン。ランチは1,800円から、夜は3,850円のプリフィックスか6,600円からのお任せで、自然派ワインと浅煎りのコーヒーとともに。よく名前が挙がるのは温玉のボロネーゼ。量が少なめ、ソースが控えめ、壁側の席が狭いという声も (2026年)。夜はワンドリンク制、キャンセル料は厳しめ。木曜休み。',
  });
}

// ================================================================ 味野里香
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027598/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/gourmet/253979';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_minoriko', name: '味野里香 (Minoriko)', category: 'MOM_AND_POP',
    lat: 35.012354, lng: 135.757118, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses include wild-vegetable tempura and dishes in soy-based dashi (2018–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based course of fish, fugu, hamo, karasumi and uni (reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00 (last order 22:30); closed Sunday and irregularly. 22 seats — a counter downstairs and tables upstairs (Tabelog; July 2026); non-smoking; children welcome; cards, no e-money or QR. Tabelog lists no service charge. Courses: ¥10,000 (2018); ¥8,800 (2023; given on request in March 2025, when online booking started at ¥11,000); ¥13,200 (July 2025). Sake is poured to match each dish at no premium — a July 2025 diner paid ¥18,480 for the ¥13,200 course, a beer and six cups (reviews). Serai (published October 2017): counter 6, tables 8; small cups of sake from ¥400, 100 ml from ¥600; reservations needed.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji, near Karasuma Oike — 5 min walk from Karasuma Oike Stn',
    cuisine: 'A sake-led Kyoto course between kaiseki and izakaya, the chef pairing a cup to every dish from over 100 sakes (reviews; Serai 2017) · fresh yuba strained into a mousse; homemade karasumi wrapped in mochi; fugu-skin jelly; fugu shirako tofu; wild-vegetable tempura; hassun; hamo three ways; Akashi sea bream and octopus; Uji sweetfish; Kamo eggplant dengaku; uni tekka-don or marinated tuna rice to finish (2018–2025 reviews) · sakes poured: Aramasa, Jikon, Juyondai, Mimuro Sugi, Hanamura, Isojiman, Kuheiji, Toyo Bijin (reviews)',
    website: null, gmaps: gm('味野里香 上妙覚寺町'), menu_url: null,
    notes: '[Kaiseki & sake · Oshikoji, a chef who pours to every dish] A Kyoto course-and-sake house near Karasuma Oike, at Shinmachi-Oike for 32 years before moving to Oshikoji: the chef, cooking for over fifty years, pairs a cup from 100-plus sakes — Aramasa, Jikon, Juyondai — to each dish, and charges for sake at everyday prices. Fresh yuba mousse and karasumi on mochi are the signatures. Courses ¥8,800–13,200. Closed Sunday.',
    chef_bio: { chef_name: 'Minoru Kaneko', roles: ['Owner-chef (named in a July 2025 review)'], origin: null,
      background: 'Per Serai (published October 2017): after 32 years at Shinmachi-Oike, it moved to Oshikoji-dori and added a refrigerator for over 100 sakes, keeping its style of recommending a sake for each dish. A July 2025 reviewer names the owner as Mr. Minoru Kaneko, with 51 years of cooking, and says he stores and ages a large stock of sake in a warehouse in Shiga; a February 2025 regular puts it at over 50 years and says the head chef cooks and pairs the sake personally. A 2024 diner wondered whether a couple runs it; another mentioned a kind hostess.',
      philosophy: 'Reviewers (2018–2025): sake is charged without a premium, so rare bottles cost about the same as ordinary ones.',
      specialty: 'Sake pairing; fresh yuba; homemade karasumi.',
      anecdotes: [
        { text: 'A February 2018 first-timer had a beer and seven cups including junmai daiginjo and was charged about ¥14,000 all in — "I was so shocked that I asked the chef to repeat it (laughs)."', source: R + 'B228375469/' },
        { text: 'February 2025: the first dish came in a vessel by a craftsman newly named a Living National Treasure — "the way the chef casually explained it after I finished eating shows his depth of knowledge from over 50 years in the field."', source: R + 'B228375469/' },
        { text: 'On a quiet Wednesday in March 2025 the chef sent out a grilled sea-bream head on the house; the couple also found the salted cherry leaves "saltier than expected."', source: R + 'B401933423/' },
      ],
      japanese_sources_summary: '食べログ: 味野里香 (Minori Ka)、日本料理・日本酒バー、中京区押小路通衣棚西入上妙覚寺町208-6、烏丸御池駅から徒歩5分、月〜土 18:00〜23:00 (L.O. 22:30)、日曜休み・不定休、22席、禁煙、子供可、カード可。サライ (2017年10月公開): 味野里香 (みのりこ)、新町御池で32年営んだのち押小路通へ移転、100種類以上の日本酒の専用冷蔵庫、料理に合う日本酒を薦める、日本酒 小400円〜・中 (100ml) 600円〜、鱧の造り・焼き霜・落とし、鰻の白焼きと松茸、鯛茶漬け、要予約、カウンター6席・テーブル8席。口コミ (2018〜2026年、英語): 店主 Minoru Kaneko 氏、料理歴51年、懐石と居酒屋の間の料理、料理ごとに日本酒を合わせる、日本酒は割高にしない、滋賀の倉庫で日本酒を熟成、生湯葉、自家製からすみの餅巻き、ふぐ皮の煮こごり、ふぐ白子豆腐、山菜の天ぷら、鱧、Akashi の鯛と蛸、Uji の鮎、雲丹の鉄火丼、コース8,800円・10,000円・13,200円、Jikon・Aramasa・Juyondai・Mimuro Sugi・Hanamura・Isojiman・Kuheiji、1階カウンター・2階テーブル、約10年前に移転、女将の心遣い。',
      confidence: 'medium', sources: [TB, SERAI, R + 'B228375469/', R + 'B401933423/', R + 'B489244292/', R + 'B495613571/', R + 'B497243197/', R + 'B498287737/', R + 'B510500106/', R + 'B513311717/', R + 'B523106878/', R + 'B532113131/'] },
    cultural_comfort: { level: 'japanese', note: 'Sake is chosen in conversation with the chef; there is no sake list.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通衣棚西入上妙覚寺町208-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012354, 135.757118); cross-checked: GSI 京都府京都市中京区上妙覚寺町208番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B401933423/', R + 'B510500106/'],
    price_note: 'Course prices from 2023–2025 reviews; sake charged by the cup.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥8,800–13,200', 'Course', 'no', 'no', '¥8,800 (2023, March 2025 on request), ¥11,000 online (March 2025), ¥13,200 (July 2025).', 'kaiseki_course'),
    ] }, {
    cuisine: '懐石と居酒屋の間の京料理のコースに、100種以上の日本酒から料理ごとに1杯を合わせる (口コミ、サライ 2017年)・生湯葉のムース、自家製からすみの餅巻き、ふぐ皮の煮こごり、ふぐ白子豆腐、山菜の天ぷら、八寸、鱧の三種、Akashi の鯛と蛸、Uji の鮎、賀茂茄子の田楽、締めは雲丹の鉄火丼や鮪の漬け丼 (2018〜2025年の口コミ)・注がれた酒は Aramasa、Jikon、Juyondai、Mimuro Sugi、Hanamura、Isojiman、Kuheiji、Toyo Bijin など (口コミ)',
    neighborhood: '押小路、烏丸御池の近く。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: コースに山菜の天ぷらや醤油ベースの出汁の料理がある (2018〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、ふぐ、鱧、からすみ、雲丹の出汁のコース (口コミ)。',
    notes: '[懐石と日本酒・押小路、料理ごとに酒を合わせる] 烏丸御池の近く、新町御池で32年営んだのち押小路に移った料理と日本酒の店。料理歴50年を超える店主が100種以上の酒から Aramasa、Jikon、Juyondai などを一皿ごとに合わせ、酒は普段の値段で出す。名物は生湯葉のムースと、からすみの餅巻き。コースは8,800〜13,200円。日曜休み。',
  });
}

save();
