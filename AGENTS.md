# AGENTS.md

Instructions for AI coding agents (Codex, Antigravity, Cursor…) working on this repository.

The full project context, stack, commands and working rules are in **[CLAUDE.md](CLAUDE.md)**. Read it first; the same rules apply to every agent:

- `main` = production (auto-deploys to Netlify), `develop` = integration, one `feature/<name>` branch per change.
- Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`).
- Plan first and wait for approval; stick to the acceptance criteria.
- Run `npm test` (the whole suite) before proposing a merge. Never edit a test just to make it pass.
- No secrets in code: `.env` is ignored, `.env.example` documents the variables.
