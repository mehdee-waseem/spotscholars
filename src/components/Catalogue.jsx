import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FIELDS, FIELD_GROUPS, LEVELS, LEVEL_GROUPS, REGIONS, campusFranceUrl } from '../lib/catalogueMeta';
import { Search, External, Pin, Clock } from './Icons';
import Loader from './Loader';

const PAGE = 25;
let cache = null;

async function loadCatalogue() {
  if (cache) return cache;
  let data = null;
  try { data = await (await fetch('/catalogue.json')).json(); } catch {}
  if (!data?.complete) {
    try {
      const res = await fetch('/api/catalogue');
      const live = await res.json();
      if (live?.rows?.length) data = live;
    } catch {}
  }
  if (!data) return null;
  const rows = data.rows.map(([id, title, inst, level, fields, url, fee, length, national]) => {
    const [school, city, region] = data.insts[inst] || ['', '', 0];
    const f = String(fields).split('.').filter(Boolean).map(Number);
    return { id, title, school, city, region, level, fields: f, url, fee, length, national, text: `${title} ${school} ${city}`.toLowerCase() };
  });
  cache = { ...data, rows };
  return cache;
}

export function useCatalogue() {
  const [state, setState] = useState({ data: cache, loading: !cache });
  useEffect(() => { if (!cache) loadCatalogue().then(data => setState({ data, loading: false })); }, []);
  return state;
}

export function groupCounts(rows) {
  return Object.fromEntries(FIELD_GROUPS.map(g => [g.id, rows.filter(r => r.fields.some(f => g.fields.includes(f))).length]));
}

export default function Catalogue() {
  const { data, loading } = useCatalogue();
  const [params, setParams] = useSearchParams();
  const get = k => params.get(k) || '';
  const set = (k, v) => {
    const next = new URLSearchParams(params);
    v ? next.set(k, v) : next.delete(k);
    if (k !== 'page') next.delete('page');
    setParams(next, { replace: true });
  };
  const [q, setQ] = useState(get('cq'));
  useEffect(() => { const t = setTimeout(() => q !== get('cq') && set('cq', q), 250); return () => clearTimeout(t); }, [q]);

  const group = FIELD_GROUPS.find(g => g.id === get('group'));
  const field = Number(get('field')) || 0;
  const levelGroup = LEVEL_GROUPS.find(l => l.id === get('lvl'));
  const region = Number(get('region')) || 0;
  const page = Math.max(1, Number(get('page')) || 1);

  const list = useMemo(() => {
    if (!data) return [];
    const needle = get('cq').trim().toLowerCase();
    return data.rows.filter(r =>
      (!needle || needle.split(/\s+/).every(w => r.text.includes(w))) &&
      (!group || r.fields.some(f => group.fields.includes(f))) &&
      (!field || r.fields.includes(field)) &&
      (!levelGroup || levelGroup.levels.includes(r.level)) &&
      (!region || r.region === region)
    ).sort((a, b) => {
      // Programmes whose MAIN (first-listed) subject matches the filter come first.
      const main = r => (field ? r.fields[0] === field : group ? group.fields.includes(r.fields[0]) : true) ? 0 : 1;
      return main(a) - main(b) || a.title.localeCompare(b.title);
    });
  }, [data, params]);

  if (loading) return <Loader />;
  if (!data) return <p className="card mt-6 p-6">The catalogue couldn't be loaded right now. Browse it directly on <a className="font-semibold underline" href="https://taughtie.campusfrance.org/tiesearch/#/catalog" target="_blank" rel="noreferrer">Campus France</a>.</p>;

  const pages = Math.ceil(list.length / PAGE);
  const shown = list.slice((page - 1) * PAGE, page * PAGE);
  const fieldOptions = group ? group.fields : Object.keys(FIELDS).map(Number);

  return (
    <div>
      <div className="card p-4 sm:p-5">
        <label className="relative block">
          <span className="sr-only">Search programmes</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input className="input pl-11" value={q} onChange={e => setQ(e.target.value)} placeholder="Search: international relations, law, design, Lyon, Sciences Po…" />
        </label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select className="input" value={get('group')} onChange={e => { set('group', e.target.value); }} aria-label="Field group">
            <option value="">All fields</option>
            {FIELD_GROUPS.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
          </select>
          <select className="input" value={field || ''} onChange={e => set('field', e.target.value)} aria-label="Specific field">
            <option value="">Any specific subject</option>
            {fieldOptions.map(f => <option key={f} value={f}>{FIELDS[f]}</option>)}
          </select>
          <select className="input" value={get('lvl')} onChange={e => set('lvl', e.target.value)} aria-label="Level">
            <option value="">All levels</option>
            {LEVEL_GROUPS.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
          <select className="input" value={region || ''} onChange={e => set('region', e.target.value)} aria-label="Region">
            <option value="">All regions</option>
            {Object.entries(REGIONS).map(([id, name]) => <option key={id} value={id}>{name}</option>)}
          </select>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <span><strong className="text-navy-900">{list.length}</strong> of {data.rows.length} programmes taught in English</span>
          <span>Source: Campus France catalogue · updated {data.updated}{!data.complete && ' (sample — full list loads after deploy)'}</span>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="card mt-5 p-8 text-center">No programmes match. Try fewer filters or a shorter search.</p>
      ) : (
        <ul className="mt-5 space-y-3">
          {shown.map(r => (
            <li key={r.id} className="card p-4 sm:p-5">
              <div className="flex flex-wrap gap-1.5">
                <span className="chip-orange">{LEVELS[r.level] || 'Programme'}</span>
                {r.national === 1 && <span className="chip bg-green-50 text-green-700">National degree</span>}
                {r.fields.slice(0, 3).map(f => (
                  <button key={f} onClick={() => set('field', String(f))} className="chip cursor-pointer bg-slate-100 text-slate-600 hover:!bg-navy hover:!text-white">{FIELDS[f]}</button>
                ))}
                {r.fields.length > 3 && <span className="chip bg-slate-100 text-slate-500">+{r.fields.length - 3}</span>}
              </div>
              <h3 className="mt-2 text-base font-bold leading-snug">{r.title}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                <span className="font-medium text-navy-900">{r.school}</span>
                <span className="inline-flex items-center gap-1"><Pin width={13} height={13} />{r.city}{REGIONS[r.region] ? `, ${REGIONS[r.region]}` : ''}</span>
                {r.length && <span className="inline-flex items-center gap-1"><Clock width={13} height={13} />{r.length}</span>}
              </p>
              {r.fee && !/^https?:/.test(r.fee) && <p className="mt-1.5 text-sm"><span className="font-semibold text-navy-900">Fees: </span>{r.fee}{r.fee.length >= 88 ? '…' : ''}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                {r.url && <a href={r.url} target="_blank" rel="noreferrer" className="btn-navy px-4 py-2">Programme website <External width={15} height={15} /></a>}
                <a href={campusFranceUrl(r.id)} target="_blank" rel="noreferrer" className="btn-ghost px-4 py-2">Full details on Campus France <External width={15} height={15} /></a>
              </div>
            </li>
          ))}
        </ul>
      )}

      {pages > 1 && (
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="Pages">
          <button disabled={page === 1} onClick={() => set('page', String(page - 1))} className="btn-ghost px-4 py-2 disabled:opacity-40">← Previous</button>
          <span className="px-2 text-sm text-slate-500">Page {page} of {pages}</span>
          <button disabled={page === pages} onClick={() => { set('page', String(page + 1)); document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-ghost px-4 py-2 disabled:opacity-40">Next →</button>
        </nav>
      )}
    </div>
  );
}
