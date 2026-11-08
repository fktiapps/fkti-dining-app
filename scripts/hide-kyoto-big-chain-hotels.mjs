// 2026-11-08: Greg ruled venues inside hotels run by national/global hotel groups are skipped and the ones already
// listed hidden ("Skip big-chain hotels"). List from osw13's audit (docs/kyoto-hotel-audit-2026-11-08.md, section A).
// Kept (not hidden): independent restaurant brands that rent space in a chain hotel — 鮨おおが東山, 京都洋食 ムッシュいとう,
// ryu no hige by MITATE, GION GOZU 四条店 — same footing as 上田珈琲 (a brand on a hotel floor stays).
import { readCity, writeCity } from './lib-city.mjs';
const IDS = [
  'vm_the_ritz_carlton_kyoto', 'kyoto_seven_embers_hilton', 'kyoto_teori_hilton', 'kyoto_open_doubletree_higashiyama',
  'kyoto_westin_miyako_raku', 'kyoto_dominique_bouchet_restaurant', 'kyoto_dominique_bouchet_teppanyaki', 'kyoto_rondo_miyako_hachijo',
  'kyoto_all_day_dining_yasaka_imperial', 'kyoto_yasaka_park_hyatt', 'kyoto_kyoto_bistro_park_hyatt', 'kyoto_kohaku_park_hyatt',
  'kyoto_sekki_six_senses', 'kyoto_teppanyaki_nijo_anacp', 'kyoto_koyo_dusit_thani', 'kyoto_trattoria_m_mercure',
  'kyoto_kyorinsen_granvia', 'kyoto_gozan_nozomi', 'kyoto_kotoshieru_granvia', 'kyoto_le_temps_granvia', 'kyoto_grand_jour_granvia',
  'kyoto_ukihashi_granvia', 'kyoto_kizahashi_thousand', 'kyoto_scalae_the_thousand', 'kyoto_all_day_dining_rajou',
  'kyoto_teppanyaki_aoi_rihga', 'kyoto_top_of_kyoto_rihga', 'kyoto_gourmand_tachibana_rihga', 'kyoto_koka_ryuho_rihga',
  'kyoto_amber_court_nikko_princess', 'kyoto_toki_hotel_the_mitsui', 'kyoto_forni_hotel_the_mitsui', 'kyoto_curd_mitsui_garden',
  'kyoto_sanga_ono_jokyoji', 'kyoto_k36', 'kyoto_kosa_ace_hotel', 'kyoto_piopiko_ace_hotel', 'kyoto_mr_maurices_italian_ace',
  'kyoto_gate_hotel_lobby_lounge',
];
const c = readCity('kyoto');
let n = 0;
for (const id of IDS) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found: ' + id);
  if (!p.hidden) { p.hidden = 'chain-hotel'; n++; }
}
writeCity('kyoto', c);
console.log('hidden', n, 'of', IDS.length);
