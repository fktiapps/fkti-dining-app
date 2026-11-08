// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 77.
//   + 祇園 開福食道 ハルハル Gion Kaifuku Shokudo Haruharu (crystal-pot shabu-shabu and Kyoto-wagyu sukiyaki, late, Gion) — rest
//   + 厨房だん Chubo Dan ("Dan-yaki" iron-pot izakaya with rare draft beers, open to 4 am, Kiyamachi) — rest
//   + フェロー・アンド・フェロー Fellow and Fellow (Gion whisky bar since 1991, run by a couple) — rest
//   + シンサコッケダン 京都四条烏丸店 Shinsa Kokke Dan (Seoul blue-crab gejang specialist, Shijo-Karasuma) — rest
//   - skip 26040544 DiningCafe＆Bar ADACHIYA (thin: two reviews)
//   - skip 26003650 本格焼肉チファジャ 三条河原町本店 (chain, earlier ruling 26006761)
//   - skip 26040094 葡萄酒堂 musica (no reviews)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: チファジャ is ruled a chain (26006761);
//   no rulings for 開福/ハルハル, ADACHIYA, 厨房だん, フェロー or musica.
//   Same-name counts first (2026-11-08): ハルハル — one. 厨房だん — one. フェロー・アンド・フェロー — one. シンサコッケダン —
//   three on Tabelog (two in Osaka, this one in Kyoto) from a Seoul crab restaurant; a single brand under five in Japan, drafted on
//   the DRINK DRANK footing, flagged.
//   None of the four is in data/kyoto.json. Charges per Tabelog's Japanese original: フェロー 「サービス料１０％ チャージ1,100円」;
//   ハルハル, 厨房だん and シンサコッケダン none listed. No halal claims; no owner deaths; a health remark (not self-published) about the Fellow and Fellow
//   owner (March 2026) and single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-77');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040544', 'thin: DiningCafe＆Bar ADACHIYA has two Tabelog reviews, the latest in May 2025, neither with any detail — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260202/26040544/).');
skip('26003650', 'chain: 本格焼肉チファジャ — six shops in Kyoto, Shiga and Yamanashi, already ruled a chain at 26006761 (https://tabelog.com/en/kyoto/A2601/A260202/26003650/).');
skip('26040094', 'no reviews: 葡萄酒堂 musica has no Tabelog reviews — nothing to draft from (https://tabelog.com/en/kyoto/A2601/A260201/26040094/).');

