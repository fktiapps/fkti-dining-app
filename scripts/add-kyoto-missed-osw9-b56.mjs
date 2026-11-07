// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 56.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 京都芋屋 芋と野菜 四条河原町店 Kyoto Imoya Imo to Yasai (sweet-potato sweets; 株式会社CRAFTMAN; since 2022)
//   + のとよ Notoyo (Nishiki Market river-fish shop: binchotan eel, ayu, carp; est. 1912 per a review)
//   + 肉居酒屋 大 Niku Izakaya Dai (meat izakaya in a Kiyamachi alley; since 2025)
//   - クレープとエスプレッソと鴨川沿い — chain (the brand's 21st shop, press release May 2026)
//   + 居酒屋 八朔 Hassaku (Kyoto obanzai, sashimi and sake off Nishiki; since 2020)
//   Same-name counts first: 芋屋 0 — CRAFTMAN's fixed shop, plus event stalls and a Nishiki "Imoya Soft" counter
//   mentioned in a May 2026 review (2–4 shops, none in data); のとよ 0; 大 0; 八朔 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 肉居酒屋 大 「なし」; the other three have no section.
//   Pins: のとよ — GSI matched only the town 鍛冶屋町, loc_precise false. Checked against main 17864852.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-56');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045081', 'chain: クレープとエスプレッソと鴨川沿い opened 18 May 2026 as the 21st shop of the brand (press release, PR TIMES)');

