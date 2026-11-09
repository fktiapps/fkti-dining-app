// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 97.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 京都酒場赤まる — chain: Hot Pepper lists four related 赤まる shops beside this one (five in all)
//   + 嘉ド Kado (tantanmen and tantan mazesoba off Nijo-dori; since May 2024)
//   + 八星酒店 Hachiboshi Saketen (standing kaku-uchi bar in a liquor shop by Gojo Stn exit 8)
//   - 京お漬物処やました — retail food shop (Greg 11-07 ruling): a pickle shop on Sannenzaka; no sourced founding date
//   - くうかい はなれ — same-concept sister of 酒と肴 うまいもん くうかい (in data as kyoto_umaimon_kuukai_marutamachi)
//   + 京都 茶の湯 明保野亭 Kyoto Chanoyu Akebonotei (matcha café and tea room on Sannenzaka; since December 2023)
//   - 進々堂 寺町店 — chain: 進々堂 bakery cafés (earlier ruling on 26016962)
//   - お宿いしちょう — hotel listing (ryokan); the public lunch is a lobby café with no current hours
//   + 水上製作所 Mizukami Seisakusho (natural-wine café-bistro near Karasuma-Oike; since July 2021)
//   - FamilyMart 五条新町店 — chain: convenience store
//   - いづ重 北店 — same-concept branch of いづ重 (in data as kyoto_gion_izuju)
//   - BAR AL BOCADILLO — big-chain hotel venue: the bar of ホテル アゴーラ京都四条
//   Brand checks: queue-status.jsonl grepped for 赤まる, 嘉ド, 八星, やました, くうかい, 明保野, 進々堂, いしちょう, 水上製作所,
//   いづ重, BOCADILLO — only 進々堂 has earlier rulings. No draft is a THAN or WILL brand.
//   Service charges (Tabelog Japanese original): none of the four drafts has a section. (赤まる: お通し代お一人様330円.)
//   Pins (checked against main, hidden records included): all four on GSI lots (9–60m); nearest records 20–60m; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26021711', 'chain: Hot Pepper (hotpepper.jp/strJ001017536) lists four related shops — 赤まる, 隠れ家日本酒バル あかまる 離れ, 駅前酒場 AKAMARU 赤まる 横川店, 大手町酒場 赤まる AKAMARU — five with this one');
skip('26011433', 'retail food shop (Greg 11-07 ruling): a Kyoto pickle shop on Sannenzaka (March 2026 review: take-home pickles); no sourced founding date or family history');
skip('26042345', 'same-concept sister shop: a July 2026 review calls it the sister restaurant of 酒と肴 うまいもん くうかい (in data as kyoto_umaimon_kuukai_marutamachi); both are sake izakaya with charcoal grilling and Miyagi dishes');
skip('26000651', 'chain: 進々堂 bakery cafés (earlier ruling on 26016962)');
skip('26030051', 'hotel listing (ryokan お宿いしちょう): the public lunch is a lobby café (July 2026 review; the official site names it 喫茶クリスタル) with no current hours to build a record from');
skip('26042555', 'chain: FamilyMart convenience store');
skip('26000123', 'same-concept branch: a September 2026 review calls it a branch of the Gion restaurant — いづ重 is in data as kyoto_gion_izuju (Kyoto sushi, saba-zushi)');
skip('26036003', 'big-chain hotel venue: the bar of ホテル アゴーラ京都四条 (Tabelog address; February 2025 review: "a bar in a business hotel"); invoice T5010003033108 is 合同会社エス・ホテルオペレーションズ京都四条, a Tokyo hotel-operating company (NTA registry)');

