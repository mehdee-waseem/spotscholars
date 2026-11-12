# CLAUDE.md — working notes for AI agents on SpotScholars

Read this before changing anything. It is the project's memory for Claude Code (and any other agent: `AGENTS.md` points here).

## What this project is

SpotScholars is a free website for international students (mostly from Pakistan and South Asia) who want to study in France. It gathers scholarships, English-taught programmes, universities and step-by-step guides (Campus France procedure, visa, costs, housing, arrival) in one place, and always links to the official source.

- Live: https://spotscholars.netlify.app
- Repo: https://github.com/mehdee-waseem/spotscholars
- Owner: the SpotScholars community (WhatsApp / YouTube / Instagram), run by students.

## Stack

- React 18 + Vite 5 + Tailwind CSS 3, React Router 6 (single-page app)
- Netlify: static hosting + Netlify Functions in `netlify/functions/` served at `/api/*`
- Data: JSON files in `src/data/` (default). Optional Supabase (`supabase/schema.sql`) if `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are set.
- Campus France "Taught in English" catalogue: `scripts/fetch-catalogue.mjs` runs as `prebuild` and writes `public/catalogue.json`.
- Tests: Vitest (`tests/`). Node 20+.

## Commands

```bash
npm install            # once
npm run dev            # http://localhost:5173 — uses the bundled JSON
npm run dev:netlify    # also runs /api/* (needs: npm i -g netlify-cli)
npm test               # whole test suite, must pass before any merge
npm run build          # production build in dist/ (fetches the catalogue first)
npx vite build         # build without re-downloading the catalogue
```

Docker: `docker compose up web` (production build on http://localhost:8080) or `docker compose up dev` (Vite dev server on http://localhost:5173).

## Working rules

- **Git flow.** `main` is production: every push to `main` deploys to Netlify automatically. `develop` is integration. Each change goes on a `feature/<name>` (or `fix/<name>`, `docs/<name>`) branch created from `develop`, and is merged into `develop` with `--no-ff` after review. `develop` is merged into `main` only for a release.
- **Conventional Commits.** `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`. One logical change per commit.
- **Plan first.** For any feature: explain the plan and the files you will touch, then wait for approval. Don't add anything that is not in the acceptance criteria.
- **Tests with every change.** New behaviour comes with tests (normal cases, edge cases, errors). Run the full suite, not only the new tests. If something fails, explain the cause before fixing it. Never change a test just to make it pass.
- **Secrets.** Never write keys in code. `.env` is git-ignored; `.env.example` lists the variables. The Supabase *service* key is server-side only (Netlify Functions), never in `src/`.
- **Development environment** is the DevContainer in `.devcontainer/`. The app ships as a Docker image too (`Dockerfile`), but production is Netlify.
- Show git commands before running them; never push to `main` or force-push without the owner's explicit OK.

## Content rules (most changes are content)

- All content is in `src/data/`. Field reference: `docs/CONTENT.md`.
- `programs.json` → `universityId` must exist in `universities.json` (tests check this).
- `scholarships.json` → `type` is one of `Government`, `EU`, `University`, `Search tool`; `levels` from `Bachelor`, `Master`, `PhD`; the first three with `featured: true` show on the home page.
- Every item links to an **official** source (`https://`). The site is a guide, not an authority: fees, deadlines and rules change every year.
- Time-sensitive banners live in `ALERTS` in `src/lib/links.js` and disappear after `until`.
- Write for a student reading on a phone in a second language: short sentences, plain words, concrete numbers with their date.

## Design

- Navy `#1f299c`, orange `#ff851b` (from the logo), defined in `tailwind.config.js`. Fonts: Sora (headings), Plus Jakarta Sans (text).
- Mobile-first. Filters live in the URL so a filtered list can be shared as a link.

## Where things are

| Need to… | Look in |
| --- | --- |
| Add a page / route | `src/App.jsx`, `src/pages/` |
| Change the menu or social links | `src/lib/links.js` |
| Change how data is fetched | `src/lib/api.js` (API first, JSON fallback) |
| Change the API | `netlify/functions/` (+ `_shared.js`) |
| Catalogue labels (fields, levels, regions) | `src/lib/catalogueMeta.js` |
| Deploy steps | `docs/DEPLOY.md` |
