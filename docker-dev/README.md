# Local dev stack (MariaDB + PHP API)

Spins up a local copy of the DB + API so you can test changes without touching
the live michadasis.com database. This does NOT run your Next.js site — run
that natively with `npm run dev` like normal, it's fast enough on its own.

## First time setup

    docker compose up -d

First startup will auto-create the `skills` and `projects` tables and seed
them from `db-init/01_schema.sql` and `db-init/02_seed.sql`. Only happens
once — if you change those files later, wipe the volume to re-seed:

    docker compose down -v
    docker compose up -d

## What you get

- MariaDB 10.6 (matches your DirectAdmin host) on `localhost:3307`
  (3307, not 3306, so it won't clash with anything else running locally)
- PHP dev server serving `./api` on `http://localhost:8000`
  - `http://localhost:8000/skills.php`
  - `http://localhost:8000/projects.php`

## Pointing your local Next.js site at the local API

Your React components currently fetch from `/api/skills.php` (relative path,
works because on production the PHP files sit next to the built site). For
local dev, either:

1. Temporarily hardcode the fetch URLs to `http://localhost:8000/skills.php`
   while testing, and switch back before building for production, or
2. Use an environment variable, e.g.:

       fetch(`${process.env.NEXT_PUBLIC_API_BASE || ''}/api/skills.php`)

   and set `NEXT_PUBLIC_API_BASE=http://localhost:8000` in `.env.local`
   for dev, leaving it unset in production so it falls back to the relative
   path that already works.

Option 2 is the cleaner long-term fix if you'll be doing this more than once.

## Connecting phpMyAdmin/a DB client locally (optional)

Host: 127.0.0.1, Port: 3307, User: devuser, Pass: devpass, DB: michadas_database

## Editing DB content locally

Anything you change in the containerized DB is throwaway — it only affects
`db_data` volume on your machine, never touches production. To push a schema
or content change to production, you still do it manually in phpMyAdmin on
DirectAdmin, same as before. This stack is for testing, not deploying.

## Shutting down

    docker compose down       # stop, keep data
    docker compose down -v    # stop, wipe data (forces re-seed next start)