// ================================================================ 嘉ド
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041235/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kado_tantanmen_nijo', name: '嘉ド (Kado)', category: 'OMNI',
    lat: 35.013849937864386, lng: 135.76130806045077, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef- and pork-bone broth with scallops, meat miso (2025–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–15:00 and 17:00–21:00; closed Sundays and holidays; hours may change (Tabelog). A June 2026 visitor found the evening opening about 10 minutes late. Cash only — no cards, e-money or QR (Tabelog). Ticket machine; counter seats with tables at the back; bike parking (2025–26 reviews). On the ground floor of 二条コーポ, Nijo-dori east of Higashinotoin, 339 m from Marutamachi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-Higashinotoin — 339 m from Marutamachi Stn',
    cuisine: 'Tantanmen: a sesame soup on a beef- and pork-bone broth with scallops and seafood, meat miso, medium-thin noodles — ¥1,050 large with 200g of noodles (150g regular), boiled egg ¥150, rice ¥100 (September 2026); tantan mazesoba with mizuna, shiba-zuke pickles, peanuts and diced chashu, ¥1,100 large with 220g (February 2026); chilled tantanmen (July 2025); sesame and Sichuan pepper on the counter',
    website: null, gmaps: gm('嘉ド 担々麺 二条'), menu_url: null,
    notes: '[Tantanmen · Nijo-Higashinotoin] A small tantanmen shop behind red neon off Nijo-dori: a rich, not-too-hot sesame bowl on a beef, pork and scallop broth, and a mazesoba with mizuna and shiba-zuke, finished with rice. Cash only; about ¥1,000.',
    ramen: {
      broth_base: ['blend'], broth_texture: 'unknown', tare: ['other'], aroma_oil: ['other'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: 'unknown', handmade: false, notes: 'Wavy noodles in the tantanmen (July 2025), called medium-thin (September 2026); the mazesoba noodles are short, curly and chewy with a high water content (July 2025, February 2026).' },
      regional_style: [], sub_genre: ['tantanmen', 'shiru_nashi_tantanmen'],
      signature_bowl: 'Tantanmen — ¥1,050 large (200g of noodles) in September 2026.',
      chashu: 'Meat miso on the tantanmen (December 2025); diced chashu in the mazesoba (February 2026).',
      notable_toppings: ['meat miso', 'mizuna', 'shiba-zuke pickles', 'peanuts', 'green onion', 'special boiled egg (+¥150)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Beef- and pork-bone broth; meat miso.' },
      pantheon: 'A beef-, pork- and scallop-based sesame tantanmen that stays mild enough for the spice-shy, and a tantan mazesoba lifted by shiba-zuke and peanuts — down a short passage off Nijo-dori behind red neon.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B528418940/', '"a rich sesame flavor that balanced well with the spiciness, making it a thick yet enjoyable bowl" (December 2025).'],
        oiliness: [R + 'B536235051/', 'No reviewer comments on oil; "rich umami and no excessive spiciness" (September 2026).'],
        clarity: [R + 'B528418940/', '"a thick yet enjoyable bowl" (December 2025); "the rich broth" (B485238279, July 2025).'],
        tare_strength: [R + 'B535507665/', '"not too spicy and had a nice tang to it" (September 2026).'],
        noodle_firmness: [R + 'B538288174/', '"high water content, giving them a nice chewy texture" (mazesoba, February 2026); medium-thin in the soup (B536235051).'],
        aroma_punch: [R + 'B485238279/', '"I added some sesame and Chinese pepper from the table to change up the flavor" (July 2025).'],
      },
    },
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 15 May 2024 (Tabelog). A young trainee was learning at the counter in June 2026 (review).',
      philosophy: null,
      specialty: 'Tantanmen; tantan mazesoba.',
      anecdotes: [
        { text: 'A diner who had moved to Kyoto was coming once a week by June 2025, mixing the last of the mazesoba with rice.', source: R + 'B497246148/' },
        { text: 'A September 2026 visitor who can handle only level 2 at CoCo Ichibanya found the tantanmen just right, after two years of meaning to go.', source: R + 'B536235051/' },
        { text: 'On 16 July 2025, Gion Festival day, a regular picked it as a lunch spot away from the crowds.', source: R + 'B485238279/' },
      ],
      japanese_sources_summary: '食べログ: 嘉ド、担々麺、中京区松屋町40 二条コーポ1F、丸太町駅から339m、月〜土 11:30〜15:00・17:00〜21:00、日曜・祝日休み、現金のみ、禁煙、2024年5月15日オープン。口コミ (2025〜2026年、英語): 担々麺、牛骨と豚骨にホタテと魚介のスープ、ごまの香り、肉みそ、大盛り1,050円 (麺200g)、ゆで卵150円、ご飯100円、汁なし担々麺1,100円 (大盛り220g)、水菜、しば漬け、ピーナッツ、券売機、カウンターと奥にテーブル、バイクを止められる。',
      confidence: 'medium', sources: [TB, R + 'B485238279/', R + 'B497246148/', R + 'B510219084/', R + 'B528418940/', R + 'B530443105/', R + 'B535507665/', R + 'B536235051/', R + 'B538288174/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通東洞院通東入松屋町40 二条コーポ1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013850, 135.761308); cross-checked: GSI 京都府京都市中京区松屋町40番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536235051/', R + 'B538288174/'],
    price_note: 'Prices from September 2026 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tantanmen, large (200g)', '¥1,050', 'Noodles', 'no', 'no', 'September 2026 review.', 'tantanmen_l'),
      it('', '', 'Tantan mazesoba, large (220g)', '¥1,100', 'Noodles', 'no', 'no', 'February 2026 review.', 'mazesoba_l'),
      it('', '', 'Special boiled egg', '¥150', 'Toppings', 'ask', 'no', 'September 2026 review.', 'egg'),
      it('', '', 'White rice', '¥100', 'Sides', 'ask', 'ask', 'September 2026 review.', 'rice'),
    ] }, {
    cuisine: '担々麺: 牛骨と豚骨にホタテと魚介のごまのスープ、肉みそ、中細麺 — 大盛り (麺200g、並は150g) 1,050円、ゆで卵150円、ご飯100円 (2026年9月)、水菜、しば漬け、ピーナッツ、角切りチャーシューの汁なし担々麺、大盛り (220g) 1,100円 (2026年2月)、冷やし担々麺 (2025年7月)、卓上にごまと花椒',
    neighborhood: '二条東洞院。丸太町駅から339m',
    gf_detail: 'グルテンフリー不可。小麦の麺 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛骨と豚骨とホタテのスープ、肉みそ (2025〜26年の口コミ)。',
    notes: '[担々麺・二条] 二条の通りから少し入った赤いネオンの小さな担々麺の店。牛と豚とホタテのスープのコクのある辛すぎないごまの一杯と、水菜としば漬けの汁なし担々麺。最後はご飯で。現金のみ、1,000円ほど。',
  });
}

