// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 14.
//   + コリス Korisu (two-generation yoshoku in a brick house on Matsubara-dori; famously hard to book by phone)
//   + 弧玖 Kokyu (Sho Maeda's ten-seat kaiseki by Demachi, from the Sakurada line; since 2015)
//   + KOKE (中村有作's Okinawan-Spanish innovative counter in IDO KYOTO, from Ca Sento; since 2021)
//   + レ・シャンドール Les Champs d'Or (classic French since 1983; taken over by 熊﨑隆一・香 in April 2026)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (the first four after batch 13).
//   None is in data/kyoto.json: grep by name (コリス/Korisu, 弧玖/Kokyu, KOKE, シャンドール/Champs) and address
//   (轆轤町101, 青龍町204, 蛸薬師町287 1F, 井筒屋町419) found none of them. KOKE shares IDO KYOTO with
//   kyoto_shiro_karasuma_oike (2F, pin 8 m away); Korisu is 47 m from mp_rokuhara_hanten — no stacking.
//   Chain check: single shops. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ コリス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006119/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '19:00']);
  put({
    id: 'kyoto_korisu', name: 'コリス (Korisu)', category: 'OMNI',
    lat: 34.99764, lng: 135.774281, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Much of the menu is breaded, battered or in béchamel (gratin, fries, cutlets, hamburg steak with demi-glace), but there are risottos, salads and grilled beef tagliata (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat, seafood and cheese menu; even the salad carries ham and egg (2026 reviews).',
    hours_raw: '11:30–19:00; closed Tuesday, and every year from 25 January to 25 February (Tabelog). Reservations open at the end of each month for the following month, by phone (Tabelog); 2026 diners describe calling from 8:00 and getting through after hundreds of attempts (October 2026), so the booking route is persistence by phone, 075-561-9281. À la carte, best shared among 4–5 (September 2026). 12 seats at tables; private hire up to 20 (Tabelog). Non-smoking (Tabelog). Cash only (Tabelog). Bringing wine generally not allowed except by arrangement for celebrations (Tabelog). On Matsubara-dori, about 7–9 min from Kiyomizu-Gojo Stn (2026 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori near Rokuharamitsu-ji, a brown-brick house — about 7–9 min from Kiyomizu-Gojo Stn',
    cuisine: 'Yoshoku and bistro dishes à la carte, refined over two generations (2026 reviews) · starters: garlic-potato and shirasu canapés, a hearty baguette with tapenade and tomato, smoked salmon with mango, peach with finger lime and mimolette · thick pumpkin, butternut or beet soups · the house salad with ham, egg and tomato · signatures: macaroni gratin, hamburg steak with a fry (salmon, hamo, scallop or shrimp), clubhouse sandwich, pork chop, beef tagliata, porcini or blue-cheese risotto, tiramisu (2026 reviews) · wine, with a sommelier (Tabelog) · diners spend about ¥4,000–9,999; four sharing five dishes paid ¥6,075 each with drinks (July 2026)',
    website: null, gmaps: gm('コリス 京都 松原通'), menu_url: null,
    notes: "[Yoshoku · Matsubara-dori, Kyoto's hardest Western table] In a brown-brick house near Rokuharamitsu-ji, a dozen seats where a family carries on a couple's yoshoku: a bubbling macaroni gratin, a round hamburg steak beside a crisp fry, pumpkin soup so thick the spoon stands in it, a famous clubhouse sandwich and tiramisu. Portions are generous, so come as four or five and share. Getting in is the hard part: bookings open by phone at the end of each month for the next, and 2026 diners report hundreds of calls. Around ¥5,000–8,000 a head; cash only; closed Tuesdays and from late January to late February.",
    chef_bio: { chef_name: null, roles: ['Family-run: once a couple, now "a mother and her daughters" in chef\'s whites (September 2026 review); no names in a source'], origin: null,
      background: 'Per 2026 reviews: a long-established yoshoku restaurant carried on from the previous generation; Michelin Bib Gourmand, per an October 2026 review; now reservation-only and among the hardest tables in Kyoto to book. Tabelog Yoshoku "Tabelog 100" 2020, 2023 and Yoshoku WEST 2025.',
      philosophy: null, specialty: 'Macaroni gratin; hamburg steak with a fry; pumpkin soup.',
      anecdotes: [
        { text: '"Originally run by a couple, the restaurant is now managed by a mother and her daughters." — September 2026.', source: R + 'B536155068/' },
        { text: '"After calling about 500 times, I finally managed to get through and make a reservation." — October 2026.', source: R + 'B536807715/' },
        { text: '"this soup was so thick that the spoon left a mark, almost like a firm custard." — October 2026, the pumpkin soup.', source: R + 'B537406936/' },
      ],
      japanese_sources_summary: '食べログ: コリス、洋食、東山区松原通大和大路東入2丁目轆轤町101、清水道バス停から徒歩3分、月・水〜日 11:30〜19:00、火曜休み、毎年1月25日〜2月25日休業、予約は前月末から翌月分、12席、貸切20名まで、カード・電子マネー・QR 不可、ワインの持ち込みは原則不可、ソムリエあり、洋食百名店 2020・2023、洋食 WEST 百名店 2025。口コミ (2026年7〜11月、英語): 先代から続く味、母と娘たち、マカロニグラタン、ハンバーグとフライ、かぼちゃのスープ、電話がつながらない予約。',
      confidence: 'medium', sources: [TB, R + 'B116684192/', R + 'B411290554/', R + 'B520936535/', R + 'B532719604/', R + 'B535738885/', R + 'B536155068/', R + 'B536211530/', R + 'B536807715/', R + 'B537406936/', R + 'B92623231/'] },
    cultural_comfort: { level: 'relay', note: 'Bookings only by phone, opening at the end of each month and very hard to get through; a Japanese speaker or hotel concierge helps.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路東入2丁目轆轤町101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Yoshoku WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.997640, 135.774281); cross-checked: GSI 京都府京都市東山区轆轤町101番地 (lot) 50m; mp_rokuhara_hanten is 47 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520936535/'],
    price_note: 'No published prices; a July 2026 bill of five dishes and drinks for four came to ¥24,300.', last_checked: TODAY, items: [
      it('', '', 'Macaroni gratin', '', 'À la carte', 'no', 'no', '2026 reviews.', 'gratin'),
      it('', '', 'Hamburg steak with a fry (salmon, hamo or scallop)', '', 'À la carte', 'no', 'no', '2026 reviews.', 'hamburg_fry'),
      it('', '', 'Clubhouse sandwich', '', 'À la carte', 'no', 'no', 'July 2026.', 'clubhouse'),
      it('', '', 'Pumpkin soup', '', 'Soup', 'ask', 'no', 'September–October 2026.', 'pumpkin_soup'),
    ] }, {
    cuisine: '2代にわたって磨かれた洋食とビストロ料理を一品で (2026年の口コミ)・前菜: ガーリックポテトや shirasu のカナッペ、たっぷりのバゲットとタプナード、スモークサーモンとマンゴー、桃とフィンガーライムとミモレット・濃厚なかぼちゃ、バターナッツ、ビーツのスープ・ハム、卵、トマトの定番サラダ・名物: マカロニグラタン、ハンバーグとフライ (鮭、hamo、帆立、海老)、クラブハウスサンド、ポークチョップ、牛のタリアータ、ポルチーニやブルーチーズのリゾット、ティラミス (2026年の口コミ)・ワイン、ソムリエあり (食べログ)・予算は約4,000〜9,999円、4人で5品と飲み物で1人6,075円 (2026年7月)',
    neighborhood: '六波羅蜜寺近くの松原通、茶色いレンガの建物。清水五条駅から徒歩約7〜9分',
    gf_detail: '要確認。グラタン、フライ、カツ、デミグラスのハンバーグなど衣やベシャメルが多いが、リゾット、サラダ、牛のタリアータもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。肉、魚介、チーズの料理で、サラダにもハムと卵 (2026年の口コミ)。',
    notes: '[洋食・松原通、京都でいちばん予約の取れない洋食] 六波羅蜜寺近くの茶色いレンガの建物に12席。夫婦の洋食を家族が受け継ぐ: 熱々のマカロニグラタン、まん丸のハンバーグとさくさくのフライ、スプーンが立つほど濃いかぼちゃのスープ、名物のクラブハウスサンドとティラミス。量が多いので4〜5人で分けるのがいい。難関は予約で、月末に翌月分の電話受付が始まり、2026年の口コミでは何百回もかけたという声。1人5,000〜8,000円ほど、現金のみ、火曜と1月下旬〜2月下旬は休み。',
  });
}

