// Kyoto priority (kyoto-missed), worker osw13, batch 43 — lane: Tabelog id mod 6 = 0.
// Core: お立ち処 鮨㐂。, 風の家 三条店. Notable: 町家四川 星月夜, 鶏菜 ヨコドリ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ お立ち処 鮨㐂。
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042430/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_otachidokoro_sushi_ki', name: 'お立ち処 鮨㐂。 (Otachidokoro Sushi Ki.)', category: 'OMNI',
    lat: 35.004492, lng: 135.760866, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Edomae nigiri on red-vinegar rice, with simmered anago, marinated fish and red miso soup in the course (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish nigiri course with red miso soup and tamagoyaki (2026 reviews).',
    hours_raw: 'Tabelog: daily including holidays 12:00–14:30 and 18:00–22:00; open year-round. Bookings taken. 14 places at a standing counter (no chairs; a March 2026 diner wished for one); private hire up to 20; non-smoking; children welcome if they eat the adult course; menus in English and Chinese, Chinese-speaking staff (Tabelog); chefs who speak English (August 2026). Cards and QUICPay; no QR (Tabelog). No service charge listed on Tabelog.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just north of Shijo — 2 min walk from Hankyu Karasuma Stn',
    cuisine: 'Standing Edomae sushi bar on red-vinegar rice · a 12-piece course ¥7,700 at lunch and dinner, with red miso soup and tamagoyaki, extra pieces to order (2026 reviews) · seen: chutoro, kombu-cured sea bream, kinmedai, toro sawara, week-aged shima-aji, yuzu-pepper yellowtail, kombu-cured salmon, scallop, barracuda, kohada, herring box sushi, simmered anago, crab with crab miso, toro-taku hand roll (2026 reviews) · sake and shochu (Tabelog)',
    website: null, gmaps: gm('お立ち処 鮨㐂 阪東屋町'), menu_url: null,
    notes: '[Sushi · Shijo-Karasuma, standing Edomae counter] A clean standing sushi bar a couple of minutes from Karasuma, with a small garden beyond the counter: a 12-piece Edomae course on red-vinegar rice for ¥7,700, from chutoro and aged shima-aji to herring box sushi and a toro-taku roll, then extras to order. Chefs explain the fish in Japanese, English and Chinese, and many guests are from overseas. Diners call it great value; one wished for a chair over a full course, another wanted more rice under the large toppings.',
    chef_bio: { chef_name: null, roles: ['Several sushi chefs (2026 reviews); not named in a source'], origin: null,
      background: 'A standing Edomae sushi counter just north of Shijo, 2 min from Hankyu Karasuma Stn (Tabelog). Reviewers in 2026 describe a team of chefs who speak Japanese, English and Chinese, red-vinegar rice, aged toppings and a small garden beyond the counter; an August 2026 diner heard the chef changes from time to time.',
      philosophy: null,
      specialty: 'Twelve-piece Edomae course; aged toppings.',
      anecdotes: [
        { text: '"Still, I wish there were chairs." — March 2026; a proper course does not finish in 20–30 minutes.', source: R + 'B524896092/' },
        { text: '"When the fish is large and the rice is minimal, it feels more like eating sashimi than sushi." — August 2026.', source: R + 'B533621522/' },
        { text: 'A September 2026 diner watched the team serve a family with a small child, a couple and a guest from China in Japanese, English and Chinese; two extra pieces and two hot shochu brought the bill to ¥10,340.', source: R + 'B535953610/' },
        { text: '"However, since most of the customers were from overseas, it felt a bit lacking in calmness." — September 2026.', source: R + 'B537031133/' },
      ],
      japanese_sources_summary: '食べログ: お立ち処 鮨㐂。、立ち食い寿司、中京区東洞院通錦小路下る阪東屋町664番地7、阪急烏丸駅から徒歩2分、毎日 12:00〜14:30・18:00〜22:00、年中無休、予約可、14席 (カウンター、立ち飲みも)、貸切20名まで、禁煙、大人と同じコースを食べられる子供は可、英語・中国語のメニュー、中国語のスタッフ、カード・QUICPay 可、QR不可。口コミ (2025年7月〜2026年11月、英語): 江戸前12貫のコース7,700円 (昼夜)、赤酢のシャリ、熟成のネタ、中トロ、鯛の昆布締め、金目鯛、トロさわら、一週間熟成のシマアジ、柚子胡椒のぶり、昆布締めのサーモン、帆立、かます、こはだ、鰊の箱寿司、煮穴子、蟹味噌和え、トロたく手巻き、赤だし、玉子、追加注文可、英語と中国語で対応、海外からの客が多い、椅子が欲しい、シャリが少なめという声。',
      confidence: 'medium', sources: [TB, R + 'B510994117/', R + 'B520277806/', R + 'B524896092/', R + 'B524957797/', R + 'B531723804/', R + 'B533621522/', R + 'B534551832/', R + 'B535953610/', R + 'B537031133/', R + 'B538530447/'] },
    cultural_comfort: { level: 'english', note: 'Chefs speak English and Chinese (2026 reviews); English and Chinese menus (Tabelog); standing only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通錦小路下る阪東屋町664番地7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004446, 135.760866) moved 5 m north to (35.004492, 135.760866): the Tabelog point was 1.1 m from kyr_ramen_kura (pin_source "阪東屋町664番地", the same lot); now 6.1 m from it; cross-checked: GSI 京都府京都市中京区阪東屋町664番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524957797/', R + 'B538530447/'],
    price_note: 'Course price from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Edomae nigiri course, 12 pieces (lunch and dinner)', '¥7,700', 'Course', 'ask', 'no', 'March and November 2026.', 'omakase'),
    ] }, {
    cuisine: '赤酢のシャリの立ち食いの江戸前寿司・昼夜とも12貫のコース7,700円、赤だしと玉子付き、追加注文可 (2026年の口コミ)・これまでのネタ: 中トロ、鯛の昆布締め、金目鯛、トロさわら、一週間熟成のシマアジ、柚子胡椒のぶり、昆布締めのサーモン、帆立、かます、こはだ、鰊の箱寿司、煮穴子、蟹の身と蟹味噌、トロたく手巻き (2026年の口コミ)・日本酒と焼酎 (食べログ)',
    neighborhood: '四条のすぐ北の東洞院通。阪急烏丸駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。赤酢のシャリの江戸前握りで、コースには煮穴子、漬けの魚、赤だしもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚の握りのコースに赤だしと玉子 (2026年の口コミ)。',
    notes: '[寿司・四条烏丸、立ち食いの江戸前] 烏丸から2分、カウンターの向こうに小さな庭が見える清潔な立ち食い寿司。赤酢のシャリの江戸前12貫が7,700円で、中トロや熟成シマアジから鰊の箱寿司、トロたく巻きまで、あとは追加で。職人が日本語、英語、中国語でネタを説明し、海外からの客が多い。値打ちという声が多い一方、コースの間ずっと立つので椅子が欲しい、大きなネタにシャリが少ないという声も。',
  });
}