// ================================================================ 八星酒店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013713/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hachiboshi_saketen_gojo', name: '八星酒店 (Hachiboshi Saketen)', category: 'OMNI',
    lat: 34.99416563321819, lng: 135.7595262516721, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Self-serve drinks — beer, canned chuhai, shochu — and packaged or pickled snacks from the fridge and shelf (2024–26 reviews); labels can be read before buying.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pickled eggplant and other fridge snacks (2024 reviews); fried squid and other snacks are not vegan.',
    hours_raw: 'Hours not listed on Tabelog. Busy from early evening with after-work regulars (2024–26 reviews). Cash only — no cards, e-money or QR (Tabelog). Standing bar inside a liquor shop: take drinks and snacks from the glass fridge and shelf, the staff bring glasses and warm snacks; kept shochu bottles on the wall shelf (2024–26 reviews). Smoking allowed (Tabelog). On Karasuma-dori north of Rokujo, just outside Gojo Stn exit 8 (Tabelog; November 2026 review).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Rokujo — by Gojo Stn exit 8',
    cuisine: 'Kaku-uchi: drinks at shop prices from the fridge — bottled beer, canned chuhai, highballs, shochu with hot water from a kettle on the stove, a kept 720ml shochu bottle about ¥1,500 (February 2026) — with snacks from the shelf such as fried squid (November 2026) and spicy pickled small eggplant, warmed on request (2024); under ¥1,000',
    website: null, gmaps: gm('八星酒店 烏丸六条'), menu_url: null,
    notes: '[Kaku-uchi · Gojo] A packed standing bar in a liquor shop by Gojo Stn exit 8: help yourself from the fridge, get a glass and a warmed snack from the staff, and drink with the after-work regulars. Under ¥1,000; cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A liquor shop with a standing bar (Tabelog). The owner sits at the back and prepares glasses, ice and warmed snacks when called (October 2024 review).',
      philosophy: null,
      specialty: 'Self-serve drinks and snacks.',
      anecdotes: [
        { text: 'A November 2026 regular took a can of chuhai from the fridge and fried squid from the shelf, and the owner brought a small glass and a dish; one can became two.', source: R + 'B479535779/' },
        { text: 'In February 2026 the same regular\'s friend took down a kept shochu bottle and was handed a kettle off the stove for the hot water.', source: R + 'B479535779/' },
      ],
      japanese_sources_summary: '食べログ: 八星酒店、バー、下京区北町182、五条駅から142m、営業時間の記載なし、現金のみ、喫煙可、酒屋の立ち飲み。口コミ (2024〜2026年、英語): 五条駅8番出口のすぐ外、冷蔵庫から飲み物とつまみを自分で取る、グラスと温めは店の人、ボトルキープの焼酎、やかんのお湯割り、仕事帰りの常連でいっぱい。',
      confidence: 'medium', sources: [TB, R + 'B479535779/', R + 'B101735671/', R + 'B491487370/', R + 'B498645205/'] },
    cultural_comfort: { level: 'japanese', note: 'A small regulars\' standing bar; follow what others do at the fridge (2024–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通六条上ル北町182',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; a review records visits through November 2026.' },
    pin_source: `Tabelog ${TB} (34.994166, 135.759526); cross-checked: GSI 京都府京都市下京区北町182番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479535779/'],
    price_note: 'Shop prices; reviews give under ¥1,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Kept shochu bottle (720ml)', 'about ¥1,500', 'Drinks', 'ask', 'ask', 'February 2026 visit.', 'shochu_bottle'),
    ] }, {
    cuisine: '角打ち: 冷蔵庫から店の値段で — 瓶ビール、缶チューハイ、ハイボール、ストーブのやかんのお湯で焼酎のお湯割り、ボトルキープの焼酎720mlが1,500円ほど (2026年2月) — 棚のつまみはいかの揚げ物 (2026年11月) や小なすの辛い漬物、頼めば温めてくれる (2024年)。1,000円以下',
    neighborhood: '烏丸六条。五条駅8番出口のそば',
    gf_detail: '要確認。飲み物 (ビール、缶チューハイ、焼酎) とつまみは冷蔵庫と棚から自分で選ぶ (2024〜26年の口コミ)。買う前に表示を確認できる。',
    vegan_detail: '要確認。なすの漬物などのつまみ (2024年の口コミ)。いかの揚げ物などはヴィーガン不可。',
    notes: '[角打ち・五条] 五条駅8番出口のそばの酒屋の立ち飲み。冷蔵庫から自分で取り、グラスと温めたつまみは店の人から。仕事帰りの常連と一杯。1,000円以下、現金のみ、喫煙可。',
  });
}

// ================================================================ 京都 茶の湯 明保野亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040425/'; const R = TB + 'dtlrvwlst/';
  const FP = 'https://www.fashion-press.net/news/117034';
  const D = day(['10:00', '18:30']);
  put({
    id: 'kyoto_chanoyu_akebonotei_kiyomizu', name: '京都 茶の湯 明保野亭 (Kyoto Chanoyu Akebonotei)', category: 'OMNI',
    lat: 34.99639023285417, lng: 135.78099766059142, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and matcha lattes (2024 article); wagashi with the tea-room matcha (April 2026); ice cream and sweets on the ground floor (April 2026); ingredients not stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain whisked matcha in the tea room (April 2026); the lattes use milk unless a substitute is offered (not stated).',
    hours_raw: 'Daily 10:00–18:30 (food L.O. 17:30); closing days may vary (Tabelog). Ground-floor café counter with matcha drinks, ice cream and sweets; tea rooms upstairs for a matcha experience — 30 min ¥3,500 booked by phone, or ¥2,500 same day when a staff member is free (2024 article; April 2026 review). 36 seats; cards and e-money, no QR; non-smoking; children welcome (Tabelog). On Sannenzaka near Kiyomizu-dera (Tabelog; July 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sannenzaka, below Kiyomizu-dera',
    cuisine: 'Matcha café: matcha latte ¥660–770, rich matcha latte ¥770–880, hot or iced (2024 article); matcha beer (February 2025); matcha and wagashi in the upstairs tea room ¥1,320 (April 2026); ice cream and sweets',
    website: null, gmaps: gm('京都 茶の湯 明保野亭'), menu_url: null,
    notes: '[Matcha · Sannenzaka] A matcha café in an old Sannenzaka building tied to the last years of the Edo period: matcha lattes at the counter below, and upstairs tea rooms where you pick a bowl and kneel for whisked matcha and a sweet. About ¥700–1,500.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社シナジー (Tokyo; Tabelog invoice number T8010001124046, NTA registry)'], origin: null,
      background: 'Set inside 明保野亭, a Sannenzaka building linked with the end of the Edo period (2024 article). The ground-floor café opened 19 December 2023 (Tabelog) and the upstairs tea rooms in April 2024 (2024 article).',
      philosophy: null,
      specialty: 'Matcha lattes; tea-room matcha with wagashi.',
      anecdotes: [
        { text: 'An April 2026 couple chose tea bowls upstairs and sat in seiza beside a couple from abroad; the husband was first to shift position, the visitor next.', source: R + 'B526375242/' },
        { text: 'A July 2026 sightseer ducked in to escape a sudden downpour and admired the folding screens over a matcha latte.', source: R + 'B532356503/' },
      ],
      japanese_sources_summary: '食べログ: 京都 茶の湯 明保野亭、カフェ・甘味処、東山区清水2-222、清水五条駅から1,128m、毎日 10:00〜18:30 (料理 L.O. 17:30)、休みは変わることがある、36席、カード・電子マネー可、禁煙、2023年12月19日オープン。記事 (2024年): 清水寺への坂の幕末ゆかりの建物「明保野亭」、1階はカフェ、2階は茶室で抹茶の体験、抹茶ラテ660円から。口コミ (2025〜2026年、英語): 抹茶ビール、茶室で抹茶と和菓子1,320円、好きな茶碗を選ぶ、屏風、抹茶ラテ。',
      confidence: 'medium', sources: [TB, FP, R + 'B501505270/', R + 'B526375242/', R + 'B532356503/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Visitors from abroad in the tea room (April 2026); a tourist-friendly café (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水2-222',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.996390, 135.780998); cross-checked: GSI 京都府京都市東山区清水二丁目222番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [FP, R + 'B526375242/'],
    price_note: 'Latte prices from a 2024 article (tax included); tea-room price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Matcha latte (S / R, hot or iced)', '¥660 / ¥770', 'Drinks', 'ask', 'ask', '2024 article.', 'latte'),
      it('', '', 'Rich matcha latte (S / R, hot or iced)', '¥770 / ¥880', 'Drinks', 'ask', 'ask', '2024 article.', 'rich_latte'),
      it('', '', 'Matcha and wagashi in the tea room', '¥1,320', 'Tea room', 'ask', 'ask', 'April 2026 review.', 'tearoom'),
    ] }, {
    cuisine: '抹茶のカフェ: 抹茶ラテ660〜770円、濃厚抹茶ラテ770〜880円、ホットとアイス (2024年の記事)、抹茶ビール (2025年2月)、2階の茶室で抹茶と和菓子1,320円 (2026年4月)、アイスと甘いもの',
    neighborhood: '産寧坂、清水寺の下',
    gf_detail: '要確認。抹茶と抹茶ラテ (2024年の記事)、茶室の抹茶に和菓子 (2026年4月)、1階のアイスと甘いもの (2026年4月)。材料は不明。',
    vegan_detail: '要確認。茶室の抹茶だけなら (2026年4月)。ラテはミルク入り、ほかのミルクがあるかは不明。',
    notes: '[抹茶・産寧坂] 幕末ゆかりの産寧坂の建物の抹茶のカフェ。1階のカウンターで抹茶ラテ、2階の茶室では好きな茶碗を選んで正座で抹茶と和菓子。700〜1,500円ほど。',
  });
}

// ================================================================ 水上製作所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036189/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['13:00', '22:00']); const FR = day(['17:00', '22:00']); const SU = day(['08:00', '11:00'], ['13:00', '19:00']);
  put({
    id: 'kyoto_mizukami_seisakusho', name: '水上製作所 (Mizukami Seisakusho)', category: 'OMNI',
    lat: 35.00956971786533, lng: 135.75574117041143, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade roast ham, soups, braised beef tendon with mash and curries alongside scones, quiche, sandwiches and bread (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A chilled carrot soup with pesto (August 2025) and a Manganji-pepper soup (September 2026) appeared; most plates have meat, fish, egg or dairy.',
    hours_raw: 'Mon, Wed, Thu, Sat 13:00–22:00 (L.O. 21:00); Fri 17:00–22:00 (L.O. 21:00); Sun breakfast 8:00–11:00 (L.O. 10:30) and 13:00–19:00 (L.O. 18:30); closed Tuesdays and some irregular days; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Counter seating; one order per person (May 2026 review); non-smoking; takeaway (Tabelog). On the 2nd floor of the MDS building (look for the dance-studio sign), 383 m from Karasuma-Oike Stn (Tabelog; October 2026 review).',
    hours: { 0: WK, 2: WK, 3: WK, 4: FR, 5: WK, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, west — 383 m from Karasuma-Oike Stn',
    cuisine: 'Natural wine and coffee with bistro plates: homemade roast ham with Cenci yuzu pepper ¥920, shirasu cervelle de canut with bread ¥950 (October 2026); shrimp and arugula curry (May 2026), dry curry with new ginger (October 2026); beef tendon braised in red wine under mash, chilled carrot soup (August 2025); raisin-butter sandwich, Nitta Coffee house blend (July 2025); Sunday one-plate breakfast ¥1,650 with a drink — egg, two deli items, a scone, soup (September 2026); quiche',
    website: null, gmaps: gm('水上製作所 京都 突抜町'), menu_url: null,
    notes: '[Wine café · Karasuma-Oike] A bright, plant-filled second-floor room run by one woman: natural wine from 1pm with homemade ham, curries and bistro pots, and a Sunday breakfast plate with scones — wine from 8am if you like. Cash only; about ¥1,500–4,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 1 July 2021 (Tabelog). The name is that of the factory the owner\'s father ran, carried on for the shop (October 2026 review; also July 2025). Run single-handedly by a woman owner-chef (February 2025, September 2025 and October 2026 reviews).',
      philosophy: null,
      specialty: 'Homemade roast ham; curry; scones.',
      anecdotes: [
        { text: 'Back after a long gap in March 2025, a Sunday regular was welcomed home, and the owner remembered a love of quiche and offered a half portion though it was off the morning menu.', source: R + 'B502708248/' },
        { text: 'A September 2026 breakfast guest at 9:30 found the onion scone crisp and the Manganji-pepper soup gently hot, and eyed a ¥600 coffee upgrade for next time.', source: R + 'B535204911/' },
        { text: 'A July 2025 visitor sat over a raisin-butter sandwich and iced coffee with Gion Festival music playing.', source: R + 'B512222565/' },
      ],
      japanese_sources_summary: '食べログ: 水上製作所、カフェ、中京区突抜町793 MDSビル 2F、烏丸御池駅から徒歩8分、月・水・木・土 13:00〜22:00、金 17:00〜22:00、日 8:00〜11:00・13:00〜19:00、火曜休み、ほかに休みの日あり、現金のみ、禁煙、2021年7月1日オープン。口コミ (2025〜2026年、英語): 自然派ワインとコーヒー、自家製ローストハムに Cenci の柚子こしょう920円、しらすの cervelle de canut とパン950円、カレー、牛すじの赤ワイン煮、日曜の朝のワンプレート1,650円、スコーン、キッシュ、店名は店主の父の工場の名前、女性の店主がひとりで切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B442839972/', R + 'B500762878/', R + 'B502708248/', R + 'B511318183/', R + 'B512222565/', R + 'B521122406/', R + 'B528825340/', R + 'B530688366/', R + 'B535204911/', R + 'B537124269/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person runs it, so service is unhurried (February 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区突抜町793 MDSビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009570, 135.755741); cross-checked: GSI 京都府京都市中京区突抜町793番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B442839972/', R + 'B535204911/'],
    price_note: 'Prices from October and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Homemade roast ham with Cenci yuzu pepper', '¥920', 'Snacks', 'ask', 'no', 'October 2026 review.', 'ham'),
      it('', '', 'Shirasu cervelle de canut with bread', '¥950', 'Snacks', 'no', 'no', 'October 2026 review.', 'shirasu'),
      it('', '', 'Sunday one-plate breakfast with a drink', '¥1,650', 'Breakfast (Sun)', 'no', 'no', 'September 2026 review; includes a scone.', 'breakfast'),
    ] }, {
    cuisine: '自然派ワインとコーヒーにビストロの料理: 自家製ローストハムに Cenci の柚子こしょう920円、しらすの cervelle de canut とパン950円 (2026年10月)、エビとルッコラのカレー (2026年5月)、新しょうがのドライカレー (2026年10月)、牛すじの赤ワイン煮とマッシュポテト、冷たいにんじんのスープ (2025年8月)、レーズンバターサンド、Nitta Coffee のブレンド (2025年7月)、日曜の朝のワンプレート1,650円 (ドリンクつき、卵、デリ2種、スコーン、スープ、2026年9月)、キッシュ',
    neighborhood: '烏丸御池の西。烏丸御池駅から383m',
    gf_detail: '要確認。自家製ハム、スープ、牛すじの煮込み、カレーのほか、スコーン、キッシュ、サンドイッチ、パン (2025〜26年の口コミ)。',
    vegan_detail: '要確認。ペストの冷たいにんじんのスープ (2025年8月) や Manganji とうがらしのスープ (2026年9月) があった。ほとんどの料理に肉、魚、卵、乳製品。',
    notes: '[ワインカフェ・烏丸御池] 女性の店主がひとりで切り盛りする、緑の多い明るい2階の店。13時から自然派ワインに自家製ハム、カレー、ビストロの煮込み。日曜はスコーンの朝のプレートで、朝8時からワインも。現金のみ、1,500〜4,000円ほど。',
  });
}

save();
