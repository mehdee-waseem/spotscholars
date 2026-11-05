import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV, LINKS } from '../lib/links';
import { Menu, Close, WhatsApp } from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (n) => ({ isActive }) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition ${
      isActive || (n.match && pathname.startsWith(n.match)) ? 'bg-navy text-white' : 'text-navy-800 hover:bg-navy-50'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label="SpotScholars home">
          <img src="/logo-mark.png" alt="" className="h-10 w-10" />
          <span className="font-display text-lg font-extrabold tracking-tight text-navy">
            SPOT<span className="text-orange">SCHOLARS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map(n => (
            <NavLink key={n.to} to={n.to} className={linkClass(n)}>{n.label}</NavLink>
          ))}
        </nav>

        <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn hidden bg-[#25D366] text-white hover:bg-[#1ebe5a] lg:inline-flex">
          <WhatsApp width={18} height={18} /> Join community
        </a>

        <button onClick={() => setOpen(o => !o)} className="rounded-lg p-2 text-navy lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            <NavLink to="/" end className={linkClass({})}>Home</NavLink>
            {NAV.map(n => <NavLink key={n.to} to={n.to} className={linkClass(n)}>{n.label}</NavLink>)}
          </div>
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn mt-4 w-full bg-[#25D366] text-white">
            <WhatsApp width={18} height={18} /> Join WhatsApp community
          </a>
        </nav>
      )}
    </header>
  );
}
