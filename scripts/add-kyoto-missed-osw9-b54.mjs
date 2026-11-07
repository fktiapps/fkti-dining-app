// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 54.
// Core lane exhausted; rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - Sakura Cafe Hanon — chain: five Cafe Hanon shops (Ginza, Shibuya, Chatan, two in Kyoto) per cafe-hanon.com
//   - 格安ビールと鉄鍋餃子 3・6・5酒場 京都河原町店 — chain (shops from Tokyo and Yokohama to Akita and Hiroshima)
//   - M Stand 京都四条河原町店 — chain (Chinese coffee chain of 350+ shops)
//   - 河原町酒場 京都河原町店 — too thin to verify (two 2026 reviews, one line each; corporate all-you-can-eat izakaya)
//   + 洋食屋 キッチン 秀 Yoshokuya Kitchen Hide (yoshoku off Shinkyogoku; since 2015)
//   - すき家 四条木屋町店 — chain
//   + くりた Kurita (Kyoto cuisine by the Takase River, couple-run)
//   + ジャズin ろくでなし Jazz in Rokudenashi (old jazz kissa-bar on Kiyamachi)
//   - BAR OAGE — too thin to verify (no reviews)
//   - ぎょうざ家 — no 2025–26 reviews (latest May 2024)
//   + 焼肉処 大志亭 木屋町店 Taishitei (yakiniku off Kiyamachi; T's pound group)
//   Same-name counts first: キッチン 秀 0; くりた 0; ろくでなし 0; 大志亭 0 — its group (ts-pound.com) also runs
//   熟成焼肉 听 京都駅前店 (TableCheck), not in data: a small local group, drafted.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: くりた 「2階席のみ別途奉仕料が必要」; the other
//   three have no section.
//   Pins: くりた — address has no lot ("西木屋町四条下る"), loc_precise false; 大志亭 — Tabelog point 0.7 m from
//   kyoto_chiritori_nabe_isono (369-1, next lot), so moved ~7 m north (7.7 m).
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041229', 'chain: Sakura Cafe Hanon is one of five Cafe Hanon shops (Ginza, Shibuya, Chatan in Okinawa, and Matcha Cafe Hanon and this one in Kyoto) per cafe-hanon.com');
skip('26035601', 'chain: 3・6・5酒場 (founded in Shibuya) has shops in Tokyo, Yokohama, Sendai-area, Akita, Fukushima, Yamagata, Iwate and Hiroshima (HotPepper listings); a promotion PDF is hosted by Colowide');
skip('26043917', 'chain: M Stand — Chinese coffee chain of about 350+ shops; three in Kyoto (press release, January 2026)');
skip('26040263', 'too thin to verify: two 2026 reviews of a line or two each; a corporate all-you-can-eat izakaya (Tokyo-registered invoice number) whose earlier name, per a 2024 review, was 祇園商店 京都河原町本店');
skip('26005493', 'chain: すき家');
skip('26041613', 'too thin to verify: no Tabelog reviews');
skip('26037395', 'no 2025–26 reviews: latest review May 2024');

