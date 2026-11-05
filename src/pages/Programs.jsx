import { Link, useSearchParams } from 'react-router-dom';
import Catalogue, { useCatalogue, groupCounts } from '../components/Catalogue';
import { FIELD_GROUPS } from '../lib/catalogueMeta';
import PageHeader from '../components/PageHeader';
import FilterBar from '../components/FilterBar';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';
import { useData } from '../lib/api';
import { useFilters, matches, unique } from '../lib/useFilters';
import { External, Pin, Info } from '../components/Icons';

const SEARCH_TOOLS = [
  { name: 'Campus France – programmes taught in English', text: 'About 1,600 programmes fully in English. Start here.', url: 'https://taughtie.campusfrance.org/tiesearch/#/catalog' },
  { name: 'Mon Master', text: 'Every national Master\'s degree in France — some not visible in other catalogues.', url: 'https://www.monmaster.gouv.fr/' },
  { name: 'Network n+i', text: 'Apply once to 50+ engineering schools.', url: 'https://www.nplusi.com/' },
  { name: 'Erasmus Mundus catalogue', text: 'Fully funded joint Master\'s across Europe — filter by France.', url: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en' },
  { name: 'Campus France – programmes in French', text: 'The general catalogue, for French-taught programmes.', url: 'https://cataloguelm.campusfrance.org/' },
  { name: 'Campus France Pakistan', text: 'Études en France platform, procedures and events for Pakistani students.', url: 'https://www.pakistan.campusfrance.org/find-your-program' }
];

function FieldTiles() {
  const { data } = useCatalogue();
  const [params, setParams] = useSearchParams();
  const counts = data ? groupCounts(data.rows) : {};
  const active = params.get('group');
  const pick = id => {
    const next = new URLSearchParams();
    if (id !== active) next.set('group', id);
    setParams(next, { replace: true });
    setTimeout(() => document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {FIELD_GROUPS.map(g => (
        <button key={g.id} onClick={() => pick(g.id)}
          className={`card flex flex-col items-start p-4 text-left transition hover:-translate-y-0.5 hover:border-orange ${active === g.id ? '!border-orange ring-2 ring-orange/30' : ''}`}>
          <span className="text-2xl" aria-hidden>{g.emoji}</span>
          <span className="mt-2 text-sm font-semibold leading-snug text-navy-900">{g.label}</span>
          <span className="mt-1 text-xs text-slate-500">{counts[g.id] ?? '…'} programmes</span>
        </button>
      ))}
    </div>
  );
}

function Picks() {
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
      <div>
        <FilterBar {...f} placeholder="Search our picks by subject, university or city…" count={list.length}
          filters={[
            { key: 'level', label: 'Level', options: ['Bachelor', 'Master', 'PhD', 'Short course'] },
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
                  {p.note && <p className="mt-1.5 text-xs font-medium text-orange-600">{p.note}</p>}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-ghost justify-self-start">Visit <External width={16} height={16} /></a>
              </article>
            ))}
          </div>
        )}

      </div>
    </>
  );
}

export default function Programs() {
  const { data } = useCatalogue();
  const [params, setParams] = useSearchParams();
  const view = params.get('view') === 'picks' ? 'picks' : 'all';
  const setView = v => setParams(v === 'picks' ? { view: 'picks' } : {}, { replace: true });
  const total = data?.complete ? data.rows.length.toLocaleString() : '1,300+';

  return (
    <>
      <PageHeader eyebrow="Programs" title={`${total} programmes taught in English in France`}>
        Every field — business, law, social sciences, arts, health, humanities, engineering and more — from the official Campus France catalogue, plus our hand-picked list with application tips.
      </PageHeader>
      <div className="container-x">
        <FieldTiles />

        <div id="catalogue" className="mt-10 scroll-mt-20 flex flex-wrap gap-2 border-b border-slate-200" role="tablist">
          {[['all', `All programmes (${total})`], ['picks', 'SpotScholars picks (with tips)']].map(([id, label]) => (
            <button key={id} role="tab" aria-selected={view === id} onClick={() => setView(id)}
              className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-semibold transition ${view === id ? 'border-orange text-navy-900' : 'border-transparent text-slate-500 hover:text-navy'}`}>{label}</button>
          ))}
        </div>
        <div className={view === "all" ? "mt-6" : "mt-14"}>{view === "all" ? <Catalogue /> : <Picks />}</div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">More official search engines</h2>
          <p className="mt-2 max-w-2xl">For French-taught programmes, engineering networks and Erasmus Mundus, use these, then come back to check scholarships. More tools on the <Link to="/resources" className="font-medium text-navy underline decoration-orange">Resources page</Link>.</p>
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
