// Kyoto priority (kyoto-missed), worker osw13, batch 135 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: 泡ノ間5 (AWANOMA5), 京の酒処 秀屋, 花いちりん, イチョウヤ (ICHOYA). Skips: Nobilitas (no 2025–26 reviews), 松前屋 (no 2025–26 reviews), sampo (retail). Shops fetched by the worker (Tabelog /en/ only, 3 s apart).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-135');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26007396', 'no reviews in 2025–26: Nobilitas (Ｎｏｂｉｌｉｔａｓ), an izakaya by Kyoto Station; the 12 Tabelog reviews fetched run from January 2009 to March 2024 (the listing\'s featured review is March 2024), so existence now is unverified');
skip('26021580', 'no reviews in 2025–26: 松前屋, the kombu shop on Kamanza-dori (founded 1392 per reviews; a historic retail shop that would qualify under the 11-08 ruling), but the 12 Tabelog reviews fetched end in November 2024 and no official site was found to confirm it is trading now; worth redoing with a current source');
skip('26022228', 'retail food shop (Greg 11-07 ruling): sampo is a take-away-only baked-sweets shop on Kawaramachi near Kojinguchi ("Take Away only", January 2023; "a take-out only shop", March 2023); no founding date, family succession or GF/vegan options sourced');

// ================================================================ 泡ノ間5 (AWANOMA5)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045562/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://awanoma5.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_awanoma5_kamanza', name: '泡ノ間5 (AWANOMA5)', category: 'OMNI',
    lat: 35.01648276786099, lng: 135.75588619048116, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a craft-beer bar (beer is made from barley or wheat); the food includes gyoza, fried zucchini, squid karaage and dashimaki (August–November 2026 reviews); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: edamame, fried zucchini and pickles are on the menu (2026 reviews; official site), alongside octopus, sausage, duck and egg dishes; no vegan option stated.',
    hours_raw: 'Official site: 11:00–22:00 (last order 21:30), open every day (年中無休). Tabelog: the same hours, Mon–Sun and public holidays. Reservations taken; at busy times you may be asked to change seats (Tabelog). 10% service charge (Tabelog). Cards (Visa, Master, JCB, AMEX, Diners), e-money and QR payments accepted (Tabelog). 28 seats, standing for up to 30; counter, standing tables and semi-private rooms (Tabelog; September 2026). Non-smoking; no parking. English menu and English-speaking staff; children and strollers welcome (Tabelog). Opened 8 August 2026 (Tabelog). In a renovated Kyoto townhouse just inside Kamanza-dori south of Marutamachi-dori, 5 min from Marutamachi subway station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamanza-dori just south of Marutamachi — 5 min from Marutamachi',
    cuisine: 'A five-tap craft-beer bar in a renovated machiya near the Imperial Palace, open from 11:00, with tasting flights and sharing plates (official site; August–November 2026 reviews) · five taps of mostly Kansai and Kyoto-area craft beer, changed weekly according to one reviewer (August 2026); five-beer flight ¥2,640 (August 2026) and ¥2,400 (September 2026); three-beer tasting ¥1,650 (September 2026) · beers named by reviewers: Nara Brewing\'s "TIMMUR" (August 2026), a strawberry sour ale from Nagasaki\'s Island Brewery (September 2026), Hassaku White, Midori Mame Mame and SKIP (September 2026) · bottled beer, white wine (August 2026) and a wide whisky selection (October 2026) · octopus and seaweed marinated in garlic oil ¥1,480, fried zucchini ¥1,080, gyoza ¥850 (August 2026) · edamame ¥480, dashimaki ¥800, squid karaage with shichimi mayonnaise ¥1,180 (September 2026) · zucchini fritters with lemon aioli, grilled sausage (September 2026) · roast duck with berry sauce, a pickle assortment (official site photos) · generous portions for sharing (September, October 2026) · about ¥4,000–8,000 a head (reviews)',
    website: SITE, gmaps: gm('泡ノ間5 AWANOMA5 京都 釜座通丸太町'), menu_url: null,
    notes: '[Craft beer · Kamanza-dori by the Imperial Palace, a machiya beer bar] Opened August 2026 in a renovated townhouse with a courtyard: five rotating taps of Kansai craft beer as flights or pints, whisky, and big sharing plates such as garlic-oil octopus, zucchini fritters and dashimaki. Open daily 11:00–22:00; English menu; 10% service charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The official site calls AWANOMA5 "五つの泡で、ひと息つける、小さな休憩所" (a small resting place for a breather over five kinds of bubbles). A September 2026 reviewer writes that the owner "also runs Butajiruya" (as the translated review gives it) and that the interior, formerly a wine bar, was remodelled, with a courtyard visible at the back, and served by "young male and female staff". Reviewers describe friendly staff who recognised a returning guest (September 2026), a place where a woman can drink alone comfortably (August and September 2026), and the sense that it is "run by beer lovers" (August 2026). One September 2026 reviewer notes that it seems to attract many tourists and international visitors who find it through social media; another found all the later customers Japanese on a holiday morning. Reviewers found it a little pricey (August, September 2026) and wished for half sizes for solo drinkers (August 2026); the food menu is short (September 2026).',
      philosophy: null,
      specialty: 'Five-tap craft-beer flights; sharing plates.',
      anecdotes: [
        { text: 'August 2026: "Out of the five beers I tried, only one felt standard. The others were quite unique. I was honestly surprised by the strong acidity of the strawberry flavor and the intense spiciness of the sansho pepper."', source: R + 'B533421096/' },
        { text: 'September 2026: "Located near Marutamachi, this craft beer bar is housed in a renovated machiya (traditional wooden townhouse)… featuring 5 taps of draft beer with a focus on unique brands."', source: R + 'B535403521/' },
        { text: 'October 2026: "The interior, renovated from a traditional machiya, was surprisingly spacious, and the solid wood table, shaped naturally, was beautiful."', source: R + 'B537291564/' },
      ],
      japanese_sources_summary: '公式サイト: 泡ノ間5 (AWANOMA5)、「五つの泡で、ひと息つける、小さな休憩所です。」、11:00〜22:00 (L.O. 21:30)、年中無休、京都市中京区釜座通丸太町下ル桝屋町164-1、鴨のローストとベリーソースの一皿、漬物の盛り合わせの写真。食べログ: ビアバー、バル、ビアホール、28席、立ち飲み30名まで、予約可、サービス料10%、カード・電子マネー・QR可、禁煙、英語メニュー・英語のできるスタッフ、子ども可、2026年8月8日オープン、地下鉄丸太町駅4番出口から徒歩5分、改装した京町家。口コミ (2026年8月〜11月、英語): 5種のタップのクラフトビール、飲み比べ (5種2,640円、2,400円、3種1,650円)、たこと海藻のガーリックオイルマリネ1,480円、ズッキーニのフライ1,080円、餃子850円、枝豆480円、だし巻き800円、いかの唐揚げ七味マヨ1,180円、ウイスキーも多い、量は多め、中庭が見える、もとはワインバー (2026年9月)。',
      confidence: 'low', sources: [SITE, TB].concat(rv(R, ['B533421096', 'B535403521', 'B536105287', 'B536212137', 'B537291564', 'B539629892'])) },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); reviewers mention international visitors (September 2026).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区釜座通丸太町下ル桝屋町164-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; opened 8 August 2026; Tabelog reviews dated August to November 2026.' },
    pin_source: `Tabelog ${TB} (35.016483, 135.755886); not pin-checked by the worker (integrator to check); nearest pin kyoto_nikusakaya_kamanza_marutamachi 15.3m (桝屋町163); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533421096/', R + 'B535403521/'],
    price_note: 'Prices from August–September 2026 reviews; 10% service charge (Tabelog). The official site lists no prices.', last_checked: TODAY, items: [
      it('', '', 'Five-beer craft-beer flight', '¥2,400', 'Drink', 'no', 'ask', 'September 2026; ¥2,640 in August 2026.', 'beer_flight5'),
      it('', '', 'Three-beer tasting', '¥1,650', 'Drink', 'no', 'ask', 'September 2026.', 'beer_flight3'),
      it('', '', 'Octopus and seaweed marinated in garlic oil', '¥1,480', 'Small plate', 'ask', 'no', 'August 2026.', 'tako_marinade'),
      it('', '', 'Fried zucchini', '¥1,080', 'Small plate', 'ask', 'ask', 'August 2026; zucchini fritters with lemon aioli, September 2026.', 'zucchini_fry'),
      it('', '', 'Gyoza', '¥850', 'Small plate', 'no', 'no', 'August 2026.', 'gyoza'),
      it('', '', 'Dashimaki', '¥800', 'Small plate', 'ask', 'no', 'September 2026; also November 2026.', 'dashimaki'),
      it('', '', 'Squid karaage with shichimi mayonnaise', '¥1,180', 'Small plate', 'ask', 'no', 'September 2026.', 'ika_karaage'),
      it('', '', 'Edamame', '¥480', 'Small plate', 'ask', 'ask', 'September 2026.', 'edamame'),
    ] }, {
    cuisine: '御所の近く、改装した京町家の5タップのクラフトビールのバー。11時から開いていて、飲み比べと取り分けの料理 (公式サイト、2026年8月〜11月の口コミ)・関西と京都近郊のクラフトビールが中心の5種のタップ、ある口コミでは毎週入れ替え (2026年8月)、5種の飲み比べ2,640円 (2026年8月)、2,400円 (2026年9月)、3種の飲み比べ1,650円 (2026年9月)・口コミに出てくるビール: 奈良醸造の「TIMMUR」 (2026年8月)、長崎の Island Brewery のいちごのサワーエール (2026年9月)、Hassaku White、Midori Mame Mame、SKIP (2026年9月)・瓶ビール、白ワイン (2026年8月)、ウイスキーも多い (2026年10月)・たこと海藻のガーリックオイルマリネ1,480円、ズッキーニのフライ1,080円、餃子850円 (2026年8月)・枝豆480円、だし巻き800円、いかの唐揚げ七味マヨ1,180円 (2026年9月)・ズッキーニのフリットのレモンアイオリ、焼きソーセージ (2026年9月)・鴨のローストとベリーソース、漬物の盛り合わせ (公式サイトの写真)・取り分け向きの多めの量 (2026年9月、10月)・ひとり4,000〜8,000円ほど (口コミ)',
    neighborhood: '釜座通、丸太町通の少し南。地下鉄丸太町から徒歩5分',
    gf_detail: '要確認: クラフトビールのバー (ビールは大麦や小麦から造る)。料理は餃子、ズッキーニのフライ、いかの唐揚げ、だし巻きなど (2026年8月〜11月の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 枝豆、ズッキーニのフライ、漬物もある (2026年の口コミ、公式サイト) が、たこ、ソーセージ、鴨、卵の料理も。ヴィーガン対応の記載なし。',
    notes: '[クラフトビール・御所近くの釜座通、町家のビアバー] 2026年8月、中庭のある改装した町家に開店。入れ替わる5種の関西のクラフトビールを飲み比べやパイントで、ウイスキーも。たこのガーリックオイルマリネ、ズッキーニのフリット、だし巻きなど取り分けの料理。毎日11:00〜22:00、英語メニューあり、サービス料10%。',
  });
}

// ================================================================ 京の酒処 秀屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26025912/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '25:00']);
  put({
    id: 'kyoto_izakaya_shichijo_26025912', name: '京の酒処 秀屋', category: 'OMNI',
    lat: 34.98945253707327, lng: 135.757483, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: oden in bonito stock, mentaiko, smoked dishes, braised octopus, yudofu and onion with mayonnaise and soy sauce (2015–2024 reviews), plus ramen and nyumen to finish (December 2015); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the oden is in bonito stock (March 2019), and most dishes are fish, meat or egg; Awaji onion and yudofu have appeared (2015, 2019); no vegan option stated.',
    hours_raw: 'Tabelog: Mon–Sun and public holidays 18:30–01:00 (food last order 00:00); closed days not fixed. Reservations taken (Tabelog). Cash only: no cards, e-money or QR codes (Tabelog). 10 seats: 6 at the counter, one table of 4 (Tabelog). Smoking allowed (Tabelog). No parking. Up a steep staircase to the second floor in a back alley north of Shichijo-dori, about a minute from the Karasuma-Shichijo crossing; a lantern marks the ground-floor entrance (December 2024, December 2025 reviews). About 7 min walk from Kyoto Station (Tabelog). The same address as the bar じじばば第三酒場 (kyoto_jijibaba_daisan_sakaba, address_ja "京都府京都市下京区新シ町138").',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Back alley north of Shichijo, by Karasuma-Shichijo — 7 min from Kyoto Station',
    cuisine: 'A ten-seat second-floor sake izakaya in a back alley north of Kyoto Station, with a long list of sake and shochu and many menu items posted up (2015–2026 reviews) · a wide range of Japanese sake and shochu (December 2024, December 2025), local sake (June 2025); one reviewer found no dry sake (April 2018) · assorted platter of mentaiko, salmon, chicken breast and itawasa; tender braised octopus; Awaji Island onion with mayonnaise and soy sauce; Kyoto-style oden in bonito stock, a mixed plate ¥600 (March 2019) · pork ginger stir-fry, clam ajillo, yudofu, and ramen or nyumen to finish (December 2015) · smoked dishes and mentaiko (December 2015, December 2024) · about ¥2,000–8,000 a head (reviews)',
    website: null, gmaps: gm('京の酒処 秀屋 下京区 新シ町138'), menu_url: null,
    notes: '[Izakaya · back alley by Karasuma-Shichijo, a ten-seat sake counter] Up a steep Showa-era staircase near Kyoto Station: a small counter with a snack-bar feel, a long sake and shochu list, oden in bonito stock, mentaiko and smoked dishes, run by an owner from Kyushu who swaps stories and restaurant tips. Open late, to 1:00; cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Kyushu (December 2024 and December 2025 reviews)',
      background: 'Two reviewers write that the owner is from Kyushu (December 2024, December 2025). Tabelog gives the opening day as 14 March 2015; a December 2025 reviewer understood that the owner opened the place about 20 years ago. A March 2019 reviewer enjoyed the "gap" between the owner\'s quiet manner and an edgy hairstyle and the way the menu is displayed; a June 2025 visitor found the owner "a bit intimidating at first" but was soon laughing at the owner\'s stories. The owner "shared many fascinating stories about Kyoto" (December 2025) and "introduced us to delicious restaurants not only in Kyoto but also across the country" (September 2026). The room has one table and a counter (December 2024) and "a snack bar vibe, yet it operates as an izakaya" (December 2025). Two reviewers came as a later stop of the night (March 2019, December 2025).',
      philosophy: null,
      specialty: 'Sake and shochu; oden in bonito stock; mentaiko and smoked dishes.',
      anecdotes: [
        { text: 'March 2019: "We also ordered the Kyo-style oden with bonito stock, which was a mix for JPY 600—great value for money!"', source: R + 'B140981143/' },
        { text: 'December 2025: "Located in a back alley south of Higashi Honganji, this restaurant is on the second floor, accessible by a steep staircase reminiscent of the Showa era. The interior has a snack bar vibe, yet it operates as an izakaya."', source: R + 'B519458888/' },
        { text: 'September 2026: "The knowledgeable owner introduced us to delicious restaurants not only in Kyoto but also across the country."', source: R + 'B535549933/' },
      ],
      japanese_sources_summary: '食べログ: 京の酒処 秀屋、居酒屋、下京区新シ町138 2F、京都駅から徒歩約7分、月〜日・祝日18:30〜翌1:00 (料理L.O. 0:00)、定休日不定、予約可、カード・電子マネー・QR不可、10席 (カウンター6席、テーブル4席)、喫煙可、駐車場なし、オープン2015年3月14日。口コミ (2015年9月〜2026年9月、英語): 烏丸七条から1分ほど、七条通の北の細い路地の2階、1階の入口に提灯 (2024年12月)、昭和を思わせる急な階段、スナックの雰囲気の居酒屋 (2025年12月)、店主は九州の出身 (2024年12月、2025年12月)、20年ほど前に開いたらしい (2025年12月)、日本酒と焼酎が多い、明太子、燻製、盛り合わせ (明太子、サーモン、鶏むね、板わさ)、たこのやわらか煮、淡路島の玉ねぎのマヨネーズ醤油、かつおだしの京風おでん盛り合わせ600円 (2019年3月)、豚の生姜焼き、あさりのアヒージョ、湯豆腐、締めのラーメンやにゅうめん (2015年12月)、店主は京都や全国の店に詳しい (2026年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B140981143', 'B349135180', 'B498405801', 'B507816588', 'B519458888', 'B535549933'])) },
    cultural_comfort: { level: 'japanese', note: 'A ten-seat counter bar; cash only; phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新シ町138 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated June 2025, December 2025 and September 2026.' },
    pin_source: `Tabelog ${TB} (34.989453, 135.757417) is within 1 m of kyoto_jijibaba_daisan_sakaba (same address, 新シ町138), so offset about 6 m east to 135.757483 (6.6m from it); not pin-checked by the worker (integrator to check); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B140981143/'],
    price_note: 'Few prices in reviews; reviewers spent about ¥2,000–8,000 a head (2015–2026).', last_checked: TODAY, items: [
      it('', '', 'Kyoto-style oden in bonito stock, mixed plate', '¥600', 'Small plate', 'ask', 'no', 'March 2019.', 'oden_mori'),
      it('', '', 'Assorted platter (mentaiko, salmon, chicken breast, itawasa)', null, 'Small plate', 'ask', 'no', 'March 2019.', 'moriawase'),
      it('', '', 'Braised octopus', null, 'Small plate', 'ask', 'no', 'March 2019.', 'tako_yawaraka'),
      it('', '', 'Awaji Island onion with mayonnaise and soy sauce', null, 'Small plate', 'ask', 'no', 'March 2019.', 'awaji_onion'),
    ] }, {
    cuisine: '京都駅の北の路地の2階、10席の日本酒の居酒屋。日本酒と焼酎が多く、品書きがたくさん貼られている (2015〜2026年の口コミ)・日本酒と焼酎の品ぞろえが多い (2024年12月、2025年12月)、地酒 (2025年6月)。辛口の日本酒がなかったという口コミも (2018年4月)・明太子、サーモン、鶏むね、板わさの盛り合わせ、やわらかいたこの煮物、淡路島の玉ねぎのマヨネーズ醤油、かつおだしの京風おでんの盛り合わせ600円 (2019年3月)・豚の生姜焼き、あさりのアヒージョ、湯豆腐、締めのラーメンやにゅうめん (2015年12月)・燻製と明太子 (2015年12月、2024年12月)・ひとり2,000〜8,000円ほど (口コミ)',
    neighborhood: '烏丸七条の近く、七条通の北の路地。京都駅から徒歩7分',
    gf_detail: '要確認: かつおだしのおでん、明太子、燻製、たこの煮物、湯豆腐、玉ねぎのマヨネーズ醤油 (2015〜2024年の口コミ)、締めのラーメンやにゅうめん (2015年12月)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: おでんはかつおだし (2019年3月)、料理の多くは魚、肉、卵。淡路島の玉ねぎや湯豆腐もあった (2015年、2019年)。ヴィーガン対応の記載なし。',
    notes: '[居酒屋・烏丸七条の路地、10席の日本酒のカウンター] 京都駅近く、昭和の急な階段を上がった2階。スナックのような小さなカウンターに日本酒と焼酎がずらり、かつおだしのおでん、明太子、燻製。九州出身の店主が京都の話やおすすめの店を教えてくれる。深夜1時まで、現金のみ、喫煙可。',
  });
}

