// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 69.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 京都壱伍 — too thin to verify (three short 2026 reviews; opened February 2026)
//   + 京あられ 京都祇園萩月本店 Kyoto Gion Shugetsu (arare and okaki specialist in Gion)
//   + 祇園 たに本 Gion Tanimoto (small Gion kappo with counter and private rooms)
//   - カニカニランド 京都祗園店 — a concept of the 佐渡寿司 弁慶 group (sado-benkei.com), whose OBENKEI 京都祇園店 was
//     skipped as a 10+ shop chain (26040420); sub-brand of a large parent
//   - 金のとりから 新京極店 — chain (株式会社シマナカ's 金のとりから: directly run and franchised shops in Kyoto, Osaka,
//     Tokyo and abroad; this is the 2009 first shop)
//   + 神戸牛 鉄板焼 京彩宴 花見小路店 Kyosaien Hanamikoji (Kobe beef teppanyaki; 2 shops, both in Gion)
//   + Bistro Bleecker (New York–style bistro near Shijo-Karasuma; since 2022)
//   Same-name counts first (data and queue-status.jsonl): 弁慶 — ruling on OBENKEI (26040420) followed; none for 壱伍, 萩月,
//   たに本, カニカニ, 金のとりから, 京彩宴 or Bleecker. None drafted is in data/kyoto.json by name or address (hidden
//   records included).
//   Groups: 京彩宴 has a 祇園店 (祇園町北側263) and this 花見小路店 (Gurunavi), neither in data — drafted. 萩月 sells through
//   department-store counters (August 2026 review), which do not count.
//   Service charges checked against Tabelog's Japanese original: たに本 「個室のみ10％頂戴しております。」 (private rooms
//   only); 京彩宴 「10%のサービス料を承ります。」; 萩月 and Bleecker have no section.
//   Pins (checked against main, hidden records included): たに本 — the Tabelog point is 155 m from the GSI point for
//   祇園町南側570 (lot) → loc_precise false, approximate. 京彩宴 — Tabelog point 1.4 m from kyoto_da_ciro and 6.0 m from
//   kyoto_kani_iroha_gion (same 井澤ビル) → moved 5 m west-south-west (6.2 m clearance). Others ≥ 10 m; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044385', 'too thin to verify: three short 2026 reviews (a lunch, a business dinner, a duck shabu-shabu) since opening in February 2026');
skip('26040419', 'sub-brand of a large parent: カニカニランド is run by the 佐渡寿司 弁慶 group (sado-benkei.com), whose OBENKEI 京都祇園店 was skipped as a 10+ shop chain (26040420)');
skip('26014271', 'chain: 金のとりから (株式会社シマナカ) — directly run and franchised shops in Kyoto, Osaka (Sakai and others), Tokyo (Shibuya) and abroad; this Shinkyogoku shop was the first, in 2009');

