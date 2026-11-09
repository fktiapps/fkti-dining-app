// Kyoto priority (kyoto-missed), worker osw13, batch 124 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Toru Cafe, カフェ五龍閣, 酒パーク PINN, はらぺこ (Takeyamachi). Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; 酒パーク PINN is the sister of SUMIYA PINN kyoto_sumiya_pinn — different format, flagged; this はらぺこ is unrelated to the udon shop kyoto_harapeko_udon_wakatake).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-124');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26032356', 'too thin: 時忘舎 (café in a renovated former barley mill by the Shirakawa, Okazaki) — newest review July 2023, none from 2025–26');

// ================================================================ Toru Cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '15:00']);
  put({
    id: 'kyoto_toru_cafe', name: 'Toru Cafe', category: 'OMNI',
    lat: 34.993222, lng: 135.759937, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast, roll-bread and baguette sandwiches, hot dogs, Napolitan and hayashi rice (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and ham sandwiches, cheese toast, hot dogs and cream with the coffee (2022–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Fri, Sat 7:00–15:00; closed Wednesday and Sunday; hours may change. Morning sets 7:00–11:00 from about ¥650 (May 2025). Food sells out by mid-afternoon and orders may stop around 14:00 (February 2024; December 2025). No reservations (confirmed by phone, October 2025). Cash only. 23 seats, counter at the back; non-smoking. Directly across from Higashi Hongan-ji, 4 min from Gojo Station.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Opposite Higashi Hongan-ji — 4 min from Gojo',
    cuisine: 'A quiet morning café in a renovated machiya opposite Higashi Hongan-ji, with hand-poured blends, thick toast and the owner\'s vintage audio playing records and reel-to-reel tape (Tabelog; 2022–2025 reviews) · morning sets 7:00–11:00 from about ¥650: roll-bread set with egg and ham ¥650 (May 2022); cheese toast set ¥740 (July 2024); cinnamon-sugar toast; hot dog on a baguette (November 2025) · house blend ¥450, with real whipped cream (February 2024); café au lait at no extra charge; royal milk tea · mixed sandwich and coffee ¥1,000 (February 2025) · hayashi rice; Napolitan set (2022–2025)',
    website: null, gmaps: gm('Toru Cafe 東本願寺'), menu_url: null,
    notes: '[Kissaten · Higashi Hongan-ji, a 7 am machiya café] A calm, retro-styled café facing the temple gates, opening at 7: hand-poured house blend, thick cheese toast or a baguette hot dog, with records and reel-to-reel tapes on the owner\'s vintage hi-fi. Morning sets from about ¥650. Cash only. Closed Wed and Sun; orders may stop around 2 pm.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed couple)'], origin: null,
      background: 'Reviewers describe a kind, calm older couple running the café (February 2024, July 2024, November 2025); in January 2023 the master was working alone. The vintage audio equipment and reel-to-reel deck seem to reflect the owner\'s taste (March 2022; November 2025).',
      philosophy: null,
      specialty: 'Morning sets; hand-poured blend coffee.',
      anecdotes: [
        { text: 'November 2025: "I sat at the counter in the back, where a nostalgic array of audio equipment lined the wall. It wasn\'t just for decoration; at that moment, the open reel deck was actively in use."', source: R + 'B518450369/' },
        { text: 'February 2024: "It seems to be run by a kind couple… by around 2 PM on this particular weekend, most of the food items were sold out and new orders were being turned away."', source: R + 'B479080296/' },
        { text: 'December 2025: "I noticed that the person who came in after me was turned away because they stopped taking orders at 2 PM."', source: R + 'B519498896/' },
      ],
      japanese_sources_summary: '食べログ: Toru Cafe、カフェ、下京区烏丸2-307 (住所の表記のまま)、五条駅から徒歩4分、月・火・木・金・土7:00〜15:00、水・日休み、予約不可 (2025年10月に電話で確認)、カード・電子マネー・QR不可、23席、禁煙。口コミ (2022年3月〜2025年12月、英語): 東本願寺の真向かいの町家のカフェ、店主のオーディオでレコードやオープンリールの音楽、モーニング7〜11時 (ロールパンのセット650円、チーズトーストのセット740円、シナモンシュガートースト、バゲットのホットドッグ)、ハウスブレンド450円 (生クリーム添え)、ミックスサンドとコーヒー1,000円、ハヤシライス、ナポリタン、穏やかな夫婦が営む、午後は売り切れや14時ごろの注文終了あり、現金のみ。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B447290297', 'B449384071', 'B456848017', 'B459079424', 'B479080296', 'B488201835', 'B501226714', 'B508186052', 'B518450369', 'B519498896'])) },
    cultural_comfort: { level: 'friendly', note: 'Calm morning café; cash only; food can sell out by early afternoon.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府下京区烏丸2-307',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (reservation policy confirmed by phone, October 2025); reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (34.993222, 135.759937); the Tabelog address (下京区烏丸2-307) is irregular and GSI matches only 烏丸二丁目 (about 45m), so approximate; reviewers place it directly across from Higashi Hongan-ji; nearest pin kyoto_new_taiho 112.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B449384071/', R + 'B479080296/', R + 'B488201835/'],
    price_note: 'Prices from 2022–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cheese toast morning set', '¥740', 'Breakfast', 'no', 'no', 'July 2024.', 'cheese_toast_set'),
      it('', '', 'Roll-bread morning set (egg and ham)', '¥650', 'Breakfast', 'no', 'no', 'May 2022.', 'roll_bread_set'),
      it('', '', 'House blend coffee', '¥450', 'Drink', 'ask', 'ask', 'February 2024; served with whipped cream.', 'house_blend'),
      it('', '', 'Mixed sandwich and coffee set', '¥1,000', 'Lunch', 'no', 'no', 'February 2025.', 'mix_sandwich_set'),
    ] }, {
    cuisine: '東本願寺の向かいの町家を改装した静かな朝のカフェ。ハンドドリップのブレンドと厚切りのトースト、店主のヴィンテージのオーディオからレコードやオープンリールの音楽 (食べログ、2022〜2025年の口コミ)・7〜11時のモーニング650円ほどから: 卵とハムのロールパンのセット650円 (2022年5月)、チーズトーストのセット740円 (2024年7月)、シナモンシュガートースト、バゲットのホットドッグ (2025年11月)・ハウスブレンド450円、本物の生クリーム添え (2024年2月)、追加料金なしのカフェオレ、ロイヤルミルクティー・ミックスサンドとコーヒー1,000円 (2025年2月)・ハヤシライス、ナポリタンのセット (2022〜2025年)',
    neighborhood: '東本願寺の向かい。五条から徒歩4分',
    gf_detail: 'グルテンフリーではない: トースト、ロールパンやバゲットのサンド、ホットドッグ、ナポリタン、ハヤシライス (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵やハムのサンド、チーズトースト、ホットドッグ、コーヒーに添える生クリーム (2022〜2025年の口コミ)。',
    notes: '[喫茶店・東本願寺、朝7時からの町家カフェ] 寺の門の向かいにある落ち着いたレトロなカフェ。7時から、ハンドドリップのハウスブレンドに厚いチーズトーストやバゲットのホットドッグ、店主のヴィンテージのオーディオからレコードやオープンリールの音。モーニングは650円ほどから。現金のみ。水・日休み。14時ごろに注文を締めることも。',
  });
}

