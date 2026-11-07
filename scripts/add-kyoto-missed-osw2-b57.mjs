// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 57.
//   Queue run from the osw2 worktree, 2026-11-07. Core finishes with three shops; the fourth comes from rest, nearest-first.
//   core (queue.mjs kyoto-missed next core 200 — the last three lane ids):
//   + ゑびす屋加兵衛 Ebisuya Kahei (yarai-mochi shop near Shimogamo Shrine)
//   + ことばのはおと Kotoba no Haoto (book café in a townhouse near Kuramaguchi, known for a cat parfait)
//   + カレーとお酒のお店 サンライト SUNLIGHT (spice curry and drinks counter near Enmachi; run by a couple)
//   rest (queue.mjs kyoto-missed next rest 2000, lane ids nearest-first):
//   - 俵屋吉富 高島屋京都店, 神戸北野坂 串かつ, すし田 乾山 京都高島屋店, 天ぷら新宿つな八 京都店, サンドイッチハウス メルヘン 高島屋京都店,
//     菓寮伊藤軒 高島屋京都店, アトリエうかい 髙島屋京都店, アルポルトカフェ 京都高島屋店 — chains, multi-city groups or thin detail.
//   + 和牛ステーキ HIRO Wagyu Steak HIRO (Kobe-beef steak and hamburg house at Kyoto Kawaramachi Garden; since 2024) — reviewers say it is
//     run directly by a meat wholesaler; not on the 弘 group's own shop list (yakiniku-hiro.com/company/group.php, read 2026-11-07).
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: none listed.
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; re-checked against current main before handoff.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018229', '俵屋吉富 高島屋京都店: a chain — five 俵屋吉富 shops in our crawls (本店, 烏丸店, 高島屋京都店, 大丸京都店, JR京都伊勢丹店)');
skip('26014377', '神戸北野坂 串かつ (Kyoto Takashimaya B1F): a take-away counter of a Kobe-based company (Osaka-ya Co., per a 2009 review) also seen at Hankyu Umeda; Tabelog lists no seats or prices, and recent reviews add little detail — thin, not drafted');
skip('26004855', 'すし田 乾山 京都高島屋店: a chain — the 寿司田 group site (sushiden.co.jp/shop.html, read 2026-11-07) lists about 20 shops (すし田乾山, 乾山, 写楽, 寿司田, 古径, 桂) in Tokyo, Osaka, Nagoya, Sapporo, Sendai and Kyoto');
skip('26004273', '天ぷら新宿つな八 京都店: a chain — the official site (tunahachi.co.jp, read 2026-11-07) says it runs 23 restaurants nationwide, including Kyoto and Osaka');
skip('26026413', 'サンドイッチハウス メルヘン 高島屋京都店: a chain — the official site (meruhenk.co.jp) lists shops at Gransta Marunouchi, JR Kyoto Isetan, Atré and more, Tokyo-based');
skip('26043363', '菓寮伊藤軒 高島屋京都店: a chain — the 伊藤軒 site (kyoto-itoken.co.jp, read 2026-11-07) lists eight shops (深草本店, 宇治平等院店, コトチカ四条店, 伏見稲荷店, 京都タワーサンド店, 高島屋京都店, and two 伊藤軒/SOU・SOU shops)');
skip('26036559', 'アトリエうかい 髙島屋京都店: a brand of a large parent — Tabelog links ukai.co.jp/atelier; our crawls list アトリエうかい at Takashimaya Kyoto and Osaka and 六本木うかい亭 (Ukai group)');
skip('26002797', 'アルポルトカフェ 京都高島屋店: a branch of a Tokyo multi-city brand — the official site (alportocaffe.org) lists Kyoto Takashimaya, Nihonbashi Takashimaya and Daimaru Kobe, with chef 片岡護’s Tokyo restaurant アルポルト; not a local group (as with ごはんや一芯); flagged');

