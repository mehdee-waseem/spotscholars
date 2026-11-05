# Optional: managing data with Supabase

You don't need this to launch. Use it when you want to add scholarships from a dashboard instead of editing JSON, or let teammates manage data.

1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor → New query**, paste `supabase/schema.sql`, run it.
3. **Project Settings → API**: copy the *Project URL* and the *service_role* key. Keep the service key secret — never put it in frontend code or commit it.
4. Copy your current data into the database from your computer:
   ```bash
   SUPABASE_URL=https://xxxx.supabase.co SUPABASE_SERVICE_KEY=eyJ... node scripts/seed-supabase.mjs
   ```
5. In Netlify: **Site configuration → Environment variables** → add `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` → **Deploys → Trigger deploy**.
6. Open `/api/health` — it should show `"supabase": true`, and `/api/scholarships` should show `"source": "supabase"`.

From then on, edit rows in Supabase's **Table Editor** and the site updates within about five minutes (API responses are cached for 300 seconds).

If Supabase is ever down or misconfigured, the API automatically falls back to the JSON files, so the site stays up.
