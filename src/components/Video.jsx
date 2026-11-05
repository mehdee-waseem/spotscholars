import { useState } from 'react';

// Lightweight YouTube player: shows the thumbnail, loads the real player only on click.
export function VideoEmbed({ id, title }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-card">
      {play ? (
        <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <button onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100" loading="lazy" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-orange text-white shadow-lg transition group-hover:scale-110">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoCard({ id, title, topic }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" className="card group overflow-hidden transition hover:-translate-y-0.5 hover:border-orange">
      <div className="relative aspect-video bg-navy-900">
        <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="" className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">{topic}</span>
      </div>
      <p className="p-3.5 text-sm font-semibold leading-snug text-navy-900 group-hover:text-orange-600">{title}</p>
    </a>
  );
}
