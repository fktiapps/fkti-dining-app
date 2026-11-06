// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 20.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + ぎおん石 京そば処 Gion Ishi Kyo Soba Dokoro (soba on the 3rd floor of the Gion Ishi stone shop below Yasaka Shrine)
//   + 葡萄酒堂 Wine Do (one-man wine bar and hamburg-steak lunch in an alley off Shijo-Higashinotoin; since 2020)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + 割烹 はらだ Kappou Harada (Kyoto kappo of an angler chef and the chef’s wife near Marutamachi)
//   + hakubi (25-dish Chinese course in a Taisho townhouse south of Yasaka Shrine; since 2024)
//   None is in data/kyoto.json: grep by id, name (ぎおん石/Gion Ishi, 葡萄酒堂/Wine Do, はらだ/Harada, hakubi) and address
//   (四条祇園石段下, 元悪王子町47, 鉾田町290, 清井町481) found none.
//   Same-name counts (Samboa ruling): ぎおん石 — the Tabelog crawl has only this soba listing (the café ぎおん石 喫茶室 on the 2nd floor
//   of the same building is listed separately on Tabelog, 26025878); 葡萄酒堂 — 2 (葡萄酒堂, 葡萄酒堂 musica); はらだ — 1 (スタミナ焼肉
//   はらだ is unrelated); hakubi — 1. All drafted.
//   Service charges checked against Tabelog’s Japanese original: 葡萄酒堂 「お一人様につきチャージ料330円（税込・ディナータイムのみ）」;
//   hakubi 「サービス料10％」; ぎおん石 and はらだ none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ぎおん石 京そば処
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012523/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '19:00']);
  put({
    id: 'kyoto_gion_ishi_soba', name: 'ぎおん石 京そば処 (Gion Ishi Kyo Soba Dokoro)', category: 'OMNI',
    lat: 35.003626, lng: 135.776358, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba and udon in soy-based dashi with tempura and kakiage; buckwheat noodles usually contain some wheat and no gluten information is published (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the broth is dashi-based and most bowls add chicken, duck, beef, herring, shrimp or egg; no ingredient list is published (Tabelog; 2025–26 reviews).',
    hours_raw: '11:30–19:00 (last order 18:30); closed Wednesday and every other Thursday (Tabelog). Bookings taken; can be a wait at busy times (Tabelog; August 2026). 20 seats: 12 at tables and 8 at the counter; non-smoking; cards; English menu; children welcome (Tabelog). On the 3rd floor of the Gion Ishi building, a stone and gem shop at the foot of the Yasaka Shrine steps, east of the Kyoto Gion Hotel — take the lift at the back of the 1st-floor shop; the 2nd floor is the café Kissa Ishi (Tabelog; 2024–26 reviews). Jazz plays in the room (January 2026). 5 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Foot of the Yasaka Shrine steps, Gion — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto soba and udon (Tabelog; 2024–26 reviews) · zaru soba ¥800 (January 2026) · tempura soba hot or cold, tempura zaru soba, tempura bukkake soba · big kakiage soba of shrimp, onion, burdock and maitake with a tempura egg · oyako tofu soba with chicken and egg · duck soba · herring soba · soba with small shrimp and yuba · Kyoto-style beef sukiyaki with soba or udon (2024–26 reviews)',
    website: null, gmaps: gm('ぎおん石 京そば処'), menu_url: TB,
    notes: "[Soba · Gion, a quiet room above a stone shop] A calm soba room on the third floor of the Gion Ishi building, a gem and stone shop right below the Yasaka Shrine steps — ride the lift at the back of the shop, past the 2nd-floor café. Firm, cold zaru soba (¥800), a huge kakiage soba, duck or herring soba, and a beef sukiyaki with soba or udon, to jazz in the background. Few tourists find it, though a queue can form. Closed Wednesday and every other Thursday.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found'], origin: null,
      background: 'Part of the Gion Ishi building at the foot of the Yasaka Shrine steps: a stone and gem shop on the 1st floor, the café Kissa Ishi on the 2nd and this soba room on the 3rd (2025–26 reviews).',
      philosophy: null,
      specialty: 'Kakiage soba; zaru soba.',
      anecdotes: [
        { text: 'A January 2026 visitor was greeted at the 1st-floor shop with a cheerful welcome before taking the lift up to the soba room.', source: R + 'B520460371/' },
        { text: 'A January 2026 diner was warned the large kakiage soba would take a while and found the bowl covered in freshly fried kakiage.', source: R + 'B520910497/' },
        { text: 'An August 2026 longtime customer of the shop dislikes queuing with tourists.', source: R + 'B535669284/' },
      ],
      japanese_sources_summary: '食べログ: ぎおん石 京そば処、そば・うどん・うどんすき、東山区四条祇園石段下、京都祇園ホテルの東側、祇園四条駅から徒歩約5分、11:30〜19:00 (L.O. 18:30)、水曜と隔週木曜休み、予約可、20席 (テーブル12、カウンター8)、禁煙、カード可、英語メニュー、ベジタリアンメニュー、子ども可。口コミ (2024〜2026年、英語): 天然石の店の3階、2階は喫茶、奥のエレベーター、ざるそば800円、天ぷらそば、かき揚げそば、親子豆腐そば、鴨そば、にしんそば、牛すき焼き、ジャズ。',
      confidence: 'medium', sources: [TB, R + 'B509590227/', R + 'B510450077/', R + 'B511133769/', R + 'B516797865/', R + 'B520460371/', R + 'B520910497/', R + 'B521531283/', R + 'B524931222/', R + 'B531067763/', R + 'B532920948/', R + 'B533256603/', R + 'B535669284/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); take the lift at the back of the stone shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区四条祇園石段下',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003626, 135.776358); GSI cannot match the address (四条祇園石段下, no lot number) — Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520460371/'],
    price_note: 'Only one price is published (January 2026).', last_checked: TODAY, items: [
      it('ざるそば', 'zaru soba', 'Chilled zaru soba', '¥800', 'Soba', 'ask', 'ask', 'January 2026.', 'zaru_soba'),
    ] }, {
    cuisine: '京都のそばとうどん (食べログ、2024〜2026年の口コミ)・ざるそば800円 (2026年1月)・温かいか冷たい天ぷらそば、天ざるそば、天ぷらぶっかけそば・海老、玉ねぎ、ごぼう、舞茸の大きなかき揚げそばに卵の天ぷら・鶏と卵の親子豆腐そば・鴨そば・にしんそば・小海老と湯葉のそば・京風の牛すき焼き、そばかうどんで (2024〜2026年の口コミ)',
    neighborhood: '祇園、八坂神社の石段下。祇園四条駅から徒歩5分',
    gf_detail: '要確認。醤油のだしのそばとうどん、天ぷらやかき揚げ。そばは小麦を含むことが多く、グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありだが、つゆはだしで、多くは鶏、鴨、牛、にしん、海老、卵を使う。原材料は公開されていない (食べログ、2025〜2026年の口コミ)。',
    notes: '[そば・祇園、石の店の上の静かなそば処] 八坂神社の石段下にある天然石の店「ぎおん石」のビル3階の静かなそば処。店の奥のエレベーターで、2階の喫茶を通り過ぎて上がる。しっかり冷えたざるそば (800円)、大きなかき揚げそば、鴨やにしんのそば、そばかうどんで食べる牛すき焼きを、ジャズを聞きながら。観光客はあまり気づかないが、行列ができることも。水曜と隔週木曜休み。',
  });
}

