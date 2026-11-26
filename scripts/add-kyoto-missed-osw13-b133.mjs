// Kyoto priority (kyoto-missed), worker osw13, batch 133 — lane: Tabelog id mod 6 = 0; core and notable exhausted in the lane, so rest tier, nearest-first.
// Drafts: あたら夜, 盛司, 裕くら, 斗々屋 京都本店. Skips: 九州ろまん 七笑 (too thin), Dusit Gallery (big-chain hotel). Shops fetched by the worker (Tabelog /en/ only, 3 s apart); no integrator prefetch this round.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-133');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26038896', 'too thin to verify: 九州ろまん 七笑 has six Tabelog reviews; the only 2025–26 one (December 2025, B518614838) has no text, and Tabelog gives no business hours');
skip('26040378', 'big-chain hotel venue (Greg 11-08 ruling): Dusit Gallery is tagged "Hotel restaurant" on Tabelog and is the café of Dusit Thani KYOTO (Tabelog review titles), a hotel of Dusit International (same call as 26039406 in osw13-109)');

// ================================================================ あたら夜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26044788/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.atarayo.net/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_atarayo_omiya', name: 'あたら夜 (Atarayo)', category: 'MOM_AND_POP',
    lat: 34.99863673787044, lng: 135.74998878030502, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: small plates include tempura, kara-age, ponzu and soy-based dishes (Tabelog menu, May 2026); no gluten-free option stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: there are vegetable small plates such as kinpira burdock, green beans with sesame dressing and chilled celery-tomato (Tabelog menu, May 2026), but no vegan option is stated; ask about dashi and fish in each. The ¥500 otoshi was a miso soup in April 2026.',
    hours_raw: 'Official site and Tabelog: Tue–Sun 15:00–24:00 (L.O. 23:30); closed Monday plus irregular days: check the calendar on the official LINE or Instagram. Reservations through the official LINE account. Otoshi (cover dish) ¥500 per person. Payment: cash only in April 2026 (cards "planned", per a review); in October 2026 reviewers say cards are accepted from ¥3,500; Tabelog lists Visa, Master, JCB, AMEX and PayPay. 10 counter seats; private hire for up to 20. Non-smoking. English menu and menu with photos (Tabelog). Children and strollers welcome (Tabelog). Opened 1 April 2026. 8 min from Hankyu Omiya, 2 min from the Omiya Matsubara city-bus stop; coin parking nearby.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Omiya-Matsubara, south of Shijo-Omiya — 8 min from Hankyu Omiya',
    cuisine: 'A ten-seat sake counter opened in April 2026, with 40–50 sakes chosen by the owner and seasonal small plates at ¥500 each (Tabelog official; official site) · sake from breweries across Japan, from sweet to dry, rotated weekly; the owner picks one to suit your plate and mood; other drinks and non-alcoholic drinks too (official site) · ¥500 plates (Tabelog menu, May 2026): shungiku and hassaku salad, kinpira burdock, new-onion ponzu, mackerel rillettes, quail eggs with sansho, sea bream with salted kombu, mozuku Matsumae-zuke, sakura shrimp and new-onion tempura, kara-age, fries, dashi tamagoyaki, mirin-dried fish, eihire, ume jellyfish, rice balls (salmon or ume), ochazuke · namako-su (sea cucumber in vinegar) from the owner\'s family recipe, firefly squid with vinegar miso, scallop sashimi (April 2026) · seaweed rice porridge (July 2026); Miwa somen (August 2026); cocoa-wine affogato (April 2026)',
    website: SITE, gmaps: gm('あたら夜 京都 北門前町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Omiya-Matsubara, a ¥500 sake counter] A ten-seat counter opened in April 2026 by a sake-loving owner who trained at well-known Japanese restaurants in Karasuma: 40–50 sakes and seasonal small plates, almost everything ¥500, chosen to suit your mood. Non-drinkers and families welcome. Opens 15:00; closed Monday. Book via LINE.',
    chef_bio: { chef_name: '藤村 亜弓', roles: ['Owner (店主, official site)'], origin: null,
      background: 'The official site names the owner (店主) as 藤村 亜弓. A reviewer writes that the owner "has gained experience at several well-known Japanese restaurants in Karasuma" and opened the shop on 1 April 2026 (April 2026). The owner runs the counter alone, so plates can be slow when it is busy (June 2026). Reviewers praise the owner\'s passion for sake and welcome for non-drinkers (April 2026) and the thoughtful small plates (May 2026).',
      philosophy: 'Official site: the name 可惜夜 (あたらよ) means "a night too wonderful to let it end", and the shop hopes to share such nights with its guests. Tabelog official: "A healing time to enjoy seasonal small dishes and sake."',
      specialty: 'Sake chosen by the owner; ¥500 seasonal small plates.',
      anecdotes: [
        { text: 'April 2026: "Although the restaurant\'s name includes \'sake and ate,\' the owner emphasizes that it would be a shame for those who don\'t drink to miss out on the food."', source: R + 'B525416493/' },
        { text: 'October 2026, a regular on the ninth visit: "The offer of a free drink for saying \'Cheers with Japanese sake\' is a special arrangement for Japanese Sake Day (October 1st)."', source: R + 'B531863250/' },
        { text: 'June 2026: "Since the owner is managing everything alone, it can take a while for the appetizers to arrive when it gets busy."', source: R + 'B531062039/' },
      ],
      japanese_sources_summary: '公式サイト: 酒とアテ あたら夜、四条大宮の日本酒居酒屋、店主 藤村 亜弓、下京区北門前町735、15:00〜24:00 (L.O.23:30)、月曜定休と不定休、カウンター10席、お通し500円、予約は公式LINE、営業日はLINEとInstagramで、阪急大宮から徒歩8分、市バス大宮松原から徒歩2分、近くにコインパーキング。日本酒と小皿のアテを500円から、週替わりの日本酒を店主がアテに合わせて選ぶ、一人飲み歓迎。食べログ: 2026年4月1日オープン、カード・PayPay可、貸切は20名まで、禁煙、英語メニュー、子ども可、季節の小皿はすべて500円、日本酒40〜50種。口コミ (2026年4月〜11月、英語): Karasumaの有名な日本料理店で経験を積んだ店主、飲まない人も歓迎、なまこ酢は店主の家のレシピ、ほたるいかの酢味噌、帆立の刺身、お通しは味噌汁 (2026年4月)、一人で切り盛りするので混むと待つ (2026年6月)、2026年4月は現金のみ、10月はカードは3,500円から。',
      confidence: 'low', sources: [SITE, TB].concat(rv(R, ['B525416493', 'B528483502', 'B531062039', 'B531863250', 'B536979308', 'B537001113', 'B537086957'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos (Tabelog); the owner recommends sake; book via LINE.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区北門前町735',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened 1 April 2026; official site and Tabelog listing with reviews from April to November 2026.' },
    pin_source: `Tabelog ${TB} (34.998637, 135.749989); not pin-checked by the worker (integrator to check); nearest pin kyoto_coppie 79.6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B525416493/'],
    price_note: 'Tabelog menu, last updated 1 May 2026 (tax included); almost every dish and drink ¥500.', last_checked: TODAY, items: [
      it('', '', 'Dashi tamagoyaki', '¥500', 'Small plate', 'ask', 'no', 'Tabelog menu, May 2026.', 'dashimaki'),
      it('', '', 'Sakura shrimp and new-onion tempura', '¥500', 'Small plate', 'no', 'ask', 'Tabelog menu, May 2026.', 'sakuraebi_tempura'),
      it('', '', 'Kinpira burdock', '¥500', 'Small plate', 'ask', 'ask', 'Tabelog menu, May 2026.', 'kinpira'),
      it('', '', 'Namako-su (sea cucumber in vinegar)', '¥500', 'Small plate', 'ask', 'no', 'April 2026; the owner\'s family recipe.', 'namako_su'),
      it('', '', 'Rice ball (salmon or ume)', '¥500', 'Rice', 'ask', 'ask', 'Tabelog menu, May 2026.', 'onigiri'),
      it('', '', 'Otoshi (cover dish)', '¥500', 'Cover', 'ask', 'ask', 'Per person (official site); miso soup in April 2026.', 'otoshi'),
    ] }, {
    cuisine: '2026年4月に開いたカウンター10席の日本酒の店。店主が選ぶ40〜50種の日本酒と季節の小皿、どれも500円 (食べログ公式、公式サイト)・甘口から辛口まで全国の蔵の日本酒、週替わり、アテや気分に合わせて店主が選ぶ、日本酒以外やノンアルコールも (公式サイト)・500円の小皿 (食べログのメニュー、2026年5月): 春菊と八朔のサラダ、きんぴらごぼう、新玉ねぎのポン酢、さばのリエット、うずらの卵の山椒風味、鯛と塩昆布、もずくの松前漬け、桜えびと新玉ねぎの天ぷら、唐揚げ、フライドポテト、だし巻き、みりん干し、えいひれ、梅くらげ、おにぎり (鮭か梅)、お茶漬け・店主の家のレシピのなまこ酢、ほたるいかの酢味噌、帆立の刺身 (2026年4月)・海藻の雑炊 (2026年7月)、Miwaそうめん (2026年8月)、ココアワインのアフォガート (2026年4月)',
    neighborhood: '四条大宮の南、大宮松原。阪急大宮から徒歩8分',
    gf_detail: '要確認: 小皿に天ぷら、唐揚げ、ポン酢や醤油味の料理 (食べログのメニュー、2026年5月)。グルテンフリーの対応の記載なし。',
    vegan_detail: '要確認: きんぴらごぼう、いんげんのごま和え、セロリとトマトの冷製など野菜の小皿はある (食べログのメニュー、2026年5月) が、ヴィーガン対応の記載なし。だしや魚介の有無はそれぞれ確認を。500円のお通しは2026年4月は味噌汁。',
    notes: '[居酒屋・大宮松原、500円の日本酒カウンター] Karasumaの有名な日本料理店で経験を積んだ日本酒好きの店主が2026年4月に開いたカウンター10席。40〜50種の日本酒と季節の小皿、ほぼすべて500円で気分に合わせて。飲まない人や子ども連れも歓迎。15時から、月曜休み。予約はLINEで。',
  });
}

// ================================================================ 盛司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26015466/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_oden_shijo_omiya_26015466', name: '盛司', category: 'OMNI',
    lat: 35.00466434478212, lng: 135.7490166023265, cuisine_type: 'oden',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the oden includes kuruma-fu (wheat gluten) and ginger tempura (2022–2025 reviews); yakitori and side dishes too; no gluten-free option stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden with beef tendon, octopus, egg and sausage in a broth, plus yakitori (2022–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:00–24:00; closed Wednesday; hours may change. A reviewer (visit of August 2025, with an October follow-up) writes of getting in at 19:30 on a Monday "before they closed at 9 PM", so check the closing time. Tabelog: no reservations; cash only (no cards, e-money or QR). 8 counter seats only. Smoking allowed (Tabelog). No prices on the menu (March 2024; August 2025). Often full of regulars; reviewers found it full at 17:30 on a Saturday (December 2025) and at 18:00 on a Monday (October 2025). The entrance is narrow and low (August 2025). 93 m from Hankyu Omiya, just north of Shijo-Omiya.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — by Hankyu Omiya',
    cuisine: 'A tiny Showa-era oden counter by Hankyu Omiya, run by one person, with a light, gentle broth, yakitori and side dishes (2022–2026 reviews) · oden: daikon, egg, thick fried tofu, beef tendon, octopus, potato, kinchaku mochi, kuruma-fu, ginger tempura, rolled cabbage, taro, shungiku, wiener sausage, shirataki, seaweed, dashi-maki oden (2022–2025) · yakitori, "generously sized and perfectly grilled" (November 2025), including heart (December 2025) · side dishes (2023–2026) · sake such as Tosa Tsuru and Kenbishi (2025) · about ¥2,000–3,000 a head (reviews)',
    website: null, gmaps: gm('盛司 おでん 四条大宮'), menu_url: null,
    notes: '[Oden · Shijo-Omiya, a Showa-era counter of regulars] A red-lantern oden shop with eight counter seats just north of Shijo-Omiya, run by one person: light Kyoto-style oden broth, yakitori and sake, about ¥2,000–3,000. No prices on the menu, no bookings, cash only, smoking allowed. Often full; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a nostalgic Showa-era counter "always packed with regulars" (March 2023) with "a kind-looking owner" (January 2024), run by the owner alone (August 2025; "run by a single person", December 2025). One reviewer saw a map of the Osaka Expo in Suita on the wall (August 2025). Some ingredients sell out (August and October 2025).',
      philosophy: null,
      specialty: 'Oden in a light broth; yakitori.',
      anecdotes: [
        { text: 'August 2025: "The oden had a light color, but the flavor of the broth was well absorbed, making it delicious. Most importantly, it wasn\'t too salty!"', source: R + 'B514586070/' },
        { text: 'March 2024: "I was a bit scared because there were no prices listed on the menu, but it turned out to be an amazing restaurant."', source: R + 'B482702316/' },
        { text: 'December 2025: "I visited around 5:30 PM on a Saturday and found it fully booked. I had a drink at a nearby izakaya, and when I returned, I was lucky to find a spot available."', source: R + 'B519873026/' },
      ],
      japanese_sources_summary: '食べログ: 盛司、居酒屋、中京区四条大宮上ル、大宮から93m、月・火・木〜日17:00〜24:00、水曜休み、予約不可、現金のみ、カウンター8席、喫煙可。口コミ (2022年6月〜2026年1月、英語): 昭和の雰囲気のおでん屋、常連でいっぱい、やさしそうな店主 (2024年1月)、一人で切り盛り (2025年8月、12月)、薄い色で味のしみたやさしいだし、大根、卵、厚揚げ、牛すじ、たこ、じゃがいも、餅巾着、車麩、しょうがの天ぷら、春菊、ウインナー、しらたき、だし巻きのおでん、焼鳥、一品、Tosa TsuruやKenbishiの日本酒、メニューに値段の記載なし、2,000〜3,000円ほど、入口は狭く低い、21時に閉まったとの記述 (2025年10月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B434865861', 'B450766470', 'B477782615', 'B482702316', 'B494996423', 'B514586070', 'B516513509', 'B519173229', 'B519873026', 'B520736538'])) },
    cultural_comfort: { level: 'japanese', note: 'A small counter of regulars; no prices on the menu; no bookings; cash only; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: false, address_ja: '京都府京都市中京区四条大宮上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated August 2025 to January 2026.' },
    pin_source: `Tabelog ${TB} (35.004664, 135.749017); the address has no street number ("四条大宮上ル"); not pin-checked by the worker (integrator to check); nearest pin kyoto_tsubomi_omiya 22.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514586070/', R + 'B519173229/', R + 'B516513509/'],
    price_note: 'No prices on the menu (March 2024; August 2025); reviewers spent about ¥2,000–3,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Oden (daikon, egg, thick fried tofu, beef tendon and more)', null, 'Oden', 'ask', 'no', '2022–2025 reviews; prices not listed.', 'oden'),
      it('', '', 'Dashi-maki oden', null, 'Oden', 'ask', 'no', 'November 2025.', 'dashimaki_oden'),
      it('', '', 'Yakitori', null, 'Grilled', 'ask', 'no', 'November and December 2025.', 'yakitori'),
    ] }, {
    cuisine: '阪急大宮すぐの昭和の小さなおでんのカウンター。一人で切り盛りし、薄い色でやさしいだし、焼鳥と一品も (2022〜2026年の口コミ)・おでん: 大根、卵、厚揚げ、牛すじ、たこ、じゃがいも、餅巾着、車麩、しょうがの天ぷら、ロールキャベツ、里芋、春菊、ウインナー、しらたき、海藻、だし巻きのおでん (2022〜2025年)・「大きめでちょうどよい焼き加減」の焼鳥 (2025年11月)、ハツも (2025年12月)・一品 (2023〜2026年)・Tosa TsuruやKenbishiなどの日本酒 (2025年)・ひとり2,000〜3,000円ほど (口コミ)',
    neighborhood: '四条大宮。阪急大宮のすぐそば',
    gf_detail: 'グルテンフリーではない: おでんに車麩やしょうがの天ぷら (2022〜2025年の口コミ)、焼鳥や一品も。グルテンフリーの対応の記載なし。',
    vegan_detail: 'ヴィーガン不可: 牛すじ、たこ、卵、ウインナーのおでんと焼鳥 (2022〜2025年の口コミ)。',
    notes: '[おでん・四条大宮、常連の集まる昭和のカウンター] 四条大宮の北、赤提灯のカウンター8席のおでん屋。一人で切り盛りし、京風のやさしいだしのおでん、焼鳥、日本酒で2,000〜3,000円ほど。メニューに値段なし、予約不可、現金のみ、喫煙可。満席が多い。水曜休み。',
  });
}