// ================================================================ 花いちりん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006004/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '21:00']); const F = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_shokudo_kojinguchi_26006004', name: '花いちりん', category: 'OMNI',
    lat: 35.02046323786283, lng: 135.76958373051175, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the set meals are mostly wheat-battered or sauced (tonkatsu, tempura, karaage, chicken nanban, ginger pork, udon), but daily sashimi and grilled-fish sets are also served (2023–2025 reviews); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: a fish and meat set-meal shop (sashimi, grilled fish, tonkatsu, karaage, oyakodon); no vegan dish or option stated.',
    hours_raw: 'Tabelog (and a September 2025 reviewer\'s note "as of September 16, 2025"): Mon–Thu 11:30–14:00 and 18:00–21:00; Fri 11:30–14:00 and 17:00–22:00; closed Saturday and Sunday. A set-meal restaurant at lunch and an izakaya in the evening (May 2025). Reservations taken (Tabelog). Cards (Visa, JCB, AMEX) and QR payments; no e-money (Tabelog). 40 seats: a four-seat counter, tables and raised tatami areas (May 2023, May 2025). Smoking allowed (Tabelog). No parking. The day\'s sets are posted on a sign outside; there is no menu at the counter (May 2023, August 2023). Just south of the Kojinguchi crossing on Kawaramachi-dori, near the Legal Affairs Bureau (2024–2025 reviews); 2–3 min from the Kojinguchi bus stop, 5 min from Jingu-Marutamachi (Tabelog; September 2025).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi just south of Kojinguchi — 5 min from Jingu-Marutamachi',
    cuisine: 'A busy neighbourhood set-meal restaurant at lunch, an izakaya in the evening, with set meals around ¥850–1,300 and unlimited rice refills (2023–2026 reviews) · tonkatsu set with udon and rice ¥850 (April 2023); oroshi tonkatsu (with grated daikon) ¥850 (May 2023); thick tonkatsu set (June 2024) · tempura set ¥900, with hitsumabushi and others at the same price (July 2023) · daily sashimi set ¥1,000 with a large rice (February 2024); sashimi set ¥1,300 and "Rare Katsuo" ¥1,000 (May 2025) · daily simmered-dish, sashimi and grilled-fish sets, sometimes curry (August 2023) · karaage, ginger pork, chicken nanban, udon and rice bowls, with unlimited rice refills (May 2024) · salmon rice bowl (May 2023; September 2025) · oroshi pork-cutlet set with rice, red miso soup, mini salad, a small side and pickles (September 2025) · generous chicken (January 2026) · oyakodon, under ¥1,000 (September 2026) · tempura, sashimi and udon set meals in the evening too (September 2025)',
    website: null, gmaps: gm('花いちりん 京都 上京区 上生州町226-1'), menu_url: null,
    notes: '[Set meals · Kawaramachi by Kojinguchi, a lunch teishoku shop] A packed weekday lunch spot north of Marutamachi: tonkatsu, tempura, sashimi and grilled-fish sets from about ¥850 with rice refills, salmon bowls and oyakodon; the day\'s sets are on the sign outside. Izakaya in the evening, with set meals still served. Closed Sat–Sun.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe a popular set-meal restaurant "continuously packed with customers coming and going" at lunch, much used by students and young professionals (May 2024), and almost full at lunchtime (June 2024, September 2026). A May 2023 visitor sat at the four-seat counter where diners watched the afternoon news on the TV; with no menu at the counter, the reviewer stepped out to read the sign, and heard others order a salmon rice bowl and a "special" set. An August 2023 reviewer who came often for lunch with colleagues remembers "the friendly older waitress" and a coffee given on the reviewer\'s last day at the company. A September 2025 reviewer praises "the warm hospitality of the lovely staff" and the cooking of an owner the reviewer has never seen. A May 2025 visitor came after seeing the shop on the YouTube channel "Oideyasu" and found the sashimi standard and the side dishes ordinary; a July 2023 group waited a while for rice.',
      philosophy: null,
      specialty: 'Tonkatsu, tempura and sashimi set meals.',
      anecdotes: [
        { text: 'April 2023: "Not only do you get the tonkatsu, but it also comes with udon and rice at this unbelievable price… You can actually taste the meat, not just the breading!"', source: R + 'B463910575/' },
        { text: 'May 2024: "During lunch hours, it\'s continuously packed with customers coming and going… with unlimited rice refills, which many customers took advantage of."', source: R + 'B484852833/' },
        { text: 'August 2023: "The set meals feature options like simmered dishes, sashimi, and grilled fish that change daily, and it\'s nice to check the sign outside before entering!"', source: R + 'B497957770/' },
      ],
      japanese_sources_summary: '食べログ: 花いちりん、居酒屋・食堂・麺類、上京区上生州町226-1、荒神口バス停から徒歩2〜3分、神宮丸太町から354m、月〜木11:30〜14:00・18:00〜21:00、金11:30〜14:00・17:00〜22:00、土日休み、予約可、カード (VISA、JCB、AMEX)・QR可、電子マネー不可、40席、喫煙可、駐車場なし。口コミ (2023年4月〜2026年9月、英語): 昼は定食屋、夜は居酒屋 (2025年5月)、荒神口の交差点のすぐ南、法務局の近く、とんかつ定食 (うどんとご飯付き) 850円 (2023年4月)、おろしとんかつ850円 (2023年5月)、天ぷら定食900円 (2023年7月)、日替わりの刺身定食1,000円 (2024年2月)、刺身定食1,300円、「Rare Katsuo」1,000円 (2025年5月)、唐揚げ、生姜焼き、チキン南蛮、うどん、丼、ご飯おかわり自由 (2024年5月)、サーモン丼、親子丼、日替わりは外の看板に、カウンター4席、テーブル、座敷、昼はほぼ満席。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B463910575', 'B465181319', 'B468215829', 'B480494092', 'B484852833', 'B487323808', 'B497957770', 'B507345536', 'B514363089', 'B515031632', 'B521960444', 'B536572842'])) },
    cultural_comfort: { level: 'japanese', note: 'The day\'s sets are on a sign outside, with no menu at the counter (May 2023); phone may be Japanese only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区上生州町226-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.020463, 135.769584); not pin-checked by the worker (integrator to check); nearest visible pin kyoto_kamogawa_cafe 37.5m (hidden kyoto_bonne_volonte 33.5m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463910575/', R + 'B468215829/', R + 'B480494092/', R + 'B507345536/'],
    price_note: 'Prices from 2023–2025 reviews; no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Tonkatsu set (with udon and rice)', '¥850', 'Set meal', 'no', 'no', 'April 2023.', 'tonkatsu_teishoku'),
      it('', '', 'Oroshi tonkatsu set (with grated daikon)', '¥850', 'Set meal', 'no', 'no', 'May 2023; also September 2025.', 'oroshi_tonkatsu'),
      it('', '', 'Tempura set', '¥900', 'Set meal', 'no', 'no', 'July 2023.', 'tempura_teishoku'),
      it('', '', 'Daily sashimi set', '¥1,000', 'Set meal', 'ask', 'no', 'February 2024.', 'sashimi_teishoku_daily'),
      it('', '', 'Sashimi set', '¥1,300', 'Set meal', 'ask', 'no', 'May 2025.', 'sashimi_teishoku'),
      it('', '', '"Rare Katsuo" (bonito)', '¥1,000', 'Set meal', 'ask', 'no', 'May 2025.', 'katsuo_tataki'),
    ] }, {
    cuisine: '昼はにぎわう町の定食屋、夜は居酒屋。定食は850〜1,300円ほどで、ご飯のおかわり自由 (2023〜2026年の口コミ)・うどんとご飯付きのとんかつ定食850円 (2023年4月)、おろしとんかつ850円 (2023年5月)、厚いとんかつの定食 (2024年6月)・天ぷら定食900円、ひつまぶしなども同じ値段 (2023年7月)・日替わりの刺身定食1,000円、ご飯は大盛り (2024年2月)、刺身定食1,300円、「Rare Katsuo」1,000円 (2025年5月)・日替わりの煮物、刺身、焼き魚の定食、ときどきカレー (2023年8月)・唐揚げ、生姜焼き、チキン南蛮、うどん、丼、ご飯のおかわり自由 (2024年5月)・サーモン丼 (2023年5月、2025年9月)・ご飯、赤だし、ミニサラダ、小鉢、漬物付きのおろしとんかつ定食 (2025年9月)・鶏はたっぷり (2026年1月)・親子丼は1,000円未満 (2026年9月)・夜も天ぷら、刺身、うどんの定食 (2025年9月)',
    neighborhood: '河原町通、荒神口のすぐ南。神宮丸太町から徒歩5分',
    gf_detail: '要確認: 定食の多くは小麦の衣やたれを使う (とんかつ、天ぷら、唐揚げ、チキン南蛮、生姜焼き、うどん) が、日替わりの刺身や焼き魚の定食もある (2023〜2025年の口コミ)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 魚と肉の定食の店 (刺身、焼き魚、とんかつ、唐揚げ、親子丼)。ヴィーガンの料理や対応の記載なし。',
    notes: '[定食・荒神口の河原町通、昼の定食屋] 丸太町の北、平日の昼はいっぱいになる店。とんかつ、天ぷら、刺身、焼き魚の定食が850円ほどから、ご飯のおかわり自由、サーモン丼や親子丼も。その日の定食は外の看板に。夜は居酒屋で、定食も出る。土日休み。',
  });
}

