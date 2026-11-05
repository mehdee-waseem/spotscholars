import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { VideoEmbed, VideoCard } from '../components/Video';
import { RESOURCE_GROUPS, FEATURED_VIDEO, VIDEOS, VIDEO_CHANNELS } from '../data/resources';
import { LINKS } from '../lib/links';
import { External, YouTube, WhatsApp } from '../components/Icons';

const TOPICS = ['All', ...new Set(VIDEOS.map(v => v.topic))];

export default function Resources() {
  const [topic, setTopic] = useState('All');
  const videos = VIDEOS.filter(v => topic === 'All' || v.topic === topic);

  return (
    <>
      <PageHeader eyebrow="Resources" title="Every link you need, in one place">
        Official search engines, Campus France Pakistan procedures, visa portals, rankings, housing, PhD portals and video guides.
      </PageHeader>

      <div className="container-x">
        <nav className="card -mt-8 relative z-10 flex gap-2 overflow-x-auto p-3" aria-label="Jump to section">
          <a href="#videos" className="chip shrink-0 !bg-orange !text-white">Videos</a>
          {RESOURCE_GROUPS.map(g => <a key={g.id} href={`#${g.id}`} className="chip shrink-0 hover:!bg-navy hover:!text-white">{g.title.split(' — ')[0]}</a>)}
        </nav>

        <section id="videos" className="mt-12 scroll-mt-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <VideoEmbed id={FEATURED_VIDEO.id} title={FEATURED_VIDEO.title} />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange">Watch first</p>
              <h2 className="mt-2 text-2xl font-bold">{FEATURED_VIDEO.title}</h2>
              <p className="mt-3">{FEATURED_VIDEO.text}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="btn-navy"><YouTube className="text-[#ff3d3d]" /> Subscribe</a>
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost"><WhatsApp className="text-[#25D366]" /> Ask in the community</a>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-xl font-bold">More video guides</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOPICS.map(t => (
              <button key={t} onClick={() => setTopic(t)} className={`chip cursor-pointer ${topic === t ? '!bg-navy !text-white' : ''}`}>{t}</button>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map(v => <VideoCard key={v.id} {...v} />)}
          </div>
          <p className="mt-4 text-sm">
            Channels worth following:{' '}
            {VIDEO_CHANNELS.map((c, i) => (
              <span key={c.url}>{i > 0 && ' · '}<a href={c.url} target="_blank" rel="noreferrer" className="font-medium text-navy underline decoration-orange">{c.name}</a></span>
            ))}
          </p>
        </section>

        {RESOURCE_GROUPS.map(g => (
          <section key={g.id} id={g.id} className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-bold">{g.title}</h2>
            {g.intro && <p className="mt-1 text-slate-500">{g.intro}</p>}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map(i => (
                <a key={i.url + i.name} href={i.url} target="_blank" rel="noreferrer"
                   className={`group flex items-start justify-between gap-3 rounded-xl border p-4 transition hover:-translate-y-0.5 hover:border-orange ${i.highlight ? 'border-orange bg-orange-50' : 'border-slate-200 bg-white'}`}>
                  <span>
                    <span className="block font-semibold leading-snug text-navy-900">{i.name}</span>
                    <span className="mt-0.5 block text-sm text-slate-500">{i.text}</span>
                  </span>
                  <External className="mt-0.5 shrink-0 text-slate-300 group-hover:text-orange" width={16} height={16} />
                </a>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-12 rounded-xl bg-navy-50 p-4 text-sm text-navy-900">
          Know a link that should be here? <a href="/contact" className="font-semibold underline decoration-orange">Send it to us</a> or share it in the{' '}
          <a href={LINKS.facebookGroup} target="_blank" rel="noreferrer" className="font-semibold underline decoration-orange">Facebook group</a>.
        </p>
      </div>
    </>
  );
}