// ================================================================ 裕くら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033406/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yu-kura.com/';
  put({
    id: 'kyoto_yukura_shogoin', name: '裕くら (YuuKura)', category: 'MOM_AND_POP',
    lat: 35.01751822786783, lng: 135.7794391704751, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a set monthly course of Japanese dishes with sashimi and dips, dashi-maki egg and other seasoned dishes (2019–2024 reviews); no gluten-free option stated. Ask when you book by phone.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase course of Japanese dishes with sashimi and dashi-maki egg (2019–2024 reviews).',
    hours_raw: 'Official site: from 17:00, closing time not fixed; irregular closing days. Reservation only (Tabelog), by phone (official site); a reviewer booked by phone after 16:00 on the day (February 2026). Cash only (official site). 5 counter seats and 6 table seats; all non-smoking (official site). On the north side of Marutamachi-dori just east of the Higashioji-Marutamachi crossing; 8 min from Keihan Jingu-Marutamachi (official site).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin, just east of Higashioji-Marutamachi — 8 min from Jingu-Marutamachi',
    cuisine: 'A small koryori (Japanese small-dish) restaurant run by a married couple, serving a monthly omakase course of traditional Japanese cooking with seasonal ingredients (official site) · monthly omakase course from ¥5,500 (official site); ¥4,500 for seven dishes in 2020 and March 2023 (reviews) · artistic plating and fine tableware (2020–2024 reviews); "the innovative feel and French-style presentation" (August 2024) · sashimi with a house dip, hojicha ice cream (February 2024); extra dashi-maki on request (November 2019) · a good selection of sake, junmai-shu (2023–2026); a yuzu highball recommended by the proprietress (September 2020)',
    website: SITE, gmaps: gm('小料理 裕くら 聖護院'), menu_url: null,
    notes: '[Japanese course · Shogoin by Higashioji-Marutamachi, a couple\'s small-dish counter] A small townhouse restaurant run by a husband-and-wife team: a monthly omakase course of traditional Japanese small dishes from ¥5,500, beautifully plated, with good sake and an easy chat across the five-seat counter. Book by phone; cash only.',
    chef_bio: { chef_name: '板倉 裕一', roles: ['Owner (店主, official site)'], origin: null,
      background: 'The official site, signed by the owner (店主) 板倉 裕一, says the couple run the small shop together (「夫婦二人で営んでいる小さなお店です」) and serve unpretentious small dishes based on traditional Japanese cooking. Reviewers praise "the friendly nature of the owner and the hostess" (September 2020), an owner who shares stories about Kyoto (November 2023), and an unhurried evening of conversation and sake (February 2026). One reviewer found the portions small for men (November 2019).',
      philosophy: 'Official site: 「奇をてらったものではなく、伝統的な日本料理をベースにした小料理を季節ごとの素材を活かした月替りのコースで、気軽に楽しんでいただきたい」 (not novelty, but small dishes rooted in traditional Japanese cooking, in a monthly course using seasonal ingredients, to be enjoyed casually).',
      specialty: 'Monthly omakase course of small dishes.',
      anecdotes: [
        { text: 'March 2023: "With four counter seats and table seating, it\'s easy to have enjoyable conversations with the head chef and the proprietress!"', source: R + 'B463064864/' },
        { text: 'February 2024: "The soy sauce-like dip that accompanied the sashimi was incredibly delicious."', source: R + 'B480491838/' },
        { text: 'February 2026: "I made a phone reservation just after 4 PM on the day of my visit. Fortunately, it was a quiet day, allowing me to chat with the owner while ordering Junmaishu."', source: R + 'B522254477/' },
      ],
      japanese_sources_summary: '公式サイト: 小料理 裕くら、店主 板倉 裕一、東大路丸太町を東へすぐの北側、夫婦二人で営む小さな店、伝統的な日本料理をベースにした小料理、季節の素材の月替わりのコース、月替わりおまかせコース5,500円から、17時から (閉店時間は不定)、不定休、カウンター5席・テーブル6席、全席禁煙、現金のみ、京阪神宮丸太町から徒歩8分、予約は電話。食べログ: 日本料理、左京区聖護院山王町19-2、予約のみ、カード不可。口コミ (2019年11月〜2026年2月、英語): 店主と女将の人柄、町家の雰囲気、7品のコース4,500円 (2020年、2023年3月)、美しい盛り付けと器、月替わり、日本酒が豊富、刺身のたれ、ほうじ茶のアイス、だし巻きの追加、当日の電話予約 (2026年2月)、男性には量が少なめとの声 (2019年11月)。',
      confidence: 'low', sources: [SITE, TB].concat(rv(R, ['B421984948', 'B430017962', 'B463064864', 'B475529527', 'B480491838', 'B490611766', 'B496783225', 'B522254477', 'B526072686'])) },
    cultural_comfort: { level: 'japanese', note: 'Phone bookings only; a small counter; cash only.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町19-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog listing with reviews dated August 2025 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.017518, 135.779439); not pin-checked by the worker (integrator to check); nearest pin mp_karasu 26.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B463064864/'],
    price_note: 'Course price from the official site (2026); ¥4,500 in 2020 and March 2023 reviews.', last_checked: TODAY, items: [
      it('', '', 'Monthly omakase course', '¥5,500~', 'Course', 'ask', 'no', 'Official site; changes monthly.', 'omakase_course'),
    ] }, {
    cuisine: '夫婦二人で営む小さな小料理の店。季節の素材で伝統的な日本料理をベースにした月替わりのおまかせコース (公式サイト)・月替わりおまかせコース5,500円から (公式サイト)、2020年と2023年3月は7品で4,500円 (口コミ)・美しい盛り付けと器 (2020〜2024年の口コミ)、「斬新でフレンチのような盛り付け」 (2024年8月)・刺身のたれ、ほうじ茶のアイス (2024年2月)、だし巻きの追加 (2019年11月)・豊富な日本酒、純米酒 (2023〜2026年)、女将のすすめる柚子のハイボール (2020年9月)',
    neighborhood: '聖護院、東大路丸太町の東すぐ。神宮丸太町から徒歩8分',
    gf_detail: '要確認: 刺身とたれ、だし巻きなどの月替わりのコース (2019〜2024年の口コミ)。グルテンフリーの対応の記載なし。電話予約のときに確認を。',
    vegan_detail: 'ヴィーガン不可: 刺身やだし巻きの入るおまかせコース (2019〜2024年の口コミ)。',
    notes: '[日本料理のコース・東大路丸太町そばの聖護院、夫婦の小料理] 夫婦二人で営む町家の小さな店。伝統的な日本料理をベースにした月替わりのおまかせコースが5,500円から。美しい盛り付けと日本酒、カウンター5席で気軽な会話も。予約は電話、現金のみ。',
  });
}

