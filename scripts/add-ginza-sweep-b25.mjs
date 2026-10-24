// Ginza Station half-mile sweep (805 m), batch 25 — mom-and-pop discovery via san-tatsu's Ginza area articles.
//   + 大衆割烹 三州屋 銀座本店 (1968; owner Okada Masayuki, b. 1935, trained at Kanda Sanshūya → MOM_AND_POP)
//   + バー ルパン (1928; founded by Takasaki Yukiko, now run by her grandson, manager Takasaki Naohiko → MOM_AND_POP)
// Deferred: ABCラーメン (1977, 2nd-gen owner Takeuchi Miga — Tabelog shows "Relocated", newest review Feb 2024;
// new site not found), 銀座あさみ (owner-chef Asami Kenji, 2000 — Tabelog id not found). 喫茶クレマチス (2023, owner unnamed).
// Discovery: san-tatsu.jp/area/119 (Ginza) article list, 88 unused articles scanned for named owners.
// Sources: san-tatsu (2020; 2026 two-part Lupin feature), Tabelog /en/ listings + dated 2026 reviews.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 三州屋 銀座本店
{
  const ST = 'https://san-tatsu.jp/articles/18722/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002473/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['10:30', '22:30']), sa = day(['10:30', '22:00']);
  put({
    id: 'tokyo_taishu_kappo_sanshuya_ginza', name: '大衆割烹 三州屋 銀座本店 (Taishū Kappō Sanshūya, Ginza)', category: 'MOM_AND_POP',
    lat: 35.674574, lng: 139.766218,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. Sashimi and the chicken-tofu pot are naturally wheat-free, but they are eaten with soy sauce and ponzu, and the set meals include oyster fry, horse-mackerel fry and miso-simmered fish. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A fish house: sashimi, seafood bowls, fried fish, mackerel in miso, and a chicken-and-tofu pot in chicken broth; red miso soup with the sets.',
    hours_raw: 'Mon–Fri 10:30–22:30; Sat & holidays 10:30–22:00; closed Sundays, and Mondays/holidays when Toyosu market is closed (Tabelog). No break between lunch and dinner. ¥500 otōshi for drinkers. Cards, IC and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: sa }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme — 3 min from Ginza-itchōme, 5 min from Yūrakuchō',
    cuisine: 'Shōwa taishū kappō (fish-house diner) since 1968 · thick-cut sashimi sets · oyster fry · chicken-tofu pot · drinking from mid-morning', cuisine_type: 'izakaya',
    website: null, gmaps: gm('大衆割烹 三州屋 銀座本店 銀座2-3-4'), menu_url: null,
    notes: "[Mom & Pop · the fish diner that never closes for a break] A popular fish house that Okada Masayuki, born 1935, opened in 1968 after training at Kanda Sanshūya. In 2020, past eighty, he was still going to the fish market every morning, Tsukiji and then Toyosu: \"there's nowhere else, so what can you do.\" It long stood in an alley that shielded salarymen who didn't want to be seen drinking at lunchtime. When the old building came down, the shop reopened at Ginza 2-3-4, and it now stands in full view. It runs without a break from morning to night. City-hall staff came at five, newspaper reporters at odd hours. Sit at shared six-seat white-wood tables, the counter or the tatami upstairs, and order from the wall and the whiteboard: thick-cut sashimi sets (¥1,100 in 2020), a seafood bowl on warm rice, oyster-fry sets (¥1,350), and the regulars' favourite chicken-tofu pot with ponzu (¥480). Staff of twenty years and more keep it brisk rather than chatty. A 2021 Tabelog set-meal top-100 pick.",
    chef_bio: {
      chef_name: '岡田正之 (Okada Masayuki, owner — as of 2020)', roles: ['owner-founder'],
      origin: 'Opened 1968 in Ginza 1–2-chōme after training at 神田 三州屋; now at Ginza 2-3-4 (relocated when the old building was demolished)',
      background: 'Born 1935; trained at Kanda Sanshūya and opened his own shop in Ginza in 1968, when Ginza 1–2 was quiet. In 2020 he still went to the fish market every morning.',
      philosophy: null,
      specialty: 'Thick-cut sashimi; chicken-tofu pot; oyster fry.',
      anecdotes: [
        { text: 'Still going to the market every morning after it moved from Tsukiji to Toyosu: 「そこしかないから、しょうがないでしょ」.', source: ST },
        { text: '「それに昔の人は『あいつ、昼間っから飲んでるよ！』と人に見られるのを嫌うから、大通りに面してない、この店が都合良かったんじゃないの」', source: ST },
        { text: 'October 2026: "This hidden gem used to be tucked away in an alley, but after the old building was demolished, it\'s now a rare sight to see the entire restaurant."', source: R + 'B537717096/' },
      ],
      japanese_sources_summary: 'さんたつ(2020.2): 三州屋 銀座店、銀座一丁目の路地の大衆食堂、令和2年で創業51年、店主・岡田正之さん(昭和10年生まれ、神田三州屋で修業、昭和43年に開業)、毎朝市場へ、11:30〜22:00通し営業、都庁職員や新聞記者、6人掛けの白木のテーブルで相席、カウンター7席、2階座敷、壁のお品書きとホワイトボード、刺身盛り合わせ定食1,100円、海鮮丼定食、牡蠣フライ定食1,350円、鶏豆腐480円、20年以上のベテランスタッフ。食べログ: 大衆割烹 三州屋 銀座本店、銀座2-3-4、定食百名店2021、平日10:30〜22:30、土祝〜22:00、日休、お通し500円、各種決済可。2026年の口コミ: 旧ビル解体で移転、アジフライ定食1,500円、カジキの刺身1,100円、刺身定食、さば味噌。',
      confidence: 'medium', sources: [ST, TB, R + 'B537717096/', R + 'B533131629/', R + 'B514769886/', R + 'B537966063/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Order from wall slips and a whiteboard (Japanese); shared tables; brisk, no-frills service. Staff ask whether you are eating or drinking.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Oyster fry and horse-mackerel fry in coarse breadcrumbs from the same kitchen.', source: ST }],
      soy_sauce_wheat: [{ text: 'Chicken-tofu pot eaten with ponzu soy; red miso soup with the sets.', source: ST }],
      vegan_cross_contact: [{ text: 'Chicken broth in the chicken-tofu pot.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-3-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (relocated within Ginza after the old building was demolished); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目3番4号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537717096/', R + 'B533131629/'],
    price_note: 'Set prices from the February 2020 san-tatsu feature; two 2026 prices from October reviews.', last_checked: TODAY, items: [
      it('刺身盛り合わせ定食', 'sashimi moriawase teishoku', 'Sashimi set (three or four kinds, rice, miso soup, pickles)', '¥1,100', 'Set meals', 'ask', 'no', '2020 price.', 'sashimi_set'),
      it('海鮮丼定食', 'kaisendon teishoku', 'Seafood bowl set on warm rice (8+ toppings)', '', 'Set meals', 'ask', 'no', '', 'kaisendon_set'),
      it('牡蠣フライ定食', 'kaki furai teishoku', 'Oyster fry set (five oysters)', '¥1,350', 'Set meals', 'no', 'no', '2020 price; seasonal.', 'oyster_fry_set'),
      it('アジフライ定食', 'aji furai teishoku', 'Horse-mackerel fry set', '¥1,500', 'Set meals', 'no', 'no', 'October 2026.', 'aji_fry_set'),
      it('鶏豆腐', 'tori doufu', 'Chicken-and-tofu pot with ponzu', '¥480', 'Small plates', 'ask', 'no', '2020 price.', 'tori_dofu'),
      it('さば味噌', 'saba miso', 'Mackerel simmered in miso', '', 'Set meals', 'ask', 'no', '', 'saba_miso'),
      it('', '', 'Swordfish sashimi (whiteboard fish of the day)', '¥1,100', 'Small plates', 'ask', 'no', 'October 2026.', 'swordfish_sashimi'),
    ] }, {
    cuisine: '1968年創業の昭和の大衆割烹・厚切り刺身の定食・牡蠣フライ・鶏豆腐・昼から飲める',
    neighborhood: '銀座二丁目。銀座一丁目駅から徒歩3分、有楽町駅から5分',
    gf_detail: '実際上グルテンフリーではありません。刺身や鶏豆腐自体は小麦を含みませんが、醤油やポン酢で食べ、定食には牡蠣フライ・アジフライ・さば味噌などもあります。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。魚の店で、刺身、海鮮丼、フライ、さば味噌、鶏の出汁の鶏豆腐。定食には赤だしが付きます。',
    notes: '[個人店・休憩なしの魚の大衆食堂] 昭和10年生まれの岡田正之さんが、神田三州屋で修業して1968年に開いた人気の魚の店。2020年、80歳を過ぎてなお毎朝市場(築地、のちに豊洲)に通っていました。「そこしかないから、しょうがないでしょ」。昼から飲む姿を見られたくないサラリーマンに好都合な路地裏にありましたが、旧ビルの解体で銀座2-3-4に移り、今は全貌が見える店に。朝から夜まで休憩なしの通し営業で、都庁職員は夕方5時に、新聞記者は思い思いの時間に訪れたそう。6人掛けの白木のテーブルで相席、カウンター、2階の座敷。壁のお品書きとホワイトボードから選び、厚切りの刺身盛り合わせ定食(2020年で1,100円)、温かいご飯の海鮮丼、牡蠣フライ定食(1,350円)、常連が推す鶏豆腐(480円)など。20年以上勤めるスタッフがきびきび回します。食べログ 定食百名店2021。',
  });
}

// ================================================================ バー ルパン
{
  const S1 = 'https://san-tatsu.jp/articles/524676/'; const S2 = 'https://san-tatsu.jp/articles/524680/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002554/'; const R = TB + 'dtlrvwlst/';
  const a = day(['17:00', '23:30']);
  put({
    id: 'tokyo_bar_lupin_ginza', name: 'バー ルパン (Bar Lupin)', category: 'MOM_AND_POP',
    lat: 35.671054, lng: 139.76332,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'A cocktail and whisky bar. Spirits such as gin, whisky and brandy are distilled, but beer and some liqueurs contain gluten; the snacks (e.g. the pickled-cucumber appetiser) are not described in detail. Ask the bartender.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'The signature Golden Fizz contains egg yolk; other cocktails and straight spirits are generally plant-based. The appetiser is pickled cucumber.',
    hours_raw: 'Mon–Sat 17:00–23:30; closed Sundays (Tabelog). A 2026 feature lists last orders 23:00 and Monday closing too. Cover charge ¥800 + tax; no service charge. Cash only (no cards, e-money or QR).',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme, building basement — 3 min from Ginza Stn',
    cuisine: 'Bar since 1928 · Golden Fizz · Islay whisky · the literary bar of Dazai, Ango and Oda Sakunosuke', cuisine_type: 'other',
    website: null, gmaps: gm('バー ルパン 銀座5-5-11'), menu_url: null,
    notes: "[Mom & Pop · the literary bar since 1928] A basement bar opened in 1928 by Takasaki Yukiko, a popular hostess at Café Tiger who struck out on her own with the backing of writers Kikuchi Kan, Satomi Ton, Izumi Kyōka and Kume Masao. It became a counter bar in 1935, and the slab of yachidamo ash on the counter has been in use ever since. Hayashi Tadahiko's photographs of Dazai Osamu, Sakaguchi Ango and Oda Sakunosuke sitting cross-legged here hang on the wall. It was bombed in January 1945, renamed 麺包亭 to avoid an 'enemy' word, closed, and reopened after the war as a café pouring black-market drink. When the building was rebuilt in 1972, every fixture was stored and the room rebuilt to the same layout. Yukiko worked the bar until about 1981. Her grandson Takasaki Naohiko now manages it, and bartender Hiraki Ikuo shakes Ango's Golden Fizz (egg yolk, lemon) and pours from shot glasses dating to 1928. In 2026 the room fills with fans of the anime Bungō Stray Dogs alongside old regulars. Try the Thunderclap: brandy, whisky and gin.",
    chef_bio: {
      chef_name: '高崎尚彦 (Takasaki Naohiko, manager — grandson of founder 高崎雪子 Yukiko)', roles: ['manager (founder\'s grandson)', 'bartender 開幾夫 Hiraki Ikuo'],
      origin: 'Founded 1928 (Shōwa 3) as a café; counter bar from 1935',
      background: 'Founded by Takasaki Yukiko, formerly of Café Tiger, with support from Kikuchi Kan and others; she worked here until about 1981. Her grandson Takasaki Naohiko manages it today (san-tatsu, 2026).',
      philosophy: null,
      specialty: 'Golden Fizz; Moscow Mule; Thunderclap; Islay malts.',
      anecdotes: [
        { text: '「昭和3年に、私の祖母がルパンを開業しました。祖母は『カフェー・タイガー』の人気嬢だったようです」 — manager Takasaki Naohiko.', source: S1 },
        { text: 'In the 1972 rebuild, the counter, chairs and fittings were all removed, stored, and put back in the same layout after two years.', source: S2 },
        { text: 'The bartender brought out a small shot glass handed down from 1928: Dazai or Ango may have drunk from it.', source: S2 },
        { text: '"I became interested in this place thanks to Bungou Stray Dogs… There were also other customers who were fans of the series." — June 2026.', source: R + 'B529769140/' },
      ],
      japanese_sources_summary: 'さんたつ「街の昭和を食べ歩く」第10回(2026年、前後編): バー ルパン、昭和3年(1928)創業、創業者・高崎雪子さん(カフェー・タイガーの人気女給、菊池寛・里見弴・泉鏡花・久米正雄の支援)、昭和10年からカウンターバー、ヤチダモの一枚板、林忠彦撮影の太宰治・坂口安吾・織田作之助の写真、安吾が好んだゴールデンフィズ、昭和20年の空襲、「麺包亭」に改名・休業、戦後は喫茶として再開、1972年の建て替えで調度品を保管し同じレイアウトで再開、雪子さんは1981年頃まで店に、マネージャー・高崎尚彦さん(孫)、バーテンダー・開幾夫さん、創業時のショットグラス。住所 銀座5-5-11、17:00〜23:00LO、日月休。食べログ: 塚本不動産ビルB1F、月〜土17:00〜23:30、チャージ800円(税抜)、現金のみ。2026年の口コミ: 文豪ストレイドッグスのファン、モスコミュール、サンダークラップ、きゅうりの漬物。',
      confidence: 'high', sources: [S1, S2, TB, R + 'B529769140/', R + 'B535381255/', R + 'B533983765/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy classic bar; reviewers find the staff lively, some a little aloof. Cover ¥800 + tax; cash only. Anime fans are welcome.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Golden Fizz made with egg yolk and lemon juice.', source: S1 }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-11 塚本不動産ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Featured by san-tatsu June 2026; Tabelog reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目5番11号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [S1, R + 'B535381255/', R + 'B466626669/'],
    price_note: 'No drink prices read. Cover charge ¥800 + tax (Tabelog).', last_checked: TODAY, items: [
      it('ゴールデンフィズ', 'gooruden fizu', 'Golden Fizz (Sakaguchi Ango\'s favourite; egg yolk, lemon)', '', 'Cocktails', 'ask', 'no', '', 'golden_fizz'),
      it('モスコミュール', 'mosuko myuuru', 'Moscow Mule', '', 'Cocktails', 'ask', 'ask', '', 'moscow_mule'),
      it('サンダークラップ', 'sandaa kurappu', 'Thunderclap (brandy, whisky, gin)', '', 'Cocktails', 'ask', 'ask', '', 'thunderclap'),
      it('', '', 'Islay malt whisky (e.g. Laphroaig), straight', '', 'Spirits', 'ask', 'vegan', '', 'islay_whisky'),
      it('チャージ', 'chaaji', 'Cover charge (with pickled cucumber)', '¥800', 'Charge', '', '', 'Excluding tax.', 'cover'),
    ] }, {
    cuisine: '1928年創業のバー・ゴールデンフィズ・アイラモルト・太宰・安吾・織田作の文豪バー',
    neighborhood: '銀座五丁目、ビルの地下。銀座駅から徒歩3分',
    gf_detail: 'カクテルとウイスキーのバー。ジン・ウイスキー・ブランデーなどは蒸留酒ですが、ビールや一部のリキュールはグルテンを含みます。つまみ(お通しのきゅうりの漬物など)の詳細は書かれていません。バーテンダーに確認してください。',
    vegan_detail: '名物のゴールデンフィズは卵黄入り。他のカクテルやストレートの蒸留酒は概ね植物性です。お通しはきゅうりの漬物です。',
    notes: '[個人店・1928年からの文豪バー] カフェー・タイガーの人気女給だった高崎雪子さんが、菊池寛・里見弴・泉鏡花・久米正雄らの支援を受けて1928年に開いた地下のバー。1935年にカウンターバーとなり、その頃からのヤチダモの一枚板のカウンターが今も現役です。壁には林忠彦が撮った、椅子にあぐらをかく太宰治・坂口安吾・織田作之助の写真。1945年1月の空襲で被害を受け、敵性語を避けて「麺包亭」と改名、休業を経て戦後は喫茶として再開し、闇の酒も出したそう。1972年のビル建て替えでは調度品をすべて保管し、同じレイアウトで復元しました。雪子さんは1981年頃まで店に立ち、今は孫の高崎尚彦さんがマネージャー。バーテンダーの開幾夫さんが、安吾の好んだゴールデンフィズ(卵黄・レモン)をシェイクし、創業時からのショットグラスで注いでくれることも。2026年はアニメ『文豪ストレイドッグス』のファンも常連に交じります。ブランデー・ウイスキー・ジンの「サンダークラップ」もぜひ。',
  });
}

save();
