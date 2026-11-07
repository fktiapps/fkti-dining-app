// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 55.
//   + おばんざいとグリルSALA 四条河原町 Obanzai to Grill SALA (obanzai boxes and charcoal-grilled Tanba chicken, Shijo) — rest
//   + 一養軒 Ichiyoken (1922 Western-style bar in an alley off Kiyamachi; drinks only since the end of 2025) — rest
//   + 佐曽羅 EAST 1F Sasora EAST (café-bar in a former tea house on the Kamo river, Pontocho) — rest
//   + 黒毛和牛 善 京都四条河原町店 Kuroge Wagyu Zen (wagyu yakiniku, sukiyaki and shabu-shabu in private rooms) — rest
//   - skip 26034964 バーランド (not enough sourced detail)
//   - skip 26018998 べんと工房 四条河原町店 (no 2025–26 review of the shop)
//   Rest tier, nearest-first from `next rest 2000`.
//   Same-name counts first (2026-11-07): SALA — one. 一養軒 — one. 佐曽羅 — a local trio (Sasora, Sasora EAST 1F, Sasora EAST 2F);
//   EAST 2F is a separate teppanyaki listing. 黒毛和牛 善 — two (this and Namba Shinsaibashi). None is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: 佐曽羅 EAST 「ディナー １F 500円」; the other three list none.
//   No halal claims; no owner deaths; no single-review remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-55');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034964', 'not enough sourced detail: Bar Land has only two Tabelog reviews, the latest a two-line note from January 2025 (https://tabelog.com/en/kyoto/A2601/A260201/26034964/).');
skip('26018998', 'no 2025–26 review of the shop: Bento Kobo\'s latest review of this take-away bento shop is September 2024 (the September 2026 review is about a department-store food hall) (https://tabelog.com/en/kyoto/A2601/A260201/26018998/).');