// ================================================================ 京都芋屋 芋と野菜 四条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037899/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://imotoyasai.com/'; const PR = 'https://agri.mynavi.jp/prtimes/2022_07_07_197908/';
  const D = day(['13:00', '21:00']);
  put({
    id: 'kyoto_imoya_imo_to_yasai_kawaramachi', name: '京都芋屋 芋と野菜 四条河原町店 (Kyoto Imoya Imo to Yasai)', category: 'OMNI',
    lat: 35.005845, lng: 135.767262, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Baked sweet potatoes are naturally wheat-free, but the sandwiches, crepes and baked sweet-potato pastries contain or may contain wheat (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain baked sweet potatoes, but the "super rich" sweet potato uses butter and egg yolk, and sandwiches use cream (2025–26 reviews).',
    hours_raw: 'Daily 13:00–21:00; hours may change (Tabelog). Takeaway; no bookings (Tabelog). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). Wrap the baked sweet potatoes in a plastic bag — the syrup can leak (November 2026 review). About 4 min from Kyoto-Kawaramachi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Kawaramachi, north of Shijo — 4 min from Kawaramachi Stn',
    cuisine: 'Sweet-potato sweets from a Kyoto farming and confectionery company (press release; 2025–26 reviews): baked sweet potatoes (Akane, Kanmitsu), the "super rich" sweet potato of baked potato mixed with butter and egg yolk ¥962 (December 2025), salt-butter sweet potato, sweet-potato sandwiches of Benihonoka or Satsuma potato with cream just under ¥600 (September 2026), sweet-potato crepe, sweet-potato chips; a sweet-potato soft serve ¥500 at the Nishiki Market counter (May 2026)',
    website: SITE, gmaps: gm('京都芋屋 芋と野菜 四条河原町'), menu_url: null,
    notes: "[Sweet potato · Shijo-Kawaramachi] A takeaway sweet-potato shop by a Kyoto farm-and-confectionery company: syrupy baked sweet potatoes, a buttery \"super rich\" sweet potato (¥962), cream-filled sweet-potato sandwiches and crepes. Mostly ¥500–1,000. Open daily 13:00–21:00.",
    chef_bio: { chef_name: null, roles: ['株式会社CRAFTMAN (no person named in reviews)'], origin: null,
      background: 'Opened 15 July 2022 (Tabelog; press release). Run by 株式会社CRAFTMAN, a Kyoto company in farming, confectionery and restaurants, founded June 2022, which sells its factory-made baked sweet potatoes and sweet-potato pastries mainly at department-store and station events (press release; job listing).',
      philosophy: null, specialty: 'Super rich sweet potato; baked sweet potatoes.',
      anecdotes: [
        { text: 'A December 2025 passer-by bought the ¥962 super rich sweet potato and was told to warm it in a microwave.', source: R + 'B519814221/' },
        { text: 'A December 2025 customer compared the Akane and Kanmitsu baked sweet potatoes and preferred Akane.', source: R + 'B519846536/' },
        { text: 'In November 2026 a buyer of the ultra-dense baked sweet potato found the syrup leaked through the waxed bag on a long trip.', source: R + 'B538732347/' },
      ],
      japanese_sources_summary: '食べログ: 京都芋屋 芋と野菜 四条河原町店、スイーツ、中京区東側町511-2、京都河原町駅から261m、毎日 13:00〜21:00、予約不可、カード・電子マネー・QR 可、禁煙、2022年7月15日オープン。プレスリリース: 京都で農業・菓子製造・飲食店運営の株式会社CRAFTMAN。口コミ (2025年5月〜2026年11月、英語): 焼き芋 (Akane、Kanmitsu)、焼き芋にバターと卵黄を混ぜた超極蜜スイートポテト962円、塩バタースイートポテト、Benihonoka やさつまいもと生クリームの芋サンド600円弱、芋のクレープ、芋チップス、錦市場の Imoya Soft 500円、蜜が漏れるので袋に。',
      confidence: 'medium', sources: [TB, SITE, PR, R + 'B506163792/', R + 'B511238334/', R + 'B512476323/', R + 'B517773317/', R + 'B519814221/', R + 'B519846536/', R + 'B525059578/', R + 'B529844892/', R + 'B534804789/', R + 'B538732347/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東側町511-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005845, 135.767262); cross-checked: GSI 京都府京都市中京区東側町511番地 (lot) 42m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519814221/', R + 'B534804789/'],
    price_note: 'Prices from December 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Super rich sweet potato', '¥962', 'Sweets', 'ask', 'no', 'December 2025 review.', 'chogoku_sweet_potato'),
      it('', '', 'Sweet-potato sandwich', 'just under ¥600', 'Sweets', 'no', 'no', 'September 2026 review.', 'imo_sando'),
    ] }, {
    cuisine: '京都の農業と菓子の会社の芋のスイーツ (プレスリリース、2025〜26年の口コミ): 焼き芋 (Akane、Kanmitsu)、焼き芋にバターと卵黄を混ぜた超極蜜スイートポテト962円 (2025年12月)、塩バタースイートポテト、Benihonoka やさつまいもと生クリームの芋サンド600円弱 (2026年9月)、芋のクレープ、芋チップス。錦市場の店の芋のソフトクリーム500円 (2026年5月)',
    neighborhood: '四条河原町、四条の北。河原町駅から徒歩4分',
    gf_detail: '要確認。焼き芋は小麦を使わないが、サンド、クレープ、焼き菓子のスイートポテトは小麦を含むか含む可能性 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。焼き芋はそのままだが、超極蜜スイートポテトはバターと卵黄、サンドは生クリームを使う (2025〜26年の口コミ)。',
    notes: '[芋スイーツ・四条河原町] 京都の農業と菓子の会社の持ち帰りの芋の店。蜜たっぷりの焼き芋、バターの超極蜜スイートポテト (962円)、生クリームの芋サンドやクレープ。ほぼ500〜1,000円。毎日13〜21時。',
  });
}