// ================================================================ 京あられ 京都祇園萩月本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016467/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.syugetsu.com/index.html';
  const RK = 'https://www.rakuten.co.jp/syugetsu/';
  const D = day(['11:00', '18:00']);
  put({
    id: 'kyoto_gion_shugetsu_honten', name: '京あられ 京都祇園萩月本店 (Kyoto Gion Shugetsu)', category: 'OMNI',
    lat: 35.003691, lng: 135.774705, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-based arare and okaki, but seasonings often include soy sauce (wheat), and some crackers contain shrimp or sesame (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Rice crackers, but shrimp senbei and dashi or other seasonings may be animal-based (2025–26 reviews).',
    hours_raw: 'Daily 11:00–18:00 (Tabelog); the shop\'s Rakuten store says the Gion main shop closes on Tuesdays and Wednesdays. Cards (JCB, AMEX) and e-money (Tabelog). A takeaway shop; also sold online and through department-store counters (own site; August 2026 review). South of Shijo in Gion (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo — 3 min from Gion-Shijo Stn',
    cuisine: 'Kyoto arare, senbei and okaki in individually wrapped assortments: the Sagano assortment with Hanayose, Hanakarin, Hana-Otsumami, ebi-sen and kinako mochi (May 2026); small bags in coloured packaging (December 2025); a winter assortment with white-shrimp crackers (January 2026); Gion black-sesame senbei (March 2026); karinto-like sweet arare (August 2026); assortments from about ¥1,000 (November 2026); product lines 花かりん, 花あわせ, 雅び焼, 鞍馬焼き and a 祇園セット (own site)',
    website: WEB, gmaps: gm('京都祇園萩月 本店'), menu_url: RK,
    notes: '[Arare & senbei · Gion] The Gion main shop of a Kyoto rice-cracker maker that supplies Gion tea houses and restaurants: light, individually wrapped arare, senbei and okaki in pretty assortments from about ¥1,000 — a long-keeping Kyoto gift.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A Kyoto arare specialist whose crackers are used by Gion tea houses and well-known Kyoto restaurants (Tabelog). Run by Syugetsu Corporation (own site).',
      philosophy: null,
      specialty: 'Individually wrapped arare and okaki assortments.',
      anecdotes: [
        { text: 'A November 2026 regular buys here for gifts and memorial offerings: light, long-keeping, individually wrapped and, at about ¥1,000 an assortment, without price rises.', source: R + 'B537691799/' },
        { text: 'A May 2026 buyer of the Sagano assortment liked the fluffy kinako mochi best.', source: R + 'B528267473/' },
        { text: 'A December 2025 recipient of a small bag found it like a lucky dip of arare and senbei in Kyoto-style packaging.', source: R + 'B519364207/' },
      ],
      japanese_sources_summary: '食べログ: 京あられ 京都祇園萩月本店、和菓子、東山区祇園町南側573-7、毎日 11:00〜18:00 (変更の可能性あり)、カード (JCB・AMEX)・電子マネー可、祇園のお茶屋や京料理の名店が使う京あられの専門店。楽天市場の萩月: 祇園本店は火曜・水曜定休。公式サイト (Syugetsu Corporation): 花かりん、花あわせ、祇園セット、雅び焼、鞍馬焼き。口コミ (2025〜2026年、英語、多くは贈答品): Sagano の詰め合わせ、えびせん、きな粉餅、黒ごまのせんべい、白えびのせんべい、かりんとうのような甘いあられ、個包装で日持ちする、1,000円ほどの詰め合わせ、デパートにも出店。',
      confidence: 'low', sources: [TB, WEB, RK, R + 'B504541801/', R + 'B519364207/', R + 'B521947067/', R + 'B524931435/', R + 'B528267473/', R + 'B534520123/', R + 'B537691799/'] },
    cultural_comfort: { level: 'none_needed', note: 'Shop counter; packaged gifts.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側573-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing, own site and Rakuten store; reviews dated through November 2026 (most about gifts received).' },
    pin_source: `Tabelog ${TB} (35.003691, 135.774705); cross-checked: GSI 京都府京都市東山区祇園町南側573番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537691799/', R + 'B528267473/', WEB],
    price_note: 'Only an approximate assortment price from a November 2026 review; full prices on the online store.', last_checked: TODAY, items: [
      it('', '', 'Arare assortment', 'from about ¥1,000', 'Assortments', 'ask', 'ask', 'November 2026 review.', 'assortment'),
      it('', '', 'Sagano assortment', '', 'Assortments', 'ask', 'ask', 'May 2026 review.', 'sagano'),
      it('', '', 'Gion black-sesame senbei', '', 'Senbei', 'ask', 'ask', 'March 2026 review.', 'kurogoma'),
    ] }, {
    cuisine: '個包装の京あられ、せんべい、おかきの詰め合わせ: Hanayose、Hanakarin、Hana-Otsumami、えびせん、きな粉餅が入ったSagano の詰め合わせ (2026年5月)、色とりどりの小袋 (2025年12月)、白えびのせんべいが入った冬の詰め合わせ (2026年1月)、黒ごまのせんべい (2026年3月)、かりんとうのような甘いあられ (2026年8月)、1,000円ほどからの詰め合わせ (2026年11月)、花かりん、花あわせ、雅び焼、鞍馬焼き、祇園セット (公式サイト)',
    neighborhood: '祇園、四条の南。祇園四条駅から徒歩3分',
    gf_detail: '要確認。米のあられやおかきだが、醤油 (小麦) の味付けが多く、えびやごまを使うものもある (2025〜26年の口コミ)。',
    vegan_detail: '要確認。米菓だが、えびせんや出汁などの味付けに動物性の可能性 (2025〜26年の口コミ)。',
    notes: '[あられ・せんべい・祇園] 祇園のお茶屋や料理店も使う京都のあられ店の祇園本店。軽くて個包装のあられ、せんべい、おかきのきれいな詰め合わせが1,000円ほどから。日持ちする京都のおみやげ。',
  });
}

// ================================================================ 祇園 たに本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000249/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_tanimoto', name: '祇園 たに本 (Gion Tanimoto)', category: 'OMNI',
    lat: 35.002197, lng: 135.774509, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A dashi-led Kyoto kaiseki; soy sauce and fried courses are likely (2021–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout, fish, hamo, ayu, crab, soft-shelled turtle (2021–2025 reviews).',
    hours_raw: 'Mon 17:30–22:00; Tue–Sat and holidays 11:30–14:00 and 17:30–22:00; closed Sundays (Tabelog). Bookings advised (November 2024 review). 10% service charge in private rooms only (Tabelog Japanese original 「個室のみ10％頂戴しております。」). Cards; no e-money or QR (Tabelog). 22 seats: a 10-seat counter downstairs and two private rooms upstairs; smoking only in the private rooms (Tabelog). Off Hanamikoji in south Gion, 5 min from Gion-Shijo Stn (Tabelog; November 2024 review).',
    hours: { 0: day(['17:30', '22:00']), 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo, off Hanamikoji — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki built on dashi, lunch and dinner: autumn plates of shredded daikon with egg, ebi shinjo, matsukaze-yaki, herring and young ayu (November 2021); Seto Inland Sea sea bream, hamo with plum, Kamo River ayu (August 2023); salmon roe and seasonal dishes at lunch (October 2023); soft-shelled turtle hot pot (April 2024); crab with yuba and mizuna, sweet-simmered herring (November 2024); about ¥6,000–8,000 at lunch and ¥15,000–20,000 at dinner (2021–2025 reviews)',
    website: null, gmaps: gm('祇園 たに本'), menu_url: null,
    notes: '[Kyoto kaiseki · Gion] A small, unpretentious Gion kappo with a counter and two upstairs rooms, serving traditional, lightly modern Kyoto kaiseki around careful dashi — hamo, ayu, turtle, crab by season — with a warm chef. Lunch about ¥6,000–8,000; dinner ¥15,000–20,000.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in recent reviews)'], origin: null,
      background: 'Reviewed on Tabelog since 2008. A counter with the owner and proprietress greeting guests (November 2021 review); two kitchen staff and a server at a quiet lunch (October 2023 review). Reviewers praise the friendly, unpretentious chef and the dashi (2023–2025 reviews).',
      philosophy: 'Faithful, traditional kaiseki, lightly modernised, built on dashi (2023 reviews).',
      specialty: 'Dashi-led seasonal kaiseki.',
      anecdotes: [
        { text: 'A December 2025 diner sent by a gourmet friend remembered the warmth of the chef and staff most; the night in Gion flew by.', source: R + 'B518548803/' },
        { text: 'An August 2023 first-timer at a kaiseki restaurant had hamo with plum and Kamo River ayu, and took a photo with the friendly head chef.', source: R + 'B470173398/' },
        { text: 'A November 2024 diner walked 30 minutes from the Kyoto National Museum, turned off busy Hanamikoji, and found warm dishes as the weather turned cold.', source: R + 'B485243331/' },
        { text: 'An April 2024 business dinner was served a soft-shelled turtle hot pot with no off smell.', source: R + 'B483058101/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 たに本、日本料理、東山区祇園町南側570-121、祇園四条駅から徒歩5分、月 17:30〜22:00、火〜土・祝 11:30〜14:00・17:30〜22:00、日曜休み、個室のみサービス料10%、カード可、電子マネー・QR 不可、22席 (1階カウンター10、2階個室2)、喫煙は個室のみ。口コミ (2021〜2025年、英語): 出汁を生かした京の会席、大根と kinshi tamago、ebi shinjo、matsukaze-yaki、にしん、若鮎、Seto Inland Sea の鯛、鱧の梅、Kamo River の鮎、いくら、すっぽんの鍋、かにと湯葉と水菜、にしんの甘煮、気さくな料理長、昼6,000〜8,000円、夜15,000〜20,000円。',
      confidence: 'medium', sources: [TB, R + 'B125726068/', R + 'B462992575/', R + 'B470173398/', R + 'B473779545/', R + 'B474387644/', R + 'B483058101/', R + 'B485243331/', R + 'B488762065/', R + 'B518548803/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter kaiseki; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.002197, 135.774509); GSI 京都府京都市東山区祇園町南側570番地 (lot) is 155 m away, so approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485243331/', R + 'B470173398/'],
    price_note: 'No item prices found; reviews give ¥6,000–8,000 at lunch and ¥15,000–20,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki lunch', '', 'Courses', 'ask', 'no', '2021–2024 reviews.', 'lunch'),
      it('', '', 'Kaiseki dinner', '', 'Courses', 'ask', 'no', '2023–2025 reviews.', 'dinner'),
    ] }, {
    cuisine: '出汁を生かした京の会席、昼と夜: 大根と kinshi tamago、ebi shinjo、matsukaze-yaki、にしん、若鮎の秋の皿 (2021年11月)、Seto Inland Sea の鯛、鱧の梅、Kamo River の鮎 (2023年8月)、昼のいくらと季節の料理 (2023年10月)、すっぽんの鍋 (2024年4月)、かにと湯葉と水菜、にしんの甘煮 (2024年11月)。昼6,000〜8,000円、夜15,000〜20,000円ほど (2021〜2025年の口コミ)',
    neighborhood: '祇園、四条の南、Hanamikoji から入る。祇園四条駅から徒歩5分',
    gf_detail: '要確認。出汁が中心の京の会席で、醤油や揚げ物が出る可能性が高い (2021〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。全体に出汁、魚、鱧、鮎、かに、すっぽん (2021〜2025年の口コミ)。',
    notes: '[京の会席・祇園] カウンターと2階の個室2室の気取らない祇園の小さな割烹。丁寧な出汁を軸に、鱧、鮎、すっぽん、かになど季節の伝統的な京の会席を、気さくな料理長が。昼は6,000〜8,000円、夜は1万5千〜2万円ほど。',
  });
}

// ================================================================ 神戸牛 鉄板焼 京彩宴 花見小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041979/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://gurunavi.com/ja/k792209/rst';
  const D = day(['12:00', '14:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kyosaien_hanamikoji', name: '神戸牛 鉄板焼 京彩宴 花見小路店 (Kyosaien Hanamikoji)', category: 'OMNI',
    lat: 35.004051, lng: 135.774801, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak may suit, but sauces, garlic-butter rice and appetizers are unknown (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe and other wagyu steak, wagyu shabu-shabu and kakuni, tuna yukke (2026 reviews).',
    hours_raw: 'Daily 12:00–14:30 and 17:00–21:00 (Tabelog). Bookings taken (Tabelog). 10% service charge (Tabelog Japanese original 「10%のサービス料を承ります。」). Cards and e-money; cashless only (Tabelog; March 2026 review). 23 seats: two counters around the teppan and a private VIP room with its own teppan (Tabelog; May 2026 review). 2nd floor of the 井澤ビル on Shijo, near Hanamikoji, 3–5 min from Gion-Shijo Stn (Tabelog; Gurunavi; June 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo-dori near Hanamikoji — 3 min from Gion-Shijo Stn',
    cuisine: 'Kobe beef teppanyaki: certified Kobe beef (Tabelog); Tajima beef from Kobe Usunaga Farm at dinner and Hokkaido Saroma beef at lunch (May 2026); lunch wagyu steak box 100 g ¥4,500 and black-wagyu steak rice bowl 100 g ¥4,500 with three appetizers (wagyu shabu-shabu, wagyu kakuni, tuna yukke), teppan vegetables and an omelette, flambéed steak with garlic butter (May–June 2026); oolong tea ¥770 (May 2026); wines',
    website: null, gmaps: gm('神戸牛 鉄板焼 京彩宴 花見小路店'), menu_url: null,
    notes: '[Kobe beef teppanyaki · Gion] A second-floor teppanyaki on Shijo by Hanamikoji, run by a Kobe company of about 50 years, with counter seats around the grill and a private teppan room: flambéed Kobe and Tajima beef at dinner, and a ¥4,500 wagyu steak box or bowl at lunch. 10% service; cashless only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 6 September 2024 (Tabelog) by a long-established Kobe company of about 50 years (Tabelog; Gurunavi says 47). A sister shop, 京彩宴 祇園店, is nearby at 祇園町北側263 (Gurunavi). Chefs trained in high-end hotels and abroad (June 2026 review); a charming manager with stories from the trade (October 2025 review).',
      philosophy: 'Kobe beef meeting strict certification, in an elegant setting for special occasions (Tabelog).',
      specialty: 'Kobe beef teppanyaki.',
      anecdotes: [
        { text: 'A July 2025 birthday diner, nervous at a first teppanyaki, found the chefs entertaining and was surprised with a dessert plate.', source: R + 'B518023758/' },
        { text: 'A May 2026 lunch diner had the Hanamikoji-only 100 g wagyu steak box for ¥4,500 and learned lunch uses Hokkaido Saroma beef to keep the price down.', source: R + 'B528494074/' },
        { text: 'A June 2026 lunch diner liked the flambé and garlic-butter rice but did not find the ¥4,500 bowl an overwhelming bargain.', source: R + 'B529916660/' },
      ],
      japanese_sources_summary: '食べログ: 神戸牛 鉄板焼 京彩宴 花見小路店、ステーキ・鉄板焼き、東山区祇園町北側266 井澤ビル2F、祇園四条駅から徒歩5分、毎日 12:00〜14:30・17:00〜21:00、サービス料10%、カード・電子マネー可、23席、個室、2024年9月6日オープン、神戸で約50年の老舗企業が祇園で神戸牛 (紹介文、英訳)。ぐるなび: 神戸で47年愛された企業、姉妹店の京彩宴 祇園店 (祇園町北側263)。口コミ (2025〜2026年、英語): 夜は Kobe Usunaga Farm の Tajima beef、昼は Hokkaido の Saroma beef、和牛ステーキのボックス100g 4,500円、黒毛和牛ステーキ丼100g 4,500円、和牛しゃぶしゃぶ・角煮・まぐろのユッケの前菜、フランベ、ガーリックバター、キャッシュレスのみ、誕生日のデザートプレート。',
      confidence: 'medium', sources: [TB, GN, R + 'B514678652/', R + 'B518023758/', R + 'B525539830/', R + 'B528494074/', R + 'B529916660/', R + 'B530309604/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; private room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側266 井澤ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004068, 135.774852), 1.4 m from kyoto_da_ciro and 6.0 m from kyoto_kani_iroha_gion (same 井澤ビル) — moved 5 m west-south-west to (35.004051, 135.774801), 6.2 m clearance; cross-checked: GSI 京都府京都市東山区祇園町北側266番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528494074/', R + 'B529916660/'],
    price_note: 'Lunch prices from May–June 2026 reviews; 10% service charge on top (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Wagyu steak box, 100 g (lunch)', '¥4,500', 'Lunch', 'ask', 'no', 'May 2026 review.', 'steak_box'),
      it('', '', 'Black-wagyu steak rice bowl, 100 g (lunch)', '¥4,500', 'Lunch', 'ask', 'no', 'June 2026 review.', 'steak_don'),
      it('', '', 'Oolong tea', '¥770', 'Drinks', 'ask', 'ask', 'May 2026 review.', 'oolong'),
    ] }, {
    cuisine: '神戸牛の鉄板焼き: 認定の神戸牛 (食べログ)、夜は Kobe Usunaga Farm の Tajima beef、昼は Hokkaido の Saroma beef (2026年5月)、昼の和牛ステーキのボックス100g 4,500円と黒毛和牛ステーキ丼100g 4,500円、和牛しゃぶしゃぶ・和牛の角煮・まぐろのユッケの前菜3種、鉄板の野菜とオムレツ、フランベしたステーキとガーリックバター (2026年5〜6月)、烏龍茶770円 (2026年5月)、ワイン',
    neighborhood: '祇園、四条通の花見小路近く。祇園四条駅から徒歩3分',
    gf_detail: '要確認。鉄板のステーキは合う可能性があるが、ソース、ガーリックバターのご飯、前菜は不明 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。神戸牛などの和牛ステーキ、和牛しゃぶしゃぶと角煮、まぐろのユッケ (2026年の口コミ)。',
    notes: '[神戸牛の鉄板焼き・祇園] 花見小路近くの四条通のビル2階。神戸で約50年の企業の鉄板焼きで、鉄板を囲むカウンターと鉄板付きの個室。夜は神戸牛や Tajima beef のフランベ、昼は4,500円の和牛ステーキのボックスや丼。サービス料10%、キャッシュレスのみ。',
  });
}

// ================================================================ Bistro Bleecker
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038319/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.tasteofnewyork.jp';
  const D = day(['17:30', '22:00']);
  put({
    id: 'kyoto_bistro_bleecker', name: 'Bistro Bleecker', category: 'MOM_AND_POP',
    lat: 35.001323, lng: 135.763514, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sliders, fritters, salmon cakes and brownies are wheat; salads and grilled chicken may suit (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pulled pork, grilled chicken, salmon cakes, crème brûlée (2025 reviews).',
    hours_raw: 'Wed–Sun 17:30–22:00; closed Mondays and Tuesdays (Tabelog; own site). Bookings taken; groups by phone (Tabelog). Cards and PayPay; no e-money (Tabelog). 18 seats; non-smoking indoors, smoking on the outdoor terrace; wheelchair accessible; English menu; children welcome (Tabelog). On Bukkoji west of Yanagibamba, 5 min from Shijo Stn (Tabelog).',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bukkoji, near Shijo-Karasuma — 5 min from Shijo Stn',
    cuisine: 'New York–style bistro: pulled-pork sliders, beet appetizer, corn fritters, grilled chicken, brownies, homemade lemonade and mint mojitos (June 2025); salmon cakes with dill sauce (November 2025); salad with fruit and crème brûlée (December 2025); seasonal Japanese ingredients in a New York style (March 2026)',
    website: WEB, gmaps: gm('Bistro Bleecker 京都'), menu_url: null,
    notes: '[New York bistro · Shijo-Karasuma] A calm 18-seat bistro on Bukkoji run by a chef with a New York career, cooking American bistro dishes — sliders, corn fritters, salmon cakes with dill, brownies — with seasonal Japanese produce. About ¥4,000–8,000.',
    chef_bio: { chef_name: '浅田ひろこ (Hiroko Asada)', roles: ['Owner-chef'], origin: null,
      background: 'Opened 1 October 2022 (Tabelog). The chef is named on the restaurant\'s own site. A March 2026 reviewer writes that the chef was the first female sous-chef at Le Cirque in Manhattan, cooking for celebrities including Bill Clinton, and assisted pastry chef Jacques Torres on television cooking shows. A female owner looked after a June 2025 diner.',
      philosophy: '"You are what you eat": gentle seasoning that lets seasonal Japanese ingredients show (March 2026 review).',
      specialty: 'New York–style bistro cooking.',
      anecdotes: [
        { text: 'A June 2025 first-timer worked through pulled-pork sliders, corn fritters, grilled chicken and brownies, with homemade lemonade and mint-heavy mojitos.', source: R + 'B508876482/' },
        { text: 'A November 2025 group dinner almost ordered the salmon cakes again just for the dill sauce.', source: R + 'B516748623/' },
        { text: 'A March 2026 diner came with high expectations because of the chef\'s New York career and found food that "makes your body happy".', source: R + 'B523865658/' },
      ],
      japanese_sources_summary: '食べログ: Bistro Bleecker、アメリカ料理・ビストロ・バル、下京区仏光寺通柳馬場西入東前町405、四条駅から徒歩5分、水〜日 17:30〜22:00、月・火休み、予約可、カード・PayPay 可、電子マネー不可、18席、禁煙 (屋外テラスは喫煙可)、車いす可、英語メニュー、子ども可、2022年10月1日オープン。公式サイト: NYスタイルビストロ、浅田ひろこ、17:30〜22:00、月・火定休。口コミ (2025〜2026年、英語): プルドポークのスライダー、ビーツの前菜、コーンフリッター、グリルチキン、ブラウニー、自家製レモネードとモヒート、ディルソースのサーモンケーキ、フルーツのサラダ、クレームブリュレ、シェフは Le Cirque (Manhattan) で女性初のスーシェフだったと口コミ (2026年3月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B508876482/', R + 'B516748623/', R + 'B521332027/', R + 'B523865658/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); chef with a New York career (March 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通柳馬場西入東前町405',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.001323, 135.763514); cross-checked: GSI 京都府京都市下京区東前町405番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508876482/', R + 'B516748623/'],
    price_note: 'No item prices found; reviews give ¥4,000–8,000 a head (¥10,000–15,000 in March 2026).', last_checked: TODAY, items: [
      it('', '', 'Pulled-pork sliders', '', 'Plates', 'no', 'no', 'June 2025 review.', 'sliders'),
      it('', '', 'Salmon cakes with dill sauce', '', 'Plates', 'no', 'no', 'November 2025 review.', 'salmon_cakes'),
      it('', '', 'Corn fritters', '', 'Plates', 'no', 'ask', 'June 2025 review.', 'corn_fritters'),
      it('', '', 'Homemade lemonade', '', 'Drinks', 'ask', 'ask', 'June 2025 review.', 'lemonade'),
    ] }, {
    cuisine: 'ニューヨークスタイルのビストロ: プルドポークのスライダー、ビーツの前菜、コーンフリッター、グリルチキン、ブラウニー、自家製レモネードとミントのモヒート (2025年6月)、ディルソースのサーモンケーキ (2025年11月)、フルーツのサラダとクレームブリュレ (2025年12月)、季節の日本の食材をニューヨーク風に (2026年3月)',
    neighborhood: '仏光寺通、四条烏丸の近く。四条駅から徒歩5分',
    gf_detail: '要確認。スライダー、フリッター、サーモンケーキ、ブラウニーは小麦。サラダやグリルチキンは合う可能性 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。プルドポーク、グリルチキン、サーモンケーキ、クレームブリュレ (2025年の口コミ)。',
    notes: '[ニューヨークのビストロ・四条烏丸] 仏光寺通の落ち着いた18席のビストロ。ニューヨークで経験を積んだシェフが、スライダー、コーンフリッター、ディルのサーモンケーキ、ブラウニーなどのアメリカのビストロ料理を季節の日本の食材で。4,000〜8,000円ほど。',
  });
}

save();