// ================================================================ ゑびす屋加兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005587/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_ebisuya_kahei', name: 'ゑびす屋加兵衛 (Ebisuya Kahei)', category: 'OMNI',
    lat: 35.03491901785399, lng: 135.770638190657, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yarai mochi, a rice-cake sweet likened to baked mochi; ingredients are not published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A rice-cake sweet; ingredients are not published (reviews).',
    hours_raw: '10:00–19:00; closed Tuesday; hours may change (Tabelog). No cards; QR payments accepted (Tabelog). A small wagashi shop, mostly take-away, about 6 seats (Tabelog). Yarai mochi keep 3–4 days (May 2025). In a quiet residential street near Shimogamo Shrine, about 10 min from Demachiyanagi Stn (Tabelog; March 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, near Shimogamo Shrine — 10 min from Demachiyanagi Stn',
    cuisine: 'A long-established wagashi shop for yarai mochi, a Kamo speciality: a rice-cake sweet likened to baked mochi or ajari-mochi (March 2025), sold singly or boxed — ¥150 each (June 2023), a pack of five ¥850 (May 2025) · keeps 3–4 days; good with warm tea (2025) · the sweet appears in Kosuke Natsukawa’s novel 『スピノザの診察室』 (2024–2026 reviews)',
    website: null, gmaps: gm('ゑびす屋加兵衛 下鴨'), menu_url: TB,
    notes: "[Wagashi · Shimogamo, yarai mochi by the shrine] A small old sweet shop in a quiet street near Shimogamo Shrine making one thing: yarai mochi, a chewy rice-cake sweet, sold singly (about ¥150) or by the box. Readers of the novel 『スピノザの診察室』 come on its trail. Mostly to take away; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Makers not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a long-established wagashi shop on a back street near Shimogamo Shrine selling yarai mochi, a Kamo speciality that features in Kosuke Natsukawa’s novel 『スピノザの診察室』.',
      philosophy: null,
      specialty: 'Yarai mochi.',
      anecdotes: [
        { text: 'An August 2024 visitor came after reading 『スピノザの診察室』 and was struck by the attentive service.', source: R + 'B490777665/' },
        { text: 'A May 2026 guest stopped after the Aoi Matsuri at Shimogamo Shrine and found the mochi unlike grilled mochi.', source: R + 'B528228572/' },
        { text: 'A September 2025 passer-by was glad yarai mochi can be bought one at a time.', source: R + 'B514309093/' },
      ],
      japanese_sources_summary: '食べログ: ゑびす屋加兵衛、和菓子・甘味処、左京区下鴨松原町13番地、京阪出町柳駅から約10分、10:00〜19:00、火曜定休、カード不可、QR可、6席ほど、禁煙、テイクアウト。口コミ (2023〜2026年、英語): 下鴨神社近くの裏通りの老舗の和菓子屋、加茂の名物「やらい餅」、1個150円、5個入り850円、日持ちは3〜4日、温かいお茶と、夏川草介の小説『スピノザの診察室』に登場、葵祭の帰りに。',
      confidence: 'low', sources: [TB, R + 'B467245986/', R + 'B490777665/', R + 'B503224644/', R + 'B503889134/', R + 'B507253557/', R + 'B514309093/', R + 'B523080742/', R + 'B524309137/', R + 'B528228572/', R + 'B530976183/', R + 'B533523479/', R + 'B534606554/'] },
    cultural_comfort: { level: 'japanese', note: 'Take-away counter; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨松原町13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.034919, 135.770638); cross-checked: GSI 京都府京都市左京区下鴨松原町13番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B467245986/', R + 'B507253557/'],
    price_note: 'Prices from June 2023 and May 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yarai mochi, single', '¥150', 'Sweets', 'ask', 'ask', 'June 2023.', 'yarai_single'),
      it('', '', 'Yarai mochi, pack of five', '¥850', 'Sweets', 'ask', 'ask', 'May 2025.', 'yarai_five'),
    ] }, {
    cuisine: '加茂の名物やらい餅の老舗の和菓子屋: 焼き餅に似た餅菓子、1個150円 (2023年6月)、5個入り850円 (2025年5月)・日持ちは3〜4日、温かいお茶と (2025年)・夏川草介の小説『スピノザの診察室』に登場 (2024〜2026年の口コミ)',
    neighborhood: '下鴨、下鴨神社の近く。出町柳駅から10分',
    gf_detail: '要確認。餅菓子のやらい餅。原材料は公開されていない (口コミ)。',
    vegan_detail: '要確認。餅菓子。原材料は公開されていない (口コミ)。',
    notes: '[和菓子・下鴨、神社そばのやらい餅] 下鴨神社近くの静かな通りの小さな老舗の菓子屋。作るのはもちもちの餅菓子、やらい餅ひとつ。1個 (150円ほど) からでも箱でも。小説『スピノザの診察室』の読者も訪れる。ほぼ持ち帰り、火曜休み。',
  });
}

