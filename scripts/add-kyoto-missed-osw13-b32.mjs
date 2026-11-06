// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 32.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    - ミカサデコ＆カフェ キョウト 26031174 skipped: a branch of a brand already in data (Osaka)
//            + 河道屋銀華 Kawamichiya Ginka (Pontocho soba, branched from 総本家河道屋 in 1902; open to midnight)
//            + 壹錢洋食 本店 Issen Yoshoku (Gion's one-dish okonomiyaki forerunner; open late)
//   notable: + 吉田山せせり Yoshida Yama Seseri (8-seat yakitori counter behind Kyoto Station; Yakitori WEST 100)
//            + 西京焼き 京都やま六 Kyoto Yamaroku (Saikyo-yaki set meals in JR Kyoto Isetan B1F; Diner 100 2026)
//   None of the four added is in data/kyoto.json: grep by name (河道屋/銀華/Kawamichiya — the one "Kawamichi" hit is
//   祇園 河道, a different shop — 壹錢/壱銭/Issen, せせり/Seseri — hits are dish words in other records — やま六/Yamaroku)
//   and address (下樵木町192-3, 祇園町北側238, 東九条室町31, JR京都伊勢丹 B1F) found none. Tabelog URLs copied from each
//   listing.txt line 1. No page asks diners not to post on gourmet sites; Issen Yoshoku's footer is a standard
//   copyright notice (無断使用・転載等はお断り), which the brief says is not a posting ban.
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031174', 'ミカサデコ＆カフェ キョウト (Micasadeco & Cafe Kyoto): a same-concept branch of a brand already in data (osaka_micasadeco_cafe_namba, name "Micasadeco&Cafe"); Tabelog calls Kyoto its third location after Osaka Namba and Tokyo Jingumae');

