// Ginza Station half-mile sweep (805 m), batch 35 — two small Ginza counters.
//   + あきしの (basement kappō-izakaya, 14 seats; reviewers say a married couple runs it, but no source names them → OMNI with
//     a note, per the unnamed-couple rule)
//   + きよ田 (Edomae sushi founded 1963, "Maguro no Kiyota"; now the fourth chef in its line of succession, Norihiko Yoshizawa,
//     who is not family → OMNI)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ あきしの
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13035086/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_akishino_ginza4', name: 'あきしの (Akishino)', category: 'OMNI',
    lat: 35.672349, lng: 139.764764,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Japanese small plates and seafood: sashimi, dobin-mushi, clear soup, shinjo, heshiko, and Inaniwa udon (wheat) to finish. No ingredient details or gluten-free options are given.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: a seafood-led menu (sashimi, crab, pike conger, shrimp shumai, fermented heshiko); seasonal vegetable dishes appear, but their stocks are not described.',
    hours_raw: 'Evenings; Tabelog lists no hours. Call ahead (03-3563-8826 per Tabelog). Cards (JCB, AMEX, Diners) accepted; no e-money or QR. Non-smoking.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme back alley, Hatori Bldg B1F — about 1 min from Ginza Stn',
    cuisine: 'Couple-run basement kappō-izakaya · sashimi, dobin-mushi and seasonal small plates · regulars of ten years and more', cuisine_type: 'izakaya',
    website: null, gmaps: gm('あきしの 銀座4-3-5 ハトリビル'), menu_url: null,
    notes: "[Izakaya · the couple in the basement] A small basement eatery down a Ginza 4-chōme back alley with a six-seat counter and two tables, run, reviewers say, by a married couple, and full of regulars. One has been coming for more than ten years, another, from Noto, has eaten in Ginza for fifty years and calls it a rare find. Neither is named in any source. The cooking is careful kappō in an izakaya setting. Appetizers come intricately presented, a corn-wrapped shinjo has kernels laid as if carved off the cob, and the dobin-mushi is steamed in a teapot, with matsutake in autumn. There are sashimi platters of fine fish, heshiko and pickles, grilled crab shell, shrimp shumai, an omakase of pike conger, clear soup and sashimi, and Inaniwa udon to finish. Drinks lean to shochu, with sudachi or kabosu. Diners spend about ¥8,000–15,000.",
    chef_bio: {
      chef_name: null, roles: [],
      origin: 'Ginza 4-chōme basement; founding date not found in a source read',
      background: 'Several reviewers (2022–2025) describe it as run by a husband-and-wife team; no source names them.',
      philosophy: null, specialty: 'Dobin-mushi; sashimi platters; seasonal small plates.',
      anecdotes: [
        { text: '"The restaurant is run by a husband and wife team, creating a warm and homey atmosphere." — May 2022.', source: R + 'B449520288/' },
        { text: '"The corn kernels were arranged so perfectly that it looked like they had been carefully hollowed out from the cob." — July 2025.', source: R + 'B485824649/' },
        { text: '"The owner advised us to sip the shochu straight and take our time, but I couldn\'t stop." — July 2026.', source: R + 'B532291932/' },
      ],
      japanese_sources_summary: '食べログ: あきしの、銀座4-3-5 ハトリビルB1F、銀座駅から76m、14席(カウンター6・テーブル8)、予約可、カードはJCB・AMEX・Diners、電子マネー・QR不可、禁煙、口コミ予算8,000〜9,999円。口コミ(2022〜2026年): 夫婦で営む、常連が多い、10年以上通う客、土瓶蒸し(松茸)、刺し盛り、とうもろこしのしんじょう、へしこ、漬物、蟹の甲羅焼き、えびしゅうまい、鱧・お吸い物・刺身のおまかせ、稲庭うどん、すだち割り・かぼす。',
      confidence: 'low', sources: [TB, R + 'B449520288/', R + 'B493382449/', R + 'B508939664/', R + 'B485824649/', R + 'B429443608/', R + 'B532291932/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Tiny basement room of regulars; book and call ahead. A long-time regular says overseas visitors rarely find it.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Seafood-led small plates and sashimi.', source: R + 'B493382449/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-3-5 ハトリビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM node 7440039128 「あきしの」 6m; GSI 東京都中央区銀座四丁目3番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B449520288/', R + 'B493382449/', R + 'B532291932/'],
    price_note: 'Dishes from 2022–2026 reviews; no prices captured.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase: pike conger, clear soup, sashimi, Inaniwa udon', '', 'Courses', 'no', 'no', '', 'omakase'),
      it('土瓶蒸し', 'dobin mushi', 'Teapot-steamed soup (matsutake in season)', '', 'Small plates', 'ask', 'no', '', 'dobin_mushi'),
      it('刺し盛り', 'sashimori', 'Sashimi platter', '', 'Small plates', 'ask', 'no', '', 'sashimi'),
      it('とうもろこしのしんじょう', 'toumorokoshi no shinjou', 'Corn-wrapped shinjo', '', 'Small plates', 'ask', 'no', '', 'corn_shinjo'),
      it('へしこ', 'heshiko', 'Heshiko (fermented fish)', '', 'Small plates', 'ask', 'no', '', 'heshiko'),
      it('稲庭うどん', 'inaniwa udon', 'Inaniwa udon', '', 'Rice & noodles', 'no', 'ask', '', 'inaniwa'),
    ] }, {
    cuisine: '夫婦で営む地下の割烹居酒屋・刺身と土瓶蒸し、季節の小皿・10年来の常連も',
    neighborhood: '銀座四丁目の裏路地、ハトリビルB1F。銀座駅から徒歩1分ほど',
    gf_detail: '要確認。刺身、土瓶蒸し、お吸い物、しんじょう、へしこなどの和の小皿と魚介で、締めは稲庭うどん(小麦)。原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。刺身、蟹、鱧、えびしゅうまい、へしこなど魚介中心。季節の野菜料理もありますが、出汁は書かれていません。',
    notes: '[居酒屋・地下の夫婦の店] 銀座四丁目の裏路地を下りた地下の小さな店で、カウンター6席とテーブル2卓。口コミによれば夫婦で営み、常連が多く、10年以上通う人や、能登から50年銀座に通い「めったにない店」と言う人も。名前を記した情報はありません。料理は居酒屋の構えで丁寧な割烹仕事。繊細に盛った先付、桂むきのように粒を並べたとうもろこしのしんじょう、秋は松茸の土瓶蒸し。上質な刺し盛り、へしこと漬物、蟹の甲羅焼き、えびしゅうまい、鱧・お吸い物・刺身のおまかせ、締めの稲庭うどんも。酒は焼酎のすだち割りやかぼすで。予算は8,000〜15,000円ほど。',
  });
}

