// Kyoto priority (kyoto-missed), worker osw13, batch 136 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: おでんと釜飯 ムロ, 鉄板28号, あしべ, 炭火焼肉 つんく. Skips: 居酒屋 ニューエビスノ (chain), 魚と7 (large parent), 亀屋友永 (retail), LAWSON and ビッグエコー (not restaurants). Shops fetched by the worker (Tabelog /en/ only, 3 s apart).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-136');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26002188', 'chain: 居酒屋 ニューエビスノ (夷之町720) is run by 株式会社マネジメントブレーン, whose site (management-brain.jp, read 2026-11-26) lists 12 shops in Kyoto and Osaka ("10 stores" in its own count), seven of them same-concept "ニュー〜" izakaya (ニューエビスノ, ニューシンマチ, ニュータコヤクシ, ニューテラマチ, ニュー東寺, ニュー百万遍 and one more), plus yakiniku and ramen brands');
skip('26038128', 'large parent: 魚と7 〜ととせぶん〜 (エビススクエア 3F) is a brand of 株式会社 THAN, whose brands page (than.co.jp/brands/, read 2026-11-26) gives "26ブランド 60店舗", including 23 shops of 原価ビストロ チーズプラス; 魚と7 itself has 2 shops (Kyoto, Aichi)');
skip('26017878', 'retail food shop (Greg 11-07 ruling): 亀屋友永, a wagashi shop on Shinmachi-dori south of Marutamachi selling mantou, warabimochi and mikasa to take home (Tabelog reviews 2022–2026); no seats on Tabelog, and no founding date, family succession or GF/vegan options found in the 10 reviews fetched or a web search');
skip('26026932', 'not a restaurant: LAWSON 京都駅東塩小路店 is a convenience store (Tabelog genre "Convenience store, Supermarket")');
skip('26044032', 'not a restaurant: ビッグエコー 京都駅前店 is a karaoke box (Tabelog genre "Karaoke")');

