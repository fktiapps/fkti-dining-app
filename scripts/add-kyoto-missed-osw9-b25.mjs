// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 25.
//   + 都野菜 賀茂 烏丸店 Miyakoyasai Kamo Karasuma (Kyoto-vegetable buffet from 7 am, near Shijo-Karasuma)        [core]
//   + 祇園ごずこん Gion Gozukon (8-seat "wa-yo kappo" counter on Shinbashi; famous gyoza with wine)              [core]
//   + 菊乃井 鮨 青 Kikunoi Sushi Ao (Kikunoi's sushi kaiseki counter near Kodai-ji)                              [notable]
//   + RAU (patisserie, chocolate and gelato in GOOD NATURE STATION, Kawaramachi)                                 [notable]
//   - 麺匠 たか松 四条店 26028047 skipped (same-concept branch of kyr_mensho_takamatsu_honten)
//   Same-name counts first (same brand or operator): たか松 — this shop plus KAWARAMACHI and 京都駅ビル拉麺小路店 in our
//   crawls, 本店 in data, see skip; 都野菜 賀茂 — 烏丸店 and 京都駅前店 in our crawls, neither in data: a group of two,
//   one drafted; ごずこん 1; 菊乃井 — 本店 (in data as kyoto_kikunoi_honten), 赤坂 菊乃井, 菊乃井 肉 雲収 and this sushi
//   counter in our crawls: 鮨 青 is a different concept (sushi kaiseki) of the Kikunoi group, drafted as a sister concept
//   — flagged; RAU 1 (its café upstairs is a separate Tabelog listing, 26033525).
//   Taken in queue order on 2026-11-05: core 26028047 (skip), 26021609, 26000279; notable 26042531, 26033441.
//   None of the four is in data/kyoto.json by name or address; RAU shares GOOD NATURE STATION (稲荷町318-6) with
//   kyoto_takayama_kawaramachi, kyoto_velrosier and kyoto_hyssop, which are other restaurants on other floors.
//   Service charges checked against Tabelog's Japanese original: 賀茂 "満席の場合はランチ60分／ディナー80分の時間制限あり"
//   (a time limit, not a charge); ごずこん "なし"; 鮨 青 and RAU have no section.
//   Pins: RAU's Tabelog point is 4.4 m from kyoto_nikolabo, so moved ~6.7 m north; 菊乃井 鮨 青's address
//   (下河原通463-30) gives GSI no match, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028047', '麺匠 たか松 四条店: a same-concept branch of a brand already in data — kyr_mensho_takamatsu_honten (麺匠 たか松 本店); our crawls also list 麺匠 たか松 KAWARAMACHI and 麺匠たか松 京都駅ビル拉麺小路店');