// ================================================================ 風の家 三条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005068/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://techtas.wixsite.com/kazenoya';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_kaze_no_ie_sanjo', name: '風の家 三条店 (Kaze no Ie Sanjo)', category: 'OMNI',
    lat: 35.009374, lng: 135.772685, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki, okonomiyaki, yakisoba and yaki udon are all wheat (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the takoyaki is seasoned with bonito dashi (2026 reviews); okonomiyaki and noodles come with pork, squid or egg (official menu).',
    hours_raw: 'Tabelog: daily 10:00–19:00. Bookings taken. 10 counter seats; take-out; designated smoking area (Tabelog). No cards; e-money and QR accepted (Tabelog). No service charge listed on Tabelog. On the second basement floor of the 京阪三条北ビル, by the Keihan Sanjo ticket gates; a reviewer says it has been there at least 20 years (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside Keihan Sanjo Station, by the ticket gates (B2F of the 京阪三条北ビル)',
    cuisine: 'Takoyaki, okonomiyaki and yakisoba counter in the station · official menu: takoyaki 7 for ¥400 or 11 for ¥580, with yuzu ponzu or mentaiko mayo options; okonomiyaki pork or squid ¥580, mixed ¥680; yakisoba from ¥520; yaki udon, omusoba, modan-yaki; tonpei-yaki ¥400; gyoza; teppan dashimaki ¥400; draft beer from ¥420 · a 2026 review gives 8 original takoyaki for ¥550 · plate lunch until 15:00 of pork okonomiyaki with half yakisoba and salad, ¥1,000 (April 2026; the official menu shows ¥850) · ¥1,000 quick-drink set of draft beer, edamame and one dish (2025–2026 reviews)',
    website: SITE, gmaps: gm('風の家 三条店 京阪三条'), menu_url: SITE,
    notes: '[Takoyaki & okonomiyaki · Keihan Sanjo Station] A ten-seat counter by the Keihan Sanjo ticket gates, there for at least 20 years, frying takoyaki, okonomiyaki and yakisoba for commuters and take-away families. The ¥1,000 quick-drink set — beer, edamame and takoyaki — is the draw. Reviews are mixed: some found the takoyaki crisp and dashi-rich, others lukewarm or undercooked, and the yakisoba ordinary. No cards.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Tabelog introduces a counter-only shop just outside the Keihan Sanjo ticket gates for okonomiyaki, takoyaki and yakisoba, with take-out. An April 2026 reviewer says it has been in business for at least 20 years. The shop’s menu site (© 2019) is headed 風の家 三条店; no other branch is listed there or found on the web.',
      philosophy: null,
      specialty: 'Takoyaki; quick-drink set.',
      anecdotes: [
        { text: '"The takoyaki was more warm than freshly made, and the outer skin was overcooked and thick." — December 2025.', source: R + 'B519616490/' },
        { text: 'A February 2026 diner found every takoyaki burst with runny batter — "not so much gooey as it was undercooked" — while families bought several packs to take home.', source: R + 'B522946535/' },
        { text: '"The large takoyaki was exquisite, with a rich bonito dashi flavor." — September 2026.', source: R + 'B537715132/' },
      ],
      japanese_sources_summary: '公式のメニューサイト (techtas.wixsite.com/kazenoya、© 2019): 風の家 三条店、たこ焼き (味付き) 7個400円・11個580円、ゆずポン酢、明太マヨ、お好み焼ブタ・イカ580円、ミックス680円、焼きそば520円〜、焼きうどん、オムそば、モダン焼き、豚平焼400円、焼き餃子、鉄板だし巻き400円、プレートランチ (〜15時) 850円〜、生ビール420円〜、ちょい飲みセット。食べログ: たこ焼き・お好み焼き、東山区三条通大橋東入ル大橋町124 京阪三条北ビルB2F、京阪三条駅の改札のすぐ外、毎日 10:00〜19:00、予約可、カウンター10席、テイクアウト、分煙、カード不可、電子マネー・QR可。口コミ (2025年12月〜2026年10月、英語): ちょい飲みセット1,000円 (生ビール、枝豆、一品)、たこ焼き8個550円 (2026年10月)、プレートランチ1,000円 (2026年4月)、焼きそばいか700円、少なくとも20年の店、たこ焼きがぬるい・生焼けという声とカリッとしてだしが効いているという声、焼きそばは普通。',
      confidence: 'low', sources: [TB, SITE, R + 'B508187506/', R + 'B519616490/', R + 'B521163393/', R + 'B522946535/', R + 'B523800367/', R + 'B525555025/', R + 'B526512766/', R + 'B535089353/', R + 'B536788191/', R + 'B537715132/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; quick and casual; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通大橋東入ル大橋町124 京阪三条北ビル B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009374, 135.772685); cross-checked: GSI 京都府京都市東山区大橋町124番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B536788191/', R + 'B526512766/'],
    price_note: 'Prices from the official menu page (© 2019); 2026 reviews show some higher prices.', last_checked: TODAY, items: [
      it('たこ焼き（味付き）', '', 'Takoyaki, 7 / 11 pieces', '¥400 / ¥580', 'Takoyaki', 'no', 'no', 'Official menu; 8 for ¥550 in October 2026.', 'takoyaki'),
      it('お好み焼 ミックス', '', 'Okonomiyaki, mixed', '¥680', 'Okonomiyaki', 'no', 'no', 'Official menu.', 'okonomiyaki'),
      it('焼きそば ブタ・イカ', '', 'Yakisoba, pork or squid', '¥520', 'Noodles', 'no', 'no', 'Official menu; ¥700 in March 2026.', 'yakisoba'),
      it('豚平焼（野菜入り）', '', 'Tonpei-yaki with vegetables', '¥400', 'Teppan', 'no', 'no', '', 'tonpeiyaki'),
      it('', '', 'Quick-drink set: draft beer, edamame and one dish', '¥1,000', 'Set', 'no', 'no', '2025–2026 reviews.', 'set'),
    ] }, {
    cuisine: '駅のたこ焼き・お好み焼き・焼きそばのカウンター・公式メニュー: たこ焼き7個400円・11個580円、ゆずポン酢や明太マヨも、お好み焼ブタ・イカ580円、ミックス680円、焼きそば520円〜、焼きうどん、オムそば、モダン焼き、豚平焼400円、焼き餃子、鉄板だし巻き400円、生ビール420円〜・2026年の口コミではたこ焼き8個550円・15時までのプレートランチ (豚玉と焼きそば半分とサラダ) 1,000円 (2026年4月、公式メニューは850円)・生ビール、枝豆、一品の1,000円のちょい飲みセット (2025〜2026年の口コミ)',
    neighborhood: '京阪三条駅の改札のそば (京阪三条北ビル地下2階)',
    gf_detail: 'グルテンフリーではない: たこ焼き、お好み焼き、焼きそば、焼きうどんはすべて小麦 (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可: たこ焼きは鰹だしの味付け (2026年の口コミ)、お好み焼きや麺は豚、イカ、卵入り (公式メニュー)。',
    notes: '[たこ焼き・お好み焼き・京阪三条駅] 京阪三条の改札のそばのカウンター10席で、少なくとも20年、通勤客や持ち帰りの家族にたこ焼き、お好み焼き、焼きそばを焼く。ビール、枝豆、たこ焼きの1,000円のちょい飲みセットが人気。評価は分かれ、たこ焼きがカリッとしてだしが効いているという声と、ぬるい・生焼けという声、焼きそばは普通という声。カード不可。',
  });
}