// ================================================================ 洋食屋 キッチン 秀
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025863/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '21:00']);
  put({
    id: 'kyoto_yoshokuya_kitchen_hide', name: '洋食屋 キッチン 秀 (Yoshokuya Kitchen Hide)', category: 'OMNI',
    lat: 35.003993, lng: 135.767409, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hamburg steak with demi-glace, cream croquettes, fried shrimp and chicken katsu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fried-seafood plates (2026 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–21:00 (lunch to 15:00, then the evening menu); closed Wednesday; hours may change (Tabelog). Lunch served late into the afternoon on weekdays (January 2026 review). No bookings per Tabelog, though one January 2026 reviewer booked. Cash only — no cards, e-money or QR (Tabelog). 38 seats: an open-kitchen counter downstairs and tables upstairs; non-smoking (Tabelog). Prices rose in April 2026 (May 2026 review). In an alley just off Shinkyogoku, a block north of Shijo; 3 min from Hankyu Kawaramachi Stn (Tabelog; February and May 2026 reviews).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku, just north of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Classic yoshoku with plenty of salad (2026 reviews): daily lunch special ¥1,150 — sautéed chicken and mushrooms with wasabi ponzu, pork and vegetable yakiniku, pork and bell pepper ponzu stir-fry, chicken and zucchini peperoncino (January–August 2026); hamburg steak and shrimp fry set ¥1,540 with tartar sauce (May 2026); hamburg steak with shrimp cream croquette; teriyaki steak; chicken katsu; roast beef; fried shrimp with tomato sauce; salads with balsamic; corn soup; wine (Tabelog)',
    website: null, gmaps: gm('洋食屋 キッチン 秀 新京極'), menu_url: null,
    notes: "[Yoshoku · Shinkyogoku] A small two-floor yoshoku in an alley off Shinkyogoku, from a chef who long ran a Western-style restaurant: hamburg steak with demi-glace, shrimp cream croquette, teriyaki steak and a daily lunch for about ¥1,150–1,550, with generous salads, served all afternoon. Cash only; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 25 June 2015 by a chef who for many years managed a Western-style restaurant (Tabelog). A regular (January and August 2026) says the owner comes from the well-known salad-and-yoshoku shop Sancho, and the flavours are similar.',
      philosophy: null, specialty: 'Hamburg steak; daily lunch.',
      anecdotes: [
        { text: 'A January 2026 diner who missed lunch elsewhere after 14:00 was glad the shop still served lunch.', source: R + 'B521304389/' },
        { text: 'A January 2026 yoshoku lover noted the retro room\'s scattered Hanshin Tigers goods.', source: R + 'B522071906/' },
        { text: 'A neighbour working from home over Obon 2026 walked over at 11:40 rather than cook, and was warned upstairs that food would take a while.', source: R + 'B533196254/' },
      ],
      japanese_sources_summary: '食べログ: 洋食屋 キッチン 秀、洋食・コロッケ・スープ、中京区新京極通四条上る中之町565-10、阪急河原町駅から徒歩3分、月・火・木〜日 11:30〜15:00・15:00〜21:00、水曜休み、予約不可、カード・電子マネー・QR 不可、38席 (1階カウンター、2階テーブル)、禁煙、2015年6月25日オープン、長年洋食店の店長を任されたシェフが開いた店、1階はオープンキッチンのカウンター。口コミ (2026年1〜10月、英語): 店主はサラダの有名店サンチョ出身という声、日替わりランチ1,150円、ハンバーグとエビフライのセット1,540円とタルタル、ハンバーグとエビクリームコロッケ、照り焼きステーキ、チキンカツ、ローストビーフ、トマトソースのエビフライ、バルサミコのサラダ、コーンスープ、2026年4月に値上げ、平日も遅くまで昼のメニュー、阪神グッズ。',
      confidence: 'medium', sources: [TB, R + 'B506541632/', R + 'B520364774/', R + 'B521304389/', R + 'B522071906/', R + 'B522123645/', R + 'B522933934/', R + 'B528574140/', R + 'B533196254/', R + 'B536832153/', R + 'B537480043/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; seated by staff, upstairs when busy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上る中之町565-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003993, 135.767409); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528574140/'],
    price_note: 'Prices from a May 2026 review (after an April 2026 rise).', last_checked: TODAY, items: [
      it('', '', 'Daily lunch special', '¥1,150', 'Lunch', 'ask', 'no', 'May 2026 review.', 'higawari'),
      it('', '', 'Hamburg steak and fried shrimp set', '¥1,540', 'Lunch', 'no', 'no', 'May 2026 review.', 'hamburg_ebifry'),
    ] }, {
    cuisine: 'サラダたっぷりの昔ながらの洋食 (2026年の口コミ): 日替わりランチ1,150円 (鶏ときのこのわさびポン酢ソテー、豚と野菜の焼肉風、豚とピーマンのポン酢炒め、鶏とズッキーニのペペロンチーノ風、2026年1〜8月)、タルタルソースのハンバーグとエビフライのセット1,540円 (2026年5月)、ハンバーグとエビクリームコロッケ、照り焼きステーキ、チキンカツ、ローストビーフ、トマトソースのエビフライ、バルサミコのサラダ、コーンスープ。ワイン (食べログ)',
    neighborhood: '新京極、四条の一筋北。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。デミグラスのハンバーグ、クリームコロッケ、エビフライ、チキンカツ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介のフライの皿 (2026年の口コミ)。',
    notes: '[洋食・新京極] 新京極の路地の2階建ての小さな洋食店。洋食店を長く任されたシェフの店で、デミグラスのハンバーグ、エビクリームコロッケ、照り焼きステーキ、日替わりランチが1,150〜1,550円ほど。サラダもたっぷりで、昼のメニューは午後も。現金のみ。水曜休み。',
  });
}

