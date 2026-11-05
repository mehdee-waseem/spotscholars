// Copies the JSON data in src/data into Supabase.
// Usage: SUPABASE_URL=... SUPABASE_SERVICE_KEY=... node scripts/seed-supabase.mjs
import { readFile } from 'node:fs/promises';
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_KEY first.');
  process.exit(1);
}
const db = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const read = async f => JSON.parse(await readFile(new URL(`../src/data/${f}.json`, import.meta.url)));

for (const table of ['universities', 'programs', 'scholarships']) {
  const rows = await read(table);
  const { error } = await db.from(table).upsert(rows);
  console.log(error ? `✗ ${table}: ${error.message}` : `✓ ${table}: ${rows.length} rows`);
}