// ================================================================ 町家四川 星月夜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26026620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://hoshitsukiyo.kyoto/';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_machiya_shisen_hoshitsukiyo', name: '町家四川 星月夜 (Machiya Shisen Hoshitsukiyo)', category: 'MOM_AND_POP',
    lat: 35.001476, lng: 135.753540, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the official site invites guests to discuss allergies. Courses include soy- and bean-paste sauces, mapo tofu rice or noodles to finish (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of shark fin, shrimp, fish, Kyoto pork, chicken and beef (official site; 2024–2026 reviews).',
    hours_raw: 'Official site and Tabelog: Mon and Wed–Sun 11:30–14:30 (L.O. 14:00) and 17:00–22:00 (L.O. 21:00); closed Tuesday and some irregular days. Courses only, for two or more (official site); bookings taken. Service charge 10% at dinner only (official site; Tabelog, Japanese original 「夜のみサービス料10%」). Smart-casual dress; no sandals, T-shirts acceptable (July 2025); children only in private rooms, no children’s chairs (Tabelog). 30 seats: 24 at tables, a private room for 6; non-smoking; cards, no e-money or QR (Tabelog). Opened 25 November 2015 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Shijo-Horikawa — 10 min walk from Hankyu Omiya Stn and Shijo Stn',
    cuisine: 'Sichuan cooking with Kyoto ingredients in a century-old machiya (Tabelog) · lunch courses ¥4,000, ¥6,000, ¥9,000; dinner courses ¥9,900 and ¥14,300 plus 10% service (official site, from July 2024) · dishes seen: six-flavour appetizers (bang bang chicken, spicy beef, jellyfish), braised shark fin with Shanghai crab roe, shrimp in chili sauce, black sea bream in white chili oil, Kyoto Ajiwai chicken, Kyoto beef in Sichuan sauce, mapo tofu rice or dan dan noodles, almond tofu, Chinese teas (2024–2026 reviews; official site) · glass drinks ¥500 (November 2024)',
    website: SITE, gmaps: gm('町家四川 星月夜 風早町'), menu_url: SITE,
    notes: '[Sichuan · near Shijo-Horikawa, a hundred-year-old machiya] Sichuan cooking with Kyoto vegetables in a renovated machiya with a courtyard, run by an owner-chef from Tokyo’s Sichuan houses and an owner-manager from hotel service. Courses only: six small appetizers, shark fin, shrimp in chili sauce, then mapo tofu rice or noodles — lighter and less oily than diners expected, with mild options for those who avoid heat. Lunch from ¥4,000; dinner from ¥9,900 plus 10%. Smart casual. Closed Tuesday.',
    chef_bio: { chef_name: '遠藤 浄 (owner-chef, per the official site; no reading in a source)', roles: ['Owner and chef (official site: オーナー／シェフ 遠藤 浄)', 'Co-owner and manager 佐藤 幹夫 (official site: オーナー／支配人)'], origin: 'Born 1962 in 長野県安曇野市 (official site).',
      background: 'Per the official site: the chef joined 株式会社揚子江 in 1982 and trained at well-known Chinese restaurants including 獅子琳, 翠園 and 翠凰, joined 株式会社グリーンハウス 謝朋殿 in 1998 and was head chef at its restaurants, then head chef of 四川豆花飯荘 東京店 from its opening in 2007. The co-owner and manager 佐藤 幹夫, born 1963 in 秋田県横手市, joined 東京丸の内パレスホテル in 1982, worked at 浦安ブライトンホテル, joined 謝朋殿 in 1998 and managed 四川豆花飯荘 東京店 from 2007. Opened in Kyoto on 25 November 2015 (Tabelog), in a machiya about a hundred years old.',
      philosophy: 'Official site: Kyoto ingredients and freshly picked seasonal produce reborn as Sichuan cooking, in a machiya whose old pillars and fittings give a timeless ease.',
      specialty: 'Sichuan courses with Kyoto vegetables; shark fin; mapo tofu rice.',
      anecdotes: [
        { text: 'A July 2025 diner was told sandals are not allowed under the smart-casual dress code, but T-shirts are fine.', source: R + 'B509631977/' },
        { text: '"All glass drinks, both soft drinks and alcohol, are just JPY 500." — November 2024.', source: R + 'B198141073/' },
        { text: 'A family celebrating a son’s birthday in February 2026 found the food light, close to medicinal cooking, with mild dishes for those who avoid spice.', source: R + 'B522361657/' },
        { text: '"The spicy stir-fried squid and vegetables were a bit too spicy for me, but I still found them delicious." — March 2025.', source: R + 'B503014206/' },
      ],
      japanese_sources_summary: '公式サイト (hoshitsukiyo.kyoto): 町家四川 星月夜、こだわりの京食材と採れたての旬の素材の四川料理、町家造りの古い柱や建具の温もり、オーナー／支配人 佐藤 幹夫、オーナー／シェフ 遠藤 浄、昼11:30〜14:30 (L.O. 14:00)、夜17:00〜22:00 (L.O. 21:00)、火曜と不定休、ディナーはサービス料10%、2024年7月からランチコース4,000円・6,000円・9,000円、ディナーコース9,900円・14,300円 (税込、サービス料別)、各コース2名から、アレルギーは相談を、遠藤 浄は1962年長野県安曇野市生まれ、1982年株式会社揚子江、獅子琳・翠園・翠凰で修業、1998年株式会社グリーンハウス謝朋殿、各店の料理長、2007年四川豆花飯荘東京店の料理長、佐藤 幹夫は1963年秋田県横手市生まれ、1982年東京丸の内パレスホテル、浦安ブライトンホテル、1998年謝朋殿、2007年四川豆花飯荘東京店の支配人。食べログ: 四川料理・中華料理、下京区油小路通仏光寺上ル風早町582、30席 (テーブル24、個室6)、禁煙、スマートカジュアル、子供は原則個室のみ、カード可、2015年11月25日オープン、築100年の町家。口コミ (2024年11月〜2026年2月、英語): 六味前菜、フカヒレと上海蟹みそ、海老のチリソース、黒鯛の白い辣油煮、京あじわい鶏、麻婆豆腐ご飯か担々麺、杏仁豆腐、中国茶、グラスドリンク500円、サンダル不可、中庭、油が少なく薬膳のよう、辛すぎるという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B198141073/', R + 'B481834444/', R + 'B501937126/', R + 'B503014206/', R + 'B509631977/', R + 'B515479000/', R + 'B518627553/', R + 'B519311780/', R + 'B521701752/', R + 'B522361657/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses for two or more, booked ahead; smart casual, no sandals; allergies by arrangement.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区油小路通仏光寺上ル風早町582',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (osechi 2027 page) and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.001476, 135.753540); cross-checked: GSI 京都府京都市下京区風早町582番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Course prices from the official site’s July 2024 price notice; dinner adds 10% service.', last_checked: TODAY, items: [
      it('ランチコース', '', 'Lunch course', '¥4,000 / ¥6,000 / ¥9,000', 'Lunch', 'ask', 'no', 'Tax included; two or more.', 'lunch_course'),
      it('ディナーコース', '', 'Dinner course', '¥9,900 / ¥14,300', 'Dinner', 'ask', 'no', 'Tax included; 10% service extra.', 'course'),
    ] }, {
    cuisine: '築100年の町家の京食材の四川料理 (食べログ)・ランチコース4,000円・6,000円・9,000円、ディナーコース9,900円・14,300円とサービス料10% (公式サイト、2024年7月から)・これまでの料理: 六味前菜 (棒棒鶏、牛肉の辛味煮、くらげ)、フカヒレと上海蟹みその煮込み、海老のチリソース、黒鯛の白い辣油煮、京あじわい鶏、京都牛の四川ソース、麻婆豆腐ご飯か担々麺、杏仁豆腐、中国茶 (2024〜2026年の口コミ、公式サイト)・グラスドリンク500円 (2024年11月)',
    neighborhood: '仏光寺の北の油小路通、四条堀川の近く。阪急大宮駅・四条駅から徒歩10分',
    gf_detail: '予約時に要確認: 公式サイトはアレルギーの相談を受けている。コースには醤油や豆板醤のソース、〆の麻婆豆腐ご飯や麺がある (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: フカヒレ、海老、魚、京都の豚、鶏、牛のコース (公式サイト、2024〜2026年の口コミ)。',
    notes: '[四川料理・四条堀川近く、築100年の町家] 中庭のある町家を改装した店で、京野菜の四川料理。東京の四川料理店で腕をふるったオーナーシェフと、ホテル出身のオーナー支配人が営む。コースのみで、六味前菜、フカヒレ、海老のチリソース、〆に麻婆豆腐ご飯か麺。思ったより油が少なく軽く、辛いのが苦手な人向けの料理もあるという声。昼4,000円から、夜9,900円からとサービス料10%。スマートカジュアル。火曜休み。',
  });
}

