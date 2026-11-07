// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 55.
//   Queue run from the osw2 worktree, 2026-11-07. Notable is exhausted; core continues.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 鮓はやし Sushi Hayashi (nine-seat sushi counter north of the Imperial Palace; since 2019) — run by a couple.
//   + kitocafe キトカフェ (second-floor café near Demachi with seasonal shortcakes; since 2010)
//   + GREEN FARM グリーン ファーム (soft-serve and smoothie shop of a Taisho-era dairy company, Demachiyanagi; since 2014)
//   + ル・シュクリエ Le Sucrier (patisserie and small café at Teramachi-Imadegawa; since 1990)
//   None of the four is in data/kyoto.json: grep by id, name and address; 一真町67 is the building of kyoto_demachi_rororo
//   (a different shop). Brand names grepped in queue-status.jsonl: no earlier chain rulings.
//   Service charges: 鮓はやし prices include tax and service; none listed for the others.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮓はやし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032629/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hayashi-sushi.com/';
  const D = day(['18:00', '21:00']); const LD = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_sushi_hayashi', name: '鮓はやし (Sushi Hayashi)', category: 'OMNI',
    lat: 35.02979540785642, lng: 135.76808444060705, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of sushi and seasonal appetisers; the rice is said to be made without sugar and the soup is a clear bonito broth, but no gluten information is published (Tabelog; May 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase (Tabelog).',
    hours_raw: 'Reservation only. Lunch 12:00–14:00 (last entry 12:30) Tuesday, Saturday and Sunday; dinner 18:00–21:00 (last entry 18:30) Monday, Tuesday, Friday, Saturday and Sunday; closed Wednesday and Thursday, plus irregular days (Tabelog). Prices include tax and service; cancellation charge 100% on the day, 50% the two days before (Tabelog). Cards accepted; no e-money or QR (Tabelog). 9 counter seats; no children; smart casual; non-smoking (Tabelog). Run by a couple (2021 reviews). 6 min walk from Keihan Demachiyanagi Stn, 12 min from Imadegawa Stn (Tabelog).',
    hours: { 0: D, 1: LD, 4: D, 5: LD, 6: LD }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of the Imperial Palace, near Demachiyanagi — 6 min walk',
    cuisine: 'Omakase sushi with seasonal appetisers from local ingredients: two lunch courses and one dinner course (Tabelog) · nigiri such as anago, sea bream, shrimp with sea urchin, bonito, simmered octopus, nodoguro, squid, kisu and red snapper; sugar-free sushi rice; lightly seasoned gari; a clear bonito soup rather than red miso (May 2025) · fine sake and wine, including Swiss wine (Tabelog; October 2021) · spend about ¥20,000–40,000 a head (2024–2026 reviews)',
    website: SITE, gmaps: gm('鮓はやし 出町柳'), menu_url: SITE,
    notes: "[Sushi · north of the Imperial Palace, a couple's nine-seat omakase] A quiet, dimly lit nine-seat counter near Demachiyanagi run by a sushi master and wife: a pure, restrained omakase — sugar-free rice, barely seasoned gari, clear bonito soup — with nodoguro, anago and uni among the pieces, and sake or Swiss wine. Listed by Michelin six years running, per the shop. About ¥20,000–40,000; booking only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, with the owner’s wife front of house (2021 reviews); names not given'], origin: null,
      background: 'Opened 6 May 2019 (Tabelog). Tabelog’s introduction: listed in the Michelin Guide for six consecutive years; sushi and seasonal appetisers made with fresh ingredients sourced directly from the area; two omakase courses at lunch and one at dinner. Reviewers (2021) describe a friendly owner and the owner’s wife running it together.',
      philosophy: null,
      specialty: 'Omakase sushi with sugar-free rice.',
      anecdotes: [
        { text: 'A December 2021 first-timer, after years of wanting to come, found the hostess’s smiles soothing.', source: R + 'B443945022/' },
        { text: 'An October 2021 guest came for the Swiss wine and ordered the dinner course at lunch.', source: R + 'B463880258/' },
        { text: 'A May 2025 diner found the fatty tuna surprisingly light and the style "transparent", with nothing superfluous.', source: R + 'B507319360/' },
      ],
      japanese_sources_summary: '食べログ: 鮓はやし、寿司・魚介料理・日本料理、上京区表町31-1、京阪出町柳駅から徒歩6分、地下鉄今出川駅から徒歩12分、完全予約制、昼 火土日 12:00〜14:00 (最終入店12:30)、夜 月火金土日 18:00〜21:00 (最終入店18:30)、水木定休、ほか不定休、税・サービス料込み、キャンセル料 当日100%・前日と前々日50%、カード可、電子マネー・QR不可、カウンター9席、子ども不可、スマートカジュアル、禁煙、2019年5月6日オープン。公式紹介: ミシュランガイドに6年連続掲載、地元直送の旬の食材の鮨と酒肴、昼はおまかせ2種・夜は1種、銘酒。口コミ (2021〜2026年、英語): 夫婦で営む、砂糖を使わない酢飯、味付けを抑えたガリ、鰹のすまし汁、穴子、鯛、海老と雲丹、鰹、煮蛸、のどぐろ、烏賊、きす、甘鯛、スイスワイン、一人20,000〜40,000円ほど。',
      confidence: 'medium', sources: [TB, SITE, R + 'B437261466/', R + 'B440861104/', R + 'B443945022/', R + 'B463880258/', R + 'B495745408/', R + 'B497295286/', R + 'B502618652/', R + 'B504932177/', R + 'B507319360/', R + 'B523568648/', R + 'B523925006/', R + 'B534417220/'] },
    cultural_comfort: { level: 'japanese', note: 'Booking only; no children; smart casual.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区表町31-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.029795, 135.768084); cross-checked: GSI 京都府京都市上京区表町31番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534417220/'],
    price_note: 'No published course prices in the sources; reviewers spent ¥20,000–40,000 (2024–2026).', last_checked: TODAY, items: [
      it('', '', 'Dinner omakase course', '', 'Course', 'ask', 'no', 'Tax and service included.', 'dinner'),
      it('', '', 'Lunch omakase course (two choices)', '', 'Course', 'ask', 'no', 'Tuesday, Saturday and Sunday.', 'lunch'),
    ] }, {
    cuisine: '地元の旬の食材の鮨と酒肴のおまかせ、昼は2種・夜は1種 (食べログ)・穴子、鯛、海老と雲丹、鰹、煮蛸、のどぐろ、烏賊、きす、甘鯛などの握り、砂糖を使わない酢飯、味付けを抑えたガリ、赤だしでなく鰹のすまし汁 (2025年5月)・銘酒とスイスワインなどのワイン (食べログ、2021年10月)・一人20,000〜40,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '御所の北、出町柳の近く。徒歩6分',
    gf_detail: '要確認。鮨と季節の酒肴のおまかせ。酢飯に砂糖を使わず、汁は鰹のすまし汁だが、グルテンの情報は公開されていない (食べログ、2025年5月)。',
    vegan_detail: 'ヴィーガン不可。鮨のおまかせ (食べログ)。',
    notes: '[鮨・御所の北、夫婦で営む9席のおまかせ] 出町柳近くの静かで照明を落とした9席のカウンター。主人と女将の夫婦で営む。砂糖を使わない酢飯、味を抑えたガリ、鰹のすまし汁と、余計なもののない澄んだおまかせに、のどぐろ、穴子、雲丹、日本酒やスイスワイン。店いわくミシュラン6年連続掲載。20,000〜40,000円ほど、完全予約制、水木休み。',
  });
}