// ================================================================ くりた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004731/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kurita_takasegawa', name: 'くりた (Kurita)', category: 'OMNI',
    lat: 35.002385, lng: 135.770129, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses with yuba, sashimi and dashi dishes, but nama-fu (wheat gluten), tempura-style items and soy seasonings appear (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred courses with dashi throughout (2026 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–14:00 and 17:30–21:00; closed Wednesday; hours may change (Tabelog). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「2階席のみ別途奉仕料が必要」 — a separate service charge for second-floor seats only. Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 20 seats: a counter of 8 and a table for 4 downstairs, up to 8 upstairs; private hire up to 20; non-smoking (Tabelog). By the Takase River south of Shijo; 3 min from Hankyu Kawaramachi Stn exit 1B (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takase River, Nishi-Kiyamachi south of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Seasonal Kyoto cuisine, one monthly course (a regular\'s July–October 2026 reviews): freshly scooped yuba to start; a long hassun of seasonal bites — hamo, ayu, whelk, maple-leaf nama-fu, spicy lotus root, manganji pepper, wing tips; sashimi such as sawara, spear squid and guji; matsutake dobin-mushi; kizushi; grilled ayu with roe; furofuki turnip; hamo sushi; sea urchin rice; clam soup; seasonal fruit and wagashi; draft beer and chilled sake. Lunch of about seven dishes with Kyoto vegetables (August 2024)',
    website: null, gmaps: gm('くりた 西木屋町 京料理'), menu_url: null,
    notes: "[Kyoto cuisine · Takase River] A small counter restaurant by the Takase River run by a friendly couple, serving one generous seasonal Kyoto course a month — fresh yuba, a long hassun, matsutake dobin-mushi in autumn, hamo in summer — about ¥20,000–30,000 at night, around ¥5,000 at lunch. Service charge upstairs only; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner couple; chef (unnamed)'], origin: null,
      background: 'A Kyoto-cuisine restaurant "run by a friendly couple" (August 2024). Recent detail comes chiefly from one regular who has posted each month\'s course through 2026 (19–22 visits by July–October 2026).',
      philosophy: null, specialty: 'Monthly Kyoto course; fresh yuba.',
      anecdotes: [
        { text: 'A regular\'s October 2026 course ran from fresh yuba and a hassun of ginkgo, chestnut crackers and maple-leaf fu to sea bream with turnip and sea-urchin rice.', source: R + 'B498614585/' },
        { text: 'In September 2026 the same regular marked matsutake season with dobin-mushi, kizushi and hamo ginkgo rice.', source: R + 'B498614585/' },
      ],
      japanese_sources_summary: '食べログ: くりた、日本料理、下京区西木屋町四条下る、阪急河原町駅1B出口から徒歩約3分、月・火・木〜日 11:30〜14:00・17:30〜21:00、水曜休み、予約可、2階席のみ別途奉仕料、カード可、20席 (1階カウンター8・テーブル4、2階最大8名)、貸切20名まで、禁煙、一軒家レストラン。口コミ (2024年8月、2026年7〜10月、英語): 気さくな夫婦が営む、昼は京野菜の約7品、高瀬川沿い、月替わりのコース (汲み上げ湯葉、八寸、刺身、松茸の土瓶蒸し、きずし、子持ち鮎の塩焼き、かぶらのふろふき、鱧寿司、ウニご飯、はまぐりの吸い物、季節の果物と和菓子)、生ビールと冷酒。',
      confidence: 'low', sources: [TB, R + 'B498614585/', R + 'B489963609/', R + 'B464993863/', R + 'B367920025/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter; one course per month.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西木屋町四条下る',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; a regular\'s reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002385, 135.770129); the address has no lot number (西木屋町四条下る), so not lot-checked; the point is on the Takase River south of Shijo as Tabelog's directions say; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498614585/'],
    price_note: 'No prices read; reviewers spend ¥20,000–29,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Monthly Kyoto course (dinner)', '', 'Dinner', 'ask', 'no', 'July–October 2026 reviews.', 'course'),
      it('', '', 'Freshly scooped yuba', '', 'Dinner', 'ask', 'ask', 'July–October 2026 reviews.', 'kumiage_yuba'),
    ] }, {
    cuisine: '月替わりの季節の京料理のコース (常連の2026年7〜10月の口コミ): 汲み上げ湯葉から始まり、鱧、鮎、ばい貝、紅葉の生麩、辛子蓮根、万願寺とうがらし、手羽先などの長い八寸。さわら、ヤリイカ、ぐじなどの刺身、松茸の土瓶蒸し、きずし、子持ち鮎の塩焼き、かぶらのふろふき、鱧寿司、ウニご飯、はまぐりの吸い物、季節の果物と和菓子。生ビールと冷酒。昼は京野菜の約7品 (2024年8月)',
    neighborhood: '高瀬川沿い、四条の南の西木屋町。河原町駅から徒歩3分',
    gf_detail: '要確認。湯葉、刺身、だしの料理だが、生麩、揚げ物、醤油の味付けもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心のコースで、だしを多く使う (2026年の口コミ)。',
    notes: '[京料理・高瀬川] 高瀬川沿いの、気さくな夫婦が営む小さなカウンターの店。汲み上げ湯葉、長い八寸、秋は松茸の土瓶蒸し、夏は鱧と、月替わりのたっぷりした京料理のコースを、夜は2万〜3万円ほど、昼は5千円ほどで。2階席のみ奉仕料。水曜休み。',
  });
}