// ================================================================ 弧玖
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26026456/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kokyu-kyoto.com/'; const SHOP = 'https://www.kokyu-kyoto.com/shop.html';
  put({
    id: 'kyoto_kokyu_demachi', name: '弧玖 (Kokyu)', category: 'MOM_AND_POP',
    lat: 35.03113, lng: 135.769435, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a seasonal kaiseki with soy-seasoned dishes and sushi (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dashi-based kaiseki with fish, beef and duck (2025–2026 reviews).',
    hours_raw: 'Lunch starts at 12:00 and dinner at 18:00, everyone together; closed Monday and occasionally other days (official site; Tabelog). No closing times are published, so no hours are stored. Reservation only, by phone (075-746-4375; easiest 9:00–11:00, 14:30–17:30, 20:30–23:00) by the day before, or online via TableCheck; guests from abroad are asked to book through their hotel (official site). Cancellation 50% the day before, 100% on the day; no strong perfume; children under 10 in the private room only; non-smoking (official site). 9 counter seats and one private room for up to 6 (official site). Cash only (Tabelog). 5 min from Demachiyanagi Stn (official site). Opened 21 October 2015 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachi, where the Kamo and Takano rivers meet, near Shimogamo Shrine — 5 min from Demachiyanagi Stn',
    cuisine: 'Traditional Kyoto kaiseki from the day\'s best ingredients, every dish and arrangement carrying a meaning (official site) · lunch course ¥16,500 tax included (February 2026); the official site lists an omakase from ¥14,000 and says prices are not fixed — ask by phone · February 2026: sardine with sweet potato sushi; Awaji flounder with Shogoin turnip; white sweetfish soup; Miyagi chutoro and Shizuoka fugu; an assortment with karasumi and anko liver; root-celery hot pot with oysters and duck; rice with dashi omelette · September 2026: a Matsutake course with mackerel and fig on a bowl of Mie ice, Awaji anago soup with a full-moon tofu, a hassun with seasonal flowers · July 2026: an ayu course · sake list',
    website: SITE, gmaps: gm('弧玖 出町柳'), menu_url: 'https://www.kokyu-kyoto.com/menu_plan.html',
    notes: "[Kaiseki · Demachi, a Sakurada-trained counter where the rivers meet] Near the confluence of the Kamo and Takano rivers, a clean, quiet nine-seat counter where owner-chef Sho Maeda, ten years at the celebrated kaiseki house Sakurada, cooks one course that tells the season in taste, presentation and tableware — Japanese ceramics alongside French plates — and explains every dish as it comes. A September 2026 Matsutake menu brought mackerel and fig on a bowl of ice and anago draped over a full-moon tofu. A March 2025 diner was welcomed by the couple who run it. Reservation only and hard to get; overseas guests should book through their hotel. Lunch around ¥16,500; cash only.",
    chef_bio: { chef_name: 'Sho Maeda (February 2026 review; no kanji in a source)', roles: ['Owner-chef'], origin: null,
      background: 'Per a February 2026 review: trained for ten years, from the twenties, at the renowned kaiseki restaurant Sakurada (桜田) and went independent two or three years before it closed. Per the official site: seasonal Kyoto cooking that lets guests feel the season and Japanese culture, in a calm spot near Shimogamo Shrine and the Imperial Palace Park. A March 2025 diner was welcomed by "the couple running the restaurant". Tabelog: opened 21 October 2015; Japanese cuisine WEST "Tabelog 100" 2021.',
      philosophy: 'Each dish and its arrangement has a meaning: seasonal ingredients, much handwork, and the seasons and Japanese culture made visible (official site).', specialty: 'Seasonal kaiseki; hassun with flowers.',
      anecdotes: [
        { text: '"The owner, Sho Maeda, trained for 10 years at the renowned kaiseki restaurant “Sakurada” since his twenties." — February 2026.', source: R + 'B523201789/' },
        { text: '"Watching the chef fillet the eel right in front of me was a delightful experience" — September 2026.', source: R + 'B534579680/' },
        { text: '"The couple running the restaurant made me feel very welcomed." — March 2025.', source: R + 'B503675957/' },
      ],
      japanese_sources_summary: '公式サイト (kokyu-kyoto.com): 京都 出町柳の日本料理店 弧玖 (こきゅう)、御料理を通して季節を感じ日本の文化に触れて頂ける時間、賀茂川と高野川の合流、下鴨神社や京都御苑に近い、カウンター9席と完全個室1室 (6名まで)、完全予約制で前日までに電話、TableCheck、電話は9〜11時・14時半〜17時半・20時半〜23時がつながりやすい、全席禁煙、強い香水は遠慮、10歳未満は個室、前日キャンセル50%・当日100%、昼12:00〜・夜18:00〜、月曜定休・不定休、海外の方はホテルを通して予約、おまかせ14,000円、料金は決まっておらず電話で相談。食べログ: 日本料理、上京区青龍町204、カード不可、2015年10月21日オープン、日本料理 WEST 百名店 2021。口コミ (2025年3月〜2026年9月、英語): 店主の Sho Maeda さんは Sakurada で10年、昼のコース16,500円、Matsutake のコース、夫婦で営む。',
      confidence: 'medium', sources: [SITE, SHOP, 'https://www.kokyu-kyoto.com/menu_plan.html', TB, R + 'B452219468/', R + 'B487088159/', R + 'B503675957/', R + 'B523201789/', R + 'B534579680/'] },
    cultural_comfort: { level: 'relay', note: 'The official site asks overseas guests to book through their hotel; phone or TableCheck otherwise.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区出町通今出川上ル青龍町204',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.031130, 135.769435); cross-checked: GSI 京都府京都市上京区青龍町 (town only, no lot) 90m — pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523201789/', 'https://www.kokyu-kyoto.com/menu_plan.html'],
    price_note: 'Lunch from a February 2026 review; the official site lists an omakase at ¥14,000 and says prices vary with the day\'s ingredients.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥16,500', 'Course', 'ask', 'no', 'February 2026, tax included.', 'lunch'),
      it('おまかせ', '', 'Omakase (price varies; ask by phone)', '¥14,000', 'Course', 'ask', 'no', 'Official site.', 'omakase'),
    ] }, {
    cuisine: 'その日の最高の食材で作る伝統的な京懐石、料理も盛り付けもすべてに意味がある (公式サイト)・昼のコース16,500円 (税込、2026年2月)、公式サイトにはおまかせ14,000円とあり、料金は決まっておらず電話で相談・2026年2月: 鰯とさつまいもの寿司、Awaji の鮃と Shogoin の蕪、白い鮎のお椀、Miyagi の中トロと Shizuoka の fugu、karasumi や anko liver の盛り合わせ、根セロリと牡蠣と鴨の鍋、ご飯と出汁巻き・2026年9月: Mie の氷の器に鯖といちじく、満月の豆腐に Awaji の穴子のお椀、花を添えた hassun の Matsutake のコース・2026年7月: 鮎づくし・日本酒',
    neighborhood: '出町、賀茂川と高野川の合流点の近く、下鴨神社にもほど近い。出町柳駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油を使う料理や寿司のある季節の懐石 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。出汁を土台に、魚、牛、鴨を使う懐石 (2025〜2026年の口コミ)。',
    notes: '[懐石・出町、川の合流点の Sakurada 仕込みのカウンター] 賀茂川と高野川が合流するあたり、清潔で静かな9席のカウンター。名店 Sakurada で10年修業した店主の Sho Maeda さんが、味と盛り付けと器で季節を語るおまかせを出す。和の器にフランスの皿も交じり、一皿ごとに丁寧な説明がある。2026年9月の Matsutake の献立には氷の器の鯖といちじく、満月の豆腐にかけた穴子のお椀。夫婦で営む店。完全予約制で取りにくく、海外の方はホテルを通して予約を。昼は16,500円ほど、現金のみ。',
  });
}