// ================================================================ kitocafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26016921/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kitocafe.exblog.jp/';
  const H = day(['11:30', '17:00']);
  put({
    id: 'kyoto_kitocafe', name: 'キトカフェ (kitocafe)', category: 'OMNI',
    lat: 35.0301211303565, lng: 135.76858352744065, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cakes — shortcakes, tarte Tatin, cheesecake, gâteau chocolat — and lunch plates such as a fried hamburg, sandwiches and borscht; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, hamburg and chicken plates (reviews).',
    hours_raw: '11:30–17:00 Monday–Saturday; closed Sunday and holidays; hours may change (Tabelog). Bookings accepted. Cash only — no cards, e-money or QR (Tabelog). 17 seats: a small counter and tables, window seats; non-smoking (Tabelog; March 2025). Fills quickly on weekends, with queues (March 2025). Cakes to take away (Tabelog). Up the stairs on the 2nd floor off the Demachi shopping street, 1 min from the Kawaramachi-Imadegawa bus stop (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachi, Kawaramachi-Imadegawa — 10 min walk from Demachiyanagi Stn',
    cuisine: 'Home-style café with seasonal cakes and lunch plates (2024–2026 reviews) · cakes that change with the seasons: peach shortcake ¥780 (July–August 2026), strawberry shortcake with large berries (March 2025), tarte Tatin of Jonathan apples (November 2024), cheesecake, gâteau chocolat · lunch from the blackboard: Greek-style fried hamburg in tomato sauce with mashed potato, salad, rice and soup ¥1,100 (December 2024); grilled chicken plate; avocado and cream cheese sandwich ¥1,100 (October 2025); borscht about ¥1,100 (May 2025) · coffee ¥500, iced milk ¥450; ¥50 off with a cake (August 2026)',
    website: SITE, gmaps: gm('kitocafe 出町'), menu_url: TB,
    notes: "[Café · Demachi, seasonal shortcakes upstairs] A calm second-floor café just off the Demachi shopping street, with a blackboard lunch — a Greek-style hamburg or chicken plate with soup and rice for about ¥1,100 — and beautiful seasonal cakes: towering strawberry or peach shortcake, tarte Tatin, cheesecake. Busy at weekends; cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened 14 October 2010 (Tabelog). A March 2026 reviewer says it is run by one person; an October 2026 reviewer was welcomed by two women.',
      philosophy: null,
      specialty: 'Seasonal shortcakes; tarte Tatin.',
      anecdotes: [
        { text: 'A three-time visitor (November 2024) came back for the Jonathan-apple tarte Tatin.', source: R + 'B470054617/' },
        { text: 'An August 2026 visitor finally made it after three or four years of meaning to, for the peach shortcake.', source: R + 'B533520157/' },
        { text: 'A March 2025 couple after cherry-blossom viewing were seated at once; a queue had formed by the time of leaving.', source: R + 'B504536740/' },
      ],
      japanese_sources_summary: '食べログ: kitocafe (キトカフェ)、カフェ・ケーキ、上京区一真町67 2F、京阪出町柳駅から徒歩10分、市バス「河原町今出川」から徒歩1分、月〜土 11:30〜17:00、日祝定休、予約可、カード・電子マネー・QR不可、17席、禁煙、ケーキのテイクアウト可、2010年10月14日オープン。口コミ (2024〜2026年、英語): 季節で変わるケーキ、桃のショートケーキ780円、大きないちごのショートケーキ、紅玉のタルトタタン、チーズケーキ、ガトーショコラ、黒板のランチ、ギリシャ風揚げハンバーグのトマトソース1,100円 (マッシュポテト、サラダ、ご飯、スープ)、鶏のグリルのプレート、アボカドとクリームチーズのサンド1,100円、ボルシチ、コーヒー500円、アイスミルク450円、ケーキセットで50円引き、週末は行列、出町の商店街のそばの2階。',
      confidence: 'medium', sources: [TB, SITE, R + 'B470054617/', R + 'B500139290/', R + 'B500293816/', R + 'B503423821/', R + 'B504536740/', R + 'B507849053/', R + 'B511173743/', R + 'B516206723/', R + 'B526951297/', R + 'B531331778/', R + 'B533520157/', R + 'B538415527/'] },
    cultural_comfort: { level: 'japanese', note: 'Blackboard menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区一真町67 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030121, 135.768584); cross-checked: GSI 京都府京都市上京区一真町67番地 (lot) 53m; 8m from kyoto_demachi_rororo (same building, a different shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533520157/', R + 'B500293816/', R + 'B516206723/'],
    price_note: 'Prices from December 2024–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Greek-style fried hamburg in tomato sauce, lunch set', '¥1,100', 'Lunch', 'no', 'no', 'December 2024.', 'hamburg'),
      it('', '', 'Avocado and cream cheese sandwich', '¥1,100', 'Lunch', 'no', 'no', 'October 2025.', 'sandwich'),
      it('', '', 'Peach shortcake (seasonal)', '¥780', 'Cake', 'no', 'no', 'July–August 2026.', 'shortcake'),
      it('', '', 'Hot coffee', '¥500', 'Drink', 'gf', 'vegan', '¥50 off with a cake.', 'coffee'),
    ] }, {
    cuisine: '季節のケーキとランチプレートの家庭的なカフェ (2024〜2026年の口コミ)・季節で変わるケーキ: 桃のショートケーキ780円 (2026年7〜8月)、大きないちごのショートケーキ (2025年3月)、紅玉のタルトタタン (2024年11月)、チーズケーキ、ガトーショコラ・黒板のランチ: マッシュポテト、サラダ、ご飯、スープ付きのギリシャ風揚げハンバーグのトマトソース1,100円 (2024年12月)、鶏のグリルのプレート、アボカドとクリームチーズのサンド1,100円 (2025年10月)、ボルシチ1,100円ほど (2025年5月)・コーヒー500円、アイスミルク450円、ケーキと一緒なら50円引き (2026年8月)',
    neighborhood: '出町、河原町今出川。出町柳駅から徒歩10分',
    gf_detail: '要確認。ショートケーキ、タルトタタン、チーズケーキ、ガトーショコラと、揚げハンバーグ、サンド、ボルシチなどのランチ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームのケーキ、ハンバーグや鶏のプレート (口コミ)。',
    notes: '[カフェ・出町、2階の季節のショートケーキ] 出町の商店街のそばの落ち着いた2階のカフェ。黒板のランチはギリシャ風ハンバーグや鶏のプレートにスープとご飯で1,100円ほど、季節のケーキは高く盛ったいちごや桃のショートケーキ、タルトタタン、チーズケーキ。週末は混む。現金のみ、日曜休み。',
  });
}

