// Ginza Station half-mile sweep (805 m), batch 42 — the last small Japanese candidates in the Tabelog crawl (all OMNI).
//   + 銀座すし嘉 はなれ (annex of 銀座すし嘉, opened 3 October 2022; red-vinegar rice)
//   + 鮨まつもと 本店 (moved from Akasaka to Ginza, opened 1 March 2026; head chef Otani)
//   + てんぷら銀座天亭 (1986; founder romanized Koeda on Tabelog / Koshida in a review, now run by apprentice Kenichi Chiba)
//   + 鉄板懐石 ふく (2016; sister restaurant of "Aya")
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const SUSHI_GF = 'Ask. Edomae sushi omakase; no source describes the soy, nikiri or tsume ingredients or a gluten-free option.';
const SUSHI_GF_JA = '要確認。江戸前鮨のおまかせ。醤油・煮切り・ツメの原材料やグルテンフリーの対応は書かれていません。';

// ================================================================ 銀座すし嘉 はなれ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13276796/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['12:00', '14:00'], ['18:00', '21:30']);
  put({
    id: 'tokyo_ginza_sushiyoshi_hanare', name: '銀座すし嘉 はなれ (Ginza Sushi Yoshi Hanare)', category: 'OMNI',
    lat: 35.670738, lng: 139.763016,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: SUSHI_GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Mon–Sat 12:00–14:00 and 18:00–21:30; closed Sundays (Tabelog). Cards accepted.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme on Nishi-Gobangai-dōri, Ginza Takahashi Bldg 2F — 2 min from Ginza Stn',
    cuisine: 'Edomae sushi on red-vinegar rice · annex of 銀座すし嘉 · counter and a private counter room for up to seven', cuisine_type: 'sushi',
    website: null, gmaps: gm('銀座すし嘉 はなれ 銀座6-7-4'), menu_url: null,
    notes: "[Sushi · the すし嘉 annex] The 'hanare' (annex) of 銀座すし嘉, opened in October 2022 on the second floor of a building on Nishi-Gobangai-dōri, with a counter and a private counter room for up to seven. The rice is seasoned with red vinegar. In 2026 diners describe first bonito with nori soy sauce, fire-seared firefly squid, hiragai, marinated akami, seared kinmedai, aged Ishigaki sea bream and Ōma tuna. A young chef explains each fish and asks how much rice you want. The lobby before lunch opening is cramped, and many guests are from overseas. Budget about ¥10,000–15,000 at lunch and ¥20,000–30,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 October 2022 as the annex of 銀座すし嘉 (Tabelog)', background: 'No source read names the chef; a 2026 diner describes a young chef.', philosophy: null, specialty: 'Red-vinegar nigiri; marinated akami.',
      anecdotes: [
        { text: '"The young chef skillfully prepared each piece of sushi with great care … they even asked about my preference for the size of the rice." — October 2026.', source: R + 'B537485387/' },
        { text: '"The private counter can accommodate up to seven guests, creating a very special atmosphere for our lunch course." — April 2026.', source: R + 'B526125540/' },
      ],
      japanese_sources_summary: '食べログ: 銀座すし嘉 はなれ、銀座6-7-4 銀座タカハシビル2F、銀座駅から徒歩2分、16席・個室(4名・6名、カウンター個室は4〜7名)、月〜土12:00〜14:00・18:00〜21:30、日休、2022年10月3日開店、カード可、予算夜2〜3万円。2026年の口コミ: 赤酢のシャリ、初鰹の海苔醤油、炙り蛍烏賊、平貝、ヅケ、炙り金目鯛、熟成した石垣鯛、大間の鮪、若い大将がシャリの量を聞いてくれる、海外客も多い。',
      confidence: 'low', sources: [TB, R + 'B526125540/', R + 'B527994405/', R + 'B535397481/', R + 'B537485387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small lobby; the chef adjusts rice size on request. Private counter room bookable.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'First bonito served with nori soy sauce.', source: R + 'B527994405/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Rice portion adjusted to preference.', source: R + 'B537485387/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-7-4 銀座タカハシビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目7番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B526125540/'],
    price_note: 'Tabelog budget: dinner ¥20,000–30,000.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase (lunch and dinner)', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '赤酢のシャリの江戸前鮨・銀座すし嘉のはなれ・最大7名のカウンター個室',
    neighborhood: '銀座六丁目の西五番街通り、銀座タカハシビル2F。銀座駅から徒歩2分',
    gf_detail: SUSHI_GF_JA, vegan_detail: 'ヴィーガンではありません。魚介のおまかせです。',
    notes: '[鮨・すし嘉のはなれ] 銀座すし嘉の「はなれ」として2022年10月に開店、西五番街通りのビル2階でカウンターと最大7名のカウンター個室。シャリは赤酢。2026年の口コミでは、初鰹の海苔醤油、炙り蛍烏賊、平貝、ヅケ、炙り金目鯛、熟成した石垣鯛、大間の鮪など。若い大将が一貫ずつ説明し、シャリの量も聞いてくれます。昼の開店前はエレベーター前が狭く混み合い、海外客も多数。予算は昼1〜1.5万円、夜2〜3万円ほど。',
  });
}

