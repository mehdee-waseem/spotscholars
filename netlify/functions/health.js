import { json } from './_shared.js';
// GET /api/health — quick check that the API is deployed
export default async () => json({ ok: true, supabase: Boolean(process.env.SUPABASE_URL), time: new Date().toISOString() });
