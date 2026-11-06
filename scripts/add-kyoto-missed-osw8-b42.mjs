// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 42.
//   + 中国料理 皇家龍鳳 Koka Ryuho (Cantonese restaurant of RIHGA Royal Hotel Kyoto; core list)
//   + カンティーナ・ロッシ Cantina Rossi (couple-run ten-seat Italian in a Demachiyanagi lane; core list)
//   + 京洋食 まつもと Kyo Youshoku Matsumoto (Kyoto-vegetable yoshoku in a machiya off Shijo Omiya; notable list)
//   + ビヤレストラン ミュンヘン munchen (all-day beer hall and yoshoku off Shijo Kawaramachi; notable list)
//   - ギョウザ オウショウ 烏丸御池店 26027053 (notable): sub-brand of a large parent — christiantoday.co.jp (opened
//     2026-11-06) reports that Ohsho Food Service opened it as a new-concept 餃子の王将 store in 2016.
//   Coordinator correction (osw8-41 integration): restore the October 2026 review's complaint about some foreign guests'
//   buffet behaviour to kyoto_le_temps_granvia as a quoted, dated, attributed anecdote — see the patch after save().
//   Picked 2026-11-06 after batch 41. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips:
//   皇家龍鳳 26007133, カンティーナ・ロッシ 26000299. `next notable 200`: 26027053 (skipped), 京洋食 まつもと 26026885,
//   ビヤレストラン ミュンヘン 26004127. Same-name check, same brand or operator only: 皇家龍鳳 — one; a RIHGA Royal Hotel
//   Kyoto restaurant (hotel restaurants are drafted; 葵, Top of Kyoto and グルマン橘 are in data). カンティーナ・ロッシ — one.
//   京洋食 まつもと — one (the 鮨まつもと records are unrelated sushi shops). ミュンヘン — the crawl also lists ビヤレストラン
//   ハウスミュンヘン at the same address (a sister room) and ニューミュンヘン in Osaka (a different name); under five. None of the
//   four is in data/kyoto.json: grep by name and address (松明町1 B1F 皇家龍鳳, 吉田泉殿町57-1, 不動町171-4, 四条上ル一筋目東入ル
//   ミュンヘン) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
import { readCity, writeCity } from './lib-city.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-42');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26027053/', 'sub-brand of a large parent: GYOZA OHSHO, a 餃子の王将 (Ohsho Food Service) concept (christiantoday.co.jp, 2016)');

