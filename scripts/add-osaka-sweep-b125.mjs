// Osaka sweep (2-mile circle around Dotonbori), batch 125 — mom / small-shop phase (all OMNI).
//   + 鮨 あまと 裏難波 (aged Edomae sushi on red-vinegar rice, ¥4,500 lunch omakase; by Kuromon Market, 2F)
//   + 鮨 滉心 (¥4,400 omakase ending in seafood shio ramen, two seatings; 3F, same building as MAREN Shinsaibashi)
//   + 鮨し禅 (¥18,000 aged-sushi course with drinks included; Higashi-Shinsaibashi 4F)
//   + じどりなべ三浦 (mizutaki of jidori chicken, chicken sashimi and courses; 5F, same building as Sarunokoshikake)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 125);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 あまと 裏難波
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149418/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://sushiamato.jp/';
  put({
    id: 'osaka_sushi_amato_ura_namba', name: '鮨 あまと 裏難波 (Sushi Amato Ura Nanba)', category: 'OMNI',
    lat: 34.6663, lng: 135.505777, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-marinated tuna and soy on the nigiri; red miso soup; chawanmushi with ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and shellfish throughout; shijimi soup; chawanmushi.',
    hours_raw: 'Daily 12:00–14:00 (last order food 13:00, drinks 13:45) and 16:00–23:00 (last order 22:30) (Tabelog). 10% service charge from 1 July 2026 (Tabelog). Lunch fills up; reserve ahead (October 2026). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: ALL(day(['12:00', '14:00'], ['16:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nipponbashi 1-19-6, Fukuki Bldg 2F — 2 min from Nipponbashi Stn, by Kuromon Market',
    cuisine: 'Aged Edomae sushi · lunch Tensho omakase 10 pieces ¥4,500: shijimi soup, otoro, six-day kombu-aged sea bream with sudachi salt, aged salmon, horse mackerel, scallop, marinated bluefin, chawanmushi with ponzu, squid, five-day aged yellowtail, salmon roe, eel, red miso soup, free oolong and green tea · Tensho omakase 15 pieces ¥6,800 · Ten Sho [Goku] omakase 15 pieces ¥8,300 (only at this shop): otoro and chutoro, kinmedai, kinki, sweet shrimp with kombu, snow crab, sea urchin, toro-taku roll, dessert · rice seasoned with red vinegar · sake incl. Mimuro Sugi · 15 hinoki counter seats',
    website: OWN, gmaps: gm('鮨 あまと 裏難波'), menu_url: null,
    notes: "[Sushi · aged Edomae sushi with a ¥4,500 lunch, by Kuromon Market] The second shop of Sushi Amato, open since July 2025 up a flight of stairs two minutes from Nipponbashi, with fifteen seats at a hinoki counter. The style is aged Edomae: sea bream aged six days in kombu with sudachi salt, yellowtail aged five, marinated bluefin, on slightly firm rice seasoned with red vinegar. Lunch is the deal: a ten-piece omakase (¥4,500) with shijimi soup, chawanmushi, red miso soup and free tea. In the evening, fifteen-piece courses run ¥6,800–8,300; the top one, only served here, adds kinmedai, kinki, snow crab and sea urchin. A 10% service charge applies from July 2026. Lunch is popular, so reserve.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2025 (Tabelog); the second shop of Sushi Amato (October 2026 review).', background: 'Aged Edomae sushi counter (Tabelog; 2026 reviews).', philosophy: 'Aging judged for each fish; sushi rice from a house blend of rice and red vinegar (October 2026 review).', specialty: 'Aged Edomae sushi omakase.',
      anecdotes: [
        { text: '"What left a lasting impression was the kombu-cured sea bream, aged for six days. Served with sudachi salt, it enhanced the natural flavors of the ingredient…" — October 2026, Tensho omakase 10 pieces ¥4,500.', source: R + 'B537285211/' },
        { text: '"The rice was cooked to a slightly firm texture, perfectly balancing with the toppings." — October 2026, Tensho omakase 15 pieces ¥6,800.', source: R + 'B538018674/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 あまと 裏難波、大阪市中央区日本橋1-19-6 福喜ビル 2F、日本橋駅から徒歩2分、御堂筋線なんば駅から徒歩7分、毎日12:00〜14:00 (L.O. 料理13:00、ドリンク13:45)・16:00〜23:00 (L.O. 22:30)、2026年7月1日からサービス料10%、カード・電子マネー・QR (Alipay、WeChat Pay を含む) 可、カウンター15席、2025年7月7日開店、公式サイトあり。口コミ(2026年10月): 黒門市場のそば、Sushi Amato の2号店、ヒノキのカウンター、熟成の江戸前鮨、昼の Tensho おまかせ10貫4,500円 (Shijimi のスープ、大トロ、6日熟成の昆布締めの鯛とすだち塩、熟成サーモン、アジ、ホタテ、漬けの本マグロ、ポン酢の茶碗蒸し、イカ、5日熟成のブリ、イクラ、ウナギ、赤だし、烏龍茶と緑茶飲み放題)、Tensho おまかせ15貫6,800円、ここだけの Ten Sho [Goku] おまかせ15貫8,300円 (大トロと中トロ、Kinmedai、Kinki、昆布の甘エビ、ズワイガニ、ウニ、トロたく巻き、デザート)、赤酢のシャリ、やや固めのご飯、日本酒 Mimuro Sugi、昼は人気で予約がおすすめ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B537198033/', R + 'B537285211/', R + 'B537667694/', R + 'B537711256/', R + 'B538018674/', R + 'B538051250/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; dislikes asked first (October 2026); cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-19-6 福喜ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目19番6号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537285211/', R + 'B538018674/', R + 'B538051250/'],
    price_note: 'Prices from October 2026 reviews; 10% service charge from July 2026.', last_checked: TODAY, items: [
      it('', '', 'Tensho omakase, 10 pieces (lunch)', '¥4,500', 'Courses', 'no', 'no', 'October 2026.', 'omakase_10'),
      it('', '', 'Tensho omakase, 15 pieces', '¥6,800', 'Courses', 'no', 'no', 'October 2026.', 'omakase_15'),
      it('', '', 'Ten Sho [Goku] omakase, 15 pieces (this shop only)', '¥8,300', 'Courses', 'no', 'no', 'October 2026.', 'goku_15'),
    ] }, {
    cuisine: '熟成の江戸前鮨・昼の Tensho おまかせ10貫4,500円: Shijimi のスープ、大トロ、6日熟成の昆布締めの鯛とすだち塩、熟成サーモン、アジ、ホタテ、漬けの本マグロ、ポン酢の茶碗蒸し、イカ、5日熟成のブリ、イクラ、ウナギ、赤だし、烏龍茶と緑茶は無料・Tensho おまかせ15貫6,800円・この店だけの Ten Sho [Goku] おまかせ15貫8,300円: 大トロと中トロ、Kinmedai、Kinki、昆布の甘エビ、ズワイガニ、ウニ、トロたく巻き、デザート・赤酢のシャリ・日本酒は Mimuro Sugi など・ヒノキのカウンター15席',
    neighborhood: '中央区日本橋1-19-6 福喜ビル 2F。日本橋駅から徒歩2分、黒門市場のそば',
    gf_detail: 'グルテンフリーではありません。漬けのマグロとにぎりの醤油、赤だし、ポン酢の茶碗蒸し。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、Shijimi のスープ、茶碗蒸し。',
    notes: '[寿司・黒門市場近く、熟成の江戸前鮨と4,500円の昼] Sushi Amato の2号店で、2025年7月開店、日本橋駅から2分の階段を上った2階、ヒノキのカウンター15席。熟成の江戸前で、昆布で6日熟成させた鯛にすだち塩、5日熟成のブリ、漬けの本マグロを、赤酢のやや固めのシャリで。お得なのは昼: おまかせ10貫(4,500円)にShijimi のスープ、茶碗蒸し、赤だし、お茶付き。夜は15貫のコースが6,800〜8,300円で、この店だけの最上のコースはKinmedai、Kinki、ズワイガニ、ウニが加わる。2026年7月からサービス料10%。昼は人気なので予約を。',
  });
}