// ================================================================ GREEN FARM
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26025975/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_green_farm_demachi', name: 'グリーン ファーム (GREEN FARM)', category: 'OMNI',
    lat: 35.02948073705408, lng: 135.77698097943588, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soft serve, milk-pudding soft serve, smoothies and juices; cones and toppings not described (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dairy company’s milk soft serve; the fruit smoothies may be milk-free but are not described (reviews).',
    hours_raw: 'Hours are not listed on Tabelog, and the shop website (greenfarm.link) did not respond (2026-11-07) — check before going. 10 seats per Tabelog; a few seats inside (about four) and terrace seating outside (November 2025); non-smoking (Tabelog). On Yanagi-dori, about 5 min walk from Keihan Demachiyanagi Stn, near the Hyakumanben handmade market at Chion-ji (Tabelog; 2023–2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi, Yanagi-dori — 5 min walk from the station',
    cuisine: 'Milk sweets from a dairy company dating to the Taisho era (2023–2024 reviews) · soft serve of Miyama milk; "Miyama Soft", a soft milk pudding of non-homogenised milk; Miyama Special Soft, e.g. strawberry (2023–2026) · fruit smoothies such as kale green and fig; banana juice (2024–2025) · a milk tasting of different milks (July 2026)',
    website: null, gmaps: gm('GREEN FARM 出町柳 ソフトクリーム'), menu_url: TB,
    notes: "[Soft serve · Demachiyanagi, a dairy's milk-and-smoothie stand] A small shop on Yanagi-dori run by a long-established dairy, pouring soft serve and a soft milk pudding made with Miyama milk, fruit smoothies and a milk tasting. Most people take a cone outside or to the terrace. Handy after the Hyakumanben handmade market. Hours aren't published — check before going.",
    chef_bio: { chef_name: null, roles: ['Run by a dairy company dating to the Taisho era (2023–2024 reviews); not named'], origin: null,
      background: 'Opened 23 November 2014 (Tabelog). Reviewers (2023–2024) describe a shop run by a milk company dating back to the Taisho era, serving Miyama milk soft serve and smoothies; a July 2026 reviewer did a milk tasting.',
      philosophy: null,
      specialty: 'Miyama milk soft serve.',
      anecdotes: [
        { text: 'An October 2023 visitor came on the Hyakumanben handmade-market day and chose from several milks.', source: R + 'B473377216/' },
        { text: 'A March 2024 diner found the taste ordinary for the price.', source: R + 'B481170357/' },
        { text: 'A self-described regular (August 2025) waits each year for the fig smoothie.', source: R + 'B511189649/' },
      ],
      japanese_sources_summary: '食べログ: GREEN FARM、洋菓子・カフェ、左京区田中大堰町92、出町柳駅から361m、営業時間の記載なし、10席、禁煙、2014年11月23日オープン、ウェブサイト greenfarm.link (2026年11月7日は応答なし)。口コミ (2023〜2026年、英語): 大正時代から続く牛乳の会社が営む、Miyama 牛乳のソフトクリーム、ノンホモ牛乳のやわらかいプリンの「Miyama Soft」、いちごのMiyama Special Soft、ケールのグリーンスムージー、いちじくのスムージー、バナナジュース、牛乳の飲み比べ、テラス席、店内は4人ほど、百万遍の手づくり市の近く、柳通、出町柳駅から徒歩5分。',
      confidence: 'low', sources: [TB, R + 'B466832978/', R + 'B473377216/', R + 'B481170357/', R + 'B486399064/', R + 'B488543201/', R + 'B495054401/', R + 'B500177114/', R + 'B511189649/', R + 'B516348466/', R + 'B528645031/', R + 'B532738901/', R + 'B535410037/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; mostly takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中大堰町92',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.029481, 135.776981); cross-checked: GSI 京都府京都市左京区田中大堰町92番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486399064/'],
    price_note: 'No prices in reviews.', last_checked: TODAY, items: [
      it('', '', 'Miyama milk soft serve', '', 'Sweets', 'ask', 'no', '', 'soft'),
      it('', '', 'Miyama Soft (soft milk pudding)', '', 'Sweets', 'ask', 'no', '', 'miyama_soft'),
      it('', '', 'Fruit smoothie (e.g. kale green, fig)', '', 'Drink', 'ask', 'ask', '', 'smoothie'),
    ] }, {
    cuisine: '大正時代から続く牛乳の会社のミルクスイーツ (2023〜2024年の口コミ)・Miyama 牛乳のソフトクリーム、ノンホモ牛乳のやわらかいプリンの「Miyama Soft」、いちごなどのMiyama Special Soft (2023〜2026年)・ケールのグリーンスムージーやいちじくのスムージー、バナナジュース (2024〜2025年)・牛乳の飲み比べ (2026年7月)',
    neighborhood: '出町柳、柳通。駅から徒歩5分',
    gf_detail: '要確認。ソフトクリーム、ミルクプリンのソフト、スムージー、ジュース。コーンやトッピングの説明はない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛乳の会社のソフトクリーム。果物のスムージーに牛乳を使うかどうかは説明されていない (口コミ)。',
    notes: '[ソフトクリーム・出町柳、牛乳屋のミルクとスムージー] 柳通の老舗の牛乳屋が営む小さな店。Miyama 牛乳のソフトクリームややわらかいミルクプリンのソフト、果物のスムージー、牛乳の飲み比べ。多くは外やテラスでコーンを。百万遍の手づくり市の帰りにも。営業時間は公開されていないので確認を。',
  });
}