// ================================================================ のとよ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027027/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-nishiki.or.jp/stores/notoyo/';
  const D = day(['09:00', '18:00']);
  put({
    id: 'kyoto_notoyo_nishiki', name: 'のとよ (Notoyo)', category: 'OMNI',
    lat: 35.004956, lng: 135.766113, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: eel and sparrow are glazed with a soy-based tare (reviews; Nishiki Market site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a river-fish shop — eel, ayu, carp and grilled sparrow (reviews).',
    hours_raw: 'Daily 9:00–18:00; irregular closures (Nishiki Market site; Tabelog). No bookings (Tabelog). Cards: AMEX only; e-money accepted (Tabelog). A takeaway stall in the market: no eating while walking — eat standing at the shop, or take it away (May 2026 and September 2025 reviews). Tabelog lists 25 seats, but a September 2025 visitor found no eat-in here and was pointed to a nearby sister restaurant for that. In Nishiki Market west of Gokomachi, about 5 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market — 5 min from Kawaramachi Stn',
    cuisine: 'River fish from one of only three river-fish specialists in Nishiki Market (Nishiki Market site): eel kabayaki grilled over binchotan with a secret tare, the signature; grilled eel liver; salt-grilled ayu (roe-filled in season) from a live tank; small boiled ayu from Lake Biwa; carp simmered with roe and carp sashimi; grilled sparrow in a sweet-spicy glaze (2021–26 reviews); it also prepares fish for kaiseki restaurants (Nishiki Market site)',
    website: SITE, gmaps: gm('のとよ 錦市場'), menu_url: null,
    notes: "[River fish · Nishiki Market] One of the market's last river-fish specialists, grilling eel over binchotan with a secret tare, salt-grilled ayu from a live tank, carp with roe and even sparrow on skewers. Buy and eat at the stall or take away. About ¥1,000–2,000. Open 9:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Family members at the grill and counter (unnamed)'], origin: null,
      background: 'A river-fish shop that also supplies kaiseki restaurants (Nishiki Market site); a September 2025 visitor read it as established in 1912. In September 2023 an older man was grilling the ayu while an older woman recommended them.',
      philosophy: null, specialty: 'Binchotan eel kabayaki; salt-grilled ayu.',
      anecdotes: [
        { text: 'A September 2025 visitor bought boiled Lake Biwa ayu, salt-grilled ayu and grilled sparrow and took them, with a beer, to the Kamo River near Sanjo.', source: R + 'B527438825/' },
        { text: 'On a May 2026 date, a couple tried the sweet-spicy grilled sparrow, eaten standing at the shop since eating while walking is not allowed.', source: R + 'B527693761/' },
        { text: 'A May 2026 first-timer called the binchotan eel too aromatic to describe.', source: R + 'B528213606/' },
      ],
      japanese_sources_summary: '錦市場の公式サイト: のとよ、京都市内でも少なく錦市場でも3軒しかない川魚の専門店、備長炭で焼き秘伝のタレのうなぎの蒲焼が看板、懐石料理店への「奥の商売」、9:00〜18:00、不定休。食べログ: 中京区錦小路通御幸町西入鍛治屋町216-2、阪急河原町駅から徒歩約5分、毎日 9:00〜18:00、予約不可、カードは AMEX のみ、電子マネー可、25席、禁煙。口コミ (2019年〜2026年5月、英語): 1912年創業と読める、鰻の肝焼き、生け簀の鮎の塩焼き (子持ち)、Lake Biwa の小鮎の煮物、子持ちの鯉の煮物と鯉の刺身、すずめの焼き物、食べ歩き禁止で店先で食べる、ここでは食事できず近くの系列店へという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B527438825/', R + 'B527693761/', R + 'B528213606/', R + 'B498470157/', R + 'B489251976/', R + 'B471785618/', R + 'B458464141/', R + 'B341895402/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Market stall; point and buy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区錦小路通御幸町西入鍛治屋町216-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Nishiki Market site and Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004956, 135.766113); GSI matched only the town 鍛冶屋町 (centroid 6 m away), so not lot-checked; the point is on Nishiki-koji west of Gokomachi as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528213606/', SITE],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Binchotan eel kabayaki', '', 'Eel', 'no', 'no', 'Nishiki Market site; May 2026 review.', 'unagi_kabayaki'),
      it('', '', 'Salt-grilled ayu', '', 'River fish', 'ask', 'no', '2023–25 reviews.', 'ayu_shioyaki'),
    ] }, {
    cuisine: '錦市場に3軒しかない川魚の専門店 (錦市場の公式サイト): 看板は備長炭で焼き秘伝のタレのうなぎの蒲焼。鰻の肝焼き、生け簀の鮎の塩焼き (季節は子持ち)、Lake Biwa の小鮎の煮物、子持ちの鯉の煮物と鯉の刺身、甘辛いすずめの焼き物 (2021〜26年の口コミ)。懐石料理店向けの仕事も (錦市場の公式サイト)',
    neighborhood: '錦市場。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。鰻やすずめに醤油ベースのタレ (口コミ、錦市場の公式サイト)。',
    vegan_detail: 'ヴィーガン不可。川魚の店。鰻、鮎、鯉、すずめの焼き物 (口コミ)。',
    notes: '[川魚・錦市場] 錦市場に残る数少ない川魚の専門店。備長炭と秘伝のタレのうなぎ、生け簀の鮎の塩焼き、子持ちの鯉、すずめの串焼きまで。店先で食べるか持ち帰りで。千〜2千円ほど。9〜18時。',
  });
}

