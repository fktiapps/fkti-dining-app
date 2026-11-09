// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 95.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - すき焼き 肉のひろ重 高辻 — chain: 肉のひろ重, five or more shops (sisters already skipped)
//   - 懐石割烹こおり — no reviews
//   + 蘇谷 Sokoku (weekend Japanese breakfast in a house with a garden, 10 min from Kiyomizu-Gojo)
//   - 喜楽庵 岡本 五条坂店 — retail food shop (Greg 11-07 ruling): a take-away street-snack stand (croquettes, skewers, dango) of
//     the kimono-rental company 岡本, benches only; no sourced founding history or GF/vegan options — flagged
//   - 寺子屋本舗 二寧坂店 — large parent: 株式会社寺子屋 (as ruled for 26037502, 26007071, 26038213)
//   - 泉仙本店 — a catering and bento shop with no seating (Tabelog: "A catering specialty store, no seating"), of the 泉仙
//     brand already in data (泉仙 大慈院店, 紫野店, 嵯峨野店)
//   + BEER PUB TAKUMIYA (the KYOTO NUDE BREWERY taproom near Karasuma-Oike; since 2015)
//   - ぼうだい本舗 — retail food shop (Greg 11-07 ruling): a take-home amanatto (candied beans) maker; no sourced founding date
//   - 清水二年坂 石畳 — retail food shop (Greg 11-07 ruling): a take-out sweets shop; no sourced founding date or GF/vegan options
//   - 山椒ちりめん いづみ屋 清水寺二年坂角 販売所 — retail sales point of いづみ屋, already in data (kyoto_izumiya_chirimen_sansho,
//     hidden as retail)
//   - CHOA gimbap kyoto — retail food shop (Greg 11-07 ruling): a take-out-only gimbap shop (July 2026 review); no sourced GF or
//     vegan options
//   + 京gateau the marie Kyo Gateau the Marie (gluten-free rice-flour cakes; take-out with eat-in) — a retail sweets shop
//     drafted under the 11-07 ruling for its sourced gluten-free cakes
//   + よもぎ 双鳩堂二条店 Yomogi Sokyudo Nijo (wagashi café with daily bento near Nijo-Kawabata; since 2014)
//   + そば処 みやこ Soba-dokoro Miyako (family-run soba near Takoyakushi-Nishinotoin)
//   Brand checks: none of the drafts is in data or queue-status by name (data has 中華そば 双鳩, an unrelated ramen shop; the marie
//   shares an address and gate with 京薬膳なつめ, kyoto_kyo_yakuzen_natsume, a different concept). None is a THAN or WILL brand;
//   none is in a hotel.
//   Service charges: no Tabelog section for any of the five.
//   Pins (checked against main, hidden records included): 双鳩堂 moved 1m E (5.6m from kyoto_kashiya_cafe); みやこ moved 2m SSW
//   (4.2m from kyoto_joko_ya); the rest ≥ 10m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041007', 'chain: 肉のひろ重, five or more shops (sisters 26043469, 26040619, 26042658, 26040245 already skipped)');
skip('26045117', 'no reviews');
skip('26030777', 'retail food shop (Greg 11-07 ruling): 喜楽庵 岡本 五条坂店 is a take-away street-snack stand (croquettes ¥250–480, skewers ¥400, dango) run by the kimono-rental company 岡本 (okamoto-kimono.com), benches only; no sourced founding history and no sourced GF or vegan options');
skip('26024873', 'large parent: 寺子屋本舗 is a brand of 株式会社寺子屋 (140 directly run shops), as ruled for 26037502, 26007071 and 26038213');
skip('26026577', 'a catering and bento shop with no seating (Tabelog: "A catering specialty store, no seating") of the 泉仙 brand already in data (泉仙 大慈院店, 紫野店, 嵯峨野店)');
skip('26005253', 'retail food shop (Greg 11-07 ruling): ぼうだい本舗 is a take-home amanatto (candied beans) maker; no sourced founding date and no sourced GF or vegan options');
skip('26012753', 'retail food shop (Greg 11-07 ruling): 清水二年坂 石畳 is a take-out sweets shop; no sourced founding date and no sourced GF or vegan options');
skip('26041001', 'retail sales point of いづみ屋 (山椒ちりめん), already in data as kyoto_izumiya_chirimen_sansho (hidden as retail)');
skip('26040299', 'retail food shop (Greg 11-07 ruling): CHOA gimbap kyoto is take-out only (July 2026 review), with outdoor seats; no sourced GF or vegan options');

