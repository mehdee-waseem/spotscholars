import local from '../../src/data/programs.json';
import { json, load, filterByQuery } from './_shared.js';

// GET /api/programs?q=data&level=Master&field=Cybersecurity
export default async req => {
  const url = new URL(req.url);
  let { data, source } = await load('programs', local);
  const level = url.searchParams.get('level');
  const field = url.searchParams.get('field');
  data = filterByQuery(data, url.searchParams.get('q'), ['title', 'field']);
  if (level) data = data.filter(p => p.level === level);
  if (field) data = data.filter(p => p.field === field);
  return json({ data, count: data.length, source });
};
