// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 75.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 京のお肉処 弘 大丸京都店 — chain (京の焼肉処 弘: 8+ shops), as ruled for 26000947 and 26016840
//   - Matcha Cafe Hanon — chain (Cafe Hanon, five shops), as ruled for 26041229
//   - とらや 大丸京都店 — large parent (とらや), as ruled for 26000206
//   - 新時代 京都河原町三条店 — chain (新時代 group, 200+ shops nationwide)
//   + 楽食酒 我ん家 Wan'ya (couple-run late-night kushikatsu and oden izakaya in Gion; since 2015)
//   - HUB 三条木屋町店 — chain (HUB British pubs)
//   + 京都･祇園 美しま Kyoto Gion Mishima (Gion branch of a Wakayama eel house; since October 2025)
//   + はやかわ 本店 Gion Hayakawa (family-run Gion kaiseki with Kyoto vegetables and tea-house evenings)
//   + エスニックバル タパス Ethnic Baru Tapas (spice dishes, biryani and curry near Kyoto Shiyakusho-mae; since October 2025)
//   Same-name counts first (data and queue-status.jsonl): 弘, Hanon and とらや have earlier rulings (followed); はやかわ appears
//   in data only as a chef's training history (祇園はやかわ, inside another record); HUB — ABENO HUB in Osaka data is a
//   different business; タパス and ポワソン match only other names. None drafted is in data/kyoto.json by name or address
//   (hidden records included).
//   Greg 11-07 retail ruling: no take-home food shop in this batch.
//   Service charges checked against Tabelog's Japanese original: 我ん家 「350円（付き出し）」 (a ¥350 starter charge);
//   タパス 「お一人様につき1ドリンク・2フード以上のご注文をお願いしております。」 (one drink and two dishes each); 美しま and
//   はやかわ have no section.
//   Pins (checked against main, hidden records included): 美しま and はやかわ — GSI returns the 祇園町南側570 block point,
//   about 200 m away → approximate. 美しま's Tabelog point is 3.9 m from kyoto_gion_nishimura → moved 3 m south-west
//   (6.9 m clearance). 我ん家 and タパス match a GSI lot; ≥ 7.9 m clear.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023457', 'chain: 京のお肉処 弘 is part of 京の焼肉処 弘 (8+ shops), as ruled for 26000947 and 26016840');
skip('26044661', 'chain: Cafe Hanon (five shops), as ruled for 26041229');
skip('26016677', 'large parent: とらや, as ruled for 26000206');
skip('26041691', 'chain: 新時代 group — more than 200 shops nationwide (company press release, August 2026)');
skip('26028425', 'chain: HUB (British pub chain)');

