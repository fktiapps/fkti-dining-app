// Ginza Station half-mile sweep (805 m), batch 73 — all-genre phase, small seats first (all OMNI).
//   + 鉄板料亭 銀座まつさか (10-seat Matsusaka-beef teppan; chef Kobayashi per a 2026 review; ownership not stated)
//   + salmon atelier Hus (Norwegian-salmon specialist in Hibiya OKUROJI)
//   + 蕎麦会席 つきじ文化人 凬 (stone-ground hand-made soba courses)
//   + 銀座鮨処 まぐろ相馬水産 (8-seat counter run by the Toyosu tuna wholesaler Soma Suisan)
// Skipped: 鉄板焼き GINZA sima 13278991 (last review 2025-10).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 鉄板料亭 銀座まつさか
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13288590/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '16:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_ginza_matsusaka_teppan_ginza7', name: '鉄板料亭 銀座まつさか (GINZA MATSUSAKA)', category: 'OMNI',
    lat: 35.670727, lng: 139.759992,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-leaning teppan courses (beef, foie gras, abalone in mushroom cream); amuse-bouche included churros. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Matsusaka and Kobe beef courses with foie gras, lobster and fish.',
    hours_raw: 'Daily 11:30–16:00 (last seating 14:00) and 17:30–23:00 (last seating 20:30); irregular closures; closed 31 Dec–4 Jan (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Granbell Square 3F — 5 min from Ginza Stn C1/C2 or JR Shimbashi',
    cuisine: 'Matsusaka-beef teppanyaki with French touches · 10 counter seats · courses about ¥30,000–40,000', cuisine_type: 'other',
    website: 'https://ginza-matsusaka.jp/', gmaps: gm('銀座まつさか グランベルスクエア'), menu_url: null,
    notes: "[Teppanyaki · Matsusaka beef at a 10-seat counter] A small teppan counter of 10 seats on a third floor in Ginza 7-chōme, opened in 2023 and dedicated to Matsusaka beef (its certificate hangs on the wall). The chef, named Kobayashi in a 2026 regular's review, trained at a long-established Ginza teppan house and in French cooking, and blends the two. A 2024 ¥33,000 course ran prosciutto and churros, roast beef, flounder carpaccio, foie gras with pear, sweetfish grilled with its scales, then tenderloin and strip loin. A September 2026 menu added salmon confit, lobster and avocado, foie gras with figs, sea bream and abalone in mushroom cream. A Kobe and Matsusaka sirloin comparison course was ¥29,800. One diner felt the price was steep for a two-person operation.",
    chef_bio: { chef_name: 'Chef Kobayashi (per a 2026 review)', roles: ['chef'], origin: 'Opened 15 September 2023 (Tabelog)', background: 'Trained at a long-established Ginza teppanyaki restaurant and in French cuisine (2026 review); ownership not stated.', philosophy: null, specialty: 'Matsusaka beef with French technique.',
      anecdotes: [
        { text: '"The chef has experience at a long-established Teppan-yaki restaurant in Ginza as well as in French cuisine… I was captivated by Chef Kobayashi\'s flavors." — July 2026, 3rd visit.', source: R + 'B495222917/' },
        { text: '"The foie gras was served with figs, and the sweet sea bream was crispy and delightful. The abalone was paired with a mushroom cream sauce." — September 2026.', source: R + 'B536100346/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板料亭 銀座まつさか(GINZA MATSUSAKA)、銀座7-2-18 グランベルスクエア3F、銀座駅C1・C2出口・JR新橋駅から徒歩5分、10席(カウンター)、毎日11:30〜16:00(最終入店14:00)・17:30〜23:00(最終入店20:30)、不定休、12月31日〜1月4日休、2023年9月15日開店、公式サイト ginza-matsusaka.jp。店の紹介: 神戸牛と松阪牛のサーロイン食べ比べコース29,800円。口コミ: 松阪牛の証明書、シェフ Kobayashi(英文表記)は銀座の老舗鉄板焼きとフレンチで修業、2024年の33,000円のコース(生ハムとチュロス、ローストビーフ、平目のカルパッチョ、フォアグラと洋梨、鮎の鱗焼き、ヒレとストリップロイン)、2026年9月はサーモンのコンフィ、オマールとアボカド、フォアグラといちじく、甘鯛、鮑のキノコクリームソース、2人で営む店で高いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B495222917/', R + 'B536100346/', R + 'B500143892/', R + 'B514062356/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppan; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-18 グランベルスクエア 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番18号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B500143892/'],
    price_note: 'Comparison-course price from Tabelog (tax incl.); tenderloin course from a December 2024 review.', last_checked: TODAY, items: [
      it('神戸牛と松阪牛のサーロイン食べ比べコース', '', 'Kobe and Matsusaka beef sirloin comparison course', '¥29,800', 'Courses', 'ask', 'no', 'Tabelog promotional price.', 'comparison'),
      it('特選松阪牛ヒレとストリップロインのコース', '', 'Special Matsusaka beef tenderloin and strip loin course', '¥33,000', 'Courses', 'ask', 'no', 'December 2024.', 'tenderloin_course'),
    ] }, {
    cuisine: 'フレンチの技を取り入れた松阪牛の鉄板焼き・カウンター10席・コース3万〜4万円ほど',
    neighborhood: '銀座七丁目、グランベルスクエア3F。銀座駅C1・C2出口、JR新橋駅から徒歩5分',
    gf_detail: '要確認。牛肉、フォアグラ、鮑のキノコクリームソースなどフレンチ寄りの鉄板焼きのコースで、アミューズにチュロスが出たことも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、オマール、魚を含む松阪牛・神戸牛のコースです。',
    notes: '[鉄板焼き・カウンター10席で松阪牛] 銀座七丁目のビル3階、2023年開店のカウンター10席の鉄板焼きで、松阪牛が専門(壁には証明書)。2026年の常連の口コミでは、シェフの Kobayashi(英文の口コミの表記)は銀座の老舗鉄板焼きとフレンチで修業した人で、両方を融合させています。2024年の33,000円のコースは、生ハムとチュロス、ローストビーフ、平目のカルパッチョ、フォアグラと洋梨、鮎の鱗焼き、ヒレとストリップロイン。2026年9月はサーモンのコンフィ、オマールとアボカドのサラダ、フォアグラといちじく、甘鯛、鮑のキノコクリームソースも。神戸牛と松阪牛のサーロイン食べ比べコースは29,800円。2人で営む店にしては高いと感じた客も。',
  });
}

