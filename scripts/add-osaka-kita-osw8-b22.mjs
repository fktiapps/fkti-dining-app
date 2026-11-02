// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 22.
// Skips only: the remaining odd ids in the shin-osaka notable list are chains or undecided; no shop is added.
//   - skipped 1ポンドのステーキハンバーグ タケル 西中島店 27053705: chain by count; five shops found, 福島店 and 東三国店 (Gurunavi), 上新庄店
//     (Hot Pepper), 日本橋オタロード店 (aumo) and this 西中島店 (web search 2026-11-02).
//   - skipped ローマ軒 アルデ新大阪店 27117095: chain; osw3 counted five ローマ軒 shops (神戸三宮, 新大阪アルデ, NAMBAなんなん, 阪急三番街 and more;
//     queue-status record for 27067154).
//   - skipped 回転寿司がんこ エキマルシェ新大阪店 27084067: chain; がんこフードサービス runs about 100 restaurants (TV Tokyo "Cambria Kyuden",
//     2018; web search 2026-11-02).
//   - left undecided (no skip): 麺家 新大阪上り 27043923 — a brand of ジェイアール西日本フードサービスネット (station soba and udon); 麺家大阪みどう,
//     麺家あべの 神宮前店 and a Takatsuki shop found, no brand count (web search 2026-11-02).
//   - left undecided (no skip): Juicer Bar 新幹線新大阪店 27068279 — run by Keihan Restaurant, described as a small franchise of station juice
//     stands in Tokyo and Osaka; no shop count found (2019 press release; web search 2026-11-02).
//   - still undecided from batch 21: BW STATION 27091091 and エスタシオン カフェタイム 27018941 (large operators, no brand count).
//   Lane note: after this batch the shin-osaka notable list has no odd ids left except the four undecided above.
import { openCitySweep } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-22');

skip('27053705', 'chain by count: タケル, 5 shops (福島, 東三国, 上新庄, 日本橋オタロード, 西中島) per Gurunavi, Hot Pepper, aumo; web search 2026-11-02');
skip('27117095', 'chain: ローマ軒, 5 shops counted by osw3 (queue-status 27067154: 神戸三宮, 新大阪アルデ, NAMBAなんなん, 阪急三番街 and more)');
skip('27084067', 'chain: がんこフードサービス, about 100 restaurants (TV Tokyo Cambria Kyuden 2018; web search 2026-11-02)');

save();
