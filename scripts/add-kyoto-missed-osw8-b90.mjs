// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 90 (2026-11-08).
//   + バー ケラー Bar Keller (members-only whisky bar of the K6 family, Kiyamachi-Nijo; rest — drafted under Greg's ruling
//     that referral-, introduction- and members-only places are listed with the restriction stated plainly)
//   + 焼肉･韓国料理 昇瑛 Yakiniku Korean Shoei (wagyu yakiniku with a bottomless-meat lunch, Shinmachi-Rokkaku; rest)
//   + ごはんや. Gohan Ya (izakaya of seasonal fish and oden since 1990, Karasuma-Oike; rest)
//   + おやこや Oyakoya (kappo izakaya with a popular weekday lunch, Shinmachi-Matsubara; rest)
//   Rest list (mod 6 = 1) after batch 89, nearest-first — skipped:
//   - 老松堂 26028127: retail food shop (Greg 11-07 ruling) — wagashi shop described as long-established, but no sourced
//     founding date or family succession, and no sourced GF or vegan options.
//   - ひさの 26024215: thin listing (3 reviews).
//   - エン ホテル KYOTO 26034079: thin listing (3 reviews); a hotel-wide listing.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. Bar Keller is a sister of
//   kyoto_bar_k6 and kyoto_cave_de_k (same building, same operator per reviews) — a local multi-name group. ごはんや. is a
//   single shop (kyoto-gohanya.com) and unrelated to kyoto_gohanya_kiki (ごはんや嬉々) or the skipped chain ごはんや一芯.
//   None of the four is in data (main 33db54af, hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26028127/', 'retail food shop (Greg 11-07 ruling): wagashi shop; no sourced founding date or family succession, no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260302/26024215/', 'thin listing: 3 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26034079/', 'thin listing: 3 reviews (hotel-wide listing of En Hotel Kyoto)');