// ================================================================ 河道屋銀華
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000214/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ginka.biz/wordpress/'; const ABOUT = SITE + 'kaisya/'; const SHOP = SITE + 'po/';
  const H = day(['11:30', '24:00']);
  put({
    id: 'kyoto_kawamichiya_ginka', name: '河道屋銀華 (Kawamichiya Ginka)', category: 'OMNI',
    lat: 35.006641, lng: 135.770904, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soba served in a soy-and-bonito broth (a strong bonito dashi, September 2026), with tempura and thick-sauce bowls on the menu; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is a strong bonito dashi (September 2026), and the menu centres on herring, duck, chicken and tempura soba.',
    hours_raw: 'Official site and Tabelog: 11:30–24:00 (last order 23:30), closed Wednesday; the official Pontocho page also says the shop opens from 17:00 to suit the evening street, and an October 2026 diner noted it now closes around midnight rather than later. No reservations (Tabelog). Prices revised from November 2025 (official site). Cards (JCB, AMEX, Diners) with a 5% charge, and QR payments (Tabelog). 20 seats; smoking allowed (Tabelog). A little west of Pontocho Park, midway along Pontocho (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, just west of Pontocho Park — 5 min walk from Sanjo Stn',
    cuisine: 'Old Kyoto soba house open to midnight, a favourite last stop after drinks (official site; reviews) · nishin (herring) soba and a herring set meal ¥1,980 (January 2026), kake soba ¥880 (September 2026), tempura soba with two shrimp ¥2,000 (October 2026), duck nanban with Kujo leek, tori-nanba, tanuki, oroshi soba with grated daikon in a thick sauce, spicy-daikon soba, tororo zaru, itawasa · soba-yu after the noodles · sake by the 180 ml (2025–2026 reviews)',
    website: SITE, gmaps: gm('河道屋銀華 先斗町'), menu_url: SHOP,
    notes: "[Soba · Pontocho, since 1902, open till midnight] An old-fashioned soba shop just off Pontocho Park, one of three houses that branched from 総本家河道屋 in 1902: herring soba, duck nanban with Kujo leek, tempura soba and grated-daikon soba in a rich bonito broth, with green onions served on the side. Kake soba ¥880, tempura soba ¥2,000 (2026). Run by father and son, per a September 2026 diner. 11:30–24:00, closed Wednesday; no bookings; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Family owners (unnamed): the current head and a son, per a September 2026 review'], origin: null,
      background: 'Per the official site (2017 page): Kawamichiya Ginka branched from 総本家河道屋 in 1902 (Meiji 35); the head house had three daughters, who married craftsmen trained at Kawamichiya and were given the house names 金華, 銀華 and 銅華 to branch out. Ginka first ran a soba shop at Kiyamachi-Sanjo; in the second generation it closed during the Pacific War, and the third generation reopened it at the present site on Pontocho. A September 2026 diner understood the current owner to be the fourth generation, with a son working alongside, and noted green onions served on a separate plate, appreciated by overseas guests; a February 2026 diner described a quite elderly owner.',
      philosophy: 'Per the official site: aiming for a taste found only in this shop, unchanged since the founding.',
      specialty: 'Nishin soba; duck nanban; tempura soba.',
      anecdotes: [
        { text: 'A September 2026 diner on a ninth dinner of the day overheard the son chatting with the father over a staff meal, and found the bonito dashi "incredibly rich".', source: R + 'B535574543/' },
        { text: 'A January 2026 diner liked the broth but found the portion of noodles "way too small", at a tourist price.', source: R + 'B520595738/' },
        { text: 'A March 2026 diner from the Kanto region found the dashi lacking and the famous herring less impressive than hoped.', source: R + 'B525279433/' },
      ],
      japanese_sources_summary: '公式サイト (ginka.biz): 京都、先斗町のそば処 河道屋銀華、創業明治35年、今も変わらぬ味、この店でしか味わえない味を目指す、2025年11月から価格改定、中京区下樵木町192-3、11:30〜24:00 (23:30 ラストオーダー)、水曜定休、先斗町公園から少し西に入った場所、午後五時からの営業 (先斗町本店のページ)、北大路ビブレ店にランチの定食 (サイトの説明文)。河道屋銀華とは (2017年): 1902年 (明治35年) に「総本家河道屋」より分家、本家の3人の娘さんが河道屋で修行した職人を婿養子にし、長女は「金華」、次女は「銀華」、三女は「銅華」の屋号で分家、創業当時は木屋町三条、二代目の時代に太平洋戦争の影響で休業、三代目が先斗町で再開。食べログ: そば、予約不可、カード (JCB、AMEX、Diners)・QR 可、カードは5%の手数料、20席、喫煙可。口コミ (2025年12月〜2026年10月、英語): にしん定食1,980円、かけそば880円、天ぷらそば2,000円、鴨なんば、鳥なんば、とろろざる、からみ大根そば、そば湯、四代目と息子さん、ネギは別皿。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, SHOP, R + 'B520595738/', R + 'B521308921/', R + 'B521728638/', R + 'B522162269/', R + 'B525279433/', R + 'B525996960/', R + 'B526892846/', R + 'B535574543/', R + 'B537234202/', R + 'B538682752/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A simple soba menu; green onions come on a separate plate, appreciated by overseas guests (September 2026); no bookings.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区下樵木町192-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (price notice October 2025) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006641, 135.770904); cross-checked: GSI 京都府京都市中京区下樵木町192番地 (lot) 36m; mp_teppan_mitsuki is 7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521728638/', R + 'B535574543/', R + 'B537234202/'],
    price_note: 'No menu text published; prices from 2026 reviews (prices were revised in November 2025).', last_checked: TODAY, items: [
      it('', '', 'Kake soba', '¥880', 'Soba', 'no', 'no', 'September 2026.', 'kake_soba'),
      it('', '', 'Herring (nishin) set meal', '¥1,980', 'Sets', 'no', 'no', 'January 2026.', 'nishin_set'),
      it('', '', 'Tempura soba (two shrimp)', '¥2,000', 'Soba', 'no', 'no', 'October 2026.', 'tempura_soba'),
    ] }, {
    cuisine: '深夜0時まで開いている京都の古いそば屋、飲んだ後の締めにも (公式サイト、口コミ)・にしんそば、にしん定食1,980円 (2026年1月)、かけそば880円 (2026年9月)、海老2尾の天ぷらそば2,000円 (2026年10月)、九条ネギの鴨なんば、鳥なんば、たぬき、とろみのあるあんのおろしそば、からみ大根そば、とろろざる、板わさ・食後にそば湯・日本酒は1合で (2025〜2026年の口コミ)',
    neighborhood: '先斗町、先斗町公園の少し西。三条駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではない: 醤油と鰹のつゆのそば (鰹のだしが濃い、2026年9月) で、天ぷらやあんかけもある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: つゆは鰹のだしが濃く (2026年9月)、にしん、鴨、鶏、天ぷらのそばが中心。',
    notes: '[そば・先斗町、明治35年から、深夜0時まで] 先斗町公園のそばの昔ながらのそば屋。1902年に総本家河道屋から分家した3軒のひとつ。にしんそば、九条ネギの鴨なんば、天ぷらそば、大根おろしのそばを濃い鰹のだしで。ネギは別皿。かけそば880円、天ぷらそば2,000円 (2026年)。2026年9月の客によれば父と息子の店。11時半〜24時、水曜休み、予約不可、喫煙可。',
  });
}