// ================================================================ salmon atelier Hus
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13282542/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:00', '23:00']), su = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_salmon_atelier_hus_okuroji', name: 'salmon atelier Hus (サーモンアトリエ・フース)', category: 'OMNI',
    lat: 35.669934, lng: 139.758892,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch choices include harako-meshi (salmon and roe rice cooked in broth) and salmon steak alongside pasta and curry; the broth is not described. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a salmon specialist.',
    hours_raw: 'Mon–Sat 11:30–14:30 (L.O. 14:00) and 17:00–23:00 (food L.O. 22:00); Sun and holidays to 22:00; irregular closures (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: su }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya OKUROJI (under the JR tracks), Uchisaiwaichō — between Hibiya and Shimbashi',
    cuisine: 'Norwegian-salmon specialist · ¥1,500 lunch of harako-meshi, salmon pasta or salmon steak · Norwegian beers and sake', cuisine_type: 'other',
    website: null, gmaps: gm('salmon atelier Hus 日比谷OKUROJI'), menu_url: null,
    notes: "[Seafood · a salmon specialist under the tracks] A small salmon specialist in Hibiya OKUROJI under the JR tracks, open since 2023, with seven seats inside and four on a terrace. It uses Arctic Norwegian salmon cooked in Italian, French and Japanese styles. Weekday lunch (¥1,500 before tax in October 2026, with salad and soup) offers harako-meshi of salmon and roe over broth-cooked rice, flat-noodle pasta topped with crisp salmon, salmon steak or a limited curry. Drinks at lunch are ¥200. Evenings bring rare Norwegian beers (a light rosé beer), vinho verde and sake. Small and lively, so book.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 April 2023 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Norwegian salmon; harako-meshi.',
      anecdotes: [
        { text: '"The rice cooked in a flavorful broth, combined with salmon and ikura, was incredibly delicious… The drinks were only JPY 200, and with a salad and soup included, the price of JPY 1500 before tax is an amazing deal." — October 2026.', source: R + 'B537841404/' },
        { text: '"The noodles were chewy, and the crispy salmon on top was delicious… fresh salmon included in the salad." — October 2026.', source: R + 'B537893211/' },
      ],
      japanese_sources_summary: '食べログ: salmon atelier Hus(サーモンアトリエ・フース)、千代田区内幸町1-7-1 日比谷OKUROJI、11席(店内7・テラス4)、月〜土11:30〜14:30・17:00〜23:00、日祝は22:00まで、不定休、2023年4月12日開店。店の紹介: ノルウェー北極圏のサーモン専門、イタリアン・フレンチ・和食のスタイル、ノルウェーの珍しいビール、カクテル、日本酒。2026年10月の口コミ: ランチ(税抜1,500円、サラダ・スープ付き、ドリンク200円)ははらこ飯、サーモンのパスタ(平打ち麺)、サーモンステーキ、限定のカレー、季節のノルウェービール(ロゼ)、ヴィーニョ・ヴェルデ、席が少ないので予約を。',
      confidence: 'medium', sources: [TB, R + 'B537841404/', R + 'B537893211/', R + 'B537965190/', R + 'B537530817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tiny room; book for lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0011 東京都千代田区内幸町1-7-1 日比谷OKUROJI',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区内幸町一丁目7番1号 (go) 39m (long arcade under the tracks); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537841404/', R + 'B537965190/'],
    price_note: 'Lunch price from an October 2026 review (before tax).', last_checked: TODAY, items: [
      it('はらこ飯ランチ', 'harakomeshi ranchi', 'Harako-meshi lunch: salmon and roe on broth-cooked rice, salad, soup', '¥1,500', 'Lunch', 'ask', 'no', 'Before tax, October 2026.', 'harakomeshi'),
      it('サーモンのパスタ', '', 'Flat-noodle pasta with crisp salmon (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'October 2026.', 'salmon_pasta'),
      it('サーモンステーキ', 'saamon suteeki', 'Salmon steak (lunch)', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026.', 'salmon_steak'),
    ] }, {
    cuisine: 'ノルウェーサーモンの専門店・はらこ飯、サーモンのパスタ、サーモンステーキのランチ1,500円・ノルウェーのビールと日本酒',
    neighborhood: '日比谷OKUROJI(JR高架下)、内幸町。日比谷と新橋の間',
    gf_detail: '要確認。ランチはだしで炊いたご飯のはらこ飯やサーモンステーキのほか、パスタやカレーも。だしの内容やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。サーモンの専門店です。',
    notes: '[魚介・高架下のサーモン専門店] JR高架下の日比谷OKUROJIにある小さなサーモン専門店で、2023年開店、店内7席とテラス4席。ノルウェー北極圏のサーモンをイタリアン、フレンチ、和食のスタイルで。平日のランチ(2026年10月は税抜1,500円、サラダ・スープ付き)は、だしで炊いたご飯にサーモンといくらをのせたはらこ飯、カリッと焼いたサーモンをのせた平打ち麺のパスタ、サーモンステーキ、限定のカレーから。ランチのドリンクは200円。夜はノルウェーの珍しいビール(軽いロゼビール)、ヴィーニョ・ヴェルデ、日本酒も。小さくにぎやかなので予約を。',
  });
}

