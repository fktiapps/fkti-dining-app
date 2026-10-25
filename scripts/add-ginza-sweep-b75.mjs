// Ginza Station half-mile sweep (805 m), batch 75 — all-genre phase (all OMNI: groups and chains).
//   + 米菜°sakura 織音寿し (oil-and-salt sushi by Al-chè-cciano's Masayuki Okuda, Yamagata main shop)
//   + 天ぷら 銀座おのでら 東銀座店 (ONODERA group flagship tempura)
//   + よもだそば 銀座店 (soba-and-curry chain)
//   + GINZA TAPPO (Tuscan Italian, 200+ wines; formerly on Corridor-gai)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 米菜°sakura 織音寿し
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13248297/'; const R = TB + 'dtlrvwlst/';
  const d = day(['12:00', '13:30'], ['14:30', '16:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_orion_sushi_ginza6', name: '米菜°sakura 織音寿し (Bayside sakura Orion Sushi)', category: 'OMNI',
    lat: 35.668967, lng: 139.764314,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi seasoned with oils and salts rather than soy sauce, plus bagna cauda and soup; one course included fried butterbur shoots. No source says whether soy sauce or wheat appears.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sea urchin, Yonezawa beef; Yamagata vegetables feature heavily.',
    hours_raw: 'Thu–Tue 12:00–13:30, 14:30–16:00 and 18:00–22:00; closed Wednesdays and irregularly (Tabelog). 10% service charge.',
    hours: { 0: d, 1: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Sakura Marks Ginza 612 12F — 5 min from Ginza Stn',
    cuisine: '"Oil sushi" with 50+ oils and 100+ salts by Al-chè-cciano chef Masayuki Okuda · Shōnai seafood, Yamagata vegetables · lunch ¥7,700', cuisine_type: 'sushi',
    website: 'http://www.alchecciano.com/olion-sushi/', gmaps: gm('織音寿し サクラマークス銀座612'), menu_url: null,
    notes: "[Sushi · oil and salt instead of soy, from Al-chè-cciano] An 8-seat 12th-floor counter opened in 2020 by Masayuki Okuda, the chef behind Yamagata's Al-chè-cciano. Seafood from the Shōnai coast is seasoned with more than 50 oils and 100 salts from around the world. Vegetables from the Yamagata main shop come as bagna cauda. A January 2026 lunch (¥7,700 with a sparkling toast) ran torched seaweed rolls, fish matched to oils and salts, the signature bagna cauda, soup, Yamagata strawberries and Japanese black tea. Dinner courses add Ezo murasaki sea urchin and Yonezawa beef, and the chef may lecture on olive oil. Opinions split: some love it, one found it 'sushi carpaccio' with oil overpowering the fish. Late-afternoon lunch seating suits theatre-goers.",
    chef_bio: { chef_name: 'Masayuki Okuda (producer, per Tabelog)', roles: ['producer chef'], origin: 'Opened 3 July 2020 (Tabelog)', background: 'Chef of Al-chè-cciano (Yamagata); restaurant run by that group (alchecciano.com).', philosophy: 'The "Okuda theory" of pairing seafood with oils and salts (Tabelog listing).', specialty: 'Oil sushi.',
      anecdotes: [
        { text: '"Starting with the seaweed rolls that were lightly grilled with a torch, the fish paired beautifully with various oils and salts… The specialty dish, bagna càuda." — January 2026, ¥7,700 lunch.', source: R + 'B521834691/' },
        { text: '"Most of the sushi felt like a sushi version of carpaccio… The aroma of the oil was too strong." — June 2026.', source: R + 'B536023613/' },
      ],
      japanese_sources_summary: '食べログ: 米菜°sakura 織音寿し(ベイサイドサクラオリオンスシ)、銀座6-12-12 サクラマークス銀座612 12F、銀座駅から徒歩5分、8席(カウンター)、木〜火12:00〜13:30・14:30〜16:00・18:00〜22:00、水休・不定休、サービス料10%、2020年7月3日開店、公式サイト alchecciano.com。店の紹介: 世界的シェフ Masayuki Okuda(英文表記、Al-chè-cciano)の「オイル寿司」、庄内の魚介、世界の50種以上のオイルと100種以上の塩、山形本店の野菜のバーニャカウダ、海人(Kaito)のコース。2026年の口コミ: ランチ7,700円(スパークリングで乾杯、炙りの海苔巻き、オイルと塩の握り、バーニャカウダ、スープ、山形の苺、和紅茶)、ふきのとうの天ぷら、オリーブオイルの講義、エゾムラサキウニ、寿司版カルパッチョでオイルが強すぎるとの声も。',
      confidence: 'medium', sources: [TB, R + 'B521834691/', R + 'B536023613/', R + 'B471538454/', R + 'B526697274/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; late lunch seating suits theatre-goers.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-12-12 サクラマークス銀座612 12F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目12番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521834691/'],
    price_note: 'Lunch price from a January 2026 review; 10% service extra.', last_checked: TODAY, items: [
      it('ランチ(スパークリング付き)', '', 'Lunch set with sparkling toast: oil-and-salt sushi, bagna cauda, soup, dessert', '¥7,700', 'Courses', 'ask', 'no', 'January 2026.', 'lunch'),
      it('海人のコース', '', 'Kaito dinner course: 13 seasonal nigiri incl. sea urchin and Yonezawa beef, plus 6 dishes', '', 'Courses', 'ask', 'no', 'Tabelog.', 'kaito'),
    ] }, {
    cuisine: 'Al-chè-cciano の Masayuki Okuda によるオイルと塩の「オイル寿司」・庄内の魚介と山形の野菜・ランチ7,700円',
    neighborhood: '銀座六丁目、サクラマークス銀座612 12F。銀座駅から徒歩5分',
    gf_detail: '要確認。醤油の代わりにオイルと塩で食べる寿司に、バーニャカウダやスープ。ふきのとうの天ぷらが出たことも。醤油や小麦を使うかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。寿司、雲丹、米沢牛。山形の野菜はたっぷり使われます。',
    notes: '[鮨・醤油の代わりにオイルと塩、Al-chè-cciano から] 山形の Al-chè-cciano のシェフ Masayuki Okuda(英文表記)が2020年に開いた、12階のカウンター8席。庄内の海の魚介を、世界の50種以上のオイルと100種以上の塩で食べさせます。山形本店の野菜はバーニャカウダで。2026年1月のランチ(スパークリングの乾杯付き7,700円)は、炙った海苔巻き、オイルと塩を合わせた握り、名物のバーニャカウダ、スープ、山形の苺、和紅茶。夜のコースにはエゾムラサキウニや米沢牛も入り、シェフのオリーブオイルの講義を聞けることも。評価は分かれ、オイルが強く「寿司版カルパッチョ」だったという声も。午後遅めのランチ枠は観劇帰りに便利です。',
  });
}

// ================================================================ 天ぷら 銀座おのでら 東銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13230620/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['12:00', '15:00'], ['18:00', '22:00']), we = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_tempura_ginza_onodera_higashiginza', name: '天ぷら 銀座おのでら 東銀座店 (TEMPURA GINZA ONODERA)', category: 'OMNI',
    lat: 35.668582, lng: 139.766914,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in wheat batter, fried in sesame oil.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, anago, sea urchin, Wagyu; chawanmushi with shrimp or crab dashi.',
    hours_raw: 'Weekdays 12:00–15:00 (last seating 13:00) and 18:00–22:00; Sat, Sun and holidays 11:30–15:00 (last seating 13:30) and 18:00–22:00 (Tabelog). 10% service charge.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Sunlit Ginza Bldg III 4F — near Higashi-Ginza Stn',
    cuisine: 'Counter tempura in 100% Taihaku sesame oil · seasonal courses with chawanmushi, live shrimp and anago, sea urchin in shiso · ¥15,000–40,000', cuisine_type: 'tempura',
    website: 'https://onodera-group.com/tempura-ginza/', gmaps: gm('天ぷら 銀座おのでら 東銀座店'), menu_url: null,
    notes: "[Tempura · ONODERA group flagship counter] The ONODERA group's 13-seat tempura counter, open since 2019, frying in 100% Taihaku sesame oil, with champagne picked by a sommelier. A July 2026 business lunch began with cold snow-crab chawanmushi, then four seasonal vegetables of your choice. Live shrimp and anago were shown before frying. Highlights included sea urchin wrapped in shiso, bonito sashimi, a fruit-tomato jelly and even a Wagyu steak. The June 'Peony' course opened with shrimp-broth chawanmushi and recommended sweet potato; finish with tendon or another choice. Staff are polite and used to international guests. About ¥15,000–40,000 plus 10% service.",
    chef_bio: { chef_name: null, roles: ['head chef'], origin: 'Opened 1 February 2019 (Tabelog)', background: 'Group-run (onodera-group.com); head chef unnamed.', philosophy: null, specialty: 'Sesame-oil tempura.',
      anecdotes: [
        { text: '"I was shown live shrimp and anago (conger eel), which were carefully prepared right in front of me… the tempura of sea urchin wrapped in shiso leaves left a lasting impression." — July 2026.', source: R + 'B532544208/' },
        { text: '"The staff were accommodating to foreign customers, and there were quite a few international guests." — May 2026.', source: R + 'B528546698/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら 銀座おのでら 東銀座店、銀座5-14-14 サンリット銀座ビルⅢ 4F、13席、平日12:00〜15:00(最終入店13:00)・18:00〜22:00、土日祝11:30〜15:00・18:00〜22:00、サービス料10%、2019年2月1日開店、公式サイト onodera-group.com。店の紹介: 太白胡麻油100%、料理長が選ぶ全国の食材、ソムリエのシャンパーニュ。2026年の口コミ: 雲丹や牛タンの試食、外国人客への対応、天丼で締め、牡丹コース(海老のだしの茶碗蒸し、さつまいも)、ズワイガニの冷製茶碗蒸し、季節の野菜を4種選ぶ、活き海老と穴子、大葉で包んだ雲丹の天ぷら、カツオの刺身、フルーツトマトのジュレ、和牛ステーキ、丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B532544208/', R + 'B528546698/', R + 'B530050447/', R + 'B531065280/'] },
    cultural_comfort: { level: 'english', note: 'Used to international guests (2026 review).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-14-14 サンリット銀座ビルⅢ 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目14番14号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532544208/', R + 'B530050447/'],
    price_note: 'No prices captured; reviewers spend ¥15,000–40,000.', last_checked: TODAY, items: [
      it('牡丹コース', 'botan koosu', '"Peony" tempura course', '', 'Courses', 'no', 'no', 'June 2026.', 'botan'),
      it('天丼(締め)', 'tendon', 'Tempura rice bowl to finish', '', 'Courses', 'no', 'no', '', 'tendon'),
    ] }, {
    cuisine: '太白胡麻油100%のカウンター天ぷら・茶碗蒸し、活き海老と穴子、大葉で包んだ雲丹の季節のコース・1.5万〜4万円',
    neighborhood: '銀座五丁目、サンリット銀座ビルⅢ 4F。東銀座駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の衣の天ぷらを胡麻油で揚げます。',
    vegan_detail: 'ヴィーガンではありません。海老、穴子、雲丹、和牛、海老やカニのだしの茶碗蒸し。',
    notes: '[天ぷら・おのでらグループの旗艦カウンター] おのでらグループの13席の天ぷらカウンターで、2019年開店。太白胡麻油100%で揚げ、シャンパーニュはソムリエが選びます。2026年7月の会食ランチは、ズワイガニの冷製茶碗蒸しに始まり、その日の季節の野菜から4種を選び、活きた海老と穴子を見せてから揚げてくれました。大葉で包んだ雲丹の天ぷら、カツオの刺身、フルーツトマトのジュレ、和牛ステーキまで。6月の「牡丹」コースは海老のだしの茶碗蒸しから、おすすめはさつまいも。締めは天丼など。接客は丁寧で、海外の客にも慣れています。1.5万〜4万円ほど、サービス料10%。',
  });
}