// ================================================================ 鮨まつもと 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13319302/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:00', '23:00']), we = day(['11:30', '14:30'], ['16:00', '23:00']);
  put({
    id: 'tokyo_sushi_matsumoto_honten_ginza', name: '鮨まつもと 本店 (Sushi Matsumoto Honten)', category: 'OMNI',
    lat: 35.66856, lng: 139.763028,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: SUSHI_GF,
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of seafood nigiri with egg dishes such as chawanmushi.',
    hours_raw: 'Weekdays 11:30–14:30 and 17:00–23:00; weekends and holidays 11:30–14:30 and 16:00–23:00; closing days vary (Tabelog). 10% service charge. Cards and Rakuten Pay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme near GINZA SIX, Dai-go Taiyō Bldg 8F — 5 min from Ginza or Shimbashi Stn',
    cuisine: 'Edomae sushi, moved from Akasaka in 2026 · ¥11,000 omakase nigiri course · counter and private rooms', cuisine_type: 'sushi',
    website: null, gmaps: gm('鮨まつもと 本店 銀座7-10-8 第五太陽ビル'), menu_url: null,
    notes: "[Sushi · Akasaka's Matsumoto, now in Ginza] Sushi Matsumoto moved from Akasaka to the eighth floor of a Ginza 7-chōme building near GINZA SIX and opened here on 1 March 2026. Reviewers say Chef Otani, formerly of Sushi Otani in Akasaka, now heads the counter. Tabelog calls the style 'Otani-mae', inheriting and going beyond the old Edo style. The omakase nigiri course is ¥11,000 at lunch and dinner. In September 2026 it opened with junsai gazpacho, iwamozuku and Tosa-style kinshi-uri, then nigiri. Diners also praise a pumpkin chawanmushi and fatty tuna with salt. There are counter seats and private rooms for two or four, and staff set a place for a left-handed guest. Drinks such as beer and highballs are ¥1,100. A 10% service charge applies.",
    chef_bio: { chef_name: 'Chef Otani (head chef, per 2026 reviews)', roles: ['head chef'], origin: 'Relocated from Akasaka; opened in Ginza 1 March 2026 (Tabelog)', background: 'Reviewers say the former chef of Sushi Otani in Akasaka now leads the counter.', philosophy: '"Inheriting and surpassing tradition, a new Edo-style that customers call \'Otani-mae\'." (Tabelog shop text)', specialty: 'Omakase nigiri; fatty tuna with salt.',
      anecdotes: [
        { text: '"Sushi Matsumoto has relocated from Akasaka to Ginza. I was excited to visit after hearing that Chef Otani from Sushi Otani in Akasaka is now the head chef here!" — September 2026.', source: R + 'B535569411/' },
        { text: '"As I am left-handed, they kindly arranged my setting accordingly." — September 2026.', source: R + 'B536485664/' },
      ],
      japanese_sources_summary: '食べログ: 鮨まつもと 本店、銀座7-10-8 第五太陽ビル802、銀座駅・新橋駅から徒歩5分、17席(カウンターと個室2名・4名)、平日11:30〜14:30・17:00〜23:00、土日祝は夜16:00〜、不定休、2026年3月1日開店、サービス料10%、カード・楽天ペイ可、「Otani-mae」(英文の店舗紹介)。2026年の口コミ: 赤坂から銀座へ移転、赤坂の Sushi Otani の Otani 氏が大将(英文の口コミ)、おまかせ握りコース11,000円(昼夜)、蓴菜のガスパチョ・岩もずく・土佐酢の金糸瓜、南瓜の茶碗蒸し、トロの塩、ビール・ハイボール1,100円、左利きに配慮。',
      confidence: 'low', sources: [TB, R + 'B535569411/', R + 'B536485664/', R + 'B524812907/', R + 'B527100227/', R + 'B537663658/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed, younger crowd; private rooms bookable. 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Place setting arranged for a left-handed guest (September 2026).', source: R + 'B536485664/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-10-8 第五太陽ビル 802',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened in Ginza March 2026; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目10番8号 (go) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524812907/', R + 'B535569411/'],
    price_note: 'Course price from September 2026 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('おまかせ握りコース', 'omakase nigiri koosu', 'Omakase nigiri course with three appetizers', '¥11,000', 'Courses', 'ask', 'no', '2026.', 'omakase'),
    ] }, {
    cuisine: '2026年に赤坂から移転した江戸前鮨・おまかせ握りコース11,000円・カウンターと個室',
    neighborhood: '銀座七丁目、GINZA SIX近くの第五太陽ビル8F。銀座駅・新橋駅から徒歩5分',
    gf_detail: SUSHI_GF_JA, vegan_detail: 'ヴィーガンではありません。魚介の握りと茶碗蒸しなどのおまかせです。',
    notes: '[鮨・赤坂のまつもとが銀座へ] 鮨まつもとが赤坂から銀座七丁目のビル8階へ移り、2026年3月1日に開店。英文の口コミによれば、赤坂の Sushi Otani の Otani 氏が大将を務めます。食べログでは伝統を受け継ぎ越える新しい江戸前「Otani-mae」と紹介。おまかせ握りコースは昼夜とも11,000円で、2026年9月は蓴菜のガスパチョ、岩もずく、土佐酢の金糸瓜から握りへ。南瓜の茶碗蒸しやトロの塩も好評。カウンターと2名・4名の個室があり、左利きの客に合わせて箸を置いてくれたとの声も。ビールやハイボールは1,100円。サービス料10%。',
  });
}