// ================================================================ 楽食酒 我ん家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029373/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://wanya.owst.jp/';
  const D = day(['18:00', '28:00']);
  put({
    id: 'kyoto_rakushokushu_wanya_gion', name: '楽食酒 我ん家 (Rakushoku Shu Wan\'ya)', category: 'OMNI',
    lat: 35.004558, lng: 135.775698, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushikatsu in batter and breadcrumbs is the house speciality (2024–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kushikatsu, oden, sashimi, oysters (2024–25 reviews).',
    hours_raw: 'Tue–Sat 18:00–04:00 (food L.O. 03:00, drinks 03:30); closed Sundays, Mondays and holidays (Tabelog). Bookings advised around 7 pm (January 2025 review). Starter charge ¥350 (Tabelog Japanese original 「350円（付き出し）」). Cards and PayPay; no e-money (Tabelog). 14 seats: 8 at the counter and a sunken-kotatsu room for 6; smoking allowed (Tabelog). In Gion north of Shijo, 5 min from Gion-Shijo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Kushikatsu, oden and izakaya plates until 4 am: kushikatsu, kushiyaki, oden, sashimi, fresh oysters, tempura corn (January 2025); homemade thick fried tofu (October 2023); a large salad with homemade dressing, pon-kara (April 2025); konjac with roe (November 2025)',
    website: WEB, gmaps: gm('楽食酒 我ん家 祇園'), menu_url: null,
    notes: '[Kushikatsu & oden · Gion] A small, friendly counter in Gion run by a couple, serving kushikatsu, oden, sashimi and fresh oysters at reasonable prices until 4 am, to locals, overseas visitors and the late-night trade. About ¥5,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Chef and partner (a couple, unnamed)'], origin: null,
      background: 'Opened 1 August 2015 (Tabelog). Run by the chef, who trained at a well-known restaurant, and the chef\'s wife (November 2024 review); a January 2025 regular mentions a change of head chef that lifted the presentation. Run by a friendly couple (November 2025 review).',
      philosophy: null,
      specialty: 'Kushikatsu and oden.',
      anecdotes: [
        { text: 'A regular who dropped by with souvenirs in April 2025 found a surprise birthday party waiting, with a homemade cake.', source: R + 'B473649942/' },
        { text: 'A November 2024 regular watched the chef keep an eye on every guest while cooking, among business people, overseas visitors and the late-night crowd.', source: R + 'B495744822/' },
        { text: 'A November 2025 first-timer said the konjac with roe made other konjac sashimi seem lesser.', source: R + 'B517774007/' },
      ],
      japanese_sources_summary: '食べログ: 楽食酒 我ん家、居酒屋・串揚げ・魚介料理、東山区祇園町北側347-68 クローバービル1F、祇園四条駅から徒歩5分、火〜土 18:00〜翌4:00 (料理 L.O. 3:00、ドリンク L.O. 3:30)、日・月・祝日休み、付き出し350円、カード・PayPay 可、電子マネー不可、14席 (カウンター8、掘りごたつの個室6)、喫煙可、2015年8月1日オープン。口コミ (2023〜2025年、英語): 串カツ、串焼き、おでん、お造り、生牡蠣、とうもろこしの天ぷら、自家製の厚揚げ、自家製ドレッシングのサラダ、子持ちこんにゃく、大将と奥さんの夫婦で営む、料理長が替わり盛り付けが良くなった (2025年1月)、7時ごろは予約が必要。',
      confidence: 'medium', sources: [TB, WEB, R + 'B473649942/', R + 'B495744822/', R + 'B517774007/', R + 'B519713305/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter izakaya; many overseas guests (November 2024 review); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-68 クローバービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.004558, 135.775698); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495744822/', TB],
    price_note: 'No item prices found; reviews give ¥5,000–8,000 a head; starter charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu', '', 'Kushikatsu', 'no', 'no', '2024–25 reviews.', 'kushikatsu'),
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', '2024–25 reviews.', 'oden'),
      it('', '', 'Starter (tsukidashi)', '¥350', 'Charge', 'ask', 'ask', 'Tabelog.', 'tsukidashi'),
    ] }, {
    cuisine: '朝4時までの串カツ、おでん、居酒屋の料理: 串カツ、串焼き、おでん、お造り、生牡蠣、とうもろこしの天ぷら (2025年1月)、自家製の厚揚げ (2023年10月)、自家製ドレッシングの大きなサラダ、pon-kara (2025年4月)、子持ちこんにゃく (2025年11月)',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。衣とパン粉の串カツが看板 (2024〜25年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。串カツ、おでん、お造り、牡蠣 (2024〜25年の口コミ)。',
    notes: '[串カツとおでん・祇園] 夫婦が営む祇園の小さく気さくなカウンター。串カツ、おでん、お造り、生牡蠣を手頃な値段で朝4時まで。地元の人、海外の客、夜の街の人々も。5,000〜8,000円ほど。',
  });
}

