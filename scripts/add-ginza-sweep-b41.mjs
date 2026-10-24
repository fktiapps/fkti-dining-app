// Ginza Station half-mile sweep (805 m), batch 41 — more Ginza Japanese places from the Tabelog crawl candidates (all OMNI).
//   + 鮨 ふくじゅ (opened December 2018; counter and private rooms, 26 seats; owner not named)
//   + 銀座 鰤門 (Edomae sushi at a 12 m red-lacquer counter, 38 seats; owner not named)
//   + 割烹かむい (Wagyu kaiseki behind sister restaurant Yakiniku Kamui, opened 30 September 2025 → group)
//   + 銀座 蟹 あかつき (crab kaiseki, opened 29 May 2024; owner not named) — same 銀座5-4-15 address and 4F as 一㐂
//     (batch 39) under a different building name; both keep their own Tabelog pins, about 1 m apart.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const SUSHI_GF = 'Ask. Edomae sushi omakase; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.';
const SUSHI_GF_JA = '要確認。江戸前鮨のおまかせ。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。';

// ================================================================ 鮨 ふくじゅ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13228975/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '23:00']), we = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_ginza_sushi_fukuju', name: '鮨 ふくじゅ (Ginza Sushi Fukuju)', category: 'OMNI',
    lat: 35.670446, lng: 139.764558,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: SUSHI_GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi courses with chawanmushi, caviar and wagyu shabu-shabu.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00 (Tabelog). 10% service charge (at lunch only on courses). Cards incl. UnionPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Plaza 58 Bldg 8F — 1 min from Ginza Stn A3',
    cuisine: 'Sushi courses from ¥6,900 · counter and private rooms (families with babies welcomed)', cuisine_type: 'sushi',
    website: null, gmaps: gm('鮨 ふくじゅ 銀座5-8-17 銀座プラザ58ビル'), menu_url: null,
    notes: "[Sushi · good-value courses and private rooms] An eighth-floor sushi restaurant a minute from Ginza crossing, opened in December 2018, with a counter and private rooms for 2–8. In August 2026 one diner described a ¥6,900 course of 17 items: an ikura bowl, nigiri from flounder, horse mackerel and scallop to chūtoro, ōtoro, kinmedai and anago, asari-and-edamame chawanmushi, tamago, a kanpyō roll and matcha-kinako warabi mochi. A three-sea-urchin tasting was ¥6,600 extra. Pricier courses add caviar and wagyu shabu-shabu. A party with a baby was given a private room. One October 2026 diner was unhappy with a staff member's manner. A 10% service charge applies (at lunch, only on courses).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2018 (Tabelog)', background: 'No source read names the owner or chef.', philosophy: null, specialty: 'Good-value omakase; sea-urchin tasting.',
      anecdotes: [
        { text: '"We had a baby with us, and Sushi Fukuju kindly prepared a private room, which was a great help." — August 2026.', source: R + 'B535111896/' },
        { text: '"JPY 6,900 Course … Total of 17 dishes." — August 2026.', source: R + 'B536961327/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 ふくじゅ、銀座5-8-17 銀座プラザ58ビル8F、銀座駅A3出口から徒歩1分、26席・個室(2〜8名)、平日11:30〜14:00・17:00〜23:00、土日祝は夜16:00〜、2018年12月15日開店、サービス料10%(昼はコースのみ)、カード可。2026年の口コミ: 6,900円のコース17品(いくら丼、平目・鯵・帆立・白烏賊・オクラ・数の子・中トロ・ヅケ・大トロ・金目鯛・穴子、浅蜊と枝豆の茶碗蒸し、玉子、かんぴょう巻き、抹茶ときな粉のわらび餅)、雲丹3種の追加6,600円、キャビア・和牛しゃぶしゃぶのコース、赤ちゃん連れに個室、接客に不満の声も。',
      confidence: 'low', sources: [TB, R + 'B536961327/', R + 'B535111896/', R + 'B533374127/', R + 'B537771889/', R + 'B537231679/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms suit families and groups; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-8-17 銀座プラザ58ビル 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目8番17号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536961327/'],
    price_note: 'Course price from an August 2026 review; 10% service charge on courses.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Sushi course, 17 items', '¥6,900', 'Courses', 'ask', 'no', '2026.', 'course_6900'),
      it('雲丹3種食べ比べ', 'uni sanshu tabekurabe', 'Three-sea-urchin tasting (add-on)', '¥6,600', 'Add-ons', 'ask', 'no', '2026.', 'uni_tasting'),
    ] }, {
    cuisine: '6,900円からの鮨コース・カウンターと個室(赤ちゃん連れにも)',
    neighborhood: '銀座五丁目、銀座プラザ58ビル8F。銀座駅A3出口から徒歩1分',
    gf_detail: SUSHI_GF_JA, vegan_detail: 'ヴィーガンではありません。茶碗蒸し、キャビア、和牛しゃぶしゃぶを含む鮨コース。',
    notes: '[鮨・手頃なコースと個室] 銀座四丁目交差点から1分のビル8階、2018年12月開店の鮨店で、カウンターと2〜8名の個室。2026年8月の口コミでは、6,900円のコースが17品で、いくら丼、平目・鯵・帆立から中トロ・大トロ・金目鯛・穴子までの握り、浅蜊と枝豆の茶碗蒸し、玉子、かんぴょう巻き、抹茶ときな粉のわらび餅。雲丹3種の食べ比べは追加6,600円。上のコースにはキャビアや和牛しゃぶしゃぶも。赤ちゃん連れに個室を用意してもらえたという声も。2026年10月には店員の対応に不満の口コミも。サービス料10%(昼はコースのみ)。',
  });
}