// ================================================================ 鮨 滉心
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27153915/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_koshin_higashishinsaibashi', name: '鮨 滉心 (Sushi Koshin)', category: 'OMNI',
    lat: 34.673147, lng: 135.503229, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ramen noodles to finish; marinated tuna; soy on the nigiri.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood throughout; soft-shell turtle soup; seafood ramen; egg.',
    hours_raw: 'Daily 17:30–22:00 in two seatings, 17:30–19:30 and 20:00–22:00 (Tabelog). Omakase ¥4,400 is the only option; all-you-can-drink +¥2,200 (October 2026). Cards (VISA, Master, JCB) only; no e-money or QR (Tabelog). On 3F: take the emergency stairs from 2F; the door has no sign (October 2026).',
    hours: ALL(day(['17:30', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-17-5, Higashi-Shinsaibashi Blue Star Bldg 3F — 4 min from Shinsaibashi Stn',
    cuisine: 'Sushi omakase ¥4,400 · soft-shell turtle soup with mitsuba · rare katsuo with Ishigaki salt and pickled island shallots · four-day aged saba, kombu-cured suzuki, mizudako and its suckers, marinated tuna, vinegared sardine, nodoguro, saba bozushi, barracuda · red sea bream with grated daikon sauce · tuna and herring-roe hand roll · steamed anago · toro-taku roll, kanpyo roll, tamago · seafood shio ramen to finish, large, medium or small · all-you-can-drink +¥2,200 · 8 counter seats',
    website: null, gmaps: gm('鮨 滉心'), menu_url: null,
    notes: "[Sushi · ¥4,400 omakase that ends in seafood ramen, Higashi-Shinsaibashi] An eight-seat counter of the 881 Group, open since January 2026 on a hard-to-find third floor (take the emergency stairs from the second; the door has no sign). There's one course, ¥4,400, in two seatings at 17:30 and 20:00: soft-shell turtle soup, rare katsuo, then nigiri worked by aging, kombu-curing and vinegaring, such as four-day saba, kombu suzuki, sardine and nodoguro, plus a mackerel bozushi, steamed anago and a tuna and herring-roe hand roll. It finishes with a seafood shio ramen in the size you choose, then sweet tamago. All-you-can-drink is ¥2,200 more. Several diners rate the value outstanding. Lively, casual and good for a first sushi counter. Card only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 January 2026 (Tabelog); part of the 881 Group (October 2026 reviews).', background: 'Sushi counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Value sushi omakase ending in seafood ramen.',
      anecdotes: [
        { text: '"Each piece of sushi was crafted with unique techniques like aging, kombu marination, vinegar curing, and marination… To finish, we had seafood ramen, with options for large, medium, or small sizes… The salt-based broth was rich with seafood flavor." — October 2026, omakase ¥4,400.', source: R + 'B538064458/' },
        { text: '"The sushi here was of exceptionally high quality! You can really feel the attention to detail… The cost performance is outstanding." — October 2026.', source: R + 'B537322510/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 滉心、大阪市中央区東心斎橋1-17-5 東心斎橋ブルースタービル 3F、心斎橋駅から徒歩4分、毎日17:30〜22:00 (1部17:30〜19:30、2部20:00〜22:00)、カード (VISA、Master、JCB) 可、電子マネー・QR不可、カウンター8席、貸切可 (20名まで)、2026年1月5日開店。口コミ(2026年10月): 881 Group の店、おまかせ4,400円のみ、飲み放題+2,200円 (Sapporo Lager Akaboshiは2本まで)、すっぽんのスープと三つ葉、石垣島の塩と島らっきょうの漬物のカツオのたたき、4日熟成のサバ、昆布締めのスズキ、水ダコと吸盤、漬けマグロ、酢締めのイワシ、ノドグロ、サバの棒寿司、カマス、鯛の大根おろしソース、マグロと数の子の手巻き、蒸しアナゴ、かんぴょう巻き、玉子、トロたく巻き、締めは大中小を選べる魚介の塩ラーメン、2階から非常階段で3階、看板のない扉、コスパが良い、サプライズに対応、にぎやかで気軽。',
      confidence: 'medium', sources: [TB, R + 'B537224319/', R + 'B537322510/', R + 'B537397857/', R + 'B537971976/', R + 'B538064458/', R + 'B538073441/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed counter, recommended for a first sushi counter (October 2026); one set course.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-5 東心斎橋ブルースタービル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.673084, 135.503229); same building as MAREN Shinsaibashi (osaka_maren_shinsaibashi), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目17番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538064458/', R + 'B537971976/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (ends with seafood shio ramen)', '¥4,400', 'Courses', 'no', 'no', 'October 2026.', 'omakase'),
      it('', '', 'All-you-can-drink', '+¥2,200', 'Drinks', 'ask', 'ask', 'October 2026.', 'nomihodai'),
    ] }, {
    cuisine: '鮨のおまかせ4,400円・すっぽんのスープと三つ葉・石垣島の塩と島らっきょうの漬物で食べるカツオのたたき・4日熟成のサバ、昆布締めのスズキ、水ダコとその吸盤、漬けマグロ、酢締めのイワシ、ノドグロ、サバの棒寿司、カマス・鯛の大根おろしソース・マグロと数の子の手巻き・蒸しアナゴ・トロたく巻き、かんぴょう巻き、玉子・締めは大中小を選べる魚介の塩ラーメン・飲み放題+2,200円・カウンター8席',
    neighborhood: '中央区東心斎橋1-17-5 東心斎橋ブルースタービル 3F。心斎橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。締めのラーメンの麺、漬けマグロ、にぎりの醤油。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、すっぽんのスープ、魚介ラーメン、玉子。',
    notes: '[寿司・東心斎橋、魚介ラーメンで締める4,400円のおまかせ] 881 Group のカウンター8席の店で、2026年1月開店、見つけにくい3階 (2階から非常階段を上り、看板のない扉を開ける)。コースは4,400円のひとつだけで、17:30と20:00の二部制: すっぽんのスープ、カツオのたたき、熟成、昆布締め、酢締めで仕立てたにぎり (4日熟成のサバ、昆布締めのスズキ、イワシ、ノドグロなど)、サバの棒寿司、蒸しアナゴ、マグロと数の子の手巻き。締めは好きな量の魚介の塩ラーメン、最後に甘い玉子。飲み放題は+2,200円。コスパが抜群という声。にぎやかで気軽、初めてのカウンター鮨にも。カードのみ。',
  });
}

// ================================================================ 鮨し禅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152697/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '20:00'], ['20:30', '23:00']);
  put({
    id: 'osaka_sushi_zen_higashishinsaibashi', name: '鮨し禅 (Sushi Zen)', category: 'OMNI',
    lat: 34.672951, lng: 135.503651, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated tuna and soy on the nigiri; saikyo miso; fried roll.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood throughout; chawanmushi with mascarpone; milk pudding.',
    hours_raw: 'Daily two seatings, from 18:00 and from 20:30 (until 23:00); lunch from 12:00 on weekends and public holidays; closing days not fixed; reservations by the day before (Tabelog). 5% service charge (Tabelog). Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: ALL(D), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-15, Arusu Bldg 4F — 5 min from Shinsaibashi Stn',
    cuisine: 'Aged sushi course with drinks · ¥18,000 course, alcohol or soft drinks included: four-day aged sea bream and bonito sashimi, house sesame tofu, "carbonara" chawanmushi with mascarpone, yuba and fresh cream, Densuke anago shabu-shabu, saikyo-grilled aburabouzu, abalone liver sauce · nigiri: chutoro, marinated bluefin, otoro, kombu-cured kisu, sweet shrimp, squid, mejika · uni don with purple and bafun uni · toro-taku, fried mehikari roll, eel · milk pudding · tuna from Teramoto Shoten · red-vinegar rice · 10 counter seats',
    website: null, gmaps: gm('鮨し禅'), menu_url: null,
    notes: "[Sushi · ¥18,000 aged-sushi course with drinks included, Higashi-Shinsaibashi] A calm ten-seat counter on a fourth floor, open since November 2025, with one all-in course (¥18,000) that includes alcohol or soft drinks. The rice is seasoned firmly with red vinegar and carries aged toppings, such as four-day sea bream, kombu-cured kisu and tuna from the Osaka supplier Teramoto Shoten, served as chutoro, marinated bluefin and otoro. Between pieces come creative plates: a mascarpone chawanmushi that eats like carbonara, Densuke anago shabu-shabu, abalone liver sauce and an uni don with two kinds of sea urchin. A fried mehikari roll and milk pudding close it out. Two seatings nightly, weekend lunch, reserve by the day before; 5% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 November 2025 (Tabelog)', background: 'Sushi counter (Tabelog; 2025–2026 reviews).', philosophy: 'Aged toppings on red-vinegar rice; tuna from Teramoto Shoten (July 2026 review).', specialty: 'Aged sushi course with drinks included.',
      anecdotes: [
        { text: '"The sushi rice, made with a tangy red vinegar base, perfectly complements the well-aged toppings… the tuna here is sourced from Teramoto Shoten, a well-known supplier in Osaka." — July 2026.', source: R + 'B532177061/' },
        { text: '"The chawanmushi with mascarpone cheese had a delightful Western twist… The highlight was the extravagant uni don topped with both purple and bafun uni!" — August 2026, ¥18,000 course with all-you-can-drink.', source: R + 'B533406508/' },
      ],
      japanese_sources_summary: '食べログ: 鮨し禅、大阪市中央区東心斎橋1-14-15 アルスビル 4F、心斎橋駅から徒歩5分、毎日18:00〜と20:30〜の二部制 (〜23:00)、土日祝は12:00から昼営業、定休日不定、予約は前日まで、サービス料5%、カード・電子マネー・QR (Alipay、WeChat Pay を含む) 可、カウンター10席、2025年11月18日開店。口コミ(2025年11月〜2026年10月): 酒かソフトドリンクが込みのコース18,000円、4日熟成の鯛とカツオの刺身、自家製ごま豆腐、マスカルポーネのカルボナーラ風茶碗蒸し、湯葉と生クリーム、Densuke アナゴのしゃぶしゃぶ、Aburabouzuの西京焼き、アワビの肝ソース、中トロ、漬けの本マグロ、大トロ、昆布締めのキス、甘エビ、紫ウニとバフンウニのウニ丼、トロたく、Mehikariの揚げ巻き、ウナギ、ミルクプリン、赤酢のシャリ、大阪の Teramoto Shoten のマグロ、落ち着いたカウンター、料理の間合いと気配り。',
      confidence: 'medium', sources: [TB, R + 'B518069443/', R + 'B532177061/', R + 'B533406508/', R + 'B535712662/', R + 'B536218974/', R + 'B536931545/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm counter; attentive staff (October 2026); reserve by the day before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-15 アルスビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番15号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533406508/', R + 'B536931545/'],
    price_note: 'Prices from August–October 2026 reviews; 5% service charge.', last_checked: TODAY, items: [
      it('', '', 'Course with drinks included (alcohol or soft drinks)', '¥18,000', 'Courses', 'no', 'no', 'August–October 2026.', 'course'),
    ] }, {
    cuisine: '飲み物込みの熟成鮨のコース・18,000円のコース、酒かソフトドリンク込み: 4日熟成の鯛とカツオの刺身、自家製ごま豆腐、マスカルポーネのカルボナーラ風茶碗蒸し、湯葉と生クリーム、Densuke アナゴのしゃぶしゃぶ、Aburabouzuの西京焼き、アワビの肝ソース・にぎり: 中トロ、漬けの本マグロ、大トロ、昆布締めのキス、甘エビ、イカ、Mejika・紫ウニとバフンウニのウニ丼・トロたく、Mehikariの揚げ巻き、ウナギ・ミルクプリン・マグロは Teramoto Shoten から・赤酢のシャリ・カウンター10席',
    neighborhood: '中央区東心斎橋1-14-15 アルスビル 4F。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。漬けのマグロとにぎりの醤油、西京味噌、揚げ巻き。',
    vegan_detail: 'ヴィーガンではありません。魚介ばかり、マスカルポーネの茶碗蒸し、ミルクプリン。',
    notes: '[寿司・東心斎橋、飲み物込み18,000円の熟成鮨コース] 4階にある落ち着いたカウンター10席の店で、2025年11月開店、酒かソフトドリンクが込みのコース(18,000円)ひとつ。赤酢のしっかりしたシャリに熟成のネタ: 4日熟成の鯛、昆布締めのキス、大阪の Teramoto Shoten のマグロを中トロ、漬け、大トロで。合間に創作の皿: カルボナーラのようなマスカルポーネの茶碗蒸し、Densuke アナゴのしゃぶしゃぶ、アワビの肝ソース、2種のウニのウニ丼。Mehikariの揚げ巻きとミルクプリンで締め。夜は二部制、週末は昼も、予約は前日まで。サービス料5%。',
  });
}