// ================================================================ バー ケラー Bar Keller
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026765/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_bar_keller', name: 'バー ケラー (Bar Keller)', category: 'OMNI',
    lat: 35.013291575013696, lng: 135.77049830994835, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A whisky bar with some food; no dish or gluten information in the sources (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Whisky, Calvados and fresh-fruit non-alcoholic cocktails; the food is not described (2023–2026 reviews).',
    hours_raw: 'MEMBERS ONLY: a members-only bar — non-members can enter only when accompanied by a member (Tabelog remark); a reviewer describes entry by introduction only (October 2025). Tabelog gives no business hours, so none are listed; reviewers describe evening and late-night visits (April 2025). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). Smoking allowed; cigars (Tabelog; May 2023). Private rooms (Tabelog). About ¥5,000–6,000 a head (Tabelog). Vals Building 1F at Kiyamachi-Nijo, by the Kamo River, in the same building as Bar K6; 5–7 min walk from Kyoto Shiyakusho-mae Stn (2025–2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi-Nijo',
    cuisine: 'Members-only whisky bar with a deep stock of rare bottlings — Springbank, Glenfarclas 25 and limited Arran — and small casks of spirits, many from Ariake Sangyo (2023–2026 reviews) · a house blended whisky ageing in a barrel behind a glass window at the counter; highballs; Calvados (March 2022–March 2024) · fresh-fruit non-alcoholic cocktails such as kumquat, strawberry, hyuganatsu and dekopon (April 2026) · food and side dishes available (March 2023; June 2026) · about ¥5,000–6,000 (Tabelog)',
    website: null, gmaps: gm('Bar Keller 京都 木屋町二条'), menu_url: null,
    notes: '[Whisky bar · Kiyamachi-Nijo — members only] The K6 family’s members-only whisky cellar: bottle chandeliers, rare malts, small casks and a house blend ageing in a barrel behind glass, plus fresh-fruit mocktails. Non-members must come with a member. Smoking and cigars allowed.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Per reviewers: a members-only whisky bar run by Nishida, the bar figure behind K6 (established 1994), in the same Vals Building as K6 and the wine bar Cave de K (February 2023; June 2026). Keller means cellar in German (June 2026). A long-time member addresses the master as Tani (January 2025).',
      philosophy: null, specialty: 'Rare whisky; house blend from the cask.',
      anecdotes: [
        { text: 'A March 2024 visitor, brought by a globe-trotting friend who is a member, peered through an aquarium-like window at the barrel holding the bar’s own blend.', source: R + 'B481898718/' },
        { text: 'A non-drinker at the April 2026 anniversary had four fresh-fruit mocktails: kumquat, strawberry, hyuganatsu and dekopon.', source: R + 'B526256257/' },
        { text: 'An October 2025 regular likened the introduction-only rule to a tea house where you cannot pay without an account.', source: R + 'B516287687/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区木屋町二条東入481 ヴァルズビル 1F、市役所前駅から徒歩5分、営業時間の記載なし、予約可、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、個室あり、喫煙可、会員制のバー (会員の同伴があれば会員以外も利用可)。口コミ (2022年3月〜2026年6月、英語): K6 の Nishida 氏が手がける会員制のウイスキーバー、同じビルに K6 とワインバーの Cave de K、紹介制 (2025年10月)、ミニボトルのシャンデリア、Ariake Sangyo の小樽、ガラス越しに見える樽の自家ブレンド、Springbank、Glenfarclas 25年、Arran の限定、カルヴァドス、ハイボール、葉巻、フルーツのノンアルコールカクテル (きんかん、いちご、日向夏、デコポン)、料理もある。',
      confidence: 'medium', sources: [TB, R + 'B211140221/', R + 'B447366307/', R + 'B460520733/', R + 'B469243407/', R + 'B481898718/', R + 'B505883284/', R + 'B509592649/', R + 'B516287687/', R + 'B526256257/', R + 'B531653951/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Members only: non-members must come with a member (introduction only). Smoking and cigars allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町二条東入481 ヴァルズビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.013292, 135.770498); cross-checked: GSI 京都府京都市中京区東生洲町481番地 (lot) 41 m; nearest existing record 6.6 m (kyoto_cave_de_k), kyoto_bar_k6 7.2 m — same building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526256257/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Fresh-fruit non-alcoholic cocktail', '', 'Drinks', 'ask', 'ask', 'April 2026.', 'mocktail'),
      it('', '', 'House blended whisky (from the cask)', '', 'Drinks', 'ask', 'ask', 'March 2024.', 'houseblend'),
    ] }, {
    cuisine: '珍しいボトル (Springbank、Glenfarclas 25年、Arran の限定など) と Ariake Sangyo の小樽が並ぶ会員制のウイスキーバー (2023〜2026年の口コミ)・カウンターのガラス窓の奥の樽で熟成する自家ブレンドのウイスキー、ハイボール、カルヴァドス (2022年3月〜2024年3月)・きんかん、いちご、日向夏、デコポンなどフルーツのノンアルコールカクテル (2026年4月)・料理もある (2023年3月、2026年6月)・5,000〜6,000円ほど (食べログ)',
    neighborhood: '木屋町二条',
    gf_detail: '要確認。料理もあるウイスキーバー。料理やグルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ウイスキー、カルヴァドス、フルーツのノンアルコールカクテル。料理の説明はない (2023〜2026年の口コミ)。',
    notes: '[ウイスキーのバー・木屋町二条、会員制] K6 の系列の会員制のウイスキーの「蔵」。ボトルのシャンデリア、珍しいモルト、小樽、ガラス越しの樽で熟成する自家ブレンド、フルーツのノンアルコールも。会員以外は会員の同伴が必要。喫煙・葉巻可。',
  });
}