// ================================================================ 鶏菜 ヨコドリ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042046/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://isozumi.jp/yokodori/index.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_torisai_yokodori', name: '鶏菜 ヨコドリ (Torisai Yokodori)', category: 'OMNI',
    lat: 35.003163, lng: 135.765890, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; courses include fried dishes, chazuke and ramen to finish, and soy-based seasonings (2026 reviews; official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Tamba black chicken skewers and a chicken-broth hot pot (official site).',
    hours_raw: 'Official site: 17:00–23:00 (last entry 21:00); Tabelog: closed Thursday. Courses only (2026 reviews). Counter courses start together every hour with two-hour seating; the hot-pot courses upstairs need booking the day before and allow three hours (official site). 32 seats: 16 at the counter, 16 at tables upstairs; private rooms; non-smoking; cards, e-money and QR (Tabelog). The toilet is outside the restaurant (July 2026). No service charge listed on Tabelog. Opened 21 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'An alley off Shijo-Fuyacho — 257 m from Kyoto Kawaramachi Stn',
    cuisine: 'Yakitori of Tamba black chicken over Kishu binchotan with Kyoto vegetables from the group’s own farm (official site) · counter omakase course ¥8,000 with drinks (¥7,000 with soft drinks only); upstairs Tamba black chicken hot pot ¥6,500, hot pot and yakitori ¥8,000, drinks included (official site, 2026) · earlier: counter courses ¥2,200, ¥3,800 and ¥5,800, hot pot ¥6,000 and ¥8,000 (February 2026) · seen: chicken tataki, chawanmushi in chicken broth, wings basted in chicken fat, watercress tsukune, black-bean mascarpone, chicken-broth chazuke and ramen (2026 reviews) · whisky made with Nagahama Distillery (June 2026)',
    website: SITE, gmaps: gm('鶏菜 ヨコドリ 八文字町'), menu_url: SITE,
    notes: '[Yakitori · Shijo-Fuyacho, chicken and farm vegetables] Down an alley off Shijo, a renovated house with a sixteen-seat U-shaped counter round the binchotan grill and hot-pot tables upstairs, from the local 五十家 group. Tamba black chicken skewers alternate with vegetables from the group’s own farm; wings are basted in chicken fat for a burst of flame. Now one omakase with drinks for ¥8,000. Diners praise the cheerful staff; one found the portions small for the price, another the endings repetitive. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner with a yakitori background (official site); not named. One of the 五十家グループ restaurants'], origin: null,
      background: 'Per the official site: a hidden yakitori shop in an alley off Shijo-Fuyacho, part of the 五十家グループ, grilling Tamba black chicken chosen by an owner who came from yakitori, with Kyoto vegetables from the group’s own farm, ISO FARM, and nearby growers, cooked over Kishu binchotan; vegetables are also simmered, pickled and steamed. Opened 21 December 2024 (Tabelog).',
      philosophy: 'Official site: 「鶏と野菜をもっと美味しく」 — making chicken and vegetables even more delicious.',
      specialty: 'Tamba black chicken yakitori; chicken hot pot.',
      anecdotes: [
        { text: '"The prices are a bit high for the portion sizes, but the atmosphere is nice and the food is delicious." — March 2026.', source: R + 'B523636509/' },
        { text: 'A March 2026 diner wished the chazuke and ramen at the end had used different broths, and missed pepper for the ramen.', source: R + 'B523862645/' },
        { text: 'When grilling wings, the cooks brush on chicken fat for a burst of flame (July 2026).', source: R + 'B532133826/' },
      ],
      japanese_sources_summary: '公式サイト (isozumi.jp、五十家グループ): 鶏菜 ヨコドリ、「鶏と野菜をもっと美味しく」、四条麩屋町下ル東入ル、路地裏の隠れ家、自社農園 ISO FARM と近隣の農家の京野菜、焼鳥出身の店主が惚れ込んだ丹波黒どり、紀州備長炭、1階カウンター16席のおまかせコース8,000円 (料理・飲み物込み、ソフトドリンクのみ7,000円)、1時間ごとの一斉スタート、2時間制、2階テーブル16席の丹波黒どり鍋コース6,500円、鍋＋焼鳥コース8,000円 (前日までの予約、3時間)、17:00〜23:00 (最終入店21:00)。食べログ: 焼き鳥、下京区八文字町354-3、木曜休み、32席、個室、禁煙、カード・電子マネー・QR可、2024年12月21日オープン。口コミ (2026年2月〜9月、英語): 以前はおまかせ2,200円・3,800円・5,800円と鍋6,000円・8,000円、五十家グループ、U字のカウンター、鶏のたたき、鶏だしの茶碗蒸し、手羽の鶏脂の炎、クレソンのつくね、黒豆マスカルポーネ、鶏だしの茶漬けとラーメン、長浜蒸溜所とのウイスキー、明るいスタッフ、量の割に高いという声、〆が似ているという声、トイレは店の外。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523636509/', R + 'B523862645/', R + 'B524471225/', R + 'B526158087/', R + 'B527117238/', R + 'B527508903/', R + 'B530116589/', R + 'B530808832/', R + 'B532133826/', R + 'B537851734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only, starting on the hour; English page on the group site; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区八文字町354-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official group site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003163, 135.765890); cross-checked: GSI 京都府京都市下京区八文字町354番地 (lot) 23m; kyoto_bistro_petit_lapin 16 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B524471225/'],
    price_note: 'Current prices from the official site, tax and drinks included; February 2026 reviews show an earlier, cheaper set of courses.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Counter omakase course, drinks included', '¥8,000', 'Counter', 'ask', 'no', '¥7,000 with soft drinks only.', 'course'),
      it('丹波黒どり 鍋コース', '', 'Tamba black chicken hot-pot course, drinks included', '¥6,500', 'Upstairs', 'ask', 'no', 'Book the day before.', 'nabe'),
      it('丹波黒どり 鍋＋焼鳥コース', '', 'Hot pot and yakitori course, drinks included', '¥8,000', 'Upstairs', 'ask', 'no', 'Book the day before.', 'nabe'),
    ] }, {
    cuisine: '紀州備長炭で焼く丹波黒どりの焼き鳥と、グループの自社農園の京野菜 (公式サイト)・カウンターのおまかせコース8,000円 (飲み物込み、ソフトドリンクのみ7,000円)、2階の丹波黒どり鍋6,500円、鍋＋焼鳥8,000円、飲み物込み (公式サイト、2026年)・以前はカウンター2,200円・3,800円・5,800円、鍋6,000円・8,000円 (2026年2月)・これまでの料理: 鶏のたたき、鶏だしの茶碗蒸し、鶏脂を塗る手羽、クレソンのつくね、黒豆マスカルポーネ、鶏だしの茶漬けとラーメン (2026年の口コミ)・長浜蒸溜所とのウイスキー (2026年6月)',
    neighborhood: '四条麩屋町の路地。京都河原町駅から257m',
    gf_detail: '要確認。グルテンの情報なし。コースには揚げ物、〆の茶漬けやラーメン、醤油の味付けもある (2026年の口コミ、公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 丹波黒どりの串と鶏白湯の鍋 (公式サイト)。',
    notes: '[焼き鳥・四条麩屋町、鶏と畑の野菜] 四条から路地を入った古民家で、1階は備長炭を囲むU字のカウンター16席、2階は鍋のテーブル。地元の五十家グループの店。丹波黒どりの串と自社農園の野菜を交互に出し、手羽は鶏脂を塗って炎が上がる。今は飲み物込みのおまかせ8,000円。明るいスタッフが好評で、量の割に高い、〆が似ているという声も。木曜休み。',
  });
}

save();