// ================================================================ おでんと釜飯 ムロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26029878/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.chabuya-honten.com/muro/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_oden_muro_omiya', name: 'おでんと釜飯 ムロ (Muro)', category: 'OMNI',
    lat: 35.004786787865854, lng: 135.74783141036863, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Kyoto-style oden in a bonito stock (June 2026) and kamameshi cooked in the oden stock (June 2026); the menu also has a ham cutlet, fig tempura and chicken karaage (January, September 2026); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden is in a bonito (katsuo) stock, and the kamameshi is cooked in that stock (June 2026 review); no vegan option stated.',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00; closed Sunday. Two reviewers ate there on a Sunday night (October 2025, January 2026), so check before a Sunday visit. Seating is generally limited to two hours (February 2026). Often full: reservations recommended (February 2026), though outside winter you may get in without one (October 2025). Reservations taken (Tabelog). Cards (JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 31 seats: 11 at the counter, 20 at tables (Tabelog). Designated smoking area (Tabelog). No parking; coin parking nearby. Opened 15 November 2017 (Tabelog). 3 min walk from Hankyu Omiya station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Mibu, by Shijo-Omiya — 3 min from Hankyu Omiya',
    cuisine: 'An oden and kamameshi izakaya by Shijo-Omiya, with a wall menu and many daily specials (2025–2026 reviews) · Kyoto-style oden in a bonito stock, light and mild (January, June 2026): daikon, egg, konnyaku, chikuwa, potato, silken tofu, shumai, rolled cabbage, lotus root, seaweed, beef tendon, tsukune, hiraten, shirataki and Kujo green onion (2025–2026 reviews) · tomato oden, in a Western-style broth (October 2025, February 2026) · a daily special of napa cabbage with pork (January 2026) · one oden serving is about enough for two (January 2026) · kamameshi cooked to order: salmon roe (October 2025), sea bream with yuzu (January 2026), firefly squid and bamboo shoot in spring (April 2026), jidori chicken cooked in the oden stock (June 2026), sea bream with sansho and Kyoto red chicken (September 2026); leftover kamameshi can be taken home as onigiri (January 2026) · salt-seared bonito (June 2026), salted yellowtail sashimi with sudachi (October 2026) · three small appetizers (potato salad, daikon with shirasu, changja), squid tentacles with ponzu, plum jellyfish, fig tempura, chicken breast karaage (September 2026) · sausage, ham cutlet (January 2026) · sake by the glass (September 2026); sake, shochu and wine (Tabelog) · about ¥3,000–8,000 a head (reviews)',
    website: SITE, gmaps: gm('おでんと釜飯 ムロ 京都 壬生坊城町3-3'), menu_url: null,
    notes: '[Oden · Shijo-Omiya, an oden and kamameshi izakaya] A calm, popular counter-and-tables izakaya: Kyoto-style oden in a bonito stock, a tomato oden in a Western-style broth, seasonal kamameshi cooked to order, sashimi and daily specials from the wall menu. Book ahead; two-hour seating. Mon–Sat 18:00–23:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Tabelog gives the website as a page on chabuya-honten.com, the site of the Chabuya group (it refused our requests on 2026-11-26). The group\'s yakitori shop is already listed (kyoto_chabuya_takakura, whose background reads "part of the ちゃぶ家グループ of about six Kyoto shops"). A February 2026 reviewer calls Muro part of a chain and came here after another of its shops was fully booked. Reviewers describe a calm, stylish room (November 2025, June 2026), a lively crowd of mostly twenty- and thirty-somethings (February 2026), a few solo diners at the counter on a Sunday night (January 2026), attentive staff and "a cute sign" (October 2026), and reasonable prices (February, September 2026). A February 2026 visitor heard the neighbouring diner reminded that time was almost up.',
      philosophy: null,
      specialty: 'Kyoto-style oden in bonito stock; kamameshi cooked to order.',
      anecdotes: [
        { text: 'October 2025: "The oden with perfectly ripe tomatoes was particularly unique, and the combination of the broth\'s umami and the tomato\'s acidity was simply amazing."', source: R + 'B515270517/' },
        { text: 'January 2026: "The portions were quite large for one person, but I was able to take the leftover kamameshi home as onigiri for breakfast the next day."', source: R + 'B521640368/' },
        { text: 'June 2026: "The jidori (free-range chicken) kamameshi was freshly cooked and absorbed the delicious oden broth."', source: R + 'B531390680/' },
      ],
      japanese_sources_summary: '食べログ: おでんと釜飯 ムロ、居酒屋・おでん・釜飯、中京区壬生坊城町3-3、阪急大宮駅から徒歩3分、月〜土18:00〜23:00、日曜休み、予約可、カード (JCB、AMEX、Diners)・QR可、電子マネー不可、31席 (カウンター11席、テーブル20席)、分煙、駐車場なし (近くにコインパーキング)、オープン2017年11月15日、ホームページは chabuya-honten.com。口コミ (2025年10月〜2026年10月、英語): かつおだしの京風おでん、あっさりやさしい味 (2026年1月、6月)、トマトのおでんは洋風のだし (2025年10月、2026年2月)、日曜の夜に訪れた口コミも (2025年10月、2026年1月)、席はおおむね2時間 (2026年2月)、予約がおすすめ (2026年2月)、釜飯はいくら (2025年10月)、鯛と柚子 (2026年1月)、ほたるいかとたけのこ (2026年4月)、地鶏 (2026年6月)、鯛と山椒、京赤地鶏 (2026年9月)、残った釜飯はおにぎりにして持ち帰り (2026年1月)、かつおの塩たたき (2026年6月)、ぶりの塩の刺身とすだち (2026年10月)、下足ポン、梅くらげ、いちじくの天ぷら、胸肉唐揚げ (2026年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B326794043', 'B515270517', 'B516239363', 'B521276073', 'B521640368', 'B522255637', 'B529052839', 'B531390680', 'B535316125', 'B537730517'])) },
    cultural_comfort: { level: 'japanese', note: 'The menu is posted on the wall (February 2026); no English noted; phone may be Japanese only (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町3-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.004787, 135.747831); not pin-checked by the worker (integrator to check); nearest pins kyr_raamen_sakurai 41.4m, this batch's kyoto_teppan28_omiya about 17m (壬生坊城町4); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515270517/', R + 'B535316125/'],
    price_note: 'No dish prices in Tabelog or the reviews fetched; reviewers spent about ¥3,000–8,000 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style oden (in bonito stock)', null, 'Oden', 'ask', 'no', 'Daikon, egg, konnyaku, rolled cabbage and more; 2025–2026 reviews.', 'oden'),
      it('', '', 'Tomato oden (Western-style broth)', null, 'Oden', 'ask', 'ask', 'October 2025; February 2026.', 'tomato_oden'),
      it('', '', 'Kamameshi (seasonal; e.g. sea bream with yuzu or sansho, jidori chicken)', null, 'Kamameshi', 'ask', 'no', 'Cooked in the oden stock (June 2026); 2025–2026 reviews.', 'kamameshi'),
      it('', '', 'Salt-seared bonito', null, 'Small plate', 'ask', 'no', 'June 2026.', 'katsuo_shio_tataki'),
    ] }, {
    cuisine: '四条大宮近く、おでんと釜飯の居酒屋。壁の品書きと日替わりが多い (2025〜2026年の口コミ)・かつおだしの京風おでん、あっさりやさしい味 (2026年1月、6月): 大根、卵、こんにゃく、ちくわ、じゃがいも、絹ごし豆腐、しゅうまい、ロールキャベツ、れんこん、海藻、牛すじ、つくね、平天、しらたき、九条ねぎ (2025〜2026年の口コミ)・洋風のだしのトマトのおでん (2025年10月、2026年2月)・日替わりの白菜と豚 (2026年1月)・おでんの1人前はふたり分ほど (2026年1月)・注文してから炊く釜飯: いくら (2025年10月)、鯛と柚子 (2026年1月)、春のほたるいかとたけのこ (2026年4月)、おでんのだしで炊いた地鶏 (2026年6月)、鯛と山椒、京赤地鶏 (2026年9月)、残りはおにぎりにして持ち帰れる (2026年1月)・かつおの塩たたき (2026年6月)、すだちを添えたぶりの塩の刺身 (2026年10月)・ポテトサラダ、大根としらす、チャンジャの3種の先付け、下足ポン、梅くらげ、いちじくの天ぷら、胸肉唐揚げ (2026年9月)・ソーセージ、ハムカツ (2026年1月)・グラスの日本酒 (2026年9月)、日本酒、焼酎、ワイン (食べログ)・ひとり3,000〜8,000円ほど (口コミ)',
    neighborhood: '壬生、四条大宮の近く。阪急大宮から徒歩3分',
    gf_detail: '要確認: かつおだしの京風おでん (2026年6月)、釜飯はおでんのだしで炊く (2026年6月)。ハムカツ、いちじくの天ぷら、唐揚げもある (2026年1月、9月)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: おでんはかつおだしで、釜飯もそのだしで炊く (2026年6月の口コミ)。ヴィーガン対応の記載なし。',
    notes: '[おでん・四条大宮、おでんと釜飯の居酒屋] 落ち着いた人気の店。かつおだしの京風おでん、洋風のだしのトマトのおでん、注文してから炊く季節の釜飯、刺身、壁の品書きの日替わり。予約がおすすめ、席は2時間ほど。月〜土18:00〜23:00。',
  });
}