// ================================================================ ル・シュクリエ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001513/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://lesucrier.web.fc2.com/';
  const H = day(['11:30', '18:30']); const S = day(['14:00', '18:30']);
  put({
    id: 'kyoto_le_sucrier', name: 'ル・シュクリエ (Le Sucrier)', category: 'OMNI',
    lat: 35.03060321925043, lng: 135.7679703427738, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A patisserie of cream puffs, shortcakes, chestnut cakes, cheesecake and pudding; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg, butter and cream pastries (reviews).',
    hours_raw: '11:30–18:30 Monday, Wednesday, Thursday and Saturday; Sunday café from 14:00; closed Tuesday and Friday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A small café area behind the cake counter, 15 seats; non-smoking; takeout (Tabelog; March 2025). On Teramachi just north of Imadegawa, on the way to the Masugata shopping street, 8 min walk from Demachiyanagi Stn (Tabelog; March 2026).',
    hours: { 0: H, 2: H, 3: H, 5: H, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi-Imadegawa, near Demachi Masugata shopping street',
    cuisine: 'A long-established patisserie with a café, founded 1990 (September 2024 review) · cream puffs in several flavours, one with a rich citrusy cream (2022–2025) · Mon Carré of candied chestnuts and rum chestnut cream (March 2026); spice caramel; cheesecake; berry shortcake; pudding (2025–2026) · deep-roast iced coffee (August 2025)',
    website: SITE, gmaps: gm('ル・シュクリエ 寺町今出川'), menu_url: TB,
    notes: "[Patisserie · Teramachi-Imadegawa, a 1990 neighbourhood cake shop] A slightly dim, antique-styled cake shop just north of Imadegawa, with a showcase of carefully made cakes and a small café behind: cream puffs, a chestnut-and-rum Mon Carré, spice caramel, cheesecake and pudding with a deep-roast coffee. Many take cakes to the Kamo delta. Cash only; closed Tuesday and Friday.",
    chef_bio: { chef_name: null, roles: ['Pâtissier not named'], origin: null,
      background: 'Per a September 2024 reviewer, established in 1990 and loved by locals. Reviewers (2021–2026) describe an antique-feeling shop with a cake case at the front and a café at the back.',
      philosophy: null,
      specialty: 'Cream puffs; chestnut Mon Carré.',
      anecdotes: [
        { text: 'A May 2022 visitor took cream puffs to the Kamo delta, remembering a hawk that once snatched a snack there.', source: R + 'B187421973/' },
        { text: 'An August 2025 guest smelled eggs and butter on entering and paired a cream puff and pudding with iced coffee.', source: R + 'B511835674/' },
        { text: 'A March 2026 regular struggled to put into words how good the chestnut Mon Carré was.', source: R + 'B479371866/' },
      ],
      japanese_sources_summary: '食べログ: ル・シュクリエ、ケーキ・カフェ、上京区寺町通今出川上ル表町21 市川ビル1F、出町柳駅から徒歩約8分、月水木土 11:30〜18:30、日曜はカフェ14時から、火金定休、カード・電子マネー・QR不可、15席、禁煙、テイクアウト。口コミ (2021〜2026年、英語): 1990年創業、地元に愛される洋菓子店、店の奥のカフェ、何種類かのシュークリーム、柑橘のクリーム、砂糖漬けの栗とラムのマロンクリームの Mon Carré、スパイスキャラメル、チーズケーキ、ベリーのショートケーキ、プリン、深煎りのアイスコーヒー、アンティークな雰囲気、出町桝形商店街への途中、鴨川デルタで食べる人も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B187421973/', R + 'B442674952/', R + 'B479371866/', R + 'B481701186/', R + 'B485921227/', R + 'B492429183/', R + 'B503410870/', R + 'B506959483/', R + 'B511835674/', R + 'B523622815/', R + 'B526162900/', R + 'B527191659/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; small café at the back.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区寺町通今出川上ル表町21 市川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.030603, 135.76797); cross-checked: GSI 京都府京都市上京区表町21番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511835674/'],
    price_note: 'No prices in reviews.', last_checked: TODAY, items: [
      it('', '', 'Cream puff', '', 'Cake', 'no', 'no', '', 'chou'),
      it('', '', 'Mon Carré (chestnut and rum)', '', 'Cake', 'no', 'no', '', 'mon_carre'),
      it('', '', 'Pudding', '', 'Cake', 'ask', 'no', '', 'pudding'),
    ] }, {
    cuisine: '1990年創業のカフェ付きの老舗洋菓子店 (2024年9月の口コミ)・何種類かのシュークリーム、柑橘の濃厚なクリームのものも (2022〜2025年)・砂糖漬けの栗とラム風味のマロンクリームの Mon Carré (2026年3月)、スパイスキャラメル、チーズケーキ、ベリーのショートケーキ、プリン (2025〜2026年)・深煎りのアイスコーヒー (2025年8月)',
    neighborhood: '寺町今出川、出町桝形商店街の近く',
    gf_detail: '要確認。シュークリーム、ショートケーキ、栗のケーキ、チーズケーキ、プリンの洋菓子店。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵、バター、クリームの洋菓子 (口コミ)。',
    notes: '[洋菓子・寺町今出川、1990年創業の町のケーキ屋] 今出川のすぐ北の少し薄暗いアンティーク調のケーキ屋。ていねいなケーキのショーケースと奥の小さなカフェ。シュークリーム、栗とラムの Mon Carré、スパイスキャラメル、チーズケーキ、プリンを深煎りのコーヒーと。鴨川デルタへ持って行く人も。現金のみ、火金休み。',
  });
}

save();
