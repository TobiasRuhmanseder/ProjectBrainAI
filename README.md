# ProjectBrain AI

Multi-tenant project management with AI-assisted knowledge (work in progress).  
Stack: **Ruby on Rails**, **Inertia.js**, **React**, **Vite**, **PostgreSQL**, **SCSS** (CSS Modules + design tokens).

## Requirements

- **Ruby** 3.4.x (see [`.ruby-version`](.ruby-version))
- **Node.js** (see [`.node-version`](.node-version)) + **Yarn** (frontend)
- **Docker** + Docker Compose (PostgreSQL in development)

## Quick start

1. **Clone** the repository and `cd` into the project directory.

2. **Start PostgreSQL** (as defined in [`compose.yaml`](compose.yaml)):

   ```bash
   docker compose up -d
   ```

3. **Dependencies & database** (idempotent):

   ```bash
   bin/setup
   ```

   To skip starting the dev server:

   ```bash
   bin/setup --skip-server
   ```

   Rough manual equivalent: `bundle install`, `yarn install`, `bin/rails db:prepare`.

4. **Development servers** (Rails + Vite):

   ```bash
   bin/dev
   ```

   App: [http://localhost:3000](http://localhost:3000) (Vite port in [`config/vite.json`](config/vite.json), typically 3036).

## Configuration

- **Database:** development user, password, and database name match `compose.yaml` and [`config/database.yml`](config/database.yml) (`projectbrain` / `projectbrain` / `projectbrain_development`).
- **`config/master.key`:** **not** committed to Git (see [`.gitignore`](.gitignore)). On a new machine, copy the file from your team’s secret store or recreate credentials with `bin/rails credentials:edit` per the Rails docs.

## Tests

```bash
bin/rails test
```

TypeScript check:

```bash
yarn run check
```

## Project layout (short)

| Area | Path |
|------|------|
| Rails controllers | `app/controllers/` |
| Inertia + React pages | `app/javascript/pages/` |
| Components & styles | `app/javascript/components/*.tsx`, `*.module.scss` |
| Global styles / theme (`--pb-*`) | `app/javascript/entrypoints/application.scss`, `app/javascript/styles/_theme.scss` |
| Plans & status | `docs/` (e.g. [`docs/step-status.md`](docs/step-status.md), [`docs/plan-auth-tenancy.md`](docs/plan-auth-tenancy.md)) |

## License

Not specified yet.