// ================================================================ てんぷら銀座天亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002621/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '15:00'], ['17:30', '21:30']);
  put({
    id: 'tokyo_tempura_ginza_tentei', name: 'てんぷら銀座天亭 (Tempura Ginza Tentei)', category: 'OMNI',
    lat: 35.669009, lng: 139.76129,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Edomae tempura in a "thick yet light" wheat batter, fried in pure sesame oil, and tendon with sweet sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses and bowls of shrimp, kisu and other seafood tempura alongside vegetables, with red miso soup.',
    hours_raw: 'Tue–Sat 11:30–15:00 (L.O. 14:30) and 17:30–21:30 (L.O. 21:00); holidays lunch only; closed Sundays and Mondays (Tabelog). One drink per person at dinner. Cards incl. UnionPay accepted.',
    hours: { 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Shimbashi Kaikan B1F — 4–5 min from Shimbashi or Ginza Stn',
    cuisine: 'Edomae tempura since 1986 in pure sesame oil · tendon from ¥3,850 at lunch · counter courses', cuisine_type: 'tempura',
    website: null, gmaps: gm('てんぷら銀座天亭 銀座8-6-3 新橋会館'), menu_url: null,
    notes: "[Tempura · forty years in Ginza 8-chōme] A basement tempura restaurant founded on 24 July 1986, with ten counter seats and two tables. Its Tabelog text says the founder, the late Yoshinori Koeda, trained two veteran chefs who carry it on. A 2026 review romanizes the founder as Koshida, from Tempura Ippon Honten, and says the restaurant is now run by a long-time apprentice, Kenichi Chiba. The tempura is Edomae style in pure sesame oil, with a batter 'thick yet light' so you taste both the ingredient and the coating. Lunch is mostly courses, but there are tendon bowls (¥3,850 with tax in October 2026), heaped with shrimp, kisu and a big asparagus spear in an elegant, lightly sweet sauce, and a kakiage bowl to finish a course. Dinner courses include the 'Sakura' course, and one drink per person is asked.",
    chef_bio: { chef_name: 'Kenichi Chiba (per a 2026 review)', roles: ['chef'], origin: 'Founded 24 July 1986 (Tabelog)', background: 'The founder (romanized Koeda on Tabelog, Koshida in a review) came from Tempura Ippon Honten; the restaurant is carried on by chefs the founder trained.', philosophy: '"Our batter is designed to be \'thick yet light,\' allowing you to enjoy the deliciousness of the ingredients along with the flavor of the batter." (Tabelog shop text)', specialty: 'Sesame-oil Edomae tempura; tendon.',
      anecdotes: [
        { text: '"Founded in 1986 by Yoshinori Koshida, who hails from the renowned Tempura Ippon Honten, this restaurant is now run by Kenichi Chiba, a long-time apprentice of Koshida." — October 2026.', source: R + 'B537908835/' },
        { text: '"The bowl was piled high with shrimp, kisu (Japanese whiting)…" — October 2026, a ¥3,850 tendon.', source: R + 'B537422318/' },
      ],
      japanese_sources_summary: '食べログ: てんぷら銀座天亭、銀座8-6-3 新橋会館B1F、新橋駅・銀座駅から徒歩4〜5分、18席(カウンター10・テーブル2)、火〜土11:30〜15:00・17:30〜21:30、祝日は昼のみ、日月休、1986年7月24日開店、夜はワンドリンク制、カード可、店舗紹介: 故・創業者(英文表記 Yoshinori Koeda)のもとで修業した二人の職人、「厚めで軽い」衣、全国から選ぶ食材。2026年10月の口コミ: 創業者は Tempura Ippon Honten 出身(英文表記 Koshida)、現在は弟子の Kenichi Chiba、純正胡麻油の江戸前天ぷら、天丼税込3,850円(海老・鱚・アスパラ)、桜コース、締めのかき揚げ丼、赤だし。',
      confidence: 'medium', sources: [TB, R + 'B537908835/', R + 'B537422318/', R + 'B537875001/', R + 'B537604059/', R + 'B537262343/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats watch the fryer; one drink per person at dinner.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Wheat-batter tempura fried in pure sesame oil.', source: R + 'B537908835/' }], soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Seafood and vegetable tempura fried in the same service.', source: R + 'B537422318/' }], staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-6-3 新橋会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目6番3号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537422318/', R + 'B537908835/'],
    price_note: 'Tendon price from an October 2026 review (tax included).', last_checked: TODAY, items: [
      it('天丼', 'tendon', 'Tendon: shrimp, kisu, asparagus', '¥3,850', 'Rice bowls', 'no', 'no', '2026.', 'tendon'),
      it('桜コース', 'sakura koosu', 'Sakura tempura course', '', 'Courses', 'no', 'no', '', 'sakura_course'),
      it('かき揚げ丼', 'kakiage don', 'Kakiage bowl (course finale)', '', 'Rice bowls', 'no', 'no', '', 'kakiage_don'),
    ] }, {
    cuisine: '1986年創業の純正胡麻油の江戸前天ぷら・昼の天丼3,850円から・カウンターのコース',
    neighborhood: '銀座八丁目、新橋会館B1F。新橋駅・銀座駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではありません。「厚めで軽い」小麦の衣を純正胡麻油で揚げる江戸前天ぷらと、甘めのたれの天丼。',
    vegan_detail: 'ヴィーガンではありません。海老や鱚などの魚介の天ぷらと野菜を合わせたコースや丼、赤だし。',
    notes: '[天ぷら・銀座八丁目で40年] 1986年7月24日創業、カウンター10席とテーブル2卓の地下の天ぷら店。食べログの店舗紹介によれば、故・創業者(英文表記 Yoshinori Koeda)のもとで修業した二人の職人が味を受け継ぎます。2026年の英文の口コミでは創業者を Tempura Ippon Honten 出身の Koshida とし、今は長年の弟子 Kenichi Chiba が切り盛りしているとのこと。純正胡麻油で揚げる江戸前で、衣は「厚めで軽い」と、素材と衣の両方を味わわせる考え方。昼はコースが中心ですが天丼もあり(2026年10月で税込3,850円)、海老・鱚・大きなアスパラが盛られ、たれは上品でほどよい甘さ。コースの締めにかき揚げ丼も。夜は「桜」などのコースで、ワンドリンク制。',
  });
}

