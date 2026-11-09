// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 77.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl and than.co.jp/brands (26 brands, 60 shops, August 2026): none of this batch is a THAN brand.
//   + 祇園 竹寿司 Gion Takezushi (Gion sushi counter since 2012; omakase nigiri courses ¥5,750–13,000)
//   - 十二段家 本店 — same-concept shop of a brand in data: 十二段家 花見小路店 (kyoto_junidanya_hanamikoji)
//   + chocolate Bold Italic (hazelnut soft serve and hot chocolate stand by Nishiki Market; opened March 2024)
//   - 炭屋旅館 — guests-only inn ruling (Greg 11-05): non-guest dining could not be sourced
//   + おおきにようきに Ookini Youkini (small Gion kappo upstairs on Hanamikoji; about 14 years)
//   + 梅乃家 Umenoya (shabu-shabu and sukiyaki in a former Gion ochaya, run by a former maiko)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: 竹寿司 5% (Tabelog).
//   Pins: Tabelog /en/ point, cross-checked with GSI; 竹寿司 moved ~2.5 m to clear kyoto_soba_henko_gion (6.8 m); おおきにようきに has no lot number
//   (GSI town level only), so it is marked approximate; each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001951', '十二段家 本店: same-concept shop of a brand in data — 十二段家 花見小路店 (kyoto_junidanya_hanamikoji), the same shabu-shabu house 27 m away on Hanamikoji; same rule as いも松, 富之上 and 山福 はなれ. Note: this is the founding shop, if the coordinator prefers it over the branch');
skip('26002263', '炭屋旅館: guests-only inn (Greg 11-05 ruling) as far as can be sourced — the official site links an お食事予約 plan search, but its booking engine shows no readable plans, and every 2025–26 Tabelog review describes an overnight stay; revisit if non-guest dining plans can be read');