// ================================================================ おばんざいとグリルSALA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038228/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_obanzai_grill_sala', name: 'おばんざいとグリルSALA 四条河原町 (Obanzai to Grill SALA)', category: 'OMNI',
    lat: 35.002735, lng: 135.766395, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, grilled chicken, chawanmushi and rice (2025–26 reviews); tell the restaurant about allergies when booking (Tabelog). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled chicken and fish mains with dashi-based obanzai (2025–26 reviews).',
    hours_raw: 'Tue–Sun and holidays: lunch 11:00–14:00 (last order 13:45), dinner 18:00–22:00 (last order 21:30); closed Monday (Tabelog). Reservations accepted, advised at weekends; 90-minute limit when busy; tell the restaurant about allergies and children (Tabelog; February 2026). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR incl. PayPay (Tabelog). 30 seats: a counter of 8, tables and a private room for 8 (Tabelog). Non-smoking (Tabelog). Order by QR code at the table (February 2026). Second floor, 2 min from Kyoto-Kawaramachi exit 10 (Tabelog). Opened 15 September 2022 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo, west of Kawaramachi — Kyoto-Kawaramachi',
    cuisine: 'Obanzai and wagyu teppanyaki or charcoal grill (Tabelog) · lunch "SALA gozen": a drawer-style box of six obanzai with a choice of main, refillable rice and miso soup (August 2025 – May 2026) · a ¥2,800 limited lunch of 20 items with tuna sashimi, charcoal-grilled Tanba chicken on a large skewer and chawanmushi (February 2026) · make-your-own yuba and adjustable tofu (April and May 2026) · glass of white wine ¥750 (February 2026)',
    website: null, gmaps: gm('おばんざいとグリルSALA 四条河原町'), menu_url: TB,
    notes: '[Obanzai and grill · Shijo Kawaramachi, a second-floor dining room] A stylish second-floor room with a kitchen counter, best at lunch: a drawer-box of six obanzai, a hanging skewer of charcoal-grilled Tanba chicken or fish, make-your-own yuba, refills of rice and miso soup — from about ¥2,000. Teppanyaki wagyu at night. Closed Monday; book at weekends.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a teppanyaki wagyu and obanzai restaurant with counter, table and private-room seating, opened in September 2022.',
      philosophy: null, specialty: 'Obanzai box; charcoal-grilled Tanba chicken.',
      anecdotes: [
        { text: 'An August 2025 lunch guest pulled out the drawer of the obanzai box to find six small dishes inside.', source: R + 'B512546483/' },
        { text: 'A May 2026 regular found the mains cut back to chicken or tofu since a visit two years earlier, and the air conditioning too strong in a private room.', source: R + 'B528944580/' },
        { text: 'An April 2026 day-tripper liked making yuba at the table and trying it with salt, ponzu, sesame sauce and olive oil.', source: R + 'B530916898/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ・鉄板焼き・ダイニングバー、下京区足袋屋町329 キョウテクあやごっこビル 2F、阪急京都河原町駅10番出口から徒歩約2分、火〜日・祝11:00〜14:00 (L.O. 13:45)、18:00〜22:00 (L.O. 21:30)、月曜休み、予約可、混雑時は90分、カード・電子マネー・QR 可、30席 (カウンター8、テーブル、個室)、禁煙、2022年9月15日オープン、和牛の鉄板焼きと季節のおばんざい。口コミ (2025年8月〜2026年9月、英語): 引き出しのおばんざい6種と主菜を選べる SALA 御膳、ご飯と味噌汁のおかわり、2,800円の限定ランチ、まぐろの刺身、Tanba の鶏の炭火焼き、茶碗蒸し、湯葉を作る、白ワイン750円。',
      confidence: 'medium', sources: [TB, R + 'B512546483/', R + 'B519261650/', R + 'B521364375/', R + 'B522576387/', R + 'B523086063/', R + 'B527491559/', R + 'B527756414/', R + 'B528006175/', R + 'B528944580/', R + 'B530916898/', R + 'B535755314/', R + 'B536070323/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch at weekends; order by QR code at the table. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区足袋屋町329 キョウテクあやごっこビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (a closure notice for 14 October 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002735, 135.766395); cross-checked: GSI 京都府京都市下京区足袋屋町329番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522576387/'],
    price_note: 'One lunch price from February 2026.', last_checked: TODAY, items: [
      it('', '', 'Limited lunch (20 items)', '¥2,800', 'Lunch', 'ask', 'no', 'February 2026.', 'lunch_limited'),
      it('', '', 'SALA gozen (obanzai box and main)', '', 'Lunch', 'ask', 'no', '2025–26 reviews.', 'sala_gozen'),
      it('', '', 'Glass of white wine', '¥750', 'Drinks', 'ask', 'ask', 'February 2026.', 'white_wine'),
    ] }, {
    cuisine: 'おばんざいと和牛の鉄板焼きや炭火焼き (食べログ)・昼の「SALA 御膳」: 引き出しの箱にのったおばんざい6種と選べる主菜、ご飯と味噌汁のおかわり (2025年8月〜2026年5月)・まぐろの刺身、大きな串の Tanba の鶏の炭火焼き、茶碗蒸しの20品の限定ランチ2,800円 (2026年2月)・自分で作る湯葉、固さを調整する豆腐 (2026年4月・5月)・グラスの白ワイン750円 (2026年2月)',
    neighborhood: '四条、河原町の西。京都河原町駅',
    gf_detail: '要確認。おばんざい、刺身、鶏の炭火焼き、茶碗蒸し、ご飯 (2025〜2026年の口コミ)。アレルギーは予約時に伝えて (食べログ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏や魚の主菜と出汁のおばんざい (2025〜2026年の口コミ)。',
    notes: '[おばんざいとグリル・四条河原町、ビル2階の店] キッチンカウンターのあるおしゃれな2階の店。昼がおすすめで、引き出しのおばんざい6種、吊るした串の Tanba の鶏の炭火焼きや魚、自分で作る湯葉、ご飯と味噌汁のおかわりで約2,000円から。夜は和牛の鉄板焼き。月曜休み、週末は予約を。',
  });
}

