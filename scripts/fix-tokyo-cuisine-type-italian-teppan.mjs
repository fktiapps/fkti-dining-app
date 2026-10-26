// Ginza-sweep records were filed as cuisine_type 'other' even where an app label fits:
// Tokyo had zero 'italian' records (so no Italian filter chip), and teppanyaki counters
// missed the existing 'Okonomiyaki / Teppan' label. Reclassify an explicit, hand-reviewed
// id list (2026-10-26). Excluded as ambiguous: Mikasa Kaikan (multi-genre building),
// La Nuit Blanche (French-Italian wine bar), Goemon (wafu-pasta chain), Bagus karaoke,
// Salmon Atelier, Madera (Spanish wine bar), Essence Terrace, Winehall Glamour.
import fs from 'fs';
const ITALIAN = ["tokyo_fancl_brown_rice_meals_ginza","tokyo_ginza_scheveningen","tokyo_giovanni_ginza8","tokyo_enu_tacubo_ginza","tokyo_bear_terrace_ginza7","tokyo_brace_e_vino_gigino","tokyo_inoltre_ginza5","tokyo_m3_felice_higashi_ginza","tokyo_giaggiolo_ginza","tokyo_cantina_vini_tutti_tsukiji","tokyo_howlin_ginza6","tokyo_tablier_ginza3","tokyo_osteria_mio_bar_ginza3","tokyo_trattoria_baffo_ginza3","tokyo_gucci_osteria_ginza6","tokyo_ginza_fabis_ginza8","tokyo_spajiro_ginza3","tokyo_tutto_il_mare_ginza4","tokyo_ginza_zion_ginza5","tokyo_ginza_casita_ginza8","tokyo_osteria_barababao_ginza2","tokyo_miami_patio_shimbashi","tokyo_susans_meatball_hibiya","tokyo_osteria_da_ada_ginza6","tokyo_lavasara_ginza2","tokyo_papa_milano_forum","tokyo_miami_villa_itocia","tokyo_dona_yurakucho","tokyo_oasis_grill_italian_ginza1","tokyo_il_barocco_yurakucho","tokyo_ballo_ballo_ginza_inz","tokyo_meri_principessa_ginza1","tokyo_rigoletto_kitchen_ginza8","tokyo_kitchen_salvatore_cuomo_ginza1","tokyo_good_cheese_good_pizza_hibiya","tokyo_sophie_at_edition_ginza2","tokyo_saizeriya_ginza_inz","tokyo_la_piazzetta_eataly_ginza6","tokyo_niku_pasta_sake_shiodome","tokyo_osteria_da_kappa_ginza8","tokyo_ginza_tappo_ginza8","tokyo_ristorante_kurodino_ginza3","tokyo_bancarella_gioia_kyobashi3","tokyo_ginza_lazy_ginza1","tokyo_del_sole_2due_ginza2","tokyo_regal_shusse_kaido_ginza8","tokyo_yamagata_san_dan_delo_ginza1","tokyo_kabe_no_ana_hibiya_chanter","tokyo_enoteca_garbino_ginza","tokyo_furutoshi_ginza"];
const TEPPAN = ["tokyo_ginza_teppanyaki_shin_harada","tokyo_ginza_shino_teppan","tokyo_ginza_waen_teppan","tokyo_ishigakijima_kitauchi_bokujou_ginza","tokyo_bliss_teppan_shimbashi1","tokyo_ginza_matsusaka_teppan_ginza7","tokyo_shu_ginza_teppan_ginza8","tokyo_teppanyaki_kaika_ginza6","tokyo_teppanyaki_colza_ginza7","tokyo_ginkuma_saryo_ginza6","tokyo_porto_faro_ginza","tokyo_teppanyaki_ittetsu_daiichi","tokyo_heki_ginza_mitsukoshi","tokyo_kamon_imperial_hotel","tokyo_ginza_ukaitei"];
const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
let n = 0;
for (const [ids, to] of [[ITALIAN, 'italian'], [TEPPAN, 'okonomiyaki']]) for (const id of ids) {
  const p = d.places.find(x => x.id === id); if (!p) throw new Error('missing ' + id);
  if (p.cuisine_type !== 'other') continue; p.cuisine_type = to; n++;
}
fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
console.log(`reclassified ${n} records`);
