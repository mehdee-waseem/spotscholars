import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../lib/api';
import { ScholarshipCard } from './Scholarships';
import CommunityCTA from '../components/CommunityCTA';
import { VideoEmbed } from '../components/Video';
import { FEATURED_VIDEO } from '../data/resources';
import { ALERTS, LINKS } from '../lib/links';
import { Search, Arrow, Cap, Book, Building, Passport, Home as HomeIcon, Coins, Check, Flag, Briefcase, YouTube, Clock } from '../components/Icons';

const TILES = [
  { to: '/guide/pakistan', title: 'Applying from Pakistan', text: 'Études en France, PKR 30,000 fee, interview, AEG visa', Icon: Flag },
  { to: '/scholarships', title: 'Scholarships', text: 'Eiffel, Erasmus Mundus, university grants', Icon: Cap },
  { to: '/programs', title: 'English programs', text: 'Study in France without French', Icon: Book },
  { to: '/universities', title: 'Universities', text: 'Public, engineering & business schools', Icon: Building },
  { to: '/guide/costs', title: 'Costs & fees', text: 'Tuition, rent and a real monthly budget', Icon: Coins },
  { to: '/guide/visa', title: 'Student visa', text: 'VLS-TS from application to validation', Icon: Passport },
  { to: '/guide/housing', title: 'Housing', text: 'CROUS, Visale, CAF — and avoiding scams', Icon: HomeIcon },
  { to: '/resources', title: 'Resources & videos', text: '100+ official links and video walkthroughs', Icon: YouTube },
  { to: '/universities#all-institutions', title: 'All 369 institutions', text: 'The full Campus France Forum directory', Icon: Search }
];

function Alerts() {
  const today = new Date().toISOString().slice(0, 10);
  const active = ALERTS.filter(a => a.until >= today);
  if (!active.length) return null;
  return active.map(a => {
    const days = Math.ceil((new Date(a.until) - new Date(today)) / 86400000);
    return (
      <div key={a.text} className="bg-orange text-white">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2.5 text-center text-sm">
          <span className="inline-flex items-center gap-1.5 font-semibold"><Clock width={16} height={16} />{days === 0 ? 'Closes today' : `${days} day${days > 1 ? 's' : ''} left`}</span>
          <span>{a.text}</span>
          <Link to={a.to} className="font-semibold underline underline-offset-2">{a.cta} →</Link>
        </div>
      </div>
    );
  });
}

const JOURNEY = [
  { n: 1, title: 'Choose', text: 'Find English-taught programmes and matching scholarships.', to: '/programs' },
  { n: 2, title: 'Apply', text: 'Études en France or direct application — know your road.', to: '/guide/admissions' },
  { n: 3, title: 'Visa', text: 'Campus France interview, then the VLS-TS visa.', to: '/guide/visa' },
  { n: 4, title: 'Housing', text: 'Secure a room before you fly.', to: '/guide/housing' },
  { n: 5, title: 'Arrive', text: 'Validate your visa, bank, health insurance, CAF.', to: '/guide/arrival' }
];

const FAQ = [
  { q: 'Do I need French to study in France?', a: 'No. Hundreds of Master\'s programmes and many Bachelor\'s are taught fully in English. French helps a lot in daily life, so start learning the basics early.' },
  { q: 'Why can\'t I find my programme on Études en France?', a: 'Because many programmes — especially engineering schools, business schools, Erasmus Mundus and English-taught Master\'s — recruit directly. You apply on their website, then do the Campus France "pre-consular" step after admission.' },
  { q: 'How much money do I need?', a: 'Plan for tuition (about €2,900–€3,950 a year at public universities for non-EU students), plus living costs of roughly €700–€1,100 a month outside Paris. The visa requires proof of funds.' },
  { q: 'Can I work while studying?', a: 'Yes, up to 964 hours a year (about 20 hours a week) on a student visa.' },
  { q: 'How many programmes can I apply to on Études en France?', a: 'Up to 7 Master\'s programmes or 3 Bachelor\'s programmes in one application. Your choices lock at the deadline (18 November for 2026–27 in Pakistan).' },
  { q: 'How much does Campus France cost in Pakistan?', a: 'PKR 30,000, non-refundable, paid only after you receive the payment request. French Government scholarship and Erasmus Mundus holders are exempt.' },
  { q: 'How much money do I need to show for the visa?', a: 'The French Consulate in Pakistan asks for at least €877.50 per month, shown with 6 months of bank statements, a sponsor\'s affidavit or a scholarship letter.' }
];