// ================================================================ 蕎麦会席 つきじ文化人 凬
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13159030/'; const R = TB + 'dtlrvwlst/';
  const din = day(['17:30', '22:00']), both = day(['11:45', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_tsukiji_bunkajin_kaza_soba', name: '蕎麦会席 つきじ文化人 凬 (Soba Kaiseki Tsukiji Bunkajin Kaza)', category: 'OMNI',
    lat: 35.668451, lng: 139.770082,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Stone-ground hand-made soba; one course served mori soba with salt or kombu water, but no source says whether any soba is 100% buckwheat, and courses include tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, sujiko and karasumi soba, duck; soba dipping sauces normally use dashi.',
    hours_raw: 'Mon, Tue and Fri 17:30–22:00; Wed, Thu, Sat and holidays 11:45–14:00 and 17:30–22:00 (L.O. 21:00); closed Sundays (Tabelog). Reservations from the ¥5,500 course.',
    hours: { 0: din, 1: din, 2: both, 3: both, 4: din, 5: both }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tsukiji 1-chōme, Premium Ginza East 1F — 3 min from Higashi-Ginza Stn',
    cuisine: 'Soba kaiseki · stone-ground hand-made soba in many styles · lunch soba with appetizers ¥2,000, soba courses ¥7,000–9,900 · 10–15 sakes', cuisine_type: 'udon_soba',
    website: 'http://www.bizserver1.com/bunkajin/', gmaps: gm('つきじ文化人 凬 築地1-12-16'), menu_url: null,
    notes: "[Soba kaiseki · nine ways with hand-made soba] A 14-seat soba restaurant near Higashi-Ginza with table and counter seats around a big kneading bowl, open since 2013. Buckwheat from across Japan is stone-ground and made into soba by hand, then served in seasonal courses. Lunch from ¥2,000 brings appetizers (two sashimi, figs, eggplant with sesame, maitake tempura) and mori soba. The ¥7,700–9,900 'Wan' courses parade many soba: sujiko and quail-egg soba, karasumi soba, matsutake soba, and mori soba in two styles, eaten with salt or kombu water. Dinner is course-only (about ¥7,000), with 10–15 sakes by the glass. Portions are small; some order extra soba.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 August 2013 (Tabelog)', background: 'No source names the owner or soba maker.', philosophy: 'Stone-ground buckwheat from across Japan, hand-made soba (Tabelog listing).', specialty: 'Soba in many styles.',
      anecdotes: [
        { text: '"The highlight for me was the \'Karasumi Soba\'… Then came the \'Mori Ni-shu,\' served with either salt or kombu water." — October 2026, ¥7,700 lunch course.', source: R + 'B537792414/' },
        { text: '"We enjoyed a course called \'Wan\' (small bowl of soba and appetizers) priced at JPY 9,900." — September 2026.', source: R + 'B225991460/' },
      ],
      japanese_sources_summary: '食べログ: 蕎麦会席 つきじ文化人 凬、築地1-12-16 プレミアム銀座イースト1F、東銀座駅から徒歩3分、14席、月火金17:30〜22:00、水木土祝11:45〜14:00・17:30〜22:00、日休、予約は5,500円のコースから。店の紹介: 全国の厳選した蕎麦を石臼挽きで手打ち、季節の魚と野菜のコース、日本酒10〜15種。2026年の口コミ: 中央に大きなこね鉢、ランチのそば2,000円(刺身2種、いちじく、茄子の胡麻和え、舞茸の天ぷら、もりそば)、碗のコース9,900円、ランチの碗コース7,700円(すじこそば、からすみそば、松茸そば、塩か昆布水で食べるもり二種)、夜はコースのみ約7,000円、量は少なめ。',
      confidence: 'medium', sources: [TB, R + 'B537792414/', R + 'B225991460/', R + 'B535259741/', R + 'B537106438/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-only at dinner; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0045 東京都中央区築地1-12-16 プレミアム銀座イースト 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区築地一丁目12番16号 (go) 9m; 658 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535259741/', R + 'B537792414/', R + 'B225991460/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('ランチのそば(前菜付き)', '', 'Lunch: appetizers and mori soba', '¥2,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_soba'),
      it('碗のコース(昼)', '', 'Lunch soba course: sujiko, karasumi, matsutake and mori soba', '¥7,700', 'Courses', 'ask', 'no', 'October 2026.', 'wan_lunch'),
      it('碗のコース', '', '"Wan" soba course with appetizers', '¥9,900', 'Courses', 'ask', 'no', 'September 2026.', 'wan_course'),
    ] }, {
    cuisine: '蕎麦会席・石臼挽き手打ちそばをさまざまな食べ方で・ランチのそばと前菜2,000円、そばのコース7,000〜9,900円・日本酒10〜15種',
    neighborhood: '築地一丁目、プレミアム銀座イースト1F。東銀座駅から徒歩3分',
    gf_detail: '要確認。石臼挽きの手打ちそばで、もりそばを塩や昆布水で出すコースもありますが、十割かどうかは書かれておらず、天ぷらも出ます。',
    vegan_detail: 'ヴィーガンではありません。刺身、すじこやからすみのそば、鴨。そばつゆは通常だしを使います。',
    notes: '[蕎麦会席・手打ちそばを九通りに] 東銀座近く、大きなこね鉢を囲むテーブルとカウンターの14席のそば屋で、2013年開店。全国から選んだ蕎麦を石臼で挽いて手打ちにし、季節のコースで出します。昼は2,000円から、前菜(刺身2種、いちじく、茄子の胡麻和え、舞茸の天ぷら)ともりそば。7,700〜9,900円の「碗」のコースでは、すじこと鶉の卵のそば、からすみそば、松茸そば、塩か昆布水で食べるもり二種などが次々に。夜はコースのみ(約7,000円)で、日本酒はグラスで10〜15種。量は少なめで、そばを追加する客も。',
  });
}

