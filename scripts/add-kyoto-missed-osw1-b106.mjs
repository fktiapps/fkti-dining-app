// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 106.
//   + おかんの海鮮ちらし (weekend-lunch seafood chirashi counter on Oike-dori near Nijo Castle, run by a mother and daughter)
//   + しっぽり屋 (fish-minded izakaya on Oike-dori west of Kuromon, near Horikawa-Oike)
//   + 飯田屋 惣平 (izakaya in a basement by Kyoto Tower; a sign gives its founding as 1905)
//   + KUMARI NAGI (lunch-only Nepali curry room in the Kyoto Tower Building north annex)
//   - 京都つゆしゃぶCHIRIRI 本店, バーガーキング 京都ヨドバシ店, 炭火焼酒房 すいしん, ロピア 京都ヨドバシ店, 西尾八ツ橋の里,
//     都和旅館: skipped (reasons below).
//   Core and notable lists have nothing left in the lane; rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first,
//   lane ids: 26042738 (囲 四条大宮駅前店 — held for Greg, NOT drafted and NOT skipped), 26020754 (skipped), 26041832,
//   26038256 (skipped), 26024504 (skipped), 26036810 (skipped), 26028830 (京を味わう個室空間 うぐいす 京都駅前店 — NOT drafted
//   and NOT skipped: operator unresolved, see report), 26023340 (skipped), 26022326, 26006774, 26036762, 26009390 (skipped).
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name or address;
//   none is in another worker's pending script (only osw8-b106 pending; grepped).
//   Romaji rule (integrator 2026-11-26): Tabelog's English names ("okanno kaisen chirashi", "Shippori Ya", "Iidaya Sohei")
//   are machine romaji, not a source; no own site gives romaji, so those three names are kanji/kana only, with whole-string
//   name glosses. KUMARI NAGI is written so on the shop's own site (kumari-nagi.com, kana クマリ ナギ).
//   Operator checks: おかんの海鮮ちらし, しっぽり屋 — one shop each found. 飯田屋 惣平 — a January 2015 reviewer calls it a
//   relative of the nearby Iidaya inn; no other restaurant found. KUMARI NAGI — run with さいか亭, the Chinese izakaya on the
//   same building's other floors (Tabelog remarks; reviews), which Tabelog now marks closed; one shop.
//   Service charges: しっぽり屋 ¥300 appetizer (Tabelog); none for おかんの海鮮ちらし; none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (おかんの海鮮ちらし September
//   2025, 飯田屋 惣平 2012).
//   Halal: no operator in this batch claims halal certification.
//   JA text: no bare 祝 or 天. Names known only from English reviews (Eikun, Kenbishi, Yamamoto Honke, Saiin, Okuizumo) stay Latin.
//   Pins: Tabelog /en/ ld+json points; no OSM/GSI cross-check this round (integrator runs pincheck).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-106');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020754', '京都つゆしゃぶCHIRIRI 本店: same-concept branch of a brand already in data (京都つゆしゃぶCHIRIRI 四条烏丸 別邸, kyoto_tsuyushabu_chiriri_bettei)');
skip('26038256', 'バーガーキング 京都ヨドバシ店: chain — Burger King');
skip('26024504', '炭火焼酒房 すいしん: Tabelog invoice number T8130001022725 is 株式会社黛, which runs about 18 shops incl. 先斗町すいしん 本店 (kyoto_pontocho_suishin_honten, already in data; shop count from kyoto_kappa_zushi_pontocho) — same brand of a large local group already in data');
skip('26036810', 'ロピア 京都ヨドバシ店: chain — Lopia supermarket');
skip('26023340', '西尾八ツ橋の里: large parent — run by the yatsuhashi maker 本家西尾八ッ橋 (Tabelog website 8284.co.jp; invoice T4130002022455), about a dozen shops; same ruling as 26027207, 26027430, 26022363, 26007170');
skip('26009390', '都和旅館: no 2025–2026 reviews (3 reviews, newest visit April 2016; Tabelog checked 2026-11-26)');