function Hero() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const go = e => { e.preventDefault(); navigate(`/programs${q ? `?q=${encodeURIComponent(q)}` : ''}`); };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,#fff4ea_0,transparent_45%),radial-gradient(circle_at_10%_90%,#eef0fb_0,transparent_40%)]" aria-hidden />
      <div className="container-x relative grid items-center gap-10 py-14 md:grid-cols-[1.25fr_1fr] md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy">
            <span className="h-2 w-2 rounded-full bg-orange" /> Free guide for international students
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Study in France,<br /><span className="text-orange">without the confusion.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Scholarships, English-taught programmes, universities, visa and housing — everything a student from South Asia and beyond needs, in one place.
          </p>
          <form onSubmit={go} className="mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-card sm:flex-row">
            <label className="relative flex-1">
              <span className="sr-only">Search programmes</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Try: data science, robotics, Paris…"
                className="w-full rounded-xl py-3 pl-11 pr-3 text-sm focus:outline-none" />
            </label>
            <button className="btn-primary py-3">Find programs</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            {['English-taught options', 'Scholarship tips', 'Step-by-step visa guide'].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5"><Check className="text-orange" width={16} height={16} />{t}</span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-6 rounded-full bg-orange/15 blur-2xl" aria-hidden />
          <img src="/logo-full.png" alt="SpotScholars — A Voice from North, for All" className="relative w-full mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { data } = useData('scholarships');
  const featured = (data || []).filter(s => s.featured).slice(0, 3);

  return (
    <>
      <Alerts />
      <Hero />

      <section className="container-x mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map(({ to, title, text, Icon }) => (
            <Link key={to} to={to} className="card group flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-orange">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-white transition group-hover:bg-orange"><Icon /></span>
              <span>
                <span className="block font-display font-bold text-navy-900">{title}</span>
                <span className="text-sm text-slate-500">{text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange">The part nobody explains</p>
        <h2 className="mt-2 text-3xl font-extrabold">Two roads into a French university</h2>
        <p className="mt-3 max-w-2xl">Most confusion comes from thinking Études en France lists every programme. It doesn't. Know which road your programme uses.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card border-t-4 border-t-navy p-6">
            <span className="chip">Road 1</span>
            <h3 className="mt-3 text-xl font-bold">Études en France platform</h3>
            <p className="mt-2 text-sm">Mostly public university programmes. One application, several choices, Campus France interview.</p>
            <ol className="mt-4 space-y-2 text-sm">
              {['Apply on the EEF platform', 'Campus France interview', 'University decision on EEF', 'Visa'].map((s, i) => (
                <li key={s} className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-navy-50 text-xs font-bold text-navy">{i + 1}</span>{s}</li>
              ))}
            </ol>
          </div>
          <div className="card border-t-4 border-t-orange p-6">
            <span className="chip-orange">Road 2</span>
            <h3 className="mt-3 text-xl font-bold">Apply directly to the school</h3>
            <p className="mt-2 text-sm">Engineering & business schools, Erasmus Mundus, many English-taught Master's.</p>
            <ol className="mt-4 space-y-2 text-sm">
              {['Apply on the school website', 'Receive offer letter', 'Campus France pre-consular step', 'Visa'].map((s, i) => (
                <li key={s} className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-orange-50 text-xs font-bold text-orange-600">{i + 1}</span>{s}</li>
              ))}
            </ol>
          </div>
        </div>
        <Link to="/guide/admissions" className="btn-navy mt-6">Read the full admissions guide <Arrow width={18} height={18} /></Link>
      </section>

      <section className="mt-20 bg-navy-900 py-16 text-white">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold text-white">Your journey, step by step</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {JOURNEY.map(j => (
              <li key={j.n}>
                <Link to={j.to} className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-orange hover:bg-white/10">
                  <span className="font-display text-3xl font-extrabold text-orange">0{j.n}</span>
                  <span className="mt-2 block font-display text-lg font-bold">{j.title}</span>
                  <span className="mt-1 block text-sm text-navy-100">{j.text}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">The full session</p>
            <h2 className="mt-2 text-3xl font-extrabold">Watch: study in France 2026, start to finish</h2>
            <p className="mt-3">{FEATURED_VIDEO.text}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/resources#videos" className="btn-navy">More video guides <Arrow width={18} height={18} /></Link>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="btn-ghost"><YouTube className="text-[#ff3d3d]" /> YouTube channel</a>
            </div>
          </div>
          <VideoEmbed id={FEATURED_VIDEO.id} title={FEATURED_VIDEO.title} />
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange">Start here</p>
            <h2 className="mt-2 text-3xl font-extrabold">Top scholarships</h2>
          </div>
          <Link to="/scholarships" className="btn-ghost">See all scholarships <Arrow width={18} height={18} /></Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">{featured.map(s => <ScholarshipCard key={s.id} s={s} />)}</div>
      </section>

      <section className="container-x mt-20">
        <h2 className="text-3xl font-extrabold">Questions students ask us</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {FAQ.map(f => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
                {f.q}<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy-50 text-navy transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-x mt-16">
        <a href={LINKS.kaamdhoondo} target="_blank" rel="noreferrer"
           className="card group flex flex-col items-start gap-4 border-2 border-navy-100 p-6 transition hover:border-orange sm:flex-row sm:items-center">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-white group-hover:bg-orange"><Briefcase /></span>
          <span className="flex-1">
            <span className="block font-display text-lg font-bold text-navy-900">Already in Europe? Find an internship on KaamDhoondo</span>
            <span className="text-sm text-slate-500">Our sister platform for European internships in software engineering, IoT security and smart mobility.</span>
          </span>
          <span className="btn-primary">Open KaamDhoondo <Arrow width={18} height={18} /></span>
        </a>
      </section>

      <CommunityCTA />
    </>
  );
}