// ================================================================ 蘇谷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037545/'; const R = TB + 'dtlrvwlst/';
  const TU = day(['08:30', '10:30']); const WE = day(['08:30', '11:30']);
  put({
    id: 'kyoto_sokoku_breakfast', name: '蘇谷 (Sokoku)', category: 'OMNI',
    lat: 34.993774, lng: 135.774304, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Japanese breakfast of rice, miso soup, grilled fish, tofu and vegetables (2024–26 reviews); soy and dashi are likely.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled fish or salmon yukke, dashimaki, bonito flakes (November 2024 review).',
    hours_raw: 'Tue 8:30–10:30; Sat and Sun 8:30–11:30; closed Mon, Wed, Thu, Fri; hours may change (Tabelog). A February 2026 review calls it weekends-and-holidays breakfast; busy, about a 30-minute wait without a booking — book ahead (February 2026 review). QR payments; no cards or e-money (Tabelog). Non-smoking (Tabelog). A traditional house with a garden view, 10 min from Kiyomizu-Gojo (Tabelog; November 2024 review).',
    hours: { 1: TU, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama — 10 min from Kiyomizu-Gojo Stn',
    cuisine: 'Japanese breakfast only: "one soup and three dishes" ¥1,500 — a choice of the day\'s fish such as salmon yukke or grilled mackerel, with dashimaki, tofu, ohitashi, katsuobushi with sansho, a hearty miso soup and rice (November 2024); rice, miso soup, grilled fish, tofu and vegetables, elegantly served (July 2026)',
    website: null, gmaps: gm('蘇谷 鐘鋳町'), menu_url: null,
    notes: '[Japanese breakfast · Higashiyama] A weekend breakfast house with a garden view, 10 minutes from Kiyomizu-Gojo: a gentle, elegant ¥1,500 set of the day\'s fish, dashimaki, tofu, miso soup and rice. Popular — book ahead.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A breakfast specialist in a traditional house with a garden view (November 2024 and February 2026 reviews).',
      philosophy: null,
      specialty: 'One-soup-three-dish breakfast.',
      anecdotes: [
        { text: 'A November 2024 couple on a morning stroll near family home found it newly opened and chose salmon yukke and grilled mackerel.', source: R + 'B508168355/' },
        { text: 'A February 2026 visitor arriving at opening on a long weekend waited about 30 minutes without a booking.', source: R + 'B523507887/' },
      ],
      japanese_sources_summary: '食べログ: 蘇谷、カフェ・日本料理、東山区鐘鋳町392、清水五条駅から徒歩10分、火曜 8:30〜10:30、土曜・日曜 8:30〜11:30、月・水・木・金曜休み、QR 可、カード・電子マネー不可、禁煙。口コミ (2024〜2026年、英語): 週末の朝ごはんの店、庭の見える和の家、一汁三菜1,500円、サーモンのユッケか焼き鯖、だし巻き、豆腐、おひたし、山椒のかつお節、味噌汁、ご飯、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B508168355/', R + 'B523507887/', R + 'B531234226/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead at weekends (February 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区鐘鋳町392',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.993774, 135.774304); cross-checked: GSI 京都府京都市東山区鐘鋳町392番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508168355/'],
    price_note: 'Price from a November 2024 review (tax included).', last_checked: TODAY, items: [
      it('', '', 'Breakfast: one soup and three dishes (choice of fish)', '¥1,500', 'Breakfast', 'ask', 'no', 'November 2024 review.', 'breakfast'),
    ] }, {
    cuisine: '朝ごはんだけ: 一汁三菜1,500円、その日の魚 (サーモンのユッケや焼き鯖) にだし巻き、豆腐、おひたし、山椒のかつお節、具だくさんの味噌汁、ご飯 (2024年11月)、ご飯、味噌汁、焼き魚、豆腐、野菜を上品に (2026年7月)',
    neighborhood: '東山区。清水五条駅から徒歩10分',
    gf_detail: '要確認。ご飯、味噌汁、焼き魚、豆腐、野菜の和朝食 (2024〜26年の口コミ)。醤油と出汁を使う可能性が高い。',
    vegan_detail: 'ヴィーガン不可。焼き魚かサーモンのユッケ、だし巻き、かつお節 (2024年11月の口コミ)。',
    notes: '[和朝食・東山] 清水五条駅から徒歩10分、庭の見える家の週末の朝ごはん。その日の魚、だし巻き、豆腐、味噌汁、ご飯のやさしく上品な1,500円の朝食。人気なので予約を。',
  });
}