// ================================================================ おかんの海鮮ちらし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041832/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_kaisen_chirashi_oike_nijojo', name: 'おかんの海鮮ちらし', category: 'OMNI',
    lat: 35.010799, lng: 135.749934, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood chirashi on vinegared rice with sweet-braised shiitake and shredded egg, served with a house-blended soy sauce; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is seafood bowls — chirashi, tuna bowls — served with miso soup (2024–2026 reviews).',
    hours_raw: 'Saturday and Sunday 11:30–14:30, until sold out; open on some public holidays — check by phone or Instagram (Tabelog). About 30 chirashi a day (September 2024; June 2026). Reservations by phone or Instagram DM (July 2025; June 2026); a booking is cancelled if the shop has not heard from you within 10 minutes (Tabelog). 10 counter seats (Tabelog); shoes off at the entrance (July 2026). Cards accepted; no e-money or QR payments; no service charge (Tabelog). No parking (Tabelog; July 2025). In the evening the space is a snack bar or lounge (July 2025; June 2026).',
    hours: { 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oike-dori by Nijo Castle — 3 min from Nijojo-mae station',
    cuisine: 'Seafood chirashi, ¥2,500 (July 2025 to June 2026): e.g. tuna, fatty tuna, yellowtail, sea bream, salmon, shrimp, squid and fish roe over vinegared rice with sweet-braised shiitake and shredded egg (2024–2026 reviews), with miso soup, pickled ginger and pickles (April 2026) · Toro-taku bowl ¥2,000 (July 2025) · a tuna bowl of red and medium-fatty tuna, 5 a day, ¥2,000 (July 2026) · a refill of sake-lees soup offered (February 2025) · ice cream or coffee to finish (September 2024; February 2025)',
    website: null, gmaps: gm('おかんの海鮮ちらし 京都 二条城'), menu_url: TB,
    notes: '[Seafood chirashi · Oike-dori by Nijo Castle, weekend lunch only] A ten-seat counter on Oike-dori near Nijo Castle that opens only for weekend lunch, serving about 30 seafood chirashi a day: thick slices of tuna, yellowtail, sea bream and more over house vinegared rice, made by the mother of the family. Book by phone or Instagram DM; it fills fast. A snack bar uses the room at night.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), the “okan” of the name'], origin: null,
      background: 'Reviewers say the owner ran a popular eatery in Saiin for 40 years before moving here, and that the name comes from regulars there calling the owner “Okasan” (mother) (September 2024); that the owner has bought at the Kyoto Central Wholesale Market for over 20 years (July 2025); and that the owner ran a sushi restaurant for many years (April 2026). The shop is run by three generations of women — mother, daughter and granddaughter (September 2024) — or a mother and daughter (April 2026). The September 2024 reviewer calls the vinegared-rice recipe a closely guarded secret and the soy sauce a house blend.',
      philosophy: null, specialty: 'Seafood chirashi.',
      anecdotes: [
        { text: 'A September 2025 diner arrived at opening and was the first in; the counter soon filled, and some groups were turned away.', source: R + 'B516532046/' },
        { text: 'On a rainy June 2026 day, with few diners, a reviewer found the bowl almost all fatty cuts, with just-picked cucumber and bamboo shoots on the side.', source: R + 'B530290726/' },
      ],
      japanese_sources_summary: '食べログ: おかんの海鮮ちらし、海鮮、中京区大文字町233-8、二条城前駅3番出口から徒歩3分、JR二条駅から徒歩10分、土・日 11:30〜14:30、祝日も営業することがある (電話かInstagramで確認)、売り切れ次第終了、カード可、電子マネー・QR決済不可、サービス料・チャージ料なし、カウンター10席、貸切は20名まで、駐車場なし、予約可 (10分連絡がなければキャンセル扱い)。口コミ (2024〜2026年、英語): 週末だけの営業で1日30食、御池通沿い、Saiinで40年人気の店をしていた店主が移ってきた、常連が店主を Okasan (母) と呼んだのが店名の由来、20年以上市場で仕入れる、長年寿司店をしていた、母・娘・孫の3代の女性で営む (2024年9月)、母と娘で営む (2026年4月)、海鮮ちらし2,500円、まぐろ、トロ、ぶり、鯛、サーモン、えび、いか、とびこ、甘く煮た椎茸と錦糸卵の酢飯、味噌汁、ガリ、漬物、トロたく丼2,000円、5食限定の鉄火丼2,000円、粕汁のおかわり、デザートはアイスかコーヒー、予約は電話かInstagramのDM、靴を脱いで上がるカウンター、夜はスナックやラウンジになる。',
      confidence: 'low', sources: [TB, R + 'B492279103/', R + 'B497011339/', R + 'B507089835/', R + 'B510824519/', R + 'B512008345/', R + 'B516532046/', R + 'B525991430/', R + 'B530290726/', R + 'B532091367/', R + 'B535056258/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; shoes off at the entrance, which one July 2026 reviewer thought made it less accessible for foreign visitors. Book by phone or Instagram DM.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区大文字町233-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated September 2024 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.0107993, 135.7499343); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510824519/', R + 'B525991430/', R + 'B530290726/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seafood chirashi, with miso soup', '¥2,500', 'Bowls', 'ask', 'no', 'July 2025 to June 2026; about 30 a day.', 'kaisen_chirashi'),
      it('', '', 'Toro-taku bowl', '¥2,000', 'Bowls', 'ask', 'no', 'July 2025.', 'torotaku_don'),
      it('', '', 'Tuna bowl (red and medium-fatty tuna)', '¥2,000', 'Bowls', 'ask', 'no', 'Limited to 5; July 2026.', 'tekka_don'),
    ] }, {
    cuisine: '海鮮ちらし2,500円 (2025年7月〜2026年6月): まぐろ、トロ、ぶり、鯛、サーモン、えび、いか、魚卵などを、甘く煮た椎茸と錦糸卵の酢飯に (2024〜2026年の口コミ)、味噌汁、ガリ、漬物付き (2026年4月)・トロたく丼2,000円 (2025年7月)・まぐろの赤身と中トロの鉄火丼、5食限定、2,000円 (2026年7月)・粕汁のおかわり (2025年2月)・食後にアイスかコーヒー (2024年9月、2025年2月)',
    neighborhood: '二条城そばの御池通。二条城前駅から徒歩3分',
    gf_detail: '要確認。甘く煮た椎茸と錦糸卵の酢飯に海鮮をのせたちらし、店独自の醤油。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。メニューは海鮮のちらしとまぐろの丼で、味噌汁付き (2024〜2026年の口コミ)。',
    notes: '[海鮮ちらし・二条城そばの御池通、週末の昼だけ] 二条城近くの御池通にあるカウンター10席の店。週末の昼だけ開き、1日およそ30食の海鮮ちらしを出す。厚切りのまぐろ、ぶり、鯛などを自家製の酢飯にのせ、作るのは一家の母親。予約は電話かInstagramのDMで、すぐ満席になる。夜はスナックとして使われる。',
  });
}