// ================================================================ きよ田
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13070238/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_kiyota_ginza', name: 'きよ田 (Kiyota)', category: 'OMNI',
    lat: 35.67147, lng: 139.760962,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Edomae omakase of sashimi and nigiri (tuna, kohada, kelp-cured flounder, seared kama-toro, anago, sea-urchin rolls, abalone rice porridge); no source describes the soy, nikiri or tsume ingredients or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Mon–Sat 12:00–14:00 (L.O. 13:45) and 18:00–22:00; closed Sundays and holidays (Tabelog). Cards (JCB, AMEX, Diners) accepted; no e-money or QR.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Ginza Stn C2 exit 5 min',
    cuisine: 'Edomae sushi since 1963 · "Maguro no Kiyota" · nine-seat counter', cuisine_type: 'sushi',
    website: null, gmaps: gm('きよ田 銀座6-3-15'), menu_url: null,
    notes: "[Sushi · Maguro no Kiyota] A plain nine-seat counter in Ginza 6-chōme, founded in 1963 by Shigezo Fujimoto, according to a 2026 diner. It is known as 'Maguro no Kiyota' for its tuna and has passed from chef to chef. The fourth, Norihiko Yoshizawa, was born in Kyoto in 1976 and trained at Kiyota for more than fifteen years under Mr Kimura, from choosing fish to making sushi (Tabelog). In 2026 diners describe an omakase of sashimi then nigiri: Ōma tuna in akami, chūtoro and seared kama-toro, kohada from Kumamoto, kelp-cured flounder, cuttlefish, Hagi red sea urchin, anago, sea-urchin rolls and abalone rice porridge. The counter is lively, with regulars and overseas guests. It is among Ginza's priciest: ¥40,000–80,000 a head in reviews, with lunch from about ¥30,000.",
    chef_bio: {
      chef_name: 'Norihiko Yoshizawa (4th-generation head chef)', roles: ['head chef (4th in succession)'],
      origin: 'Founded 1963 by Shigezo Fujimoto (per a 2026 Tabelog review)',
      background: 'Born in Kyoto in 1976; more than 15 years at Kiyota, taught by Mr Kimura (Tabelog shop page).',
      philosophy: null, specialty: 'Tuna; Edomae nigiri.',
      anecdotes: [
        { text: '"Founded in 1963, this long-established eatery has been passed down from the first owner, Shigezo Fujimoto, and is also known as \'Maguro no Kiyota.\'" — September 2026.', source: R + 'B535550724/' },
        { text: '"On this day, the fresh tuna from Oma and the red sea urchin from Hagi were particularly impressive." — September 2026.', source: R + 'B535224675/' },
        { text: '"It was a lively atmosphere with regulars and some enthusiastic inbound guests!" — October 2026.', source: R + 'B537440774/' },
      ],
      japanese_sources_summary: '食べログ: きよ田、銀座6-3-15、銀座駅C2出口から徒歩5分、9席、月〜土12:00〜14:00・18:00〜22:00、日祝休、カードはJCB・AMEX・Diners、予算は夜5〜6万円・昼3〜4万円。店舗紹介: 四代目 Norihiko Yoshizawa(1976年京都生まれ、きよ田で15年以上、Kimura氏に魚選びから握りまで学ぶ)。2026年の口コミ: 1963年創業・初代 Shigezo Fujimoto(英文表記のみ)、「鮪のきよ田」、大間の鮪、萩の赤雲丹、小肌、昆布締めの平目、炙りカマトロ、穴子、雲丹巻き、鮑の雑炊、常連とインバウンド客。',
      confidence: 'medium', sources: [TB, R + 'B535550724/', R + 'B535224675/', R + 'B537440774/', R + 'B501218236/', R + 'B532751434/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Nine-seat counter; book ahead. Very high prices; overseas guests are common.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番15号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537440774/', R + 'B535224675/'],
    price_note: 'Course contents from 2026 reviews; Tabelog budget ¥50,000–60,000 dinner, ¥30,000–40,000 lunch.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase of sashimi and Edomae nigiri', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '1963年創業の江戸前鮨・「鮪のきよ田」・9席のカウンター',
    neighborhood: '銀座六丁目、銀座駅C2出口から徒歩5分',
    gf_detail: '要確認。刺身と握りの江戸前のおまかせ(鮪、小肌、昆布締めの平目、炙りカマトロ、穴子、雲丹巻き、鮑の雑炊など)。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせです。',
    notes: '[鮨・鮪のきよ田] 銀座六丁目の簡素な9席のカウンター。2026年の口コミによれば1963年に初代(英文表記 Shigezo Fujimoto)が創業し、「鮪のきよ田」と呼ばれ、職人から職人へ受け継がれてきました。四代目(Norihiko Yoshizawa)は1976年京都生まれで、Kimura氏のもとで15年以上、魚選びから握りまで学んだ人(食べログ店舗紹介)。2026年の口コミでは、刺身から握りへ、大間の鮪の赤身・中トロ・炙りカマトロ、熊本の小肌、昆布締めの平目、墨烏賊、萩の赤雲丹、穴子、雲丹巻き、鮑の雑炊。常連と海外客でにぎやか。銀座でも高価格帯で、口コミでは1人4〜8万円、昼は3万円ほどから。',
  });
}

save();
