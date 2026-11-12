// The Campus France catalogue file (public/catalogue.json) is rewritten by
// scripts/fetch-catalogue.mjs before every build. These tests check that the saved
// file still has the compact shape the Programs page decodes, and that the labels
// used for filters cover the ids in the data.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { FIELDS, FIELD_GROUPS, LEVELS, LEVEL_GROUPS, REGIONS, campusFranceUrl } from '../src/lib/catalogueMeta.js';
import { groupCounts } from '../src/components/Catalogue.jsx';

const catalogue = JSON.parse(readFileSync(new URL('../public/catalogue.json', import.meta.url), 'utf8'));

describe('public/catalogue.json', () => {
  // The repository ships a small sample (complete: false). The build replaces it with
  // the full catalogue (complete: true, ~1,300 rows); if that download fails, the
  // Programs page loads the live list from /api/catalogue instead.
  it('is either the sample or the full catalogue, and its count matches its rows', () => {
    expect(typeof catalogue.complete).toBe('boolean');
    expect(catalogue.count).toBe(catalogue.rows.length);
    expect(catalogue.rows.length).toBeGreaterThan(catalogue.complete ? 500 : 0);
    expect(catalogue.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('has 11 columns per row and a valid institution index', () => {
    for (const row of catalogue.rows) {
      expect(row).toHaveLength(11);
      const [id, title, inst] = row;
      expect(id).toBeTruthy();
      expect(title).toBeTruthy();
      expect(catalogue.insts[inst], `row ${id}`).toBeDefined();
    }
  });

  it('only uses field and region ids that have a label', () => {
    const unknownFields = new Set();
    const unknownRegions = new Set();
    for (const row of catalogue.rows) {
      String(row[4]).split('.').filter(Boolean).map(Number).forEach(f => { if (!FIELDS[f]) unknownFields.add(f); });
    }
    for (const [, , region] of catalogue.insts) if (region && !REGIONS[region]) unknownRegions.add(region);
    expect([...unknownFields]).toEqual([]);
    expect([...unknownRegions]).toEqual([]);
  });
});

describe('catalogue labels', () => {
  it('puts every field in exactly one group tile', () => {
    const grouped = FIELD_GROUPS.flatMap(g => g.fields);
    expect(grouped.sort((a, b) => a - b)).toEqual(Object.keys(FIELDS).map(Number));
  });

  it('only groups levels that have a label', () => {
    for (const g of LEVEL_GROUPS) for (const l of g.levels) expect(LEVELS[l], `level ${l}`).toBeDefined();
  });

  it('builds the official Campus France link for a programme', () => {
    expect(campusFranceUrl(1234)).toBe('https://taughtie.campusfrance.org/tiesearch/#/program/1234');
  });

  it('counts programmes per field group (a programme can count in several groups)', () => {
    const rows = [{ fields: [9] }, { fields: [9, 11] }, { fields: [7] }, { fields: [] }];
    const counts = groupCounts(rows);
    expect(counts.engineering).toBe(2);
    expect(counts.business).toBe(1);
    expect(counts.law).toBe(1);
    expect(counts.health).toBe(0);
  });
});