// ================================================================ しっぽり屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26022326/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_izakaya_oike_kuromon', name: 'しっぽり屋', category: 'OMNI',
    lat: 35.010841, lng: 135.749404, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled fish and seared bonito alongside tempura, gyoza, kara-age, yakisoba and soba; no gluten information (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cucumber and tofu dishes appear, but nothing is described as vegan; agedashi tofu comes in dashi, and most dishes are fish or meat (2025–2026 reviews).',
    hours_raw: 'Daily 17:30–24:00; closing days not fixed (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payments; the all-you-can-drink course is cash only (Tabelog). ¥300 appetizer per person (Tabelog). 25 seats: 8 at the counter, three tables of 4, and a second-floor loft used as a private room for 10–20; buyouts up to 20 (Tabelog). Smoking allowed (Tabelog). No parking (Tabelog). About 5 minutes from exit 3 of Nijojo-mae station (Tabelog). Often fully booked: book ahead (June 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-dori west of Kuromon — near Horikawa-Oike and Nijojo-mae',
    cuisine: 'Fish-minded izakaya (Tabelog) · thick-cut seared bonito with mustard (June and July 2025) · seared yellowtail (February 2023; November 2024) · sashimi, fish-head miso soup (October 2026) · grilled sanma, tempura of megochi (September 2024), of wakasagi (January 2026) · homemade karasumi (November 2025; August 2026), karasumi mochi (June 2025) · shirako with ponzu (November 2022; November 2025) · oden (November 2024) · dashimaki, gyoza, curry to finish (June 2025) · ginger gyoza, corn fritters, deep-fried hamo and sweet potato (August 2026) · squid-ink pasta (January 2026) · all-you-can-drink omakase course ¥5,000 (July 2025): e.g. pork trotters, grilled fish, chicken-wing kara-age, seared bonito, yakisoba, agedashi tofu, Yamagata fine zaru soba · Kyoto sake, incl. Eikun and a restaurant-only namagenshu from Yamamoto Honke in Fushimi (August 2026); Kenbishi on the all-you-can-drink course (October 2026); a bottle of Black Kirishima shochu ¥3,500 (June 2025)',
    website: null, gmaps: gm('しっぽり屋 京都 御池'), menu_url: TB,
    notes: '[Izakaya · Oike-dori near Horikawa-Oike, fish and Kyoto sake] A long, narrow, dim izakaya in a house near Horikawa-Oike, with a counter, a few tables and a loft for groups. The chef cooks alone: thick seared bonito, grilled fish, shirako with ponzu, homemade karasumi, with Kyoto sake to match; all-you-can-drink courses from ¥5,000. More for locals than tourists (August 2026). Often full: book.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly master and cute staff (February 2025); the chef handling all the cooking with one part-time staff member in the hall (July 2025); and karasumi made by the owner (November 2025; August 2026). Staff welcomed a group warmly late at night (November 2022).',
      philosophy: null, specialty: 'Fish; homemade karasumi.',
      anecdotes: [
        { text: 'A June 2025 group that had been turned away as a walk-in came back with a booking for four; when the group left, the place was full again.', source: R + 'B509622117/' },
        { text: 'In November 2022 the appetizer of stuffed green peppers so pleased one diner that the diner began making it at home.', source: R + 'B493589566/' },
      ],
      japanese_sources_summary: '食べログ: しっぽり屋、居酒屋、中京区御池通黒門西入俵屋町190-1、二条城前駅3番出口から徒歩5分、毎日 17:30〜24:00、不定休、カード可 (VISA、Master、JCB、AMEX、Diners)、電子マネー・QR決済不可、飲み放題のコースは現金のみ、つきだし一人300円、25席 (カウンター8、4人掛けテーブル3)、2階のロフトは10〜20名の個室、貸切20名まで、喫煙可、駐車場なし。口コミ (2022〜2026年、英語): 京都らしい奥に長い店、カウンターとテーブル、少し暗め、親しみやすいマスター、調理は料理人一人とホールにアルバイト一人、厚切りのかつおのたたきにからし、ぶりのたたき、刺身、さんまの塩焼き、めごちやわかさぎの天ぷら、自家製のからすみ、からすみ餅、白子ポン酢、おでん、だし巻き、餃子、生姜餃子、締めのカレー、イカ墨パスタ、飲み放題のおまかせコース5,000円 (豚足、焼き魚の盛り合わせ、手羽先の唐揚げ、かつおのたたき、焼きそば、揚げ出し豆腐、Yamagata の細いざるそば)、京都の日本酒、Fushimiの Yamamoto Honke の飲食店限定の生原酒、観光客より地元の客向け、予約が多い。',
      confidence: 'low', sources: [TB, R + 'B461115712/', R + 'B493568473/', R + 'B493589566/', R + 'B495023905/', R + 'B501827321/', R + 'B509448705/', R + 'B509622117/', R + 'B509902140/', R + 'B521527571/', R + 'B523329095/', R + 'B533785628/', R + 'B538001559/'] },
    cultural_comfort: { level: 'japanese', note: 'Neighbourhood izakaya that caters more to locals than tourists (August 2026); phone bookings may be in Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池通黒門西入俵屋町190-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated November 2022 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.0108415, 135.7494038); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B509622117/', R + 'B509902140/'],
    price_note: 'Few prices in reviews; ¥300 appetizer per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink omakase course', '¥5,000', 'Courses', 'no', 'no', 'July 2025; cash only (Tabelog).', 'nomihodai_course'),
      it('', '', 'Seared bonito, thick-cut, with mustard', '', 'Fish', 'ask', 'no', 'June and July 2025.', 'katsuo_tataki'),
      it('', '', 'Homemade karasumi', '', 'Small plates', 'ask', 'no', 'November 2025; August 2026.', 'karasumi'),
      it('', '', 'Shirako with ponzu', '', 'Fish', 'ask', 'no', 'November 2022; November 2025.', 'shirako'),
      it('', '', 'Dashimaki', '', 'Small plates', 'ask', 'no', 'June 2025; August 2026.', 'dashimaki'),
      it('', '', 'Black Kirishima shochu, bottle', '¥3,500', 'Drinks', 'ask', 'ask', 'June 2025.', 'kirishima_bottle'),
    ] }, {
    cuisine: '魚に力を入れた居酒屋 (食べログ)・厚切りのかつおのたたき、からし添え (2025年6・7月)・ぶりのたたき (2023年2月、2024年11月)・刺身、魚の頭の味噌汁 (2026年10月)・さんまの塩焼き、めごちの天ぷら (2024年9月)、わかさぎの天ぷら (2026年1月)・自家製のからすみ (2025年11月、2026年8月)、からすみ餅 (2025年6月)・白子ポン酢 (2022年11月、2025年11月)・おでん (2024年11月)・だし巻き、餃子、締めのカレー (2025年6月)・生姜餃子、とうもろこしの揚げ物、鱧とさつまいもの揚げ物 (2026年8月)・イカ墨パスタ (2026年1月)・飲み放題付きおまかせコース5,000円 (2025年7月): 豚足、焼き魚の盛り合わせ、手羽先の唐揚げ、かつおのたたき、焼きそば、揚げ出し豆腐、Yamagata の細いざるそばなど・京都の日本酒、Eikun や Fushimi の Yamamoto Honke の飲食店限定の生原酒 (2026年8月)、飲み放題で Kenbishi (2026年10月)、Black Kirishima のボトル3,500円 (2025年6月)',
    neighborhood: '御池通、黒門の西。堀川御池と二条城前駅の近く',
    gf_detail: '要確認。刺身、焼き魚、かつおのたたきのほか、天ぷら、餃子、唐揚げ、焼きそば、そばもある。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。きゅうりや豆腐の料理はあるが、ヴィーガンと書かれた品はない。揚げ出し豆腐はだしを使い、ほとんどが魚か肉の料理 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・堀川御池近くの御池通、魚と京都の日本酒] 堀川御池近くの、奥に長く少し暗い一軒家の居酒屋。カウンター、テーブル数卓、グループ向けのロフト。料理は料理人が一人で作る。厚切りのかつおのたたき、焼き魚、白子ポン酢、自家製のからすみに京都の日本酒。飲み放題付きコースは5,000円から。観光客より地元の客向け (2026年8月)。満席が多く、予約がよい。',
  });
}