// ================================================================ 鉄板28号
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26004336/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_teppan28_omiya', name: '鉄板28号 (Teppan Nijuhachigo)', category: 'OMNI',
    lat: 35.00487624786575, lng: 135.74767525036964, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a takoyaki, negiyaki, okonomiyaki and yakisoba wine bar (wheat batter and noodles); the menu also has duck, venison and lamb dishes and salads (Tabelog menu, updated 2 September 2024), but no gluten-free option is stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: a simple salad, an assorted vegetable platter, carrot rapé and homemade pickles are on the menu (Tabelog menu, 2024), but the takoyaki has octopus and most dishes are meat, fish or cheese; no vegan option stated.',
    hours_raw: 'Tabelog (shop-registered): Mon–Wed and Fri–Sun 17:00–23:00 (food last order 22:00, drinks 23:00); closed Thursday, including holidays and the day before them; temporary closures for events, and closing days may change over Golden Week and New Year. After 22:00, lighter dishes such as mixed noodles (Tabelog). Reservations taken; the second floor can be booked privately by groups of six or more, by phone (Tabelog). No cards or e-money; QR payment (PayPay) only (Tabelog). A ¥200 seating fee if a guest who is not drinking wine orders from the wine menu (Tabelog). Drinks are only wine, beer and soft drinks: no chuhai, highballs, sake or whisky (Tabelog). 28 seats: 6 at the counter and 8 at tables on the first floor, 14 at tables upstairs (Tabelog). Non-smoking. Children welcome, but there are no children\'s chairs (Tabelog). On Goin-dori by Shijo-Omiya, 3 min from Hankyu Omiya (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Goin-dori by Shijo-Omiya — 3 min from Hankyu Omiya',
    cuisine: 'A takoyaki and teppan wine bar by Shijo-Omiya: takoyaki, negiyaki and yakisoba with French and Italian touches, bistro-style meat dishes and a long wine list (Tabelog; 2024–2026 reviews) · takoyaki, which the shop says it has made for over 40 years (Tabelog): sauce takoyaki, a garlic-shrimp style (July 2026), sweet and spicy sauce (January 2025), blue cheese takoyaki ¥1,100 (November 2025) · Kujo green onion negiyaki with blue cheese, ¥650 (November 2025) and ¥1,100 (September 2024; June 2026), with Iberico pork or duck toppings (October 2025) · Kyoto-style flat squid okonomiyaki ¥700 (November 2025) · yakisoba carbonara (January 2025; April 2026), homemade sausage yakisoba Napolitan (October 2025), duck ragu yakisoba ¥1,800 (June 2026), chilled tantanmen in summer (August 2025), tom yum mixed noodles ¥1,100 (Tabelog menu, 2024) · assorted appetizers ¥500 a person: pâté, chicken liver in red wine, smoked mackerel or oil sardines, carrot rapé, blue cheese potato salad (November 2025; May 2026) · rosé duck breast ¥1,200, bone-in duck leg confit ¥1,200, Hokkaido venison rare steak ¥1,800, lamb heart steak ¥1,100, lamb spare ribs ¥1,300, cilantro gyoza ¥680 (Tabelog menu, 2024); lamb heart ¥1,000 (November 2025) · water eggplant with a miso dressing (June 2025), chicken nanban with myoga tartar sauce (June 2026), new-onion and prosciutto salad (April 2026) · more than 100 wines (November 2025); omakase glass wine ¥500 (November 2025), from ¥600 (September 2024); wine pairings of five glasses (April, June 2026); orange wine (August 2024) · an all-you-can-drink wine course of three whites and three reds, ¥3,980 (June 2025); an omakase all-you-can-drink course for groups of six (November 2025) · about ¥2,000–8,000 a head (reviews)',
    website: null, gmaps: gm('鉄板28号 京都 壬生坊城町4'), menu_url: TB + 'dtlmenu/',
    notes: '[Takoyaki and wine · Shijo-Omiya, a teppan wine bar] Takoyaki, blue-cheese negiyaki and yakisoba carbonara alongside pâté, duck and venison, with over 100 wines and a ¥500 appetizer plate; the owner talks wine and runs blind tastings. Wine, beer and soft drinks only. PayPay only, no cards. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a wine bar "run by a wine enthusiast" (November 2025) and a "passionate owner offering blind tastings" (September 2024); a November 2025 reviewer writes that acing the blind tasting can earn a free meal or a bottle of high-end wine. The owner asks what wine guests like and chooses accordingly (January 2025; November 2025); two reviewers note the owner\'s strong personality, "If you get along with the owner, this is the perfect place for wine lovers" (July 2026; November 2025). A March 2025 visitor found the atmosphere "a bit intimidating" but the staff friendly and kind; a May 2026 repeat visitor titled the review "Master\'s cooking and the sister\'s conversation are top-notch!" (as the translated review gives it). The room has exposed concrete and unfinished walls (November 2025) and a plain front that makes it hard to tell what the place is (April 2026; July 2026). Reviewers praise the value (August 2025; April, August 2026), and one regular has visited seven times (June 2026).',
      philosophy: null,
      specialty: 'Takoyaki and blue-cheese negiyaki with wine; assorted appetizer plate.',
      anecdotes: [
        { text: 'November 2025: "I never expected to find over 100 types of wine and French-style appetizers or game dishes in such a place. The contrast is delightful."', source: R + 'B519653230/' },
        { text: 'March 2025: "Be careful if you order takoyaki first, as it comes out at high speed! The assorted appetizers are a must-order."', source: R + 'B503010242/' },
        { text: 'July 2026: "While the wine is impressive, the food is at a bistro level, which is remarkable for a takoyaki shop."', source: R + 'B532393137/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): 鉄板28号 (てっぱんにじゅうはちごう)、たこ焼き・焼きそば・ワインバー、中京区壬生坊城町4、阪急大宮駅から徒歩3分、後院通沿い、月火水金土日17:00〜23:00 (料理L.O. 22:00、ドリンク23:00)、木曜休み、予約可、2階は6名以上で貸切 (電話で相談)、カード・電子マネー不可、QR (PayPay) 可、ワインを飲まれないお客様がワイン用メニューからご注文されると席料 (200円)、28席 (1階カウンター6席・テーブル8席、2階テーブル14席)、禁煙、子ども可 (子ども用の椅子なし)、ドリンクはワイン、ビール、ソフトドリンクのみ、40年以上焼き続けるたこ焼き、22時からは軽めの麺も。メニュー (2024年9月2日更新): 鴨むねのロゼ焼き1,200円、骨付き鴨もものコンフィ1,200円、北海道産鹿のレアステーキ1,800円、ラムハートステーキ1,100円、パクチー焼き餃子680円、トムヤム和え麺1,100円、前菜盛り合わせ500円。口コミ (2024年8月〜2026年8月、英語): ブルーチーズのたこ焼き1,100円、ブルーチーズのねぎ焼き650円 (2025年11月)、1,100円 (2024年9月、2026年6月)、いかのお好み焼き700円、ワイン100種以上、ブラインドテイスティング、ワイン飲み放題のコース3,980円 (2025年6月)。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/'].concat(rv(R, ['B42485724', 'B432787213', 'B489794838', 'B492396185', 'B503010242', 'B508658447', 'B519653230', 'B520112526', 'B528086120', 'B531574415', 'B532393137', 'B533362385'])) },
    cultural_comfort: { level: 'japanese', note: 'No English noted in Tabelog or reviews; the owner chooses wine by asking what you like (2025 reviews); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-registered Tabelog listing; reviews dated March 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.004876, 135.747675); not pin-checked by the worker (integrator to check); nearest pins kyoto_south_bound 40.2m, this batch's kyoto_oden_muro_omiya about 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B519653230/', R + 'B492396185/'],
    price_note: 'Prices tax included from the Tabelog menu (last updated 2 September 2024) and 2024–2026 reviews; ¥200 seating fee for non-wine drinkers ordering from the wine menu.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers (per person)', '¥500', 'Appetizer', 'ask', 'no', 'Tabelog menu, 2024; also November 2025 and May 2026.', 'zensai_mori'),
      it('', '', 'Blue cheese takoyaki', '¥1,100', 'Takoyaki', 'no', 'no', 'November 2025.', 'takoyaki_bluecheese'),
      it('', '', 'Kujo green onion negiyaki with blue cheese', '¥1,100', 'Teppan', 'no', 'no', 'September 2024 and June 2026; ¥650 in November 2025.', 'negiyaki_bluecheese'),
      it('', '', 'Squid okonomiyaki (Kyoto-style, flat)', '¥700', 'Teppan', 'no', 'no', 'November 2025.', 'okonomiyaki_ika'),
      it('', '', 'Duck ragu yakisoba', '¥1,800', 'Noodles', 'no', 'no', 'June 2026.', 'yakisoba_duck_ragu'),
      it('', '', 'Tom yum mixed noodles', '¥1,100', 'Noodles', 'no', 'ask', 'Tabelog menu, 2024.', 'tomyum_aemen'),
      it('', '', 'Rosé-grilled duck breast', '¥1,200', 'Meat', 'ask', 'no', 'Tabelog menu, 2024; also November 2025.', 'duck_rose'),
      it('', '', 'Hokkaido venison rare steak', '¥1,800', 'Meat', 'ask', 'no', 'Tabelog menu, 2024.', 'venison_steak'),
      it('', '', 'Lamb heart steak', '¥1,100', 'Meat', 'ask', 'no', 'Tabelog menu, 2024; ¥1,000 in November 2025.', 'lamb_heart'),
      it('', '', 'Grilled gyoza with cilantro', '¥680', 'Small plate', 'no', 'ask', 'Tabelog menu, 2024.', 'gyoza_pakuchi'),
    ] }, {
    cuisine: '四条大宮近くのたこ焼きと鉄板のワインバー。フレンチやイタリアンの工夫のたこ焼き、ねぎ焼き、焼きそば、ビストロのような肉料理、ワインが多い (食べログ、2024〜2026年の口コミ)・40年以上焼き続けるたこ焼き (食べログ): ソースのたこ焼き、ガーリックシュリンプ風 (2026年7月)、甘辛いソース (2025年1月)、ブルーチーズのたこ焼き1,100円 (2025年11月)・九条ねぎとブルーチーズのねぎ焼き650円 (2025年11月)、1,100円 (2024年9月、2026年6月)、イベリコ豚や鴨のトッピング (2025年10月)・京都風の薄いいかのお好み焼き700円 (2025年11月)・焼きそばのカルボナーラ (2025年1月、2026年4月)、自家製ソーセージの焼きそばナポリタン (2025年10月)、鴨のラグーの焼きそば1,800円 (2026年6月)、夏の冷やし担々麺 (2025年8月)、トムヤム和え麺1,100円 (食べログのメニュー、2024年)・ひとり500円の前菜盛り合わせ: パテ、鶏レバーの赤ワイン煮、さばの燻製やオイルサーディン、キャロットラペ、ブルーチーズのポテトサラダ (2025年11月、2026年5月)・鴨むねのロゼ焼き1,200円、骨付き鴨もものコンフィ1,200円、北海道産鹿のレアステーキ1,800円、ラムハートステーキ1,100円、ラムスペアリブ1,300円、パクチー焼き餃子680円 (食べログのメニュー、2024年)、ラムハート1,000円 (2025年11月)・水なすのみそのドレッシング (2025年6月)、みょうがのタルタルのチキン南蛮 (2026年6月)、新玉ねぎと生ハムのサラダ (2026年4月)・ワイン100種以上 (2025年11月)、おまかせのグラスワイン500円 (2025年11月)、600円から (2024年9月)、5杯のワインのペアリング (2026年4月、6月)、オレンジワイン (2024年8月)・白3種、赤3種のワイン飲み放題のコース3,980円 (2025年6月)、6人ならおまかせの飲み放題コース (2025年11月)・ひとり2,000〜8,000円ほど (口コミ)',
    neighborhood: '四条大宮の後院通。阪急大宮から徒歩3分',
    gf_detail: 'グルテンフリー不可: たこ焼き、ねぎ焼き、お好み焼き、焼きそばのワインバー (小麦の生地と麺)。鴨、鹿、ラムの料理やサラダもある (食べログのメニュー、2024年9月2日更新) が、グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: サラダ、野菜の盛り合わせ、キャロットラペ、自家製ピクルスがある (食べログのメニュー、2024年) が、たこ焼きにはたこが入り、料理の多くは肉、魚、チーズ。ヴィーガン対応の記載なし。',
    notes: '[たこ焼きとワイン・四条大宮、鉄板のワインバー] たこ焼き、ブルーチーズのねぎ焼き、焼きそばのカルボナーラに、パテ、鴨、鹿。ワインは100種以上、500円の前菜盛り合わせ。店主がワインの話やブラインドテイスティングをしてくれる。ドリンクはワイン、ビール、ソフトドリンクのみ。PayPay のみでカード不可。木曜休み。',
  });
}

