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