// ================================================================ 飯田屋 惣平
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26006774/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_izakaya_kyoto_tower_since1905', name: '飯田屋 惣平', category: 'OMNI',
    lat: 34.987439, lng: 135.760114, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, dashimaki, yakitori and grilled fin alongside okonomiyaki, kushiage and yakisoba; no gluten information (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Edamame and salads appear, but nothing is described as vegan; most dishes are fish or meat (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:00–23:00; closed Sunday (Tabelog, which says hours may change). A March 2025 reviewer says it is open until 22:30. Lunch set meals were served in 2011–2016 reviews; Tabelog now lists evenings only. Cards (JCB, AMEX, Diners); no e-money or QR payments (Tabelog). Non-smoking (Tabelog; 2012 and 2017 reviewers met smoking at lunch). No parking (Tabelog). In the basement of the 飯田ビル, about 270 m from Kyoto Station, near Kyoto Tower (Tabelog; reviews); the building was new and the shop modern after a 2014 renovation (January 2015; September 2016).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'In front of Kyoto Station — by Kyoto Tower',
    cuisine: 'Izakaya (Tabelog) · edamame, okonomiyaki, duck breast, a kushiage set, pork kimchi, grilled stingray fin (March 2026) · salad, sashimi, assorted skewers, dashimaki, beef tongue, red wine (April 2025) · pilaf (March 2025) · assorted sashimi, hamo tempura, tofu salad, tonpei-yaki, assorted yakitori, baked camembert, yakisoba (June 2023) · Sohei dashimaki ¥580, wasabi kombu ¥450, two go of hot sake ¥750 (October 2018) · 惣平鍋, a chanko-style hot pot bound with egg; dried squid (January 2015)',
    website: null, gmaps: gm('飯田屋 惣平 京都駅'), menu_url: TB,
    notes: '[Izakaya · Kyoto Station front by Kyoto Tower, old name, modern room] A basement izakaya a few minutes from Kyoto Station, under a sign giving its founding as 1905, rebuilt as a modern, calm room in 2014: sashimi, dashimaki, yakitori, okonomiyaki and kushiage at prices reviewers call reasonable for the location. Handy before a train. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers read the founding year 1905 on the shop sign (September 2011; September 2016). A January 2015 reviewer calls the shop a relative of the nearby Iidaya inn, renovated into a modern izakaya in 2014; a September 2016 reviewer found it in the basement of a new building on the old site. Earlier reviewers describe a station-front lunch diner with daily set meals and friendly service (2011–2012).',
      philosophy: null, specialty: 'Izakaya dishes; dashimaki.',
      anecdotes: [
        { text: 'A March 2025 diner worked out that drinking until last call still left time for the 23:08 train toward Himeji.', source: R + 'B502957605/' },
        { text: 'In March 2026 a group stopped in on the way back from a crab trip to Miyazu and found the prices reasonable for a spot so close to the station.', source: R + 'B523710073/' },
      ],
      japanese_sources_summary: '食べログ: 飯田屋 惣平、居酒屋、下京区塩小路通烏丸東入ル東塩小路町717-3 飯田ビル B1F、京都駅から267m、月〜土 17:00〜23:00、日曜定休、カード可 (JCB、AMEX、Diners)、電子マネー・QR決済不可、禁煙、駐車場なし、予約可。口コミ (2011〜2026年、英語): 看板に創業1905年、近くの旅館 (Iidaya Inn) の縁の店、2014年に改装してモダンな居酒屋に、新しいビルの地下1階、以前は京都駅前の昼の定食屋 (日替わり定食、焼きそば定食)、惣平鍋 (ちゃんこ風卵とじ鍋)、イカ素干し、だし巻き (Sohei dashimaki) 580円、わさび昆布450円、熱燗2合750円 (2018年10月)、刺身の盛り合わせ、鱧の天ぷら、豆腐サラダ、とんぺい焼き、焼き鳥の盛り合わせ、カマンベールのオーブン焼き、焼きそば (2023年6月)、サラダ、刺身、串の盛り合わせ、だし巻き、牛タン、赤ワイン (2025年4月)、22時30分まで (2025年3月)、枝豆、お好み焼き、鴨むね、串揚げの盛り合わせ、豚キムチ、エイヒレ (2026年3月)、駅前なのに手ごろな値段。',
      confidence: 'low', sources: [TB, R + 'B113596685/', R + 'B111763292/', R + 'B14344697/', R + 'B217732996/', R + 'B391079006/', R + 'B454845074/', R + 'B502957605/', R + 'B523710073/'] },
    cultural_comfort: { level: 'japanese', note: 'Station-front izakaya; phone bookings may be in Japanese only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区塩小路通烏丸東入ル東塩小路町717-3 飯田ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing checked 2026-11-26 (no closure badge); reviews dated 2011 to March 2026, two in 2025–2026.' },
    pin_source: `Tabelog ${TB} (34.9874392, 135.7601136); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B391079006/', R + 'B523710073/'],
    price_note: 'Only old prices in reviews (October 2018); 2025–2026 reviews give dishes without prices.', last_checked: TODAY, items: [
      it('', '', 'Sohei dashimaki', '¥580', 'Small plates', 'ask', 'no', 'October 2018.', 'dashimaki'),
      it('', '', 'Wasabi kombu', '¥450', 'Small plates', 'ask', 'ask', 'October 2018.', 'wasabi_kombu'),
      it('', '', 'Hot sake, two go', '¥750', 'Drinks', 'ask', 'ask', 'October 2018.', 'atsukan'),
      it('', '', 'Kushiage set', '', 'Fried', 'no', 'no', 'March 2026.', 'kushiage'),
      it('', '', 'Grilled stingray fin', '', 'Small plates', 'ask', 'no', 'March 2026.', 'eihire'),
      it('', '', 'Okonomiyaki', '', 'Teppan', 'no', 'no', 'March 2026.', 'okonomiyaki'),
    ] }, {
    cuisine: '居酒屋 (食べログ)・枝豆、お好み焼き、鴨むね、串揚げの盛り合わせ、豚キムチ、エイヒレ (2026年3月)・サラダ、刺身、串の盛り合わせ、だし巻き、牛タン、赤ワイン (2025年4月)・ピラフ (2025年3月)・刺身の盛り合わせ、鱧の天ぷら、豆腐サラダ、とんぺい焼き、焼き鳥の盛り合わせ、カマンベールのオーブン焼き、焼きそば (2023年6月)・だし巻き (Sohei dashimaki) 580円、わさび昆布450円、熱燗2合750円 (2018年10月)・惣平鍋 (ちゃんこ風卵とじ鍋)、イカ素干し (2015年1月)',
    neighborhood: '京都駅前、京都タワーのそば',
    gf_detail: '要確認。刺身、だし巻き、焼き鳥、エイヒレのほか、お好み焼き、串揚げ、焼きそばもある。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: '要確認。枝豆やサラダはあるが、ヴィーガンと書かれた品はない。ほとんどが魚か肉の料理 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・京都タワーそばの京都駅前、古い屋号とモダンな店内] 京都駅から数分の地下の居酒屋。看板には創業1905年とあり、2014年にモダンで落ち着いた店に改装。刺身、だし巻き、焼き鳥、お好み焼き、串揚げなど、駅前にしては手ごろな値段との口コミ。電車の前に便利。日曜定休。',
  });
}

// ================================================================ KUMARI NAGI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26036762/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.kumari-nagi.com/';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_nepali_curry_kyoto_tower_annex', name: 'KUMARI NAGI', category: 'OMNI',
    lat: 34.98779, lng: 135.759142, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curry with rice, most topped with fried chicken; no gluten information (own site; 2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An eggplant and bean curry was on the menu (June 2024), but nothing is described as vegan; butter chicken and pork curries are the mainstays.',
    hours_raw: 'Daily 11:30–15:00, open year-round (own site; Tabelog). Takeaway; phone ahead for a smoother pickup; also on Uber Eats (own site). Cards and e-money accepted (Tabelog; own site). Non-smoking (Tabelog). No parking (Tabelog). On the 2nd floor of the Kyoto Tower Building north annex; up the stairs or lift by the door next to Ito Ken on the ground floor (June 2024). About 40 seats (June 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station front — Kyoto Tower Building north annex',
    cuisine: 'Nepali curry, rich and spicy with many spices, of pork and chicken; spice in three levels; lassi with a curry +¥100 (own site) · butter chicken curry ¥1,080 tax incl. (February 2026; ¥800 in November 2021, ¥980 in April 2023), topped with fried chicken · mapo pork and butter chicken combination ¥1,300 (February 2024; November 2025; ¥1,200 in April 2023) · eggplant and bean curry ¥1,080 (June 2024) · extra rice ¥50 (April 2023) · ramen, braised-pork rice and dumplings from the Chinese menu (November 2024; February 2026)',
    website: WEB, gmaps: gm('KUMARI NAGI 京都タワービル'), menu_url: WEB,
    notes: '[Nepali curry · Kyoto Station front, lunch only] A lunch-only Nepali curry room upstairs in the Kyoto Tower Building north annex: butter chicken and mapo-pork curries, often as a two-curry combination topped with crisp fried chicken, at three spice levels — reviewers warn even the milder levels run hot. Usually has free seats when the station is packed. Run with the Chinese restaurant downstairs, whose dishes are also served.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog notes that the menu of the creative kitchen さいか亭 is also served; reviewers describe the curry room as run by the Chinese restaurant on the floor below (November 2021; November 2024), with ramen, braised-pork rice and dumplings on offer. Tabelog now marks さいか亭 closed; a February 2026 reviewer says the ground floor is a ramen shop under the same management. Opinions differ: one reviewer calls it authentic Nepali curry (February 2024); others found the butter chicken mild (November 2024) or the heat just chilli (February 2026). A September 2025 diner remembers the waitress’s cheerful thank-you.',
      philosophy: null, specialty: 'Mapo pork and butter chicken combination curry.',
      anecdotes: [
        { text: 'A June 2024 diner ordered the eggplant and bean curry “a little spicy” and found it a real kick; next time, the regular level.', source: R + 'B486979723/' },
        { text: 'In February 2024 a diner, turned away by lines everywhere in Kyoto Station, followed the sign upstairs and took the combination at extra-hot with a draft beer.', source: R + 'B480357162/' },
      ],
      japanese_sources_summary: '公式サイト: KUMARI NAGI (クマリ ナギ)、京都駅前の本格ネパールカレーの店、下京区東塩小路町721-1 京都タワービル北新館2F、11:30〜15:00、年中無休、カード各種可、いろいろなスパイスのコクと辛さのカレー、豚肉と鶏肉、辛さは3段階、カレーに+100円でラッシー、店内でドリンクも、持ち帰りは電話しておくとスムーズ、Uber Eatsもある。食べログ: ネパール料理・インド料理・インドカレー、毎日 11:30〜15:00、カード・電子マネー可、禁煙、駐車場なし、さいか亭 (saika-tei.com) のメニューも店内で注文できる。口コミ (2021〜2026年、英語): 下の階の中華の店が営む、ラーメンや豚肉の煮込みご飯、餃子もある、バターチキンカレー800円 (2021年11月)、980円 (2023年4月)、1,080円 (2026年2月)、唐揚げとスプラウトのせ、麻婆ポークとバターチキンのあいがけ1,200円 (2023年4月)、1,300円 (2024年2月、2025年11月)、なすと豆のカレー1,080円、ご飯の追加50円、ラッシー100円、少し辛いでもかなり辛い、約40席、昼は空いていることが多い。',
      confidence: 'low', sources: [WEB, TB, R + 'B443241128/', R + 'B462928973/', R + 'B464459096/', R + 'B480357162/', R + 'B486979723/', R + 'B494725082/', R + 'B495104086/', R + 'B513374025/', R + 'B517625519/', R + 'B522241115/', R + 'B524338089/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual lunch room; spice level chosen when ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町721-1 京都タワービル北新館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing checked 2026-11-26 (no closure badge); reviews dated November 2021 to February 2026. The sister izakaya さいか亭 is marked closed on Tabelog.' },
    pin_source: `Tabelog ${TB} (34.9877902, 135.7591418); not cross-checked this round; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB, R + 'B517625519/', R + 'B522241115/'],
    price_note: 'Prices from 2024–2026 reviews; lassi add-on from the own site.', last_checked: TODAY, items: [
      it('', '', 'Butter chicken curry', '¥1,080', 'Curry', 'ask', 'no', 'February 2026, tax incl.; topped with fried chicken.', 'butter_chicken'),
      it('', '', 'Mapo pork and butter chicken combination curry', '¥1,300', 'Curry', 'ask', 'no', 'February 2024; November 2025.', 'combo_curry'),
      it('', '', 'Eggplant and bean curry', '¥1,080', 'Curry', 'ask', 'ask', 'June 2024.', 'eggplant_bean'),
      it('', '', 'Lassi with a curry', '+¥100', 'Drinks', 'ask', 'no', 'Own site; November 2025.', 'lassi'),
    ] }, {
    cuisine: 'いろいろなスパイスのコクと辛さのネパールカレー、豚肉と鶏肉、辛さは3段階、カレーに+100円でラッシー (公式サイト)・バターチキンカレー1,080円税込 (2026年2月、2021年11月は800円、2023年4月は980円)、唐揚げのせ・麻婆ポークとバターチキンのあいがけ1,300円 (2024年2月、2025年11月、2023年4月は1,200円)・なすと豆のカレー1,080円 (2024年6月)・ご飯の追加50円 (2023年4月)・中華のメニューからラーメン、豚肉の煮込みご飯、餃子 (2024年11月、2026年2月)',
    neighborhood: '京都駅前、京都タワービル北新館',
    gf_detail: '要確認。カレーとご飯で、多くは唐揚げのせ。グルテンの情報はない (公式サイト、2023〜2026年の口コミ)。',
    vegan_detail: '要確認。なすと豆のカレーがあった (2024年6月) が、ヴィーガンと書かれた品はない。中心はバターチキンと豚肉のカレー。',
    notes: '[ネパールカレー・京都駅前、昼のみ] 京都タワービル北新館の2階にある、昼だけのネパールカレーの店。バターチキンや麻婆ポークのカレーを、よく2種のあいがけで、カリッとした唐揚げをのせて出す。辛さは3段階で、控えめな段階でもかなり辛いとの口コミ。駅が混んでいても空席があることが多い。下の階の中華の店が営み、その料理も頼める。',
  });
}

save();