// ================================================================ あしべ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26035650/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '21:00']);
  put({
    id: 'kyoto_ashibe_gojo_omiya', name: 'あしべ (Ashibe)', category: 'OMNI',
    lat: 34.99739088787094, lng: 135.74906661029306, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the cakes are tarts, sponge and dacquoise cakes (2026 reviews), and the snacks include deep-fried broccoli and cauliflower with Parmigiano (December 2025); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: bean sprout namul and snap peas with miso mayonnaise are on the snack board (June 2026), but the cakes use cream and the snacks include goma saba (mackerel) (December 2025); no vegan option stated.',
    hours_raw: 'Tabelog: Mon–Sun 13:00–21:00 (last order 20:00); may close early once the cakes sell out; cards (Visa, AMEX) only for ¥5,000 or more; e-money and QR payments accepted (Tabelog). A January 2026 reviewer found the hours and days irregular and advises checking the shop\'s Instagram first; it opens only after lunch, and late in the day the cakes may be sold out (September 2026). Cakes to take away (Tabelog; 2022–2026 reviews). A standing counter for 4 and tables for 4 at the back (Tabelog; June 2026). Non-smoking; no parking. Busy at weekends (January 2026). Opened 22 March 2021 (Tabelog). On Omiya-dori at the Omiya Gojo Kitagawa bus stop (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Omiya-dori by Gojo — the Omiya Gojo Kitagawa bus stop',
    cuisine: 'A cake shop and standing wine bar run by a couple: a showcase of cakes "that pair well with alcohol", wine and coffee, and a blackboard of snacks, from 13:00 (2025–2026 reviews) · cakes about ¥600–800 (June 2026), large pieces (June 2026); prices have risen (March 2026) · tarts, including a persimmon tart and the namesake "Ashibe" tart; a strawberry cake with dacquoise (February 2026) · banana cake and coffee cake (September 2026); a coffee cake with cream and cherries in liqueur (June 2026); a cake with plum liqueur (June 2026) · goma saba (sesame mackerel, a Fukuoka speciality) ¥750 and deep-fried broccoli and cauliflower with Parmigiano ¥700 (December 2025) · bean sprout namul, snap peas with miso mayonnaise (June 2026) · wine, from lunchtime (May 2026), a small selection (March 2026); café au lait and iced latte (June 2026) · about ¥1,000–4,000 a head (reviews)',
    website: null, gmaps: gm('あしべ 京都 下京区 上五条町401'), menu_url: null,
    notes: '[Cake and wine · Omiya-dori by Gojo, a cake shop and standing bar] A couple\'s small shop: the owner\'s wife bakes cakes meant to go with wine, the owner cooks the snacks, and you can drink, eat cake with coffee, or take cakes home. Opens 13:00 and may close when the cakes sell out; check Instagram.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Pastry chef (the owner\'s wife, unnamed)'], origin: null,
      background: 'An August 2025 reviewer writes that the cakes are made "by the pastry chef, who is also the owner\'s wife", and that "the snacks prepared by the husband were also meticulously crafted"; a September 2025 visitor describes "a stylish spot run by a couple that feels like a café and a standing bar at the same time". Reviewers find it hard to say whether it is a cake shop that serves wine or a wine bar that sells cakes (February 2026; January 2026), and describe it as packed with drinkers just after 7 PM (February 2026), a place where other customers drink during the day (June 2026), comfortable for solo visits (March 2026), and popular with families picking up cakes (August 2022). A September 2026 regular often finds it closed or the cakes sold out.',
      philosophy: null,
      specialty: 'Cakes made to go with wine; snacks.',
      anecdotes: [
        { text: 'August 2025: "I enjoyed it with red wine, and the balance of sweetness and subtle bitterness was exquisite, making it truly enjoyable with the wine."', source: R + 'B512117029/' },
        { text: 'February 2026: "It was just after 7 PM, and the place was packed, with everyone enjoying wine and drinks. However, the showcase was filled with adorable and delicious-looking cakes."', source: R + 'B522421350/' },
        { text: 'June 2026: "The counter seating is for standing drinks, while there are table seats in the back."', source: R + 'B530569528/' },
      ],
      japanese_sources_summary: '食べログ: あしべ、バー・ケーキ・洋菓子、下京区上五条町401、大宮五条北側バス停すぐ、月〜日13:00〜21:00 (L.O. 20:00)、ケーキが売り切れたら閉店することも、カードは5,000円以上で (VISA、AMEX)、電子マネー・QR可、立ち飲みのカウンター4名、テーブル4名、禁煙、駐車場なし、テイクアウト可、オープン2021年3月22日。口コミ (2022年8月〜2026年9月、英語): お酒に合うケーキはパティシエの店主の妻、つまみは夫 (2025年8月)、夫婦の店、カフェで立ち飲み (2025年9月)、営業時間と休みは不定期でインスタグラムを確認 (2026年1月)、ケーキ600〜800円ほど (2026年6月)、柿のタルト、店名の「あしべ」のタルト、ダックワーズのいちごのケーキ (2026年2月)、バナナケーキ、コーヒーケーキ (2026年9月)、梅酒のケーキ (2026年6月)、ごまさば750円、ブロッコリーとカリフラワーのパルミジャーノのフライ700円 (2025年12月)、もやしのナムル、スナップえんどうのみそマヨ (2026年6月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B453426803', 'B512117029', 'B513380495', 'B521122332', 'B522421350', 'B529527072', 'B530201116', 'B530569528', 'B530641908', 'B535520871'])) },
    cultural_comfort: { level: 'japanese', note: 'No English noted; cakes can be chosen from the showcase (2026 reviews); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区上五条町401',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.997391, 135.749067); not pin-checked by the worker (integrator to check); nearest pin mp_teuchi_udon_kasugai 87.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B453426803/', R + 'B530201116/'],
    price_note: 'Prices from December 2025 and June 2026 reviews; no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Cake (from the showcase)', '¥600–800', 'Cake', 'ask', 'ask', 'June 2026; tarts and cream cakes, changing.', 'cake'),
      it('', '', 'Goma saba (sesame mackerel)', '¥750', 'Snack', 'ask', 'no', 'December 2025.', 'goma_saba'),
      it('', '', 'Deep-fried broccoli and cauliflower with Parmigiano', '¥700', 'Snack', 'ask', 'no', 'December 2025.', 'broccoli_fry'),
    ] }, {
    cuisine: '夫婦の店のケーキ屋さんで立ち飲みのワインバー。「お酒に合う」ケーキのショーケース、ワインとコーヒー、黒板のつまみ。13時から (2025〜2026年の口コミ)・ケーキは600〜800円ほど (2026年6月)、大きめ (2026年6月)、値上がりした (2026年3月)・柿のタルト、店名の「あしべ」のタルト、ダックワーズのいちごのケーキ (2026年2月)・バナナケーキ、コーヒーケーキ (2026年9月)、クリームと洋酒漬けのさくらんぼのコーヒーケーキ (2026年6月)、梅酒のケーキ (2026年6月)・福岡名物のごまさば750円、ブロッコリーとカリフラワーのパルミジャーノのフライ700円 (2025年12月)・もやしのナムル、スナップえんどうのみそマヨ (2026年6月)・昼からワイン (2026年5月)、種類は多くない (2026年3月)、カフェオレ、アイスラテ (2026年6月)・ひとり1,000〜4,000円ほど (口コミ)',
    neighborhood: '大宮通、五条の近く。大宮五条北側バス停すぐ',
    gf_detail: '要確認: ケーキはタルト、スポンジ、ダックワーズ (2026年の口コミ)、つまみにブロッコリーとカリフラワーのパルミジャーノのフライ (2025年12月)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 黒板のつまみにもやしのナムル、スナップえんどうのみそマヨ (2026年6月) があるが、ケーキにはクリームを使い、つまみにごまさばも (2025年12月)。ヴィーガン対応の記載なし。',
    notes: '[ケーキとワイン・五条の大宮通、ケーキ屋さんで立ち飲み] 夫婦の小さな店。店主の妻がワインに合うケーキを焼き、店主がつまみを作る。飲んでも、コーヒーとケーキでも、持ち帰りでも。13時から、ケーキが売り切れたら閉店することも。インスタグラムで確認を。',
  });
}

