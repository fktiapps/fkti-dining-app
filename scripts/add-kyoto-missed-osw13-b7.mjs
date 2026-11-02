// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 7.
//   + にしぶち飯店 Nishibuchi Hanten (Kyoto-style Chinese of chef Kentaro Nishibuchi in a Higashiyama machiya; Tabelog Silver 2019–2026)
//   + 安参 Yassan (Gion beef counter since 1948, famous for oxtail stew and beef sashimi; family-run, fourth generation)
//   + 祇園 にし Gion Nishi (kaiseki of chef Jumpei Nishi 西隼平 near Yasaka Shrine; since 2016)
//   + 真白 MASHIRO (genre-free French-rooted counter near Rokkakudo; since 2023)
//   The first four entries of `queue.mjs kyoto-missed next notable 80` on 2026-11-01. None is in data/kyoto.json: grep by name
//   (にしぶち/Nishibuchi, 安参/Yassan, にし/Gion Nishi, 真白/Mashiro) and by address (上弁天町444, 祇園町北側347, 月見町21,
//   堂之前町234) found nothing. Nearest records are other shops: mp_tempura_kyoboshi 41 m and ChIJ1ZkRawAJAWARUlQkpI7Sh94 "Rin
//   Halal Japanese & Vegetarian" 58 m from Yassan; mp_bonjour 16 m and kyr_mentomeshi_zakoya 37 m from Mashiro. Chain check:
//   single restaurants; Nishibuchi Hanten has held pop-up events in Tokyo (September 2026 reviews); Yassan sells by mail order;
//   Gion Nishi runs GION NISHI CAFE upstairs (official site). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ にしぶち飯店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26022200/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_nishibuchi_hanten', name: 'にしぶち飯店 (Nishibuchi Hanten)', category: 'MOM_AND_POP',
    lat: 35.001619, lng: 135.777926, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a Chinese course with sauces such as fermented black bean and liver sauce, fried rice and cold noodles (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese course of shark fin, abalone, chicken, pork and beef in superior broth (Tabelog; 2026 reviews).',
    hours_raw: 'Mon–Sat 18:00–21:00; closed Sunday and holidays (Tabelog). Reservations accepted, but hard to get; several 2026 diners came through a regular or a private booking, including private lunches (June, October 2026). 10 seats at the counter (Tabelog); an October 2026 diner used a private room. Cash only (Tabelog). Non-smoking (Tabelog). About 586 m from Gion-Shijo Stn, at the end of a quiet lane near Yasaka Shrine (Tabelog). Opened 25 April 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama near Yasaka Shrine, a machiya with a white noren at the end of a quiet lane — about 586 m from Gion-Shijo Stn',
    cuisine: 'Modern Kyoto-style Chinese: Chinese technique with Japanese finesse, served kappo-style in a machiya with a small garden (Tabelog) · signature: shark fin simmered, then grilled, in a full-bodied superior broth (Tabelog) · diners report ¥30,000–39,999 · October 2026: abalone fried with liver sauce, chicken wings stuffed with bird\'s nest with char siu and Gorgonzola, saury marinated in Shaoxing wine, braised shark fin, roast beef, free-range chicken with Matsutake, saury fried rice, almond shaved ice with muscat and pear; stir-fried beef with fermented black beans; fried rice with grated daikon; Tianjin rice; shirasu fried rice and cold noodles · September 2026: abalone risotto, Hyogo sweet shrimp with scallion oil, char siu · Shaoxing wine in small jars (also with soda), wine and champagne',
    website: TB, gmaps: gm('にしぶち飯店 東山'), menu_url: null,
    notes: "[Chinese · Higashiyama, Chinese cooking with a kappo soul] At the end of a quiet lane near Yasaka Shrine, a machiya with a white noren and a small garden looks like a kappo, and the ten-seat counter works like one. Chef Kentaro Nishibuchi, from Joyo in Kyoto Prefecture, learned Chinese cooking for six years at Kakan in the Kyoto Brighton Hotel, then five years of Japanese cooking at Gion Sasaki, and opened here in 2013. The result is gentle, layered Chinese food: shark fin braised and then grilled in superior broth, chicken wings stuffed with bird's nest, fried rice lightened with grated daikon. Diners in 2026 praise the chef's warm smile and call it very hard to book. Tabelog Silver every year since 2019. Cash only; closed Sundays.",
    chef_bio: { chef_name: 'Kentaro Nishibuchi (Tabelog; no kanji in a source)', roles: ['Owner-chef (Tabelog: "In 2013, he opened Nishibuchi Hanten")'], origin: 'Joyo City, Kyoto Prefecture (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in Joyo, Kyoto Prefecture; six years learning the basics of Chinese cooking at Kakan, the Chinese restaurant of the Kyoto Brighton Hotel; then five years at the kappo Gion Sasaki (kyoto_gion_sasaki in this data) to learn Japanese cooking; opened Nishibuchi Hanten near Yasaka Shrine in 2013. Tabelog praises the chef\'s spirit of exploration and warm smile. In September 2026 the restaurant cooked a two-day special course in Tokyo, including an Amex cardholder event and a collaboration with Yoshidashioto (September 2026 reviews); one September 2026 diner heard an Italian restaurant would open nearby. Tabelog Award Silver 2019–2026; Chinese WEST "Tabelog 100" 2021, 2023, 2024, 2026.',
      philosophy: null, specialty: 'Shark fin in superior broth; bird\'s-nest-stuffed chicken wings; daikon fried rice.',
      anecdotes: [
        { text: '"Nishibuchi Hanten\'s fried rice includes grated daikon radish, but I wonder if other places offer this as well." — October 2026, a third visit.', source: R + 'B374928344/' },
        { text: '"It\'s a popular restaurant that\'s hard to get a reservation at, so I reached out to various people, and this time I was fortunate enough to be offered a seat." — September 2026.', source: R + 'B536226846/' },
        { text: '"The signature dish, chicken wings served in a bird\'s nest, pairs perfectly with blue cheese and is absolutely delicious." — October 2026.', source: R + 'B538031675/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): にしぶち飯店、中国料理、東山区上弁天町444-2、月〜土 18:00〜21:00、日・祝休み、カウンター10席、カード不可、禁煙、2013年4月25日オープン、The Tabelog Award Silver 2019〜2026、中国料理 WEST 百名店 2021・2023・2024・2026。シェフの Kentaro Nishibuchi さんは京都府 Joyo 出身、Kyoto Brighton Hotel の中国料理店 Kakan で6年、割烹 Gion Sasaki で5年修業し、2013年に Yasaka Shrine の近くで開業。口コミ (2026年9〜10月、英語): ふかひれ、燕の巣を詰めた手羽先とチャーシューとゴルゴンゾーラ、大根おろし入りのチャーハン、予約が難しい、東京での特別イベント。',
      confidence: 'medium', sources: [TB, R + 'B232046559/', R + 'B374928344/', R + 'B452076355/', R + 'B510853134/', R + 'B535053789/', R + 'B535895615/', R + 'B536226846/', R + 'B536245703/', R + 'B538031675/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course at a ten-seat counter; hard to book; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区上弁天町444-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; Kyoto reviews dated through October 2026. No official website found.' },
    pin_source: `Tabelog ${TB} (35.001619, 135.777926); cross-checked: GSI 京都府京都市東山区上弁天町444番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B452076355/', R + 'B374928344/'],
    price_note: 'No prices are published; diners report ¥30,000–39,999. Dishes from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '', 'Course', 'ask', 'no', 'Diners report ¥30,000–39,999.', 'omakase'),
      it('', '', 'Braised shark fin (in course)', '', 'Course', 'ask', 'no', 'Tabelog; October 2026.', 'shark_fin'),
      it('', '', 'Fried rice with grated daikon (in course)', '', 'Course', 'ask', 'no', 'October 2026.', 'daikon_fried_rice'),
    ] }, {
    cuisine: '京都らしいモダンな中国料理: 中国料理の技法に和の繊細さ、小さな庭のある machiya で割烹のように (食べログ)・名物は上湯で煮てから焼き上げるふかひれ (食べログ)・口コミの予算は30,000〜39,999円・2026年10月: 鮑の唐揚げと肝のソース、燕の巣を詰めた手羽先とチャーシューとゴルゴンゾーラ、紹興酒に漬けた秋刀魚、ふかひれの煮込み、ローストビーフ、地鶏と Matsutake、秋刀魚のチャーハン、杏仁のかき氷にマスカットと梨。牛肉の豆豉炒め、大根おろし入りのチャーハン、天津飯、しらすのチャーハンと冷やし麺・2026年9月: 鮑のリゾット、Hyogo の甘海老と葱油、チャーシュー・小さな甕の紹興酒 (ソーダ割りも)、ワイン、シャンパーニュ',
    neighborhood: '東山、Yasaka Shrine の近く、静かな路地の奥の白い noren の machiya。祇園四条駅から約586m',
    gf_detail: '予約時に要確認。グルテンの情報なし。豆豉や肝のソース、チャーハン、冷やし麺のある中国料理のコース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ふかひれ、鮑、鶏、豚、牛を上湯で仕立てる中国料理のコース (食べログ、2026年の口コミ)。',
    notes: '[中国料理・東山、割烹の心を持つ中国料理] Yasaka Shrine 近くの静かな路地の奥、白い noren と小さな庭のある machiya は割烹のようで、10席のカウンターも割烹のように動く。京都府 Joyo 出身の Kentaro Nishibuchi さんは Kyoto Brighton Hotel の Kakan で6年中国料理の基本を学び、Gion Sasaki で5年和食を修業して2013年に開業。料理はやさしく重層的な中国料理: 上湯で煮てから焼くふかひれ、燕の巣を詰めた手羽先、大根おろしで軽くしたチャーハン。2026年の口コミではシェフの温かな笑顔が好評で、予約がとても取りにくいという。The Tabelog Award Silver を2019年から毎年受賞。現金のみ、日曜休み。',
  });
}

// ================================================================ 安参
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000268/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gion-yassan.com/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_yassan_gion', name: '安参 (Yassan)', category: 'MOM_AND_POP',
    lat: 35.004775, lng: 135.775802, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; beef sashimi comes with ponzu or ume paste, grilled cuts and the stew are seasoned with a long-kept sauce (miso-based, per an October 2026 diner) (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef restaurant — beef sashimi, grilled beef and oxtail stew (Tabelog; official site).',
    hours_raw: 'Mon–Sat 18:00–22:30; closed Sunday and holidays (official site; Tabelog). The ground-floor counter takes no reservations — diners queue from before 18:00 or try around 20:00; the upstairs tatami rooms can be booked for groups of three or more (official site; 2026 reviews). Counter of about 22 on the ground floor, tatami rooms upstairs (Tabelog). Smoking allowed, per Tabelog. No photos of the raw meat (2026 reviews). Cards accepted; no e-money or QR (Tabelog). The house was renovated for earthquake safety and reopened in March 2025 with the old interior kept (Tabelog). About 10 min from Gion-Shijo Stn; across the street from Gion Ichiriki-tei (official site). Mail order through OMAKASE and Ikyu (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, a townhouse with red lanterns on the north side of the main street, across from Gion Ichiriki-tei — about 10 min from Gion-Shijo Stn',
    cuisine: 'Gion beef kappo with no menu: dishes come in order, light to rich, to your appetite — pickled cucumber and a cold oxtail soup with grated yam, then about four beef sashimi (tongue, heart, lean, blanched tripe with ponzu or ume), grilled cuts, and the oxtail stew (Tabelog; official site; 2026 reviews) · the oxtail stew, made since the founder\'s day by adding to the same sauce, with tongue, heart, cheek and sirloin, potatoes and eggs; eat the tail with your hands at the end; Kujo green onion and mustard on the side (Tabelog; 2026 reviews) · grilled: tongue, liver, skirt, sirloin rolled around kaiware sprouts (2026 reviews) · oden; white rice to make a stew bowl · diners spend about ¥10,000–19,999 · gourd sake at New Year (Tabelog) · beer, barley-shochu sodas, sake',
    website: SITE, gmaps: gm('安参 祇園'), menu_url: null,
    notes: "[Beef · Gion, a family meat counter since 1948] Look for the red lanterns across from Ichiriki-tei: inside, a long, Showa-red counter under hanging gourds, packed and loud with Kyoto dialect. The founder, from 門前仲町 in Tokyo, opened in 1948 and created the oxtail stew that still simmers in a big pot behind the counter, its sauce topped up for over 77 years; the second generation turned it into meat kappo. There is no menu: the staff lead you from cold oxtail soup through beef-tongue, heart and tripe sashimi to grilled cuts and the stew, which you finish by picking up the bones. The counter cannot be booked, so queue before 18:00. Now run by fourth-generation Yoshifumi Sakakibara with family. Tabelog Bronze 2025–2026. Closed Sundays and holidays.",
    chef_bio: { chef_name: 'Yoshifumi Sakakibara (Tabelog; no kanji in a source)', roles: ['Fourth-generation chef (Tabelog: "took over as the fourth generation")'], origin: 'Kyoto, born 1994 (Tabelog).',
      background: 'Per Tabelog: born in Kyoto in 1994, the founder\'s first great-grandchild; drawn to cooking by watching the grandfather, the second generation, in the kitchen; trained from 19 at local Japanese restaurants and butchers, then apprenticed at Yassan under the senior cooks; took over at 26 as the fourth generation, running the restaurant with family: a sister, Tomoyo, a mother, Yuko, and a grandmother, Nobe, the head of the house. The official site says the first owner, from 門前仲町 in Tokyo, created the oxtail stew in Kyoto in 1948 and the second generation made it a meat kappo. Tabelog adds that it began in Teramachi-Rokkaku and moved to Gion around 1968. An October 2026 reviewer calls it a long-time favourite of actors. Tabelog Award Bronze 2025, 2026.',
      philosophy: 'Keep the order of dishes, light to rich, unchanged since the founding (Tabelog).', specialty: 'Oxtail stew; beef-tongue sashimi; blanched tripe with ume.',
      anecdotes: [
        { text: '"The details of the sauce are a secret, but the stew becomes delicious by including various parts like tongue, heart, cheek meat, and sirloin." — the chef, on Tabelog.', source: TB },
        { text: '"I arrived at 17:40 on a weekday and found five people waiting outside." — October 2026.', source: R + 'B537416538/' },
        { text: '"I started with the beef tongue sashimi, followed by heart and lean cuts. No photos allowed." — September 2026, first visit after queuing.', source: R + 'B535377140/' },
      ],
      japanese_sources_summary: '公式サイト (gion-yassan.com): 祇園肉割烹 安参（やっさん）、創業昭和二三年、東京 門前仲町出の初代が京都でテールの煮込みを創り上げ、二代目が肉割烹へ押し上げ、安参独自のスタイルを受け継ぐ、和風の落ち着いた店内、カウンター席と個室、東山区祇園町北側347、祇園四条駅から徒歩10分ほど、祇園一力亭の向かい側の道を渡り2分、お座敷席のみ予約可 (3人以上)、18:00〜22:30、日曜・祝日休み、お取り寄せ (OMAKASE、一休.com)。食べログ: 肉料理・日本料理、1階カウンター22席と2階の座敷、喫煙可、カード可、The Tabelog Award Bronze 2025・2026、四代目は1994年生まれ。口コミ (2026年9〜10月、英語): 並んでカウンターへ、生肉の撮影は不可、タンの刺身、牛の胃、テールの煮込み、Kujo のねぎと辛子。',
      confidence: 'medium', sources: [TB, SITE, R + 'B514407191/', R + 'B535195794/', R + 'B535257403/', R + 'B535377140/', R + 'B536741648/', R + 'B537079893/', R + 'B537369438/', R + 'B537416538/', R + 'B537582885/', R + 'B538300649/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No menu: staff lead you through the dishes; counter by queue only; tatami rooms bookable for 3+.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004775, 135.775802); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 11m; mp_tempura_kyoboshi is 41m away, a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535195794/', R + 'B537079893/'],
    price_note: 'No menu or prices are published; diners report ¥10,000–19,999.', last_checked: TODAY, items: [
      it('', '', 'Oxtail stew', '', 'Stew', 'ask', 'no', 'Signature; 2026 reviews.', 'oxtail_stew'),
      it('', '', 'Beef-tongue sashimi', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'tongue_sashimi'),
      it('', '', 'Blanched tripe with ponzu or ume', '', 'Sashimi', 'ask', 'no', 'Tabelog; September 2026.', 'senmai'),
      it('', '', 'Sirloin rolled around kaiware, grilled', '', 'Grilled', 'ask', 'no', 'October 2026.', 'kaiware_maki'),
    ] }, {
    cuisine: '献立のない祇園の肉割烹: 軽いものから濃いものへ、お腹具合に合わせて順に — きゅうりの浅漬けと冷たいテールスープ、続いてタン、ハツ、赤身、茹でた牛の胃 (ポン酢か梅で) など4種ほどの肉の刺身、焼き物、テールの煮込み (食べログ、公式サイト、2026年の口コミ)・テールの煮込みは創業以来たれを継ぎ足して作り、タン、ハツ、ほほ肉、サーロインも入り、最後は骨を手で持って食べる。Kujo のねぎと辛子を添えて (食べログ、2026年の口コミ)・焼き物: タン、レバー、ハラミ、kaiware を巻いたサーロイン (2026年の口コミ)・おでん、白ご飯で煮込み丼に・予算は約10,000〜19,999円・正月にはひょうたんの酒 (食べログ)・ビール、麦焼酎のソーダ割り、日本酒',
    neighborhood: '祇園町北側347、赤提灯の家、祇園一力亭の向かい側。祇園四条駅から徒歩約10分',
    gf_detail: '要確認。グルテンの情報なし。肉の刺身はポン酢か梅で、焼き物と煮込みは長年継ぎ足したたれで味付けする (2026年10月の口コミでは味噌のたれ) (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。牛肉の店で、肉の刺身、焼き肉、テールの煮込み (食べログ、公式サイト)。',
    notes: '[肉割烹・祇園、1948年から続く家族の肉のカウンター] 祇園一力亭の向かいの赤提灯が目印。昭和の赤いカウンターの上にひょうたんが並び、京ことばでにぎわう。東京 門前仲町出の初代が昭和23年に創業し、テールの煮込みを創り上げた。カウンターの奥の大鍋のたれは77年以上継ぎ足され、二代目が肉割烹へ押し上げた。献立はなく、店の人が冷たいテールスープからタン、ハツ、牛の胃の刺身、焼き物、最後は骨を手で持つ煮込みへと案内してくれる。カウンターは予約できないので18時前に並ぶ。今は四代目の Yoshifumi Sakakibara さんが家族と営む。The Tabelog Award Bronze 2025〜2026。日曜・祝日休み。',
  });
}

// ================================================================ 祇園 にし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027852/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-nishi.com/';
  const D = day(['18:00', '23:00']); const L = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_gion_nishi', name: '祇園 にし (Gion Nishi)', category: 'MOM_AND_POP',
    lat: 35.000948, lng: 135.778275, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a kaiseki course seasoned with soy sauce and miso, with somen, sushi and an optional curry at the end (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kaiseki course built on dashi, with sea urchin, hamo, beef and foie gras (2026 reviews).',
    hours_raw: 'Dinner from 18:00 Tue–Sun; lunch from 12:00 Thu–Sun; closed Monday and irregularly (Tabelog; official site); evening times can be discussed (Tabelog). Reservations by phone (August 2026). 20 seats: a counter of 6 and tables for up to 14 (Tabelog). Children who can eat the course are welcome (Tabelog). Non-smoking, with an ashtray at the entrance (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR payments (PayPay, Alipay, WeChat Pay); service charge 10% (Tabelog). About 8 min from Gion-Shijo Stn: from the Higashiyama-Yasui crossing go about 50 m along Higashioji-dori, on the left (Tabelog). Opened 7 July 2016 (Tabelog). GION NISHI CAFE is on the floor above (official site).',
    hours: { 1: D, 2: D, 3: L, 4: L, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Yasaka Shrine, on Higashioji-dori about 50 m from the Higashiyama-Yasui crossing — about 8 min from Gion-Shijo Stn',
    cuisine: 'Kaiseki with an Italian-trained chef\'s ideas — ingredients and techniques Japanese cooking does not usually use — and a showpiece hassun (official site; Tabelog) · lunch omakase ¥19,360 including tax and service (August 2026); dinner a little under ¥30,000 (August 2026) · June 2026: 長芋素麺と蓴菜に大間の雲丹, a white-miso bowl of 牡丹鱧, sashimi of aori squid, tuna, sea urchin and nodoguro, a hassun with lobster and corn mousse, 鮎の海苔巻き寿司, beef loin and Kamo eggplant with shrimp dengaku · August 2026: chawanmushi of sea urchin, abalone, shrimp, crab and caviar; a soup of ayu, Matsutake and winter melon; grilled hamo, squid and trout sashimi · curry to finish on request (July, August 2026) · wine chosen by the owner, a certified sommelier, and sake from a certified sake expert (Tabelog)',
    website: SITE, gmaps: gm('祇園にし 月見町'), menu_url: TB,
    notes: "[Kaiseki · near Yasaka Shrine, kaiseki with an Italian twist and good wine] A calm room of a six-seat counter and tables a few minutes from Yasaka Shrine, run by owner-chef Jumpei Nishi (西隼平), born in Kyoto Prefecture in 1983, who trained at Tokuwo, spent time in an Italian kitchen and ran a Gion kitchen before opening in 2016. The cooking keeps kaiseki form but borrows Italian ideas, with a hassun that is the centrepiece and luxuries like a chawanmushi of sea urchin, abalone and caviar. The chef is a certified sommelier and sake expert and pours by the glass to your taste; you can even ask for curry at the end. A Japanese review praises the okami's care. Lunch ¥19,360 all in is good value for the area. Tabelog Bronze every year since 2019. Closed Mondays.",
    chef_bio: { chef_name: 'Jumpei Nishi (西隼平)', roles: ['Owner-chef (official site: "店主・西隼平")', 'Certified wine sommelier and sake expert (Tabelog)'], origin: 'Kyoto Prefecture, born 1983 (Tabelog).',
      background: 'Per Tabelog\'s chef section: born in 1983 in Kyoto Prefecture; trained at the Kyoto Japanese restaurant Tokuwo, then at an Italian restaurant to broaden the cooking; head chef at a Japanese restaurant in Gion before opening Gion Nishi in July 2016. The official site says the chef brings young sensibility and Italian essence to Japanese tradition and actively uses ingredients and techniques Japanese cooking does not; the shop also produces GION NISHI CAFE upstairs. A June 2026 Japanese review praises the 大将\'s delicate cooking and the 女将 and staff\'s care. Tabelog Award Bronze 2019–2026; Japanese cuisine WEST "Tabelog 100" 2021, 2023, 2025.',
      philosophy: 'No compromise on ingredients, drink, tableware or space; original dishes made with playfulness (official site).', specialty: 'The hassun; kaiseki with Italian touches; wine pairings.',
      anecdotes: [
        { text: '"Even when I requested curry, they served it with a smile, without any hint of displeasure." — July 2026.', source: R + 'B531918990/' },
        { text: '"I opted for the Omakase course priced at JPY 19,360 (including tax and service charge)." — August 2026, lunch.', source: R + 'B533740091/' },
        { text: '"When I shared my preferences, they served me a glass from a bottle they had." — August 2026.', source: R + 'B533870455/' },
      ],
      japanese_sources_summary: '公式サイト (gion-nishi.com): 祇園 にし、店主・西隼平は日本料理店とイタリアンで修行、日本料理の伝統に若い感性とイタリアンのエッセンス、食材・お酒・器・空間に妥協しない、日本料理では扱わない食材や技法も取り入れる、八坂神社の近く、二階に GION NISHI CAFE、東山区月見町21-2 1階、月曜全日と不定休。食べログ (店舗会員): 火・水は夜のみ、木〜日は昼と夜、20席 (カウンター6、テーブル14)、カードと QR 可、サービス料10%、2016年7月7日オープン、The Tabelog Award Bronze 2019〜2026、日本料理 WEST 百名店 2021・2023・2025。口コミ (2026年6月、日本語): 大将の繊細で工夫に満ちた料理、女将さんやスタッフの細やかな気遣い、長芋素麺と蓴菜に大間の雲丹、牡丹鱧の白味噌仕立てのお椀、アオリイカ・マグロ・雲丹・ノドグロのお造り、オマール海老やとうもろこしのムースの八寸、鮎の海苔巻き寿司、牛ロースと賀茂茄子の海老の田楽。',
      confidence: 'medium', sources: [TB, SITE, R + 'B435979542/', R + 'B469252949/', R + 'B528907081/', R + 'B531918990/', R + 'B533740091/', R + 'B533807706/', R + 'B533870455/', R + 'B533918981/', R + 'B536311418/', R + 'B537832120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course; book by phone; drinks chosen to your taste; QR payments including Alipay and WeChat Pay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区月見町21-2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000948, 135.778275); cross-checked: GSI 京都府京都市東山区月見町21番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533740091/', R + 'B469252949/'],
    price_note: 'No prices on the official site; lunch price from an August 2026 review (tax and service included); dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥19,360', 'Course', 'ask', 'no', 'August 2026, tax and service included.', 'lunch'),
      it('', '', 'Dinner course', '', 'Course', 'ask', 'no', 'A little under ¥30,000 (August 2026).', 'dinner'),
      it('鮎の海苔巻き寿司', '', 'Ayu nori-roll sushi (in course)', '', 'Course', 'ask', 'no', 'June 2026 (Japanese review).', 'ayu_sushi'),
      it('', '', 'Curry to finish (on request)', '', 'Extras', 'ask', 'no', 'July–August 2026.', 'curry'),
    ] }, {
    cuisine: 'イタリアンで修業した大将の発想を取り入れた懐石 — 日本料理では扱わない食材や技法も — と主役の八寸 (公式サイト、食べログ)・昼のおまかせ19,360円 (税・サービス料込み、2026年8月)、夜は30,000円弱 (2026年8月)・2026年6月: 長芋素麺と蓴菜に大間の雲丹、牡丹鱧の白味噌仕立てのお椀、アオリイカ・マグロ・雲丹・ノドグロのお造り、オマール海老やとうもろこしのムースの八寸、鮎の海苔巻き寿司、牛ロースと賀茂茄子の海老の田楽・2026年8月: 雲丹、鮑、海老、蟹、キャビアの茶碗蒸し、ayu と Matsutake と冬瓜のお椀、焼いた hamo、烏賊と鱒のお造り・締めに頼めばカレーも (2026年7月、8月)・ソムリエの資格を持つ店主が選ぶワイン、利き酒師の選ぶ日本酒 (食べログ)',
    neighborhood: 'Yasaka Shrine の近く、Higashiyama-Yasui の交差点から Higashioji-dori を約50m。祇園四条駅から徒歩約8分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油や味噌で味付けする懐石で、素麺、寿司、頼めば締めのカレーもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、雲丹、hamo、牛、フォアグラを使う懐石 (2026年の口コミ)。',
    notes: '[懐石・Yasaka Shrine 近く、イタリアンの発想と良いワインの懐石] Yasaka Shrine から数分、6席のカウンターとテーブルの落ち着いた店。店主の西隼平さんは1983年京都府生まれ、Tokuwo で修業し、イタリアンを経て祇園の店で料理長を務め、2016年に開業。懐石の形を守りつつイタリアンの発想を取り入れ、主役の八寸や、雲丹と鮑とキャビアの茶碗蒸しなどの贅沢な皿も。店主はソムリエと利き酒師の資格を持ち、好みに合わせてグラスで注いでくれる。締めにカレーを頼むこともできる。日本語の口コミでは女将さんの気遣いも好評。昼19,360円 (税・サ込み) は祇園では手頃。The Tabelog Award Bronze を2019年から毎年受賞。月曜休み。',
  });
}

// ================================================================ 真白 MASHIRO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039931/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mashiro-kyoto.com/';
  put({
    id: 'kyoto_mashiro_rokkaku', name: '真白 (MASHIRO)', category: 'OMNI',
    lat: 35.007251, lng: 135.760733, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; French-based cooking that uses soy sauce and miso in its sauces (Tabelog), with a rice-cracker cup for the opening sea urchin and vegetable fritters in 2026.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led course with beef, lamb and chicken (2026 reviews).',
    hours_raw: 'Lunch from 12:00 and dinner from 18:00, each starting together; closed irregularly (official site; Tabelog). Reservation only, online (official site); a July 2026 diner booked 63 days ahead on TableCheck. 11 seats at a counter cut from a single slab over 10 m long (Tabelog). Children from 10, on the adult course (Tabelog). Smart casual (Tabelog). Non-smoking; wheelchair access (Tabelog). Cards accepted; no e-money or QR; service charge 10% (Tabelog). 4 min from Karasuma Oike Stn exit 5, 6 min from Karasuma Stn exit 21 (official site). Opened 20 August 2023 (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Rokkakudo, OHG京都六角ビル 2F — 4 min from Karasuma Oike Stn exit 5',
    cuisine: 'Genre-free cooking on a French base, with a drop of soy sauce or miso and a pinch of spice, built on produce sent direct from growers (official site; Tabelog) · the only fixed dish is the opening "Uni" (read "umi"): creamy sea urchin and a seawater jelly in a rice-cracker cup, eaten in one bite (Tabelog) · pairing ¥8,800 at lunch, ¥11,000 at dinner, from champagne, sake and white, red, rosé and orange wines (Tabelog) · diners report ¥15,000–19,999 at lunch and ¥30,000–39,999 at dinner · roasted managatsuo under Parmesan "fish bones" (Tabelog) · September 2026: Yosano-rice mushroom risotto with fresh salmon roe, caviar with Shinkansen pear and burrata, Korean mackerel, French lamb with peanut sprouts · October 2026: a rice-porridge soup, scallops with porcini, local chicken, a near-two-metre cutlassfish, Tajima beef top sirloin · August 2026: Hida beef · message plates for celebrations (Tabelog; July–August 2026)',
    website: SITE, gmaps: gm('真白 MASHIRO 京都 六角'), menu_url: SITE,
    notes: "[French · Karasuma-Rokkaku, a genre-free chef's counter] A second-floor room near Rokkakudo with a single-slab counter over ten metres long, hexagonal tiles that nod to the temple, and an open kitchen run like a show. The chef trained at the Rihga Royal Hotel in Osaka, became the youngest chef in its history at 33 at Restaurant Chambord in 小倉, went to the 2015 Bocuse d'Or Japan final, and won Michelin stars at Cosimo Plus in Ashiya and Gion Roshoku before opening MASHIRO in 2023. Every meal opens with \"Uni\", sea urchin and seawater jelly in a rice-cracker cup; after that the course follows the market, with French sauces sharpened by soy or miso. Pairings come from sommelier-manager Masahiro Kobayashi, a partner of over 20 years. Tabelog Bronze 2026. Book online well ahead.",
    chef_bio: { chef_name: 'Hiroyuki Koshimo (Tabelog\'s chef heading; the same listing also writes "Kosimo", "Koshiro" and "Kosumo"; no kanji in a source read)', roles: ['Chef (official site; Tabelog)'], origin: 'Osaka (Tabelog).',
      background: 'Per the official site: trained at the Rihga Royal Hotel in Osaka and at 33 became the youngest chef in the hotel\'s history, at the 小倉 grand maison Restaurant Chambord; then chef at DOUZE GOUT 12+ in Kyoto; a Japan finalist for the Bocuse d\'Or 2015; opened コシモ・プリュス in Ashiya in May 2012 (one Michelin star, Kyoto-Osaka 2014) and 祇園 呂色 in November 2017 (one star, 2018); opened MASHIRO in Karasuma-Rokkaku in August 2023. The name means "pure white": reset your mind and enjoy the food with all six senses. The sommelier and manager, Masahiro Kobayashi, has worked with the chef for over 20 years (Tabelog). The site lists tie-in plans with the 南座 theatre (2026). Tabelog Award Bronze 2026; Innovative/Creative "Tabelog 100" 2025.',
      philosophy: '"Tradition matters, but as Japanese French cuisine we must change something" (Tabelog); "Make your heart pure white" (official site).', specialty: 'The opening "Uni"; market-led courses; pairings.',
      anecdotes: [
        { text: '"The chef kindly included a birthday message and a note related to my favorite artist on the final dessert plate." — July 2026, lunch.', source: R + 'B532993401/' },
        { text: '"Every month, I look forward to dining at MASHIRO!" — September 2026, a fourteenth visit.', source: R + 'B492858497/' },
        { text: '"The ribbonfish, which looks massive, is said to be nearly 2 meters long, and its fat is exquisite." — October 2026.', source: R + 'B537843071/' },
      ],
      japanese_sources_summary: '公式サイト (mashiro-kyoto.com): 真白 MASHIRO ジャンルレス料理、真白な空気で深呼吸し1日が始まる、毎朝生産者から届く最高の食材、漬・焼・煮・蒸・揚・発酵・熟成、シェフは大阪「リーガロイヤルホテル」で修業、同ホテル史上最年少の33歳で小倉「レストラン シャンボール」のシェフ、京都「DOUZE GOUT 12＋」のシェフ、ボキューズ・ドール2015日本代表ファイナリスト、2012年5月 芦屋に「コシモ・プリュス」(ミシュラン京都・大阪2014で一つ星)、2017年11月「祇園 呂色」(2018で一つ星)、2023年8月 烏丸・六角に「真白」、「心を真っ白に」、堂之前町234 OHG京都六角ビル2階、ランチ12:00〜・ディナー18:00〜 一斉スタート、不定休、南座とのタイアッププラン。食べログ (店舗会員): カウンター11席、10歳以上、スマートカジュアル、サービス料10%、ペアリング 昼8,800円・夜11,000円、2023年8月20日オープン、The Tabelog Award Bronze 2026。口コミ (2026年7〜10月、英語): 名物の雲丹、メッセージプレート、季節の魚、ペアリング。',
      confidence: 'medium', sources: [TB, SITE, R + 'B492858497/', R + 'B523741472/', R + 'B531604485/', R + 'B532113446/', R + 'B532993401/', R + 'B534435478/', R + 'B535242806/', R + 'B537172241/', R + 'B537517434/', R + 'B537843071/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; the official site has an English page; one course with a shared start.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堂之前町234 OHG京都六角ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (news dated October 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007251, 135.760733); cross-checked: GSI 京都府京都市中京区堂之前町234番地 (lot) 45m; mp_bonjour is 16m away, a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Pairing prices from Tabelog (read November 2026); course prices are not published; diners report ¥15,000–19,999 at lunch and ¥30,000–39,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Pairing, lunch', '¥8,800', 'Drinks', '', '', 'Tabelog.', 'pairing_lunch'),
      it('', '', 'Pairing, dinner', '¥11,000', 'Drinks', '', '', 'Tabelog.', 'pairing_dinner'),
      it('', '', '"Uni": sea urchin and seawater jelly in a rice-cracker cup (in course)', '', 'Course', 'no', 'no', 'Tabelog; the only fixed dish.', 'uni'),
    ] }, {
    cuisine: 'フランス料理を土台にしたジャンルレスの料理。醤油や味噌を一滴、スパイスをひとつまみ。生産者から直送の食材で (公式サイト、食べログ)・唯一の定番は最初の「雲丹」(「うみ」と読む): おかきの器にクリーミーな雲丹と海水のジュレを隠し、一口で (食べログ)・ペアリングは昼8,800円、夜11,000円で、シャンパーニュ、日本酒、白、赤、ロゼ、オレンジワイン (食べログ)・口コミの予算は昼15,000〜19,999円、夜30,000〜39,999円・まながつおのローストにパルミジャーノの「魚の骨」(食べログ)・2026年9月: Yosano の米のきのこのリゾットと生のイクラ、キャビアと Shinkansen 梨とブッラータ、韓国の鯖、フランスの仔羊とピーナッツもやし・2026年10月: お粥のスープ、帆立とポルチーニ、地鶏、2m近い太刀魚、Tajima 牛のランプ・2026年8月: Hida 牛・お祝いのメッセージプレート (食べログ、2026年7〜8月)',
    neighborhood: 'Rokkakudo の近く、OHG京都六角ビル 2F。烏丸御池駅5番出口から徒歩4分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ソースに醤油や味噌を使うフランス料理ベースの料理で (食べログ)、最初の雲丹はおかきの器、2026年には野菜のフリットもあった。',
    vegan_detail: 'ヴィーガンではありません。魚介中心に牛、仔羊、鶏も使うコース (2026年の口コミ)。',
    notes: '[フレンチ・烏丸六角、ジャンルレスのシェフのカウンター] Rokkakudo の近くのビル2階、10mを超える一枚板のカウンター、寺にちなんだ六角形のタイル、ショーのようなオープンキッチン。シェフは大阪のリーガロイヤルホテルで修業し、33歳で同ホテル史上最年少で小倉のレストラン シャンボールのシェフに。ボキューズ・ドール2015の日本代表ファイナリスト、芦屋のコシモ・プリュスと祇園 呂色でミシュランの星を得て、2023年に真白を開いた。食事は必ず「雲丹」— おかきの器の雲丹と海水のジュレ — で始まり、あとは市場しだいで、醤油や味噌を効かせたフレンチのソース。ペアリングは20年以上の相棒のソムリエ兼マネージャー Masahiro Kobayashi さん。The Tabelog Award Bronze 2026。予約はネットで早めに。',
  });
}

save();