// ================================================================ 斗々屋 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26036358/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://totoya-zerowaste.com/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_totoya_kyoto_honten', name: '斗々屋 京都本店 (Totoya)', category: 'OMNI',
    lat: 35.01954643705803, lng: 135.76955577934075, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a 2022 reviewer found vegan and gluten-free deli options and a gluten-free chocolate fudge; a rice-flour muffin was sold in March 2026. Deli items are self-served by weight, and wheat items such as scones, croquettes and menchi katsu are sold alongside (2025–2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a homemade vegan napa-cabbage and chive kimchi (June 2025), soy-meat nanban (March 2026), a vegan waffle plate (March 2023) and vegan deli items (March 2022); meat, egg and fish dishes are sold too (2023–2026 reviews).',
    hours_raw: 'Official site: shop 10:00–19:00; lunch 11:30–14:00; parfait 11:30–17:00; eat-in 11:30–18:00; closed Thursday plus one irregular day a month (announced on Instagram); hours may change, check Instagram. Breakfast events ("breakfasts from around the world") ended as a regular service at the end of July 2026 and are now held irregularly, booked by phone (September 2026). Tabelog: no reservations; cards, e-money and QR codes accepted; non-smoking. A one-drink order with lunch (April 2023). Bring your own containers for bulk goods and takeaway deli, or buy one there (2022–2025). A zero-waste organic supermarket with an eat-in area at the back, facing Kawaramachi-dori north of Marutamachi; 291 m from Keihan Jingu-Marutamachi.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi — 291 m from Jingu-Marutamachi',
    cuisine: 'Opened 31 July 2021 as what the company calls Japan\'s first zero-waste supermarket: organic groceries, deli and sweets sold by weight with no packaging, and an eat-in café at the back (official site; 2022–2026 reviews) · lunches: Toto Ya curry rice with fermented brown rice, salad and a drink ¥1,660 (June 2025); salad bowl and curry lunches (October 2025); a soup set ¥1,200 (April 2023) · deli by weight to eat in or take away, from 20 g (March 2022): Toto Ya\'s inari sushi, potato-nut croquette, menchi katsu, soy-meat nanban, Spanish omelette, namul, mushroom marinade, carrot shirishiri, beef-tendon cream stew, homemade vegan napa-cabbage and chive kimchi (June 2025; March 2026) · sweets: chocolate fudge ¥177 (June 2025), rice-flour fruit muffin (March 2026), savoury cake (November 2024), parfait (official site) · homemade sangria ¥728 (June 2025), enzyme smoothie (July 2026), natural wine (May 2022) · occasional "world breakfast" mornings: a Danish breakfast with lobster smørrebrød ¥1,800 (September 2026)',
    website: SITE, gmaps: gm('斗々屋 京都本店'), menu_url: null,
    notes: '[Café · Kawaramachi-Marutamachi, a zero-waste organic supermarket] A package-free organic grocery with an eat-in café at the back: organic curry and salad-bowl lunches, deli sold by weight (including vegan kimchi and soy-meat dishes), sweets and natural wine. Bring a container for takeaway. Lunch about ¥1,200–1,700 (2023–2025 reviews). Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); company: 株式会社斗々屋 (Totoya Inc.)'], origin: null,
      background: 'The shop is the Kyoto main shop of 株式会社斗々屋 (Totoya Inc.), founded 2005 and incorporated 2017, which imports, wholesales and retails organic food, wine and bulk-sale equipment and supplies bulk goods to over 100 shops (official site). The company\'s standards: organic farming, fair trade, zero waste, and no products from intensive livestock farming (official site). Reviewers praise attentive staff who explain the weighing system (June 2022) and friendly staff (September 2024; September 2026). Criticisms: a slow dish and a required drink order making lunch pricey (April 2023), dishes too sour for a child (March 2023), and a reviewer who felt the zero-waste ways were imposed on customers and found the staff poorly coordinated (January 2025).',
      philosophy: 'Official site: the mission is to propose the "things" and "experiences" for 「地球一個分の暮らし」 (living within the means of one Earth).',
      specialty: 'Organic deli by weight; curry and salad-bowl lunches; vegan deli items.',
      anecdotes: [
        { text: 'March 2022: "The prices are listed per 100g, but you can order from as little as 20g. I appreciate that there are vegan and gluten-free deli options available."', source: R + 'B447324410/' },
        { text: 'June 2025: "Toto Ya\'s Curry Rice - JPY 1660. This comes with a drink. … It was my first time trying fermented brown rice, and it had a unique texture."', source: R + 'B499900204/' },
        { text: 'September 2026: "They offer various menus themed around breakfasts from around the world. This time, it was vol.6 featuring a Danish breakfast."', source: R + 'B536280897/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社斗々屋、2021年7月31日に開いた日本初のゼロ・ウェイストなスーパーマーケット、乾物、液体、野菜、果物、豆腐、納豆、肉、惣菜などを量り売り、京都本店は上京区出水町252 大澤事務所本社ビル1F、10:00〜19:00、ランチ11:30〜14:00、パフェ11:30〜17:00、イートイン11:30〜18:00、木曜定休と月1回の不定休、最新情報はInstagram。会社は2005年創立、2017年設立、オーガニック食材・ワイン・量り売り什器・エコ雑貨の輸入・卸・小売、量り売り商品を全国100以上の店舗へ卸す、有機栽培・公正な取引・ごみゼロ・動物福祉。食べログ: 予約不可、カード・電子マネー・QR可、禁煙。口コミ (2022年3月〜2026年9月、英語): 奥にイートイン、量り売りの惣菜は20gから、ヴィーガンとグルテンフリーの惣菜 (2022年3月)、ヴィーガンのワッフルプレート (2023年3月)、カレーライス1,660円 (2025年6月)、サラダボウルとカレーのランチ (2025年10月)、いなり寿司、メンチカツ、大豆ミートの南蛮、自家製のヴィーガン白菜とニラのキムチ、米粉のマフィン、デンマークの朝ごはん1,800円 (2026年9月)、店員の対応がよいとの声と、押しつけがましい・連携が悪いとの声 (2025年1月)。',
      confidence: 'low', sources: [SITE, SITE + 'about-us/', SITE + 'kodawari/', SITE + 'our-business/', TB].concat(rv(R, ['B447324410', 'B451678995', 'B462697641', 'B464253293', 'B486544581', 'B486819347', 'B492233299', 'B495436750', 'B499646968', 'B499900204', 'B505372669', 'B508637760', 'B517233648', 'B531794492', 'B536280897'])) },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve deli by weight; staff explain the bulk-buying system (June 2022).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区出水町252 大澤事務所本社ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the Kyoto main shop; Tabelog reviews dated 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.019546, 135.769556); not pin-checked by the worker (integrator to check); nearest pin kyoto_shunsai_adachi 15.1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499900204/', R + 'B536280897/', R + 'B508637760/'],
    price_note: 'Prices from 2025–2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Toto Ya curry rice (with drink)', '¥1,660', 'Lunch', 'ask', 'ask', 'June 2025; fermented brown rice and salad.', 'curry_rice'),
      it('', '', 'Vegan napa-cabbage and chive kimchi (deli, by weight)', null, 'Deli', 'ask', 'vegan', 'June 2025; labelled homemade vegan.', 'vegan_kimchi'),
      it('', '', 'Soy-meat nanban (deli, by weight)', null, 'Deli', 'ask', 'ask', 'March 2026.', 'soy_meat_nanban'),
      it('', '', 'Chocolate fudge', '¥177', 'Sweets', 'ask', 'ask', 'June 2025.', 'chocolate_fudge'),
      it('', '', 'World breakfast (Danish, lobster smørrebrød)', '¥1,800', 'Breakfast', 'no', 'no', 'September 2026, tax included; irregular events, book by phone.', 'world_breakfast'),
    ] }, {
    cuisine: '2021年7月31日に開いた、会社のいう日本初のゼロ・ウェイストなスーパーマーケット。オーガニックの食材、惣菜、お菓子を包装なしの量り売りで、奥にイートインのカフェ (公式サイト、2022〜2026年の口コミ)・ランチ: 発酵玄米とサラダ、ドリンク付きの斗々屋のカレーライス1,660円 (2025年6月)、サラダボウルとカレーのランチ (2025年10月)、スープセット1,200円 (2023年4月)・量り売りの惣菜はイートインも持ち帰りも、20gから (2022年3月): 斗々屋のいなり寿司、じゃがいもとナッツのコロッケ、メンチカツ、大豆ミートの南蛮、スパニッシュオムレツ、ナムル、きのこのマリネ、にんじんしりしり、牛すじのクリームシチュー、自家製のヴィーガン白菜とニラのキムチ (2025年6月、2026年3月)・お菓子: チョコレートファッジ177円 (2025年6月)、米粉のフルーツマフィン (2026年3月)、ケークサレ (2024年11月)、パフェ (公式サイト)・自家製サングリア728円 (2025年6月)、酵素スムージー (2026年7月)、自然派ワイン (2022年5月)・ときどき「世界の朝ごはん」: オマールえびのスモーブローのデンマークの朝ごはん1,800円 (2026年9月)',
    neighborhood: '河原町丸太町。神宮丸太町から291m',
    gf_detail: '要確認: 2022年の口コミにヴィーガンとグルテンフリーの惣菜、グルテンフリーのチョコレートファッジ、2026年3月は米粉のマフィン。惣菜は量り売りのセルフで、スコーン、コロッケ、メンチカツなど小麦のものも並ぶ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン対応あり: 自家製のヴィーガン白菜とニラのキムチ (2025年6月)、大豆ミートの南蛮 (2026年3月)、ヴィーガンのワッフルプレート (2023年3月)、ヴィーガンの惣菜 (2022年3月)。肉、卵、魚の料理もある (2023〜2026年の口コミ)。',
    notes: '[カフェ・河原町丸太町、ゼロ・ウェイストのオーガニックスーパー] 包装なしのオーガニック食材の店で、奥にイートインのカフェ。オーガニックのカレーやサラダボウルのランチ、量り売りの惣菜 (ヴィーガンのキムチや大豆ミートも)、お菓子、自然派ワイン。持ち帰りには容器を持参。ランチは1,200〜1,700円ほど (2023〜2025年の口コミ)。木曜休み。',
  });
}

save();