// ================================================================ 焼肉･韓国料理 昇瑛 Yakiniku Korean Shoei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019493/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']); const L = day(['11:30', '14:00'], ['17:00', '23:00']); const S = day(['17:00', '22:30']);
  put({
    id: 'kyoto_yakiniku_shoei', name: '焼肉･韓国料理 昇瑛 (Yakiniku Korean Shoei)', category: 'OMNI',
    lat: 35.00724279786722, lng: 135.75701049038702, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salted tongue and plain cuts may suit, but marinades, sauces and cold noodles involve soy or wheat (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku and offal house (Tabelog; 2026 reviews).',
    hours_raw: 'Tuesday–Friday 11:30–14:00 and 17:00–23:00; Monday and Saturday 17:00–23:00 (last order 22:30); Sunday and holidays 17:00–22:30 (last order 22:00); closing days not fixed (Tabelog). Reservations accepted; seat-only bookings carry a minimum spend of ¥7,000 per table (Tabelog). A booked table can end up at the counter (October 2026). Cards per Tabelog (VISA, Master, JCB, AMEX, Diners), but a July 2026 diner saw a “no cards” sign at lunch — check. 52 seats incl. counter, tatami, sunken kotatsu and couple seats; private rooms for 6–10; non-smoking inside, ashtray at the door; shoes off (Tabelog; July 2026). 5 min walk from Shijo, Karasuma or Karasuma-Oike Stn.',
    hours: { 0: D, 1: L, 2: L, 3: L, 4: L, 5: D, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi-Rokkaku, near Shijo-Karasuma',
    cuisine: 'Yakiniku and Korean dishes of A5 kuroge wagyu, including upper loin and the rare haneshita (Tabelog) · weekday lunch: beef cut-off set ¥1,300 with free refills of meat and rice; yakiniku lunch of loin, kalbi and outside skirt (June–September 2026) · thick-cut tongue, premium tongue, outside skirt, ribeye, fresh horumon, cold noodles, tail soup; generous courses (July–October 2026) · lunch about ¥1,000–2,000, dinner about ¥4,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('焼肉 韓国料理 昇瑛'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Shinmachi-Rokkaku] A roomy shoes-off yakiniku house of A5 wagyu with kotatsu and private rooms: generous evening courses of thick tongue and skirt, and a famous ¥1,300 weekday lunch with bottomless beef and rice. ¥7,000-per-table minimum for seat-only bookings.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakiniku and Korean restaurant near the Shijo-Karasuma office district serving A5 kuroge wagyu, with private rooms for company gatherings. Reviewers in 2026 praise generous portions, attentive staff and very quick refills.',
      philosophy: null, specialty: 'A5 wagyu; bottomless lunch set.',
      anecdotes: [
        { text: 'A July 2026 solo diner aimed for three refills of the ¥1,300 beef set, which arrived in under two minutes.', source: R + 'B530936175/' },
        { text: 'An October 2026 group found the course generous at a time when many places serve small portions, singling out the skirt and ribeye.', source: R + 'B537312082/' },
        { text: 'An October 2026 guest who came for the kotatsu after seeing it on YouTube was seated at the counter despite booking a table.', source: R + 'B538080726/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・韓国料理・居酒屋、中京区室町西入玉蔵町118、四条駅・烏丸御池駅・烏丸駅から徒歩5分、火〜金 11:30〜14:00、17:00〜23:00、月・土 17:00〜23:00 (L.O.22:30)、日・祝日 17:00〜22:30 (L.O.22:00)、不定休、予約可 (席のみの予約は1卓7,000円以上の飲食が必要)、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、52席、座敷・掘りごたつ・カップル席、6〜10名の個室、禁煙 (店の前に灰皿)、紹介文 (英訳): A5ランクの黒毛和牛、上ロース、希少なハネシタ。口コミ (2026年5〜10月、英語): 靴を脱いで上がる、平日の昼の牛の切り落とし定食1,300円 (肉とご飯のおかわり自由)、ロース・カルビ・ハラミの焼肉ランチ、厚切りタン、上タン、ハラミ、リブロース、ホルモン、冷麺、テールスープ、量の多いコース、昼に「カード不可」の貼り紙を見たとの声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B529264684/', R + 'B530936175/', R + 'B531450625/', R + 'B532181933/', R + 'B532303941/', R + 'B533508640/', R + 'B535334833/', R + 'B537312082/', R + 'B538080726/', R + 'B538280009/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; ¥7,000-per-table minimum for seat-only bookings; check card use at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町西入玉蔵町118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007243, 135.757010); cross-checked: GSI 京都府京都市中京区玉蔵町118番地 (lot) 33 m; nearest existing record 28.0 m (kyoto_izakaya_charlie_karasuma_oike); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530936175/', R + 'B535334833/'],
    price_note: 'Price from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef cut-off set (weekday lunch, free meat and rice refills)', '¥1,300', 'Lunch', 'ask', 'no', 'July and September 2026.', 'kirioshi'),
    ] }, {
    cuisine: 'A5ランクの黒毛和牛の焼肉と韓国料理、上ロースや希少なハネシタ (食べログ)・平日の昼は肉とご飯のおかわり自由の牛の切り落とし定食1,300円、ロース・カルビ・ハラミの焼肉ランチ (2026年6〜9月)・厚切りタン、上タン、ハラミ、リブロース、新鮮なホルモン、冷麺、テールスープ、量の多いコース (2026年7〜10月)・昼1,000〜2,000円ほど、夜4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '新町六角、四条烏丸の近く',
    gf_detail: '要確認。塩タンや素焼きの肉は合う可能性があるが、たれ、タレ漬け、冷麺は醤油や小麦 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉とホルモンの店 (食べログ、2026年の口コミ)。',
    notes: '[焼肉・新町六角] 靴を脱いで上がる広い焼肉店、A5和牛に掘りごたつや個室。夜は厚切りタンやハラミのたっぷりのコース、平日の昼は肉もご飯もおかわり自由の1,300円の定食が名物。席のみの予約は1卓7,000円以上。',
  });
}