// ================================================================ 葡萄酒堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033937/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4810503651451';
  const H = day(['11:30', '16:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_budoushudou_wine_do', name: '葡萄酒堂 (Wine Do)', category: 'MOM_AND_POP',
    lat: 35.00304, lng: 135.76146, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is hamburg steak with demi-glace and rice or bread; dinner brings ravioli, pâté and meat; no gluten information is published — the shop asks guests to mention allergies when booking (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steaks of beef and duck, prosciutto, foie gras pâté and meat dishes; the obanzai sides have no published ingredients (2026 reviews).',
    hours_raw: 'Lunch 11:30–13:30, café 13:30–16:00, dinner 17:00–24:00 (Tabelog lists last orders 23:00 food and 23:30 drinks, but also notes dinner last order 21:30); closed Sunday (Tabelog). No bookings for drinks-only or dessert-only café visits; tell allergies when booking (Tabelog). Dinner charge ¥330 per person (Tabelog’s Japanese original: 「お一人様につきチャージ料330円（税込・ディナータイムのみ）」). 20 seats: 6 at the counter and 14 at tables; cards, transit IC, QUICPay and PayPay (Tabelog). Menu by QR code (July 2026). The owner runs it alone, so large groups may be hard (April and September 2026). Fourth shop down a narrow alley south of the Shijo-Higashinotoin crossing; 2 min from Shijo or Karasuma Stn exit 19 (Tabelog). Opened 14 February 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley off Higashinotoin south of Shijo — 2 min from Shijo Stn',
    cuisine: 'Wine bar with Italian and Japanese plates at night and a hamburg-steak lunch (Tabelog; 2026 reviews) · lunch: classic hamburg steak (200 g) with demi-glace or a daily sauce, three obanzai, rice or bread and miso soup ¥1,300; comparison of the classic and a duck-and-negi hamburg (100 g each) with demi-glace and Kujo-negi sauce ¥1,700; extra rice ¥150 (April–October 2026) · dinner: three kinds of prosciutto, foie gras pâté with berry sauce, salad with ume vinaigrette, meat and ravioli; an all-you-can-drink course with three wines (2026 reviews) · a wide, temperature-kept wine list',
    website: null, gmaps: gm('葡萄酒堂 元悪王子町'), menu_url: TB,
    notes: "[Wine bar · Shijo-Karasuma, a one-man alley wine bar] A small wine bar down a narrow alley near Shijo-Higashinotoin, run single-handed by a quiet owner. At lunch it is a hamburg-steak shop — ¥1,300 for a 200 g steak with three homemade obanzai, rice and miso soup, or a classic-and-duck tasting for ¥1,700. At night it turns to wine, with prosciutto, foie gras pâté and ravioli, and an all-you-can-drink course. ¥330 charge at dinner. Sister bar: 葡萄酒堂 musica. Closed Sunday.",
    chef_bio: { chef_name: '川口 真哉', roles: ['Owner (the invoice holder), who runs the shop alone (April and September 2026 reviews)'], origin: null,
      background: 'The invoice register lists an individual, 川口 真哉, for the shop’s invoice number. Reviewers describe an owner who runs the place alone, reserved but considerate (April 2026), with a well-kept range of wines (March 2026). Opened 14 February 2020 (Tabelog). A sister bar, 葡萄酒堂 musica, appears in the Tabelog crawl.',
      philosophy: null,
      specialty: 'Hamburg steak lunch with obanzai; wine.',
      anecdotes: [
        { text: 'An April 2026 group of four colleagues found the owner running the place alone — a bit reserved but very considerate.', source: R + 'B527171526/' },
        { text: 'An August 2026 visitor saw a "closed" sign on a Saturday but heard activity inside, asked, and was served lunch.', source: R + 'B534489258/' },
        { text: 'A March 2026 diner from Osaka found the 100 g hamburgers light, and the duck one a match for red wine.', source: R + 'B525043935/' },
      ],
      japanese_sources_summary: '食べログ: 葡萄酒堂、ワインバー・イタリアン・日本料理、下京区元悪王子町47-12、烏丸駅・四条駅19番出口から四条東洞院の交差点、東洞院を南へ、パンケーキ店と弁当店の間の路地の4軒目、月〜土・祝 11:30〜13:30・13:30〜16:00・17:00〜24:00、日曜休み、カフェのドリンクのみ・デザートのみの予約不可、アレルギーは予約時に、チャージ330円 (税込・ディナーのみ)、20席 (カウンター6、テーブル14)、カード・交通系IC・QUICPay・PayPay 可、2020年2月14日オープン、インボイス: 川口 真哉 (個人)。口コミ (2026年3〜10月、英語): ハンバーグ定食1,300円 (200g、おばんざい3種、ご飯かパン、味噌汁)、Ishikura-tei のクラシックハンバーグと鴨ネギバーグの食べ比べ1,700円、生ハム3種、フォアグラのパテ、飲み放題のコース、店主が一人で営む。',
      confidence: 'medium', sources: [TB, INV, R + 'B525043935/', R + 'B525169430/', R + 'B526978855/', R + 'B527171526/', R + 'B531072696/', R + 'B531074895/', R + 'B531862529/', R + 'B531986619/', R + 'B534489258/', R + 'B535767656/', R + 'B538033024/', R + 'B538298079/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person shop; QR-code menu; ¥330 dinner charge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区元悪王子町47-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00304, 135.76146); cross-checked: GSI 京都府京都市下京区元悪王子町47番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538298079/', R + 'B531862529/'],
    price_note: 'Lunch prices from June–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Hamburg steak lunch (200 g) with three obanzai', '¥1,300', 'Lunch', 'ask', 'no', 'October 2026.', 'hamburg_lunch'),
      it('', '', 'Classic and duck-negi hamburg comparison lunch', '¥1,700', 'Lunch', 'ask', 'no', 'June 2026.', 'hamburg_duo'),
    ] }, {
    cuisine: '夜はイタリアンと和の皿のワインバー、昼はハンバーグ (食べログ、2026年の口コミ)・昼: クラシックのハンバーグ (200g) にデミグラスか日替わりのソース、おばんざい3種、ご飯かパン、味噌汁で1,300円、クラシックと鴨ネギのハンバーグ (各100g) の食べ比べ、デミグラスと九条ネギのソースで1,700円、大盛り +150円 (2026年4〜10月)・夜: 生ハム3種、ベリーソースのフォアグラのパテ、梅のヴィネグレットのサラダ、肉料理とラビオリ、ワイン3種の飲み放題のコース (2026年の口コミ)・温度管理された豊富なワイン',
    neighborhood: '四条の南、東洞院から入る路地。四条駅から徒歩2分',
    gf_detail: '要確認。昼はデミグラスのハンバーグにご飯かパン、夜はラビオリ、パテ、肉料理。グルテンの情報は公開されていないが、アレルギーは予約時に伝えるよう店が案内している (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛と鴨のハンバーグ、生ハム、フォアグラのパテ、肉料理。おばんざいの原材料は公開されていない (2026年の口コミ)。',
    notes: '[ワインバー・四条烏丸、店主一人の路地のワインバー] 四条東洞院近くの細い路地の奥にある小さなワインバー。物静かな店主が一人で営む。昼はハンバーグの店で、200gのハンバーグに手作りのおばんざい3種、ご飯、味噌汁で1,300円、クラシックと鴨の食べ比べは1,700円。夜はワインに、生ハム、フォアグラのパテ、ラビオリ、飲み放題のコースも。夜はチャージ330円。姉妹店に葡萄酒堂 musica。日曜休み。',
  });
}

