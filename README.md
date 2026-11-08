# Bill Avgerinos

Personal AI engineering and product portfolio built with React and Vite.

The illustrated design uses reusable SVG artwork, a day/night palette, and
Tailwind CSS compiled by Vite. Dark mode is the default. Content lives in `src/constants.ts`; shared
design tokens and responsive styles live in `src/styles.css`.

## Development

```sh
npm ci
npm run dev
```

`npm run build` generates the site in `dist`.

## Bookshelf

The reading page lives at `/books/`, linked from the Reading card on the home page. Edit `src/books.ts`
to add books with a unique `id`, `title`, `author`, and `status` (`reading`,
`finished`, or `up-next`). Optional fields are `finishedOn` (`YYYY-MM-DD`),
`note`, `coverUrl`, and `url`. Finished books appear newest first, with undated
books at the end. The initial 63 entries come from Bill’s library photos and are
confirmed finished; unknown dates stay blank. `docs/books-photo-inventory.md`
keeps the English/Greek title mapping, photo references, and unresolved details.

`python3 scripts/lookup-book-covers.py` caches missing Open Library thumbnails
in `public/book-covers/` and records matches in `src/data/book-covers.json`.
Review `docs/book-cover-review.json` for unmatched titles. The page falls back
to a title thumbnail when a cover is unavailable. Covers can represent different
editions from the photographed copies.

## Vercel

- Workspace: `BILL-PERSONAL` (`bill-personal-team`)
- Project: `vasilis-avgerinos`
- Production: https://billavg.dev
- Build: `npm run build`; output: `dist`; Node.js: `22.x`

Production is public; preview deployments remain protected by Vercel
Authentication. A custom domain can be configured separately.

To link another checkout and deploy using an authenticated Vercel CLI:

```sh
vercel link --yes --project vasilis-avgerinos --scope bill-personal-team
vercel project inspect vasilis-avgerinos --scope bill-personal-team
vercel deploy --prod --scope bill-personal-team
```

The project is connected to `vaavg13/vaavg13.github.io`. Pushes to `main`
deploy to production, and other branches receive preview deployments.
The existing GitHub Pages deployment remains available during migration.
