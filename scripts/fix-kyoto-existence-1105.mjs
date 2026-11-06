// Kyoto existence review, second pass (Greg approved 2026-11-05). Verdicts come from a read-only verification of
// the 49 borderline records in scripts/existence/kyoto-borderline.json; each change below cites the page it rests on.
import { readCity, writeCity } from './lib-city.mjs';
const TODAY = '2026-11-05';
const c = readCity('kyoto');
const get = id => { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found ' + id); return p; };

// 1. Closed (an opened source says so).
const closed = {
  'ChIJDZ2kzlsIAWARoehkRpr5unQ': 'Sunny Place: wanderlog.com/place/details/1252307 (Google Maps data) shows "Permanently Closed"; Tabelog "Listing on hold", newest visit 2018-12.',
  'ChIJ8fgL_FHnAGARtiRGS_o5ACY': 'MOON and BACK Kiyamachi Alley: spinach-web page moon-and-back-kiyamachi-alley-branch-77549 shows "Permanently closed" (上大阪町515).',
  'vm_cacao_magic': 'Cacao∞Magic: cacaomagic.com/new/2026-05-23-112419.html "LAST MAGIC" — last shop day 2026-05-24 (online shop continues); Tabelog page returns 404.',
  'kyr_jinrui_mina_menrui_tsuke': '人類みな麺類 つけ麺専門店 京都店: PR TIMES 2026-06-13 announces 人類みな麺類 背脂にんにく醤油まぜそば 京都店 opened 2026-06-11 at the same 下丸屋町407, replacing it; Tabelog "Listing on hold".',
};
for (const [id, note] of Object.entries(closed)) {
  const p = get(id); if (p.hidden) continue;
  p.existence = { status: 'closed_permanently', checked: TODAY, note: 'PERMANENTLY CLOSED. ' + note };
  p.hidden = 'closed'; console.log('closed:', id);
}

// 2. Records partly built from the WRONG shop's Tabelog page (anecdotes/safety/sources cite a different shop).
//    Hidden until re-researched from the right sources.
const wrong = {
  'ChIJq_Gt7mUJAWARdOvjkos8A7s': 'cites Tabelog 26038344 (ぎをん豆乳ら～めん うのゆきこ, Gion), a different shop; the station shop opened 2025-12-21 in 京都拉麺小路 (san-tatsu.jp press release 2025-11-21).',
  'ChIJhZiMFa0JAWARRdJzAPWyQYI': 'cites Tabelog 26034184 (a separate ramen bar at 高宮町585); this venue is at 西魚屋町600 BRISE 3F per its TableCheck page.',
  'ChIJDZ5uC-sJAWARnAYxIvm8ajk': 'cites Tabelog 13308586, a shop in Ginza, Tokyo.',
  'ChIJNfzfEpKpAWAR6JgLmgrDRfY': 'cites Tabelog 26040577 (和牛火山おあがり), a different shop; its own TableCheck page is gone.',
};
for (const [id, why] of Object.entries(wrong)) {
  const p = get(id); if (p.hidden) continue;
  p.existence = { status: 'unresolved', checked: TODAY, note: 'Hidden for re-research: the record ' + why };
  p.hidden = 'unverified'; console.log('unverified (wrong source):', id);
}

// 3. Pin fixes.
const omen = get('vm_omen_nippon_shijo_pontoc');
omen.lat = 35.003938; omen.lng = 135.770858; omen.loc_precise = true; delete omen.loc_approx;
omen.address_ja = '京都府京都市中京区四条通先斗町西入ル柏屋町171-1';
omen.pin_source = `Tabelog https://tabelog.com/en/kyoto/A2601/A260201/26001805/ (35.003938, 135.770858), address 四条通先斗町西入ル柏屋町171-1; omen.co.jp lists the 四条先斗町 shop (news 2026-10-23). Moved ${TODAY} from a pin about 1.5 km north.`;

const shomen = get('kyr_chuka_soba_shomen');
shomen.lat = 35.020737; shomen.lng = 135.751633; shomen.loc_precise = true; delete shomen.loc_approx;
shomen.address_ja = '京都府京都市上京区西堀川通下立売上る四町目55 下立売団地1F';
shomen.pin_source = `GSI 京都府京都市上京区四町目55番地 (lot) 35.020737, 135.751633, for the address on retty.me/area/PRE26/ARE99/SUB9901/100000751096/ (西堀川通下立売上る四町目55 下立売団地1F). Moved ${TODAY} from a pin about 1.4 km west.`;

const ren = get('kyr_menya_rennosuke');
ren.lat = 35.026388; ren.lng = 135.736085; ren.loc_precise = true; delete ren.loc_approx;
ren.address_ja = '京都府京都市上京区東竪町116-2';
ren.pin_source = `Tabelog https://tabelog.com/en/kyoto/A2601/A260503/26045576/ (35.026388, 135.736085), the new location (a review says it "reopened at a new location"); moved ${TODAY} from the old 北区紫野下柏野町56-32.`;
ren.existence = { status: 'confirmed', checked: TODAY, note: 'Moved to 上京区東竪町116-2 (Tabelog 26045576, fetched 2026-11-05, no status badge).' };

console.log('pins fixed: omen, shomen, rennosuke');
writeCity('kyoto', c);
