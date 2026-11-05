import { NavLink, Navigate, useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { GUIDES } from '../data/guides';
import { GUIDE_NAV } from '../lib/links';
import { External, Info, Arrow } from '../components/Icons';

function Block({ b }) {
  if (b.p) return <p>{b.p}</p>;
  if (b.list) return <ul>{b.list.map(i => <li key={i}>{i}</li>)}</ul>;
  if (b.steps) return (
    <ol className="!list-none !pl-0">
      {b.steps.map((s, i) => (
        <li key={s} className="flex gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-white">{i + 1}</span>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
  if (b.note) return (
    <p className="!mb-4 flex gap-3 rounded-xl border-l-4 border-orange bg-orange-50 p-4 text-sm">
      <Info className="mt-0.5 shrink-0 text-orange-600" width={18} height={18} /><span>{b.note}</span>
    </p>
  );
  return null;
}

export default function Guide() {
  const { slug } = useParams();
  const g = GUIDES[slug];
  if (!g) return <Navigate to="/guide/admissions" replace />;
  const idx = GUIDE_NAV.findIndex(n => n.slug === slug);
  const next = GUIDE_NAV[idx + 1];

  return (
    <>
      <PageHeader eyebrow={`Guide · ${g.eyebrow}`} title={g.title}>{g.intro}</PageHeader>
      <div className="container-x grid gap-10 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Your journey</p>
          <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible" aria-label="Guides">
            {GUIDE_NAV.map((n, i) => (
              <NavLink key={n.slug} to={`/guide/${n.slug}`}
                className={({ isActive }) => `flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-navy text-white' : 'text-navy-800 hover:bg-navy-50'}`}>
                <span className="text-xs opacity-60">{i + 1}</span>{n.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <article className="prose-guide max-w-3xl">
          {g.sections.map(s => (
            <section key={s.heading} className="first:[&>h2]:mt-0">
              <h2>{s.heading}</h2>
              {s.blocks.map((b, i) => <Block key={i} b={b} />)}
            </section>
          ))}

          <div className="card mt-10 p-6">
            <h3 className="!mt-0">Official links</h3>
            <ul className="!mb-0 !list-none !pl-0">
              {g.links.map(l => (
                <li key={l.url}><a href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">{l.label}<External width={14} height={14} /></a></li>
              ))}
            </ul>
          </div>

          {next && (
            <Link to={`/guide/${next.slug}`} className="btn-primary mt-8 !no-underline !text-white">
              Next: {next.label} <Arrow width={18} height={18} />
            </Link>
          )}
        </article>
      </div>
    </>
  );
}
