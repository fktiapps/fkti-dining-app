// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 30.
//   + ルシュルシュル Işıl ışıl (wine-led Italian counter on Fuyacho, a chef and a sommelier)
//   + ハヤシライス専門店かもめ軒 Hayashi Rice Kamomeken (hayashi rice with toppings, Shijo Karasuma)
//   + 京御菓子司 亀屋博永 Kameya Hironaga (takeaway wagashi, known for warabi mochi; un-skipped from b29)
//   + アングレディアン 京都 Angledian Kyoto (takeaway patisserie opposite Kyoto University Hospital; un-skipped from b29)
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26018660, 26043008; notable 26018858 and
//   26034158 per the coordinator (takeaway-only shops are listed). None is in data/kyoto.json by name (ルシュルシュル/Işıl/
//   Lush, かもめ軒/Kamomeken, 亀屋博永/Kameya Hironaga — 亀廣永 is a different shop — アングレディアン/Angledian) or address
//   (尾張町225, 月鉾町46, 大黒屋町38, 聖護院西町19).
//   Same-name count (same brand or operator only): ルシュルシュル single shop (official site, TableCheck). かもめ軒: operator
//   株式会社かもめ of Ukyo-ku (NTA invoice registry T1130001057447); no second かもめ軒 found; a March 2026 review says the
//   space was formerly a Hino-ya Curry franchise outlet. 亀屋博永 and アングレディアン: single shops in the sources opened.
//   Service charges: none appears on any of the four Tabelog listings.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ルシュルシュル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018660/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://lshlshl.com'; const TC = 'https://www.tablecheck.com/en/lshlshl';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_isil_isil_fuyacho', name: 'ルシュルシュル (Işıl ışıl)', category: 'OMNI',
    lat: 35.012871, lng: 135.765997, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. À la carte Italian with pasta and risotto, carpaccio and tartare, meat mains, gelato and tiramisu; no gluten information (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an ingredient-led Italian menu of fish, meat, game, cheese and cream (2021–2026 reviews).',
    hours_raw: 'From 18:00, last entry 20:00; closed Tuesdays and the third Wednesday; irregular extra closures are posted (official site, read 2026-11-05: open 3 November, closed 9 and 11 November). Tabelog: 18:00–22:00, closed Tuesday. Reservations by phone (075-252-2587) or TableCheck (official site). Cards accepted; no e-money or QR (Tabelog). 10 seats: 5 at the counter, tables for 4 and 2 (Tabelog); TableCheck says 9. Private hire possible; non-smoking; sommelier (Tabelog). No printed drink menu — the wines change often and the staff recommend (June 2024). On Fuyacho between Oshikoji and Nijo, 5 min from Kyoto Shiyakusho-mae Stn exit 11 (Tabelog; official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho between Oshikoji and Nijo, Goshominami — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Italian, “an Italian restaurant in Goshominami where you think about the outline of each flavour and how it finishes” (TableCheck, translated) · à la carte by default, with a chef’s-choice menu at ¥9,900 (TableCheck) · kombu-cured sea bream carpaccio, porcini pasta, moules pasta, sautéed seafood with hollandaise, pistachio gelato, tiramisu (December 2021) · sweet shrimp and prosciutto on cheese, Aizu horse sashimi, tenderloin steak, crab risotto (November 2022) · tuna tartare ¥3,500, rabbit and chestnut risotto ¥2,600, Ezo deer ¥5,800 (December 2022) · sea urchin pasta (October 2023) · plates sized for about two, split for the table (June 2024) · wines by the glass chosen by the sommelier, including bottles usually sold only whole (January 2026)',
    website: SITE, gmaps: gm('ルシュルシュル 京都 麩屋町'), menu_url: null,
    notes: '[Italian · Fuyacho, a chef and a sommelier] A glass-fronted room on Fuyacho with a short counter, a sofa corner and a gleaming kitchen, where a female chef cooks alone and a male sommelier pours. Order à la carte — tartare, porcini pasta, risotto, game such as Ezo deer — or take the ¥9,900 chef’s choice, and let the sommelier pick wines by the glass; there is no drink menu. Expect ¥10,000–20,000 a head with wine. Last entry 20:00.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; female, cooks alone)', 'Sommelier (unnamed; male)'], origin: null,
      background: 'Reviewers describe the restaurant as “run by a lovely couple” (December 2022) and as “the space created by a female chef and a male sommelier” (November 2022). In January 2026: “The dishes prepared by the female chef, who works solo, are all crafted with great care”, with wine service by the male sommelier “on par with famous restaurants in Tokyo”. A July 2025 regular credits “the personalities of the two owners”.',
      philosophy: 'Thinking about the outline of each flavour and how it finishes (TableCheck, translated).', specialty: 'À la carte Italian; risotto; game; wine by the glass.',
      anecdotes: [
        { text: 'At the end of a December 2021 dinner, the chef and the sommelier came to the door to see the guests off.', source: R + 'B21698168/' },
        { text: 'A November 2022 guest, already full, wanted the porcini pasta and the crab risotto too, and the kitchen cut the portions down to fit.', source: R + 'B456244724/' },
        { text: 'A June 2024 party of three found no drink menu and no explanation of how the shared plates would be priced, and felt it poor value.', source: R + 'B486407734/' },
      ],
      japanese_sources_summary: '公式サイト: Işıl ışıl (ルシュルシュル)、中京区麩屋町押小路上がる225 第二ふや町ビル1F、18時から (最終入店20時)、火曜と第3水曜定休、予約は電話とテーブルチェック。テーブルチェック: 「味の輪郭や食後の抜け方に思考を巡らせる、京都 御所南のイタリア料理店」、9席、おまかせ9,900円。食べログ: イタリアン・ワインバー、18:00〜22:00、火曜定休、予約可、カード可、10席 (カウンター5、テーブル4と2)、貸切可、禁煙、ソムリエ。口コミ (2016〜2026年、英語): 女性の料理人がひとりで作り、男性のソムリエがワインを選ぶ、夫婦の店との声、鯛の昆布締めのカルパッチョ、ポルチーニのパスタ、馬刺し、鮪のタルタル、兎と栗のリゾット、エゾ鹿、ウニのパスタ、ドリンクメニューはない。',
      confidence: 'medium', sources: [SITE, TC, TB, R + 'B21698168/', R + 'B456244724/', R + 'B457373773/', R + 'B472604742/', R + 'B486407734/', R + 'B511973145/', R + 'B522510575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No drink menu — the sommelier recommends; TableCheck booking has an English interface.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通二条下ル尾張町225 第二ふや町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 closing days; Tabelog reviews through January 2026.' },
    pin_source: `Tabelog ${TB} (35.012871, 135.765997); cross-checked: GSI 京都府京都市中京区尾張町225番地 (lot) 16m; 37m from kyoto_sakana_naminami and 38m from kyoto_oryori_maeshiro, no offset needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TC, R + 'B457373773/'],
    price_note: 'Chef’s choice from TableCheck (read 2026-11-05); à la carte prices from a December 2022 review.', last_checked: TODAY, items: [
      it('', '', 'Chef’s choice dishes', '¥9,900', 'Courses', 'ask', 'no', 'TableCheck, tax included.', 'omakase'),
      it('', '', 'Tuna tartare', '¥3,500', 'Antipasti', 'ask', 'no', 'December 2022.', 'tuna_tartare'),
      it('', '', 'Rabbit and chestnut risotto', '¥2,600', 'Primi', 'ask', 'no', 'December 2022.', 'rabbit_risotto'),
      it('', '', 'Ezo deer', '¥5,800', 'Secondi', 'ask', 'no', 'December 2022.', 'ezo_deer'),
    ] }, {
    cuisine: 'イタリアン。「味の輪郭や食後の抜け方に思考を巡らせる、京都 御所南のイタリア料理店」(テーブルチェック)・基本はアラカルト、おまかせ9,900円も (テーブルチェック)・鯛の昆布締めのカルパッチョ、ポルチーニのパスタ、ムール貝のパスタ、魚介のソテーのオランデーズソース、ピスタチオのジェラート、ティラミス (2021年12月)・甘海老と生ハムのチーズ仕立て、Aizu の馬刺し、ヒレのステーキ、蟹のリゾット (2022年11月)・鮪のタルタル3,500円、兎と栗のリゾット2,600円、エゾ鹿5,800円 (2022年12月)・ウニのパスタ (2023年10月)・一皿は2人前ほどで取り分け (2024年6月)・ソムリエが選ぶグラスワイン、ふつうはボトルだけのワインも (2026年1月)',
    neighborhood: '御所南、押小路と二条の間の麩屋町。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。パスタやリゾット、カルパッチョやタルタル、肉料理、ジェラートやティラミスのアラカルトのイタリアン。グルテンの情報はない (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、肉、ジビエ、チーズ、クリームを使う素材重視のイタリアン (2021〜2026年の口コミ)。',
    notes: '[イタリアン・麩屋町、料理人とソムリエ] 麩屋町のガラス張りの店。短いカウンターとソファ席、光るキッチンで、女性の料理人がひとりで作り、男性のソムリエがワインを注ぐ。タルタル、ポルチーニのパスタ、リゾット、エゾ鹿などのジビエをアラカルトで、または9,900円のおまかせで。ドリンクメニューはなく、グラスワインはソムリエにおまかせ。ワインを入れて1人1〜2万円ほど。最終入店20時。',
  });
}

// ================================================================ ハヤシライス専門店かもめ軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043008/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:30']);
  put({
    id: 'kyoto_kamomeken_shijo', name: 'ハヤシライス専門店かもめ軒 (Hayashi Rice Kamomeken)', category: 'OMNI',
    lat: 35.003564, lng: 135.757021, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The hayashi sauce is made from additive-free tomato juice and plenty of onion (Tabelog shop text), but nothing is said about flour or roux; most toppings are breaded and fried (katsu, croquettes, shrimp fry, chicken nanban).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the sauce reminds a reviewer of beef stew, with a buttery richness (November 2026); toppings of hamburg steak, sausage, egg, cheese and fried meat or seafood.',
    hours_raw: '10:00–20:30 daily (L.O. 20:00); irregular closures; closed 31 December–3 January (Tabelog). No reservations (Tabelog). Meal tickets from a machine (May and November 2026). No cards; e-money and QR codes accepted (Tabelog; PayPay, November 2026). 12 seats: a counter and about two tables (Tabelog; November 2026). Non-smoking; take-out and delivery; children welcome, one stroller at a time (Tabelog). Self-service water (May 2026). On Shijo-dori just west of Karasuma, 2–3 min from Hankyu Karasuma and Shijo Stns exit 26 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori just west of Karasuma — 2 min from Shijo / Karasuma Stn exit 26',
    cuisine: 'Hayashi rice only, with a long list of toppings (Tabelog shop text; November 2026) · a light, tangy sauce of additive-free tomato juice and plenty of onion (Tabelog shop text) · plain hayashi rice ¥800, large ¥940; standard rice 250 g (May and November 2026) · toppings: cheese, soft-boiled egg, homemade tartar with shrimp tempura (Tabelog shop text); chicken katsu, hamburg steak, shrimp fry, spinach with scrambled egg and sausage, chicken nanban (2026 reviews) · taro and crab-cream croquette, called a hidden specialty, ¥1,080 (November 2026) · hamburg omurice, side salad (May 2026)',
    website: null, gmaps: gm('ハヤシライス専門店かもめ軒 京都 四条烏丸'), menu_url: null,
    notes: '[Hayashi rice · Shijo Karasuma, from 10:00] A small ticket-machine counter on Shijo-dori west of Karasuma that serves only hayashi rice: a light, tomato-sharp sauce over 250 g of rice from ¥800, built up with toppings from cheese and egg to katsu, hamburg steak and a taro-and-crab croquette. Quick, cheap and solo-friendly, open 10:00–20:30. Some reviewers want a richer, demi-glace-style sauce. A March 2026 reviewer says it replaced a Hino-ya Curry franchise in the same space.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社かもめ (Ukyo-ku, per the NTA invoice registry)'], origin: null,
      background: 'A March 2026 reviewer writes that the space used to be a Hino-ya Curry and, since the Instagram account stayed the same, guesses the franchisee simply changed its business. The Tabelog invoice number T1130001057447 is registered to 株式会社かもめ, a company in Ukyo-ku, Kyoto.',
      philosophy: null, specialty: 'Hayashi rice with toppings.',
      anecdotes: [
        { text: 'A November 2026 diner spotted a sign calling the taro croquette a hidden specialty and switched from the hamburg steak.', source: R + 'B538498837/' },
        { text: 'A May 2026 parent and child arrived at opening and watched customers come in one after another.', source: R + 'B527349260/' },
      ],
      japanese_sources_summary: '食べログ: ハヤシライス専門店かもめ軒、洋食、下京区月鉾町46 竹中ビル1F、阪急烏丸駅・地下鉄四条駅から徒歩約3分、10:00〜20:30 (L.O.20:00)、不定休、12月31日〜1月3日休み、予約不可、カード不可、電子マネー・QR決済可、12席、禁煙、テイクアウト・デリバリー、子ども可 (ベビーカーは1台まで)、適格請求書 T1130001057447。店の紹介: 無添加のトマトジュースとたっぷりの玉ねぎのハヤシソース、チーズや半熟玉子、自家製タルタルと海老天などのトッピング。国税庁の適格請求書発行事業者公表サイト: 株式会社かもめ、京都府京都市右京区西院巽町7番地2。口コミ (2026年、英語): 券売機、プレーン800円、大盛940円、ご飯は250g、トマトの酸味のあるあっさりしたソース、チキンカツ、ハンバーグ、里芋と蟹クリームのコロッケ1,080円、以前は Hino-ya Curry だったとの声。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001057447', R + 'B524886775/', R + 'B525984943/', R + 'B527349260/', R + 'B527591045/', R + 'B527786280/', R + 'B534917111/', R + 'B535679026/', R + 'B538498837/', R + 'B538732316/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine with a photo menu (Tabelog); point and pay; solo-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区月鉾町46 竹中ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003564, 135.757021); cross-checked: GSI 京都府京都市下京区月鉾町46番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538732316/', R + 'B538498837/'],
    price_note: 'No menu read; prices from November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hayashi rice (regular)', '¥800', 'Hayashi rice', 'ask', 'no', 'November 2026.', 'hayashi_rice'),
      it('', '', 'Hayashi rice (large)', '¥940', 'Hayashi rice', 'ask', 'no', 'November 2026.', 'hayashi_rice_large'),
      it('', '', 'Hayashi rice with taro and crab-cream croquette', '¥1,080', 'Hayashi rice', 'no', 'no', 'November 2026; breaded and fried.', 'hayashi_croquette'),
    ] }, {
    cuisine: 'ハヤシライスだけ、トッピングがたくさん (食べログの店の紹介、2026年11月)・無添加のトマトジュースとたっぷりの玉ねぎの、あっさりして酸味のあるソース (食べログの店の紹介)・プレーン800円、大盛940円、ご飯はふつう250g (2026年5月、11月)・トッピング: チーズ、半熟玉子、自家製タルタルと海老天 (店の紹介)、チキンカツ、ハンバーグ、海老フライ、ほうれん草とスクランブルエッグとソーセージ、チキン南蛮 (2026年の口コミ)・隠れた名物という里芋と蟹クリームのコロッケ1,080円 (2026年11月)・ハンバーグのオムライス、サラダ (2026年5月)',
    neighborhood: '烏丸のすぐ西の四条通。四条駅・烏丸駅26番出口から徒歩2分',
    gf_detail: '要確認。ハヤシソースは無添加のトマトジュースとたっぷりの玉ねぎ (食べログの店の紹介) だが、小麦粉やルーについては書かれていない。トッピングの多くはパン粉の揚げ物 (カツ、コロッケ、海老フライ、チキン南蛮)。',
    vegan_detail: 'ヴィーガンではない。ソースはビーフシチューのようでバターのコクがあるとの声 (2026年11月)。ハンバーグ、ソーセージ、玉子、チーズ、肉や魚介の揚げ物のトッピング。',
    notes: '[ハヤシライス・四条烏丸、朝10時から] 烏丸の西の四条通にある、券売機の小さな店。メニューはハヤシライスだけ。トマトの酸味のあるあっさりしたソースを250gのご飯にかけて800円から、チーズや玉子からカツ、ハンバーグ、里芋と蟹のコロッケまでトッピングを重ねる。早くて安く、ひとりでも入りやすい。10:00〜20:30。デミグラスのような濃いソースを好む人には物足りないとの声も。2026年3月の口コミでは、同じ場所は以前 Hino-ya Curry だったという。',
  });
}

// ================================================================ 京御菓子司 亀屋博永
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018858/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kameya_hironaga', name: '京御菓子司 亀屋博永 (Kameya Hironaga)', category: 'OMNI',
    lat: 35.021955, lng: 135.753607, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The warabi mochi is described as made from authentic bracken starch with brown sugar, dusted with kinako of Tanba black soybeans and wasanbon (2023–2026 reviews), but no ingredient list is published; the shop also sells monaka, ohagi, sakura mochi and daifuku, not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The warabi mochi as described is bracken starch, brown sugar, kinako and wasanbon (2023–2026 reviews), but no full ingredient list is published.',
    hours_raw: '9:00–18:00, Wednesday to 17:00, every day (Tabelog); hours may change. A takeaway shop: “a cozy sales area without dining space” (February 2025). Reservations accepted (Tabelog; phone 075-431-4438). Cash only — no cards, e-money or QR (Tabelog). No parking; the street in front is narrow (Tabelog; March 2025). A sample of warabi mochi is offered on entry (February 2025). On Aburanokoji south of Shimochojamachi, near the Kyoto Prefectural Office, about 15 min on foot from Marutamachi Stn (Tabelog; February 2025).',
    hours: { 0: H, 1: H, 2: day(['09:00', '17:00']), 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Aburanokoji south of Shimochojamachi, near the Kyoto Prefectural Office — 15 min from Marutamachi Stn',
    cuisine: 'Takeaway Kyoto wagashi (Tabelog) · warabi mochi of authentic bracken starch with brown sugar, kinako of Tanba black soybeans and wasanbon, featured on Matsuko no Shiranai Sekai; small (serves two) ¥1,000, large (serves four) ¥2,000; keeps a week at room temperature (2025–2026 reviews) · monaka, tea monaka ¥200 (January 2026) · ohagi, sakura mochi (April 2025) · minazuki in season; mango and other unusual flavours (December 2023) · strawberry daifuku (March 2025)',
    website: null, gmaps: gm('亀屋博永 京都 油小路'), menu_url: null,
    notes: '[Wagashi · Aburanokoji, the warabi mochi] A small machiya sweet shop near the Kyoto Prefectural Office, with no seats — you buy and take away. The draw is a soft, melting warabi mochi of real bracken starch and brown sugar under homemade kinako of Tanba black soybeans, ¥1,000 for a small pack that keeps a week; it was featured on Matsuko no Shiranai Sekai. Also monaka, ohagi and seasonal sweets. The owner trained at Kameya Kiyonaga in Gion. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), trained at Kameya Kiyonaga in Gion'], origin: null,
      background: 'A February 2025 review, quoting the shop’s own introduction, says “The owner trained at the famous ‘Kameya Kiyonaga’ shop in Gion before establishing this place.” In December 2023 a reviewer described a shop “operated by an elderly couple” with the couple’s son; in January 2026 another described an elderly gentleman running the shop alone, hands covered in warabi mochi and kinako while packing. A July 2026 regular of four years noted the sweets now come pre-packed, where four years earlier each order was taken from the fridge, cut, weighed and packed on the spot, and that prices had gone up.',
      philosophy: null, specialty: 'Warabi mochi with homemade kinako.',
      anecdotes: [
        { text: 'A December 2023 regular recalled long queues after a television appearance, now calmer.', source: R + 'B468029561/' },
        { text: 'A February 2025 visitor was offered a sample of warabi mochi on entering.', source: R + 'B500730158/' },
      ],
      japanese_sources_summary: '食べログ: 京御菓子司 亀屋博永、和菓子、上京区油小路下長者町下る大黒屋町38、丸太町駅から809m、9:00〜18:00 (水曜は17:00まで)、予約可、カード・電子マネー・QR決済不可、駐車場なし、テイクアウト、子ども可。口コミ (2023〜2026年、英語): 本わらび粉と黒糖のわらび餅、Tanba 黒豆のきな粉と和三盆、Matsuko no Shiranai Sekai で紹介、小1,000円 (2人前)、大2,000円 (4人前)、常温で1週間、最中、おはぎ、桜餅、水無月、いちご大福、店主は祇園の Kameya Kiyonaga で修業、イートインはない、年配の夫婦と息子の店との声 (2023年)、年配の男性がひとりで営むとの声 (2026年)。',
      confidence: 'medium', sources: [TB, R + 'B371131882/', R + 'B468029561/', R + 'B500170637/', R + 'B500730158/', R + 'B504432317/', R + 'B508678105/', R + 'B511434870/', R + 'B521488891/', R + 'B525677176/', R + 'B531803777/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small takeaway counter; point at the warabi mochi size and pay in cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区油小路下長者町下る大黒屋町38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.021955, 135.753607); cross-checked: GSI 京都府京都市上京区大黒屋町38番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B371131882/', R + 'B500730158/'],
    price_note: 'No menu read; prices from January 2025 to January 2026 reviews.', last_checked: TODAY, items: [
      it('わらび餅', '', 'Warabi mochi, small (serves two)', '¥1,000', 'Wagashi', 'ask', 'ask', 'January 2026; keeps a week at room temperature.', 'warabi_mochi'),
      it('わらび餅', '', 'Warabi mochi, large (serves four)', '¥2,000', 'Wagashi', 'ask', 'ask', 'January 2026.', 'warabi_mochi_large'),
      it('', '', 'Tea monaka', '¥200', 'Wagashi', 'ask', 'ask', 'January 2026.', 'monaka'),
    ] }, {
    cuisine: '持ち帰りの京和菓子 (食べログ)・本わらび粉と黒糖のわらび餅に Tanba 黒豆のきな粉と和三盆、Matsuko no Shiranai Sekai で紹介。小 (2人前) 1,000円、大 (4人前) 2,000円、常温で1週間 (2025〜2026年の口コミ)・最中、お茶の最中200円 (2026年1月)・おはぎ、桜餅 (2025年4月)・季節の水無月、マンゴーなど変わり種も (2023年12月)・いちご大福 (2025年3月)',
    neighborhood: '京都府庁の近く、下長者町の南の油小路。丸太町駅から徒歩15分ほど',
    gf_detail: '要確認。わらび餅は本わらび粉と黒糖、Tanba 黒豆のきな粉と和三盆とされる (2023〜2026年の口コミ) が、原材料の一覧は公開されていない。最中、おはぎ、桜餅、大福もあるが中身は書かれていない。',
    vegan_detail: '要確認。わらび餅はわらび粉、黒糖、きな粉、和三盆とされる (2023〜2026年の口コミ) が、原材料の一覧は公開されていない。',
    notes: '[和菓子・油小路、わらび餅] 京都府庁近くの町家の小さな和菓子屋。席はなく、買って持ち帰る。看板は本わらび粉と黒糖の、とろけるようなわらび餅に、自家製の Tanba 黒豆のきな粉。小1,000円で常温1週間。Matsuko no Shiranai Sekai で紹介された。最中、おはぎ、季節の菓子も。店主は祇園の Kameya Kiyonaga で修業。現金のみ。',
  });
}

// ================================================================ アングレディアン 京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034158/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_angledian_shogoin', name: 'アングレディアン 京都 (Angledian Kyoto)', category: 'OMNI',
    lat: 35.019654, lng: 135.778618, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a range: French-style cakes on sponge, tart and choux bases, roll cakes, pound cake and financiers (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, butter, egg and chocolate cakes (2025–2026 reviews).',
    hours_raw: 'Wednesday, Thursday, Friday and Sunday 12:00–18:00; closed Monday, Tuesday and Saturday; days and closing times vary and close early when sold out — check the shop’s Instagram (Tabelog). Takeaway only. Reservations in person at the shop only, not by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and e-money accepted; no QR (Tabelog). Photographs of the display case are not allowed without asking (March 2026). Non-smoking; no parking (Tabelog). Directly opposite Kyoto University Hospital, 4 min from the Kyoto University Hospital bus stop, 10 min from Jingu-Marutamachi Stn (Tabelog). Opened 25 April 2020 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, opposite Kyoto University Hospital — 10 min from Jingu-Marutamachi Stn',
    cuisine: 'Takeaway French-style patisserie (Tabelog) · Écarlate (chocolate sponge, dark chocolate mousse, milk chocolate cream, raspberry) and Marron (rum-soaked sponge, chestnut mousse and cream) (October 2025) · a mosque-shaped Mont Blanc, Caramel Vanille, Chocolat (November 2025) · Éclair Latte, Passion, Macaron Pistachio with cherry (August 2025) · Amaou strawberry roll, Chestnut, Bergamot, cream puff (March 2026) · peach tart (August 2026) · Pistachio (September 2026) · Tart Bomb of apple and mousse ¥896 (October 2026) · pound cake and financiers (July 2026)',
    website: null, gmaps: gm('アングレディアン 京都 聖護院'), menu_url: null,
    notes: '[Patisserie · Shogoin, opposite the university hospital] A small, chic cake shop so understated that people walk past it, across from Kyoto University Hospital. Glossy French-style cakes — the Chestnut, a mosque-shaped Mont Blanc, Écarlate, cream puffs, seasonal tarts — from about ¥900, carefully packed to take away. Open four days a week from noon until sold out; check Instagram. Reviewers call it refined; a few find it heavy or sweet.',
    chef_bio: { chef_name: null, roles: ['Owner-patissier (unnamed)'], origin: null,
      background: 'An October 2025 reviewer writes that the cakes are “crafted by a chef who previously served as the pastry chef at Robuchon”, and that the careful packing reflects the chef’s commitment. Another October 2025 visitor thought “it seems that the owner runs it alone.”',
      philosophy: null, specialty: 'Entremets and petits gâteaux; chestnut cakes.',
      anecdotes: [
        { text: 'A March 2026 regular asked to photograph the display, which is normally not allowed, and was kindly let.', source: R + 'B524490175/' },
        { text: 'A May 2026 first-timer was nervous after reading the shop’s notices but was welcomed warmly.', source: R + 'B527670008/' },
      ],
      japanese_sources_summary: '食べログ: アングレディアン 京都、ケーキ、左京区聖護院西町19、神宮丸太町駅から徒歩約10分、バス停 Kyoto University Hospital から徒歩4分、水・木・金・日 12:00〜18:00、月・火・土定休 (営業日と閉店時間はインスタグラムで案内、売り切れ次第終了)、予約は店頭のみ (電話不可)、カード・電子マネー可、テイクアウト、2020年4月25日オープン。口コミ (2025〜2026年、英語): 京大病院の向かい、小さくおしゃれな店、Robuchon でパティシエを務めた人のケーキとの声、ひとりで営んでいるようだとの声、モンブラン、栗、ピスタチオ、シュークリーム、タルト、ショーケースの撮影は要確認、甘く重いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B508077820/', R + 'B511892961/', R + 'B513904483/', R + 'B515173113/', R + 'B516931632/', R + 'B517945585/', R + 'B524490175/', R + 'B524979971/', R + 'B527670008/', R + 'B532249932/', R + 'B537728596/', R + 'B538300206/', R + 'B538491146/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the display case; ask before photographing it. Reservations in person only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院西町19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.019654, 135.778618); cross-checked: GSI 京都府京都市左京区聖護院西町19番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538491146/'],
    price_note: 'No menu read; one price from an October 2026 review; reviewers spend ¥1,000–3,000.', last_checked: TODAY, items: [
      it('', '', 'Tart Bomb (apple, mousse, tart)', '¥896', 'Cakes', 'no', 'no', 'October 2026.', 'tart_bomb'),
      it('', '', 'Chestnut (Marron)', '', 'Cakes', 'no', 'no', 'Rum syrup sponge, chestnut mousse and cream; 2025–2026.', 'marron'),
    ] }, {
    cuisine: '持ち帰りのフランス菓子 (食べログ)・Écarlate (チョコレートのスポンジ、ダークチョコのムース、ミルクチョコのクリーム、フランボワーズ) と Marron (ラム酒のスポンジ、栗のムースとクリーム) (2025年10月)・モスクのような形のモンブラン、Caramel Vanille、Chocolat (2025年11月)・Éclair Latte、Passion、さくらんぼ入りの Macaron Pistachio (2025年8月)・あまおうのロール、栗、ベルガモット、シュークリーム (2026年3月)・桃のタルト (2026年8月)・ピスタチオ (2026年9月)・りんごとムースの Tart Bomb 896円 (2026年10月)・パウンドケーキ、フィナンシェ (2026年7月)',
    neighborhood: '聖護院、京大病院の向かい。神宮丸太町駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。スポンジ、タルト、シューの生地のケーキ、ロールケーキ、パウンドケーキ、フィナンシェ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。クリーム、バター、卵、チョコレートのケーキ (2025〜2026年の口コミ)。',
    notes: '[パティスリー・聖護院、京大病院の向かい] 京大病院の向かいの、通り過ぎてしまいそうなほど控えめでおしゃれな小さなケーキ屋。栗のケーキ、モスクのような形のモンブラン、Écarlate、シュークリーム、季節のタルトなど艶やかなフランス菓子が900円ほどから。持ち帰り用にていねいに箱詰め。週4日、昼から売り切れまで。営業日はインスタグラムで確認を。上品との声が多く、甘く重いとの声も少し。',
  });
}

save();