// ================================================================ 祇園 開福食道 ハルハル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038474/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://haruharu1129.com/';
  const WK = day(['17:00', '23:00']); const FR = day(['17:00', '04:00']); const SA = day(['11:00', '15:00'], ['17:00', '04:00']); const SU = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_haruharu', name: '祇園 開福食道 ハルハル (Gion Kaifuku Shokudo Haruharu)', category: 'OMNI',
    lat: 35.004525, lng: 135.776416, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pork shabu-shabu with ponzu, sukiyaki and oden (2024–25 reviews); ponzu and sukiyaki sauce are usually soy-based; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork shabu-shabu, Kyoto wagyu sukiyaki, sashimi and oden (2024–25 reviews).',
    hours_raw: 'Mon–Thu and holidays 17:00–23:00 (last order 22:00); Fri 17:00–4:00 (last order 3:30); Sat 11:00–15:00 and 17:00–4:00; Sun 11:00–15:00 and 17:00–23:00 (Tabelog). Reservations advised — full by 19:00 on a June 2024 evening. Cards; no e-money or QR (Tabelog). 24 seats: counter, tables and sunken-kotatsu seating (Tabelog; December 2023). Smoking allowed (Tabelog). Yuki Building 1F on Tominaga-dori in Gion, by Gion-Shijo station (Tabelog; December 2023). Opened 25 November 2022 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominaga-dori, Gion — Gion-Shijo',
    cuisine: 'Hot pots in heat-holding crystal pots: pork shabu-shabu and Kyoto-wagyu sukiyaki and shabu-shabu courses (Tabelog; 2023–25 reviews) · pork shabu-shabu (December 2023) · Shonan Miyaji pork shabu-shabu with white negi and ponzu; about ¥7,000 a head without all-you-can-drink (June 2024) · sashimi platter, steamed pork, mixed oden, pork shabu-shabu (March 2025) · single-serving hot pots (March 2025) · Kyoto wagyu sukiyaki; oden (April 2025)',
    website: SITE, gmaps: gm('祇園 開福食道 ハルハル'), menu_url: TB,
    notes: '[Crystal-pot shabu-shabu · Gion, late] A cosy Gion hot-pot spot with a counter and sunken seats, cooking pork shabu-shabu and Kyoto-wagyu sukiyaki in rare crystal pots that hold the heat, plus steamed pork, sashimi and oden. Single servings possible; open to 4:00 on Fridays and Saturdays, with weekend lunch. Warm, friendly staff; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a hot-pot restaurant opened in November 2022 in Gion, specialising in crystal-pot shabu-shabu and Kyoto-wagyu sukiyaki.',
      philosophy: null, specialty: 'Crystal-pot shabu-shabu; Kyoto-wagyu sukiyaki.',
      anecdotes: [
        { text: 'A March 2025 diner, full after the steamed pork, was told a single serving of hot pot was fine.', source: R + 'B505198978/' },
        { text: 'An April 2025 visitor found the Kyoto wagyu released a milky aroma the moment it touched the tongue.', source: R + 'B504359966/' },
        { text: 'A June 2024 diner arriving before 19:00 found every seat, counter included, already taken.', source: R + 'B486456585/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: しゃぶしゃぶ・居酒屋、東山区祇園町北側347-31 ユウキビル 1F、祇園四条駅すぐ、月〜木・祝日17:00〜23:00、金17:00〜翌4:00、土11:00〜15:00 と17:00〜翌4:00、日11:00〜15:00 と17:00〜23:00、カード可、電子マネー・QR 不可、24席 (カウンター、テーブル、掘りごたつ)、喫煙可、2022年11月25日オープン、京都和牛のしゃぶしゃぶとすき焼きのコース。口コミ (2023年1月〜2025年4月、英語): 水晶鍋の豚しゃぶ、白ねぎとポン酢、刺身の盛り合わせ、蒸し豚、おでん、京都和牛のすき焼き、1人前から、飲み放題なしで1人約7,000円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B458575853/', R + 'B462180303/', R + 'B466179713/', R + 'B466794802/', R + 'B466993101/', R + 'B468901215/', R + 'B474628547/', R + 'B476422248/', R + 'B486456585/', R + 'B503162653/', R + 'B504359966/', R + 'B505198978/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead in the evening; single-serving hot pots possible. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-31 ユウキビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through April 2025.' },
    pin_source: `Tabelog ${TB} (35.004615, 135.776416), offset 10 m south: kyoto_obatarian_gion (same address, 347-31 Yuki Building 1F) sat 1.1 m away; cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; about ¥7,000 a head without all-you-can-drink (June 2024).', last_checked: TODAY, items: [
      it('', '', 'Pork shabu-shabu in a crystal pot', '', 'Hot pots', 'ask', 'no', 'With ponzu; 2023–25 reviews.', 'buta_shabu'),
      it('', '', 'Kyoto wagyu sukiyaki', '', 'Hot pots', 'ask', 'no', 'April 2025; course on Tabelog.', 'sukiyaki'),
      it('', '', 'Steamed pork', '', 'Small plates', 'ask', 'no', 'March 2025.', 'mushibuta'),
      it('', '', 'Oden', '', 'Small plates', 'ask', 'no', 'March and April 2025.', 'oden'),
    ] }, {
    cuisine: '熱を保つ水晶の鍋で、豚しゃぶ、京都和牛のすき焼きやしゃぶしゃぶのコース (食べログ、2023〜2025年の口コミ)・豚しゃぶ (2023年12月)・白ねぎとポン酢の Shonan Miyaji の豚のしゃぶしゃぶ、飲み放題なしで1人約7,000円 (2024年6月)・刺身の盛り合わせ、蒸し豚、おでんの盛り合わせ、豚しゃぶ (2025年3月)・1人前からの鍋 (2025年3月)・京都和牛のすき焼き、おでん (2025年4月)',
    neighborhood: '祇園、富永町通。祇園四条',
    gf_detail: '要確認。ポン酢の豚しゃぶ、すき焼き、おでん (2024〜2025年の口コミ)。ポン酢やすき焼きのたれはふつう醤油ベース。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚しゃぶ、京都和牛のすき焼き、刺身、おでん (2024〜2025年の口コミ)。',
    notes: '[水晶鍋のしゃぶしゃぶ・祇園、深夜まで] カウンターと掘りごたつのある祇園の居心地のよい鍋の店。熱を保つ珍しい水晶の鍋で豚しゃぶや京都和牛のすき焼き、蒸し豚、刺身、おでんも。1人前から注文でき、金曜と土曜は深夜4時まで、週末は昼も営業。明るく親切なスタッフ。喫煙可。',
  });
}

// ================================================================ 厨房だん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038990/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '04:00']);
  put({
    id: 'kyoto_chubo_dan_kiyamachi', name: '厨房だん (Chubo Dan)', category: 'OMNI',
    lat: 35.009525, lng: 135.770699, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Dan-yaki finishes with udon in a sweet-spicy sauce; chijimi and kara-age (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Dan-yaki of beef, pork and chicken; beef tripe; dashimaki (2024–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–4:00 (last food order 3:00); closed Wednesday (Tabelog). Reservations and private hire for 20–50 (Tabelog). Cards and e-money; no QR (Tabelog). 26 seats: 18 at tables, 8 at the counter, with a night view (Tabelog). Heated tobacco only, in a designated area on the same floor; no smoking until 23:00 at weekends and holidays (Tabelog). Yurika Building 5F, Kiyamachi north of Sanjo, 5 min from Keihan Sanjo (Tabelog). Opened 15 December 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Sanjo — Keihan Sanjo',
    cuisine: 'Izakaya known for "Dan-yaki" — beef, pork and chicken under a mountain of vegetables in a sweet-spicy sauce in an iron pot, finished with udon — plus spicy fried beef tripe and chijimi, a homemade lemon sour and rare beers (Tabelog; June 2025) · dashimaki, ajillo, cold noodles (July 2024) · Harukaze and Sorachi drafts; lotus-chip and cream-cheese salad; crème brûlée (June 2025) · namul, kimchi, chijimi, kara-age; wide sake list (June 2026)',
    website: null, gmaps: gm('厨房だん 木屋町'), menu_url: TB,
    notes: '[Iron-pot izakaya · Kiyamachi, to 4 am] A fifth-floor izakaya off Kiyamachi with night views and late hours, built around Dan-yaki — beef, pork and chicken simmered under a heap of vegetables in a sweet-spicy iron pot, finished with udon — plus chijimi, spicy tripe and rare draft beers such as Sorachi. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), selects the rare beers (Tabelog)'], origin: null,
      background: 'Per Tabelog: an izakaya opened in December 2022 on Kiyamachi, with Dan-yaki as its signature and beers chosen by the owner.',
      philosophy: null, specialty: 'Dan-yaki iron-pot dish; craft and rare beers.',
      anecdotes: [
        { text: 'A June 2025 diner learned the Sorachi draft is poured in only two places in Kyoto.', source: R + 'B509043004/' },
        { text: 'A July 2024 visitor liked the roomy interior, the dashimaki and ajillo, and cold noodles to finish.', source: R + 'B489733758/' },
        { text: 'A June 2026 first-timer came after work, glad it stays open into the small hours.', source: R + 'B530739385/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鍋・韓国料理、中京区木屋町通三条上ル上大阪町528 遊里香ビル 5F、京阪三条駅7番出口から徒歩約5分、月・火・木〜日17:00〜翌4:00 (L.O. 料理3:00)、水曜休み、カード・電子マネー可、QR 不可、26席 (テーブル18、カウンター8)、加熱式たばこのみ (土日祝日は23時まで禁煙)、2022年12月15日オープン、名物「だん焼き」、牛ホルモンの辛い揚げ物、チヂミ、自家製レモンサワー、店主が選ぶ珍しいビール。口コミ (2023年3月〜2026年6月、英語): 鉄鍋で牛・豚・鶏と山盛りの野菜を甘辛く、締めにうどん、Harukaze と Sorachi の生、れんこんチップとクリームチーズのサラダ、クリームブリュレ、だし巻き、アヒージョ、冷麺、ナムル、キムチ、からあげ。',
      confidence: 'medium', sources: [TB, R + 'B464036997/', R + 'B484434293/', R + 'B484785418/', R + 'B489733758/', R + 'B504378134/', R + 'B509043004/', R + 'B530739385/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order the Dan-yaki for the table; open very late. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上ル上大阪町528 遊里香ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.009615, 135.770699), offset 10 m south: kyoto_rung_arun_thai (same building, 3F) sat 1.7 m away; cross-checked: GSI 京都府京都市中京区上大阪町528番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥3,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Dan-yaki (iron pot of beef, pork, chicken and vegetables; udon to finish)', '', 'Signature', 'no', 'no', 'June 2025.', 'danyaki'),
      it('', '', 'Chijimi', '', 'Small plates', 'no', 'ask', 'June 2026.', 'chijimi'),
      it('', '', 'Homemade lemon sour', '', 'Drinks', 'ask', 'ask', 'Tabelog.', 'lemon_sour'),
    ] }, {
    cuisine: '鉄鍋で牛・豚・鶏を山盛りの野菜と甘辛く煮て、うどんで締める「だん焼き」が名物。牛ホルモンの辛い揚げ物、チヂミ、自家製レモンサワー、珍しいビール (食べログ、2025年6月)・だし巻き、アヒージョ、冷麺 (2024年7月)・Harukaze と Sorachi の生ビール、れんこんチップとクリームチーズのサラダ、クリームブリュレ (2025年6月)・ナムル、キムチ、チヂミ、からあげ、豊富な日本酒 (2026年6月)',
    neighborhood: '木屋町、三条の北。京阪三条',
    gf_detail: 'グルテンフリーではない。甘辛いたれのだん焼きの締めはうどん、チヂミ、からあげ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛・豚・鶏のだん焼き、牛ホルモン、だし巻き (2024〜2026年の口コミ)。',
    notes: '[鉄鍋の居酒屋・木屋町、深夜4時まで] 木屋町近くのビル5階、夜景の見える深夜まで開く居酒屋。名物は牛・豚・鶏を山盛りの野菜と甘辛く煮て、うどんで締める鉄鍋の「だん焼き」。チヂミ、辛いホルモン、Sorachi などの珍しい生ビール。水曜休み。',
  });
}

// ================================================================ フェロー・アンド・フェロー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001274/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://fellow-and-fellow-2.jimdosite.com/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_fellow_and_fellow_gion', name: 'フェロー・アンド・フェロー (Fellow and Fellow)', category: 'OMNI',
    lat: 35.004582, lng: 135.776498, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bar with an expanded food menu and the owner’s snack assortment (2023–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A bar; the snack assortment and food menu are not described in detail (2026 reviews); no vegan information.',
    hours_raw: 'Tue–Sat and the day before or after a holiday 17:00–0:00 (last order 23:00); closed Monday, Sunday and holidays (Tabelog). Service charge 10% plus a ¥1,100 charge (Tabelog, Japanese text: 「サービス料１０％ チャージ1,100円」). Cards (incl. UnionPay), e-money and QR (Tabelog). 20 seats; private hire for up to 20 (Tabelog). Kiseru pipes to try (October 2023; September 2026). Maruto 13 Building 4F, Gion north side, 6 min from Gion-Shijo (Tabelog). Opened 1 February 1991 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north side — Gion-Shijo',
    cuisine: 'Whisky and cocktail bar since 1991 · highball, straight whisky and food; kiseru pipe (October 2023) · straight pour of the 25th-anniversary whisky; expanded food menu (March 2026) · beer festival held a few times a year: free-flow Sapporo Classic and Yebisu Black drafts, a sake flight, a tasting of tofu from four long-established Kyoto makers, summer obanzai, hamo, octopus (July 2026) · draft beer from a kept mug, Old Fashioned, Martini, whisky and water, the owner’s snack assortment (September 2026)',
    website: SITE, gmaps: gm('フェロー・アンド・フェロー 祇園'), menu_url: TB,
    notes: '[Whisky bar · Gion, since 1991] A long-established fourth-floor bar on the north side of Gion, run by a couple, with whisky (including its own 25th-anniversary bottling), classic cocktails, an expanded food menu, kiseru pipes to try and beer festivals a few times a year. Regulars keep personal beer mugs behind the bar. ¥1,100 charge plus 10% service; closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Master/owner (unnamed) and spouse (March 2026)'], origin: null,
      background: 'Per Tabelog: a bar opened in February 1991 in Gion; a March 2026 visitor returning after about 20 years was looked after by the master’s wife.',
      philosophy: null, specialty: 'Whisky and classic cocktails.',
      anecdotes: [
        { text: 'A March 2026 visitor returning after some 20 years found the grand piano gone but the bar still nostalgic, and toasted with the 25th-anniversary whisky.', source: R + 'B524967286/' },
        { text: 'A September 2026 regular started with draft beer from a mug kept behind the bar, then an Old Fashioned and a Martini.', source: R + 'B521429521/' },
        { text: 'A July 2026 regular came for one of the beer festivals held a few times a year, with free-flow Sapporo Classic and a tasting of tofu from four old Kyoto makers.', source: R + 'B504460953/' },
      ],
      japanese_sources_summary: '食べログ: バー、東山区祇園町北側347 マルトー13ビル 4F、京阪祇園四条駅から徒歩6分、火〜土・祝日前後17:00〜24:00 (L.O. 23:00)、月・日・祝日休み、サービス料10%・チャージ1,100円、カード・電子マネー・QR 可、20席、1991年2月1日オープン。口コミ (2008年7月〜2026年9月、英語): ウイスキー、ハイボール、オールドファッションド、マティーニ、25周年のウイスキー、キープしたビールのジョッキ、店主のつまみの盛り合わせ、増えた料理、キセル、年に数回のビール祭り、夫婦で営む。',
      confidence: 'medium', sources: [TB, SITE, R + 'B4898867/', R + 'B116934698/', R + 'B36037215/', R + 'B472766377/', R + 'B504460953/', R + 'B521429521/', R + 'B524967286/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A classic Gion bar; budget for the ¥1,100 charge and 10% service. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347 マルトー13ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004582, 135.776498); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 77m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; ¥1,100 charge plus 10% service; reviewers report ¥4,000–14,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Whisky (incl. 25th-anniversary bottling)', '', 'Whisky', 'ask', 'ask', 'March 2026.', 'whisky'),
      it('', '', 'Classic cocktails (Old Fashioned, Martini)', '', 'Cocktails', 'ask', 'ask', 'September 2026.', 'cocktails'),
      it('', '', 'Owner’s snack assortment', '', 'Snacks', 'ask', 'ask', 'September 2026.', 'snacks'),
    ] }, {
    cuisine: '1991年からのウイスキーとカクテルのバー・ハイボール、ストレートのウイスキーと料理、キセル (2023年10月)・25周年のウイスキーをストレートで、増えた料理 (2026年3月)・年に数回のビール祭り、Sapporo Classic と Yebisu の黒の生のおかわり自由、日本酒3種、京都の老舗4軒の豆腐の食べ比べ、夏のおばんざい、鱧、たこ (2026年7月)・キープしたジョッキの生ビール、オールドファッションド、マティーニ、水割り、店主のつまみの盛り合わせ (2026年9月)',
    neighborhood: '祇園町北側。祇園四条',
    gf_detail: '要確認。料理が増えたバーで、店主のつまみの盛り合わせもある (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。バーで、つまみや料理の詳しい情報はない (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[ウイスキーバー・祇園、1991年から] 祇園町北側のビル4階の、夫婦で営む老舗のバー。25周年のウイスキーなど、クラシックなカクテル、増えた料理、キセル、年に数回のビール祭りも。常連は自分のジョッキをキープ。チャージ1,100円とサービス料10%。日曜と月曜休み。',
  });
}

// ================================================================ シンサコッケダン 京都四条烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043844/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '15:00'], ['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_shinsa_kokkedan_shijo', name: 'シンサコッケダン 京都四条烏丸店 (Shinsa Kokke Dan Kyoto Shijo Karasuma)', category: 'OMNI',
    lat: 35.002126, lng: 135.761291, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ganjang gejang is marinated in soy sauce; chapchae, jeon and sari noodles in the stews (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a blue-crab and seafood restaurant (Tabelog; 2026 reviews).',
    hours_raw: 'Mon–Fri 12:00–15:00 (last order 14:30) and 17:00–23:00 (last orders food 22:00, drinks 22:30); Sat, Sun and holidays 12:00–23:00; irregular closures (Tabelog). Reservations accepted (Tabelog; August 2026). Cards and PayPay; no e-money (Tabelog). Ordering by QR code or tablet (August 2026). 64 seats incl. private rooms for 4 and 8 (Tabelog). Non-smoking (Tabelog). 2 min from Shijo and Karasuma stations (Tabelog). Opened 4 November 2025 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Shijo-Karasuma — Shijo / Karasuma',
    cuisine: 'Korean blue-crab specialist from Seoul: ganjang gejang (soy-marinated crab), yangnyeom gejang, soft-shell crab jjigae and ganjang saeu; group sets for 3–6 such as the B set ¥20,900 (Tabelog; 2026 reviews) · C set with hot pot and gejang; extra shrimp (July 2026) · yukhoe; spicy stir-fried octopus (July 2026) · gejang lunch set ¥4,500 with free refills of everything but the crab; chapchae (September 2026) · crab-roe rice mixed in the shell (September 2026) · jeon; kanjang saeu (November 2026)',
    website: null, gmaps: gm('シンサコッケダン 京都四条烏丸店'), menu_url: TB,
    notes: '[Korean soy-marinated crab · Shijo-Karasuma, since 2025] The Kyoto branch of a Seoul blue-crab specialist, serving rich ganjang gejang — finished by mixing rice into the crab shell — spicy yangnyeom crab, soft-shell crab jjigae, marinated shrimp, yukhoe and jeon. Lunch sets around ¥4,500 with free side refills; big sets for groups. QR ordering; private rooms.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: the Kyoto Shijo-Karasuma shop, opened November 2025, of a Seoul blue-crab restaurant (reviews name Sinsa-dong and Sinchon); Tabelog lists two more Shinsa Kokkedan shops in Osaka.',
      philosophy: null, specialty: 'Ganjang gejang (soy-marinated blue crab).',
      anecdotes: [
        { text: 'A July 2026 early arrival was invited in out of the heat to wait at the table while a big crab delivery came in.', source: R + 'B532399404/' },
        { text: 'A July 2026 repeat visitor learned that eight shrimp were plenty for two after over-ordering the first time.', source: R + 'B526288006/' },
        { text: 'A September 2026 diner mixed the crab roe left in the shell with rice into a bibimbap.', source: R + 'B535184322/' },
      ],
      japanese_sources_summary: '食べログ: 韓国料理・海鮮・鍋、下京区扇酒屋町283-1、地下鉄四条駅・烏丸駅から徒歩2分、月〜金12:00〜15:00 (L.O. 14:30) と17:00〜23:00、土日祝日12:00〜23:00、不定休、カード・PayPay 可、64席、個室 (4名・8名)、禁煙、2025年11月4日オープン、ganjang gejang、yangnyeom gejang、ワタリガニのチゲ、ganjang saeuのセット (3〜6名用)。口コミ (2026年7月〜11月、英語): ソウルの有名店、ランチのセット4,500円 (カニ以外はおかわり自由)、ユッケ、タコの辛い炒め物、チャプチェ、チヂミ、カニの甲羅でご飯を混ぜる、QR やタブレットで注文。',
      confidence: 'medium', sources: [TB, R + 'B526288006/', R + 'B532399404/', R + 'B532562355/', R + 'B533306646/', R + 'B533783157/', R + 'B534152935/', R + 'B534697589/', R + 'B535184322/', R + 'B537671775/', R + 'B537726526/', R + 'B538074308/', R + 'B538540289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code or tablet; sets are sized for groups. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区扇酒屋町283-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002126, 135.761291); cross-checked: GSI 京都府京都市下京区扇酒屋町283番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537671775/'],
    price_note: 'Set prices from Tabelog (listed "per person" but each set is sized for a group); lunch from September 2026.', last_checked: TODAY, items: [
      it('', '', 'Gejang lunch set', '¥4,500', 'Lunch', 'no', 'no', 'Free refills except the crab; September 2026.', 'lunch_set'),
      it('', '', 'B set for 3–4 (ganjang gejang, soft-shell crab jjigae, yangnyeom gejang)', '¥20,900', 'Sets', 'no', 'no', 'Tabelog.', 'b_set'),
      it('', '', 'Yukhoe', '', 'Sides', 'ask', 'no', 'July and September 2026.', 'yukhoe'),
    ] }, {
    cuisine: 'ソウル発のワタリガニの専門店。ganjang gejang、yangnyeom gejang、ソフトシェルクラブのチゲ、ganjang saeu、3〜6名のセット (B セット20,900円など) (食べログ、2026年の口コミ)・鍋とgejang の C セット、えびの追加 (2026年7月)・ユッケ、タコの辛い炒め物 (2026年7月)・カニ以外おかわり自由のgejang のランチセット4,500円、チャプチェ (2026年9月)・甲羅にご飯を混ぜるカニみそのビビンバ (2026年9月)・チヂミ、ganjang saeu (2026年11月)',
    neighborhood: '四条烏丸の近く。四条・烏丸',
    gf_detail: 'グルテンフリーではない。ganjang gejangは醤油漬け、チャプチェ、チヂミ、チゲの麺 (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ワタリガニと海鮮の店 (食べログ、2026年の口コミ)。',
    notes: '[韓国のカニの醤油漬け・四条烏丸、2025年から] ソウルのワタリガニ専門店の京都店。濃厚なganjang gejangは甲羅にご飯を混ぜて締める。辛いyangnyeom gejang、ソフトシェルクラブのチゲ、えびの醤油漬け、ユッケ、チヂミ。昼はおかわり自由の4,500円ほどのセット、グループ向けの大きなセットも。QR で注文、個室あり。',
  });
}

save();