// ================================================================ ごはんや. Gohan Ya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26022379/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.kyoto-gohanya.com/';
  const M = day(['17:30', '22:15']); const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_gohanya_karasuma_oike', name: 'ごはんや. (Gohan Ya)', category: 'OMNI',
    lat: 35.01006571517687, lng: 135.7586821462922, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi may suit, but oden, dengaku, saba miso and kasu-jiru use soy or miso, and nama-fu is wheat gluten (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish, game meat and dashi-based oden (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Monday 17:30–22:15; Tuesday–Saturday and holidays 17:30–23:00 (last order 22:15); closed Sunday — when Sunday and Monday are a holiday weekend, open Sunday and closed Monday (Tabelog). Dinner only now; lunch served during the pandemic has stopped (September 2026). Rice is cooked to be ready around 19:30 (February 2026). Reservations accepted and advised — “full house” on Fridays (Tabelog; September 2026). Cards (Master, JCB, AMEX); no e-money or QR (Tabelog). 38 seats: an eight-seat counter, a 2F private room and sunken kotatsu for 9; completely non-smoking (Tabelog; 2025–2026 reviews). 2 min walk from Karasuma-Oike Stn. Since 1990 (Tabelog).',
    hours: { 0: M, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike, Ryogaemachi',
    cuisine: 'Izakaya of seasonal fish, vegetables and game meat with well-chosen sake, since 1990 (Tabelog) · oden with tender daikon and red konnyaku; nama-fu dengaku and grilled nama-fu; buri-toro sashimi, sashimi assortments; yuzu-scented saba miso grill; potato salad; Neapolitan spring rolls (August 2025–September 2026) · starters such as shima-rakkyo with fuki-miso canapés and fried seasoned daikon (May 2025) · oyakodon, kasu-jiru to finish; rice ready from about 19:30 (January 2025–September 2026) · sake served in a masu (August 2025) · about ¥5,000–8,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('ごはんや. 京都 烏丸御池'), menu_url: null,
    notes: '[Izakaya · Karasuma-Oike] A house-like Kyoto izakaya open since 1990: rich oden, nama-fu dengaku, fatty buri sashimi and yuzu-scented saba miso, with sake picked by the staff, and rice or kasu-jiru to finish. Fills up on Fridays — book. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog and the official site: ごはんや., a single izakaya near Karasuma-Oike, open since 1990, built around seasonal fish, vegetables and game. Reviewers in 2025–2026 describe a homely house-like room, a counter where staff chat and help choose sake, and a comforting smell of rice.',
      philosophy: 'Not just a diner or a bar — an izakaya for seasonal fish, vegetables and game with drinks to match (Tabelog).', specialty: 'Oden; kasu-jiru.',
      anecdotes: [
        { text: 'A September 2026 diner who had lunch here during the pandemic came back for dinner and saw the “full house” sign go up on a Friday.', source: R + 'B534974943/' },
        { text: 'A February 2026 guest arriving at 5:30 p.m. was told the rice would only be ready around 7:30.', source: R + 'B522949986/' },
        { text: 'A January–February 2025 regular always ends with the kasu-jiru, but prefers the counter for chatting with staff.', source: R + 'B501804970/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・ダイニングバー・鶏料理、中京区両替町通御池下る西側、烏丸御池駅から徒歩2分、月 17:30〜22:15、火〜土・祝日 17:30〜23:00 (L.O.22:15)、日曜休み (日月が連休の場合は日曜営業・月曜休み)、予約可、カード (Master・JCB・AMEX) 可、電子マネー・QR 不可、38席、2階の個室と掘りごたつ (9名)、完全禁煙、紹介文 (英訳): 旬の魚・野菜・ジビエの居酒屋、1990年から。公式サイト: 「京都烏丸の居酒屋「ごはんや.」」、中京区両替町通御池下る柿本町404-6。口コミ (2025年1月〜2026年9月、英語): 家のような外観、ごはんの香り、おでん (大根、赤こんにゃく)、生麩田楽、焼き生麩、ぶりとろの刺身、刺身の盛り合わせ、柚子の香る鯖の味噌焼き、ポテトサラダ、ナポリタンの春巻き、島らっきょうとふき味噌、親子丼、しめの粕汁、升で出す日本酒、昼はやめて夜のみ (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B501804970/', R + 'B506994436/', R + 'B512291168/', R + 'B517583261/', R + 'B521614694/', R + 'B522949986/', R + 'B529926964/', R + 'B534441960/', R + 'B534906654/', R + 'B534974943/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on Fridays; counter for solo diners; non-smoking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通御池下る柿本町404-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010066, 135.758682); Tabelog's address has no lot, so the official site's 柿本町404-6 was used: GSI 京都府京都市中京区柿本町404番地 (lot) 14 m; nearest existing record 18.5 m (kyoto_onikai_second); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521614694/', R + 'B501804970/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Oden', '', 'Oden', 'ask', 'no', 'January–September 2026.', 'oden'),
      it('', '', 'Nama-fu dengaku', '', 'Small dishes', 'no', 'ask', 'January 2026; wheat gluten.', 'dengaku'),
      it('', '', 'Kasu-jiru', '', 'To finish', 'ask', 'no', 'February 2025.', 'kasujiru'),
    ] }, {
    cuisine: '1990年からの旬の魚、野菜、ジビエと選んだ日本酒の居酒屋 (食べログ)・やわらかい大根や赤こんにゃくのおでん、生麩田楽と焼き生麩、ぶりとろの刺身、刺身の盛り合わせ、柚子の香る鯖の味噌焼き、ポテトサラダ、ナポリタンの春巻き (2025年8月〜2026年9月)・島らっきょうとふき味噌のカナッペ、大根の揚げ物などのお通し (2025年5月)・しめの親子丼や粕汁、ごはんは19時半ごろから (2025年1月〜2026年9月)・升で出す日本酒 (2025年8月)・5,000〜8,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '烏丸御池、両替町',
    gf_detail: '要確認。刺身は合う可能性があるが、おでん、田楽、鯖の味噌焼き、粕汁は醤油や味噌、生麩は小麦のグルテン (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。旬の魚、ジビエ、だしのおでん (食べログ、2025〜2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池] 1990年からの家のような京の居酒屋。味のしみたおでん、生麩田楽、脂ののったぶりの刺身、柚子香る鯖味噌に、店の人が選ぶ日本酒、しめにごはんや粕汁。金曜は満席に、予約を。日曜休み。',
  });
}