// ================================================================ ジャズin ろくでなし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012123/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://rokude.com/';
  const D = day(['15:00', '26:00']);
  put({
    id: 'kyoto_jazz_in_rokudenashi', name: 'ジャズin ろくでなし (Jazz in Rokudenashi)', category: 'OMNI',
    lat: 35.002956, lng: 135.770635, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly drinks; snacks such as popcorn are served (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly drinks; coffee, kombu tea and spirits (2026 reviews).',
    hours_raw: 'Daily 15:00–2:00; hours may change (Tabelog). Cash only — no cards or e-money (Tabelog). Smoking allowed (Tabelog). Drinks from about ¥500, coffee ¥500 (March and July 2026 reviews); evenings lean to alcohol (July 2026 review). Up a stair to a second-floor door covered in stickers and posters (January 2024 and September 2026 reviews). On Kiyamachi-dori south of Shijo, near Gion-Shijo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Shijo — near Gion-Shijo Stn',
    cuisine: 'A jazz kissa that turns into a bar (2024–26 reviews): coffee ¥500 (July 2026), kombu tea, rum, gin and lime, house rum and umeshu soda, cocktails, sake, shochu and wine (Tabelog); millet popcorn with drinks (January 2024); records on request',
    website: SITE, gmaps: gm('ジャズin ろくでなし 木屋町'), menu_url: null,
    notes: "[Jazz kissa & bar · Kiyamachi] A worn, record-lined jazz room up a stair on Kiyamachi, open from mid-afternoon to 2:00: coffee or kombu tea for about ¥500 by day, rum or umeshu soda by night, vintage amps and requests from the owner's collection. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A long-running jazz café on Kiyamachi (2024–26 reviews); 2024 reviewers praise the owner\'s ear for jazz, new releases included.',
      philosophy: null, specialty: 'Jazz records; inexpensive drinks.',
      anecdotes: [
        { text: 'A March 2026 visitor found it nothing like a refined jazz café — more a worn bar open almost till dawn — and had kombu tea for about ¥500.', source: R + 'B525630429/' },
        { text: 'Waiting for someone in July 2026, a visitor had a ¥500 coffee among walls of jazz records.', source: R + 'B531346868/' },
        { text: 'A September 2026 visitor climbed the stairs behind a sticker-covered door to a room of vintage amplifiers and speakers.', source: R + 'B537853332/' },
      ],
      japanese_sources_summary: '食べログ: ジャズin ろくでなし、喫茶店、下京区木屋町通四条下る斎藤町127、祇園四条駅から135m、毎日 15:00〜翌2:00、カード・電子マネー不可、喫煙可、日本酒・焼酎・ワイン・カクテル。口コミ (2024年1月〜2026年9月、英語): 2階の入口、レコードが並ぶ店内、ヴィンテージのアンプとスピーカー、リクエストできる、コーヒー500円、昆布茶、ラム、ジンライム、自家製のラムや梅酒のソーダ、ひえのポップコーン、夜はお酒が中心、夜明け近くまで開く。',
      confidence: 'medium', sources: [TB, SITE, R + 'B478714969/', R + 'B491290452/', R + 'B491526766/', R + 'B501406525/', R + 'B525630429/', R + 'B531346868/', R + 'B537853332/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoky jazz bar; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通四条下る斎藤町127',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002956, 135.770635); cross-checked: GSI 京都府京都市下京区斎藤町127番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531346868/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Coffee', '¥500', 'Drinks', 'ask', 'ask', 'July 2026 review.', 'coffee'),
      it('', '', 'Kombu tea', '', 'Drinks', 'ask', 'ask', 'March 2026 review.', 'kobucha'),
    ] }, {
    cuisine: '夜はバーになるジャズ喫茶 (2024〜26年の口コミ): コーヒー500円 (2026年7月)、昆布茶、ラム、ジンライム、自家製のラムや梅酒のソーダ、カクテル、日本酒、焼酎、ワイン (食べログ)、酒のあてのひえのポップコーン (2024年1月)、レコードのリクエスト',
    neighborhood: '四条の南の木屋町。祇園四条駅の近く',
    gf_detail: '要確認。ほぼ飲み物。ポップコーンなどのつまみ (2024〜26年の口コミ)。',
    vegan_detail: '要確認。ほぼ飲み物。コーヒー、昆布茶、酒 (2026年の口コミ)。',
    notes: '[ジャズ喫茶とバー・木屋町] 木屋町の階段の上の、レコードが並ぶ古びたジャズの店。昼過ぎから深夜2時まで。昼はコーヒーや昆布茶500円ほど、夜はラムや梅酒のソーダ、ヴィンテージのアンプと店主のレコードのリクエスト。現金のみ。喫煙可。',
  });
}

