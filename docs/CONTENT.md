# Updating the content

All content lives in `src/data/`. You can edit these files directly on github.com (open the file → pencil icon → *Commit changes*). Netlify redeploys automatically.

JSON rules: every item is in `{ }`, items are separated by commas, text is in double quotes, and there is **no comma after the last item**. If the build fails after an edit, it's almost always a missing or extra comma.

## Add a scholarship — `src/data/scholarships.json`

```json
{
  "id": "unique-short-id",
  "name": "Name of the scholarship",
  "provider": "Who gives it",
  "type": "Government",
  "levels": ["Master", "PhD"],
  "funding": "Fully funded",
  "amount": "What the student gets",
  "deadline": "When to apply",
  "countries": "Who can apply",
  "description": "Two or three sentences.",
  "tips": "Your insider tip (optional)",
  "link": "https://official-page",
  "featured": false
}
```

- `type` must be one of: `Government`, `EU`, `University`, `Search tool` (these power the filter).
- `levels` can include `Bachelor`, `Master`, `PhD`.
- `featured: true` shows it on the home page (the first three featured ones are shown).

## Add a programme — `src/data/programs.json`

```json
{
  "id": "unique-short-id",
  "title": "Master in …",
  "universityId": "uga",
  "level": "Master",
  "field": "Computer science",
  "language": "English",
  "duration": "2 years",
  "route": "Direct application",
  "link": "https://programme-page"
}
```

- `universityId` must match an `id` in `universities.json` — that's how the programme shows its university and city.
- Reuse existing `field` names where possible so the filter stays tidy (e.g. `Computer science`, `Data science & AI`, `Cybersecurity`, `Engineering`, `Economics`, `Business & management`).
- `route`: `Études en France`, `Direct application`, `Erasmus Mundus application`, etc.

## Add a university — `src/data/universities.json`

```json
{
  "id": "short-id",
  "name": "Université …",
  "city": "City",
  "region": "Region",
  "type": "Public university",
  "strengths": ["Subject 1", "Subject 2"],
  "english": "Some Master's",
  "website": "https://…"
}
```

`type`: `Public university`, `Engineering school`, `Grande école` or `Business school`.

## Edit a guide — `src/data/guides.js`

Each guide has sections, and each section has blocks:

```js
{ p: 'A paragraph' }
{ list: ['bullet one', 'bullet two'] }
{ steps: ['numbered step one', 'step two'] }
{ note: 'A highlighted tip box' }
```

To add a new guide, add an entry to `GUIDES` in `guides.js` and to `GUIDE_NAV` in `src/lib/links.js` — it becomes `/guide/<slug>`.

## Yearly checklist (every September)

- [ ] Eiffel deadline and allowance for the new round
- [ ] Erasmus Mundus deadlines
- [ ] Tuition fees for non-EU students
- [ ] Visa validation and residence permit fees
- [ ] Remove programmes that have closed

## Links & videos — `src/data/resources.js`

- `RESOURCE_GROUPS`: each group has `title`, optional `intro` and `items` (`name`, `text`, `url`, optional `highlight: true`). Add a link by copying one item.
- `FEATURED_VIDEO`: the big video on the home and Resources pages. Change `id` to the part after `watch?v=` in the YouTube link.
- `VIDEOS`: smaller video cards. `topic` creates the filter buttons.

## Deadline banner — `src/lib/links.js` → `ALERTS`

```js
{ until: '2027-01-08', text: 'Eiffel nominations close soon — talk to your university now.', to: '/scholarships?q=eiffel', cta: 'Read more' }
```

The orange banner shows a countdown on the home page and disappears automatically after the `until` date.

## Institution directory — `src/data/forum-members.json`

The full Campus France Forum list (369 institutions, October 2026), shown at the bottom of the Universities page. Each entry: `name`, `city`, `category`. Replace the file when Campus France publishes a new list.