// ================================================================ KOKE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035742/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ido-kyoto.com/koke/';
  const L = ['12:00', '14:30']; const D = ['18:00', '22:00'];
  put({
    id: 'kyoto_koke_ido', name: 'KOKE', category: 'MOM_AND_POP',
    lat: 35.012571, lng: 135.758236, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a set course of about 20 dishes, including kombu cookies (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course starts with a broth of island-pork cheek and kombu and uses fish throughout (August 2026 review).',
    hours_raw: 'Dinner Tue–Thu; lunch and dinner Fri–Sat; lunch Sunday; closed Monday (official site). Lunch seatings 12:00 or 12:30, closing 14:30; dinner seatings 18:00 or 18:30 (official site); Tabelog gives dinner to 22:00. Reservation only, online or by phone 12:00–17:00 (Tabelog). Lunch ¥15,000, dinner ¥29,000, tax included, plus 15% service and fuel charge (official site; Tabelog); an alcohol or non-alcohol pairing brought one August 2026 dinner to ¥45,000. No children under 12; smart casual (Tabelog). 12 seats: a counter of 6 and two tables of up to 4 (Tabelog). English menu and English-speaking staff (Tabelog). Wheelchair accessible (Tabelog). IDO KYOTO 1F, 5 min from Karasuma-Oike Stn (Tabelog). Opened 14 April 2021 (Tabelog).',
    hours: { 1: day(D), 2: day(D), 3: day(D), 4: day(L, D), 5: day(L, D), 6: day(L) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, ground floor of IDO KYOTO around a moss garden — 5 min from Karasuma-Oike Stn',
    cuisine: 'Innovative course blending Okinawan food culture with Spanish technique and wood fire, cooked with well water drawn from the garden (official site; 2026 reviews) · lunch ¥15,000, dinner ¥29,000 (about 20 dishes), tax included, +15% service (official site; Tabelog) · in-house alcohol and non-alcohol pairings, the latter by Madame Sachiko (August 2026) · 2026 dishes: a broth of island-pork cheek and kombu in spring water; a "Ryukyu plate" of small bites with house jimami tofu and sukugarasu on kombu cookies; firewood and Hanase binchotan cooking; dishes named in the Okinawan language · natural wines and sake',
    website: SITE, gmaps: gm('KOKE 京都 IDO'), menu_url: SITE,
    notes: "[Innovative · Karasuma-Oike, Okinawa meets Spain by a moss garden] On the ground floor of IDO KYOTO, a calm, stylish room facing a moss garden, where owner-chef 中村有作 (Yusaku Nakamura), from Okinawa and trained at Ca Sento in Kobe, cooks over firewood and charcoal with water drawn from the garden well. Over about twenty dishes, Okinawan ingredients and island classics are rebuilt with Spanish technique — jimami tofu, sukugarasu on kombu cookies, a broth of island-pork cheek. Madame Sachiko's non-alcoholic pairing is a highlight. English is spoken. Dinner ¥29,000 plus 15%; lunch ¥15,000 from Friday to Sunday. Book ahead; no children under 12.",
    chef_bio: { chef_name: '中村有作 (Yusaku Nakamura; kanji from the official site, romaji from 2026 reviews)', roles: ['Owner-chef (official site; October 2026 review)', 'Madame 中村瑳智子 (Sachiko), non-alcoholic pairings (official site; August 2026 review)'], origin: 'Okinawa (2026 reviews).',
      background: 'Per the official site: a message from 福本伸也 of Ca Sento (カセント) announcing that 中村有作 would open independently in Kyoto after training there, joined by sommelier 大山達也; KOKE sits on the ground floor of IDO KYOTO, whose shops use spring water drawn from the garden well. Per 2026 reviews: trained at Edition Koji Shimomura in Tokyo and for a long time at Ca Sento; in recent years the menu has turned much more Okinawan; Madame Sachiko, who worked with the chef at Malta in Chofu, creates the non-alcoholic pairings and launched the brand "nona". Tabelog: opened 14 April 2021; Innovative "Tabelog 100" 2025.',
      philosophy: 'Hospitality born from water: spring water from the garden well and cooking that values the essentials (IDO KYOTO official site).', specialty: 'Okinawan-Spanish tasting course; non-alcoholic pairing.',
      anecdotes: [
        { text: '"This is what happens when Spanish cuisine fuses with Okinawan court cuisine" — May 2026.', source: R + 'B527839878/' },
        { text: '"Few places in Japan offer such well-crafted pairings made in-house, which is impressive." — September 2026.', source: R + 'B444168814/' },
        { text: '"Dinner consists of 20 dishes for JPY 29,000." — August 2026.', source: R + 'B534705400/' },
      ],
      japanese_sources_summary: '公式サイト (ido-kyoto.com/koke): KOKE (コケ京都)、IDO KYOTO 1F、2F は しろ、庭の井戸から汲んだ大地からの湧き水、一座建立、中村有作・中村瑳智子ほかのスタッフ、Lunch 12:00/12:30 開始・14:30 終了 15,000円 (税込・サービス料別)、Dinner 18:00/18:30 開始 29,000円 (税込・サービス料別)、火・水・木 Dinner、金・土 Lunch & Dinner、日 Lunch、月 Closed、カセントの福本伸也によるメッセージ (中村有作がカセントでの修行を経て京都で独立、大山達也も共に)。食べログ: イノベーティブ、中京区蛸薬師287 ido 1F、予約のみ、12歳未満不可、サービス料兼燃料費15%、12席、英語メニュー・英語スタッフ、2021年4月14日オープン、イノベーティブ百名店 2025。口コミ (2026年4〜10月、英語): Okinawa 出身のシェフ、スペインの技法、薪と炭、ノンアルコールのペアリング。',
      confidence: 'medium', sources: [SITE, TB, R + 'B444168814/', R + 'B527839878/', R + 'B528173269/', R + 'B529526266/', R + 'B533807995/', R + 'B534515578/', R + 'B534555515/', R + 'B534705400/', R + 'B537341076/', R + 'B538322002/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師287 ido 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'IDO KYOTO official page with current prices and days; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012571, 135.758236); cross-checked: GSI 京都府京都市中京区蛸薬師町287番地 (lot) 40m; same building as kyoto_shiro_karasuma_oike (2F), 8 m apart — not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE, TB],
    price_note: 'Official page (tax included, read November 2026); service and fuel charge 15% per Tabelog.', last_checked: TODAY, items: [
      it('Lunch', '', 'Lunch course (Fri–Sun)', '¥15,000', 'Course', 'ask', 'no', 'Official site; +15% service.', 'lunch'),
      it('Dinner', '', 'Dinner course, about 20 dishes', '¥29,000', 'Course', 'ask', 'no', 'Official site; +15% service.', 'dinner'),
    ] }, {
    cuisine: '沖縄の食文化をスペインの技法と薪の火で組み立て、庭の井戸の水で作るイノベーティブのコース (公式サイト、2026年の口コミ)・昼15,000円、夜29,000円 (約20品)、税込、別途サービス料15% (公式サイト、食べログ)・自家製のアルコールとノンアルコールのペアリング、ノンアルコールはマダムの Sachiko さん (2026年8月)・2026年の料理: 湧き水で引いた島豚のほほ肉と昆布のスープ、自家製の jimami tofu や昆布のクッキーにのせた sukugarasu の「Ryukyu plate」、薪と Hanase の備長炭、沖縄の言葉の料理名・自然派ワインと日本酒',
    neighborhood: '烏丸御池、苔の庭を囲む IDO KYOTO の1階。烏丸御池駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。昆布のクッキーなど約20品のコース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。島豚のほほ肉と昆布のスープで始まり、魚も使う (2026年8月の口コミ)。',
    notes: '[イノベーティブ・烏丸御池、苔の庭で沖縄とスペイン] IDO KYOTO の1階、苔の庭に面した落ち着いたスタイリッシュな空間。Okinawa 出身で神戸の Ca Sento で修業した店主の中村有作さんが、庭の井戸の水を使い、薪と炭で料理する。約20品で、沖縄の食材や郷土料理をスペインの技法で組み立て直す: jimami tofu、昆布のクッキーの sukugarasu、島豚のほほ肉のスープ。マダムの Sachiko さんのノンアルコールのペアリングも見どころ。英語が通じる。夜29,000円に15%、昼は金〜日で15,000円。予約は早めに、12歳未満は不可。',
  });
}

// ================================================================ レ・シャンドール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001319/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.leschampsdor.jp/index.html'; const INFO = 'http://www.leschampsdor.jp/information.html';
  const LUNCH = 'http://www.leschampsdor.jp/lunch.html'; const DINNER = 'http://www.leschampsdor.jp/dinner.html';
  const L = ['12:00', '15:00']; const D = ['18:00', '22:00'];
  put({
    id: 'kyoto_les_champs_dor', name: "レ・シャンドール (Les Champs d'Or)", category: 'MOM_AND_POP',
    lat: 35.006565, lng: 135.763751, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Classic French with butter and cream sauces, bread and pastry desserts such as savarin (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: classic French courses of seafood, foie gras, duck and lamb (official site).',
    hours_raw: 'Lunch 12:00–15:00 (last entry 13:30) Tue–Sat; dinner 18:00–22:00 (last entry 19:00) Tue, Thu and Sat only, since 2022; closed Sunday and Monday, with seasonal breaks in January and August; year-end: Christmas menus 19–25 December 2026, open to lunch on 25 December, reopening with lunch on 6 January (official site). Book by phone (075-255-2277) during opening hours, or online on Ikyu (official site). Lunch ¥6,655 or ¥7,865, special course "天上の晩餐" ¥21,780 at lunch or dinner, tax and service included (official site). 24 seats; non-smoking (Tabelog). Cards (VISA, JCB, AMEX, Diners) (Tabelog). 10 min from Shijo or Karasuma Stn (Tabelog). Founded 1983 (official site).',
    hours: { 1: day(L, D), 2: day(L), 3: day(L, D), 4: day(L), 5: day(L, D) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanaginobanba-dori near Rokkaku, in a townhouse in central Kyoto — 10 min from Shijo or Karasuma Stn',
    cuisine: "Classic French since 1983 — butter and cream sauces, generous plates (official site; 2025–2026 reviews) · lunch A ¥6,655 (starter, soup, fish or meat, dessert, coffee), lunch B ¥7,865, special 8-course \"天上の晩餐\" ¥21,780 at lunch or dinner, tax and service included (official site) · autumn 2026 dinner: snow crab and sea urchin in a fruit-and-vegetable jelly; braised abalone with grilled eggplant and caviar; Kumamoto guinea fowl, foie gras and plum terrine with chestnut cream; pan-roasted sea bream with sherry-vinegar sauce; roast duck with seared foie gras and fig; French cheeses (official site) · 2026 lunches: lobster bisque, crab gratin, red-wine-braised beef cheek, savarin, blancmange with peaches · wine list of Bordeaux, Burgundy, grower Champagne and Alsace (November 2025) · takeaway baked goods, duck roast and a New Year deli set (official site)",
    website: SITE, gmaps: gm('レ・シャンドール 京都'), menu_url: LUNCH,
    notes: "[French · Central Kyoto, a 1983 classic in new hands] A calm, old-school French dining room near Rokkaku that has served butter-and-cream classics since 1983 — snow crab in jelly, lobster bisque, roast duck with foie gras and fig, savarin to finish — with a well-priced cellar of Bordeaux, Burgundy and grower Champagne. Founding chef 田島福廣 retired in March 2026, and 熊﨑隆一・香 took over in April, keeping the classic style. Lunch is the popular choice, from ¥6,655 with tax and service; dinner only on Tuesday, Thursday and Saturday. Book by phone or Ikyu. Tabelog's English page calls it \"Les Chandelles\"; the shop's own name is Les Champs d'Or.",
    chef_bio: { chef_name: '熊﨑隆一・香 (owners since April 2026; official site; no romaji in a source)', roles: ['Owners since April 2026 (official site)', 'Founded in 1983 by chef 田島福廣 and manager 奥田孝雄 (official site)'], origin: null,
      background: 'Per the official site: the name means "golden fields", a land at harvest; founded in 1983 by chef 田島福廣 and manager 奥田孝雄, serving orthodox French cooking for over forty years; taken over from April 2026 by 熊﨑隆一・香. A March 2026 review marks Chef Tajima\'s retirement at the end of that month. Tabelog Award Bronze 2021–2025; French WEST "Tabelog 100" 2021, 2023, 2025 (Tabelog).',
      philosophy: 'Orthodox French cooking that brings out the ingredients, firm in flavour, with delicacy and dignity (official site).', specialty: 'Classic French; snow crab jelly; roast duck.',
      anecdotes: [
        { text: '"As I was leaving, Chef Tajima came out to greet us, and I even asked for a commemorative photo." — March 2026, before the chef\'s retirement.', source: R + 'B448006456/' },
        { text: '"In a world where innovative and fusion cuisines dominate, it was refreshing to savor traditional French dishes once again." — November 2025.', source: R + 'B516843810/' },
        { text: '"The interior is sophisticated, and the atmosphere of a high-end French restaurant from the Showa era is quite nostalgic!" — January 2026.', source: R + 'B524732342/' },
      ],
      japanese_sources_summary: '公式サイト (leschampsdor.jp): レ・シャンドール (Les Champs d\'Or)、「黄金の畑」、chef 田島福廣と manager 奥田孝雄が1983年に創業、2026年4月より熊﨑隆一・香が引き継ぐ、正統派フランス料理、中京区柳馬場蛸薬師上る419、昼12:00〜15:00 (最終入店13:30)、夜18:00〜22:00 (最終入店19:00) 火・木・土のみ (2022年から)、日・月定休、1月・8月に季節休暇、ランチ A 6,655円・B 7,865円、特別コース「天上の晩餐」21,780円 (税・サ込)、秋のメニュー、電話と一休で予約、オンラインショップ (焼き菓子、鴨ロース、デリカセット2027)。食べログ: フレンチ、柳馬場通六角下ル井筒屋419、24席、カード可、The Tabelog Award Bronze 2021〜2025、フレンチ WEST 百名店 2021・2023・2025。口コミ (2025年11月〜2026年9月、英語): 古典的なフランス料理、Tajima シェフの引退、昭和の高級フレンチの雰囲気、ワイン。',
      confidence: 'high', sources: [SITE, INFO, LUNCH, DINNER, 'http://www.leschampsdor.jp/news.html', TB, R + 'B448006456/', R + 'B516843810/', R + 'B519219849/', R + 'B521145678/', R + 'B524732342/', R + 'B526116684/', R + 'B527741474/', R + 'B531434309/', R + 'B532589412/', R + 'B536302981/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set French courses; the official site has an English page and Ikyu online booking.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通六角下ル井筒屋町419',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with the April 2026 handover, autumn 2026 menus and the 2026–27 year-end calendar; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006565, 135.763751); cross-checked: GSI 京都府京都市中京区井筒屋町419番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [LUNCH, DINNER],
    price_note: 'Official site (tax and service included; read November 2026).', last_checked: TODAY, items: [
      it('ランチメニュー A', 'Déjeuner A', 'Lunch A: starter, soup, fish or meat, dessert, coffee', '¥6,655', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_a'),
      it('ランチメニュー B', 'Déjeuner B', 'Lunch B', '¥7,865', 'Lunch', 'ask', 'no', 'Official site.', 'lunch_b'),
      it('天上の晩餐', 'Déjeuner/Dîner Céleste', 'Special 8-course menu (lunch or dinner)', '¥21,780', 'Course', 'ask', 'no', 'Official site.', 'celeste'),
    ] }, {
    cuisine: '1983年からの正統派フランス料理。バターとクリームのソース、たっぷりの皿 (公式サイト、2025〜2026年の口コミ)・ランチ A 6,655円 (オードヴル、スープ、魚または肉、デザート、コーヒー)、ランチ B 7,865円、全8品の特別コース「天上の晩餐」21,780円 (昼も夜も、税・サ込、公式サイト)・2026年秋のディナー: ズワイ蟹とウニ 季節のフルーツと野菜のジュレ仕立て、アワビの柔らか煮と焼き茄子 キャビア添え、熊本県産ホロホロ鶏とフォアグラ、プラムのテリーヌ 栗のクリーム、真鯛のポアレ シェリービネガーのソース、鴨のローストとフォアグラのポワレ イチジク添え、フランス産チーズ (公式サイト)・2026年のランチ: オマール海老のビスク、蟹のグラタン、牛ほほ肉の赤ワイン煮、サヴァラン、桃のブランマンジェ・ボルドー、ブルゴーニュ、RM シャンパーニュ、アルザスのワイン (2025年11月)・焼き菓子、鴨ロース、年末年始のデリカセットの持ち帰りや発送 (公式サイト)',
    neighborhood: '六角近くの柳馬場通、京都の中心の町家。四条駅・烏丸駅から徒歩10分',
    gf_detail: '予約時に要確認。バターとクリームのソース、パン、サヴァランなどの生地のデザートがある古典的なフランス料理 (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、フォアグラ、鴨、ラムの古典的なフランス料理のコース (公式サイト)。',
    notes: '[フレンチ・京都の中心、新しい担い手の1983年からの名店] 六角近くの落ち着いた昔ながらのフレンチのダイニングで、1983年からバターとクリームの古典を出す: ズワイ蟹のジュレ、オマール海老のビスク、フォアグラとイチジクの鴨のロースト、締めにサヴァラン。ボルドー、ブルゴーニュ、RM シャンパーニュのワインも手頃。創業シェフの田島福廣さんは2026年3月に引退し、4月から熊﨑隆一・香さんが古典のスタイルを受け継ぐ。人気はランチで、税・サ込み6,655円から。ディナーは火・木・土のみ。予約は電話か一休で。食べログの英語ページでは「Les Chandelles」だが、店名は Les Champs d\'Or。',
  });
}

save();