// ================================================================ 京都･祇園 美しま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043887/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:30']); const E = day(['11:30', '17:00']);
  put({
    id: 'kyoto_gion_mishima_unagi', name: '京都･祇園 美しま (Kyoto Gion Mishima)', category: 'OMNI',
    lat: 35.002682, lng: 135.775826, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled eel on rice with a soy-based tare (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (2026 reviews).',
    hours_raw: 'Mon, Tue, Wed, Fri 11:30–15:30 (food L.O. 15:00); Sat, Sun and holidays 11:30–17:00 (food L.O. 16:30); closed Thursdays; may close early when the eel runs out; closed 14–15 August (Tabelog). Cashless payment only — cards, e-money and QR (Tabelog). 38 seats, private rooms (Tabelog). A renovated old building with a garden in the Gion tea-house district, 5 min from Gion-Shijo (Tabelog; April 2026 review).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Unagi: eel grilled over binchotan at the Wakayama main shop and finished in a steam oven here, crisp-skinned and fluffy (April 2026); unaju with a whole eel, momo unaju ¥5,500, with umeboshi among the pickles and a light soup, extra tare on the table (August 2026)',
    website: null, gmaps: gm('京都 祇園 美しま 鰻'), menu_url: null,
    notes: '[Unagi · Gion] The Gion branch of a Wakayama eel house, in a renovated old building with a garden: eel grilled over binchotan in Wakayama and finished here, served as unaju with soft rice. About ¥5,000–6,000; cashless only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 10 October 2025 (Tabelog), with its main shop in Wakayama (April 2026 review). The eel is grilled over binchotan at the Wakayama shop and reheated in a steam oven in Kyoto (April 2026 review).',
      philosophy: null,
      specialty: 'Binchotan-grilled unaju.',
      anecdotes: [
        { text: 'An April 2026 diner asked how the eel was cooked and learned it is grilled in Wakayama and steamed back to heat here — without any stale smell.', source: R + 'B527009633/' },
        { text: 'A Saturday-noon diner in August 2026 was seated at once and had the ¥5,500 momo unaju with umeboshi among the pickles.', source: R + 'B532488248/' },
      ],
      japanese_sources_summary: '食べログ: 京都･祇園 美しま、うなぎ、東山区祇園町南側570-161、祇園四条駅から徒歩5分、月・火・水・金 11:30〜15:30 (料理 L.O. 15:00)、土日祝日 11:30〜17:00 (料理 L.O. 16:30)、木曜休み、うなぎがなくなり次第早めに閉店、8月14・15日休み、キャッシュレスのみ、38席、個室、2025年10月10日オープン。口コミ (2026年、英語): Wakayama の本店で備長炭で焼きスチームオーブンで温める、皮はぱりっと身はふわっと、一尾のうな重、Momo unaju 5,500円、漬物に梅干し、たれは卓上、お茶屋街の古い建物を改装し庭がある。',
      confidence: 'low', sources: [TB, R + 'B527009633/', R + 'B532488248/', R + 'B533066191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cashless only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-161',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB} (35.002701, 135.775849), 3.9 m from kyoto_gion_nishimura — moved 3 m south-west to (35.002682, 135.775826), 6.9 m clearance; GSI returns the 祇園町南側570 block point about 200 m away, so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532488248/'],
    price_note: 'Price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Momo unaju', '¥5,500', 'Unaju', 'ask', 'no', 'August 2026 review.', 'momo_unaju'),
      it('', '', 'Unaju with a whole eel', '', 'Unaju', 'ask', 'no', 'April and August 2026 reviews.', 'unaju_ichibi'),
    ] }, {
    cuisine: 'うなぎ: Wakayama の本店で備長炭で焼き、ここでスチームオーブンで仕上げる皮がぱりっとしてふっくらしたうなぎ (2026年4月)、一尾のうな重、Momo unaju 5,500円、漬物に梅干し、あっさりした吸い物、卓上にたれ (2026年8月)',
    neighborhood: '祇園、四条の南。祇園四条駅から徒歩5分',
    gf_detail: '要確認。醤油ベースのたれのうな重 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。うなぎの店 (2026年の口コミ)。',
    notes: '[うなぎ・祇園] Wakayama のうなぎ店の祇園の店。庭のある古い建物を改装し、Wakayama で備長炭で焼いたうなぎをここで仕上げ、やわらかいご飯のうな重で。5,000〜6,000円ほど、キャッシュレスのみ。',
  });
}