// ================================================================ 銀座 鰤門
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004881/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_ginza_shimon', name: '銀座 鰤門 (Ginza Shimon)', category: 'OMNI',
    lat: 35.671178, lng: 139.763187,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Edomae sushi brushed with three or four different nikiri soy sauces chosen per topping (a 2026 diner); white fish is also served with just salt. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Daily 11:30–15:00 (food L.O. 14:00) and 17:00–22:00 (food L.O. 21:00); open year-round (Tabelog). 10% service charge. Children under 13 not seated at the counter. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Sakaguchi Bldg 6F — 2 min from Ginza Stn',
    cuisine: 'Edomae sushi at a 12 m red-lacquer counter · ¥10,780 lunch omakase · private rooms', cuisine_type: 'sushi',
    website: null, gmaps: gm('銀座 鰤門 銀座5-5-13 坂口ビル'), menu_url: null,
    notes: "[Sushi · the red-lacquer counter] A dimly lit sixth-floor sushi restaurant in Ginza 5-chōme, with a twelve-metre counter in bengara red lacquer and private rooms, 38 seats in all. The lunch omakase was ¥10,780 with tax in October 2026: three appetizers, eight nigiri, tamago, a roll, soup and dessert. Dinner is about twice that. A diner noted the chefs use three or four different nikiri soy sauces according to the fish, and white fish is also served with just salt. Diners mention spring sea bream, akami, oysters, sweet shrimp and kelp-cured sea bream. There is no menu for extra pieces, so ask prices. Children under 13 are not seated at the counter. A 10% service charge applies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme; opening date not found in a source read', background: 'No source read names the owner or chef.', philosophy: null, specialty: 'Nikiri matched to each topping.',
      anecdotes: [
        { text: '"The chef skillfully uses 3 to 4 different types of \'nikiri shoyu\' (sauce) tailored to each topping." — October 2026.', source: R + 'B537952582/' },
        { text: '"We were asked if we wanted to add anything, but it was unclear what was available and how much it would cost, as there was no menu provided." — October 2026.', source: R + 'B537354502/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 鰤門、銀座5-5-13 坂口ビル6F、銀座駅から徒歩2分、38席・個室、毎日11:30〜15:00・17:00〜22:00、年中無休、サービス料10%、13歳未満はカウンター不可、カード可。2026年10月の口コミ: 12mのベンガラ塗りのカウンター、昼のおまかせ10,780円(先付3品・握り8貫・玉子・巻物・椀・甘味)、夜は倍ほど、ネタごとに3〜4種の煮切り、白身は塩と水で、春子鯛・赤身・牡蠣・甘海老・鯛の昆布締め、追加はメニューなし。',
      confidence: 'low', sources: [TB, R + 'B537952582/', R + 'B537189808/', R + 'B537354502/', R + 'B537180061/', R + 'B537808354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask prices before ordering extras (no menu). No under-13s at the counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Several nikiri soy sauces brushed on the nigiri.', source: R + 'B537952582/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-13 坂口ビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目5番13号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537189808/', R + 'B537952582/'],
    price_note: 'Lunch price from October 2026 reviews (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('ランチおまかせ', 'ranchi omakase', 'Lunch omakase: 3 appetizers, 8 nigiri, tamago, roll, soup, dessert', '¥10,780', 'Courses', 'ask', 'no', '2026.', 'lunch_omakase'),
      it('夜のおまかせ', 'yoru no omakase', 'Dinner omakase (about twice the lunch price)', '', 'Courses', 'ask', 'no', '', 'dinner_omakase'),
    ] }, {
    cuisine: '12mのベンガラ塗りのカウンターの江戸前鮨・昼のおまかせ10,780円・個室',
    neighborhood: '銀座五丁目、坂口ビル6F。銀座駅から徒歩2分',
    gf_detail: '要確認。ネタごとに3〜4種の煮切り醤油を使い分ける江戸前鮨(2026年の口コミ)で、白身は塩だけでも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせです。',
    notes: '[鮨・ベンガラ塗りのカウンター] 銀座五丁目のビル6階、照明を落とした鮨店で、ベンガラ塗りの12mのカウンターと個室、計38席。2026年10月の昼のおまかせは税込10,780円で、先付3品、握り8貫、玉子、巻物、椀、甘味。夜はその倍ほど。ネタに合わせて3〜4種の煮切りを使い分け、白身は塩だけでも出すそう。春子鯛、赤身、牡蠣、甘海老、鯛の昆布締めなどの口コミ。追加の握りにはメニューがないので値段を確認して。13歳未満はカウンター不可。サービス料10%。',
  });
}