// ================================================================ 割烹 はらだ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038065/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kappo_harada', name: '割烹 はらだ (Kappou Harada)', category: 'OMNI',
    lat: 35.015317, lng: 135.769594, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Seasonal Kyoto kappo with dashi and soy; no gluten information is published (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo — ayu, hamo, turtle, shellfish — with dashi (2025–26 reviews).',
    hours_raw: 'Hours are not published; a July 2025 regular says the shop is closed on Monday, when the owner goes ayu fishing. Reservation only; Tabelog notes it is not strictly introduction-only but bookings may be hard without one. AMEX accepted; non-smoking (Tabelog). Run by the owner and the owner’s wife with a part-time student (September 2026). Formerly on Kawaramachi-dori (July 2025); now off Nakamachi-dori north of Ebisugawa, about 400 m from Jingu-Marutamachi Stn (Tabelog). Most diners spend ¥15,000–30,000 (Tabelog; 2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nakamachi-dori north of Ebisugawa, near the Imperial Palace — 6 min from Jingu-Marutamachi Stn',
    cuisine: 'Seasonal Kyoto kappo, famous for ayu the owner catches himself (2025–26 reviews) · summer: live ayu as sashimi and grilled twice over charcoal so even the bones can be eaten, wild ayu from Wakayama compared with Lake Biwa ayu, ayu rice cooked with salt and sake only, botan-hamo soup, wild Amakusa turtle soup (July 2025 – September 2026) · spring: hassun of kogomi with sesame, junsai and koi with sansho, torigai, young ayu, Kamo eggplant in dashi, pea rice (May 2026) · autumn: matsutake and maitake dobin-mushi (September 2026) · a turnip "lid" over a dish in winter (February 2026)',
    website: null, gmaps: gm('割烹 はらだ 鉾田町'), menu_url: TB,
    notes: "[Kappo · Marutamachi, the angler chef's ayu] A small kappo near the Imperial Palace, formerly on Kawaramachi, where the owner — a keen angler who fishes for ayu on the weekly day off — cooks seasonal Kyoto dishes with the chef’s wife serving. Summer is the time: live ayu as sashimi and double-grilled until you can eat it bones and all, a side-by-side of wild and Lake Biwa ayu, and ayu rice to finish; spring brings young ayu and pea rice, autumn matsutake. Hard to book without an introduction; about ¥15,000–30,000. Closed Monday per regulars.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (not named) and the owner’s wife, the okami, with a part-time student (September 2026)'], origin: null,
      background: 'A July 2025 regular has known the restaurant since it was on Kawaramachi-dori and says the owner, an expert angler, goes ayu fishing on Mondays, the regular day off, lately at Amano in Nara; a September 2026 diner says the couple caught the day’s live ayu in a river in Wakayama. A May 2026 diner praises the chef’s craft and the okami’s attentive service. Many guests are regulars (September 2026).',
      philosophy: null,
      specialty: 'Ayu, live and grilled twice; ayu rice.',
      anecdotes: [
        { text: 'A July 2025 regular trusts the owner’s word that the best ayu comes in the second week of July and visits every year then.', source: R + 'B458214951/' },
        { text: 'An August 2026 regular compared wild Tomita River ayu with farmed Lake Biwa ayu and found the wild one cleaner and more intense.', source: R + 'B476790996/' },
        { text: 'A September 2026 first-timer from Kanto, among mostly regulars, was warmly welcomed and finally understood hamo.', source: R + 'B536564508/' },
      ],
      japanese_sources_summary: '食べログ: 割烹 はらだ、日本料理、中京区中町通夷川上ル鉾田町290、神宮丸太町駅から396m、完全予約制 (完全紹介制ではないが紹介がないと予約が難しいことも)、カード (AMEX) 可、禁煙。口コミ (2026年8月、日本語): お盆明け、八寸、天草産の天然スッポンの椀物、富田川の天然鮎と琵琶湖の養殖鮎の食べ比べ、出汁を入れず塩と酒だけの天然鮎の炊き込みご飯。英語の口コミ (2025〜2026年): 以前は河原町通、店主は釣りの名人で休みの月曜に鮎釣り、2度焼きの鮎、ぼたん鱧、豆ご飯、松茸の土瓶蒸し、店主と奥さんと学生アルバイト。',
      confidence: 'low', sources: [TB, R + 'B458214951/', R + 'B475149435/', R + 'B476790996/', R + 'B523099149/', R + 'B523518047/', R + 'B533575762/', R + 'B536564508/'] },
    cultural_comfort: { level: 'japanese', note: 'Mostly regulars; booking may need an introduction; hours not published.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中町通夷川上ル鉾田町290',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.015317, 135.769594); cross-checked: GSI 京都府京都市中京区鉾田町290番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices published; reviewers spend ¥15,000–29,999.', last_checked: TODAY, items: [
      it('', 'omakase', 'Seasonal kappo course', '', 'Course', 'ask', 'no', 'About ¥15,000–30,000 per reviewers.', 'course'),
    ] }, {
    cuisine: '店主が自ら釣る鮎で知られる季節の京料理の割烹 (2025〜2026年の口コミ)・夏: 活け鮎のお造りと、骨まで食べられる炭火の2度焼き、Wakayama の天然鮎と琵琶湖の鮎の食べ比べ、だしを入れず塩と酒だけで炊く鮎ご飯、ぼたん鱧のお椀、天草産の天然すっぽんのお椀 (2025年7月〜2026年9月)・春: こごみの胡麻和え、じゅんさい、鯉の山椒煮の八寸、鳥貝、稚鮎、賀茂茄子の炊いたん、豆ご飯 (2026年5月)・秋: 松茸と舞茸の土瓶蒸し (2026年9月)・冬は蕪を蓋にした一品 (2026年2月)',
    neighborhood: '御所の近く、夷川の北の中町通。神宮丸太町駅から徒歩6分',
    gf_detail: '予約時に要確認。だしと醤油の季節の京料理の割烹。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮎、鱧、すっぽん、貝など魚介が中心で、だしを使う (2025〜2026年の口コミ)。',
    notes: '[割烹・丸太町、釣り好きの店主の鮎] 御所近くの小さな割烹。以前は河原町にあった。休みの日に鮎を釣りに行く釣りの名人の店主が季節の京料理を作り、奥さんが接客する。いちばんは夏: 活け鮎のお造り、骨まで食べられるほど2度焼きした鮎、天然と琵琶湖の鮎の食べ比べ、締めの鮎ご飯。春は稚鮎と豆ご飯、秋は松茸。紹介がないと予約しにくく、予算は15,000〜30,000円ほど。常連によれば月曜休み。',
  });
}

