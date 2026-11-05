import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FilterBar from '../components/FilterBar';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';
import { useData } from '../lib/api';
import { useFilters, matches, unique } from '../lib/useFilters';
import { External, Pin, Info } from '../components/Icons';

const SEARCH_TOOLS = [
  { name: 'Campus France – programmes taught in English', text: 'The official catalogue of programmes taught fully in English. Start here.', url: 'https://taughtie.campusfrance.org/' },
  { name: 'Erasmus Mundus catalogue', text: 'Fully funded joint Master\'s across Europe — filter by France.', url: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en' },
  { name: 'Campus France Pakistan', text: 'Études en France platform, procedures and events for Pakistani students.', url: 'https://www.pakistan.campusfrance.org/' }
];

export default function Programs() {
  const { data: programs, loading } = useData('programs');
  const { data: unis } = useData('universities');
  const f = useFilters(['level', 'field']);
  const uniById = Object.fromEntries((unis || []).map(u => [u.id, u]));

  const all = (programs || []).map(p => ({ ...p, uni: uniById[p.universityId] }));
  const list = all.filter(p =>
    matches(`${p.title} ${p.field} ${p.uni?.name || ''} ${p.uni?.city || ''}`, f.query) &&
    (!f.values.level || p.level === f.values.level) &&
    (!f.values.field || p.field === f.values.field)
  );

  return (
    <>
      <PageHeader eyebrow="Programs" title="English-taught programs in France">
        You don't need French to study in France. These programmes are taught in English — and many of them are not on the Études en France catalogue.
      </PageHeader>
      <div className="container-x">
        <FilterBar {...f} placeholder="Search by subject, university or city…" count={list.length}
          filters={[
            { key: 'level', label: 'Level', options: ['Bachelor', 'Master', 'PhD'] },
            { key: 'field', label: 'Field', options: unique(all.map(p => p.field)) }
          ]} />

        {loading ? <Loader /> : list.length === 0 ? <EmptyState text="No programmes match your search." /> : (
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            {list.map((p, i) => (
              <article key={p.id} className={`grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center ${i ? 'border-t border-slate-100' : ''}`}>
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="chip-orange">{p.level}</span>
                    <span className="chip">{p.field}</span>
                    <span className="chip bg-slate-100 text-slate-600">{p.duration}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold">{p.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                    {p.uni && <Link to={`/universities?q=${encodeURIComponent(p.uni.name)}`} className="font-medium text-navy hover:text-orange-600">{p.uni.name}</Link>}
                    {p.uni && <span className="inline-flex items-center gap-1"><Pin width={14} height={14} />{p.uni.city}</span>}
                    <span>Apply via: {p.route}</span>
                  </p>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-ghost justify-self-start">Visit <External width={16} height={16} /></a>
              </article>
            ))}
          </div>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Search every English-taught programme</h2>
          <p className="mt-2 max-w-2xl">Our list is a starting point. Use these official search engines to see everything available, then come back to check scholarships.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {SEARCH_TOOLS.map(t => (
              <a key={t.url} href={t.url} target="_blank" rel="noreferrer" className="card group p-6 transition hover:-translate-y-0.5 hover:border-orange">
                <h3 className="flex items-start justify-between gap-2 font-bold">{t.name}<External className="shrink-0 text-slate-400 group-hover:text-orange" width={18} height={18} /></h3>
                <p className="mt-2 text-sm">{t.text}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 flex gap-2 rounded-xl bg-orange-50 p-4 text-sm">
            <Info className="mt-0.5 shrink-0 text-orange-600" width={18} height={18} />
            Programme pages change every year. Always confirm the language of instruction, intake and deadline on the university's own page.
          </p>
        </section>
      </div>
    </>
  );
}