// ================================================================ よもだそば 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13140567/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:00', '22:30']);
  put({
    id: 'tokyo_yomoda_soba_ginza4', name: 'よもだそば 銀座店 (Yomoda Soba)', category: 'OMNI',
    lat: 35.672566, lng: 139.764954,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura soba and curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth; curry not described as plant-based.',
    hours_raw: 'Daily 7:00–22:30 (Tabelog; one 2026 diner understood it to open at 10:00 — check). Ticket machine.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme on Matsuya-dōri, Ginza Hakua Bldg 1F — 2 min from Ginza Stn',
    cuisine: 'Quick soba and Indian-style curry · burdock tempura soba ¥620, Yomoda curry ¥720 · weekly specials · 14 counter seats', cuisine_type: 'udon_soba',
    website: 'http://www.yomoda-soba.com/', gmaps: gm('よもだそば 銀座店'), menu_url: null,
    notes: "[Soba and curry · quick counter on Matsuya-dōri] A 14-seat counter branch of Yomoda Soba, known for pairing soba with an Indian-style curry, open since 2012. Buy a ticket, pour your water, and food arrives fast. October 2026 orders included the Yomoda curry (¥720), soupy, spicy and with a hint of tomato, burdock tempura soba (¥620) in a gently sweet broth, a set of large kakiage soba and half curry, the weekly shimeji and maitake tempura soba, and inari sushi on the side. Often busy with visitors from abroad; one diner found the soba overcooked and the tempura soggy.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 April 2012 (Tabelog); chain branch', background: 'Chain-run (yomoda-soba.com).', philosophy: null, specialty: 'Soba with curry.',
      anecdotes: [
        { text: '"I first ordered the Yomoda Curry for JPY 720 and the Burdock Tempura Soba for JPY 620… The curry was a spicy, soupy style, and the hidden touch of tomato added a nice flavor." — October 2026.', source: R + 'B483276851/' },
        { text: '"I enjoyed a set meal featuring a large kakiage soba and a half curry." — October 2026.', source: R + 'B537783620/' },
      ],
      japanese_sources_summary: '食べログ: よもだそば 銀座店、銀座4-3-2 銀座白亜ビル1F、松屋通り沿い、14席(カウンター)、毎日7:00〜22:30、2012年4月28日開店、公式サイト yomoda-soba.com。2026年10月の口コミ: よもだカレー720円(スパイシーでスープ状、トマトの隠し味)、ごぼう天そば620円(甘めの優しいつゆ)、大きなかき揚げそばと半カレーのセット、週替わりのしめじと舞茸の天ぷらそば、いなり、食券制ですぐ出てくる、外国人観光客で混雑、そばが伸びて天ぷらがしなしなだったとの声、10時開店と理解した客も。',
      confidence: 'medium', sources: [TB, R + 'B483276851/', R + 'B537783620/', R + 'B537392977/', R + 'B459290045/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; quick counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-3-2 銀座白亜ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目3番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483276851/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('よもだカレー', 'yomoda karee', 'Yomoda curry (spicy, soupy, Indian-style)', '¥720', 'Curry', 'ask', 'no', 'October 2026.', 'yomoda_curry'),
      it('ごぼう天そば', 'goboten soba', 'Burdock tempura soba', '¥620', 'Soba', 'no', 'no', 'October 2026.', 'goboten'),
      it('かき揚げそばと半カレーのセット', '', 'Large kakiage soba with half curry', '', 'Sets', 'no', 'no', 'October 2026.', 'kakiage_curry'),
    ] }, {
    cuisine: 'そばとインド風カレーの早い店・ごぼう天そば620円、よもだカレー720円・週替わり・カウンター14席',
    neighborhood: '銀座四丁目の松屋通り沿い、銀座白亜ビル1F。銀座駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。天ぷらそばとカレーです。',
    vegan_detail: 'ヴィーガンではありません。だしのつゆで、カレーも植物性とは書かれていません。',
    notes: '[そばとカレー・松屋通りの早いカウンター] そばとインド風カレーの組み合わせで知られるよもだそばの、カウンター14席の店で、2012年開店。食券を買って水を汲めば、すぐ料理が出てきます。2026年10月の注文は、トマトの隠し味のあるスパイシーでスープ状のよもだカレー(720円)、甘めの優しいつゆのごぼう天そば(620円)、大きなかき揚げそばと半カレーのセット、週替わりのしめじと舞茸の天ぷらそば、いなりなど。海外からの客で混むことが多く、そばが伸びて天ぷらがしなしなだったという声も。',
  });
}

