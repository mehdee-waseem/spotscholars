export const LINKS = {
  whatsapp: 'https://chat.whatsapp.com/L9TaY99MpQa8Rll62AqvX0',
  youtube: 'https://www.youtube.com/@balteeWaseem',
  youtubeSession: 'https://www.youtube.com/watch?v=H41F_2iFMO8',
  instagram: 'https://www.instagram.com/spotscholars',
  facebookGroup: 'https://www.facebook.com/groups/1608483306030594/',
  linktree: 'https://linktr.ee/spotscholars',
  kaamdhoondo: 'https://kamdhondho.netlify.app/',
  email: 'spotscholars@gmail.com'
};

export const NAV = [
  { to: '/scholarships', label: 'Scholarships' },
  { to: '/programs', label: 'Programs' },
  { to: '/universities', label: 'Universities' },
  { to: '/guide/pakistan', label: 'Guides', match: '/guide' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' }
];

export const GUIDE_NAV = [
  { slug: 'pakistan', label: 'Applying from Pakistan' },
  { slug: 'admissions', label: 'How to apply' },
  { slug: 'costs', label: 'Costs & tuition' },
  { slug: 'visa', label: 'Student visa' },
  { slug: 'housing', label: 'Housing' },
  { slug: 'arrival', label: 'First weeks' }
];

// Time-sensitive alerts on the home page. They hide automatically after `until`.
export const ALERTS = [
  {
    until: '2026-11-18',
    text: 'Études en France and France Excellence Pakistan – Climate Change scholarship close on 18 November 2026.',
    to: '/scholarships?q=climate',
    cta: 'See the scholarship'
  }
];
