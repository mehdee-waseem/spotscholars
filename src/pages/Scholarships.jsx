import PageHeader from '../components/PageHeader';
import FilterBar from '../components/FilterBar';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';
import { useData } from '../lib/api';
import { useFilters, matches } from '../lib/useFilters';
import { External, Clock, Info } from '../components/Icons';

const TYPES = ['Government', 'EU', 'University', 'Search tool'];
const LEVELS = ['Bachelor', 'Master', 'PhD'];

export function ScholarshipCard({ s }) {
  return (
    <article className="card flex flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip-orange">{s.type}</span>
        <span className="chip">{s.funding}</span>
        {s.levels.map(l => <span key={l} className="chip bg-slate-100 text-slate-600">{l}</span>)}
      </div>
      <h3 className="mt-3 text-lg font-bold leading-snug">{s.name}</h3>
      <p className="text-sm text-slate-500">{s.provider}</p>
      <p className="mt-3 text-sm leading-relaxed">{s.description}</p>
      <dl className="mt-4 space-y-2 text-sm">
        <div><dt className="font-semibold text-navy-900">What you get</dt><dd>{s.amount}</dd></div>
        <div className="flex gap-2 rounded-xl bg-navy-50 p-3 text-navy-900">
          <Clock className="mt-0.5 shrink-0 text-navy" width={16} height={16} />
          <dd>{s.deadline}</dd>
        </div>
        {s.tips && (
          <div className="flex gap-2 rounded-xl bg-orange-50 p-3 text-slate-700">
            <Info className="mt-0.5 shrink-0 text-orange-600" width={16} height={16} />
            <dd><span className="font-semibold">Tip: </span>{s.tips}</dd>
          </div>
        )}
      </dl>
      {s.links?.length > 0 && (
        <details className="mt-4 rounded-xl border border-slate-200 p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-navy-900">More links ({s.links.length})</summary>
          <ul className="mt-2 space-y-1.5">
            {s.links.map(l => (
              <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-navy underline decoration-orange/60 hover:text-orange-600">{l.label}<External width={12} height={12} /></a></li>
            ))}
          </ul>
        </details>
      )}
      <a href={s.link} target="_blank" rel="noreferrer" className="btn-navy mt-5 self-start">
        Official page <External width={16} height={16} />
      </a>
    </article>
  );
}

export default function Scholarships() {
  const { data, loading } = useData('scholarships');
  const f = useFilters(['type', 'level']);

  const list = (data || []).filter(s =>
    matches(`${s.name} ${s.provider} ${s.description}`, f.query) &&
    (!f.values.type || s.type === f.values.type) &&
    (!f.values.level || s.levels.includes(f.values.level))
  );

  return (
    <>
      <PageHeader eyebrow="Scholarships" title="Scholarships to study in France">
        Government, EU and university scholarships open to international students — with the tips that actually help you win them.
      </PageHeader>
      <div className="container-x">
        <FilterBar {...f} placeholder="Search scholarships, e.g. Eiffel, Erasmus…" count={list.length}
          filters={[{ key: 'type', label: 'Type', options: TYPES }, { key: 'level', label: 'Level', options: LEVELS }]} />
        {loading ? <Loader /> : list.length === 0 ? <EmptyState text="No scholarships match your search." /> : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">{list.map(s => <ScholarshipCard key={s.id} s={s} />)}</div>
        )}
      </div>
    </>
  );
}
