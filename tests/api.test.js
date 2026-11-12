// Netlify Functions (/api/*), called the same way Netlify calls them: with a Request.
// No Supabase variables are set in tests, so every function must serve the JSON files.
import { describe, it, expect, beforeAll } from 'vitest';
import scholarships from '../netlify/functions/scholarships.js';
import programs from '../netlify/functions/programs.js';
import universities from '../netlify/functions/universities.js';
import health from '../netlify/functions/health.js';
import { filterByQuery, json } from '../netlify/functions/_shared.js';
import scholarshipData from '../src/data/scholarships.json';
import programData from '../src/data/programs.json';
import universityData from '../src/data/universities.json';

const call = async (fn, query = '') => {
  const res = await fn(new Request(`https://spotscholars.test/api/x${query}`));
  return { res, body: await res.json() };
};

beforeAll(() => {
  delete process.env.SUPABASE_URL;
  delete process.env.SUPABASE_SERVICE_KEY;
});

describe('GET /api/health', () => {
  it('reports ok and that Supabase is off', async () => {
    const { res, body } = await call(health);
    expect(res.status).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.supabase).toBe(false);
    expect(Number.isNaN(Date.parse(body.time))).toBe(false);
  });
});

describe('GET /api/scholarships', () => {
  it('returns every scholarship from the JSON file when no filter is given', async () => {
    const { res, body } = await call(scholarships);
    expect(res.headers.get('content-type')).toBe('application/json');
    expect(body.source).toBe('json');
    expect(body.count).toBe(scholarshipData.length);
    expect(body.data).toHaveLength(scholarshipData.length);
  });

  it('finds the Eiffel scholarship by name, case-insensitively', async () => {
    const { body } = await call(scholarships, '?q=EIFFEL');
    expect(body.count).toBeGreaterThan(0);
    expect(body.data.every(s => /eiffel/i.test(`${s.name} ${s.provider} ${s.description}`))).toBe(true);
  });

  it('filters by level and type together', async () => {
    const { body } = await call(scholarships, '?level=PhD&type=Government');
    expect(body.count).toBeGreaterThan(0);
    for (const s of body.data) {
      expect(s.levels).toContain('PhD');
      expect(s.type).toBe('Government');
    }
  });

  it('returns an empty list, not an error, when nothing matches', async () => {
    const { res, body } = await call(scholarships, '?q=zzz-no-such-scholarship');
    expect(res.status).toBe(200);
    expect(body).toMatchObject({ data: [], count: 0 });
  });

  it('ignores an unknown level instead of failing', async () => {
    const { res, body } = await call(scholarships, '?level=Kindergarten');
    expect(res.status).toBe(200);
    expect(body.count).toBe(0);
  });
});

describe('GET /api/programs', () => {
  it('filters by field', async () => {
    const { body } = await call(programs, '?field=Cybersecurity');
    expect(body.count).toBeGreaterThan(0);
    expect(body.data.every(p => p.field === 'Cybersecurity')).toBe(true);
  });

  it('searches titles and fields', async () => {
    const { body } = await call(programs, '?q=data');
    expect(body.count).toBeGreaterThan(0);
    expect(body.count).toBeLessThan(programData.length);
  });

  it('filters by level', async () => {
    const { body } = await call(programs, '?level=Bachelor');
    expect(body.data.every(p => p.level === 'Bachelor')).toBe(true);
  });
});

describe('GET /api/universities', () => {
  it('finds universities by city', async () => {
    const { body } = await call(universities, '?q=paris');
    expect(body.count).toBeGreaterThan(0);
    expect(body.data.every(u => /paris/i.test(`${u.name} ${u.city}`))).toBe(true);
  });

  it('filters by type and region', async () => {
    const { body } = await call(universities, `?type=${encodeURIComponent('Engineering school')}`);
    expect(body.count).toBeGreaterThan(0);
    expect(body.data.every(u => u.type === 'Engineering school')).toBe(true);

    const region = universityData[0].region;
    const byRegion = await call(universities, `?region=${encodeURIComponent(region)}`);
    expect(byRegion.body.data.every(u => u.region === region)).toBe(true);
  });
});

describe('shared helpers', () => {
  it('filterByQuery returns the list unchanged for an empty query', () => {
    const list = [{ a: 'x' }];
    expect(filterByQuery(list, '', ['a'])).toBe(list);
    expect(filterByQuery(list, null, ['a'])).toBe(list);
  });

  it('filterByQuery copes with missing fields', () => {
    const list = [{ name: 'Eiffel' }, { name: null }, {}];
    expect(filterByQuery(list, 'eif', ['name', 'provider'])).toEqual([{ name: 'Eiffel' }]);
  });

  it('json() sets JSON, cache and CORS headers', async () => {
    const res = json({ hello: 'world' }, 201);
    expect(res.status).toBe(201);
    expect(res.headers.get('cache-control')).toBe('public, max-age=300');
    expect(res.headers.get('access-control-allow-origin')).toBe('*');
    expect(await res.json()).toEqual({ hello: 'world' });
  });
});
