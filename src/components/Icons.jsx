const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
const make = paths => props => <svg {...base} {...props}>{paths}</svg>;

export const Search = make(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>);
export const Arrow = make(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const External = make(<><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>);
export const Cap = make(<><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>);
export const Book = make(<><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /></>);
export const Building = make(<><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></>);
export const Passport = make(<><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="10" r="3" /><path d="M9 17h6" /></>);
export const Home = make(<><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /></>);
export const Plane = make(<><path d="M2 16l20-6-20-6 4 6z" /><path d="M6 10h8" /></>);
export const Coins = make(<><circle cx="9" cy="9" r="6" /><path d="M15.5 9.5A6 6 0 1 1 9.5 15.5" /></>);
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
export const Menu = make(<><path d="M4 7h16M4 12h16M4 17h16" /></>);
export const Close = make(<><path d="M6 6l12 12M18 6 6 18" /></>);
export const Check = make(<path d="m5 12 5 5 9-10" />);
export const Info = make(<><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>);
export const Clock = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const Pin = make(<><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>);

export const WhatsApp = props => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
  </svg>
);
export const YouTube = props => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3z" />
  </svg>
);
export const Instagram = props => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