// ================================================================ ことばのはおと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029479/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kotobanohaoto.net/';
  const H = day(['11:30', '19:00']);
  put({
    id: 'kyoto_kotoba_no_haoto', name: 'ことばのはおと (Kotoba no Haoto)', category: 'OMNI',
    lat: 35.037139127846224, lng: 135.7507251706934, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plate lunches of a main and small sides with rice and miso soup, chiffon cake and the cat parfait; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: plates such as pork-wrapped aubergine, and cream parfaits (reviews).',
    hours_raw: '11:30–19:00 (last order 18:00), Wednesday–Sunday; closed Monday and Tuesday; hours may change (Tabelog). No reservations. Cash only (Tabelog; 2024). 12 seats on tatami with cushions; shoes off; non-smoking (Tabelog; February 2024). The cat parfait can take about an hour, and until 13:00 other dishes are served first (January and June 2026). A quiet book café — solo visitors favoured (2026 reviews). In a townhouse with a small garden in a residential street, 3 min from the Tenjin Koen-mae bus stop, 12 min from Kuramaguchi Stn (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Kuramaguchi, Tenjin Koen-mae — 12 min walk from Kuramaguchi Stn',
    cuisine: 'A book café in a townhouse (2023–2026 reviews) · the "Nyan Nyan" cat parfait with seasonal fruit, e.g. strawberry and chocolate ¥1,375 (2024), grapes and pears (October 2024) · plate lunch of a main with four sides, salad, rice and miso soup — e.g. pork-wrapped aubergine, glass noodles, hijiki, warm tofu (2024–2026) · chiffon cake; coffee ¥550 (2024)',
    website: SITE, gmaps: gm('ことばのはおと 上京区'), menu_url: TB,
    notes: "[Book café · near Kuramaguchi, tatami, books and a cat parfait] A quiet townhouse café with a small garden, tatami and shelves of books, made for reading alone. Lunch is a homely plate of a main and four sides; the star is the \"Nyan Nyan\" cat parfait (about ¥1,400) — slow to arrive, so bring a book. Shoes off; cash only; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a book café in a traditional townhouse with a small garden, a guest notebook, and a much-photographed cat-shaped parfait.',
      philosophy: null,
      specialty: 'Nyan Nyan cat parfait.',
      anecdotes: [
        { text: 'A March 2023 visitor read the guest notebook and was moved by how loved the place is.', source: R + 'B464230527/' },
        { text: 'An April 2026 solo guest came first for the cat parfait and waited far longer than expected.', source: R + 'B527698873/' },
        { text: 'A three-time visitor (June 2026) found a free table by luck and had the plate meal with the parfait.', source: R + 'B504020368/' },
      ],
      japanese_sources_summary: '食べログ: ことばのはおと、カフェ、上京区天神北町12-1、市バス「天神公園前」から徒歩3分、鞍馬口駅から徒歩12分、水〜日 11:30〜19:00 (L.O. 18:00)、月火定休、予約不可、カード・電子マネー・QR不可、12席、禁煙。口コミ (2023〜2026年、英語): 町家のブックカフェ、小さな庭、畳と座布団、靴を脱ぐ、本棚、自由帳、季節の果物の「にゃんにゃんパフェ」 (いちごとチョコ1,375円、ぶどうと梨)、メインと小鉢4品・サラダ・ご飯・味噌汁のプレート、豚肉巻きの茄子、春雨、ひじき、温豆腐、シフォンケーキ、コーヒー550円、パフェは1時間ほどかかる、13時までは他の料理が優先、現金のみ、ひとり客向き、興聖寺の近く。',
      confidence: 'medium', sources: [TB, SITE, R + 'B464230527/', R + 'B471395097/', R + 'B476093240/', R + 'B480426693/', R + 'B492015557/', R + 'B492053538/', R + 'B494460960/', R + 'B504020368/', R + 'B512896564/', R + 'B521894815/', R + 'B527698873/', R + 'B529948499/'] },
    cultural_comfort: { level: 'japanese', note: 'Shoes off; cash only; quiet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区天神北町12-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.037139, 135.750725); cross-checked: GSI 京都府京都市上京区天神北町12番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476093240/'],
    price_note: 'Prices from a 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Nyan Nyan cat parfait (seasonal fruit)', '¥1,375', 'Sweets', 'ask', 'no', 'Takes time.', 'cat_parfait'),
      it('', '', 'Plate lunch (main, four sides, salad, rice, miso soup)', '', 'Lunch', 'ask', 'no', '', 'plate'),
      it('', '', 'Coffee', '¥550', 'Drink', 'gf', 'ask', '', 'coffee'),
    ] }, {
    cuisine: '町家のブックカフェ (2023〜2026年の口コミ)・季節の果物の「にゃんにゃんパフェ」、たとえばいちごとチョコ1,375円 (2024年)、ぶどうと梨 (2024年10月)・メインと小鉢4品、サラダ、ご飯、味噌汁のプレート、たとえば豚肉巻きの茄子、春雨、ひじき、温豆腐 (2024〜2026年)・シフォンケーキ、コーヒー550円 (2024年)',
    neighborhood: '鞍馬口の近く、天神公園前。鞍馬口駅から徒歩12分',
    gf_detail: '要確認。メインと小鉢のプレート、ご飯、味噌汁、シフォンケーキ、猫のパフェ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉巻きの茄子などのプレート、クリームのパフェ (口コミ)。',
    notes: '[ブックカフェ・鞍馬口近く、畳と本と猫のパフェ] 小さな庭のある静かな町家のカフェ。畳と本棚、ひとりで本を読むための場所。昼はメインと小鉢4品の家庭的なプレート、主役は「にゃんにゃんパフェ」 (1,400円ほど)。時間がかかるので本を片手に。靴を脱いで、現金のみ、月火休み。',
  });
}

