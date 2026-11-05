// Fetches data from the Netlify Functions API (/api/*).
// If the API isn't reachable (e.g. plain `npm run dev` without Netlify),
// it falls back to the bundled JSON so the site always works.
import { useEffect, useState } from 'react';

const fallbacks = {
  scholarships: () => import('../data/scholarships.json'),
  programs: () => import('../data/programs.json'),
  universities: () => import('../data/universities.json')
};

const cache = {};

export async function getData(name) {
  if (cache[name]) return cache[name];
  try {
    const res = await fetch(`/api/${name}`, { headers: { Accept: 'application/json' } });
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) throw new Error('API unavailable');
    const json = await res.json();
    cache[name] = json.data;
  } catch {
    cache[name] = (await fallbacks[name]()).default;
  }
  return cache[name];
}

export function useData(name) {
  const [state, setState] = useState({ data: cache[name] || null, loading: !cache[name] });
  useEffect(() => {
    let alive = true;
    getData(name).then(data => alive && setState({ data, loading: false }));
    return () => { alive = false; };
  }, [name]);
  return state;
}