// ================================================================ 都野菜 賀茂 烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26021609/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://nasukamo.net/';
  const H = day(['07:00', '10:00'], ['10:30', '16:00'], ['16:30', '22:00']);
  put({
    id: 'kyoto_miyakoyasai_kamo_karasuma', name: '都野菜 賀茂 烏丸店 (Miyakoyasai Kamo Karasuma)', category: 'OMNI',
    lat: 35.002434, lng: 135.76117, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options and allergy information, but the shop says allergy details are not available for every item; the buffet also has udon, gratin, curry and fried chicken (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, and an October 2026 reviewer found no meat or fish at breakfast; but miso soup and obanzai are dashi-based, and lunch and dinner add meat dishes (Tabelog; 2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00 (last order 9:15), lunch 10:30–16:00, dinner 16:30–22:00 (buffet to 21:30); open all year (Tabelog). Bookings on the website; no phone bookings — calls 15:00–18:00 for questions only (Tabelog). Buy a ticket at the machine on entry; when full, 60 minutes at lunch and 80 at dinner — Tabelog\'s Japanese original: "満席の場合はランチ60分／ディナー80分の時間制限あり". Breakfast buffet ¥650 (October 2026). Children\'s prices at lunch and dinner; 67 seats; English and Simplified Chinese menus with photos; wheelchair accessible; non-smoking; cards incl. UnionPay (Tabelog). 2 min from Shijo or Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin south of Ayanokoji, near Shijo-Karasuma — 2 min walk',
    cuisine: 'All-you-can-eat buffet of Kyoto vegetables grown by local farmers using organic, pesticide-free or reduced-pesticide methods, with salads and obanzai; shabu-shabu and courses as well (Tabelog) · breakfast buffet of vegetables, obanzai and rice porridge ¥650 (October 2026) · lunch and dinner mains with the buffet: beef sukiyaki udon ¥2,300 + ¥700 buffet (September 2026); beef-topped seafood bowl or sukiyaki mazesoba ¥3,500 with buffet (September 2026); weekday mala tang fair (September 2026) · buffet extras: curry, gratin, udon, kara-age, house dressings such as Shogoin turnip (2026 reviews)',
    website: SITE, gmaps: gm('都野菜 賀茂 烏丸店'), menu_url: null,
    notes: "[Kyoto-vegetable buffet · near Shijo-Karasuma] A long-running, good-value buffet of Kyoto farm vegetables, obanzai and salads — from a ¥650 breakfast at 7 am to lunch and dinner sets with sukiyaki, shabu-shabu or rice bowls. Buy a ticket on entry; time limits when busy. Tabelog lists vegan, vegetarian and gluten-free options — ask which dishes. Open daily.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 26 December 2012 (Tabelog). Per the operator: Kyoto vegetables grown by local farmers using organic, pesticide-free and reduced-pesticide methods. A sister shop, 都野菜 賀茂 京都駅前店, appears in our crawl.',
      philosophy: 'Per the operator: to share the true blessings of Kyoto through its vegetables.',
      specialty: 'Kyoto-vegetable buffet; ¥650 breakfast.',
      anecdotes: [
        { text: 'Arriving at 7:00 on an October 2026 morning, a diner found people already queuing for breakfast.', source: R + 'B536754016/' },
        { text: 'A September 2026 return visitor found the weekday vegetable corner a little thinner than at weekends, but the mala tang fair delicious.', source: R + 'B480431941/' },
        { text: 'A November 2026 diner who meant to eat only vegetables was undone by the curry, gratin, udon and kara-age.', source: R + 'B538649758/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 都野菜 賀茂 烏丸店、ビュッフェ・鍋・しゃぶしゃぶ、下京区東洞院通綾小路下る扇酒屋町276、地下鉄四条駅・阪急烏丸駅から徒歩2分、朝食7:00〜10:00 (L.O. 9:15)、ランチ10:30〜16:00、ディナー16:30〜22:00 (バイキングは21:30まで)、年中無休、予約はウェブで (電話予約は不可)、入口の券売機で食券、満席の場合はランチ60分／ディナー80分の時間制限あり、67席、英語・簡体字のメニュー、ヴィーガン・ベジタリアン・グルテンフリーの対応あり、アレルギー表示は全品ではない、子供料金あり、2012年12月26日オープン、地元の農家が有機・無農薬・減農薬で育てた京野菜、サラダとおばんざいの食べ放題。口コミ (2026年8〜11月、英語): 朝食650円、牛すき焼きうどん2,300円+ビュッフェ700円、海鮮丼とすき焼き混ぜそば3,500円、麻辣湯、Shogoin かぶのドレッシング、カレー、グラタン、唐揚げ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B480431941/', R + 'B534618697/', R + 'B535654458/', R + 'B536754016/', R + 'B536771098/', R + 'B536811619/', R + 'B537335386/', R + 'B537428965/', R + 'B538594622/', R + 'B538649758/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus with photos; ticket machine on entry (Tabelog).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Allergy information is not available for every item; ask the staff (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通綾小路下る扇酒屋町276',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002434, 135.761170); cross-checked: GSI 京都府京都市下京区扇酒屋町276番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537428965/', R + 'B535654458/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Breakfast buffet', '¥650', 'Breakfast', 'ask', 'ask', 'October 2026 review.', 'breakfast'),
      it('', '', 'Beef sukiyaki udon with salad bar', '¥2,300', 'Lunch', 'no', 'no', 'September 2026 review; buffet +¥700.', 'sukiyaki_udon'),
    ] }, {
    cuisine: '地元の農家が有機・無農薬・減農薬で育てた京野菜のサラダとおばんざいの食べ放題。しゃぶしゃぶやコースも (食べログ)・野菜、おばんざい、お粥の朝食ビュッフェ650円 (2026年10月)・昼と夜はビュッフェ付きのメイン: 牛すき焼きうどん2,300円+ビュッフェ700円 (2026年9月)、牛肉のせ海鮮丼やすき焼き混ぜそばはビュッフェ付きで3,500円 (2026年9月)、平日の麻辣湯フェア (2026年9月)・ビュッフェにはカレー、グラタン、うどん、唐揚げ、Shogoin かぶなどの自家製ドレッシングも (2026年の口コミ)',
    neighborhood: '四条烏丸に近い東洞院通綾小路下ル。徒歩2分',
    gf_detail: '要確認。食べログにはグルテンフリー対応とアレルギー表示ありとあるが、店はすべての品にアレルギー情報があるわけではないとしている。ビュッフェにはうどん、グラタン、カレー、唐揚げも (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアン対応ありとあり、2026年10月の口コミでは朝食に肉と魚はなかった。ただし味噌汁やおばんざいは出汁で、昼と夜は肉料理も加わる (食べログ、2026年の口コミ)。',
    notes: '[京野菜のビュッフェ・四条烏丸近く] 京都の農家の野菜、おばんざい、サラダの長く続く手頃なビュッフェ。朝7時からの650円の朝食から、すき焼き、しゃぶしゃぶ、丼の昼と夜のセットまで。入口で食券を買い、混雑時は時間制限あり。食べログではヴィーガン、ベジタリアン、グルテンフリー対応ありとあるので、どの料理か確認を。無休。',
  });
}

// ================================================================ 祇園ごずこん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000279/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gozukon.net/';
  const W = day(['18:00', '23:00']), S = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_gozukon', name: '祇園ごずこん (Gion Gozukon)', category: 'OMNI',
    lat: 35.005616, lng: 135.776354, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gyoza, pasta, ramen, fried dishes and Japanese plates; no gluten information (Tabelog; 2022–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, local chicken, wagyu and meat gyoza (Tabelog; 2024–26 reviews).',
    hours_raw: 'Tue–Sat 18:00–23:00; Sun and holidays 18:00–22:00; closed Monday and the 1st and 3rd Sundays (Tabelog). Bookings taken (Tabelog). Service charge: none — Tabelog\'s Japanese original says "なし". 8 counter seats, renovated (Tabelog says on 17 June); private hire; non-smoking with a smoking space; cards (Tabelog). The wine list is not handed out — staff suggest bottles in conversation (Tabelog). On Shinbashi-dori east of Hanamikoji, south side; 7 min from Gion-Shijo or Sanjo-Keihan Stn (Tabelog; February 2025).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinbashi-dori east of Hanamikoji, Gion — 7 min from Gion-Shijo Stn',
    cuisine: '"Wa-yo kappo" without genre: three chef\'s-choice starters, then à la carte — Japanese, Western, gyoza, ramen, pasta — from contract-farm vegetables, local chicken, wagyu and fish from around Japan; wines chosen in conversation (Tabelog) · in reviews: the signature Gozukon gyoza, hairy crab, sirloin cap, takikomi rice, dashimaki, grilled hamo, Kyoto Akadori chicken thigh, sea urchin with tuna and egg yolk, bamboo shoot with seaweed, chilled corn soup, onigiri (2022–26 reviews)',
    website: SITE, gmaps: gm('祇園ごずこん'), menu_url: null,
    notes: "[Wa-yo kappo & wine · Gion Shinbashi] An eight-seat counter off Hanamikoji where genre-free cooking — Japanese plates, pasta, ramen and a famously meaty gyoza — meets wine chosen by talking with the staff rather than from a list. Three starters, then order as you like; about ¥15,000–25,000. Loved by regulars for some 20 years. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per the operator: renovated on 17 June (year not given), now counter-only; loved by local regulars and welcoming tourists. An August 2026 reviewer has come for about 20 years. A February 2025 reviewer (Japanese) relates that the gyoza became the signature after the late singer やしきたかじん asked for a dish to go with wine.',
      philosophy: null, specialty: 'Gozukon gyoza with wine.',
      anecdotes: [
        { text: '"故やしきたかじんさんがワインに合う名物料理を作れと言う事で大将が苦心して名物になった餃子が出来上がった" — a February 2025 reviewer on how the gyoza began.', source: R + 'B501693954/' },
        { text: 'An October 2024 regular noted that many Kyoto restaurants now charge over ¥50,000, while here kaiseki-style dishes come à la carte at reasonable prices.', source: R + 'B492946981/' },
        { text: 'A diner of about twenty years praised the owner\'s personality — August 2026.', source: R + 'B535118859/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 祇園ごずこん、海鮮・日本料理・居酒屋、東山区新橋通花見小路東入ル2丁目橋本町417、三条京阪駅・祇園四条駅から徒歩7分、火〜土 18:00〜23:00、日祝 18:00〜22:00、月曜と第1・3日曜休み、サービス料: なし、8席 (カウンター)、6月17日にリニューアル、ジャンルにとらわれない創作料理 (和食、洋食、餃子、ラーメン、パスタ)、契約農家の野菜、地鶏、和牛、全国の鮮魚、お任せの前菜3品のあとアラカルト、ワインリストは出さず会話で選ぶ、名物ごずこん餃子、和洋割烹。口コミ (2022年6月〜2026年8月): 毛蟹、サーロインのかぶり、炊き込みご飯、だし巻き、鱧の焼き物、Kyoto Akadori の鶏、雲丹と鮪と卵黄、故やしきたかじんさんの注文で生まれた餃子 (2025年2月、日本語)、約20年通う客。',
      confidence: 'medium', sources: [TB, SITE, R + 'B427966918/', R + 'B473299950/', R + 'B486749744/', R + 'B488968507/', R + 'B491279436/', R + 'B492946981/', R + 'B501693954/', R + 'B525019421/', R + 'B528278661/', R + 'B535118859/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; wine by conversation, no list; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通花見小路東入ル2丁目橋本町417',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005616, 135.776354); cross-checked: GSI 京都府京都市東山区橋本町417番地 (lot) 53m; 12 m from kyoto_kyoya_kiyomizu_gion_shinbashi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Gozukon gyoza', '', 'Signature', 'no', 'no', '', 'gozukon_gyoza'),
      it('', '', 'Three chef\'s-choice starters', '', 'Starters', 'ask', 'no', '', 'starters'),
    ] }, {
    cuisine: 'ジャンルにとらわれない「和洋割烹」: お任せの前菜3品のあと、和食、洋食、餃子、ラーメン、パスタをアラカルトで。契約農家の野菜、地鶏、和牛、全国の鮮魚。ワインは会話で選ぶ (食べログ)・口コミの料理: 名物ごずこん餃子、毛蟹、サーロインのかぶり、炊き込みご飯、だし巻き、鱧の焼き物、Kyoto Akadori の鶏のもも、雲丹と鮪と卵黄、筍の若竹煮、冷製のコーンスープ、おにぎり (2022〜26年の口コミ)',
    neighborhood: '祇園、花見小路の東の新橋通。祇園四条駅から徒歩7分',
    gf_detail: '要確認。餃子、パスタ、ラーメン、揚げ物、和の皿。グルテンの情報はない (食べログ、2022〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、地鶏、和牛、肉の餃子 (食べログ、2024〜26年の口コミ)。',
    notes: '[和洋割烹とワイン・祇園新橋] 花見小路から入った8席のカウンター。和の皿、パスタ、ラーメン、肉々しい名物の餃子などジャンルを問わない料理に、リストではなく会話で選ぶワインを合わせる。前菜3品のあとは好きに注文、1万5千〜2万5千円ほど。20年通う常連も。月曜休み。',
  });
}

