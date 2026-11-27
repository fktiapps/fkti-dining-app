// 2026-11-26: www.kyoto-shin.jp is Restaurant 信's site (寺町竹屋町下る久遠院前町667-1, 075-231-1211 — the
// kyoto_restaurant_shin record), not 富小路 信's (桝屋町337). Tabelog listed it on both. 富小路 信's facts come from
// Tabelog and reviews only, so the site is removed from its website field and source list; nothing else changes.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_tominokoji_shin'); if (!p) throw new Error('not found');
const bad = /^https?:\/\/(www\.)?kyoto-shin\.jp\/?$/;
if (bad.test(p.website || '')) p.website = null;
if (p.chef_bio?.sources) p.chef_bio.sources = p.chef_bio.sources.filter(s => !bad.test(s));
const left = JSON.stringify(p).match(/kyoto-shin\.jp/g);
if (left) throw new Error('kyoto-shin.jp still referenced ' + left.length + 'x');
writeCity('kyoto', c);
console.log('富小路 信: kyoto-shin.jp removed');
