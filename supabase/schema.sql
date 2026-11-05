-- SpotScholars database schema (optional — the site works without it).
-- Run this in Supabase → SQL Editor, then run `node scripts/seed-supabase.mjs`.
-- Column names match the JSON files in src/data so both sources are interchangeable.

create table if not exists universities (
  id text primary key,
  name text not null,
  city text,
  region text,
  type text,
  strengths text[] default '{}',
  english text,
  website text
);

create table if not exists programs (
  id text primary key,
  title text not null,
  "universityId" text references universities(id) on delete set null,
  level text check (level in ('Bachelor', 'Master', 'PhD')),
  field text,
  language text default 'English',
  duration text,
  route text,
  link text
);

create table if not exists scholarships (
  id text primary key,
  name text not null,
  provider text,
  type text,
  levels text[] default '{}',
  funding text,
  amount text,
  deadline text,
  countries text,
  description text,
  tips text,
  link text,
  featured boolean default false
);

-- Public can read; only the service key (used by Netlify Functions) can write.
alter table universities enable row level security;
alter table programs enable row level security;
alter table scholarships enable row level security;
create policy "public read" on universities for select using (true);
create policy "public read" on programs for select using (true);
create policy "public read" on scholarships for select using (true);