// ================================================================ SUNLIGHT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032437/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_sunlight_curry_enmachi', name: 'カレーとお酒のお店 サンライト (SUNLIGHT)', category: 'OMNI',
    lat: 35.018875867850326, lng: 135.72717176052544, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries and biryani with rice, with toppings such as chicken cutlet; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: game and meat keema curries, sausages (reviews).',
    hours_raw: 'Lunch 11:30–15:00, dinner 18:00–21:00, Monday–Saturday; closed Sunday; hours may change — specials and days are posted on Instagram (Tabelog; March 2026). No reservations; lunch queues of about 30 minutes, with orders taken while waiting (May 2026). No cards; e-money and PayPay accepted (Tabelog). 5 counter seats; non-smoking (Tabelog). Run by a husband-and-wife team (September 2026). 5 min walk from Enmachi Stn (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinokyo, near Enmachi Stn — 5 min walk',
    cuisine: 'Spice curry and drinks, often with game (2026 reviews) · venison and root-vegetable keema for the 7th anniversary (May 2026); squid-ink keema (March 2026); soy-milk tantan keema with nuts and fried broccoli (May 2026); coconut curries such as broccoli and aubergine (September 2026) · biryani days: sausage and mixed-meat biryani with curry (September 2026) · chicken cutlet topping ¥200 — a full plate about ¥1,000 (2026) · at night: momo, wild-boar hamburg steak, fried young corn (October 2026)',
    website: null, gmaps: gm('SUNLIGHT カレー 円町'), menu_url: TB,
    notes: "[Spice curry · Enmachi, a couple's five-seat curry and game counter] A tiny five-seat counter near Enmachi where a husband and wife cook monthly spice curries, often with game — venison keema, wild-boar hamburg — plus soy-milk tantan keema and biryani days, about ¥1,000–2,000. Expect a lunch queue; drinks and small plates at night. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Run by a husband and wife (September 2026); names not given'], origin: null,
      background: 'Reviewers (2026) describe a popular Enmachi spice-curry counter with gibier specials and a seventh-anniversary curry in May 2026, run by a couple.',
      philosophy: null,
      specialty: 'Spice curry with game.',
      anecdotes: [
        { text: 'A fourteen-time regular (October 2026) had steamed momo, a wild-boar hamburg and fried young corn at night.', source: R + 'B419101641/' },
        { text: 'A September 2026 diner who usually cries at the spice found the biryani mild and generous with sausage.', source: R + 'B504526594/' },
        { text: 'A September 2026 parent on the way to a school festival was impressed by the couple cooking and serving.', source: R + 'B535738458/' },
      ],
      japanese_sources_summary: '食べログ: カレーとお酒のお店 サンライト (SUNLIGHT)、カレー、中京区西ノ京伯楽町25-2、円町駅から徒歩5分、月〜土 11:30〜15:00・18:00〜21:00、日曜定休、予約不可、カード不可、電子マネー・PayPay可、5席、禁煙。口コミ (2026年、英語): スパイスカレーとお酒、ジビエ、7周年の鹿肉と根菜のキーマ (2026年5月)、イカ墨のキーマ (2026年3月)、豆乳担々キーマ、ブロッコリーと茄子のココナッツカレー、ビリヤニの日、ソーセージのビリヤニ、チキンカツのトッピング200円、夜はモモ、猪のハンバーグ、ヤングコーンのフライ、昼は30分ほど並ぶ、夫婦で営む、Instagramで告知。',
      confidence: 'medium', sources: [TB, R + 'B419101641/', R + 'B420661787/', R + 'B493435468/', R + 'B504526594/', R + 'B524231295/', R + 'B524254760/', R + 'B524922148/', R + 'B526224035/', R + 'B528076493/', R + 'B528616362/', R + 'B533977387/', R + 'B535738458/'] },
    cultural_comfort: { level: 'japanese', note: 'Five seats; queue at lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西ノ京伯楽町25-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.018876, 135.727172); cross-checked: GSI 京都府京都市中京区西ノ京伯楽町25番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533977387/'],
    price_note: 'Prices from 2026 reviews; curries change monthly.', last_checked: TODAY, items: [
      it('', '', 'Spice curry of the month', '', 'Curry', 'ask', 'no', '', 'curry'),
      it('', '', 'Chicken cutlet topping', '¥200', 'Topping', 'no', 'no', '2026.', 'katsu_topping'),
      it('', '', 'Biryani and curry set (biryani days)', '', 'Curry', 'ask', 'no', 'September 2026.', 'biryani'),
    ] }, {
    cuisine: 'スパイスカレーとお酒、ジビエも多い (2026年の口コミ)・7周年の鹿肉と根菜のキーマ (2026年5月)、イカ墨のキーマ (2026年3月)、ナッツと揚げブロッコリーの豆乳担々キーマ (2026年5月)、ブロッコリーと茄子のココナッツカレー (2026年9月)・ビリヤニの日: ソーセージと合挽きのビリヤニとカレー (2026年9月)・チキンカツのトッピング200円、1皿1,000円ほど (2026年)・夜はモモ、猪のハンバーグ、ヤングコーンのフライ (2026年10月)',
    neighborhood: '西ノ京、円町駅の近く。徒歩5分',
    gf_detail: '要確認。スパイスカレーやビリヤニとご飯、チキンカツなどのトッピング。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。ジビエや肉のキーマ、ソーセージ (口コミ)。',
    notes: '[スパイスカレー・円町、夫婦で営む5席のカレーとジビエ] 円町近くの5席の小さなカウンター。夫婦で月替わりのスパイスカレーを作り、鹿のキーマや猪のハンバーグなどジビエも多い。豆乳担々キーマやビリヤニの日も。1,000〜2,000円ほど。昼は行列、夜はお酒と小皿。日曜休み。',
  });
}