// ================================================================ 焼肉処 大志亭 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017397/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ts-pound.com/taishitei/';
  const D = day(['17:30', '25:00']);
  put({
    id: 'kyoto_taishitei_kiyamachi', name: '焼肉処 大志亭 木屋町店 (Yakiniku Taishitei, Kiyamachi)', category: 'OMNI',
    lat: 35.00478, lng: 135.770263, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-marinated meats and sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku restaurant (2026 reviews).',
    hours_raw: 'Tue–Sun 17:30–1:00 (last order 0:30); closed Monday (Tuesday if Monday is a holiday) (Tabelog). Bookings taken (Tabelog; TableCheck). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 30 seats — a counter and small tables downstairs, 23 seats upstairs for parties; smoking allowed, with seating adjusted on request (Tabelog). Mobile ordering (January 2026 review). Friendly, attentive foreign staff, two 2026 reviews note. In an alley between Kiyamachi and Kawaramachi, 2 min from Hankyu Kawaramachi Stn exit 5 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi-Kawaramachi alley, north of Shijo — 2 min from Kawaramachi Stn',
    cuisine: 'Yakiniku of Kobe beef and kuroge wagyu with plenty of offal (TableCheck; 2022–26 reviews): salted tongue, assorted horumon, beef tendon with ponzu, garlic ponzu dip, ume kimchi and soup to finish (2026); a red-meat assortment, special yukhoe and napa kimchi (2024); draft beer in frosted mugs, shochu and wine (reviews; Tabelog)',
    website: SITE, gmaps: gm('大志亭 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Kiyamachi] A late-opening yakiniku in a small alley off Kiyamachi, open till 1:00: Kobe and kuroge wagyu, salted tongue and a broad offal list, with frosted-mug draft beer and a party floor upstairs. About ¥3,000–5,000. Smoking allowed; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 26 September 2013 (Tabelog). Run by the T\'s pound group (ts-pound.com), which also operates 熟成焼肉 听 京都駅前店 (TableCheck).',
      philosophy: 'Kobe beef and kuroge wagyu, with beef raised from the pasture up, paired with wine and sake (TableCheck).',
      specialty: 'Horumon; salted tongue.',
      anecdotes: [
        { text: 'On the last night of a January 2026 trip, a diner came for horumon after yakitori and a course meal, and ordered salted tongue, an offal platter and ume kimchi.', source: R + 'B520190046/' },
        { text: 'A June 2026 visitor with two smoker friends was glad smoking is allowed, and was steered to the garlic ponzu.', source: R + 'B530129328/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉処 大志亭 木屋町店、焼肉・韓国料理・居酒屋、中京区紙屋町369-2、阪急河原町駅5番出口から徒歩2分、京阪祇園四条駅3番出口から徒歩5分、火〜日 17:30〜翌1:00 (L.O. 0:30)、月曜休み (祝日の場合は火曜)、予約可、カード可、電子マネー不可、30席 (2階23名)、喫煙可 (席の配慮あり)、2013年9月26日オープン。TableCheck: ts-pound.com、神戸牛と黒毛和牛、同じグループの熟成焼肉 听 京都駅前店。口コミ (2026年1〜10月、英語): 塩タン、ホルモン盛り合わせ、梅キムチ、牛すじポン酢、ニンニクポン酢、冷えたジョッキの生ビール、締めのスープ、モバイルオーダー、外国人スタッフが親切。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.tablecheck.com/th/taishitei', R + 'B520190046/', R + 'B525552655/', R + 'B530129328/', R + 'B537668215/', R + 'B490124697/', R + 'B488411822/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町369-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004717, 135.770263) is 0.7 m from kyoto_chiritori_nabe_isono (369-1, the next lot), so moved ~7 m north to 35.004780 (7.7 m from it); cross-checked: GSI 京都府京都市中京区紙屋町369番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520190046/'],
    price_note: 'No current prices read (2024 prices in older reviews).', last_checked: TODAY, items: [
      it('', '', 'Salted beef tongue', '', 'Yakiniku', 'ask', 'no', 'January 2026 review.', 'shio_tan'),
      it('', '', 'Assorted horumon platter', '', 'Yakiniku', 'ask', 'no', 'January 2026 review.', 'horumon_mori'),
    ] }, {
    cuisine: 'ホルモンの多い、神戸牛と黒毛和牛の焼肉 (TableCheck、2022〜26年の口コミ): 塩タン、ホルモン盛り合わせ、牛すじポン酢、ニンニクポン酢のたれ、梅キムチ、締めのスープ (2026年)。赤身の盛り合わせ、特製ユッケ、白菜キムチ (2024年)。冷えたジョッキの生ビール、焼酎、ワイン (口コミ、食べログ)',
    neighborhood: '木屋町と河原町の間の路地、四条の北。河原町駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。たれに漬けた肉とたれ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉店 (2026年の口コミ)。',
    notes: '[焼肉・木屋町] 木屋町の小さな路地の、深夜1時まで開く焼肉店。神戸牛や黒毛和牛、塩タン、豊富なホルモンを、冷えたジョッキの生ビールと。2階は宴会向け。3千〜5千円ほど。喫煙可。月曜休み。',
  });
}

save();
