import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FilterBar from '../components/FilterBar';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';
import { useData } from '../lib/api';
import { useFilters, matches, unique } from '../lib/useFilters';
import { External, Pin } from '../components/Icons';

export default function Universities() {
  const { data, loading } = useData('universities');
  const { data: programs } = useData('programs');
  const f = useFilters(['type', 'region']);
  const all = data || [];

  const list = all.filter(u =>
    matches(`${u.name} ${u.city} ${u.strengths.join(' ')}`, f.query) &&
    (!f.values.type || u.type === f.values.type) &&
    (!f.values.region || u.region === f.values.region)
  );
  const countFor = id => (programs || []).filter(p => p.universityId === id).length;

  return (
    <>
      <PageHeader eyebrow="Universities" title="Universities & schools in France">
        Public universities, engineering schools, grandes écoles and business schools that welcome international students.
      </PageHeader>
      <div className="container-x">
        <FilterBar {...f} placeholder="Search by name, city or subject…" count={list.length}
          filters={[
            { key: 'type', label: 'Type', options: unique(all.map(u => u.type)) },
            { key: 'region', label: 'Region', options: unique(all.map(u => u.region)) }
          ]} />
        {loading ? <Loader /> : list.length === 0 ? <EmptyState text="No universities match your search." /> : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map(u => (
              <article key={u.id} className="card flex flex-col p-5">
                <span className="chip-orange self-start">{u.type}</span>
                <h3 className="mt-3 text-base font-bold leading-snug">{u.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500"><Pin width={14} height={14} />{u.city}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{u.strengths.map(s => <span key={s} className="chip bg-slate-100 text-slate-600">{s}</span>)}</div>
                <p className="mt-3 text-sm"><span className="font-semibold text-navy-900">In English: </span>{u.english}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <a href={u.website} target="_blank" rel="noreferrer" className="btn-navy px-4 py-2">Website <External width={15} height={15} /></a>
                  {countFor(u.id) > 0 && (
                    <Link to={`/programs?q=${encodeURIComponent(u.name)}`} className="btn-ghost px-4 py-2">{countFor(u.id)} program{countFor(u.id) > 1 ? 's' : ''}</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
