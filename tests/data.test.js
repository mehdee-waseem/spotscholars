// Content checks. Most changes to this site are edits to src/data/*.json made
// straight on GitHub, so these tests catch the mistakes a typo can cause
// (a broken university link, a wrong filter value, a duplicated id) before they go live.
import { describe, it, expect } from 'vitest';
import scholarships from '../src/data/scholarships.json';
import programs from '../src/data/programs.json';
import universities from '../src/data/universities.json';
import forumMembers from '../src/data/forum-members.json';
import privateInstitutions from '../src/data/private-institutions.json';
import { GUIDES } from '../src/data/guides.js';
import { GUIDE_NAV, NAV, ALERTS, LINKS } from '../src/lib/links.js';

// A few official university pages are still http-only, so both schemes are accepted.
const isUrl = s => typeof s === 'string' && /^https?:\/\/[^\s]+$/.test(s) && URL.canParse(s);
const duplicates = list => list.filter((x, i) => list.indexOf(x) !== i);

describe('scholarships.json', () => {
  it('has unique ids', () => expect(duplicates(scholarships.map(s => s.id))).toEqual([]));

  it.each(scholarships.map(s => [s.id, s]))('%s has the required fields', (_, s) => {
    for (const key of ['id', 'name', 'provider', 'type', 'levels', 'funding', 'description', 'link']) {
      expect(s[key], key).toBeTruthy();
    }
    expect(['Government', 'EU', 'University', 'Search tool']).toContain(s.type);
    expect(s.levels.length).toBeGreaterThan(0);
    for (const level of s.levels) expect(['Bachelor', 'Master', 'PhD']).toContain(level);
    expect(isUrl(s.link), s.link).toBe(true);
  });

  it('has at least three featured scholarships for the home page', () => {
    expect(scholarships.filter(s => s.featured).length).toBeGreaterThanOrEqual(3);
  });

  it('uses real calendar dates in deadlineDate', () => {
    for (const s of scholarships.filter(s => s.deadlineDate)) {
      expect(s.deadlineDate, s.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(s.deadlineDate)), s.id).toBe(false);
    }
  });
});

describe('programs.json', () => {
  const universityIds = new Set(universities.map(u => u.id));

  it('has unique ids', () => expect(duplicates(programs.map(p => p.id))).toEqual([]));

  it('links every programme to a university that exists', () => {
    const broken = programs.filter(p => !universityIds.has(p.universityId)).map(p => `${p.id} → ${p.universityId}`);
    expect(broken).toEqual([]);
  });

  it('gives every programme a title, level, field and official link', () => {
    for (const p of programs) {
      expect(p.title, p.id).toBeTruthy();
      expect(['Bachelor', 'Master', 'PhD', 'Short course'], p.id).toContain(p.level);
      expect(p.field, p.id).toBeTruthy();
      expect(isUrl(p.link), `${p.id}: ${p.link}`).toBe(true);
    }
  });
});

describe('universities.json', () => {
  it('has unique ids', () => expect(duplicates(universities.map(u => u.id))).toEqual([]));

  it('gives every university a name, city, type and website', () => {
    for (const u of universities) {
      expect(u.name, u.id).toBeTruthy();
      expect(u.city, u.id).toBeTruthy();
      expect(u.type, u.id).toBeTruthy();
      expect(isUrl(u.website), `${u.id}: ${u.website}`).toBe(true);
    }
  });
});

describe('institution lists', () => {
  it('has the full Campus France Forum directory', () => {
    expect(forumMembers.length).toBeGreaterThanOrEqual(300);
    for (const m of forumMembers) expect(m.name).toBeTruthy();
  });

  it('lists private institutions without duplicates', () => {
    expect(Array.isArray(privateInstitutions.private)).toBe(true);
    expect(duplicates(privateInstitutions.private)).toEqual([]);
  });
});

describe('guides and navigation', () => {
  it('has a guide behind every guide menu entry', () => {
    for (const { slug } of GUIDE_NAV) expect(GUIDES[slug], slug).toBeDefined();
  });

  it('gives every menu entry a path and a label', () => {
    for (const item of NAV) {
      expect(item.to).toMatch(/^\//);
      expect(item.label).toBeTruthy();
    }
  });

  it('uses valid dates and internal links in alerts', () => {
    for (const a of ALERTS) {
      expect(a.until).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(a.to).toMatch(/^\//);
      expect(a.text.length).toBeGreaterThan(10);
    }
  });

  it('uses a valid URL for every social link', () => {
    for (const [name, url] of Object.entries(LINKS)) {
      if (name === 'email') expect(url).toMatch(/@/);
      else expect(isUrl(url), name).toBe(true);
    }
  });
});
