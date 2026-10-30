// Osaka sweep (2-mile circle around Dotonbori), batch 212 — mom-phase clean-up: listings near the centre with 30+ reviews passed over without a skip() mark.
//   - 粋麺あみ乃や あべの橋駅店 27060915 — skipped: Kintetsu station soba/udon chain (sister 大阪難波駅店 27109867 in shops.jsonl; reviews call it a chain)
//   - サーティワンアイスクリーム なんばウォーク店 27070176 — skipped: 31 Ice Cream (Baskin-Robbins) national chain; two more branches in shops.jsonl
//   + コーヒーショップ エリカ Coffee Shop Erika (smoking kissa / coffee stand in Namba Walk, 7:00–22:00, morning sets from ¥470)
//   - ディッパーダン なんばウォーク店 27057031 — skipped: Dipper Dan crepe chain (a review calls it "a crepe chain")
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 212);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 粋麺あみ乃や あべの橋駅店 — chain
skip('27060915', '粋麺あみ乃や あべの橋駅店: station stand-soba/udon chain inside Kintetsu ticket gates (Tabelog corporate-member listing; formerly 阿倍野庵). Sister branch 粋麺あみ乃や 大阪難波駅店 27109867 (大阪府大阪市中央区難波4-1-17 近鉄難波駅改札) is in shops.jsonl. Reviews: "This is a standing soba (udon) chain restaurant located inside Kintetsu station. It was previously called Abeno-an, but has since changed its name." (July 2026, B532473492); "Nearby, there are two JR branches inside JR Tennoji Station, and a Nankai branch within the station as well." (September 2026, B414135057).');

// ================================================================ サーティワンアイスクリーム なんばウォーク店 — chain
skip('27070176', 'サーティワンアイスクリーム なんばウォーク店: 31 ICE CREAM (Baskin-Robbins Japan) national chain branch. Two more branches in shops.jsonl: Thirty-One Ice Cream Sennichimae ten 27043950 (難波3-4-13 味わいばしビル 1F) and Thirty-One Ice cream Shinsaibashi Biggu Suteppu Ten 27159366 (西心斎橋1-6-14 BIG STEP 1F).');