// ================================================================ 和牛ステーキ HIRO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041827/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_wagyu_steak_hiro_kawaramachi', name: '和牛ステーキ HIRO (Wagyu Steak HIRO)', category: 'OMNI',
    lat: 35.003452058991904, lng: 135.76975937990125, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu and Kobe-beef steaks, teppan-yaki, hamburg steaks and a breaded steak katsu, with rice or baguette; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steak house (Tabelog).',
    hours_raw: '11:00–22:00 (last order 21:30), daily; lunch menu until 15:00 (Tabelog). Bookings accepted. Cards, PayPay and Alipay; no e-money (Tabelog). 64 seats with sofa seating and power outlets; non-smoking; English and Chinese menus with photos; children welcome (Tabelog). On the 8th floor of Kyoto Kawaramachi Garden (the EDION building) above Hankyu Kawaramachi Stn Exit 2 (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi — Kyoto Kawaramachi Garden 8F',
    cuisine: 'Wagyu and Kobe-beef steaks and hamburgs from a meat wholesaler’s own restaurant (2026 reviews) · Kobe-beef cheese hamburg ¥3,608; wagyu teppan-yaki ¥3,828, with rice or baguette, salad and soup (October 2026) · wagyu steak katsu ¥4,048 (October 2026); 180 g Kobe-beef hamburg with grated daikon (October 2026) · Kobe-beef loco moco and value sets at lunch (Tabelog) · sirloin and popular wagyu cuts; sake and wine (Tabelog)',
    website: null, gmaps: gm('和牛ステーキ HIRO 河原町'), menu_url: TB,
    notes: "[Steak · Shijo-Kawaramachi, wagyu from a meat wholesaler] A roomy, sofa-lined steak house on the 8th floor above Hankyu Kawaramachi, run by a meat wholesaler: Kobe-beef hamburg, wagyu teppan-yaki and a crisp wagyu steak katsu, about ¥3,600–4,000 with rice, salad and soup. English and Chinese menus; open daily 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Operator not named; reviewers describe it as run directly by a meat wholesaler'], origin: null,
      background: 'Opened 29 October 2024 (Tabelog). Tabelog’s introduction: popular wagyu cuts and Kobe beef with side dishes; lunch-only items such as a Kobe-beef loco moco. Reviewers (2026) say it is a direct operation of a meat wholesaler.',
      philosophy: null,
      specialty: 'Kobe-beef hamburg; wagyu teppan-yaki.',
      anecdotes: [
        { text: 'An October 2026 day-tripper ended a Kyoto visit here with Kobe beef and wagyu.', source: R + 'B536818216/' },
        { text: 'An October 2026 diner had the crisp wagyu steak katsu with a Kobe-beef hamburg under grated daikon.', source: R + 'B538008908/' },
        { text: 'A November 2026 repeat visitor came back for a lunch of high-quality meat.', source: R + 'B535184141/' },
      ],
      japanese_sources_summary: '食べログ: 和牛ステーキ HIRO、ステーキ・洋食・ハンバーグ、下京区四条通河原町東入真町68 京都河原町ガーデン8F、阪急京都河原町駅2番出口から徒歩3分、京阪祇園四条駅から徒歩7分、毎日 11:00〜22:00 (L.O. 21:30)、ランチは15時まで、予約可、カード・PayPay・Alipay可、電子マネー不可、64席、ソファ席、電源、禁煙、英語・中国語メニュー、子ども可、2024年10月29日オープン。公式紹介: 人気部位の和牛と神戸牛、サイドメニュー、昼は神戸牛のロコモコなど。口コミ (2026年、英語): 精肉卸の直営、神戸牛チーズハンバーグ3,608円、和牛の鉄板焼き3,828円 (ご飯かバゲット、サラダ、スープ)、和牛ステーキカツ4,048円、180gの神戸牛ハンバーグのおろし、エディオンのビル8階。',
      confidence: 'medium', sources: [TB, R + 'B535184141/', R + 'B536664471/', R + 'B536818216/', R + 'B536827007/', R + 'B536857207/', R + 'B537353252/', R + 'B537858355/', R + 'B538008908/', R + 'B538024555/', R + 'B538411657/', R + 'B538568457/', R + 'B538646350/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通河原町東入真町68 京都河原町ガーデン 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with booking; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003452, 135.769759); cross-checked: GSI 京都府京都市下京区真町68番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537353252/', R + 'B538008908/'],
    price_note: 'Prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Kobe-beef cheese hamburg set', '¥3,608', 'Main', 'ask', 'no', 'With rice or baguette, salad and soup.', 'kobe_hamburg'),
      it('', '', 'Wagyu teppan-yaki set', '¥3,828', 'Main', 'ask', 'no', 'With rice or baguette, salad and soup.', 'teppan'),
      it('', '', 'Wagyu steak katsu', '¥4,048', 'Main', 'no', 'no', 'October 2026.', 'steak_katsu'),
    ] }, {
    cuisine: '精肉卸の直営の和牛と神戸牛のステーキとハンバーグ (2026年の口コミ)・神戸牛チーズハンバーグ3,608円、和牛の鉄板焼き3,828円、ご飯かバゲット、サラダ、スープ付き (2026年10月)・和牛ステーキカツ4,048円 (2026年10月)、おろしの180g神戸牛ハンバーグ (2026年10月)・昼は神戸牛のロコモコやお得なセット (食べログ)・サーロインや人気の和牛の部位、日本酒とワイン (食べログ)',
    neighborhood: '四条河原町、京都河原町ガーデン8階',
    gf_detail: '要確認。和牛や神戸牛のステーキ、鉄板焼き、ハンバーグ、衣のステーキカツ、ご飯かバゲット。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のステーキの店 (食べログ)。',
    notes: '[ステーキ・四条河原町、精肉卸の和牛] 阪急河原町の上の8階の、ソファ席の広いステーキ店。精肉卸が営み、神戸牛ハンバーグ、和牛の鉄板焼き、カリッとした和牛ステーキカツを、ご飯、サラダ、スープ付きで3,600〜4,000円ほど。英語・中国語メニュー、毎日11:00〜22:00。',
  });
}

save();