// ================================================================ 銀座鮨処 まぐろ相馬水産
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13291594/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '22:30']);
  put({
    id: 'tokyo_maguro_soma_suisan_ginza7', name: '銀座鮨処 まぐろ相馬水産 (Maguro Soma Suisan)', category: 'OMNI',
    lat: 35.670335, lng: 139.759786,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi seasoned with red vinegar and served with soy sauce; whether a wheat-free soy sauce is available is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna, sea urchin and shrimp sushi.',
    hours_raw: 'Mon–Sat 17:00–22:30 in four timed sittings (17:00, 18:00, 19:30, 20:30); closed Sundays and holidays (Tabelog). Late arrivals may lose the booking.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme on Corridor-gai, No. 26 Polestar Bldg 3F — 8 min from Ginza Stn',
    cuisine: 'Tuna-focused Edomae sushi from a Toyosu tuna wholesaler · 8-seat hinoki counter · omakase ¥11,000', cuisine_type: 'sushi',
    website: 'https://ginza-maguro-souma.com', gmaps: gm('まぐろ相馬水産 銀座7-2-14'), menu_url: null,
    notes: "[Sushi · tuna from a Toyosu wholesaler] An 8-seat hinoki counter on a third floor in the Corridor-gai bar district, opened in 2023 by Soma Suisan, a Toyosu tuna wholesaler with 60 years in the trade. The ¥11,000 omakase is built around tuna, from lean through medium and fatty, with the signature negitoro piled into an 'Everest'. Sea urchin and sweet shrimp also feature, on red-vinegar rice. Pieces keep coming until time is up, in four timed sittings each evening. The chef is cheerful and full of puns; most customers are visitors from abroad, and it's often full. The lift is tricky to find.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 November 2023 (Tabelog)', background: 'Run by the Toyosu tuna wholesaler Soma Suisan (60 years, per Tabelog).', philosophy: null, specialty: 'Tuna.',
      anecdotes: [
        { text: '"As expected from a direct operation of a tuna wholesaler, the star of the show is definitely the fresh tuna… the signature dish is the tuna tataki, served at Everest style." — August 2026.', source: R + 'B536184651/' },
        { text: '"Omakase Course: JPY 11,000… everyone else was foreign except for us… sushi keeps coming until the time is up." — October 2026.', source: R + 'B537079792/' },
      ],
      japanese_sources_summary: '食べログ: 銀座鮨処 まぐろ相馬水産、銀座7-2-14 第26ポールスタービル3F、銀座駅から徒歩8分、8席(カウンター)、月〜土17:00〜22:30(17:00・18:00・19:30・20:30の4部制)、日祝休、2023年11月21日開店、公式サイト ginza-maguro-souma.com。店の紹介: 豊洲のまぐろ仲卸「相馬水産」の60年、プレミアム寿司コース11,000円、檜のカウンター。2026年の口コミ: まぐろづくし(赤身・中トロ・大トロ)、名物のエベレスト盛りのネギトロ、雲丹、甘海老、赤酢のシャリ、時間まで握りが続く、ダジャレ好きの明るい大将、外国人客が多い、エレベーターが分かりにくい、満席。',
      confidence: 'medium', sources: [TB, R + 'B536184651/', R + 'B537079792/', R + 'B534218121/', R + 'B534095811/'] },
    cultural_comfort: { level: 'english', note: 'Most guests are visitors from abroad (2026 reviews); cheerful chef.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-14 第26ポールスタービル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番14号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537079792/'],
    price_note: 'Course price from Tabelog and an October 2026 review (tax incl.).', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Tuna-focused omakase (lean, medium-fatty, fatty, negitoro "Everest", sea urchin)', '¥11,000', 'Courses', 'ask', 'no', 'October 2026.', 'omakase'),
    ] }, {
    cuisine: '豊洲のまぐろ仲卸のまぐろ中心の江戸前鮨・檜のカウンター8席・おまかせ11,000円',
    neighborhood: '銀座七丁目のコリドー街、第26ポールスタービル3F。銀座駅から徒歩8分',
    gf_detail: '要確認。赤酢のシャリに醤油を使う江戸前鮨で、小麦不使用の醤油があるかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。まぐろ、雲丹、海老の鮨です。',
    notes: '[鮨・豊洲のまぐろ仲卸の店] コリドー街のバーが並ぶビルの3階、2023年に豊洲のまぐろ仲卸「相馬水産」(60年)が開いた檜のカウンター8席の鮨店。11,000円のおまかせはまぐろが主役で、赤身から中トロ、大トロまで、名物はネギトロを山盛りにした「エベレスト」。雲丹や甘海老も、赤酢のシャリで。時間まで握りが続き、夜は4部制。大将は明るくダジャレ好き。客の多くは海外からの旅行者で、満席のことが多い店です。エレベーターが少し分かりにくいので注意。',
  });
}

save();