// ================================================================ カフェ五龍閣
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042550/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_cafe_goryukaku', name: 'カフェ五龍閣 (Cafe Goryukaku)', category: 'OMNI',
    lat: 34.995759, lng: 135.781139, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pound cake, hot sandwiches and curry, and mitarashi dango with a soy-based sauce (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu leans on tofu and soy milk (soy-milk matcha latte, tofu-flavoured warabi mochi; September–October 2026), but cream soda, ice cream and pound cake are dairy and no vegan labelling is mentioned.',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 11:00–18:00; closed Wednesday; hours may change. No reservations for the café. Self-service: order and pay at a ticket machine or tablet, then collect your order when your number is called; water is self-service (August–September 2026). Cards and QR codes; no e-money. Non-smoking. The café on the 1st floor is free to enter; the 2nd floor is shown on paid, bookable tours during special openings (September 2026). In a Taisho-era Western-style house on a side street off Kiyomizu-zaka.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just off Kiyomizu-zaka, below Kiyomizu-dera',
    cuisine: 'A self-service café on the ground floor of a Taisho-era Western-style villa, a registered cultural property with stained glass, tiles and paintings by Takehisa Yumeji, serving tea-time sweets and light meals (Tabelog; 2026 reviews) · cream soda ¥1,000 (August 2026) · pound cake made with sweet potato, with matcha ice cream (September–October 2026) · warabi mochi with matcha and plain syrup; freshly grilled dango with mitarashi, matcha and kinako sauces (September–October 2026) · strawberry kakigori (September 2026) · spicy curry; hot sandwich (August–September 2026) · Sarutahiko coffee, about ¥700; café au lait; soy-milk matcha latte; drinks with alcohol',
    website: null, gmaps: gm('カフェ五龍閣 清水'), menu_url: null,
    notes: '[Café · Kiyomizu-zaka, tea in a Taisho villa] Step off the crowded slope into a quiet ground-floor café in a Taisho-era Western villa: stained glass, a tiled table, a fireplace, a courtyard fountain and Yumeji paintings. Cream soda, sweet-potato pound cake, grilled dango and curry; order at the machine. About ¥1,000–2,500. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2026) describe the café as occupying the 1st floor of the former Matsukaze family residence, designed by the architect Takeda Goichi and registered as a national tangible cultural property in 1999 (September 2026); the 2nd floor, with views of the Yasaka pagoda, opens for paid guided tours. The operator is not named in the sources; one reviewer noted the tofu-forward menu and that it stands among yudofu restaurants.',
      philosophy: null,
      specialty: 'Café in a cultural-property villa; sweets and light meals.',
      anecdotes: [
        { text: 'August 2026: "While the second floor requires an admission fee for viewing, the first-floor cafe is open to everyone without any entry fee… You can relax in a serene environment that feels completely detached from the hustle and bustle of Kiyomizu-dera."', source: R + 'B533742281/' },
        { text: 'September 2026: "As for the food… it was very tofu-centric! … my daughter struggled with the strong tofu flavor of the warabi mochi."', source: R + 'B536491342/' },
        { text: 'September 2026: "The service is self-service (you order and pick up via a machine), so if you\'re looking for a more classic atmosphere, I recommend…"', source: R + 'B536087488/' },
      ],
      japanese_sources_summary: '食べログ: カフェ五龍閣、カフェ、東山区清水寺門前2-239、清水五条から1,141m、月・火・木〜日11:00〜18:00、水曜休み、予約不可、カード・QR可、電子マネー不可、禁煙。口コミ (2026年8〜11月、英語): Takeda Goichi設計の旧Matsukaze家住宅 (1999年登録有形文化財) の1階のカフェ、入場無料、2階は有料の見学ツアー、ステンドグラス、タイル、暖炉、噴水、Takehisa Yumejiの絵、券売機やタブレットで注文するセルフサービス、クリームソーダ1,000円、さつまいものパウンドケーキと抹茶アイス、わらび餅、焼きたての団子 (みたらし・抹茶・きなこ)、いちごのかき氷、カレー、ホットサンド、Sarutahikoのコーヒー、豆乳抹茶ラテ、豆腐の風味が強いとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B533742281', 'B533846976', 'B534751463', 'B535359602', 'B535887181', 'B536087488', 'B536254240', 'B536491342', 'B536999969', 'B537341425', 'B538785200'])) },
    cultural_comfort: { level: 'english_friendly', note: 'Order at a machine or tablet; self-service; free to enter the café.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水寺門前2-239',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August to November 2026.' },
    pin_source: `Tabelog ${TB} (34.995759, 135.781139); GSI lot 京都府京都市東山区清水二丁目239番地 about 4m away; nearest pin kyoto_mendokoro_maruto_kiyomizu 42.8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533742281/', R + 'B535359602/', R + 'B537341425/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cream soda', '¥1,000', 'Drink', 'ask', 'no', 'August 2026.', 'cream_soda'),
      it('', '', 'Sweet-potato pound cake with matcha ice cream', '', 'Sweets', 'no', 'no', 'September–October 2026.', 'pound_cake'),
      it('', '', 'Grilled dango (mitarashi, matcha, kinako)', '', 'Sweets', 'no', 'ask', 'September–October 2026.', 'dango'),
      it('', '', 'Curry', '', 'Main', 'ask', 'no', 'August–September 2026.', 'curry'),
      it('', '', 'Coffee', 'about ¥700', 'Drink', 'ask', 'ask', 'September 2026.', 'coffee'),
    ] }, {
    cuisine: 'ステンドグラスやタイル、Takehisa Yumejiの絵がある登録有形文化財の大正期の洋館の1階のセルフサービスのカフェ。甘味と軽食 (食べログ、2026年の口コミ)・クリームソーダ1,000円 (2026年8月)・抹茶アイスを添えたさつまいものパウンドケーキ (2026年9〜10月)・抹茶と黒みつのわらび餅、みたらし・抹茶・きなこの焼きたての団子 (2026年9〜10月)・いちごのかき氷 (2026年9月)・辛口のカレー、ホットサンド (2026年8〜9月)・Sarutahikoのコーヒー700円ほど、カフェオレ、豆乳の抹茶ラテ、お酒も',
    neighborhood: '清水坂のすぐ脇、清水寺の下',
    gf_detail: 'グルテンフリーではない: パウンドケーキ、ホットサンド、カレー、しょうゆのみたらしの団子 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認: 豆腐や豆乳を使う品が多い (豆乳抹茶ラテ、豆腐の風味のわらび餅、2026年9〜10月) が、クリームソーダ、アイス、パウンドケーキは乳製品で、ヴィーガンの表示の記載はない。',
    notes: '[カフェ・清水坂、大正の洋館でお茶] にぎやかな坂から一歩入った、大正期の洋館の1階の静かなカフェ。ステンドグラス、タイルのテーブル、暖炉、中庭の噴水、Yumejiの絵。クリームソーダ、さつまいものパウンドケーキ、焼き団子、カレー。注文は券売機で。1,000〜2,500円ほど。水曜休み。',
  });
}

// ================================================================ 酒パーク PINN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042304/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '22:00']), S = day(['12:00', '20:00']);
  put({
    id: 'kyoto_sake_park_pinn', name: '酒パーク PINN (Sake Park PINN)', category: 'OMNI',
    lat: 35.016303, lng: 135.768613, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried pasta as the starter, pastas, fritters, bruschetta and fried dishes (2025–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: small plates of conger eel, karasumi, anchovy, lamb, duck, gizzards and soft-shell crab (2025–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat and public holidays 12:00–22:00; Sun 12:00–20:00; closed Monday, plus irregular days posted on Instagram. Open from noon for daytime drinking. Reservations taken (Instagram also used, March 2026). Cards; no e-money or QR codes. A U-shaped counter around the kitchen; non-smoking inside, an ashtray outside. Assorted appetizers ¥1,000 (or ¥2,000 for two); most plates ¥480–880; drinks from about ¥700 (2026). Over 60 drinks: natural wine, sake, gin, shochu, craft beer. On Shin-Sawaragi-cho-dori north of Takeyamachi, 389 m from Jingu-Marutamachi.',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shin-Sawaragi-cho-dori by Takeyamachi — 389 m from Jingu-Marutamachi',
    cuisine: 'A daytime-drinking counter bar from the team behind SUMIYA PINN, with a daily menu of creative international small plates and 60-plus drinks (Tabelog; 2025–2026 reviews) · assorted appetizers ¥1,000 — smoked chicken, egg with anchovy, bruschetta (March 2026) · fried conger eel with asparagus or eggplant and karasumi (2025–2026) · homemade karasumi with celery; firefly squid and avocado ceviche ¥880; squid-ink sausage and white-bean tomato stew ¥880 (March 2026) · black maitake fried with truffle salt ¥680; burdock and gorgonzola potato salad ¥480 (April 2026); smoked-mackerel potato salad · grilled lamb tenderloin; lamb rillettes; spicy duck; soft-shell crab with chili sauce; Taiwanese fried chicken cutlet (2026) · Setouchi lemon cream pasta; arrabbiata (2025–2026)',
    website: null, gmaps: gm('酒パーク PINN 京都'), menu_url: null,
    notes: '[Counter bar · Jingu-Marutamachi, noon drinking with creative small plates] A friendly U-shaped counter that opens at noon: natural wine, rare sake, gin and shochu with inventive plates — fried conger eel with karasumi, ceviche, lamb, Taiwanese fried chicken — mostly under ¥900. About ¥3,000–6,000. Closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'March–April 2026 reviewers call it the sister restaurant of SUMIYA PINN near Karasuma Oike (kyoto_sumiya_pinn in this guide), here open from lunchtime. Reviewers describe friendly women staff around the counter, many solo and women guests, and a menu that changes daily (2025–2026).',
      philosophy: null,
      specialty: 'International small plates; wide drink list.',
      anecdotes: [
        { text: 'April 2026: "I visited \'Sake Park PINN,\' the sister restaurant of the popular bar \'SUMIYA PINN\'… With over 60 types of beverages available, including natural wines, Japanese sake, gin, shochu, and craft beer."', source: R + 'B525997089/' },
        { text: 'May 2026: "Fried Kyoto bamboo shoots with prosciutto and basil sauce, Setouchi lemon cream pasta, and fried anago (conger eel) with asparagus topped with karasumi."', source: R + 'B515017321/' },
        { text: 'June 2026: "There were a few other solo drinkers, and I chatted with the staff occasionally while enjoying my food and drinks."', source: R + 'B530503403/' },
      ],
      japanese_sources_summary: '食べログ: 酒パーク PINN、バル、中京区新椹木町通竹屋町上る西革堂町175-2、神宮丸太町から389m、火〜土・祝日12:00〜22:00、日12:00〜20:00、月曜休み、不定休 (Instagram)、予約可、カード可、電子マネー・QR不可、禁煙、カウンター。口コミ (2025年10月〜2026年8月、英語): 烏丸御池のSUMIYA PINNの姉妹店、昼から飲める、コの字のカウンター、日替わりの多国籍の小皿、前菜の盛り合わせ1,000円、穴子の揚げ物とからすみ、自家製からすみとセロリ、ほたるいかとアボカドのセビーチェ880円、黒舞茸のフライ680円、ごぼうとゴルゴンゾーラのポテトサラダ480円、ラム、鴨、ソフトシェルクラブ、台湾の唐揚げ、瀬戸内レモンのクリームパスタ、60種以上の飲み物、飲み物700円台から。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B515017321', 'B522481761', 'B522618179', 'B525255002', 'B525997089', 'B526383169', 'B526394282', 'B530503403', 'B530526304', 'B531820017', 'B532268145', 'B533620710'])) },
    cultural_comfort: { level: 'friendly', note: 'Counter seating; good for solo drinkers; book via Instagram or phone.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新椹木町通竹屋町上る西革堂町175-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.016303, 135.768613); GSI lot 京都府京都市中京区西革堂町175番地 about 27m away; nearest pin kyoto_raamen_hiryuu 15.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525997089/', R + 'B526394282/'],
    price_note: 'Prices from March–April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers', '¥1,000', 'Small plates', 'ask', 'no', 'March 2026; ¥2,000 for two.', 'appetizer_plate'),
      it('', '', 'Firefly squid and avocado ceviche', '¥880', 'Small plates', 'ask', 'no', 'March 2026.', 'hotaruika_ceviche'),
      it('', '', 'Black maitake fried with truffle salt', '¥680', 'Fried', 'no', 'ask', 'April 2026.', 'maitake_fry'),
      it('', '', 'Burdock and gorgonzola potato salad', '¥480', 'Small plates', 'ask', 'no', 'April 2026.', 'gobo_potato_salad'),
      it('', '', 'Fried conger eel with karasumi', '', 'Fried', 'no', 'no', '2025–2026.', 'anago_karasumi'),
    ] }, {
    cuisine: 'SUMIYA PINNのチームの、昼から飲めるカウンターのバル。日替わりの多国籍の創作小皿と60種以上の飲み物 (食べログ、2025〜2026年の口コミ)・前菜の盛り合わせ1,000円: 燻製の鶏、アンチョビと卵、ブルスケッタ (2026年3月)・穴子の揚げ物とアスパラガスやなす、からすみ (2025〜2026年)・自家製からすみとセロリ、ほたるいかとアボカドのセビーチェ880円、イカ墨のソーセージと白いんげん豆のトマト煮880円 (2026年3月)・トリュフ塩の黒舞茸のフライ680円、ごぼうとゴルゴンゾーラのポテトサラダ480円 (2026年4月)、さばの燻製のポテトサラダ・ラムのグリル、ラムのリエット、スパイシーな鴨、ソフトシェルクラブのチリソース、台湾の鶏の揚げ物 (2026年)・瀬戸内レモンのクリームパスタ、アラビアータ (2025〜2026年)',
    neighborhood: '新椹木町通、竹屋町付近。神宮丸太町から389m',
    gf_detail: 'グルテンフリーではない: お通しの揚げパスタ、パスタ、フリット、ブルスケッタ、揚げ物 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 穴子、からすみ、アンチョビ、ラム、鴨、砂肝、ソフトシェルクラブの小皿 (2025〜2026年の口コミ)。',
    notes: '[カウンターバル・神宮丸太町、昼から創作小皿で一杯] 正午から開く、気さくなコの字のカウンター。自然派ワイン、珍しい日本酒、ジン、焼酎に、穴子とからすみ、セビーチェ、ラム、台湾の唐揚げなど工夫のある小皿、ほとんど900円以下。3,000〜6,000円ほど。月曜休み。',
  });
}

// ================================================================ はらぺこ (Takeyamachi)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043942/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '17:00']), WE = day(['09:00', '17:00']);
  put({
    id: 'kyoto_harapeko_takeyamachi', name: 'はらぺこ (Harapeko, Takeyamachi)', category: 'OMNI',
    lat: 35.016127, lng: 135.765602, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sponge cakes, tarts, scones, apple pie and parfaits with sponge and crunch (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, custard, ice cream and clotted cream (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Fri 11:00–17:00 (omurice lunch 11:00–13:00, then parfaits, cakes and afternoon tea); Sat, Sun and holidays 9:00–17:00 (breakfast 9:00–11:00, lunch to 14:00); last order 16:30; closed Monday and irregular days. Reservations taken online (seats or items such as cakes); cancellation fees apply on the day — no-show 100% of reserved items or ¥2,000 per person for seat-only bookings. 90-minute limit (February 2026). Cash only. 12 seats: 4 at the counter, 4 tables for two; non-smoking. A crepe vending machine outside (October 2026). West of the Takeyamachi-Fuyacho crossing, 7 min from Marutamachi.',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-dori west of Fuyacho — 7 min from Marutamachi',
    cuisine: 'A small bear-themed café run by a pastry chef, opened in November 2025 after pop-ups in a shared café, with sculpted parfaits, homemade cakes and afternoon teas plus omurice lunches (Tabelog; 2026 reviews) · whole-melon bear parfait ¥2,380 (July 2026); peach "bath" parfait with jasmine panna cotta ¥1,820 (July–August 2026); Halloween zombie-bear parfait (October 2026) · Valentine afternoon tea ¥4,320 with one drink (February 2026); mini afternoon tea set · heart shortcake; cheesecake set; hot apple pie (November 2026) · steamed-basket lunch with hamburg or chicken, two obanzai, rice and miso soup ¥1,520 (January 2026); fluffy omurice lunch (July–September 2026) · weekend breakfast · bear melon cream soda; café latte ¥600 · crepes and butter sandwiches from the vending machine',
    website: null, gmaps: gm('はらぺこ 竹屋町 カフェ'), menu_url: null,
    notes: '[Sweets café · Takeyamachi-Fuyacho, bear parfaits and afternoon tea] A tiny, very cute café where a pastry chef builds bear-topped parfaits, cakes and afternoon teas, with omurice lunches on weekdays and breakfast at weekends. Parfaits about ¥1,800–2,400. Book online; 90-minute limit; cash only. Closed Monday. (Not the Hanamikoji udon shop of the same name.)',
    chef_bio: { chef_name: null, roles: ['Pastry chef-owner (unnamed)'], origin: null,
      background: 'A February 2026 reviewer writes it began as a pop-up café in Shiga and opened here, in the Goshonishi area, in November 2025; a November 2026 regular marked its first anniversary and had followed it since its shared-café days. An October 2026 reviewer says it is run by a pastry chef; the bear character is called "Saburo" (August 2026).',
      philosophy: null,
      specialty: 'Sculpted parfaits; afternoon tea; homemade cakes.',
      anecdotes: [
        { text: 'July 2026: "What I really want to emphasize is… this unbelievably cute presentation!!!!!!!!!! The ice cream bear gazing up at me is just too adorable!"', source: R + 'B516831140/' },
        { text: 'February 2026: "All the sweets are homemade, so they have a wonderful aroma from the high-quality ingredients like flour and butter."', source: R + 'B523278877/' },
        { text: 'January 2026: "Since it has only been about three months since opening, the lunch menu is still a work in progress."', source: R + 'B516992753/' },
      ],
      japanese_sources_summary: '食べログ: はらぺこ、スイーツ、中京区竹屋町通麩屋町西入魚屋町443、丸太町から徒歩7分、火〜金11:00〜17:00 (11〜13時はオムライスのランチ)、土日・祝日9:00〜17:00 (9〜11時は朝食、ランチは14時まで)、L.O.16:30、月曜休み、不定休、ネット予約可 (当日キャンセル料あり、席のみは1人2,000円)、12席、禁煙、カード・電子マネー・QR不可。口コミ (2026年1〜11月、英語): 滋賀でのポップアップを経て2025年11月に開店、パティシエの店、くまのパフェ (丸ごとメロン2,380円、桃のお風呂1,820円、ハロウィン)、バレンタインのアフタヌーンティー4,320円、ショートケーキ、チーズケーキ、ホットアップルパイ、蒸し籠のランチ1,520円、オムライス、週末の朝食、くまのメロンクリームソーダ、自動販売機のクレープ、90分制。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B516677974', 'B516831140', 'B516992753', 'B522762243', 'B523162288', 'B523278877', 'B524466587', 'B532928979', 'B533200086', 'B535915456'])) },
    cultural_comfort: { level: 'friendly', note: 'Book online; 90-minute limit; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通麩屋町西入魚屋町443',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened November 2025) with reviews dated January to November 2026.' },
    pin_source: `Tabelog ${TB} (35.016127, 135.765602); GSI lot 京都府京都市中京区魚屋町443番地 about 14m away; nearest pin kyoto_blend_kyoto 23.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516831140/', R + 'B522762243/', R + 'B523162288/'],
    price_note: 'Prices from January–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Whole-melon bear parfait (seasonal)', '¥2,380', 'Parfait', 'no', 'no', 'July 2026.', 'melon_parfait'),
      it('', '', 'Peach bath parfait (seasonal)', '¥1,820', 'Parfait', 'no', 'no', 'July–August 2026.', 'peach_parfait'),
      it('', '', 'Valentine afternoon tea (with one drink)', '¥4,320', 'Afternoon tea', 'no', 'no', 'February 2026.', 'afternoon_tea'),
      it('', '', 'Steamed-basket lunch (hamburg or chicken)', '¥1,520', 'Lunch', 'ask', 'no', 'January 2026.', 'seiro_lunch'),
      it('', '', 'Omurice lunch', '', 'Lunch', 'ask', 'no', 'July–September 2026.', 'omurice_lunch'),
    ] }, {
    cuisine: 'パティシエが営むくまがテーマの小さなカフェ。間借りのカフェでのポップアップを経て2025年11月開店。造形的なパフェ、手作りのケーキ、アフタヌーンティー、オムライスのランチ (食べログ、2026年の口コミ)・丸ごとメロンのくまのパフェ2,380円 (2026年7月)、ジャスミンのパンナコッタの桃の「お風呂」パフェ1,820円 (2026年7〜8月)、ハロウィンのゾンビくまのパフェ (2026年10月)・ドリンク付きのバレンタインのアフタヌーンティー4,320円 (2026年2月)、ミニアフタヌーンティー・ハートのショートケーキ、チーズケーキのセット、ホットアップルパイ (2026年11月)・ハンバーグか鶏の蒸し籠ランチ、おばんざい2品、ご飯、みそ汁で1,520円 (2026年1月)、ふわふわオムライスのランチ (2026年7〜9月)・週末の朝食・くまのメロンクリームソーダ、カフェラテ600円・自動販売機のクレープやバターサンド',
    neighborhood: '竹屋町通、麩屋町の西。丸太町から徒歩7分',
    gf_detail: 'グルテンフリーではない: スポンジケーキ、タルト、スコーン、アップルパイ、スポンジやクランチ入りのパフェ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: クリームのケーキ、カスタード、アイス、クロテッドクリーム (2026年の口コミ)。',
    notes: '[スイーツカフェ・竹屋町麩屋町、くまのパフェとアフタヌーンティー] パティシエがくまをのせたパフェやケーキ、アフタヌーンティーを作る、とてもかわいい小さなカフェ。平日はオムライスのランチ、週末は朝食も。パフェは1,800〜2,400円ほど。ネット予約可、90分制、現金のみ。月曜休み。(花見小路の同名のうどん店とは別。)',
  });
}

save();