// ================================================================ 肉居酒屋 大
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043629/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '26:00']);
  put({
    id: 'kyoto_niku_izakaya_dai', name: '肉居酒屋 大 (Niku Izakaya Dai)', category: 'OMNI',
    lat: 35.005751, lng: 135.77076, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated yakiniku, yukgaejang soup and seasoned meat dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat izakaya (2025–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–2:00 (food last order 1:00, drinks 1:30); Sun 17:00–24:00 (food last order 23:00); closing days may vary (Tabelog). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards, e-money and QR (Tabelog). 11 seats — a counter of 7 and one table; smoking allowed; sports on screen; free Wi-Fi; coin parking next door (Tabelog). The yakiniku is grilled by staff and brought to you (January and April 2026 reviews). In a narrow alley off Kiyamachi, 5 min from Hankyu Kawaramachi Stn exit 1 (Tabelog; April 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: day(['17:00', '24:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi alley, north of Shijo — 5 min from Kawaramachi Stn',
    cuisine: 'Meat izakaya with yakiniku grilled for you (2025–26 reviews): thick-cut tongue, beef tataki, meat sashimi, chicken neck, yakiniku of the day (chicken and lamb when supplied), yukgaejang soup to finish; assorted pickles and potato salad; shochu and wine, all-you-can-drink plans (Tabelog)',
    website: null, gmaps: gm('肉居酒屋 大 木屋町'), menu_url: null,
    notes: "[Meat izakaya · Kiyamachi alley] An 11-seat meat izakaya in a Kiyamachi alley, opened in 2025 by the owner of the previous shop here: thick tongue, beef tataki and meat sashimi, yakiniku grilled by the staff, and yukgaejang to finish. About ¥4,000–5,000. Open till 2:00; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 10 October 2025 (Tabelog). A November 2025 regular says the owner previously ran a restaurant at the same spot and reopened independently; an October 2026 regular marked its anniversary.',
      philosophy: null, specialty: 'Thick-cut tongue; meat sashimi.',
      anecdotes: [
        { text: 'A November 2025 regular of the previous restaurant came back for the thick-cut tongue and beef tataki.', source: R + 'B516987054/' },
        { text: 'A January 2026 diner was glad to have the meat grilled by a professional, though chicken and lamb were off for supply reasons, and reordered the pickles.', source: R + 'B520045979/' },
        { text: 'An October 2026 regular celebrated the shop\'s anniversary over meat dishes.', source: R + 'B534940329/' },
      ],
      japanese_sources_summary: '食べログ: 肉居酒屋 大、焼肉・ホルモン・居酒屋、中京区下樵木町202-1 東木屋町ビル1F C号室、阪急河原町駅1番出口から徒歩5分、月〜土 18:00〜翌2:00 (料理 L.O. 1:00)、日 17:00〜24:00、不定休、予約可、サービス料なし、カード・電子マネー・QR 可、11席 (カウンター7、テーブル1)、喫煙可、スポーツ観戦、Wi-Fi、隣にコインパーキング、2025年10月10日オープン、飲み放題。口コミ (2025年11月〜2026年10月、英語): 同じ場所の前の店の店主が独立して開いた、厚切りタン、牛のたたき、肉刺し、せせり、焼いて出してくれる焼肉、ユッケジャンスープ、漬物の盛り合わせ、ポテトサラダ、狭い路地、1周年。',
      confidence: 'medium', sources: [TB, R + 'B516987054/', R + 'B520045979/', R + 'B525773418/', R + 'B526082725/', R + 'B531665474/', R + 'B534940329/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町202-1 東木屋町ビル1F C号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005751, 135.770760); cross-checked: GSI 京都府京都市中京区下樵木町202番地 (lot) 9m; 6.3 m from kyoto_pontocho_yakuzen_curry; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516987054/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut tongue', '', 'Meat', 'ask', 'no', 'November 2025 review.', 'atsugiri_tan'),
      it('', '', 'Yukgaejang soup', '', 'To finish', 'no', 'no', 'April 2026 review.', 'yukgaejang'),
    ] }, {
    cuisine: '焼いて出してくれる焼肉の肉の居酒屋 (2025〜26年の口コミ): 厚切りタン、牛のたたき、肉刺し、せせり、その日の焼肉 (入荷があれば鶏やラム)、締めのユッケジャンスープ。漬物の盛り合わせ、ポテトサラダ。焼酎とワイン、飲み放題 (食べログ)',
    neighborhood: '木屋町の路地、四条の北。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。たれの焼肉、ユッケジャンスープ、味付けの肉料理 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の居酒屋 (2025〜26年の口コミ)。',
    notes: '[肉の居酒屋・木屋町の路地] 木屋町の路地の11席の肉の居酒屋。2025年に同じ場所の前の店の店主が開いた。厚切りタン、牛のたたき、肉刺し、店が焼いて出す焼肉、締めのユッケジャン。4千〜5千円ほど。深夜2時まで。喫煙可。',
  });
}

// ================================================================ 居酒屋 八朔
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034551/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_izakaya_hassaku', name: '居酒屋 八朔 (Izakaya Hassaku)', category: 'OMNI',
    lat: 35.005275, lng: 135.7662, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and tofu, but tempura, kara-age, duck noodles and soy- or miso-seasoned dishes are on the menu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Kyoto izakaya with pork kakuni and dashi dishes (2026 reviews).',
    hours_raw: 'Mon–Wed and Fri–Sun 12:00–14:30 (last order 14:00) and 17:00–22:00 (last order 21:30); closed Thursday (Tabelog). Bookings taken; the shop may call to cancel a confirmed booking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 42 seats — a counter of 8, tables, a semi-private room for 6 and a private room for 10; non-smoking (Tabelog; February 2026 review). About 3 min from Hankyu Kyoto-Kawaramachi Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki / Shinkyogoku area, north of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Kyoto izakaya cooking with sake (2026 reviews): homemade tofu as the opener, white-miso oden, dashimaki and dashimaki tempura, sweet-simmered pork kakuni, nama-fu dengaku, Kamo eggplant dengaku, hamo otoshi, sashimi platters, grilled kampachi collar, kara-age, fried small potatoes, duck noodle soup; a ¥7,000 course (March 2026) and an evening set of Kyoto highball and kakuni (September 2026); many sakes (Tabelog)',
    website: null, gmaps: gm('居酒屋 八朔 京都 船屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto izakaya · off Shijo-Kawaramachi] A calm, non-smoking izakaya with homemade tofu, white-miso oden, dashimaki tempura, sweet kakuni and seasonal hamo, plus plenty of sake and a ¥7,000 course. About ¥4,000–8,000. Lunch too; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 August 2020 (Tabelog).',
      philosophy: null, specialty: 'Homemade tofu; white-miso oden.',
      anecdotes: [
        { text: 'A diner returning in March 2026 after two years found the ¥7,000 fish-centred course filling.', source: R + 'B491787710/' },
        { text: 'A September 2026 business traveller liked the hamo so much it was ordered twice, and noted prices were not inflated for tourists.', source: R + 'B535453660/' },
        { text: 'An October 2026 first-timer found the homemade tofu opener so creamy it needed no salt.', source: R + 'B537840570/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋 八朔、居酒屋・日本料理・寿司、中京区船屋町391-1、阪急京都河原町駅から徒歩3分、月〜水・金〜日・祝 12:00〜14:30 (L.O. 14:00)・17:00〜22:00 (L.O. 21:30)、木曜休み、予約可 (確定後に店からキャンセルの連絡の場合あり)、カード・PayPay 可、電子マネー不可、42席 (カウンター8、4名テーブル5、6名の半個室、10名の個室)、禁煙、2020年8月1日オープン、日本酒にこだわる、魚にこだわる。口コミ (2026年2〜10月、英語): 自家製豆腐のお通し、白味噌おでん、だし巻きとだし巻きの天ぷら、甘めの豚の角煮、生麩田楽、Kamo なすの田楽、鱧の落とし、刺身の盛り合わせ、カンパチのかまの塩焼き、唐揚げ、小芋の揚げ物、鴨の麺、7,000円のコース、Kyoto Highball と角煮の晩酌セット、観光客価格ではない。',
      confidence: 'medium', sources: [TB, R + 'B491787710/', R + 'B521880513/', R + 'B522669573/', R + 'B532301285/', R + 'B532461605/', R + 'B535098143/', R + 'B535453660/', R + 'B535561142/', R + 'B535980152/', R + 'B537840570/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm, non-smoking room; sake list.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区船屋町391-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005275, 135.766200); cross-checked: GSI 京都府京都市中京区船屋町391番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491787710/'],
    price_note: 'Course price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥7,000', 'Courses', 'ask', 'no', 'March 2026 review.', 'course'),
      it('', '', 'White-miso oden', '', 'Dishes', 'ask', 'ask', '2026 reviews.', 'shiromiso_oden'),
    ] }, {
    cuisine: '日本酒と楽しむ京都の居酒屋料理 (2026年の口コミ): お通しの自家製豆腐、白味噌おでん、だし巻きとだし巻きの天ぷら、甘めの豚の角煮、生麩田楽、Kamo なすの田楽、鱧の落とし、刺身の盛り合わせ、カンパチのかまの塩焼き、唐揚げ、小芋の揚げ物、鴨の麺。7,000円のコース (2026年3月)、Kyoto Highball と角煮の晩酌セット (2026年9月)。日本酒が豊富 (食べログ)',
    neighborhood: '錦・新京極の辺り、四条の北。河原町駅から徒歩3分',
    gf_detail: '要確認。刺身や豆腐もあるが、天ぷら、唐揚げ、鴨の麺、醤油や味噌の料理もある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚中心の京都の居酒屋で、豚の角煮やだしの料理も (2026年の口コミ)。',
    notes: '[京都の居酒屋・四条河原町の近く] 落ち着いた禁煙の居酒屋。自家製豆腐、白味噌おでん、だし巻きの天ぷら、甘めの角煮、季節の鱧に、豊富な日本酒と7,000円のコース。4千〜8千円ほど。昼も営業。木曜休み。',
  });
}

save();