// ================================================================ 菊乃井 鮨 青
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042531/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kikunoi-sushi-ao.com';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_kikunoi_sushi_ao', name: '菊乃井 鮨 青 (Kikunoi Sushi Ao)', category: 'OMNI',
    lat: 34.999909, lng: 135.779688, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Sushi with soy, alternating with kaiseki dishes on dashi; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and fish kaiseki (2025–26 reviews).',
    hours_raw: '15:00–22:00, last seating 19:00; closed Tuesday and over Obon and New Year (Tabelog). Reservation only, through OMAKASE (Tabelog). No children (Tabelog). 10 seats over two rooms of five, at counters; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog; October 2026). Bills about ¥30,000–59,999 a head (2025–26 reviews). In a quiet alley off the stone-paved Shimogawara-dori near Kodai-ji (2025–26 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogawara near Kodai-ji, Higashiyama — 15 min walk from Gion-Shijo Stn',
    cuisine: 'Sushi kaiseki from Kikunoi, alternating sushi and Kyoto dishes, served on Kitaoji Rosanjin and other fine ware that guests may choose from the shelves (2025–26 reviews) · in reviews: tai-roe tofu with konowata, karasumi wrapped in squid, kinome tofu, sea-urchin tofu, kisu, torigai, sea bream, akami and toro, Densuke anago soup, charcoal-grilled sweet shrimp, filefish, a dish of crab and caviar (2025–26 reviews)',
    website: SITE, gmaps: gm('菊乃井 鮨 青 京都'), menu_url: null,
    notes: "[Sushi kaiseki · near Kodai-ji, from Kikunoi] The famous Kyoto ryotei Kikunoi's sushi counter: ten seats in two rooms down a quiet Higashiyama alley, where sushi alternates with kaiseki dishes and you can pick your plate from shelves of Rosanjin ware. Once for regulars only, now bookable online. Around ¥30,000–50,000. No children; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Kikunoi group (no person named in the sources)'], origin: null,
      background: 'Per 2025–26 reviews: a sushi kaiseki restaurant of the long-established Kyoto ryotei Kikunoi (our record kyoto_kikunoi_honten), first an exclusive room for regulars (August 2025) and opened to the public in 2025 (October 2026); reached by booking through OMAKASE (Tabelog).',
      philosophy: null, specialty: 'Sushi alternating with kaiseki; Rosanjin tableware.',
      anecdotes: [
        { text: 'An August 2025 regular of the main Kikunoi could ask for a particular Rosanjin piece and have a dish served on it.', source: R + 'B511604035/' },
        { text: 'A July 2026 guest at first thought grilling sweet shrimp over charcoal was excessive — until tasting it.', source: R + 'B532585068/' },
        { text: 'A diner without contacts got in in August 2025 only through a friend\'s connection.', source: R + 'B511573847/' },
      ],
      japanese_sources_summary: '食べログ: 菊乃井 鮨 青、寿司、東山区下河原通463-30、15:00〜22:00 (最終入店19:00)、火曜休み、お盆と年末年始休み、完全予約制 (OMAKASE から)、10席 (カウンター)、子供不可、カード可。口コミ (2025年6月〜2026年10月、英語): 菊乃井の鮨懐石、常連向けから2025年に一般公開、2室各5席、Rosanjin の器、器を選べる、鯛の子豆腐とこのわた、イカで巻いたからすみ、雲丹豆腐、鱚、鳥貝、鮪、Densuke 穴子の椀、炭火の甘海老、皮剥、蟹とキャビア、高台寺近くの路地。',
      confidence: 'medium', sources: [TB, SITE, R + 'B508146776/', R + 'B511249064/', R + 'B511573847/', R + 'B511604035/', R + 'B516897966/', R + 'B517510780/', R + 'B517578987/', R + 'B532293506/', R + 'B532585068/', R + 'B538309301/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book through OMAKASE; no children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区下河原通463-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999909, 135.779688); GSI found no match for 京都府京都市東山区下河原通463-30 (the address names no town), so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices read; reviewers report about ¥30,000–59,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Sushi kaiseki omakase', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '寿司と京料理を交互に出す菊乃井の鮨懐石。Rosanjin などの器は棚から客が選べる (2025〜26年の口コミ)・口コミの料理: 鯛の子豆腐とこのわた、イカで巻いたからすみ、木の芽豆腐、雲丹豆腐、鱚、鳥貝、鯛、赤身とトロ、Densuke 穴子の椀、炭火の甘海老、皮剥、蟹とキャビアの皿 (2025〜26年の口コミ)',
    neighborhood: '高台寺近くの下河原、東山。祇園四条駅から徒歩15分',
    gf_detail: '予約時に要確認。醤油の寿司と出汁の懐石を交互に。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と魚の懐石 (2025〜26年の口コミ)。',
    notes: '[鮨懐石・高台寺近く、菊乃井] 京都の名料亭、菊乃井の鮨のカウンター。東山の静かな路地に2室で10席、寿司と懐石が交互に出て、Rosanjin の器を棚から選べる。かつては常連向けで、いまはネットで予約できる。3万〜5万円ほど。子供不可、火曜休み。',
  });
}