// ================================================================ BEER PUB TAKUMIYA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025275/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '23:00']); const WE = day(['15:00', '23:00']);
  put({
    id: 'kyoto_beer_pub_takumiya', name: 'BEER PUB TAKUMIYA', category: 'OMNI',
    lat: 35.01219, lng: 135.760775, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer pub (barley beer); food includes dim sum and sausages (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: homemade sausages, oysters, tripe (2025–26 reviews); grilled edamame is an exception to ask about.',
    hours_raw: 'Mon–Fri 16:00–23:00; Sat, Sun and holidays 15:00–23:00; irregular closures (Tabelog). Cards, e-money and PayPay (Tabelog). 25 seats; non-smoking (Tabelog). On Oshikoji west of Higashinotoin, 5 min from Karasuma-Oike (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-Higashinotoin — 5 min from Karasuma-Oike Stn',
    cuisine: 'Craft beer from KYOTO NUDE BREWERY, the operator (March 2026), about nine domestic taps with guest beers such as a fresh-hop IPA (2025); No.1 NUDE BEER (M) ¥1,100, grilled edamame ¥600 (July 2026); homemade sausages (August 2025), fresh rock oysters (June 2026), honeycomb tripe in tomato (November 2026), dim sum and an appetizer platter (December 2025); about ¥2,000–7,000',
    website: null, gmaps: gm('BEER PUB TAKUMIYA'), menu_url: null,
    notes: '[Craft beer · Karasuma-Oike] The brewery-run pub of KYOTO NUDE BREWERY near Karasuma-Oike, with about nine taps, homemade sausages, rock oysters and even dim sum; staff explain each beer. About ¥2,000–7,000.',
    chef_bio: { chef_name: null, roles: ['Taproom of KYOTO NUDE BREWERY'], origin: null,
      background: 'Opened 10 March 2015 (Tabelog); the directly run outlet of KYOTO NUDE BREWERY (March 2026 review). A young, knowledgeable manager (August 2025 review). Canned beer is sold at another shop on the main street (November 2026 review).',
      philosophy: null,
      specialty: 'House craft beer on tap.',
      anecdotes: [
        { text: 'A September 2025 visitor from Chiba on a third trip tried every fresh-hop beer and found the IPA gentle in bitterness.', source: R + 'B513452776/' },
        { text: 'A June 2026 drinker started at 4 pm with fresh rock oysters and the NUDE IPA.', source: R + 'B533013652/' },
      ],
      japanese_sources_summary: '食べログ: BEER PUB TAKUMIYA、居酒屋・日本料理・魚介料理、中京区、押小路東洞院の西、烏丸御池駅から徒歩5分、月〜金 16:00〜23:00、土日・祝日 15:00〜23:00、不定休、カード・電子マネー・PayPay 可、25席、禁煙、2015年3月10日オープン。口コミ (2025〜2026年、英語): KYOTO NUDE BREWERY の直営、約9タップ、No.1 NUDE BEER (M) 1,100円、焼き枝豆600円、自家製ソーセージ、岩牡蠣、ハチノスのトマト煮、点心、前菜の盛り合わせ。',
      confidence: 'medium', sources: [TB, R + 'B512839756/', R + 'B513452776/', R + 'B520894998/', R + 'B524469073/', R + 'B532180580/', R + 'B533013652/', R + 'B538866476/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain each beer (July 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通東洞院西入船屋町400-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012190, 135.760775); cross-checked: GSI 京都府京都市中京区船屋町400番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532180580/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'No.1 NUDE BEER (M)', '¥1,100', 'Beer', 'no', 'ask', 'July 2026 review.', 'nude_beer'),
      it('', '', 'Grilled edamame', '¥600', 'Snacks', 'ask', 'ask', 'July and October 2026 reviews.', 'edamame'),
    ] }, {
    cuisine: '運営する KYOTO NUDE BREWERY のクラフトビール (2026年3月)、国産の約9タップ、フレッシュホップの IPA などのゲストビール (2025年)、No.1 NUDE BEER (M) 1,100円、焼き枝豆600円 (2026年7月)、自家製ソーセージ (2025年8月)、岩牡蠣 (2026年6月)、ハチノスのトマト煮 (2026年11月)、点心と前菜の盛り合わせ (2025年12月)、2,000〜7,000円ほど',
    neighborhood: '押小路東洞院。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。クラフトビール (大麦) のパブ。料理は点心やソーセージ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。自家製ソーセージ、牡蠣、ハチノス (2025〜26年の口コミ)。焼き枝豆は要確認。',
    notes: '[クラフトビール・烏丸御池] 烏丸御池の近くの KYOTO NUDE BREWERY 直営のパブ。約9タップ、自家製ソーセージ、岩牡蠣、点心も。スタッフがビールを説明してくれる。2,000〜7,000円ほど。',
  });
}

// ================================================================ 京gateau the marie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039729/'; const R = TB + 'dtlrvwlst/';
  const D = day(['12:00', '21:00']);
  put({
    id: 'kyoto_kyo_gateau_the_marie', name: '京gateau the marie (Kyo Gateau the Marie)', category: 'OMNI',
    lat: 35.014638, lng: 135.766075, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Reviews say all the cakes are gluten-free, made without wheat, using rice flour (August and September 2025; December 2025); confirm cross-contact with the shop.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The cakes use soy-milk cream butter (December 2025 review; September 2023 review), but eggs are not ruled out.',
    hours_raw: 'Mon, Tue, Thu–Sun 12:00–21:00; closed Wednesdays; hours may change (Tabelog). Mainly take-out, with eat-in since July 2023 (July and September 2023 reviews). Cards, e-money and QR (Tabelog). Down an alley through the gate of 京薬膳なつめ, at the same address (August 2025 review; Tabelog). 10 min from Kyoto Shiyakusho-mae (November 2023 review).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho-Nijo — 10 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Gluten-free cakes of rice flour and soy-milk cream butter, decorated with edible flowers: temari cream puffs, the temari chiffon layered with fruit ¥620, seasonal Shine Muscat roll ¥760 (September 2025); rice-flour almond roll with goji and apricot (December 2025); puddings; hojicha chiffon (February 2024); under ¥1,000',
    website: null, gmaps: gm('京gateau the marie'), menu_url: null,
    notes: '[Gluten-free cakes · Fuyacho-Nijo] A hidden alley cake shop of temari-ball cream puffs and chiffons, all made with rice flour and soy-milk cream butter — reviewers report every cake is gluten-free. Mostly take-out; under ¥1,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 8 April 2023 (Tabelog); desserts inspired by temari balls, from gentle ingredients such as rice flour and soy-milk cream butter (September 2023 review); shown on Kansai TV (November 2023 review).',
      philosophy: 'Healthy, gentle ingredients (July 2023 review).',
      specialty: 'Temari cream puffs; rice-flour roll cakes.',
      anecdotes: [
        { text: 'An August 2025 parent whose child avoids animal-based cream watched the child happily finish a cream puff and try the cake too.', source: R + 'B511886492/' },
        { text: 'A September 2025 visitor, delighted that every cake was wheat-free, bought a fruit chiffon and a Shine Muscat roll.', source: R + 'B514274338/' },
      ],
      japanese_sources_summary: '食べログ: 京gateau the marie、スイーツ・ケーキ、中京区布袋屋町520-3、月・火・木〜日 12:00〜21:00、水曜休み、カード・電子マネー・QR 可、2023年4月8日オープン。口コミ (2023〜2025年、英語): 京薬膳なつめの門をくぐった路地の奥、手まりのシュークリーム、米粉と豆乳クリームバターのケーキ、全部グルテンフリー (2025年8月・9月)、フルーツのシフォン620円、シャインマスカットのロール760円、持ち帰り中心、2023年7月からイートインも。',
      confidence: 'medium', sources: [TB, R + 'B467957590/', R + 'B474309060/', R + 'B475307445/', R + 'B480015573/', R + 'B511886492/', R + 'B514274338/', R + 'B519848188/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden at the end of an alley (2023–25 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区布袋屋町520-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.014638, 135.766075), 10.5m from kyoto_kyo_yakuzen_natsume at the same address; cross-checked: GSI 京都府京都市中京区布袋屋町520番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514274338/'],
    price_note: 'Prices from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Temari chiffon with fruit', '¥620', 'Cakes', 'ask', 'ask', 'September 2025 review; reviewed as gluten-free.', 'chiffon'),
      it('', '', 'Seasonal Shine Muscat roll (rice flour)', '¥760', 'Cakes', 'ask', 'ask', 'September 2025 review; reviewed as gluten-free.', 'roll'),
      it('', '', 'Temari cream puff', '', 'Cakes', 'ask', 'ask', '2023–25 reviews.', 'cream_puff'),
    ] }, {
    cuisine: '食用花を飾る米粉と豆乳クリームバターのグルテンフリーのケーキ: 手まりのシュークリーム、フルーツを挟んだ手まりのシフォン620円、季節のシャインマスカットのロール760円 (2025年9月)、クコの実とあんずの米粉のアーモンドロール (2025年12月)、プリン、ほうじ茶のシフォン (2024年2月)、1,000円以内',
    neighborhood: '麩屋町二条。京都市役所前駅から徒歩10分',
    gf_detail: '口コミによるとケーキはすべて米粉のグルテンフリーで小麦不使用 (2025年8月・9月、2025年12月)。交差汚染は店に確認を。',
    vegan_detail: '要確認。豆乳クリームバターを使う (2025年12月、2023年9月の口コミ) が、卵の有無は不明。',
    notes: '[グルテンフリーのケーキ・麩屋町二条] 路地の奥の隠れ家のケーキ店。手まりのシュークリームやシフォンを米粉と豆乳クリームバターで。口コミではケーキはすべてグルテンフリー。持ち帰り中心、1,000円以内。',
  });
}

