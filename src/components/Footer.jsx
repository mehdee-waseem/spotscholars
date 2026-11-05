import { Link } from 'react-router-dom';
import { NAV, GUIDE_NAV, LINKS } from '../lib/links';
import { WhatsApp, YouTube, Instagram, Mail } from './Icons';

export const socials = [
  { href: LINKS.whatsapp, label: 'WhatsApp', Icon: WhatsApp },
  { href: LINKS.youtube, label: 'YouTube', Icon: YouTube },
  { href: LINKS.instagram, label: 'Instagram', Icon: Instagram },
  { href: `mailto:${LINKS.email}`, label: 'Email', Icon: Mail }
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy-900 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src="/logo-mark.png" alt="" className="h-10 w-10 rounded-lg bg-white p-1" />
            <span className="font-display text-lg font-extrabold text-white">SPOT<span className="text-orange">SCHOLARS</span></span>
          </div>
          <p className="mt-2 text-sm font-medium text-orange">A Voice from North, for All</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Free, honest guidance for international students coming to France — scholarships, English-taught programs, visas and housing in one place.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                 className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-orange">
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.slice(0, 3).map(n => <li key={n.to}><Link to={n.to} className="hover:text-orange">{n.label}</Link></li>)}
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Guides</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {GUIDE_NAV.map(g => <li key={g.slug}><Link to={`/guide/${g.slug}`} className="hover:text-orange">{g.label}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} SpotScholars. Information is a guide only — always confirm deadlines and fees on official websites.
        </p>
      </div>
    </footer>
  );
}