// ================================================================ コーヒーショップ エリカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046932/'; const R = TB + 'dtlrvwlst/';
  const WALK = 'https://walk.osaka-chikagai.jp/shopguide/469';
  const H = day(['07:00', '22:00']);
  put({
    id: 'osaka_coffee_shop_erika_namba_walk', name: 'コーヒーショップ エリカ (Coffee Shop Erika)', category: 'OMNI',
    lat: 34.66701, lng: 135.500034, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the food is toast, sandwiches, hot dogs, pasta and pancakes. Coffee and the boiled egg that comes with the morning sets are the wheat-free items.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the morning sets come with a boiled egg, the sandwiches hold egg and ham, the hot dogs a sausage, and the toast is topped with cheese; lattes and cappuccinos use milk. Black coffee is the option.',
    hours_raw: 'Daily 7:00–22:00 (Tabelog; Namba Walk shop page; July 2026 review: "Open every day"). Morning menu 7:00–11:00 (April 2025 and January 2026 reviews); a January 2026 diner found the light meals are a separate menu that starts later (the diner guessed 11:00). Order and pay first at the counter (June 2025, January–February 2026 reviews). Smoking: reviews from October 2024 to January 2026 say every seat allows smoking (an October 2024 review: it moved from a designated smoking area to full smoking; a January 2025 review: so under-18s may not enter), and the Namba Walk page lists 喫煙可能; Tabelog still says "designated smoking area" with 8 non-smoking seats added — expect smoke. Tabelog: no credit cards, no e-money, QR payments accepted; a February 2026 review paid with a transport IC card, an October 2024 review photographed a "PayPay accepted" sign, and the Namba Walk page says cashless OK. 20 seats (Tabelog); counter 21, table 1 (Namba Walk page); Wi-Fi (Namba Walk page).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Walk underground mall, 1-bangai (Namba 2-1-14) — beside the Midosuji Line Namba Station north-west ticket gate, by the escalator to Kintetsu Osaka-Namba',
    cuisine: 'Kissa / coffee stand with a horseshoe counter, smoking allowed · morning sets 7:00–11:00: mini sandwich (egg and ham) with boiled egg and drink ¥470 (April 2025, January 2026), ¥500 (July 2026); hot dog with curry-flavoured cabbage, boiled egg and coffee ¥500 (July 2025, January 2026); cheese toast ¥500 (January 2026) · mixed sandwich set with salad and drink ¥700 (March and August 2025) · toast sandwich set (chicken ham, vegetables, cheese) ¥750 (January 2025) · pasta set, six pastas to choose from, with salad and drink ¥1,000 (July 2025) · pancakes (October 2026) · coffee ¥450 (January–February 2026), iced coffee ¥400 (April 2025), iced café latte ¥450 (September 2025), cappuccino',
    website: WALK, gmaps: gm('コーヒーショップエリカ なんばウォーク'), menu_url: null,
    notes: "[Kissa · Namba Walk, a smokers' coffee stand at the ticket gate] A Showa-style coffee shop in the Namba Walk underground mall, right by the Midosuji Line Namba Station ticket gate and the escalator up to Kintetsu Osaka-Namba. The kitchen sits inside a horseshoe counter, with a few tables in the middle; you order and pay first, and the food comes almost at once. It opens at 7:00, and the morning sets are the draw: a mini egg-and-ham sandwich, a hot dog with curry-flavoured cabbage, or cheese toast, each about ¥500 with a drink; the sandwich and hot dog sets add a boiled egg. One January 2026 diner called the price low enough to surprise even Nagoya. Later in the day there are sandwich sets, a pasta set and pancakes. This is one of the few cafés left where every seat allows smoking, and it is popular with salarymen; non-smokers in the 2025–2026 reviews found the smoke hard going. The coffee draws mixed notes, from aromatic to merely average, and one diner found it lukewarm.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'A long-established coffee shop near the station (January 2025 review); Tabelog reviews go back to March 2017. The Namba Walk shop page lists it in the 1-bangai section as a coffee stand serving freshly ground coffee with toast and hot dogs.', philosophy: 'Freshly ground coffee to stop in for between work and shopping, with toast and hot dogs; a horseshoe counter with a grown-up feel (Namba Walk shop page).', specialty: 'Cheap morning sets; coffee where smoking is allowed.',
      anecdotes: [
        { text: '"Outside, there was a sign advertising their morning menu, offering breakfast at an unbelievably low price that would surprise even Nagoya. This is Osaka for you." — January 2026, hot dog morning ¥500.', source: R + 'B520116450/' },
        { text: '"I was on the 8:00 AM Limited Express Hinotori, so I decided to grab a light breakfast beforehand… Mini Sandwich Morning Set - JPY 500. It even comes with a boiled egg!" — July 2026.', source: R + 'B345188886/' },
      ],
      japanese_sources_summary: '食べログ: コーヒーショップ エリカ、大阪市中央区難波2-1-14 なんばウォーク内、近鉄難波駅・地下鉄なんば駅から徒歩1分、毎日7:00〜22:00、予約不可、カード不可、電子マネー不可、QRコード決済可、20席、分煙 (禁煙席8席を追加)、カウンター、モーニングあり。なんばウォークのショップページ: コーヒーショップエリカ、一番街、カフェ、7:00〜22:00、お仕事やショッピングの合間に立ち寄れる挽きたてを味わえるコーヒースタンド、コーヒーに似合う馬蹄型カウンター、トーストやホットドッグも、地下鉄御堂筋線なんば駅改札からすぐ、カウンター21席・テーブル1席、喫煙可能、店内Wi-Fi、キャッシュレス可。口コミ (2024年10月〜2026年10月): 御堂筋線なんば駅の改札前、近鉄大阪難波駅へのエスカレーターの横、昭和レトロ、先に注文して支払う、全席喫煙可 (分煙から全面喫煙に変わった、18歳未満は入れないという声も)、モーニングは7:00〜11:00で、ミニサンド・ゆで卵・飲み物のセット470円 (2025年4月、2026年1月)、2026年7月は500円、カレー味のキャベツとソーセージのホットドッグのモーニング500円、チーズトーストのセット500円、ミックスサンドのセット700円、トーストサンドのセット750円、パスタ6種から選ぶセット1000円、コーヒー450円、アイスコーヒー400円、アイスカフェラテ450円、2026年10月にはパンケーキ、交通系ICで支払った人も、名古屋も驚く安さという声、たばこの煙がつらいという声、コーヒーがぬるかったという声も。',
      confidence: 'medium', sources: [TB, WALK, R + 'B345188886/', R + 'B493144265/', R + 'B498522287/', R + 'B501656641/', R + 'B502595772/', R + 'B511614703/', R + 'B476167296/', R + 'B520116450/', R + 'B520866645/', R + 'B520963623/', R + 'B521167688/', R + 'B523268377/', R + 'B537883182/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter first; smoking allowed at every seat (2025–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区難波2-1-14 なんばウォーク内 (一番街)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026; listed on the Namba Walk shop guide (walk.osaka-chikagai.jp, read 2026-10-30).' },
    pin_source: `Tabelog ${TB}; GSI resolves 大阪府大阪市中央区難波二丁目1番14号 (go) 128m away, but the shop is inside the Namba Walk underground mall (Tabelog address なんばウォーク内; Namba Walk shop page 一番街), so the street lot does not mark it and the pin rests on the Tabelog point alone; nearest other record osaka_kotan_namba_walk is 70 m away, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B345188886/', R + 'B493144265/', R + 'B501656641/', R + 'B502595772/', R + 'B511614703/', R + 'B520116450/', R + 'B520866645/', R + 'B521685434/'],
    price_note: 'Prices from reviews dated January 2025 to July 2026; the mini sandwich morning rose from ¥470 (April 2025, January 2026) to ¥500 (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Mini sandwich morning set (egg and ham mini sandwiches, boiled egg, drink; 7:00–11:00)', '¥500', 'Morning', 'no', 'no', 'July 2026; ¥470 in April 2025 and January 2026.', 'minisand_morning'),
      it('', '', 'Hot dog morning set (sausage and curry-flavoured cabbage, boiled egg, coffee)', '¥500', 'Morning', 'no', 'no', 'July 2025, January 2026.', 'hotdog_morning'),
      it('', '', 'Cheese toast set (morning)', '¥500', 'Morning', 'no', 'no', 'January 2026.', 'cheesetoast_morning'),
      it('', '', 'Mixed sandwich set (hot sandwich, small salad, drink)', '¥700', 'Sets', 'no', 'no', 'March and August 2025.', 'mixsand_set'),
      it('', '', 'Toast sandwich set (chicken ham, vegetables, cheese)', '¥750', 'Sets', 'no', 'no', 'January 2025.', 'toastsand_set'),
      it('', '', 'Pasta set (six pastas to choose from, salad, drink)', '¥1,000', 'Sets', 'no', 'no', 'July 2025; mushroom cheese cream fettuccine.', 'pasta_set'),
      it('', '', 'Coffee', '¥450', 'Drinks', '', '', 'January–February 2026.', 'coffee'),
      it('', '', 'Iced coffee', '¥400', 'Drinks', '', '', 'October 2024, April 2025.', 'icedcoffee'),
      it('', '', 'Iced café latte', '¥450', 'Drinks', '', 'no', 'September 2025.', 'icedlatte'),
    ] }, {
    cuisine: '馬蹄型カウンターの喫茶・コーヒースタンド、喫煙可・7:00〜11:00のモーニング: ミニサンド (たまごとハム) にゆで卵と飲み物 470円 (2025年4月、2026年1月)、500円 (2026年7月)、カレー味のキャベツのホットドッグにゆで卵とコーヒー 500円 (2025年7月、2026年1月)、チーズトースト 500円 (2026年1月)・サラダと飲み物つきのミックスサンドのセット 700円 (2025年3月・8月)・トーストサンドのセット (チキンハム、野菜、チーズ) 750円 (2025年1月)・6種から選べるパスタのセット、サラダと飲み物つき 1000円 (2025年7月)・パンケーキ (2026年10月)・コーヒー 450円 (2026年1〜2月)、アイスコーヒー 400円 (2025年4月)、アイスカフェラテ 450円 (2025年9月)、カプチーノ',
    neighborhood: 'なんばウォーク 一番街 (難波2-1-14)。御堂筋線なんば駅の北西改札の横、近鉄大阪難波駅へのエスカレーターのそば',
    gf_detail: 'グルテンフリーではありません。料理はトースト、サンドイッチ、ホットドッグ、パスタ、パンケーキ。小麦を使わないのはコーヒーと、モーニングにつくゆで卵。',
    vegan_detail: 'ヴィーガンではありません。モーニングにはゆで卵、サンドイッチはたまごとハム、ホットドッグはソーセージ、トーストはチーズ。カフェラテやカプチーノは牛乳入り。ブラックコーヒーなら大丈夫。',
    notes: '[喫茶・なんばウォーク、改札前の喫煙できるコーヒースタンド] なんばウォークの地下、御堂筋線なんば駅の改札のすぐ横、近鉄大阪難波駅へ上がるエスカレーターのそばにある昭和レトロな喫茶。馬蹄型のカウンターが厨房を囲み、まん中に少しテーブル。先に注文して支払うと、料理はすぐに出てくる。7時に開き、目当てはモーニング: たまごとハムのミニサンド、カレー味のキャベツのホットドッグ、チーズトーストのどれかに飲み物がついて500円ほどで、サンドとホットドッグにはゆで卵も。2026年1月には名古屋も驚く安さという声も。昼からはサンドイッチのセット、パスタのセット、パンケーキ。全席でたばこが吸える数少ない喫茶で、サラリーマンに人気。2025〜2026年の口コミでは、吸わない人には煙がつらいという声。コーヒーは香りがいいという声から普通という声まであり、ぬるかったという人も。',
  });
}

// ================================================================ ディッパーダン なんばウォーク店 — chain
skip('27057031', 'ディッパーダン なんばウォーク店: Dipper Dan crepe chain branch in Namba Walk. Review: "I think the prices are quite reasonable for a crepe chain." (August 2026, B523422040).');

save();