// ================================================================ 炭火焼肉 つんく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26036850/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/ke5t000/';
  const W = day(['16:00', '23:00']); const E = day(['11:30', '23:00']);
  put({
    id: 'kyoto_tsunku_shichijo', name: '炭火焼肉 つんく (Sumibi Yakiniku Tsunku)', category: 'OMNI',
    lat: 34.989418897878345, lng: 135.75639118020743, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: charcoal-grilled wagyu and horumon, salted or in sauce (the course grills "can be changed to sauce grilled", March 2026); courses include meat sushi, bibimbap and cake (2026 reviews); no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; every course is built on beef, with seafood (Tabelog; 2025–2026 reviews); no vegan option stated.',
    hours_raw: 'Tabelog and gurunavi: Mon–Fri 16:00–23:00; Sat, Sun (and public holidays, gurunavi) 11:30–23:00; last order 22:30; closed days not fixed. No one under 20 admitted, including accompanying guests (Tabelog). Reservations taken; online up to 12 guests, larger parties and private hire (gurunavi: 30–45 people) by phone (Tabelog). Cards, e-money and QR payments accepted (Tabelog). 55 seats with a counter at the entrance and semi-private rooms at the back, including a partitioned room for 6 (Tabelog; gurunavi; March 2026). Smoking allowed (Tabelog; January 2026). No parking. On Shichijo-dori, 5–6 min walk from Kyoto Station, in the えびすスクエアビル (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-dori west of Shinmachi — 6 min from Kyoto Station',
    cuisine: 'A charcoal-grill yakiniku restaurant near Kyoto Station serving Kuroge wagyu from the old Kyoto butcher 銀閣寺大西, with seafood bought at the Kyoto Central Market (Tabelog; gurunavi; 2025–2026 reviews) · courses (Tabelog, prices tax included): a 9-item banquet course with choregi salad, beef tongue and horumon ¥4,700; an 11-item recommended course ¥6,100; a 13-item course with sirloin-cap yukhoe, Kuroge wagyu striploin and meat sushi ¥9,000; all-you-can-drink with a course ¥1,500 (90 min last order) · a wagyu fillet course: kimchi, tuna choregi salad, sirloin-cap yukhoe, scallops and black tiger prawns, tongue, A5 lean, Kuroge fillet and chateaubriand (100 g each), meat sushi and the day\'s cake (March 2026) · tongue, harami, lean Kuroge wagyu and horumon on a course, plus yukhoe and chateaubriand (January 2026); outside skirt (December 2025) · tongue with salt and sansho rather than pepper (January 2026) · kimchi and namul (December 2025), cucumber kimchi in the kimchi platter (July 2025), bibimbap (August 2026), tripe and garlic (November 2026) · matcha and cheese cakes; a birthday plate (January 2026) · more than 100 drinks, including cocktails (Tabelog) · about ¥4,000–10,000 a head (reviews)',
    website: GN, gmaps: gm('炭火焼肉 つんく 京都 夷之町714'), menu_url: null,
    notes: '[Yakiniku · Shichijo-dori near Kyoto Station, a charcoal wagyu grill] Kuroge wagyu from the Kyoto butcher 銀閣寺大西 grilled over charcoal, horumon, yukhoe and meat sushi, with courses from ¥4,700 and all-you-can-drink. Counter at the front, semi-private rooms behind. Adults only (20+); smoking allowed. Open from 16:00, from 11:30 at weekends.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop\'s Tabelog page says the meat comes from the long-established Kyoto butcher 銀閣寺大西 and that the owner buys seafood directly at the Kyoto Central Market; gurunavi gives the same supplier ("『銀閣寺大西』から仕入れている絶品のお肉") and says the shop has an affiliated bar ("系列店にBARがございます"). Opened 1 December 2021 (Tabelog). Reviewers describe a clean, modern Japanese room (December 2025; March 2026), seats set in pairs at the counter (December 2025), a stylish semi-private room (November 2026), and a place that suits parties (August 2025; January 2026). Some found the service poor: staff chatting within earshot (March 2025), "the service was not very good" (July 2025), and a slow first round of drinks at a large party (January 2026). Two reviewers found the meat and value average and the platter pieces small (January, August 2026); others praise the value (August 2025; March 2026).',
      philosophy: null,
      specialty: 'Charcoal-grilled Kuroge wagyu and horumon; yakiniku courses.',
      anecdotes: [
        { text: 'January 2026: "I wanted to enjoy the beef tongue with salt and pepper, but since Kyoto has a culture of using sansho instead of pepper, they didn\'t have any. It was still delicious with sansho."', source: R + 'B521883987/' },
        { text: 'March 2026: "The interior is designed in a modern Japanese style, featuring a counter at the entrance and several private rooms in the back."', source: R + 'B524139320/' },
        { text: 'December 2025: "Even though it was winter, the charcoal grilling made it feel very warm."', source: R + 'B520030543/' },
      ],
      japanese_sources_summary: 'ぐるなび: 炭火焼肉 つんく (スミビヤキニクツンク)、「京都駅近、京都の老舗より仕入れます厳選牛を是非ご賞味ください。」、「『銀閣寺大西』から仕入れている絶品のお肉」、月〜金16:00〜23:00、土日祝日11:30〜23:00 (L.O. 22:30)、不定休、55席、テーブル個室 (6名、パーティション仕切り)、貸切30〜45名、「系列店にBARがございます」。食べログ: 焼肉・ホルモン・居酒屋、下京区七条通新町西入夷之町714 えびすスクエアビル1F、京都駅から徒歩6分、予約可 (ネット予約は12名まで)、カード・電子マネー・QR可、喫煙可、20歳未満は同伴でも入店不可、オープン2021年12月1日、コース4,700円 (9品)、6,100円 (11品)、9,000円 (13品)、コースと一緒の飲み放題1,500円。口コミ (2025年3月〜2026年11月、英語): 黒毛和牛の炭火焼き、京都中央市場の魚介、ヒレとシャトーブリアンのコース (2026年3月)、タン、ハラミ、赤身、ホルモン、ユッケ (2026年1月)、タンは胡椒でなく山椒 (2026年1月)、接客がよくないという口コミも (2025年3月、7月)。',
      confidence: 'low', sources: [TB, GN].concat(rv(R, ['B502513348', 'B509811445', 'B511821844', 'B519957107', 'B520030543', 'B521691874', 'B521883987', 'B524139320', 'B533598816', 'B539434646'])) },
    cultural_comfort: { level: 'japanese', note: 'No English noted in Tabelog or reviews; online booking on Tabelog; adults (20+) only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通新町西入夷之町714 えびすスクエアビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and gurunavi listings; Tabelog reviews dated March 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (34.989419, 135.756391); not pin-checked by the worker (integrator to check); nearest pin kyoto_saredo_cafe_dining 71.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course prices tax included from the Tabelog listing (read 2026-11-26); the all-you-can-drink add-on is only with a course.', last_checked: TODAY, items: [
      it('', '', 'Banquet course (9 items: choregi salad, beef tongue, horumon and more)', '¥4,700', 'Course', 'ask', 'no', 'Tabelog course listing.', 'course_banquet'),
      it('', '', 'Recommended course (11 items, wagyu and wagyu horumon)', '¥6,100', 'Course', 'ask', 'no', 'Tabelog course listing; marked most popular.', 'course_recommended'),
      it('', '', 'Top course (13 items: sirloin-cap yukhoe, Kuroge wagyu striploin, meat sushi)', '¥9,000', 'Course', 'ask', 'no', 'Tabelog course listing.', 'course_top'),
      it('', '', 'All-you-can-drink (with a course)', '¥1,500', 'Drink', 'ask', 'ask', 'Tabelog; last order at 90 min, glass exchange.', 'nomihodai'),
    ] }, {
    cuisine: '京都駅近くの炭火焼肉。京都の老舗の銀閣寺大西から仕入れる黒毛和牛、京都中央市場で仕入れる魚介 (食べログ、ぐるなび、2025〜2026年の口コミ)・コース (食べログ、税込): チョレギサラダ、牛タン、ホルモンなど9品4,700円、11品のおすすめコース6,100円、ユッケ、黒毛和牛のロース、肉寿司の13品9,000円、コースと一緒の飲み放題1,500円 (ラストオーダー90分)・和牛ヒレのコース: キムチ、まぐろのチョレギサラダ、ユッケ、ほたてと大きな海老、タン、A5の赤身、黒毛和牛のヒレとシャトーブリアン (各100g)、肉寿司、日替わりのケーキ (2026年3月)・コースのタン、ハラミ、黒毛和牛の赤身、ホルモン、追加のユッケとシャトーブリアン (2026年1月)、ハラミ (2025年12月)・タンは塩と、胡椒でなく山椒で (2026年1月)・キムチとナムル (2025年12月)、キムチの盛り合わせのきゅうりのキムチ (2025年7月)、ビビンバ (2026年8月)、ホルモンとにんにく (2026年11月)・抹茶とチーズのケーキ、誕生日のプレート (2026年1月)・ドリンクは100種以上、カクテルも (食べログ)・ひとり4,000〜10,000円ほど (口コミ)',
    neighborhood: '七条通、新町の西。京都駅から徒歩6分',
    gf_detail: '要確認: 黒毛和牛とホルモンの炭火焼き、塩またはたれ (コースの焼き物はたれ焼きにも変えられる、2026年3月)。コースには肉寿司、ビビンバ、ケーキも (2026年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 和牛の焼肉の店で、コースはどれも牛肉と魚介が中心 (食べログ、2025〜2026年の口コミ)。ヴィーガン対応の記載なし。',
    notes: '[焼肉・京都駅近くの七条通、炭火の和牛] 京都の銀閣寺大西から仕入れる黒毛和牛を炭火で、ホルモン、ユッケ、肉寿司も。コースは4,700円から、飲み放題あり。入口にカウンター、奥に半個室。20歳以上のみ、喫煙可。16時から、土日は11:30から。',
  });
}

save();
