import local from '../../src/data/scholarships.json';
import { json, load, filterByQuery } from './_shared.js';

// GET /api/scholarships?q=eiffel&level=Master&type=EU
export default async req => {
  const url = new URL(req.url);
  let { data, source } = await load('scholarships', local);
  const level = url.searchParams.get('level');
  const type = url.searchParams.get('type');
  data = filterByQuery(data, url.searchParams.get('q'), ['name', 'provider', 'description']);
  if (level) data = data.filter(s => s.levels.includes(level));
  if (type) data = data.filter(s => s.type === type);
  return json({ data, count: data.length, source });
};