// ================================================================ 中国料理 皇家龍鳳 Koka Ryuho
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007133/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_koka_ryuho_rihga', name: '中国料理 皇家龍鳳 (Koka Ryuho, RIHGA Royal Hotel Kyoto)', category: 'OMNI',
    lat: 34.985805, lng: 135.752436, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cantonese courses of dim sum, sauces with soy and bean paste, fried rice and noodles; staff help tailor orders (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shark-fin soup, seafood, beef and chicken courses (2023–2025 reviews).',
    hours_raw: 'Daily 11:30–15:30 (last order 14:30) and 17:00–21:30 (last order 20:00); irregular closing days, see the hotel website (Tabelog). Reservations accepted (Tabelog). A 10% service charge (Tabelog original サービス料10%). 78 seats with private rooms for 4 to over 30 (room fee); stroller-friendly (Tabelog; December 2023). À la carte in small or medium plates (December 2023). Cards, e-money and QR (Tabelog). B1F of RIHGA Royal Hotel Kyoto; hotel parking free for 3 hours with a ¥4,000 spend from 1 April 2026; 7 min walk west of Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'RIHGA Royal Hotel Kyoto B1F — 7 min walk west of Kyoto Station',
    cuisine: 'Cantonese hotel restaurant with dim sum (Tabelog) · lunch courses such as the Kofuku lunch: Cantonese appetisers, shark-fin soup, dim sum (har gow, squid shumai), steamed sea bream with XO sauce, beef in sweet bean sauce with crepes, seafood fried rice with sauce, dessert (2023–2025 reviews) · casual lunch with steamed scallops and chicken in chao tian chili; shrimp chili two ways in small portions (2023–2024 reviews) · dinner courses with crab-enriched shark-fin soup (August 2024) · à la carte in small or medium plates · lunch ¥6,000–8,000, dinner ¥10,000–15,000 (Tabelog)',
    website: null, gmaps: gm('皇家龍鳳 リーガロイヤルホテル京都'), menu_url: null,
    notes: '[Cantonese · RIHGA Royal Hotel Kyoto B1F] The hotel\'s calm Cantonese room near Kyoto Station: lunch courses of appetisers, shark-fin soup, dim sum, XO-steamed sea bream and seafood fried rice, à la carte in small portions, and private rooms often used for family gatherings and memorials. Attentive service; one 2024 dinner guest found it merely average. Plus 10% service. Open daily.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the Chinese restaurant of RIHGA Royal Hotel Kyoto, with dim sum and private rooms; registered as an official listing by the operator. An October 2025 reviewer recalls the building was once the Kyoto Grand Hotel.',
      philosophy: null, specialty: 'Cantonese lunch course; dim sum.',
      anecdotes: [
        { text: 'For the hotel\'s 55th-anniversary lunch in December 2024, staff set the table to match what the guest had mentioned when booking.', source: R + 'B496751525/' },
        { text: 'After a memorial service in November 2025, a family gathered in a private room here around the late uncle\'s portrait.', source: R + 'B516778693/' },
        { text: 'An October 2023 diner could not find any shark fin in the shark-fin soup, but still found it very good.', source: R + 'B473879835/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・飲茶、下京区東堀川通り塩小路下ル松明町1 リーガロイヤルホテル京都 B1F、JR京都駅から西へ徒歩約7分、毎日 11:30〜15:30 (L.O.14:30)・17:00〜21:30 (L.O.20:00)、不定休、予約可、サービス料10%、78席、個室 (4名〜30名以上、別料金)、カード・電子マネー・QR 可、2026年4月1日から4,000円以上の利用でホテルの駐車場3時間無料。口コミ (2023年4月〜2025年11月、英語): 広東料理、「Kofuku」ランチ (前菜、ふかひれスープ、点心、XO 醤の鯛の蒸し物、牛肉の甜麺醤炒めとクレープ、海鮮のあんかけチャーハン、デザート)、カジュアルランチ (帆立の蒸し物、朝天唐辛子の鶏)、海老チリ2種、蟹入りのふかひれスープ、小皿と中皿のアラカルト、ベビーカーで個室へ、ホテル55周年のランチ、法事のあとの会食、平凡との声 (2024年8月)、昔の京都グランドホテル。',
      confidence: 'medium', sources: [TB, R + 'B463835097/', R + 'B465928199/', R + 'B473879835/', R + 'B476303309/', R + 'B490665917/', R + 'B490669519/', R + 'B496751525/', R + 'B501908774/', R + 'B515824631/', R + 'B516778693/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; 10% service; private rooms; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東堀川通り塩小路下ル松明町1 リーガロイヤルホテル京都 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; latest review November 2025.' },
    pin_source: `Tabelog ${TB} (34.985805, 135.752436); cross-checked: GSI 京都府京都市下京区松明町1番地 (lot) 48 m; kyoto_top_of_kyoto_rihga (same hotel) is 36 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; lunch ¥6,000–8,000, dinner ¥10,000–15,000 (Tabelog); plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Kofuku lunch course', '', 'Lunch', 'ask', 'no', '2023–2025 reviews.', 'kofuku_lunch'),
      it('', '', 'Steamed sea bream with XO sauce', '', 'Fish', 'ask', 'no', 'February 2025.', 'tai_xo'),
    ] }, {
    cuisine: '点心のあるホテルの広東料理 (食べログ)・「Kofuku」ランチなどのランチのコース: 広東の前菜、ふかひれスープ、点心 (海老餃子、いかの焼売)、鯛の XO 醤蒸し、牛肉の甜麺醤炒めとクレープ、海鮮のあんかけチャーハン、デザート (2023〜2025年の口コミ)・帆立の蒸し物と朝天唐辛子の鶏のカジュアルランチ、小さな2種の海老チリ (2023〜2024年の口コミ)・蟹の入ったふかひれスープのディナーコース (2024年8月)・小皿と中皿のアラカルト・昼6,000〜8,000円、夜10,000〜15,000円 (食べログ)',
    neighborhood: 'リーガロイヤルホテル京都の地下1階。京都駅から西へ徒歩7分',
    gf_detail: '要確認。点心、醤油や味噌系のたれ、チャーハン、麺の広東料理のコース。スタッフが注文の相談に乗ってくれる (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ふかひれスープ、魚介、牛、鶏のコース (2023〜2025年の口コミ)。',
    notes: '[広東料理・リーガロイヤルホテル京都の地下] 京都駅近くのホテルの落ち着いた広東料理店。前菜、ふかひれスープ、点心、鯛の XO 醤蒸し、海鮮のあんかけチャーハンのランチのコース、小皿のアラカルト、家族の集まりや法事に使われる個室。丁寧な接客。2024年の夜の客は平凡と感じた。別にサービス料10%。無休。',
  });
}

// ================================================================ カンティーナ・ロッシ Cantina Rossi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000299/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.cantinarossi.com/';
  const D = day(['18:00', '21:30']); const LD = day(['12:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_cantina_rossi_demachi', name: 'カンティーナ・ロッシ (Cantina Rossi)', category: 'OMNI',
    lat: 35.027530, lng: 135.775911, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: handmade fresh pasta is the heart of every course, with crostini, cutlets and tiramisu (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream and Gorgonzola pastas, nduja, lamb and beef cutlets, cheese and ham (2021–2026 reviews).',
    hours_raw: 'Tuesday, Thursday and Saturday 12:00–14:30 and 18:00–21:30; Monday, Wednesday and Friday 18:00–21:30; closed Sunday; hours may change (Tabelog). Reservations accepted and advised — about three groups fit at once (Tabelog; February 2024, August 2026). No e-money or QR (Tabelog). 10 seats; non-smoking (Tabelog). An iron sculpture marks the door, down a narrow residential lane; 7 min walk from Demachiyanagi Stn (Tabelog; February 2024).',
    hours: { 0: D, 1: LD, 2: D, 3: LD, 4: D, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yoshida, a residential lane — 7 min walk from Demachiyanagi Stn',
    cuisine: 'Small Italian on the ground floor of a house, run by a couple (June 2024; April 2025) · PRANZO pasta lunch from ¥2,670: three crostini or assorted appetisers, a choice of five or six pastas, and a drink; mixed-vegetable antipasto ¥1,300 (October 2025; August 2026) · fresh pasta: Gorgonzola cream, Amatriciana, nduja tomato cream, mushroom-lemon tagliatelle, eggplant and tomato; pasta split into half plates to share (2021–2026 reviews) · dinner omakase in the ¥4,800 range: bread, appetisers, two pastas, a choice of meat such as lamb or beef cutlet, dessert and coffee (June 2024) · tiramisu; Italian wines (2023–2025 reviews) · lunch ¥1,000–2,000, dinner ¥6,000–8,000 (Tabelog)',
    website: WEB, gmaps: gm('カンティーナ・ロッシ 出町柳'), menu_url: null,
    notes: '[Italian · Demachiyanagi back lane, couple-run] A ten-seat Italian tucked in a residential lane behind an iron sculpture, run by a friendly couple: handmade pastas such as Gorgonzola cream or Amatriciana, crostini, lamb or beef cutlet, tiramisu and Italian wine, at prices reviewers call remarkable — lunch from ¥2,670, a dinner omakase near ¥4,800. Pastas can be split to share. Book; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed) (June 2024; April 2025 reviews)'], origin: null,
      background: 'Per Tabelog: an Italian restaurant near Demachiyanagi with a website at cantinarossi.com. Reviewers describe a couple running the ground floor of a house in a residential area (June 2024; April 2025), and say it was listed as a Michelin Bib Gourmand in 2021 and 2022 (September 2021; March 2022).',
      philosophy: null, specialty: 'Handmade pasta; cream pastas.',
      anecdotes: [
        { text: 'An August 2026 pair, waiting outside before noon, were waved in three minutes early with a "Please come in".', source: R + 'B534775655/' },
        { text: 'A September 2021 diner who mentioned a birthday found a surprise on the plate.', source: R + 'B461116548/' },
        { text: 'A January 2026 couple, the only guests that evening, had the pasta served divided onto two plates.', source: R + 'B523591748/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、左京区吉田泉殿町57-1、京阪出町柳駅から徒歩7分、火・木・土 12:00〜14:30・18:00〜21:30、月・水・金 18:00〜21:30、日曜定休、予約可、電子マネー・QR 不可、10席、禁煙。口コミ (2021年9月〜2026年8月、英語): 住宅街の路地、鉄のオブジェ、家の1階、夫婦で営む、3組ほどで満席、ランチ PRANZO 2,670円から (クロスティーニ3種、5〜6種から選ぶパスタ、ドリンク)、野菜の前菜の盛り合わせ1,300円、生パスタ (ゴルゴンゾーラのクリーム、アマトリチャーナ、ンドゥイヤのトマトクリーム、きのことレモンのタリアテッレ、茄子とトマト)、取り分けて半量ずつ、夜のおまかせ4,800円台 (パン、前菜、パスタ2種、羊や牛のカツレツ、デザート、ドリンク)、ティラミス、イタリアワイン、ミシュランのビブグルマン (2021年・2022年) との声、誕生日のサプライズ。',
      confidence: 'medium', sources: [TB, WEB, R + 'B446844093/', R + 'B461091171/', R + 'B461116548/', R + 'B480410469/', R + 'B487381539/', R + 'B503636251/', R + 'B505229265/', R + 'B514808745/', R + 'B523591748/', R + 'B534775655/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (10 seats); pasta can be split to share; no e-money or QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区吉田泉殿町57-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.027530, 135.775911); cross-checked: GSI 京都府京都市左京区吉田泉殿町57番地 (lot) 20 m; nearest Kyoto record 134 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514808745/', R + 'B487381539/'],
    price_note: 'Prices from June 2024, October 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'PRANZO pasta lunch (crostini, pasta, drink)', '¥2,670', 'Lunch', 'no', 'no', 'From; October 2025.', 'pranzo'),
      it('', '', 'Mixed vegetable antipasto', '¥1,300', 'Antipasti', 'ask', 'ask', 'October 2025.', 'veg_antipasto'),
      it('', '', 'Dinner omakase', '¥4,800', 'Dinner', 'no', 'no', 'About; June 2024.', 'omakase'),
    ] }, {
    cuisine: '夫婦で営む家の1階の小さなイタリアン (2024年6月、2025年4月)・ランチ PRANZO 2,670円から: クロスティーニ3種か前菜の盛り合わせ、5〜6種から選ぶパスタ、ドリンク、野菜の前菜の盛り合わせ1,300円 (2025年10月、2026年8月)・生パスタ: ゴルゴンゾーラのクリーム、アマトリチャーナ、ンドゥイヤのトマトクリーム、きのことレモンのタリアテッレ、茄子とトマト、取り分け用に半量ずつ (2021〜2026年の口コミ)・夜のおまかせは4,800円台: パン、前菜、パスタ2種、羊や牛のカツレツから選ぶ肉、デザート、コーヒー (2024年6月)・ティラミス、イタリアワイン (2023〜2025年の口コミ)・昼1,000〜2,000円、夜6,000〜8,000円 (食べログ)',
    neighborhood: '吉田の住宅街の路地。出町柳駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。どのコースも手打ちの生パスタが中心で、クロスティーニ、カツレツ、ティラミスも (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームやゴルゴンゾーラのパスタ、ンドゥイヤ、羊や牛のカツレツ、チーズと生ハム (2021〜2026年の口コミ)。',
    notes: '[イタリアン・出町柳の路地、夫婦の店] 住宅街の路地、鉄のオブジェの奥の10席のイタリアン。気さくな夫婦が営む。ゴルゴンゾーラのクリームやアマトリチャーナの手打ちパスタ、クロスティーニ、羊や牛のカツレツ、ティラミス、イタリアワインを、驚くほどの値段で。ランチは2,670円から、夜のおまかせは4,800円ほど。パスタは取り分けてくれる。予約を。日曜休み。',
  });
}

// ================================================================ 京洋食 まつもと Kyo Youshoku Matsumoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026885/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kyo_yoshoku_matsumoto', name: '京洋食 まつもと (Kyo Youshoku Matsumoto)', category: 'OMNI',
    lat: 35.006198, lng: 135.755640, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: demi-glace hamburg, omurice with hayashi or demi-glace, tonkatsu and beef cutlet (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg, ginger pork, steak, cutlets and pork miso soup (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–15:00 (last entry 14:15) and 18:00–22:00 (last entry 21:00); closed Monday (open on holiday Mondays, closed the next Tuesday) plus further posted days — in November 2026 the 2nd, 9th, 10th, 16th, 24th and 30th (Tabelog). Reservations accepted; tatami seats by phone request; change times by phone (Tabelog). At dinner, a ¥500 charge if you do not order food (Tabelog original ディナー時間帯は食事をされない場合はチャージ料￥５００). 37 seats: 9 at the counter and 28 at tables incl. 8 on tatami; private room (Tabelog). Cards; PayPay per a July 2026 review (Tabelog; July 2026). A machiya with a Jizo shrine; 8 min walk from Karasuma or Shijo stations (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fudo-cho, west of Shijo Karasuma — 8 min walk from Shijo Stn',
    cuisine: 'Yoshoku with Kyoto vegetables and meats in a machiya (Tabelog; October 2026) · set meals with plenty of grilled vegetables, rice and pork miso soup: "adult" hamburg with tomato sauce or demi-glace, ginger pork with a caper sauce, beef cutlet, tonkatsu, strip loin steak (2026 reviews) · fluffy soufflé omurice with demi-glace or hayashi (August–October 2026) · courses with a Kyoto-vegetable salad, two appetisers, a main, rice and tonjiru, dessert (October 2026) · pickles to buy on the way out (August 2026) · lunch ¥2,000–3,000, dinner ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('京洋食 まつもと 不動町'), menu_url: null,
    notes: '[Yoshoku · machiya west of Shijo Karasuma, Kyoto vegetables] A calm machiya with a Jizo shrine serving yoshoku built around Kyoto produce: demi-glace or tomato hamburg, caper-sauced ginger pork, beef cutlet and a soufflé omurice, each with a heap of grilled vegetables and pork miso soup. Some find the flavours unusual — one guest tasted liver in the hamburg. Book; closed Monday and posted days.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a machiya-style yoshoku restaurant with a Jizo shrine, using Kyoto vegetables and meats; registered as an official listing by the shop, which offers message plates with dessert by phone request. Reviewers in 2026 describe a popular, calm restaurant with reservations streaming in at opening (October 2026).',
      philosophy: 'Kyoto vegetables and meats in yoshoku (October 2026 review).', specialty: 'Hamburg steak; omurice.',
      anecdotes: [
        { text: 'An August 2026 diner found pink peppercorns piled on the salad and a hamburg tasting strongly of liver, almost like pâté.', source: R + 'B533581423/' },
        { text: 'An October 2026 mother and daughter, put off the hamburg by reviews mentioning liver, chose the demi-glace omurice and loved it.', source: R + 'B536597365/' },
        { text: 'A fourth-visit regular in August 2026 always orders the adult hamburg with tomato sauce.', source: R + 'B499839185/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・ビストロ・ステーキ、中京区不動町171-4、阪急烏丸駅・地下鉄四条駅から徒歩8分、火〜日 11:30〜15:00 (最終入店14:15)・18:00〜22:00 (最終入店21:00)、月曜定休 (祝日は営業し翌火曜休み)、ほかの休み (11月: 2・9・10・16・24・30日)、予約可 (座敷は電話で、時間変更は電話で)、ディナー時間帯は食事をされない場合はチャージ料500円、37席 (カウンター9、テーブル28、うち座敷8)、個室、カード可、メッセージプレートはデザート注文時に電話で、お地蔵さんのある町家風の洋食店。口コミ (2026年6月〜10月、英語): 京野菜と京都の肉、焼き野菜たっぷり、豚汁、トマトソースのハンバーグ、デミグラスのハンバーグ (レバーの味がするとの声)、ケッパーのソースの生姜焼き、牛カツ、とんかつ、ステーキ、スフレのオムライス (デミグラス、ハヤシ)、京野菜のサラダと前菜2種のコース、帰りに漬物を買える、PayPay 可 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B499839185/', R + 'B532687151/', R + 'B533581423/', R + 'B533632479/', R + 'B533971266/', R + 'B534313674/', R + 'B535618291/', R + 'B536597365/', R + 'B538328155/', R + 'B538743911/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; phone for tatami or time changes; ¥500 charge at dinner without food; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区不動町171-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006198, 135.755640); cross-checked: GSI 京都府京都市中京区不動町171番地 (lot) 17 m; nearest Kyoto record 37 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices read; lunch ¥2,000–3,000, dinner ¥6,000–8,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Adult hamburg steak with tomato sauce', '', 'Mains', 'no', 'no', 'August 2026.', 'hamburg_tomato'),
      it('', '', 'Soufflé omurice with demi-glace', '', 'Mains', 'no', 'no', 'October 2026.', 'omurice'),
      it('', '', 'Ginger pork set', '', 'Mains', 'ask', 'no', 'August 2026.', 'ginger_pork'),
    ] }, {
    cuisine: '町家で京野菜と京都の肉の洋食 (食べログ、2026年10月)・焼き野菜たっぷり、ご飯と豚汁の定食: トマトソースかデミグラスのハンバーグ、ケッパーのソースの生姜焼き、牛カツ、とんかつ、サーロインのステーキ (2026年の口コミ)・ふわふわのスフレのオムライス、デミグラスかハヤシ (2026年8〜10月)・京野菜のサラダ、前菜2種、メイン、ご飯と豚汁、デザートのコース (2026年10月)・帰りに漬物も買える (2026年8月)・昼2,000〜3,000円、夜6,000〜8,000円 (食べログ)',
    neighborhood: '四条烏丸の西の不動町。四条駅から徒歩8分',
    gf_detail: 'グルテンフリー不可。デミグラスのハンバーグ、ハヤシやデミグラスのオムライス、とんかつ、牛カツ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、生姜焼き、ステーキ、カツ、豚汁 (2026年の口コミ)。',
    notes: '[洋食・四条烏丸の西の町家、京野菜] お地蔵さんのある落ち着いた町家で、京都の食材の洋食。デミグラスかトマトのハンバーグ、ケッパーのソースの生姜焼き、牛カツ、スフレのオムライスに、山盛りの焼き野菜と豚汁。味が独特と感じる人もいて、ハンバーグにレバーの味を感じた客も。予約を。月曜と告知の日は休み。',
  });
}

// ================================================================ ビヤレストラン ミュンヘン munchen
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004127/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'kyoto_beer_restaurant_munchen', name: 'ビヤレストラン ミュンヘン (Beer Restaurant munchen)', category: 'OMNI',
    lat: 35.004282, lng: 135.769849, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kara-age, tonkatsu with demi-glace, fries, tacos and beer (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, pork cutlet, sausages, roast beef and smoked salmon (2026 reviews).',
    hours_raw: 'Daily 11:30–23:00 (last order 22:00), open straight through (Tabelog; August 2026). Reservations accepted; banquet courses for 4 or more by the day before; call for 11 or more (Tabelog). 289 seats: 1F with 66 in the Ohenback area and 23 standing, 2F with 200; private rooms; non-smoking; wheelchair accessible; karaoke and projector (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). In the first lane east off Kawaramachi north of Shijo; 3 min walk from Kyoto-Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off Kawaramachi north of Shijo — 3 min walk from Kawaramachi Stn',
    cuisine: 'Beer hall with nostalgic yoshoku and beer delivered fresh from the brewery (Tabelog) · draught in many sizes up to a 1 L mug; Hoegaarden on tap; pitchers; dark and half-and-half (2026 reviews) · signature kara-age of chicken breast, large and crisp (September–October 2026) · lunch sets: tonkatsu with demi-glace ¥1,250, plain omelette set ¥1,050 (May–October 2026) · "quick drink set" of a beer and two small plates ¥1,250 (e.g. omelette, seafood salad, roast beef, smoked salmon) (August–October 2026) · sausage platter, fries, popcorn; banquet courses with all-you-can-drink, tacos, mini steak, mini curry (August 2026) · about ¥2,000–4,000 (Tabelog)',
    website: null, gmaps: gm('ビヤレストラン ミュンヘン 河原町'), menu_url: null,
    notes: '[Beer hall · Shijo Kawaramachi lane, open all day] A big, old-school beer restaurant just off Kawaramachi, open from 11:30 straight to 23:00: brewery-fresh draught in sizes up to a litre, Hoegaarden on tap, a famous crisp kara-age of chicken breast, demi-glace tonkatsu sets at lunch and a ¥1,250 beer-and-two-plates afternoon set. Families at lunch, parties at night. Open daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen and hall staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a beer hall serving nostalgic yoshoku with freshly brewed beer delivered from the brewery; registered as an official listing by the operator. Our crawls also list ビヤレストラン ハウスミュンヘン at the same address.',
      philosophy: 'Nostalgic yoshoku with brewery-fresh beer (Tabelog).', specialty: 'Kara-age; draught beer.',
      anecdotes: [
        { text: 'An October 2026 regular on a sixth visit had the tonkatsu set — "It\'s a shame I can\'t drink beer, though," noted on an earlier visit in May.', source: R + 'B501272640/' },
        { text: 'An October 2026 group booked at 17:00 the day before and stayed four hours over a one-litre mug.', source: R + 'B537565026/' },
        { text: 'An October 2026 wedding party found it one of the few places open for drinks at 14:30 on a Sunday.', source: R + 'B538615942/' },
      ],
      japanese_sources_summary: '食べログ: ビアホール・洋食・唐揚げ、中京区河原町通四条上ル一筋目東入ル、阪急河原町駅から徒歩3分、京阪祇園四条駅から徒歩5分、毎日 11:30〜23:00 (L.O.22:00)、予約可 (宴会コースは4名以上・前日まで、11名以上は電話で)、289席 (1階 66席と立ち飲み23、2階200席)、個室、禁煙、車椅子可、カラオケ、プロジェクター、カード・電子マネー・QR 可、醸造所直送の生ビールと懐かしい洋食。口コミ (2026年5月〜10月、英語): ビールのサイズが豊富 (1L のジョッキも)、ヒューガルデンの生、ピッチャー、黒とハーフ&ハーフ、名物の胸肉の唐揚げ、とんかつ定食1,250円 (デミグラス)、プレーンオムレツの定食1,050円、「quick drink」のセット1,250円 (ビールと2品)、ソーセージの盛り合わせ、フライドポテト、ポップコーン、飲み放題の宴会コース、昼から夜まで通し営業、家族連れも。',
      confidence: 'medium', sources: [TB, R + 'B501272640/', R + 'B533784286/', R + 'B533881938/', R + 'B534520443/', R + 'B534980294/', R + 'B535986188/', R + 'B536745480/', R + 'B536931169/', R + 'B537565026/', R + 'B538615942/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Big hall, easy to walk in; banquet courses by the day before; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通四条上ル一筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004282, 135.769849); the address has no lot number, so loc_precise false; kyoto_tai_sushi_kawaramachi (same lane) is 8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501272640/', R + 'B536931169/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkatsu set with demi-glace', '¥1,250', 'Lunch', 'no', 'no', 'October 2026.', 'tonkatsu_set'),
      it('', '', 'Quick drink set (beer and two small plates)', '¥1,250', 'Sets', 'no', 'no', 'October 2026.', 'choinomi_set'),
      it('', '', 'Kara-age', '', 'Signature', 'no', 'no', '2026 reviews.', 'karaage'),
    ] }, {
    cuisine: '醸造所直送のビールと懐かしい洋食のビアホール (食べログ)・1L のジョッキまで豊富なサイズの生ビール、ヒューガルデンの生、ピッチャー、黒やハーフ&ハーフ (2026年の口コミ)・名物の大きくカリッとした胸肉の唐揚げ (2026年9〜10月)・ランチ: デミグラスのとんかつ定食1,250円、プレーンオムレツの定食1,050円 (2026年5〜10月)・ビールと小皿2品の「quick drink」のセット1,250円 (例: オムレツ、魚介のマリネサラダ、ローストビーフ、スモークサーモン) (2026年8〜10月)・ソーセージの盛り合わせ、フライドポテト、ポップコーン、飲み放題の宴会コース (タコス、ミニステーキ、ミニカレー) (2026年8月)・2,000〜4,000円ほど (食べログ)',
    neighborhood: '四条の北の河原町通から入った路地。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。唐揚げ、デミグラスのとんかつ、フライドポテト、タコス、ビール (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の唐揚げ、とんかつ、ソーセージ、ローストビーフ、スモークサーモン (2026年の口コミ)。',
    notes: '[ビアホール・四条河原町の路地、通し営業] 河原町から少し入った昔ながらの大きなビアレストラン。11時半から23時まで通しで、1L まで選べる醸造所直送の生ビール、ヒューガルデンの生、名物のカリッとした胸肉の唐揚げ、昼はデミグラスのとんかつ定食、午後はビールと2品の1,250円のセット。昼は家族連れ、夜は宴会でにぎわう。無休。',
  });
}

save();

// ================================================================ Le Temps: restore the buffet-behaviour complaint (coordinator, osw8-41)
{
  const k = readCity('kyoto');
  const p = k.places.find(x => x.id === 'kyoto_le_temps_granvia');
  const src = 'https://tabelog.com/en/kyoto/A2601/A260101/26001955/dtlrvwlst/B536865159/';
  const text = '"I found it really unpleasant when some foreign guests pushed in from the side and placed the tongs in different spots right in front of me. I noticed the staff had to address this issue repeatedly" — October 2026.';
  if (!p) console.log('le temps: record not found');
  else if (p.chef_bio.anecdotes.some(a => a.text === text)) console.log('le temps: anecdote already present');
  else { p.chef_bio.anecdotes.push({ text, source: src }); writeCity('kyoto', k); console.log('le temps: buffet-behaviour anecdote restored'); }
}
