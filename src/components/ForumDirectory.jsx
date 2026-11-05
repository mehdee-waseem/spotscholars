import { useEffect, useMemo, useState } from 'react';
import { Search, External } from './Icons';

// All ~370 members of the Campus France Forum (source: Campus France, October 2026).
export default function ForumDirectory() {
  const [all, setAll] = useState([]);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [limit, setLimit] = useState(60);

  useEffect(() => { import('../data/forum-members.json').then(m => setAll(m.default)); }, []);

  const cats = useMemo(() => {
    const c = {};
    all.forEach(i => { c[i.category] = (c[i.category] || 0) + 1; });
    return Object.entries(c).sort((a, b) => b[1] - a[1]);
  }, [all]);

  const list = all.filter(i =>
    (!cat || i.category === cat) &&
    (!q || `${i.name} ${i.city}`.toLowerCase().includes(q.trim().toLowerCase()))
  );

  return (
    <section className="mt-16" id="all-institutions">
      <p className="text-sm font-semibold uppercase tracking-widest text-orange">Full directory</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">All {all.length || 369} Campus France Forum institutions</h2>
      <p className="mt-2 max-w-2xl">
        Every university and school that is a member of the Campus France Forum — institutions committed to welcoming international students.
        Search by name or city, then check the school's website for programmes in English.
      </p>

      <div className="card mt-6 p-4 sm:p-5">
        <label className="relative block">
          <span className="sr-only">Search institutions</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input className="input pl-11" value={q} onChange={e => { setQ(e.target.value); setLimit(60); }} placeholder="Search e.g. Lyon, INSA, business…" />
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setCat('')} className={`chip cursor-pointer ${!cat ? '!bg-navy !text-white' : ''}`}>All</button>
          {cats.map(([c, n]) => (
            <button key={c} onClick={() => { setCat(c === cat ? '' : c); setLimit(60); }}
              className={`chip cursor-pointer ${cat === c ? '!bg-navy !text-white' : ''}`}>{c} · {n}</button>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">{list.length} institution{list.length === 1 ? '' : 's'}</p>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, limit).map(i => (
          <li key={i.name}>
            <a href={`https://www.google.com/search?q=${encodeURIComponent(`${i.name} ${i.city} international students`)}`} target="_blank" rel="noreferrer"
               className="group flex h-full items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-orange">
              <span>
                <span className="block text-sm font-semibold leading-snug text-navy-900">{i.name}</span>
                <span className="text-xs text-slate-500">{[i.city, i.category].filter(Boolean).join(' · ')}</span>
              </span>
              <External className="mt-0.5 shrink-0 text-slate-300 group-hover:text-orange" width={15} height={15} />
            </a>
          </li>
        ))}
      </ul>
      {list.length > limit && (
        <div className="mt-5 text-center">
          <button onClick={() => setLimit(l => l + 90)} className="btn-ghost">Show more ({list.length - limit} left)</button>
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">
        Source: <a className="underline" href="https://ressources.campusfrance.org/agence_cf/forum/fr/forum_liste_fr.pdf" target="_blank" rel="noreferrer">Campus France Forum member list</a> (October 2026).
        Before applying, check the institution is in <a className="underline" href="https://whed.net/results_institutions.php" target="_blank" rel="noreferrer">WHED</a> — HEC Pakistan only recognises degrees from listed institutions.
      </p>
    </section>
  );
}
