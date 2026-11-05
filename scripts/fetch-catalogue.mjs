// Downloads the Campus France "Taught in English" catalogue and saves a compact copy
// to public/catalogue.json. Runs automatically before every `npm run build` (prebuild),
// so each Netlify deploy ships fresh data.
//
// If Campus France can't be reached, the existing file is kept and the build continues.
// Source: https://taughtie.campusfrance.org/tiesearch/#/catalog
import { readFile, writeFile } from 'node:fs/promises';

const API = 'https://tie-api.campusfrance.org';
const OUT = new URL('../public/catalogue.json', import.meta.url);
const CONCURRENCY = 6;
const TIMEOUT_MS = 20000;

const clean = s => String(s || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#0?39;/g, "'").replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

async function getJson(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: 'application/json', 'User-Agent': 'SpotScholars catalogue sync' } });
    if (!res.ok) throw new Error(`${res.status} on ${url}`);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

async function main() {
  const list = (await getJson(`${API}/sgetprograms/1`)).programs;
  if (!Array.isArray(list) || list.length < 100) throw new Error('Unexpected catalogue format');
  console.log(`Catalogue: ${list.length} programmes. Fetching details…`);

  const details = {};
  let i = 0, failed = 0;
  async function worker() {
    while (i < list.length) {
      const id = list[i++].programId;
      try {
        const d = await getJson(`${API}/sgetprogram/${id}`);
        const p = d.program || d;
        details[id] = {
          url: p.webdiploma || p.website || '',
          fee: clean(p.fee).slice(0, 90),
          length: clean(p.lengthProgram).slice(0, 40)
        };
      } catch {
        failed++;
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const insts = [], index = {};
  const rows = list.map(p => {
    const key = `${p.institutionLabel}|${p.institutionCity}|${p.regionId}`;
    if (!(key in index)) { index[key] = insts.length; insts.push([clean(p.institutionLabel), clean(p.institutionCity), p.regionId]); }
    const d = details[p.programId] || {};
    const fields = String(p.domainListid || '').split(',').filter(Boolean).map(x => Number(x) / 10000).join('.');
    return [p.programId, clean(p.programLabel), index[key], p.levelObtainedId, fields, d.url || '', d.fee || '', d.length || '', p.diplomaIsNational ? 1 : 0];
  });

  const out = { source: 'Campus France — Taught in English catalogue', updated: new Date().toISOString().slice(0, 10), complete: true, count: rows.length, insts, rows };
  await writeFile(OUT, JSON.stringify(out));
  console.log(`Saved ${rows.length} programmes from ${insts.length} institutions (${failed} details unavailable).`);
}

main().catch(async err => {
  let kept = 'none';
  try { kept = JSON.parse(await readFile(OUT, 'utf8')).count; } catch {}
  console.warn(`Catalogue sync skipped (${err.message}). Keeping existing file (${kept} programmes); the site will load the live list instead.`);
});