// ================================================================ はやかわ 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000261/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.gion-hayakawa.com/';
  const D = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_hayakawa_honten', name: 'はやかわ 本店 (Gion Hayakawa)', category: 'OMNI',
    lat: 35.002528, lng: 135.775829, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki built on kombu and bonito dashi; soy sauce is likely (Tabelog; 2024–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi of bonito flakes and seafood (Tabelog).',
    hours_raw: 'Daily 11:30–14:00 (L.O. 13:30) and 17:00–22:00 (L.O. 21:30) (Tabelog). Bookings taken; maiko and geiko can be invited for a tea-house evening (Tabelog; 2022–2025 reviews). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 26 seats; private rooms (Tabelog). In south Gion, 7 min from Kawaramachi or Gion-Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — 7 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki of seasonal Kyoto vegetables — Kamo aubergine, Shogoin turnip — with seafood and Tanba matsutake in season, and a dashi of kombu and bonito (Tabelog); a "tea-house experience" with maiko and geiko (Tabelog; reviews); the house sake "Hayakawa" and Tedorigawa (June 2025); hot pots (Tabelog)',
    website: WEB, gmaps: gm('祇園 はやかわ 本店'), menu_url: null,
    notes: '[Kyoto kaiseki · Gion] A family-run Gion kaiseki house, about thirty years old, cooking certified seasonal Kyoto vegetables with a strong dashi, where you can invite maiko and geiko for an evening. About ¥10,000–20,000.',
    chef_bio: { chef_name: null, roles: ['Okami and head chef (unnamed)', 'Owner (unnamed)'], origin: null,
      background: 'The okami is also the head chef; the owner is the okami\'s husband, and the original owner was the owner\'s mother; 31 years old as of August 2024 (August 2024 review). Recognised as a provider of seasonal Kyoto vegetables by the Kyoto Furusato Product Association (Tabelog). A June 2025 diner was told the Tedorigawa sake comes from the young owner\'s grandfather\'s brewery.',
      philosophy: 'Seasonal Kyoto vegetables and a careful dashi (Tabelog).',
      specialty: 'Kyoto-vegetable kaiseki; tea-house evenings with maiko.',
      anecdotes: [
        { text: 'Planning a reception with maiko, geiko and performers, an August 2024 visitor came ahead to check the room and was charmed by the okami\'s Kyoto dialect.', source: R + 'B491245899/' },
        { text: 'On a second visit in June 2025, a light drinker spent the evening talking with the owner and liked the house sake "Hayakawa" and the Tedorigawa.', source: R + 'B508366982/' },
        { text: 'An October 2024 guest came at the invitation of a geisha.', source: R + 'B493142137/' },
      ],
      japanese_sources_summary: '食べログ: はやかわ 本店、日本料理・鍋、東山区祇園町南側570-164、阪急河原町駅・京阪祇園四条駅から徒歩7分、毎日 11:30〜14:00 (L.O. 13:30)・17:00〜22:00 (L.O. 21:30)、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、26席、個室、季節の京野菜の会席とお茶屋の体験、Kamo なす・Shogoin かぶ・Tanba の松茸、昆布と鰹の出汁 (紹介文、英訳)。口コミ (2020〜2025年、英語): 女将が料理長、主人は女将の夫で先代は主人の母、創業31年 (2024年8月)、舞妓・芸妓を呼べる、オリジナルの日本酒 "Hayakawa" と若主人の祖父の蔵の Tedorigawa (2025年6月)、出汁がしっかり。',
      confidence: 'medium', sources: [TB, WEB, R + 'B487855198/', R + 'B491245899/', R + 'B493142137/', R + 'B508366982/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask about inviting maiko.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-164',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2025.' },
    pin_source: `Tabelog ${TB} (35.002528, 135.775829); GSI returns the 祇園町南側570 block point about 200 m away, so approximate; 15 m from kyoto_gion_kurashita; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B508366982/'],
    price_note: 'No item prices found; reviews give ¥10,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Kyoto-vegetable kaiseki', '', 'Courses', 'ask', 'no', 'Tabelog.', 'kaiseki'),
      it('', '', 'House sake "Hayakawa"', '', 'Drinks', 'ask', 'ask', 'June 2025 review.', 'sake'),
    ] }, {
    cuisine: '季節の京野菜の会席 — Kamo なす、Shogoin かぶ — に魚介や季節のTanba の松茸、昆布と鰹の出汁 (食べログ)、舞妓・芸妓を呼ぶお茶屋の体験(食べログ、口コミ)、オリジナルの日本酒 "Hayakawa" と Tedorigawa (2025年6月)、鍋 (食べログ)',
    neighborhood: '祇園、四条の南。祇園四条駅から徒歩7分',
    gf_detail: '要確認。昆布と鰹の出汁が基本の会席で、醤油も使われる可能性が高い (食べログ、2024〜25年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹節や魚介の出汁 (食べログ)。',
    notes: '[京の会席・祇園] 家族で営む祇園の会席の店、創業30年ほど。季節の京野菜をしっかりした出汁で、舞妓や芸妓を呼んで過ごすこともできる。1万〜2万円ほど。',
  });
}

// ================================================================ エスニックバル タパス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043983/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:00', '25:00']); const S = day(['17:00', '25:00']);
  put({
    id: 'kyoto_ethnic_baru_tapas', name: 'エスニックバル タパス (Ethnic Baru Tapas)', category: 'OMNI',
    lat: 35.00927, lng: 135.769918, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani and spice curries are rice-based, but fritters and sauces are unknown (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spice dishes and curries change with the season; most known dishes use meat, seafood, egg or cheese (2025–26 reviews).',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:30) and 17:00–01:00 (L.O. 00:30); Sat 17:00–01:00 (L.O. 23:30); holidays and the day before 17:00–01:00; closed Sundays from January (Tabelog). Lunch started in 2026 (July 2026 review). One drink and two dishes per person (Tabelog Japanese original 「お一人様につき1ドリンク・2フード以上のご注文をお願いしております。」). Cards, e-money and QR (Tabelog). 14 seats: 8 at the counter, 6 in booths; private rooms (Tabelog). Down an alley off Kiyamachi north of Sanjo, 2 min from Kyoto Shiyakusho-mae (Tabelog; May–June 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Sanjo — 2 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Asian and ethnic spice bar: seasonal biryani and spice curries (October 2025–October 2026) — squid-ink biryani (May 2026), salted-pork biryani plate ¥1,700 (June 2026); five-kind appetizer platter ¥1,000 and seasonal fruit and prosciutto caprese ¥1,000 (June 2026); beef-tongue carpaccio, gai yang, young-corn fritters (January 2026); curry-spiced soft-boiled egg, yodare katsuo; lunch curries — squid ink, mustard scallop, butter chicken ¥1,200 (July 2026); imo shochu, LIBROM craft sake, spiced cocktails (June 2026)',
    website: null, gmaps: gm('エスニックバル タパス 京都'), menu_url: null,
    notes: '[Spice bar & curry · Kiyamachi] A small counter bar down an alley off Kiyamachi by a curry chef, serving creative Asian and ethnic small plates, seasonal biryani and spice curries late into the night, with curry lunches on weekdays. About ¥2,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 21 October 2025 (Tabelog) by a curry chef already popular for curry in a shared kitchen (October 2025 review).',
      philosophy: null,
      specialty: 'Biryani and spice curry.',
      anecdotes: [
        { text: 'A first-week diner in October 2025 and again in October 2026 found the biryani and spice curry to finish unforgettable.', source: R + 'B516921115/' },
        { text: 'A June 2026 diner after work had the five-kind appetizer platter and the ¥1,700 salted-pork biryani with an Akaboshi beer.', source: R + 'B529571102/' },
        { text: 'A July 2026 lunch diner tried the new lunch, mixing squid-ink and mustard-scallop curries.', source: R + 'B528503662/' },
      ],
      japanese_sources_summary: '食べログ: エスニックバル タパス、アジア・エスニック・バル、中京区恵比須町446 葵センター104、京都市役所前駅から徒歩2分、月〜金 11:00〜15:00 (L.O. 14:30)・17:00〜翌1:00 (L.O. 0:30)、土 17:00〜翌1:00 (L.O. 23:30)、祝日と祝日の前日 17:00〜翌1:00、1月から毎週日曜休み、1人1ドリンク・2フード以上、カード・電子マネー・QR 可、14席 (カウンター8、ボックス6)、個室、2025年10月21日オープン。口コミ (2025〜2026年、英語): 間借りのカレーで人気の料理人の店、季節のビリヤニとスパイスカレー、イカスミのビリヤニ、塩豚のビリヤニのプレート1,700円、前菜5種盛り1,000円、季節のフルーツと生ハムのカプレーゼ1,000円、牛タンのカルパッチョ、gai yang、ヤングコーンのフリット、昼のカレー (イカスミ、マスタードと帆立、バターチキン1,200円)、芋焼酎、LIBROM。',
      confidence: 'medium', sources: [TB, R + 'B516921115/', R + 'B520764870/', R + 'B528361260/', R + 'B528503662/', R + 'B529301135/', R + 'B529539936/', R + 'B529571102/', R + 'B530147871/', R + 'B530669744/', R + 'B532270523/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter bar; order at least one drink and two dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町446 葵センター 104',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009270, 135.769918); cross-checked: GSI 京都府京都市中京区恵比須町446番地 (lot) 38m; 7.9 m from kyoto_maximo_kiyamachi at the same lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529571102/', R + 'B532270523/'],
    price_note: 'Prices from June–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salted-pork biryani plate', '¥1,700', 'Biryani', 'ask', 'no', 'June 2026 reviews.', 'biryani'),
      it('', '', 'Five-kind appetizer platter', '¥1,000', 'Small plates', 'ask', 'no', 'June 2026 reviews.', 'zensai5'),
      it('', '', 'Seasonal fruit and prosciutto caprese', '¥1,000', 'Small plates', 'ask', 'no', 'June 2026 reviews.', 'caprese'),
      it('', '', 'Butter chicken curry (lunch)', '¥1,200', 'Lunch', 'ask', 'no', 'July 2026 review.', 'butter_chicken'),
    ] }, {
    cuisine: 'アジアとエスニックのスパイスのバル: 季節のビリヤニとスパイスカレー (2025年10月〜2026年10月) — イカスミのビリヤニ (2026年5月)、塩豚のビリヤニのプレート1,700円 (2026年6月)、前菜5種盛り1,000円と季節のフルーツと生ハムのカプレーゼ1,000円 (2026年6月)、牛タンのカルパッチョ、gai yang、ヤングコーンのフリット (2026年1月)、カレー風味の半熟卵、yodare katsuo、昼のカレー — イカスミ、マスタードと帆立、バターチキン1,200円 (2026年7月)、芋焼酎、LIBROM のクラフトサケ、スパイスのカクテル (2026年6月)',
    neighborhood: '木屋町、三条の北。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。ビリヤニやスパイスカレーは米が中心だが、フリットやソースは不明 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。スパイス料理とカレーは季節で替わるが、知られている料理の多くは肉、魚介、卵、チーズを使う (2025〜26年の口コミ)。',
    notes: '[スパイスのバルとカレー・木屋町] 木屋町の路地奥のカレーの料理人の小さなカウンターのバル。工夫のあるアジアとエスニックの小皿、季節のビリヤニとスパイスカレーを夜遅くまで、平日はカレーのランチも。2,000〜5,000円ほど。',
  });
}

save();
