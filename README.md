# SpotScholars

**A Voice from North, for All** — one place for international students coming to France: scholarships, English-taught programmes, universities, admissions, visa, housing and arrival guides.

Built with React + Vite + Tailwind CSS, served by Netlify, with a small serverless API (Netlify Functions) and an optional Supabase database.

---

## What's inside

| Page | URL | What it does |
| --- | --- | --- |
| Home | `/` | Hero search, the "two roads" admissions explainer, journey steps, top scholarships, FAQ |
| Scholarships | `/scholarships` | Searchable list, filter by type and level |
| Programs | `/programs` | English-taught programmes, filter by level and field, links to official search engines |
| Universities | `/universities` | Curated directory + searchable list of all 369 Campus France Forum institutions |
| Guides | `/guide/pakistan`, `/guide/admissions`, `/guide/costs`, `/guide/visa`, `/guide/housing`, `/guide/arrival` | Step-by-step guides, including the full Campus France Pakistan procedure |
| Resources | `/resources` | 100+ official links in 11 groups, the featured YouTube session and video guides |
| Contact | `/contact` | Contact form (Netlify Forms) and all social links |

Filters are stored in the URL, so a filtered list can be shared as a link (e.g. `/programs?field=Cybersecurity`).

## Project structure

```
spotscholars/
├── netlify/functions/      # Serverless API → /api/*
│   ├── _shared.js          # Supabase-or-JSON loader, helpers
│   ├── scholarships.js     # GET /api/scholarships?q=&level=&type=
│   ├── programs.js         # GET /api/programs?q=&level=&field=
│   ├── universities.js     # GET /api/universities?q=&type=&region=
│   └── health.js           # GET /api/health
├── public/                 # logo-full.png, logo-mark.png, favicon.png, og-image.jpg
├── scripts/seed-supabase.mjs
├── src/
│   ├── components/         # Navbar, Footer, FilterBar, PageHeader, Icons…
│   ├── data/               # ← THE CONTENT: edit these to update the site
│   │   ├── scholarships.json
│   │   ├── programs.json
│   │   ├── universities.json
│   │   └── guides.js
│   ├── lib/                # api.js (data fetching), links.js (social links + menu), useFilters.js
│   ├── pages/              # Home, Scholarships, Programs, Universities, Guide, Contact, NotFound
│   ├── App.jsx             # Routes
│   └── main.jsx
├── supabase/schema.sql     # Optional database tables
├── netlify.toml            # Build, functions and redirects
└── docs/                   # Deploy and content guides
```

## Run it on your computer

Requires Node.js 20 or newer.

```bash
git clone https://github.com/mehdee-waseem/spotscholars.git
cd spotscholars
npm install
npm run dev          # http://localhost:5173 (uses the JSON data directly)
```

To run the API functions locally too: `npm install -g netlify-cli`, then `npm run dev:netlify`.

## Deploy

GitHub → Netlify auto-deploy. Every push to `main` goes live in about a minute. Full steps: [docs/DEPLOY.md](docs/DEPLOY.md).

## Update the content

Edit the files in `src/data/` — directly on GitHub if you like — and commit. See [docs/CONTENT.md](docs/CONTENT.md) for the fields and examples.

## How data flows

```
Browser ──► /api/scholarships ──► Netlify Function ──► Supabase (if configured)
                                                  └─► src/data/*.json (default)
   └── if the API is unreachable, the page loads src/data/*.json directly
```

So the site works with no database at all. Add Supabase later when you want to manage data from a dashboard: [docs/SUPABASE.md](docs/SUPABASE.md).

## Changing links or the menu

Social links (WhatsApp, YouTube, Instagram, Linktree, email) and the navigation menu live in `src/lib/links.js`.

## Brand

- Navy `#1f299c`, Orange `#ff851b` (sampled from the logo) — defined in `tailwind.config.js`
- Fonts: Sora (headings), Plus Jakarta Sans (text)

## Disclaimer

Information is a guide only. Fees, deadlines and rules change; the site always links to the official source.