// ================================================================ よもぎ 双鳩堂二条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024729/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '17:00']);
  put({
    id: 'kyoto_yomogi_sokyudo_nijo', name: 'よもぎ 双鳩堂二条店 (Yomogi Sokyudo)', category: 'OMNI',
    lat: 35.013776, lng: 135.77497, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mochi and daifuku with bean paste (2025–26 reviews); a daily bento with nikujaga (June 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mochi and bean-paste sweets may suit; the bento includes meat and egg (June 2026 review).',
    hours_raw: 'Mon, Tue, Thu–Sun 10:00–17:00; closed Wednesdays; hours may change (Tabelog). No cards or QR (Tabelog). 12 seats at tables, plus two outside in summer; non-smoking (Tabelog). Take-out wagashi and eat-in with drinks (February 2026 review). About 500 m from Sanjo Keihan (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yoshinaga-cho, Sakyo — about 500 m from Sanjo Keihan Stn',
    cuisine: 'Wagashi and tea with a daily bento: strawberry daifuku, kusa mochi, sakura mochi, about ¥240–320 each (January 2025; February 2026); soba tea ¥450 (February 2026); chilled ame (August 2026); a homestyle daily bento with nikujaga and side dishes (June 2026)',
    website: null, gmaps: gm('よもぎ 双鳩堂 二条'), menu_url: null,
    notes: '[Wagashi café · Sakyo] A small wagashi shop with a twelve-seat café: strawberry daifuku and kusa mochi to take away or eat in with tea, chilled ame in summer and a homestyle daily bento. Under ¥1,500; cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 24 September 2014 (Tabelog) as the Nijo shop of 双鳩堂.',
      philosophy: null,
      specialty: 'Strawberry daifuku; kusa mochi.',
      anecdotes: [
        { text: 'A June 2026 regular comes as much for the daily bento as for the sweets — nikujaga that day, with eggs and salads.', source: R + 'B534917016/' },
        { text: 'A January 2025 museum-goer from Okazaki Park picked up sakura mochi and strawberry daifuku to eat at the hotel.', source: R + 'B499326885/' },
      ],
      japanese_sources_summary: '食べログ: よもぎ 双鳩堂二条店、和菓子・甘味処・カフェ、左京区吉永町271-1、三条京阪駅から505m、月・火・木〜日 10:00〜17:00、水曜休み、カード・QR 不可、12席、禁煙、2014年9月24日オープン。口コミ (2025〜2026年、英語): いちご大福、草餅、桜餅 (240〜320円ほど)、そば茶450円、冷やしあめ、日替わりの弁当 (肉じゃがなど)。',
      confidence: 'medium', sources: [TB, R + 'B499326885/', R + 'B523670727/', R + 'B534171469/', R + 'B534917016/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉永町271-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013776, 135.774959), moved 1m E to clear kyoto_kashiya_cafe (5.6m); cross-checked: GSI 京都府京都市左京区吉永町271番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499326885/', R + 'B523670727/'],
    price_note: 'Prices from January 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Strawberry daifuku / kusa mochi / sakura mochi', '¥240–320', 'Wagashi', 'ask', 'ask', 'January 2025 review.', 'wagashi'),
      it('', '', 'Daily bento', '', 'Lunch', 'ask', 'no', 'June 2026 review.', 'bento'),
    ] }, {
    cuisine: '和菓子とお茶、日替わりの弁当: いちご大福、草餅、桜餅 (1個240〜320円ほど、2025年1月、2026年2月)、そば茶450円 (2026年2月)、冷やしあめ (2026年8月)、肉じゃがなどの家庭的な日替わりの弁当 (2026年6月)',
    neighborhood: '左京区。三条京阪駅から500mほど',
    gf_detail: '要確認。あんこの餅や大福 (2025〜26年の口コミ)、肉じゃがの日替わりの弁当 (2026年6月)。',
    vegan_detail: '要確認。餅とあんこの和菓子は合う可能性がある。弁当は肉と卵入り (2026年6月の口コミ)。',
    notes: '[和菓子とカフェ・左京区] 12席のカフェのある小さな和菓子の店。いちご大福や草餅を持ち帰りでもお茶と店内でも、夏は冷やしあめ、家庭的な日替わりの弁当も。1,500円以内、現金のみ。',
  });
}

