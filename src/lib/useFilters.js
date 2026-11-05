import { useSearchParams } from 'react-router-dom';

// Keeps search text + filters in the URL, so results can be shared as a link.
export function useFilters(keys) {
  const [params, setParams] = useSearchParams();
  const update = (key, value) => {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true });
  };
  const values = Object.fromEntries(keys.map(k => [k, params.get(k) || '']));
  return { query: params.get('q') || '', setQuery: v => update('q', v), values, setValue: update };
}

export const matches = (text, query) =>
  !query || text.toLowerCase().includes(query.trim().toLowerCase());

export const unique = list => [...new Set(list.filter(Boolean))].sort();