// ================================================================ 一養軒
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001178/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_ichiyoken_kiyamachi', name: '一養軒 (Ichiyoken)', category: 'OMNI',
    lat: 35.005032, lng: 135.770845, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinks only since the end of 2025 (April 2026 review); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only since the end of 2025 (April 2026 review).',
    hours_raw: 'Mon–Wed and Fri–Sun from 17:30 to about 22:00; closed Thursday; hours may change (Tabelog). Drinks only: the chef stopped serving food at the end of 2025 (April 2026 review). Reservations accepted (Tabelog). A polished counter (Tabelog; April 2016). Deep in a narrow, winding alley between Kiyamachi and Pontocho at Nabeya-cho, north of Shijo (2016–19 reviews).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley between Kiyamachi and Pontocho, north of Shijo',
    cuisine: 'A Western-style bar dating from 1922 (February 2017 review) · now drinks only — the kitchen closed at the end of 2025 (April 2026) · whisky (Nikka on the shelves), cocktails and wine (2014–18 reviews) · formerly known for shrimp coquille, winter oyster fry, chicken and beef cutlets and shrimp croquettes (2010–18 reviews)',
    website: null, gmaps: gm('一養軒 木屋町'), menu_url: TB,
    notes: '[Retro Western bar · Kiyamachi alley, since 1922] A sepia-toned Western-style bar founded in 1922, hidden at the end of a twisting alley between Kiyamachi and Pontocho, with a polished counter and shelves of Nikka whisky. The kitchen — once known for shrimp coquille and oyster fry — closed at the end of 2025, so it now serves drinks only. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), long-serving; stopped cooking at the end of 2025 (April 2026 review)'], origin: null,
      background: 'A February 2017 review says the restaurant was founded in 1922; reviews from 2010 to 2019 describe regulars of 15 to over 20 years. An April 2026 review reports that the chef stopped serving food at the end of 2025 and that only drinks are now served.',
      philosophy: null, specialty: 'Whisky and cocktails in a 1920s setting.',
      anecdotes: [
        { text: 'A regular since 1994 marked the arrival of winter by the oyster fry, served from mid-November to mid-March (December 2010).', source: R + 'B117348586/' },
        { text: 'An April 2016 couple found it after cherry-blossom viewing, deep in an alley you would not find without knowing it.', source: R + 'B189272450/' },
        { text: 'An April 2026 visitor reported that food has ended and drinks remain.', source: R + 'B525973925/' },
      ],
      japanese_sources_summary: '食べログ: 洋食、中京区木屋町通四条上ル鍋屋町211、17:30〜22:00頃、木曜休み、予約可、カウンター。口コミ (2010年12月〜2026年4月、英語): 1922年創業、木屋町と先斗町の間の細い路地の奥、レトロな洋食のバー、磨かれたカウンター、Nikka のウイスキー、かつてはエビのコキール、冬のカキフライ、チキンカツ、ビーフカツ、エビのクリームコロッケ、2025年末で料理をやめ、今は飲み物のみ (2026年4月)。',
      confidence: 'low', sources: [TB, R + 'B117348586/', R + 'B122612398/', R + 'B132725059/', R + 'B189272450/', R + 'B23837790/', R + 'B241081256/', R + 'B323404058/', R + 'B422135092/', R + 'B424695946/', R + 'B525973925/', R + 'B60885640/', R + 'B67882908/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find — look for the alley off Kiyamachi at Nabeya-cho; drinks only now. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上ル鍋屋町211',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; an April 2026 review confirms it is open, serving drinks only.' },
    pin_source: `Tabelog ${TB} (35.005032, 135.770845); cross-checked: GSI 京都府京都市中京区鍋屋町211番地 (lot) 8m; nearest records 5.2 m (kyoto_pontocho_sushi_ishiya) and 5.4 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525973925/'],
    price_note: 'Drinks only since the end of 2025; no prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Whisky and cocktails', '', 'Drinks', 'ask', 'ask', 'Drinks only since the end of 2025 (April 2026).', 'drinks'),
    ] }, {
    cuisine: '1922年からの洋食のバー (2017年2月の口コミ)・2025年末で料理をやめ、今は飲み物のみ (2026年4月)・ウイスキー (棚に Nikka)、カクテル、ワイン (2014〜2018年の口コミ)・かつてはエビのコキール、冬のカキフライ、チキンカツ、ビーフカツ、エビのクリームコロッケで知られた (2010〜2018年の口コミ)',
    neighborhood: '木屋町と先斗町の間の路地、四条の北',
    gf_detail: '要確認。2025年末から飲み物のみ (2026年4月の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。2025年末から飲み物のみ (2026年4月の口コミ)。',
    notes: '[レトロな洋食のバー・木屋町の路地、1922年から] 木屋町と先斗町の間、曲がりくねった路地の奥にある1922年創業のセピア色の洋食のバー。磨かれたカウンターとNikka のウイスキー。エビのコキールやカキフライで知られた料理は2025年末で終わり、今は飲み物のみ。木曜休み。',
  });
}

// ================================================================ 佐曽羅 EAST 1F
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022406/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '22:30']);
  put({
    id: 'kyoto_sasora_east_pontocho', name: '佐曽羅 EAST 1F (Sasora EAST)', category: 'OMNI',
    lat: 35.004858, lng: 135.771172, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set meals of grilled fish and tamagoyaki, salads, chicken, pizza and cake (2023–26 reviews); pizza and cake contain wheat; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mackerel set meal, chicken, pizza (2025–26 reviews).',
    hours_raw: 'Daily: café 12:00–17:00, bar and dinner 17:00–22:30 (last order 21:45) (Tabelog). Reservations accepted (Tabelog). Charge ¥500 at dinner on the first floor (Tabelog, Japanese text: 「ディナー １F 500円」). Cards (VISA, Master, JCB, AMEX, Diners) and transport IC cards; no QR (Tabelog). 30 seats: 20 on the first floor (counter with a river view, tables, sofas) and 10 upstairs (Tabelog; January 2025). Smoking allowed (Tabelog). Pets allowed on the riverside deck (August 2023). A renovated former tea house on Pontocho, 3 min from Kyoto-Kawaramachi (Tabelog; May 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, on the Kamo river — Kyoto-Kawaramachi',
    cuisine: 'A café by day and a bar by night on the Kamo river, with a riverside terrace; teppanyaki upstairs is a separate listing (Tabelog) · lunch from ¥2,000; mackerel set meal with tamagoyaki and miso soup (Tabelog; September 2025) · salad, chicken with wasabi sauce, Bismarck pizza in generous portions (August 2026) · cake sets in the afternoon (January 2023) · whisky such as Laphroaig on the rocks, beer, cocktails (January 2025; July 2026)',
    website: null, gmaps: gm('佐曽羅 EAST 先斗町'), menu_url: TB,
    notes: '[Café-bar · Pontocho, a tea house on the Kamo river] A renovated former tea house on Pontocho opening onto a riverside terrace: a café with cake sets and a simple mackerel lunch by day, and a bar for drinks with a river view, salads and pizza at night. ¥500 charge at dinner; smoking allowed. Dogs welcome on the deck.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a stylish space renovated from an old tea house, with a café and bar and a riverside terrace on the first floor and teppanyaki on the second; one of three Sasora listings in Pontocho.',
      philosophy: null, specialty: 'Riverside café and bar.',
      anecdotes: [
        { text: 'A September 2025 lunch guest, wary of Pontocho prices, found the mackerel set meal good value.', source: R + 'B514667012/' },
        { text: 'An August 2026 pair booked the 18:00 river-edge seats on a cloudy evening and found the portions too big to order more.', source: R + 'B533956242/' },
        { text: 'A May 2025 visitor had hoped to sit closer to the water and found the terrace less cool than expected.', source: R + 'B507025153/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー、中京区鍋屋町230-1 1F、阪急河原町駅から徒歩3分、毎日12:00〜17:00と17:00〜22:30 (L.O. 21:45)、予約可、ディナー 1F 500円、カード・交通系 IC 可、30席 (1F 20席、2F 10席)、喫煙可、お茶屋を改装した空間、1F はカフェとバーと川沿いのテラス、2F は鉄板焼き、ランチ2,000円から。口コミ (2023年1月〜2026年8月、英語): 鴨川を望むカウンター、鯖の定食と卵焼き、サラダ、鶏のわさびソース、ビスマルクのピザ、ケーキのセット、ウイスキー、ペットはデッキで可。',
      confidence: 'medium', sources: [TB, R + 'B460986954/', R + 'B471015118/', R + 'B483595574/', R + 'B486826143/', R + 'B498543041/', R + 'B507025153/', R + 'B514667012/', R + 'B516074084/', R + 'B528565378/', R + 'B530513448/', R + 'B532611304/', R + 'B533956242/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for the riverside terrace or the river-view counter; ¥500 charge at dinner; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町230-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004858, 135.771172); cross-checked: GSI 京都府京都市中京区鍋屋町230番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Lunch from ¥2,000 per Tabelog; ¥500 charge at dinner on the first floor.', last_checked: TODAY, items: [
      it('', '', 'Lunch (e.g. mackerel set meal)', 'from ¥2,000', 'Lunch', 'ask', 'no', 'Tabelog; September 2025.', 'lunch'),
      it('', '', 'Bismarck pizza', '', 'Dinner', 'no', 'no', 'August 2026.', 'pizza'),
      it('', '', 'Dinner charge (1F)', '¥500', 'Charge', '', '', 'Tabelog.', 'dinner_charge'),
    ] }, {
    cuisine: '鴨川沿いで、昼はカフェ、夜はバー、川沿いのテラスも。2階の鉄板焼きは別の店として掲載 (食べログ)・ランチ2,000円から、卵焼きと味噌汁の鯖の定食 (食べログ、2025年9月)・サラダ、鶏のわさびソース、ビスマルクのピザ、量が多い (2026年8月)・午後はケーキのセット (2023年1月)・ウイスキー、ビール、カクテル (2025年1月、2026年7月)',
    neighborhood: '先斗町、鴨川沿い。京都河原町駅',
    gf_detail: '要確認。焼き魚と卵焼きの定食、サラダ、鶏、ピザ、ケーキ (2023〜2026年の口コミ)。ピザとケーキは小麦を含む。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鯖の定食、鶏、ピザ (2025〜2026年の口コミ)。',
    notes: '[カフェとバー・先斗町、鴨川沿いのお茶屋] 先斗町の元お茶屋を改装し、川沿いのテラスに続く店。昼はケーキのセットや鯖の定食のカフェ、夜は川を眺めながら飲むバーでサラダやピザも。夜はチャージ500円、喫煙可。犬はデッキで可。',
  });
}

// ================================================================ 黒毛和牛 善 京都四条河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042752/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '01:00']); const WE = day(['11:30', '01:00']);
  put({
    id: 'kyoto_kuroge_wagyu_zen_kawaramachi', name: '黒毛和牛 善 京都四条河原町店 (Kuroge Wagyu Zen)', category: 'OMNI',
    lat: 35.005803, lng: 135.769535, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu yakiniku with about six sauces, sukiyaki and shabu-shabu, plus cold noodles and bibimbap (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku, sukiyaki and shabu-shabu restaurant (2025–26 reviews).',
    hours_raw: 'Mon–Fri 17:00–1:00, Sat, Sun and holidays 11:30–1:00 (last order 0:00); closed irregularly (Tabelog). Reservations accepted (Tabelog). Cards incl. UnionPay; e-money; QR incl. PayPay, Alipay and WeChat Pay (Tabelog). 100 seats, all in semi-private or private rooms; tablet ordering (Tabelog; December 2025; October 2026). Non-smoking; wheelchair accessible (Tabelog). Furushiro Building 6F, on Kawaramachi south of Takoyakushi, 5 min from Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, south of Takoyakushi — Kyoto-Kawaramachi',
    cuisine: 'A4-or-higher black wagyu as yakiniku, sukiyaki or shabu-shabu, with all-you-can-eat courses from ¥4,180 (Tabelog) · all-you-can-eat yakiniku ¥3,800 at lunch with lean wagyu, offal and marinated kalbi; all-you-can-drink ¥2,000 for two hours (August 2026) · A5 all-you-can-eat ¥8,250 with about six sauces (September 2026) · shabu-shabu course with cold noodles, bibimbap and braised pork (December 2025) · à la carte cuts and roast-beef salad (May 2025)',
    website: null, gmaps: gm('黒毛和牛 善 京都四条河原町店'), menu_url: TB,
    notes: '[Wagyu all-you-can-eat · Kawaramachi, private rooms] A 100-seat sixth-floor restaurant where every table is in a private or semi-private room: black wagyu as yakiniku, sukiyaki or shabu-shabu, mostly as all-you-can-eat courses from about ¥3,800 at lunch to ¥8,250 for A5, ordered by tablet. Open to 1:00. Reviews are mixed on service and on tougher cuts.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: the Kyoto Shijo Kawaramachi branch of Kuroge Wagyu Zen (the other is in Namba Shinsaibashi), serving A4-or-higher black wagyu as yakiniku, sukiyaki and shabu-shabu.',
      philosophy: null, specialty: 'Black wagyu all-you-can-eat courses.',
      anecdotes: [
        { text: 'A December 2025 diner chose the shabu-shabu course and found the private rooms and tablet ordering suited business meetings and dates.', source: R + 'B524726301/' },
        { text: 'A September 2026 diner had the ¥8,250 A5 course and liked trying about six sauces.', source: R + 'B535116287/' },
        { text: 'An October 2026 diner found the meat tough and the all-you-can-drink weak.', source: R + 'B537362535/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・すき焼き・しゃぶしゃぶ、中京区河原町通蛸薬師下ル塩屋町324 古城ビル 6F、阪急京都河原町駅3番出口から徒歩約5分、月〜金17:00〜翌1:00、土日祝11:30〜翌1:00 (L.O. 0:00)、不定休、予約可、カード・電子マネー・QR 可、100席 (半個室と完全個室)、禁煙、車椅子可、A4以上の黒毛和牛を焼肉、すき焼き、しゃぶしゃぶで、食べ放題4,180円から。口コミ (2025年5月〜2026年10月、英語): 昼の食べ放題3,800円、飲み放題2時間2,000円、A5の食べ放題8,250円、たれ6種、しゃぶしゃぶのコース、冷麺、ビビンバ、タブレットで注文、肉が硬い、提供が遅いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B507658007/', R + 'B510812264/', R + 'B518957285/', R + 'B519255041/', R + 'B523669829/', R + 'B524726301/', R + 'B533804251/', R + 'B535116287/', R + 'B535309803/', R + 'B537149575/', R + 'B537362535/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by tablet in a private room; all-you-can-eat courses are the norm. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通蛸薬師下ル塩屋町324 古城ビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005803, 135.769535); cross-checked: GSI 京都府京都市中京区塩屋町324番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533804251/', R + 'B535116287/'],
    price_note: 'Course prices from Tabelog and August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat course (from)', '¥4,180', 'Courses', 'ask', 'no', 'Tabelog.', 'tabehodai'),
      it('', '', 'Lunch all-you-can-eat yakiniku', '¥3,800', 'Courses', 'ask', 'no', 'August 2026.', 'lunch_tabehodai'),
      it('', '', 'A5 all-you-can-eat course', '¥8,250', 'Courses', 'ask', 'no', 'September 2026.', 'a5_tabehodai'),
      it('', '', 'All-you-can-drink (two hours)', '¥2,000', 'Drinks', '', '', 'August 2026.', 'nomihodai'),
    ] }, {
    cuisine: 'A4以上の黒毛和牛を焼肉、すき焼き、しゃぶしゃぶで、食べ放題は4,180円から (食べログ)・昼の食べ放題焼肉3,800円、赤身の和牛、ホルモン、味付けカルビ、2時間飲み放題2,000円 (2026年8月)・たれ6種ほどの A5の食べ放題8,250円 (2026年9月)・冷麺、ビビンバ、角煮の付くしゃぶしゃぶのコース (2025年12月)・単品の肉とローストビーフのサラダ (2025年5月)',
    neighborhood: '河原町、蛸薬師の南。京都河原町駅',
    gf_detail: '要確認。6種ほどのたれの和牛の焼肉、すき焼き、しゃぶしゃぶ、冷麺やビビンバも (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉、すき焼き、しゃぶしゃぶの店 (2025〜2026年の口コミ)。',
    notes: '[和牛の食べ放題・河原町、全席個室] ビル6階の100席の店で、全席が個室か半個室。黒毛和牛を焼肉、すき焼き、しゃぶしゃぶで、昼の約3,800円から A5の8,250円までの食べ放題をタブレットで注文。深夜1時まで。サービスや肉の硬さには賛否がある。',
  });
}

save();