// ================================================================ 割烹かむい
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13315369/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_kappo_kamui_ginza', name: '割烹かむい (Kappō Kamui)', category: 'OMNI',
    lat: 35.670274, lng: 139.765678,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. A fixed Wagyu kaiseki (beef-tongue and sea-urchin chawanmushi, grilled and simmered beef); no source describes soy or wheat use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef kaiseki from the first course to dessert.',
    hours_raw: 'Mon–Sat 17:00–23:00, two seatings at 17:00 and 20:00, reservation only; closed Sundays (Tabelog and 2026 reviews). Cards accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Cheers Ginza 9F (behind Yakiniku Kamui) — 2 min from Higashi-Ginza Stn',
    cuisine: 'Wagyu kaiseki of Iki-island "Kamui" beef · ¥35,000 omakase · projection-mapping room', cuisine_type: 'kaiseki',
    website: null, gmaps: gm('割烹かむい 銀座5-9-5 チアーズ銀座'), menu_url: null,
    notes: "[Kaiseki · Wagyu with projection mapping] A white, 12-seat private dining room through a small door at the back of its sister restaurant, Yakiniku Kamui, on the ninth floor of a Ginza 5-chōme building. It opened on 30 September 2025. The course is Wagyu kaiseki built on 'Kamui' black-haired beef, which reviewers say comes from the group's own farm on Iki Island, Nagasaki, raised without antibiotics. Projection mapping and music play around the meal. The OMAKASE course was ¥35,000 in October 2026; one standout is a beef-tongue and sea-urchin chawanmushi with black truffle shaved at the table. Two seatings, 17:00 and 20:00, by reservation only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 September 2025 behind sister restaurant Yakiniku Kamui (Tabelog; 2026 review)', background: 'Part of the Kamui group; no source read names the chef.', philosophy: null, specialty: 'Kamui Wagyu kaiseki.',
      anecdotes: [
        { text: '"Kappo Kamui, a Japanese-style beef kaiseki restaurant located behind the sister restaurant, Yakiniku Kamui." — October 2026.', source: R + 'B537421614/' },
        { text: '"One standout dish was the beef tongue and sea urchin chawanmushi … having black truffle shaved right in front of me felt luxurious." — October 2026.', source: R + 'B537765127/' },
      ],
      japanese_sources_summary: '食べログ: 割烹かむい、銀座5-9-5 チアーズ銀座9F B、東銀座駅から徒歩2分、12席(テーブル)、月〜土17:00〜23:00、日休、2025年9月30日開店、カード可、予算3〜4万円。2026年10月の口コミ: Yakiniku Kamui の奥の個室、プロジェクションマッピングと音楽、長崎・壱岐の自社牧場の黒毛和牛「Kamui」(抗生物質不使用)、OMAKASEコース35,000円、牛タンと雲丹の茶碗蒸しに黒トリュフ、17時と20時の2部制、完全予約制。',
      confidence: 'low', sources: [TB, R + 'B537421614/', R + 'B537765127/', R + 'B537801256/', R + 'B537351153/', R + 'B537922760/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, two fixed seatings; a show-like private room.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-5 チアーズ銀座 9F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537765127/', R + 'B537801256/'],
    price_note: 'Course price from October 2026 reviews.', last_checked: TODAY, items: [
      it('OMAKASEコース', 'omakase koosu', 'Kamui Wagyu kaiseki omakase', '¥35,000', 'Courses', 'ask', 'no', '2026.', 'omakase'),
    ] }, {
    cuisine: '壱岐の黒毛和牛「Kamui」の肉割烹・35,000円のおまかせ・プロジェクションマッピングの個室',
    neighborhood: '銀座五丁目、チアーズ銀座9F(Yakiniku Kamui の奥)。東銀座駅から徒歩2分',
    gf_detail: '要確認。和牛の会席(牛タンと雲丹の茶碗蒸し、焼き・煮物の牛)。醤油や小麦の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。先付から甘味まで牛肉の会席です。',
    notes: '[割烹・プロジェクションマッピングと和牛] 銀座五丁目のビル9階、姉妹店「Yakiniku Kamui」の奥の小さな扉を抜けた白い12席の個室で、2025年9月30日開店。口コミによれば、長崎・壱岐の自社牧場で抗生物質を使わず育てた黒毛和牛「Kamui」を主役にした肉割烹で、プロジェクションマッピングと音楽が料理を彩ります。2026年10月のOMAKASEコースは35,000円で、目の前で黒トリュフを削る牛タンと雲丹の茶碗蒸しが印象的との声。17時と20時の2部制、完全予約制。',
  });
}