// ================================================================ イチョウヤ (ICHOYA)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002362/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ichoya.jp/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_ichoya_nishihonganji', name: 'イチョウヤ (ICHOYA)', category: 'OMNI',
    lat: 34.991869677875826, lng: 135.75337379023426, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: yuba soba (buckwheat noodles, usually with wheat), a yuba and natto rice bowl in a sweet-savoury sauce, and a doria with homemade white sauce (official site; Tabelog); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the menu is built on yuba, nama-fu, tofu and Kyoto vegetables (official site), but the yuba natto bowl is topped with egg, the kitchen also uses fish and shellfish, and the white, meat and demi-glace sauces are homemade (official site; Tabelog); no vegan option stated.',
    hours_raw: 'Tabelog: Tue–Sun 11:00–15:00; closed Monday, including public holidays. In the evening the same operator runs its sister shop ぎんなん (kyoto_ginnan_shichijo, on Shichijo-dori west of Karasuma) (Tabelog; official site). Yuba soba is served only at the lunch café time (official site). Reservations taken (Tabelog). Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 35 seats with a counter and a tatami room with a sunken kotatsu table at the back (Tabelog; official site; November 2024 and November 2025 reviews). About a 15-minute wait at a weekend lunch (November 2025). No parking; coin parking nearby (Tabelog). On Horikawa-dori facing Nishi Honganji, 10 min walk from JR Kyoto Station, or the Nishi Honganji-mae bus stop on route 9 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Horikawa-dori facing Nishi Honganji — 10 min from Kyoto Station',
    cuisine: 'A creative Japanese lunch café facing Nishi Honganji, built on yuba, nama-fu, tofu and Kyoto vegetables (official site; 2013–2026 reviews) · yuba soba ¥700, a popular lunch-only dish (official site); yuba soba in a gentle broth (February 2017; November 2025) · yuba natto rice bowl, yuba and natto simmered in a sweet-savoury sauce and topped with egg, ¥850 (official site), ¥900 (November 2024), with burdock and daikon pickles · yuba rice bowl (February 2017; March 2023; September 2024; June 2026) · whole kabocha squash doria ¥950 (official site) · homemade white sauce, meat sauce and demi-glace; homemade sweets (Tabelog); tofu ice cream and birthday cakes to order (official site) · pickles from "Mori" sold by the entrance (November 2025) · about ¥1,000–2,000 a head at lunch (reviews)',
    website: SITE, gmaps: gm('ICHOYA いちょうや 西本願寺前'), menu_url: SITE + 'menu/',
    notes: '[Creative Japanese · Horikawa-dori facing Nishi Honganji, a yuba lunch café] A calm café-restaurant across from the temple, a souvenir shop from 1966 and this café since 2002: yuba soba, a yuba-and-natto rice bowl, a whole-kabocha doria, tofu ice cream and homemade sweets, with a kotatsu tatami room at the back. Lunch only, 11:00–15:00; closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The official site, which calls the shop 創作和食・茶房 ICHOYA (いちょうや), says it began in 昭和四十一年 (1966) as いちょうや, a Kyoto souvenir shop, and opened in its present form on 1 August 2002, cooking creative dishes from yuba, nama-fu, tofu and Kyoto vegetables with chosen fish and shellfish. The same site presents the izakaya ぎんなん (kyoto_ginnan_shichijo) as its sister shop; Tabelog says the business operates there in the evening. No operator or chef is named. Reviewers describe a serene, calm room (November 2024; June 2026). One reviewer found the textures of yuba and soba did not go together (February 2017).',
      philosophy: null,
      specialty: 'Yuba dishes: yuba soba and yuba rice bowls.',
      anecdotes: [
        { text: 'November 2024: "I found a restaurant nearby on Tabelog and decided to visit a place just north that offered a \'Yuba Natto Rice Bowl\' for JPY 900… The side dishes of burdock and Japanese radish pickles were also superb."', source: R + 'B496254625/' },
        { text: 'November 2025: "After a wait of about 15 minutes, I was shown to a sunken kotatsu seating area in the back."', source: R + 'B516434209/' },
        { text: 'June 2026: "The silky yuba had a smooth texture, and the rich flavor of the soybeans spread pleasantly in my mouth."', source: R + 'B25631650/' },
      ],
      japanese_sources_summary: '公式サイト: 創作和食・茶房 ICHOYA (いちょうや)、京都市下京区堀川通り西本願寺前堺町100-1、昭和四十一年に京みやげの店「いちょうや」として始まり、2002年8月1日に今の形に、湯葉、生麩、豆腐、京野菜に魚介を合わせた創作料理、湯葉そば700円 (お昼カフェタイムだけの人気メニュー)、湯葉納豆丼850円、坊ちゃんかぼちゃのまるごとドリア950円、豆腐アイス、誕生日ケーキの注文、掘りごたつの座敷、姉妹店ぎんなん (烏丸通り七条西入る北側中居町114-2)。食べログ: 火〜日11:00〜15:00、月曜休み、夜は姉妹店ぎんなんで営業、予約可、カード可、電子マネー・QR不可、35席、個室あり、カウンター・座敷、近くにコインパーキング、自家製のホワイトソース・ミートソース・デミグラスソース、自家製スイーツ。口コミ (2013年5月〜2026年6月、英語): 湯葉丼、湯葉そば、湯葉納豆丼900円 (2024年11月)、ごぼうと大根の漬物、週末の昼は15分ほど待って奥の掘りごたつ席 (2025年11月)、入口で「Mori」の漬物を販売 (2025年11月)。',
      confidence: 'low', sources: [SITE, SITE + 'menu/', SITE + 'shopinfo/', TB].concat(rv(R, ['B250622659', 'B25631650', 'B492325722', 'B496254625', 'B516417493', 'B516434209'])) },
    cultural_comfort: { level: 'japanese', note: 'The official site is Japanese only; no English noted in reviews.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区堀川通り西本願寺前堺町100-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated November 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (34.991870, 135.753374); Tabelog gives only 堀川通西本願寺前, the official site 堺町100-1; not pin-checked by the worker (integrator to check); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'menu/', R + 'B496254625/'],
    price_note: 'Prices from the official menu page (date not shown, tax not stated); ¥900 for the yuba natto bowl in a November 2024 review.', last_checked: TODAY, items: [
      it('湯葉そば', '', 'Yuba soba', '¥700', 'Noodles', 'no', 'ask', 'Official menu; lunch café time only.', 'yuba_soba'),
      it('湯葉納豆丼', '', 'Yuba and natto rice bowl, topped with egg', '¥850', 'Rice bowl', 'ask', 'no', 'Official menu; ¥900 in November 2024.', 'yuba_natto_don'),
      it('坊ちゃんかぼちゃのまるごとドリア', '', 'Whole kabocha squash doria', '¥950', 'Main', 'ask', 'ask', 'Official menu.', 'kabocha_doria'),
    ] }, {
    cuisine: '西本願寺の前の創作和食のランチの茶房。湯葉、生麩、豆腐、京野菜が中心 (公式サイト、2013〜2026年の口コミ)・湯葉そば700円、お昼カフェタイムだけの人気メニュー (公式サイト)、やさしいつゆの湯葉そば (2017年2月、2025年11月)・湯葉と納豆を甘辛く煮て卵をのせた湯葉納豆丼850円 (公式サイト)、900円 (2024年11月)、ごぼうと大根の漬物付き・湯葉丼 (2017年2月、2023年3月、2024年9月、2026年6月)・坊ちゃんかぼちゃのまるごとドリア950円 (公式サイト)・自家製のホワイトソース、ミートソース、デミグラスソース、自家製スイーツ (食べログ)、豆腐アイス、誕生日ケーキの注文 (公式サイト)・入口で「Mori」の漬物を販売 (2025年11月)・昼はひとり1,000〜2,000円ほど (口コミ)',
    neighborhood: '堀川通、西本願寺の前。京都駅から徒歩10分',
    gf_detail: '要確認: 湯葉そば (そばにはふつう小麦も入る)、甘辛いたれの湯葉納豆丼、自家製ホワイトソースのドリア (公式サイト、食べログ)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: 湯葉、生麩、豆腐、京野菜が中心 (公式サイト) だが、湯葉納豆丼には卵がのり、魚介も使い、ホワイトソース、ミートソース、デミグラスソースは自家製 (公式サイト、食べログ)。ヴィーガン対応の記載なし。',
    notes: '[創作和食・西本願寺前の堀川通、湯葉のランチの茶房] お寺の向かいの落ち着いた店。1966年に京みやげの店として始まり、2002年から今の茶房に。湯葉そば、湯葉納豆丼、坊ちゃんかぼちゃのまるごとドリア、豆腐アイス、自家製スイーツ。奥に掘りごたつの座敷。昼のみ11:00〜15:00、月曜休み。',
  });
}

save();