// ================================================================ そば処 みやこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26008415/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:00'], ['17:00', '21:00']); const SA = day(['11:30', '15:00']);
  put({
    id: 'kyoto_sobadokoro_miyako_nishinotoin', name: 'そば処 みやこ (Soba-dokoro Miyako)', category: 'OMNI',
    lat: 35.005973, lng: 135.755214, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba (with wheat flour, usually) and udon; tempura (2026 reviews) — ask about 100% buckwheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, tamago-don, tempura (2026 reviews).',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:30) and 17:00–21:00 (L.O. 20:30); Sat 11:30–15:00; closed Sundays and holidays; hours may change (Tabelog). Queues at lunch; can sell out after 2 pm (May 2026 review). PayPay; no cards or e-money (Tabelog). 22 seats at tables; no smoking 11:00–14:00 (Tabelog). On Nishinotoin south of Takoyakushi, 5 min from Shijo or Karasuma (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-Takoyakushi — 5 min from Shijo or Karasuma Stn',
    cuisine: 'Family-run soba: the seasonal sesame-dipping soba ¥1,100 with ginger and green onion, of pale hulled buckwheat (April, July, September 2026); zaru soba; tamasui; a small tamago-don (April 2026); a daily special of warm tempura soba with tamago-don, komatsuna and pickles (May 2026); soba tea; about ¥1,000–2,000',
    website: null, gmaps: gm('そば処 みやこ 西洞院'), menu_url: null,
    notes: '[Soba · Nishinotoin] A tidy, family-run soba shop near Shijo-Karasuma with lunchtime queues: elegant pale soba with a seasonal sesame dipping sauce, a soft tamago-don and a delicate dashi. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A family-run soba shop (July 2026 review).',
      philosophy: null,
      specialty: 'Sesame-dipping soba; tamago-don.',
      anecdotes: [
        { text: 'A May 2026 diner, defeated by queues and sold-out signs for two years, finally got in at 11:50 for the daily special.', source: R + 'B527838129/' },
        { text: 'An April 2026 regular found the small tamago-don just like the one from the now-closed Owariya.', source: R + 'B526255771/' },
      ],
      japanese_sources_summary: '食べログ: そば処 みやこ、そば・うどん、中京区西洞院通蛸薬師下る古西町429、地下鉄四条駅・阪急烏丸駅から徒歩5分すぎ、月〜金 11:30〜15:00・17:00〜21:00、土 11:30〜15:00、日曜・祝日休み、PayPay 可、カード・電子マネー不可、22席、11〜14時は禁煙。口コミ (2026年、英語): 家族経営、季節のごまだれのつけそば1,100円、殻をむいた白いそば、ざるそば、玉吸い、小さな玉子丼、日替わり、昼は行列。',
      confidence: 'medium', sources: [TB, R + 'B526255771/', R + 'B527838129/', R + 'B529897952/', R + 'B531039925/', R + 'B532189324/', R + 'B533950452/', R + 'B535595825/', R + 'B536526410/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; PayPay or cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西洞院通蛸薬師下る古西町429',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005990, 135.755222), moved 2m SSW to clear kyoto_joko_ya (4.2m); cross-checked: GSI 京都府京都市中京区古西町429番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531039925/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sesame-dipping soba (seasonal)', '¥1,100', 'Soba', 'no', 'no', 'July 2026 review.', 'goma_tsuke'),
      it('', '', 'Small tamago-don', '', 'Rice', 'ask', 'no', 'April 2026 review.', 'tamagodon'),
    ] }, {
    cuisine: '家族経営のそば: 生姜とねぎで食べる季節のごまだれのつけそば1,100円、殻をむいた白いそば (2026年4月・7月・9月)、ざるそば、玉吸い、小さな玉子丼 (2026年4月)、温かい揚げ物のそばと玉子丼、小松菜、漬物の日替わり (2026年5月)、そば茶、1,000〜2,000円ほど',
    neighborhood: '西洞院蛸薬師。四条駅か烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。そば (ふつう小麦粉入り) とうどん、揚げ物 (2026年の口コミ)。十割そばかは要確認。',
    vegan_detail: 'ヴィーガン不可。出汁、玉子丼、揚げ物 (2026年の口コミ)。',
    notes: '[そば・西洞院] 四条烏丸の近くの昼に行列のできる家族経営のこぎれいなそば屋。上品な白いそばに季節のごまだれのつけそば、やわらかい玉子丼、繊細な出汁。1,000〜2,000円ほど。',
  });
}

save();