// ================================================================ RAU
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033441/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://goodnaturestation.com/shop/rau/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_rau_good_nature', name: 'RAU', category: 'OMNI',
    lat: 35.002446, lng: 135.769061, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cakes, pies, cookies and chocolate; Tabelog says allergy information is available (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An August 2026 reviewer had a plant-based "botanical vanilla" gelato; most cakes and sweets use butter, cream and cheese (2026 reviews).',
    hours_raw: '11:00–19:00, closing days not fixed (Tabelog). No bookings; a waiting number by tablet at busy times (October 2026). Takeaway sweets on the 1st floor; eat-in café on the 3rd floor of the building, a separate listing (Tabelog). Cards and PayPay; allergy and calorie information available; children welcome (Tabelog). Parking free for 2 hours with ¥5,000 spent at GOOD NATURE STATION or Takashimaya Kyoto (Tabelog). 2 min from Kyoto-Kawaramachi Stn exit 4 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Shijo, in GOOD NATURE STATION — 2 min from Kyoto-Kawaramachi Stn',
    cuisine: 'Patisserie and bean-to-bar chocolate known for sculptural cakes (2026 reviews) · gelato: smoked cheese, aroma-chocolate strawberry single ¥660 + ¥200, cassis cabbage, double ¥990; plant-based botanical vanilla (2026 reviews) · seasonal plated desserts such as fig with several cheeses; cocoa kakigori ¥2,200 in summer; cinnamon pie with figs; caramel sandwich cookie with salted praline; "Nami-Nami" six-piece biscuits as gifts (2026 reviews)',
    website: SITE, gmaps: gm('RAU GOOD NATURE STATION 京都'), menu_url: SITE,
    notes: "[Patisserie & chocolate · Kawaramachi] A stylish patisserie in the GOOD NATURE STATION building, famous for artful cakes and bean-to-bar chocolate, with unusual gelato (smoked cheese, cassis-cabbage) and a plant-based vanilla. Take away downstairs or eat in at the leafy 3rd-floor café. About ¥1,000–3,000. Open daily 11:00–19:00.",
    chef_bio: { chef_name: null, roles: ['Shop of GOOD NATURE STATION (no person named)'], origin: null,
      background: 'Opened 9 December 2019 (Tabelog), in GOOD NATURE STATION, whose 3rd-floor café serves RAU sweets with regional coffee, Japanese black tea and chocolate drinks (Tabelog remarks).',
      philosophy: null, specialty: 'Artistic cakes; bean-to-bar chocolate.',
      anecdotes: [
        { text: 'An August 2026 third-timer found the summer cocoa kakigori smaller than expected for ¥2,200.', source: R + 'B535620303/' },
        { text: 'A September 2026 guest made several takeaway requests and all were met with a smile.', source: R + 'B535957293/' },
        { text: 'On a Sunday evening in October 2026 a gelato fan took a tablet number and waited about 15 minutes.', source: R + 'B537663007/' },
      ],
      japanese_sources_summary: '食べログ: RAU、ケーキ・チョコレート・パン、下京区河原町四条下ル2稲荷町318-6 GOOD NATURE STATION 1F、阪急京都河原町駅4番出口から徒歩2分、11:00〜19:00、不定休、予約不可、カード・PayPay 可、アレルギー表示・カロリー表示あり、テイクアウト、2019年12月9日オープン、3階のカフェスペースは別掲載。口コミ (2026年6〜10月、英語): 芸術的なケーキ、ビーン・トゥ・バーのチョコレート、スモークチーズのジェラート、プラントベースのバニラ、カシスとキャベツ、無花果とチーズのデザート、ココアのかき氷2,200円、シナモンパイ、塩プラリネのキャラメルサンド、Nami-Nami 6個入り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B528821539/', R + 'B532420862/', R + 'B533358341/', R + 'B533517989/', R + 'B535496239/', R + 'B535620303/', R + 'B535957293/', R + 'B537372573/', R + 'B537496527/', R + 'B537663007/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in; tablet queue numbers when busy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町四条下ル2稲荷町318-6 GOOD NATURE STATION 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'GOOD NATURE STATION shop page and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002386, 135.769061), moved ~6.7 m north to 35.002446 because kyoto_nikolabo is pinned 4.4 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区稲荷町318番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537663007/', R + 'B535620303/'],
    price_note: 'No price list read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gelato, double', '¥990', 'Gelato', 'ask', 'ask', 'October 2026 review.', 'gelato_double'),
      it('', '', 'Cocoa kakigori (summer)', '¥2,200', 'Seasonal', 'ask', 'no', 'August 2026 review.', 'cocoa_kakigori'),
    ] }, {
    cuisine: '彫刻のようなケーキで知られるパティスリーとビーン・トゥ・バーのチョコレート (2026年の口コミ)・ジェラート: スモークチーズ、アロマチョコと苺のシングル660円+200円、カシスとキャベツ、ダブル990円、プラントベースのボタニカルバニラ (2026年の口コミ)・無花果と数種のチーズなどの季節の皿盛りデザート、夏のココアのかき氷2,200円、無花果入りのシナモンパイ、塩プラリネのキャラメルサンド、贈答用の Nami-Nami 6個入り (2026年の口コミ)',
    neighborhood: '四条の南の河原町、GOOD NATURE STATION の中。京都河原町駅から徒歩2分',
    gf_detail: '要確認。ケーキ、パイ、クッキー、チョコレート。食べログではアレルギー表示あり (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。2026年8月の口コミではプラントベースの「ボタニカルバニラ」のジェラートがあったが、ケーキや菓子の多くはバター、クリーム、チーズを使う (2026年の口コミ)。',
    notes: '[パティスリーとチョコレート・河原町] GOOD NATURE STATION の中のおしゃれなパティスリー。芸術的なケーキとビーン・トゥ・バーのチョコレートで知られ、スモークチーズやカシスとキャベツなど変わり種のジェラートやプラントベースのバニラも。1階で持ち帰りか、緑の多い3階のカフェで。1千〜3千円ほど。11時〜19時、毎日営業。',
  });
}

save();