// ================================================================ GINZA TAPPO
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13260835/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:45', '14:00'], D = ['18:00', '23:00'];
  put({
    id: 'tokyo_ginza_tappo_ginza8', name: 'GINZA TAPPO (ギンザ タッポ)', category: 'OMNI',
    lat: 35.668299, lng: 139.760715,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is a big salad with house dressing and pickles plus pasta or risotto; dinner courses of appetizers, pasta and meat. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: lampredotto (tripe) penne, meat courses.',
    hours_raw: 'Mon 18:00–23:00; Tue–Fri 11:45–14:00 and 18:00–23:00; Sat and holidays 17:00–22:00 (reserve by 14:00 that day); closed Sundays (Tabelog).',
    hours: { 0: day(D), 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(['17:00', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, YAD GINZA8 Bldg 6F — near Shimbashi and Ginza Stns',
    cuisine: 'Tuscan Italian with 200+ wines (Chianti Classico) · ¥1,400 pasta lunch with a big salad · ¥6,000 dinner course', cuisine_type: 'other',
    website: null, gmaps: gm('GINZA TAPPO 銀座8-7-16'), menu_url: null,
    notes: "[Italian · Tuscan food and 200 wines] A 16-seat Tuscan Italian on a sixth floor in Ginza 8-chōme ('tappo' means cork), open since 2021 after moving from Corridor-gai. The owner loves Chianti Classico, and the list runs past 200 wines, mostly Tuscan. Staff choose glasses to your taste. The weekday lunch is a regulars' favourite: a big salad of fresh vegetables with house dressing and pickles, a choice of about four pastas or risottos (penne with lampredotto and spinach was ¥1,400), a small dessert and ¥100 coffee. Dinner's ¥6,000 course brings three appetizers, a small pasta and meat, with à la carte add-ons such as tiramisu. A private room is next door.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 June 2021 (Tabelog); formerly on Corridor-gai (2026 review)', background: 'The owner is a Chianti Classico enthusiast (Tabelog listing), unnamed.', philosophy: null, specialty: 'Tuscan wine and cooking.',
      anecdotes: [
        { text: '"For lunch, I had the Penne with Lampredotto and Spinach for JPY 1400, plus an iced coffee for an additional JPY 100… the salad was abundant with fresh produce, homemade dressing, and pickles." — October 2026.', source: R + 'B441368329/' },
        { text: '"I chose the least expensive option at JPY 6000 per person… I requested the glass wine to be chosen for me, and the staff asked about my preferences." — August 2026.', source: R + 'B534768207/' },
      ],
      japanese_sources_summary: '食べログ: GINZA TAPPO(ギンザ タッポ)、銀座8-7-16 YAD GINZA8ビル6F、16席(カウンター3・テーブル7・個室6)、月18:00〜23:00、火〜金11:45〜14:00・18:00〜23:00、土祝17:00〜22:00(当日14時までの予約で営業)、日休、2021年6月4日開店。店の紹介: TAPPOはイタリア語でコルク、トスカーナ中心に200種以上のワイン、キャンティ・クラシコ好きのオーナー、おすすめコース6,000円(前菜3品・小さなパスタ・肉料理)。2026年の口コミ: 平日ランチはたっぷりのサラダ(自家製ドレッシングとピクルス)とパスタ、小さなデザート、ランプレドットとほうれん草のペンネ1,400円、アイスコーヒー+100円、パスタとリゾットは約4種、グラスワインは好みを聞いて選んでくれる、コリドー街にあった頃から通う常連、隣に貸切スペース。',
      confidence: 'medium', sources: [TB, R + 'B441368329/', R + 'B534768207/', R + 'B537501424/', R + 'B537875090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff pick wines to taste; book Saturdays by 14:00.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-7-16 YAD GINZA8ビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目7番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B441368329/', R + 'B534768207/'],
    price_note: 'Prices from August–October 2026 reviews; course from Tabelog.', last_checked: TODAY, items: [
      it('パスタランチ', 'pasuta ranchi', 'Pasta lunch with big salad and small dessert (e.g. lampredotto and spinach penne)', '¥1,400', 'Lunch', 'no', 'no', 'October 2026; coffee +¥100.', 'pasta_lunch'),
      it('おすすめコース', '', 'Course: 3 appetizers, small pasta, meat', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog; August 2026.', 'course'),
    ] }, {
    cuisine: '200種以上のワイン(キャンティ・クラシコ)とトスカーナ料理・たっぷりサラダ付きのパスタランチ1,400円・夜のコース6,000円',
    neighborhood: '銀座八丁目、YAD GINZA8ビル6F。新橋駅・銀座駅の近く',
    gf_detail: '要確認。ランチは自家製ドレッシングとピクルスのたっぷりサラダにパスタかリゾット、夜は前菜・パスタ・肉のコース。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ランプレドット(牛の胃)のペンネ、肉のコース。',
    notes: '[イタリアン・トスカーナ料理と200種のワイン] 銀座八丁目のビル6階、2021年にコリドー街から移った16席のトスカーナ料理店(タッポはイタリア語でコルク)。オーナーはキャンティ・クラシコ好きで、ワインはトスカーナ中心に200種以上、グラスは好みを聞いて選んでくれます。平日のランチは常連に人気で、新鮮な野菜に自家製ドレッシングとピクルスのたっぷりサラダ、約4種から選ぶパスタかリゾット(ランプレドットとほうれん草のペンネが1,400円)、小さなデザート、コーヒーは+100円。夜の6,000円のコースは前菜3品、小さなパスタ、肉料理で、ティラミスなどアラカルトの追加も。隣に貸切スペースもあります。',
  });
}

save();