// ================================================================ おやこや Oyakoya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26018863/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '21:30']);
  put({
    id: 'kyoto_oyakoya_shinmachi', name: 'おやこや (Oyakoya)', category: 'OMNI',
    lat: 34.99939756787208, lng: 135.75664040030804, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for most dishes: tempura, kara-age and katsu are fried in wheat batter, and set meals come with soy-seasoned sides (2023–2026 reviews). Sashimi may suit — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken and dashi-based set meals (2023–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–21:30; closed Sunday; hours may change (Tabelog). Reviewers also describe a popular weekday lunch of daily set meals, busy after noon (August 2023–May 2026) — Tabelog does not list lunch hours, so lunch is not in the hours. Reservations accepted (Tabelog). No e-money (Tabelog). 6–7 counter seats and 6 raised tatami seats (April 2025). Smoking allowed, at night especially (Tabelog; January 2023). English menu (Tabelog). On Shinmachi-dori just north of Matsubara, with lanterns advertising tempura (May 2026); 8 min walk from Gojo Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Matsubara',
    cuisine: 'Kappo izakaya with set meals at lunch and home-style dishes at night (2023–2026 reviews) · weekday daily set about ¥1,000 by day — fish with chicken kara-age (Mon), with chicken katsu (Tue), tempura with obanzai (Wed), with agedashi (Thu), fried dish with dashimaki (Fri) (July 2025) · tempura set ¥900 of sardine, yellowtail, shrimp, shiso and chikuwa; sashimi set of hamachi and kanpachi; fried and grilled sardines (August 2023–March 2026) · evenings: side dishes, vegetable stews and hot pots, unpriced, with shochu (January 2023) · lunch about ¥1,000, dinner about ¥3,000–5,000 (Tabelog; 2023–2025 reviews)',
    website: null, gmaps: gm('おやこや 新町松原'), menu_url: null,
    notes: '[Kappo izakaya · Shinmachi-Matsubara] A small, cheerful counter of regulars: a bargain weekday lunch of daily sets — crisp tempura, fish with kara-age or dashimaki for about ¥1,000 — and relaxed evenings of home-style dishes and hot pots. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: a cosy izakaya on Shinmachi-dori whose owner runs the evening alone, with a charming personality that keeps regulars lingering (January 2023; September 2024); weekday lunches of set meals draw crowds (2023–2026).',
      philosophy: null, specialty: 'Weekday daily set; tempura set.',
      anecdotes: [
        { text: 'A January 2023 solo diner found no prices posted at night and a cheerfully tipsy owner; side dishes, a stew, a hot pot and drinks came to ¥3,000.', source: R + 'B457614772/' },
        { text: 'An April 2025 lunch guest praised a ¥900 tempura set of sardine, yellowtail and shrimp, light and not greasy.', source: R + 'B504571853/' },
        { text: 'A May 2026 diner fitted in lunch before an after-school duty supervising local children.', source: R + 'B528924420/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、下京区新町通松原上る御影町460-1、五条駅から徒歩8分、月〜土 18:00〜21:30、日曜休み、予約可、電子マネー不可、喫煙可、貸切可、英語のメニュー。口コミ (2023年1月〜2026年5月、英語): 平日の昼の日替わり定食1,000円ほど (月 魚と唐揚げ、火 魚とチキンカツ、水 天ぷらとおばんざい、木 魚と揚げだし、金 揚げ物とだし巻き)、天ぷら定食900円 (いわし、ぶり、えび、しそ、ちくわ)、刺身定食 (はまち、かんぱち)、いわしのフライと焼き物、夜は店主が一人で、値段の表示なし、煮物や鍋、カウンター6〜7席と小上がり6席、提灯に天ぷら。',
      confidence: 'medium', sources: [TB, R + 'B457614772/', R + 'B470893923/', R + 'B483382621/', R + 'B491563895/', R + 'B504571853/', R + 'B504669705/', R + 'B508887963/', R + 'B510159125/', R + 'B524450260/', R + 'B528924420/'] },
    cultural_comfort: { level: 'english', note: 'English menu; smoking allowed; lunch busy after noon.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区新町通松原上る御影町460-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (34.999398, 135.756640); cross-checked: GSI 京都府京都市下京区御影町460番地 (lot) 15 m; nearest existing record 40.2 m (kyoto_comfy_matcha); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504571853/', R + 'B510159125/'],
    price_note: 'Prices from April and July 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura set (lunch)', '¥900', 'Lunch', 'no', 'no', 'April 2025.', 'tempura'),
      it('', '', 'Daily set (weekday lunch)', '¥1,000', 'Lunch', 'no', 'no', 'July 2025.', 'higawari'),
    ] }, {
    cuisine: '昼は定食、夜は家庭的な料理の割烹居酒屋 (2023〜2026年の口コミ)・平日の昼の日替わり定食1,000円ほど: 月 魚と唐揚げ、火 魚とチキンカツ、水 天ぷらとおばんざい、木 魚と揚げだし、金 揚げ物とだし巻き (2025年7月)・いわし、ぶり、えび、しそ、ちくわの天ぷら定食900円、はまちとかんぱちの刺身定食、いわしのフライと焼き物 (2023年8月〜2026年3月)・夜は値段の表示のない小鉢、煮物、鍋に焼酎 (2023年1月)・昼1,000円ほど、夜3,000〜5,000円ほど (食べログ、2023〜2025年の口コミ)',
    neighborhood: '新町松原',
    gf_detail: 'ほとんどグルテンフリー不可。天ぷら、唐揚げ、カツは小麦の衣、定食の副菜は醤油 (2023〜2026年の口コミ)。刺身は合う可能性、要確認。',
    vegan_detail: 'ヴィーガン不可。魚、鶏、だしの定食 (2023〜2026年の口コミ)。',
    notes: '[割烹居酒屋・新町松原] 常連でにぎわう小さなカウンター。平日の昼は日替わり定食 (サクサクの天ぷら、魚と唐揚げやだし巻き) が1,000円ほどとお得、夜は家庭的な料理と鍋でのんびり。喫煙可。日曜休み。',
  });
}

save();
