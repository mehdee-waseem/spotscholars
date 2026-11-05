// GET /api/catalogue — live fallback for the Campus France English-taught catalogue.
// Used only if the copy saved at build time (public/catalogue.json) is incomplete.
// Returns the list without per-programme details; each entry still links to its
// Campus France page, which has the website, fees and requirements.
const API = 'https://tie-api.campusfrance.org/sgetprograms/1';

export default async () => {
  try {
    const res = await fetch(API, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(String(res.status));
    const list = (await res.json()).programs;
    const insts = [], index = {};
    const rows = list.map(p => {
      const key = `${p.institutionLabel}|${p.institutionCity}|${p.regionId}`;
      if (!(key in index)) { index[key] = insts.length; insts.push([p.institutionLabel, p.institutionCity, p.regionId]); }
      const fields = String(p.domainListid || '').split(',').filter(Boolean).map(x => Number(x) / 10000).join('.');
      return [p.programId, p.programLabel, index[key], p.levelObtainedId, fields, '', '', '', p.diplomaIsNational ? 1 : 0, p.hasNatfee === 1 ? 1 : 0, p.taughtenAll ? 1 : 0];
    });
    return new Response(JSON.stringify({ source: 'Campus France (live)', updated: new Date().toISOString().slice(0, 10), complete: true, count: rows.length, insts, rows }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=43200' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Catalogue unavailable', detail: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }
};