// ================================================================ hakubi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041995/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hakubi-kyoto.com/'; const MICH = 'https://guide.michelin.com/jp/ja/kyoto-region/kyoto/restaurant/hakubi';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=3040001120567';
  const H = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_hakubi', name: 'hakubi', category: 'OMNI',
    lat: 35.001912, lng: 135.778398, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop asks for allergies in advance and may not adapt on the day. The 25-dish course includes dumplings, spring rolls, noodles, XO and black-vinegar sauces (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese course of shark fin, char siu, saliva chicken, seafood, lamb and beef (official site).',
    hours_raw: 'Lunch from 12:00; dinner in two seatings at 18:00 and 19:30 (official site: dinner courses 18:00–22:00, about 2.5 hours); open daily except 31 December and 1 January (Tabelog). Reservation only; everyone starts together — be seated 10 minutes early; allergies and dislikes in advance; a ¥3,000 water charge if no drinks are ordered; cancellation 50% the day before and 100% on the day (Tabelog). Service charge 10% (Tabelog’s Japanese original: サービス料10％). 26 seats: a counter of 14, a table for 4 and a private room for 8 (Tabelog); a 2nd-floor space, Suo (official site). Cards, QUICPay and PayPay (Tabelog). A wine cellar of over 500 bottles in the basement of an old townhouse (official site; a September 2026 reviewer dates it to the Taisho era). South of Yasaka Shrine; about 10 min from Gion-Shijo Stn (Tabelog). Opened 10 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Yasaka Shrine, Higashiyama — 10 min from Gion-Shijo Stn',
    cuisine: 'Chinese course of about 25 small dishes on the theme of the imperial Manhan banquet, with Kyoto produce (official site) · standard course, 25 dishes, ¥13,000 (dinner, 18:00–22:00), e.g. caviar rice noodles, seasonal vegetables with ham sauce, jellyfish, charcoal char siu, shark-fin pie, matsutake steamed soup, saliva chicken, water dumplings, Hong Kong noodles, hairy-crab spring rolls, Chinese greens, spicy sea bream, jade eggplant with ume sauce, Cantonese shumai with XO, lamb dumplings, black-vinegar sweet-and-sour pork, steamed kinmedai, shrimp in chili and in mango mayonnaise, beef in Sichuan chillies, donabe rice of Kyotango rice, pickles, almond tofu, sesame balls (official site) · lunch: 16-dish shark-fin short course ¥13,000 (October 2026) · Buddha-jumps-over-the-wall, Peking duck, truffle shumai (2026 reviews) · wine pairing ¥8,000; Chinese tea and Shaoxing pairings; 500+ wines (official site; 2026 reviews)',
    website: SITE, gmaps: gm('hakubi 清井町'), menu_url: SITE,
    notes: "[Chinese · Higashiyama, 25 small dishes in an old townhouse] A modern Chinese restaurant in an old Kyoto townhouse south of Yasaka Shrine, opened in November 2024. Chef 佐藤 廉歩, trained in Ginza and Nishi-Azabu, sends out about 25 small plates in one course (¥13,000 at dinner) — caviar rice noodles, charcoal char siu, shark-fin pie, hairy-crab spring rolls, mango-mayo shrimp, Peking duck — with a sommelier's wine pairing from a 500-bottle cellar below. Michelin-listed. 10% service; a ¥3,000 water charge if you order no drinks. Two dinner seatings.",
    chef_bio: { chef_name: '佐藤 廉歩 (Sato Renho)', roles: ['Chef (official site); operator 株式会社ｐａｎｇａｅａ (the invoice holder)'], origin: null,
      background: 'Per the official site: chef 佐藤 廉歩 honed skills in Ginza and Nishi-Azabu, and cooks traditional Chinese methods with a modern sense; the restaurant offers a course themed on the Manhan banquet, Kyoto ingredients, wine and Chinese-tea pairings chosen by a sommelier, and a cellar of over 500 wines beneath the old townhouse. The invoice number belongs to 株式会社ｐａｎｇａｅａ (NTA corporate-number site). Listed in the Michelin Guide (official site news, April 2025; July 2026 review). Opened 10 November 2024 (Tabelog).',
      philosophy: 'Per the official site: each plate brings the chef’s own sense to traditional methods and carefully chosen Kyoto produce.',
      specialty: 'Manhan-themed 25-dish course; shark fin; Peking duck.',
      anecdotes: [
        { text: 'A September 2026 group booked a course without shark fin, were shown the shark fin and offered an upgrade, and took it for a birthday.', source: R + 'B538282371/' },
        { text: 'An August 2026 regular felt unwell from heatstroke and had to leave early, and was touched by how concerned the staff were.', source: R + 'B519876635/' },
        { text: 'An October 2026 solo diner was glad to be able to book lunch for one.', source: R + 'B538194875/' },
      ],
      japanese_sources_summary: '公式サイト (hakubi-kyoto.com): hakubi、京都 少量多皿中華、「満漢全席」をテーマに約25種の中華料理、京都産の食材、伝統的な調理法にシェフ独自のセンス、ソムリエ厳選のワインや中国茶とのペアリング、古民家の地下に500本以上のワインのセラー、シェフ 佐藤 廉歩 (銀座・西麻布で研鑽)、スタンダードコース25品13,000円 (税込、18:00〜22:00、滞在2時間30分)、一例: キャビア米粉、旬野菜 ハムタンソース、クラゲ、炭火焼き叉焼、フカヒレパイ、松茸蒸しスープ、よだれ鶏、水餃子、香港麺、毛蟹の春巻き、真鯛スパイシー炒め、翡翠茄子 梅ソース、広東焼売 XO醬、ラム肉餃子、黒酢酢豚、金目鯛の蒸し物、海老チリソース、海老マンゴーマヨネーズ、牛肉四川唐辛子煮込み、土鍋ご飯 京丹後米、杏仁豆腐、胡麻団子、2F の Suo。食べログ: 中華料理、東山区清井町481-1、祇園四条駅から徒歩約10分、12:00〜14:00・18:00〜22:00 (夜は18:00と19:30の2部制)、12月31日・1月1日休み、完全予約制、一斉スタート、ドリンクの注文がない場合はお水代3,000円、キャンセル料 前日50%・当日100%、サービス料10%、26席 (カウンター14、テーブル4、個室8)、カード・QUICPay・PayPay 可、インボイス T3040001120567 (株式会社ｐａｎｇａｅａ)、2024年11月10日オープン。口コミ (2026年、英語): ミシュランセレクテッド、佛跳牆、北京ダック、ワインペアリング8,000円。',
      confidence: 'medium', sources: [TB, SITE, MICH, CORP, R + 'B519876635/', R + 'B532336614/', R + 'B533871503/', R + 'B534473060/', R + 'B535193561/', R + 'B536080719/', R + 'B536754268/', R + 'B537203454/', R + 'B537273814/', R + 'B538194875/', R + 'B538282371/', R + 'B538615959/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fixed start times; order a drink (or pay a ¥3,000 water charge); 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清井町481-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001912, 135.778398); cross-checked: GSI 京都府京都市東山区清井町481番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537273814/'],
    price_note: 'Official site (tax included; 10% service per Tabelog); lunch price from an October 2026 review.', last_checked: TODAY, items: [
      it('スタンダードコース', '', 'Standard course, 25 dishes (dinner)', '¥13,000', 'Course', 'ask', 'no', '', 'standard_course'),
      it('', '', 'Shark-fin short course, 16 dishes (lunch)', '¥13,000', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_course'),
      it('', '', 'Wine pairing', '¥8,000', 'Drinks', '', '', '2026 reviews.', 'pairing'),
    ] }, {
    cuisine: '満漢全席をテーマにした約25品の少量多皿の中華のコース、京都の食材で (公式サイト)・スタンダードコース25品13,000円 (夜18:00〜22:00)、一例: キャビア米粉、旬野菜のハムタンソース、クラゲ、炭火焼き叉焼、フカヒレパイ、松茸の蒸しスープ、よだれ鶏、水餃子、香港麺、毛蟹の春巻き、中国野菜炒め、真鯛のスパイシー炒め、翡翠茄子の梅ソース、広東焼売の XO醬、ラム肉餃子、黒酢酢豚、金目鯛の蒸し物、海老チリソース、海老マンゴーマヨネーズ、牛肉の四川唐辛子煮込み、京丹後米の土鍋ご飯、お漬物、杏仁豆腐、胡麻団子 (公式サイト)・昼: フカヒレのショートコース16品13,000円 (2026年10月)・佛跳牆、北京ダック、トリュフ焼売 (2026年の口コミ)・ワインペアリング8,000円、中国茶や紹興酒のペアリング、500本以上のワイン (公式サイト、2026年の口コミ)',
    neighborhood: '八坂神社の南、東山。祇園四条駅から徒歩10分',
    gf_detail: '予約時に要確認。アレルギーは事前に伝えるよう店が案内しており、当日は対応できないことも。25品のコースには餃子、春巻き、麺、XO醬や黒酢のソースがある (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。フカヒレ、叉焼、よだれ鶏、魚介、ラム、牛肉の中華のコース (公式サイト)。',
    notes: '[中華・東山、古民家の少量多皿] 八坂神社の南の京町家にあるモダンな中華料理店。2024年11月開店。銀座と西麻布で腕を磨いた佐藤廉歩シェフが、約25品の小皿のコース (夜13,000円) を次々と: キャビア米粉、炭火焼きの叉焼、フカヒレパイ、毛蟹の春巻き、マンゴーマヨの海老、北京ダック。地下の500本のセラーからソムリエがワインを合わせる。ミシュランガイド掲載。サービス料10%、飲み物の注文がなければお水代3,000円。夜は2部制。',
  });
}

save();