// ================================================================ 壹錢洋食 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001384/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://issen-yosyoku.co.jp/'; const ABOUT = SITE + 'aboutissen/'; const LOC = SITE + 'location/'; const MENU = SITE + 'menu/';
  const WD = day(['11:00', '25:00']); const SAT = day(['11:00', '27:00']); const SUN = day(['10:30', '22:00']);
  put({
    id: 'kyoto_issen_yoshoku_honten', name: '壹錢洋食 本店 (Issen Yoshoku Honten)', category: 'OMNI',
    lat: 35.004025, lng: 135.773197, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the one dish is a wheat-flour batter mixed with dashi, cooked with tenkasu (tempura bits) and finished with sauce (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the batter is made with dashi and topped with bonito flakes, eggs, chikuwa and domestic wagyu (official site). Tabelog’s "vegetarian options" tag is not borne out by the official recipe.',
    hours_raw: 'Official site: Gion honten open every day — weekdays 11:00–1:00, Saturdays and days before holidays 11:00–3:00, Sundays and holidays 10:30–22:00; Tabelog gives Friday and Saturday to 3:00. No reservations (Tabelog). One main dish only, the Issen Yoshoku, ¥950 with a choice of sweet, normal (sweet-and-spicy) or spicy sauce (official menu). 100 seats; non-smoking; children welcome (Tabelog). Cards and PayPay (Tabelog). Takeaway, a counter in Takashimaya Kyoto B1F, and mail order (official site). At the corner of Shijo and Nawate, beside the police box; 1 min from Keihan Gion-Shijo Stn exit 7 (official site; Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT, 6: SUN }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Nawate, the gateway to Gion — 1 min walk from Gion-Shijo Stn',
    cuisine: 'Gion’s one-dish shop for issen yoshoku, the folded flour-pancake ancestor of okonomiyaki (official site) · Issen Yoshoku ¥950: dashi batter spread thin, bonito flakes, Kujo leek, two eggs, tenkasu, pickled ginger, seasoned konnyaku, sliced chikuwa and domestic wagyu, folded and sauced — normal (spicy inside, sweet outside), sweet or spicy; shredded nori instead of aonori (official site) · draft Premium Malt’s ¥800, highballs from ¥600, Denki Bran ¥600, sake ¥800–1,000, hiyashi-ame and ramune at the honten only (official menu) · matcha anmitsu jelly to take away ¥800',
    website: SITE, gmaps: gm('壹錢洋食 本店 祇園'), menu_url: MENU,
    notes: "[Issen yoshoku · Shijo-Nawate, Gion's late-night snack] The 100-seat Gion shop that revived issen yoshoku, the pre-war flour snack seen as okonomiyaki's ancestor: a thin dashi batter folded over Kujo leek, egg, konnyaku, chikuwa and wagyu, sauced sweet, normal or spicy — the only dish, ¥950. Inside, tongue-in-cheek risqué ema, figures and kimono-clad mannequins at the tables play on the old pleasure quarter. Open daily from 11:00 to 1:00 (3:00 on Saturdays and days before holidays); a counter in Takashimaya and mail order too.",
    chef_bio: { chef_name: null, roles: ['株式会社壹錢洋食 (founding president 木下辰雄, per the official site)'], origin: null,
      background: 'Per the official site: issen yoshoku faded in the late Showa era as modern okonomiyaki took over; the company’s first president, 木下辰雄, set out to revive it and make it better, choosing Kujo leek, egg and domestic wagyu, working on the seasoned konnyaku, dashi and sauce, and using shredded nori so that it would not cling to the teeth. It was first sold in a small shop by the Shirakawa in Gion, popular with maiko, geiko and entertainers, then moved to the larger shop at Shijo-Nawate, where the playful decor — saucy ema and figures satirising love in the pleasure quarter — became a sight in itself; mail order on Rakuten from April 2011. The site lists two shops today, the Gion honten and Takashimaya Kyoto, and sales at Mitsui Outlet Park Shiga Ryuo. Okonomiyaki "Tabelog 100" 2018.',
      philosophy: 'Per the official site: "that nostalgic taste once more — and even better."',
      specialty: 'Issen Yoshoku (one dish only).',
      anecdotes: [
        { text: '"Interestingly, I was seated at the same table as a mannequin." — October 2026; the price is now ¥950.', source: R + 'B438274336/' },
        { text: 'An August 2026 diner remembered it at ¥600–700 and found ¥950 steep for a dish that was once a cheap snack.', source: R + 'B534092814/' },
        { text: '"We will prepare the Issen for you," without any hesitation — there is only one dish (October 2026).', source: R + 'B538342609/' },
      ],
      japanese_sources_summary: '公式サイト (issen-yosyoku.co.jp): 京都祗園名物「壹錢洋食」、お好み焼きのルーツとなった粉もの焼きの元祖、初代社長の木下辰雄が九条ネギ・卵・国産和牛を吟味し、こんにゃくの味付け、出汁、ソース、焼き方を試行錯誤、京風の上品さ、青海苔ではなく刻み海苔、祇園の白川沿いの小さな店から四条通縄手の大きな店へ、舞妓さん芸妓さん芸能人も、色街の洒落をきかせた店内 (お色気あふれる絵馬や招ね金さん)、2011年4月から楽天で通販、作り方: お出汁で溶いた小麦粉、かつおぶし、九条ネギ、玉子Sサイズ2個、天カス、紅ショウガ、味付けこんにゃく、ちくわ、国産和牛、ふつう味は中に辛いソース・外に甘いソース、あま味・から味も、壹錢洋食 950円、生ビール800円、角ハイボール600円、電気ブラン600円、冷やしあめ・ラムネ水は本店のみ、祗園本店 (祇園町北側238、年中無休、平日11:00〜深夜1:00、土曜・祝前日11:00〜深夜3:00、日曜・祝日10:30〜22:00)、京都髙島屋店 (地下1階、10時〜20時)。食べログ: お好み焼き、予約不可、100席、禁煙、子供可、カード・PayPay 可、お好み焼き百名店 2018。口コミ (2026年8月〜10月、英語): 950円、マネキン、昭和レトロ、外国人のスタッフ、深夜まで営業。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, LOC, MENU, R + 'B438274336/', R + 'B481290338/', R + 'B492248460/', R + 'B534092814/', R + 'B535380737/', R + 'B535438111/', R + 'B536012682/', R + 'B537873134/', R + 'B538182025/', R + 'B538342609/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One dish only — just choose the sauce (sweet, normal or spicy); no bookings, open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園四条通縄手上ル祇園町北側238',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004025, 135.773197); cross-checked: GSI 京都府京都市東山区祇園町北側238番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu, tax included.', last_checked: TODAY, items: [
      it('壹錢洋食', '', 'Issen Yoshoku (normal, sweet or spicy sauce)', '¥950', 'Food', 'no', 'no', '', 'issen_yoshoku'),
      it('生ビール(プレミアムモルツ)', '', 'Draft beer (Premium Malt’s)', '¥800', 'Drinks', '', '', '', 'draft_beer'),
      it('角ハイボール', '', 'Kaku highball', '¥600', 'Drinks', '', '', '', 'kaku_highball'),
      it('電気ブラン', '', 'Denki Bran', '¥600', 'Drinks', '', '', '', 'denki_bran'),
    ] }, {
    cuisine: '祇園の、お好み焼きのルーツとなった粉もの焼き「一銭洋食」ひと品の店 (公式サイト)・壹錢洋食950円: お出汁で溶いた生地を薄く広げ、かつおぶし、九条ネギ、玉子2個、天カス、紅ショウガ、味付けこんにゃく、ちくわ、国産和牛をのせて折り、ソースはふつう (中は辛く外は甘い)・あま・から、青海苔ではなく刻み海苔 (公式サイト)・生ビール (プレミアムモルツ) 800円、ハイボール600円から、電気ブラン600円、日本酒800〜1,000円、冷やしあめとラムネ水は本店のみ (公式メニュー)・持ち帰りの抹茶あんみつゼリー800円',
    neighborhood: '四条縄手、祇園の玄関口。祇園四条駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: ひと品だけの料理は、お出汁で溶いた小麦粉の生地に天カスを入れ、ソースで仕上げる (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 生地はお出汁で溶き、かつおぶし、玉子、ちくわ、国産和牛をのせる (公式サイト)。食べログの「ベジタリアンメニューあり」は公式の作り方と合わない。',
    notes: '[一銭洋食・四条縄手、祇園の夜食] 戦前の粉もの「一銭洋食」をよみがえらせた祇園の100席の店。だしの生地で九条ネギ、玉子、こんにゃく、ちくわ、和牛を包み、ソースは甘・ふつう・辛から選ぶ。料理はこれひと品だけで950円。店内には色街の洒落をきかせたお色気の絵馬や人形、テーブルには着物のマネキンも。毎日11時〜深夜1時 (土曜・祝前日は3時まで)。髙島屋にも売り場があり、通販も。',
  });
}

// ================================================================ 吉田山せせり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26030970/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yoshida_yama_seseri', name: '吉田山せせり (Yoshida Yama Seseri)', category: 'OMNI',
    lat: 34.982788, lng: 135.756972, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt, the house tare (sauce) or the chef’s choice (2026 reviews); the tare’s ingredients are not described, so ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori counter; the few vegetable dishes (water eggplant, Manganji peppers, chilled tomato) sit beside chicken, pork, tuna and octopus (2026 reviews).',
    hours_raw: 'Tabelog: Monday–Friday 17:00–23:00, closed Saturday and Sunday; hours may change. Bookings by phone (090-6979-1444) up to a month ahead, in two-hour slots: 17:00–19:00, 19:00–21:00, 21:00–23:00 (Tabelog); diners booked from the same day to two weeks ahead, and one August 2026 walk-in found a seat. Cash only (no cards, e-money or QR). 8 counter seats; non-smoking, with an ashtray outside (Tabelog). No service charge (Tabelog, original text なし). Deep in an alley in a residential area behind Kyoto Station — look for the lantern of the neighbouring Kouyouken; 5 min walk from the Hachijo exit (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashikujo, behind Kyoto Station — 5 min walk from the Hachijo exit',
    cuisine: 'Charcoal yakitori skewered to order at an 8-seat counter (2026 reviews) · the namesake seseri (neck) — three pieces wound round the skewer, best with the tare — negima, tsukune, cheese tsukune, curry negima, liver, heart, gizzard, yagen, momo, local chicken with plum, Kyoto pork; salt, tare or omakase · water eggplant sashimi, Manganji peppers, chilled tomato, chilled tofu, octopus, tuna · Sapporo Lager Akaboshi, highballs (Yamazaki, Hakushu, Ichiro’s Malt), fresh watermelon sour, honey-ginger and sansho sours, Akadama, sake · about ¥4,000–4,500 a head with drinks (August 2026)',
    website: TB, gmaps: gm('吉田山せせり 京都'), menu_url: TB,
    notes: "[Yakitori · behind Kyoto Station, a couple's 8-seat counter] A tiny yakitori counter down an alley south of Kyoto Station, where each skewer is threaded to order and grilled over charcoal — the house seseri wound three times round the skewer, juicy liver, curry negima — while the owner's wife grates fresh watermelon for the sours. Around ¥4,000–4,500 with drinks (2026). Yakitori WEST Tabelog 100 2024 and 2025. Weeknights only, two-hour slots from 17:00, 19:00 and 21:00; book by phone; cash only. It can be hot inside in summer.",
    chef_bio: { chef_name: null, roles: ['Owner-griller (unnamed), working with the owner’s wife, per August 2026 reviews'], origin: null,
      background: 'Reviewers in 2026 describe the owner grilling every skewer to order in front of the counter and the owner’s wife making the sours, including grating fresh watermelon (August 2026); one diner called both very kind. Tabelog Yakitori WEST "Tabelog 100" 2024 and 2025.',
      philosophy: null,
      specialty: 'Seseri; skewers threaded to order.',
      anecdotes: [
        { text: '"They boldly wrap three pieces of seseri around a skewer and grill them in a unique style." — August 2026.', source: R + 'B534227991/' },
        { text: 'A July 2026 diner found the yakitori tender but the small room stifling in the summer heat.', source: R + 'B532236834/' },
        { text: '"Thanks to the solo diner next to me, I was able to enjoy my drinks and had a wonderful time." — a solo walk-in, August 2026.', source: R + 'B532988855/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥・居酒屋・肉料理、南区東九条室町31、月〜金 17:00〜23:00、土日休み、予約は1か月前から、17〜19時・19〜21時・21〜23時の2時間制、カード・電子マネー・QR 不可、カウンター8席、禁煙 (外に灰皿)、サービス料なし、路地の奥、隣の Kouyouken の提灯が目印、京都駅八条口から徒歩5分、焼き鳥 WEST 百名店 2024・2025。口コミ (2025年3月〜2026年9月、英語): せせり (3つ巻きつけた串)、ねぎま、つくね、チーズつくね、カレーねぎま、レバー、ハツ、砂ずり、やげん、地鶏の梅、京都の豚、水茄子、万願寺唐辛子、冷やしトマト、スイカのサワー (奥さんが生のスイカをすりおろす)、塩・タレ・おまかせ、4,000〜4,500円ほど。',
      confidence: 'medium', sources: [TB, R + 'B502852123/', R + 'B532236834/', R + 'B532772562/', R + 'B532988855/', R + 'B533578116/', R + 'B533957810/', R + 'B534227991/', R + 'B534528151/', R + 'B534768467/', R + 'B536508169/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a two-hour slot by phone; order skewers with salt or tare at the counter; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市南区東九条室町31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026; Yakitori WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (34.982788, 135.756972); cross-checked: GSI 京都府京都市南区東九条室町31番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532772562/', R + 'B533957810/'],
    price_note: 'No published menu; a July 2026 diner spent about ¥4,500 and an August 2026 diner under ¥4,000 with drinks.', last_checked: TODAY, items: [
      it('せせり', '', 'Seseri (chicken neck) skewer', '', 'Skewers', 'ask', 'no', 'Salt or tare.', 'seseri'),
      it('', '', 'Fresh watermelon sour', '', 'Drinks', '', '', 'Summer 2026.', 'watermelon_sour'),
    ] }, {
    cuisine: 'カウンター8席で注文ごとに串を打つ炭火の焼き鳥 (2026年の口コミ)・名物のせせり (3つ巻きつけた串、タレがおすすめ)、ねぎま、つくね、チーズつくね、カレーねぎま、レバー、ハツ、砂ずり、やげん、もも、地鶏の梅、京都の豚、塩・タレ・おまかせ・水茄子のお造り、万願寺唐辛子、冷やしトマト、冷奴、蛸、鮪・サッポロラガー赤星、ハイボール (山崎、白州、イチローズモルト)、生のスイカのサワー、はちみつ生姜や山椒のサワー、赤玉、日本酒・飲んで4,000〜4,500円ほど (2026年8月)',
    neighborhood: '東九条、京都駅の裏手。八条口から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。串は塩、自家製のタレ、おまかせから選べる (2026年の口コミ)。タレの中身は書かれていないので確認を。',
    vegan_detail: 'ヴィーガン不可: 鶏の焼き鳥のカウンター。野菜の品 (水茄子、万願寺唐辛子、冷やしトマト) は少なく、ほかは鶏、豚、鮪、蛸 (2026年の口コミ)。',
    notes: '[焼き鳥・京都駅の裏、夫婦の8席のカウンター] 京都駅の南、路地の奥の小さな焼き鳥のカウンター。注文ごとに串を打って炭火で焼く。店名のせせりは串に3つ巻きつけた大ぶりの1本、ジューシーなレバー、カレーねぎま。奥さんは生のスイカをすりおろしてサワーに。飲んで4,000〜4,500円ほど (2026年)。焼き鳥 WEST 百名店 2024・2025。平日のみ、17時・19時・21時からの2時間制、電話で予約、現金のみ。夏は店内が暑いことも。',
  });
}

// ================================================================ 西京焼き 京都やま六
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039724/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-yamaroku.co.jp/';
  const H = day(['11:00', '15:00'], ['16:00', '20:00']);
  put({
    id: 'kyoto_saikyo_yaki_yamaroku', name: '西京焼き 京都やま六 (Saikyo Yaki Kyoto Yamaroku)', category: 'OMNI',
    lat: 34.986211, lng: 135.758469, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog notes that allergy information is available. The set meals are fish marinated in Saikyo miso with rice, red miso soup and small side dishes such as mentaiko and fried tofu (2026 reviews); the miso and side dishes are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every set is built on miso-marinated fish (silver cod, Spanish mackerel, salmon, kinmedai), with mentaiko and marinated horse mackerel among the sides (2026 reviews).',
    hours_raw: 'Tabelog: every day 11:00–15:00 (last order 14:30) and 16:00–20:00 (last order 19:30); closed on JR Kyoto Isetan’s closing days. No reservations: register at the ticket machine in front of the shop for a numbered ticket; when seats run out for the day, ticketing may stop early (Tabelog; October 2026). Waits in October 2026 ran from none to about 45 minutes; a sitting takes 30–40 minutes. 21 seats: a counter and two booths; non-smoking (Tabelog; October 2026). Cards and QR payments, no e-money (Tabelog). JR Kyoto Isetan B1F, directly connected to JR Kyoto Station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'JR Kyoto Station, JR Kyoto Isetan B1F',
    cuisine: 'Set meals of freshly grilled Saikyo-yaki — fish marinated in sweet white Saikyo miso — from a long-established Kyoto fish and miso-marinade house (Tabelog; 2026 reviews) · silver cod set ¥2,650 (October 2026), Spanish mackerel set ¥2,280 (October 2026); à la carte salmon ¥1,100 and kinmedai · each set with glossy rice (free refills), red miso soup and four small sides such as mentaiko, marinated horse mackerel, beef-tendon potato salad and fried tofu (2026 reviews) · sake',
    website: SITE, gmaps: gm('西京焼き 京都やま六 京都伊勢丹'), menu_url: TB,
    notes: "[Saikyo-yaki set meals · Kyoto Station, a fish house's first restaurant] A 21-seat set-meal counter in the basement of JR Kyoto Isetan from 京都やま六, a Kyoto fish house founded in 1927: miso-marinated fish grilled to order — the silver cod set (¥2,650 in 2026) is the classic — with glossy rice you can refill, red miso soup and small sides like mentaiko. Diner Tabelog 100 2026. No bookings: take a number from the machine out front, and expect a wait at peak times. 11:00–15:00 and 16:00–20:00.",
    chef_bio: { chef_name: null, roles: ['Restaurant of 京都やま六 (company; no person named)'], origin: null,
      background: 'Per October 2026 reviews: 京都やま六 began in 1927 as a fish wholesaler with the opening of the Kyoto Central Wholesale Market and refined Saikyo-zuke (fish marinated in Saikyo miso) as a way to bring out flavour; the fish is marinated a full day in a first miso and then re-marinated in fresh miso; this restaurant, opened in August 2023 (Tabelog gives 1 August 2023), is the house’s first. Tabelog Diner "Tabelog 100" 2026.',
      philosophy: null,
      specialty: 'Silver cod Saikyo-yaki set meal.',
      anecdotes: [
        { text: '"Honestly, I still don’t quite understand this restaurant’s system!" — arriving 30 minutes before opening, a diner found tickets handed out only 5 minutes before (October 2026).', source: R + 'B537157005/' },
        { text: 'An October 2026 diner tried an à la carte kinmedai beside the silver cod set and still found the silver cod richer.', source: R + 'B538361157/' },
      ],
      japanese_sources_summary: '食べログ: 食堂、下京区烏丸通塩小路下ル東塩小路町 ジェイアール京都伊勢丹 B1F、毎日11:00〜15:00 (L.O. 14:30)・16:00〜20:00 (L.O. 19:30)、ジェイアール京都伊勢丹に準じる休み、整理券制で満席になり次第当日の受付を終了することあり、予約不可、21席、禁煙、カード・QR 可、電子マネー不可、アレルギー表示あり、2023年8月1日オープン、食堂百名店 2026。口コミ (2026年10月〜11月、英語): 1927年に京都中央卸売市場の開場とともに魚の仲卸として創業、西京漬けの技、一日本漬けしたあと新しい味噌で漬け直す、初めての飲食店、銀だらの西京焼き定食2,650円、さわらの西京焼き定食2,280円、鮭の西京焼き単品1,100円、金目鯛、ご飯のおかわり自由、赤だし、明太子などの小鉢、整理券。',
      confidence: 'medium', sources: [TB, R + 'B537157005/', R + 'B537344120/', R + 'B537547106/', R + 'B537570933/', R + 'B537650265/', R + 'B537657968/', R + 'B537823885/', R + 'B537961051/', R + 'B538361157/', R + 'B538642166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take a number from the machine out front, then order a set meal; rice refills are free.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町 ジェイアール京都伊勢丹 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Diner Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.986211, 135.758469); GSI resolves the lot-less station address only to the town 東塩小路町, so the pin rests on the Tabelog point in the station building; kyoto_kyorinsen_granvia is 92 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537157005/', R + 'B537650265/'],
    price_note: 'Prices from October 2026 reviews (a menu photo dated 17 October 2026).', last_checked: TODAY, items: [
      it('銀だらの西京焼き定食', '', 'Silver cod Saikyo-yaki set meal', '¥2,650', 'Set meals', 'ask', 'no', 'October 2026.', 'gindara_set'),
      it('さわらの西京焼き定食', '', 'Spanish mackerel Saikyo-yaki set meal', '¥2,280', 'Set meals', 'ask', 'no', 'October 2026.', 'sawara_set'),
      it('', '', 'Salmon Saikyo-yaki, à la carte', '¥1,100', 'À la carte', 'ask', 'no', 'October 2026.', 'salmon_single'),
    ] }, {
    cuisine: '京都の老舗の魚と西京漬けの店による、焼きたての西京焼きの定食 (食べログ、2026年の口コミ)・銀だらの定食2,650円 (2026年10月)、さわらの定食2,280円 (2026年10月)、単品の鮭1,100円や金目鯛・定食にはつやのあるご飯 (おかわり自由)、赤だし、明太子、鯵の南蛮漬け、牛すじのポテトサラダ、揚げ豆腐などの小鉢4品 (2026年の口コミ)・日本酒',
    neighborhood: 'JR 京都駅、ジェイアール京都伊勢丹 B1F',
    gf_detail: '要確認。食べログにはアレルギー表示ありとある。定食は西京味噌に漬けた魚に、ご飯、赤だし、明太子や揚げ豆腐などの小鉢 (2026年の口コミ)。味噌や小鉢の中身は書かれていない。',
    vegan_detail: 'ヴィーガン不可: どの定食も味噌漬けの魚 (銀だら、さわら、鮭、金目鯛) が主で、小鉢にも明太子や鯵の漬け物 (2026年の口コミ)。',
    notes: '[西京焼き定食・京都駅、魚屋の初めての食堂] 1927年創業の京都の魚の店「京都やま六」の、ジェイアール京都伊勢丹の地下にある21席の定食屋。注文ごとに焼く西京漬けの魚、定番は銀だらの定食 (2026年は2,650円)。おかわりできるつやのあるご飯、赤だし、明太子などの小鉢。食堂百名店 2026。予約不可、店先の発券機で整理券を取り、混む時間は待つ。11時〜15時、16時〜20時。',
  });
}

save();