// ================================================================ 祇園 竹寿司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000121/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '21:30']);
  put({
    id: 'kyoto_gion_takezushi', name: '祇園 竹寿司 (Gion Takezushi)', category: 'OMNI',
    lat: 35.004205, lng: 135.775328, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri with soy, plus fried dishes such as deep-fried scallop; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi restaurant (Tabelog).',
    hours_raw: '17:30–21:30 (last order 21:00) Wednesday–Sunday; closed Monday and Tuesday, and on some other days; may close early (Tabelog). Reservations online and by phone, same-day calls welcome (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Service charge 5% (Tabelog). 22 seats: an 8-seat counter and three private rooms with sunken kotatsu for 4, 4 and 6 that join for 14; non-smoking; wheelchair accessible (Tabelog). On Gion-machi Kitagawa, 2 minutes from Gion-Shijo Exit 7 (Tabelog). Opened 2 July 2012 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo',
    cuisine: 'Sushi counter and private rooms in Gion, opened 2012 (Tabelog) · omakase sushi of 12 pieces ¥5,750; omakase nigiri course of 16 pieces ¥9,200; special sushi course ¥13,000 (Tabelog) · extra pieces about ¥500–600; deep-fried scallop (2024) · plump shrimp, horse mackerel, sea bream, squid (2024–2025)',
    website: null, gmaps: gm('祇園 竹寿司'), menu_url: TB + 'party/',
    notes: "[Sushi · Gion north of Shijo, counter and kotatsu rooms] A traditional Gion sushi bar with an 8-seat counter and sunken-kotatsu private rooms: 12 pieces for ¥5,750 or 16 for ¥9,200, served briskly by a chef who seems gruff at first and warms up. Closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Head chef not named'], origin: null,
      background: 'Opened in July 2012 (Tabelog). Reviewers (2024–2026) describe a craftsman head chef who can seem brusque at first but turns friendly and chatty, serving sushi at a quick pace.',
      philosophy: null,
      specialty: 'Omakase nigiri.',
      anecdotes: [
        { text: 'A June 2024 group ordered the deep-fried scallop twice.', source: R + 'B486618139/' },
        { text: 'A November 2025 birthday dinner of 16 pieces won over a diner who usually dislikes horse mackerel.', source: R + 'B517391681/' },
        { text: 'A July 2026 reviewer called the chef a true craftsman, if a little unapproachable.', source: R + 'B533875576/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 竹寿司 (たけずし)、寿司・日本料理・海鮮、京都市東山区祇園町北側270-2、水〜日 17:30〜21:30 (L.O.21:00)、月・火定休、ほかに不定休、早じまいの日も、予約可 (当日の電話も)、カード・PayPay可、電子マネー不可、サービス料5%、22席 (カウンター8席、掘りごたつの個室3室 4・4・6名、つなげて14名)、禁煙、車椅子可、2012年7月2日オープン、おまかせ寿司12貫5,750円、おまかせ握りコース (16貫) 9,200円、特選寿司コース13,000円。口コミ (2021〜2026年、英語): 職人肌の大将は最初こわそうでも話すと気さく、テンポよく出る、追加は1貫500〜600円ほど、ほたての揚げ物、海老、鯵、鯛、烏賊。',
      confidence: 'medium', sources: [TB, TB + 'party/', R + 'B486618139/', R + 'B492401570/', R + 'B496462853/', R + 'B517391681/', R + 'B533875576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; 5% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側270-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with current courses; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004201, 135.775301), offset ~2.5m to clear kyoto_soba_henko_gion (6.8m); cross-checked: GSI 京都府京都市東山区祇園町北側270番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'party/'],
    price_note: 'Course prices from Tabelog (November 2026), tax included; plus 5% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase sushi, 12 pieces', '¥5,750', 'Courses', 'ask', 'no', '', 'omakase12'),
      it('', '', 'Omakase nigiri course, 16 pieces', '¥9,200', 'Courses', 'ask', 'no', '', 'omakase16'),
      it('', '', 'Special sushi course', '¥13,000', 'Courses', 'ask', 'no', '', 'special'),
    ] }, {
    cuisine: '2012年開業の祇園の寿司のカウンターと個室 (食べログ)・おまかせ寿司12貫5,750円、おまかせ握りコース16貫9,200円、特選寿司コース13,000円 (食べログ)・追加は1貫500〜600円ほど、ほたての揚げ物 (2024年)・ぷりぷりの海老、鯵、鯛、烏賊 (2024〜2025年)',
    neighborhood: '祇園、四条の北',
    gf_detail: '要確認。醤油を使う握り、ほたての揚げ物など揚げ物も。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司屋 (食べログ)。',
    notes: '[寿司・祇園の四条北、カウンターと掘りごたつの個室] 8席のカウンターと掘りごたつの個室のある昔ながらの祇園の寿司屋。12貫5,750円、16貫9,200円をテンポよく。最初はこわそうでも話すと気さくな大将。月・火休み。',
  });
}