// ================================================================ じどりなべ三浦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27030136/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'osaka_jidori_nabe_miura_higashishinsaibashi', name: 'じどりなべ三浦 (Jidori Nabe Miura)', category: 'OMNI',
    lat: 34.673404, lng: 135.502683, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta; baguette; chicken ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth hot pot; chicken sashimi; chicken prosciutto; cheese.',
    hours_raw: 'Mon–Sat and public holidays 17:30–23:00; closed Sun, and on Mondays that are public holidays (Tabelog). Cards accepted; no e-money or QR (Tabelog). Run by three staff (December 2025).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-27, Nippo New Columbus Bldg 5F — 2–3 min from Shinsaibashi Stn',
    cuisine: 'Mizutaki (jidori chicken hot pot) · courses: Hashi (smallest), Sai (with chicken sashimi) · mizutaki of Gunma black chicken: a rich but not heavy broth, soft-cooked Chinese cabbage, grated yam, house yuzu-kosho; staff cook the pot · finish: broth poured over rice, zosui or tea rice · chicken starters: peperoncino, tsukune hamburger, chicken prosciutto · chicken shabu-shabu · pasta with lettuce · baguette with chicken prosciutto and cheese · salt-grilled chicken neck · chicken ponzu · dessert · 4 counter seats and 3 tables (2 low kotatsu tables)',
    website: null, gmaps: gm('じどりなべ三浦'), menu_url: null,
    notes: "[Chicken · mizutaki hot pot of jidori chicken in Higashi-Shinsaibashi] A calm, Japanese-style mizutaki specialist on the fifth floor of a bar building just off the arcade from Shinsaibashi, with a short counter, low kotatsu tables and three staff. The courses start with chicken plates (peperoncino, a tsukune hamburger, chicken prosciutto, and sashimi on the Sai course) before the hot pot, which staff cook for you. Gunma black chicken is tender in a rich but not heavy broth, with soft cabbage, grated yam and house yuzu-kosho. Finish with broth poured over rice, zosui or tea rice. One diner liked the pasta with lettuce enough to want seconds. Courses run from the small Hashi upward. Seen off at the elevator. Cards accepted; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Mizutaki specialist (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Mizutaki of jidori chicken; chicken courses.',
      anecdotes: [
        { text: '"The main dish, Mizutaki, features a broth that balances richness without being overpowering… The chicken comes from Gunma, specifically the black chicken. Despite being free-range, the meat is wonderfully tender." — January 2025.', source: R + 'B498490655/' },
        { text: '"Despite the hot summer, I opted for the chicken hot pot, and the chicken broth was simply outstanding. I finished off with a tea rice dish…" — August 2026.', source: R + 'B533465001/' },
      ],
      japanese_sources_summary: '食べログ: じどりなべ三浦、大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 5F、心斎橋駅から徒歩2〜3分、月〜土・祝 17:30〜23:00、日休み、祝日の月曜休み、カード可、電子マネー・QR不可、20席 (カウンター4、テーブル3、うち2卓は小上がりの掘りごたつ)。口コミ(2025年1月〜2026年10月): 水炊き専門、群馬の黒い地鶏、やわらかい、濃厚だが重すぎないスープ、柔らかく煮た白菜、とろろ、自家製の柚子胡椒、ご飯にスープをかける締め、雑炊、茶漬け、ペペロンチーノ、つくねハンバーグ、鶏の生ハム、Sai コースの鶏刺し、鶏しゃぶ、鍋は店の人が作る、一番小さい Hashi コースと鶏ポン酢、レタス入りのパスタ、バゲットと鶏の生ハムとチーズ、首肉の塩焼き、デザート、スタッフ3人、エレベーターまで見送り、和の落ち着いた雰囲気、バーや飲食店の入るビル、料理を出す間合い。',
      confidence: 'medium', sources: [TB, R + 'B498490655/', R + 'B499431449/', R + 'B514765233/', R + 'B519153702/', R + 'B533465001/', R + 'B537502459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook the hot pot; warm send-off (2025–2026); cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-27 日宝ニューコロンブスビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.67334, 135.502683); same building as Sarunokoshikake (osaka_iketako_sarunokoshikake, 7F), pin offset ~7 m north so the two do not stack; GSI 大阪府大阪市中央区東心斎橋一丁目17番27号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498490655/', R + 'B499431449/', R + 'B519153702/'],
    price_note: 'Course prices not given in reviews; JPY 5,000–7,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Hashi course (smallest)', '', 'Courses', 'no', 'no', 'December 2025.', 'hashi'),
      it('', '', 'Sai course (with chicken sashimi)', '', 'Courses', 'no', 'no', 'January 2025.', 'sai'),
      it('', '', 'Mizutaki', '', 'Hot pot', 'ask', 'no', 'Ask about the broth and yuzu-kosho. 2025–2026.', 'mizutaki'),
      it('', '', 'Chicken ponzu', '', 'À la carte', 'no', 'no', 'December 2025.', 'ponzu'),
      it('', '', 'Salt-grilled chicken neck', '', 'À la carte', 'ask', 'no', 'January 2025.', 'seseri'),
      it('', '', 'Baguette with chicken prosciutto and cheese', '', 'À la carte', 'no', 'no', 'January 2025.', 'baguette'),
    ] }, {
    cuisine: '水炊き (地鶏の鍋)・コース: Hashi (一番小さい)、Sai (鶏刺し付き)・群馬の黒い地鶏の水炊き: 濃厚だが重すぎないスープ、柔らかく煮た白菜、とろろ、自家製の柚子胡椒、鍋は店の人が作る・締め: ご飯にスープをかける、雑炊、茶漬け・鶏の前菜: ペペロンチーノ、つくねハンバーグ、鶏の生ハム・鶏しゃぶ・レタス入りのパスタ・鶏の生ハムとチーズのバゲット・首肉の塩焼き・鶏ポン酢・デザート・カウンター4席とテーブル3卓 (うち2卓は掘りごたつ)',
    neighborhood: '中央区東心斎橋1-17-27 日宝ニューコロンブスビル 5F。心斎橋駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。パスタ、バゲット、鶏ポン酢。',
    vegan_detail: 'ヴィーガンではありません。鶏のスープの鍋、鶏刺し、鶏の生ハム、チーズ。',
    notes: '[鶏料理・東心斎橋、地鶏の水炊き] 心斎橋から商店街を少し入った、バーの入るビルの5階にある和の落ち着いた水炊き専門店で、短いカウンターと掘りごたつのテーブル、スタッフは3人。コースは鶏の前菜 (ペペロンチーノ、つくねハンバーグ、鶏の生ハム、Sai コースには鶏刺し) から鍋へ、鍋は店の人が作ってくれる。群馬の黒い地鶏は柔らかく、濃厚だが重すぎないスープに柔らかな白菜、とろろ、自家製の柚子胡椒。締めはご飯にスープをかけるか、雑炊か茶漬け。レタス入りのパスタをおかわりしたくなったという声も。コースは小さな Hashi から。帰りはエレベーターまで見送り。カード可、日曜休み。',
  });
}

save();
