// Shared helpers for the API functions.
// Data comes from Supabase when SUPABASE_URL and SUPABASE_SERVICE_KEY are set
// in Netlify's environment variables; otherwise from the JSON files in src/data.
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env;
const supabase = SUPABASE_URL && SUPABASE_SERVICE_KEY ? createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY) : null;

export function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export async function load(table, fallback) {
  if (!supabase) return { data: fallback, source: 'json' };
  const { data, error } = await supabase.from(table).select('*');
  if (error) {
    console.error(`Supabase error on ${table}:`, error.message);
    return { data: fallback, source: 'json' };
  }
  return { data, source: 'supabase' };
}

export function filterByQuery(list, q, fields) {
  if (!q) return list;
  const needle = q.toLowerCase();
  return list.filter(item => fields.some(f => String(item[f] ?? '').toLowerCase().includes(needle)));
}