// ================================================================ chocolate Bold Italic
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040903/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'kyoto_chocolate_bold_italic_nishiki', name: 'chocolate Bold Italic', category: 'OMNI',
    lat: 35.00528593787026, lng: 135.7626660103633, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hazelnut soft serve, hot chocolate with gianduja, and sodas; cones and toppings not described; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dairy soft serve and milk-based hot chocolate (reviews).',
    hours_raw: '10:00–17:30; closed Tuesday (Tabelog). Cards, e-money and QR accepted (Tabelog). A drink and soft-serve stand in a renovated machiya with a few small benches; non-smoking (Tabelog; June 2025). On Takakura about 20 m north of Nishiki Market, by the Daimaru Takakura exit (Tabelog; June 2025). Opened 5 March 2024 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura, just north of Nishiki Market',
    cuisine: 'Café drink stand, opened March 2024: soft serve made daily with Italian hazelnuts, and rich hot chocolate (Tabelog shop text) · hazelnut soft serve with gianduja ¥600; hot chocolate topped with shaved gianduja ¥650 (June 2025) · colourful seasonal sodas, e.g. mint soda with mint ice cream (June 2025)',
    website: null, gmaps: gm('chocolate Bold Italic 京都 高倉'), menu_url: TB,
    notes: "[Sweets · Nishiki Market north end, hazelnut soft serve] A tiny machiya stand a few steps from Nishiki Market making soft serve from Italian hazelnuts (¥600) and thick hot chocolate under shaved gianduja (¥650), plus bright seasonal sodas. A couple of benches; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'Opened on 5 March 2024 (Tabelog). A June 2025 reviewer writes that an Italian chef opened the shop (Tabelog review B509331167).',
      philosophy: null,
      specialty: 'Hazelnut soft serve; hot chocolate.',
      anecdotes: [
        { text: 'A June 2025 visitor found the hot chocolate velvety under melting shaved gianduja.', source: R + 'B508278895/' },
        { text: 'A June 2025 pair cooled off on the mini benches with a mint soda that came with mint ice cream.', source: R + 'B509331167/' },
      ],
      japanese_sources_summary: '食べログ: chocolate Bold Italic、スイーツ・ソフトクリーム、京都市中京区高倉通錦上ル中魚屋町510-3、月・水〜日 10:00〜17:30、火曜定休、カード・電子マネー・QR決済可、禁煙、2024年3月5日オープン、錦市場から北へ20mの高倉通、イタリア産ヘーゼルナッツで毎日つくるソフトクリーム、濃厚なホットチョコレート、季節のドリンク。口コミ (2025年6月、英語): 町家を改装したカフェスタンド、ヘーゼルナッツのソフトクリーム600円、削ったジャンドゥーヤをのせたホットチョコレート650円、ミントソーダ、イタリア人シェフの店、小さなベンチ、大丸の高倉口の近く。',
      confidence: 'low', sources: [TB, R + 'B508278895/', R + 'B509331167/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通錦上ル中魚屋町510-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; all twelve reviews read are from June 2025.' },
    pin_source: `Tabelog ${TB} (35.005286, 135.762666); cross-checked: GSI 京都府京都市中京区中魚屋町510番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508278895/'],
    price_note: 'Prices from June 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hazelnut soft serve', '¥600', 'Sweets', 'ask', 'no', 'June 2025.', 'softserve'),
      it('', '', 'Hot chocolate with shaved gianduja', '¥650', 'Drinks', 'ask', 'no', 'June 2025.', 'hotchoc'),
    ] }, {
    cuisine: '2024年3月開業のカフェスタンド。イタリア産ヘーゼルナッツで毎日つくるソフトクリームと濃厚なホットチョコレート (食べログの店舗紹介)・ジャンドゥーヤをのせたヘーゼルナッツのソフトクリーム600円、削ったジャンドゥーヤをのせたホットチョコレート650円 (2025年6月)・季節のカラフルなソーダ、たとえばミントアイス入りのミントソーダ (2025年6月)',
    neighborhood: '高倉通、錦市場のすぐ北',
    gf_detail: '要確認。ヘーゼルナッツのソフトクリーム、ジャンドゥーヤのホットチョコレート、ソーダ。コーンやトッピングの説明はなく、グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。乳製品のソフトクリームとミルクのホットチョコレート (口コミ)。',
    notes: '[スイーツ・錦市場の北、ヘーゼルナッツのソフト] 錦市場から数歩の町家の小さなスタンド。イタリア産ヘーゼルナッツのソフトクリーム (600円)、削ったジャンドゥーヤの濃いホットチョコレート (650円)、季節のソーダ。小さなベンチあり、火曜休み。',
  });
}

// ================================================================ おおきにようきに
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017869/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_ookini_youkini_gion', name: 'おおきにようきに (Ookini Youkini)', category: 'OMNI',
    lat: 35.00541249849738, lng: 135.77512023330937, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese dishes built on dashi, with homemade ponzu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, sashimi and fish dishes (reviews).',
    hours_raw: '18:00 to about midnight Monday–Saturday; closed Sunday and holidays (Tabelog). Reservations taken (Tabelog). Cards (JCB, AMEX, Diners) accepted (Tabelog). A 6-seat raised counter without backrests and a tatami area with two tables for four; smoking allowed (Tabelog; March and May 2024). Second floor of the Sky Court Gion building on Hanamikoji north of Sueyoshi-cho, west side; easy to miss (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Hanamikoji, north of Shijo',
    cuisine: 'Small Gion kappo of sashimi and obanzai from a daily menu (May 2024) · careful dashi; dobin-mushi (October 2026); shirako with homemade ponzu (February 2026) · hotaru-ika with vinegar miso, tuna yukke, salt-grilled guji, shirayaki; hojicha ice cream (March 2024) · mackerel sushi to finish (December 2024) · about ¥6,000–10,000 a head (2026; Tabelog reviews)',
    website: null, gmaps: gm('おおきにようきに 祇園'), menu_url: TB,
    notes: "[Kappo · Gion Hanamikoji, upstairs and easy to miss] A small upstairs kappo on Hanamikoji run by a chef and an okami, much loved by regulars: careful dashi, sashimi and obanzai from the day's list, shirako with homemade ponzu in winter, mackerel sushi to finish. About ¥6,000–10,000; smoking allowed; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef and okami not named'], origin: null,
      background: 'A December 2024 regular has been coming since it opened about 14 years earlier. Reviewers (2023–2026) describe a small restaurant run by a chef and an okami, a friendly chef with a skilled hand at dashi, and mostly regular guests.',
      philosophy: null,
      specialty: 'Dashi-led Japanese dishes; mackerel sushi.',
      anecdotes: [
        { text: 'A December 2024 year-end party finished, as always, with the mackerel sushi.', source: R + 'B497654734/' },
        { text: 'A February 2026 regular had the last shirako of the season with homemade ponzu.', source: R + 'B475554633/' },
        { text: 'A March 2024 diner ordered the hojicha ice cream three times.', source: R + 'B457108981/' },
      ],
      japanese_sources_summary: '食べログ: おおきにようきに、日本料理、京都市東山区花見小路末吉町上ル西側 スカイコート祇園2F、月〜土 18:00〜0:00ごろ、日曜・祝日定休、予約可、カード可 (JCB、AMEX、Diners)、喫煙可、カウンターと座敷。口コミ (2018〜2026年、英語): 開店から14年ほど通う常連 (2024年12月)、大将と女将の小さな店、刺身とおばんざい、出汁がうまい、土瓶蒸し、白子と自家製ポン酢、ほたるいかの酢味噌、まぐろのユッケ、ぐじの塩焼き、白焼き、ほうじ茶アイス、締めの鯖寿司、カウンター6席 (背もたれなし)、座敷に4人卓が2つ、見つけにくく常連が多い、1人6,000〜10,000円ほど。',
      confidence: 'low', sources: [TB, R + 'B457108981/', R + 'B475554633/', R + 'B485533405/', R + 'B497654734/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区花見小路末吉町上ル西側 スカイコート祇園 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005412, 135.775120); the address has no lot number and GSI resolves only to 末吉町 (town) 136m, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥6,000–10,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Mackerel sushi', '', 'Rice', 'ask', 'no', '', 'saba'),
      it('', '', 'Dobin-mushi (autumn)', '', 'Soup', 'ask', 'no', '', 'dobin'),
    ] }, {
    cuisine: '日替わりの刺身とおばんざいの小さな祇園の割烹 (2024年5月)・ていねいな出汁、土瓶蒸し (2026年10月)、白子と自家製ポン酢 (2026年2月)・ほたるいかの酢味噌、まぐろのユッケ、ぐじの塩焼き、白焼き、ほうじ茶アイス (2024年3月)・締めの鯖寿司 (2024年12月)・1人6,000〜10,000円ほど (2026年、食べログの口コミ)',
    neighborhood: '祇園花見小路、四条の北',
    gf_detail: '要確認。出汁を使う和食、自家製ポン酢。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、刺身、魚料理 (口コミ)。',
    notes: '[割烹・祇園花見小路、見つけにくい2階] 大将と女将の小さな花見小路の2階の割烹。常連に愛され、ていねいな出汁、日替わりの刺身とおばんざい、冬は白子と自家製ポン酢、締めは鯖寿司。6,000〜10,000円ほど、喫煙可、日曜休み。',
  });
}

// ================================================================ 梅乃家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022795/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gionumenoya.jp/';
  const H = day(['09:30', '16:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_umenoya_gion_shinbashi', name: '梅乃家 (Umenoya)', category: 'OMNI',
    lat: 35.005727827873905, lng: 135.77499377035912, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu shabu-shabu with homemade ponzu and sesame sauce, sukiyaki, udon to finish; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu shabu-shabu, sukiyaki and steak (official site).',
    hours_raw: '09:30–16:00 (last order 15:30) and 18:00–22:00 (last food order 21:00, drinks 21:30); closed Monday and Wednesday (official site). Tabelog instead lists Monday and Wednesday as evening-only and says evenings are by advance reservation from September. Cards (incl. UnionPay) and PayPay, Alipay, WeChat Pay; no e-money (Tabelog). 27 seats: a 10-seat counter and a 17-seat tatami room with sunken kotatsu (official site); smoking at the counter, non-smoking in the tatami room (Tabelog). English menu with photos, English- and Chinese-speaking staff; children and strollers welcome (Tabelog). By the Shirakawa near Tatsumi Daimyojin, Shinbashi-dori west of Hanamikoji (official site).',
    hours: { 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinbashi, by the Shirakawa',
    cuisine: 'Shabu-shabu and sukiyaki in a renewed Gion ochaya run by a former maiko (official site) · lunch: wagyu shabu-shabu or sukiyaki course ¥5,980; maiko meal ¥3,980; steak course ¥4,980; seven-colour gyoza ¥1,980; matcha experience ¥1,880 (official site) · dinner: wagyu shabu-shabu or sukiyaki course ¥12,800 with one drink; top-grade courses ¥14,800 on Sunday and holiday nights by reservation (official site) · Omi beef shabu-shabu with homemade ponzu and sesame sauce, udon to finish (October 2026); the maiko meal of Kyushu Kuroge wagyu diced steak, simmered dishes, rice, soup and dessert (October 2026)',
    website: SITE, gmaps: gm('梅乃家 祇園 しゃぶしゃぶ'), menu_url: SITE + 'contents.html',
    notes: "[Shabu-shabu & sukiyaki · Gion Shinbashi, a former maiko's ochaya] A Shirakawa-side teahouse turned shabu-shabu house so first-timers can taste ochaya life, run by an okami who was once a maiko. Lunch from 9:30 — wagyu courses ¥5,980 or the ¥3,980 maiko meal; dinner courses ¥12,800 with a drink. English menu; closed Monday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Okami, a former maiko (not named)'], origin: null,
      background: 'A traditional Kyoto ochaya renewed as a shabu-shabu and sukiyaki restaurant so that first-time visitors can enjoy it; run by an okami who was a maiko (official site). An October 2026 reviewer describes a teahouse of about 100 years, with photos of the okami’s maiko days along the entrance corridor; the okami serves in the evenings and leaves lunch to the staff.',
      philosophy: 'Gion hospitality in the Kyoto speech of a former maiko (official site).',
      specialty: 'Wagyu shabu-shabu and sukiyaki.',
      anecdotes: [
        { text: 'A December 2024 guest came for the ambience and the chat with the okami over a free-drink course.', source: R + 'B497875362/' },
        { text: 'An October 2026 solo diner had the maiko meal, whose diced steak is sized for a maiko’s small mouth.', source: R + 'B538372278/' },
        { text: 'An October 2026 host brought overseas guests for Omi beef shabu-shabu at lunch.', source: R + 'B538417212/' },
      ],
      japanese_sources_summary: '公式サイト: 梅乃家、しゃぶしゃぶ・すき焼き、京都市東山区新橋通花見小路西入橋本町385、白川のほとり、辰巳大明神の近く、元舞妓の女将が営む老舗、京都伝統のお茶屋を一見さんにも楽しめるようにしゃぶしゃぶ・すき焼きの店にリニューアル、9:30〜16:00 (L.O.15:30)、18:00〜22:00 (L.O.料理21:00、ドリンク21:30)、月曜・水曜定休、27席 (カウンター10席、座敷17席)、ランチ: 和牛しゃぶしゃぶコース・和牛すき焼きコース各5,980円、舞妓飯3,980円、ステーキコース4,980円、七色餃子1,980円、翠雪 (抹茶体験) 1,880円、肉追加2,980円、野菜追加1,980円、ディナー: 和牛しゃぶしゃぶコース・和牛すき焼きコース各12,800円、最高級しゃぶしゃぶ・すき焼きコース各14,800円 (日曜・祝日の夜限定、要予約)、ディナーはドリンク1杯付き。食べログ: 月・水は夜のみ、9月から夜は事前予約のみ、カード (銀聯も)・PayPay・Alipay・WeChat Pay可、電子マネー不可、カウンターは喫煙可・座敷は禁煙、英語メニュー、英語・中国語のスタッフ、子供可。口コミ (2017〜2026年、英語): 元舞妓の女将、100年のお茶屋を改装、廊下に女将の舞妓時代の写真、夜は女将が接客、近江牛のしゃぶしゃぶ、自家製のポン酢とごまだれ、締めのうどん、舞妓飯は九州産黒毛和牛のサイコロステーキ、飲み放題のコース (2024年)。',
      confidence: 'medium', sources: [SITE, SITE + 'contents.html', TB, R + 'B497875362/', R + 'B530247747/', R + 'B538372278/', R + 'B538417212/', R + 'B538460823/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos; English- and Chinese-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通花見小路西入橋本町385',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menu; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005728, 135.774994); cross-checked: GSI 京都府京都市東山区橋本町385番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'contents.html'],
    price_note: 'Prices from the official site (November 2026), tax included; dinner courses include one drink.', last_checked: TODAY, items: [
      it('和牛しゃぶしゃぶコース', '', 'Wagyu shabu-shabu course (lunch)', '¥5,980', 'Lunch', 'ask', 'no', '', 'shabu_lunch'),
      it('和牛すき焼きコース', '', 'Wagyu sukiyaki course (lunch)', '¥5,980', 'Lunch', 'no', 'no', '', 'suki_lunch'),
      it('舞妓飯', '', 'Maiko meal (lunch)', '¥3,980', 'Lunch', 'ask', 'no', 'Varies with the season.', 'maikomeshi'),
      it('和牛しゃぶしゃぶコース', '', 'Wagyu shabu-shabu course (dinner, one drink)', '¥12,800', 'Dinner', 'ask', 'no', '', 'shabu_dinner'),
      it('翠雪（抹茶体験）', '', 'Matcha experience', '¥1,880', 'Lunch', 'ask', 'ask', '', 'matcha'),
    ] }, {
    cuisine: '元舞妓の女将が営む、お茶屋をリニューアルしたしゃぶしゃぶ・すき焼きの店 (公式サイト)・ランチ: 和牛しゃぶしゃぶ・すき焼きのコース各5,980円、舞妓飯3,980円、ステーキコース4,980円、七色餃子1,980円、抹茶体験1,880円 (公式サイト)・ディナー: 和牛しゃぶしゃぶ・すき焼きのコース各12,800円 (ドリンク1杯付き)、最高級コース14,800円は日曜・祝日の夜に要予約 (公式サイト)・近江牛のしゃぶしゃぶに自家製のポン酢とごまだれ、締めのうどん (2026年10月)、舞妓飯は九州産黒毛和牛のサイコロステーキ、炊き合わせ、ご飯、汁、デザート (2026年10月)',
    neighborhood: '祇園新橋、白川のほとり',
    gf_detail: '要確認。自家製のポン酢とごまだれの和牛しゃぶしゃぶ、すき焼き、締めのうどん。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛のしゃぶしゃぶ、すき焼き、ステーキ (公式サイト)。',
    notes: '[しゃぶしゃぶ・すき焼き・祇園新橋、元舞妓のお茶屋] 一見さんにもお茶屋の雰囲気をと、白川のほとりのお茶屋をしゃぶしゃぶ・すき焼きの店に。女将は元舞妓。ランチは9時半から、和牛のコース5,980円や舞妓飯3,980円、夜はドリンク付きのコース12,800円。英語メニューあり、月・水休み。',
  });
}

save();