// ================================================================ 銀座 蟹 あかつき
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13297724/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '23:00']), we = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'tokyo_ginza_kani_akatsuki', name: '銀座 蟹 あかつき (Ginza Kani Akatsuki)', category: 'OMNI',
    lat: 35.67161, lng: 139.762989,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Crab kaiseki of hairy, king and snow crab as sashimi, grilled, in soup and other preparations; no source describes soy or wheat use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab kaiseki.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00; closed irregularly (Tabelog). 10% service charge. Cards accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, 4F (same address as 一㐂) — 1 min from Ginza Stn B7',
    cuisine: 'Crab kaiseki of three crabs · live crab at the counter · ¥25,000 dinner course, lunch under ¥10,000', cuisine_type: 'kaiseki',
    website: null, gmaps: gm('銀座 蟹 あかつき 銀座5-4-15'), menu_url: null,
    notes: "[Kaiseki · three crabs a minute from Ginza crossing] A crab restaurant on a fourth floor at 銀座5-4-15, opened on 29 May 2024, with a counter and private rooms for 2–6, 27 seats in all. Its Tabelog text says the owner visits the market every day to choose brand crabs. Live crabs greet you at the entrance, and at the counter you watch the chef prepare them. Courses work through hairy, king and snow crab: appetizers, crab sashimi, mushroom soup, grilled crab and more. The 'Crab Indulgence Course' was ¥25,000 with tax in 2026, and lunch is under ¥10,000. Families with babies have been given private rooms, though they are not soundproof. One October 2026 diner was disappointed by the cleanliness and the freshness of the crab. A 10% service charge applies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 May 2024 (Tabelog)', background: 'The shop text says the owner selects crabs at the market daily; no source names the owner.', philosophy: null, specialty: 'Crab sashimi; three-crab kaiseki.',
      anecdotes: [
        { text: '"The owner personally visits the market every day to select seasonal items." — Tabelog shop text.', source: TB },
        { text: '"I enjoyed a crab kaiseki course featuring three types of crab: hairy crab, king crab, and snow crab, prepared in various ways." — September 2026.', source: R + 'B536471007/' },
        { text: '"The crab I had been looking forward to was not fresh at all." — October 2026.', source: R + 'B536783875/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 蟹 あかつき、銀座5-4-15 銀座エフローレビルV 4F、銀座駅B7出口から徒歩1分、27席・個室(2〜6名)、平日11:30〜14:00・17:00〜23:00、土日祝は夜16:00〜、不定休、2024年5月29日開店、サービス料10%、店主が毎日市場でブランド蟹を仕入れ。2026年の口コミ: 活け蟹、毛蟹・タラバ・ズワイの蟹会席、蟹刺し、茸の椀、「Crab Indulgence Course」(英文口コミ)税込25,000円、昼は1万円以下、赤ちゃん連れに個室(防音ではない)、清潔さと鮮度に不満の声も。',
      confidence: 'low', sources: [TB, R + 'B536471007/', R + 'B525361929/', R + 'B493768004/', R + 'B536917240/', R + 'B536783875/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms for families; counter for watching the crab prep. 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-4-15 銀座エフローレビルV 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目4番15号 (go) 7m; same address as 一㐂 (tokyo_sushi_ichiki_ginza), pins ~1m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525361929/', R + 'B536471007/'],
    price_note: 'Course price from 2026 reviews (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('', '', '"Crab Indulgence" course (hairy, king and snow crab)', '¥25,000', 'Courses', 'ask', 'no', '2026.', 'crab_course'),
      it('ランチ', 'ranchi', 'Crab lunch', '', 'Lunch', 'ask', 'no', 'Under ¥10,000.', 'crab_lunch'),
    ] }, {
    cuisine: '3種の蟹の会席・カウンターで活け蟹・夜25,000円のコース、昼は1万円以下',
    neighborhood: '銀座五丁目、4F(一㐂と同じ住所)。銀座駅B7出口から徒歩1分',
    gf_detail: '要確認。毛蟹・タラバ・ズワイを刺身、焼き、椀などで出す蟹会席。醤油や小麦の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。蟹の会席です。',
    notes: '[会席・銀座の交差点から1分の3種の蟹] 銀座5-4-15のビル4階、2024年5月29日開店の蟹料理店で、カウンターと2〜6名の個室、計27席。食べログの店舗紹介によれば店主が毎日市場でブランド蟹を選びます。入口では活け蟹が迎え、カウンター越しに職人が捌く様子を見られます。コースは毛蟹・タラバ・ズワイを先付、蟹刺し、茸の椀、焼き蟹などで。英文の口コミで「Crab Indulgence Course」と呼ばれるコースは2026年で税込25,000円、昼は1万円以下。赤ちゃん連れに個室を用意してもらえたとの声も(防音ではない)。2026年10月には清潔さや蟹の鮮度に不満の口コミも。サービス料10%。',
  });
}

save();