// ================================================================ 鉄板懐石 ふく
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13204640/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_teppan_kaiseki_fuku_ginza', name: '鉄板懐石 ふく (Teppan Kaiseki Fuku)', category: 'OMNI',
    lat: 35.670826, lng: 139.766624,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki appetizers, teppan seafood and Wagyu with sauces, eel chawanmushi with sauce, and clay-pot rice; no source describes soy or wheat use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan courses of seafood, A5 Wagyu, Ise lobster and abalone, with eel chawanmushi.',
    hours_raw: 'Daily 11:00–15:00 (food L.O. 14:00) and 17:30–22:00 (food L.O. 20:30); closed irregularly and 31 Dec–5 Jan (Tabelog). Cards, e-money and QR accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Zenrin Bldg 4F — 1 min from Higashi-Ginza Stn, 2 min from Ginza Stn A7',
    cuisine: 'Teppan kaiseki · kaiseki appetizers then teppan seafood and Wagyu · ¥5,000 lunch course', cuisine_type: 'kaiseki',
    website: null, gmaps: gm('鉄板懐石 ふく 銀座4-8-11 善隣ビル'), menu_url: null,
    notes: "[Teppan kaiseki · sister of Aya] A 16-seat teppan restaurant in Ginza 4-chōme, opened in December 2016 as a sister to the Japanese restaurant Aya. It has eight counter seats around the teppan, a tatami room and a semi-private table room. Courses pair kaiseki appetizers with teppan cooking of A5 Wagyu, live Ise lobster and abalone. The 'Kiri' lunch course was ¥5,000 in August 2026: five kaiseki appetizers, teppan seafood, eel chawanmushi with sauce, domestic beef, clay-pot corn rice, red miso soup and pickles, and three desserts. Diners enjoy the staff's jokes as they introduce each dish, and the ginger-and-edamame rice. Dinner courses with abalone and premium Wagyu run about ¥20,000–30,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2016 as a sister restaurant of Aya (Tabelog)', background: 'Part of the Aya group; no source read names the chef.', philosophy: null, specialty: 'Teppan Wagyu; clay-pot rice.',
      anecdotes: [
        { text: '"I made a reservation for the Kiri Lunch Course (JPY 5000) on Tabelog." — August 2026.', source: R + 'B534993780/' },
        { text: '"The staff were all very attentive, sharing jokes while introducing the dishes." — June 2026.', source: R + 'B531644845/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板懐石 ふく、銀座4-8-11 善隣ビル4F、東銀座駅から1分・銀座駅A7出口から2分、16席(カウンター8・座敷・半個室)、毎日11:00〜15:00・17:30〜22:00、不定休・年末年始、2016年12月15日開店、和食「Aya」の姉妹店(英文表記)、懐石とA5和牛・活伊勢海老・鮑の鉄板。2026年の口コミ: 「桐」ランチコース5,000円(八寸5種、鉄板の魚介、鰻の茶碗蒸し、国産牛、土鍋のとうもろこしご飯、赤だしと香の物、甘味3種)、生姜と枝豆のご飯、冗談を交えた接客、夜は鮑や和牛で2〜3万円。',
      confidence: 'low', sources: [TB, R + 'B534993780/', R + 'B531644845/', R + 'B535741430/', R + 'B534002851/', R + 'B530500574/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter around the teppan, plus tatami and semi-private rooms; good-value lunch courses.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-8-11 善隣ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目8番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534993780/'],
    price_note: 'Lunch course price from an August 2026 review.', last_checked: TODAY, items: [
      it('桐ランチコース', 'kiri ranchi koosu', '"Kiri" lunch course: kaiseki appetizers, teppan seafood and beef, clay-pot rice', '¥5,000', 'Lunch', 'ask', 'no', '2026.', 'kiri_lunch'),
      it('夜のコース', 'yoru no koosu', 'Dinner teppan kaiseki (abalone, Wagyu)', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '鉄板懐石・懐石の八寸から鉄板の魚介と和牛・ランチコース5,000円',
    neighborhood: '銀座四丁目、善隣ビル4F。東銀座駅から徒歩1分、銀座駅A7出口から徒歩2分',
    gf_detail: '要確認。懐石の八寸、たれを合わせた鉄板の魚介と和牛、鰻の茶碗蒸し、土鍋ご飯。醤油や小麦の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介、A5和牛、伊勢海老、鮑の鉄板と鰻の茶碗蒸しのコース。',
    notes: '[鉄板懐石・Ayaの姉妹店] 銀座四丁目のビル4階、和食「Aya」の姉妹店として2016年12月に開店した16席の鉄板の店で、鉄板を囲むカウンター8席、座敷、半個室。懐石の八寸に、A5和牛や活伊勢海老、鮑の鉄板焼きを合わせます。2026年8月の「桐」ランチコースは5,000円で、八寸5種、鉄板の魚介、たれの鰻の茶碗蒸し、国産牛、土鍋のとうもろこしご飯、赤だしと香の物、甘味3種。冗談を交えた料理の説明や、生姜と枝豆のご飯も好評。夜は鮑や上質な和牛のコースで2〜3万円ほど。',
  });
}

save();
