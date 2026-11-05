import { Search } from './Icons';

// Generic search + dropdown filters. `filters` = [{ key, label, options }]
export default function FilterBar({ query, setQuery, placeholder, filters, values, setValue, count }) {
  return (
    <div className="card -mt-8 relative z-10 p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input className="input pl-11" value={query} onChange={e => setQuery(e.target.value)} placeholder={placeholder} />
        </label>
        <div className="flex flex-wrap gap-3">
          {filters.map(f => (
            <label key={f.key} className="min-w-[150px] flex-1">
              <span className="sr-only">{f.label}</span>
              <select className="input" value={values[f.key]} onChange={e => setValue(f.key, e.target.value)}>
                <option value="">{f.label}: all</option>
                {f.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>
          ))}
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">{count} result{count === 1 ? '' : 's'}</p>
    </div>
  );
}
