import local from '../../src/data/universities.json';
import { json, load, filterByQuery } from './_shared.js';

// GET /api/universities?q=paris&type=Engineering%20school
export default async req => {
  const url = new URL(req.url);
  let { data, source } = await load('universities', local);
  const type = url.searchParams.get('type');
  const region = url.searchParams.get('region');
  data = filterByQuery(data, url.searchParams.get('q'), ['name', 'city']);
  if (type) data = data.filter(u => u.type === type);
  if (region) data = data.filter(u => u.region === region);
  return json({ data, count: data.length, source });
};
